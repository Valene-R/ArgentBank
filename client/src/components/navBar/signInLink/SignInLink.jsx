import { NavLinkStyled, ActionButton, Styled } from './signInLink.styled';

const SignInLink = ({ to, icon, children, onClick }) => {
  if (to) {
    return (
      <Styled>
        <i className={icon}></i>
        <NavLinkStyled to={to}>
          {children}
        </NavLinkStyled>
      </Styled>
    );
  } else if (onClick) {
    return (
      <Styled>
        <i className={icon}></i>
        <ActionButton onClick={onClick}>
          {children}
        </ActionButton>
      </Styled>
    );
  }
  return null; // Gére le cas où ni "to" ni "onClick" ne sont fournis
};

export default SignInLink;