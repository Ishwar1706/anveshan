"use client"
import { useState } from 'react'
import EventRoom from '../../components/EventRoom'

export default function EventsPage() {
  const events = [
    {
      title: 'Chakava',
    //  date: 'Jan 18, 2025 • 10:00 AM',
      desc: 'Chakava is an exciting team event based on the life and legacy of Chhatrapati Shivaji Maharaj. Teams work together, solve clues, and use their knowledge of history to move ahead. It’s a fun and thrilling journey into Shivaji Maharaj’s world.',
      image: '/assets/room1.png',
      logo: '/assets/avatar/Logos of all events- TECHFEST/CHAKAVA_2.png',
      registerPCCOE: 'https://forms.gle/AhTNz5ZWASjfvaqS9',
      registerNonPCCOE: 'https://forms.gle/BUhu9AebiDx3VLAj7',
      coordinatorContact: '+91 7887589570',
    },
    {
      title: 'MLMania',
      //date: 'Jan 19, 2025 • 11:00 AM',
      desc: 'ML MANIA is a team-based Machine Learning competition that pushes participants beyond theory through quizzes, code optimization, and strategy-driven challenges. It tests problem-solving, critical thinking, and teamwork while blending technical depth with fun, real-world applications.',
      image: '/assets/room2.png',
      logo: '/assets/avatar/Logos of all events- TECHFEST/ML MANIA.png',
      registerPCCOE: 'https://forms.gle/pkjz82TuUyTffPpY8',
      registerNonPCCOE: 'https://forms.gle/D79gtVjaWusp4r5z6',
      coordinatorContact: '+91 7218599251',
    },
    {
      title: 'Sambhashini',
      //date: 'Jan 20, 2025 • 6:00 PM',
      desc: 'Sambhashini is an engaging Marathi event that celebrates language, creativity, and quick thinking. Participants showcase their cultural understanding through fun, interactive tasks that spark excitement and healthy competition. The event encourages teamwork, spontaneous communication, and clever interpretation of Marathi words and expressions. With lively participation and cheerful audience interaction, Sambhashini creates an energetic and memorable experience for everyone.',
      image: '/assets/room3.png',
      logo: '/assets/avatar/Logos of all events- TECHFEST/SAMBHASHINI.png',
      registerPCCOE: 'https://forms.gle/wYVDdu5SBuf4zj949',
      registerNonPCCOE: 'https://forms.gle/9JJJkLC15cCWLAKZ6',
      coordinatorContact: '+91 7420072726',
    },
    {
      title: 'LogicLamp',
      //date: 'Jan 21, 2025 • 2:00 PM',
      desc: 'Logic Lamp is a team-based Technical event designed to test participants’ logical thinking, coding skills, teamwork, and strategic decision-making through multiple progressive rounds.',
      image: '/assets/room1.png',
      logo: '/assets/avatar/Logos of all events- TECHFEST/LOGIC LAMP.png',
      registerPCCOE: 'https://forms.gle/4KNVxnAh3zjUeBrd7',
      registerNonPCCOE: 'https://forms.gle/FTE2Qx81sf7YpY4d6',
      coordinatorContact: '+91 8408812416',
    },
    {
      title: 'Spike Showdown',
      //date: 'Jan 22, 2025 • 9:00 AM',
      desc: 'Spike Showdown is an exciting Valorant esports tournament organized in our college, bringing together teams to compete in high-intensity tactical battles. The event is designed to showcase skill, teamwork, and strategy as players fight to plant or defuse the Spike in fast-paced matches. With thrilling gameplay, competitive spirit, and a fun atmosphere for both players and spectators, Spike Showdown aims to promote gaming culture on campus while giving students a platform to prove their Valorant abilities.',
      image: '/assets/room2.png',
      logo: '/assets/avatar/Logos of all events- TECHFEST/SPKE SHOWDOWN.png',
      registerPCCOE: 'https://forms.gle/BLqoBLXUhcg3b5bh6',
      registerNonPCCOE: 'https://forms.gle/XA5LyFbnM9fMgyGM8',
      coordinatorContact: '+91 9503404808',
    },
  ];

  const [index, setIndex] = useState(0)

  function prev() {
    setIndex((i) => (i - 1 + events.length) % events.length)
  }
  function next() {
    setIndex((i) => (i + 1) % events.length)
  }

  return (
    <main
      className="bg-black text-white relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/moons.png')",
        backgroundSize: 'contain',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">Events</h1>

        <div className="event-wrapper flex items-center justify-center">
          <EventRoom {...events[index]} />
        </div>

        <div className="team-nav mt-6 flex items-center justify-center">
          <button aria-label="Previous event" className="arrow-btn" onClick={prev}>
            ‹
          </button>
          <div className="arrow-label mx-6">{events[index].title} — {index + 1}/{events.length}</div>
          <button aria-label="Next event" className="arrow-btn" onClick={next}>
            ›
          </button>
        </div>
      </div>
    </main>
  )
}
