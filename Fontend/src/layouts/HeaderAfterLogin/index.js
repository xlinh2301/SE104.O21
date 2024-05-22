import Header from '~/layouts/components/HeaderAfterLogin';
import Sidebar from '~/layouts/components/Sidebar';

function HeaderAfterLogin({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderAfterLogin;