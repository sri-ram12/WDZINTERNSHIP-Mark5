import React from "react";
import "./CameraSection.css";

// Use large images for all or some features
const cameraFeatures = [
  {
    img: "/Images/cam1.jpg",
    title: "8x Optical Zoom",
    desc: "Zoom in on distant details with clarity."
  },
  {
    img: "/Images/cam2.jpg",
    title: "Night Mode",
    desc: "Advanced low-light capture for night scenes."
  },
  {
    img: "/Images/cam3.jpg",
    title: "48MP Sensor",
    desc: "Capture ultra-high-resolution photos."
  },
  {
    img: "/Images/cam4.jpg",
    title: "Cinematic Video",
    desc: "Film quality 4K video with auto-focus."
  }
];

export default function CameraSection() {
  return (
    <section className="camera-section">
      <div className="camera-center">
        <video
          className="camera-video"
          src="/camerateaser.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <h2>Pro Fusion Camera System </h2>
        <p>
          48MP triple cameras with zoom, ultra-wide, macro, and advanced cinematic video.
        </p>
        <div className="camera-feature-row">
          {cameraFeatures.map((f, i) => (
            <div className="feature-block" key={i}>
              {f.img && (
                <img src={f.img} alt={f.title} className="feature-img-large" />
              )}
              <div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
