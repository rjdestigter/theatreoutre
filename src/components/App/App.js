// Libs
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

// Utils
import emptyFunction from 'fbjs/lib/emptyFunction';

// Styles
import s from './App.css';

// Components
import ResponsiveApp from '../Main'
import Flex from '../Flex';


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

  getChildContext () {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount () {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render () {
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
