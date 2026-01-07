"use client";

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import events from '../../../data/events';
import EventRoom from '../../../components/EventRoom';
import Link from 'next/link';

export default function EventDetailClient() {
  const pathname = usePathname();

  const slug = useMemo(() => {
    if (!pathname) return '';
    const parts = pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || '';
  }, [pathname]);

  const raw = String(slug || '').toLowerCase();

  const event = useMemo(() => {
    if (!raw) return null;
    // direct match
    let ev = events.find((e) => e.slug === raw);
    if (ev) return ev;
    // normalized match
    const simpleRequested = raw.replace(/[^a-z0-9]+/g, '');
    return events.find((e) => {
      const slugSimple = (e.slug || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
      const titleSimple = (e.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
      return slugSimple === simpleRequested || titleSimple === simpleRequested;
    }) || null;
  }, [raw]);

  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <p className="mb-4">Requested slug: <code className="bg-white/5 px-2 py-1 rounded">{slug}</code></p>
          <p className="mb-4">Available events (click to open):</p>
          <ul className="space-y-2 mb-6">
            {events.map((ev) => (
              <li key={ev.slug}>
                <a href={`/events/${encodeURIComponent(ev.slug)}`} className="text-pink-400 underline">{ev.title} — {ev.slug}</a>
              </li>
            ))}
          </ul>
          <Link href="/events" className="mt-4 inline-block text-pink-500">Back to events</Link>
        </div>
      </main>
    );
  }

  const pageStyle = event && event.image ? {
    backgroundImage: `url(${event.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  } : {};

  return (
    <main className="text-white min-h-screen py-12 relative" style={pageStyle}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-6">
          <Link href="/events" className="text-pink-400">← Back to events</Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <EventRoom {...event} slug={event.slug} variant="detail" showDetails={false} />
        </div>
        {/* Poster section: demo poster for now — will be replaced per-event later */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="rounded-lg shadow-lg bg-black/40">
            <img src="/assets/posterlast.jpeg" alt={`${event.title} poster`} className="w-full h-auto block" />
          </div>
        </div>
      </div>
    </main>
  );
}
