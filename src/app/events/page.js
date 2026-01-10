import EventRoom from '../../components/EventRoom'
import events from '../../data/events'
import Link from 'next/link'
import MotionFadeUp from '../../components/MotionFadeUp'

export default function EventsPage() {
  // Layout: first event (Chakava) at top center, remaining in 2x2 grid below
  const [first, ...rest] = events;

  return (
    <main className="text-pink-600 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-4xl font-bold text-center mb-10">Events</h1>

        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-3xl">
            <MotionFadeUp delay={0}>
              <EventRoom {...first} slug={first.slug} showDetails variant="default" />
            </MotionFadeUp>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((e, i) => (
            <div key={e.slug}>
              <MotionFadeUp delay={0.06 * i}>
                <EventRoom {...e} slug={e.slug} showDetails variant="compact" />
              </MotionFadeUp>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
