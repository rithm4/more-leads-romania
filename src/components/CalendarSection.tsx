'use client'
import { useState } from 'react'

const MONTHS = ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie']
const TIMES = ['09:00','09:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30','16:00','16:30']

export default function CalendarSection() {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())
  const [selDay, setSelDay] = useState<number | null>(null)
  const [selTime, setSelTime] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')

  const changeMonth = (dir: number) => {
    const d = new Date(year, month + dir, 1)
    setYear(d.getFullYear())
    setMonth(d.getMonth())
    setSelDay(null)
    setSelTime(null)
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDow = new Date(year, month, 1).getDay()
  const offset = firstDow === 0 ? 6 : firstDow - 1
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const days: (number | null)[] = [...Array(offset).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]

  return (
    <section className="calendar-section" id="rezerva">
      <div className="cal-wrapper">
        <div className="cal-left">
          <div className="section-label">Pasul următor</div>
          <h2 className="section-title">Rezervă o discuție<br />de <em>30 de minute.</em></h2>
          <p>Vorbim despre clinica sau practica ta, verificăm disponibilitatea zonei și îți explicăm exact ce am construi și în ce timp apar primele rezultate.</p>
          <div className="cal-benefits">
            {['Discuție gratuită, fără nicio obligație','Verificăm live disponibilitatea zonei tale','Primești planul de creștere gratuit în 48h','Afli dacă te califici pentru luna demonstrativă','Răspuns la orice întrebare despre sistem'].map(t=>(
              <span className="cal-benefit" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="cal-card">
          <div className="cal-header">
            <div className="cal-avatar">DB</div>
            <div>
              <div className="cal-name">Budici Daniel — More Leads</div>
              <div className="cal-sub">Fondator · Specialist Marketing Medical</div>
              <div className="cal-dur">⏱ 30 minute · Video call (Zoom / Meet)</div>
            </div>
          </div>

          {submitted ? (
            <div className="success-msg">
              <h3>✓ Rezervare confirmată!</h3>
              <p>Vei primi un email de confirmare cu linkul de video call. Ne vedem în curând!</p>
            </div>
          ) : (
            <>
              <div className="month-nav">
                <button onClick={() => changeMonth(-1)}>‹</button>
                <span className="month-label">{MONTHS[month]} {year}</span>
                <button onClick={() => changeMonth(1)}>›</button>
              </div>

              <div className="cal-grid">
                {['L','M','M','J','V','S','D'].map(d => <div className="cal-day-hdr" key={d}>{d}</div>)}
                {days.map((d, i) => {
                  if (!d) return <div className="cal-day" key={`e${i}`} />
                  const date = new Date(year, month, d)
                  const dow = date.getDay()
                  const past = date < today
                  const wknd = dow === 0 || dow === 6
                  const isToday = d === now.getDate() && month === now.getMonth() && year === now.getFullYear()
                  let cls = 'cal-day'
                  if (past || wknd) cls += ' past'
                  else cls += ' avail'
                  if (d === selDay) cls += ' sel'
                  if (isToday) cls += ' today'
                  return (
                    <div key={d} className={cls} onClick={() => { if (!past && !wknd) { setSelDay(d); setSelTime(null) } }}>
                      {d}
                    </div>
                  )
                })}
              </div>

              {selDay && (
                <div className="time-slots vis">
                  <div className="ts-label">Ore disponibile</div>
                  <div className="slots-grid">
                    {TIMES.map(t => (
                      <button key={t} className={`slot${selTime === t ? ' sel-slot' : ''}`} onClick={() => setSelTime(t)}>{t}</button>
                    ))}
                  </div>
                </div>
              )}

              {selDay && selTime && (
                <div className="bf-form vis">
                  <input className="bf-in" type="text" placeholder="Numele tău" value={name} onChange={e => setName(e.target.value)} />
                  <input className="bf-in" type="text" placeholder="Clinica / Specialitatea medicală" />
                  <input className="bf-in" type="email" placeholder="Email" />
                  <input className="bf-in" type="tel" placeholder="Număr de telefon (WhatsApp)" />
                  <select className="bf-sel">
                    <option value="" disabled>Buget lunar disponibil pentru publicitate</option>
                    <option>Sub 500€/lună</option>
                    <option>500–800€/lună</option>
                    <option>800–1500€/lună</option>
                    <option>1500–3000€/lună</option>
                    <option>Peste 3000€/lună</option>
                  </select>
                  <button className="bf-btn" onClick={() => { if (name) setSubmitted(true) }}>Confirmă rezervarea →</button>
                  <p className="bf-disc">Discuție gratuită · Fără angajament · Confirmare pe email</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
