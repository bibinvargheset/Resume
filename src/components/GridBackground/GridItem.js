import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({ width, height, style, ...rest }) => (
  <div className="GridItem" style={{ width, height, ...style }} {...rest} />
);

GridItem.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

GridItem.defaultPropTypes = {
  height: 0,
  width: 0,
  style: {}
};

export default GridItem;