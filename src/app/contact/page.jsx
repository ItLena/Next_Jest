import styles from './contact.module.css'
import owl from '../../../public/images/owl.webp'
import Image from 'next/image'

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgBox}>
                <Image
                    className={styles.img}
                    src={owl}
                    alt='hogwart'
                    layout="responsive"
                />
            </div>
            <div className={styles.formBox}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Enter your name and surname' />
                    <input type="text" placeholder='Email' />
                    <textarea name="" id="" cols={30} rows={10} placeholder='Message' />
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
export default ContactPage