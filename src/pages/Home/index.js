import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";
import './home.less';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="React App authentication" />
            </Helmet>

            <div className="home-page">
                <div className="home-overlay">
                    <h2>Welcome to React Sliding Sign in & Sign Up template</h2>
                    <p>Let's check out my <a href="https://github.com/trung1704ptit/react-app-template">source code! <GithubOutlined /></a></p>
                    <p>This is open source for everyone who is looking for a template sign in & sign up written by ReactJs</p>
                    <p>Thank you! - Trung Nguyen</p>
                    <br />
                </div>
            </div>
        </>
    )
}

