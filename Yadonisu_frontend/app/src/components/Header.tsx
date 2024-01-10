import React, { FC, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiAlignJustify, FiGlobe } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import { SiAirbnb } from 'react-icons/si'
import Modal from 'react-modal'
import styles from '../styles/Header.module.scss'

type HeaderProps = {
  isScrolled?: boolean
}

const Header: FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  Modal.setAppElement('#root')

  return (
    <header className={`${styles._wrapper} ${isScrolled ? styles.scroll : ''}`}>
      <div className={styles._inner}>
        <div className={styles._logo}>
          <SiAirbnb className={styles._icon_airbub} />
          <p className={styles._logo_title}>airbnb</p>
        </div>

        <ul className={styles._list_center}>
          <li className={styles._list_item}>
            <button className={styles._list_button_left}>どこでも</button>
          </li>
          <li className={`${styles._vertical_line} ${styles._list_item}`}>
            <button className={styles._list_button_center}>週の指定なし</button>
          </li>
          <li className={styles._list_item}>
            <button className={styles._list_button_right}>ゲスト数を追加</button>
            <div className={styles._red_circle}>
              <IoIosSearch className={styles._search_icon} />
            </div>
          </li>
        </ul>

        <div className={styles._list_right}>
          <ul className={styles._list_right}>
            <li className={styles._list_right_item}>
              <button className={styles._list_right_button}>Airbubにお部屋を掲載</button>
            </li>
            <li className={styles._list_right_item}>
              <FiGlobe className={styles._list_right_language_icon} />
            </li>
            <div className={styles._list_right_group}>
              <li className={styles._list_right_item}>
                <FiAlignJustify className={styles._list_right_icon} />
              </li>
              <li className={styles._list_right_item}>
                <CgProfile className={styles._list_right_icon} onClick={toggleModal} />
                <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModal}
                  contentLabel='Profile Modal'
                  className={styles.customModal}
                  overlayClassName={styles.customOverlay}
                >
                  <div className={styles.modalContent}>
                    <div className={styles.loginSection}>
                      <p>ログイン</p>
                      <p>登録する</p>
                    </div>
                  </div>
                  <div className={styles.modalWrapper}>
                    <div className={styles.bottomLinks}>
                      <p>下記に掲載</p>
                      <p>ヘルプセンター</p>
                    </div>
                  </div>
                </Modal>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
