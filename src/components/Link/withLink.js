/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import history from '../../core/history';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/menu';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export const withLink = (WrappedComponent) => {
  class Link extends Component { // eslint-disable-line react/prefer-stateless-function

    static propTypes = {
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      onClick: PropTypes.func,
    };

    handleClick = (event) => {
      let allowTransition = true;

      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        allowTransition = false;
      }

      event.preventDefault();

      if (allowTransition) {
        if (this.props.to) {
          history.push(this.props.to);
        } else {
          history.push({
            pathname: event.currentTarget.pathname,
            search: event.currentTarget.search,
          });
        }

        this.props.close();
      }
    };

    render() {
      const { to, ...props } = this.props; // eslint-disable-line no-use-before-define
      return <WrappedComponent href={history.createHref(to)} {...props} onClick={this.handleClick} />;
    }

  }

  const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(toggleMenu(false)),
  });

  return connect(null, mapDispatchToProps)(Link);
};

export default withLink;
