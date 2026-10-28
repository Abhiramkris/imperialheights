import React, { useState } from 'react';
import { Bed, Calendar, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { roomCategories } from '../data/hotelData';

export default function BookingBar({ onCheckAvailability }) {
  const [selectedRoom, setSelectedRoom] = useState(roomCategories[0].id);
  const [checkIn, setCheckIn] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckAvailability({
      roomId: selectedRoom,
      checkIn,
      checkOut,
      guests: parseInt(guests, 10),
    });
  };

  return (
    <div className="relative z-30 px-3 sm:px-6 -mt-10 sm:-mt-14 mb-16">
      <div className="max-w-5xl mx-auto">
        {/* Outer Floating Pill Container in Warm Sage Green matching reference image */}
        <div className="bg-[#BED3B4] p-2.5 sm:p-3.5 rounded-3xl sm:rounded-full shadow-2xl border border-white/70 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center gap-2.5 sm:gap-3">
            {/* Field 1: Room / Venue Selection */}
            <div className="w-full lg:flex-1 bg-white/95 rounded-2xl sm:rounded-full px-5 py-3 sm:py-3.5 flex items-center gap-3 border border-[#D7E3D3] shadow-xs hover:border-moss-600 transition">
              <Bed className="w-4 h-4 text-moss-700 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                  Room or Venue
                </label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-hidden cursor-pointer"
                >
                  <optgroup label="Heritage Rooms & Suites">
                    {roomCategories.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — ₹{r.price.toLocaleString('en-IN')}/night
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Banquets & Celebrations">
                    <option value="grand-banquet">Grand Imperial Banquet (200+ Capacity)</option>
                    <option value="dining-reservation">The Imperial Spice (Table & Feasts)</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Field 2: Check-in / Check-out Dates */}
            <div className="w-full lg:flex-1 bg-white/95 rounded-2xl sm:rounded-full px-5 py-3 sm:py-3.5 flex items-center gap-3 border border-[#D7E3D3] shadow-xs hover:border-moss-600 transition">
              <Calendar className="w-4 h-4 text-moss-700 shrink-0" />
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                    Check-In
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-hidden cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                    Check-Out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-hidden cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Field 3: Guests count */}
            <div className="w-full lg:w-48 bg-white/95 rounded-2xl sm:rounded-full px-5 py-3 sm:py-3.5 flex items-center gap-3 border border-[#D7E3D3] shadow-xs hover:border-moss-600 transition">
              <Users className="w-4 h-4 text-moss-700 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-hidden cursor-pointer"
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Guests (with Extra Bed)</option>
                  <option value="4">4 Guests (Family Suite)</option>
                </select>
              </div>
            </div>

            {/* Field 4: Dark Green Pill Button matching reference image button */}
            <button
              type="submit"
              className="w-full lg:w-auto px-8 py-4 sm:py-4 bg-moss-700 hover:bg-moss-800 text-white font-bold text-xs uppercase tracking-widest rounded-2xl sm:rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0 active:scale-95"
            >
              <span>Check Rates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Micro Guarantee Note */}
        <div className="flex items-center justify-center gap-2 pt-3 text-xs text-neutral-600 font-medium">
          <ShieldCheck className="w-4 h-4 text-moss-700" />
          <span>Best Rate Guarantee · Direct Desk Confirmation · No Advance Payment Required to Inquire</span>
        </div>
      </div>
    </div>
  );
}
