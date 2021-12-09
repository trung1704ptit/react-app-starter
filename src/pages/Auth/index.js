import React, { useState } from 'react';
import { Button } from 'antd';
import { SelectOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";
import SignIn from './SignIn';
import SignUp from './SignUp';

import './style.less';

export default function Auth() {
    const [isPanelRightActive, setIsPanelRightActive] = useState(false);

    const handleClickSignIn = () => {
        setIsPanelRightActive(false)
    }

    const handleClickSignUp = () => {
        setIsPanelRightActive(true)
    }

    return (
        <div className="auth-page">
            <Helmet>
                <title>Authentication</title>
                <meta name="description" content="React App authentication" />
            </Helmet>

            <div className={`auth-container ${isPanelRightActive ? 'right-panel-active' : ''}`}>
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
                            <Button shape="round" onClick={handleClickSignIn} icon={<SelectOutlined />} size="large">
                                Have an account
                            </Button>
                        </div>
                        <div className="overlay-panel overlay-right bg-gradient">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <Button shape="round" onClick={handleClickSignUp} icon={<SelectOutlined />} size="large">
                                Create new one
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
