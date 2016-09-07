// Libs
import React, { PropTypes } from 'react';

// Utils & Hocs
import { propTypes } from '../../utils';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/menu';

// Components
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Flex from '../Flex';
import Toggle from '../Navigation/Toggle';

const getMainBase = ({ width }) => width >= 1160 ? 960 : '100%';

const Main = ({ children, menu = null, viewPort, toggle }) => (
  <Flex
    row
    style={{
      height: '100%',
      width: '100%',
      overflow: 'hidden',
    }}
  >
    <Toggle toggle={toggle} />
    <Flex column base={getMainBase(viewPort)}>
      <Header />
      {React.cloneElement(children, { viewPort })}
      <Footer />
    </Flex>
    {menu}
    <Flex
      grow
      shrink
      style={{
        backgroundColor: '#111',
        boxSizing: 'border-box',
        borderLeft: '10px solid #000',
      }}
    >
      <Sidebar viewPort={viewPort} />
    </Flex>
  </Flex>
);

Main.propTypes = {
  children: propTypes.elements,
  menu: PropTypes.element,
  viewPort: propTypes.viewPort,
  toggle: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu()),
});

export default connect(null, mapDispatchToProps)(Main);
