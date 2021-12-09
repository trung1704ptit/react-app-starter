import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

import './style.css';

export default function Auth() {
    const [isPanelRightActive, setIsPanelRightActive] = useState(false);

    const handleClickSignIn = () => {
        setIsPanelRightActive(false)
    }

    const handleClickSignUp = () => {
        setIsPanelRightActive(true)
    }

    return (
        <>
            <div className={`container ${isPanelRightActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-up-container">
                    <SignUp />
                </div>
                <div className="form-container sign-in-container">
                    <SignIn />
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left bg-gradient">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleClickSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right bg-gradient">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleClickSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
