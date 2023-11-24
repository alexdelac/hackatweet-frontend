import styles from "../styles/TrendMess.module.css";

function TrendMess() {
  return (
    <div className={styles.container}>
      <h5 className={styles.hashtag}>#hashtag</h5>
      <p className={styles.counterTweet}>counter Tweet</p>
    </div>
  );
}

export default TrendMess;
