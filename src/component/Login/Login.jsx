import React from 'react'
import styles from './page.module.css'
import Unstop from '@/assets/unstoppable.png'
import fb from '@/assets/facebook.png'
import twitter from '@/assets/twitter.png'
import google from '@/assets/google.png'
import Image from 'next/image'

const Login = () => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.paragraph}>Welcome back, we are delighted to have you</p>
        <button className={styles.Unstop}>
            <Image className={styles.image} src={Unstop} alt='unstoppable logo' width={25} height={25} />
            Continue with unstoppable domain
        </button>
        <div className={styles.socials}>
                <Image className={styles.images} src={google} alt='google' width={25} height={25} />
                <Image className={styles.images} src={fb} alt='facebook' width={25} height={25} />
                <Image className={styles.images} src={twitter} alt='twitter' width={25} height={25} />
               <button className={styles.Guest}>continue as Guest</button> 
        </div>
        <hr className={styles.line} />
        <div className={styles.form}>
            <label htmlFor="email">Email Address:</label>
            <input className={styles.input} type="text" placeholder='Enter your registered email address'/>

            <label htmlFor="password">Password:</label>
            <input className={styles.input} type="text" placeholder='Enter your registered email address'/>
            <div  className={styles.checkbox}>
                <input type="checkbox" /> <p className={styles.paragraphs}>Save login details for future</p>
            </div>
            <button className={styles.login}>login</button>
            <p className={styles.text}>Forget Password? <span className={styles.text2}>Reset</span> </p>
            <p className={styles.text}>You don't have an account with us? <span className={styles.text2}>Sign Up</span></p>
        </div>


    </div>
  )
}

export default Login