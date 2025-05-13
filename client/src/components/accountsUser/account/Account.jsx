import { Root, AccountContent, Title, Amount, Description, TransactionButton } from './account.styled.js';

const Account = ({ title, amount, description }) => {
  return (
    <Root>
      <AccountContent>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
        <Description>{description}</Description>
      </AccountContent>
      <AccountContent className="cta">
        <TransactionButton>View transactions</TransactionButton>
      </AccountContent>
    </Root>
  );
};

export default Account;