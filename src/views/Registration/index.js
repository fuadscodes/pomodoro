import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import fire from '../../config/fire';
import { Wrapper } from '../../components/Wrapper';

const Register = (props) => {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const onFinish = values => {
    fire.auth().createUserWithEmailAndPassword(values.email, values.password).then(
        (user) => {
            console.log(user);
            props.history.replace("/dashboard");
        }
    ).catch((err) => {
        setShow(true)
        setMessage(err.message)
    })
  };

  return (
      <Wrapper>
        <Form
            name="Login"
            className="login-form"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            >
            <h3>Register</h3>
            <Form.Item
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign up
                </Button>
                
                <a href="/">   Login!</a>
            </Form.Item>

            <Modal
                title="Error message"
                centered
                visible={show}
                onOk={() => {setShow(false)}}
                onCancel={() => {setShow(false)}}
            >
            <p>{message}</p>
            </Modal>
        </Form>
      </Wrapper>
  );
};

export default Register;