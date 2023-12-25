import React from 'react';
import ContentWrap from "../../../components/contentWrappers/ContentWrap";
import ContentWrapLeft from "../../../components/contentWrappers/ContentWrapLeft";
import ContentWrapRight from "../../../components/contentWrappers/ContentWrapRight";
import {Button, Select} from "antd";
import Actives from "../../../components/widgets/Actives";
import Course from "../../../components/widgets/Course";
import CheckBox from "../../../components/CheckBox";
import {Route, Switch} from "react-router-dom";
import BillsPaymentsMain from "./BillsPaymentsMain";
import CreatePaymentOrderMain from "./CreatePaymentOrderMain";

const BillsPayments = (props) => {
    return (
        <div className="bills-payments-page">
            <ContentWrap>
                <ContentWrapLeft>
                    <Switch>
                        <Route path="/main/bills-payments" exact component={BillsPaymentsMain}/>
                        <Route path="/main/bills-payments/create" component={CreatePaymentOrderMain}/>
                    </Switch>
                </ContentWrapLeft>
                <ContentWrapRight>
                    <Actives/>
                    <Route path="/main/bills-payments" exact component={Course}/>
                </ContentWrapRight>
            </ContentWrap>
        </div>
    );
};

export default BillsPayments;