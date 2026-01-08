"use client"
import React, { useState } from 'react'
import TeamSection from '../../components/TeamSection'

export default function TeamPage() {
  const events = [
    {
      title: '',
      coordinators: [
        { name: 'Advait Nathe', photo: '/assets/avatar/advaitcrop.jpg', role: 'Overall Coordinator' },
      ],
      advisory: [
        { name: 'Pushkaraj Gaikwad', photo: '/assets/avatar/ANVESHAN_PUSHKARAJ_GAIKWAD.jpg', role: 'Advisory' },
      ],
    },
    {
      title: 'CHAKAVA',
      coordinators: [
        { name: 'Om Kawad', photo: '/assets/avatar/OM KAWAD.jpg' },
        { name: 'Adhya Bhagat', photo: '/assets/avatar/Chakava_Adhya_Bhagat.jpg' },
        { name: 'Isha Bhamare', photo: '/assets/avatar/ishacrop.jpg' },
      ],
      members: [
        { name: 'Pankaj Bhagat', photo: '/assets/avatar/Chakava_Pankaj_Bhagat.jpg' },
        { name: 'Saumya Tarte', photo: '/assets/avatar/CHAKAVA_Soumya_Tarate.jpg' },
        { name: 'Bhumi Mutha', photo: '/assets/avatar/CHAKAVA_Bhumi_Mutha.jpg' },
        { name: 'Vinay Gaikwad', photo: '/assets/avatar/Chakava_Vinay_Gaikwad.jpg' },
        { name: 'Dhanashre Moresiya', photo: '/assets/avatar/Chakva_Dhanshree_Moreshiya.jpg' },
        { name: 'Trushal Katke', photo: '' },
      ],
    },
    {
      title: 'MLMANIA',
      coordinators: [
        { name: 'Siddhesh Sarphale', photo: '/assets/avatar/siddheshcrop.jpg' },
        { name: 'Ishwar Sonawane', photo: '/assets/avatar/ishwarcrop.jpg' },
        { name: 'Sanskruti Soitkar', photo: '/assets/avatar/sanskruticrop.jpg' },
      ],
      members: [
        { name: 'Om Deole', photo: '/assets/avatar/MLMENIA.Om_Deole.png' },
        { name: 'Saheel Shaikh', photo: '/assets/avatar/MLMinia_Saheel_Shaikh.png' },
        { name: 'Prachi Paunikar', photo: '/assets/avatar/MLMania_Prachi_Paunikar.jpg' },
        { name: 'Siya Kale', photo: '/assets/avatar/MLMANIA_Siya_Kale.jpg' },
      ],
    },
    {
      title: 'SAMBHASHINI',
      coordinators: [
        { name: 'Pratik Ghavate', photo: '/assets/avatar/pratikcrop.jpg' },
        { name: 'Suhani Thakare', photo: '/assets/avatar/suhanicrop.jpg' },
        { name: 'Sushant Didwagh', photo: '/assets/avatar/sushantcrop.jpg' },
        { name: 'Venu More', photo: '/assets/avatar/venucrop.jpg' },
      ],
      members: [
        { name: 'Kartik Digraskar', photo: '/assets/avatar/Sambhashani_Kartik_Digraskar.jpg' },
        { name: 'Srushti Bugdalwar', photo: '/assets/avatar/sambhashani_Srushti Bugdalwar .jpg' },
        { name: 'Tejas Nemade', photo: '/assets/avatar/Sambhashini_Tejas_Nemade.jpg' },
        { name: 'Sanchita Gulhane', photo: '/assets/avatar/Sambhashini_Sanchita_Gulhane.jpg' },
      ],
    },
    {
      title: 'LOGICLAMP',
      coordinators: [
        { name: 'Tejas Parkar', photo: '/assets/avatar/tejascrop.jpg' },
        { name: 'Nihar Salvi', photo: '/assets/avatar/niharcrop.jpg' },
        { name: 'Soham Shahapure', photo: '/assets/avatar/LogicLamp Soham Shahapure.jpg' },
      ],
      members: [
        { name: 'Akash Gajre', photo: '/assets/avatar/LogicLamps_Akash_Gajare.jpeg' },
        { name: 'Divya Bobade', photo: '/assets/avatar/LogicLamp_Divya_Bobade.jpg' },
        { name: 'Arvind Done', photo: '' },
        { name: 'Shreyash', photo: '/assets/avatar/LogicLamp_Shreyash_Dubewar.png' },
      ],
    },
    {
      title: 'SPIKESHOWDOWN',
      coordinators: [
        { name: 'Onkar Chand', photo: '/assets/avatar/onkarcrop.jpg' },
        { name: 'Yadnesh Patil', photo: '/assets/avatar/yadneshcrop.jpg' },
        { name: 'Shagun Chaudhari', photo: '/assets/avatar/shaguncrop.jpg' },
      ],
      members: [
        { name: 'Ayush Patil', photo: '/assets/avatar/Spike showdown_Ayush_Patil.jpg' },
        { name: 'Sanskar Kharad', photo: '' },
        { name: 'Prajakta Mogal', photo: '/assets/avatar/Spike Shutdown_Prajakta_Mogal.jpg' },
      ],
    },
   {
      title: '',
      coordinators: [
        { name: 'Sakshi Patil', photo: '/assets/avatar/sakshicrop.jpg', role: 'Design Head' },
      ],
      advisory: [
        { name: 'Prem Chaudhari', photo: '/assets/avatar/premcrop.jpg', role: 'PR & Social Media Head' },
      ],
    },
  ]

  const [index, setIndex] = useState(0)

  function prev() {
    setIndex((i) => (i - 1 + events.length) % events.length)
  }
  function next() {
    setIndex((i) => (i + 1) % events.length)
  }

  return (
    <main className="text-white relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <h6 className="text-3xl text-center mb-6" style={{ textShadow: '0 6px 30px rgba(120,40,200,0.6)' }}>
          Organizing Committee
        </h6>

        {/* Render only one event at a time */}
        <TeamSection
          key={index}
          title={events[index].title}
          coordinators={events[index].coordinators}
          advisory={events[index].advisory}
          members={events[index].members}
        />

        <div className="team-nav">
          <button aria-label="Previous event" className="arrow-btn" onClick={prev}>
            ‹
          </button>
          <div className="arrow-label text-white font-semibold">{events[index].title} — {index + 1}/{events.length}</div>
          <button aria-label="Next event" className="arrow-btn" onClick={next}>
            ›
          </button>
        </div>
      </div>
    </main>
  )
}
