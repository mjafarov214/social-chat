import React from "react";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Button, Block } from "components";

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const isSuccess = true;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {isSuccess ? (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: "48px" }} />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта
            </p>
          </div>
        ) : (
          <Form
            name="register"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item hasFeedback validateStatus="success" name="username">
              <Input
                size="large"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ваше имя"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
