# QQ 音乐 WebApp

![Progress](http://progressed.io/bar/99?title=completed)

## 介绍

该项目来源[HuangYi](https://github.com/ustbhuangyi), 之前写过他的[eleApp](https://github.com/forzeny/eleApp),后来发现这个音乐App，可惜未开源，还好他的学生把这个项目开源了，所以就有了这个仓库，后面回提到我的一些改进。

毕业后来到的这家公司使用Vue，之前实习接触过React和Ng，所以上手较快,上手就是维护Vuex项目，当然我要学习不使用vuex的场景，同时老项目代码写的不是很好，所以就准备找几个好的项目来学习所以就有了[eleApp](https://github.com/forzeny/eleApp)和本项目

数据来源QQ音乐JSONP，部分接口存在http header的限制所以用到了node，托管于VPS，PM2 部署，Nginx代理，

[演示地址](http://45.77.79.163/Music)

[备用：项目演示地址 GitHub Pages](https://forzeny.github.io/Music-Player/music/#/recommend)

## 耗时

201710 - 201801

## 平台

* macOS High Sierra
* vscode

## 相关

* `Vue` @2.3.3, vue-router, vuex, axios
* `less` (不太习惯stylus所以我还是继续使用less了)
* `ES6` [standardjs规范](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)
* `Express`
* ~~~lib-flexbile~~~ `amfe-flexible@2.0`,  `px2rem`

* `Vultr/heroku PM2 Nginx`

## 分支

* master
* [lib-flex](https://www.npmjs.com/package/amfe-flexible) 添加自适应布局 merge into master √
* [ssr](https://ssr.vuejs.org/en/) 服务端渲染实现 (待完成)
* [pre-render](https://github.com/chrisvfritz/prerender-spa-plugin) 预渲染实现

## 组件

* 基础组件：确认对话框，loading，进度条，搜索框，滚动组件
* 业务组件：歌单详情，播放内核，搜索页面，顶部导航，排行榜等组件
* 上拉刷新，函数防抖动搜索，消除点击延迟，异步路由

## 已完成部分

* [x] /recommand 推荐页：轮播图，推荐歌单列表
* [x] /singer 歌手页列表：歌手列表展示，左右联动，快速入口，类似通讯录
* [x] /singer/:id 歌手详情页：局部滚动，视差，播放音乐，音乐播放器有的功能都有
* [x] /rank/:id 排行页：同上
* [x] /search 搜索：搜索结果，搜索历史，热门搜索，结果播放
* [x] 播放列表页：当前播放队列
* [ ] ~~~用户中心页~~~

## 调试工具

* vConsole
* Charles

## 注意事项

* animation-play-state: paused ios 不支持[解决方案](https://codepen.io/HaoyCn/pen/BZZrLd)
* min-player [进度条实现](https://codepen.io/xgad/post/svg-radial-progress-meters)
* vue@2.5+  [ios 不能播放问题](https://github.com/DDFE/DDFE-blog/issues/24)

## 本地预览

```bash
git clone hhttps://github.com/forzeny/Music-Player.git
$ cd Music-Player
$ yarn install
$ yarn run dev
```

## 改进及优化

* QQ音乐UI
* 适配优化
* 打包优化

### 打包

* 分块：根据打包后的[分析报告](https://www.npmjs.com/package/webpack-bundle-analyzer)进行优化
* 处理vendor：一般都是这部分体积大，相关类库一般不会变化，所以单独打包和其它文件一样加上chunkhash辨别文件是否变化，同时把manifest抽离出来，保证manifest变化不影响vendor变化导致缓存失效,这样默认就是304，现在我通过node把他设置成强缓存了....外加gzip
* 采用路由懒加载

### 适配

* 多端同构webApp, Hybrid，采用 [amfe-flexible@2.x](https://www.npmjs.com/package/amfe-flexible) （相比以前的版本我更倾向于2.x）配合px2rem

* IOS的Safari浏览器和微信webview兼容性和适配问题,此应用未调用设备API

* 以下图片为打包城IOS App后软件运行图，不能后台播放需要IOSER帮助，真机上动画流畅

#### IOS 适配

* iphoneX 真机截图 上下有留白

<img src="./static/WechatIMG505.png" width="50%"><img src="./static/WechatIMG506.png" width="50%">

* IOS系列模拟器正常

![适配iphone 系列，X的刘海暂未处理](./static/WechatIMG507.jpeg)
<img src="./static/WX20171230-154740@2x.png">
<img src="./static/WX20171230-155034@2x.png">
<img src="./static/WX20171230-155124@2x.png">

#### Andriod 适配

试了下腾讯的[weTest](http://wetest.qq.com/product/cloudphone?from=default_automail_new) 收费，没继续用

后来发现  GenyMotion 不准备测试
