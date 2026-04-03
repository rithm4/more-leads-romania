'use client'
import { useState } from 'react'
import Link from 'next/link'

// ⚠️  Schimbă VIDEO_ID cu ID-ul real din YouTube
const YOUTUBE_VIDEO_ID = 'VIDEO_ID'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow anim-1">Marketing medical · Clinici &amp; Medici · România</div>
        <h1 className="anim-2">
          Clinica ta poate fi <em>plină.</em><br />
          Dacă știi cum să<br />
          <strong>atragi pacienți.</strong>
        </h1>
        <p className="hero-sub anim-3">
          Construim sisteme complete de generare a pacienților pentru clinici și medici — campanii Meta &amp; Google, landing pages, CRM. Nu reclame. Sisteme care funcționează luni la rând.
        </p>
        <div className="hero-ctas anim-4">
          <Link href="#rezerva" className="btn-primary">Rezervă o discuție gratuită de 30 min</Link>
          <Link href="#cum-functioneaza" className="btn-ghost">Cum funcționează</Link>
        </div>
        <div className="hero-pills anim-5">
          <span className="hero-pill">Meta &amp; Google Ads medicale</span>
          <span className="hero-pill">Un client per oraș, per specialitate</span>
          <span className="hero-pill">Prima lună demonstrativă</span>
        </div>
      </div>

      <div className="hero-right anim-6">
        <div
          className="video-wrapper"
          onClick={() => setVideoLoaded(true)}
          style={{ cursor: videoLoaded ? 'default' : 'pointer' }}
        >
          {videoLoaded ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div className="video-placeholder">
              <button className="play-btn" aria-label="Play video" />
              <div className="video-label">
                <strong>Vezi cum funcționează sistemul</strong>
                Explicație completă în 90 de secunde
              </div>
            </div>
          )}
        </div>

        <div className="offer-pills-row">
          <div className="offer-pill">
            <span className="offer-pill-tag tag-g">Zero risc</span>
            <h4>Prima lună — pe noi</h4>
            <p>Implementăm și rulăm campaniile. Tu plătești doar bugetul de publicitate.</p>
          </div>
          <div className="offer-pill">
            <span className="offer-pill-tag tag-p">Gratuit</span>
            <h4>Plan de creștere personalizat</h4>
            <p>Analiză de 7–10 pagini cu oportunități concrete pentru clinica ta.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
