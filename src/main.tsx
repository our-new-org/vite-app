import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes.tsx';
import Navbar from './components/Navbar.tsx';
import { ConfigProvider } from 'antd';
import UserProfile from './components/UserProfile.tsx';
import Footer from './components/Footer.tsx';
const baseUrl = import.meta.env.PROD ? '/vite-app' : '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{ token: { colorPrimary: '#ef7ca0', borderRadius: 5 } }}>
    <HashRouter>
      <Navbar />
      <UserProfile baseUrl={baseUrl} />
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  </ConfigProvider>,
);
