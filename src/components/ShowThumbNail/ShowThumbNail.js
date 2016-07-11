/**
 * Theater Outré
 *
 * Copyright © 2016 Theatre Outré
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ShowThumbNail.css';
import Flex from '../Flex';

const ShowThumbNail = ({ image, title, children }) => (
  <Flex base={'33.33%'}>
    <div className={s.root} style={{
      maxWidth: 280,
      margin: '0 auto',
    }}>
      <div className={s.image}>
        <img src={image} alt={title} title={title} />
      </div>
      <div className={s.bar} />
      <h1 className={s.title}>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  </Flex>
);

ShowThumbNail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default withStyles(s)(ShowThumbNail);
