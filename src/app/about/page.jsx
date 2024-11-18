
import Image from 'next/image'
import express from '../../../public/images/express.jpg'
import hogwart from '../../../public/images/hogwart.jpg'
import dumbledore from '../../../public/images/dumbledore.avif'
import quidditch from '../../../public/images/quidditch.png'
import styles from './about.module.css'
import Link from "next/link";

const AboutPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.textBox}>
                        <h4>Hogwart School of Witchcraft and Wizardry</h4>
                        <p> Is a state-owned school, funded by the British Ministry of Magic</p>
                        <p>Established around the 10th century</p>
                        <p>More than a thousand graduates</p>
                        <button><Link href='/houses'>Houses & History</Link></button>
                    </div>
                    <div className={styles.imgBox}>
                        <Image
                            src={hogwart}
                            width={200}
                            height={100}
                            alt='hogwart'
                            layout="responsive"/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.textBox}>
                        <h4>Hogwarts express</h4>
                        <p>The Express dutifully carries students to and from Hogwarts School at the start and end of every term. The train leaves Platform 9¾ without fail on 1 September at 11 o'clock in the morning, arriving at Hogsmeade Station in the early evening</p>
                    </div>
                    <div className={styles.imgBox}>
                        <Image
                            src={express}
                            width={200}
                            height={100}
                            alt='hogwart'
                            layout="responsive"/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.textBox}>
                        <h4>The Headmaster of Hogwarts is professor Albus Dumbledore</h4>
                        <p>He is assisted by a team of competent teachers and the best wizards in the country</p>
                        <button><Link href='/about/staffs' prefetch={false}>Hogwarts staff</Link></button>
                    </div>
                    <div className={styles.imgBox}>
                        <Image
                            src={dumbledore}
                            width={200}
                            height={100}
                            alt='hogwart'
                            layout="responsive"/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.textBox}>
                        <h4>Quidditch </h4>
                        <p>Quidditch is a popular sport att the school and teams are representing their houses</p>
                    </div>
                    <div className={styles.imgBox}>
                        <Image
                            src={quidditch}
                            width={200}
                            height={100}
                            alt='hogwart'
                            layout="responsive"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutPage