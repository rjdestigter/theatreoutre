/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { THEATRE_OUTRE } from '../../constants';
import ShowThumbNails from '../../components/ShowThumbNail';
import Flex from '../../components/Flex'

const title = THEATRE_OUTRE;

const Home = (props, context) => {
  context.setTitle(title);

  return (
    <Flex grow shrink column>
      <Flex grow shrink row style={{
        alignItems: 'center',
      }}>
        <Flex base={'33.33%'} />
        <Flex base={'66.66%'}>
          <p className={s.mantra}>
            <span>Outré</span>  \ü-‘trá\ : violating convention or propriety; passing the bounds of what is usual; out of the common course or limits; <i>bizarre</i>; outlandish; extravagant; queer.
          </p>
          <br />
          <hr style={{
            height: 2,
            backgroundColor: 'Cyan',
            width: '50%',
          }} />
          <h1 style={{
            color: 'Cyan',
            fontFamily: 'Arial Black',
            textTransform: 'uppercase',
            textShadow: '2px 2px 0 #111',
            margin: 0,
          }}>Our Stripped Down Season</h1>
          <p style={{
            margin: 0,
            maxWidth: 450,
          }}>Exploring our natural bodies and their relationship to the natural world, art, ourselves and each other</p>
        </Flex>
      </Flex>
      <ShowThumbNails />
    </Flex>
  );
}

      Home.propTypes = {};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
