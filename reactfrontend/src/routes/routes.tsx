import { ListPatient } from '../views/Patiant/ListPatiant'
import { Layout } from '../views/_Layout'
import { DetailPatient } from '../views/Patiant/DetailPatient'
import { Signin } from '../views/SignIn'
import { createBrowserRouter, Route, Navigate } from 'react-router-dom'
import { Register } from '../views/Register'
import { PageNotFound } from '../views/PageNotFound'

import { isAuthenticated } from '../authUtils';

const requireAuth = (element: React.ReactElement) => {
  return isAuthenticated() ? element : <Navigate to="/signin" />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout> 
      <Route index element={<ListPatient />} />
      <Route path="/detail/:id" element={<DetailPatient />} />
    </Layout>,
    children: [
      { path: '/', element: <ListPatient /> },
      { path: '/detail/:id', element: <DetailPatient /> },
    ],
  },
  {
    path: '/signin',
    element: <Signin updateTokenAndLoginStatus={(newToken, loggedInStatus) => {}}/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/404',
    element: <PageNotFound/>,
  },
])
