import AccountsUser from '../../components/accountsUser/AccountsUser';
import Header from '../../components/header/Header';
import Layout from '../../components/layout/Layout';

const User = () => {
  return (
    <Layout>
      <Header />
      <main>
        <AccountsUser />
      </main>
    </Layout>       
  );
};

export default User;