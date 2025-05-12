import { ROUTES } from '../../router/routes';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Root, DivSignIn, Span, Styled, StyledMobil } from './navBar.styled';
import Logo from './logo/Logo';
import SignInLink from './signInLink/SignInLink';

import { removeToken } from '../../reducers/token'; 
import { logoutUser } from '../../reducers/user';



const NavBar = () => {
  // Obtient les informations du profil à partir du store redux
  const firstname = useSelector((state) => state.user.firstname);

  // Dispatch pour l'utilisation des actions redux
  const dispatch = useDispatch(); 
  // Hook pour la navigation entre les pages
  const navigate = useNavigate(); 

  // Gère la déconnexion de l'utilisateur
  const handleLogout = () => {
    dispatch(removeToken());
    dispatch(logoutUser()); // Réinitialise l'état de l'utilisateur
    navigate(ROUTES.HOME);
  };

  return (
    <Root>
      <Logo to={ROUTES.HOME} />
			<DivSignIn>
        {firstname ? (
          <>
            <SignInLink to={ROUTES.USER} icon="fa fa-user-circle">
              {firstname}
            </SignInLink>
            <Styled>
              <SignInLink onClick={handleLogout} icon="fas fa-sign-out-alt">
              {/* '&nbsp;' Caractère d'espacement */}
                Sign&nbsp;<Span>Out</Span> 
              </SignInLink>
            </Styled>
          </>
        ) : (
          <>
            <StyledMobil>
              <SignInLink to={ROUTES.SIGNIN} icon="fa fa-user-circle">
                Sign In
              </SignInLink>
            </StyledMobil>
          </>
        )}
      </DivSignIn> 
    </Root>
  );
};

export default NavBar; 