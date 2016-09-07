// Libs
import React from 'react';
import Drawer from 'react-sidebar';

// Components
import Main from './Main';
import MainMenu from './MainMenu';

// Utils & Hocs
import withViewport from '../withViewport';
import * as propTypes from '../../utils/propTypes';
import { connect } from 'react-redux';

class ResponsiveApp extends React.Component {

  constructor() {
    super();

    this.state = {
      toggled: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      toggled: !this.state.toggled,
    });
  }

  render() {
    const { children, viewport, isOpen } = this.props;
    const { width } = viewport;

    if (width > 1400) {
      return (
        <Main menu={<MainMenu />} viewPort={viewport}>{children}</Main>
      );
    }

    return (
      <Drawer
        pullRight
        docked={false}
        open={isOpen}
        sidebar={<MainMenu />}
        onSetOpen={this.onToggle}
      >
        <Main viewPort={viewport}>{children}</Main>
      </Drawer>
    );
  }
}

ResponsiveApp.propTypes = {
  viewport: propTypes.viewPort,
  children: propTypes.elements,
  isOpen: React.PropTypes.bool.isRequired,
};

const mapStateToProps = ({ menu }) => ({
  isOpen: menu.open,
});

export default withViewport(connect(mapStateToProps)(ResponsiveApp));
