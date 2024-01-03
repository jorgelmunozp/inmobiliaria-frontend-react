import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { HomeSmile } from '../icons/home/HomeSmile';

export const Navbar = ({urlBaseFrontend}) => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: types.logout });
        navigate('/index', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-lg user-select-none">
            <div className="container-fluid">
                &nbsp;
                <HomeSmile strokeWidth={1.5} width={1.5} height={1.5} className='icon fs-4'/>&nbsp;
                <Link className="navbar-brand main-color" to="/react-inmobiliaria">La Inmobiliaria</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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