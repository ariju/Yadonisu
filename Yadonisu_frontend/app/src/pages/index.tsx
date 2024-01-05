import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MultiViewSummary from '../components/MultiViewSummary'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Yadonisu</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div id='link' className={styles.link}>
          <div className={styles.link_title}>
            <Link href='/about'>
              Airbnbでゲストから最も好評を得ている宿泊先「ゲストチョイス」とは
            </Link>
          </div>
        </div>
        <Header isScrolled={scrollY > 73} />
        <div className={styles.Breadcrumb}>
          <MultiViewSummary isScrolled={scrollY > 73} title={''} />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Home
