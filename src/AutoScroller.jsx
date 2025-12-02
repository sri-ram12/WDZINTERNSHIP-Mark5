import React, { useState, useEffect } from "react";
import "./AutoScroller.css";

const IMAGES = [
  "/images/cam1.jpg",
  "/images/cam2.jpg",
  "/images/cam3.jpg",
  "/images/cam4.jpg",
  "/images/file1.jpg",
  "/images/file2.jpg",
  "/images/file5.jpg",
  "/images/file7.jpg",
  "/images/pic5.jpg",
];

function AutoScroller() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000); // 3s per image
    return () => clearInterval(id);
  }, []);

  return (
    <section className="auto-scroll">
        <h1> <center><b> Highlights</b></center></h1>
      <div className="auto-scroll-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {IMAGES.map((src, i) => (
          <div className="auto-slide" key={i}>
            <img src={src} alt={`slide-${i + 1}`} className="auto-img" />
          </div>
        ))}
      </div>

      <div className="auto-dots">
        {IMAGES.map((_, i) => (
          <span
            key={i}
            className={`auto-dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}

export default AutoScroller;
