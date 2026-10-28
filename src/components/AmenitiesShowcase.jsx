import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Wifi, 
  UtensilsCrossed, 
  BellRing, 
  Car, 
  Clock, 
  Trees, 
  Bed, 
  HeartHandshake 
} from 'lucide-react';
import { interactiveExperiences, curatedServices } from '../data/hotelData';

export default function AmenitiesShowcase({ onOpenBooking }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeExp = interactiveExperiences[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? interactiveExperiences.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === interactiveExperiences.length - 1 ? 0 : prev + 1));
  };

  const getServiceIcon = (name) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Wifi': return <Wifi className="w-6 h-6" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6" />;
      case 'BellRing': return <BellRing className="w-6 h-6" />;
      case 'Car': return <Car className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const getExperienceIcon = (idx) => {
    switch (idx) {
      case 0: return <Trees className="w-5 h-5" />;
      case 1: return <Bed className="w-5 h-5" />;
      case 2: return <UtensilsCrossed className="w-5 h-5" />;
      case 3: return <HeartHandshake className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* Interactive 4-Experience Showcase */}
      <section id="amenities" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EAE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-bold">
                Boutique Amenities & Atmosphere
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900 tracking-tight">
                Everything You Need.{' '}
                <span className="italic font-bold text-moss-700">Nothing You Don't.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-md">
              Uncomplicated Kochi living with pristine heritage rooms, authentic dining, and attentive 24/7 care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Interactive Large Image Frame with Transitions */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E0D8CB] bg-neutral-900 group">
                <img
                  key={activeExp.id}
                  src={activeExp.image}
                  alt={activeExp.title}
                  className="w-full h-full object-cover brightness-95 transition-transform duration-1000 ease-out group-hover:scale-105 animate-fade-in"
                />
                
                {/* Ambient Shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>

                {/* Top-Left Pill Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <div className="bg-[#152917]/90 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-brass-400" />
                    <span>{activeExp.tag}</span>
                  </div>
                </div>

                {/* Top-Right Arrows */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous experience"
                    className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next experience"
                    className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                  <div className="max-w-lg space-y-1.5 drop-shadow-md">
                    <span className="text-[11px] uppercase tracking-widest text-brass-400 font-bold">
                      Experience {activeIdx + 1} of {interactiveExperiences.length}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-editorial text-white leading-snug">
                      {activeExp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-200 font-medium line-clamp-2">
                      {activeExp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 4-Item Tab Selectors & CTAs */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Tap to explore resort features:
              </p>

              <div className="space-y-3">
                {interactiveExperiences.map((exp, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={exp.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden group ${
                        isActive
                          ? 'bg-white border-moss-700 shadow-md ring-1 ring-moss-700/20'
                          : 'bg-white/60 hover:bg-white border-[#E4DECf] hover:border-[#D1C7B3] shadow-xs'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-moss-700 rounded-l"></span>
                      )}

                      {/* Icon Container */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive 
                          ? 'bg-moss-700 text-white shadow-sm' 
                          : 'bg-[#F2ECE1] text-neutral-700 group-hover:bg-[#EAE2D2]'
                      }`}>
                        {getExperienceIcon(idx)}
                      </div>

                      {/* Text info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-sm font-bold transition-colors ${
                            isActive ? 'text-moss-800' : 'text-neutral-900 group-hover:text-black'
                          }`}>
                            {exp.subtitle}
                          </h4>
                          <span className="text-[10px] uppercase font-mono text-neutral-400 font-medium">
                            0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 font-normal leading-relaxed line-clamp-1 mt-0.5">
                          {exp.title}
                        </p>
                      </div>

                      <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive 
                          ? 'text-moss-700 translate-x-0.5' 
                          : 'text-neutral-300 group-hover:text-neutral-500 group-hover:translate-x-0.5'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Bottom CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto px-6 py-3 bg-moss-700 hover:bg-moss-800 text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Stay</span>
                </button>

                <a
                  href="#rooms"
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-neutral-50 border border-[#D5CEC2] text-neutral-800 text-xs uppercase tracking-widest font-bold rounded-xl transition flex items-center justify-center gap-2"
                >
                  <span>View All 5 Rooms</span>
                  <ArrowRight className="w-3.5 h-3.5 text-moss-700" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6-Card Curated Services Grid */}
      <section id="amenities-grid" className="py-20 lg:py-24 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brass-600 font-bold">
              Comfort & Convenience
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-editorial text-neutral-900 mt-2">
              Curated Services for Unhurried Living
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {curatedServices.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-[#FAF7F2] rounded-3xl p-8 border border-[#E3DCce] transition-all duration-500 hover:bg-white hover:border-[#C4DABF] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EBE4D5] text-moss-700 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-moss-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h4 className="text-xl font-bold font-editorial text-neutral-900 mb-2.5 transition-transform duration-300 group-hover:translate-x-1">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutral-700 font-normal leading-relaxed transition-colors duration-300 group-hover:text-neutral-900">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-200/80 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-moss-700 opacity-70 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-[11px]">{service.category}</span>
                  <ArrowRight className="w-4 h-4 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
