import styles from "../styles/portfolio.module.css"
import { Container, Row, Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { AiOutlineMail } from "react-icons/ai"
import { FiPhoneCall } from "react-icons/fi"

import { Navigation, Pagination } from "swiper/modules"
import port1 from "../assets/10.jpg"
import port2 from "../assets/11.jpg"
import port3 from "../assets/12.jpg"

import person01 from "../assets/person01.jpg"
import person02 from "../assets/person02.jpg"
import person03 from "../assets/person03.jpg"
import person04 from "../assets/person04.jpg"

const persons = [
  {
    img: person01,
    name: "Ronaldo Sinha",
    desig: "Head of Construction",
    email: "info@sinha.com",
    phone: "+00012345678",
    id: "070",
  },
  {
    img: person02,
    name: "Jone Sinha",
    desig: "Head of Construction",
    email: "info@sinha.com",
    phone: "+00012345678",
    id: "080",
  },
  {
    img: person03,
    name: "Ronaldo Sinha",
    desig: "Head of Construction",
    email: "info@sinha.com",
    phone: "+00012345678",
    id: "090",
  },
  {
    img: person04,
    name: "Ronaldo Sinha",
    desig: "Head of Construction",
    email: "info@sinha.com",
    phone: "+00012345678",
    id: "010",
  },
]

const images = [
  { img: port1, id: "01" },
  { img: port2, id: "02" },
  { img: port3, id: "03" },
  { img: port1, id: "04" },
  { img: port2, id: "05" },
  { img: port3, id: "06" },
]

const Portfolio = () => {
  return (
    <>
      <section className={styles.services}>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <span className="span-title">LATEST PROJECTS</span>
              <h3 className="section-title">OUR RECENT WORK</h3>
            </Col>
          </Row>
        </Container>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          id="portfolio"
          breakpoints={{
            768: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            480: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            320: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
          }}
        >
          {images.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.slide}>
              <a href="#">
                <img src={slide.img} alt="" />
                <div className={styles.slideText}>
                  <h5>Oil Mill Construction</h5>
                  <span>Building, Renovation</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <span className="span-title">TECHNICAL EXPART</span>
              <h3 className="section-title">OUR TECHNICAL EXPERTS</h3>
            </Col>
          </Row>

          <Row>
            <Col sm="12">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  768: {
                    slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                  480: {
                    slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                  320: {
                    slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                }}
                className={styles.swiper}
              >
                {persons.map((person) => (
                  <SwiperSlide key={person.id}>
                    <div className={styles.team}>
                      <div className={styles.wrapper}>
                        <div className={styles.wrapperImg}>
                          <img src={person.img} alt="" />
                        </div>

                        <div className={styles.inner}>
                          <a href="#" className={styles.name}>
                            <h5>{person.name}</h5>
                          </a>

                          <span className={styles.desig}>{person.desig}</span>

                          <div className={styles.infoWrapper}>
                            <div className={styles.single}>
                              <AiOutlineMail className={styles.icon} />

                              <a href="#">{person.email}</a>
                            </div>

                            <div className={styles.single}>
                              <FiPhoneCall className={styles.icon} />

                              <a href="#">{person.phone}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
