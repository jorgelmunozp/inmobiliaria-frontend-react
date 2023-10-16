import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

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
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    <div className="navbar-nav">
                        <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                            to="/apartamentos">Apartamentos</NavLink>
                        <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                            to="/casas">Casas</NavLink>
                        <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                            to="/search">Buscar</NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-info'>{user.name}</span>
                        <button className="nav-item nav-link btn" onClick={ handleLogout }>Salir</button>
                    </ul>
                </div>
            </div>
        </nav>

        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //             <li class="nav-item">
        //             <a class="nav-link active" aria-current="page" href="#">Home</a>
        //             </li>
        //             <li class="nav-item">
        //             <a class="nav-link" href="#">Link</a>
        //             </li>
        //             <li class="nav-item dropdown">
        //             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 Dropdown
        //             </a>
        //             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        //                 <li><a class="dropdown-item" href="#">Action</a></li>
        //                 <li><a class="dropdown-item" href="#">Another action</a></li>
        //                 <li><hr class="dropdown-divider"></hr></li>
        //                 <li><a class="dropdown-item" href="#">Something else here</a></li>
        //             </ul>
        //             </li>
        //             <li class="nav-item">
        //             <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //             </li>
        //         </ul>
        //         <form class="d-flex">
        //             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        //             <button class="btn btn-outline-success" type="submit">Search</button>
        //         </form>
        //         </div>
        //     </div>
        // </nav>
    )
}