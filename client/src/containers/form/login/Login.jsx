import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ROUTES } from "../../../router/routes";
import { useNavigate } from "react-router-dom";

import { callApiLogin } from "../../../services/api";
import { saveToken } from "../../../reducers/token";

import { Root, SignInContent, UserIcon, StyledForm, Button, Loading, Error } from './login.styled';
import Field from '../../../components/field/Field';
import RememberMe from '../../../components/rememberMe/RememberMe';

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Initialise le hook de formulaire pour la validation et la manipulation des données 
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  // Etat initial du message d'erreur
  const [errorMessage, setErrorMessage] = useState(null);
  // État initial pour gérer les erreurs des champs de formulaire
  const [fieldErrors, setFieldErrors] = useState({ email: null, password: null });

  // Gère la soumission du formulaire
  const onSubmit = async (data) => {
    const { email, password, rememberMe } = data;
    setIsLoading(true); // Commence le chargement avant l'appel API
    setErrorMessage(null); // Réinitialise les erreurs avant la soumission

    try {
      // Effectue la demande d'appel à l'API de la route login
      const token = await callApiLogin(email, password);

      // Dispatch l'action saveToken avec le token et l'état de la case à cocher "Remember me"
      dispatch(saveToken({
        token: token,
        rememberMe: rememberMe // Passe la valeur de la case à cocher directement
      }));

      // Redirige vers la page profile
      navigate(ROUTES.USER);

    } catch (error) {
      // En cas d'erreur, affiche un message d'erreur
      setErrorMessage("Invalid credentials");

    } finally {
      // Arrête le chargement après l'appel API 
      setIsLoading(false); 
    }
  };


  // Gère le focus sur les champs du formulaire
  const handleFocus = (fieldName) => {
    // Efface l'erreur pour le champ en cours de focus
    setFieldErrors(prev => ({ ...prev, [fieldName]: null }));
    // Efface l'erreur générale
    setErrorMessage(null);
  };

  return (
    <Root>
      <SignInContent>
        <UserIcon className="fa fa-user-circle" />
        <h1>Sign In</h1>
        {isLoading && <Loading>Loading...</Loading>}
        {errorMessage && <Error>{errorMessage}</Error>}
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Field 
            type="email" 
            id="email" 
            label="Username" 
            register={register}
            validation={{
              required: 'Email is required'
            }}
            onFocus={() => handleFocus('email')}
            errorMessage={errors.email?.message || fieldErrors.email}
          />
          <Field  
            type="password" 
            id="password" 
            label="Password" 
            register={register}
            validation={{ 
              required: 'Password is required'
            }}
            onFocus={() => handleFocus('password')} // Efface l'erreur pour le champ Password
            errorMessage={errors.password?.message || fieldErrors.password}
          />
          <RememberMe register={register} />
          <Button type="submit">Sign In</Button>
        </StyledForm>
      </SignInContent>
    </Root>
  );
};

export default FormLogin;