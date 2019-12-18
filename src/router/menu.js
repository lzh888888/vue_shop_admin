// 菜单配置
const homeMenu = [
  {
    name: '数据分析',
    icon: 'el-icon-s-data',
    children: [
      {
        name: '分析页',
        icon: 'el-icon-location',
        path: ''
      },
      {
        name: '监控页',
        icon: 'el-icon-location',
        path: ''
      },
      {
        name: '工作台',
        icon: 'el-icon-location',
        path: ''
      }
    ]
  },
  {
    name: '个人页',
    icon: 'el-icon-location',
    children: [
      {
        name: '个人设置',
        icon: 'el-icon-location',
        path: ''
      },
      {
        name: '个人中心',
        icon: 'el-icon-user-solid',
        path: ''
      }
    ]

  }
]

export default homeMenu
