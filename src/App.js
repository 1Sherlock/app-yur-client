import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/main" component={MainLayout}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;