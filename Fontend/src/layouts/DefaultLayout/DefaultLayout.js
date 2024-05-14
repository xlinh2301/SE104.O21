import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import './DefaultLayout.scss'

function DefaultLayout({ children }) {
  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;