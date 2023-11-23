import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Login.module.css";

function Login() {
  function handleClose() {
    console.log("close");
  }
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
      </aside>
      <main className={styles.main}>
        <div>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </div>
        <h1 className={styles.title}>See what's happening</h1>
        <div className={styles.btnLogin}>
          <h2>Join hackatweet today</h2>
          <button className={styles.signup}>sign up</button>
          <p>already have an account ?</p>
          <button id="signin" className={styles.signin}>
            sign in
          </button>
        </div>
      </main>
      <div className={styles.modalSignup}>
        <div class={styles.modalContent}>
          <button class={styles.modalClose} onClick={() => handleClose()}>
            &times;
          </button>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          <h4>Create your Hackatweet account</h4>
          <form className={styles.modalForm}>
            <input type="text" id="firstname" placeholder="firstname" />
            <input type="text" id="username" placeholder="username" />
            <input type="password" id="password" placeholder="password" />
            <button id="signup" className={styles.signupBtn}>
              sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
