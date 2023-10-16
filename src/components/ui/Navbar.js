import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const Navbar = ({name}) => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: types.logout });
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
                &nbsp;
                <Link className="navbar-brand" to="/react-inmobiliaria">Inmobiliaria</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarContent">
                    <div className="navbar-nav">
                        <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                            to={name+"/apartamentos"}>Apartamentos</NavLink>
                        <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                            to={name+"/casas"}>Casas</NavLink>
                        <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                            to={name+"/search"}>Buscar</NavLink>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <span className='nav-item nav-link text'>{user.name}</span>
                            <button className="nav-item nav-link btn" onClick={ handleLogout }>Ingresar</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}