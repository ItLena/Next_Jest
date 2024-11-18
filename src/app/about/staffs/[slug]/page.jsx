
import PersonCard from "@/src/components/personCard/PersonCard"
import styles from '../../../page.module.css'
// import { useParams } from "next/navigation";

 

const SinglestaffPage = async ({params}) =>{
  
    const {slug} = await params
    console.log("Slug:", slug)
    let data = await fetch(`https://hp-api.onrender.com/api/character/${slug}`)
    console.log("Data:", data)
    let person = await data.json(slug);
    console.log("Person:", person)

    return (
        <div className={styles.page}>
            {person.map((item)=>(
                 <PersonCard person={item}/>
            ))
           }
        </div>
    )
}
export default SinglestaffPage