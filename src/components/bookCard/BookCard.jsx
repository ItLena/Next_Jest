
import styles from './bookCard.module.css'
import Image from 'next/image'

const BookCard = ({ book }) => {
    return (
        <div className={styles.card}>
            <ul>
                <span className={styles.span}>
                <li><h2>Book {book.serial}</h2></li>
                <li><h5>{book.pages} pages</h5></li>
                </span>
                <li>
                    <Image                        
                        src={book.cover}
                        width={200}
                        height={100}
                        alt=''
                        layout="responsive" />
                </li>
                <li><p>{book.summary}</p></li>
                <li><h5>Released:{book.release_date}</h5> </li>               
            </ul>
        </div>
    )
}

export default BookCard