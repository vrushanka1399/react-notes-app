import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login(){

 const [email,setEmail] = useState("");
 const navigate = useNavigate();

 function submitHandler(e){
  e.preventDefault();

  if(email !== ""){
    navigate("/notes");
  }
 }

 return(
 <div className="container">

  <h2>Login</h2>

  <form onSubmit={submitHandler}>

   <input
    type="text"
    placeholder="enter email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
   />

   <button>Login</button>

  </form>

 </div>
)
}

export default Login;