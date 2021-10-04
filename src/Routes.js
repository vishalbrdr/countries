import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Country from './Country';


export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/:country" exact component={Country} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}