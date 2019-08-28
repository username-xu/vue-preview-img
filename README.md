# vue-preview-img

基于vue的PC端图片预览组件

[截图](http://pwxr9fta8.bkt.clouddn.com/20190827172640.png)

## 使用方式
1. 安装
```
npm i vue-preview-img --save
```

2. 在main.js中注册
```javascript
import previewImg from 'vue-preview-img'
Vue.use(previewImg)
```

3. 调用
```javascript
// src: 传入图片路径
this.$previewImg({ src: "http://xxxx.jpg" });
```

