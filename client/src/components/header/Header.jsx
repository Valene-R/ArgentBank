import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Root, Title, WelcomeTitle, InvisibleHeader, EditButton } from './header.styled';
import FormUserEdit from '../../containers/form/userEdit/UserEdit';

const Header = () => {
  // Accéde aux données de l'utilisateur dans le store Redux
  const user = useSelector((state) => state.user);
  // État pour le mode édition
  const [isEditing, setIsEditing] = useState(false);


 // Gère le clic sur le bouton d'édition 
 const handleEditClick = () => {
  setIsEditing(true);
};

  // Ferme le mode édition
  const handleSaved = () => {
    setIsEditing(false); 
  };


  // Sort du mode édition
  const handleCanceled = () => {
    setIsEditing(false);
};

  // Rendu conditionnel basé sur le mode édition
  return (
    <Root>
      {isEditing ? (
        <>
          <Title>Edit User Info</Title>
          <FormUserEdit user={user} onSaved={handleSaved} onCanceled={handleCanceled} />
        </>
      ) : (
        <>
          <WelcomeTitle>
            Welcome back<br />
            {`${user?.firstname} ${user?.lastname}`}!
          </WelcomeTitle>
          <EditButton onClick={handleEditClick}>Edit Name</EditButton>
        </>
      )}
      <InvisibleHeader>Accounts</InvisibleHeader>
    </Root>
  );
};

export default Header;