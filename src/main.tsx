import ReactDOM from 'react-dom/client';
import './index.css';
import { StoreContextProvider } from './contexts/Store.tsx';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes.tsx';
import Navbar from './components/Navbar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreContextProvider>
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  </StoreContextProvider>
);
