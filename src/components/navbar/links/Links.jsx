import NavLink from "../navLink/NavLink";
import styles from './links.module.css'

const Links = () =>{
    const session = true;
    const isAdmin = false;

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
            path: '/'
        },
        {
            title: 'Books',
            path: '/'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
    ]
    return(
        <div className={styles.links}>
          {links.map((link, index)=>(
            <NavLink className={styles.link} key={index} item={link}></NavLink>
          ))}
        {session ? (
                <div>
                {isAdmin && 
                    <NavLink item={{title: 'Admin', path: '/admin'}}/>
                }
                <button className={styles.logout}>Logout</button>
                </div>
            ):(
                <NavLink item={{title: 'Login', path: '/login'}}/>
            )
        }
        
        </div>
    )
}
export default Links