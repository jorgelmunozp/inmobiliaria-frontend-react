import { Suspense, lazy } from "react";
import { createRoot } from 'react-dom/client';
import { Logo } from './components/icons/logo/Logo.js';

const App = lazy(() => import('./App.js'));
const root = createRoot(document.getElementById('root'));
root.render(
  <Suspense delayMs={0} fallback={ <div style={{ display:'flex', height:'100vh', width:'100%', alignItems:'center', justifyContent:'center', animation:'splash 0.75s linear infinite' }}><Logo color={'#5285c5'} height={6.5} width={7.25} /></div> }>
    <App Logo={Logo} />
  </Suspense>
);
