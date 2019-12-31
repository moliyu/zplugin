module.exports = {
    title: 'zplugin',
    description: '一款轻便好使的个人ui框架',
    themeConfig: {
        // displayAllHeaders: true ,
        nav: [
          {
            text: '指南',
            link: '/guide/install/guide'
          }
        ],
        sidebar: [
            {
                title: '开发指南',
                collapsable: false, //是否展开
                path: '/guide/install/guide',
                children: [
                    ['./guide/install/install', '安装'],
                    // ['./guide/started/started', '快速上手']
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    ['./guide/button/button','button'],
                    ['./guide/switch/switch','switch'],
                    ['./guide/table/table','table'],
                    ['./guide/collapse/collapse','collapse'],
                    ['./guide/progress/progress','进度条'],
                ],
            },
            
        ]
      }
}