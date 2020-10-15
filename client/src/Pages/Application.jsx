import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./LogIn";
import SignIn from './SignUp';
import Appbar from "../Components/Appbar";

export default function Application() {
    return (
     <>
        <Appbar />
        <Router>
            <Switch>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/sign-up">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
     </>
    )
}