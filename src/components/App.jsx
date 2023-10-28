import { Contact } from './Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import HomePage from 'pages/HomePage';
import Layout from 'components/Layout/Layout';
import Register from 'pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Contacts from 'pages/Contacts';
import { selectIsRefreshing } from 'redux/auth/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  
    useEffect(() => {
    dispatch(refreshUser());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<Contacts/>}/>} />
        <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<Login />}/>} />
        <Route path="/register" element={<RestrictedRoute redirectTo='/contacts' component={<Register />}/>} />
      </Route>
    </Routes>
  );
};
export default App;
