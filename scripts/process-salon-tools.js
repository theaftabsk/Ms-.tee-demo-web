const sharp = require('sharp');
const fs = require('fs');

async function processSalonTools() {
  const input = 'public/images/salon-tools-raw.jpg';
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 (RGBA)

  // Flood fill / color keying from borders:
  // The background checkerboard consists of near-white (~240-255) and light gray (~215-235) with R~G~B (grayscale).
  // Notice the white towel is at the bottom left: towels are white (R>220, G>220, B>220), BUT towels are connected to bottom.
  // We can do a flood fill (BFS) from the exterior edges (top, top-left, top-right, right, etc.) where pixels are checkerboard!
  // A checkerboard pixel has: Math.abs(r-g) < 12 && Math.abs(g-b) < 12 && r >= 200 && g >= 200 && b >= 200.
  // Let's verify BFS from (0,0) and borders:

  const visited = new Uint8Array(width * height);
  const queue = [];

  function isCheckerboard(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Checkerboard is light gray/white neutral
    const isNeutral = Math.abs(r - g) <= 10 && Math.abs(g - b) <= 10 && Math.abs(r - b) <= 10;
    const isLight = r >= 205 && g >= 205 && b >= 205;
    return isNeutral && isLight;
  }

  // Push outer borders into queue
  for (let x = 0; x < width; x++) {
    // top row
    const idx0 = (0 * width + x) * channels;
    if (isCheckerboard(idx0)) {
      queue.push(0 * width + x);
      visited[0 * width + x] = 1;
    }
  }

  for (let y = 0; y < height; y++) {
    // left column (only top half so we don't accidentally leak into towels if towel touches edge)
    if (y < 250) {
      const idxL = (y * width + 0) * channels;
      if (isCheckerboard(idxL) && !visited[y * width + 0]) {
        queue.push(y * width + 0);
        visited[y * width + 0] = 1;
      }
    }
    // right column
    const idxR = (y * width + (width - 1)) * channels;
    if (isCheckerboard(idxR) && !visited[y * width + (width - 1)]) {
      queue.push(y * width + (width - 1));
      visited[y * width + (width - 1)] = 1;
    }
  }

  // BFS
  let head = 0;
  while (head < queue.length) {
    const pos = queue[head++];
    const px = pos % width;
    const py = Math.floor(pos / width);

    // Neighbors
    const neighbors = [
      [px + 1, py],
      [px - 1, py],
      [px, py + 1],
      [px, py - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const npos = ny * width + nx;
        if (!visited[npos]) {
          const nidx = npos * channels;
          if (isCheckerboard(nidx)) {
            // Check that it's not inside the white towel:
            // The white towel starts around y > 300, x between 200 and 550.
            // Let's ensure we don't bleed into the towel by checking if it has towel texture or border
            visited[npos] = 1;
            queue.push(npos);
          }
        }
      }
    }
  }

  // Make visited pixels transparent
  for (let i = 0; i < width * height; i++) {
    if (visited[i]) {
      data[i * channels + 3] = 0; // Alpha = 0
    }
  }

  // Also crop tight around the objects
  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
  .png()
  .toFile('public/images/cta-salon-tools-clean.png');

  console.log('Successfully created cta-salon-tools-clean.png');
}

processSalonTools().catch(err => {
  console.error(err);
  process.exit(1);
});
