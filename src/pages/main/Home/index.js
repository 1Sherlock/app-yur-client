import React from 'react';
import Slider from 'react-slick';
import {Link} from "react-router-dom";
import {Button, DatePicker, Select} from "antd";
import CheckBox from "../../../components/CheckBox";
import Actives from "../../../components/widgets/Actives";
import Course from "../../../components/widgets/Course";
import ContentWrap from "../../../components/contentWrappers/ContentWrap";
import ContentWrapLeft from "../../../components/contentWrappers/ContentWrapLeft";
import ContentWrapRight from "../../../components/contentWrappers/ContentWrapRight";

const Home = () => {
    const settings = {
        // dots: true,
        infinity: true,
        speed: 500,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        arrows: false
    };

    const dateFormat = 'DD.MM.YYYY';

    return (
        <div className="main-layout-content-wrap home-wrap">
            <div className="banner">
                <Slider {...settings}>
                    <Link to="/main/home" className="banner-item"><img src="/assets/images/banner.png" alt="banner"/></Link>
                    <Link to="/main/home" className="banner-item"><img src="/assets/images/banner.png" alt="banner"/></Link>
                    <Link to="/main/home" className="banner-item"><img src="/assets/images/banner.png" alt="banner"/></Link>
                    <Link to="/main/home" className="banner-item"><img src="/assets/images/banner.png" alt="banner"/></Link>
                    <Link to="/main/home" className="banner-item"><img src="/assets/images/banner.png" alt="banner"/></Link>
                    <Link to="/main/home" className="banner-item"><img src="/assets/images/banner.png" alt="banner"/></Link>
                </Slider>
            </div>

            <ContentWrap>
                <ContentWrapLeft>
                    <div className="card-wrap-content-main">
                        <h3 className="font-acrom-bold">Главный</h3>
                        <div className="d-flex">
                            <DatePicker placeholder="__.__.____" format={dateFormat}/>
                            <DatePicker placeholder="__.__.____" format={dateFormat}/>
                            <Select
                                defaultValue="all"
                                style={{width: 148}}
                                options={[
                                    {value: 'all', label: 'Все статусы'},
                                ]}
                            />
                            <Button className="btn-filter font-manrope-regular"><span className="icon icon-filter"/> Фильтр</Button>
                            <Button type="primary" className="btn-search font-manrope-regular">Найти</Button>
                        </div>
                        <table className="table table-main">
                            <thead>
                            <tr>
                                <th><CheckBox id="1"/></th>
                                <th className="font-manrope-medium">№</th>
                                <th className="font-manrope-medium">Дата</th>
                                <th className="font-manrope-medium">Плательщик</th>
                                <th className="font-manrope-medium">Получатель</th>
                                <th className="font-manrope-medium text-center">Сумма</th>
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
                                <td className="text-end">
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="3"/></td>
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
                                <td className="text-end">
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="4"/></td>
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
                                <td className="text-end">
                                    <h5 className="summ-income">+ 2 242 000.00 Сум</h5>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                            </tr>
                            <tr>
                                <td><CheckBox id="5"/></td>
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
                                <td className="text-end">
                                    <h5 className="summ-outcome">- 2 242 000.00 Сум</h5>
                                    <span className="badge badge-created">Создан</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-wrap-content-documents">
                        <h3>Документы</h3>

                        <table className="table table-main">
                            <thead>
                            <tr>
                                <th>Тип документа</th>
                                <th>Всего</th>
                                <th>Ошибка</th>
                                <th>Не отправлено</th>
                                <th>В обработке</th>
                                <th>Исполнено</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Платёжное поручение</td>
                                <td>12</td>
                                <td>1</td>
                                <td>-</td>
                                <td>5</td>
                                <td>6</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Исходяшее платёжное требование</td>
                                <td>10</td>
                                <td>-</td>
                                <td>2</td>
                                <td>3</td>
                                <td>7</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Зарплатная ведомость</td>
                                <td>15</td>
                                <td>-</td>
                                <td>-</td>
                                <td>2</td>
                                <td>11</td>
                                <td>2</td>
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

export default Home;