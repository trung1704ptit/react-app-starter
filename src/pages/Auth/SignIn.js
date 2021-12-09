import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import SocialNetworks from './SocialNetworks';
import { Typography } from 'antd';

const { Title } = Typography;

export default function SignIn() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="signin"
                initialValues={{
                    remember: false,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Title level={2} className="text-center">Sign in</Title>
                <SocialNetworks />

                <div className="option-text">or use your account</div>

                <Form.Item
                    name="email"
                    hasFeedback
                    label="Email address"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ spane: 24 }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email.',
                        },
                         {
                            type: "email",
                            message: 'Your email is invalid.',
                         }
                    ]}
                >
                    <Input placeholder='Email' size="large" />
                </Form.Item>

                <Form.Item
                    name="password"
                    hasFeedback
                    label="Password"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ spane: 24 }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password.',
                        },
                        { min: 6, message: 'Password must be minimum 6 characters.' },
                    ]}
                >
                    <Input.Password placeholder='Password' size="large" />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    Forgot password?
                    </a>
                </Form.Item>


                <Button type="primary" htmlType="submit" shape="round" icon={<LoginOutlined />} size="large">
                    Sign In
                </Button>
            </Form>
        </>
    )
}