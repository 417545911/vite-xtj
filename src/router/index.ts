import { Router, createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import remainingRouter from './modules/remaining';
import { ascending, formatTwoStageRoutes, formatFlatteningRoutes } from './utils';

/** 不参与菜单的路由 */
export const remainingPaths = Object.keys(remainingRouter).map(v => {
  return remainingRouter[v].path;
});

/** 导出处理后的静态路由（三级及以上的路由全部拍成二级） */
export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(
  formatFlatteningRoutes(buildHierarchyTree(ascending(routes)))
);
/** 创建路由实例 */
export const router: Router = createRouter({});
