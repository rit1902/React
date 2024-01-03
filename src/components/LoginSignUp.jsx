import React,{useState} from "react";
import './LoginSignUp.css';
import { Link } from "react-router-dom";

const LoginSignUp=()=>{

    const [action,setAction]=useState("Login");

    return(
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    {/* <img src={user_img} /> */}
                    <input type="text" placeholder="Name" />
                </div>}
                
                <div className="input">
                    {/* <img src={email_img} /> */}
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    {/* <img src={pass_img} /> */}
                    <input type="password" placeholder="Password" />
                </div>
            </div>
        <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}><Link to='/'>Login</Link></div>
            </div>
        </div>
    )
}

export default LoginSignUp;