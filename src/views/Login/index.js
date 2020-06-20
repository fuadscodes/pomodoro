import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import fire from '../../config/fire';
import { useHistory } from "react-router-dom";
import { Wrapper } from '../../components/Wrapper';

const Login = (props) => {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");  
  let history = useHistory();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    fire.auth().signInWithEmailAndPassword(values.email, values.password).then(
        (user) => {
            console.log(user);
            history.replace("/dashboard");
        }
    ).catch((err) => {
        setShow(true);
        setMessage(err.message); 
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
        <h3>Login</h3>
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
            Log in
            </Button>
            
            <a href="/register">   Register now!</a>
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

export default Login;