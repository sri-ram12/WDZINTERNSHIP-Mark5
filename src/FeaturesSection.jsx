import React from "react";
import "./FeaturesSection.css";

export default function FeaturesSection() {
  // Info and images like color choices, durability, battery, AI features
  return (
    <section className="features-section">
      <h2>Highlights</h2>
      <ul>
        <li>Heat-forged aluminum unibody design</li>
        <li>Longest battery life ever</li>
        <li>Super Retina XDR display</li>
        <li>Apple Intelligence AI features</li>
        {/* Add more details as desired */}
      </ul>
    </section>
  );
}
