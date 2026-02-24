import styles from "./SnapMetrics.module.css";

const SnapMetrics = () => {
  const metrics = [
    { title: "Yesterday", value: "5,15,039" },
    { title: "Selected Period", value: "18,60,51,166" },
    { title: "Stock", value: "38,03,98,295" },
    { title: "Receivable", value: "2,14,02,34,691" },
    { title: "Payable", value: "-62,56,26,722" },
    { title: "Average", value: "25,28,53,965" },
  ];

  return (
    <div className={styles.metrics}>
      {metrics.map((item, index) => (
        <div key={index} className={styles.card}>
          <p className={styles.title}>{item.title}</p>
          <h3 className={styles.value}>{item.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default SnapMetrics;