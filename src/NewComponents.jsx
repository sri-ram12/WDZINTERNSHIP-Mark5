import React, { useState, useEffect } from "react";
import "./NewComponents.css";

// 1. SCROLLING COLOR CAROUSEL
export function ColorCarousel() {
  const colors = [
    { name: "Black Titanium", hex: "#1d1d1f", gradient: "linear-gradient(135deg, #1d1d1f 0%, #2c2c2e 100%)" },
    { name: "White Titanium", hex: "#faf9f6", gradient: "linear-gradient(135deg, #faf9f6 0%, #e8e8ed 100%)" },
    { name: "Blue Titanium", hex: "#394f6b", gradient: "linear-gradient(135deg, #394f6b 0%, #4a6fa5 100%)" },
    { name: "Natural Titanium", hex: "#a8a8ad", gradient: "linear-gradient(135deg, #a8a8ad 0%, #c8c8cd 100%)" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="color-carousel-section">
      <div className="container">
        <h2 className="section-title-new">Available in four stunning finishes.</h2>
        <div className="color-showcase">
          <div className="color-display" style={{ background: colors[activeIndex].gradient }}>
            <div className="color-name-overlay">{colors[activeIndex].name}</div>
          </div>
          <div className="color-dots">
            {colors.map((color, index) => (
              <button
                key={color.name}
                className={`color-dot-btn ${index === activeIndex ? "active" : ""}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. DYNAMIC ISLAND FEATURE
export function DynamicIslandFeature() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="dynamic-island-section">
      <div className="container">
        <h2 className="section-title-new">Dynamic Island. A new way to interact with iPhone.</h2>
        <p className="section-subtitle-new">
          The Dynamic Island bubbles up alerts and Live Activities — so you don't miss them while you're doing something else.
        </p>
        <div className="island-demo">
          <div 
            className={`island-pill ${expanded ? "expanded" : ""}`}
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded ? (
              <>
                <div className="island-camera-hole"></div>
                <div className="island-mic-hole"></div>
              </>
            ) : (
              <div className="island-content">
                <div className="island-icon">🎵</div>
                <div className="island-info">
                  <div className="island-title">Now Playing</div>
                  <div className="island-subtitle">Artist Name - Song Title</div>
                </div>
                <div className="island-waveform">
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                </div>
              </div>
            )}
          </div>
          <p className="island-hint">Tap to expand</p>
        </div>
        <div className="island-uses">
          <div className="use-card">
            <div className="use-icon">🎵</div>
            <p>Music</p>
          </div>
          <div className="use-card">
            <div className="use-icon">📞</div>
            <p>Calls</p>
          </div>
          <div className="use-card">
            <div className="use-icon">⏱️</div>
            <p>Timer</p>
          </div>
          <div className="use-card">
            <div className="use-icon">📍</div>
            <p>Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. PRIVACY FEATURES
export function PrivacySection() {
  return (
    <section className="privacy-section">
      <div className="container">
        <h2 className="section-title-new">Privacy. That's iPhone.</h2>
        <p className="section-subtitle-new">
          iPhone is designed to protect your information and enable you to choose what you share.
        </p>
        <div className="privacy-grid">
          <div className="privacy-card">
            <div className="privacy-icon">🔒</div>
            <h3>App Privacy Report</h3>
            <p>See how apps are using the permissions you've granted them</p>
          </div>
          <div className="privacy-card">
            <div className="privacy-icon">📧</div>
            <h3>Mail Privacy Protection</h3>
            <p>Prevents senders from knowing when you've opened their email</p>
          </div>
          <div className="privacy-card">
            <div className="privacy-icon">🌐</div>
            <h3>Intelligent Tracking Prevention</h3>
            <p>Safari prevents trackers from following you across the web</p>
          </div>
          <div className="privacy-card">
            <div className="privacy-icon">📍</div>
            <h3>Location Controls</h3>
            <p>Decide which apps can access your location and when</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. CAMERA MODES SLIDER
export function CameraModesSlider() {
  const modes = [
    { name: "Portrait", icon: "👤", desc: "Studio-quality portraits with depth control" },
    { name: "Night", icon: "🌙", desc: "Incredible low-light photos automatically" },
    { name: "Cinematic", icon: "🎬", desc: "Shallow depth of field with focus transitions" },
    { name: "Macro", icon: "🔍", desc: "Stunning close-ups with incredible detail" },
    { name: "Panorama", icon: "🏞️", desc: "Capture breathtaking wide-angle views" },
    { name: "Time-lapse", icon: "⏰", desc: "Speed up time with creative videos" },
  ];

  const [activeMode, setActiveMode] = useState(0);

  return (
    <section className="camera-modes-section">
      <div className="container">
        <h2 className="section-title-new">Powerful camera modes for every moment.</h2>
        <div className="modes-slider">
          <div className="modes-preview">
            <div className="mode-icon-large">{modes[activeMode].icon}</div>
            <h3>{modes[activeMode].name}</h3>
            <p>{modes[activeMode].desc}</p>
          </div>
          <div className="modes-tabs">
            {modes.map((mode, index) => (
              <button
                key={mode.name}
                className={`mode-tab ${index === activeMode ? "active" : ""}`}
                onClick={() => setActiveMode(index)}
              >
                <span className="mode-tab-icon">{mode.icon}</span>
                <span>{mode.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. ECOSYSTEM INTEGRATION
export function EcosystemSection() {
  return (
    <section className="ecosystem-section">
      <div className="container">
        <h2 className="section-title-new">Works seamlessly with your Apple devices.</h2>
        <div className="ecosystem-grid">
          <div className="ecosystem-card">
            <div className="ecosystem-visual">
              <div className="device-icon">💻</div>
              <div className="plus-sign">+</div>
              <div className="device-icon">📱</div>
            </div>
            <h3>Universal Clipboard</h3>
            <p>Copy on iPhone, paste on Mac</p>
          </div>
          <div className="ecosystem-card">
            <div className="ecosystem-visual">
              <div className="device-icon">⌚</div>
              <div className="plus-sign">+</div>
              <div className="device-icon">📱</div>
            </div>
            <h3>Apple Watch</h3>
            <p>Unlock your iPhone automatically</p>
          </div>
          <div className="ecosystem-card">
            <div className="ecosystem-visual">
              <div className="device-icon">🎧</div>
              <div className="plus-sign">+</div>
              <div className="device-icon">📱</div>
            </div>
            <h3>AirPods</h3>
            <p>Automatic switching between devices</p>
          </div>
          <div className="ecosystem-card">
            <div className="ecosystem-visual">
              <div className="device-icon">🏠</div>
              <div className="plus-sign">+</div>
              <div className="device-icon">📱</div>
            </div>
            <h3>HomeKit</h3>
            <p>Control your smart home</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. COMPARISON TABLE
export function ComparisonTable() {
  return (
    <section className="comparison-section">
      <div className="container">
        <h2 className="section-title-new">Compare iPhone models.</h2>
        <div className="comparison-table">
          <div className="comparison-column">
            <div className="model-name">iPhone 17 Pro Max</div>
            <div className="comparison-item">
              <div className="item-label">Display</div>
              <div className="item-value">6.9"</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Chip</div>
              <div className="item-value">A18 Pro</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Camera</div>
              <div className="item-value">48MP Triple</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Battery</div>
              <div className="item-value">29 hrs</div>
            </div>
          </div>
          <div className="comparison-column">
            <div className="model-name">iPhone 17 Pro</div>
            <div className="comparison-item">
              <div className="item-label">Display</div>
              <div className="item-value">6.3"</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Chip</div>
              <div className="item-value">A18 Pro</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Camera</div>
              <div className="item-value">48MP Triple</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Battery</div>
              <div className="item-value">23 hrs</div>
            </div>
          </div>
          <div className="comparison-column">
            <div className="model-name">iPhone 17</div>
            <div className="comparison-item">
              <div className="item-label">Display</div>
              <div className="item-value">6.1"</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Chip</div>
              <div className="item-value">A18</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Camera</div>
              <div className="item-value">48MP Dual</div>
            </div>
            <div className="comparison-item">
              <div className="item-label">Battery</div>
              <div className="item-value">20 hrs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. TESTIMONIALS CAROUSEL
export function TestimonialsCarousel() {
  const testimonials = [
    { text: "The camera is absolutely incredible. Best phone I've ever owned.", author: "Sarah M.", rating: 5 },
    { text: "Battery life is insane. Easily lasts me two full days.", author: "John D.", rating: 5 },
    { text: "The titanium feels premium and the display is gorgeous.", author: "Emily R.", rating: 5 },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title-new">What people are saying.</h2>
        <div className="testimonial-card">
          <div className="stars">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className="testimonial-text">"{testimonials[current].text}"</p>
          <p className="testimonial-author">— {testimonials[current].author}</p>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. ACCESSORIES SECTION
export function AccessoriesSection() {
  return (
    <section className="accessories-section">
      <div className="container">
        <h2 className="section-title-new">Essential accessories.</h2>
        <div className="accessories-grid">
          <div className="accessory-card">
            <div className="accessory-image">
              <div className="accessory-icon">📱</div>
            </div>
            <h3>Silicone Case</h3>
            <p className="price">$49</p>
          </div>
          <div className="accessory-card">
            <div className="accessory-image">
              <div className="accessory-icon">🔌</div>
            </div>
            <h3>USB-C Cable</h3>
            <p className="price">$19</p>
          </div>
          <div className="accessory-card">
            <div className="accessory-image">
              <div className="accessory-icon">⚡</div>
            </div>
            <h3>MagSafe Charger</h3>
            <p className="price">$39</p>
          </div>
          <div className="accessory-card">
            <div className="accessory-image">
              <div className="accessory-icon">🛡️</div>
            </div>
            <h3>Screen Protector</h3>
            <p className="price">$29</p>
          </div>
        </div>
      </div>
    </section>
  );
}
