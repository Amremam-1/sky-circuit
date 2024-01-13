import { Col, Container, Nav, Row } from "react-bootstrap"
import { MdElectricBolt } from "react-icons/md"
import { MdOutlineEmail } from "react-icons/md"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { MdArrowOutward } from "react-icons/md"
import { FaSearch } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"

const nav_Links = [
  {
    path: "#",
    display: "Careers",
  },
  {
    path: "#",
    display: "News & Media",
  },
  {
    path: "#",
    display: "Contact",
  },
]

const links = [
  { path: "home", display: "Home" },
  { path: "service", display: "Service" },
  { path: "about", display: "About" },
  { path: "portfolio", display: "Portfolio" },
  { path: "blog", display: "Blog" },
  { path: "contact", display: "Contact" },
]

const navBar = () => (
  <header className={styles["header-one"]}>
    <div className={styles["header-top"]}>
      <Container>
        <Row>
          <Col lg="12">
            <div className={styles["header-top-wrapper"]}>
              <div className={styles["left"]}>
                <div className={styles["icon"]}>
                  <MdElectricBolt color="#FF6600" size="20px" />
                </div>
                <p>Express delivery and free returns within 24 hours</p>
              </div>
              <div className={styles["right"]}>
                <ul className={styles["menu"]}>
                  {nav_Links.map((item, index) => (
                    <li className="nav-item" key={index}>
                      {item.display}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="header-mid">
      <Container>
        <Row>
          <Col lg="12">
            <div className={styles["header-mid-one-wrapper"]}>
              <div className={styles["logo-area"]}>
                <Link to="">
                  <img src={logo} alt="" />
                </Link>
              </div>

              <div className={styles["header-right"]}>
                <div className={styles["single-component"]}>
                  <IoLocationOutline className={styles["icon-svg"]} />

                  <div className={styles["info"]}>
                    <span>Send Us Mail</span>
                    <a href="#">22 Madi Ave, New York</a>
                  </div>
                </div>

                <div className={styles["single-component"]}>
                  <MdOutlineEmail className={styles["icon-svg"]} />

                  <div className={styles["info"]}>
                    <span>Send Us Mail</span>
                    <a href="#">elevate.cons@gmail</a>
                  </div>
                </div>

                <div className={styles["get-info"]}>
                  <a href="#" className={styles["btn"]}>
                    GET A QUOTE
                    <MdArrowOutward className={styles["icon"]} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className={styles["header-sticky"]}>
      <Container>
        <Row>
          <Col lg="12">
            <div className={styles["nav-header"]}>
              <div className={styles["clip-path"]}></div>
              <div className={styles["wrapper"]}>
                <div className={styles["main-nav"]}>
                  <nav>
                    <ul>
                      {links.map((item, index) => (
                        <li className={styles["menu-item current"]} key={index}>
                          <a
                            href={item.path}
                            className={styles["nav-item active"]}
                          >
                            {item.display}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div className={styles["btn-right"]}>
                  <div className={styles["search-btn"]}>
                    <FaSearch />
                  </div>
                  <div className={styles["cart-icon"]}>
                    <HiOutlineShoppingCart />
                    <span className={styles["badge"]}>2</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </header>
)

export default navBar
