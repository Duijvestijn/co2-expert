'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/how-it-works', hrefNL: '/nl/hoe-het-werkt', label: 'How it works', labelNL: 'Hoe het werkt' },
  { href: '/pricing',      hrefNL: '/nl/tarieven',       label: 'Plans',        labelNL: 'Tarieven' },
  { href: '/partners',     hrefNL: '/nl/partners',       label: 'For Advisors', labelNL: 'Voor Adviseurs' },
  { href: '/about',        hrefNL: '/nl/over-ons',       label: 'About us',     labelNL: 'Over ons' },
  { href: '/faq',          hrefNL: '/nl/faq',            label: 'FAQ',          labelNL: 'FAQ' },
]

interface NavProps { lang?: 'en' | 'nl' }

export default function Nav({ lang = 'en' }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const nl = lang === 'nl'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #E5E7EB' : 'none',
      transition: 'all 0.25s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 68, gap: 32 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
          <Image src="/logo.svg" alt="CO₂ Expert" width={130} height={32} priority style={{ height: 32, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1 }} className="hidden md:flex">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={nl && l.hrefNL ? l.hrefNL : l.href} style={{
              fontSize: 14, fontWeight: 500, color: '#374151', padding: '6px 14px',
              borderRadius: 8, textDecoration: 'none', transition: 'color 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5A623')}
              onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
            >
              {nl ? l.labelNL : l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto', flexShrink: 0 }}>
          {/* Lang toggle */}
          <Link href={nl ? '/' : '/nl'} style={{
            fontSize: 13, fontWeight: 600, color: '#6B7280', padding: '4px 10px',
            borderRadius: 8, border: '1px solid #E5E7EB', textDecoration: 'none',
          }}>
            {nl ? 'EN' : 'NL'}
          </Link>

          {/* Login */}
          <Link href="https://app.co2.expert/login" style={{
            fontSize: 14, fontWeight: 600, color: '#374151', textDecoration: 'none',
          }}>
            {nl ? 'Inloggen' : 'Login'}
          </Link>

          {/* CTA */}
          <Link href={nl ? '/nl/contact' : '/contact'} className="btn-primary" style={{ padding: '9px 20px', fontSize: 14 }}>
            {nl ? 'Plan een gesprek' : 'Book a free call'}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, marginLeft: 'auto' }}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #E5E7EB', padding: '16px 24px 24px' }} className="md:hidden">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={nl && l.hrefNL ? l.hrefNL : l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500,
              color: '#374151', textDecoration: 'none', borderBottom: '1px solid #F3F4F6',
            }}>
              {nl ? l.labelNL : l.label}
            </Link>
          ))}
          <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
            <Link href="https://app.co2.expert/login" className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>
              {nl ? 'Inloggen' : 'Login'}
            </Link>
            <Link href={nl ? '/nl/contact' : '/contact'} className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>
              {nl ? 'Gesprek' : 'Free call'}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
