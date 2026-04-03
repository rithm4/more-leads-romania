'use client'
import { useState } from 'react'

const FAQS = [
  { q: 'Cât costă colaborarea după prima lună gratuită?', a: 'Remunerația noastră lunară pornește de la 500–700€/lună în funcție de complexitatea sistemului și volumul de campanii gestionate. La aceasta se adaugă bugetul de publicitate (Meta/Google), care e plătit direct platformelor — nu trece prin noi. Îți prezentăm structura exactă de costuri în discuția de 30 de minute, personalizat pentru profilul tău.' },
  { q: 'Cât timp durează până apar primele cereri de la pacienți?', a: 'De regulă, primele cereri apar în primele 7–14 zile de la lansarea campaniilor. Volumul crește treptat pe măsură ce optimizăm — sistemul e mai puternic în luna 2–3 față de prima lună. De aceea structurăm colaborarea pe minim 3 luni: ca să ai timp să vezi sistemul la capacitate reală.' },
  { q: 'Lucrez deja cu o agenție. Pot face tranziția la voi?', a: 'Da, și e mai simplu decât crezi. În discuția de 30 de minute analizăm ce ai deja — conturi publicitare, landing pages, date istorice — și îți spunem ce păstrăm, ce reconstruim și de ce. Nu pornim niciodată de la zero dacă există deja ceva funcțional.' },
  { q: 'Funcționează și pentru clinici mai mici, nu doar pentru centre mari?', a: 'Da — clinicile de dimensiuni medii beneficiază cel mai mult de sistemele noastre, pentru că un sistem bun de generare a pacienților le permite să crească controlat. Singura condiție e capacitatea reală de preluare a pacienților noi și un buget minim de publicitate de 800€/lună.' },
  { q: 'Trebuie să am un site propriu sau o pagină de Facebook activă?', a: 'Nu. Construim noi landing page-ul dedicat serviciilor tale — e inclus în sistem. Nu ai nevoie de un site propriu și nici de o pagină de Facebook gestionată activ. Dacă ai deja un site și o pagină, le integrăm în sistem.' },
  { q: 'Cum știu că rezultatele raportate sunt reale, nu umflate?', a: 'Ai acces direct la toate sursele de date: contul tău de Meta Ads, Google Ads și CRM-ul în care ajung cererile. Nu îți trimitem un PDF cu cifre — îți dăm acces la datele brute. Fiecare cerere are timestamp, sursă și date de contact. Poți verifica oricând, în timp real.' },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section className="faq-section" id="intrebari">
      <div className="section-inner">
        <div className="section-label">Întrebări frecvente</div>
        <h2 className="section-title">Răspunsuri <em>directe</em> la cele mai<br />comune întrebări.</h2>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`} onClick={() => toggle(i)}>
              <div className="faq-q">
                <span className="faq-q-text">{faq.q}</span>
                <div className="faq-toggle">
                  <svg viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="faq-a" style={{ maxHeight: open === i ? 300 : 0 }}>
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
