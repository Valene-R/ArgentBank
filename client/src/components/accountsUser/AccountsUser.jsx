import Account from './account/Account';
import { Root } from './accountsUser.styled';

const AccountsUser = () => {
	const accounts = [
		// Les informations fictives du compte bancaire
		{ id: 1, title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
		{ id: 2, title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
		{ id: 3, title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
	];
  
	return (
	  <Root>
			{accounts.map(account => (
		  	<Account 
				key={account.id}
				title={account.title}
				amount={account.amount}
				description={account.description}
		  	/>
			))}
	  </Root>
	);
  };

export default AccountsUser;