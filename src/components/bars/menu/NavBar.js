import { lazy, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const Category = lazy(() => import('../../icons/category/Category.js'));
const HomeMenu = lazy(() => import('../../icons/home/HomeMenu.js'));
const HomePlus = lazy(() => import('../../icons/home/HomePlus.js'));
const HomeSimple = lazy(() => import('../../icons/home/HomeSimple.js'));

export const NavBar = ({ Logo, AuthContext, types, myColor, myTitle }) => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: types.logout });
        navigate(('/'), { replace: true });
    }

    return (
        <nav id="navbar" className="navbar navbar-expand-sm navbar-light bg-white py-2 shadow-light user-select-none">
            <div className="container-fluid">
                <NavLink to={"/"}><Logo color={myColor} width={1.6} height={1.6} strokeWidth={2.25} className='navbar-brand ms-3 me-0'/></NavLink>
                <NavLink className="navbar-brand" to={"/"}><span className='main-color fw-bold'>{ myTitle }</span></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <HomeMenu color={myColor} height={1.05} width={1.05} strokeWidth={15}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <div className="navbar-nav">
                        {
                            (user.logged)
                            ?   <>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                        to={"/home"}><HomeSimple strokeWidth={0} height={1.2} width={1.2}/></NavLink>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                        to={"/upload"}><HomePlus strokeWidth={0} height={1.2} width={1.2}/></NavLink>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                                        to={"/stock"}><Category strokeWidth={1.9} height={1.2} width={1.2}/></NavLink>
                                </>
                            :   <>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link fw-bold ps-1 ps-md-4 ps-sm-5 ' + (isActive ? 'active' : '') }
                                        to={"/apartamentos"}>Apartamentos</NavLink>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link fw-bold px-1 px-md-4 px-sm-5 ' + (isActive ? 'active' : '') }
                                        to={"/casas"}>Casas</NavLink>
                                    <NavLink className={ ({ isActive }) => 'nav-item nav-link fw-bold px-1 px-md-4 px-sm-5 ' + (isActive ? 'active' : '') }
                                        to={"/search"}>Buscar</NavLink>
                                </>
                        }
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <span className='nav-item nav-link main-text'>{user.logged ? user.name : ''}</span>
                            <NavLink className={ ({ isActive }) => 'nav-item nav-link fw-bold me-3 ' + (isActive ? 'active' : '') }
                                onClick={ handleLogout } to={"/login"}>{ user.logged ? 'Salir' : 'Ingresar' }</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}