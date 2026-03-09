import React from 'react'
import styles from './page.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.one}>
            <h1 className={styles.title}>Buy Quality</h1>
            <h1 className={styles.titles}>Carbon Credit</h1>
            <p className={styles.desc}>offset your carbon emission with ease </p>
            <button className={styles.button}>Explore Now</button>
        </div>
        <div className={styles.two}>
            <p>Join our discord and follow us</p>
            <div className="icons">
            
            </div>
        </div>
    </div>
  )
}

export default Hero