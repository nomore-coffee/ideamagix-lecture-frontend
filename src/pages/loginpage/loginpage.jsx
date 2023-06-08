import React, { useState } from "react";
import "../registerpage/register.css";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/api";

const initialValue = {
  username: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(initialValue);
  const { username, password } = user;
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loginfun = async () => {
    let login= await loginAPI(user)
    console.log(login.data.statusCode)
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    if(login.data.statusCode === 200){
      localStorage.setItem("token",login.data.message.token)
      localStorage.setItem("role",login.data.message.role)
      localStorage.setItem("name",login.data.message.name)
      if(login.data.message.role === 'admin'){
        navigate('/admin')
      }
      if(login.data.message.role === 'instructors'){
        navigate('/instructor')
      }
    } 
  };
  return (
    <div>
      <div className="background">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                onChange={(e) => onValueChange(e)}
                name="username"
                value={username}
              />
              <label>UserName</label>
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
                <button href="register" className="register-button"  onClick={() => navigate('/register')}>
                 
                  Register User?
                </button>
              </div>
            </div>
            <a onClick={() => loginfun()}>
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

export default Login;
