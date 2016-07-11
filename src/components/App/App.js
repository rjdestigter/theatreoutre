/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.css';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Navigation from '../Navigation';
import { Provider } from 'react-redux';
import Flex from '../Flex'
import dots from '../../public/images/dots.gif'
import sidebar from '../../public/images/sidebar.png'
import Drawer from 'react-sidebar'
import withViewport from '../withViewport'

const mainMenu = (
  <Flex grow base={265} style={{
    backgroundImage: `url(${sidebar}), url(${dots})`,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'contain, auto',
    backgroundPosition: 'right, top',
    backgroundColor: 'Cyan',
  }}>
    <Navigation />
  </Flex>
)

const Main = ({ children, menu = null }) => (
  <Flex row style={{
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  }}>
    <Flex column base={960}>
      <Header />
      {children}
      <Footer />
    </Flex>
    {menu}
    <Flex grow shrink style={{
      backgroundColor: '#111',
      boxSizing: 'border-box',
      borderLeft: '10px solid #000',
    }}>
      <Sidebar />
    </Flex>
  </Flex>
)


const ResponsiveApp = withViewport(({children, viewport}) => {
  const { width } = viewport
  console.log('ViewPort', viewport)
  if (width > 1400) {
    return <Main menu={mainMenu}>{children}</Main>
  }

  return (
    <Drawer docked={true} pullRight open={true} sidebar={mainMenu}>
      <Main>{children}</Main>
    </Drawer>
  )
})

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      store: PropTypes.object.isRequired,
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
    }).isRequired,
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    if (this.props.error) {
      return this.props.children;
    }

    const store = this.props.context.store;
    return (
      <Provider store={store}>
        <ResponsiveApp>{this.props.children}</ResponsiveApp>
      </Provider>
    );
  }
}

export default App;
