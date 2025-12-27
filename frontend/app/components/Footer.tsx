'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <span className={styles.copyright}>© Digital Hustlas · 31-flip</span>
        </div>
        <div className={styles.footerRight}>
          <a href="#" className={styles.footerLink}>instagram</a>
          <a href="#" className={styles.footerLink}>telegram</a>
          <a href="#" className={styles.footerLink}>политика конфиденциальности</a>
          <a href="#" className={styles.footerLink}>условия использования</a>
        </div>
      </div>
    </footer>
  )
}

