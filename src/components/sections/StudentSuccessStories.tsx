"use client";

import React from "react";
import Image from "next/image";
import { Star, GraduationCap, CheckCircle2, Users, ArrowRight } from "lucide-react";

interface StudentSuccessStoriesProps {
  onEnroll?: () => void;
}

export default function StudentSuccessStories({ onEnroll }: StudentSuccessStoriesProps) {
  const testimonials = [
    {
      id: "jasmine",
      name: "Jasmine R.",
      role: "State Board Passer",
      badge: "Licensed Cosmetologist",
      image: "/images/student-jasmine-clean.png",
      quote: (
        <>
          “The hands-on training at EXODUS gave me the confidence and skills I needed to pass my State Board on the{" "}
          <span className="text-[#D21F2B] font-bold">first try!</span>”
        </>
      ),
    },
    {
      id: "maya",
      name: "Maya T.",
      role: "EXODUS Graduate",
      badge: "Salon Professional",
      image: "/images/student-maya-clean.png",
      quote: (
        <>
          “Ms. Tee is an amazing educator! She makes learning easy, practical, and real-world focused.{" "}
          <span className="text-[#D21F2B] font-bold">I highly recommend EXODUS!</span>”
        </>
      ),
    },
    {
      id: "kiara",
      name: "Kiara D.",
      role: "Program Graduate",
      badge: "Working in a Salon",
      image: "/images/student-kiara-clean.png",
      quote: (
        <>
          “EXODUS didn’t just prepare me for the exam, it prepared me for a real career in cosmetology. The support here is{" "}
          <span className="text-[#D21F2B] font-bold">unmatched!</span>”
        </>
      ),
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      
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
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          {/* Top Tag: — STUDENT SUCCESS STORIES — */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-[#D21F2B] rounded-full"></span>
            <span className="text-xs font-black uppercase tracking-widest text-[#D21F2B]">
              STUDENT SUCCESS STORIES
            </span>
            <span className="w-8 h-0.5 bg-[#D21F2B] rounded-full"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black tracking-tight font-heading text-gray-900 leading-tight">
            Real Students.{" "}
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
            Hear from our students who built their skills, passed their State Board, and started successful careers in the beauty industry with EXODUS.
          </p>
        </div>

        {/* ================= 3 TESTIMONIAL CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 border border-gray-100 shadow-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Photo + Rating & Quote */}
              <div className="grid grid-cols-12 gap-3 items-center">
                
                {/* Left: Student Photo with Yellow Circle Behind */}
                <div className="col-span-5 relative w-full h-36 sm:h-48 flex items-end justify-center">
                  {/* Yellow Circle Accent */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#F9E900] z-0 pointer-events-none shadow-[0_0_25px_rgba(249,233,0,0.4)]"></div>

                  {/* Cutout Photo */}
                  <div className="relative z-10 w-full h-full flex items-end justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={341}
                      height={367}
                      priority
                      className="w-auto h-full max-h-[160px] sm:max-h-[190px] object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Right: 5 Stars & Quote */}
                <div className="col-span-7 space-y-2">
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 text-[#F9E900]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#F9E900]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[11px] sm:text-[13px] text-gray-800 leading-relaxed font-normal">
                    {item.quote}
                  </p>
                </div>

              </div>

              {/* Bottom Profile Bar */}
              <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center justify-between gap-2 flex-wrap">
                
                {/* Name & Role with Yellow Icon */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F9E900] flex items-center justify-center text-black font-bold shrink-0 shadow-sm">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[9px] sm:text-[11px] text-gray-500 leading-tight">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Light Red Pill Badge */}
                <div className="inline-flex items-center gap-1 bg-red-50 text-[#D21F2B] border border-red-100/80 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] font-bold shrink-0">
                  <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
                  <span>{item.badge}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
