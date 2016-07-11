/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React, { PropTypes } from 'react';

const COL = 'column';
const ROW = 'row';
const MIN_WIDTH = 'minWidth';
const WIDTH = 'width';
const MIN_HEIGHT = 'minHeight';
const HEIGHT = 'height';
const AUTO = 'auto';

const Flex = ({
  flex = false,
  column = false,
  row = false,
  reverse = false,
  wrap = false,
  between = false,
  around = false,
  item = false,
  grow = false,
  shrink = false,
  base = false,
  isRow = false,
  style = {},
  className = null,
  children,
}) => {
  let flexProps = {};

  if (flex || row || column || reverse || wrap) {
    flexProps = {
      display: 'flex',
      flexDirection: (column ? COL : ROW) + (reverse ? '-reverse' : ''),
      flexWrap: wrap ? 'wrap' : 'nowrap',
    };

    if (between) flexProps.justifyContent = 'space-between';
    if (around) flexProps.justifyContent = 'space-around';
  }

  if (item || grow || shrink || base !== false) {
    flexProps = {
      ...flexProps,
      flexGrow: grow ? 1 : 0,
      flexShrink: shrink ? 1 : 0,
      flexBasis: base !== false ? base : AUTO,
    };

    if (!shrink && base !== false) {
      if (isRow) {
        flexProps[grow ? MIN_HEIGHT : HEIGHT] = base;
      } else {
        flexProps[grow ? MIN_WIDTH : WIDTH] = base;
      }
    }
  }
  return (
    <div
      className={className}
      style={{
        ...flexProps,
        ...style,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};

Flex.propTypes = {
  flex: PropTypes.bool,
  column: PropTypes.bool,
  row: PropTypes.bool,
  reverse: PropTypes.bool,
  wrap: PropTypes.bool,
  between: PropTypes.bool,
  around: PropTypes.bool,
  item: PropTypes.bool,
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
  base: PropTypes.oneOfType([
    PropTypes.oneOf([false, 'auto']),
    PropTypes.number,
    PropTypes.string,
  ]),
  isRow: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  style: PropTypes.object,
};

export default Flex;
