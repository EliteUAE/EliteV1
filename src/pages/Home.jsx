import React, { useState } from "react";
import Navbar from "@/components/elite/Navbar";
import Hero from "@/components/elite/Hero";
import Marquee from "@/components/elite/Marquee";
import About from "@/components/elite/About";
import Services from "@/components/elite/Services";
import Stats from "@/components/elite/Stats";
import Process from "@/components/elite/Process";
import GlobalReach from "@/components/elite/GlobalReach";
import Industries from "@/components/elite/Industries";
import Testimonials from "@/components/elite/Testimonials";
import Technology from "@/components/elite/Technology";
import CTA from "@/components/elite/CTA";
import FAQ from "@/components/elite/FAQ";
import Footer from "@/components/elite/Footer";
import BookingModal from "@/components/elite/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="bg-void overflow-x-hidden">
      <Navbar onBooking={openBooking} />
      <Hero onBooking={openBooking} />
      <Marquee />
      <About onBooking={openBooking} />
      <Services onBooking={openBooking} />
      <Stats />
      <Process onBooking={openBooking} />
      <GlobalReach />
      <Industries />
      <Testimonials />
      <Technology />
      <CTA onBooking={openBooking} />
      <FAQ />
      <Footer onBooking={openBooking} />
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </div>
  );
}