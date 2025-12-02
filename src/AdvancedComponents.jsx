import React, { useState, useEffect, useRef } from "react";
import "./AdvancedComponents.css";

/* 1. CINEMATIC VIDEO SHOWCASE */
export function CinematicShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.loop = true;
    v.playbackRate = 2;

    const playPromise = v.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      v.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="cinematic-showcase">
      <div className="container">
        <h2 className="section-title-adv">
          Cinematic mode. Hollywood-level depth of field.
        </h2>
        <p className="section-subtitle-adv">
          Automatically shifts focus between subjects. Create beautiful videos
          with a depth-of-field effect that rivals professional cameras.
        </p>

        <div className="video-showcase-wrapper">
          <div className="video-container" onClick={togglePlay}>
            <div className="video-placeholder-cinematic">
              <div className={`play-overlay ${isPlaying ? "hidden" : ""}`}>
                <div className="play-btn-large">▶</div>
                <p>Tap to watch Cinematic mode in action</p>
              </div>

              <video
                ref={videoRef}
                className="cinematic-video"
                src="cinematicvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="video-background">
                <div className="cinematic-subject subject-1"></div>
                <div className="cinematic-subject subject-2"></div>
                <div className="blur-effect"></div>
              </div>
            </div>

            <div className="video-controls">
              <button className="control-btn" onClick={togglePlay}>
                {isPlaying ? "⏸" : "▶"}
              </button>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <span className="time-display">0:15</span>
            </div>
          </div>

          <div className="cinematic-features">
            <div className="feature-item">
              <div className="feature-icon-circle">🎯</div>
              <h3>Auto Focus</h3>
              <p>Seamlessly shifts focus between subjects</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-circle">📹</div>
              <h3>4K HDR</h3>
              <p>Record in stunning 4K at 30fps</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-circle">✨</div>
              <h3>Bokeh Effect</h3>
              <p>Beautiful background blur like DSLR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 2. INTERACTIVE SIZE COMPARISON */
