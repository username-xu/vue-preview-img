module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "d4fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_img_vue_vue_type_style_index_0_id_8781a2ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("daca");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_img_vue_vue_type_style_index_0_id_8781a2ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_img_vue_vue_type_style_index_0_id_8781a2ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_img_vue_vue_type_style_index_0_id_8781a2ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "daca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e151b10-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/preview-img.vue?vue&type=template&id=8781a2ec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"imgPreview",staticClass:"img-preview"},[_c('div',{staticClass:"preview-box"},[_c('div',{staticClass:"img-box",style:({width:_vm.width + 'px', height: _vm.height + 'px'})},[_c('img',{ref:"imgEl",style:({ 
                    height: _vm.imgHeight +'%', cursor: _vm.isDown ? 'grabbing': 'grab',
                    marginLeft: _vm.newLeft ? _vm.newLeft +'px' : 'auto',
                    marginTop: _vm.newTop ? _vm.newTop +'px' : 30 +'px',
                    transform: 'rotate('+ _vm.rotate * 90 +'deg)'
                }),attrs:{"src":_vm.src},on:{"mousedown":_vm.imgMousedown,"mousemove":_vm.imgMousemove,"mouseup":_vm.imgMouseup}})])]),_c('div',{staticClass:"btn-box"},[_c('div',{staticClass:"btns"},[_c('button',{on:{"click":_vm.imgInversion}},[_c('i',{staticClass:"icon xiangzuoxuanzhuan"})]),_c('button',{on:{"click":_vm.imgForward}},[_c('i',{staticClass:"icon xiangyouxuanzhuan"})]),_c('button',{on:{"click":_vm.imgAmplification}},[_c('i',{staticClass:"icon fangda1"})]),_c('button',{on:{"click":_vm.imgShrink}},[_c('i',{staticClass:"icon suoxiao1"})])])]),_c('div',{staticClass:"viewer-button",on:{"click":_vm.closePreview}},[_c('i',{staticClass:"icon guanbi"})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/preview-img.vue?vue&type=template&id=8781a2ec&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/preview-img.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var preview_imgvue_type_script_lang_js_ = ({
  name: 'preview-img',
  data: function data() {
    return {
      src: '',
      rotate: 0,
      height: 0,
      width: 0,
      imgHeight: 60,
      x: 0,
      y: 0,
      left: 0,
      top: 0,
      newLeft: 0,
      newTop: 0,
      isDown: false
    };
  },
  created: function created() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
  methods: {
    // 正转
    imgForward: function imgForward() {
      this.rotate = this.rotate + 1;
    },
    // 反转
    imgInversion: function imgInversion() {
      this.rotate = this.rotate - 1;
    },
    // 放大
    imgAmplification: function imgAmplification() {
      if (this.imgHeight >= 150) {
        return;
      }

      this.imgHeight += 20;
    },
    // 缩小
    imgShrink: function imgShrink() {
      if (this.imgHeight <= 20) {
        return;
      }

      this.imgHeight -= 20;
    },
    // 拖拽
    imgMousedown: function imgMousedown(e) {
      // 鼠标按下
      // 获取x坐标和y坐标
      this.x = e.clientX;
      this.y = e.clientY; // 获取左部和顶部的偏移量

      this.left = this.$refs.imgEl.offsetLeft;
      this.top = this.$refs.imgEl.offsetTop; // 开启

      this.isDown = true;
    },
    imgMousemove: function imgMousemove(e) {
      // 移动
      if (this.isDown == false) {
        return;
      } // 获取x和y


      var newX = e.clientX;
      var newY = e.clientY; // 计算移动后的左偏移量和顶部的偏移量

      this.newLeft = newX - (this.x - this.left);
      this.newTop = newY - (this.y - this.top); // 阻止图片默认的拖拽事件

      e.preventDefault();
    },
    imgMouseup: function imgMouseup(e) {
      // 鼠标按下
      // 关闭
      this.isDown = false;
    },
    // 关闭
    closePreview: function closePreview() {
      this.rotate = 0;
      this.x = 0;
      this.y = 0;
      this.left = 0;
      this.top = 0;
      this.newLeft = 0;
      this.newTop = 0;
      this.imgHeight = 60;
      this.$refs.imgPreview.remove();
    }
  }
});
// CONCATENATED MODULE: ./packages/preview-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_preview_imgvue_type_script_lang_js_ = (preview_imgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/preview-img.vue?vue&type=style&index=0&id=8781a2ec&lang=scss&scoped=true&
var preview_imgvue_type_style_index_0_id_8781a2ec_lang_scss_scoped_true_ = __webpack_require__("d4fb");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/preview-img.vue






/* normalize component */

var component = normalizeComponent(
  packages_preview_imgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8781a2ec",
  null
  
)

/* harmony default export */ var preview_img = (component.exports);
// CONCATENATED MODULE: ./packages/index.js

var Preview = {}; // 注册Preview

Preview.install = function (Vue) {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  var PreviewConstructor = Vue.extend(preview_img); // 生成一个该子类的实例

  var instance = new PreviewConstructor().$mount(); // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法 

  Vue.prototype.$previewImg = function (_ref) {
    var src = _ref.src;
    instance.src = src;
    document.body.appendChild(instance.$el);
  };
};

/* harmony default export */ var packages_0 = (Preview);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=vue-preview-img.common.js.map