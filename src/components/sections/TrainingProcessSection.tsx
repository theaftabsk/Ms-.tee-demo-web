"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Scissors, ClipboardCheck, Award, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

interface TrainingProcessProps {
  onEnroll?: () => void;
}

export default function TrainingProcessSection({ onEnroll }: TrainingProcessProps) {
  const steps = [
    {
      step: "01",
      stepColor: "bg-[#F9E900] text-black",
      icon: BookOpen,
      iconBg: "bg-[#F9E900] text-black",
      title: "Enroll & Plan",
      desc: "Choose the right program and get a personalized training plan.",
      image: "/images/process-photo-1.jpg",
    },
    {
      step: "02",
      stepColor: "bg-[#0875BD] text-white",
      icon: Scissors,
      iconBg: "bg-[#0875BD] text-white",
      title: "Hands-On Training",
      desc: "Build real skills with practical, salon-focused learning.",
      image: "/images/process-photo-2.jpg",
    },
    {
      step: "03",
      stepColor: "bg-[#D21F2B] text-white",
      icon: ClipboardCheck,
      iconBg: "bg-red-50 text-[#D21F2B] border border-red-200",
      title: "State Board Prep",
      desc: "Get focused review, mock exams, and proven strategies to pass with confidence.",
      image: "/images/process-photo-3.jpg",
    },
    {
      step: "04",
      stepColor: "bg-[#0875BD] text-white",
      icon: Award,
      iconBg: "bg-blue-50 text-[#0875BD] border border-blue-200",
      title: "Get Licensed",
      desc: "Pass your State Board exam and earn your cosmetology license.",
      image: "/images/process-photo-4.jpg",
    },
    {
      step: "05",
      stepColor: "bg-[#F9E900] text-black",
      icon: Briefcase,
      iconBg: "bg-[#F9E900] text-black",
      title: "Start Your Career",
      desc: "Step into a rewarding career in salons, spas, or even your own business.",
      image: "/images/process-photo-5.jpg",
    },
  ];

  return (
    <section id="training-process" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      
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
          {/* Top Tag: — OUR TRAINING PROCESS — */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-[#D21F2B] rounded-full"></span>
            <span className="text-xs font-black uppercase tracking-widest text-[#D21F2B]">
              OUR TRAINING PROCESS
            </span>
            <span className="w-8 h-0.5 bg-[#D21F2B] rounded-full"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight font-heading text-gray-900 leading-tight">
            From Learning to a{" "}
            <span className="text-[#D21F2B] relative inline-block">
              Licensed Career
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
            A clear, step-by-step path designed to give you the skills, confidence, and State Board success you need to start your career in cosmetology.
          </p>
        </div>

        {/* ================= 5 PROCESS CARDS WITH CONNECTING ARROWS ================= */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative flex flex-col">
                  
                  {/* Card Container */}
                  <div className="bg-white rounded-[24px] p-3 border border-gray-100 shadow-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Image Frame - Edge to Edge Rich Photo */}
                      <div className="relative w-full h-36 sm:h-40 rounded-[18px] overflow-hidden mb-5">
                        {/* Step Number Badge */}
                        <div
                          className={`absolute top-2 left-2 z-20 ${item.stepColor} font-black text-xs px-2.5 py-0.5 rounded-md shadow-md`}
                        >
                          {item.step}
                        </div>

                        {/* Full Photo filling the frame */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 240px"
                          className="object-cover object-center hover:scale-105 transition-transform duration-500"
                        />

                        {/* Floating Icon Overlapping Bottom-Left Edge */}
                        <div
                          className={`absolute -bottom-3 left-3 w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center shadow-lg z-30`}
                        >
                          <Icon className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-1.5 space-y-1">
                        <h3 className="font-extrabold text-gray-900 text-sm sm:text-base leading-tight font-heading">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow between cards (Centered on Desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center pointer-events-none">
                      <ArrowRight className="w-3.5 h-3.5 text-gray-700 stroke-[2.5]" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
