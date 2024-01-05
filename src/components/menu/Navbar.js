import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { HomeSmile } from '../icons/home/HomeSmile';
import { HomeMenu } from '../icons/home/HomeMenu';

export const Navbar = ({ urlBaseFrontend, myColor, myTitle }) => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: types.logout });
        navigate('/index', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-lg user-select-none">
            <div className="container-fluid">
                <HomeSmile color={myColor} width={1.6} height={1.6} strokeWidth={1.5} className='navbar-brand ms-3 me-0'/>
                <Link className="navbar-brand main-color ms-2 ms-sm-0" to={"/" + urlBaseFrontend}>{ myTitle }</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <HomeMenu color={myColor} height={1.05} width={1.05} strokeWidth={10}/>
                </button>
                <div className="collapse navbar-collapse"  id="navbarContent">
                    <div className="navbar-nav">
                        {
                        (user.logged)
                        ?   <>
                                <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                    to={urlBaseFrontend+"/stock"}>Inventario</NavLink>
                            </>
                        :   <>
                                <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                    to={urlBaseFrontend+"/apartamentos"}>Apartamentos</NavLink>
                                <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                    to={urlBaseFrontend+"/casas"}>Casas</NavLink>
                                <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                    to={urlBaseFrontend+"/search"}>Buscar</NavLink>
                            </>
                        }
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <span className='nav-item nav-link main-text'>{user.logged ? user.name : ''}</span>
                            <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                onClick={ handleLogout } to={urlBaseFrontend+"/login"}>{ user.logged ? 'Salir' : 'Ingresar' }</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}