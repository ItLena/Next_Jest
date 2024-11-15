import styles from '../../page.module.css'
import PersonCard from  "../../../components/personCard/PersonCard";

const TeachersPage = () =>{
    return (
        <>
        <div className={styles.page}>
            <h1>Staffs Page</h1>
            <PersonCard/>
            </div>
            </>
    )
}
export default TeachersPage