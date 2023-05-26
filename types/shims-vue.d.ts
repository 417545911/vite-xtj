/** 使得其他模块在导入 *.vue 文件时可以正确地获取到组件的类型信息。*/
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

/** 让 TypeScript 能够识别和推断 Sass 样式文件的类型 */
declare module "*.scss" {
    const scss: Record<string, string>;
    export default scss;
}