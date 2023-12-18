import ReactDOM from 'react-dom/client';
import './index.css';
import { StoreContextProvider } from '../contexts/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.tsx';
import Login from './Login.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/vite-app" Component={Home} />
        <Route path="/vite-app/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  </StoreContextProvider>
);
