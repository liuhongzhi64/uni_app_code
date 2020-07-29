(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/cart/cart"],[
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
/*!******************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fcart%2Fcart"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _cart = _interopRequireDefault(__webpack_require__(/*! ./pages/cart/cart.vue */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_cart.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 12 */
/*!***********************************************!*\
  !*** D:/Code/code/uniapp/pages/cart/cart.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.vue?vue&type=template&id=0f00adf4&scoped=true& */ 13);
/* harmony import */ var _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.vue?vue&type=script&lang=js& */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cart_vue_vue_type_style_index_0_id_0f00adf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.vue?vue&type=style&index=0&id=0f00adf4&scoped=true&lang=css& */ 18);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f00adf4",
  null,
  false,
  _cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/cart/cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/*!******************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/cart/cart.vue?vue&type=template&id=0f00adf4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cart.vue?vue&type=template&id=0f00adf4&scoped=true& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/cart/cart.vue?vue&type=template&id=0f00adf4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var m0 = __webpack_require__(/*! ../../static/images/18.png */ 15)

  var m1 = __webpack_require__(/*! ../../static/images/18.png */ 15)

  var m2 = __webpack_require__(/*! ../../static/images/18.png */ 15)

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
        m2: m2
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */,
/* 16 */
/*!************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/cart/cart.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cart.vue?vue&type=script&lang=js& */ 17);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/cart/cart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {
    cartNumber: {
      type: Number,
      default: 1 } },


  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      menuPaddingRight: 0,
      specialList: [{
        id: 1,
        name: '化妆品',
        content: '全场商品满2000减200sadas阿萨大师',
        url: '../../static/images/18.png' },

      {
        id: 3,
        name: '化妆品',
        content: '全场商品满2000减200',
        url: '../../static/images/18.png' },

      {
        id: 4,
        name: '化妆品',
        content: '全场商品满2000减200',
        url: '../../static/images/18.png' }],


      leftProduct: [{
        url: '../../static/images/19.png',
        title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
        label: [], //标签
        headPortrait: '../../static/images/23.png', //头像
        price: 19800,
        activity: [],
        vipPrice: 0,
        subscribeAndGoodReputation: [{
          subscribe: '441',
          goodReputation: '98' }] },



      {
        url: '../../static/images/20.png',
        title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
        label: [], //标签
        headPortrait: '../../static/images/test.jpg', //头像
        activity: ['首单必减', '折扣'],
        price: 19800,
        vipPrice: 18800,
        subscribeAndGoodReputation: [{
          subscribe: '441',
          goodReputation: '98' }] }],




      rightProduct: [{
        url: '../../static/images/20.png',
        title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
        label: ['眼部美容', '眼部'], //标签
        headPortrait: '../../static/images/test.jpg', //头像
        userName: '用户昵称几个字',
        like: 99, //点赞
        price: 19800,
        vipPrice: 18800,
        subscribeAndGoodReputation: [{
          subscribe: '441',
          goodReputation: '98' }] },


      {
        url: '../../static/images/19.png',
        title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
        label: ['眼部美容', '眼部'], //标签
        headPortrait: '../../static/images/23.png', //头像
        userName: '用户昵称几个字',
        like: 99, //点赞
        price: 19800,
        vipPrice: 0,
        subscribeAndGoodReputation: [{
          subscribe: '441',
          goodReputation: '98' }] }],



      productNameList: [{
        name: '全部',
        number: 25 },

      {
        name: '降价',
        number: 3 },

      {
        name: '医美',
        number: 10 },

      {
        name: '护肤品',
        number: 12 }],


      btnnum: 0,
      contentList: [{
        name: '全部' },

      {
        name: '降价' },

      {
        name: '医美' },

      {
        name: '护肤品' }],


      productList: [],
      allchecked: false,
      isActivity: false, //是否凑单
      isCartEmpty: true //
    };
  },
  onLoad: function onLoad(option) {
    var that = this;
    console.log(that.cartNumber, option.cartNumber);

    if (option.cartNumber) {
      that.cartNumber = parseInt(option.cartNumber);
      if (that.cartNumber > 0) {
        this.isCartEmpty = true;
      } else {
        this.isCartEmpty = false;
      }
    }

  },
  onReady: function onReady() {
    var that = this;
    // 获取屏幕高度
    uni.getSystemInfo({
      success: function success(res) {
        var menu = uni.getMenuButtonBoundingClientRect();
        that.menuWidth = menu.width;
        that.menuTop = menu.top;
        that.menuHeight = menu.height;
        that.menuLeft = menu.left;
        that.menuBottom = menu.bottom;
        that.menuPaddingRight = res.windowWidth - menu.right;
      } });

    that.changePorduct();
  },
  methods: {
    // 返回
    goBack: function goBack() {
      console.log('back');
      uni.navigateBack({
        delta: 1 });

    },
    // 触底函数
    onReachBottom: function onReachBottom() {
      console.log("到底了");
    },
    // 选中商品
    changePorduct: function changePorduct() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.btnnum = e;
      if (e == 0) {
        for (var i in this.contentList) {
          this.contentList[e].productList = [
          {
            title: '双眼皮',
            isActivity: false, //是否凑单
            itemList: [
            {
              id: '12',
              url: '../../static/images/19.png',
              porductName: '这是正常的标题页，这是正常的标题页这是正常的标题页,超出两行直接显示省略号....',
              versions: '版本：尊贵版；规格：敖如拉敖如拉。。。', //版本	
              porductPrice: 19800,
              member: false,
              purchaseLimitationNumber: 1, //限购数量
              checkedNumber: 1, //商品数量
              checked: false, //选中商品
              subtract: '../../static/images/subtract.png' },


            {
              id: '1',
              url: '../../static/images/19.png',
              porductName: '这是正常的标题页，这是正常的标题页这是正常的标题页,超出两行直接显示省略号....',
              versions: '版本：尊贵版；规格：敖如拉敖如拉。。。', //版本	
              porductPrice: 12800,
              member: true,
              purchaseLimitationNumber: 1, //限购数量
              checkedNumber: 1, //商品数量
              checked: false, //选中商品
              subtract: '../../static/images/subtract.png' }] },



          {
            title: '618专场',
            isActivity: true, //是否凑单
            itemList: [
            {
              id: '16',
              url: '../../static/images/19.png',
              porductName: '这是正常的标题页，这是正常的标题页这是正常的标题页,超出两行直接显示省略号....',
              versions: '版本：尊贵版；规格：敖如拉敖如拉。。。', //版本	
              porductPrice: 12800,
              member: true,
              purchaseLimitationNumber: 1, //限购数量
              checkedNumber: 1, //商品数量
              checked: false, //选中商品
              subtract: '../../static/images/subtract.png' }] }];




          this.contentList[i].productList = [];
        }
      } else if (e == 1) {
        for (var _i in this.contentList) {
          this.contentList[e].productList = [{
            title: '这是标题，只显示两行就显示为省略号...' }];

          this.contentList[_i].productList = [];
        }
      }
    },

    // 点击全选
    checkChangeAll: function checkChangeAll(e) {
      this.allchecked = !this.allchecked;
    },

    setNumber: function setNumber(event) {
      // console.log(event.currentTarget.dataset)
      var e = event.currentTarget.dataset.set;
      var id = event.currentTarget.dataset.id;
      this.haveNumber(e, parseInt(id));

    },

    haveNumber: function haveNumber(e, id) {
      // console.log(this.porductNumber)
      for (var i = 0; i < this.contentList.length; i++) {
        for (var k = 0; k < this.contentList[i].productList.length; k++) {
          for (var h = 0; h < this.contentList[i].productList[k].itemList.length; h++) {
            var item = this.contentList[i].productList[k].itemList[h];
            if (parseInt(id) == this.contentList[i].productList[k].itemList[h].id) {
              var checkedNumber = parseInt(this.contentList[i].productList[k].itemList[h].checkedNumber);
              checkedNumber = checkedNumber + e;
              this.contentList[i].productList[k].itemList[h].checkedNumber = checkedNumber;
              this.$forceUpdate();
              if (this.contentList[i].productList[k].itemList[h].checkedNumber <= 1 && e == -1) {
                this.contentList[i].productList[k].itemList[h].subtract = '../../static/images/subtract.png';
                this.contentList[i].productList[k].itemList[h].checkedNumber = 1;
              } else
              {
                this.contentList[i].productList[k].itemList[h].subtract = '../../static/images/subtract1.png';
              }
              return;
            }
          }
        }
      }
    },
    setPorductNumber: function setPorductNumber(e) {
      var id = e.currentTarget.id;
      var value = e.target.value;
      for (var i = 0; i < this.contentList.length; i++) {
        for (var k = 0; k < this.contentList[i].productList.length; k++) {
          for (var h = 0; h < this.contentList[i].productList[k].itemList.length; h++) {
            var item = this.contentList[i].productList[k].itemList[h];
            // console.log(item,value)
            if (parseInt(id) == this.contentList[i].productList[k].itemList[h].id) {
              this.contentList[i].productList[k].itemList[h].checkedNumber = parseInt(value);
            }
            if (parseInt(value) <= 0) {
              console.log(value);
              value = 1;
              console.log(value);
              this.contentList[i].productList[k].itemList[h].checkedNumber = 1;
            }
            // if (id.includes(item.id)) {
            // 	this.$set(item, 'checkedNumber', parseInt(value))
            // }
          }

        }
      }

    },

    // 点击商品
    gotoGoods: function gotoGoods(e) {
      var goods = e.currentTarget.dataset.name;
      uni.navigateTo({
        url: "/pages/goods/goods_detail?goods=".concat(goods) });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */
/*!********************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/cart/cart.vue?vue&type=style&index=0&id=0f00adf4&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_style_index_0_id_0f00adf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cart.vue?vue&type=style&index=0&id=0f00adf4&scoped=true&lang=css& */ 19);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_style_index_0_id_0f00adf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_style_index_0_id_0f00adf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_style_index_0_id_0f00adf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_style_index_0_id_0f00adf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_style_index_0_id_0f00adf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/cart/cart.vue?vue&type=style&index=0&id=0f00adf4&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[11,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NjYyMyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzljYmEiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT9hZGI0IiwidW5pLWFwcDovLy9wYWdlcy9jYXJ0L2NhcnQudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NWIxNSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzRmMGYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSx5RjtBQUNBQSxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDd0Q7QUFDTDtBQUNxQzs7O0FBR3hGO0FBQytLO0FBQy9LLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQU8sQ0FBQyxvQ0FBNEI7O0FBRS9DLFdBQVcsbUJBQU8sQ0FBQyxvQ0FBNEI7O0FBRS9DLFdBQVcsbUJBQU8sQ0FBQyxvQ0FBNEI7O0FBRS9DO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBNnBCLENBQWdCLDJwQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvUWpyQjtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBREEsRUFEQTs7O0FBT0EsTUFQQSxrQkFPQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTtBQUdBLG1CQUhBO0FBSUEsaUJBSkE7QUFLQSxtQkFMQTtBQU1BLHlCQU5BO0FBT0E7QUFDQSxhQURBO0FBRUEsbUJBRkE7QUFHQSx5Q0FIQTtBQUlBLHlDQUpBOztBQU1BO0FBQ0EsYUFEQTtBQUVBLG1CQUZBO0FBR0EsZ0NBSEE7QUFJQSx5Q0FKQSxFQU5BOztBQVlBO0FBQ0EsYUFEQTtBQUVBLG1CQUZBO0FBR0EsZ0NBSEE7QUFJQSx5Q0FKQSxFQVpBLENBUEE7OztBQTBCQTtBQUNBLHlDQURBO0FBRUEsZ0RBRkE7QUFHQSxpQkFIQSxFQUdBO0FBQ0Esa0RBSkEsRUFJQTtBQUNBLG9CQUxBO0FBTUEsb0JBTkE7QUFPQSxtQkFQQTtBQVFBO0FBQ0EsMEJBREE7QUFFQSw4QkFGQSxHQVJBOzs7O0FBY0E7QUFDQSx5Q0FEQTtBQUVBLGdEQUZBO0FBR0EsaUJBSEEsRUFHQTtBQUNBLG9EQUpBLEVBSUE7QUFDQSxnQ0FMQTtBQU1BLG9CQU5BO0FBT0EsdUJBUEE7QUFRQTtBQUNBLDBCQURBO0FBRUEsOEJBRkEsR0FSQSxFQWRBLENBMUJBOzs7OztBQXVEQTtBQUNBLHlDQURBO0FBRUEsZ0RBRkE7QUFHQSw2QkFIQSxFQUdBO0FBQ0Esb0RBSkEsRUFJQTtBQUNBLDJCQUxBO0FBTUEsZ0JBTkEsRUFNQTtBQUNBLG9CQVBBO0FBUUEsdUJBUkE7QUFTQTtBQUNBLDBCQURBO0FBRUEsOEJBRkEsR0FUQTs7O0FBY0E7QUFDQSx5Q0FEQTtBQUVBLGdEQUZBO0FBR0EsNkJBSEEsRUFHQTtBQUNBLGtEQUpBLEVBSUE7QUFDQSwyQkFMQTtBQU1BLGdCQU5BLEVBTUE7QUFDQSxvQkFQQTtBQVFBLG1CQVJBO0FBU0E7QUFDQSwwQkFEQTtBQUVBLDhCQUZBLEdBVEEsRUFkQSxDQXZEQTs7OztBQW9GQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7O0FBSUE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBSkE7O0FBUUE7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBUkE7O0FBWUE7QUFDQSxtQkFEQTtBQUVBLGtCQUZBLEVBWkEsQ0FwRkE7OztBQXFHQSxlQXJHQTtBQXNHQTtBQUNBLGtCQURBOztBQUdBO0FBQ0Esa0JBREEsRUFIQTs7QUFNQTtBQUNBLGtCQURBLEVBTkE7O0FBU0E7QUFDQSxtQkFEQSxFQVRBLENBdEdBOzs7QUFtSEEscUJBbkhBO0FBb0hBLHVCQXBIQTtBQXFIQSx1QkFySEEsRUFxSEE7QUFDQSx1QkF0SEEsQ0FzSEE7QUF0SEE7QUF3SEEsR0FoSUE7QUFpSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBOUlBO0FBK0lBLFNBL0lBLHFCQStJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVRBOztBQVdBO0FBQ0EsR0E5SkE7QUErSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBUEE7QUFRQTtBQUNBO0FBQ0E7QUFDQSxLQVhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLDZCQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSwrQ0FGQTtBQUdBLHNFQUhBO0FBSUEsNkNBSkEsRUFJQTtBQUNBLGlDQUxBO0FBTUEsMkJBTkE7QUFPQSx5Q0FQQSxFQU9BO0FBQ0EsOEJBUkEsRUFRQTtBQUNBLDRCQVRBLEVBU0E7QUFDQSwwREFWQSxFQURBOzs7QUFjQTtBQUNBLHFCQURBO0FBRUEsK0NBRkE7QUFHQSxzRUFIQTtBQUlBLDZDQUpBLEVBSUE7QUFDQSxpQ0FMQTtBQU1BLDBCQU5BO0FBT0EseUNBUEEsRUFPQTtBQUNBLDhCQVJBLEVBUUE7QUFDQSw0QkFUQSxFQVNBO0FBQ0EsMERBVkEsRUFkQSxDQUhBLEVBREE7Ozs7QUFnQ0E7QUFDQSwwQkFEQTtBQUVBLDRCQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSwrQ0FGQTtBQUdBLHNFQUhBO0FBSUEsNkNBSkEsRUFJQTtBQUNBLGlDQUxBO0FBTUEsMEJBTkE7QUFPQSx5Q0FQQSxFQU9BO0FBQ0EsOEJBUkEsRUFRQTtBQUNBLDRCQVRBLEVBU0E7QUFDQSwwREFWQSxFQURBLENBSEEsRUFoQ0E7Ozs7O0FBbURBO0FBQ0E7QUFDQSxPQXZEQSxNQXVEQTtBQUNBO0FBQ0E7QUFDQSx5Q0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQTlFQTs7QUFnRkE7QUFDQTtBQUNBO0FBQ0EsS0FuRkE7O0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0EzRkE7O0FBNkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEhBO0FBcUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBOUlBOztBQWdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQURBOztBQUdBLEtBdEpBLEVBL0pBLEU7Ozs7Ozs7Ozs7OztBQ3BRQTtBQUFBO0FBQUE7QUFBQTtBQUFnK0IsQ0FBZ0IsMDdCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FwL0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9jYXJ0L2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvY2FydC9jYXJ0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwZjAwYWRmNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jYXJ0L2NhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIG0wID0gcmVxdWlyZShcIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTgucG5nXCIpXG5cbiAgdmFyIG0xID0gcmVxdWlyZShcIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTgucG5nXCIpXG5cbiAgdmFyIG0yID0gcmVxdWlyZShcIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTgucG5nXCIpXG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBtMDogbTAsXG4gICAgICAgIG0xOiBtMSxcbiAgICAgICAgbTI6IG0yXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNhcnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wLWJhclwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLXRvcCc6bWVudVRvcCsncHgnLCdsaW5lLWhlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLWJvdHRvbSc6MTArJ3B4J31dXCJcclxuXHRcdCB2LWlmPVwiIWlzQ2FydEVtcHR5XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmFjay10aXRsZVwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnfV1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhY2tcIiBAdGFwPSdnb0JhY2snPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcmV0dXJuLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCIgOnN0eWxlPVwiW3sncGFkZGluZy1yaWdodCc6ODArJ3JweCd9XVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+IOi0reeJqei9piA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3AtYmFyXCIgOnN0eWxlPVwiW3snaGVpZ2h0JzptZW51SGVpZ2h0KydweCcsJ3BhZGRpbmctdG9wJzptZW51VG9wKydweCcsJ2xpbmUtaGVpZ2h0JzptZW51SGVpZ2h0KydweCcsJ3BhZGRpbmctYm90dG9tJzoxMCsncHgnfV1cIlxyXG5cdFx0IHYtaWY9XCJpc0NhcnRFbXB0eVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJhY2stdGl0bGVcIiA6c3R5bGU9XCJbeydoZWlnaHQnOm1lbnVIZWlnaHQrJ3B4J31dXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrXCIgQHRhcD0nZ29CYWNrJz5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3JldHVybi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1jb21waWxlXCIgOnN0eWxlPVwiW3sncGFkZGluZy1yaWdodCc6bWVudVBhZGRpbmdSaWdodCsncHgnfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIiA6c3R5bGU9XCJbeydwYWRkaW5nLWxlZnQnOm1lbnVXaWR0aCs1KydweCd9XVwiPui0reeJqei9pjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGlsZVwiIDpzdHlsZT1cIlt7J3BhZGRpbmctcmlnaHQnOm1lbnVXaWR0aCs1KydweCd9XVwiPiDnvJbovpEgPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cImNhcnQtY29udGVudFwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzptZW51Qm90dG9tKzEwKydweCd9XVwiPlxyXG5cdFx0XHQ8IS0tIOi0reeJqei9puS4uuepuiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJlbXB0eS1jYXJ0XCIgdi1pZj1cIiFpc0NhcnRFbXB0eVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wdHktY2FydC1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY2FydEJnLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVtcHR5LWNhcnQtdGV4dFwiPiDotK3nianovabov5jmmK/nqbrnmoTlk59+IDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvLXN0cm9sbFwiPiDljrvpgJvpgJsgPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6LSt54mp6L2m5LiN5Li656m6IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNhcnQtaGF2ZS1wcm9kdWN0XCIgdi1pZj1cImlzQ2FydEVtcHR5XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LXRvLW5hdlwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LW5hbWVcIiB2LWZvcj1cIihpLGspIGluIHByb2R1Y3ROYW1lTGlzdFwiIDprZXk9J2snIDpjbGFzcz1cIntjaGVja2VkUG9yZHVjdCA6YnRubnVtID09IGt9XCIgQHRhcD1cImNoYW5nZVBvcmR1Y3QoaylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tbmFtZS1saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0e3sgaS5uYW1lIH19IDx0ZXh0IHYtaWY9XCJpLm5hbWU9PSflhajpg6gnXCI+KHt7Y2FydE51bWJlcn19KTwvdGV4dD4gPHRleHQgdi1pZj1cImkubmFtZSE9J+WFqOmDqCdcIj4oe3tpLm51bWJlcn19KTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7Y2hlY2tlZExpbmUgOmJ0bm51bSA9PSBrfVwiPiA8dmlldz48L3ZpZXc+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVuZC1jb250XCIgOmNsYXNzPVwie2RpczpidG5udW0gPT0gaW5kZXh9XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gY29udGVudExpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZm9udC1zaXplOiAyNHJweDt0ZXh0LWFsaWduOiBjZW50ZXI7XCI+e3tpdGVtLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvcGluZy1jYXJ0XCIgdi1pZj1cIml0ZW0ucHJvZHVjdExpc3QubGVuZ3RoPjFcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LXNob3BwaW5nLXNob3dcIiB2LWZvcj1cIihpdGVtcyxrKSBpbiBpdGVtLnByb2R1Y3RMaXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDlhajpgIkgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtY2hlY2stc2VlLW1vcmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBAY2hhbmdlPVwiY2hlY2tDaGFuZ2VBbGxcIj4gPGNoZWNrYm94IHZhbHVlPVwiY2dcIiBjb2xvcj0nIzAwN0FGRicgIDpjaGVja2VkPVwiYWxsY2hlY2tlZFwiIC8+IDx0ZXh0Pnt7aXRlbXMudGl0bGV9fSA8L3RleHQ+IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlZS1tb3JlXCIgdi1pZj1cIml0ZW1zLmlzQWN0aXZpdHlcIj4g5p+l55yL5pu05aSaPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1vbi1pdGVtXCIgdi1pZj1cIiFpdGVtcy5pc0FjdGl2aXR5XCI+IOWOu+WHkeWNlSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5LyY5oOg5rS75YqoIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1vZmZlclwiIHYtaWY9XCIhaXRlbXMuaXNBY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHlcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IOa7oeWHjyA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljLWFjdGl2aXR5XCI+IOavj+a7oTUwMDDlhYPlh481MDDlhYMgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlZS1kaXNjb3VudHNcIj4g55yL5LyY5oOgID4gIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb25cIj4g5ruh5YePIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj4g5ruhMuS7tuWHjzgw5YWDIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvblwiPiDmipjmiaMgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPiDmu6E05Lu25omTOC415oqYIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvblwiPiDotaDlk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPiDmu6E25Lu26YCBSELpnaLohpwxMOebkiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb25cIj4g5Y2h5Yi4IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj4g5ruhMTAwMDAw5YWD5YePMTAwMOWFgyA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb25cIj4g5Y2h5Yi4IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+6Led5rS75Yqo57uT5p2f6L+Y5YmpIDwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHktdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG91c2VzXCI+IDIzIDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1pbnV0ZVwiPiA1OCA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWNvbmRcIj4gMjMgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWVhuWTgeWxleekuiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1jb250ZW50XCIgdi1mb3I9XCIoaSxrKSBpbiBpdGVtcy5pdGVtTGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGVja2JveC1pdGVtXCI+IDxjaGVja2JveCA6dmFsdWU9XCJpLmlkXCIgY29sb3I9JyMwMDdBRkYnICA6Y2hlY2tlZD1cImkuY2hlY2tlZFwiIC8+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tc2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1pbWFnZXNcIj4gPGltYWdlIDpzcmM9XCJpLnVybFwiIG1vZGU9XCJcIj48L2ltYWdlPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLW5hbWVcIj4ge3tpLnBvcmR1Y3ROYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmVyc2lvbnNcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zLW5hbWVcIj4ge3tpLnZlcnNpb25zfX0gPC90ZXh0PiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVuZm9sZFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvdW5mb2xkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlXCI+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdO+/pTx0ZXh0IGNsYXNzPVwicHJpY2VcIj57e2kucG9yZHVjdFByaWNlfX08L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVtYmVyLXByaWNlXCIgdi1pZj1cImkubWVtYmVyXCI+5Lya5ZGY5Lu3PC90ZXh0PiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1cmNoYXNlTGltaXRhdGlvbk51bWJlclwiPiAq6ZmQ6LSte3tpLnB1cmNoYXNlTGltaXRhdGlvbk51bWJlcn195Lu2IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnRyYWN0XCIgOmRhdGEtaWQ9J2kuaWQnIDpkYXRhLXNldD0nLTEnIEB0YXA9XCJzZXROdW1iZXJcIj4gPGltYWdlIDpzcmM9XCJpLnN1YnRyYWN0XCIgbW9kZT1cIlwiPjwvaW1hZ2U+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dFwiPiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIDppZD0naS5pZCcgIDp2YWx1ZT1cImkuY2hlY2tlZE51bWJlclwiIEBpbnB1dD0nc2V0UG9yZHVjdE51bWJlcicgbWF4bGVuZ3RoPVwiMlwiIC8+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRcIiA6ZGF0YS1pZD0naS5pZCcgOmRhdGEtc2V0PScxJyBAdGFwPVwic2V0TnVtYmVyXCI+IDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FkZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsLXBlcmZvcm1hbmNlXCIgdi1pZj1cIiFpc0NhcnRFbXB0eVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbExpc3RcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2Nyb2xsVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtbmFtZVwiPiDljJblpoblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtY29udGVudFwiPiDlhajlnLrllYblk4Hmu6EyMDAw5YePMjAwc2FkYXPpmL/okKjlpKfluIggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtZ29cIj4gR08hIDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1pbWFnZVwiPiA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTgucG5nXCI+PC9pbWc+IDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsTGlzdCB0d29cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2Nyb2xsVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtbmFtZVwiPiDljJblpoblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtY29udGVudFwiPiDlhajlnLrllYblk4Hmu6EyMDAw5YePMjAwc2FkYXPpmL/okKjlpKfluIggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtZ29cIj4gR08hIDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1pbWFnZVwiPiA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTgucG5nXCI+PC9pbWc+IDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsTGlzdCB0aHJlZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzY3JvbGxUZXh0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1uYW1lXCI+IOWMluWmhuWTgSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1jb250ZW50XCI+IOWFqOWcuuWVhuWTgea7oTIwMDDlh48yMDBzYWRhc+mYv+iQqOWkp+W4iCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1nb1wiPiBHTyEgPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsLWltYWdlXCI+IDxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xOC5wbmdcIj48L2ltZz4gPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNvbW1lbmQtdG8teW91XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLXRpdGxlXCI+IDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz4gPHZpZXc+5Li65L2g5o6o6I2QPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15IGNsYXNzPVwicmVjb21tZW5kLXRvLXlvdS1saXN0XCI+XHJcblx0XHRcdFx0XHQ8dGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3ViamVjdC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDlt6bovrkgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0LXByb2R1Y3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1zaG93XCIgdi1mb3I9XCIoaSxrKSBpbiBsZWZ0UHJvZHVjdFwiIDprZXk9J2snIDpkYXRhLW5hbWU9XCJpLnRpdGxlXCIgQHRhcD1cImdvdG9Hb29kc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaS51cmxcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtdGl0bGVcIj4ge3tpLnRpdGxlfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtbGFiZWxcIiB2LWlmPVwiaS5sYWJlbC5sZW5ndGg+MVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGFiZWwtbmFtZVwiIHYtZm9yPVwiKGksaykgaW4gaS5sYWJlbFwiIDprZXk9J2snPiB7e2l9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpdml0eVwiIHYtaWY9XCJpLmFjdGl2aXR5Lmxlbmd0aD4xXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpdml0eU5hbWVcIiB2LWZvcj1cIihpLGspIGluIGkuYWN0aXZpdHlcIiA6a2V5PSdrJz4ge3tpfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZS12aXAtY2FydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+77+lPC90ZXh0Pnt7aS5wcmljZX19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlwLWNhcnQtcHJpY2VcIiB2LWlmPVwiaS52aXBQcmljZT4wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZpcC1jYXJ0XCI+6ZK75Y2hPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aXAtcHJpY2VcIj7vv6V7e2kudmlwUHJpY2V9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PCEtLSDpooTnuqblkozlpb3or4QgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3Vic2NyaWJlQW5kR29vZFJlcHV0YXRpb25cIiB2LWZvcj1cIihpLGspIGluIGkuc3Vic2NyaWJlQW5kR29vZFJlcHV0YXRpb25cIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnNjcmliZS1nb29kUmVwdXRhdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PCEtLSDpooTnuqYgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnNjcmliZVwiPiB7e2kuc3Vic2NyaWJlfX3pooTnuqYgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PCEtLSDlpb3or4QgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RSZXB1dGF0aW9uXCI+IHt7aS5nb29kUmVwdXRhdGlvbn19JeWlveivhCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWPs+i+uSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LXByb2R1Y3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1zaG93XCIgdi1mb3I9XCIoaSxrKSBpbiByaWdodFByb2R1Y3RcIiA6a2V5PSdrJyA6ZGF0YS1uYW1lPVwiaS50aXRsZVwiIEB0YXA9XCJnb3RvR29vZHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImkudXJsXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LXRpdGxlXCI+IHt7aS50aXRsZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWxhYmVsXCIgdi1pZj1cImkubGFiZWwubGVuZ3RoPjFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxhYmVsLW5hbWVcIiB2LWZvcj1cIihpLGspIGluIGkubGFiZWxcIiA6a2V5PSdrJz4ge3tpfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHlcIiB2LWlmPVwiaS5hY3Rpdml0eS5sZW5ndGg+MVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHlOYW1lXCIgdi1mb3I9XCIoaSxrKSBpbiBpLmFjdGl2aXR5XCIgOmtleT0nayc+IHt7aX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2UtdmlwLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0Pu+/pTwvdGV4dD57e2kucHJpY2V9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpcC1jYXJ0LXByaWNlXCIgdi1pZj1cImkudmlwUHJpY2U+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aXAtY2FydFwiPumSu+WNoTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmlwLXByaWNlXCI+77+le3tpLnZpcFByaWNlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwhLS0g6aKE57qm5ZKM5aW96K+EIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnNjcmliZUFuZEdvb2RSZXB1dGF0aW9uXCIgdi1mb3I9XCIoaSxrKSBpbiBpLnN1YnNjcmliZUFuZEdvb2RSZXB1dGF0aW9uXCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJzY3JpYmUtZ29vZFJlcHV0YXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS0g6aKE57qmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJzY3JpYmVcIj4ge3tpLnN1YnNjcmliZX196aKE57qmIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS0g5aW96K+EIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kUmVwdXRhdGlvblwiPiB7e2kuZ29vZFJlcHV0YXRpb259fSXlpb3or4QgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Y2FydE51bWJlcjoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAxXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZW51V2lkdGg6IDAsXHJcblx0XHRcdFx0bWVudVRvcDogMCxcclxuXHRcdFx0XHRtZW51SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdG1lbnVMZWZ0OiAwLFxyXG5cdFx0XHRcdG1lbnVCb3R0b206IDAsXHJcblx0XHRcdFx0bWVudVBhZGRpbmdSaWdodDogMCxcclxuXHRcdFx0XHRzcGVjaWFsTGlzdDogW3tcclxuXHRcdFx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfljJblpoblk4EnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5YWo5Zy65ZWG5ZOB5ruhMjAwMOWHjzIwMHNhZGFz6Zi/6JCo5aSn5biIJyxcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8xOC5wbmcnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WMluWmhuWTgScsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICflhajlnLrllYblk4Hmu6EyMDAw5YePMjAwJyxcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8xOC5wbmcnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogNCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WMluWmhuWTgScsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICflhajlnLrllYblk4Hmu6EyMDAw5YePMjAwJyxcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8xOC5wbmcnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0bGVmdFByb2R1Y3Q6IFt7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMTkucG5nJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmiJHmmK/mlofnq6DmoIfpopjvvIzmmL7npLrkuKTmjpLlkI7lsLHku6XnnIHnlaXlj7fnu5PmnZ/vvJ/mnIDlpJrkuKTmjpLmnIDlpJrkuKTmjpIuLi4nLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogW10sIC8v5qCH562+XHJcblx0XHRcdFx0XHRcdGhlYWRQb3J0cmFpdDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjMucG5nJywgLy/lpLTlg49cclxuXHRcdFx0XHRcdFx0cHJpY2U6IDE5ODAwLFxyXG5cdFx0XHRcdFx0XHRhY3Rpdml0eTogW10sXHJcblx0XHRcdFx0XHRcdHZpcFByaWNlOiAwLFxyXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVBbmRHb29kUmVwdXRhdGlvbjogW3tcclxuXHRcdFx0XHRcdFx0XHRzdWJzY3JpYmU6ICc0NDEnLFxyXG5cdFx0XHRcdFx0XHRcdGdvb2RSZXB1dGF0aW9uOiAnOTgnXHJcblx0XHRcdFx0XHRcdH1dLFxyXG5cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjAucG5nJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmiJHmmK/mlofnq6DmoIfpopjvvIzmmL7npLrkuKTmjpLlkI7lsLHku6XnnIHnlaXlj7fnu5PmnZ/vvJ/mnIDlpJrkuKTmjpLmnIDlpJrkuKTmjpIuLi4nLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogW10sIC8v5qCH562+XHJcblx0XHRcdFx0XHRcdGhlYWRQb3J0cmFpdDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvdGVzdC5qcGcnLCAvL+WktOWDj1xyXG5cdFx0XHRcdFx0XHRhY3Rpdml0eTogWyfpppbljZXlv4Xlh48nLCAn5oqY5omjJ10sXHJcblx0XHRcdFx0XHRcdHByaWNlOiAxOTgwMCxcclxuXHRcdFx0XHRcdFx0dmlwUHJpY2U6IDE4ODAwLFxyXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVBbmRHb29kUmVwdXRhdGlvbjogW3tcclxuXHRcdFx0XHRcdFx0XHRzdWJzY3JpYmU6ICc0NDEnLFxyXG5cdFx0XHRcdFx0XHRcdGdvb2RSZXB1dGF0aW9uOiAnOTgnXHJcblx0XHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRyaWdodFByb2R1Y3Q6IFt7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjAucG5nJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmiJHmmK/mlofnq6DmoIfpopjvvIzmmL7npLrkuKTmjpLlkI7lsLHku6XnnIHnlaXlj7fnu5PmnZ/vvJ/mnIDlpJrkuKTmjpLmnIDlpJrkuKTmjpIuLi4nLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogWyfnnLzpg6jnvo7lrrknLCAn55y86YOoJ10sIC8v5qCH562+XHJcblx0XHRcdFx0XHRcdGhlYWRQb3J0cmFpdDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvdGVzdC5qcGcnLCAvL+WktOWDj1xyXG5cdFx0XHRcdFx0XHR1c2VyTmFtZTogJ+eUqOaIt+aYteensOWHoOS4quWtlycsXHJcblx0XHRcdFx0XHRcdGxpa2U6IDk5LCAvL+eCuei1nlxyXG5cdFx0XHRcdFx0XHRwcmljZTogMTk4MDAsXHJcblx0XHRcdFx0XHRcdHZpcFByaWNlOiAxODgwMCxcclxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlQW5kR29vZFJlcHV0YXRpb246IFt7XHJcblx0XHRcdFx0XHRcdFx0c3Vic2NyaWJlOiAnNDQxJyxcclxuXHRcdFx0XHRcdFx0XHRnb29kUmVwdXRhdGlvbjogJzk4J1xyXG5cdFx0XHRcdFx0XHR9XSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMTkucG5nJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmiJHmmK/mlofnq6DmoIfpopjvvIzmmL7npLrkuKTmjpLlkI7lsLHku6XnnIHnlaXlj7fnu5PmnZ/vvJ/mnIDlpJrkuKTmjpLmnIDlpJrkuKTmjpIuLi4nLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogWyfnnLzpg6jnvo7lrrknLCAn55y86YOoJ10sIC8v5qCH562+XHJcblx0XHRcdFx0XHRcdGhlYWRQb3J0cmFpdDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjMucG5nJywgLy/lpLTlg49cclxuXHRcdFx0XHRcdFx0dXNlck5hbWU6ICfnlKjmiLfmmLXnp7Dlh6DkuKrlrZcnLFxyXG5cdFx0XHRcdFx0XHRsaWtlOiA5OSwgLy/ngrnotZ5cclxuXHRcdFx0XHRcdFx0cHJpY2U6IDE5ODAwLFxyXG5cdFx0XHRcdFx0XHR2aXBQcmljZTogMCxcclxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlQW5kR29vZFJlcHV0YXRpb246IFt7XHJcblx0XHRcdFx0XHRcdFx0c3Vic2NyaWJlOiAnNDQxJyxcclxuXHRcdFx0XHRcdFx0XHRnb29kUmVwdXRhdGlvbjogJzk4J1xyXG5cdFx0XHRcdFx0XHR9XSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRwcm9kdWN0TmFtZUxpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflhajpg6gnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDI1LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+mZjeS7tycsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfljLvnvo4nLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDEwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+aKpOiCpOWTgScsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMTIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0YnRubnVtOiAwLFxyXG5cdFx0XHRcdGNvbnRlbnRMaXN0OiBbe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5YWo6YOoJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+mZjeS7tydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfljLvnvo4nXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5oqk6IKk5ZOBJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHByb2R1Y3RMaXN0OiBbXSxcclxuXHRcdFx0XHRhbGxjaGVja2VkOmZhbHNlLFxyXG5cdFx0XHRcdGlzQWN0aXZpdHk6ZmFsc2UsLy/mmK/lkKblh5HljZVcclxuXHRcdFx0XHRpc0NhcnRFbXB0eTp0cnVlLC8vXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbikge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0Y29uc29sZS5sb2codGhhdC5jYXJ0TnVtYmVyLG9wdGlvbi5jYXJ0TnVtYmVyKVxyXG5cdFx0XHRcclxuXHRcdFx0aWYob3B0aW9uLmNhcnROdW1iZXIpe1xyXG5cdFx0XHRcdHRoYXQuY2FydE51bWJlciA9IHBhcnNlSW50KG9wdGlvbi5jYXJ0TnVtYmVyKSBcclxuXHRcdFx0XHRpZih0aGF0LmNhcnROdW1iZXI+MCl7XHJcblx0XHRcdFx0XHR0aGlzLmlzQ2FydEVtcHR5ID0gdHJ1ZVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5pc0NhcnRFbXB0eSA9ZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyDojrflj5blsY/luZXpq5jluqZcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSBtZW51LnRvcFxyXG5cdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IG1lbnUuYm90dG9tXHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVQYWRkaW5nUmlnaHQgPSByZXMud2luZG93V2lkdGggLSBtZW51LnJpZ2h0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGF0LmNoYW5nZVBvcmR1Y3QoKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6L+U5ZueXHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2JhY2snKVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6Kem5bqV5Ye95pWwXHJcblx0XHRcdG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5Yiw5bqV5LqGXCIpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieS4reWVhuWTgVxyXG5cdFx0XHRjaGFuZ2VQb3JkdWN0OiBmdW5jdGlvbihlID0gMCkge1xyXG5cdFx0XHRcdHRoaXMuYnRubnVtID0gZVxyXG5cdFx0XHRcdGlmIChlID09IDApIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5jb250ZW50TGlzdCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnRMaXN0W2VdLnByb2R1Y3RMaXN0ID0gW1xyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5Y+M55y855quJyxcclxuXHRcdFx0XHRcdFx0XHRcdGlzQWN0aXZpdHk6ZmFsc2UsLy/mmK/lkKblh5HljZVcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1MaXN0OltcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOicxMicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOicuLi8uLi9zdGF0aWMvaW1hZ2VzLzE5LnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9yZHVjdE5hbWU6J+i/meaYr+ato+W4uOeahOagh+mimOmhte+8jOi/meaYr+ato+W4uOeahOagh+mimOmhtei/meaYr+ato+W4uOeahOagh+mimOmhtSzotoXlh7rkuKTooYznm7TmjqXmmL7npLrnnIHnlaXlj7cuLi4uJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2ZXJzaW9uczon54mI5pys77ya5bCK6LS154mI77yb6KeE5qC877ya5pWW5aaC5ouJ5pWW5aaC5ouJ44CC44CC44CCJywvL+eJiOacrFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9yZHVjdFByaWNlOjE5ODAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcjpmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwdXJjaGFzZUxpbWl0YXRpb25OdW1iZXI6MSwvL+mZkOi0reaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWROdW1iZXI6MSwvL+WVhuWTgeaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ6ZmFsc2UsLy/pgInkuK3llYblk4FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWJ0cmFjdDonLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6JzEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDonLi4vLi4vc3RhdGljL2ltYWdlcy8xOS5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROYW1lOifov5nmmK/mraPluLjnmoTmoIfpopjpobXvvIzov5nmmK/mraPluLjnmoTmoIfpopjpobXov5nmmK/mraPluLjnmoTmoIfpopjpobUs6LaF5Ye65Lik6KGM55u05o6l5pi+56S655yB55Wl5Y+3Li4uLicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmVyc2lvbnM6J+eJiOacrO+8muWwiui0teeJiO+8m+inhOagvO+8muaVluWmguaLieaVluWmguaLieOAguOAguOAgicsLy/niYjmnKxcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3RQcmljZToxMjgwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXI6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwdXJjaGFzZUxpbWl0YXRpb25OdW1iZXI6MSwvL+mZkOi0reaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWROdW1iZXI6MSwvL+WVhuWTgeaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ6ZmFsc2UsLy/pgInkuK3llYblk4FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWJ0cmFjdDonLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICc2MTjkuJPlnLonLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNBY3Rpdml0eTp0cnVlLC8v5piv5ZCm5YeR5Y2VXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtTGlzdDpbXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDonMTYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDonLi4vLi4vc3RhdGljL2ltYWdlcy8xOS5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROYW1lOifov5nmmK/mraPluLjnmoTmoIfpopjpobXvvIzov5nmmK/mraPluLjnmoTmoIfpopjpobXov5nmmK/mraPluLjnmoTmoIfpopjpobUs6LaF5Ye65Lik6KGM55u05o6l5pi+56S655yB55Wl5Y+3Li4uLicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmVyc2lvbnM6J+eJiOacrO+8muWwiui0teeJiO+8m+inhOagvO+8muaVluWmguaLieaVluWmguaLieOAguOAguOAgicsLy/niYjmnKxcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3RQcmljZToxMjgwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXI6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwdXJjaGFzZUxpbWl0YXRpb25OdW1iZXI6MSwvL+mZkOi0reaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWROdW1iZXI6MSwvL+WVhuWTgeaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ6ZmFsc2UsLy/pgInkuK3llYblk4FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWJ0cmFjdDonLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnRMaXN0W2ldLnByb2R1Y3RMaXN0ID0gW11cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmNvbnRlbnRMaXN0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29udGVudExpc3RbZV0ucHJvZHVjdExpc3QgPSBbe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6L+Z5piv5qCH6aKY77yM5Y+q5pi+56S65Lik6KGM5bCx5pi+56S65Li655yB55Wl5Y+3Li4uJ1xyXG5cdFx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnRMaXN0W2ldLnByb2R1Y3RMaXN0ID0gW11cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDngrnlh7vlhajpgIlcclxuXHRcdFx0Y2hlY2tDaGFuZ2VBbGw6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR0aGlzLmFsbGNoZWNrZWQgPSAhdGhpcy5hbGxjaGVja2VkXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRzZXROdW1iZXI6ZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldClcclxuXHRcdFx0XHRsZXQgZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zZXRcclxuXHRcdFx0XHRsZXQgaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuXHRcdFx0XHR0aGlzLmhhdmVOdW1iZXIoZSxwYXJzZUludChpZCkpXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRoYXZlTnVtYmVyOmZ1bmN0aW9uKGUsaWQpe1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucG9yZHVjdE51bWJlcilcclxuXHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoaXMuY29udGVudExpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRmb3IobGV0IGs9MDtrPHRoaXMuY29udGVudExpc3RbaV0ucHJvZHVjdExpc3QubGVuZ3RoO2srKyl7XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaD0wO2g8dGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdC5sZW5ndGg7aCsrKXtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBpdGVtID0gdGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdFtoXVxyXG5cdFx0XHRcdFx0XHRcdGlmIChwYXJzZUludChpZCkgPT0gdGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdFtoXS5pZCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkTnVtYmVyID0gcGFyc2VJbnQodGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdFtoXS5jaGVja2VkTnVtYmVyKVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZE51bWJlciA9IGNoZWNrZWROdW1iZXIrZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdFtoXS5jaGVja2VkTnVtYmVyID0gY2hlY2tlZE51bWJlclxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kZm9yY2VVcGRhdGUoKVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYodGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdFtoXS5jaGVja2VkTnVtYmVyIDw9IDEgJiYgZSA9PS0xICl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29udGVudExpc3RbaV0ucHJvZHVjdExpc3Rba10uaXRlbUxpc3RbaF0uc3VidHJhY3QgPSAnLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29udGVudExpc3RbaV0ucHJvZHVjdExpc3Rba10uaXRlbUxpc3RbaF0uY2hlY2tlZE51bWJlciA9IDFcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29udGVudExpc3RbaV0ucHJvZHVjdExpc3Rba10uaXRlbUxpc3RbaF0uc3VidHJhY3QgPSAnLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdDEucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFxyXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFBvcmR1Y3ROdW1iZXI6ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0bGV0IGlkPSBlLmN1cnJlbnRUYXJnZXQuaWRcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoaXMuY29udGVudExpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRmb3IobGV0IGs9MDtrPHRoaXMuY29udGVudExpc3RbaV0ucHJvZHVjdExpc3QubGVuZ3RoO2srKyl7XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaD0wO2g8dGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdC5sZW5ndGg7aCsrKXtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBpdGVtID0gdGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdFtoXVxyXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGl0ZW0sdmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlSW50KGlkKSA9PSB0aGlzLmNvbnRlbnRMaXN0W2ldLnByb2R1Y3RMaXN0W2tdLml0ZW1MaXN0W2hdLmlkICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jb250ZW50TGlzdFtpXS5wcm9kdWN0TGlzdFtrXS5pdGVtTGlzdFtoXS5jaGVja2VkTnVtYmVyID0gcGFyc2VJbnQodmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmKHBhcnNlSW50KHZhbHVlKTw9MCl7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlID0gMVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2codmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnRMaXN0W2ldLnByb2R1Y3RMaXN0W2tdLml0ZW1MaXN0W2hdLmNoZWNrZWROdW1iZXIgPSAxXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIGlmIChpZC5pbmNsdWRlcyhpdGVtLmlkKSkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIFx0dGhpcy4kc2V0KGl0ZW0sICdjaGVja2VkTnVtYmVyJywgcGFyc2VJbnQodmFsdWUpKVxyXG5cdFx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDngrnlh7vllYblk4FcclxuXHRcdFx0Z290b0dvb2RzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0bGV0IGdvb2RzID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19kZXRhaWw/Z29vZHM9JHtnb29kc31gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnRvcC1iYXIge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ5ZGVnLCAjMDAwMDAwIDAlLCAjMTExMTExIDEwMCUpO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC5iYWNrLXRpdGxlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAzOHJweDtcclxuXHR9XHJcblxyXG5cdC5iYWNrIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmJhY2sgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDM2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHR9XHJcblxyXG5cdC50aXRsZS1jb21waWxlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzhycHg7XHJcblx0fVxyXG5cclxuXHJcblx0LnRpdGxlLWNvbXBpbGUgLmNvbXBpbGUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC50aXRsZSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LmNhcnQtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdH1cclxuXHJcblx0Lyog6LSt54mp6L2m5Li656m655qE5pe25YCZICovXHJcblx0LmVtcHR5LWNhcnQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmVtcHR5LWNhcnQtaW1hZ2Uge1xyXG5cdFx0cGFkZGluZzogNjhycHggMTc3cnB4IDQwcnB4IDE3NHJweDtcclxuXHR9XHJcblxyXG5cdC5lbXB0eS1jYXJ0LWltYWdlIGltYWdlIHtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRoZWlnaHQ6IDI1NHJweDtcclxuXHR9XHJcblxyXG5cdC5nby1zdHJvbGwge1xyXG5cdFx0d2lkdGg6IDIyMHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogODdycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY2Njk5IDAlLCAjZmEzNDc1IDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiA0MHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lhbC1wZXJmb3JtYW5jZSB7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lhbExpc3Qge1xyXG5cdFx0d2lkdGg6IDIzMHJweDtcclxuXHRcdGhlaWdodDogMTYwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmNmEwMDAgMCUsICNmZmI5MzUgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC50d28ge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZTUzZDUgMCUsICNmZDZmZGIgMTAwJSk7XHJcblx0fVxyXG5cclxuXHQudGhyZWUge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgI2ZmNjg1MSAwJSwgI2ZlNDkyZSAxMDAlKTtcclxuXHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHR9XHJcblxyXG5cdC5zY3JvbGxUZXh0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHBhZGRpbmc6IDE2cnB4IDIwcnB4O1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblx0LmNoZWNrZWRMaW5le1x0XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdH1cclxuXHQuY2hlY2tlZExpbmUgdmlld3tcclxuXHRcdGhlaWdodDogNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdC5zcGVjaWFsLW5hbWUge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsLWNvbnRlbnQge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnJweDtcclxuXHRcdHdpZHRoOiAxMjBycHg7XHJcblx0XHRmb250LXNpemU6IDE4cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsLWdvIHtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogMjZycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjZycHg7XHJcblx0XHRwYWRkaW5nOiAwIDEwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U4N2EwNztcclxuXHRcdGJveC1zaGFkb3c6IDBycHggMXJweCAycnB4IDBycHggcmdiYSgxNDUsIDk0LCAwLCAwLjM1KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEzcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMnJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuXHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsTGlzdCAuc3BlY2lhbC1pbWFnZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IC01MHJweDtcclxuXHRcdGxlZnQ6IDQycnB4O1xyXG5cdH1cclxuXHJcblx0LnNwZWNpYWxMaXN0IC5zcGVjaWFsLWltYWdlIGltYWdlIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIxMHJweDtcclxuXHJcblx0fVxyXG5cclxuXHQucmVjb21tZW5kLXRvLXlvdSB7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0d2lkdGg6IDZycHg7XHJcblx0XHRoZWlnaHQ6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzU3NjtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiA0cnB4O1xyXG5cdH1cclxuXHJcblx0LnJlbGF0ZWQtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0OHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnN1YmplY3QtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC5yZWNvbW1lbmQtdG8teW91LWxpc3Qge1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmxlZnQtcHJvZHVjdCxcclxuXHQucmlnaHQtcHJvZHVjdCB7XHJcblx0XHR3aWR0aDogMzUwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQucHJvZHVjdC1zaG93IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuaW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzNTBycHg7XHJcblx0XHRoZWlnaHQ6IDM1MHJweDtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cnB4O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtdGl0bGUge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtbGFiZWwge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQubGFiZWwtbmFtZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogNXJweCAxMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdH1cclxuXHJcblx0LmFjdGl2aXR5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmb250LXNpemU6IDE2cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAyMHJweCAwO1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHJcblx0LmFjdGl2aXR5TmFtZSB7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRwYWRkaW5nOiA1cnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtcHJpY2UtdmlwLWNhcnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZSB0ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQudmlwLWNhcnQtcHJpY2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudmlwLWNhcnQge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwMDAgMCUsICMyYzJjMmMgMTAwJSksIGxpbmVhci1ncmFkaWVudCgjMjgyODI4LCAjMjgyODI4KTtcclxuXHRcdGZvbnQtc2l6ZTogMTZycHg7XHJcblx0XHRwYWRkaW5nOiA3cnB4IDEwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNmZWZlZmU7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHJweDtcclxuXHR9XHJcblxyXG5cdC52aXAtcHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjMjgyODI4O1xyXG5cdFx0cGFkZGluZzogNHJweCA4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICMyODI4Mjg7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBycHg7XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuc3Vic2NyaWJlQW5kR29vZFJlcHV0YXRpb24ge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQuc3Vic2NyaWJlLWdvb2RSZXB1dGF0aW9uIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3JkZXItdG9wOiAxcnB4IHNvbGlkICNFRUVFRUU7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwIDA7XHJcblx0fVxyXG5cclxuXHQuc3Vic2NyaWJlIHtcclxuXHRcdGNvbG9yOiAjQ0NDQ0NDO1xyXG5cdH1cclxuXHJcblx0Lmdvb2RSZXB1dGF0aW9uIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtdG8tbmF2IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1x0XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucHJvZHVjdC1uYW1lIHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRsaW5lLWhlaWdodDogOTZycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZFBvcmR1Y3Qge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LmVuZC1jb250IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQuZGlzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHRcclxuXHQvKiDotK3nianovabllYblk4HlsZXnpLogKi9cclxuXHQuY2FydC1zaG9wcGluZy1zaG93e1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblx0LmNoYW5nZS1jaGVjay1zZWUtbW9yZXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHR9XHJcblx0LmNoYW5nZS1jaGVjayB0ZXh0e1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblx0LnNlZS1tb3Jle1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblx0XHJcblx0LmFkZC1vbi1pdGVte1xyXG5cdFx0d2lkdGg6IDg4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0XHJcblx0LnNwZWNpYWwtb2ZmZXJ7XHJcblx0XHRwYWRkaW5nOiAwcnB4IDEwcnB4IDEwcnB4IDcwcnB4O1xyXG5cdH1cclxuXHQuZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c3tcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHl7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmZ1bGwtcmVkdWN0aW9ue1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMnJweDtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblx0XHJcblx0LnNlZS1kaXNjb3VudHN7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQuc3BlY2lmaWMtYWN0aXZpdHl7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHRcclxuXHQuYWN0aXZpdHktdGltZXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5hY3Rpdml0eS10aW1lIHRleHR7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbjowIDhycHg7XHJcblx0fVxyXG5cdC5ob3VzZXMsLm1pbnV0ZSwuc2Vjb25ke1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHRcclxuXHRcdHBhZGRpbmctdG9wOiAyMHJweDtcclxuXHR9XHJcblx0LnByb2R1Y3QtaXRlbS1zaG93e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQucG9yZHVjdC1pdGVtLWltYWdlcyBpbWFnZXtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5uYW1lLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVye1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVye1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5wb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVye1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdC5wb3JkdWN0LWl0ZW0tcHJpY2V7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZSAucHJpY2V7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0fVxyXG5cdC5tZW1iZXItcHJpY2V7XHJcblx0XHR3aWR0aDogNjRycHg7XHJcblx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICAjMDAwMDAwIDAlLCAgIzJjMmMyYyAxMDAlKSwgbGluZWFyLWdyYWRpZW50KCAjMjgyODI4LCAjMjgyODI4KTtcclxuXHRcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsLCAgbm9ybWFsO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMTZycHg7XHJcblx0XHRjb2xvcjogI2ZlZmVmZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdH1cclxuXHQucHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVye1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY2hlY2tlZE51bWJlcntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogMTYwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRib3JkZXI6IHNvbGlkIDFycHggI2YwZjBmMDtcclxuXHR9XHJcblx0LmNoZWNrZWROdW1iZXIgaW1hZ2V7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcblx0LmlucHV0e1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcblx0fVxyXG5cdC5pbnB1dCBpbnB1dHtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdC5zdWJ0cmFjdCwuYWRke1xyXG5cdFx0d2lkdGg6IDQycnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0LnBvcmR1Y3QtaXRlbS1uYW1le1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHR9XHJcblx0LnZlcnNpb25ze1xyXG5cdFx0d2lkdGg6IDM2MHJweDtcdFx0XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC52ZXJzaW9ucy1uYW1le1xyXG5cdFx0d2lkdGg6IDI4MHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdH1cclxuXHQudW5mb2xke1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1OTU5OTQ3Mjk5ODRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9