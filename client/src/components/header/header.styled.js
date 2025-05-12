import styled from 'styled-components';

// Conteneur du Header
export const Root = styled.div`
  background-color: #12002b;
  padding-bottom: 32px;
`;

// Titre principal
export const WelcomeTitle = styled.h1`
  color: #FFF;
  margin-bottom: 22px;
  padding-top: 22px;
  margin-top: 0;
`;

// Header invisible utilisé pour l'accessibilité
export const InvisibleHeader = styled.h2`
  visibility: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
`;

// Bouton d'édition
export const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`;