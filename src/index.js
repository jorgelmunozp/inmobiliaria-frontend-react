import './assets/styles/styles.css';
import { Suspense, lazy } from "react";
import { createRoot } from 'react-dom/client';
import { Logo } from './components/icons/logo/Logo.js';

const App = lazy(() => import('./App.js'));
const root = createRoot(document.getElementById('root'));
root.render(
  <Suspense delayMs={0} fallback={ <div style={{ alignItems:'center', display:'flex', height:'100vh', justifyContent:'center', width:'100%', animation:'splash 0.75s linear infinite' }}><Logo color={'#5285c5'} height={3.5} width={7.25} /></div> }>
    <App Logo={Logo} />
  </Suspense>
);
