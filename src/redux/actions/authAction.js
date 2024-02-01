import {UPDATE_STATE_AUTH} from "../types";
import axios, {HttpStatusCode} from "axios";
import {API_PATH} from "../../tools/constants";
import {message} from "antd";
import {postData} from "../../tools/common";

export function updateState(data) {
    return {
        type: UPDATE_STATE_AUTH,
        payload: data
    }
}

export const sendVerificationCode = (values) => dispatch => {
    console.log(values)
    postData(API_PATH + "authenticate", values)
        .then(res => {
            console.log(res);
        })
    // axios
    //     .post(API_PATH + "authenticate", values)
    //     .then((res) => {
    //         if (res.status === HttpStatusCode.Ok){
    //             dispatch(updateState({authState: 2, verificationData: res.data}))
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         if(err){
    //             if (err.response){
    //
    //             }
    //         }
    //         message.error("Имя пользователя или пароль неверны!");
    //     });
}

export const confirmVerificationCode = (values, verificationData) => dispatch => {
    axios.post(API_PATH + "authenticate/"+ verificationData.phoneNumber +"/" + values.code)
        .then(res => {

        })
        .catch((err) => {
            message.error("Код подтверждения неверен!")
        })
}