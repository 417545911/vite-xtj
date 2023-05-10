import {createRouter,createWebHashHistory} from 'vue-router';
import {basicRoutes} from './routes';

// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
    // 创建一个 hash 历史记录
    history: createWebHashHistory(),
    // 应该添加到路由的初始路由列表
    routes: basicRoutes,
    // 是否应该禁止尾部斜杆
    strict:true,
    scrollBehavior:()=>({left:0,top:0})
})

// 配置路由器
export function setupRouter(app){
    app.use(router)
}