import styles from './login.module.css'

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form action="">
                <input type="email" placeholder="User Name" />
                <input type="password" name="" id="" placeholder="Password" />
                <button> Login</button>
            </form>
        </div>
    )
}
export default LoginPage