import {Button, Form, Input, message} from "antd";
import React from "react";
import bgc from "./Img/loginBGC.svg";
import user from "./Img/user.svg";
import brendImg from "./Img/asaka_logo_copy.svg";
import "./Login.scss";
import {connect} from "react-redux";
import {confirmVerificationCode, sendVerificationCode} from "../../redux/actions/authAction";

const Login = (props) => {
    const onFinish = (values) => {
        props.sendVerificationCode(values);
    };

    const onFinishVerification = (values) => {
        props.confirmVerificationCode(values, props.verificationData);
    }

    return (
        <>
            <div id="login" className="login-page">
                <div className="gradient-box"/>
                <img className="bgc" src={bgc} alt=""/>
                <img className="usr-img" src={user} alt=""/>
                <div className="form">
                    <div className="form-image-wrap">
                        <img src={brendImg} alt=""/>
                    </div>
                    <div className="login-box">
                        {props.authState === 1 ?
                            <>
                                <h3>
                                    Введите свой логин и <br/>
                                    пароль
                                </h3>
                                <Form onFinish={onFinish} layout="vertical">
                                    <Form.Item label="Имя пользователя" name="username" rules={[{required: true, message: 'Пожалуйста, введите свое имя пользователя!'}]}>
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item label="Пароль" name="password" rules={[{required: true, message: 'Пожалуйста, введите свой пароль!'}]}>
                                        <Input.Password/>
                                    </Form.Item>
                                    <Button block type="primary" htmlType="submit">
                                        Авторизоваться
                                    </Button>
                                </Form>
                            </> :
                            <>
                                <h4>Введите 6 значный код, отправленный <br/> на номер *** ** *** {props.verificationData ? (props.verificationData.phoneNumber?.substring(-4, -2) + " " + props.verificationData.phoneNumber?.substring(-2)): ""}</h4>
                                <Form onFinish={onFinishVerification} layout="vertical">
                                    <Form.Item name="code" rules={[{required: true, message: 'Пожалуйста, введите код!'}]}>
                                        <Input placeholder="- - - - - -" style={{textAlign: "center"}}/>
                                    </Form.Item>
                                    <Button block type="primary" htmlType="submit">
                                        Авторизоваться
                                    </Button>
                                </Form>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        authState: state.auth.authState,
        verificationData: state.auth.verificationData,
    }
}

export default connect(mapStateToProps, {sendVerificationCode, confirmVerificationCode})(Login);
