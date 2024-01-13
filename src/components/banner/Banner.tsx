import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import banner01 from "../../assets/bg-image-1.jpg"
import banner02 from "../../assets/bg-image-2.jpg"
import banner03 from "../../assets/bg-image-3.jpg"
import styles from "./banner.module.css"
import { BiSolidPhoneCall } from "react-icons/bi"

const images = [
  {
    image: banner01,
    title: "Welcome You To Elevate",
    subtitle: "We’re Providing Building Leading Solution",
    interval: 1500,
  },
  {
    image: banner02,
    title: "Welcome You To Elevate",
    subtitle: "We’re Providing Building Leading Solution",
    interval: 500,
  },
  {
    image: banner03,
    title: "Welcome You To Elevate",
    subtitle: "We’re Providing Building Leading Solution",
    interval: 2500,
  },
]

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} className={styles["bannerSlide"]}>
          <div className={styles["slideContent"]}>
            <img
              className={styles.bannerImage}
              src={item.image}
              alt={item.title}
            />
            <div className={styles["heading"]}>
              <h5>{item.title}</h5>
              <h1>
                We’re Providing
                <br />
                Industry Roofing
                <br />
                Solution
              </h1>

              <div className={styles.contact}>
                <a href="#" className={styles.btn}>
                  GET STARTED
                </a>

                <div className={styles.singleComponent}>
                  <BiSolidPhoneCall className={styles.icon} />
                  <div className={styles.info}>
                    <span>Call Us Now</span>
                    <a href="#">+256 2158 2158</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
