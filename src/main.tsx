import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes.tsx';
import Navbar from './components/Navbar.tsx';
import { ConfigProvider } from 'antd';
import UserProfile from './components/UserProfile.tsx';
const baseUrl = import.meta.env.PROD ? '/vite-app' : '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{ token: { colorPrimary: '#e99ea9', borderRadius: 5 } }}>
    <HashRouter basename={baseUrl}>
      <Navbar />
      <UserProfile baseUrl={baseUrl} />
      <AnimatedRoutes />
    </HashRouter>
  </ConfigProvider>,
);
