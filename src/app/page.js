export default function Home() {
  return (
    <main
      className="bg-black text-white relative overflow-hidden"

style={{
  backgroundImage: "url('/assets/moons.png')",
  backgroundSize: 'contain',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}


    >

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

  <div className="bg-white/10 px-6 py-4 rounded-xl backdrop-blur-sm w-full max-w-md">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-900 drop-shadow-xl">
        ANVESHAN 2026
      </h1>

      <p className="mt-2 text-lg text-yellow-300 max-w-2xl">
        A Tech Fest where innovation awakens in the shadows.
      </p>
    </div>
  </div>
</div>
        <a
          href="/events"
          className="mt-10 px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition shadow-lg"
        >
          Enter the Castle
        </a>

      </section>

    </main>
  );
}
