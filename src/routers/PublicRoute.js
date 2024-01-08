import React, { useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { DashboardRoutes } from './DashboardRoutes';

export const PublicRoute = ({ children,urlBaseFrontend,urlApiInmuebles }) => {
    const { user } = useContext(AuthContext);

    return user.logged ? <DashboardRoutes urlBaseFrontend={urlBaseFrontend} urlApiInmuebles={urlApiInmuebles}/> : children
} 
