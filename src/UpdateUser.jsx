import react from 'react';
import axios from 'axios';
const UpdateUser = () => { 
    const {id}= useParams(); 
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    // const updateuser  =(e) => {
    //     e.preventDefault();
    //     axios.put(``,{name,email,address})
    //     .then(result=>{
    //         setName(result.data.name);
    //         setEmail(result.data.email);
    //         setAddress(result.data.address);
    //         Navigate('/');
    //     })
    //     .catch(err=>{console.log(err)})
    // }


   return (
    <div>
      <h1>Update</h1>
      <form>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                <label>Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
                <label>Address</label>
                <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/><br/>
                <button>submit</button> 
            </div>
        </form>
      
    </div>
  )
}
export default UpdateUser;