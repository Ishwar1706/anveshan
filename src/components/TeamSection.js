import React from 'react'

function getName(item) {
  return typeof item === 'string' ? item : (item && item.name) || 'Unknown'
}

function getPhoto(item) {
  return item && typeof item === 'object' && item.photo ? item.photo : null
}

function initials(name) {
  if (!name) return ''
  return name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()
}

export default function TeamSection({ title = 'Event Team', coordinators = [], advisory = [], members = [] }) {
  // Render any number of coordinators and members provided; each item can be a string or { name, photo }

  return (
    <section className="team-section transylvania-bg py-8 px-6 my-6 max-w-3xl mx-auto relative overflow-visible">
      <div className="card transform -skew-y-0 hover:skew-y-0 transition-all duration-500">
        <h2 className="team-title text-2xl text-center mb-4">{title}</h2>

        <div className="slots coordinators flex flex-wrap justify-center gap-6 mb-6">
          {coordinators && coordinators.length > 0 ? (
            coordinators.map((item, idx) => {
              const name = getName(item)
              const photo = getPhoto(item)
              const isLast = idx === coordinators.length - 1
              let roleLabel = 'Coordinator'
              if (coordinators.length === 1) {
                roleLabel = /overall/i.test(title) ? 'Overall Coordinator' : 'Coordinator'
              } else {
                roleLabel = isLast ? 'Co-coordinator' : 'Coordinator'
              }
              // Allow explicit per-item role to override computed label
              if (item && typeof item === 'object' && item.role) {
                roleLabel = item.role
              }
              return (
                <div key={idx} className="slot coord flex flex-col items-center text-center">
                  <div className="avatar">
                    {photo ? (
                      <img src={photo} alt={name} />
                    ) : (
                      <div className="avatar-placeholder">{initials(name)}</div>
                    )}
                  </div>
                  <div className="name mt-3">{name}</div>
                  <div className="role text-sm opacity-80">{roleLabel}</div>
                </div>
              )
            })
          ) : (
            <div className="text-center opacity-80">No coordinators assigned</div>
          )}
        </div>

        {advisory && advisory.length > 0 && (
          <div className="slots advisory flex flex-wrap justify-center gap-6 mb-6">
            {advisory.map((item, idx) => {
              const name = getName(item)
              const photo = getPhoto(item)
              // allow advisory items to provide an explicit role label
              const roleLabel = item && typeof item === 'object' && item.role ? item.role : 'Advisory'
              return (
                <div key={idx} className="slot advisor flex flex-col items-center text-center">
                  <div className="avatar">
                    {photo ? (
                      <img src={photo} alt={name} />
                    ) : (
                      <div className="avatar-placeholder">{initials(name)}</div>
                    )}
                  </div>
                  <div className="name mt-3">{name}</div>
                  <div className="role text-sm opacity-80">{roleLabel}</div>
                </div>
              )
            })}
          </div>
        )}

        <div className="slots members flex flex-wrap justify-center gap-6">
          {members && members.length > 0 ? (
            members.map((item, idx) => {
              const name = getName(item)
              const photo = getPhoto(item)
              return (
                <div key={idx} className="slot member flex flex-col items-center text-center">
                  <div className="avatar small">
                    {photo ? (
                      <img src={photo} alt={name} />
                    ) : (
                      <div className="avatar-placeholder">{initials(name)}</div>
                    )}
                  </div>
                  <div className="name mt-2">{name}</div>
                  <div className="role text-sm opacity-80">Member</div>
                </div>
              )
            })
          ) : (
            <div className="text-center opacity-80"></div>
          )}
        </div>
      </div>

      <svg className="bats" viewBox="0 0 200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path className="bat bat1" d="M0 30 C20 10, 40 10, 60 30 C80 10, 100 10, 120 30 C140 10, 160 10, 180 30 C190 20, 200 30" fill="none" stroke="transparent" />
      </svg>
    </section>
  )
}
