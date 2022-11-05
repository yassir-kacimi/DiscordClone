import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core";
import { auth, provider } from "./firebase";


function Login(){
  const signIn= () => {
     auth.signInWithPopup(provider).catch((error) => alert(error.message));//.catch .. is a callback function
  };
  return(
    <div className="login">

      <div className="loginLogo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11PIX5Ix9G8WAEJMiLuunDtjSSpvKG6E37g&usqp=CAU" alt=""/>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
