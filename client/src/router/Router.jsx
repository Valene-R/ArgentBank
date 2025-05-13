import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../router/routes';

import Home from '../pages/home/Home';
import SignIn from '../pages/signIn/SignIn';
import User from '../pages/user/User';
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}/>
        <Route path={ROUTES.SIGNIN} element={<SignIn />}/>
        <Route 
          path={ROUTES.USER} 
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
};

export default Router;
