import DefaultTheme from 'vitepress/theme'
import "./custom.css"
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册一个全局组件
    app.component('MyGlobalComponent', /* ... */)
  }
}