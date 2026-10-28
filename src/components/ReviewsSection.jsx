import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { testimonials, hotelInfo } from '../data/hotelData';

export default function ReviewsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentReview = testimonials[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#EAE4D8] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E3DCce] text-xs font-semibold text-neutral-800 shadow-xs">
            {/* Google Multi-color Logo Icon SVG */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Verified 5-Star Reviews on Google ({hotelInfo.googleRating} ★)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonial Active Display */}
        <div className="relative min-h-[220px] sm:min-h-[260px] flex flex-col justify-center items-center px-4 sm:px-8">
          {/* 5 Stars in Brass Gold */}
          <div className="flex items-center justify-center gap-1.5 mb-6 text-brass-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          {/* Quotation text */}
          <blockquote className="text-xl sm:text-3xl lg:text-4xl font-editorial font-medium text-neutral-900 leading-snug tracking-tight max-w-4xl mx-auto italic transition-all duration-500 animate-fade-in">
            “{currentReview.quote}”
          </blockquote>

          {/* Reviewer Details */}
          <div className="mt-8 space-y-1">
            <cite className="not-italic text-sm sm:text-base font-bold text-neutral-900 block">
              {currentReview.name}
            </cite>
            <span className="text-xs text-neutral-500 font-light inline-flex items-center gap-1.5 justify-center">
              <span className="inline-flex items-center gap-1 text-neutral-700 font-semibold">
                Google Review
              </span>
              <span>·</span>
              <span className="text-moss-700 font-bold">{currentReview.tripType}</span>
            </span>
          </div>
        </div>

        {/* Navigation Controls: Arrows + Dots */}
        <div className="flex items-center justify-center gap-6 pt-4">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-[#D5CEC2] hover:bg-white text-neutral-700 flex items-center justify-center transition cursor-pointer active:scale-95 shadow-xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx ? 'w-8 bg-moss-700' : 'w-2 bg-[#D5CEC2]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-[#D5CEC2] hover:bg-white text-neutral-700 flex items-center justify-center transition cursor-pointer active:scale-95 shadow-xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* External Link */}
        <div className="pt-2">
          <a
            href={hotelInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-moss-700 hover:text-moss-900 hover:underline"
          >
            <span>Read all 1,240+ reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
