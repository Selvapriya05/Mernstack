import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://classroom-project-selvapriya05-1.onrender.com", {
        email,
        password,
      });

      if (res.data.isLoggedIn) {
        localStorage.setItem("isLoggedIn", "true");
        alert(res.data.message);
        navigate("/");   
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        No account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;


