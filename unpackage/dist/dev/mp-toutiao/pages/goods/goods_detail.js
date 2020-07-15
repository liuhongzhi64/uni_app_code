(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/goods_detail"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fgoods%2Fgoods_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _goods_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/goods_detail.vue */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_goods_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 12 */
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods_detail.vue?vue&type=template&id=098a7e2c&scoped=true& */ 13);
/* harmony import */ var _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_detail.vue?vue&type=script&lang=js& */ 15);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_detail_vue_vue_type_style_index_0_id_098a7e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods_detail.vue?vue&type=style&index=0&id=098a7e2c&scoped=true&lang=css& */ 17);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "098a7e2c",
  null,
  false,
  _goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods/goods_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_detail.vue?vue&type=template&id=098a7e2c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_detail.vue?vue&type=template&id=098a7e2c&scoped=true& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_098a7e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_detail.vue?vue&type=template&id=098a7e2c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_detail.vue?vue&type=script&lang=js& */ 16);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 237));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =




























































































































































































































































{
  components: {
    topBar: topBar },

  data: function data() {
    return {
      goodsName: '', //商品名
      barTopH: 0,
      rightDistance: 0,
      lineHeight: 0,
      barName: 'particularsPage', //导航条名称
      height: 0, //
      swiperList: [{
        id: 0,
        url: '../../static/images/test.jpg' },

      {
        id: 1,
        url: '../../static/images/test.jpg' }],


      intervalTime: 3000, //自动切换时间间隔
      durationTime: 1000, //	滑动动画时长
      carts: 3, //购物车
      couponsList: ['首单必减', '满20000减2000', '支付有礼'], //优惠卷
      discountsList: [
      { name: '限购', content: '该商品购买1件时享受单件￥19800，超出数量不再有效' },
      { name: '积分', content: '购买返积分' },
      { name: '喵豆', content: '购买返喵豆' },
      { name: '会员权益', content: '会员95折，并可与满减、券等优惠叠加使价格更加美丽' },
      { name: '优惠套装', content: '该商品共有1个优惠套装' },
      { name: '收单立减', content: '新人首单立减50元' }],
      //优惠政策
      certificateList: [
      { name: '中国5A级医美机构', url: '../../static/images/19.png' },
      { name: '德国莱茵TUV-SQS国际认证', url: '../../static/images/19.png' },
      { name: '四级整形资质医院', url: '../../static/images/19.png' },
      { name: '中国十大行业名牌', url: '../../static/images/19.png' }],
      //相关证书
      productList: [
      {
        url: '../../static/images/19.png',
        content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
        productPrice: '19800', //价格
        subscribe: 477, //预约
        goodReputation: '98', //好评
        closed: false,
        labelList: ['眼部美容', '眼部'] //标签
      },
      {
        url: '../../static/images/20.png',
        content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
        productPrice: '19800', //价格
        subscribe: 477, //预约
        goodReputation: '98', //好评
        closed: false,
        labelList: ['眼部美容', '眼部'] //标签
      },
      {
        url: '../../static/images/21.png',
        content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
        productPrice: '19800', //价格
        subscribe: 477, //预约
        goodReputation: '98', //好评
        closed: true,
        labelList: ['眼部美容', '眼部'] //标签
      }]
      //相关商品
    };
  },
  onLoad: function onLoad(option) {
    var that = this;
    that.goodsName = option.goods;
    that.height = uni.getSystemInfoSync().screenHeight * 1.6;
    console.log(that.height);
    console.log(option);
  },
  onReady: function onReady() {
    var that = this;
    var pageHeight = 0;
    // 获取屏幕高度
    uni.getSystemInfo({
      success: function success(res) {
        pageHeight = res.windowHeight;
        console.log('pageHeight', pageHeight);
        var menu = uni.getMenuButtonBoundingClientRect();
        that.rightDistance = menu.width;
        that.barTopH = menu.top;
        that.lineHeight = menu.height;
      } });

  },
  methods: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 17 */
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_detail.vue?vue&type=style&index=0&id=098a7e2c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_098a7e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_detail.vue?vue&type=style&index=0&id=098a7e2c&scoped=true&lang=css& */ 18);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_098a7e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_098a7e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_098a7e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_098a7e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_098a7e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_detail.vue?vue&type=style&index=0&id=098a7e2c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[11,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbC52dWU/NGYyOSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19kZXRhaWwudnVlP2Y0N2QiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZ29vZHMvZ29vZHNfZGV0YWlsLnZ1ZT9iZThkIiwidW5pLWFwcDovLy9wYWdlcy9nb29kcy9nb29kc19kZXRhaWwudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbC52dWU/OTAzNyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19kZXRhaWwudnVlPzVhYzciXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSwwRztBQUNBQSxVQUFVLENBQUNDLHFCQUFELENBQVYsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFJO0FBQ3JJO0FBQ2dFO0FBQ0w7QUFDcUM7OztBQUdoRztBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVBQUUsbUdBQU07QUFDUixFQUFFLDRHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQXFxQixDQUFnQixtcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM2UHpyQjtBQUNBO0FBQ0Esa0JBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxtQkFEQSxFQUNBO0FBQ0EsZ0JBRkE7QUFHQSxzQkFIQTtBQUlBLG1CQUpBO0FBS0EsZ0NBTEEsRUFLQTtBQUNBLGVBTkEsRUFNQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLDJDQUZBOztBQUlBO0FBQ0EsYUFEQTtBQUVBLDJDQUZBLEVBSkEsQ0FQQTs7O0FBZ0JBLHdCQWhCQSxFQWdCQTtBQUNBLHdCQWpCQSxFQWlCQTtBQUNBLGNBbEJBLEVBa0JBO0FBQ0Esa0RBbkJBLEVBbUJBO0FBQ0E7QUFDQSw0REFEQTtBQUVBLHNDQUZBO0FBR0Esc0NBSEE7QUFJQSw0REFKQTtBQUtBLDhDQUxBO0FBTUEsNENBTkEsQ0FwQkE7QUEyQkE7QUFDQTtBQUNBLDhEQURBO0FBRUEsb0VBRkE7QUFHQSw2REFIQTtBQUlBLDZEQUpBLENBNUJBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBLHlDQURBO0FBRUEsOENBRkEsRUFFQTtBQUNBLDZCQUhBLEVBR0E7QUFDQSxzQkFKQSxFQUlBO0FBQ0EsNEJBTEEsRUFLQTtBQUNBLHFCQU5BO0FBT0EsaUNBUEEsQ0FPQTtBQVBBLE9BREE7QUFVQTtBQUNBLHlDQURBO0FBRUEsOENBRkEsRUFFQTtBQUNBLDZCQUhBLEVBR0E7QUFDQSxzQkFKQSxFQUlBO0FBQ0EsNEJBTEEsRUFLQTtBQUNBLHFCQU5BO0FBT0EsaUNBUEEsQ0FPQTtBQVBBLE9BVkE7QUFtQkE7QUFDQSx5Q0FEQTtBQUVBLDhDQUZBLEVBRUE7QUFDQSw2QkFIQSxFQUdBO0FBQ0Esc0JBSkEsRUFJQTtBQUNBLDRCQUxBLEVBS0E7QUFDQSxvQkFOQTtBQU9BLGlDQVBBLENBT0E7QUFQQSxPQW5CQTtBQTRCQTtBQTlEQTtBQWdFQSxHQXJFQTtBQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTVFQTtBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBOztBQVVBLEdBM0ZBO0FBNEZBLGFBNUZBLEU7Ozs7Ozs7Ozs7OztBQzdQQTtBQUFBO0FBQUE7QUFBQTtBQUF3K0IsQ0FBZ0IsazhCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E1L0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9nb29kcy9nb29kc19kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvZ29vZHMvZ29vZHNfZGV0YWlsLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2dvb2RzX2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk4YTdlMmMmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9nb29kc19kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb29kc19kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2dvb2RzX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOThhN2UyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA5OGE3ZTJjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dvb2RzX2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk4YTdlMmMmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dvb2RzX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJnb29kc19kZXRhaWxcIj5cclxuXHRcdDx0b3BCYXIgY2xhc3M9XCJ0b3BCYXJcIiA6YmFyTmFtZT0nYmFyTmFtZScgOmJhclRvcEg9J2JhclRvcEgnIDpyaWdodERpc3RhbmNlPSdyaWdodERpc3RhbmNlJyA6bGluZUhlaWdodD0nbGluZUhlaWdodCc+PC90b3BCYXI+XHJcblxyXG5cdFx0PCEtLSDkuLvkvZPlhoXlrrkgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15IDpzdHlsZT1cIidoZWlnaHQ6JytoZWlnaHQgKydycHgnXCI+XHJcblx0XHRcdDwhLS0g6K6+572u55qE5Yid5aeL6Lez6L2s6L+H5p2l55qE5YC877yM5ZCO5pyf5Yig6ZmkIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImRlZmF1bHRcIj4ge3tnb29kc05hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5aS06YOo6L2u5pKtIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRvcFN3aXBlclwiPlxyXG5cdFx0XHRcdDx2aWV3IGlkPVwidG9wU3dpcGVyXCIgdi1pZj1cInN3aXBlckxpc3RcIj5cclxuXHRcdFx0XHRcdDxzd2lwZXIgY2xhc3M9XCJ0b3Atc3dpcGVyXCIgaW5kaWNhdG9yLWRvdHMgaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcj1cIiNmZmZmZmZcIiBhdXRvcGxheSA6aW50ZXJ2YWw9J2ludGVydmFsVGltZSdcclxuXHRcdFx0XHRcdCA6ZHVyYXRpb249XCJkdXJhdGlvblRpbWVcIiBjaXJjdWxhcj5cclxuXHRcdFx0XHRcdFx0PHN3aXBlci1pdGVtIHYtZm9yPVwiKGksaW5kZXgpIGluIHN3aXBlckxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcC1zd2lwZXItaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpLnVybFwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0XHRcdDwvc3dpcGVyPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDmtLvliqjoioLml6UgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHlcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8wLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOS7t+agvOOAgeS8mOaDoOWNt+OAgeaPkOmGkuOAgeS7i+e7jeOAgemihuWPlueahOWNt+S7i+e7jSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0cy1pbnRyb2R1Y3Rpb25cIj5cclxuXHRcdFx0XHQ8IS0tIOeOsOWcqOS7t+agvOOAgeS8muWRmOS7t+OAgemZjeS7t+mAmuefpeOAgeaUtuiXjyAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLWRlcHJlY2lhdGUtY29sbGVjdFwiPlxyXG5cdFx0XHRcdFx0PCEtLSDnjrDlnKjku7fmoLzjgIHkvJrlkZjku7cgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmV3LXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+77+lPC90ZXh0PiA3ODAwMFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiVklQLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJWSVAtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx06ZK75Y2hXHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0Pu+/pTM4ODAwPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOmZjeS7t+mAmuefpeOAgeaUtuiXjyAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVwcmVjaWF0ZS1jb2xsZWN0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVwcmVjaWF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVtaW5kLWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcmVtaW5kLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlbWluZC10ZXh0XCI+IOmZjeS7t+mAmuefpSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0LWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY29sbGVjdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0LXRleHRcIj4g5pS26JePIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOS7peWJjeeahOS7t+agvCAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1hcmtldC1wcmljZVwiPiDluILlnLrku7cgPHRleHQ+77+lOTczMDA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWQhOenjeWNtyAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvdXBvbnNcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY291cG9uc0l0ZW1cIiB2LWZvcj1cIihpLGspIGluIGNvdXBvbnNMaXN0XCIgOmtleT1cImtcIj4ge3tpfX0gPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOeDreWNluaPkOmGkiAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvdC1zYWxlLXJlbWluZFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJob3Qtc2FsZS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG90LXNhbGVcIj4g6aKE54Ot5LitIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJob3Qtc2FsZS1yZWNvbW1lbmRcIj4g6K+l5ZWG5ZOBNuaciDE45pelIDk6MDA6MDDlvIDlp4vllK7ljZblk6Z+IDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVtaW5kLW1lXCI+IOaPkOmGkuaIkSA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5ZWG5ZOB5ZCN56ewIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvdWN0LW5hbWVcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGFiZWwtbmFtZVwiPiA2MTjnibnmg6AgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHTmiJHmmK/llYblk4HlkI0s5oiR5piv5ZWG5ZOB5ZCNLOaIkeaYr+WVhuWTgeWQjSzmiJHmmK/llYblk4HlkI0s5oiR5piv5ZWG5ZOB5ZCNLOaIkeaYr+WVhuWTgeWQjSzmiJHmmK/llYblk4HlkI0s5oiR5piv5ZWG5ZOB5ZCNLOaIkeaYr+WVhuWTgeWQjSxcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnZXQtY291cG9uXCI+XHJcblx0XHRcdFx0XHTjgJDpooblj5bjgJHmlrDlrqLpoobliLjlh48zMOWFg++8geOAkOa7oTEyODAw5YWD6YCB44CR5Lu35YC8MjM55YWDSELvvIgy54mH6KOF77yJ6Z2i6Iac5LiA55uS77yB5ruhMzY4MDDlhYPpgIHjgJHku7flgLw5ODDlhYPljY7moZHkv53liKnvvIg154mH6KOF77yJ6Z2i6Iac5LiA55uS77yb44CQ5ruhMTI4MDDlhYPpgIHjgJHku7dcclxuXHRcdFx0XHRcdCAg5YC8MjM55YWDSELvvIgy54mH6KOF77yJ6Z2i6Iac5LiA55uS77yBPHRleHQ+5p+l55yL44CLPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDkvJjmg6AgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHMtdGl0bGVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLW1vcmVcIj4g5LyY5oOgIDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibW9yZVwiPiDmm7TlpJrjgIsgPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOS8mOaDoOaUv+etliAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1wb2xpY3lcIiB2LWZvcj1cIihpLGspIGluIGRpc2NvdW50c0xpc3RcIiA6a2V5PVwia1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb2xpY3ktbmFtZVwiPiB7e2kubmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9saWN5LWNvbnRlbnRcIj4ge3tpLmNvbnRlbnR9fSA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOebuOWFs+ivgeS5piAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjZXJ0aWZpY2F0ZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VydGlmaWNhdGUtZGV0YWlsc1wiIHYtZm9yPVwiKGksaykgaW4gY2VydGlmaWNhdGVMaXN0XCIgOmtleT1cImtcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VydGlmaWNhdGUtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpLnVybFwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjZXJ0aWZpY2F0ZS1uYW1lXCI+IHt7aS5uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDnm7jlhbPllYblk4EgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicmVsYXRlZC1wcm9kdWN0c1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVsYXRlZC1wcm9kdWN0cy10aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PiDnm7jlhbPllYblk4FcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLXByb2R1Y3RzLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cInJlbGF0ZWQtcHJvZHVjdHMtaXRlbXNcIiBzY3JvbGwteD1cInRydWVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgaWQ9XCJwcm9kdWN0LWl0ZW1cIiBjbGFzcz1cInByb2R1Y3QtaXRlbVwiIHYtZm9yPVwiKGksaykgaW4gcHJvZHVjdExpc3RcIiA6a2V5PSdrJyA6ZGF0YS1uYW1lPVwiaS5jb250ZW50XCIgQHRhcD1cImdvdG9Hb29kc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5Zu+54mHIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVjb21tZW5JbWdcIiB2LWlmPVwiaS51cmxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaS51cmxcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDllYblk4HlkI3np7AgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0TmFtZVwiIHYtaWY9XCJpLmNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2xvc2VkXCIgdi1pZj1cImkuY2xvc2VkXCI+NjE454m55oOgPC90ZXh0PiB7e2kuY29udGVudH19XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5qCH562+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGFiZWxcIiB2LWlmPVwiaS5sYWJlbExpc3QubGVuZ3RoID4gMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsYWJlbExpc3RJdGVtXCIgdi1mb3I9XCIoaSxrKSBpbiBpLmxhYmVsTGlzdFwiIDprZXk9XCJrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt7aX19XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5ZWG5ZOB5Lu35qC8IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdFByaWNlXCIgdi1pZj1cImkucHJvZHVjdFByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHTvv6V7e2kucHJvZHVjdFByaWNlfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDpooTnuqblkozlpb3or4QgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJzY3JpYmVBbmRHb29kUmVwdXRhdGlvblwiIHYtaWY9XCJpLnN1YnNjcmliZSYmaS5nb29kUmVwdXRhdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDpooTnuqYgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnNjcmliZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7e2kuc3Vic2NyaWJlfX3pooTnuqZcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g5aW96K+EIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kUmVwdXRhdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7e2kuZ29vZFJlcHV0YXRpb259fSXlpb3or4RcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOebuOWFs+WMu+eUnyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLWRvY3RvclwiPlxyXG5cdFx0XHRcdOebuOWFs+WMu+eUn1xyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOebuOWFs+aXpeiusCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLWRpYXJ5XCI+XHJcblx0XHRcdFx055u45YWz5pel6K6wXHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwhLS0g6Zeu562UIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInF1ZXN0aW9ucy1hbnN3ZXJzXCI+XHJcblx0XHRcdFx06Zeu562UXHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwhLS0g6K+E5Lu3IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImV2YWx1YXRlXCI+XHJcblx0XHRcdFx06K+E5Lu3XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwhLS0g6aG555uu5Lu35qC86KGoIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tcHJpY2VcIj5cclxuXHRcdFx0XHTpobnnm67ku7fmoLzooahcclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDpop3lpJbotLnnlKggLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZXh0cmEtZXhwZW5zZVwiPlxyXG5cdFx0XHRcdOmineWklui0ueeUqFxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOacjeWKoea1geeoiyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLXByb2Nlc3NcIj5cclxuXHRcdFx0XHTmnI3liqHmtYHnqItcclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDotK3kubDpnIDnn6UgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibmVlZC10by1rbm93XCI+XHJcblx0XHRcdFx06LSt5Lmw6ZyA55+lXHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwhLS0g6K+m5oOFIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBhcnRpY3VsYXJzXCI+XHJcblx0XHRcdFx06K+m5oOFXHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwhLS0g5Li65L2g5o6o6I2QIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJlY29tbWVuZCBcIj5cclxuXHRcdFx0XHTkuLrkvaDmjqjojZBcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDlupXpg6jlrprkvY0gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnN1bHQtc2hhcmUtY2FydC1hZGRDYXJ0LXNob3BOb3dcIj5cclxuXHRcdFx0PCEtLSDlkqjor6IgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29uc3VsdFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29uc3VsdC1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvd2VjaGF0LnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnN1bHQtdGV4dFwiPlxyXG5cdFx0XHRcdFx05ZKo6K+iXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOWIhuS6qyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzaGFyZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hhcmUtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3dlY2hhdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaGFyZS10ZXh0XCI+XHJcblx0XHRcdFx0XHTliIbkuqtcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwhLS0g6LSt54mp6L2mIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNhcnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcnQtbnVtYmVyXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcnRJbWdcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY2FydC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FydE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHR7e2NhcnRzfX1cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LXRleHRcIj5cclxuXHRcdFx0XHRcdOi0reeJqei9plxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDliqDlhaXotK3nianovaYgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLWNhcnRcIj5cclxuXHRcdFx0XHTliqDlhaXotK3nianovaZcclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDnq4vljbPotK3kubAgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2hvcC1ub3dcIj5cclxuXHRcdFx0XHTnq4vljbPotK3kubBcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHRvcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b3BCYXIudnVlXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR0b3BCYXIsXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRnb29kc05hbWU6ICcnLCAvL+WVhuWTgeWQjVxyXG5cdFx0XHRcdGJhclRvcEg6IDAsXHJcblx0XHRcdFx0cmlnaHREaXN0YW5jZTogMCxcclxuXHRcdFx0XHRsaW5lSGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGJhck5hbWU6ICdwYXJ0aWN1bGFyc1BhZ2UnLCAvL+WvvOiIquadoeWQjeensFxyXG5cdFx0XHRcdGhlaWdodDogMCwgLy9cclxuXHRcdFx0XHRzd2lwZXJMaXN0OiBbe1xyXG5cdFx0XHRcdFx0XHRpZDogMCxcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy90ZXN0LmpwZycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy90ZXN0LmpwZycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0aW50ZXJ2YWxUaW1lOiAzMDAwLCAvL+iHquWKqOWIh+aNouaXtumXtOmXtOmalFxyXG5cdFx0XHRcdGR1cmF0aW9uVGltZTogMTAwMCwgLy9cdOa7keWKqOWKqOeUu+aXtumVv1xyXG5cdFx0XHRcdGNhcnRzOiAzLCAvL+i0reeJqei9plxyXG5cdFx0XHRcdGNvdXBvbnNMaXN0OiBbJ+mmluWNleW/heWHjycsICfmu6EyMDAwMOWHjzIwMDAnLCAn5pSv5LuY5pyJ56S8J10sIC8v5LyY5oOg5Y23XHJcblx0XHRcdFx0ZGlzY291bnRzTGlzdDpbXHJcblx0XHRcdFx0XHR7bmFtZTon6ZmQ6LStJyxjb250ZW50Oifor6XllYblk4HotK3kubAx5Lu25pe25Lqr5Y+X5Y2V5Lu277+lMTk4MDDvvIzotoXlh7rmlbDph4/kuI3lho3mnInmlYgnfSxcclxuXHRcdFx0XHRcdHtuYW1lOifnp6/liIYnLGNvbnRlbnQ6J+i0reS5sOi/lOenr+WIhid9LFxyXG5cdFx0XHRcdFx0e25hbWU6J+WWteixhicsY29udGVudDon6LSt5Lmw6L+U5Za16LGGJ30sXHJcblx0XHRcdFx0XHR7bmFtZTon5Lya5ZGY5p2D55uKJyxjb250ZW50OifkvJrlkZg5NeaKmO+8jOW5tuWPr+S4jua7oeWHj+OAgeWIuOetieS8mOaDoOWPoOWKoOS9v+S7t+agvOabtOWKoOe+juS4vSd9LFxyXG5cdFx0XHRcdFx0e25hbWU6J+S8mOaDoOWll+ijhScsY29udGVudDon6K+l5ZWG5ZOB5YWx5pyJMeS4quS8mOaDoOWll+ijhSd9LFxyXG5cdFx0XHRcdFx0e25hbWU6J+aUtuWNleeri+WHjycsY29udGVudDon5paw5Lq66aaW5Y2V56uL5YePNTDlhYMnfSxcclxuXHRcdFx0XHRdLC8v5LyY5oOg5pS/562WXHJcblx0XHRcdFx0Y2VydGlmaWNhdGVMaXN0OltcclxuXHRcdFx0XHRcdHtuYW1lOifkuK3lm701Qee6p+WMu+e+juacuuaehCcsdXJsOicuLi8uLi9zdGF0aWMvaW1hZ2VzLzE5LnBuZyd9LFxyXG5cdFx0XHRcdFx0e25hbWU6J+W+t+WbveiOseiMtVRVVi1TUVPlm73pmYXorqTor4EnLHVybDonLi4vLi4vc3RhdGljL2ltYWdlcy8xOS5wbmcnfSxcclxuXHRcdFx0XHRcdHtuYW1lOiflm5vnuqfmlbTlvaLotYTotKjljLvpmaInLHVybDonLi4vLi4vc3RhdGljL2ltYWdlcy8xOS5wbmcnfSxcclxuXHRcdFx0XHRcdHtuYW1lOifkuK3lm73ljYHlpKfooYzkuJrlkI3niYwnLHVybDonLi4vLi4vc3RhdGljL2ltYWdlcy8xOS5wbmcnfSxcclxuXHRcdFx0XHRdLC8v55u45YWz6K+B5LmmXHJcblx0XHRcdFx0cHJvZHVjdExpc3Q6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzLzE5LnBuZycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7As6LaF6L+H5Lik6buE6YeR6Ieq5Yqo55yB55Wl5Y+3JywgLy/lkI3np7BcclxuXHRcdFx0XHRcdFx0cHJvZHVjdFByaWNlOiAnMTk4MDAnLCAvL+S7t+agvFxyXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmU6IDQ3NywgLy/pooTnuqZcclxuXHRcdFx0XHRcdFx0Z29vZFJlcHV0YXRpb246ICc5OCcsIC8v5aW96K+EXHJcblx0XHRcdFx0XHRcdGNsb3NlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGxhYmVsTGlzdDogWyfnnLzpg6jnvo7lrrknLCAn55y86YOoJ10gLy/moIfnrb5cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjAucG5nJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCzotoXov4fkuKTpu4Tph5Hoh6rliqjnnIHnlaXlj7cnLCAvL+WQjeensFxyXG5cdFx0XHRcdFx0XHRwcm9kdWN0UHJpY2U6ICcxOTgwMCcsIC8v5Lu35qC8XHJcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogNDc3LCAvL+mihOe6plxyXG5cdFx0XHRcdFx0XHRnb29kUmVwdXRhdGlvbjogJzk4JywgLy/lpb3or4RcclxuXHRcdFx0XHRcdFx0Y2xvc2VkOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0bGFiZWxMaXN0OiBbJ+ecvOmDqOe+juWuuScsICfnnLzpg6gnXSAvL+agh+etvlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8yMS5wbmcnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewLOi2hei/h+S4pOm7hOmHkeiHquWKqOecgeeVpeWPtycsIC8v5ZCN56ewXHJcblx0XHRcdFx0XHRcdHByb2R1Y3RQcmljZTogJzE5ODAwJywgLy/ku7fmoLxcclxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlOiA0NzcsIC8v6aKE57qmXHJcblx0XHRcdFx0XHRcdGdvb2RSZXB1dGF0aW9uOiAnOTgnLCAvL+WlveivhFxyXG5cdFx0XHRcdFx0XHRjbG9zZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdGxhYmVsTGlzdDogWyfnnLzpg6jnvo7lrrknLCAn55y86YOoJ10gLy/moIfnrb5cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSwvL+ebuOWFs+WVhuWTgVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbihvcHRpb24pIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoYXQuZ29vZHNOYW1lID0gb3B0aW9uLmdvb2RzXHJcblx0XHRcdHRoYXQuaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0KjEuNiA7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoYXQuaGVpZ2h0KVxyXG5cdFx0XHRjb25zb2xlLmxvZyhvcHRpb24pXHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0bGV0IHBhZ2VIZWlnaHQgPSAwXHJcblx0XHRcdC8vIOiOt+WPluWxj+W5lemrmOW6plxyXG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRwYWdlSGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3BhZ2VIZWlnaHQnLCBwYWdlSGVpZ2h0KVxyXG5cdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0dGhhdC5yaWdodERpc3RhbmNlID0gbWVudS53aWR0aFxyXG5cdFx0XHRcdFx0dGhhdC5iYXJUb3BIID0gbWVudS50b3BcclxuXHRcdFx0XHRcdHRoYXQubGluZUhlaWdodCA9IG1lbnUuaGVpZ2h0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0cGFkZGluZy10b3A6IDE2MHJweDtcclxuXHRcdFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LnJlY29tbWVuZHtcclxuXHRcdC8qIHBhZGRpbmctYm90dG9tOiAxMDVycHg7ICovXHJcblx0fVxyXG5cclxuXHQudG9wLXN3aXBlciB7XHJcblx0XHRoZWlnaHQ6IDc1MHJweDtcclxuXHR9XHJcblxyXG5cdC50b3Atc3dpcGVyLWl0ZW0gaW1hZ2Uge1xyXG5cdFx0aGVpZ2h0OiA3NTBycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5hY3Rpdml0eSBpbWFnZSB7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0Lyog5LuL57uNICovXHJcblx0LnByb2R1Y3RzLWludHJvZHVjdGlvbiB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwIDAgMjRycHggMjRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDQwcnB4O1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHR9XHJcblxyXG5cdC8qIOS7t+agvOOAgeaUtuiXjyAqL1xyXG5cdC5wcmljZS1kZXByZWNpYXRlLWNvbGxlY3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDMwcnB4IDA7XHJcblx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0fVxyXG5cclxuXHQucHJpY2Uge1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5wcmljZSxcclxuXHQuZGVwcmVjaWF0ZS1jb2xsZWN0LFxyXG5cdC5WSVAtcHJpY2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5uZXctcHJpY2Uge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRmb250LXNpemU6IDY0cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5uZXctcHJpY2UgdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LlZJUC1wcmljZSB7XHJcblx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICMzMzMzMzM7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdG1hcmdpbi10b3A6IC0xMHJweDtcclxuXHR9XHJcblxyXG5cdC5WSVAtcHJpY2UgdGV4dCB7XHJcblx0XHRwYWRkaW5nOiAwIDVycHg7XHJcblx0fVxyXG5cclxuXHQuVklQLW5hbWUge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzJFMkUyRTtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cGFkZGluZzogMCAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5tYXJrZXQtcHJpY2Uge1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzllOWU5ZTtcclxuXHRcdG1hcmdpbi10b3A6IC0yMHJweDtcclxuXHR9XHJcblxyXG5cdC5tYXJrZXQtcHJpY2UgdGV4dCB7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5kZXByZWNpYXRlLFxyXG5cdC5jb2xsZWN0IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5kZXByZWNpYXRlIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucmVtaW5kLWltYWdlcyxcclxuXHQucmVtaW5kLWltYWdlcyBpbWFnZSxcclxuXHQuY29sbGVjdC1pbWFnZXMsXHJcblx0LmNvbGxlY3QtaW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMjhycHg7XHJcblx0fVxyXG5cclxuXHQucmVtaW5kLXRleHQsXHJcblx0LmNvbGxlY3QtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0fVxyXG5cclxuXHQvKiDkvJjmg6DljbcgKi9cclxuXHQuY291cG9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZzoyMHJweCAzMHJweDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcblxyXG5cdC5jb3Vwb25zSXRlbSB7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiA1cnB4IDEwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LmhvdC1zYWxlLXJlbWluZCB7XHJcblx0XHRwYWRkaW5nOjAgMzBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQuaG90LXNhbGUtY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0LmhvdC1zYWxlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLFxyXG5cdFx0XHQjMDAwMDAwIDAlLFxyXG5cdFx0XHQjMzMzMzMzIDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMThycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAxMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHRcclxuXHQuaG90LXNhbGUtcmVjb21tZW5ke1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cdFxyXG5cdC5yZW1pbmQtbWV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCBcclxuXHRcdFx0I2ZhMzQ3NSAwJSwgXHJcblx0XHRcdCNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHBhZGRpbmc6IDhycHggMjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0XHJcblx0Lyog5ZWG5ZOB5ZCNICovXHJcblx0LnByb3VjdC1uYW1le1xyXG5cdFx0cGFkZGluZzogMjBycHggMzBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblx0LmxhYmVsLW5hbWV7XHJcblx0XHRmb250LXNpemU6IDE4cnB4O1xyXG5cdFx0d2lkdGg6IDg1cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNnJweDtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzg4MmRkYztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0cGFkZGluZzogMTBycHggMTBycHggNXJweDtcclxuXHR9XHJcblx0XHJcblx0Lyog6aKG5Y+W5Y2355qE5LuL57uNICovXHJcblx0LmdldC1jb3Vwb257XHJcblx0XHRwYWRkaW5nOiAyMHJweCAzMHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5nZXQtY291cG9uIHRleHR7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblx0XHJcblx0Lyog5LyY5oOgICovXHJcblx0LmRpc2NvdW50cyB7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcnB4O1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5kaXNjb3VudHMtdGl0bGV7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0OHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcnB4O1xyXG5cdH1cclxuXHQuZGlzY291bnRzLW1vcmV7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHQubW9yZXtcclxuXHRcdGNvbG9yOiAgI2ZhMzQ3NTtcclxuXHR9XHJcblx0XHJcblx0Lyog5LyY5oOg5pS/562WICovXHJcblx0LmRpc2NvdW50cy1wb2xpY3l7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcnB4O1xyXG5cdH1cclxuXHQucG9saWN5LW5hbWV7XHJcblx0XHRjb2xvcjogICNmYTM0NzU7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZThmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cdC5wb2xpY3ktY29udGVudHtcclxuXHRcdHdpZHRoOiA1MTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cdFxyXG5cdC8qIOebuOWFs+ivgeS5piAqL1xyXG5cdC5jZXJ0aWZpY2F0ZXtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHR9XHJcblx0LmNlcnRpZmljYXRlLWRldGFpbHN7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5jZXJ0aWZpY2F0ZS1kZXRhaWxzIGltYWdle1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHR9XHJcblx0XHJcblx0LmNlcnRpZmljYXRlLW5hbWV7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMThycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdC8qIHdpZHRoOiAxNjBycHg7ICovXHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMjRycHg7XHJcblx0fVxyXG5cdFxyXG5cdC8qIOebuOWFs+WVhuWTgSAqL1xyXG5cdC5yZWxhdGVkLXByb2R1Y3Rze1xyXG5cdFx0cGFkZGluZzogMzBycHggMCAwIDMwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQubGluZXtcclxuXHRcdHdpZHRoOiA0cnB4O1xyXG5cdFx0aGVpZ2h0OiAxNnJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM1NzY7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHQucmVsYXRlZC1wcm9kdWN0cy10aXRsZXtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LnJlbGF0ZWQtcHJvZHVjdHMtaXRlbXtcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0fVxyXG5cdC5yZWxhdGVkLXByb2R1Y3RzLWl0ZW1ze1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDQ5MHJweDtcclxuXHR9XHJcblx0XHJcblx0LnByb2R1Y3QtaXRlbXtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0d2lkdGg6IDI2MHJweDtcclxuXHRcdGhlaWdodDogNDkwcnB4O1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHR9XHJcblx0LnByb2R1Y3QtaXRlbSBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyNjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHR9XHJcblx0LnByb2R1Y3ROYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdFx0LyogaGVpZ2h0OiA2MHJweDsgKi9cclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cdFxyXG5cdC5jbG9zZWQge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR3aWR0aDogODRycHg7XHJcblx0XHRoZWlnaHQ6IDI2cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxOHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNiNjAxMTQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCA1cnB4O1xyXG5cdH1cclxuXHJcblx0LmxhYmVsIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5sYWJlbExpc3RJdGVtIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcblx0XHRoZWlnaHQ6IDI2cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHJweDtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRwYWRkaW5nOiA1cnB4IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3RQcmljZSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuc3Vic2NyaWJlQW5kR29vZFJlcHV0YXRpb24ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuc3Vic2NyaWJle1xyXG5cdFx0Y29sb3I6ICM2NjY2NjY7XHJcblx0fVxyXG5cdFxyXG5cdC5nb29kUmVwdXRhdGlvbntcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHRcclxuXHQvKiDlupXpg6jlrprkvY0gKi9cclxuXHQuY29uc3VsdC1zaGFyZS1jYXJ0LWFkZENhcnQtc2hvcE5vdyB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0LyogaGVpZ2h0OiAxMDVycHg7ICovXHJcblx0XHRwYWRkaW5nOiAxMnJweCAzMHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0fVxyXG5cclxuXHQuY29uc3VsdCxcclxuXHQuc2hhcmUge1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuY2FydC1udW1iZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEycnB4O1xyXG5cdH1cclxuXHJcblx0LmNvbnN1bHQtdGV4dCxcclxuXHQuc2hhcmUtdGV4dCxcclxuXHQuY2FydC10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2FmYWZhZjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnJweDtcclxuXHR9XHJcblxyXG5cdC5jb25zdWx0LWltYWdlLFxyXG5cdC5zaGFyZS1pbWFnZSB7XHJcblx0XHRtYXJnaW4tbGVmdDogNXJweDtcclxuXHR9XHJcblxyXG5cdC5jb25zdWx0LWltYWdlIGltYWdlLFxyXG5cdC5zaGFyZS1pbWFnZSBpbWFnZSxcclxuXHQuY2FydEltZyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzhycHg7XHJcblx0XHRoZWlnaHQ6IDM4cnB4O1xyXG5cdH1cclxuXHJcblx0LmNhcnROdW1iZXIge1xyXG5cdFx0d2lkdGg6IDI0cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjEyRjZGO1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyNHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAtMTBycHg7XHJcblx0fVxyXG5cclxuXHQuYWRkLWNhcnQge1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdHdpZHRoOiAyMjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsXHJcblx0XHRcdCM4ODM0ZmEgMCUsXHJcblx0XHRcdCNiYzY2ZmYgMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuc2hvcC1ub3cge1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdHdpZHRoOiAyMjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogNjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLFxyXG5cdFx0XHQjZmEzNDc1IDAlLFxyXG5cdFx0XHQjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZ29vZHNfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5OGE3ZTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dvb2RzX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOThhN2UyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1OTQ4MDgxMDM1ODhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9