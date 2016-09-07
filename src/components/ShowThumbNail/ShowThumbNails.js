// Libs
import React, { PropTypes } from 'react';
import SwipeableViews from 'react-swipeable-views';

// Components
import Flex from '../Flex';
import ShowThumbNail from './ShowThumbNail';

// Utils & Hocs
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { propTypes } from '../../utils';

// Styles
import s from './ShowThumbNail.css';

// Assets
import montparnasse from '../../public/images/montparnasse.png';
import thecuringroom from '../../public/images/thecuringroom.png';
import tabandlandon from '../../public/images/tabandlandon.png';

// Local
const Wrapper = ({ viewPort, children }) => {
  const { width } = viewPort;

  if (width >= 750) {
    return (
      <Flex grow shrink row className={s.thumbnails} grow shrink>
        {children}
      </Flex>
    );
  }

  return (
    <SwipeableViews
      className={s.thumbnails}
      style={{
        overflowX: 'initial',
      }}
      slideStyle={{
        overflow: 'hidden',
      }}
    >
      {children}
    </SwipeableViews>
  );
};

Wrapper.propTypes = {
  viewPort: propTypes.viewPort,
  children: PropTypes.element.isRequired,
};

const WrapperWithStyles = withStyles(s)(Wrapper);


// Exports
const ShowThumbNails = ({ viewPort }) => (
  <WrapperWithStyles viewPort={viewPort}>
    <ShowThumbNail
      image={montparnasse} title={'Montparnasse'} viewPort={viewPort} to={'/shows'}
    >
      <div><i>by Erin Shields and Maev Beaty</i></div>
      <div>November 2016</div>
    </ShowThumbNail>
    <ShowThumbNail
      image={thecuringroom} title={'The Curing Room'} viewPort={viewPort} to={'/shows'}
    >
      <div><i>by David Ian Lee</i></div>
      <div>February 2017</div>
    </ShowThumbNail>
    <ShowThumbNail
      image={tabandlandon} title={'Tab & Landon'} viewPort={viewPort} to={'/shows'}
    >
      <div><i>by Jay Whitehead</i></div>
      <div>Spring 2017</div>
    </ShowThumbNail>
  </WrapperWithStyles>
);

ShowThumbNails.propTypes = {
  viewPort: propTypes.viewPort,
};

export default withStyles(s)(ShowThumbNails);
