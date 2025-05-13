import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
		<>
			<NavBar />
				{children}	
     	<Footer />
		</>
  );
};

export default Layout;