"use client"
import React from 'react'
import styles from './page.module.css'
import Unstop from '@/assets/unstoppable.png'
import fb from '@/assets/facebook.png'
import twitter from '@/assets/twitter.png'
import google from '@/assets/google.png'
import Image from 'next/image'
import Link from 'next/link'
// import Unstoppable from '../Unstoppable/Unstoppable'

const Register = () => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>SignUp</h1>
        <p className={styles.paragraph}>Welcome back, we are delighted to have you</p>
        {/* <Unstoppable /> */}
        {/* <button className={styles.Unstop}>
            <Image className={styles.image} src={Unstop} alt='unstoppable logo' width={25} height={25} />
            Continue with unstoppable domain
        </button> */}
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
                <input type="checkbox" /> <p className={styles.paragraphs}>I agree to the <span className={styles.text2}>Terms & Policy of Afrocarb</span> </p>
            </div>
            <button className={styles.login}>Sign Up</button>
            <p className={styles.text}>Already have an account with us? <span className={styles.text2}><Link href='/login'>Sign In</Link></span> </p>
        </div>


    </div>
  )
}

export default Register