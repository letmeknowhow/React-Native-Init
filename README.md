# React Native 版本
0.30.0

#### ReactNative第三方模块

| 模块   |      说明
|----------|:-------------:|
| React-Native 15.0 |  跨平台移动App开发框架
| React-Redux |    路由支持
| [react-native-code-push](https://github.com/Microsoft/react-native-code-push) | 热更新支持 ios , android
| [react-native-animatable](https://github.com/oblador/react-native-animatable) | 动画支持库(IOS,Android)
| [react-native-viewpager](https://github.com/race604/react-native-viewpager) | 兼容IOS和Android的 ViewPage控件,
| [react-native-router-redux](https://github.com/qwikly/react-native-router-redux) | 路由组件,整合了React-Redux, 整合了 `Nav` 和 `TabBar`组件
| [react-native-collapsible](https://github.com/oblador/react-native-collapsible) | 折叠组件,兼容 android和ios
| [react-native-scrollable-tab-view](https://github.com/brentvatne/react-native-scrollable-tab-view) | 支持`横向滑动`和`点击`的选项卡组件, 兼容 Android 和 ios, Android使用的是ViewPageAndroid, ios使用的是ScrollView
| [react-native-gesture-password](https://github.com/Spikef/react-native-gesture-password) | 纯JS实现的 手势密码组件 兼容 ios 和 android
| [react-native-simple-store](https://github.com/jasonmerino/react-native-simple-store) | 对React Native's AsyncStorage 的简单封装
| [react-native-webview-bridge](https://github.com/alinz/react-native-webview-bridge) | RN 与 H5 页面通讯

# 环境配置

#### WebStrom 开发环境配置
1. 确定启用node环境 Language & FrameWorks -> Node And Npm -> Node Core Library enable 为 `enable`
2. Javascript Version 为 `JSX Harmony`
3. Javascript -> Libray -> ECMAScript 6 勾选
4. 启用ESLint代码质量及代码风格检查 Javascript -> Code Qutity tool -> Eslint
5. 安装ReactNative代码模板 files->import-> `ReactNativeSinppet.jar`

#### Android环境配置
请参考 http://reactnative.cn/docs/0.31/android-setup.html#content

- 必需安装 `Android SDK`, `VirtualBox`, `Genymotion模拟器`, `jdk`
- 可选安装 `Android Studio`