import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';


const isAuth = true;

export const PrivateRoutes = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => isAuth ? <DefaultLayout {...props}>{<Component />}</DefaultLayout> : <Redirect to='/' />} />
}
