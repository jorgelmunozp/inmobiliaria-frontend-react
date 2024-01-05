import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

import { DashboardRoutes } from './DashboardRoutes';

export const PublicRoute = ({ children,urlBaseFrontend,urlApiInmuebles }) => {
    const { user } = useContext(AuthContext);

    // return user.logged ? <Navigate to={"/" + urlBaseFrontend} /> : children
    return user.logged ? <DashboardRoutes urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}/> : children
} 
