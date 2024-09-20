import styles from '../styles/BlockLoader.module.css';

const BlockLoader = () => {
  return (
    <div className={styles.blocks}>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
    </div>
  );
};

export default BlockLoader;
