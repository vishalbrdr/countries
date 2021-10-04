import React from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import Country from './Country';


export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/:country" exact component={Country} />
                </Switch>
            </Router>
        </div>
    )
}