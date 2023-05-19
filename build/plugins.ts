import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import svgLoader from 'vite-svg-loader';

export function getPluginsList(command: string, VITE_CDN: boolean, VITE_COMPRESSION: ViteCompression) {
  return [vue(), DefineOptions(), svgLoader()];
}
