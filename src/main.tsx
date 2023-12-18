import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StoreContextProvider } from '../contexts/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/vite-app/',
    element: <App />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreContextProvider>
    <RouterProvider router={router} />
  </StoreContextProvider>
);
