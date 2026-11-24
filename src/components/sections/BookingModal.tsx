"use client";

import React, { useState } from "react";
import { X, Calendar, User, Mail, Phone, BookOpen, CheckCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function BookingModal({ isOpen, onClose, defaultCourse = "Fundamentals of Cosmetology" }: BookingModalProps) {
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s on success
      // setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0D1836] border border-white/15 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F9E900] text-black mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Booking Request Sent!</h3>
              <p className="text-gray-300 text-sm max-w-sm mx-auto">
                Thank you, <span className="text-[#F9E900] font-semibold">{formData.name}</span>! Ms. Tee’s academy team will contact you at {formData.email || formData.phone} within 24 hours to confirm your seat.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 bg-[#F9E900] text-black font-bold px-6 py-2.5 rounded-full text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-1 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F9E900]">
                  EXODUS ACADEMY
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Book a Class with Ms. Tee
                </h3>
                <p className="text-xs text-gray-300">
                  Select your desired training program and reserve your hands-on session.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Course Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Select Program / Class
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F9E900]"
                  >
                    <option value="Fundamentals of Cosmetology" className="bg-[#0A122A]">
                      Fundamentals of Cosmetology
                    </option>
                    <option value="State Board Refresher Course" className="bg-[#0A122A]">
                      State Board Refresher Course
                    </option>
                    <option value="State Board Kit" className="bg-[#0A122A]">
                      State Board Kit Purchase &amp; Review
                    </option>
                    <option value="Back to Basics Color" className="bg-[#0A122A]">
                      Back to Basics Color Formulation
                    </option>
                    <option value="Haircutting Class" className="bg-[#0A122A]">
                      Precision Haircutting Class
                    </option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F9E900]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <input
                        required
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F9E900]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <input
                        required
                        type="tel"
                        placeholder="(XXX) XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F9E900]"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Preferred Date / Batch
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F9E900]"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#F9E900] hover:bg-[#ffe600] text-black font-bold py-3.5 rounded-xl text-sm transition shadow-lg mt-2 cursor-pointer"
                >
                  Confirm &amp; Request Class Seat
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
