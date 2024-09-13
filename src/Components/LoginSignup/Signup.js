import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css'; // Import the CSS file

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/signup", {
                email, password
            });

            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                navigate("/", { state: { id: email } });
            }
        } catch (e) {
            alert("Error during signup");
            console.error(e);
        }
    }

    return (
        <div className="signup">
            <h1>Register Yourself</h1>
            <form onSubmit={submit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="submit" value="Signup" />
            </form>
            <p>OR</p>
            <Link className="links" to="/login">Login Page</Link>
        </div>
    );
}

export default Signup;
