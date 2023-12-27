import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopyright}>
        <FaRegCopyright />
        <p>Copyright © 2023 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
