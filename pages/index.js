import BlockLoader from '../components/BlockLoader';
import styles from '../styles/Home.module.css'; // Add a new CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <h1></h1>
      <BlockLoader />
    </div>
  );
}
