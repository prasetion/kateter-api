import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div>
        <Link href="/simulations" passHref>
          <button className={styles.button}>Go To Simulation</button>
        </Link>
        <Link href="/quiz" passHref>
          <button className={styles.button}>Go To Quiz</button>
        </Link>
      </div>
    </div>
  );
}
