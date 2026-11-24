import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0D17] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-6xl font-black text-[#F9E900] font-heading mb-4">404</h2>
      <p className="text-xl text-gray-300 mb-8">Page Not Found</p>
      <Link
        href="/"
        className="bg-[#F9E900] text-black font-extrabold px-6 py-3 rounded-full hover:bg-[#ffe500] transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
