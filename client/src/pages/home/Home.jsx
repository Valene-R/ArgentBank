import HeroSection from '../../components/heroSection/HeroSection';
import FeaturesSection from '../../components/featuresSection/FeaturesSection';
import Layout from '../../components/layout/Layout';


const Home = () => {
  return (
		<Layout>
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </Layout>  
  );
};

export default Home;