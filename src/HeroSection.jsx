import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <video
        className="hero-bg-video"
        src="teaser.mp4" // Place your video in public/ and update name if needed
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
