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
import s from './Footer.css';
import b from '../bebas.css'
import Link from '../Link';
import Flex from '../Flex'
import { THEATRE_OUTRE } from '../../constants'

function Footer() {
  return (
    <Flex className={b.bebas} base={45} isRow row style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Flex>© {THEATRE_OUTRE}</Flex>
      <Flex>
        <Link className={s.link} to="/">Home</Link>
      </Flex>
    </Flex>
  );
}

export default withStyles(b, s)(Footer);
