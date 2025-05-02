import React, { useEffect, useState } from 'react';  
import Router from './router/Router';

import { useDispatch } from 'react-redux';
import { saveToken, removeToken } from './reducers/token';  
import Loader from './components/loader/Loader';


const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fonction pour charger l'état initial de l'application
    const loadInitialState = () => {
    const tokenDataString = localStorage.getItem("token");
    const rememberMe = localStorage.getItem("rememberMe") === 'true'; // Convertit la chaîne en boolean

    if (tokenDataString && rememberMe) {
      const tokenData = JSON.parse(tokenDataString);
      const now = new Date();
      const expiry = new Date(tokenData.expiry);

      // Vérifie si le token est encore valide
      if (expiry > now) {
        dispatch(saveToken({
          token: tokenData.value,
          rememberMe: true }));
        } else {
          // Nettoie si le token a expiré
          dispatch(removeToken());
        }
      } else {
        // Nettoie si "Remember me" n'est pas coché ou le token est absent
        dispatch(removeToken());
      }
  
      // Ajoute un délai pour voir le loader
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
      return () => clearTimeout(timeout); // Fonction de nettoyage
    };

    loadInitialState();
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;