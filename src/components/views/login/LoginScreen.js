import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';
import { Logo } from '../../icons/logo/Logo';
import { LoginForm } from './LoginForm';

const superuser = process.env.REACT_APP_USER;
const password = process.env.REACT_APP_PASSWORD;
const username = process.env.REACT_APP_USERNAME;

export const LoginScreen = () => {

  const [ userInput,setUserInput ] = useState("");
  const [ passwordInput,setPasswordInput ] = useState("");
  const [ alertMessage,setAlertMessage ] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    if( userInput === superuser && passwordInput === password ) {
      setAlertMessage("");
      const action = {
        type: types.login,
        payload: { name: username }
      }
      dispatch(action);
  
      const lastPath = localStorage.getItem('lastPath') || '/';
      navigate(lastPath, { replace: true });
    } else if( userInput === "" && passwordInput === "" ) {
      setAlertMessage("Ingrese usuario y contraseña");
    } else {
      setUserInput("");
      setPasswordInput("");
      setAlertMessage("Usuario o contraseña no válidos");
    }
  }

  return (
    <div className='container-fluid mt-5 text-center user-select-none'>
        <h2>La Inmobiliaria</h2>
        <h1><Logo strokeWidth={1.25} width={1.5} height={1.5} className='icon fs-4'/></h1>
        <br/>
        <LoginForm userInput={userInput} setUserInput={setUserInput}
                   passwordInput={passwordInput} setPasswordInput={setPasswordInput}
                   alertMessage={alertMessage} setAlertMessage={setAlertMessage}
                   handleLogin={handleLogin} placeholderUser={'Usuario'}
                   placeholderPassword={'Contraseña'} buttonTitle={'Inmuebles'}
        />
    </div>
  )
}
