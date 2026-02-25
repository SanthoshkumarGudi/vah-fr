import styles from "./SnapHeader.module.css";

const SnapHeader = ({setTheme, theme}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>S</div>
          <span className={styles.title}>Snap View</span>
          <span 
          className={styles.gear}
          title="view settings"
          >⚙</span>

        </div>

        <div className={styles.search}>
          <span className={styles.icon}>🔍</span>
          <input placeholder="Press space for search" />
          <button className={styles.add}>+</button>
        </div>

     <div className={styles.rightSection}>
  
  {/* Profile Button */}
  <button className={styles.profileButton}>
    <div className={styles.verticalDivider}></div>

    <div className={styles.userBlock}>
      <div className={styles.avatar}>V</div>
      <div className={styles.userText}>
        <div className={styles.username}>mis sales</div>
        <div className={styles.sub}>Main</div>
      </div>
    </div>

  </button>

  {/* Theme Button (Separate) */}
  <button 
  className={styles.themeButton}
  onClick={()=>setTheme(prev=> prev==='light'? 'dark' :'light')}
  >
    {theme==='light'? "☀": "🌙"}
  </button>

</div>
      </div>
    </div>
  );
};

export default SnapHeader;
