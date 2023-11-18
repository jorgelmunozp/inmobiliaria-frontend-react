import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import { CiHome, CiBank, CiShop } from 'react-icons/ci';

const user = process.env.REACT_APP_USER;
const password = process.env.REACT_APP_PASSWORD;
const username = process.env.REACT_APP_USERNAME;

export const LoginScreen = () => {

  const [userInput,setUserInput] = useState("");
  const [passwordInput,setPasswordInput] = useState("");
  const [alertMessage,setAlertMessage] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    if( userInput === user && passwordInput === password ) {
      setAlertMessage("");
      const action = {
        type: types.login,
        payload: { name: username }
      }
      dispatch(action);
  
      const lastPath = localStorage.getItem('lastPath') || '/';
      navigate(lastPath, {
        replace: true
      });
    } else if( userInput === "" && passwordInput === "" ) {
      setAlertMessage("Ingrese usuario y contraseña");
    } else {
      setUserInput("");
      setPasswordInput("");
      setAlertMessage("Usuario o contraseña no válidos");
    }
  }

  return (
    <div className='container mt-5 text-center'>
        <h1>Inmobiliaria La Casa</h1>
        <hr />
        <h1><CiHome className='icon'/><CiBank className='icon'/><CiShop className='icon'/></h1>
        <br/>
        <div className="d-grid gap-2 col-4 mx-auto">
          <input id="user" type='text' value={userInput} onChange={(e) => { setUserInput(e.target.value); setAlertMessage("") }} placeholder='Usuario' autoComplete='off' className='text-center'></input>
          <input id="password" type='password' value={passwordInput} onChange={(e) =>{ setPasswordInput(e.target.value); setAlertMessage("") }} placeholder='Contraseña' autoComplete='off' className='text-center'></input>
          <button className='btn-login btn btn-lg btn-outline-warning shadow-sm rounded-pill' onClick={ handleLogin }>
            Inmuebles
          </button>
          <p className='alertMessage'>{ alertMessage }</p>
        </div>
    </div>
  )
}
