import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

// import "./auth/signin.css"

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1 style={{ textAlign: "center", marginTop: "200px" }}>
          Log In to your account
        </h1>
        <input
          style={{
            border: "1px solid black",
            margin: "40px 5px 0px 480px",
          }}
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          style={{ border: "1px solid black", marginRight: "5px" }}
          type="password"
          placeholder="Enter Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Link to="/Home">
          <button
            style={{ border: "1px solid black", marginRight: "5px" }}
            type="submit"
          >
            Log In
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
