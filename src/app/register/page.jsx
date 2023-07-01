"use client"

import React from 'react'
import styles from './page.module.css'
import Register from '@/component/Register/Register'
import Image from 'next/image'
import loginImg from '@/assets/loginImage.png'

const page = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <Register />
        </div>
        <div className={styles.right}>
            <Image className={styles.image} src={loginImg} alt='image' />
        </div>

    <style jsx global>{`
        body{
            background: #333333;
        }
    `}</style>

    </div>
  )
}

export default page