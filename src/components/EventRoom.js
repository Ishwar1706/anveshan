export default function EventRoom(props) {
  const {
    title = '',
    date = '',
    desc = '',
    image = '/assets/moons.png',
    logo = '/assets/bats1.png',
    coordinatorContact = null,
    registerPCCOE = '#',
    registerNonPCCOE = '#',
  } = props;

  const bg = 'url(' + encodeURI(image) + ')';
  const lg = 'url(' + encodeURI(logo) + ')';

  return (
    <div className="event-card w-full max-w-md md:max-w-4xl mx-auto mb-8 room-3d px-2">
      <div className="room-3d-scene">
        <div className="room-layer layer-back" />
        <div className="room-layer layer-mid" />
        <div className="room-layer layer-front" />

        <div className="relative rounded-2xl overflow-hidden border p-6 card-surface" style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: bg, zIndex: 0 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(6,6,10,0.45), rgba(6,6,10,0.6))', zIndex: 1 }} />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded bg-center bg-contain bg-no-repeat flex-shrink-0" style={{ backgroundImage: lg, zIndex: 6 }} aria-hidden={true} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold">{title}</h3>
                <p className="text-sm text-muted">{date}</p>
                <p className="mt-3 text-xs sm:text-sm break-words whitespace-normal max-w-full">
  {desc}
</p>

                <div className="mt-4 flex gap-3 items-center">
                  <a href={registerPCCOE} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-full text-white">
                    Register (PCCOE STUDENT)
                  </a>

                  <a href={registerNonPCCOE} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-full text-pink-900">
                    Register (NON PCCOE STUDENT)
                  </a>

                  {coordinatorContact && (
                    <a href={`tel:${coordinatorContact}`} aria-label={`Call coordinator ${coordinatorContact}`} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white" title={`Call ${coordinatorContact}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.38 2.39.76 3.5a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l1.57-1.57a2 2 0 0 1 2.11-.45c1.11.38 2.29.64 3.5.76A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
