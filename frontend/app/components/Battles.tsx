'use client'

import { useState } from 'react'
import styles from './Battles.module.css'

export default function Battles() {
  const [battleType, setBattleType] = useState<'individual' | 'team'>('individual')

  return (
    <div className={styles.battles}>
      <div className={styles.battlesContainer}>
        <div className={styles.battlesHeader}>
          <h2 className={styles.battlesTitle}>31-FLIP</h2>
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleButton} ${battleType === 'individual' ? styles.toggleButtonActive : ''}`}
              onClick={() => setBattleType('individual')}
            >
              Индивидуальные
            </button>
            <button
              className={`${styles.toggleButton} ${battleType === 'team' ? styles.toggleButtonActive : ''}`}
              onClick={() => setBattleType('team')}
            >
              Командные
            </button>
          </div>
        </div>

        <div className={styles.battlesContent}>
          <div className={styles.pastBattle}>
            <div className={styles.pastBattleInfo}>
              <p className={styles.battleLabel}>ПРОШЕДШИЙ БАТТЛ</p>
              <div className={styles.battleMeta}>
                <span>ДАТА</span>
                <span className={styles.metaDot}>·</span>
                <span className={styles.metaValue}>15.11.25</span>
              </div>
              <div className={styles.battleMeta}>
                <span>ФОРМАТ</span>
                <span className={styles.metaDot}>·</span>
                <span className={styles.metaValue}>LIVE</span>
              </div>
              <a href="#" className={styles.watchLink}>ПОСМОТРЕТЬ КАК ЭТО БЫЛО</a>
            </div>

            <div className={styles.battleResult}>
              <div className={styles.battleParticipantLeft}>
                <div className={styles.participantImageWrapper}>
                  <img src="/img/random.png" alt="VIOCREEEW" className={styles.participantImage} />
                </div>
                <p className={styles.participantName}>VIOCREEEW</p>
              </div>
              <span className={styles.participantScoreLeft}>33.2</span>
              <span className={styles.vs}>VS</span>
              <span className={styles.participantScoreRight}>32.9</span>
              <div className={styles.battleParticipantRight}>
                <div className={styles.participantImageWrapper}>
                  <img src="/img/random.png" alt="BLUBOY" className={styles.participantImage} />
                </div>
                <p className={styles.participantName}>BLUBOY</p>
              </div>
            </div>
          </div>

          <div className={styles.nextBattle}>
            <div className={styles.nextBattleHeader}>
              <h3 className={styles.nextBattleTitle}>СЛЕДУЮЩИЙ БАТТЛ</h3>
              <a href="#" className={styles.detailsLink}>ПОДРОБНЕЕ</a>
            </div>

            <div className={styles.nextBattleParticipants}>
              <div className={styles.nextParticipant}>
                <div className={styles.nextParticipantImageWrapper}>
                  <img src="/img/random.png" alt="NICEGUY" className={styles.nextParticipantImage} />
                </div>
                <p className={styles.nextParticipantName}>NICEGUY</p>
              </div>
              <span className={styles.nextVs}>VS</span>
              <div className={styles.nextParticipant}>
                <div className={styles.nextParticipantImageWrapper}>
                  <img src="/img/random.png" alt="COSSSMOSSS" className={styles.nextParticipantImage} />
                </div>
                <p className={styles.nextParticipantName}>COSSSMOSSS</p>
              </div>
            </div>

            <div className={styles.nextBattleInfo}>
              <div className={styles.battleMeta}>
                <span>ДАТА</span>
                <span className={styles.metaDot}>·</span>
                <span className={styles.metaValue}>21.11.25</span>
              </div>
              <div className={styles.battleMeta}>
                <span>ФОРМАТ</span>
                <span className={styles.metaDot}>·</span>
                <span className={styles.metaValue}>LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

