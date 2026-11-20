import React from 'react';
import { Users, Sparkles, Utensils, Calendar, Tv } from 'lucide-react';
import { banquetFeatures } from '../data/hotelData';

export default function BanquetsSection({ onOpenBooking }) {
  const getBanquetIcon = (icon) => {
    switch (icon) {
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Mic': return <Tv className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="banquets" className="py-16 lg:py-20 bg-[#FAF7F2] border-b border-[#EAE4D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase using Real Photos */}
          <div className="lg:col-span-6 space-y-3 order-2 lg:order-1">
            {/* Main Hall Photo with 15px radius */}
            <div className="relative h-64 sm:h-76 w-full rounded-[15px] overflow-hidden shadow-sm border border-[#E0D8CB] group">
              <img
                src="/images/gino/gino_16_1vjke-z8.jpg"
                alt="Gino Tourist Home Conference and Meeting Space"
                className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 bg-black/65 backdrop-blur-xs text-white text-xs font-medium px-3 py-1 rounded-[8px] border border-white/20">
                Air-Conditioned Hall with Projector Screen
              </span>
            </div>

            {/* Sub-photo with 15px radius */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-36 sm:h-44 rounded-[15px] overflow-hidden shadow-xs border border-[#E0D8CB] group">
                <img
                  src="/images/gino/gino_14_1FNcRRvL.jpg"
                  alt="Gino Tourist Home Seating Arrangement"
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-[6px]">
                  Meeting Seating
                </span>
              </div>

              <div className="relative h-36 sm:h-44 rounded-[15px] overflow-hidden shadow-xs border border-[#E0D8CB] group">
                <img
                  src="/images/gino/gino_15_1-sHcFec.jpg"
                  alt="Gino Tourist Home Beverage and Refreshment Counter"
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-[6px]">
                  Refreshment Counter
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Features */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-wider text-moss-700 font-bold block">
              Events & Business
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-neutral-900 leading-[1.2]">
              Meeting, Seminar & Gathering Space
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
              Equipped space suitable for business presentations, corporate reviews, regional staff meetings, and private celebrations in Kakkanad.
            </p>

            {/* Feature Cards Grid with 12px radius */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {banquetFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[12px] bg-white border border-[#E6E0D3] flex items-start gap-3 shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-[8px] bg-[#EBE4D5] text-moss-800 flex items-center justify-center shrink-0">
                    {getBanquetIcon(feat.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-neutral-900">{feat.title}</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-600 mt-0.5 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Inquire Button with 15px radius */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('grand-banquet')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-moss-700 hover:bg-moss-800 text-white text-xs font-bold uppercase tracking-wider rounded-[15px] transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Inquire for Hall Booking</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
