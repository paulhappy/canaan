module.exports = {
  title: 'paul-home',
  description: 'This is Just playing around',
  dest: 'docs',
  base:'/docs/', //要部署的根目录，不配置的话，都会到网站根目录下面
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '链接', link: 'https://google.com' },
    ],
    sidebar: [
      ['/','关于'],
      // {
      //   title: '技术',
      //   collapsable: true,
      //   children: [
      //     ['/jishu/MarkDownGrammer','md语法'],
      //     {
      //       title: '技术1',
      //       collapsable: true,
      //       children: [
      //         ['/jishu/MarkDownGrammer','目录1']
      //       ]
      //     }
      //   ]
      // },
      {
        title: 'iOS',
        collapsable: true,
        children: [
          ['/iOS/0.ram','内存管理']
        ]
      },
      {
        title: '随笔',
        collapsable: true,
        children: [
          ['/Other/Mark','Mark'],
          ['/Other/MarkDownGrammer','md语法']
        ]
      },
      // ['/page-a/f3','11']
    ]
  }
}
