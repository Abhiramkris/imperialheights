import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Wifi, 
  UtensilsCrossed, 
  Car, 
  Clock, 
  Zap,
  Building2,
  Calendar
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
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Wifi': return <Wifi className="w-5 h-5" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* Interactive Experience Showcase */}
      <section id="amenities" className="py-16 lg:py-20 bg-[#FAF7F2] border-b border-[#EAE4D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-wider text-moss-700 font-bold block">
                Property Highlights
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-neutral-900 tracking-tight">
                Everything for a Comfortable Stay
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal max-w-md">
              Reliable lodging in Kakkanad with spotlessly clean rooms, on-site dining, and 24/7 desk assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Image with 15px radius */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full rounded-[15px] overflow-hidden shadow-md border border-[#E0D8CB] bg-neutral-900 group">
                <img
                  key={activeExp.id}
                  src={activeExp.image}
                  alt={activeExp.title}
                  className="w-full h-full object-cover brightness-95 transition-transform duration-700 ease-out group-hover:scale-102"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                {/* Top-Left Tag with 8px radius */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-black/65 backdrop-blur-xs border border-white/20 px-3 py-1 rounded-[8px] text-white text-xs font-semibold tracking-wide shadow-xs">
                    {activeExp.tag}
                  </span>
                </div>

                {/* Top-Right Arrows with 10px radius */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous highlight"
                    className="w-8 h-8 rounded-[10px] bg-black/60 hover:bg-black/80 backdrop-blur-xs text-white border border-white/20 flex items-center justify-center transition cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next highlight"
                    className="w-8 h-8 rounded-[10px] bg-black/60 hover:bg-black/80 backdrop-blur-xs text-white border border-white/20 flex items-center justify-center transition cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
                  <div className="max-w-lg space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-brass-400 font-bold">
                      {activeIdx + 1} of {interactiveExperiences.length}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-editorial text-white">
                      {activeExp.title}
                    </h3>
                    <p className="text-xs text-neutral-200 font-normal line-clamp-2">
                      {activeExp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 4-Item List Selectors with 15px radius */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Explore Amenities & Grounds:
              </p>

              <div className="space-y-2.5">
                {interactiveExperiences.map((exp, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={exp.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-[15px] border transition-all duration-200 flex items-center gap-3.5 cursor-pointer ${
                        isActive
                          ? 'bg-white border-moss-700 shadow-sm ring-1 ring-moss-700/20'
                          : 'bg-white/70 hover:bg-white border-[#E4DECf]'
                      }`}
                    >
                      {/* Number badge */}
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-colors ${
                        isActive 
                          ? 'bg-moss-700 text-white' 
                          : 'bg-[#F2ECE1] text-neutral-700'
                      }`}>
                        0{idx + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-bold ${
                          isActive ? 'text-moss-800' : 'text-neutral-900'
                        }`}>
                          {exp.subtitle}
                        </h4>
                        <p className="text-xs text-neutral-500 truncate">
                          {exp.title}
                        </p>
                      </div>

                      <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? 'text-moss-700' : 'text-neutral-300'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Bottom CTA with 15px radius */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 bg-moss-700 hover:bg-moss-800 text-white text-xs uppercase tracking-wider font-bold rounded-[15px] shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Room at Desk Rate</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6-Card Services Grid with 15px radius */}
      <section id="amenities-grid" className="py-16 lg:py-20 bg-[#F4EFE6] border-b border-[#EAE4D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-1.5">
            <span className="text-xs uppercase tracking-wider text-moss-700 font-bold block">
              Guest Facilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">
              Essential Services for Every Guest
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {curatedServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[15px] p-6 border border-[#E3DCce] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[12px] bg-[#EBE4D5] text-moss-800 flex items-center justify-center mb-4 shadow-2xs">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h4 className="text-base font-bold font-editorial text-neutral-900 mb-1.5">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 text-[11px] font-semibold uppercase tracking-wider text-moss-700">
                  {service.category}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
