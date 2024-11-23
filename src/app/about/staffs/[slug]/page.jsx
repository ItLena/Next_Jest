
import PersonCard from "@/src/components/personCard/PersonCard"
import styles from '../../../page.module.css'

const SinglestaffPage = async ({ params }) => {

    const { slug } = await params
    let data = await fetch(`https://hp-api.onrender.com/api/character/${slug}`)
    let person = await data.json(slug);
    return (
        <div className={styles.box}>
            {person.map((item) => (
                <PersonCard person={item} />
            ))
            }
        </div>
    )
}
export default SinglestaffPage