import React from 'react';
import {BrowserRouter, Redirect} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/main" component={MainLayout}/>
                <Route path="/login" exact component={Login}/>
                <Redirect from="/" to="/login" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;