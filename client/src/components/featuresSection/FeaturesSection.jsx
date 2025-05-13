import { Root } from './featuresSection.styled';
import Item  from './item/Item';
import ChatIcon from '../../assets/img/icon-chat.webp';
import MoneyIcon from '../../assets/img/icon-money.webp';
import SecurityIcon from '../../assets/img/icon-security.webp';

const FeaturesSection = () => {
  return (
    <Root>
      <Item icon={ChatIcon} title="You are our #1 priority"> 
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.    
        </p>
      </Item>
      <Item icon={MoneyIcon} title="More savings means higher rates">
        <p>The more you save with us, the higher your interest rate will be!</p>
      </Item>
      <Item icon={SecurityIcon} title="Security you can trust">
        <p>We use top of the line encryption to make sure your data and money is always safe.</p>
      </Item>
    </Root>
  );
};

export default FeaturesSection;