"use client";

import React from "react";
import Image from "next/image";
import { Scissors, GraduationCap, Award, CheckCircle2, ArrowRight } from "lucide-react";

interface MeetMsTeeProps {
  onLearnMore?: () => void;
  onWatchVideo?: () => void;
}

export default function MeetMsTee({ onLearnMore }: MeetMsTeeProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Top Right Watermark: Stylized Salon Shears / Scissors */}
      <div className="absolute top-6 right-6 sm:right-14 w-52 sm:w-64 h-52 sm:h-64 opacity-[0.09] pointer-events-none rotate-45">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-gray-900">
          <circle cx="28" cy="72" r="14" />
          <circle cx="72" cy="72" r="14" />
          <line x1="38" y1="62" x2="68" y2="20" strokeWidth="4" strokeLinecap="round" />
          <line x1="62" y1="62" x2="32" y2="20" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="46" r="3.5" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom Left Sweeping Ribbon Accent */}
      <div className="absolute bottom-0 left-0 w-44 sm:w-56 h-20 pointer-events-none z-0">
        <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 0 80 C 60 75, 120 50, 180 20 L 160 0 C 100 30, 40 60, 0 65 Z" fill="#F9E900" />
          <path d="M 0 80 C 50 78, 100 58, 150 35 L 130 18 C 80 45, 30 70, 0 74 Z" fill="#0875BD" />
          <path d="M 0 80 C 40 79, 80 68, 120 50 L 100 35 C 60 55, 20 75, 0 78 Z" fill="#D21F2B" />
        </svg>
      </div>

      {/* Bottom Right Giant Sweeping Ribbon Waves (Yellow, Blue, Red) */}
      <div className="absolute bottom-0 right-0 w-3/5 sm:w-2/5 max-w-[550px] h-32 sm:h-44 pointer-events-none z-0">
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Top Yellow Ribbon */}
          <path d="M 0 140 C 120 120, 240 60, 400 10 L 400 45 C 260 95, 140 135, 30 140 Z" fill="#F9E900" />
          {/* Middle Blue Ribbon */}
          <path d="M 40 140 C 150 128, 270 80, 400 45 L 400 85 C 280 115, 170 138, 80 140 Z" fill="#0875BD" />
          {/* Bottom Red Ribbon */}
          <path d="M 90 140 C 180 132, 290 98, 400 85 L 400 140 L 90 140 Z" fill="#D21F2B" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: ABOUT EXODUS TEACHING ================= */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Tag with Red Dash */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#D21F2B] rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-widest text-[#D21F2B]">
                ABOUT EXODUS
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight font-heading leading-[1.1] text-gray-900">
              About <span className="text-[#D21F2B]">EXODUS</span> <br />
              <span className="text-[#0A122A]">Teaching</span>
            </h2>

            {/* Sub-heading */}
            <h4 className="text-sm sm:text-base font-bold text-gray-900 pt-0.5">
              Cosmetology Education &amp; Training
            </h4>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              EXODUS Teaching with Ms. Tee is a hands-on cosmetology training program dedicated to building real skills, boosting confidence, and preparing students for a successful career in the beauty industry.
            </p>

            {/* 3 Feature Badges in horizontal row */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-y border-gray-100 py-3 sm:border-0 sm:py-0">
              
              {/* Item 1: Hands-On Training */}
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#D21F2B] mb-1 shadow-sm">
                  <Scissors className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-900 leading-tight">Hands-On</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">Training</span>
              </div>

              {/* Item 2: State Board Preparation */}
              <div className="flex flex-col items-center text-center border-x border-gray-100 sm:border-0 px-1">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#3B1259] mb-1 shadow-sm">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-900 leading-tight">State Board</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">Preparation</span>
              </div>

              {/* Item 3: Career Development */}
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#D21F2B] mb-1 shadow-sm">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-900 leading-tight">Career</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">Development</span>
              </div>

            </div>

            {/* Action Button */}
            <div className="pt-3 sm:pt-4">
              <button
                onClick={onLearnMore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9E900] hover:bg-[#ffe500] text-black font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Learn More About EXODUS</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

          {/* ================= CENTER COLUMN: MS. TEE STUDIO PORTRAIT ================= */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[290px] sm:max-w-[340px]">
              
              {/* Yellow Top-Left Curved Accent behind the photo */}
              <div className="absolute -top-3 -left-3 w-28 sm:w-32 h-28 sm:h-32 bg-[#F9E900] rounded-tl-[36px] sm:rounded-tl-[44px] rounded-br-2xl z-0 shadow-sm" />

              {/* Blue & Red Bottom-Right Curved Accent */}
              <div className="absolute -bottom-2 -right-2 w-32 sm:w-36 h-16 sm:h-20 pointer-events-none z-20 overflow-hidden">
                <svg viewBox="0 0 150 70" fill="none" className="w-full h-full">
                  <path d="M 0 70 C 40 68, 80 50, 150 20 L 150 50 C 90 65, 50 70, 0 70 Z" fill="#0875BD" />
                  <path d="M 0 70 C 50 69, 90 58, 150 45 L 150 70 L 0 70 Z" fill="#D21F2B" />
                </svg>
              </div>

              {/* The High-Resolution Studio Portrait Card */}
              <div className="relative z-10 w-full h-[360px] sm:h-[440px] rounded-[30px] sm:rounded-[36px] overflow-hidden shadow-2xl bg-black border-4 border-white">
                <Image
                  src="/images/ms-tee-portrait-studio.jpg"
                  alt="Ms. Tee - Cosmetology Educator & Mentor"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: MEET MS. TEE ================= */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Tag: MEET — */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#D21F2B]">
                MEET
              </span>
              <span className="w-14 h-0.5 bg-[#D21F2B] rounded-full"></span>
            </div>

            {/* Heading: Ms. Tee */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight font-heading text-gray-900 leading-none">
              Ms. Tee
            </h2>

            {/* Yellow Pill Badge */}
            <div className="inline-block bg-[#F9E900] text-black text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm">
              Cosmetology Educator &amp; Mentor
            </div>

            {/* Bio Paragraph */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              A passionate cosmetology educator and mentor with real industry experience, dedicated to helping aspiring beauty professionals build skills, pass their State Board exam, and succeed in the beauty industry.
            </p>

            {/* 3 Checklist Items */}
            <div className="space-y-3 pt-2">
              
              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F9E900] flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-black stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-gray-900">
                  Licensed Cosmetology Educator
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F9E900] flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-black stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-gray-900">
                  State Board Exam Expert
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F9E900] flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-black stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-gray-900">
                  Hands-On Training Specialist
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
