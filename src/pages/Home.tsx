import { Col, Container, Row } from "react-bootstrap"
import Banner from "../components/banner/Banner"
import Helmet from "../components/helmet/Helmet"
import styles from "../styles/home.module.css"
import Services from "./Services"
import Portfolio from "./Portfolio"
import About from "./About"
import Blog from "./Blog"
import GetInTouch from "../components/getInTouch/GetInTouch"

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="banner-main-area">
        <Banner />
      </div>

      <section className={styles.services}>
        <Container>
          <Row>
            <Col lg="12" className="text-center p-5">
              <span className="span-title">OUR SERVICES</span>
              <h3 className="section-title">QUALITY SERVICING OPPORTUNITY</h3>
            </Col>
            <Services />
          </Row>
        </Container>
      </section>
      <About />
      <Portfolio />
      <Blog />
      <GetInTouch />
    </Helmet>
  )
}

export default Home
