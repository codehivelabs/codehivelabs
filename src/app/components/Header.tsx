"use client"

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Code } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMenu = () => setIsMobileMenuOpen(false)
  const pathname = usePathname()

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <Code className="text-3xl" />
            <span>CodeHive Labs</span>
          </Link>
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current={pathname === '/' ? 'page' : undefined} onClick={closeMenu}>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link href="/gallery" className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`} aria-current={pathname === '/gallery' ? 'page' : undefined} onClick={closeMenu}>
              <i className="fas fa-project-diagram"></i>
              <span>Projects</span>
            </Link>
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} aria-current={pathname === '/contact' ? 'page' : undefined} onClick={closeMenu}>
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </Link>
          </div>
          <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </nav>
    </header>
  )
}


