import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Hello world</h1>
      </main>
      <footer className={styles.footer}>
        <p>Created by Elena 2024-11-08</p>
      </footer>
    </div>
  );
}
