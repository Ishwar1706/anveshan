import EventRoom from '../../components/EventRoom'
import events from '../../data/events'
import Link from 'next/link'

export default function EventsPage() {
  // Layout: first event (Chakava) at top center, remaining in 2x2 grid below
  const [first, ...rest] = events;

  return (
    <main className="bg-black text-white relative overflow-hidden min-h-screen" style={{ backgroundImage: "url('/assets/moons.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">Events</h1>

        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-3xl">
            <EventRoom {...first} slug={first.slug} showDetails variant="default" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((e) => (
            <div key={e.slug}>
              <EventRoom {...e} slug={e.slug} showDetails variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
