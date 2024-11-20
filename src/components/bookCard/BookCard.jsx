
import styles from './bookCard.module.css'
import Image from 'next/image'

const BookCard = ({ book }) => {
    return (
        <div className={styles.card}>
            <h2>Book {book.serial}</h2>
            <h6>{book.pages} pages</h6>
            <Image
                src={book.cover}
                width={200}
                height={100}
                alt=''
                layout="responsive" />
            <p>{book.summary}</p>
            <h5>Released: {book.release_date}</h5>
        </div>
    )
}

export default BookCard