import { lazy } from "react";
import { Link } from "react-router-dom";
const HomeMenu = lazy(() => import('../../icons/home/HomeMenu.js'));
const Warning = lazy(() => import('../../icons/warning/Warning.js'));

export const NotFound = ({ Logo,myColor,myTitle }) => {
  return (
    <div className="App w-100 user-select-none">
      <header className="fixed-top text-center py-2">
        <nav className="navbar navbar-expand-sm navbar-light bg-white fixed-top user-select-none">
          <div className="container-fluid justify-content-center">
            <Link to={"/"}>
                <Logo color={myColor} width={1.6} height={1.6} strokeWidth={1.5} className='navbar-brand ms-3 me-0'/>
            </Link>
            <Link className="navbar-brand" to={"/"}>
                <span className='navbar-brand main-color ms-0'>{ myTitle }</span>
            </Link>
          </div>
        </nav>
      </header>
      <body className='App-body d-flex bg-white mt-5'>
        <div id='contenidoBody' className='contenidoBody mt-5 mx-auto'>
          <div className="container-fluid text-center">
            <h1 className="text-muted mt-4"><Warning height={2} width={2}/></h1>
            <h1 className="text-muted">404</h1>
            <h4 className="main-color">Oops! Enlace inexistente</h4>
            <p className="mt-4">Regresa a nuestro portal</p>
            <Link className="main-color text-decoration-none" to={'/'}>Inicio</Link>
            <br></br>
            <Link className="main-color text-decoration-none" to={'/'}><HomeMenu height={2} width={2} strokeWidth={15}/></Link>
          </div>
        </div>
      </body>
    </div>
  )
}
