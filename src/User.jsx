import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './User.css'
const User = () => { 
const [user, setUser] = useState([]);
    useEffect (() => {
        axios.get('https://backendmern-ms25.onrender.com/api/user/fetch')
         .then(result => {
            setUser(result.data.users)
        })
        .catch(err=>{console.log(err)})
    })
    const deleteUser=(id)=>{
      axios.delete(`https://backendmern-ms25.onrender.com/api/user/delete/${id}`)
      .then(result=>{console.log("user deleted")})
      .catch(err=>{console.log(err)})
    }
    
        
          
  return (
    <div>
      <h1>User</h1>
       <Link to = "/create">Create User</Link>
       
      <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>
        {user.map((users) => (
            <tr>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.address}</td>
                <td>
                    <Link to = '/update'>update</Link>
                  
                    <button onClick={()=>deleteUser(users._id)}>delete</button>
                </td>
            </tr>
        ))}
      </table>
    </div>
  )
}
export default User;