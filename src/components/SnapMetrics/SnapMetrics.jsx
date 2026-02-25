// SnapMetrics.jsx
import styles from "./SnapMetrics.module.css";
import {
  CalendarDays,      // Yesterday
  Zap,               // Selected Period (energy/fast period)
  Building2,         // Stock / inventory
  Landmark,          // Receivable (bank/institution)
  ArrowDownToLine,   // Payable (money going out/down) – alternative: PiggyBank or MinusCircle
  Calculator,        // Average
} from "lucide-react";

const SnapMetrics = () => {
  const metrics = [
    {
      title: "Yesterday",
      date: "24-Feb-2026",
      value: 1280354,
      icon: CalendarDays,
      color: "#a855f7", // purple/violet
    },
    {
      title: "Selected Period",
      date: "01-Feb-2026 - 28-Feb-2026",
      value: 28313863,
      icon: Zap,
      color: "#6366f1", // indigo
    },
    {
      title: "Stock",
      value: 199653122,
      icon: Building2,
      color: "#f59e0b", // amber/orange
    },
    {
      title: "Receivable",
      value: 18014686,
      icon: Landmark,
      color: "#10b981", // emerald/green
    },
    {
      title: "Payable",
      value: -6346172,
      icon: ArrowDownToLine,   // or PiggyBank / HandCoins / ArrowDownCircle
      color: "#ef4444",        // red
    },
    {
      title: "Average",
      date: "01-Feb-2026 - 28-Feb-2026",
      value: 274506020,
      icon: Calculator,
      color: "#f97316", // orange
    },
  ];

  return (
    <div className={styles.metrics}>
      {metrics.map((item, idx) => (
        <div
          key={idx}
          className={styles.card}
          style={{ "--card-accent": item.color }}
        >
          <div className={styles.accentBar} />

          <div className={styles.content}>
            <div className={styles.header}>
              <div
                className={styles.iconBox}
                style={{ backgroundColor: `${item.color}15` }} // very light tint ~10% opacity
              >
                <item.icon size={20} color={item.color} strokeWidth={2.2} />
              </div>

              <div className={styles.titleGroup}>
                <div className={styles.title}>{item.title}</div>
                {item.date && (
                  <div className={styles.date}>{item.date}</div>
                )}
              </div>
            </div>

            <div
              className={styles.value}
              style={{
                color: item.value < 0 ? "#ef4444" : "var(--text-primary)",
              }}
            >
              {item.value.toLocaleString("en-IN")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnapMetrics;