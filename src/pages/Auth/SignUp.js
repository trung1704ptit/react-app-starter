import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import SocialNetworks from './SocialNetworks';
import { Typography } from 'antd';

const { Title } = Typography;

export default function SignUp() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="signup"
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Title level={2}>Create Account</Title>
                <SocialNetworks />

                <div className="option-text">or use your email for registration</div>

                <Form.Item
                    hasFeedback
                    name="firstName"
                    rules={[{
                        min: 2,
                        message: 'Your first name must be at least 2 characters.'
                    }]}>
                    <Input placeholder='First name' size="large" />
                </Form.Item>

                <Form.Item
                    hasFeedback
                    name="lastName"
                    rules={[{
                        min: 2,
                        message: 'Your last name must be at least 2 characters.'
                    }]}>

                    <Input placeholder='Last name' size="large" />
                </Form.Item>

                <Form.Item
                    name="email"
                    hasFeedback
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

                <Form.Item
                    name="confirm"
                    // label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password.',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirm password' size="large" />
                </Form.Item>

                <Button type="primary" htmlType="submit" shape="round" icon={<UserAddOutlined />} size="large">
                    Sign Up
                </Button>
            </Form>
        </>
    )
}