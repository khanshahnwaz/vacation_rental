import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'; // Import the CSS file

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/login", {
                email, password
            });

            if (response.data === "exist") {
                navigate("/", { state: { id: email } });
            } else if (response.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (e) {
            alert("Error during login");
            console.error(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
            <p>OR</p>
            <Link className="links" to="/signup">Signup Page</Link>
        </div>
    );
}

export default Login;
