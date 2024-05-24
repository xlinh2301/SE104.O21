import Header from '~/layouts/components/HeaderAfterLogin';
import Sidebar from '~/layouts/components/Sidebar';
import './HeaderAfterLogin.scss'

function HeaderAfterLogin({ children }) {
  return (
    <div className="body-headerafterlogin">
      <Header />
      <div className="container-headerafterlogin">
        <Sidebar />
        <div className="content-headerafterlogin">{children}</div>
      </div>
    </div>
  );
}

export default HeaderAfterLogin;