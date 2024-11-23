"use client"

import styles from './contact.module.css'
import owl from '../../../public/images/owl.webp'
import Image from 'next/legacy/image'
import { useState } from 'react'

const ContactPage = () => {
    const[userName, setUserName] = useState();

    
    return (
        <div className={styles.container}>
            <div className={styles.imgBox}>
                <h1>Contact us</h1>
                <Image
                    width={300}
                    height={200}
                    src={owl}
                    alt=''
                    layout="responsive"
                />
            </div>
            <div className={styles.formBox}>
                <form className={styles.form}>                 
                    <input                    
                        type="text"
                        name="userName"                                              
                        id="userName"
                        placeholder='Enter your name' />
                    <input
                        type="text"
                        name="email"                        
                        id="email"
                        placeholder='Email' />
                    <textarea
                        name="message"
                        id="message"
                        cols={30} rows={10}
                        placeholder='Message' />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}
export default ContactPage