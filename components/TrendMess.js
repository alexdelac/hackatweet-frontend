import styles from "../styles/TrendMess.module.css";

function TrendMess(props) {
  return (
    <div className={styles.container}>
      <h5 className={styles.hashtag}>{props.name}</h5>
      <p className={styles.counterTweet}>{props.count} tweet</p>
    </div>
  );
}

export default TrendMess;
