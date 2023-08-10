import { useEffect, useState } from "react"
import Shopiteam from "../Shared/Footer/Shopiteam/Shopiteam";


const Shopiteams = () => {
     const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('inventoryiteams.json') // Replace with your server URL
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []); 

   



  return (
   <div className="grid grid-cols-4  gap-y-3 gap-x-2 ">
     
    {
            users.map(user => <Shopiteam
                key={user.id}
                user={user}
            >
            </Shopiteam>)
        }

        
    </div>
   
  )
}

export default Shopiteams