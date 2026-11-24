"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Users,
  Headphones,
  ArrowRight,
  Calendar,
} from "lucide-react";

interface CTABannerProps {
  onBookClass?: () => void;
}

export default function CTABanner({ onBookClass }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#060B1A] text-white pt-10 pb-12 sm:pt-12 sm:pb-14">
      {/* ================= BACKGROUND BRAND CURVES & WAVES ================= */}
      {/* Left Bottom Sweeping Curves */}
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-36 pointer-events-none z-0">
        <svg
          viewBox="0 0 300 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 0 150 C 90 140, 180 90, 300 20 L 270 0 C 160 55, 70 120, 0 130 Z"
            fill="#F9E900"
          />
          <path
            d="M 0 150 C 80 145, 150 110, 250 50 L 230 25 C 130 80, 50 135, 0 142 Z"
            fill="#0875BD"
          />
          <path
            d="M 0 150 C 60 146, 120 125, 200 80 L 180 55 C 100 100, 30 140, 0 146 Z"
            fill="#D21F2B"
          />
        </svg>
      </div>

      {/* Right Sweeping Ribbon Waves */}
      <div className="absolute -bottom-2 -right-4 w-72 sm:w-96 h-48 pointer-events-none z-0">
        <svg
          viewBox="0 0 380 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 0 200 C 130 170, 240 90, 380 20 L 380 70 C 260 135, 140 185, 30 200 Z"
            fill="#F9E900"
          />
          <path
            d="M 40 200 C 160 180, 270 120, 380 65 L 380 120 C 280 160, 170 190, 80 200 Z"
            fill="#0875BD"
          />
          <path
            d="M 100 200 C 200 190, 290 150, 380 120 L 380 200 L 100 200 Z"
            fill="#D21F2B"
          />
        </svg>
      </div>

      {/* Main Grid: Ms. Tee on Left, Center Text, Salon Tools on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* ================= LEFT: MS. TEE CUTOUT ================= */}
          <div className="hidden lg:flex lg:col-span-3 justify-center items-end relative h-[320px] xl:h-[350px]">
            {/* Glowing Yellow Halo Behind Her */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[230px] h-[230px] rounded-full bg-[#F9E900] z-0 pointer-events-none shadow-[0_0_45px_rgba(249,233,0,0.5)]"></div>

            {/* Ms. Tee Cutout */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <Image
                src="/images/ms-tee-cutout-hd.png"
                alt="Ms. Tee - EXODUS Teaching"
                width={1024}
                height={935}
                priority
                className="w-auto h-full max-h-[350px] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>

          {/* ================= CENTER: MAIN HEADLINE, PILLS & BUTTONS ================= */}
          <div className="col-span-1 lg:col-span-6 text-center space-y-3.5">
            {/* Top Tag: — READY TO GET STARTED? — */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <span className="w-6 sm:w-10 h-0.5 bg-[#F9E900] rounded-full"></span>
              <span className="px-4 py-1.5 rounded-full bg-[#D21F2B] text-white text-[11px] sm:text-xs font-black tracking-widest uppercase shadow-md">
                READY TO GET STARTED?
              </span>
              <span className="w-6 sm:w-10 h-0.5 bg-[#F9E900] rounded-full"></span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black font-heading text-white tracking-tight leading-tight">
              Start Your Cosmetology Journey{" "}
              <span className="relative inline-block text-white">
                Today!
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 sm:h-3.5 text-[#D21F2B]"
                  viewBox="0 0 160 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 8 C 45 2, 115 3, 158 9"
                    stroke="#D21F2B"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed font-light">
              Join EXODUS Teaching with Ms. Tee and get the hands-on training,
              State Board preparation, and support you need for a real career in
              cosmetology.
            </p>

            {/* 4 Feature Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 pt-1 text-xs sm:text-[13px] font-semibold text-gray-200">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#F9E900] shrink-0" />
                <span>Hands-On Training</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D21F2B] shrink-0" />
                <span>State Board Preparation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#0875BD] shrink-0" />
                <span>Small Class Sizes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Headphones className="w-4 h-4 text-[#9333EA] shrink-0" />
                <span>Ongoing Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-2">
              {/* Enroll Now Yellow Button */}
              <div className="relative group">
                {/* Decorative yellow sparkles */}
                <div className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 flex-col gap-1 pointer-events-none">
                  <span className="w-3 h-0.5 bg-[#F9E900] rounded-full rotate-45"></span>
                  <span className="w-4 h-0.5 bg-[#F9E900] rounded-full"></span>
                  <span className="w-3 h-0.5 bg-[#F9E900] rounded-full -rotate-45"></span>
                </div>

                <button
                  onClick={onBookClass}
                  className="inline-flex items-center gap-2 bg-[#F9E900] hover:bg-[#ffe600] text-black font-black text-xs sm:text-sm px-7 py-3 rounded-full shadow-[0_8px_20px_rgba(249,233,0,0.35)] hover:shadow-[0_12px_28px_rgba(249,233,0,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

              {/* Request More Info White Button */}
              <button
                onClick={onBookClass}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-gray-900" />
                <span>Request More Info</span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT: SALON TOOLS & TOWELS ================= */}
          <div className="hidden lg:flex lg:col-span-3 justify-center items-end relative h-[300px] xl:h-[330px]">
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <Image
                src="/images/cta-salon-tools-trimmed.png"
                alt="Cosmetology Tools & Towels"
                width={601}
                height={482}
                priority
                className="w-auto h-full max-h-[290px] object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
