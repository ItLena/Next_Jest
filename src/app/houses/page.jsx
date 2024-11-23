import styles from './houses.module.css'
import Image from 'next/legacy/image'
import hogwart from '../../../public/images/hogwart.gif'
import Link from 'next/link'

const HousesPage = () => {
    const houses =
        [
            {
                "name": "gryffindor",
                "foundedBy": "Godric Gryffindor",
                "values": "Bravery, chivalry, and daring.",
                "strengths": "Courageous, determined, chivalrous",
                "benefits": "A sense of belonging to a noble house, opportunities for heroism, and the admiration of peers.",
                "image": require('../../../public/images/gryffindore.avif')
            },
            {
                "name": "hufflepuff",
                "foundedBy": "Helga Hufflepuff",
                "values": "Hard work, patience, justice, and loyalty.",
                "strengths": "Hard work, patience, justice, and loyalty",
                "benefits": "A supportive and inclusive community, a strong sense of belonging, and a reputation for fairness.",
                "image": require('../../../public/images/hufflepuff.avif')
            },
            {
                "name": "slytherin",
                "foundedBy": "Salazar Slytherin",
                "values": "Ambition, cunning, leadership, and resourcefulness.",
                "strengths": "Ambitious, cunning, resourceful, determined.",
                "benefits": "A strong sense of community, opportunities for leadership, and a reputation for success.",
                "image": require('../../../public/images/slytherin.avif')
            },
            {
                "name": "ravenclaw",
                "foundedBy": "Rowena Ravenclaw",
                "values": "Intelligence, wisdom, wit, and creativity.",
                "strengths": "Intelligent, wise, creative, witty.",
                "benefits": "A stimulating intellectual environment, opportunities to explore knowledge, and recognition for academic achievement.",
                "image": require('../../../public/images/ravenclaw.avif')
            },
        ]

    return (
        <div className={styles.background}>
            <div className={styles.textBox}>
                <h4>
                    Hogwarts was founded in the 10th century by four of the greatest witches and wizards: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw,
                    and Salazar Slytherin. Their 1  legacy lives on in the four Houses that bear their names, each with its own unique qualities.
                </h4>
                <h4>Hidden from the prying eyes of Muggles, Hogwarts stands as a testament to the power of magic. Its ancient walls have witnessed countless spells, potions, and magical duels.</h4>
            </div>
            <Image className={styles.hogwartImg}
                src={hogwart}
                width={50}
                height={50}
                alt=''
                layout="responsive"
            />
            <h1>Houses</h1>
            {
                houses.map((house, index) => (
                    <div className={styles.cardBox} key={index}>
                        <div className={styles.card}>
                            <div className={styles.imgBox}>
                                <Link href={`/houses/${encodeURIComponent(house.name)}`}>
                                    <Image
                                        src={house.image}
                                        width={200}
                                        height={100}
                                        alt=''
                                        layout="responsive"
                                    />
                                </Link>
                            </div>
                            <ul className={styles.listBox}>
                                <li> Founded by: {house.foundedBy}</li>
                                <li> Values: {house.values}</li>
                                <li>Strengths: {house.strengths}</li>
                                <li>Benefits: {house.benefits}</li>
                                <Link href={`/houses/${encodeURIComponent(house.name)}`}><button>Click learn more</button></Link>
                            </ul>
                        </div>
                    </div>)
                )
            }
        </div>
    )
}
export default HousesPage