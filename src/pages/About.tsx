import { Container, Row, Col } from "react-bootstrap"
import styles from "../styles/services.module.css"
import service04 from "../assets/01.jpg"
import { FaArrowRight } from "react-icons/fa6"

const About = () => {
  return (
    <Container id='about'>
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
                    <a href="#">About</a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#">Vision</a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#">Contact</a>
                  </li>
                </ul>

                <div className={styles.tapContent}></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
