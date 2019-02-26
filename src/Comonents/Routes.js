import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import Login from '../Forms/Login';
import CreateAccount from '../Forms/CreateAccount';
import ForgotPassword from '../Forms/ForgotPassword';

const routes = () => {
    return (
        <Fragment>
            <Route path="/login" component={Login} />
            <Route path="/register" component={CreateAccount} />
            <Route path="/forgot-password" component={ForgotPassword} />
        </Fragment>
    )
}
export default routes