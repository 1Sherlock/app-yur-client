import React from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import PaymentOrder from "./PaymentOrder";
import BudgetPaymentOrder from "./BudgetPaymentOrder";
import RevenuePaymentOrderBudget from "./RevenuePaymentOrderBudget";
import MunisPaymentOrder from "./MunisPaymentOrder";
import TemplatePaymentOrder from "./TemplatePaymentOrder";

const CreatePaymentOrderMain = (props) => {
    return (
        <div className="create-payment-main">
            <h3 className="mb-0">Создать платёж</h3>

            <div className="create-payment-main-content">
                <ul className="list-unstyled payment-type-links">
                    <li><Link to="/main/bills-payments/create/payment-order" className={props.location.pathname.startsWith("/main/bills-payments/create/payment-order") ? 'active': ''}>Платежное поручение</Link></li>
                    <li><Link to="/main/bills-payments/create/budget-payment-order" className={props.location.pathname.startsWith("/main/bills-payments/create/budget-payment-order") ? 'active': ''}>Платежное поручение в бюджет</Link></li>
                    <li><Link to="/main/bills-payments/create/revenue-payment-order-budget" className={props.location.pathname.startsWith("/main/bills-payments/create/revenue-payment-order-budget") ? 'active': ''}>Платежное поручение в бюджетный доход</Link></li>
                    <li><Link to="/main/bills-payments/create/munis-payment-order" className={props.location.pathname.startsWith("/main/bills-payments/create/munis-payment-order") ? 'active': ''}>Мунис</Link></li>
                    <li><Link to="/main/bills-payments/create/template-payment-order" className={props.location.pathname.startsWith("/main/bills-payments/create/template-payment-order") ? 'active': ''}>Шаблоны</Link></li>
                </ul>

                <div className="payment-type-content">
                    <Switch>
                        <Route path="/main/bills-payments/create/payment-order" exact component={PaymentOrder}/>
                        <Route path="/main/bills-payments/create/budget-payment-order" exact component={BudgetPaymentOrder}/>
                        <Route path="/main/bills-payments/create/revenue-payment-order-budget" exact component={RevenuePaymentOrderBudget}/>
                        <Route path="/main/bills-payments/create/munis-payment-order" exact component={MunisPaymentOrder}/>
                        <Route path="/main/bills-payments/create/template-payment-order" exact component={TemplatePaymentOrder}/>
                        <Redirect from="/main/bills-payments/create" to="/main/bills-payments/create/payment-order"/>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default CreatePaymentOrderMain;