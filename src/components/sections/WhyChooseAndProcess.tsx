"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, ClipboardList, Award, Scissors, Briefcase, Handshake, ArrowRight } from "lucide-react";

interface WhyChooseProps {
  onBookClass?: () => void;
}

export default function WhyChooseAndProcess({ onBookClass }: WhyChooseProps) {
  const benefits = [
    {
      id: "hands-on",
      title: "Hands-On Training",
      desc: "Real practice, real techniques, and real-world experience.",
      icon: GraduationCap,
      color: "bg-amber-100/80 text-amber-900 border-amber-200/50",
    },
    {
      id: "state-board",
      title: "State Board Preparation",
      desc: "Focused review, mock exams, and success strategies.",
      icon: ClipboardList,
      color: "bg-blue-100/80 text-blue-800 border-blue-200/50",
    },
    {
      id: "industry-expertise",
      title: "Industry Expertise",
      desc: "Learn from a licensed educator with years of experience.",
      icon: Award,
      color: "bg-red-100/80 text-[#D21F2B] border-red-200/50",
    },
    {
      id: "small-classes",
      title: "Small Class Sizes",
      desc: "Get personalized attention and one-on-one support.",
      icon: Scissors,
      color: "bg-purple-100/80 text-purple-800 border-purple-200/50",
    },
    {
      id: "career-readiness",
      title: "Career Readiness",
      desc: "Build the skills and confidence to start working in the beauty industry.",
      icon: Briefcase,
      color: "bg-emerald-100/80 text-emerald-800 border-emerald-200/50",
    },
    {
      id: "ongoing-support",
      title: "Ongoing Support",
      desc: "Guidance, resources, and mentorship even after graduation.",
      icon: Handshake,
      color: "bg-cyan-100/80 text-cyan-800 border-cyan-200/50",
    },
  ];

  return (
    <section id="why-choose" className="pt-10 pb-14 lg:pt-12 lg:pb-16 bg-white relative overflow-hidden">
      
      {/* Bottom Left Sweeping Ribbon Accent */}
      <div className="absolute bottom-0 left-0 w-44 sm:w-60 h-20 pointer-events-none z-0">
        <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 0 80 C 60 75, 120 50, 180 20 L 160 0 C 100 30, 40 60, 0 65 Z" fill="#F9E900" />
          <path d="M 0 80 C 50 78, 100 58, 150 35 L 130 18 C 80 45, 30 70, 0 74 Z" fill="#0875BD" />
          <path d="M 0 80 C 40 79, 80 68, 120 50 L 100 35 C 60 55, 20 75, 0 78 Z" fill="#D21F2B" />
        </svg>
      </div>

      {/* Bottom Right Giant Sweeping Ribbon Waves */}
      <div className="absolute bottom-0 right-0 w-2/5 max-w-[450px] h-28 sm:h-36 pointer-events-none z-0">
        <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 0 140 C 120 120, 240 60, 400 10 L 400 45 C 260 95, 140 135, 30 140 Z" fill="#F9E900" />
          <path d="M 40 140 C 150 128, 270 80, 400 45 L 400 85 C 280 115, 170 138, 80 140 Z" fill="#0875BD" />
          <path d="M 90 140 C 180 132, 290 98, 400 85 L 400 140 L 90 140 Z" fill="#D21F2B" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= COMPACT HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto mb-8 space-y-1.5">
          {/* Top Tag: — WHY CHOOSE EXODUS? — */}
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-6 h-0.5 bg-[#D21F2B] rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#D21F2B]">
              WHY CHOOSE EXODUS?
            </span>
            <span className="w-6 h-0.5 bg-[#D21F2B] rounded-full"></span>
          </div>

          {/* Main Title - Perfectly Sized on single/clean 2 lines */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-heading text-gray-900 leading-tight">
            More Than Training — <span className="text-[#D21F2B]">A Real Career Path</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            At EXODUS, you get the skills, support, and real-world experience you need to pass your State Board and build a successful career in cosmetology.
          </p>
        </div>

        {/* ================= COMPACT MAIN CONTENT: LEFT PHOTO & RIGHT 6 CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Ms. Tee Visual - Perfectly Scaled & Fitted */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] h-[330px] sm:h-[420px] lg:h-[480px] flex items-end justify-center">
              
              {/* Vibrant Yellow Circle Accent Behind Ms. Tee */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[220px] sm:w-[300px] lg:w-[320px] h-[220px] sm:h-[300px] lg:h-[320px] rounded-full bg-[#F9E900] z-0 pointer-events-none shadow-[0_0_40px_rgba(249,233,0,0.45)]"></div>

              {/* Clean Transparent HD Cutout of Ms. Tee */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="/images/ms-tee-cutout-hd.png"
                  alt="Meet Ms. Tee - Licensed Cosmetology Educator"
                  width={1024}
                  height={935}
                  priority
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_14px_28px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* Floating Badge: Meet Ms. Tee */}
              <div className="absolute bottom-2 left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-xl border border-gray-100/90">
                <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight font-heading">
                  Meet Ms. Tee
                </h4>
                <p className="text-[9px] sm:text-[11px] text-gray-600 font-medium leading-tight">
                  Licensed Cosmetology Educator
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: 6 Cards in 3x2 Grid - Compact and Balanced */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 border border-gray-100/90 shadow-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className={`w-9 h-9 rounded-xl ${item.color} border flex items-center justify-center shrink-0 shadow-sm`}
                        >
                          <Icon className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-xs sm:text-sm leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] text-gray-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
