import { getPluginsList } from './build/plugins';
import { UserConfigExport, ConfigEnv, loadEnv } from 'vite';
import { warpperEnv } from './build';

import { resolve } from 'path';

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build")
}

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const { VITE_CDN, VITE_PORT, VITE_COMPRESSION, VITE_PUBLIC_PATH } = warpperEnv(loadEnv(mode, root));
  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: getPluginsList(command, VITE_CDN, VITE_COMPRESSION),
    resolve: { alias },
    // 服务端渲染
    server: {
      https: false,
      port: VITE_PORT,
      host: "0.0.0.0",
      proxy: {}
    }
  };
};
