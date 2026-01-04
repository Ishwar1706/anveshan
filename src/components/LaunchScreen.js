"use client";
import React, { useEffect, useState } from "react";

export default function LaunchScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // prevent scroll while launch screen is visible
    document.documentElement.classList.add("no-scroll");
    const hide = setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("no-scroll");
    }, 1800);

    return () => {
      clearTimeout(hide);
      document.documentElement.classList.remove("no-scroll");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="launch-overlay" onClick={() => setVisible(false)}>
      <div className="launch-content" role="dialog" aria-label="Launch screen">
        <div className="launch-art">
          <img
            src="/assets/avatar/Logos of all events- TECHFEST/ANVESHAN_FINAL_2.png"
            alt="ANVESHAN logo"
            className="launch-logo"
          />

          {/* cracking SVG overlay */}
          <svg className="crack-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <g strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="#f4d97a">
              <path className="crack-line" d="M400 120 L420 160 L390 190 L420 220 L380 260" />
              <path className="crack-line" d="M400 120 L360 150 L330 140 L300 180" />
              <path className="crack-line" d="M420 220 L460 240 L500 230 L540 270" />
              <path className="crack-line" d="M330 140 L320 180 L280 200" />
              <path className="crack-line" d="M500 230 L540 210 L580 230" />
            </g>
          </svg>
        </div>

        <div className="launch-title">ANVESHAN 2026</div>
      </div>
    </div>
  );
}
