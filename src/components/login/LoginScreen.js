import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import { FaHouseUser,FaBuilding,FaStoreAlt } from 'react-icons/fa';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {

      const action = {
        type: types.login,
        payload: { name: 'User' }
      }

      dispatch(action);

      const lastPath = localStorage.getItem('lastPath') || '/';

      navigate(lastPath, {
        replace: true
      });
  }

  return (
    <div className='container mt-5 text-center'>
        <h1>Inmobiliaria La Casa</h1>
        <hr />
        <h1><FaHouseUser /><FaBuilding /><FaStoreAlt /></h1>
        <br/>
        <div className="d-grid gap-2 col-4 mx-auto">
          <button className='btn-login btn btn-lg btn-outline-warning shadow-sm rounded' onClick={ handleLogin }>
            Inmuebles
          </button>
        </div>
    </div>
  )
}
