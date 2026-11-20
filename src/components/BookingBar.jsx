import React, { useState } from 'react';
import { Bed, Calendar, Users, ArrowRight, Check } from 'lucide-react';
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
    <div className="relative z-30 px-3 sm:px-6 -mt-8 sm:-mt-10 mb-12">
      <div className="max-w-5xl mx-auto">
        {/* Professional 15px rounded booking card */}
        <div className="bg-white p-3 sm:p-4 rounded-[15px] shadow-lg border border-[#E0D8CB]">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center gap-3">
            {/* Field 1: Room Selection */}
            <div className="w-full lg:flex-1 bg-[#FAF8F5] rounded-[12px] px-4 py-2.5 flex items-center gap-3 border border-[#E6E0D5] hover:border-moss-600 transition">
              <Bed className="w-4 h-4 text-moss-700 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                  Select Room
                </label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-hidden cursor-pointer"
                >
                  <optgroup label="Room Categories">
                    {roomCategories.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — ₹{r.price.toLocaleString('en-IN')}/night
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Meetings & Dining">
                    <option value="grand-banquet">Conference & Meeting Hall</option>
                    <option value="dining-reservation">In-House Dining Reservation</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Field 2: Dates */}
            <div className="w-full lg:flex-1 bg-[#FAF8F5] rounded-[12px] px-4 py-2.5 flex items-center gap-3 border border-[#E6E0D5] hover:border-moss-600 transition">
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
            <div className="w-full lg:w-44 bg-[#FAF8F5] rounded-[12px] px-4 py-2.5 flex items-center gap-3 border border-[#E6E0D5] hover:border-moss-600 transition">
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

            {/* Submit Button */}
            <div className="w-full lg:w-auto">
              <button
                type="submit"
                className="w-full lg:w-auto px-6 py-3.5 bg-moss-700 hover:bg-moss-800 text-white rounded-[12px] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition active:scale-98 cursor-pointer"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Micro Guarantee Note */}
          <div className="mt-2.5 pt-2 border-t border-neutral-100 flex flex-wrap items-center justify-between text-[11px] text-neutral-500 px-1">
            <span className="flex items-center gap-1.5 font-medium text-emerald-800">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Best Direct Desk Pricing Guaranteed
            </span>
            <span>Check-in 12:00 PM · Check-out 11:00 AM · Instant WhatsApp Confirmation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
