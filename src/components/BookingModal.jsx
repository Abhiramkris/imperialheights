import React, { useState, useMemo } from 'react';
import { 
  X, 
  Hotel, 
  Calendar, 
  Users, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';
import { roomCategories, hotelInfo } from '../data/hotelData';

export default function BookingModal({ initialRoomId, initialDates, onClose }) {
  const [roomId, setRoomId] = useState(initialRoomId || roomCategories[0].id);
  const [checkIn, setCheckIn] = useState(initialDates?.checkIn || (() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }));
  const [checkOut, setCheckOut] = useState(initialDates?.checkOut || (() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }));
  const [guests, setGuests] = useState(initialDates?.guests ? String(initialDates.guests) : '2');
  const [extraBed, setExtraBed] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  // Selected room details
  const selectedRoom = useMemo(() => {
    return roomCategories.find((r) => r.id === roomId);
  }, [roomId]);

  // Calculate nights
  const nights = useMemo(() => {
    try {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  }, [checkIn, checkOut]);

  // Calculate estimated total
  const estimatedTotal = useMemo(() => {
    if (!selectedRoom) return 0;
    const baseRoom = selectedRoom.price * nights;
    const bedCost = extraBed ? hotelInfo.extraPersonRate * nights : 0;
    return baseRoom + bedCost;
  }, [selectedRoom, nights, extraBed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'ASH-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const roomTitle = selectedRoom ? selectedRoom.name : 'Grand Banquet / Hall';
    const message = encodeURIComponent(
      `Hello Ashoka Imperial Kochi Desk, I would like to inquire about booking:\n\n` +
      `• Type: ${roomTitle}\n` +
      `• Dates: ${checkIn} to ${checkOut} (${nights} night${nights > 1 ? 's' : ''})\n` +
      `• Guests: ${guests}\n` +
      `• Extra Bed: ${extraBed ? 'Yes' : 'No'}\n` +
      `• Name: ${fullName || 'Guest'}\n\n` +
      `Please let me know room availability and confirm direct desk reservation. Thank you!`
    );
    const cleanPhone = hotelInfo.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DDD5C7] text-neutral-900 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* Submission Success State */
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-moss-100 text-moss-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-moss-700">
                Reservation Request Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">
                Thank You, {fullName || 'Valued Guest'}
              </h3>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                Our front desk will call your number within 15 minutes to confirm your dates, guest count, and guarantee your direct rate.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5] max-w-sm mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Inquiry Reference:</span>
                <span className="font-mono font-bold text-neutral-900">{refNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Selected Category:</span>
                <span className="font-bold text-neutral-900">{selectedRoom?.name || 'Ashoka Imperial'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Dates:</span>
                <span className="font-medium text-neutral-800">{checkIn} – {checkOut} ({nights}N)</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-neutral-200">
                <span className="text-neutral-500">Estimated Total:</span>
                <span className="font-bold text-moss-800 text-sm">₹{estimatedTotal.toLocaleString('en-IN')} (+ taxes)</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs uppercase tracking-wider transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-moss-50 border border-moss-200 text-[10px] font-bold tracking-wider uppercase text-moss-800">
                <PhoneCall className="w-3 h-3 text-moss-700" />
                <span>Quick Reservation Desk</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">
                Book Your Stay Directly
              </h3>
              <p className="text-xs text-neutral-500">
                Our front desk will call to confirm availability & direct rates
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type / Room Selector */}
              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Hotel className="w-3.5 h-3.5 text-moss-700" />
                  <span>Type (Room / Venue) *</span>
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs font-semibold text-neutral-800 focus:outline-moss-700 focus:bg-white transition cursor-pointer"
                >
                  <optgroup label="Rooms & Suites">
                    {roomCategories.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — ₹{r.price.toLocaleString('en-IN')} / night
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Venues & Events">
                    <option value="grand-banquet">Grand Imperial Banquet Hall (200+ Capacity)</option>
                    <option value="dining-reservation">The Imperial Spice Restaurant (Table & Feasts)</option>
                  </optgroup>
                </select>
              </div>

              {/* Date pickers */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-moss-700" />
                    <span>Check-In *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs font-semibold text-neutral-800 focus:outline-moss-700 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-moss-700" />
                    <span>Check-Out *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs font-semibold text-neutral-800 focus:outline-moss-700 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Guests and Extra Bed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-moss-700" />
                    <span>Guests *</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs font-semibold text-neutral-800 focus:outline-moss-700 focus:bg-white transition"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>

                <div className="pt-4 sm:pt-5">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-neutral-800">
                    <input
                      type="checkbox"
                      checked={extraBed}
                      onChange={(e) => setExtraBed(e.target.checked)}
                      className="w-4 h-4 rounded text-moss-700 focus:ring-moss-700 border-neutral-300"
                    />
                    <span>Add Extra Bed (+₹{hotelInfo.extraPersonRate}/night)</span>
                  </label>
                </div>
              </div>

              {/* Estimated Pricing Summary Card */}
              {selectedRoom && (
                <div className="p-3.5 rounded-2xl bg-moss-50 border border-moss-200/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-moss-900 block">
                      Estimated Stay: {nights} night{nights > 1 ? 's' : ''}
                    </span>
                    <span className="text-[11px] text-moss-700">
                      ₹{selectedRoom.price.toLocaleString('en-IN')}/night {extraBed ? `+ ₹${hotelInfo.extraPersonRate} extra bed` : ''}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral-500 block">Total Est.</span>
                    <span className="font-editorial text-lg font-bold text-moss-800">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              )}

              {/* Contact Info Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-moss-700" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Varma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-800 focus:outline-moss-700 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-moss-700" />
                    <span>Phone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98470 12345"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-800 focus:outline-moss-700 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-moss-700" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-800 focus:outline-moss-700 focus:bg-white transition"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-moss-700 hover:bg-moss-800 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Request Booking Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 px-6 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Or Instant WhatsApp Inquiry</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 font-medium pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-moss-700" />
                <span>Zero advance deposit needed · Direct front desk confirmation</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
