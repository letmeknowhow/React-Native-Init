# React Native 版本
0.30.0


#### 主要第三方模块

| 模块   |      说明
|----------|:-------------:|
| [react-native-code-push](https://github.com/Microsoft/react-native-code-push) | 热更新支持 ios , android
| [react-native-mobx](https://github.com/aksonov/react-native-mobx) | 是RN支持观察者模式
| [react-native-router-flux](https://github.com/qwikly/react-native-router-redux) | 路由组件
| [react-native-style-tachyons](https://github.com/tachyons-css/react-native-style-tachyons) | 样式组件


# 环境配置

#### WebStrom 开发环境配置
1. 启用ESLint代码质量及代码风格检查 Javascript -> Code Qutity tool -> Eslint("config file"选择根目录下的".eslintrc")
2. Javascript Version 为 `JSX Harmony`
3. Javascript -> Libray -> ECMAScript 6 勾选

#### Android环境配置
请参考 http://reactnative.cn/docs/0.31/android-setup.html#content

- 安卓模拟器 `Genymotion, 不需要安装android studio`

#### 在模拟器上测试 Android

**必须首先启动** `Genymotion`虚拟机,运行命令, `注意: 第一次运行时,会自动下载一些jar依赖包,需要等待几分钟`

```sh
./runAndroid.sh
```

#### 在模拟器上测试 IOS

1. 用`xcode`打开`*.xcodeproj`
2. 选择一个ios模拟器,可选`iphone6`,`iphone6 plus`,`iphone5`等
3. 按下`Commond+R`启动测试

#### 启动本地mock 服务
1. 在与后台联调前,需要根据接口文档在文件夹"mockServer/public"中自行创建测试数据
2. 修改"config/global.js"中的"webApiURL"为自己机器的ip地址
2. 启动mock服务
```sh
./mock.sh
```

