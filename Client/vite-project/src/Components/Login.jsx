import { Axios } from "axios";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{ const response=await axios.post('http://localhost:3000/login',{email,password})
  console.log(response,'response')
if(response.status==200){
  navigate('/home')
  // toast.success(response.data)
}
else{
  toast.error(response.data)
}
}
    catch{(error)=>{
      console.log(error,'error')
    }}
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100vh"
      }}
    >
       <div style={{
      backgroundColor: "rgb(94 119 117 / 79%)", 
      borderRadius: "10px",
   
      boxShadow: "rgb(75 77 245 / 50%) 10px 10px 20px",
      border:"rgb(75 77 245 / 50%) solid 1.5px",
    padding:"15px"}}>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text ">
            Well never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      </div>
    </div>
  );
};
export default Login;
