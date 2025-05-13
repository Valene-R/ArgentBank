import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./routes";

import { saveUserInfos } from "../reducers/user";
import { callApiProfile } from "../services/api";
import { removeToken } from "../reducers/token";

import Loader from '../components/loader/Loader';

const ProtectedRoute = ({ children }) => {
	const dispatch = useDispatch();

  const tokenRedux = useSelector((state) => state.token);

  const [isLoading, setIsloading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    if (tokenRedux.token === null) {
      setIsAllowed(false);
      setIsloading(false);
    }

    const fetchApiProfile = async () => {
      try {
        const responseUserInfos = await callApiProfile(tokenRedux.token);
        dispatch(saveUserInfos(responseUserInfos));
        setIsAllowed(true); // Autorisé
      } catch (error) {
        dispatch(removeToken());
        setIsAllowed(false); // Non autorisé
      } finally {
        setIsloading(false);
      }
    };

    fetchApiProfile();
  }, [tokenRedux, dispatch]);

  if (isLoading) return <Loader />;

  return isAllowed ? children : <Navigate to={ROUTES.SIGNIN} />;
}

export default ProtectedRoute;