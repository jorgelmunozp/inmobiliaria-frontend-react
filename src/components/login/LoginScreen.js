import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { Logo } from '../icons/logo/Logo';

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
    <div className='container mt-5 text-center user-select-none'>
        <h2>La Inmobiliaria</h2>
        <h1><Logo strokeWidth={1.25} width={1.5} height={1.5} className='icon fs-4'/></h1>
        <br/>
        <div className="d-grid gap-2 col-5 mx-auto">
          <input id="user" type='text' value={userInput} onChange={(e) => { setUserInput(e.target.value); setAlertMessage("") }} placeholder='Usuario' autoComplete='off' className='input-login border border-3 text-center py-2 rounded-pill fw-bolder'></input>
          <input id="password" type='password' value={passwordInput} onChange={(e) =>{ setPasswordInput(e.target.value); setAlertMessage("") }} placeholder='Contraseña' autoComplete='off' className='input-login border border-3 text-center py-2 rounded-pill fw-bolder'></input>
          <button className='btn-login btn btn-md btn-outline-primary border border-3 py-2 rounded-pill fw-bolder' onClick={ handleLogin }>
            Inmuebles
          </button>
          <p className='alertMessage'>{ alertMessage }</p>
        </div>
    </div>
  )
}
