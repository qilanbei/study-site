export default {
  title: 'vue-template',// 网站标题
  description: 'vue-cli/二次封装/vue3/axios/多入口打包', //网站描述
  ignoreDeadLinks: true,// 最好加上，构建时会忽略md中的外链
  markdown: {
    theme: 'material-palenight',//md主题
    lineNumbers: true//md 加行号
  },
  lastUpdated: true,//显示最近更新时间
  appearance: true,//可以选择深浅主题
  
  // 主题配置
  themeConfig: {
    socialLinks: [//右上角图标和链接，icon 可用svg 配置
      { icon: 'github', link: 'https://github.com/Yinzhuo19970516/vue-template' },
      { icon: 'slack', link: 'https://juejin.cn/user/1011206428301774' }
    ],
    lastUpdatedText: '更新时间',
    siteTitle: 'vue-template',
    nav: [//右侧导航
      { text: '首页', link: '/' },
      { text: '项目简介', link: '/test' },
      { text: '更新日志', link: 'https://github.com/Yinzhuo19970516/vue-template/blob/main/CHANGELOG.md' }
    ],
    // 侧边导航
    sidebar: [
      {
        text: '项目简介',
        items: [
          { text: '为什么要写这个项目', link: '/page/why' },
          { text: '多入口打包', link: '/page/pages' },
          { text: '自动化生成项目基本模版', link: '/page/init' },
          { text: 'Pinia',link:'/page/pinia'},
          { text: '数据持久化',link:'/page/piniaPlugin'},
          { text: 'axios二次封装',link:'/page/axios'},
          { text: '路由跳转动画',link:'/page/router'},
          { text: 'less sass的优化处理',link:'/page/less'},
          { text: 'viewport适配方案',link:'/page/viewport'},
          { text: '环境变量',link:'/page/env'},
          { text: '兼容性处理方案',link:'/page/babel'},
          { text: '总结', link: '/page/all' },
        ]
      }
    ],
    outlineTitle: '目录'
  }
}