import React, { useState, useRef, useEffect } from "react";
import "./PhoneFeatureExplorer.css";

const COLOR_OPTIONS = [
  { id: "orange", label: "Deep Orange", body: "#e67e22", darker: "#d35400" },
  { id: "black", label: "Black Titanium", body: "#1d1d1f", darker: "#0d0d0d" },
  { id: "white", label: "White Titanium", body: "#faf9f6", darker: "#e8e8ed" },
  { id: "blue", label: "Blue Titanium", body: "#394f6b", darker: "#2a3d52" },
];

const FEATURES = [
  {
    id: "colours",
    label: "Colours",
    image: "/images/p1.jpg",
    title: "Four rich new finishes.",
    text: "Deep Orange, Black Titanium, White Titanium and Blue Titanium, each with a matching frame.",
  },
  {
    id: "unibody",
    label: "Aluminium unibody",
    image: "/images/aluminium.jpg",
    title: "Precision‑milled aluminium.",
    text: "A single unibody enclosure that is light, strong and made for everyday durability.",
  },
  {
    id: "vapour",
    label: "Vapour chamber",
    image: "/images/vapourchamber.jpg",
    title: "Advanced vapour chamber cooling.",
    text: "Keeps A‑series performance sustained for longer gaming and pro workflows.",
  },
  {
    id: "shield",
    label: "Ceramic Shield",
    image: "/images/shield.jpg",
    title: "Ceramic Shield front.",
    text: "Tough glass that is more resistant to drops and scratches.",
  },
  {
    id: "display",
    label: "Immersive pro display",
    image: "/images/display.jpg",
    title: "Immersive Pro Display.",
    text: "Super Retina XDR with ProMotion for brighter, smoother visuals.",
  },
  {
    id: "camera",
    label: "Camera Control",
    image: "/images/camera.jpg",
    title: "Pro camera control.",
    text: "Jump between focal lengths, frame your shot and capture incredible detail.",
  },
  {
    id: "action",
    label: "Action button",
    image: "/images/action.jpg",
    title: "Customisable Action button.",
    text: "Launch the features you use most with a single press.",
  },
];

function PhoneFeatureExplorer() {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
  const [activeFeatureId, setActiveFeatureId] = useState("colours");

  const [rotation, setRotation] = useState({ x: 0, y: 180 });
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const startPos = useRef({ x: 0, y: 0 });

  const activeFeature =
    FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  // auto‑rotate phone
  useEffect(() => {
    if (!autoRotate) return;
    const id = setInterval(() => {
      setRotation((prev) => ({ x: 0, y: (prev.y + 0.25) % 360 }));
    }, 20);
    return () => clearInterval(id);
  }, [autoRotate]);

  const beginDrag = (x, y) => {
    setIsDragging(true);
    setAutoRotate(false);
    startPos.current = { x, y };
  };

  const moveDrag = (x, y) => {
    if (!isDragging) return;
    const dx = x - startPos.current.x;
    const dy = y - startPos.current.y;
    setRotation((prev) => ({
      x: Math.max(-30, Math.min(30, prev.x - dy * 0.3)),
      y: prev.y + dx * 0.3,
    }));
    startPos.current = { x, y };
  };

  const endDrag = () => setIsDragging(false);

  return (
    <section className="pfx-section">
      <div className="pfx-topbar">
        <span className="pfx-top-title">iPhone 17 Pro</span>
        <div className="pfx-top-actions">
          <button className="pfx-top-btn">Explore</button>
          <button className="pfx-top-btn primary">Buy</button>
        </div>
      </div>

      <div className="pfx-layout">
        {/* LEFT: feature options + colours */}
        <div className="pfx-left">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              type="button"
              className={`pfx-option ${
                activeFeatureId === feature.id ? "active" : ""
              }`}
              onClick={() => setActiveFeatureId(feature.id)}
            >
              <span className="pfx-option-plus">+</span>
              <span className="pfx-option-label">{feature.label}</span>
            </button>
          ))}

          {activeFeatureId === "colours" && (
            <div className="pfx-colour-row">
              {COLOR_OPTIONS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`pfx-colour-chip ${
                    selectedColor.id === c.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor(c)}
                >
                  <span
                    className="pfx-colour-dot"
                    style={{ backgroundColor: c.body }}
                  />
                  <span className="pfx-colour-name">{c.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CENTER: 3D phone model */}
        <div
          className="pfx-viewer"
          onMouseDown={(e) => beginDrag(e.clientX, e.clientY)}
          onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) =>
            beginDrag(e.touches[0].clientX, e.touches[0].clientY)
          }
          onTouchMove={(e) =>
            moveDrag(e.touches[0].clientX, e.touches[0].clientY)
          }
          onTouchEnd={endDrag}
        >
          <div
            className="pfx-phone-3d"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            <div
              className="phone"
              style={{ backgroundColor: selectedColor.body }}
            >
              {/* front */}
              <div className="face front">
                <div className="screen">
                  <div className="notch">
                    <div className="camera-dot" />
                  </div>
                </div>
              </div>

              {/* back */}
              <div
                className="face back"
                style={{ backgroundColor: selectedColor.body }}
              >
                <div className="camera-box">
                  <div className="lens-big lens-1">
                    <div className="lens-black-ring" />
                    <div className="lens-black-glass" />
                    <div className="lens-shine" />
                  </div>
                  <div className="lens-big lens-2">
                    <div className="lens-black-ring" />
                    <div className="lens-black-glass" />
                    <div className="lens-shine" />
                  </div>
                  <div className="lens-big lens-3">
                    <div className="lens-black-ring" />
                    <div className="lens-black-glass" />
                    <div className="lens-shine" />
                  </div>
                  <div className="flash-white" />
                  <div className="mic-dot" />
                </div>

                <div className="apple-logo" />
              </div>

              {/* edges */}
              <div
                className="face right"
                style={{ backgroundColor: selectedColor.darker }}
              >
                <div className="btn-power" />
                <div className="btn-action" />
              </div>
              <div
                className="face left"
                style={{ backgroundColor: selectedColor.darker }}
              >
                <div className="btn-mute" />
                <div className="btn-volume-up" />
                <div className="btn-volume-down" />
              </div>
              <div
                className="face top"
                style={{ backgroundColor: selectedColor.darker }}
              />
              <div
                className="face bottom"
                style={{ backgroundColor: selectedColor.darker }}
              >
                <div className="speaker-left" />
                <div className="usbc" />
                <div className="speaker-right" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: sliding feature image + text */}
        <div className="pfx-right">
          <div className="pfx-image-slider">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className={`pfx-image-slide ${
                  feature.id === activeFeatureId ? "active" : ""
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.label}
                  className="pfx-image"
                />
              </div>
            ))}
          </div>

          <div className="pfx-detail">
            <h3 className="pfx-detail-title">{activeFeature.title}</h3>
            <p className="pfx-detail-text">{activeFeature.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhoneFeatureExplorer;
