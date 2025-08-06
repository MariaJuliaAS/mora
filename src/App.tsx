import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Details } from './pages/details';
import { Layout } from './components/layout';
import { Dashboard } from './pages/dashboard';
import { New } from './pages/dashboard/new';
import { Login } from './pages/login';
import { Register } from './pages/register';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/details',
        element: <Details />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/new',
        element: <New />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

export { router }
