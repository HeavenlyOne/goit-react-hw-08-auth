import { useEffect, lazy } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout/Layout';
import { selectIsRefreshing } from './redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
// import Homepage from './pages/Homepage/Homepage';
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { RestrictedRoute } from './components/RestrictedRoute';
import {PrivateRoute} from './components/PrivateRoute'

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));



function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isRefreshing]);

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
