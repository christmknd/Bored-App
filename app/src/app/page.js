"use client"
import SearchActivity from './component/SearchActivity'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <h1>Boredom got a new bestfriend</h1>
      </div>

      <SearchActivity/>
      
    </main>
  )
}
