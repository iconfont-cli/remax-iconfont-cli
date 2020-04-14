/* eslint-disable */

import React from 'react';
import Iconfont_toutiao from './toutiao/toutiao';

const IconFont = (props) => {
  const { name, size, color } = props;

  // FIXME: RemaxJs doesn't support pxTransform()
  return <Iconfont_toutiao name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 14,
};

export default IconFont;
