import { useEffect, useState } from "react";  
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { callApiUserUpdateProfile } from "../../../services/api";
import { saveUserInfos } from "../../../reducers/user"; 

import EditField from "../../../components/editField/EditField"; 
import { Button, Error, Form, WrapperBtn, Row } from "./userEdit.styled"; 

const FormUserEdit = ({ onSaved, onCanceled }) => {
  // Hooks pour interagir avec Redux
  const dispatch = useDispatch();
  const tokenRedux = useSelector((state) => state.token);
  const userRedux = useSelector((state) => state.user);
  
  const { handleSubmit, register, setValue } = useForm();
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [editedUser, setEditedUser] = useState({
    firstname: "",
    lastname: "",
  });

  // Synchronise editedUser avec les valeurs de Redux
  useEffect(() => {
    setEditedUser(prevUser => ({
      ...prevUser,
      firstname: userRedux.firstname,
      lastname: userRedux.lastname,
    }));
    setValue("firstname", userRedux.firstname);
    setValue("lastname", userRedux.lastname);
  }, [userRedux, setValue]); 
    
  // Gère la soumission du formulaire
  const onSubmit = async (data) => {
    const firstnameToSave = data.firstname;
    const lastnameToSave = data.lastname;

    if (!firstnameToSave.trim() || !lastnameToSave.trim()) {
      setErrorMessage("First name and Last name cannot be empty");
      return;
    }

    try {
      await callApiUserUpdateProfile(tokenRedux.token, firstnameToSave.trim(), lastnameToSave.trim());
      // Met à jour le state de Redux avec les nouvelles infos
      dispatch(saveUserInfos({ 
        firstname: firstnameToSave.trim(), 
        lastname: lastnameToSave.trim() 
      }));
      onSaved();
    } catch (error) {
      setErrorMessage(error.message || "An error occurred");
    }
  };

  // Gère les changements de champ
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
    setErrorMessage(''); // Réinitialise le message d'erreur lors de la saisie
  };
  
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <EditField 
            id="firstName"
            label="First name"
            value={editedUser.firstname}
            // Met à jour la saisie utilisateur en temps réel et réinitialise le message d'erreur si présent
            {...register('firstname', { onChange: handleFieldChange })}
          />
          <EditField 
            id="lastName"
            label="Last name"
            value={editedUser.lastname}
            {...register('lastname', { onChange: handleFieldChange })}
          />
        </Row>

        {errorMessage && <Error>{errorMessage}</Error>}

        <WrapperBtn>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={onCanceled}>Cancel</Button>
        </WrapperBtn>
      </Form>
    </div>
  );
};

export default FormUserEdit;