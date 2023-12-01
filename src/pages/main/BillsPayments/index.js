import React from 'react';
import ContentWrap from "../../../components/contentWrappers/ContentWrap";
import ContentWrapLeft from "../../../components/contentWrappers/ContentWrapLeft";
import ContentWrapRight from "../../../components/contentWrappers/ContentWrapRight";
import {Button, Select} from "antd";
import Actives from "../../../components/widgets/Actives";
import Course from "../../../components/widgets/Course";
import CheckBox from "../../../components/CheckBox";

const BillsPayments = (props) => {
    return (
        <div className="bills-payments-page">
            <ContentWrap>
                <ContentWrapLeft>
                    <div className="page-header d-flex align-items-center justify-content-between">
                        <h3 className="mb-0">Счета и платежи</h3>
                        <div>
                            <Button className="btn-create font-manrope-regular">Создать шаблон</Button>
                            <Button className="btn-create font-manrope-regular">Импорт <span className="icon icon-file"/></Button>
                            <Button className="btn-create-bill font-manrope-regular" type="primary">Создать платёж <span className="icon icon-plus"/></Button>
                        </div>
                    </div>
                    <div className="page-body">
                        <div className="actions-section d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <Button className="btn-action"><span className="icon icon-delete"/> Удалить</Button>
                                <Button className="btn-action"><span className="icon icon-edit"/> Изменить</Button>
                                <Button className="btn-action"><span className="icon icon-eye"/> Просмотр</Button>
                                <Button className="btn-action"><span className="icon icon-download"/> Сохранить в шаблон</Button>
                                <Button className="btn-action"><span className="icon icon-filter-new"/> Фильтр</Button>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="btn-group-send">
                                    <div className="btn-group-send-left">
                                        Отправка на
                                    </div>
                                    <div className="btn-group-send-center">
                                        Создан <span className="icon icon-arrow-right"/>
                                    </div>
                                    <Select
                                        defaultValue="accepting"
                                        style={{width: 144}}
                                        options={[
                                            {value: 'accepting', label: 'На утверждение'},
                                        ]}
                                    />
                                </div>
                                <Button className="btn-create-bill font-manrope-regular">Выполнить</Button>
                            </div>
                        </div>
                        <div className="filter-section d-flex justify-content-end align-items-center">
                            <input type="text" className="main-input" placeholder="Номер"/>
                            <input type="text" className="main-input" placeholder="Состояние"/>
                            <input type="text" className="main-input" placeholder="Документ"/>
                            <Select
                                className="main-select"
                                defaultValue="all"
                                options={[
                                    {value: 'all', label: 'Все статусы'},
                                ]}
                            />
                            <Button className="btn-search">Найти</Button>
                        </div>
                        <table className="table table-main">
                            <thead>
                            <tr>
                                <th><CheckBox id="1"/></th>
                                <th>№</th>
                                <th>Дата</th>
                                <th>Плательщик</th>
                                <th>Получатель</th>
                                <th>Состояние</th>
                                <th className="text-center">Сумма</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="2"/></td>
                                <td>0127</td>
                                <td>03.11.2022</td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <h4>200050179</h4>
                                    <p>20208000900208423001</p>
                                    <span>00231</span>
                                </td>
                                <td>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                                <td>
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </ContentWrapLeft>
                <ContentWrapRight>
                    <Actives/>
                    <Course/>
                </ContentWrapRight>
            </ContentWrap>
        </div>
    );
};

export default BillsPayments;