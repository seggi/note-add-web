/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react';

export default {
    exact: true,
    name: 'sign up',
    protected: false,
    path: '/signup',
    component: lazy(() => import('../../containers/auth/signup'))
};
