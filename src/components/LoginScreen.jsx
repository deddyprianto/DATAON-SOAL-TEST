import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  let navigate = useNavigate();
  return (
    <div className="loginPage">
      {/* card */}
      <div className="cardLogin">
        <h1 className="textLogin">Login Page</h1>
        <div className="containerEl">
          <input type="text" className="input" placeholder="username" />
        </div>
        <div className="containerEl">
          <input type="password" className="input" placeholder="password" />
        </div>
        <div className="containerEl">
          <button
            onClick={() => navigate("/home", { replace: true })}
            className="buttonLogin"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
