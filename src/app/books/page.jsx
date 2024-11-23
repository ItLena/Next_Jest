
import styles from '../page.module.css'
import Image from 'next/image'
//import { useState, useEffect } from 'react'
//async 
const BooksPage = async () => {
//await
    let data = await fetch('https://potterhead-api.vercel.app/api/books')
    let books = await data.json()
    console.log("books",books)


    return (
        <div className={styles.page}>
            <h1>The Harry Potter Books</h1>
            <div className={styles.flexContainer}>
                {books.map((book) => (                  
                    <div role="book" key={book.serial} className={styles.card}>
                        <h2>Book {book.serial}</h2>
                        <h6>{book.pages} pages</h6>
                        <p>{book.dedication}</p>
                        <Image
                            src={book.cover}
                            width={200}
                            height={300}
                            alt=''
                        />
                        <p>{book.summary}</p>
                        <h5>Released: {book.release_date}</h5>
                    </div>))
                }
            </div>
        </div>
    )
}
export default BooksPage