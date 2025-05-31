# Geeky-Toad

现代化大改的geek主题！！！

这是一个博客园皮肤，来自 [Cnblog Labs](https://github.com/cnbloglabs/theme-geek) 的个人修改版本，如果喜欢的话你也可以用！

## 修改dependies和语法栈（画饼）

1. 支持所有现代浏览器，**除了** Internet Explorer 11+
2. 将全部js转为ts、严格类型检查等等，避免一些bug的产生
3. 重写了符合ES6+TS标准的acnb的一些库，开源至仓库[acnb-*](https://github.com/Gulfy034?tab=repositories&q=acnb-&type=&language=&sort=)
4. 移除了jQuery的ts定义和全部语法

## 关于loader.min.js

### 从原作者获取源码

1. 在 原作者[guanzan](https://github.com/cnbloglabs/loader) 中clone源码，然后`npm build`
2. 编译好的输出的loader.min.js上传到你的cnblog的自定义javascript中

### 从本仓库获取源码

https://github.com/Gulfy034/acnb-loader.git

## 安装

有两种方式

### 直接安装（无需自行编译主题js）

> [!IMPORTANT]
> 原版的 [点击这里](https://www.yuque.com/awescnb) 查看文档进行安装的方式在这里徐娅一些修改。

1. 需要在 页脚HTML代码 的 script标签 的 src属性 填写你的loader.min.js的地址；
2. 其余按照原版的安装流程继续。

### 自行编译全部内容为一个js文件后加载

1. `npm run build` 后在dist文件夹里选择你编译好的js文件；
2. 把上一个步骤所述的js文件上传到你的网站或是，随后在cnblog的自定义html页首用`script`标签的`src`属性指向你的js文件地址。例如：

   ```html
   <script src="https://yourwebsite.com/yourtheme.js"></script>
   <script>
    const opts = {
        theme: {
            name: "https://guangzan.gitee.io/awescnb/reacg.js",
        },
        // 其他配置自行选择
    };
    $.awesCnb(opts);// 在博客园内的javascript中加载jquery
    </script>
   ```

## 修改后特性

- 💻 兼容桌面、平板、手机
- 🎨 支持自定义主题色
- 🌗 支持深色、浅色模式
- 🥽 评论列表头像显示
- 🎊 支持代码高亮，可跟随深色、浅色模式切换（Markdown）
- 💬 支持代码语言显示（Markdown）
- ✔️ 支持代码复制
- 🥳 表情选择器，支持自定义文字、系统、网络图片表情
- 📑 博文信息显示优化
- 📷 完善的图片预览支持
- 📦 重构博客园相册，支持相片预览
- 🔐 自定义 license、签名
- 🌄 自定义个性签名
- 🔮 自定义网站图标、标题
- ⛳ 支持文章目录自动生成（博客园所有编辑器）
- 🎏 支持自定义背景色、背景图片，支持可重复的背景图片
- ~~✨ 支持炫酷可配置的点击特效（已经移除）~~
- ~~🔊 支持音乐播放器（已经移除）~~
- 🔨 支持工具栏，点赞、评论、评论、收藏...
- 🔔 支持自定义通知
- ~~🧚‍♂️ 支持自定义 live2d 模型（已经移除）~~
- ！完善并且修改部分动画

## 贡献

1. 欢迎 fork！
2. 创建你的分支：git checkout -b your-new-feature
3. 提交你的修改：git commit -m "Add some feature
4. 推送到该分支：git push origin your-new-feature
5. 提交一个 pull request
