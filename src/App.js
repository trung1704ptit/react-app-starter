import get from 'lodash/get';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const routes = (accessToken) => [
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/',
    element: !accessToken ? <Navigate to="/auth" /> : <Home />,
    children: [
      { path: '/home', element: <Home /> },
    ],
  },
];

export default function App() {
  const profile = useSelector((state) => state.auth.profile);
  const accessToken = get(profile, 'accessToken')

  const routing = useRoutes(routes(accessToken));

  return (
    <>
      {routing}
    </>
  );
}