import styles from './personCard.module.css'
import Image from 'next/image'

const PersonCard = ({ person }) => {
    return (
        <div className={styles.card}>
            <span className={styles.span}>
                <h1>{person.name}</h1>
                <h3>{person.species}</h3>
                <p>{person.gender}</p>               
            </span>
            <div>
                <Image
                    src={person.image}
                    width={200}
                    height={100}
                    alt=''
                    layout="responsive" />
            </div>
        </div>
    )
}

export default PersonCard