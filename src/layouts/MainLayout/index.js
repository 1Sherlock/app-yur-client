import React from 'react';
import {Link} from "react-router-dom";
import {Dropdown, message} from "antd";
import {Switch, Route} from "react-router-dom";
import Home from "../../pages/main/Home";
import BillsPayments from "../../pages/main/BillsPayments";

const MainLayout = (props) => {
    const items = [
        {
            label: 'Русский',
            key: '1',
        },
        {
            label: "O'zbekcha",
            key: '2',
        },
        {
            label: 'English',
            key: '3',
        },
    ];

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <div className="main-layout">
            <div className="main-layout-left">
                <div className="logo-wrap">
                    <img src="/assets/icons/logo.svg" alt="logo"/>
                </div>

                <div className="main-layout-menu-wrap">
                    <ul className="main-layout-menu">
                        <li className="main-layout-menu-item"><Link to="/main/home" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main/home") ? "active" : ""}`}><span className="icon icon-logo"/> Главный</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main/bills-payments" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main/bills-payments") ? "active" : ""}`}><span className="icon icon-accounts"/> Счета и платежи</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main1") ? "active" : ""}`}><span className="icon icon-statement"/> Выписки и отчеты</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main2") ? "active" : ""}`}><span className="icon icon-counter-party"/> Контрагенты</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main3") ? "active" : ""}`}><span className="icon icon-template"/> Шаблоны и автоплатежи</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main4") ? "active" : ""}`}><span className="icon icon-crm"/> Тарифы</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main5") ? "active" : ""}`}><span className="icon icon-bcard"/> Бизнес карты</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main6") ? "active" : ""}`}><span className="icon icon-salary-project"/> Зарплатный проект</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main7") ? "active" : ""}`}><span className="icon icon-credits"/> Кредиты</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main8") ? "active" : ""}`}><span className="icon icon-deposit"/> Депозиты</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main9") ? "active" : ""}`}><span className="icon icon-merchant"/> Торговый эквайринг</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main01") ? "active" : ""}`}><span className="icon icon-e-inv"/> ЕЭИСВО</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main02") ? "active" : ""}`}><span className="icon icon-credit-card"/> Картотека</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main03") ? "active" : ""}`}><span className="icon icon-analytics"/> Бизнес аналитика</Link></li>
                        <li className="main-layout-menu-item"><Link to="/main" className={`main-layout-menu-link ${props.location.pathname.startsWith("/main04") ? "active" : ""}`}><span className="icon icon-book-keeper"/> Онлайн бухгалтерия</Link></li>
                    </ul>
                </div>
            </div>
            <div className="main-layout-right">
                <div className="main-layout-right-header">
                    <div className="main-layout-right-header-content d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="bank-info bank-name">
                                <h3 className="font-manrope-semi-bold">Банк</h3>
                                <p className="font-manrope-medium mb-0">НАМАНГАН ФИЛИАЛИ</p>
                            </div>
                            <div className="divider-line"/>
                            <div className="bank-info">
                                <h3 className="font-manrope-semi-bold">Операционный день</h3>
                                <p className="font-manrope-medium mb-0"><span className="bank-status"/> 02.06.2022 Открыт</p>
                            </div>
                            <div className="divider-line"/>
                            <div className="bank-info">
                                <h3 className="font-manrope-semi-bold">Время окончания межбан платежей:</h3>
                                <p className="font-manrope-medium mb-0"><span className="bank-status"/> <span className="text-white">17:00</span> &nbsp; | 01:43:19</p>
                            </div>
                            <div className="divider-line"/>
                        </div>
                        <div className="d-flex align-items-center right-content">
                            <button type="button" className="btn btn-notification"><span className="icon icon-notification"></span></button>
                            <Dropdown menu={menuProps} trigger={['click']}>
                                <button type="button" className="btn btn-language">Русский <span className="icon icon-chevron-down"/></button>
                            </Dropdown>
                            <div className="company-info d-flex align-items-center">
                                <div>
                                    <h3 className="font-manrope-semi-bold">Shakirov K.K</h3>
                                    <p className="mb-0 font-manrope-medium"><span className="icon icon-case"/> MCHJ "Kamoliddin Prime Plus"</p>
                                </div>
                                <div className="down-circle">
                                    <span className="icon icon-select-down"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-layout-right-content">
                    <Switch>
                        <Route path="/main/home" exact component={Home}/>
                        <Route path="/main/bills-payments" exact component={BillsPayments}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;