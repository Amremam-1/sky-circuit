import MapComponent from "./MapComponent/MapComponent";
import styles from "./styles.module.css";

const GetInTouch = () => {
  return (
    <section className={styles.getInTouch}>
      <div className={styles.container}>
        <div className={styles.map}>
            <MapComponent />
        </div>
        <div className={styles.message}>
          <div className={styles.top}>
            <p className={styles.text}>Get In Touch</p>
            <h2 className={styles.title}>Let’s Get in Touch</h2>
          </div>
          <form className={styles.messageForm}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <select className={styles.selectOption}>
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
            </select>
            <input type="date" placeholder="Select Date" />
            <select className={styles.selectTime}>
                <option>12:00AM</option>
                <option>12:30AM</option>
                <option>1:00AM</option>
            </select>
            <textarea placeholder="Your message Here" />
            <button className={styles.submitButton}>Submit Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
