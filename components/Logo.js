import styles from "../styles/Logo.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function Logo() {
  return (
    <div className={styles.container}>
      <div>
        <FontAwesomeIcon icon={faTwitter} className={styles.logo} />
      </div>

      <div>
        <div className={styles.logoutContainer}>
          <img src="/images/iconAvatar.png" />
          <div>
            <h2 className={styles.firstname}>Name</h2>
            <p className={styles.username}>@username</p>
          </div>
        </div>
        <button className={styles.button}>Logout</button>
      </div>
    </div>
  );
}

export default Logo;
