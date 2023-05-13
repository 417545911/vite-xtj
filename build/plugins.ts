import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';

export function getPluginsList(command: string, VITE_CDN: boolean, VITE_COMPRESSION: ViteCompression) {
  return [vue(), DefineOptions()];
}
