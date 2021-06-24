import { defineConfig } from 'umi';
import routes  from './routes'
export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    hash: true,
    // hash 后缀 解决浏览器缓存
    // base: '/admin/',                        // 路由前缀
    // publicPath: 'https://xxx.com/cdn/',     // 资源 CDN 部署
    // outputPath: 'build',                    // 指定打包输出路径
    // title: 'UmiJS',                            // 指定标题
    targets: {
        // 指定需要兼容的浏览器最低版本
        ie: 11,
    },
    proxy: {
        // 配置 跨域代理
        '/api': {
            target: 'http://jsonplaceholder.typicode.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        },
    },
    theme: {
        // 配置主题，实际上是配 less 变量
        '@primary-color': '#1DA57A',
    },
    routes: routes,
    fastRefresh: {},

    dva: {
        immer: true,
        hmr: false,
    },
    // 开启国际化
    locale: {
        default: 'zh-CN',
        antd: false,
        title: false,
        baseNavigator: true,
        baseSeparator: '-',
    },
});
