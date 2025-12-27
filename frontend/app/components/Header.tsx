'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link href="/" onClick={closeMenu}>
            <img src="/img/logo.png" alt="Logo" />
          </Link>
        </div>
        
        <nav className={styles.headerNav}>
          <Link href="/" className={`${styles.navLink} ${styles.navLinkHome}`}>Дом</Link>
          <Link href="/media" className={`${styles.navLink} ${styles.navLinkMedia}`}>медиа</Link>
          <Link href="/marketplace" className={`${styles.navLink} ${styles.navLinkMarketplace}`}>Маркетплейс</Link>
          <Link href="/31-flip" className={`${styles.navLink} ${styles.navLinkFlip}`}>31-flip</Link>
          <Link href="/downloads" className={`${styles.navLink} ${styles.navLinkDownloads}`}>downloads</Link>
          <Link href="/subscription" className={`${styles.navLink} ${styles.navLinkSubscription}`}>подписка</Link>
        </nav>
        
        <div className={styles.headerActions}>
          <button className={styles.btnFree}>free</button>
          <button className={styles.btnAuth}>Авторизация</button>
        </div>

        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      <div 
        className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={closeMenu}
      ></div>

      <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
        <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Дом</Link>
        <Link href="/media" className={styles.mobileNavLink} onClick={closeMenu}>медиа</Link>
        <Link href="/marketplace" className={styles.mobileNavLink} onClick={closeMenu}>Маркетплейс</Link>
        <Link href="/31-flip" className={styles.mobileNavLink} onClick={closeMenu}>31-flip</Link>
        <Link href="/downloads" className={styles.mobileNavLink} onClick={closeMenu}>downloads</Link>
        <Link href="/subscription" className={styles.mobileNavLink} onClick={closeMenu}>подписка</Link>
        <div className={styles.mobileActions}>
          <button className={styles.mobileBtnFree}>free</button>
          <button className={styles.mobileBtnAuth}>Авторизация</button>
        </div>
      </nav>
    </header>
  )
}

