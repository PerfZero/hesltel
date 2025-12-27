'use client'

import { useState } from 'react'
import styles from './Player.module.css'

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={styles.player}>
     
      <div className={styles.playerOverlay}></div>
      <div className={styles.playerContainer}>
      <video 
        className={styles.playerVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/back.mp4" type="video/mp4" />
      </video>
        <div className={styles.glassCard}>
          <div className={styles.playerHeader}>
            <div className={styles.nowPlaying}>
              <span className={styles.nowPlayingText}>Сейчас играет</span>
              <span className={styles.nowPlayingDot}>·</span>
              <span className={styles.nowPlayingTrack}>СЛУЧАЙНЫЙ БИТ</span>
            </div>
            <button className={styles.playButton} onClick={togglePlay}>
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                  <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              )}
            </button>
          </div>
          
          <div className={styles.playerContent}>
            <div className={styles.playerImage}>
              <img src="/img/random.png" alt="Track" />
            </div>
            
            <div className={styles.playerInfo}>
              <div className={styles.trackTitle}>BLVCK AUDI</div>
              <div className={styles.trackMeta}>prod. DJ ACOOLAH · exclusive drop</div>
              
              <div className={styles.progressBar}>
                <div className={styles.progressBarTrack}>
                  <div className={styles.progressBarFill}></div>
                </div>
                <div className={styles.progressBarTimes}>
                  <span className={styles.timeCurrent}>0:00</span>
                  <span className={styles.timeTotal}>3:45</span>
                </div>
              </div>
              
              <div className={styles.tags}>
                <span className={styles.tag}>Техно</span>
                <span className={styles.tag}>Хаус</span>
                <span className={styles.tag}>lo-fi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

