import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const result = login(loginData);

    if (result.success) {
      navigate("/quiz");
    } else if (result.reason === "no-account") {
      alert("No account found. Please sign up first.");
      navigate("/signup");
    } else {
      alert("Email or password is incorrect.");
    }

    setLoginData({
      email: "",
      password: ""
    });
  }

  const handleNavigateSignUp = () => {
    navigate("/signup");
  }

  return (
    <div>
      <form onSubmit={handleLoginFormSubmit}>
        <h1>Login Now</h1>
        <label htmlFor="email">Email: </label> <br /> <br />
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
          required
        /> <br /> <br />

        <label htmlFor="password">Password: </label> <br /> <br />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={(e) => setLoginData((prev) => ({...prev, password: e.target.value}))}
          required
        /> <br /> <br />

        <button type="submit">Login</button>
      </form>
      <hr />
      <p>Don't have an account?</p>
      <button type="button" onClick={handleNavigateSignUp}>Sign Up</button>
    </div>
  )
}

export default Login