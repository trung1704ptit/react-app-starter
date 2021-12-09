import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import SocialNetworks from './SocialNetworks';

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
                name="basic"
                initialValues={{
                    remember: false,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <h1>Sign in</h1>
                <SocialNetworks />

                <div className="option-text">or use your account</div>

                <Form.Item
                    name="email"
                    place
                    type="email"
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
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password.',
                        },
                        { min: 5, message: 'Password must be minimum 6 characters.' },
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
                    Submit
                </Button>
            </Form>
        </>
    )
}