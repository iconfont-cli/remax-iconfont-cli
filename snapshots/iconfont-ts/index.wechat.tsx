/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
// @ts-ignore
import Iconfont_wechat from './wechat/wechat';

interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
}

export const TsxIcon: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // FIXME: RemaxJs doesn't support pxTransform()
  // @ts-ignore
  return <Iconfont_wechat name={name} size={size} color={color} />;
};

TsxIcon.defaultProps = {
  size: 20,
};

export default TsxIcon;