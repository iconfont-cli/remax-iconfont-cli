/* eslint-disable */

import React from 'react';
import Iconfont_toutiao from './toutiao/toutiao';

export const JsIcon = (props) => {
  const { name, size, color } = props;

  // FIXME: RemaxJs doesn't support pxTransform()
  return <Iconfont_toutiao name={name} size={size} color={color} />;
};

JsIcon.defaultProps = {
  size: 14,
};

export default JsIcon;
