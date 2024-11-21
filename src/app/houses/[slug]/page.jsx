import styles from '../../page.module.css';
import Link from 'next/link';

const HouseCharactersList = async ({ params }) => {
    const { slug } = await params
    let data = await fetch(`https://potterhead-api.vercel.app/api/houses/${slug}`)
    let person = await data.json(slug);
    return (
        <div className={styles.page}>
            <h1>House Member's List</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date of birth</th>
                        <th>Species</th>
                        <th>Gender</th>
                        <th>Is Student</th>
                        <th>Is Wizard</th>
                        <th>Patronus</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td><Link href={`/about/staffs/${encodeURIComponent(item.id)}`}>{item.name}</Link></td>
                            <td>{item.dateOfBirth}</td>
                            <td>{item.species}</td>
                            <td>{item.gender}</td>
                            {item.hogwartsStudent ? <td>yes</td> : <td>no</td>}
                            {item.wizard ? <td>yes</td> : <td>no</td>}
                            <td>{item.patronus}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default HouseCharactersList