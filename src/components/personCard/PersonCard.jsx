import styles from './personCard.module.css'
import Image from 'next/image'
import noPhoto from '../../../public/images/no-photo.gif'

const PersonCard = ({ person }) => {
    return (
        <div className={styles.card}>
         
                <h1>{person.name}</h1>
                <h3>{person.species}</h3>
                <p>{person.gender}</p>               
        
            <div>
                {person.image === "" ? 
                <Image
                src={noPhoto}
                width={200}
                height={100}
                alt=''
                layout="responsive" /> : 
                <Image
                    src={person.image}
                    width={200}
                    height={100}
                    alt=''
                    layout="responsive" />}
            </div>
        </div>
    )
}

export default PersonCard