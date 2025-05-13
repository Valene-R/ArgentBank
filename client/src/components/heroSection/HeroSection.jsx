import { Root, Content, Subtitle, Text } from './heroSection.styled';

const HeroSection = () => {
  return (
    <Root>
			<Content>
        <h2 className="sr-only">Promoted Content</h2>
        <Subtitle>No fees.</Subtitle>
        <Subtitle>No minimum deposit.</Subtitle>
        <Subtitle>High interest rates.</Subtitle>
        <Text>Open a savings account with Argent Bank today!</Text>
			</Content>      
    </Root>
  );
};

export default HeroSection;