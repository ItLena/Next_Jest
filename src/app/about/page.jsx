
import Image from 'next/legacy/image'
import styles from './about.module.css'
import Link from "next/link";

const AboutPage = () => {
    const data = [
        {
            title: "Hogwart School of Witchcraft and Wizardry",
            desc: "Is a state-owned school, funded by the British Ministry of Magic.Established around the 10th century.",
            link: "/houses",
            image: require('../../../public/images/hogwart.jpg'),
        },
        {
            title: "Hogwarts express",
            desc: "The Express dutifully carries students to and from Hogwarts School at the start and end of every term. The train leaves Platform 9¾ without fail on 1 September at 11 o'clock in the morning, arriving at Hogsmeade Station in the early evening",
            link: "https://westcoastrailways.co.uk/hogwarts-express",
            image: require('../../../public/images/express.jpg')
        },
        {
            title: "The Headmaster of Hogwarts",
            desc: "is professor Albus Dumbledore. He is assisted by a team of competent teachers and the best wizards in the country.",
            link: "/about/staffs",
            image: require('../../../public/images/dumbledore.avif')
        },
        {
            title: "Quidditch",
            desc: "Quidditch is a popular sport att the school and teams are representing their houses",
            link: "https://gustavus.edu/im/Spring/quidditch-rules.php",
            image: require('../../../public/images/quidditch.png')
        },
    ]
    return (
        <div className={styles.container}>
            {
                data.map((item, index) => (
                    <div className={styles.row} key={index}>
                        <div className={styles.textBox}>
                            <h4>{item.title}</h4>
                            <p>{item.desc} </p>
                            <button><Link href={`${item.link}`}>Learn more</Link></button>
                        </div>
                        <div className={styles.imgBox}>
                            <Image
                                src={item.image}
                                width={300}
                                height={150}
                                alt=''                                
                                />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default AboutPage