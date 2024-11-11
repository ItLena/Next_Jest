import Link from "next/link";

const NotFound = () =>{
    return(
        <div>
            <h1>Not found</h1>
            <p>Sorry, the page you are looking for dosn't exist</p>
            <Link href='/'>Return Home</Link>
        </div>
    )
}
export default NotFound