import React from 'react';
import { Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function CtaBanner({ onOpenBooking }) {
  return (
    <section className="relative py-20 lg:py-24 bg-[#1A2E1C] text-white overflow-hidden flex items-center justify-center">
      {/* Real Background Ambience */}
      <img
        src="/images/gino/gino_01_1dUKQXr5.jpg"
        alt="Gino Tourist Home Reception"
        className="absolute inset-0 w-full h-full object-cover brightness-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C] via-black/40 to-[#1A2E1C]"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs uppercase tracking-wider text-moss-300 font-bold">
          Direct Desk Booking
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold font-editorial tracking-tight text-white leading-tight">
          Reserve Your Stay at Gino Tourist Home
        </h2>

        <p className="text-sm sm:text-base text-neutral-200 font-normal max-w-lg mx-auto leading-relaxed">
          Clean AC & Non-AC rooms in Kakkanad, minutes from Civil Station and InfoPark Kochi. Guaranteed best direct desk rates without booking commissions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-6 py-3.5 bg-moss-700 hover:bg-moss-800 text-white text-xs uppercase tracking-wider font-bold rounded-[15px] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Directly Online</span>
          </button>

          <a
            href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Gino Tourist Home, I would like to inquire about booking a room.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700/80 hover:bg-emerald-700 border border-emerald-500/40 text-white text-xs uppercase tracking-wider font-bold rounded-[15px] transition flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>WhatsApp Confirmation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
