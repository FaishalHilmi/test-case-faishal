"use client";
// import ImageLeft from "@/components/templates/ImageLeft";
// import ImageRight from "@/components/templates/HeroTemplate";
import Navigasi from "@/components/templates/Navigasi";
import Sidebar from "@/components/templates/Sidebar";
import React, { useEffect, useState } from "react";
import HeroTemplate from "@/components/templates/HeroTemplate";
import BroadcastTemplate from "@/components/templates/BroadcastTemplate";
import CampaignTemplate from "@/components/templates/CampaignTemplate";
import ReplyTemplate from "@/components/templates/ReplyTemplate";
import OpportunityTemplate from "@/components/templates/OpportunityTemplate";
import PricingTemplate from "@/components/templates/PricingTemplate";
import QuestionTemplate from "@/components/templates/QuestionTemplate";
import Footer from "@/components/templates/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "started",
        "broadcast",
        "campaign",
        "reply",
        "opportunity",
        "pricing",
        "faq",
        "contact",
      ];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navigasi />
      <Sidebar activeSection={activeSection} />
      <HeroTemplate />
      <BroadcastTemplate />
      <CampaignTemplate />
      <ReplyTemplate />
      <OpportunityTemplate />
      <PricingTemplate />
      <div className="relative bg-customBlue overflow-hidden">
        <img
          src="/images/footer-pattern.png"
          className="absolute w-[878px] lg:w-full object-cover top-36"
        />
        <QuestionTemplate />
        <Footer />
      </div>
    </div>
  );
}
