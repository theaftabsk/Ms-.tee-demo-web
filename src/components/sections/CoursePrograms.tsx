"use client";

import React from "react";
import Image from "next/image";
import { Scissors, GraduationCap, Calendar, Palette, ArrowRight } from "lucide-react";

interface CourseProgramsProps {
  onSelectCourse?: (courseTitle: string) => void;
  onBookClass?: () => void;
}

export default function CoursePrograms({ onSelectCourse, onBookClass }: CourseProgramsProps) {
  const courses = [
    {
      id: "fundamentals",
      title: "Fundamentals of Cosmetology",
      description: "Build a strong foundation in cosmetology with essential skills, techniques, and theory.",
      image: "/images/course-card-1.png",
      icon: Scissors,
      iconBg: "bg-[#F9E900] text-black",
      btnVariant: "yellow", // yellow or dark
    },
    {
      id: "state-board-refresher",
      title: "State Board Refresher Course",
      description: "Review key concepts, practice essential techniques, and build the confidence to pass your State Board exam.",
      image: "/images/course-card-2.png",
      icon: GraduationCap,
      iconBg: "bg-[#0875BD] text-white",
      btnVariant: "dark",
    },
    {
      id: "state-board-kit",
      title: "State Board Kit",
      description: "Get the complete, approved toolkit for your State Board exam, with the essential supplies you need to succeed.",
      image: "/images/course-card-3.png",
      icon: Calendar,
      iconBg: "bg-[#D21F2B] text-white",
      btnVariant: "yellow",
    },
    {
      id: "basics-color",
      title: "Back to Basics Color",
      description: "Master the fundamentals of hair color, including color theory, application, and real-world formulation.",
      image: "/images/course-card-4.png",
      icon: Palette,
      iconBg: "bg-[#3B1259] text-white",
      btnVariant: "dark",
    },
    {
      id: "haircutting-class",
      title: "Haircutting Class",
      description: "Learn precision haircutting techniques, styling, and shape creation for a variety of hair types and trends.",
      image: "/images/course-card-5.png",
      icon: Scissors,
      iconBg: "bg-[#0875BD] text-white",
      btnVariant: "yellow",
    },
  ];

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Top Right Watermark: Shears / Scissors */}
      <div className="absolute top-6 right-6 sm:right-14 w-52 sm:w-64 h-52 sm:h-64 opacity-[0.08] pointer-events-none rotate-45">
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
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          {/* Top Tag: — OUR COURSES — */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-[#D21F2B] rounded-full"></span>
            <span className="text-xs font-black uppercase tracking-widest text-[#D21F2B]">
              OUR COURSES
            </span>
            <span className="w-8 h-0.5 bg-[#D21F2B] rounded-full"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black tracking-tight font-heading text-gray-900 leading-tight">
            Our Courses &amp; <span className="text-[#D21F2B]">Training Programs</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Practical, industry-focused cosmetology training designed to build real skills, boost confidence, and prepare you for a successful career.
          </p>
        </div>

        {/* ================= 5 COURSE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-3.5 border border-gray-100/90 shadow-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Area with Top-Left Yellow Accent Frame */}
                  <div className="relative w-full h-44 sm:h-40 rounded-[20px] sm:rounded-[22px] overflow-hidden bg-gray-50/70 mb-4 p-1">
                    {/* Top-Left Yellow Accent Shape */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-[#F9E900] z-10 rounded-br-2xl" />

                    <div className="relative w-full h-full">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
                        className="object-contain object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Floating Circular Icon Overlapping Bottom-Left */}
                    <div
                      className={`absolute bottom-2 left-2.5 w-9 h-9 rounded-full ${course.iconBg} flex items-center justify-center shadow-md z-20`}
                    >
                      <Icon className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="px-1 space-y-1.5 mb-3">
                    <h3 className="font-extrabold text-gray-900 text-sm sm:text-[15px] leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-normal">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button (Yellow or Dark) */}
                <div className="pt-2 px-1">
                  <button
                    onClick={() => {
                      onSelectCourse?.(course.title);
                      onBookClass?.();
                    }}
                    className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 sm:py-3 rounded-full text-xs font-black transition-all shadow-sm cursor-pointer ${
                      course.btnVariant === "yellow"
                        ? "bg-[#F9E900] hover:bg-[#ffe500] text-black"
                        : "bg-[#0A122A] hover:bg-black text-white"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
