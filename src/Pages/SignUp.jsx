import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    signup(signUpData);
    navigate("/quiz");
  }

  const handleLogin = () => {
   navigate("/login");
  }

  return (
    <div>
      <form onSubmit={handleSignupFormSubmit}>
        <h1>Signup Now</h1>
        <label htmlFor="username">Username: </label> <br /> <br />
        <input
          type="text"
          name="username"
          value={signUpData.username}
          onChange={(e) => setSignUpData((prev) => ({...prev, username: e.target.value}))}
          required
          /> <br /> <br />

        <label htmlFor="email">Email: </label> <br /> <br />
        <input
          type="email"
          name="email"
          value={signUpData.email}
          onChange={(e) => setSignUpData((prev) => ({...prev, email: e.target.value}))}
          required
        /> <br /> <br />

        <label htmlFor="password">Password: </label> <br /> <br />
        <input
          type="password"
          name="password"
          value={signUpData.password}
          onChange={(e) => setSignUpData((prev) => ({...prev, password: e.target.value}))}
          required
        /> <br /> <br />
        <button type="submit">Sign Up</button>
        <hr/>
        <p>Do you have already account? </p>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default SignUp