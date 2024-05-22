import Header from '~/layouts/components/Header';
import './headerOnly.scss'

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container-header">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;