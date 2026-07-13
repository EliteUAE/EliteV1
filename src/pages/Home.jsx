import React, { useState } from "react";
import Navbar from "@/components/elite/Navbar";
import Hero from "@/components/elite/Hero";
import Marquee from "@/components/elite/Marquee";
import About from "@/components/elite/About";
import PhotoBand from "@/components/elite/PhotoBand";
import Services from "@/components/elite/Services";
import Process from "@/components/elite/Process";
import GlobalReach from "@/components/elite/GlobalReach";
import Industries from "@/components/elite/Industries";
import Testimonials from "@/components/elite/Testimonials";
import Technology from "@/components/elite/Technology";
import CTA from "@/components/elite/CTA";
import FAQ from "@/components/elite/FAQ";
import Footer from "@/components/elite/Footer";
import BookingModal from "@/components/elite/BookingModal";
import BackgroundEffects from "@/components/elite/BackgroundEffects";
import docSigningImage from "@/assets/doc-signing.jpg";
import presenterImage from "@/assets/presenter.jpg";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="bg-void overflow-x-hidden">
      <BackgroundEffects />
      <Navbar onBooking={openBooking} />
      <Hero onBooking={openBooking} />
      <Marquee />
      <About onBooking={openBooking} />
      <PhotoBand
        image={docSigningImage}
        eyebrow="How We Work"
        title="Partnerships,"
        accent="Formalized."
        desc="From the first discovery call to a signed agreement, every touchpoint is handled with the same care — clear terms, no surprises, and a team that treats your business like their own."
        bg="bg-surface"
        onBooking={openBooking}
        ctaLabel="See Our Process"
      />
      <Services onBooking={openBooking} />
      <Process onBooking={openBooking} />
      <PhotoBand
        image={presenterImage}
        eyebrow="Transparent Reporting"
        title="Data You Can"
        accent="Actually Trust."
        desc="Weekly performance reviews, live dashboards, and honest metrics — you'll always know exactly how your team is performing, and where every lead stands."
        reverse
        bg="bg-void"
      />
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