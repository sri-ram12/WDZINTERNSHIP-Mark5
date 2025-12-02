import React, { useState, useEffect, useRef } from "react";
import "./ExtraComponents.css";

// 1. PRO WORKFLOWS SECTION
export function ProWorkflows() {
  const workflows = [
    {
      title: "Professional Photography",
      desc: "48MP ProRAW gives you incredible creative control. Edit in your favorite photo apps.",
      icon: "📸",
      features: ["ProRAW", "48MP Main", "Macro Mode", "Portrait Lighting"]
    },
    {
      title: "Video Production",
      desc: "Shoot cinema-grade video with ProRes. Perfect for content creators and filmmakers.",
      icon: "🎬",
      features: ["4K ProRes", "Log Encoding", "Cinematic Mode", "Action Mode"]
    },
    {
      title: "Gaming Excellence",
      desc: "Console-quality gaming with ray tracing. The most powerful GPU in a smartphone.",
      icon: "🎮",
      features: ["Ray Tracing", "MetalFX", "120Hz Display", "Game Mode"]
    },
    {
      title: "Music Creation",
      desc: "Create, mix, and produce music anywhere with pro audio apps and spatial audio.",
      icon: "🎵",
      features: ["Spatial Audio", "Studio Mics", "Low Latency", "Pro Apps"]
    }
  ];

  return (
    <section className="pro-workflows">
      <div className="container">
        <h2 className="section-title-extra">Built for professionals.</h2>
        <p className="section-subtitle-extra">
          iPhone 17 Pro Max is designed for demanding workflows. From photography 
          to video production, gaming to music creation.
        </p>

        <div className="workflows-grid">
          {workflows.map((workflow, index) => (
            <div key={index} className="workflow-card">
              <div className="workflow-icon">{workflow.icon}</div>
              <h3>{workflow.title}</h3>
              <p>{workflow.desc}</p>
              <ul className="workflow-features">
                {workflow.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. TITANIUM DESIGN INTERACTIVE
export function TitaniumDesign() {
  const [selectedMaterial, setSelectedMaterial] = useState("titanium");

  const materials = {
    titanium: {
      name: "Aerospace-Grade Titanium",
      properties: ["Strongest", "Lightest", "Most Durable"],
      weight: "221g",
      strength: "High-strength alloy"
    },
    glass: {
      name: "Ceramic Shield Glass",
      properties: ["Toughest", "Crystal Clear", "Scratch Resistant"],
      weight: "Front & Back",
      strength: "Tougher than any smartphone glass"
    },
    frame: {
      name: "Precision Milled",
      properties: ["Seamless", "Refined", "Premium Finish"],
      weight: "Contoured edges",
      strength: "Aerospace-grade manufacturing"
    }
  };

  return (
    <section className="titanium-design">
      <div className="container">
        <h2 className="section-title-extra">Forged in titanium. Built to last.</h2>
        <p className="section-subtitle-extra">
          iPhone 17 Pro Max features a surgical-grade titanium design that's 
          incredibly strong, remarkably light, and resistant to corrosion.
        </p>

        <div className="design-interactive">
          <div className="phone-exploded">
            <div className={`material-layer ${selectedMaterial === "titanium" ? "active" : ""}`}>
              <div className="layer-visual titanium-layer">
                <div className="material-texture"></div>
              </div>
            </div>
            <div className={`material-layer ${selectedMaterial === "glass" ? "active" : ""}`}>
              <div className="layer-visual glass-layer">
                <div className="material-texture"></div>
              </div>
            </div>
            <div className={`material-layer ${selectedMaterial === "frame" ? "active" : ""}`}>
              <div className="layer-visual frame-layer">
                <div className="material-texture"></div>
              </div>
            </div>
          </div>

          <div className="material-selector">
            {Object.entries(materials).map(([key, data]) => (
              <button
                key={key}
                className={`material-btn ${selectedMaterial === key ? "active" : ""}`}
                onClick={() => setSelectedMaterial(key)}
              >
                <div className="material-info">
                  <h3>{data.name}</h3>
                  <div className="material-props">
                    {data.properties.map((prop, idx) => (
                      <span key={idx} className="prop-badge">{prop}</span>
                    ))}
                  </div>
                  <div className="material-specs">
                    <p><strong>Weight:</strong> {data.weight}</p>
                    <p><strong>Strength:</strong> {data.strength}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. SPATIAL COMPUTING & AR
export function SpatialComputing() {
  const [activeDemo, setActiveDemo] = useState("ar-measure");

  const demos = {
    "ar-measure": {
      title: "AR Measurement",
      desc: "Measure real-world objects instantly with precision",
      visual: "📏"
    },
    "ar-navigation": {
      title: "AR Navigation",
      desc: "See directions overlaid on the real world",
      visual: "🗺️"
    },
    "ar-gaming": {
      title: "AR Gaming",
      desc: "Play immersive games in your environment",
      visual: "🎮"
    },
    "ar-shopping": {
      title: "AR Shopping",
      desc: "Preview products in your space before buying",
      visual: "🛋️"
    }
  };

  return (
    <section className="spatial-computing">
      <div className="container">
        <h2 className="section-title-extra">Spatial computing. The world is your canvas.</h2>
        <p className="section-subtitle-extra">
          Advanced AR capabilities powered by LiDAR Scanner and powerful sensors. 
          Experience apps that blend digital content with the physical world.
        </p>

        <div className="ar-demo-area">
          <div className="ar-viewport">
            <div className="ar-scene">
              <div className="ar-grid"></div>
              <div className="ar-content">
                <div className="ar-demo-visual">
                  <div className="demo-icon-huge">{demos[activeDemo].visual}</div>
                  <div className="ar-overlay">
                    <div className="measurement-line"></div>
                    <div className="ar-pointer"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ar-info-panel">
              <h3>{demos[activeDemo].title}</h3>
              <p>{demos[activeDemo].desc}</p>
            </div>
          </div>

          <div className="ar-demo-selector">
            {Object.entries(demos).map(([key, data]) => (
              <button
                key={key}
                className={`ar-demo-btn ${activeDemo === key ? "active" : ""}`}
                onClick={() => setActiveDemo(key)}
              >
                <span className="demo-icon">{data.visual}</span>
                <span className="demo-name">{data.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. SUSTAINABILITY & ENVIRONMENT
export function Sustainability() {
  return (
    <section className="sustainability">
      <div className="container">
        <h2 className="section-title-extra">Better for you. Better for the planet.</h2>
        <p className="section-subtitle-extra">
          iPhone 17 Pro Max is designed to minimize its impact on the environment. 
          From recycled materials to renewable energy.
        </p>

        <div className="sustainability-grid">
          <div className="sustain-card">
            <div className="sustain-icon-circle">
              <div className="icon-large">♻️</div>
            </div>
            <h3>100% Recycled Materials</h3>
            <p>Rare earth elements in magnets made from 100% recycled materials</p>
            <div className="sustain-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Recycled Rare Earth</span>
            </div>
          </div>

          <div className="sustain-card">
            <div className="sustain-icon-circle">
              <div className="icon-large">🌱</div>
            </div>
            <h3>Carbon Neutral</h3>
            <p>First carbon neutral iPhone through renewable energy and offsets</p>
            <div className="sustain-stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Net Carbon Emissions</span>
            </div>
          </div>

          <div className="sustain-card">
            <div className="sustain-icon-circle">
              <div className="icon-large">📦</div>
            </div>
            <h3>Fiber-Based Packaging</h3>
            <p>100% of packaging comes from recycled and renewable sources</p>
            <div className="sustain-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Sustainable Packaging</span>
            </div>
          </div>

          <div className="sustain-card">
            <div className="sustain-icon-circle">
              <div className="icon-large">⚡</div>
            </div>
            <h3>Renewable Energy</h3>
            <p>Final assembly powered by 100% renewable energy</p>
            <div className="sustain-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Clean Energy</span>
            </div>
          </div>
        </div>

        <div className="commitment-banner">
          <p>Apple is committed to becoming carbon neutral across our entire business by 2030.</p>
        </div>
      </div>
    </section>
  );
}

// 5. TRADE-IN & FINANCING
export function TradeInFinancing() {
  const [selectedTradein, setSelectedTradein] = useState("iphone-16");

  const tradeins = {
    "iphone-16": { name: "iPhone 16 Pro Max", value: "$650" },
    "iphone-15": { name: "iPhone 15 Pro Max", value: "$520" },
    "iphone-14": { name: "iPhone 14 Pro Max", value: "$380" },
    "iphone-13": { name: "iPhone 13 Pro Max", value: "$280" }
  };

  const basePrice = 1199;
  const tradeValue = parseInt(tradeins[selectedTradein].value.replace('$', ''));
  const finalPrice = basePrice - tradeValue;

  return (
    <section className="tradein-financing">
      <div className="container">
        <h2 className="section-title-extra">Get iPhone 17 Pro Max from ${finalPrice}/mo or ${finalPrice} with trade‑in.*</h2>
        <p className="section-subtitle-extra">
          Trade in your current iPhone and get credit toward a new one. 
          Or pay monthly at 0% APR when you choose to check out with Apple Card.
        </p>

        <div className="tradein-calculator">
          <div className="calculator-panel">
            <h3>Trade-in Calculator</h3>
            
            <div className="tradein-selector">
              <label>Select your current iPhone:</label>
              <div className="tradein-options">
                {Object.entries(tradeins).map(([key, data]) => (
                  <button
                    key={key}
                    className={`tradein-option ${selectedTradein === key ? "active" : ""}`}
                    onClick={() => setSelectedTradein(key)}
                  >
                    <span className="option-name">{data.name}</span>
                    <span className="option-value">{data.value}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>iPhone 17 Pro Max</span>
                <span>${basePrice}</span>
              </div>
              <div className="price-row trade">
                <span>Trade-in credit</span>
                <span className="credit">-{tradeins[selectedTradein].value}</span>
              </div>
              <div className="price-row total">
                <span>Your price</span>
                <span className="final">${finalPrice}</span>
              </div>
            </div>

            <div className="financing-options">
              <button className="financing-btn primary">
                <span>Pay ${Math.round(finalPrice / 24)}/mo for 24 months**</span>
              </button>
              <button className="financing-btn secondary">
                <span>Buy for ${finalPrice}</span>
              </button>
            </div>
          </div>

          <div className="tradein-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Easy trade-in</h4>
                <p>Get a prepaid trade-in kit delivered to your door</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>0% APR financing</h4>
                <p>Pay over time with Apple Card at 0% APR</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Free delivery</h4>
                <p>Get your new iPhone delivered for free</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Data transfer</h4>
                <p>Easily move your data from your old iPhone</p>
              </div>
            </div>
          </div>
        </div>

        <p className="disclaimer">
          * Monthly pricing requires qualifying credit and 24-month installment loan. 
          ** Trade-in values vary based on condition, year, and configuration of your trade-in device.
        </p>
      </div>
    </section>
  );
}
