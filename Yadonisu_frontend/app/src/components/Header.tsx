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
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false)
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)

  const toggleFirstModal = () => {
    setIsFirstModalOpen(!isFirstModalOpen)
  }

  const toggleSecondModal = () => {
    setIsSecondModalOpen(!isSecondModalOpen)
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
              {/* ログイン状態 */}
              <li className={styles._list_right_item}>
                <FiAlignJustify className={styles._list_right_icon} onClick={toggleFirstModal} />
                <Modal
                  isOpen={isFirstModalOpen}
                  onRequestClose={toggleFirstModal}
                  contentLabel='Profile Modal'
                  className={styles.customModal}
                  overlayClassName={styles.customOverlay}
                  shouldCloseOnOverlayClick={true}
                >
                  <div className={styles.modalContent}>
                    <div className={styles.navigationLinks}>
                      <p className={styles.message}>メッセージ</p>
                      <p className={styles.travel}>旅行</p>
                      <p className={styles.favorite}>お気にいり</p>
                    </div>
                  </div>
                  <div className={styles.modalWrapper}>
                    <div className={styles.centerLinks}>
                      <p className={styles.airbnb}>Airbnbにお部屋を掲載</p>
                      <p className={styles.host}>ホストを紹介する</p>
                      <p className={styles.account}>アカウント</p>
                    </div>
                  </div>
                  <div className={styles.helpLogoutWrapper}>
                    <div className={styles.bottomLinks}>
                      <p className={styles.help}>ヘルプセンター</p>
                      <p className={styles.logout}>ログアウト</p>
                    </div>
                  </div>
                </Modal>
              </li>
              {/* ログアウト状態 */}
              {/* <li className={styles._list_right_item}>
                <FiAlignJustify className={styles._list_right_icon} onClick={toggleModal} />
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
                      <p>Airbnbにお部屋を掲載</p>
                      <p>ヘルプセンター</p>
                    </div>
                  </div>
                </Modal>
              </li> */}
              {/* ログイン状態 */}
              {/* <li className={styles._list_right_item}>
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
                      <p>メッセージ</p>
                      <p>旅行</p>
                      <p>お気にいり</p>
                    </div>
                  </div>
                  <div className={styles.modalWrapper}>
                    <div className={styles.bottomLinks}>
                      <p>Airbnbにお部屋を掲載</p>
                      <p>ホストを紹介する</p>
                      <p>アカウント</p>
                    </div>
                  </div>
                  <div className={styles.modalWrapper}>
                    <div className={styles.bottomLinks}>
                      <p>ヘルプセンター</p>
                      <p>ログアウト</p>
                    </div>
                  </div>
                </Modal>
              </li> */}
              {/* ログアウト状態 */}
              <li className={styles._list_right_item}>
                <CgProfile className={styles._list_right_icon} onClick={toggleSecondModal} />
                <Modal
                  isOpen={isSecondModalOpen}
                  onRequestClose={toggleSecondModal}
                  contentLabel='Logout Modal'
                  className={styles.customModal}
                  overlayClassName={styles.customOverlay}
                  shouldCloseOnOverlayClick={true}
                >
                  <div className={styles.modalContent}>
                    <div className={styles.loginSection}>
                      <p>ログイン</p>
                      <p>登録する</p>
                    </div>
                  </div>
                  <div className={styles.helpWrapper}>
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
