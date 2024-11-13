import Image from 'next/image'
import express from '../../../public/images/express.jpg'
import hogwart from '../../../public/images/hogwart.jpg'
import dumbledore from '../../../public/images/dumbledore.avif'
import styles from './about.module.css'
const AboutPage = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.textBox}>
                    <h1>Hogwart</h1>
                </div>
                <div className={styles.imgBox}>
                    <Image
                        src={hogwart}
                        width={200}
                        height={100}
                        alt='hogwart'
                        layout="responsive"
                    />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.textBox}>
                    <h1>Hogwarts express</h1>
                </div>
                <div className={styles.imgBox}>
                    <Image
                        src={express}
                        width={200}
                        height={100}
                        alt='hogwart'
                        layout="responsive"
                    />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.textBox}>
                    <h1>The Headmaster of Hogwarts</h1>
                </div>
                <div className={styles.imgBox}>
                    <Image
                        src={dumbledore}
                        width={200}
                        height={100}
                        alt='hogwart'
                        layout="responsive"
                    />
                     <div className={styles.textBox}>
                    <h1>Hogwart</h1>
                </div>
                <div className={styles.imgBox}>
                    <Image
                        src={hogwart}
                        width={200}
                        height={100}
                        alt='hogwart'
                        layout="responsive"
                    />
                </div>
        
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutPage