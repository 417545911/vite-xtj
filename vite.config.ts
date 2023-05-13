import { getPluginsList } from './build/plugins';
import { UserConfigExport, ConfigEnv, loadEnv } from 'vite';
import { warpperEnv } from './build';

import path from 'path';

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const { VITE_CDN, VITE_COMPRESSION } = warpperEnv(loadEnv(mode, root));
  return {
    root,
    plugins: getPluginsList(command, VITE_CDN, VITE_COMPRESSION),
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  };
};
