import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <img src="/img/logo.png" alt="Logo" />
          </Link>
        </div>
        
        <nav className={styles.headerNav}>
          <Link href="/" className={styles.navLink}>Дом</Link>
          <Link href="/media" className={styles.navLink}>медиа</Link>
          <Link href="/marketplace" className={styles.navLink}>Маркетплейс</Link>
          <Link href="/31-flip" className={styles.navLink}>31-flip</Link>
          <Link href="/downloads" className={styles.navLink}>downloads</Link>
          <Link href="/subscription" className={styles.navLink}>подписка</Link>
        </nav>
        
        <div className={styles.headerActions}>
          <button className={styles.btnFree}>free</button>
          <button className={styles.btnAuth}>Авторизация</button>
        </div>
      </div>
    </header>
  )
}

