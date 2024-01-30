import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';
import { Logo } from '../../icons/logo/Logo';
import { Category } from '../../icons/category/Category';
import { HomeMenu } from '../../icons/home/HomeMenu';
import { HomePlus } from '../../icons/home/HomePlus';
import { HomeSimple } from '../../icons/home/HomeSimple';

export const NavBar = ({ urlBaseFrontend, myColor, myTitle }) => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: types.logout });
        navigate((urlBaseFrontend + '/index'), { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white py-2 py-md-3 py-sm-4 shadow-light user-select-none">
            <div className="container-fluid">
                <NavLink to={"/" + urlBaseFrontend}>
                    <Logo color={myColor} width={1.6} height={1.6} strokeWidth={2.25} className='navbar-brand ms-3 me-0'/>
                </NavLink>
                <NavLink className="navbar-brand" to={"/" + urlBaseFrontend}>
                    <span className='main-color fw-bold'>{ myTitle }</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <HomeMenu color={myColor} height={1.05} width={1.05} strokeWidth={15}/>
                </button>
                <div className="collapse navbar-collapse"  id="navbarContent">
                    <div className="navbar-nav">
                        {
                            (user.logged)
                            ?   <>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                        to={urlBaseFrontend + "/home"}><HomeSimple strokeWidth={0} height={1.2} width={1.2}/></NavLink>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                        to={urlBaseFrontend + "/upload"}><HomePlus strokeWidth={0} height={1.2} width={1.2}/></NavLink>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                        to={urlBaseFrontend + "/stock"}><Category strokeWidth={1.9} height={1.2} width={1.2}/></NavLink>
                                </>
                            :   <>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link fw-bold ' + (isActive ? 'active' : '') }
                                        to={urlBaseFrontend + "/apartamentos"}>Apartamentos</NavLink>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link fw-bold ' + (isActive ? 'active' : '') }
                                        to={urlBaseFrontend + "/casas"}>Casas</NavLink>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link fw-bold ' + (isActive ? 'active' : '') }
                                        to={urlBaseFrontend + "/search"}>Buscar</NavLink>
                                </>
                        }
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <span className='nav-item nav-link main-text'>{user.logged ? user.name : ''}</span>
                            <NavLink className={ ({ isActive }) => 'nav-item nav-link fw-bold ' + (isActive ? 'active' : '') }
                                onClick={ handleLogout } to={urlBaseFrontend+"/login"}>{ user.logged ? 'Salir' : 'Ingresar' }</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}