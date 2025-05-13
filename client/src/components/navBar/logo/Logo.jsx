import { LogoLink, LogoImg } from './logo.styled';
import LogoArgentBank from '../../../assets/img/argentBankLogo.webp';

const Logo = ({ to }) => {
  return (
    <LogoLink to={to}>
      <LogoImg src={LogoArgentBank} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>  
    </LogoLink>
  );
};

export default Logo;