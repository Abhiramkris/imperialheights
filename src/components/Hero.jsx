import React from 'react';
import { ArrowRight, Phone, MessageSquare, Check, MapPin } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-6 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto relative rounded-[15px] overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center shadow-lg border border-[#E0D8CB] bg-neutral-900">
        {/* Real Panoramic Reception Photo */}
        <img
          src="/images/gino/gino_01_1dUKQXr5.jpg"
          alt="Gino Tourist Home Kakkanad Reception Lobby and Front Desk"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90 filter"
        />

        {/* Ambient Dark Gradient for crisp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl px-6 sm:px-12 py-12 text-white w-full">
          <div className="space-y-5">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-black/40 border border-white/20 text-neutral-200 text-xs font-semibold tracking-wide backdrop-blur-xs">
              <MapPin className="w-3.5 h-3.5 text-brass-400" />
              <span>Near Civil Station, Kakkanad · InfoPark 5 mins</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold font-editorial tracking-tight leading-[1.15] text-white">
              Comfortable, Spotless & Accessible Lodging in Kochi
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed max-w-xl">
              Stay in the administrative and tech heart of Kochi. Spotless AC & Non-AC rooms with attached baths, in-house restaurant & bar, high-speed Wi-Fi, and guaranteed direct desk rates.
            </p>

            {/* Action Buttons with 15px radius */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 bg-moss-700 hover:bg-moss-800 text-white text-xs uppercase tracking-wider font-bold rounded-[15px] shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Check Rates & Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Gino Tourist Home, I would like to inquire about room availability.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/20 hover:bg-white/30 border border-white/40 text-white text-xs uppercase tracking-wider font-bold rounded-[15px] backdrop-blur-xs transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="px-4 py-3 bg-black/40 hover:bg-black/60 border border-white/20 text-neutral-200 text-xs font-semibold rounded-[15px] backdrop-blur-xs transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-300" />
                <span>Call: {hotelInfo.phone}</span>
              </a>
            </div>

            {/* Highlights Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 text-xs text-neutral-200">
              <span className="px-3 py-1 rounded-[10px] bg-black/40 border border-white/15 backdrop-blur-xs flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Direct Desk Pricing
              </span>
              <span className="px-3 py-1 rounded-[10px] bg-black/40 border border-white/15 backdrop-blur-xs flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Clean Attached Bathrooms
              </span>
              <span className="px-3 py-1 rounded-[10px] bg-black/40 border border-white/15 backdrop-blur-xs flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                On-Site Vehicle Parking
              </span>
              <span className="px-3 py-1 rounded-[10px] bg-black/40 border border-white/15 backdrop-blur-xs flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                24/7 Front Desk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
