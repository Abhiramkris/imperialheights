import React from 'react';
import { Mic, Users, Sparkles, Utensils, Calendar, CheckCircle2 } from 'lucide-react';
import { banquetFeatures } from '../data/hotelData';

export default function BanquetsSection({ onOpenBooking }) {
  const getBanquetIcon = (icon) => {
    switch (icon) {
      case 'Mic': return <Mic className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="banquets" className="py-24 lg:py-32 bg-white border-b border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Main Hall + Sub-views */}
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            {/* Main Hall Photo */}
            <div className="relative h-72 sm:h-84 w-full rounded-3xl overflow-hidden shadow-lg border border-[#E0D8CB] group">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                alt="Ashoka Imperial Grand Banquet and Conference Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20">
                200+ Guest Capacity Pillar-Free Hall
              </span>
            </div>

            {/* Two Side-by-side Sub-photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border border-[#E0D8CB] group">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
                  alt="Speaker Dais and Stage Podium"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  Speaker Dais & Podium
                </span>
              </div>

              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border border-[#E0D8CB] group">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
                  alt="Draped Banquet Seating"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  Seating Arrangements
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Features */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-bold block">
              Events & Celebrations
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900 leading-[1.15]">
              Grand Banquet & <br />
              <span className="italic font-bold text-moss-700">Conference Facilities</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
              Pillar-free, climate-controlled venue with 200+ guest capacity for weddings, engagement ceremonies, corporate seminars, and grand family celebrations in Kochi.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {banquetFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6E0D3] flex items-start gap-3 hover:border-moss-600 transition shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EBE4D5] text-moss-700 flex items-center justify-center shrink-0">
                    {getBanquetIcon(feat.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">{feat.title}</h4>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Inquire Button */}
            <div className="pt-3">
              <button
                onClick={() => onOpenBooking('grand-banquet')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-moss-700 hover:bg-moss-800 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-brass-400" />
                <span>Inquire for Hall Booking</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
