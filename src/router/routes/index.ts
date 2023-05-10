// 根路由
export const RootRoute = {
  path: '/',
  name: 'Root',
  meta: {
    title: 'Root',
  },
};

export const LoginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/Login.vue'),
  meta: {
    title: '登录',
  },
};

export const basicRoutes = [LoginRoute, RootRoute];
