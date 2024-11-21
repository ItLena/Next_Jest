"use client"
import { useState } from "react";
import NavLink from "../navLink/NavLink";
import styles from './links.module.css'

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Houses',
        path: '/houses'
    },
    {
        title: 'Books',
        path: '/books'
    }
   
]
const Links = () => {
    const session = false;
    const isAdmin = false;
    const [open, setOpen] = useState(false)


    return (
        <div>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <NavLink className={styles.link} key={index} item={link} />
                ))}
                {session ? (
                    <div>
                        {isAdmin &&
                            <NavLink item={{ title: 'Admin', path: '/admin' }} />
                        }
                        <button className={styles.logout}>Logout</button>
                    </div>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login' }} />
                )
                }
            </div>
            <button className={styles.menu} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className={styles.dropBox}>
                    {links.map((link, index) => (
                        <NavLink className={styles.link} key={index} item={link} />
                    ))}
                </div>
            }
        </div>
    )
}
export default Links