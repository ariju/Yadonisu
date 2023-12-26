/* eslint-disable import/no-unresolved */
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Yadonisu</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.link}>
          <div className={styles.link_title}>
            <Link href='/about'>
              Airbnbでゲストから最も好評を得ている宿泊先「ゲストチョイス」とは
            </Link>
          </div>
        </div>
        <Header title={'Yadonisu'} />
        <Footer />
      </main>
    </>
  )
}
