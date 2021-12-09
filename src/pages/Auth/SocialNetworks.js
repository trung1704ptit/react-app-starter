import React from 'react';
import { FacebookOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const SocialNetworks = () => {
    return (
        <div className="social-container">
            <Tooltip title="Facebook" placement="bottom" color="#4267B2" key="#4267B2"><div className="social facebook"><FacebookOutlined /></div></Tooltip>
            <Tooltip title="Google+" placement="bottom" color="#db4a39" key="#db4a39"><div className="social google"><GooglePlusOutlined /></div></Tooltip>
            <Tooltip title="LinkedIn" placement="bottom" color="#0e76a8" key="#0e76a8"><div className="social linkedin"><LinkedinOutlined /></div></Tooltip>
        </div>
    )
}

export default React.memo(SocialNetworks)