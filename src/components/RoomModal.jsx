import React from 'react';
import { X, Bed, Users, Maximize2, Check, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function RoomModal({ room, onClose, onBookRoom }) {
  if (!room) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DDD5C7] text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900 rounded-t-3xl">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

          {/* Price Tag Pill */}
          <div className="absolute bottom-4 left-6 z-10 text-white">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brass-400 block">
              Official Desk Rate
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-4xl font-editorial font-bold text-white">
                ₹{room.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-neutral-300">/ night (+ taxes)</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">
              {room.name}
            </h3>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              {room.longDescription || room.description}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5] text-center">
              <Bed className="w-4 h-4 text-moss-700 mx-auto mb-1" />
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Bed Type</span>
              <span className="text-xs font-bold text-neutral-800">{room.bed}</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5] text-center">
              <span className="text-xs font-bold text-moss-700 block mb-1">A/C</span>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Climate</span>
              <span className="text-xs font-bold text-neutral-800">{room.climate}</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5] text-center">
              <Users className="w-4 h-4 text-moss-700 mx-auto mb-1" />
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Capacity</span>
              <span className="text-xs font-bold text-neutral-800">{room.capacity}</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5] text-center">
              <Maximize2 className="w-4 h-4 text-moss-700 mx-auto mb-1" />
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Dimensions</span>
              <span className="text-xs font-bold text-neutral-800">{room.size}</span>
            </div>
          </div>

          {/* Key Inclusions Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Room Inclusions & Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-medium text-neutral-700">
                  <Check className="w-4 h-4 text-moss-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
              <div className="flex items-start gap-2 text-xs font-medium text-neutral-700">
                <Check className="w-4 h-4 text-moss-700 shrink-0 mt-0.5" />
                <span>Complimentary high-speed fiber Wi-Fi</span>
              </div>
              <div className="flex items-start gap-2 text-xs font-medium text-neutral-700">
                <Check className="w-4 h-4 text-moss-700 shrink-0 mt-0.5" />
                <span>Free secure vehicle parking on-site</span>
              </div>
            </div>
          </div>

          {/* Direct Booking Action Banner */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="w-full sm:flex-1 py-4 px-6 rounded-full bg-moss-700 hover:bg-moss-800 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Reserve This Suite</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${hotelInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#FAF7F2] hover:bg-neutral-100 border border-[#DDD5C7] text-neutral-800 font-semibold text-xs transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-moss-700" />
              <span>Call Front Desk</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-moss-700" />
            <span>Guaranteed Direct Desk Rates · Check-in {hotelInfo.checkIn} · Check-out {hotelInfo.checkOut}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
