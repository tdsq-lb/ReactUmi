export default [
    {
        name: '注册页',
        path: '/userregister',
        component: './UserRegister',
    },
    {
        path: '/',
        component: '@/layouts/LayoutSide/index',
        routes: [
            // {
            //     path: '/',
            //     component: '@/pages/index',
            // },
        ],
    },
]