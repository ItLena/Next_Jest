
import styles from '../page.module.css'
import BookCard from '../../../src/components/bookCard/BookCard'


const BooksPage = async () => {

    let data = await fetch('https://potterhead-api.vercel.app/api/books')
    let books = await data.json()

    return (
        <div className={styles.page}>
            <h1>Harry Potter Books </h1>
            <div className={styles.flexContainer}>                
                {books.map((item) => (
                    <BookCard key={item.id} book={item} />
                ))
                }
            </div>
        </div>
    )
}
export default BooksPage