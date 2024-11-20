import styles from './houses.module.css'
import Image from 'next/image'
import hogwart from '../../../public/images/hogwart1.PNG'
import gryffindor from '../../../public/images/gryffindor.jpg'
import Link from 'next/link'

const HousesPage = () => {
    return (
        <div className={styles.background}>
        <section className={styles.banner}>
            <div className={styles.textBox}>
            <h4>
                Hogwarts was founded in the 10th century by four of the greatest witches and wizards: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, 
                and Salazar Slytherin. Their 1  legacy lives on in the four Houses that bear their names, each with its own unique qualities.
            </h4>
            <h4>Hidden from the prying eyes of Muggles, Hogwarts stands as a testament to the power of magic. Its ancient walls have witnessed countless spells, potions, and magical duels.</h4>
        </div>
        </section>
        <section className={styles.cardBox}>
            <div className={styles.card}>
                <Link href='/houses/slug'>Gryffindore</Link>
                <Image
                 src={gryffindor}
                 width={200}
                 height={100}
                 alt=''
                 layout="responsive"
                />
            </div>
        </section>
        
        </div>
    )
}
export default HousesPage