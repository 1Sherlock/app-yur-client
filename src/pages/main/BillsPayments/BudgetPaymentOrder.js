import React from 'react';
import {Button, Input, InputNumber, Select} from "antd";

const {Option} = Select;
const { TextArea } = Input;

const BudgetPaymentOrder = () => {
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
                    <div className="col-md-3">
                        <div className="info-group">
                            <label htmlFor="document_date">Дата документа</label>
                            <InputNumber placeholder="Дата документа" id="document_date"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="bank_code">Лицевой счет:</label>
                            <InputNumber placeholder="Лицевой счет:" id="bank_code"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="bank_name2">ИНН бюджетополучателя</label>
                            <InputNumber placeholder="ИНН бюджетополучателя" id="bank_name2"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="info-group">
                            <label htmlFor="recipient_account">Наименование получателя</label>
                            <Input placeholder="Наименование получателя" id="recipient_account"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info-group">
                            <label htmlFor="tranche_code">Код траншевого символа</label>
                            <InputNumber placeholder="Код траншевого символа" id="tranche_code"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="info-group">
                            <label htmlFor="tranche_code2">Код траншевого символа</label>
                            <Input placeholder="Код траншевого символа" id="tranche_code2"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info-group">
                            <label htmlFor="payment_code">Код назначения платежа</label>
                            <InputNumber placeholder="Код назначения платежа" id="payment_code"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="info-group">
                            <label htmlFor="payment_code2">Код назначения платежа</label>
                            <Input placeholder="Код назначения платежа" id="payment_code2"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="payment_sum">Сумма платежа</label>
                            <InputNumber placeholder="Сумма платежа" id="payment_sum"  style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-group">
                            <label htmlFor="payment_sum_text">Сумма прописью</label>
                            <Input
                                id="payment_sum_text"
                                disabled
                                value='0 Сум, 00 тийин'
                                style={{width: "100%"}}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="info-group">
                            <label htmlFor="purpose">Назначение платежа</label>
                            <TextArea rows={4}  id="purpose" placeholder="Назначение платежа"/>
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

export default BudgetPaymentOrder;