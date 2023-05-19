const Layout = () => import('@/layout/index.vue');
export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      showLink: false,
      rank: 101,
    },
  },
  {
    path: '/redirect',
    component: Layout,
    meta: {
      icon: 'homeFilled',
      title: '首页',
      showLink: false,
      rank: 104,
    },
  },
] as Array<RouteConfigsTable>;
