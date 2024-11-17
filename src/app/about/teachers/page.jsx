import styles from '../../page.module.css'
import PersonCard from  "../../../components/personCard/PersonCard";

const TeachersPage = async () =>{

let data = await fetch('https://hp-api.onrender.com/api/characters/staff')
let staffs = await data.json();
staffs.sort((a,b) =>{

    return a.name - b.name
});

console.log(staffs)
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
                    // <PersonCard key={item.id} staff={item} />
                    <tr> 
                       
                        <td>{index+1}</td>
                        <td>{item.name}</td>
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
export default TeachersPage;
