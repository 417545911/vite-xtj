import { RouteRecordRaw } from 'vue-router';
import { buildHierarchyTree } from '@/utils/tree';

/**
 * 一维数组处理成多级嵌套数组(三级及以上的路由全部拍成二级,keep-alive 只支持到二级缓存)
 * @param routesList 处理后的一维路由菜单数组
 * @returns 返回将一维数组重新处理成规定路由的样式
 */
function formatTwoStageRoutes(routesList: RouteRecordRaw[]) {
  if (routesList.length === 0) return routesList;
  const newRoutesList: RouteRecordRaw[] = [];
  routesList.forEach((v: RouteRecordRaw) => {
    if (v.path === '/') {
      newRoutesList.push({
        component: v.component,
        name: v.name,
        path: v.path,
        redirect: v.redirect,
        meta: v.meta,
        children: [],
      });
    } else {
      newRoutesList[0]?.children?.push({ ...v });
    }
  });
  return newRoutesList;
}

/**
 * 将多级嵌套路由处理成一维数组
 * @param routesList 传入路由
 * @returns 返回处理后的一维路由
 */
function formatFlatteningRoutes(routesList: RouteRecordRaw[]) {
  if (routesList.length === 0) return routesList;
  let hierarchyList = buildHierarchyTree(routesList);
  for (let i = 0; i < hierarchyList.length; i++) {
    if (hierarchyList[i].children) {
      hierarchyList = hierarchyList.slice(0, i + 1).concat(hierarchyList[i].children, hierarchyList.slice(i + 1));
    }
  }
  return hierarchyList;
}
export { formatTwoStageRoutes, formatFlatteningRoutes };
