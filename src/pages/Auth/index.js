import React, { useState } from 'react';
import { Button } from 'antd';
import { SelectOutlined } from '@ant-design/icons';
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
                            <h1>Welcome!</h1>
                            <p>If you already have an account with us please log in at the login page</p>
                            <Button shape="round" onClick={handleClickSignIn} icon={ <SelectOutlined />} size="large">
                                Sign In
                            </Button>
                        </div>
                        <div className="overlay-panel overlay-right bg-gradient">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <Button shape="round" onClick={handleClickSignUp} icon={<SelectOutlined />} size="large">
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}