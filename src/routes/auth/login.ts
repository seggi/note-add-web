/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react';

export default {
    exact: true,
    name: 'sign in',
    protected: false,
    path: '/login',
    component: lazy(() => import('../../containers/auth/login'))
};