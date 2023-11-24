import styles from "../styles/Trend.module.css";
import { useEffect, useState } from "react";
import TrendMess from "../components/TrendMess";

function Trend() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/trends")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTrends(data);
      });
  }, []);

  const trend = trends.map((e, i) => {
    return <TrendMess key={i} name={e.element} count={e.occurence} />;
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trends</h2>
      <div className={styles.content}>{trend}</div>
    </div>
  );
}

export default Trend;
