import { Container, Row, Col } from "react-bootstrap"
import styles from "../styles/about.module.css"
import service04 from "../assets/01.jpg"
import { FaArrowLeft } from "react-icons/fa"

import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { LuPhoneCall } from "react-icons/lu"
import { MdOutlineEmail } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"

const About = () => {
  const [activeButton, setActiveButton] = useState<string | null>("About")

  const handleButton = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  const getDynamicContent = () => {
    switch (activeButton) {
      case "About":
        return (
          <>
            <p className={styles.disc}>
              Laoreet conubia parturient lacinia pulvinar senectus vel posuere
              proin nec montes dapibus, elementum blandit sem et massa ornare
              habitasse cursus erat nascetur, a sed placerat sagittis euismod.
            </p>

            <div className={styles.jurney}>
              <div className={styles.left}>
                <h3 className={styles.titleAnimated}>
                  <span>3526</span>
                </h3>

                <span className={styles.sub}>بدأ الرحلة</span>
              </div>
              <div className={styles.right}>
                <div className={styles.single}>
                  <span>حلاً طارئًا في أي وقت</span>
                  <FaCheck className={styles.icon} />
                </div>
                <div className={styles.single}>
                  <span>سعر مناسب لمدة تصل إلى 2 سنة</span>
                  <FaCheck className={styles.icon} />
                </div>
                <div className={styles.single}>
                  <span>فريق موثوق وذو خبرة</span>
                  <FaCheck className={styles.icon} />
                </div>
              </div>
            </div>

            <button className={styles.btn}>
              <a href="#">إبدا الان</a>
            </button>
          </>
        )
      case "Vision":
        return (
          <>
            <p className={styles.disc}>
              Aacinia pulvinar senectus vel posuere proin nec montes dapibus,
              elementum blandit sem et massa ornare habitasse cursus erat
              nascetur, a sed placerat sagittis euismod Laoreet conubia
              parturient .
            </p>
            <div className={styles.jurney}>
              <div className={styles.left}>
                <h3 className={styles.titleAnimated}>
                  <span>2026</span>
                </h3>

                <span className={styles.sub}>بدأ الرحلة</span>
              </div>
              <div className={styles.right}>
                <div className={styles.single}>
                  <FaCheck className={styles.icon} />
                  <span>حلاً طارئًا في أي وقت</span>
                </div>
                <div className={styles.single}>
                  <FaCheck className={styles.icon} />
                  <span>سعر مناسب لمدة تصل إلى 2 سنة</span>
                </div>
                <div className={styles.single}>
                  <FaCheck className={styles.icon} />
                  <span>فريق موثوق وذو خبرة</span>
                </div>
              </div>
            </div>

            <button className={styles.btn}>
              <a href="#">إبدا الان</a>
            </button>
          </>
        )
      case "Contact":
        return (
          <>
            <p className={styles.disc}>
              Laoreet conubia parturient lacinia pulvinar senectus vel posuere
              proin nec montes dapibus, elementum blandit sem et massa ornare
              habitasse cursus erat nascetur, a sed placerat sagittis euismod.
            </p>
            <div className={styles.jurney}>
              <div className={styles.left}>
                <h3 className={styles.titleAnimated}>
                  <span>1026</span>
                </h3>

                <span className={styles.sub}>بدأ الرحلة</span>
              </div>
              <div className={styles.right}>
                <div className={styles.single}>
                  <LuPhoneCall className={styles.icon} />

                  <span>+880123456564</span>
                </div>
                <div className={styles.single}>
                  <MdOutlineEmail className={styles.icon} />

                  <span>exalple@info.com</span>
                </div>
                <div className={styles.single}>
                  <IoLocationOutline className={styles.icon} />

                  <span>22 Madi Ave, New York</span>
                </div>
              </div>
            </div>

            <button className={styles.btn}>
              <a href="#">إبدا الان</a>
            </button>
          </>
        )
      default:
        return null
    }
  }

  return (
    <Container id="about">
      <Row>
        <Col lg="12">
          <div className={styles.wrapper}>
            <div className={styles.wrapperImg}>
              <img src={service04} alt="" />

              <div className={styles.detail}>
                <h5>
                  المُطور الرائد للمشاريع التجارية <br />
                  والسكنية
                </h5>

                <a href="#">
                  اقرأ المزيد
                  <FaArrowLeft className={styles.icon} />
                </a>
              </div>
            </div>

            <div className={styles.wrapperInfo}>
              <div className={styles.leftTitle}>
                <span>أحدث المشاريع</span>
                <h3 className={styles.title}>نحن مؤهلون في كل أقسام العمل</h3>
              </div>

              <div className={styles.start}>
                <ul className={styles.nav}>
                  <li className={styles.navItem}>
                    <button
                      className={`${styles.navLink} ${
                        activeButton === "About" ? styles.active : ""
                      }`}
                      onClick={() => handleButton("About")}
                    >
                      حول
                    </button>
                  </li>
                  <li className={styles.navItem}>
                    <button
                      className={`${styles.navLink} ${
                        activeButton === "Vision" ? styles.active : ""
                      }`}
                      onClick={() => handleButton("Vision")}
                    >
                      رؤية
                    </button>
                  </li>
                  <li className={styles.navItem}>
                    <button
                      className={`${styles.navLink} ${
                        activeButton === "Contact" ? styles.active : ""
                      }`}
                      onClick={() => handleButton("Contact")}
                    >
                      اتصل بنا
                    </button>
                  </li>
                </ul>

                <div className={styles.tapContent}>{getDynamicContent()}</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
