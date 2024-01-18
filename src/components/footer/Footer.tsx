
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap"
import logo from '../../assets/logo-white.png'
import small01 from '../../assets/sm01.png'
import small02 from '../../assets/sm02.png'
import styles from "./styles.module.css"


const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Container>
          <Row>
            <div className={styles.subscribe}>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
              <h2 className={styles.subscTitle}>
                SUBSCRIBE OUR NEWSLETTER
                <br />
                FORLATEST UPDATES
              </h2>
              <form className={styles.subscForm}>
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
              </form>
            </div>
            <div className={styles.links}>
              <div className={styles.box}>
                <h3 className={styles.fTitle}>ABOUT COMPANY</h3>
                <p className={styles.fText}>Centric aplications productize before front end vortals visualize front end is results and value added</p>
                <div className={styles.social}>
                  <a href="/">
                    <FaFacebookF />
                  </a>
                  <a href="/">
                    <FaTwitter />
                  </a>
                  <a href="/">
                    <FaYoutube />
                  </a>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.linksList}>
                  <h3 className={styles.fTitle}>USEFUL LINKS</h3>
                  <ul className={styles.fList}>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigRightFilled />
                        <span>About Us</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigRightFilled />
                        <span> Our Gallery</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigRightFilled />
                        <span>Our Services</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigRightFilled />
                        <span>Our Team</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigRightFilled />
                        <span>Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.linksList}>
                  <h3 className={styles.fTitle}>CONTACT US</h3>
                  <ul className={styles.fList}>
                    <li className={styles.fItem}>
                      <a href="/">
                        <div className={styles.icon}>
                          <FaPhoneAlt />
                        </div>
                        <span>+254 (98) 2156 213</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <div className={styles.icon}>
                          <FaPhoneAlt />
                        </div>
                        <span>+254 (98) 2156 213</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <div className={styles.icon}>
                          <HiOutlineMail />
                        </div>
                        <span>info@elevate.com</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <div className={styles.icon}>
                          <FaLocationDot />
                        </div>
                        <span>
                          25 Helano, 145 City Road
                          <br />
                          New Town DD14, USA
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.box}>
                <h3 className={styles.fTitle}>POPULAR POSTS</h3>
                <div className={styles.post}>
                  <div className={styles.image}>
                    <img src={small01} alt="post-img" />
                  </div>              
                  <div className={styles.postDetails}>
                    <div className={styles.time}>
                      <BsClock />
                      <span>15th April, 2022</span>
                    </div>
                    <a href="/" className={styles.postTitle}>Building Renovation Tasks</a>
                    <a href="/" className={styles.readMore}>
                      <span>READ MORE</span>
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
                <div className={styles.post}>
                  <div className={styles.image}>
                    <img src={small02} alt="post-img" />
                  </div>
                  <div className={styles.postDetails}>
                    <div className={styles.time}>
                      <BsClock />
                      <span>15th April, 2022</span>
                    </div>
                    <h4 className={styles.postTitle}>Building Renovation Tasks</h4>
                    <a href="/" className={styles.readMore}>
                      <span>READ MORE</span>
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className={styles.copyRights}>
        <div className="mainContainer">
          <p>Copyright 2023 Elevate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default footer
