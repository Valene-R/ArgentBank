import { Root, Icon, Title } from './item.styled';

const Item = ({ icon, title, children }) => {
  return (
    <Root>
  		<Icon src={icon} alt={`${title} Icon`} />
    	<Title>{title}</Title>
    	{children}
  	</Root>
  );
};

export default Item;