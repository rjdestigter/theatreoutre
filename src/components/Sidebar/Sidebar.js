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
import s from './Sidebar.css';
import b from '../bebas.css'
import castratiPoster from '../../public/images/castrati_poster.jpg';

const Sidebar = () => (
  <div className={s.sideBar}>
    <h1 className={b.bebas}>Castrati</h1>
    <img src={castratiPoster} alt={'Castrati: An Electro Drag Opera'} />
  </div>
);


export default withStyles(b, s)(Sidebar);
