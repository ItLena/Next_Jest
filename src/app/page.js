import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* throw new Error("Error in home"); */}
        
       <div>Home page</div>      
      </main>      
    </div>
  );
}