import router from '@system.router'

export default {
  // 页面级组件的数据模型，影响传入数据的覆盖机制：private内定义的属性不允许被覆盖
  private: {
    title1: '示例页0'
  },
  routeDemo () {
    // 跳转到应用内的某个页面，router用法详见：文档->接口->页面路由
    router.push ({
      uri: '/Demo'
    })
  }
}
  