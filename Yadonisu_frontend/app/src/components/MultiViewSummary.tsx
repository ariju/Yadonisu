import Image from 'next/image'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from '../styles/MultiViewSummary.module.scss'

interface ImagesItem {
  title: string
  icon: string
}

const images: ImagesItem[] = [
  { title: '洗練されたデザイン', icon: '/hebi.jpg' },
  { title: '子どもと一緒に', icon: '/hebi.jpg' },
  { title: 'スゴイ！', icon: '/hebi.jpg' },
  { title: 'コンテナ', icon: '/hebi.jpg' },
  { title: '湖畔', icon: '/hebi.jpg' },
  { title: '最高の眺め', icon: '/hebi.jpg' },
  { title: 'ドーム', icon: '/hebi.jpg' },
  { title: 'ゲストルーム', icon: '/hebi.jpg' },
  { title: 'ログハウス', icon: '/hebi.jpg' },
  { title: 'グランドピアノ', icon: '/hebi.jpg' },
  { title: 'ビーチフロント', icon: '/hebi.jpg' },
  { title: '国立公園', icon: '/hebi.jpg' },
  { title: '大邸宅・屋敷', icon: '/hebi.jpg' },
  { title: '旅館', icon: '/hebi.jpg' },
  { title: 'スキー', icon: '/hebi.jpg' },
  { title: '人気上昇中', icon: '/hebi.jpg' },
  { title: 'B&B', icon: '/hebi.jpg' },
  { title: 'ツリーハウス', icon: '/hebi.jpg' },
  { title: '民宿(台湾)', icon: '/hebi.jpg' },
  { title: '城', icon: '/hebi.jpg' },
  { title: '新着', icon: '/hebi.jpg' },
  { title: 'ブドウ園', icon: '/hebi.jpg' },
  { title: '塔', icon: '/hebi.jpg' },
  { title: '世界の頂から', icon: '/hebi.jpg' },
  { title: '湖の近く', icon: '/hebi.jpg' },
  { title: 'オフグリッドな暮らし', icon: '/hebi.jpg' },
  { title: 'キャンプ', icon: '/hebi.jpg' },
  { title: '素敵なプール', icon: '/hebi.jpg' },
  { title: '洞窟', icon: '/hebi.jpg' },
  { title: '土の家', icon: '/hebi.jpg' },
  { title: '農場', icon: '/hebi.jpg' },
  { title: '田園地帯', icon: '/hebi.jpg' },
  { title: '常夏', icon: '/hebi.jpg' },
  { title: 'キャンピングカー', icon: '/hebi.jpg' },
  { title: '北極圏', icon: '/hebi.jpg' },
  { title: '歴史ある建物', icon: '/hebi.jpg' },
  { title: 'サーフィン', icon: '/hebi.jpg' },
  { title: '三角屋根の家', icon: '/hebi.jpg' },
  { title: '人気の旅行先', icon: '/hebi.jpg' },
  { title: 'ゴルフ', icon: '/hebi.jpg' },
  { title: 'Luxe', icon: '/hebi.jpg' },
  { title: 'シェフ仕様のキッチン', icon: '/hebi.jpg' },
  { title: '韓屋', icon: '/hebi.jpg' },
  { title: 'キクラデス様式の家', icon: '/hebi.jpg' },
  { title: 'スキーイン/アウト', icon: '/hebi.jpg' },
  { title: '羊飼いの小屋', icon: '/hebi.jpg' },
  { title: '風車小屋', icon: '/hebi.jpg' },
  { title: 'カサ・パルティクラル', icon: '/hebi.jpg' },
  { title: '創作スペース', icon: '/hebi.jpg' },
  { title: 'ユルト', icon: '/hebi.jpg' },
  { title: '砂漠', icon: '/hebi.jpg' },
  { title: '農屋', icon: '/hebi.jpg' },
  { title: 'ボート・船舶', icon: '/hebi.jpg' },
  { title: 'ハウスボート', icon: '/hebi.jpg' },
  { title: '車椅子ユーザー向け', icon: '/hebi.jpg' },
  { title: 'トルッリ', icon: '/hebi.jpg' },
  { title: 'ダムーゾ', icon: '/hebi.jpg' },
  { title: 'リャド', icon: '/hebi.jpg' },
  { title: 'ビーチ', icon: '/hebi.jpg' },
]

export default function MultiViewSummary() {
  const slideSettings = {
    0: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 5,
    },
  }

  return (
    <div className={styles.slider__wrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={slideSettings} // slidesPerViewを指定
        slidesPerView={8} // ハイドレーションエラー対策
        loop={true}
        spaceBetween={5}
        speed={1000} // スライドが切り替わる時の速度
        slidesPerGroup={3}
        navigation={{
          prevEl: `.${styles.swiper_button_prev}`,
          nextEl: `.${styles.swiper_button_next}`,
        }}
        className={styles.slideWrapper}
      >
        {images.map((item: ImagesItem, index: number) => (
          <SwiperSlide key={index}>
            <div className={styles.slide_wrapper}>
              <Image
                src={item.icon}
                width={60}
                height={60}
                alt='Slider Image'
                className={`${styles.slideImage} ${styles.slide_inner}`}
              />
              <p className={styles.slide_text}>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
        <div id='button_prev' className={styles.swiper_button_prev}>
          <FiArrowLeftCircle />
        </div>
        <div id='button_next' className={styles.swiper_button_next}>
          <FiArrowRightCircle />
        </div>
      </Swiper>
      <div className={styles.button}>
        <div>
          <button>ボタン</button>
        </div>
        <div>
          <button>ボタン</button>
        </div>
      </div>
      <div className={styles.button}>
        <div>
          <button>ボタン</button>
        </div>
        <div>
          <button>ボタン</button>
        </div>
      </div>
    </div>
  )
}
