// Libs
import React, { PropTypes } from 'react';

// Components
import Flex from '../../components/Flex';
import ShowThumbNails from '../../components/ShowThumbNail';
import Intro from '../../components/Intro/Intro';

// Utils & Hocs
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { propTypes } from '../../utils';

// Data
import { THEATRE_OUTRE } from '../../constants';

// Styles
import s from './Home.css';

// Local
const title = THEATRE_OUTRE;

// Exports
const Home = ({ viewPort }, context) => {
  context.setTitle(title);

  return (
    <Flex grow shrink column style={{
      justifyContent: 'flex-end',
    }}>
      {viewPort.width > 750 ? <Intro /> : null}
      <ShowThumbNails viewPort={viewPort} />
    </Flex>
  );
};

Home.propTypes = {
  viewPort: propTypes.viewPort,
};

Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
