import { ListPatient } from '../views/Patiant/ListPatiant'
import { Layout } from '../views/_Layout'
import { DetailPatient } from '../views/Patiant/DetailPatient'
import { Signin } from '../views/SignIn'
import { createBrowserRouter } from 'react-router-dom'
import { Register } from '../views/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <ListPatient /> },
      { path: '/detail/:id', element: <DetailPatient /> },
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])
