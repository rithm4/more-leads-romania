'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [pushed, setPushed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero') as HTMLElement
      if (!hero) return
      setPushed(window.scrollY > hero.offsetHeight * 0.6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="main-nav" className={pushed ? 'pushed' : ''}>
      <Link href="/" className="logo">More<span>Leads</span></Link>
      <div className="nav-right">
        <Link href="#cum-functioneaza" className="nav-link">Cum lucrăm</Link>
        <Link href="#pentru-cine" className="nav-link">Pentru cine</Link>
        <Link href="#intrebari" className="nav-link">Întrebări</Link>
        <Link href="#rezerva" className="nav-cta">Rezervă o discuție</Link>
      </div>
    </nav>
  )
}
