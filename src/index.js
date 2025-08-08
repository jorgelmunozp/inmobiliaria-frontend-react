import { Suspense, lazy } from "react";
import { createRoot } from 'react-dom/client';
import { Logo } from './components/icons/logo/Logo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';

const preloadApp = import('./App.js');
const App = lazy(() => preloadApp);

const root = createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={ <div style={{ display:'flex', height:'100vh', width:'100%', alignItems:'center', justifyContent:'center', animation:'splash 0.75s linear infinite' }}><Logo color={'#5285c5'} height={8.5} width={9.25} strokeWidth={1.25} /></div> }>
    <App Logo={Logo} />
  </Suspense>
);
