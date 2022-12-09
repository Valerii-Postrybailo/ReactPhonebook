import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
//
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import NotFound from '../pages/NotFound';
// import Phones from '../pages/Phones';
// import Register from '../pages/Register';
//
import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';
//
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/user/operations';
//
import Layout from './Layout';
import { useUser } from 'hooks';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Phones = lazy(() => import('pages/Phones'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/phones" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/phones" component={<Login />} />
          }
        />
        <Route
          path="phones"
          element={<PrivateRoute redirectTo="/login" component={<Phones />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}