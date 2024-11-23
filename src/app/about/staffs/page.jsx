import styles from '../../page.module.css'
import Link from 'next/link';

const StaffsPage = async () => {

    let data = await fetch('https://hp-api.onrender.com/api/characters/staff')
    let staffs = await data.json();

    return (
        <div className={styles.page}>
            <h1>Hogwarts Staffs</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Spacialities</th>
                    </tr>
                </thead>
                <tbody>
                    {staffs.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td> <Link href={`/about/staffs/${encodeURIComponent(item.id)}`}>{item.name}</Link></td>
                            <td>
                                {item.wizard ? "wizard" : "not wizzard"}
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default StaffsPage;
