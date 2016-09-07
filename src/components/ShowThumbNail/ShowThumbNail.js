// Libs
import React, { PropTypes } from 'react';

// Components
import Flex from '../Flex';

// Utils & Hocs
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { propTypes } from '../../utils';
import withLink from '../Link/withLink';

// Styles
import s from './ShowThumbNail.css';

// local
const getMaxWidth = ({ width }) => {
  if (width >= 900) return 280;
  if (width >= 750) return 200;

  return '100%';
};

const getBase = ({ width }) => width >= 750 ? '33.33%' : '100%';

// Exports
const ShowThumbNail = ({ image, title, viewPort, style, children, onClick }) => (
  <Flex
    column
    base={getBase(viewPort)}
    className={s.root}
    onClick={onClick}
    style={{
      maxWidth: getMaxWidth(viewPort),
      margin: '0 auto',
      ...style,
    }}
  >
    <Flex
      flex grow shrink className={s.image} style={{
        alignItems: 'flex-end',
      }}
    >
      <img src={image} alt={title} title={title} />
    </Flex>
    <Flex base={'25px'} isRow className={s.bar} />
    <Flex grow isRow>
      <h1 className={s.title}>{title}</h1>
      <div>
        {children}
      </div>
    </Flex>
  </Flex>
);

ShowThumbNail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: propTypes.elements.isRequired,
  style: propTypes.object,
  viewPort: propTypes.viewPort,
  router: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

ShowThumbNail.defaultProps = {
  style: {},
};

export default withStyles(s)(withLink(ShowThumbNail));
