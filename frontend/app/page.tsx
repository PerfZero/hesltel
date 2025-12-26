import Header from './components/Header'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.content}>
      </div>
    </main>
  )
}

