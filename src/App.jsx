import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import WelcomeStory from './components/WelcomeStory';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import RoomsSection from './components/RoomsSection';
import DiningSection from './components/DiningSection';
import BanquetsSection from './components/BanquetsSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import RoomModal from './components/RoomModal';
import BookingModal from './components/BookingModal';

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingRoomId, setBookingRoomId] = useState(null);
  const [bookingDates, setBookingDates] = useState(null);

  const handleOpenBooking = (roomId = null, dates = null) => {
    setBookingRoomId(roomId);
    if (dates) setBookingDates(dates);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setBookingRoomId(null);
    setBookingDates(null);
  };

  const handleCheckAvailability = (searchParams) => {
    setBookingRoomId(searchParams.roomId);
    setBookingDates({
      checkIn: searchParams.checkIn,
      checkOut: searchParams.checkOut,
      guests: searchParams.guests,
    });
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E251E] font-sans">
      {/* Floating Pill Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Scenic Framed Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Floating Reservation Search Pill Bar */}
        <BookingBar onCheckAvailability={handleCheckAvailability} />

        {/* Two-Column Heritage Welcome Story */}
        <WelcomeStory onOpenBooking={() => handleOpenBooking()} />
        {/* Accommodations Grid with Authentic Photos & Direct Rates */}
        <RoomsSection onSelectRoom={(room) => setSelectedRoom(room)} />

        {/* Essential Amenities & Hotel Facilities */}
        <AmenitiesShowcase onOpenBooking={() => handleOpenBooking()} />

        {/* Restaurant & Dining Experience */}
        <DiningSection onOpenBooking={(type) => handleOpenBooking(type)} />

        {/* Conference & Banquet Meeting Facilities */}
        <BanquetsSection onOpenBooking={(type) => handleOpenBooking(type)} />

        {/* Visual Journey Gallery with Category Filters */}
        <GallerySection />

        {/* Google 5-Star Reviews & Verified Testimonials Carousel */}
        <ReviewsSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Atmospheric Call-to-Action Banner */}
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Detailed Room Inspection Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onBookRoom={(roomId) => {
            setSelectedRoom(null);
            handleOpenBooking(roomId);
          }}
        />
      )}

      {/* Interactive Booking Reservation Modal */}
      {bookingOpen && (
        <BookingModal
          initialRoomId={bookingRoomId}
          initialDates={bookingDates}
          onClose={handleCloseBooking}
        />
      )}
    </div>
  );
}
