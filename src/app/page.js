"use client"
import React from 'react'
import MotionFadeUp from '../components/MotionFadeUp'
import HoverButton from '../components/HoverButton'

export default function Home() {
  return (
    <main className="text-white relative overflow-hidden">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent relative z-10">
        
       {/* <h1 className="text-5xl md:text-7xl font-bold text-pink-500 drop-shadow-xl">
          ANVESHAN 2026
        </h1>
*/}
<div className="flex flex-col items-center gap-4">
  <img
    src="/assets/avatar/Logos of all events- TECHFEST/ANVESHAN_FINAL_2.png"
    alt="Anveshan logo"
    className="w-36 h-36 md:w-48 md:h-48 object-contain"
  />

  <div className="bg-white/0 px-6 py-4 rounded-xl  w-full max-w-md">
    <div className="text-center">
      <MotionFadeUp delay={0}>
        <h1
          className="text-4xl md:text-5xl font-bold text-yellow-200 drop-shadow-xl"
          style={{
            WebkitTextStroke: "1.5px rgba(109, 39, 211, 0.35)",
            textShadow: "0 0 8px rgba(103, 36, 211, 0.35)",
          }}
        >
          ANVESHAN 2026
        </h1>
      </MotionFadeUp>

      <MotionFadeUp delay={0.12}>
        <p className="mt-3 text-sm text-yellow-100/80"></p>
      </MotionFadeUp>

    </div>
  </div>
</div>
        <MotionFadeUp delay={0.25} scale>
          <HoverButton
            href="/events"
            className="mt-10 px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition shadow-lg"
          >
            Enter the Castle
          </HoverButton>
        </MotionFadeUp>

      </section>

    </main>
  );
}
