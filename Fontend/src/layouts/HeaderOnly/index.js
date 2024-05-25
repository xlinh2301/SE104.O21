import Header from '~/layouts/components/Header';
import './headerOnly.scss'

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container-headeronly">
        <div className="content-headeronly">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;