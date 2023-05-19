import { Router, createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

const modules: Record<string, any> = import.meta.glob(['./modules/**/*.ts', './modules/**/remaining.ts'], {
  eager: true,
});

/** 原始静态路由（未做任何处理） */
const routes: any = [];

Object.keys(modules).forEach(key => {
  const _default = modules[key].default;
  if (Array.isArray(_default)) {
    routes.push(..._default);
  } else {
    routes.push(_default);
  }
});
/** 导出处理后的静态路由（三级及以上的路由全部拍成二级） */
console.info('🐕‍🦺 ~file: index.ts ~line: 19 ~routes', routes);
export const constantRoutes: Array<RouteRecordRaw> = routes;
/** 创建路由实例 */
export const router: Router = createRouter({
  history: createWebHistory(), // 路由器使用的历史记录模式
  strict: true,
  routes: constantRoutes,
});

export default router;
