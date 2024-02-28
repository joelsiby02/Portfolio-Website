"use client";
// pages.tsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import SocialMediaPost from "../components/SocialMediaPost";
import EmailSection from "../components/EmailSection";
import QuoteGenerator from "../components/QuoteGenerator";

const Pages = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <div>
          <SocialMediaPost />
        </div>
        <div>
          <EmailSection />
        </div>
        <div>
          <QuoteGenerator/>
        </div>
      </div>
    </main>
  );
};

export default Pages;

