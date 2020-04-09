import { Config } from './getConfig';
import path from 'path';

export const filterMiniProgramConfig = (config: Config, platform: string) => {
  return {
    symbol_url: config.symbol_url,
    save_dir: path.join(config.save_dir, platform),
    use_rpx: config.use_rpx,
    trim_icon_prefix: config.trim_icon_prefix,
    default_icon_size: config.default_icon_size,
  };
};
