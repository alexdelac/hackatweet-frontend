import styles from "../styles/Trend.module.css";
import TrendMess from "./TrendMess";

function Trend() {
  return (
    <aside className={styles.container}>
      <h2 className={styles.title}>TREND COMPONENT</h2>
      <div className={styles.content}></div>
      <TrendMess />
    </aside>
  );
}

export default Trend;
