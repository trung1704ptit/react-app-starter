import React from 'react';

export default function SignUp() {
    return (
        <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="bg-gradient">Sign Up</button>
        </form>
    )
}