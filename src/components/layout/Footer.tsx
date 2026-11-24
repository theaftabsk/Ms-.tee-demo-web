"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#060A17] text-gray-300 pt-14 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= 5 COLUMNS MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12">
          
          {/* Col 1: EXODUS Brand Info */}
          <div className="space-y-3.5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-28 shrink-0">
                <Image
                  src="/images/exodus-logo-clean.png"
                  alt="EXODUS Logo"
                  fill
                  sizes="112px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <div className="text-xs font-bold text-gray-200 tracking-wide font-heading">
              Teaching with <span className="text-[#F9E900]">Ms. Tee™</span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
              Hands-on cosmetology training, State Board preparation, and real
              support for a successful career in the beauty industry.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold text-sm font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#F9E900] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#F9E900] transition">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#F9E900] transition">
                  State Board Prep
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#F9E900] transition">
                  Student Work &amp; Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#F9E900] transition">
                  About Ms. Tee
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#F9E900] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Courses */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold text-sm font-heading">
              Our Courses
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="#courses" className="hover:text-[#F9E900] transition">
                  Cosmetology (Full Program)
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#F9E900] transition">
                  State Board Refresher
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#F9E900] transition">
                  Haircutting Class
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#F9E900] transition">
                  Color &amp; Chemical Services
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#F9E900] transition">
                  Nail Care Training
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#F9E900] transition">
                  Skin &amp; Facial Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold text-sm font-heading">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#F9E900] flex items-center justify-center shrink-0">
                  <MapPin className="w-3 h-3 text-black stroke-[2.5]" />
                </div>
                <span>Atlanta, GA, USA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#F9E900] flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3 text-black stroke-[2.5]" />
                </div>
                <span>(404) 555-0192</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#F9E900] flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3 text-black stroke-[2.5]" />
                </div>
                <span className="truncate">info@exodusbeauty.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#F9E900] flex items-center justify-center shrink-0">
                  <Clock className="w-3 h-3 text-black stroke-[2.5]" />
                </div>
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay Connected & Newsletter */}
          <div className="space-y-3.5">
            <h4 className="text-white font-extrabold text-sm font-heading">
              Stay Connected
            </h4>

            {/* Social Icons in Colorful Rounded Rectangles */}
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center text-white hover:opacity-90 transition shadow-sm"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>

            {/* Subscribe for Updates */}
            <div className="pt-1 space-y-2">
              <span className="text-xs font-bold text-white block">
                Subscribe for Updates
              </span>

              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white text-gray-900 text-xs px-3.5 py-2.5 pr-11 rounded-full outline-none focus:ring-2 focus:ring-[#F9E900] placeholder:text-gray-400 font-medium"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 w-7 h-7 rounded-full bg-[#F9E900] hover:bg-[#ffe600] text-black flex items-center justify-center transition cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </form>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-[#F9E900] font-semibold animate-in fade-in">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-[11px] sm:text-xs text-gray-400 gap-3">
          <p>© 2026 EXODUS Teaching with Ms. Tee. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-gray-400">
            <Link href="#terms" className="hover:text-white transition">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20">|</span>
            <Link href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="#sitemap" className="hover:text-white transition">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
