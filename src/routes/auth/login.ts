/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react';

const Login = lazy(() => import('../../containers/auth'));

export default {
    exact: true,
    name: 'authentication',
    protected: false,
    path: '/login',
    component: Login
};
