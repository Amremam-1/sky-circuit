import styles from "./services.module.css"
import { Col, Container, Row } from "react-bootstrap"
import service01 from "../../assets/service-1.jpg"
import service02 from "../../assets/service-2.jpg"
import service03 from "../../assets/service-3.jpg"
import service04 from "../../assets/01.jpg"

const services = [
  {
    image: service01,
    title: "Sustainable System",
    discription:
      "Urabitur lobortis mauris placerat quam netus litora eros purus,",
    content: "01",
  },
  {
    image: service02,
    title: "Property Maintenance",
    discription:
      "Urabitur lobortis mauris placerat quam netus litora eros purus,",
    content: "02",
  },
  {
    image: service03,
    title: "Virtual design & build",
    discription:
      "Urabitur lobortis mauris placerat quam netus litora eros purus,",
    content: "03",
  },
]

const ServicesCart = () => {
  return (
    <>
      <Container>
        <Row>
          {services.map((item, index) => (
            <Col lg="4" md="6" sm="12" className="mb-3" key={index}>
              <div className={styles.serviceCart}>
                <div className={styles.serviceImg}>
                  <img src={item.image} alt="" />
                  <span className={styles.badge}>{item.content}</span>
                </div>

                <div className={styles.serviceItem}>
                  <h5>{item.title}</h5>
                  <p>{item.discription}</p>

                  <button className={styles.btn}>
                    <a href="#">View Service</a>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg="12">
            <div className={styles.wrapper}>
              <div className={styles.wrapperImg}>
                <img src={service04} alt="" />
              </div>

              <div className={styles.wrapperInfo}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ServicesCart
