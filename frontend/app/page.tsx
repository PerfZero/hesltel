import Header from './components/Header'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.videoSection}>
        <video 
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/main.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
        <div className={styles.videoContainer}>
          <div className={styles.videoText}>DIGITAL HU$TLAS</div>
        </div>
      </div>
    </main>
  )
}

