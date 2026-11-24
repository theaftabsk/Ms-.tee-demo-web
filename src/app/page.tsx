"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import MeetMsTee from "@/components/sections/MeetMsTee";
import CoursePrograms from "@/components/sections/CoursePrograms";
import WhyChooseAndProcess from "@/components/sections/WhyChooseAndProcess";
import TrainingProcessSection from "@/components/sections/TrainingProcessSection";
import StudentSuccessStories from "@/components/sections/StudentSuccessStories";
import TrainingGallery from "@/components/sections/TrainingGallery";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/sections/BookingModal";
import { Play, X } from "lucide-react";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Fundamentals of Cosmetology");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenBooking = (courseName?: string) => {
    if (courseName) {
      setSelectedCourse(courseName);
    }
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#F9E900] selection:text-black">
      {/* Navbar */}
      <Navbar onBookClass={() => handleOpenBooking()} />

      {/* Hero Section */}
      <HeroSection
        onBookClass={() => handleOpenBooking()}
        onWatchVideo={() => setVideoModalOpen(true)}
      />

      {/* Stats Counter Bar */}
      <StatsBar />

      {/* Meet Ms. Tee Section */}
      <MeetMsTee
        onLearnMore={() => handleOpenBooking("Fundamentals of Cosmetology")}
        onWatchVideo={() => setVideoModalOpen(true)}
      />

      {/* 5 Course Programs */}
      <CoursePrograms
        onSelectCourse={(course) => handleOpenBooking(course)}
        onBookClass={() => handleOpenBooking()}
      />

      {/* Why Choose Exodus */}
      <WhyChooseAndProcess onBookClass={() => handleOpenBooking()} />

      {/* Our Training Process */}
      <TrainingProcessSection onEnroll={() => handleOpenBooking()} />

      {/* Student Success Stories */}
      <StudentSuccessStories onEnroll={() => handleOpenBooking()} />

      {/* Student Work & Gallery */}
      <TrainingGallery
        onViewAll={() => handleOpenBooking()}
        onJoinNextBatch={() => handleOpenBooking()}
      />

      {/* CTA Enrollment Banner */}
      <CTABanner onBookClass={() => handleOpenBooking()} />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultCourse={selectedCourse}
      />

      {/* Video Preview Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0A122A] border border-white/20 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F9E900]"></span>
                <h4 className="text-white font-bold text-lg font-heading">
                  EXODUS Teaching with Ms. Tee — Class Experience Preview
                </h4>
              </div>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Class Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-400 text-xs mt-3 text-center">
                Hands-on training sessions are recorded live in salon academy batches.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
