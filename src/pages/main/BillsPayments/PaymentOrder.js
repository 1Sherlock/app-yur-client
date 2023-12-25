import React from 'react';
import {Input, InputNumber, Select} from "antd";

const {Option} = Select;
const PaymentOrder = () => {

    return (
        <div className="bills-page-payment-order">
            <h5>Плательщик</h5>

            <div className="payer-info mb-16">
                <div className="row">
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="write-off-account">Счет списания</label>
                            <Select
                                id="write-off-account"
                                style={{width: "100%"}}
                                placeholder="Выберите счет списания"
                            >
                                <Option value="option1" children={<><div className="w-100 d-flex justify-content-between select-item"><span>Расчётный счёт</span><span>20208000400613693002121212</span></div></>}/>
                            </Select>
                        </div>
                        <div className="info-group">
                            <label htmlFor="bank_name">Наименование банка</label>
                            <Input
                                id="bank_name"
                                disabled
                                value='НАМАНГАН Ш., \"АСАКАБАНК\" АЖ НАМАНГАН ФИЛИАЛИ'
                                style={{width: "100%"}}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="mfo">Код отделения банка</label>
                            <Input
                                id="mfo"
                                disabled
                                value="00231"
                                style={{width: "100%"}}
                                placeholder="Выберите код отделения банка"
                            />
                        </div>
                        <div className="info-group">
                            <label htmlFor="inn">ИНН</label>
                            <Input
                                id="inn"
                                disabled
                                value='200050179'
                                style={{width: "100%"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <h5>Получатель</h5>
            <div className="payer-info recipient">
                <div className="row">
                    <div className="col-md-3">
                        <div className="info-group">
                            <label htmlFor="number">Номер</label>
                             <InputNumber placeholder="Номер" id="number"  style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentOrder;