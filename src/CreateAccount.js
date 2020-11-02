import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CreateAccount.css";
import { auth } from "./firebase";

function CreateAccount() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="createAccount">
      <Link className="link" to="/">
        <img
          className="createAccount__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="createAccount__container">
        <h1>Create Account</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <p>
          By creating an account you agree to Amazon Clone's Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          className="createAccount__registerInButton"
          onClick={register}>
          Create your Amazon Account
        </button>

        <p>
          Already Have an account?
          <span
            className="singin__link"
            onClick={(e) => history.push("/login")}>
            Sign-In
          </span>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