export function SizeComparison() {
  const [selectedModel, setSelectedModel] = useState("pro-max");

  const models = {
    "pro-max": {
      name: "iPhone 17 Pro Max",
      width: '6.9"',
      height: "160.8mm",
      weight: "221g",
    },
    pro: {
      name: "iPhone 17 Pro",
      width: '6.3"',
      height: "146.6mm",
      weight: "206g",
    },
    regular: {
      name: "iPhone 17",
      width: '6.1"',
      height: "147.6mm",
      weight: "194g",
    },
  };

  return (
    <section className="size-comparison">
      <div className="container">
        <h2 className="section-title-adv">Choose your size.</h2>
        <p className="section-subtitle-adv">
          All three models feature stunning displays, powerful performance,
          and advanced cameras. Pick the size that fits your life.
        </p>

        <div className="comparison-interactive">
          <div className="phones-visual">
            <div
              className={`phone-model model-pro-max ${
                selectedModel === "pro-max" ? "active" : ""
              }`}
            >
              <div className="phone-frame">
                <div className="notch"></div>
              </div>
            </div>
            <div
              className={`phone-model model-pro ${
                selectedModel === "pro" ? "active" : ""
              }`}
            >
              <div className="phone-frame">
                <div className="notch"></div>
              </div>
            </div>
            <div
              className={`phone-model model-regular ${
                selectedModel === "regular" ? "active" : ""
              }`}
            >
              <div className="phone-frame">
                <div className="notch"></div>
              </div>
            </div>
          </div>

          <div className="model-selector">
            {Object.entries(models).map(([key, data]) => (
              <button
                key={key}
                className={`model-btn ${
                  selectedModel === key ? "active" : ""
                }`}
                onClick={() => setSelectedModel(key)}
              >
                <div className="model-name">{data.name}</div>
                <div className="model-specs">
                  <span>{data.width}</span>
                  <span>·</span>
                  <span>{data.height}</span>
                  <span>·</span>
                  <span>{data.weight}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. MAGSAFE ACCESSORIES INTERACTIVE */
export function MagSafeInteractive() {
  const [selectedAccessory, setSelectedAccessory] = useState("wallet");

  const accessories = {
    wallet: {
      name: "MagSafe Wallet",
      price: "$59",
      desc: "Holds up to three cards with Find My support",
      icon: "💳",
    },
    battery: {
      name: "MagSafe Battery Pack",
      price: "$99",
      desc: "Extra power when you need it most",
      icon: "🔋",
    },
    charger: {
      name: "MagSafe Charger",
      price: "$39",
      desc: "Fast wireless charging up to 15W",
      icon: "⚡",
    },
    stand: {
      name: "MagSafe Stand",
      price: "$79",
      desc: "Adjustable charging stand for desk or bedside",
      icon: "📱",
    },
  };

  return (
    <section className="magsafe-interactive">
      <div className="container">
        <h2 className="section-title-adv">MagSafe. Snap and go.</h2>
        <p className="section-subtitle-adv">
          MagSafe accessories attach magnetically to the back of iPhone 17 Pro
          for faster wireless charging and easy attachment.
        </p>

        <div className="magsafe-demo">
          <div className="magsafe-phone">
            <div className="magnetic-ring">
              <div className="ring-segment"></div>
              <div className="ring-segment"></div>
              <div className="ring-segment"></div>
              <div className="ring-segment"></div>
            </div>
            <div className="phone-back">
              <div className="camera-array-small"></div>
            </div>
            <div className="floating-accessory">
              <div className="accessory-icon-large">
                {accessories[selectedAccessory].icon}
              </div>
            </div>
          </div>

          <div className="accessory-cards">
            {Object.entries(accessories).map(([key, item]) => (
              <div
                key={key}
                className={`accessory-card ${
                  selectedAccessory === key ? "active" : ""
                }`}
                onClick={() => setSelectedAccessory(key)}
              >
                <div className="accessory-icon-small">{item.icon}</div>
                <h3>{item.name}</h3>
                <p className="accessory-price">{item.price}</p>
                <p className="accessory-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4. INTERACTIVE FEATURE EXPLORER */
export function FeatureExplorer() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Always-On Display",
      desc: "Your Lock Screen dims intelligently, so it's easy to glance at the time and other information without tapping the screen.",
      icon: "📱",
      color: "#667eea",
    },
    {
      title: "Emergency SOS via Satellite",
      desc: "Connect to emergency services when you're off the grid with no cellular or Wi-Fi coverage.",
      icon: "📡",
      color: "#f093fb",
    },
    {
      title: "Crash Detection",
      desc: "If you're in a severe car crash, iPhone can detect it and automatically call emergency services.",
      icon: "🚗",
      color: "#4facfe",
    },
    {
      title: "Water Resistance",
      desc: "Rated IP68, the उच्चतम water resistance rating in a smartphone. Tested to withstand up to 6 meters for 30 minutes.",
      icon: "💧",
      color: "#43e97b",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="feature-explorer">
      <div className="container">
        <h2 className="section-title-adv">Designed to make a difference.</h2>
        <p className="section-subtitle-adv">
          Advanced features that help keep you safe, connected, and in control.
        </p>

        <div className="explorer-wrapper">
          <div className="feature-visual">
            <div
              className="feature-circle"
              style={{ background: features[activeFeature].color }}
            >
              <div className="feature-icon-huge">
                {features[activeFeature].icon}
              </div>
            </div>

            <div className="feature-details">
              <h3>{features[activeFeature].title}</h3>
              <p>{features[activeFeature].desc}</p>
            </div>
          </div>

          <div className="feature-nav">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`feature-nav-btn ${
                  index === activeFeature ? "active" : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="nav-icon">{feature.icon}</div>
                <div className="nav-label">{feature.title}</div>
                <div className="nav-indicator"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
