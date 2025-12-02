import React, { useRef, useEffect } from "react";
import "./PerformanceSection.css";

// Make sure ALL these files exist in /public/images/
const performanceImages = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
];

export default function PerformanceSection() {
  const carouselRef = useRef(null);
  const angleRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startAngleRef = useRef(0);
  const autoRotateInterval = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const itemCount = performanceImages.length;
    const radius = 270; // spacing for 8 portrait cards

    function setItems() {
      const slides = carouselRef.current.children;
      for (let i = 0; i < itemCount; i++) {
        const theta = (360 / itemCount) * i;
        slides[i].style.transform =
          `rotateY(${theta}deg) translateZ(${radius}px) rotateX(-8deg)`;
      }
      carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
    }

    setItems();

    // SLOWER rotation: smaller step + slightly higher interval
    autoRotateInterval.current = setInterval(() => {
      if (!draggingRef.current && carouselRef.current) {
        angleRef.current -= 0.3; // was 0.65
        carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      }
    }, 40); // was 28

    function onPointerMove(e) {
      if (!draggingRef.current || !carouselRef.current) return;
      const dx = e.clientX - startXRef.current;
      angleRef.current = startAngleRef.current + dx * 0.4;
      carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
    }

    function onPointerUp() {
      draggingRef.current = false;
    }

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      if (autoRotateInterval.current) clearInterval(autoRotateInterval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlePointerDown(e) {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startAngleRef.current = angleRef.current;
    if (e.target.setPointerCapture) {
      e.target.setPointerCapture(e.pointerId);
    }
  }

  return (
    <section className="performance-section">
      <h2 className="performance-title">Unmatched Pro Performance</h2>
      <p className="performance-desc">
        360° rotating gallery with a subtle tilt.
        <br />
        Drag to rotate and explore every frame.
      </p>

      <div
        className="carousel-3d-container"
        onPointerDown={handlePointerDown}
        aria-label="360 degree performance images"
      >
        <div className="carousel-3d" ref={carouselRef}>
          {performanceImages.map((src, i) => (
            <div className="carousel-3d-card" key={i}>
              <img
                src={src}
                alt={`Performance highlight ${i + 1}`}
                className="carousel-3d-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
