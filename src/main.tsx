import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { StoreContextProvider } from './contexts/Store.tsx';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes.tsx';
import Navbar from './components/Navbar.tsx';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{ token: { colorPrimary: '#38665f', borderRadius: 5 } }}>
    <StoreContextProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </StoreContextProvider>
  </ConfigProvider>
);
