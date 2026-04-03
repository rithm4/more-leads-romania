'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero') as HTMLElement
      if (!hero) return
      setVisible(window.scrollY > hero.offsetHeight * 0.6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky-bar${visible ? ' visible' : ''}`}>
      <span className="sticky-pill">3 locuri disponibile în mai</span>
      <span className="sticky-bar-text">
        Prima lună de colaborare — <strong>gratuită.</strong> Fără risc, fără angajament inițial.
      </span>
      <Link href="#rezerva" className="sticky-cta">Rezervă discuția →</Link>
    </div>
  )
}
