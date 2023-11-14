import  { useState } from 'react';

export default function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="auth-fields-and-buttons">
        <input id="email-input" type="email" placeholder="Email"></input>
        <input id="password-input" type="password" placeholder="Password"></input>

        <button id="sign-in-btn" className="primary-btn">Sign in</button>
        <button id="create-account-btn" className="secondary-btn">Create Account</button>
      </div>
    )
};