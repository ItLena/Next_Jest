import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const data = [
    {
      "image": require('../../public/images/hogwart.jpg'),
      "desc": "Mastering Magical Arts: Learn a wide range of spells, potions, and magical theories from world-renowned professors."
    },
    {
      "image": require('../../public/images/library.jpg'),
      "desc": "Exploring the Magical World: Discover hidden secrets, ancient artifacts, and fantastical creatures."
    },
    {
      "image": require('../../public/images/jul.webp'),
      "desc": "School Events: Participate in exciting events like the Yule Ball, Triwizard Tournament, and Quidditch World Cup."
    },
    {
      "image": require('../../public/images/ghosts.jpg'),
      "desc": "Haunted History: Explore the castle's haunted corridors and encounter friendly ghosts like Nearly Headless Nick."
    },
    {
      "image": require('../../public/images/freinds.webp'),
      "desc": "Developing Life-Long Friendships: Build lasting bonds with fellow witches and wizards."
    },
    {
      "image": require('../../public/images/forest.png'),
      "desc": "The Forbidden Forest: Venture into the mysterious woods, home to magical creatures and ancient secrets."
    },
  ]
  return (
    <div className={styles.page}>
      <h1>Why Choose Hogwarts?</h1>
      <div className={styles.flexContainer}>
        {
          data.map((item, index) => (
            <div key={index} className={styles.gallery}>
              <Image
                src={item.image}
                width={200}
                height={100}
                alt='hogwart'
                layout="responsive" />
              <div className={styles.desc}>{item.desc}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
