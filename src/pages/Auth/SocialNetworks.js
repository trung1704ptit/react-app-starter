import React from 'react';
import { FacebookOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';

const SocialNetworks = () => {
    return (
        <div className="social-container">
            <div className="social facebook"><FacebookOutlined /></div>
            <div className="social google"><GooglePlusOutlined /></div>
            <div className="social linkedin"><LinkedinOutlined /></div>
        </div>
    )
}

export default React.memo(SocialNetworks)