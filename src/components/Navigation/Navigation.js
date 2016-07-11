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
import Flex from '../Flex'

const Navigation = () => (
  <Flex column className={s.navigation}>
    <Flex><a href="#">Season 16/17</a></Flex>
    <Flex><a href="#">About Us</a></Flex>
    <Flex><a href="#">Past Shows</a></Flex>
    <Flex><a href="#">Gallery</a></Flex>
    <Flex><a href="#">Contact</a></Flex>
    <Flex><a href="#">ImpromptOu</a></Flex>
    <Flex><a href="#">Club Didi</a></Flex>
  </Flex>
)

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(s)(Navigation);
