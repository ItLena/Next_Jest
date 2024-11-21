
import styles from '../page.module.css'
import BookCard from '../../../src/components/bookCard/BookCard'


const BooksPage = async () => {

    let data = await fetch('https://potterhead-api.vercel.app/api/books')
    let books = await data.json()

    return (
        <main className={styles.page}>
            <h1>The Harry Potter Books</h1>
            <div className={styles.flexContainer}>                
                {books.map((item) => (
                    <BookCard key={item.id} book={item} />
                ))
                }
            </div>
        </main>
    )
}
export default BooksPage