import React, { useState } from "react";
import "./CameraZoom.css";

const ZOOMS = [1, 2, 4, 8];

function CameraZoom() {
  const [zoom, setZoom] = useState(1);

  return (
    <section className="camzoom-section">
      <div className="container camzoom-inner">
        <div className="camzoom-copy">
          <p className="camzoom-eyebrow">Camera</p>
          <h2 className="camzoom-title">Tap to change your zoom.</h2>
          <p className="camzoom-subtitle">
            Quickly switch between 1×, 2×, 4× and 8×, just like the iPhone 17 Pro Max telephoto.
          </p>
        </div>

        <div className="camzoom-view">
          <div className="camzoom-frame">
            <div
              className="camzoom-image-wrap"
              style={{ transform: `scale(${zoom})` }}
            >
              <img
                src="/images/nature.jpg"
                alt="Zoom preview"
                className="camzoom-image"
              />
            </div>

            <div className="camzoom-hud">
              <span className="camzoom-hud-text">{zoom.toFixed(1)}x</span>
            </div>
          </div>

          <div className="camzoom-buttons">
            {ZOOMS.map((z) => (
              <button
                key={z}
                type="button"
                className={`camzoom-btn ${zoom === z ? "active" : ""}`}
                onClick={() => setZoom(z)}
              >
                {z}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CameraZoom;
