/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import Flex from '../Flex';
import { connect } from 'react-redux';

const Navigation = () => (
  <Flex column className={s.navigation}>
    <Flex><Link to="/shows">Season 16/17</Link></Flex>
    <Flex><Link to="/about">About Us</Link></Flex>
    <Flex><Link to="/contact">Contact</Link></Flex>
    <Flex><a href="http://theatreoutreblog.tumblr.com/" target="_outre">Archive & Photos</a></Flex>
    <Flex>
      <a href="http://fb.com/theatreoutre/" target="_outre">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 90 90"
        >
          <path d="M90 15c0-7.88-7.116-15-15-15H15C7.116 0 0 7.12 0 15v60c0 7.88 7.116 15 15 15h30V56H34V41h11v-5.844C45 25.076 52.568 16 61.875 16H74v15H61.875C60.548 31 59 32.61 59 35.024V41h15v15H59v34h16c7.884 0 15-7.12 15-15V15z" />
        </svg>
      </a>
    </Flex>
  </Flex>
);

Navigation.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu()),
});

export default withStyles(s)(connect(mapDispatchToProps)(Navigation));
