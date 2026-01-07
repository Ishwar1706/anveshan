import Link from 'next/link';

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
    slug = null,
    showDetails = false,
    variant = 'default',
  } = props;

  const bg = 'url(' + encodeURI(image) + ')';
  const lg = 'url(' + encodeURI(logo) + ')';

  const isDetail = variant === 'detail';
  const isCompact = !isDetail;

  return (
    <div className={`event-card w-full ${isCompact ? 'max-w-xl md:max-w-2xl' : 'max-w-4xl md:max-w-5xl'} mx-auto mb-8 room-3d px-2`}>
      <div className="room-3d-scene">
        <div className="room-layer layer-back" />
        <div className="room-layer layer-mid" />
        <div className="room-layer layer-front" />

        <div className={`relative rounded-2xl overflow-hidden border ${isDetail ? 'p-8 md:p-10' : 'p-6'} card-surface`} style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: bg, zIndex: 0 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(6,6,10,0.45), rgba(6,6,10,0.6))', zIndex: 1 }} />

          <div className="relative z-10">
            <div className={`flex ${isCompact ? 'flex-row' : 'flex-col md:flex-row'} gap-4 md:gap-6 items-center`}>
              <div className="relative">
                <div className={`${isCompact ? 'w-20 h-20 md:w-28 md:h-28' : isDetail ? 'w-44 h-44 md:w-56 md:h-56' : 'w-32 h-32 md:w-40 md:h-40'} rounded bg-center bg-contain bg-no-repeat flex-shrink-0`} style={{ backgroundImage: lg, zIndex: 6 }} aria-hidden={true} />
              </div>

              <div className="flex-1">
                <h3 className={`${isCompact ? 'text-xl' : 'text-2xl md:text-3xl'} font-extrabold`}>{title}</h3>
                <p className="text-sm text-muted">{date}</p>
                <p
                  className="mt-3 text-xs sm:text-sm break-words whitespace-normal max-w-full"
                  style={isCompact ? { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } : {}}
                >
                  {desc}
                </p>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  {isDetail ? (
                    <>
                      <div className="flex flex-wrap gap-3">
                        <a href={registerPCCOE} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-red-800 hover:bg-white/40 text-white rounded">
                          Register (PCCOE STUDENT)
                        </a>

                        <a href={registerNonPCCOE} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-purple-900 hover:bg-white/40 text-white rounded">
                          Register (NON PCCOE STUDENT)
                        </a>

                        {props.rulebook && (
                          <a href={props.rulebook} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-white/20 hover:bg-white/20 text-white rounded">
                            RULEBOOK
                          </a>
                        )}
                      </div>

                      

                      <div className="mt-4 text-white/90">
                        <div className="text-sm">{props.coordinatorName} : <a href={`tel:${coordinatorContact}`} className="underline">{coordinatorContact}</a></div>

                        <div className="mt-3 text-sm">{props.coordinatorName2 || ''} : {props.coordinatorContact2 ? <a href={`tel:${props.coordinatorContact2}`} className="underline">{props.coordinatorContact2}</a> : ''}</div>

                        <div className="mt-4 text-sm text-yellow-200">Free for PCCOE students | Paid for NON-PCCOE students</div>
                      </div>
                    </>
                  ) : (
                    <>
                      {showDetails && slug && (
                        <a href={`/events/${encodeURIComponent(String(slug))}`} className="ml-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded">Details</a>
                      )}
                    </>
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
