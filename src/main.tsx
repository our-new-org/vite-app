import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes.tsx';
import Navbar from './components/Navbar.tsx';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{ token: { colorPrimary: '#e99ea9', borderRadius: 5 } }}>
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  </ConfigProvider>,
);
