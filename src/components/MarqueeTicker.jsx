import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "ASHOKA IMPERIAL KOCHI",
    "ESTABLISHED 1984",
    "AUTHENTIC KERALA HOSPITALITY",
    "QUEEN OF THE ARABIAN SEA",
    "DIRECT DESK ROOM RATES",
    "THE IMPERIAL SPICE DINING",
    "GRAND BANQUET & CONFERENCES",
    "TRANQUIL COURTYARD RETREAT",
    "24/7 DEDICATED CONCIERGE",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-moss-700 text-[#FAF7F2] py-4 border-y border-moss-800 select-none shadow-inner">
      {/* Soft gradient edge masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-moss-700 to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-moss-700 to-transparent z-10"></div>

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First Loop */}
        {items.map((text, idx) => (
          <div key={`m1-${idx}`} className="flex items-center mx-5 sm:mx-8">
            <span className="text-xs sm:text-sm font-editorial tracking-[0.25em] font-medium uppercase text-[#FAF8F5]/90">
              {text}
            </span>
            <span className="text-brass-400 mx-5 sm:mx-8 text-xs">✦</span>
          </div>
        ))}
        {/* Duplicate Loop for seamless infinity */}
        {items.map((text, idx) => (
          <div key={`m2-${idx}`} className="flex items-center mx-5 sm:mx-8">
            <span className="text-xs sm:text-sm font-editorial tracking-[0.25em] font-medium uppercase text-[#FAF8F5]/90">
              {text}
            </span>
            <span className="text-brass-400 mx-5 sm:mx-8 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
