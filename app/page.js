import Image from "next/image";
import styles from "./page.module.css";
import cover from "../public/images/cover.jpg"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <div>Home page</div>
      
      </main>
      <footer className={styles.footer}>
        <div>Created by Elena 2024-11-08</div>
      </footer>
    </div>
  );
}
