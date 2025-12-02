import React, { useState, useRef, useEffect } from "react";
import "./IPhone17ProMax.css";

const COLORS = [
  { name: "Deep Orange", body: "#e67e22", darker: "#d35400" },
  { name: "Black Titanium", body: "#1d1d1f", darker: "#0d0d0d" },
  { name: "White Titanium", body: "#faf9f6", darker: "#e8e8ed" },
  { name: "Blue Titanium", body: "#394f6b", darker: "#2a3d52" }
];

function IPhone17ProMax() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [rotation, setRotation] = useState({ x: 0, y: 180 });
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setRotation(prev => ({ x: 0, y: (prev.y + 0.3) % 360 }));
    }, 20);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;
    setRotation(prev => ({
      x: Math.max(-30, Math.min(30, prev.x - deltaY * 0.3)),
      y: prev.y + deltaX * 0.3
    }));
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    const touch = e.touches[0];
    startPos.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - startPos.current.x;
    const deltaY = touch.clientY - startPos.current.y;
    setRotation(prev => ({
      x: Math.max(-30, Math.min(30, prev.x - deltaY * 0.3)),
      y: prev.y + deltaX * 0.3
    }));
    startPos.current = { x: touch.clientX, y: touch.clientY };
  };

  return (
    <div className="showcase">
      {/* Sticky heading + color controls */}
      <div className="iphone17-header">
        <h1 className="title">iPhone 17 Pro Max</h1>
        <p className="subtitle">Silicone Case Collection</p>

        <div className="colors">
          {COLORS.map(color => (
            <button
              key={color.name}
              className={`color-btn ${selectedColor.name === color.name ? "active" : ""}`}
              onClick={() => setSelectedColor(color)}
            >
              <span className="color-circle" style={{ backgroundColor: color.body }} />
              <span>{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="viewer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="phone-3d"
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          <div className="phone" style={{ backgroundColor: selectedColor.body }}>
            {/* Front Face */}
            <div className="face front">
              <div className="screen">
                <div className="notch">
                  <div className="camera-dot" />
                </div>
              </div>
            </div>

            {/* Back Face - BOX TYPE CAMERA */}
            <div className="face back" style={{ backgroundColor: selectedColor.body }}>
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

              <div className="apple-logo">
                <svg viewBox="0 0 24 30" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
            </div>

            {/* Right Side */}
            <div className="face right" style={{ backgroundColor: selectedColor.darker }}>
              <div className="btn-power" />
              <div className="btn-action" />
            </div>

            {/* Left Side */}
            <div className="face left" style={{ backgroundColor: selectedColor.darker }}>
              <div className="btn-mute" />
              <div className="btn-volume-up" />
              <div className="btn-volume-down" />
            </div>

            {/* Top & Bottom */}
            <div className="face top" style={{ backgroundColor: selectedColor.darker }} />
            <div className="face bottom" style={{ backgroundColor: selectedColor.darker }}>
              <div className="speaker-left" />
              <div className="usbc" />
              <div className="speaker-right" />
            </div>
          </div>
        </div>

        <div className="hint">
          {autoRotate ? "Drag to rotate" : "Release to resume"}
        </div>
      </div>
    </div>
  );
}

export default IPhone17ProMax;
