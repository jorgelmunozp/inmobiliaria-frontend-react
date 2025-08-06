import './assets/styles/styles.css';
import { lazy, useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext.js';
import { authReducer } from './auth/authReducer.js';

const AppRouter = lazy(() => import('./routers/AppRouter.js'));

const init = () => { return JSON.parse(localStorage.getItem('user') ) || { logged: false} }

export const App = ({ Logo }) => {
  const [ user, dispatch ] = useReducer( authReducer, {}, init );

  useEffect( () => {
    if( !user ) return;
    localStorage.setItem('user', JSON.stringify(user));
  } , [ user ] );

  return (
    <AuthContext.Provider value={{ user,dispatch }}>
      <AppRouter Logo={Logo} />
    </AuthContext.Provider>
  )
}

export default App;