import React from 'react';
import {Button, Input, InputNumber, Select} from "antd";

const {Option} = Select;
const { TextArea } = Input;

const MunisPaymentOrder = () => {
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
            <h5>Платеж Мунис</h5>
            <div className="payer-info recipient">
                <div className="row">
                    <div className="col-md-3">
                        <div className="info-group">
                            <label htmlFor="number">Код услуги</label>
                            <Input placeholder="Код услуги" id="number"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="info-group">
                            <label htmlFor="document_date">Вид услуги</label>
                            <Input placeholder="Вид услуги" id="document_date"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="document_date">Номер квитанции</label>
                            <InputNumber placeholder="Номер квитанции" id="document_date"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="bank_name2">Вид оплаты</label>
                            <Select placeholder="Вид оплаты" id="bank_name2"  style={{width: "100%"}}>
                                <Option value="option1">Оплата штрафов ГУБДД</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="document_date">Номер инвойса *</label>
                            <InputNumber placeholder="Номер инвойса *" id="document_date"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="document_date">ПИНФЛ плательщика</label>
                            <InputNumber placeholder="ПИНФЛ плательщика" id="document_date"  style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
                <div className="balance-info">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info-group">
                                <label htmlFor="unposted_balance">Непроведённое сальдо</label>
                                <InputNumber placeholder="Непроведённое сальдо" id="unposted_balance"  style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-group">
                                <label htmlFor="balance_account">Сальдо на счету</label>
                                <InputNumber placeholder="Сальдо на счету" id="balance_account"  style={{width: "100%"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Button type="primary" className="btn-save" block>Сахранить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MunisPaymentOrder;