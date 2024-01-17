import { Container, Row, Col } from "react-bootstrap"
import styles from "../styles/about.module.css"
import service04 from "../assets/01.jpg"
import { FaArrowRight } from "react-icons/fa6"
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

                <span className={styles.sub}>STARTED JOURNEY</span>
              </div>
              <div className={styles.right}>
                <div className={styles.single}>
                  <FaCheck className={styles.icon}/>
                  <span>Emerjency solution anytime</span>
                </div>
                <div className={styles.single}>
                  <FaCheck className={styles.icon}/>
                  <span>Affordable price upto 2 years</span>
                </div>
                <div className={styles.single}>
                  <FaCheck className={styles.icon}/>
                  <span> Reliable & Experienced Team</span>
                </div>
              </div>
            </div>

            <button className={styles.btn}>
              <a href="#">Get STARTED</a>
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

                <span className={styles.sub}>STARTED JOURNEY</span>
              </div>
              <div className={styles.right}>
                <div className={styles.single}>
                  <FaCheck className={styles.icon}/>
                  <span>Emerjency solution anytime</span>
                </div>
                <div className={styles.single}>
                  <FaCheck className={styles.icon}/>
                  <span>Affordable price upto 2 years</span>
                </div>
                <div className={styles.single}>
                  <FaCheck className={styles.icon}/>
                  <span> Reliable & Experienced Team</span>
                </div>
              </div>
            </div>

            <button className={styles.btn}>
              <a href="#">Get STARTED</a>
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

                <span className={styles.sub}>STARTED JOURNEY</span>
              </div>
              <div className={styles.right}>
                <div className={styles.single}>
                  <LuPhoneCall className={styles.icon} />

                  <span>+880123456564</span>
                </div>
                <div className={styles.single}>
                  <MdOutlineEmail className={styles.icon}/>

                  <span>exalple@info.com</span>
                </div>
                <div className={styles.single}>
                  <IoLocationOutline className={styles.icon}/>

                  <span>22 Madi Ave, New York</span>
                </div>
              </div>
            </div>

            <button className={styles.btn}>
              <a href="#">Get STARTED</a>
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
                  Leading Developer Of Commercial <br />
                  &amp; Residential Projects
                </h5>

                <a href="#">
                  Read More
                  <FaArrowRight className={styles.icon} />
                </a>
              </div>
            </div>

            <div className={styles.wrapperInfo}>
              <div className={styles.leftTitle}>
                <span>Latest Projects</span>
                <h3 className={styles.title}>
                  We Are Qualified In Every Working Departments
                </h3>
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
                      About
                    </button>
                  </li>
                  <li className={styles.navItem}>
                    <button
                      className={`${styles.navLink} ${
                        activeButton === "Vision" ? styles.active : ""
                      }`}
                      onClick={() => handleButton("Vision")}
                    >
                      Vision
                    </button>
                  </li>
                  <li className={styles.navItem}>
                    <button
                      className={`${styles.navLink} ${
                        activeButton === "Contact" ? styles.active : ""
                      }`}
                      onClick={() => handleButton("Contact")}
                    >
                      Contact
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
