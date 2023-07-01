import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/component/Hero/Hero'

export default function Home() {
  return (
    <div className='wrapper'>
      <Hero />
    </div>
  )
}
