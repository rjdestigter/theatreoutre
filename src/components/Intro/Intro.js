// Libs
import React from 'react';

// Utils & Hocs
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// Components
import Flex from '../../components/Flex';
import Mantra from '../../components/Mantra';

// Styles
import s from './Intro.css';

const TAG_LINE =
  'Exploring our natural bodies and their relationship to the natural world' +
  ', art, ourselves and each other';

const Intro = () => (
  <Flex
    grow shrink row style={{
      alignItems: 'center',
    }}
  >
    <Flex base={'33.33%'} />
    <Flex base={'66.66%'}>
      <p className={s.mantra}>
        <Mantra />
      </p>
      <br />
      <hr
        style={{
          height: 2,
          backgroundColor: 'Cyan',
          width: '50%',
        }}
      />
      <h1
        style={{
          color: 'Cyan',
          fontFamily: 'Arial Black',
          textTransform: 'uppercase',
          textShadow: '2px 2px 0 #111',
          margin: 0,
        }}
      >Our Stripped Down Season</h1>
      <p
        style={{
          margin: 0,
          maxWidth: 450,
        }}
      >{TAG_LINE}</p>
    </Flex>
  </Flex>
);

export default withStyles(s)(Intro);
