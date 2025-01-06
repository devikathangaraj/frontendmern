import react from 'react';
import axios from 'axios';
import { useState } from 'react';
const CreateUser = () => {  
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const submit = (e) =>{
        e.preventDefault();
        axios.post("https://backendmern-ms25.onrender.com/api/user/create",{name,email,address})
        .then(result => {
            console.log(result.data);
            Navigate('/');
        })
        .catch(err=>{console.log(err)})
    }
  return (
    <div>
      <h1>CreateUser</h1>
        <form onSubmit={submit}>
            <div>
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} /><br/>
                <label>Email</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Address</label>
                <input type="text" onChange={(e)=>setAddress(e.target.value)}/><br/>
                <button>submit</button> 
            </div>
        </form>
      
    </div>
  )
}
export default CreateUser;