import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../reducers/users";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [signupOpen, setsignupOpen] = useState(false);
  const [signinOpen, setsigninOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");




  const openSignup = () => {
    setsignupOpen(true);
  };
  const closeSignup = () => {
    setsignupOpen(false);
  };
  const openSignin = () => {
    setsigninOpen(true);
  };
  const closeSignin = () => {
    setsigninOpen(false);
  };

  const signup = (e) => {
    e.preventDefault();
    const profil = {
      firstname: firstname,
      username: username,
      password: password,
    };
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profil),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addUser(data));
      });
    setFirstname("");
    setUsername("");
    setPassword("");
    router.push("/home");
  };

  const signin = (e) => {
    e.preventDefault();
    const profil = {
      username: username,
      password: password,
    };
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profil),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addUser(data));
        console.log(data);
      });
    setUsername("");
    setPassword("");
    router.push("/home");
  };

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
          <button className={styles.signup} onClick={openSignup}>
            sign up
          </button>
          <p>already have an account ?</p>
          <button className={styles.signin} onClick={openSignin}>
            sign in
          </button>
        </div>
      </main>
      {signupOpen && (
        <div className={styles.modalSignup}>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={closeSignup}>
              &times;
            </button>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            <h4>Create your Hackatweet account</h4>
            <form className={styles.modalForm}>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                type="text"
                placeholder="firstname"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className={styles.signupBtn} onClick={signup}>
                sign up
              </button>
            </form>
          </div>
        </div>
      )}
      {signinOpen && (
        <div className={styles.modalSignup}>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={closeSignin}>
              &times;
            </button>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            <h4>Connect to Hackatweet</h4>
            <form className={styles.modalForm}>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button className={styles.signupBtn} onClick={signin}>
                sign in
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
