import React, { useState } from "react";
import "../registerpage/register.css";
// import { register } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { createUserAPI } from "../../services/api";
const initialValue = {
  username: "",
  password: "",
};
const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(initialValue);
  const { username, password } = user;
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const register_func = async () => {
    console.log(user)
    
    const response = await createUserAPI(user);
    console.log(response.data);
    if(response.data.statusCode === 200){
      alert("ADMIN REGISTER")
      navigate('/')
    }if(response.data.statusCode === 400){
      alert("DUPLICATE USER")
      setUser(initialValue)
    }
    // alert(response.data.message)
    // if(response.data.message === 'user created'){
    //   navigate('/')
    // }
  };
  return (
    <div>
      <div className="background">
        <div className="login-box">
          <h2>Admin Register</h2>
          <form>
          
            <div className="user-box">
              <input
                type="text"
                onChange={(e) => onValueChange(e)}
                name="username"
                value={username}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                onChange={(e) => onValueChange(e)}
                name="password"
                value={password}
              />
              <label>Password</label>
            </div>
            <div className="row">
              <div className="col-md-12 register_user">
                <button href="register" className="register-button"  onClick={() => navigate('/')}>
                 
                  Login
                </button>
              </div>
            </div>
            <a onClick={() => register_func()}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
