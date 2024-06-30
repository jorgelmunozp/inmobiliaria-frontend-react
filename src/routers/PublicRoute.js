import React, { useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { DashboardRoutes } from './DashboardRoutes';

export const PublicRoute = ({ children,urlApiInmuebles,categorias,tipos,estados,caracteristicas,paises }) => {
    const { user } = useContext(AuthContext);

    return user.logged ? <DashboardRoutes urlApiInmuebles={urlApiInmuebles} categorias={categorias} tipos={tipos} estados={estados} caracteristicas={caracteristicas} paises={paises}/> : children
} 
