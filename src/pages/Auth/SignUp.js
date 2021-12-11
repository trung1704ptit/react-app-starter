import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import SocialNetworks from './SocialNetworks';
import { Typography, message } from 'antd';
import { Row, Col } from 'antd';
import SignUpSuccessModal from './SignUpSuccessModal';
import api from '../../api';
import { get } from 'lodash';

const { Title } = Typography;

export default function SignUp() {
    const [checked, setChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const payload = {
                firstName: get(values, 'firstName'),
                lastName: get(values, 'lastName'),
                email: get(values, 'email'),
                password: get(values, 'password'),
            }

            setLoading(true)

            const res = await api({
                url: '/users/signup',
                data: payload,
                method: 'POST'
            });

            if (res && res.status === 201) {
                setShowModal(true);
                form.resetFields()
                setLoading(false)
            }
        } catch (error) {
            const errorMessage = get(error, 'error.message', 'Something went wrong!')
            message.error(errorMessage)
            setLoading(false)
        }
    };

    const onCheckboxChange = e => {
        setChecked(e.target.checked);
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const validation = (rule, value, callback) => {
        if (checked) {
            return callback()
        }
        return callback("Please agree Terms of Use & Privacy policy")
    };

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && <SignUpSuccessModal
                handleClose={handleCloseModal}
            />}

            <Form
                name="signup"
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
            >

                <Title level={2} className="text-center">Create Account</Title>
                <SocialNetworks />

                <div className="option-text">or use your email for registration</div>


                <Row gutter={{ xs: 8, sm: 16 }}>
                    <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
                        <Form.Item
                            hasFeedback
                            name="firstName"
                            label="First name"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first name.',
                                },
                                {
                                min: 2,
                                message: 'Your first name must be at least 2 characters.'
                            }]}>
                            <Input placeholder='First name' size="large" />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
                        <Form.Item
                            hasFeedback
                            name="lastName"
                            label="Last name"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last name.',
                                },
                                {
                                min: 2,
                                message: 'Your last name must be at least 2 characters.'
                            }]}>

                            <Input placeholder='Last name' size="large" />
                        </Form.Item>
                    </Col>
                </Row>



                <Form.Item
                    name="email"
                    label="Email address"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
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

                <Row gutter={{ xs: 8, sm: 16 }}>
                    <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
                        <Form.Item
                            name="password"
                            label="Password"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            hasFeedback
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
                    </Col>

                    <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Confirm your password.',
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
                    </Col>
                </Row>

                <Form.Item>
                    <Form.Item name="agree" valuePropName='checked' noStyle rules={[{ validator: validation }]}>
                        <Checkbox checked={checked} onChange={onCheckboxChange}>
                            I agree to
                            <a href="#">Terms of Use & Privacy policy</a>.
                        </Checkbox>
                    </Form.Item>
                </Form.Item>

                <Button
                    type="primary"
                    loading={loading}
                    className="form-submit-btn"
                    htmlType="submit" shape="round"
                    icon={<UserAddOutlined />}
                    size="large"
                >
                    Sign Up
                </Button>
            </Form>
        </>
    )
}