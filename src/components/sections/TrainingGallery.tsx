"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  Scissors,
  Palette,
  Sparkles,
  Smile,
  Brush,
  Camera,
  GraduationCap,
  ImageIcon,
  Calendar,
  ArrowRight,
} from "lucide-react";

interface TrainingGalleryProps {
  onViewAll?: () => void;
  onJoinNextBatch?: () => void;
}

export default function TrainingGallery({ onViewAll, onJoinNextBatch }: TrainingGalleryProps) {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Work", icon: LayoutGrid },
    { id: "haircut", label: "Haircut & Styling", icon: Scissors },
    { id: "color", label: "Hair Color", icon: Palette },
    { id: "nails", label: "Nail Care", icon: Sparkles },
    { id: "skin", label: "Skin & Facials", icon: Smile },
    { id: "makeup", label: "Makeup", icon: Brush },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Top Right Giant Sweeping Ribbon Waves */}
      <div className="absolute top-0 right-0 w-3/5 sm:w-2/5 max-w-[500px] h-32 pointer-events-none z-0">
        <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 0 0 C 140 20, 260 70, 400 120 L 400 80 C 280 40, 160 10, 40 0 Z" fill="#F9E900" />
          <path d="M 50 0 C 170 25, 290 75, 400 105 L 400 50 C 290 25, 180 5, 90 0 Z" fill="#0875BD" />
          <path d="M 100 0 C 200 28, 310 75, 400 85 L 400 0 L 100 0 Z" fill="#D21F2B" />
        </svg>
      </div>

      {/* Bottom Left Sweeping Ribbon Accent */}
      <div className="absolute bottom-0 left-0 w-52 sm:w-72 h-24 pointer-events-none z-0">
        <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 0 80 C 60 75, 120 50, 180 20 L 160 0 C 100 30, 40 60, 0 65 Z" fill="#F9E900" />
          <path d="M 0 80 C 50 78, 100 58, 150 35 L 130 18 C 80 45, 30 70, 0 74 Z" fill="#0875BD" />
          <path d="M 0 80 C 40 79, 80 68, 120 50 L 100 35 C 60 55, 20 75, 0 78 Z" fill="#D21F2B" />
        </svg>
      </div>

      {/* Bottom Right Giant Sweeping Ribbon Waves */}
      <div className="absolute bottom-0 right-0 w-3/5 sm:w-2/5 max-w-[550px] h-32 sm:h-44 pointer-events-none z-0">
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 0 140 C 120 120, 240 60, 400 10 L 400 45 C 260 95, 140 135, 30 140 Z" fill="#F9E900" />
          <path d="M 40 140 C 150 128, 270 80, 400 45 L 400 85 C 280 115, 170 138, 80 140 Z" fill="#0875BD" />
          <path d="M 90 140 C 180 132, 290 98, 400 85 L 400 140 L 90 140 Z" fill="#D21F2B" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          {/* Top Tag: — STUDENT WORK & GALLERY — */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-[#D21F2B] rounded-full"></span>
            <span className="text-xs font-black uppercase tracking-widest text-[#D21F2B]">
              STUDENT WORK &amp; GALLERY
            </span>
            <span className="w-8 h-0.5 bg-[#D21F2B] rounded-full"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight font-heading text-gray-900 leading-tight">
            Real Training. Real Skills.{" "}
            <span className="text-[#D21F2B] relative inline-block">
              Real Results.
              {/* Yellow Underline Brush Accent */}
              <svg
                viewBox="0 0 200 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1 left-0 w-full h-2 text-[#F9E900] pointer-events-none"
              >
                <path d="M 5 10 C 60 4, 140 4, 195 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed pt-1">
            Explore the amazing work from our students — from hair, color, and cutting to styling, nail care, and more.
          </p>
        </div>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#F9E900] text-black shadow-md scale-105"
                    : "bg-white border border-gray-200/80 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= GALLERY ASYMMETRICAL GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* Left Column (Span 3): Large Tall Card (Student Curling Client Hair) */}
          <div className="lg:col-span-3">
            <div className="relative w-full h-[360px] lg:h-full min-h-[360px] rounded-[24px] overflow-hidden shadow-card border border-gray-100 group">
              <Image
                src="/images/gallery-1.jpg"
                alt="Student practicing curling hair on client"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white font-bold">Live Salon Practicum</span>
              </div>
            </div>
          </div>

          {/* Middle Column (Span 6): 2 Rows of Curated Work */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 justify-between">
            
            {/* Top Row: 3 Medium Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 h-44 sm:h-48">
              {/* Item 2: Balayage Waves */}
              <div className="relative rounded-[20px] overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Golden balayage waves"
                  fill
                  sizes="200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Item 3: Nail Art */}
              <div className="relative rounded-[20px] overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="French tip manicure floral nails"
                  fill
                  sizes="200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Item 4: Facial Skincare */}
              <div className="relative rounded-[20px] overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                  src="/images/gallery-4.jpg"
                  alt="Facial skincare application"
                  fill
                  sizes="200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Row: 4 Small Cards */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 h-44 sm:h-48">
              {/* Item 5: Bob Haircut */}
              <div className="relative rounded-[20px] overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                  src="/images/gallery-5.jpg"
                  alt="Precision bob haircut"
                  fill
                  sizes="150px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Item 6: Braids */}
              <div className="relative rounded-[20px] overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                  src="/images/gallery-6.jpg"
                  alt="Braided hairstyles"
                  fill
                  sizes="150px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Item 7: Bridal Updo */}
              <div className="relative rounded-[20px] overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                  src="/images/gallery-7.jpg"
                  alt="Formal bridal hair updo"
                  fill
                  sizes="150px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Item 8: Burgundy Curls */}
              <div className="relative rounded-[20px] overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                  src="/images/gallery-8.jpg"
                  alt="Burgundy colored curls"
                  fill
                  sizes="150px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

          {/* Right Column (Span 3): Dark "Student Gallery" Feature Card */}
          <div className="lg:col-span-3">
            <div className="bg-[#0B1021] text-white rounded-[26px] p-6 h-[360px] lg:h-full min-h-[360px] flex flex-col justify-between relative overflow-hidden shadow-xl border border-white/10">
              
              {/* Top-Right Scissors Watermark in dark card */}
              <div className="absolute -top-3 -right-3 w-36 h-36 opacity-10 pointer-events-none rotate-12">
                <Scissors className="w-full h-full text-white stroke-[1.5]" />
              </div>

              {/* Bottom Sweeping Wave Accent on dark card */}
              <div className="absolute -bottom-2 -left-2 w-32 h-16 pointer-events-none z-0">
                <svg viewBox="0 0 100 50" fill="none" className="w-full h-full">
                  <path d="M 0 50 C 30 45, 60 30, 100 10 L 100 30 C 60 45, 30 50, 0 50 Z" fill="#F9E900" />
                  <path d="M 0 50 C 40 48, 70 38, 100 25 L 100 50 L 0 50 Z" fill="#D21F2B" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-3 pt-2">
                <div className="w-12 h-12 rounded-2xl bg-[#F9E900]/15 border border-[#F9E900]/30 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-[#F9E900]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-heading leading-tight text-white">
                  Student <br />
                  <span className="text-[#F9E900]">Gallery</span>
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed font-light max-w-[200px]">
                  A look at the real, hands-on work created by our students during training.
                </p>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-4">
                <button
                  onClick={onViewAll}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F9E900] hover:bg-[#ffe500] text-black font-extrabold py-3 px-5 rounded-full text-xs shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>View Full Gallery</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ================= FLOATING BOTTOM STATS & CTA BAR ================= */}
        <div className="mt-12 sm:mt-14">
          <div className="bg-white rounded-2xl sm:rounded-full border border-gray-100 shadow-xl px-6 sm:px-8 py-3.5 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* 3 Stats Items */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 divide-x divide-gray-100">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#D21F2B] shrink-0">
                  <GraduationCap className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 leading-tight">100+</h4>
                  <p className="text-[11px] text-gray-500 leading-tight">Trained Students</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 pl-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0875BD] shrink-0">
                  <ImageIcon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 leading-tight">300+</h4>
                  <p className="text-[11px] text-gray-500 leading-tight">Student Works</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3 pl-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Scissors className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 leading-tight">Multiple</h4>
                  <p className="text-[11px] text-gray-500 leading-tight">Skill Areas</p>
                </div>
              </div>

            </div>

            {/* Right Action Button: Join Our Next Batch */}
            <div className="shrink-0">
              <button
                onClick={onJoinNextBatch}
                className="inline-flex items-center gap-2 bg-[#0A122A] hover:bg-black text-white font-extrabold px-6 py-3 rounded-full text-xs shadow-md transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#F9E900] stroke-[2.5]" />
                <span>Join Our Next Batch</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
