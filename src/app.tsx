// let extraRoutes;


// // 动态添加路由
// export function patchRoutes({ routes }) {
//     // merge(routes, extraRoutes);

//     // 合并服务端返回的路由
//     extraRoutes.map(item => {
//         routes.unshift({
//             path: item.path,
//             component: require(`@/pages${item.component}`).default
//         })
//     })
// }

// export function render(oldRender) {
//     // 在这里发送请求 活动路由信息
//     // fetch('/api/routes').then(res => res.json()).then((res) => {
//     //     extraRoutes = res.routes;
//     //     oldRender();
//     // })
//     extraRoutes = [
//         { path: '/user2', component: '/user2' }
//     ]

//     // 在渲染之前，做权限校验

//     oldRender();
// }

// // 在初始加载和路由切换时做一些事情。
// export function onRouteChange({ location, routes, action, matchedRoutes }) {
//     // 用于做埋点统计
//     // console.log(location.pathname);

//     // 设置标题
//     // if (matchedRoutes.length) {
//     //     document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
//     // }
// }