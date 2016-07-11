/**
 * Theater Outré
 *
 * Copyright © 2016 Theatre Outré
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ShowThumbNail.css';
import Flex from '../Flex';
import ShowThumbNail from './ShowThumbNail';
import montparnasse from '../../public/images/montparnasse.png';
import thecuringroom from '../../public/images/thecuringroom.png';
import tabandlandon from '../../public/images/tabandlandon.png';
import castratiPoster from '../../public/images/castrati_poster.jpg';

const ShowThumbNails = () => (
  <Flex grow shrink row className={s.thumbnails} grow shrink>
    <ShowThumbNail image={montparnasse} title={'Montparnasse'}>
      <div><i>by Erin Shields and Maev Beaty</i></div>
      <div>November 2016</div>
    </ShowThumbNail>
    <ShowThumbNail image={thecuringroom} title={'The Curing Room'}>
      <div><i>by David Ian Lee</i></div>
      <div>February 2017</div>
    </ShowThumbNail>
    <ShowThumbNail image={tabandlandon} title={'Tab & Landon'}>
      <div><i>by Jay Whitehead</i></div>
      <div>Spring 2017</div>
    </ShowThumbNail>
  </Flex>
);

export default withStyles(s)(ShowThumbNails);
