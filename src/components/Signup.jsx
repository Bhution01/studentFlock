import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="sign-in-container">
        <form onSubmit={signUp}>
          <h1 style={{ textAlign: "center", marginTop: "200px" }}>
            Create An Account
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
          <Link to="/Signin">
            <button
              style={{ border: "1px solid black", marginRight: "5px" }}
              type="submit"
            >
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
