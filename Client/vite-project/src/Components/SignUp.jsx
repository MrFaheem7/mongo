import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('http://localhost:3000/', { name, email, password });
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <div style={{
        backgroundColor: 'transparent',
        borderRadius: "10px",
        boxShadow: "rgb(75 77 245 / 50%) 10px 10px 20px",
        border: "rgb(75 77 245 / 50%) solid 1.5px",
        padding: "15px"
      }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input required
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputName1"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
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
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
