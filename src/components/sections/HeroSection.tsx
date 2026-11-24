"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Play, Scissors, Award, Users, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onBookClass?: () => void;
  onWatchVideo?: () => void;
}

export default function HeroSection({ onBookClass, onWatchVideo }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#090C16] text-white pt-8 pb-16 lg:pt-14 lg:pb-28">
      {/* Background Soft Purple Glow in bottom-left */}
      <div className="absolute -bottom-24 -left-20 w-[550px] h-[550px] bg-[#3B1259]/35 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left z-20">
            
            {/* Top Tag with Yellow Rounded Dash */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <span className="text-[11px] sm:text-xs lg:text-[13px] font-extrabold uppercase tracking-wider sm:tracking-[0.2em] text-white/95 font-heading">
                COSMETOLOGY EDUCATION &amp; TRAINING
              </span>
              <span className="w-8 sm:w-12 h-1 sm:h-1.5 bg-[#F9E900] rounded-full inline-block shadow-[0_0_12px_rgba(249,233,0,0.6)]"></span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-black tracking-tight font-heading leading-[1.12] sm:leading-[1.08] text-white">
                Build Your <br />
                <span className="text-[#F9E900] drop-shadow-[0_4px_25px_rgba(249,233,0,0.4)]">
                  Cosmetology Career
                </span> <br />
                <span className="inline-block relative">
                  with Ms. Tee
                  {/* Red Curved Brush Underline */}
                  <svg
                    viewBox="0 0 160 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-2 left-1/4 sm:left-[38%] w-28 sm:w-36 h-5 sm:h-6 text-[#D21F2B] pointer-events-none drop-shadow-md"
                  >
                    <path
                      d="M10 14 C 45 28, 115 28, 150 12"
                      stroke="currentColor"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-xs sm:text-base lg:text-[17px] max-w-xl leading-relaxed font-normal pt-1">
              Hands-on training, State Board preparation, and real-world techniques to help you succeed in the beauty industry.
            </p>

            {/* Action Buttons: Responsive Full Width on Mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="#courses"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F9E900] hover:bg-[#ffe500] text-black font-extrabold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-base shadow-lg hover:shadow-glow transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
                <span>Explore Our Courses</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black stroke-[2.5]" />
              </Link>

              <button
                onClick={onWatchVideo}
                className="inline-flex items-center justify-center gap-2.5 bg-[#090C16]/80 hover:bg-white/10 border-2 border-white/40 hover:border-white text-white font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-base backdrop-blur-sm transition cursor-pointer"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/80 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white text-white ml-0.5" />
                </div>
                <span>Watch Class Preview</span>
              </button>
            </div>

            {/* 4 Feature Cards (Pills) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-6">
              
              {/* Pill 1: Hands-On Training */}
              <div className="flex items-center gap-2.5 bg-[#141226]/85 border border-white/10 rounded-2xl p-2.5 backdrop-blur-sm hover:border-[#F9E900]/40 transition">
                <div className="w-10 h-10 rounded-xl bg-[#3B1259] border border-purple-400/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Scissors className="w-5 h-5 text-purple-200" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white leading-tight">Hands-On</h4>
                  <p className="text-[11px] text-gray-300 leading-tight">Training</p>
                </div>
              </div>

              {/* Pill 2: State Board Prep */}
              <div className="flex items-center gap-2.5 bg-[#141226]/85 border border-white/10 rounded-2xl p-2.5 backdrop-blur-sm hover:border-[#F9E900]/40 transition">
                <div className="w-10 h-10 rounded-xl bg-[#2A1747] border border-purple-400/30 flex items-center justify-center shrink-0 shadow-sm">
                  <GraduationCap className="w-5 h-5 text-purple-200" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white leading-tight">State Board</h4>
                  <p className="text-[11px] text-gray-300 leading-tight">Prep</p>
                </div>
              </div>

              {/* Pill 3: Expert Guidance */}
              <div className="flex items-center gap-2.5 bg-[#141226]/85 border border-white/10 rounded-2xl p-2.5 backdrop-blur-sm hover:border-[#F9E900]/40 transition">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-5 h-5 text-gray-200" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white leading-tight">Expert</h4>
                  <p className="text-[11px] text-gray-300 leading-tight">Guidance</p>
                </div>
              </div>

              {/* Pill 4: Career Ready */}
              <div className="flex items-center gap-2.5 bg-[#141226]/85 border border-white/10 rounded-2xl p-2.5 backdrop-blur-sm hover:border-[#F9E900]/40 transition">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0 shadow-sm">
                  <Users className="w-5 h-5 text-gray-200" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white leading-tight">Career</h4>
                  <p className="text-[11px] text-gray-300 leading-tight">Ready</p>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: MS. TEE CUTOUT VISUAL ================= */}
          <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end overflow-hidden lg:overflow-visible">
            
            <div className="relative w-full max-w-[620px] h-[360px] sm:h-[500px] lg:h-[600px] flex items-end justify-center">
              
              {/* Golden Ring Arc framing Ms. Tee (Responsive on all screens) */}
              <div className="absolute right-6 sm:right-16 top-4 sm:top-4 w-[260px] sm:w-[400px] lg:w-[460px] h-[260px] sm:h-[400px] lg:h-[460px] rounded-full border-[6px] sm:border-[10px] border-[#F9E900] z-0 pointer-events-none opacity-90 shadow-[0_0_35px_rgba(249,233,0,0.35)]"></div>

              {/* Behind Ms. Tee subtle depth radial gradient */}
              <div className="absolute right-8 sm:right-16 top-6 sm:top-10 w-[240px] sm:w-[380px] h-[240px] sm:h-[380px] rounded-full bg-gradient-to-tr from-[#1B132C]/70 via-[#10152B]/40 to-transparent z-0 blur-md pointer-events-none"></div>

              {/* High-Resolution Cutout Photo of Ms. Tee */}
              <div className="relative w-full h-full z-10 flex items-end justify-center">
                <Image
                  src="/images/exodus-hero-cutout.png"
                  alt="Ms. Tee Teaching Cosmetology with Hair Coloring Technique"
                  width={1312}
                  height={1199}
                  priority
                  className="w-auto h-full max-h-[350px] sm:max-h-[490px] lg:max-h-[580px] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                />
              </div>

              {/* Bottom Right 3 Sweeping Brand Ribbons (Yellow, Blue, Red) */}
              <div className="absolute bottom-0 right-0 w-full max-w-[540px] h-48 z-20 pointer-events-none overflow-hidden">
                <svg
                  viewBox="0 0 540 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Top Ribbon: Bright Yellow */}
                  <path
                    d="M 40 180 C 180 150, 320 85, 540 15 L 540 65 C 330 130, 200 172, 85 180 Z"
                    fill="#F9E900"
                  />
                  {/* Middle Ribbon: Royal Blue */}
                  <path
                    d="M 90 180 C 210 162, 340 108, 540 60 L 540 110 C 350 150, 225 178, 140 180 Z"
                    fill="#0875BD"
                  />
                  {/* Bottom Ribbon: Bold Red */}
                  <path
                    d="M 145 180 C 240 172, 370 128, 540 105 L 540 180 L 145 180 Z"
                    fill="#D21F2B"
                  />
                </svg>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
