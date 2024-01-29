import { PiPlusBold } from "react-icons/pi"
import { Col, Container, Row } from "react-bootstrap"
import svg1 from "../../assets/01.svg"
import svg2 from "../../assets/03.svg"
import svg3 from "../../assets/04.svg"
import svg4 from "../../assets/05.svg"
import styles from "./styles.module.css"

const LatestProjects = () => {
  return (
    <section className={styles.latestProjects}>
      <Container>
        <Row>
          <div className={styles.container}>
            <div
              className={styles.top}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className={styles.smTitle}>LATEST PROJECTS</p>
              <h3 className={styles.title}>
                EXCELLENCE DRIVEN FOR GETTING
                <br />
                UNRIVALED RESULTS.
              </h3>
            </div>
            <ul
              className={styles.projectsList}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <ProjectItem img={svg1} num={3526} text="Tons Of Customers" />
              <ProjectItem img={svg2} num={3024} text="Compleated Project" />
              <ProjectItem img={svg3} num={325} text="Team Members" />
              <ProjectItem img={svg4} num={56} text="Upcoming Projects" />
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default LatestProjects
// ---------------------------------------------------------
// var process: NodeJS.Process
// var env: NodeJS.ProcessEnv;

type projectType = {
  img: string
  num: number
  text: string
}

// : projectType

export const ProjectItem = ({ img, num, text }: projectType) => {
  return (
    <li className={styles.projItem}>
      <div className={styles.itemWrapper}>
        <div className={styles.image}>
          <img src={img} alt="icon" />
        </div>
        <h2 className={styles.projNum}>
          <span>{num}</span>
          <PiPlusBold />
        </h2>
        <p className={styles.projText}>{text}</p>
      </div>
    </li>
  )
}
