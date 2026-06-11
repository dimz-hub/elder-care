"use client";

import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Calendar,
  User,
} from "lucide-react";

export default function CqcAnnouncement() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full px-3 sm:px-4 py-6 sm:py-12 bg-white">
      <div className="max-w-5xl mx-auto border border-gray-100 shadow-md sm:shadow-lg rounded-2xl overflow-hidden bg-white">
        
        {/* Header Badge */}
        <div className="bg-[#1f6837] text-white px-4 py-3 flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
          <ShieldCheck size={16} className="text-green-300 shrink-0" />
          <span className="truncate">
            Official CQC Regulatory Announcement
          </span>
        </div>

        {/* 
          PURE CSS STRUCTURAL OVERRIDE: 
          This style attribute forces a standard vertical block layout on mobile.
          It physically prevents them from being side-by-side until the screen is wide enough.
        */}
        <div 
          className="p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start"
          style={{
            display: typeof window !== 'undefined' && window.innerWidth < 768 ? 'block' : 'flex'
          }}
        >
          {/* Force style block fallback inline via media query logic */}
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 767px) {
              .cqc-layout-container { display: block !important; }
              .cqc-image-box { width: 100% !important; margin-bottom: 1.5rem !important; }
              .cqc-text-box { width: 100% !important; text-align: left !important; }
              .cqc-meta-box { display: block !important; }
              .cqc-meta-item { margin-bottom: 0.5rem; display: flex !important; }
            }
          `}} />

          {/* Main Layout Container */}
          <div className="cqc-layout-container w-full flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            
            {/* Image Block: Forced to full width on mobile, moves above text */}
            <div className="cqc-image-box w-full md:w-[260px] lg:w-[300px] shrink-0 bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-100 flex items-center justify-center mx-auto">
              <div className="w-full max-w-[240px] md:max-w-none">
                <img
                  src="/images/birch-cqc.jpg"
                  alt="Birch Social Limited CQC Inspected and Rated Good"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Content Block: Safely drops below the image on mobile */}
            <div className="cqc-text-box w-full flex-1 flex flex-col text-left">

              {/* Metadata */}
              <div className="cqc-meta-box flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                <span className="cqc-meta-item flex items-center gap-1 text-gray-500">
                  <Calendar size={13} />
                  09 June 2026
                </span>

                <span className="hidden sm:block h-3 w-[1px] bg-gray-200"></span>

                <span className="cqc-meta-item flex items-center gap-1 text-gray-500">
                  <User size={13} />
                  Sade Dada, Director
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug mb-4">
                Birch Social Limited Celebrates{" "}
                <span className="text-[#1f6837] inline-block underline decoration-wavy decoration-1 underline-offset-4">
                  “Good” Rating
                </span>{" "}
                from the Care Quality Commission
              </h2>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 text-[11px] font-bold rounded-full border border-green-200 shadow-sm">
                  Overall: Good
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-50 text-purple-700 text-[11px] font-bold rounded-full border border-purple-200 shadow-sm">
                  <Award size={12} />
                  Responsiveness: Outstanding
                </span>
              </div>

              {/* Content Paragraphs */}
              <div className="text-gray-600 space-y-4 text-xs sm:text-sm leading-relaxed">
                <p className="font-semibold text-gray-800 text-sm">
                  Birch Social Limited is delighted to announce that we have been
                  awarded a “Good” rating by the Care Quality Commission (CQC),
                  with an “Outstanding” rating in the area of Responsiveness.
                </p>

                <p>
                  This achievement reflects the dedication, professionalism, and
                  compassion of our entire team, who work tirelessly to provide
                  high-quality, person-centred care and support. At Birch Social
                  Limited, we are committed to empowering the people we support to
                  live fulfilling lives, make their own choices, and achieve
                  independence.
                </p>

                {/* Expandable Container */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded
                      ? "max-h-[1400px] opacity-100 pt-1"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="space-y-4">
                    <p>
                      Receiving a “Good” rating from the CQC demonstrates our
                      commitment to delivering effective, caring, responsive, and
                      well-led services. The “Outstanding” rating for
                      Responsiveness is particularly meaningful, as it recognises
                      our ability to understand and respond to the unique needs,
                      preferences, and aspirations of every individual we support.
                    </p>

                    <p>
                      We believe that everyone deserves the opportunity to live
                      with dignity, respect, and independence. Our dedicated team
                      works closely with the people we support, their families,
                      and partner professionals to provide tailored support that
                      promotes choice, inclusion, wellbeing, and personal
                      development.
                    </p>

                    <p>
                      This recognition motivates us to continue enhancing our
                      services and ensuring that every individual supported by
                      Birch Social Limited receives exceptional care and the
                      opportunity to thrive within their community.
                    </p>

                    {/* Signature */}
                    <div className="border-t border-gray-100 pt-4 mt-6">
                      <p className="font-bold text-gray-900 text-base">
                        Sade Dada
                      </p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">
                        Director • Birch Social Limited
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Trigger Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-5 self-start flex items-center gap-1 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors py-2 focus:outline-none"
              >
                {isExpanded ? (
                  <>
                    Read Less
                    <ChevronUp size={14} className="shrink-0" />
                  </>
                ) : (
                  <>
                    Read Full Official Press Release
                    <ChevronDown size={14} className="shrink-0" />
                  </>
                )}
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}