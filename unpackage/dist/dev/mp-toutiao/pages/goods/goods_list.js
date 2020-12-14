(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/goods_list"],{

/***/ 361:
/*!*************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fgoods%2Fgoods_list"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _goods_list = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/goods_list.vue */ 362));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_goods_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 362:
/*!******************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& */ 363);
/* harmony import */ var _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_list.vue?vue&type=script&lang=js& */ 365);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& */ 367);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b383cb9",
  null,
  false,
  _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods/goods_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 363:
/*!*************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& */ 364);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 364:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 = _vm.__map(_vm.tabBars, function(item, index) {
    var l0 = _vm.__map(_vm.doctorList, function(i, k) {
      var g0 = Math.round(i.employed_y)
      return {
        $orig: _vm.__get_orig(i),
        g0: g0
      }
    })

    return {
      $orig: _vm.__get_orig(item),
      l0: l0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 365:
/*!*******************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=script&lang=js& */ 366);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 366:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 476));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var goodsShow = function goodsShow() {__webpack_require__.e(/*! require.ensure | components/goodsShow */ "components/goodsShow").then((function () {return resolve(__webpack_require__(/*! ../../components/goodsShow.vue */ 469));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var diary = function diary() {__webpack_require__.e(/*! require.ensure | components/diary */ "components/diary").then((function () {return resolve(__webpack_require__(/*! ../../components/diary.vue */ 511));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =





































































































{
  components: {
    topBar: topBar,
    goodsShow: goodsShow,
    diary: diary },

  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      height: 0,
      barName: 'back', //导航条名称
      topBackgroundColor: '#222222',
      color: '#FFFFFF',
      backImage: '/static/images/return.png',
      title: '商品列表',
      requestUrl: '',
      top_id: 8,
      top_index: 0,
      goods_sort: 0,
      sort_type: 0,
      offset: 0,
      tabBars: [
      {
        name: '商品',
        type: 0 },

      {
        name: '日记',
        type: 1 },

      {
        name: '医生',
        type: 2 },

      {
        name: '视频',
        type: 3 }],


      productLists: [],
      doctorList: [] };

  },
  onReady: function onReady() {
    var that = this;
    // 判定运行平台
    var platform = '';
    that.height = uni.getSystemInfoSync().windowHeight;
    switch (uni.getSystemInfoSync().platform) {
      case 'android':
        // console.log('运行Android上')
        platform = 'android';
        break;
      case 'ios':
        // console.log('运行iOS上')
        platform = 'ios';
        break;
      default:
        // console.log('运行在开发者工具上')
        platform = 'applet';
        break;}

    if (platform == 'applet') {
      // 获取屏幕高度
      uni.getSystemInfo({
        success: function success(res) {
          var menu = uni.getMenuButtonBoundingClientRect();
          that.menuWidth = menu.width;
          that.menuTop = menu.top;
          that.menuHeight = menu.height;
          that.menuLeft = menu.left;
          that.menuBottom = menu.bottom;
        } });

    } else {
      that.menuWidth = 87;
      that.menuTop = 50;
      that.menuHeight = 32;
      that.menuLeft = 278;
      that.menuBottom = 82;
    }
  },
  onReachBottom: function onReachBottom() {
    var that = this;
    that.offset += 1;
    that.getClassList(that.top_id);
  },
  onLoad: function onLoad(option) {
    this.request = this.$request;
    var that = this;
    that.requestUrl = that.request.globalData.requestUrl;
    if (option.name) {
      that.title = option.name;
    }
    that.top_id = option.id;
    that.getClassList(that.top_id, that.top_index);
    console.log(option);
  },
  methods: {
    changTop: function changTop(index) {
      var that = this;
      that.top_index = index;
      if (index == 0) {
        that.productLists = [];
        that.doctorList = [];
        that.offset = 0;
        that.getClassList(that.top_id, that.top_index);
      } else if (index == 1) {
        that.productLists = [];
        that.doctorList = [];
        that.offset = 0;
        that.getClassList(that.top_id, that.top_index);
      } else if (index == 2) {
        that.productLists = [];
        that.doctorList = [];
        that.offset = 0;
        that.getClassList(that.top_id, that.top_index);
      } else
      {
        that.productLists = [];
        that.doctorList = [];
        that.offset = 0;
        that.getClassList(that.top_id, that.top_index);
      }

    },
    getClassList: function getClassList(id, type) {
      var that = this;
      var dataInfo = {
        interfaceId: 'categoryspuzonelist',
        cid: id,
        type: that.top_index,
        sort: that.goods_sort,
        sort_type: that.sort_type,
        offset: that.offset,
        limit: 6 };

      that.request.uniRequest("goods", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          that.title = data.name;
          // that.productLists = data.list
          if (type == 2) {
            if (data.list.length > 0) {
              that.doctorList = that.productLists.concat(data.list);
            } else
            {
              uni.showToast({
                title: '没有更多了!',
                icon: 'none' });

            }
          } else {
            if (data.list.length > 0) {
              that.productLists = that.productLists.concat(data.list);
            } else
            {
              uni.showToast({
                title: '没有更多了!',
                icon: 'none' });

            }
          }

          // console.log(that.productLists)
        }
      });
    },
    // 点赞
    collectLike: function collectLike(id) {var _this = this;
      var videoId = id;
      var data = {
        interfaceId: 'video_collect',
        video_id: videoId,
        status: '0' };

      this.request.uniRequest("/doctor", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          _this.request.showToast('成功');
        }
      });
    },
    // 取消点赞
    cancelLike: function cancelLike(id) {var _this2 = this;
      var videoId = id;
      var data = {
        interfaceId: 'video_collect',
        video_id: videoId,
        status: '1' };

      this.request.uniRequest("/doctor", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          _this2.request.showToast('成功');
        }
      });
    },
    // 医生主页
    goToDoctor: function goToDoctor(doctorId, heading) {
      uni.navigateTo({
        url: "/pages/doctor/doctor_detail?id=".concat(doctorId, "&&heading=").concat(heading) });

    },
    // 点击商品
    gotoGoods: function gotoGoods(id, encrypted_id) {
      uni.navigateTo({
        url: "/pages/goods/goods_detail?sku_id=".concat(id, "&encrypted_id=").concat(encrypted_id) });

    },
    // 咨询
    goToConsult: function goToConsult() {
      console.log('咨询');
      // uni.navigateTo({
      // 	url: `/pages/consultation/consultation`,
      // })
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 367:
/*!***************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& */ 368);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 368:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[361,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZT81MzM2Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3QudnVlPzRlYzMiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZ29vZHMvZ29vZHNfbGlzdC52dWU/NTYxNCIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZT83ZWUxIiwidW5pLWFwcDovLy9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZT9lMTY2Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3QudnVlPzNjZDQiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsbUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1JO0FBQ25JO0FBQzhEO0FBQ0w7QUFDcUM7OztBQUc5RjtBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUsaUdBQU07QUFDUixFQUFFLDBHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQW1xQixDQUFnQixpcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNzR3ZyQjtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQTtBQUdBLGdCQUhBLEVBREE7O0FBTUEsTUFOQSxrQkFNQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTtBQUdBLG1CQUhBO0FBSUEsaUJBSkE7QUFLQSxtQkFMQTtBQU1BLGVBTkE7QUFPQSxxQkFQQSxFQU9BO0FBQ0EsbUNBUkE7QUFTQSxzQkFUQTtBQVVBLDRDQVZBO0FBV0EsbUJBWEE7QUFZQSxvQkFaQTtBQWFBLGVBYkE7QUFjQSxrQkFkQTtBQWVBLG1CQWZBO0FBZ0JBLGtCQWhCQTtBQWlCQSxlQWpCQTtBQWtCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxlQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGVBRkEsRUFMQTs7QUFTQTtBQUNBLGtCQURBO0FBRUEsZUFGQSxFQVRBOztBQWFBO0FBQ0Esa0JBREE7QUFFQSxlQUZBLEVBYkEsQ0FsQkE7OztBQW9DQSxzQkFwQ0E7QUFxQ0Esb0JBckNBOztBQXVDQSxHQTlDQTtBQStDQSxTQS9DQSxxQkErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBWkE7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVJBOztBQVVBLEtBWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBckZBO0FBc0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0ExRkE7QUEyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXJHQTtBQXNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQTNCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLGVBRkE7QUFHQSw0QkFIQTtBQUlBLDZCQUpBO0FBS0EsaUNBTEE7QUFNQSwyQkFOQTtBQU9BLGdCQVBBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsNEJBRkE7O0FBSUE7QUFDQSxXQVZBLE1BVUE7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BN0JBO0FBOEJBLEtBckVBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQSx5QkFGQTtBQUdBLG1CQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBbkZBO0FBb0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQSx5QkFGQTtBQUdBLG1CQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBakdBO0FBa0dBO0FBQ0E7QUFDQTtBQUNBLDZGQURBOztBQUdBLEtBdkdBO0FBd0dBO0FBQ0E7QUFDQTtBQUNBLGtHQURBOztBQUdBLEtBN0dBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEhBLEVBdEdBLEU7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFBO0FBQUE7QUFBcytCLENBQWdCLGc4QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTEvQjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2dvb2RzL2dvb2RzX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvZ29vZHMvZ29vZHNfbGlzdC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYjM4M2NiOSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2dvb2RzX2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiMzgzY2I5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGIzODNjYjlcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZ29vZHMvZ29vZHNfbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dvb2RzX2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiMzgzY2I5JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDEgPSBfdm0uX19tYXAoX3ZtLnRhYkJhcnMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyIGwwID0gX3ZtLl9fbWFwKF92bS5kb2N0b3JMaXN0LCBmdW5jdGlvbihpLCBrKSB7XG4gICAgICB2YXIgZzAgPSBNYXRoLnJvdW5kKGkuZW1wbG95ZWRfeSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgICRvcmlnOiBfdm0uX19nZXRfb3JpZyhpKSxcbiAgICAgICAgZzA6IGcwXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAkb3JpZzogX3ZtLl9fZ2V0X29yaWcoaXRlbSksXG4gICAgICBsMDogbDBcbiAgICB9XG4gIH0pXG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMTogbDFcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dvb2RzX2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dvb2RzX2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiZ29vZHNcIj4gXHJcblx0XHQ8dG9wQmFyIGNsYXNzPVwidG9wQmFyXCIgOnRvcEJhY2tncm91bmRDb2xvcj0ndG9wQmFja2dyb3VuZENvbG9yJ1xyXG5cdFx0IDpjb2xvcj0nY29sb3InIDpiYWNrSW1hZ2U9J2JhY2tJbWFnZScgOmJhck5hbWU9J2Jhck5hbWUnXHJcblx0XHQgOnRpdGxlPSd0aXRsZScgOm1lbnVXaWR0aD0nbWVudVdpZHRoJyA6bWVudVRvcD0nbWVudVRvcCcgXHJcblx0XHQgOm1lbnVIZWlnaHQ9J21lbnVIZWlnaHQnIDptZW51TGVmdD0nbWVudUxlZnQnIDptZW51Qm90dG9tPSdtZW51Qm90dG9tJz5cclxuXHRcdDwvdG9wQmFyPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3AtbGlzdFwiIDpzdHlsZT1cIlt7J3RvcCc6bWVudUJvdHRvbSsxMCsncHgnfV1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0LWl0ZW1cIlxyXG5cdFx0XHQgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gdGFiQmFyc1wiIDprZXk9J2luZGV4JyBcclxuXHRcdFx0IDpjbGFzcz1cInsnY2hhbmdlLWNsYXNzJyA6IHRvcF9pbmRleD09aW5kZXh9XCJcclxuXHRcdFx0IEB0YXA9J2NoYW5nVG9wKGluZGV4KSc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLW5hbWVcIj57e2l0ZW0ubmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFiLWxpbmVcIiB2LXNob3c9XCJ0b3BfaW5kZXg9PWluZGV4XCI+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtbGlzdC1jb250ZW50XCIgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOm1lbnVCb3R0b20rNTArJ3B4JywnaGVpZ2h0JzpoZWlnaHQtbWVudUJvdHRvbS01MCsncHgnfV1cIj5cdFx0XHRcclxuXHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15ICBjbGFzcz1cIml0ZW0tbGlzdC1jb250ZW50XCIgPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1jb250ZW50IGVuZC1jb250XCIgOmNsYXNzPVwie2Rpczp0b3BfaW5kZXg9PWluZGV4fVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHRhYkJhcnNcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpcy1pdGVtLWNvbnRlbnRcIiB2LWlmPVwiaXRlbS50eXBlPT0wXCI+XHJcblx0XHRcdFx0XHRcdDxnb29kc1Nob3cgOmJvcmRlclJhZGl1cz0yNFxyXG5cdFx0XHRcdFx0XHQgOnJlcXVlc3RVcmw9J3JlcXVlc3RVcmwnIDp3aWR0aD0zNTAgXHJcblx0XHRcdFx0XHRcdCA6cG9yZHVjdExpc3Q9J3Byb2R1Y3RMaXN0cydcclxuXHRcdFx0XHRcdFx0ID5cclxuXHRcdFx0XHRcdFx0PC9nb29kc1Nob3c+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXMtaXRlbS1jb250ZW50XCIgdi1lbHNlLWlmPVwiaXRlbS50eXBlPT0xXCI+XHJcblx0XHRcdFx0XHRcdDxkaWFyeSA6ZGlhcnlMaXN0PVwicHJvZHVjdExpc3RzXCIgOnJlcXVlc3RVcmw9J3JlcXVlc3RVcmwnPjwvZGlhcnk+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXMtaXRlbS1jb250ZW50LXR5cGVcIiB2LWVsc2UtaWY9XCJpdGVtLnR5cGU9PTJcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzLWRvY3RvclwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3dpcGVyLWl0ZW1cIiB2LWZvcj1cIihpLGspIGluIGRvY3Rvckxpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3dpcGVyLWl0ZW0tY29udGVudFwiPlx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS10b3AtY29udGVudFwiIEB0YXA9J2dvVG9Eb2N0b3IoaS5pZCxyZXF1ZXN0VXJsK2kuaGVhZGluZyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZC1wb3J0cmFpdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaGVhZGluZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1pZGRsZS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1pZGRsZS1kb2N0b3ItbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e2kubmFtZX19IDx0ZXh0Pnt7aS56aGljaGVuZ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbXBsb3llZF90aW1lLWNhc2VfbnVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wbG95ZWRfdGltZVwiPiDku47kuJrnu4/pqow6e3tNYXRoLnJvdW5kKGkuZW1wbG95ZWRfeSl9feW5tDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXNlX251bVwiPuahiOWIl+aVsDp7e2kuY2FzZV9udW19fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19jYXRlZ29yeVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzX2NhdGVnb3J5LXRpdGxlXCI+5pOF6ZW/PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz0nZ29vZHNfY2F0ZWdvcnktaXRlbScgdi1mb3I9XCIoaXMsaW5kZXgpIGluIGkuZ29vZHNfcHJvamVjdFwiIDprZXk9J2luZGV4Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e2lzfX0g44CBXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG9jdG9yX3ZpZXdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb2N0b3Jfdmlld19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9J2RvY3Rvcl92aWV3X3RpdGxlJz7op4Lngrk8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aWV3X2NvbnRlbnRcIj57e2kudmlld319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnN1bHRcIiBAdGFwPSdnb1RvQ29uc3VsdCc+5ZKo6K+iPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNvbW1lbmRlZF9nb29kc1wiXHJcblx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nZ290b0dvb2RzKGkucmVjb21tZW5kZWRfZ29vZHMuaWQsaS5yZWNvbW1lbmRlZF9nb29kcy5lbmNyeXB0ZWRfaWQpJyB2LWlmPVwiaS5yZWNvbW1lbmRlZF9nb29kcyE9JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc190aXRsZVwiPuaOqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb3NzX2NvbnRlbnRcIj57e2kucmVjb21tZW5kZWRfZ29vZHMuZ29vZHNfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHNfcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNhbGVfd2VpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e2kucmVjb21tZW5kZWRfZ29vZHMuc2FsZV93ZWlnaHQraS5yZWNvbW1lbmRlZF9nb29kcy50YWtlX3N0b3JlfX3kurrpooTnuqZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzYWxlX3ByaWNlXCI+IDx0ZXh0Pu+/pTwvdGV4dD4ge3tpLnJlY29tbWVuZGVkX2dvb2RzLnNhbGVfcHJpY2V9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXNfaG90XCIgQHRhcD0nZ290b0dvb2RzKGkuaG90X2dvb2RzLmlkLGkuaG90X2dvb2RzLmVuY3J5cHRlZF9pZCknIHYtaWY9XCJpLmhvdF9nb29kcyE9JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpc19ob3RfdGl0bGVcIj7ng608L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29zc19jb250ZW50XCI+e3tpLmhvdF9nb29kcy5nb29kc19uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2FsZV93ZWlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQge3tpLmhvdF9nb29kcy5zYWxlX3dlaWdodCtpLmhvdF9nb29kcy50YWtlX3N0b3JlfX3kurrpooTnuqZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzYWxlX3ByaWNlXCI+IDx0ZXh0Pu+/pTwvdGV4dD4ge3tpLmhvdF9nb29kcy5zYWxlX3ByaWNlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpcy1pdGVtLWNvbnRlbnQtdmlkZW9cIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdHt7aXRlbS5uYW1lfX1cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdG9wQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RvcEJhci52dWVcIjtcclxuXHRpbXBvcnQgZ29vZHNTaG93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dvb2RzU2hvdy52dWVcIjtcclxuXHRpbXBvcnQgZGlhcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFyeS52dWUnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dG9wQmFyLFxyXG5cdFx0XHRnb29kc1Nob3csXHJcblx0XHRcdGRpYXJ5LFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVudVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1lbnVUb3A6IDAsXHJcblx0XHRcdFx0bWVudUhlaWdodDogMCxcclxuXHRcdFx0XHRtZW51TGVmdDogMCxcclxuXHRcdFx0XHRtZW51Qm90dG9tOiAwLFxyXG5cdFx0XHRcdGhlaWdodDogMCxcclxuXHRcdFx0XHRiYXJOYW1lOiAnYmFjaycsIC8v5a+86Iiq5p2h5ZCN56ewXHJcblx0XHRcdFx0dG9wQmFja2dyb3VuZENvbG9yOiAnIzIyMjIyMicsXHJcblx0XHRcdFx0Y29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRiYWNrSW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9yZXR1cm4ucG5nJyxcclxuXHRcdFx0XHR0aXRsZTogJ+WVhuWTgeWIl+ihqCcsXHJcblx0XHRcdFx0cmVxdWVzdFVybDogJycsXHJcblx0XHRcdFx0dG9wX2lkOjgsXHJcblx0XHRcdFx0dG9wX2luZGV4OjAsXHJcblx0XHRcdFx0Z29vZHNfc29ydDowLFxyXG5cdFx0XHRcdHNvcnRfdHlwZTowLFxyXG5cdFx0XHRcdG9mZnNldDowLFxyXG5cdFx0XHRcdHRhYkJhcnM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgScsXHJcblx0XHRcdFx0XHRcdHR5cGU6IDBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfml6XorrAnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAxXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5Yy755SfJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogMlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+inhumikScsXHJcblx0XHRcdFx0XHRcdHR5cGU6IDNcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRwcm9kdWN0TGlzdHM6W10sXHJcblx0XHRcdFx0ZG9jdG9yTGlzdDpbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyDliKTlrprov5DooYzlubPlj7BcclxuXHRcdFx0bGV0IHBsYXRmb3JtID0gJydcclxuXHRcdFx0dGhhdC5oZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgO1xyXG5cdFx0XHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XHJcblx0XHRcdFx0Y2FzZSAnYW5kcm9pZCc6XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn6L+Q6KGMQW5kcm9pZOS4iicpXHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhbmRyb2lkJ1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaW9zJzpcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfov5DooYxpT1PkuIonKVxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnaW9zJ1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfov5DooYzlnKjlvIDlj5HogIXlt6XlhbfkuIonKVxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnYXBwbGV0J1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBsYXRmb3JtID09ICdhcHBsZXQnKSB7XHJcblx0XHRcdFx0Ly8g6I635Y+W5bGP5bmV6auY5bqmXHJcblx0XHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBtZW51ID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVRvcCA9IG1lbnUudG9wXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IG1lbnUuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gbWVudS5ib3R0b21cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoYXQubWVudVdpZHRoID0gODdcclxuXHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSA1MFxyXG5cdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IDMyXHJcblx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IDI3OFxyXG5cdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IDgyXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5vZmZzZXQgKz0gMTtcclxuXHRcdFx0dGhhdC5nZXRDbGFzc0xpc3QodGhhdC50b3BfaWQpXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uKSB7XHJcblx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3RcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoYXQucmVxdWVzdFVybCA9IHRoYXQucmVxdWVzdC5nbG9iYWxEYXRhLnJlcXVlc3RVcmxcclxuXHRcdFx0aWYob3B0aW9uLm5hbWUpe1xyXG5cdFx0XHRcdHRoYXQudGl0bGUgPSBvcHRpb24ubmFtZVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoYXQudG9wX2lkID0gb3B0aW9uLmlkXHJcblx0XHRcdHRoYXQuZ2V0Q2xhc3NMaXN0KHRoYXQudG9wX2lkLHRoYXQudG9wX2luZGV4KVxyXG5cdFx0XHRjb25zb2xlLmxvZyhvcHRpb24pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaGFuZ1RvcDpmdW5jdGlvbihpbmRleCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC50b3BfaW5kZXggPSBpbmRleFxyXG5cdFx0XHRcdGlmKGluZGV4PT0wKXtcclxuXHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gW11cclxuXHRcdFx0XHRcdHRoYXQuZG9jdG9yTGlzdCA9IFtdXHJcblx0XHRcdFx0XHR0aGF0Lm9mZnNldCA9IDBcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q2xhc3NMaXN0KHRoYXQudG9wX2lkLHRoYXQudG9wX2luZGV4KVxyXG5cdFx0XHRcdH1lbHNlIGlmKGluZGV4PT0xKXtcclxuXHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gW11cclxuXHRcdFx0XHRcdHRoYXQuZG9jdG9yTGlzdCA9IFtdXHJcblx0XHRcdFx0XHR0aGF0Lm9mZnNldCA9IDBcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q2xhc3NMaXN0KHRoYXQudG9wX2lkLHRoYXQudG9wX2luZGV4KVxyXG5cdFx0XHRcdH1lbHNlIGlmKGluZGV4PT0yKXtcclxuXHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gW11cclxuXHRcdFx0XHRcdHRoYXQuZG9jdG9yTGlzdCA9IFtdXHJcblx0XHRcdFx0XHR0aGF0Lm9mZnNldCA9IDBcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q2xhc3NMaXN0KHRoYXQudG9wX2lkLHRoYXQudG9wX2luZGV4KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0dGhhdC5wcm9kdWN0TGlzdHMgPSBbXVxyXG5cdFx0XHRcdFx0dGhhdC5kb2N0b3JMaXN0ID0gW11cclxuXHRcdFx0XHRcdHRoYXQub2Zmc2V0ID0gMFxyXG5cdFx0XHRcdFx0dGhhdC5nZXRDbGFzc0xpc3QodGhhdC50b3BfaWQsdGhhdC50b3BfaW5kZXgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDbGFzc0xpc3Q6ZnVuY3Rpb24oaWQsdHlwZSl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvPXtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOidjYXRlZ29yeXNwdXpvbmVsaXN0JyxcclxuXHRcdFx0XHRcdGNpZDppZCxcclxuXHRcdFx0XHRcdHR5cGU6dGhhdC50b3BfaW5kZXgsXHJcblx0XHRcdFx0XHRzb3J0OnRoYXQuZ29vZHNfc29ydCxcclxuXHRcdFx0XHRcdHNvcnRfdHlwZTp0aGF0LnNvcnRfdHlwZSxcclxuXHRcdFx0XHRcdG9mZnNldDp0aGF0Lm9mZnNldCxcclxuXHRcdFx0XHRcdGxpbWl0OjZcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC50aXRsZSA9IGRhdGEubmFtZVxyXG5cdFx0XHRcdFx0XHQvLyB0aGF0LnByb2R1Y3RMaXN0cyA9IGRhdGEubGlzdFxyXG5cdFx0XHRcdFx0XHRpZih0eXBlPT0yKXtcclxuXHRcdFx0XHRcdFx0XHRpZihkYXRhLmxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5kb2N0b3JMaXN0ID0gdGhhdC5wcm9kdWN0TGlzdHMuY29uY2F0KGRhdGEubGlzdClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon5rKh5pyJ5pu05aSa5LqGIScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0aWYoZGF0YS5saXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gdGhhdC5wcm9kdWN0TGlzdHMuY29uY2F0KGRhdGEubGlzdClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon5rKh5pyJ5pu05aSa5LqGIScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5wcm9kdWN0TGlzdHMpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K56LWeXHJcblx0XHRcdGNvbGxlY3RMaWtlOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB2aWRlb0lkID0gaWRcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAndmlkZW9fY29sbGVjdCcsXHJcblx0XHRcdFx0XHR2aWRlb19pZDogdmlkZW9JZCxcclxuXHRcdFx0XHRcdHN0YXR1czogJzAnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiL2RvY3RvclwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVxdWVzdC5zaG93VG9hc3QoJ+aIkOWKnycpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y+W5raI54K56LWeXHJcblx0XHRcdGNhbmNlbExpa2U6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdFx0bGV0IHZpZGVvSWQgPSBpZFxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICd2aWRlb19jb2xsZWN0JyxcclxuXHRcdFx0XHRcdHZpZGVvX2lkOiB2aWRlb0lkLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiAnMSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCIvZG9jdG9yXCIsIGRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0LnNob3dUb2FzdCgn5oiQ5YqfJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDljLvnlJ/kuLvpobVcclxuXHRcdFx0Z29Ub0RvY3RvcjpmdW5jdGlvbihkb2N0b3JJZCxoZWFkaW5nKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZG9jdG9yL2RvY3Rvcl9kZXRhaWw/aWQ9JHtkb2N0b3JJZH0mJmhlYWRpbmc9JHtoZWFkaW5nfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75ZWG5ZOBXHJcblx0XHRcdGdvdG9Hb29kczogZnVuY3Rpb24oaWQsZW5jcnlwdGVkX2lkKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbD9za3VfaWQ9JHtpZH0mZW5jcnlwdGVkX2lkPSR7ZW5jcnlwdGVkX2lkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ZKo6K+iXHJcblx0XHRcdGdvVG9Db25zdWx0OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+WSqOivoicpXHJcblx0XHRcdFx0Ly8gdW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdC8vIFx0dXJsOiBgL3BhZ2VzL2NvbnN1bHRhdGlvbi9jb25zdWx0YXRpb25gLFxyXG5cdFx0XHRcdC8vIH0pXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0Lmdvb2RzLWxpc3QtY29udGVudHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0fVxyXG5cdC50b3AtbGlzdHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHotaW5kZXg6IDExMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0Lmxpc3QtaXRlbXtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAxcnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5saXN0LWl0ZW06bGFzdC1jaGlsZHtcclxuXHRcdGJvcmRlci1yaWdodDogMDtcclxuXHR9XHJcblx0LmNoYW5nZS1jbGFzc3tcclxuXHRcdGNvbG9yOiAjRkEzNDc1O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdC50YWItbGluZSB7XHJcblx0XHRoZWlnaHQ6IDRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkEzNDc1O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAycnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtMnJweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQuZW5kLWNvbnQge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0XHJcblx0LmRpcyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblx0LnRoaXMtaXRlbS1jb250ZW50e1xyXG5cdFx0cGFkZGluZzogMzBycHggMjBycHggMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0fVxyXG5cdC50aGlzLWl0ZW0tY29udGVudC10eXBle1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHR9XHJcblx0LnN3aXBlci1pdGVtIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiAzMHJweCA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5zd2lwZXItaXRlbS1jb250ZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5pdGVtLXRvcC1jb250ZW50e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5oZWFkLXBvcnRyYWl0IGltYWdlIHtcclxuXHRcdGhlaWdodDogMTIwcnB4O1xyXG5cdFx0d2lkdGg6IDEyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDYwcnB4O1xyXG5cdH1cclxuXHQubWlkZGxlLWNvbnRlbnR7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0bWFyZ2luOiAwIDEwcnB4O1xyXG5cdH1cclxuXHQubWlkZGxlLWRvY3Rvci1uYW1le1xyXG5cdFx0Zm9udC1zaXplOiAzNHJweDtcclxuXHRcdHdpZHRoOiA4MCU7XHJcblx0fVxyXG5cdC5taWRkbGUtZG9jdG9yLW5hbWUgdGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cdC5lbXBsb3llZF90aW1lLWNhc2VfbnVte1xyXG5cdFx0d2lkdGg6IDcwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDE1cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5nb29kc19jYXRlZ29yeXtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHQuZ29vZHNfY2F0ZWdvcnktdGl0bGV7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjRycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0Ym9yZGVyOiBzb2xpZCAxcnB4ICNlODVjOWU7XHJcblx0XHRjb2xvcjogI2U4NWM5ZTtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuZW5kX2NvbnR7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuZG9jdG9yX3ZpZXd7XHJcblx0XHR3aWR0aDogMTAwJTtcdFxyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblx0LmRvY3Rvcl92aWV3X2NvbnRlbnR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHQuZG9jdG9yX3ZpZXdfdGl0bGV7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjRycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0Ym9yZGVyOiBzb2xpZCAxcnB4ICM2ODllZmI7XHRcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogIzY4OWVmYjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cdC5yZWNvbW1lbmRlZF9nb29kc3tcclxuXHRcdHdpZHRoOiA1NzBycHg7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA1NnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1NnJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyOHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDI3cnB4O1xyXG5cdH1cclxuXHQuZ29vZHNfbGVmdHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuZ29vZHNfdGl0bGV7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmN2IxYTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHQuZ29vc3NfY29udGVudHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHR9XHJcblx0Lmdvb2RzX3JpZ2h0e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5zYWxlX3dlaWdodHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdG1pbi13aWR0aDogMTAwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0fVxyXG5cdC5zYWxlX3ByaWNle1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjY2ZiZTg1O1xyXG5cdFx0XHJcblx0fVxyXG5cdC5zYWxlX3ByaWNlIHRleHR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQuaXNfaG90e1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0XHR3aWR0aDogNTcwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdGhlaWdodDogNTZycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNTZycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjhycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cdC5pc19ob3RfdGl0bGV7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2RhMTI5ZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1x0XHJcblx0fVxyXG5cdC5jb25zdWx0e1xyXG5cdFx0d2lkdGg6IDExMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NnJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNjZmJlODU7XHJcblx0XHRjb2xvcjogI2NmYmQ4NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRvcDogIDA7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZ29vZHNfbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjM4M2NiOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiMzgzY2I5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNzkwNzYwNDMzOFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=