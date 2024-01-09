import Image from 'next/image'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '../styles/SearchSuggestions.module.scss'

const images1 = ['/hebi.jpg', '/rails.png', '/red-bull.jpg', '/hebi.jpg', '/hebi.jpg']

const images2 = ['/rails.png', '/hebi.jpg', '/red-bull.jpg', '/rails.png', '/hebi.jpg']

const images3 = ['/red-bull.jpg', '/rails.png', '/hebi.jpg', '/red-bull.jpg', '/hebi.jpg']

const items = [
  {
    id: 1,
    content: '日本、Hakuba,kitaazumi Distraaa',
    place: '白馬五竜スノーリゾートの近く',
    stay: '5泊・3月4日〜9日',
    amount: '¥ 301,532 合計額（税抜き）',
  },
  {
    id: 2,
    content: '日本、Hakuba,kitaazumi Distraaa',
    place: '八方尾根スキー場の近く',
    stay: '5泊・3月4日〜9日',
    amount: '¥ 433,235 合計額（税抜き）',
  },
  {
    id: 3,
    content: '日本、Hakuba,kitaazumi Distraaa',
    place: '八方尾根スキー場の近く',
    stay: '5泊・4月8日〜13日',
    amount: '¥ 310,500 合計額（税抜き）',
  },
]

const SearchSuggestions = () => {
  const slideSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  }

  return (
    <div className={styles.slider_container}>
      {/* スワイパー１ */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation={{
            prevEl: `.${styles.slider_container_button_prev}`,
            nextEl: `.${styles.slider_container_button_next}`,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.slider_pagination}`,
            renderBullet: function (_index, className) {
              return `<span class="${className} ${styles.customPaginationClass}"></span>`
            },
          }}
          className={styles.mySwiperButtonPrev}
        >
          {images1.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 1) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
          <div id='button_prev' className={styles.slider_container_button_prev}>
            <IoIosArrowDropleftCircle />
          </div>
          <div id='button_next' className={styles.slider_container_button_next}>
            <IoIosArrowDroprightCircle />
          </div>
          <div className={styles.slider_pagination}></div>
        </Swiper>
      </div>

      {/* スワイパー2 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images2.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 2) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>

      {/* スワイパー3 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー4 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー5 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー6 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー7 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー8 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー9 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー10 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー11 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー12 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー13 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー14 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー15 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー16 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー17 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー18 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー19 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー20 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー21 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー22 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー23 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー24 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
      {/* スワイパー25 */}
      <div className={styles.slideWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation
          pagination={{ clickable: true }}
        >
          {images3.map((src, index) => (
            <SwiperSlide key={`slider1_${index}`}>
              <Image
                src={src}
                width={250}
                height={250}
                alt={`Slider 1 Image ${index}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
          {items.map((item, index) => {
            if (item.id === 3) {
              return (
                <div key={`item_${index}`} className={styles.itemInfo}>
                  <div className={styles.itemInfo_title_wrapper}>
                    {item.content.length > 20 ? (
                      <div className={styles.itemInfo_title}>{`${item.content.substring(
                        0,
                        20,
                      )}...`}</div>
                    ) : (
                      <div className={styles.itemInfo_title}>{item.content}</div>
                    )}
                    <div className={styles.itemInfo_evaluation}>★4.95</div>
                  </div>
                  <div className={styles.itemInfo_place}>{item.place}</div>
                  <div className={styles.itemInfo_stay}>{item.stay}</div>
                  <div className={styles.itemInfo_amount}>{item.amount}</div>
                </div>
              )
            }
            return null
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SearchSuggestions
