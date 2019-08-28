import PreviewComponent from './preview-img.vue'

const Preview = {};

// 注册Preview
Preview.install = function (Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const PreviewConstructor = Vue.extend(PreviewComponent)
    // 生成一个该子类的实例
    const instance = new PreviewConstructor().$mount();
    
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    Vue.prototype.$previewImg = ({src}) => {
        instance.src = src;
        document.body.appendChild(instance.$el)
    }
}

export default Preview