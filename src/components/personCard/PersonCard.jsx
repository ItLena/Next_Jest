import styles from './personCard.module.css'
import Image from 'next/image'

const PersonCard = ({staff}) =>{
        return (
        <div className={styles.card}>
            <ul>
                <span className={styles.span}>
                <li>{staff.name}</li>
                <li>{staff.species} </li>
                </span>
                <li >
                    <Image                        
                        src={staff.image}
                        width={200}
                        height={100}
                        alt=''
                        layout="responsive" />
                </li>
                          
            </ul>
        </div>
    )
}

export default PersonCard