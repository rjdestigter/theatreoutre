/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from '../../public/logo-banner.svg';
import { THEATRE_OUTRE } from '../../constants';
import Flex from '../Flex';
import b from '../bebas.css';

const Header = () => (
  <Flex row base={45} isRow className={`${s.header} ${b.bebas}`}>
    <div className={s.logo}>
      <Link to="/">
        <img src={logoUrl} alt={THEATRE_OUTRE} title={THEATRE_OUTRE} />
      </Link>
    </div>
    <Flex>
      <Link to="/contact" className={s.link} href="#">Contact Us</Link>
    </Flex>
    <Flex className={s.spacer}>|</Flex>
    <Flex>
      <a className={s.link} href="#">Club Didi Membership</a>
    </Flex>
    <Flex className={s.spacer}>|</Flex>
    <Flex>
      <a className={s.link} href="#">Tickets</a>
    </Flex>
  </Flex>
);


export default withStyles(b, s)(Header);
