"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  onBookClass?: () => void;
}

export default function Navbar({ onBookClass }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0E1A]/95 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Exact Official EXODUS Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative h-12 sm:h-14 w-20 sm:w-24 shrink-0 flex items-center">
              <Image
                src="/images/exodus-logo-clean.png"
                alt="EXODUS Logo"
                fill
                priority
                sizes="100px"
                className="object-contain object-left group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              />
            </div>

            {/* Vertical Divider Line */}
            <div className="h-8 w-[1.5px] bg-white/20"></div>

            {/* Tagline */}
            <div className="flex flex-col text-left">
              <span className="text-[13px] sm:text-sm font-bold text-white tracking-wide leading-tight font-heading">
                EXODUS Teaching
              </span>
              <span className="text-[11px] text-gray-300 font-medium leading-tight">
                with <span className="text-[#F9E900] font-bold">Ms. Tee</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Active Home with Underline */}
            <div className="relative py-2">
              <Link
                href="/"
                className="text-[#F9E900] font-bold text-sm tracking-wide"
              >
                Home
              </Link>
              <div className="w-8 h-[2.5px] bg-[#F9E900] rounded-full mx-auto mt-1 shadow-[0_0_8px_rgba(249,233,0,0.6)]"></div>
            </div>

            <Link
              href="#about"
              className="text-white hover:text-[#F9E900] font-medium text-sm transition tracking-wide"
            >
              About
            </Link>

            {/* Courses with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-white hover:text-[#F9E900] font-medium text-sm transition tracking-wide py-2 cursor-pointer">
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-gray-300" />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#0D1836] border border-white/10 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="#courses"
                    className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 hover:text-[#F9E900] transition"
                  >
                    Fundamentals of Cosmetology
                  </Link>
                  <Link
                    href="#courses"
                    className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 hover:text-[#F9E900] transition"
                  >
                    State Board Refresher Course
                  </Link>
                  <Link
                    href="#courses"
                    className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 hover:text-[#F9E900] transition"
                  >
                    State Board Kit
                  </Link>
                  <Link
                    href="#courses"
                    className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 hover:text-[#F9E900] transition"
                  >
                    Back to Basics Color
                  </Link>
                  <Link
                    href="#courses"
                    className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 hover:text-[#F9E900] transition"
                  >
                    Haircutting Class
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#why-choose"
              className="text-white hover:text-[#F9E900] font-medium text-sm transition tracking-wide"
            >
              Why Exodus
            </Link>

            <Link
              href="#training-process"
              className="text-white hover:text-[#F9E900] font-medium text-sm transition tracking-wide"
            >
              Process
            </Link>

            <Link
              href="#gallery"
              className="text-white hover:text-[#F9E900] font-medium text-sm transition tracking-wide"
            >
              Gallery
            </Link>

            <Link
              href="#contact"
              className="text-white hover:text-[#F9E900] font-medium text-sm transition tracking-wide"
            >
              Contact
            </Link>
          </nav>

          {/* Action Button: Book a Class */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onBookClass}
              className="inline-flex items-center gap-2 bg-[#F9E900] hover:bg-[#ffe500] text-black font-extrabold px-6 py-2.5 rounded-full text-sm shadow-md hover:shadow-glow transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
              <span>Book a Class</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <button
              onClick={onBookClass}
              className="inline-flex items-center gap-1.5 bg-[#F9E900] hover:bg-[#ffe500] text-black font-extrabold px-3 sm:px-4 py-1.5 rounded-full text-xs shadow-sm transition"
            >
              <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F9E900]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu with Smooth Styling */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 space-y-1 bg-[#0A0E1A]/95 rounded-b-2xl animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-[#F9E900] bg-white/5"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 hover:text-[#F9E900] transition"
            >
              About
            </Link>
            <Link
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 hover:text-[#F9E900] transition"
            >
              Courses &amp; Programs
            </Link>
            <Link
              href="#why-choose"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 hover:text-[#F9E900] transition"
            >
              Why Exodus
            </Link>
            <Link
              href="#training-process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 hover:text-[#F9E900] transition"
            >
              Training Process
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 hover:text-[#F9E900] transition"
            >
              Success Stories
            </Link>
            <Link
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 hover:text-[#F9E900] transition"
            >
              Student Gallery
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 hover:text-[#F9E900] transition"
            >
              Contact Us
            </Link>

            <div className="pt-3 px-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClass?.();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F9E900] hover:bg-[#ffe500] text-black font-extrabold py-3 rounded-full text-sm shadow-md transition"
              >
                <Calendar className="w-4 h-4 stroke-[2.5]" />
                <span>Book a Class Today</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
