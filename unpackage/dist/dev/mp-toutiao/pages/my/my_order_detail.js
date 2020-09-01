(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my_order_detail"],{

/***/ 162:
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fmy%2Fmy_order_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _my_order_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my_order_detail.vue */ 163));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my_order_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 163:
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 164);
/* harmony import */ var _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=script&lang=js& */ 166);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 168);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08de1eeb",
  null,
  false,
  _my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/my/my_order_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 164:
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 165);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 165:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& ***!
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

/***/ 166:
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=script&lang=js& */ 167);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 167:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var porduct = function porduct() {__webpack_require__.e(/*! require.ensure | components/porduct */ "components/porduct").then((function () {return resolve(__webpack_require__(/*! ../../components/porduct.vue */ 425));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =






























































































































































































































































































































{
  components: {
    porduct: porduct },

  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      height: 0,
      barName: 'particularsPage', //导航条名称
      topBackgroundColor: '#fa3474',
      color: '#FFFFFF',
      backImage: '../static/images/back2.png',
      title: '订单详情',
      state: '已付款', //是否付款
      orderPorduct: [{
        name: '收费室使用',
        porductImagesList: [{
          id: 1,
          url: '../../static/images/23.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 2,
          state: '已退款' },

        {
          id: 2,
          url: '../../static/images/20.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 1 },
        {
          id: 1,
          url: '../../static/images/23.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 2,
          state: '已使用' },
        {
          id: 1,
          url: '../../static/images/19.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 2,
          state: '待使用' }] },



      {
        name: '会员中心使用',
        porductImagesList: [{
          id: 1,
          url: '../../static/images/23.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 2 },

        {
          id: 2,
          url: '../../static/images/20.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 1 },
        {
          id: 1,
          url: '../../static/images/23.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 1 },
        {
          id: 1,
          url: '../../static/images/19.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 2 }],


        poructNumber: 4 },

      {
        name: '邮寄商品',
        porductImagesList: [{
          id: 1,
          url: '../../static/images/23.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 2 },

        {
          id: 2,
          url: '../../static/images/20.png',
          porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
          content: '版本：尊享版； 规格：傲若拉商品名称.... ',
          contentList: [{
            versions: '尊享版',
            specification: '傲诺拉-星熠光面圆盘',
            part: '腋下切口+内窥镜(进口)+双平面',
            doctor: '艾剑英/邱伟' }],

          price: 608000,
          arrowImages: '../../static/images/arrow-down.png',
          topImages: '../../static/images/arrow-top.png',
          showPorduct: false,
          allPrice: 19600,
          onLinePay: 500,
          discounts: 600,
          hospitalPay: 18500,
          copeWith: 19000,
          porductNumber: 1 }] }],



      complimentaryList: [
      'HB面膜(2片装)一盒',
      '华桑葆骊科玮防晒霜SPF30（2支）',
      '20元无门槛卡券',
      '2000元满减券'],

      priceList: [
      { name: '商品总价', price: 56800 },
      { name: '优惠合计', price: 6800 },
      { name: '邮寄运费', price: 0 },
      { name: '实际应付', price: 50000 },
      { name: '在线支付', price: 1000 },
      { name: '到院再付', price: 49000 }],

      serialNumber: 2354777654, //订单编号
      showTop: false,
      productList: [
      {
        url: '../../static/images/19.png',
        title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
        label: [], //标签
        headPortrait: '../../static/images/23.png', //头像
        price: 19800,
        closed: '闭馆特推',
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
          goodReputation: '98' }] },


      {
        url: '../../static/images/19.png',
        title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
        label: [], //标签
        headPortrait: '../../static/images/23.png', //头像
        price: 19800,
        closed: '闭馆特推',
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
          goodReputation: '98' }] }] };




  },
  onReady: function onReady() {
    var that = this;
    // 获取屏幕高度
    uni.getSystemInfo({
      success: function success(res) {
        that.height = res.screenHeight;
        var menu = uni.getMenuButtonBoundingClientRect();
        that.menuWidth = menu.width;
        that.menuTop = menu.top;
        that.menuHeight = menu.height;
        that.menuLeft = menu.left;
        that.menuBottom = menu.bottom;
        that.menuPaddingRight = res.windowWidth - menu.right;
      } });

  },
  methods: {
    // 返回上一级
    goBack: function goBack() {
      console.log('back');
      uni.navigateBack({
        delta: 1 });

    },
    openPorductContent: function openPorductContent(index, k) {
      var showPorduct = this.orderPorduct[index].porductImagesList[k].showPorduct;
      this.orderPorduct[index].porductImagesList[k].showPorduct = !showPorduct;
    },
    copySerialNumber: function copySerialNumber() {
      uni.setClipboardData({
        data: this.serialNumber,
        success: function success() {
          console.log('复制成功');
        } });

    },
    ToTop: function ToTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 600 });

    },
    goToRefund: function goToRefund() {
      uni.navigateTo({
        url: "/pages/my/my_order_refund" });

    } },

  onPageScroll: function onPageScroll(e) {
    if (e.scrollTop > 0) {
      this.showTop = true;
    } else
    if (e.scrollTop == 0) {
      this.showTop = false;
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 168:
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 169);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 169:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[162,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlPzE1NmQiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZT9mOWM3Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/YzRmNSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlPzhmZDgiLCJ1bmktYXBwOi8vL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZT9jOTQ5Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/MTIzNiJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsOEc7QUFDQUEsVUFBVSxDQUFDQyx3QkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUNxQzs7O0FBR25HO0FBQytLO0FBQy9LLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBd3FCLENBQWdCLHNxQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrVDVyQjtBQUNBO0FBQ0Esb0JBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBO0FBR0EsbUJBSEE7QUFJQSxpQkFKQTtBQUtBLG1CQUxBO0FBTUEsZUFOQTtBQU9BLGdDQVBBLEVBT0E7QUFDQSxtQ0FSQTtBQVNBLHNCQVRBO0FBVUEsNkNBVkE7QUFXQSxtQkFYQTtBQVlBLGtCQVpBLEVBWUE7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQSxlQURBO0FBRUEsMkNBRkE7QUFHQSxnRUFIQTtBQUlBLDRDQUpBO0FBS0E7QUFDQSwyQkFEQTtBQUVBLHVDQUZBO0FBR0Esb0NBSEE7QUFJQSw0QkFKQSxHQUxBOztBQVdBLHVCQVhBO0FBWUEsMkRBWkE7QUFhQSx3REFiQTtBQWNBLDRCQWRBO0FBZUEseUJBZkE7QUFnQkEsd0JBaEJBO0FBaUJBLHdCQWpCQTtBQWtCQSw0QkFsQkE7QUFtQkEseUJBbkJBO0FBb0JBLDBCQXBCQTtBQXFCQSxzQkFyQkE7O0FBdUJBO0FBQ0EsZUFEQTtBQUVBLDJDQUZBO0FBR0EsZ0VBSEE7QUFJQSw0Q0FKQTtBQUtBO0FBQ0EsMkJBREE7QUFFQSx1Q0FGQTtBQUdBLG9DQUhBO0FBSUEsNEJBSkEsR0FMQTs7QUFXQSx1QkFYQTtBQVlBLDJEQVpBO0FBYUEsd0RBYkE7QUFjQSw0QkFkQTtBQWVBLHlCQWZBO0FBZ0JBLHdCQWhCQTtBQWlCQSx3QkFqQkE7QUFrQkEsNEJBbEJBO0FBbUJBLHlCQW5CQTtBQW9CQSwwQkFwQkEsRUF2QkE7QUE0Q0E7QUFDQSxlQURBO0FBRUEsMkNBRkE7QUFHQSxnRUFIQTtBQUlBLDRDQUpBO0FBS0E7QUFDQSwyQkFEQTtBQUVBLHVDQUZBO0FBR0Esb0NBSEE7QUFJQSw0QkFKQSxHQUxBOztBQVdBLHVCQVhBO0FBWUEsMkRBWkE7QUFhQSx3REFiQTtBQWNBLDRCQWRBO0FBZUEseUJBZkE7QUFnQkEsd0JBaEJBO0FBaUJBLHdCQWpCQTtBQWtCQSw0QkFsQkE7QUFtQkEseUJBbkJBO0FBb0JBLDBCQXBCQTtBQXFCQSxzQkFyQkEsRUE1Q0E7QUFrRUE7QUFDQSxlQURBO0FBRUEsMkNBRkE7QUFHQSxnRUFIQTtBQUlBLDRDQUpBO0FBS0E7QUFDQSwyQkFEQTtBQUVBLHVDQUZBO0FBR0Esb0NBSEE7QUFJQSw0QkFKQSxHQUxBOztBQVdBLHVCQVhBO0FBWUEsMkRBWkE7QUFhQSx3REFiQTtBQWNBLDRCQWRBO0FBZUEseUJBZkE7QUFnQkEsd0JBaEJBO0FBaUJBLHdCQWpCQTtBQWtCQSw0QkFsQkE7QUFtQkEseUJBbkJBO0FBb0JBLDBCQXBCQTtBQXFCQSxzQkFyQkEsRUFsRUEsQ0FGQTs7OztBQTZGQTtBQUNBLHNCQURBO0FBRUE7QUFDQSxlQURBO0FBRUEsMkNBRkE7QUFHQSxnRUFIQTtBQUlBLDRDQUpBO0FBS0E7QUFDQSwyQkFEQTtBQUVBLHVDQUZBO0FBR0Esb0NBSEE7QUFJQSw0QkFKQSxHQUxBOztBQVdBLHVCQVhBO0FBWUEsMkRBWkE7QUFhQSx3REFiQTtBQWNBLDRCQWRBO0FBZUEseUJBZkE7QUFnQkEsd0JBaEJBO0FBaUJBLHdCQWpCQTtBQWtCQSw0QkFsQkE7QUFtQkEseUJBbkJBO0FBb0JBLDBCQXBCQTs7QUFzQkE7QUFDQSxlQURBO0FBRUEsMkNBRkE7QUFHQSxnRUFIQTtBQUlBLDRDQUpBO0FBS0E7QUFDQSwyQkFEQTtBQUVBLHVDQUZBO0FBR0Esb0NBSEE7QUFJQSw0QkFKQSxHQUxBOztBQVdBLHVCQVhBO0FBWUEsMkRBWkE7QUFhQSx3REFiQTtBQWNBLDRCQWRBO0FBZUEseUJBZkE7QUFnQkEsd0JBaEJBO0FBaUJBLHdCQWpCQTtBQWtCQSw0QkFsQkE7QUFtQkEseUJBbkJBO0FBb0JBLDBCQXBCQSxFQXRCQTtBQTJDQTtBQUNBLGVBREE7QUFFQSwyQ0FGQTtBQUdBLGdFQUhBO0FBSUEsNENBSkE7QUFLQTtBQUNBLDJCQURBO0FBRUEsdUNBRkE7QUFHQSxvQ0FIQTtBQUlBLDRCQUpBLEdBTEE7O0FBV0EsdUJBWEE7QUFZQSwyREFaQTtBQWFBLHdEQWJBO0FBY0EsNEJBZEE7QUFlQSx5QkFmQTtBQWdCQSx3QkFoQkE7QUFpQkEsd0JBakJBO0FBa0JBLDRCQWxCQTtBQW1CQSx5QkFuQkE7QUFvQkEsMEJBcEJBLEVBM0NBO0FBZ0VBO0FBQ0EsZUFEQTtBQUVBLDJDQUZBO0FBR0EsZ0VBSEE7QUFJQSw0Q0FKQTtBQUtBO0FBQ0EsMkJBREE7QUFFQSx1Q0FGQTtBQUdBLG9DQUhBO0FBSUEsNEJBSkEsR0FMQTs7QUFXQSx1QkFYQTtBQVlBLDJEQVpBO0FBYUEsd0RBYkE7QUFjQSw0QkFkQTtBQWVBLHlCQWZBO0FBZ0JBLHdCQWhCQTtBQWlCQSx3QkFqQkE7QUFrQkEsNEJBbEJBO0FBbUJBLHlCQW5CQTtBQW9CQSwwQkFwQkEsRUFoRUEsQ0FGQTs7O0FBeUZBLHVCQXpGQSxFQTdGQTs7QUF3TEE7QUFDQSxvQkFEQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLDJDQUZBO0FBR0EsZ0VBSEE7QUFJQSw0Q0FKQTtBQUtBO0FBQ0EsMkJBREE7QUFFQSx1Q0FGQTtBQUdBLG9DQUhBO0FBSUEsNEJBSkEsR0FMQTs7QUFXQSx1QkFYQTtBQVlBLDJEQVpBO0FBYUEsd0RBYkE7QUFjQSw0QkFkQTtBQWVBLHlCQWZBO0FBZ0JBLHdCQWhCQTtBQWlCQSx3QkFqQkE7QUFrQkEsNEJBbEJBO0FBbUJBLHlCQW5CQTtBQW9CQSwwQkFwQkE7O0FBc0JBO0FBQ0EsZUFEQTtBQUVBLDJDQUZBO0FBR0EsZ0VBSEE7QUFJQSw0Q0FKQTtBQUtBO0FBQ0EsMkJBREE7QUFFQSx1Q0FGQTtBQUdBLG9DQUhBO0FBSUEsNEJBSkEsR0FMQTs7QUFXQSx1QkFYQTtBQVlBLDJEQVpBO0FBYUEsd0RBYkE7QUFjQSw0QkFkQTtBQWVBLHlCQWZBO0FBZ0JBLHdCQWhCQTtBQWlCQSx3QkFqQkE7QUFrQkEsNEJBbEJBO0FBbUJBLHlCQW5CQTtBQW9CQSwwQkFwQkEsRUF0QkEsQ0FGQSxFQXhMQSxDQWJBOzs7O0FBcVBBO0FBQ0EsbUJBREE7QUFFQSwwQkFGQTtBQUdBLGdCQUhBO0FBSUEsZ0JBSkEsQ0FyUEE7O0FBMlBBO0FBQ0Esb0NBREE7QUFFQSxtQ0FGQTtBQUdBLGdDQUhBO0FBSUEsb0NBSkE7QUFLQSxtQ0FMQTtBQU1BLG9DQU5BLENBM1BBOztBQW1RQSw4QkFuUUEsRUFtUUE7QUFDQSxvQkFwUUE7QUFxUUE7QUFDQTtBQUNBLHlDQURBO0FBRUEsZ0RBRkE7QUFHQSxpQkFIQSxFQUdBO0FBQ0Esa0RBSkEsRUFJQTtBQUNBLG9CQUxBO0FBTUEsc0JBTkE7QUFPQSxvQkFQQTtBQVFBLG1CQVJBO0FBU0E7QUFDQSwwQkFEQTtBQUVBLDhCQUZBLEdBVEEsRUFEQTs7OztBQWdCQTtBQUNBLHlDQURBO0FBRUEsZ0RBRkE7QUFHQSxpQkFIQSxFQUdBO0FBQ0Esb0RBSkEsRUFJQTtBQUNBLGdDQUxBO0FBTUEsb0JBTkE7QUFPQSx1QkFQQTtBQVFBO0FBQ0EsMEJBREE7QUFFQSw4QkFGQSxHQVJBLEVBaEJBOzs7QUE2QkE7QUFDQSx5Q0FEQTtBQUVBLGdEQUZBO0FBR0EsaUJBSEEsRUFHQTtBQUNBLGtEQUpBLEVBSUE7QUFDQSxvQkFMQTtBQU1BLHNCQU5BO0FBT0Esb0JBUEE7QUFRQSxtQkFSQTtBQVNBO0FBQ0EsMEJBREE7QUFFQSw4QkFGQSxHQVRBLEVBN0JBOzs7O0FBNENBO0FBQ0EseUNBREE7QUFFQSxnREFGQTtBQUdBLGlCQUhBLEVBR0E7QUFDQSxvREFKQSxFQUlBO0FBQ0EsZ0NBTEE7QUFNQSxvQkFOQTtBQU9BLHVCQVBBO0FBUUE7QUFDQSwwQkFEQTtBQUVBLDhCQUZBLEdBUkEsRUE1Q0EsQ0FyUUE7Ozs7O0FBZ1VBLEdBclVBO0FBc1VBLFNBdFVBLHFCQXNVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVkE7O0FBWUEsR0FyVkE7QUFzVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBUEE7QUFRQTtBQUNBO0FBQ0E7QUFDQSxLQVhBO0FBWUE7QUFDQTtBQUNBLCtCQURBO0FBRUE7QUFDQTtBQUNBLFNBSkE7O0FBTUEsS0FuQkE7QUFvQkE7QUFDQTtBQUNBLG9CQURBO0FBRUEscUJBRkE7O0FBSUEsS0F6QkE7QUEwQkE7QUFDQTtBQUNBLHdDQURBOztBQUdBLEtBOUJBLEVBdFZBOztBQXNYQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0E3WEEsRTs7Ozs7Ozs7Ozs7OztBQy9UQTtBQUFBO0FBQUE7QUFBQTtBQUEyK0IsQ0FBZ0IscThCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBLy9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwOGRlMWVlYlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibXlfb3JkZXJfZGV0YWlsXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcC1uYXYtbWVzc2FnZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm15LXRvcC1iYXJcIiA6c3R5bGU9XCJbeydoZWlnaHQnOm1lbnVIZWlnaHQrJ3B4JywncGFkZGluZy10b3AnOm1lbnVUb3ArJ3B4JywnbGluZS1oZWlnaHQnOm1lbnVIZWlnaHQrJ3B4JywncGFkZGluZy1ib3R0b20nOjEwKydweCd9XVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFjay10aXRsZVwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFja1wiIEBjbGljaz1cImdvQmFja1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9yZXR1cm4ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCIgOnN0eWxlPVwiW3snbWFyZ2luLXJpZ2h0JzptZW51V2lkdGgrJ3B4J31dXCI+IHt7dGl0bGV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLW1lc3NhZ2VcIiA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUJvdHRvbSsyMCsncHgnfV1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8yMy5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci11c2VpbmctdGltZS1wcmljZVwiIHYtaWY9XCJzdGF0ZT09J+W+heS7mOasvidcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3YWl0LXBheVwiPuetieW+heS7mOasvjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZXNpZHVlLXRpbWVcIj7liankvZnmlK/ku5jml7bpl7TvvJo8dGV4dD4wPC90ZXh0PuWkqTx0ZXh0PjA8L3RleHQ+5pe2PHRleHQ+MzwvdGV4dD7liIY8dGV4dD41OTwvdGV4dD7np5I8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1wYXktcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHTlnKjnur/mlK/ku5jvv6U8dGV4dD41MDAwLjAwPC90ZXh0Pu+8jOWIsOmZouWGjeS7mO+/pTx0ZXh0PjM4NTAwLjAwPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItdXNlaW5nLXRpbWUtcHJpY2VcIiB2LWlmPVwic3RhdGU9PSflt7Lku5jmrL4nXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2FpdC1wYXlcIj7lt7Lku5jmrL48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVzaWR1ZS10aW1lXCI+5pyJ5ZWG5ZOB5LqOMjAyMC0wNi0yOCAgMTE6MjA6MjPkvZzlup88L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1wYXktcHJpY2VzXCI+IOivt+WwveW/q+WIsOmZouS9v+eUqCA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWFsbC1tZXNzYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1tZXNzYWdlLWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbWVzc2FnZS1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbmFtZS1waG9uZS1kZWZhdWx0LWFkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIj4g5byg5LquIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLXBob25lXCI+MTg4KioqKjQzNTc8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVmYXVsdC1hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWZhdWx0XCI+6buY6K6kPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVmYXVsdC1hZGRyZXNzLWNvbnRlbnRcIj7lrrY8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hpcHBpbmctYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZHJlc3MtbmFtZVwiPuaUtui0p+WcsOWdgDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRyZXNzLWNvbnRlbnRcIj7lm5vlt53nnIHmiJDpg73luILmrabkvq/ljLrljY7nvo7ntKvppqjljLvlrabnvo7lrrnljLvpmaLlnLDlnYDlpKrlpJrmnIDlpJrkuKTooYzvvIzmnIDlpJrkuKTooYw8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1tZXNzYWdlLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9iYWNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBhcnRpY3VsYXJzXCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cIm9yZGVyLXBhcnRpY3VsYXJzXCIgPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZT5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1vcmRlci1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8IS0tIOW3suS7mOasvueahOaguOmUgOeggSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NvdW50LXBhaWQtY29kZVwiIHYtaWY9XCJzdGF0ZT09J+W3suS7mOasvidcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtbnVtYmVyXCI+6K6i5Y2V5qC46ZSA56CBIC0gRDExOTM4NyA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWhpbnRcIj7ljLvnvo7pobnnm67or7flnKjmlLbotLnlrqTlh7rnpLo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWhpbnRcIj7miqTogqTlk4Hpobnnm67lnKjkvJrlkZjkuK3lv4Plh7rnpLo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWltYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE5LnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1pdGVtc1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG9yZGVyUG9yZHVjdFwiIDprZXk9J2luZGV4Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VydmljZS1jb25kaXRpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZS1zZXJ2aWNlLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLW5hbWVcIj57e2l0ZW0ubmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXBwb2ludG1lbnRcIiA+IOWkseaViOeahOWVhuWTgeWwhuiHquWKqOmAgOasvu+8jOivt+WPiuaXtuWIsOmZouS9v+eUqCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWNvbnRlbnRcIiB2LWZvcj1cIihpLGspIGluIGl0ZW0ucG9yZHVjdEltYWdlc0xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWxpbmVcIj48dmlldyBjbGFzcz1cInBvcmR1Y3QtbGluZVwiPjwvdmlldz48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZhaWx1cmUtdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1oaW50XCI+5ZWG5ZOB5aSx5pWI77yaMjAyMC0wNC0yOCAgMjI6MjU6Mjc8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LWltYWdlXCIgdi1pZj1cImkuc3RhdGU9PSflt7LpgIDmrL4nXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9yZWZ1bmQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJpLnN0YXRlPT0n5bey5L2/55SoJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc3RhdGUyLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtdGV4dFwiIHYtaWY9XCJpLnN0YXRlPT0n5b6F5L2/55SoJ1wiPuW+heS9v+eUqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWltYWdlcy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpLnVybFwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1uYW1lXCI+e3tpLnBvcmR1Y3ROYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1pdGVtXCIgQHRhcD0nb3BlblBvcmR1Y3RDb250ZW50KGluZGV4LGspJyB2LWlmPVwiIWkuc2hvd1BvcmR1Y3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWNvbnRlbnQtaXRlbXNcIj57e2kuY29udGVudH19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImkuYXJyb3dJbWFnZXNcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvdy1wb3JkdWN0LWNvbnRlbnRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB2LWlmPVwiaS5zaG93UG9yZHVjdFwiIEB0YXA9J29wZW5Qb3JkdWN0Q29udGVudChpbmRleCxrKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1pdGVtc1wiIHYtZm9yPVwiKGksaykgaW4gaS5jb250ZW50TGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmVyc2lvbnNcIj7niYjmnKw6IHt7aS52ZXJzaW9uc319IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljYXRpb25cIj7op4TmoLw6IHt7aS5zcGVjaWZpY2F0aW9ufX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFydFwiPumDqOS9jToge3tpLnBhcnR9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb2N0b3JcIj7ljLvnlJ86IHt7aS5kb2N0b3J9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpLnRvcEltYWdlc1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlLW51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj48dGV4dD7vv6U8L3RleHQ+e3tpLnByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1udW1iZXJcIj54e3tpLnBvcmR1Y3ROdW1iZXJ9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1mb3ItdGhlLW9yZGVyIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LW9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiIHRvdGFsLXByaWNlLW9uLWxpbmUtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtcHJpY2VcIj7mgLvku7cgPHRleHQ+77+le3tpLmFsbFByaWNlfX08L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvbi1saW5lLXBheVwiPuWcqOe6v+aUr+S7mCA8dGV4dD7vv6V7e2kub25MaW5lUGF5fX08L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLWhvc3BpdGFsLXBheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50c1wiPuS8mOaDoCA8dGV4dD7vv6V7e2kuZGlzY291bnRzfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvc3BpdGFsLXBheVwiPuWIsOmZouWGjeS7mCA8dGV4dD7vv6V7e2kuaG9zcGl0YWxQYXl9fTwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb3BlLXdpdGhcIj7lupTku5ggPHRleHQ+77+le3tpLmNvcGVXaXRofX08L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LXRvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3AtbmFtZVwiPui1oOmAgeS/oeaBrzwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXktY29tcGxpbWVudGFyeVwiPuaIkeeahOi1oOWTgSA+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LWhpbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdOa4qemmqOaPkOekuu+8muaJgOaciei1oOWTgeWwhuS7peWNoeWIuOeahOW9ouW8j+WPkeaUvuWIsOi0puaIt+S4reOAguiLpeWPkeeUn+aVtOWNlemAgOasvu+8jOaIluaYr+mDqOWIhumAgOasvu+8jOaIkemZouacieadg+aUtuWbnuebuOWFs+i1oOWTge+8jOW5tuagueaNrumAgOasvi/pgIDljZXlkI7nmoTmg4XlhrXph43mlrDorqHnrpfotaDlk4Hkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtY29tcGxpbWVudGFyeVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LWl0ZW1cIiB2LWZvcj1cIihpLGspIGluIGNvbXBsaW1lbnRhcnlMaXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeS1uYW1lXCI+6LWg5ZOBPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktY29udGVudFwiPnt7aX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtZGlzY291bnQtZnVsbC1yZWR1Y3Rpb25cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbmFtZVwiPuWNoeWIuDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbWVzc2FnZVwiPua7oTUwMDDlh481MDA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1wcmljZVwiPi3vv6U1MDA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1uYW1lXCI+5ruh5YePPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLW1lc3NhZ2VcIj7mu6E1MDAw5YePNTAwPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1wcmljZVwiPi3vv6U1MDA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnQtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudC1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudC1uYW1lXCI+5oqY5omjPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50LW1lc3NhZ2VcIj7mu6Ey5Lu25YePNTAwPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudC1wcmljZVwiPi3vv6U1MDA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW50ZWdyYWwtZGlzY291bnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW50ZWdyYWwtZGlzY291bnQtbmFtZVwiPuenr+WIhuaKteaJozwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW50ZWdyYWwtZGlzY291bnQtcHJpY2VcIj4t77+lMTIwPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImludGVncmFsLWRpc2NvdW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImludGVncmFsLWRpc2NvdW50LW5hbWVcIj7llrXosYbmirXmiaM8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImludGVncmFsLWRpc2NvdW50LXByaWNlXCI+Le+/pTIwMDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnRlZ3JhbC1kaXNjb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnRlZ3JhbC1kaXNjb3VudC1uYW1lXCI+5L2Z6aKd5oq15omjPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnRlZ3JhbC1kaXNjb3VudC1wcmljZVwiPi3vv6UyMjA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtZGlzY291bnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsLWRpc2NvdW50cy1uYW1lXCI+5LyY5oOg5ZCI6K6hPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtdG90YWwtZGlzY291bnRzXCI+Le+/pTIwNDA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtcHJpY2UtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZS1tZXNzYWdlXCIgIHYtZm9yPVwiKGksaykgaW4gcHJpY2VMaXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWVcIiA6c3R5bGU9XCJ7Y29sb3I6aS5uYW1lPT0n5Zyo57q/5pSv5LuYJ3x8aS5uYW1lPT0n5Yiw6Zmi5YaN5LuYJz8nI2ZhMzQ3NSc6JyMwMDAwMDAnfVwiPnt7aS5uYW1lfX0gIDxpbWFnZSB2LWlmPVwiaS5uYW1lPT0n5LyY5oOg5ZCI6K6hJ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlXCIgOnN0eWxlPVwie2NvbG9yOmkubmFtZT09J+WcqOe6v+aUr+S7mCd8fGkubmFtZT09J+WIsOmZouWGjeS7mCc/JyNmYTM0NzUnOicjMDAwMDAwJ31cIj7vv6V7e2kucHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXBob25lLXNlcnZpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1waG9uZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0IDxidXR0b24gdHlwZT1cImRlZmF1bHRcIiAgcGxhaW49XCJ0cnVlXCI+5ouo5omT55S16K+dPC9idXR0b24+IFxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbm5lY3Rpb24tc2VydmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiICBwbGFpbj1cInRydWVcIj7ogZTns7vlrqLmnI08L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmV0dXJuLW1ldy1iZWFuXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1pbWFnZXMtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1pbWFnZXNcIj48aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9jYXJ0QmcucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmV0dXJuLW51bWJlclwiPui/lOWWteixhjEwMDDkuKo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmV0dXJuLWhpbnRcIj7ov5TllrXosYYxMDAw5LiqPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15LW1ldy1uZWFuXCI+5oiR55qE5Za16LGGID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWluZm9ybWF0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1zZXJpYWwtbnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7orqLljZXnvJblj7c6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJpYWwtbnVtYmVyXCI+e3tzZXJpYWxOdW1iZXJ9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29weVwiIEB0YXA9J2NvcHlTZXJpYWxOdW1iZXInPuWkjeWItjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci10aW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7kuIvljZXml7bpl7Q6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci10aW1lLWNvbnRlbnRcIj4yMDIwLTA0LTI4ICAxMTowMTowNzwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGUtbmFtZVwiPuaUr+S7mOexu+Weizo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1sYWJlbC1jb250ZW50XCI+6aKE57qm6YeR5pSv5LuYL+WFqOasvuS7mDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktd2F5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7mlK/ku5jmlrnlvI86PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktd2F5LWNvbnRlbnRcIj7lvq7kv6HmlK/ku5g8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ3Vlc3Mtd2hhdC15b3UtbGlrZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVsYXRlZC10aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PiDnjJzkvaDllpzmrKJcclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YmplY3QtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBvcmR1Y3QgOndpZHRoPTM1MCA6cG9yZHVjdExpc3Q9J3Byb2R1Y3RMaXN0JyA+PC9wb3JkdWN0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9jYXJ0QmcucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20taGludFwiPuacrOWWteS5n+aYr+acieW6lee6v+eahH48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5b6F5LuY5qy+IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbW1vYmlsaXphdGlvbi1idXR0b25cIiB2LWlmPVwic3RhdGU9PSflvoXku5jmrL4nXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLWJvdHRvblwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuY2VsLW9yZGVyXCI+XHJcblx0XHRcdFx0XHQgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1vcmRlcnNcIiB0eXBlPVwiZGVmYXVsdFwiICBwbGFpbj1cInRydWVcIj7lj5bmtojorqLljZU8L2J1dHRvbj4gXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29ubmVjdGlvbi1zZXJ2aWNlc1wiPlxyXG5cdFx0XHRcdFx0IDxidXR0b24gY2xhc3M9XCJjb25uZWN0aW9uLXNlcnZpY2Vzc1wiIHR5cGU9XCJkZWZhdWx0XCIgIHBsYWluPVwidHJ1ZVwiPuiBlOezu+WuouacjTwvYnV0dG9uPiBcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9tcHRseS1wYXlcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJwcm9tcHRseS1wYXlzXCIgdHlwZT1cImRlZmF1bHRcIiAgcGxhaW49XCJ0cnVlXCI+56uL5Y2z5pSv5LuYPC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHRcdFx0XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g5bey5LuY5qy+IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbW1vYmlsaXphdGlvbi1idXR0b25zXCIgdi1pZj1cInN0YXRlPT0n5bey5LuY5qy+J1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxlZnQtY29udG5ldFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsXCI+6YCA5qy+5piO57uGPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXBwbHktZm9yXCIgQHRhcD0nZ29Ub1JlZnVuZCc+55Sz6K+36YCA5qy+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLWJvdHRvblwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29ubmVjdGlvbi1zZXJ2aWNlc1wiPlxyXG5cdFx0XHRcdFx0IDxidXR0b24gY2xhc3M9XCJjb25uZWN0aW9uLXNlcnZpY2Vzc1wiIHR5cGU9XCJkZWZhdWx0XCIgIHBsYWluPVwidHJ1ZVwiPueri+WNs+mihOe6pjwvYnV0dG9uPiBcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9tcHRseS1wYXlcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJwcm9tcHRseS1wYXlzXCIgdHlwZT1cImRlZmF1bHRcIiAgcGxhaW49XCJ0cnVlXCI+5qC46ZSA5L2/55SoPC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHRcdFx0XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3AtYnV0dG9uXCIgQGNsaWNrPVwiVG9Ub3BcIiB2LWlmPVwic2hvd1RvcFwiPlxyXG5cdFx0XHRUT1BcclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHBvcmR1Y3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9yZHVjdC52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHBvcmR1Y3RcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lbnVXaWR0aDogMCxcclxuXHRcdFx0XHRtZW51VG9wOiAwLFxyXG5cdFx0XHRcdG1lbnVIZWlnaHQ6IDAsXHJcblx0XHRcdFx0bWVudUxlZnQ6IDAsXHJcblx0XHRcdFx0bWVudUJvdHRvbTogMCxcclxuXHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0YmFyTmFtZTogJ3BhcnRpY3VsYXJzUGFnZScsIC8v5a+86Iiq5p2h5ZCN56ewXHJcblx0XHRcdFx0dG9wQmFja2dyb3VuZENvbG9yOiAnI2ZhMzQ3NCcsXHJcblx0XHRcdFx0Y29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRiYWNrSW1hZ2U6ICcuLi9zdGF0aWMvaW1hZ2VzL2JhY2syLnBuZycsXHJcblx0XHRcdFx0dGl0bGU6ICforqLljZXor6bmg4UnLFxyXG5cdFx0XHRcdHN0YXRlOiflt7Lku5jmrL4nLC8v5piv5ZCm5LuY5qy+XHJcblx0XHRcdFx0b3JkZXJQb3JkdWN0OiBbe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5pS26LS55a6k5L2/55SoJyxcclxuXHRcdFx0XHRcdFx0cG9yZHVjdEltYWdlc0xpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjMucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROYW1lOiAn5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzmnIDlpJrkuKTooYzlsLHpmpDol4/mmL7npLrkuLouLi4uJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfniYjmnKzvvJrlsIrkuqvniYjvvJsg6KeE5qC877ya5YKy6Iul5ouJ5ZWG5ZOB5ZCN56ewLi4uLiAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudExpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZlcnNpb25zOiAn5bCK5Lqr54mIJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lmaWNhdGlvbjogJ+WCsuivuuaLiS3mmJ/nhqDlhYnpnaLlnIbnm5gnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJ0OiAn6IWL5LiL5YiH5Y+jK+WGheeqpemVnCjov5vlj6MpK+WPjOW5s+mdoicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRvY3RvcjogJ+iJvuWJkeiLsS/pgrHkvJ8nXHJcblx0XHRcdFx0XHRcdFx0XHR9LCBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpY2U6IDYwODAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGFycm93SW1hZ2VzOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHR0b3BJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd1BvcmR1Y3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWxsUHJpY2U6MTk2MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkxpbmVQYXk6NTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzY291bnRzOjYwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGhvc3BpdGFsUGF5OjE4NTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29wZVdpdGg6MTkwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRwb3JkdWN0TnVtYmVyOjIsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZTon5bey6YCA5qy+JyxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8yMC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cG9yZHVjdE5hbWU6ICfllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOacgOWkmuS4pOihjOWwsemakOiXj+aYvuekuuS4ui4uLi4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+eJiOacrO+8muWwiuS6q+eJiO+8myDop4TmoLzvvJrlgrLoi6Xmi4nllYblk4HlkI3np7AuLi4uICcsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50TGlzdDogW3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmVyc2lvbnM6ICflsIrkuqvniYgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWZpY2F0aW9uOiAn5YKy6K+65ouJLeaYn+eGoOWFiemdouWchuebmCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnQ6ICfohYvkuIvliIflj6Mr5YaF56ql6ZWcKOi/m+WPoykr5Y+M5bmz6Z2iJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZG9jdG9yOiAn6Im+5YmR6IuxL+mCseS8nydcclxuXHRcdFx0XHRcdFx0XHRcdH0sIF0sXHJcblx0XHRcdFx0XHRcdFx0XHRwcmljZTogNjA4MDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXJyb3dJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRvcEltYWdlczogJy4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctdG9wLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHRzaG93UG9yZHVjdDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRhbGxQcmljZToxOTYwMCxcclxuXHRcdFx0XHRcdFx0XHRcdG9uTGluZVBheTo1MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNjb3VudHM6NjAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0aG9zcGl0YWxQYXk6MTg1MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3BlV2l0aDoxOTAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROdW1iZXI6MVxyXG5cdFx0XHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8yMy5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cG9yZHVjdE5hbWU6ICfllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOacgOWkmuS4pOihjOWwsemakOiXj+aYvuekuuS4ui4uLi4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+eJiOacrO+8muWwiuS6q+eJiO+8myDop4TmoLzvvJrlgrLoi6Xmi4nllYblk4HlkI3np7AuLi4uICcsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50TGlzdDogW3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmVyc2lvbnM6ICflsIrkuqvniYgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWZpY2F0aW9uOiAn5YKy6K+65ouJLeaYn+eGoOWFiemdouWchuebmCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnQ6ICfohYvkuIvliIflj6Mr5YaF56ql6ZWcKOi/m+WPoykr5Y+M5bmz6Z2iJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZG9jdG9yOiAn6Im+5YmR6IuxL+mCseS8nydcclxuXHRcdFx0XHRcdFx0XHRcdH0sIF0sXHJcblx0XHRcdFx0XHRcdFx0XHRwcmljZTogNjA4MDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXJyb3dJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRvcEltYWdlczogJy4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctdG9wLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHRzaG93UG9yZHVjdDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRhbGxQcmljZToxOTYwMCxcclxuXHRcdFx0XHRcdFx0XHRcdG9uTGluZVBheTo1MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNjb3VudHM6NjAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0aG9zcGl0YWxQYXk6MTg1MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3BlV2l0aDoxOTAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROdW1iZXI6MixcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXRlOiflt7Lkvb/nlKgnLFxyXG5cdFx0XHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8xOS5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cG9yZHVjdE5hbWU6ICfllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOacgOWkmuS4pOihjOWwsemakOiXj+aYvuekuuS4ui4uLi4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+eJiOacrO+8muWwiuS6q+eJiO+8myDop4TmoLzvvJrlgrLoi6Xmi4nllYblk4HlkI3np7AuLi4uICcsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50TGlzdDogW3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmVyc2lvbnM6ICflsIrkuqvniYgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWZpY2F0aW9uOiAn5YKy6K+65ouJLeaYn+eGoOWFiemdouWchuebmCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnQ6ICfohYvkuIvliIflj6Mr5YaF56ql6ZWcKOi/m+WPoykr5Y+M5bmz6Z2iJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZG9jdG9yOiAn6Im+5YmR6IuxL+mCseS8nydcclxuXHRcdFx0XHRcdFx0XHRcdH0sIF0sXHJcblx0XHRcdFx0XHRcdFx0XHRwcmljZTogNjA4MDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXJyb3dJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRvcEltYWdlczogJy4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctdG9wLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHRzaG93UG9yZHVjdDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRhbGxQcmljZToxOTYwMCxcclxuXHRcdFx0XHRcdFx0XHRcdG9uTGluZVBheTo1MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNjb3VudHM6NjAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0aG9zcGl0YWxQYXk6MTg1MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3BlV2l0aDoxOTAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROdW1iZXI6MixcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXRlOiflvoXkvb/nlKgnLCBcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+S8muWRmOS4reW/g+S9v+eUqCcsXHJcblx0XHRcdFx0XHRcdHBvcmR1Y3RJbWFnZXNMaXN0OiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzLzIzLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHRwb3JkdWN0TmFtZTogJ+WVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5pyA5aSa5Lik6KGM5bCx6ZqQ6JeP5pi+56S65Li6Li4uLicsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn54mI5pys77ya5bCK5Lqr54mI77ybIOinhOagvO+8muWCsuiLpeaLieWVhuWTgeWQjeensC4uLi4gJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnRMaXN0OiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2ZXJzaW9uczogJ+WwiuS6q+eJiCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpZmljYXRpb246ICflgrLor7rmi4kt5pif54ag5YWJ6Z2i5ZyG55uYJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFydDogJ+iFi+S4i+WIh+WPoyvlhoXnqqXplZwo6L+b5Y+jKSvlj4zlubPpnaInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkb2N0b3I6ICfoib7liZHoi7Ev6YKx5LyfJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSwgXSxcclxuXHRcdFx0XHRcdFx0XHRcdHByaWNlOiA2MDgwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRhcnJvd0ltYWdlczogJy4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dG9wSW1hZ2VzOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy10b3AucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdHNob3dQb3JkdWN0OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGFsbFByaWNlOjE5NjAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0b25MaW5lUGF5OjUwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGRpc2NvdW50czo2MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRob3NwaXRhbFBheToxODUwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNvcGVXaXRoOjE5MDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0cG9yZHVjdE51bWJlcjoyXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjAucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROYW1lOiAn5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzmnIDlpJrkuKTooYzlsLHpmpDol4/mmL7npLrkuLouLi4uJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfniYjmnKzvvJrlsIrkuqvniYjvvJsg6KeE5qC877ya5YKy6Iul5ouJ5ZWG5ZOB5ZCN56ewLi4uLiAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudExpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZlcnNpb25zOiAn5bCK5Lqr54mIJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lmaWNhdGlvbjogJ+WCsuivuuaLiS3mmJ/nhqDlhYnpnaLlnIbnm5gnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJ0OiAn6IWL5LiL5YiH5Y+jK+WGheeqpemVnCjov5vlj6MpK+WPjOW5s+mdoicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRvY3RvcjogJ+iJvuWJkeiLsS/pgrHkvJ8nXHJcblx0XHRcdFx0XHRcdFx0XHR9LCBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpY2U6IDYwODAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGFycm93SW1hZ2VzOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHR0b3BJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd1BvcmR1Y3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWxsUHJpY2U6MTk2MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkxpbmVQYXk6NTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzY291bnRzOjYwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGhvc3BpdGFsUGF5OjE4NTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29wZVdpdGg6MTkwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRwb3JkdWN0TnVtYmVyOjFcclxuXHRcdFx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjMucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROYW1lOiAn5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzmnIDlpJrkuKTooYzlsLHpmpDol4/mmL7npLrkuLouLi4uJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfniYjmnKzvvJrlsIrkuqvniYjvvJsg6KeE5qC877ya5YKy6Iul5ouJ5ZWG5ZOB5ZCN56ewLi4uLiAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudExpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZlcnNpb25zOiAn5bCK5Lqr54mIJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lmaWNhdGlvbjogJ+WCsuivuuaLiS3mmJ/nhqDlhYnpnaLlnIbnm5gnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJ0OiAn6IWL5LiL5YiH5Y+jK+WGheeqpemVnCjov5vlj6MpK+WPjOW5s+mdoicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRvY3RvcjogJ+iJvuWJkeiLsS/pgrHkvJ8nXHJcblx0XHRcdFx0XHRcdFx0XHR9LCBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpY2U6IDYwODAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGFycm93SW1hZ2VzOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHR0b3BJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd1BvcmR1Y3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWxsUHJpY2U6MTk2MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkxpbmVQYXk6NTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzY291bnRzOjYwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGhvc3BpdGFsUGF5OjE4NTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29wZVdpdGg6MTkwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRwb3JkdWN0TnVtYmVyOjFcclxuXHRcdFx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMTkucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdHBvcmR1Y3ROYW1lOiAn5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzmnIDlpJrkuKTooYzlsLHpmpDol4/mmL7npLrkuLouLi4uJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfniYjmnKzvvJrlsIrkuqvniYjvvJsg6KeE5qC877ya5YKy6Iul5ouJ5ZWG5ZOB5ZCN56ewLi4uLiAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudExpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZlcnNpb25zOiAn5bCK5Lqr54mIJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lmaWNhdGlvbjogJ+WCsuivuuaLiS3mmJ/nhqDlhYnpnaLlnIbnm5gnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJ0OiAn6IWL5LiL5YiH5Y+jK+WGheeqpemVnCjov5vlj6MpK+WPjOW5s+mdoicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRvY3RvcjogJ+iJvuWJkeiLsS/pgrHkvJ8nXHJcblx0XHRcdFx0XHRcdFx0XHR9LCBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpY2U6IDYwODAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGFycm93SW1hZ2VzOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHR0b3BJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd1BvcmR1Y3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWxsUHJpY2U6MTk2MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkxpbmVQYXk6NTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzY291bnRzOjYwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGhvc3BpdGFsUGF5OjE4NTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29wZVdpdGg6MTkwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRwb3JkdWN0TnVtYmVyOjJcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRwb3J1Y3ROdW1iZXI6IDRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfpgq7lr4TllYblk4EnLFxyXG5cdFx0XHRcdFx0XHRwb3JkdWN0SW1hZ2VzTGlzdDogW3tcclxuXHRcdFx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzLzIzLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0cG9yZHVjdE5hbWU6ICfllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOacgOWkmuS4pOihjOWwsemakOiXj+aYvuekuuS4ui4uLi4nLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfniYjmnKzvvJrlsIrkuqvniYjvvJsg6KeE5qC877ya5YKy6Iul5ouJ5ZWG5ZOB5ZCN56ewLi4uLiAnLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnRMaXN0OiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmVyc2lvbnM6ICflsIrkuqvniYgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3BlY2lmaWNhdGlvbjogJ+WCsuivuuaLiS3mmJ/nhqDlhYnpnaLlnIbnm5gnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFydDogJ+iFi+S4i+WIh+WPoyvlhoXnqqXplZwo6L+b5Y+jKSvlj4zlubPpnaInLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZG9jdG9yOiAn6Im+5YmR6IuxL+mCseS8nydcclxuXHRcdFx0XHRcdFx0XHR9LCBdLFxyXG5cdFx0XHRcdFx0XHRcdHByaWNlOiA2MDgwMDAsXHJcblx0XHRcdFx0XHRcdFx0YXJyb3dJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJyxcclxuXHRcdFx0XHRcdFx0XHR0b3BJbWFnZXM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdHNob3dQb3JkdWN0OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRhbGxQcmljZToxOTYwMCxcclxuXHRcdFx0XHRcdFx0XHRvbkxpbmVQYXk6NTAwLFxyXG5cdFx0XHRcdFx0XHRcdGRpc2NvdW50czo2MDAsXHJcblx0XHRcdFx0XHRcdFx0aG9zcGl0YWxQYXk6MTg1MDAsXHJcblx0XHRcdFx0XHRcdFx0Y29wZVdpdGg6MTkwMDAsXHJcblx0XHRcdFx0XHRcdFx0cG9yZHVjdE51bWJlcjoyXHJcblx0XHRcdFx0XHRcdFx0fSwgXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjAucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRwb3JkdWN0TmFtZTogJ+WVhuWTgeWQjeensCzllYblk4HlkI3np7As5ZWG5ZOB5ZCN56ewLOWVhuWTgeWQjeensCzllYblk4HlkI3np7As5pyA5aSa5Lik6KGM5bCx6ZqQ6JeP5pi+56S65Li6Li4uLicsXHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+eJiOacrO+8muWwiuS6q+eJiO+8myDop4TmoLzvvJrlgrLoi6Xmi4nllYblk4HlkI3np7AuLi4uICcsXHJcblx0XHRcdFx0XHRcdFx0Y29udGVudExpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHR2ZXJzaW9uczogJ+WwiuS6q+eJiCcsXHJcblx0XHRcdFx0XHRcdFx0XHRzcGVjaWZpY2F0aW9uOiAn5YKy6K+65ouJLeaYn+eGoOWFiemdouWchuebmCcsXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJ0OiAn6IWL5LiL5YiH5Y+jK+WGheeqpemVnCjov5vlj6MpK+WPjOW5s+mdoicsXHJcblx0XHRcdFx0XHRcdFx0XHRkb2N0b3I6ICfoib7liZHoi7Ev6YKx5LyfJ1xyXG5cdFx0XHRcdFx0XHRcdH0sIF0sXHJcblx0XHRcdFx0XHRcdFx0cHJpY2U6IDYwODAwMCxcclxuXHRcdFx0XHRcdFx0XHRhcnJvd0ltYWdlczogJy4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdHRvcEltYWdlczogJy4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctdG9wLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0c2hvd1BvcmR1Y3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGFsbFByaWNlOjE5NjAwLFxyXG5cdFx0XHRcdFx0XHRcdG9uTGluZVBheTo1MDAsXHJcblx0XHRcdFx0XHRcdFx0ZGlzY291bnRzOjYwMCxcclxuXHRcdFx0XHRcdFx0XHRob3NwaXRhbFBheToxODUwMCxcclxuXHRcdFx0XHRcdFx0XHRjb3BlV2l0aDoxOTAwMCxcclxuXHRcdFx0XHRcdFx0XHRwb3JkdWN0TnVtYmVyOjFcclxuXHRcdFx0XHRcdFx0fSwgXSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRjb21wbGltZW50YXJ5TGlzdDpbXHJcblx0XHRcdFx0XHQnSELpnaLohpwoMueJh+ijhSnkuIDnm5InLFxyXG5cdFx0XHRcdFx0J+WNjuahkeiRhumqiuenkeeOrumYsuaZkumcnFNQRjMw77yIMuaUr++8iScsXHJcblx0XHRcdFx0XHQnMjDlhYPml6Dpl6jmp5vljaHliLgnLFxyXG5cdFx0XHRcdFx0JzIwMDDlhYPmu6Hlh4/liLgnXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRwcmljZUxpc3Q6W1xyXG5cdFx0XHRcdFx0e25hbWU6J+WVhuWTgeaAu+S7tycscHJpY2U6NTY4MDB9LFxyXG5cdFx0XHRcdFx0e25hbWU6J+S8mOaDoOWQiOiuoScscHJpY2U6NjgwMH0sXHJcblx0XHRcdFx0XHR7bmFtZTon6YKu5a+E6L+Q6LS5JyxwcmljZTowfSxcclxuXHRcdFx0XHRcdHtuYW1lOiflrp7pmYXlupTku5gnLHByaWNlOjUwMDAwfSxcclxuXHRcdFx0XHRcdHtuYW1lOiflnKjnur/mlK/ku5gnLHByaWNlOjEwMDB9LFxyXG5cdFx0XHRcdFx0e25hbWU6J+WIsOmZouWGjeS7mCcscHJpY2U6NDkwMDB9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0c2VyaWFsTnVtYmVyOjIzNTQ3Nzc2NTQsLy/orqLljZXnvJblj7dcclxuXHRcdFx0XHRzaG93VG9wOmZhbHNlLFxyXG5cdFx0XHRcdHByb2R1Y3RMaXN0OiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMTkucG5nJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmiJHmmK/mlofnq6DmoIfpopjvvIzmmL7npLrkuKTmjpLlkI7lsLHku6XnnIHnlaXlj7fnu5PmnZ/vvJ/mnIDlpJrkuKTmjpLmnIDlpJrkuKTmjpIuLi4nLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogW10sIC8v5qCH562+XHJcblx0XHRcdFx0XHRcdGhlYWRQb3J0cmFpdDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjMucG5nJywgLy/lpLTlg49cclxuXHRcdFx0XHRcdFx0cHJpY2U6IDE5ODAwLFxyXG5cdFx0XHRcdFx0XHRjbG9zZWQ6J+mXremmhueJueaOqCcsXHJcblx0XHRcdFx0XHRcdGFjdGl2aXR5OiBbXSxcclxuXHRcdFx0XHRcdFx0dmlwUHJpY2U6IDAsXHJcblx0XHRcdFx0XHRcdHN1YnNjcmliZUFuZEdvb2RSZXB1dGF0aW9uOiBbe1xyXG5cdFx0XHRcdFx0XHRcdHN1YnNjcmliZTogJzQ0MScsXHJcblx0XHRcdFx0XHRcdFx0Z29vZFJlcHV0YXRpb246ICc5OCdcclxuXHRcdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8yMC5wbmcnLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+aIkeaYr+aWh+eroOagh+mimO+8jOaYvuekuuS4pOaOkuWQjuWwseS7peecgeeVpeWPt+e7k+adn++8n+acgOWkmuS4pOaOkuacgOWkmuS4pOaOki4uLicsXHJcblx0XHRcdFx0XHRcdGxhYmVsOiBbXSwgLy/moIfnrb5cclxuXHRcdFx0XHRcdFx0aGVhZFBvcnRyYWl0OiAnLi4vLi4vc3RhdGljL2ltYWdlcy90ZXN0LmpwZycsIC8v5aS05YOPXHJcblx0XHRcdFx0XHRcdGFjdGl2aXR5OiBbJ+mmluWNleW/heWHjycsICfmipjmiaMnXSxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IDE5ODAwLFxyXG5cdFx0XHRcdFx0XHR2aXBQcmljZTogMTg4MDAsXHJcblx0XHRcdFx0XHRcdHN1YnNjcmliZUFuZEdvb2RSZXB1dGF0aW9uOiBbe1xyXG5cdFx0XHRcdFx0XHRcdHN1YnNjcmliZTogJzQ0MScsXHJcblx0XHRcdFx0XHRcdFx0Z29vZFJlcHV0YXRpb246ICc5OCdcclxuXHRcdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzLzE5LnBuZycsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5oiR5piv5paH56ug5qCH6aKY77yM5pi+56S65Lik5o6S5ZCO5bCx5Lul55yB55Wl5Y+357uT5p2f77yf5pyA5aSa5Lik5o6S5pyA5aSa5Lik5o6SLi4uJyxcclxuXHRcdFx0XHRcdFx0bGFiZWw6IFtdLCAvL+agh+etvlxyXG5cdFx0XHRcdFx0XHRoZWFkUG9ydHJhaXQ6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzLzIzLnBuZycsIC8v5aS05YOPXHJcblx0XHRcdFx0XHRcdHByaWNlOiAxOTgwMCxcclxuXHRcdFx0XHRcdFx0Y2xvc2VkOifpl63ppobnibnmjqgnLFxyXG5cdFx0XHRcdFx0XHRhY3Rpdml0eTogW10sXHJcblx0XHRcdFx0XHRcdHZpcFByaWNlOiAwLFxyXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVBbmRHb29kUmVwdXRhdGlvbjogW3tcclxuXHRcdFx0XHRcdFx0XHRzdWJzY3JpYmU6ICc0NDEnLFxyXG5cdFx0XHRcdFx0XHRcdGdvb2RSZXB1dGF0aW9uOiAnOTgnXHJcblx0XHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzLzIwLnBuZycsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5oiR5piv5paH56ug5qCH6aKY77yM5pi+56S65Lik5o6S5ZCO5bCx5Lul55yB55Wl5Y+357uT5p2f77yf5pyA5aSa5Lik5o6S5pyA5aSa5Lik5o6SLi4uJyxcclxuXHRcdFx0XHRcdFx0bGFiZWw6IFtdLCAvL+agh+etvlxyXG5cdFx0XHRcdFx0XHRoZWFkUG9ydHJhaXQ6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL3Rlc3QuanBnJywgLy/lpLTlg49cclxuXHRcdFx0XHRcdFx0YWN0aXZpdHk6IFsn6aaW5Y2V5b+F5YePJywgJ+aKmOaJoyddLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogMTk4MDAsXHJcblx0XHRcdFx0XHRcdHZpcFByaWNlOiAxODgwMCxcclxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlQW5kR29vZFJlcHV0YXRpb246IFt7XHJcblx0XHRcdFx0XHRcdFx0c3Vic2NyaWJlOiAnNDQxJyxcclxuXHRcdFx0XHRcdFx0XHRnb29kUmVwdXRhdGlvbjogJzk4J1xyXG5cdFx0XHRcdFx0XHR9XSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8g6I635Y+W5bGP5bmV6auY5bqmXHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdHRoYXQuaGVpZ2h0ID0gcmVzLnNjcmVlbkhlaWdodFxyXG5cdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSBtZW51LnRvcFxyXG5cdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IG1lbnUuYm90dG9tXHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVQYWRkaW5nUmlnaHQgPSByZXMud2luZG93V2lkdGggLSBtZW51LnJpZ2h0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6L+U5Zue5LiK5LiA57qnXHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2JhY2snKVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlblBvcmR1Y3RDb250ZW50OmZ1bmN0aW9uKGluZGV4LGspe1xyXG5cdFx0XHRcdGxldCBzaG93UG9yZHVjdCA9IHRoaXMub3JkZXJQb3JkdWN0W2luZGV4XS5wb3JkdWN0SW1hZ2VzTGlzdFtrXS5zaG93UG9yZHVjdFxyXG5cdFx0XHRcdHRoaXMub3JkZXJQb3JkdWN0W2luZGV4XS5wb3JkdWN0SW1hZ2VzTGlzdFtrXS5zaG93UG9yZHVjdCA9ICFzaG93UG9yZHVjdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb3B5U2VyaWFsTnVtYmVyOmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xyXG5cdFx0XHRcdCAgICBkYXRhOiB0aGlzLnNlcmlhbE51bWJlcixcclxuXHRcdFx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coJ+WkjeWItuaIkOWKnycpO1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFRvVG9wOmZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5wYWdlU2Nyb2xsVG8oe1xyXG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiAwLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDYwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdvVG9SZWZ1bmQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvbXkvbXlfb3JkZXJfcmVmdW5kYCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25QYWdlU2Nyb2xsOmZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRpZihlLnNjcm9sbFRvcCA+IDAgKXtcclxuXHRcdFx0XHR0aGlzLnNob3dUb3AgPSB0cnVlXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihlLnNjcm9sbFRvcCA9PSAwKXtcclxuXHRcdFx0XHR0aGlzLnNob3dUb3AgPSBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0Lm15X29yZGVyX2RldGFpbCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdH1cclxuXHJcblx0LnRvcC1uYXYtbWVzc2FnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ5ZGVnLCAjZjI0Nzg4IDAlLCAjZmY2OWExIDEwMCUpO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBycHg7XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBycHg7XHJcblx0fVxyXG5cclxuXHQubXktdG9wLWJhciB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDlkZWcsICNmMjQ3ODggMCUsICNmZjY5YTEgMTAwJSk7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LmJhY2stdGl0bGUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDM4cnB4O1xyXG5cdH1cclxuXHJcblx0LmJhY2sge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0XHR3aWR0aDogNjBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuYmFjayBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdH1cclxuXHJcblx0LmJhY2stdGl0bGUgLnRpdGxlIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRtYXJnaW4tbGVmdDogODBycHg7XHJcblx0fVxyXG5cclxuXHQudG9wLW1lc3NhZ2Uge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA1MHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMTBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1tZXNzYWdlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1pbWFnZXMsXHJcblx0LnVzZXItaW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiAxMDhycHg7XHJcblx0XHRoZWlnaHQ6IDEwOHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDU5cnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItaW1hZ2VzIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQud2FpdC1wYXkge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHR9XHJcblx0LnVzZXItcGF5LXByaWNlc3tcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQucmVzaWR1ZS10aW1lIHtcclxuXHRcdG9wYWNpdHk6IDAuNztcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjJycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1hbGwtbWVzc2FnZSB7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTE1MHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLW1lc3NhZ2UtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDM0cnB4IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZS1waG9uZS1kZWZhdWx0LWFkZHJlc3Mge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudXNlci1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdG1hcmdpbi1yaWdodDogNTBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1waG9uZSB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LmRlZmF1bHQtYWRkcmVzcyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmRlZmF1bHQge1xyXG5cdFx0d2lkdGg6IDY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0LWFkZHJlc3MtY29udGVudCB7XHJcblx0XHR3aWR0aDogNjZycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODgzNGZhIDAlLCAjYmM2NmZmIDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTZycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1tZXNzYWdlLXJpZ2h0IHtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHR9XHJcblxyXG5cdC5zaGlwcGluZy1hZGRyZXNzIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzM0MzQzNDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5hZGRyZXNzLWNvbnRlbnQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIycnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdHdpZHRoOiA0MTBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1tZXNzYWdlLXJpZ2h0IGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cdC5hbGwtb3JkZXItbWVzc2FnZXtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxNzBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5hY2NvdW50LXBhaWQtY29kZXtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cdC5hY2NvdW50LXBhaWQtY29kZS1jb250ZW50e1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHggMCAzMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmFjY291bnQtcGFpZC1jb2RlLW51bWJlcntcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDI0cnB4O1xyXG5cdH1cclxuXHQuYWNjb3VudC1wYWlkLWNvZGUtaGludHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblx0LmFjY291bnQtcGFpZC1jb2RlLWltYWdlIGltYWdle1xyXG5cdFx0d2lkdGg6IDMyMHJweDtcclxuXHRcdGhlaWdodDogMzIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5vcmRlci1jb250ZW50e1xyXG5cdFx0cGFkZGluZzogNDBycHggMjBycHggMDtcclxuXHR9XHJcblx0XHJcblx0Lm9yZGVyLWl0ZW1ze1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwIDtcclxuXHR9XHJcblx0LnNlcnZpY2UtY29uZGl0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIycnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cdC5saW5lLXNlcnZpY2UtbmFtZXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQubGluZSB7XHJcblx0XHR3aWR0aDogNnJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHRcclxuXHQuc2VydmljZS1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyOHJweDtcclxuXHR9XHJcblx0LmFwcG9pbnRtZW50e1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHQub3JkZXItcG9yZHVjdC1jb250ZW50e1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHR9XHJcblx0Lm9yZGVyLXBvcmR1Y3QtbGluZXtcclxuXHRcdHBhZGRpbmc6IDAgMCAzMnJweDtcclxuXHR9XHJcblx0LnBvcmR1Y3QtbGluZXtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0XHRoZWlnaHQ6IDJycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5mYWlsdXJlLXRpbWV7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cdC50aW1lLWhpbnR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cdC5oaW50LWltYWdle1xyXG5cdFx0d2lkdGg6IDE2NXJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtNjBycHg7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdG9wYWNpdHk6IDAuNTtcclxuXHR9XHJcblx0LmhpbnQtaW1hZ2UgaW1hZ2V7XHJcblx0XHR3aWR0aDogMTY1cnB4O1xyXG5cdFx0aGVpZ2h0OiAxMzBycHg7XHJcblx0fVxyXG5cdC5oaW50LXRleHR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC5vcmRlci1wb3JkdWN0LWltYWdlcy1uYW1le1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMnJweCBzb2xpZCAjRjBGMEYwO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDMwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5wb3JkdWN0LWltYWdlc3tcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHR9XHJcblx0LnBvcmR1Y3QtaW1hZ2VzIGltYWdle1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdH1cclxuXHQucG9yZHVjdC1yaWdodHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQucG9yZHVjdC1uYW1le1xyXG5cdFx0d2lkdGg6IDQzMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblx0LmNvbnRlbnQtaXRlbXtcclxuXHRcdHdpZHRoOiAzMjBycHg7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0XHRwYWRkaW5nOiAwIDE0cnB4IDAgMTZycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LmNvbnRlbnQtaXRlbSBpbWFnZXtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cdC5zaG93LXBvcmR1Y3QtY29udGVudCBpbWFnZXtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cdC5zaG93LXBvcmR1Y3QtY29udGVudHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxNnJweCA7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDg4cnB4O1xyXG5cdFx0d2lkdGg6IDM2MHJweDtcclxuXHRcdG1pbi1oZWlnaHQ6IDE0MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRjb2xvcjogIzMzMzMzMztcclxuXHRcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdH1cclxuXHQuc2hvdy1wb3JkdWN0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbXN7XHJcblx0XHR3aWR0aDogMjkwcnB4O1xyXG5cdH1cclxuXHQucG9yZHVjdC1jb250ZW50LWl0ZW1ze1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdHdpZHRoOiAyODBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5wb3JkdWN0LXByaWNlLW51bWJlcntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXJweDtcclxuXHR9XHJcblx0XHJcblx0LnBvcmR1Y3QtcHJpY2V7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0XHJcblx0fVxyXG5cdC5wb3JkdWN0LXByaWNlIHRleHR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQucG9yZHVjdC1udW1iZXJ7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQuY29udGVudC1pdGVtc3tcclxuXHRcdHdpZHRoOiAyOTBycHg7XHJcblx0fVxyXG5cdFx0XHJcblx0LnBheS1vcmRlci1jb250ZW50IHtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI0YwRjBGMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI0YwRjBGMDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQucGF5LW9yZGVyLWNvbnRlbnQgdGV4dCB7XHJcblx0XHRtYXJnaW4tbGVmdDogNDBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC50b3RhbC1wcmljZS1vbi1saW5lLXBheSxcclxuXHQuZGlzY291bnRzLWhvc3BpdGFsLXBheSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblx0XHJcblx0LmRpc2NvdW50cyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0Lm9uLWxpbmUtcGF5LFxyXG5cdC5kaXNjb3VudHMge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdC5vbi1saW5lLXBheSwuaG9zcGl0YWwtcGF5e1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHR9XHJcblx0XHJcblx0LmRpc2NvdW50cyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjZycHg7XHJcblx0XHRoZWlnaHQ6IDI2cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY29wZS13aXRoIHtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cdFx0XHJcblx0LmNvbXBsaW1lbnRhcnl7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweDtcclxuXHR9XHJcblx0LmNvbXBsaW1lbnRhcnktdG9we1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xyXG5cdH1cclxuXHQudG9wLW5hbWV7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0Lm15LWNvbXBsaW1lbnRhcnl7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jb21wbGltZW50YXJ5LWhpbnR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRwYWRkaW5nOiAxNXJweCAwIDMycnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMnJweCBzb2xpZCAjZjBmMGYwO1xyXG5cdH1cclxuXHQuYWxsLWNvbXBsaW1lbnRhcnl7XHJcblx0XHRwYWRkaW5nLXRvcDogIDQwcnB4O1xyXG5cdH1cclxuXHQuY29tcGxpbWVudGFyeS1pdGVte1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblx0LmNvbXBsaW1lbnRhcnktaXRlbTpsYXN0LWNoaWxke1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblx0LmNvbXBsaW1lbnRhcnktbmFtZXtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE4cnB4O1xyXG5cdH1cclxuXHQuY29tcGxpbWVudGFyeS1jb250ZW50e1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdC50aWNrZXQtZGlzY291bnQtZnVsbC1yZWR1Y3Rpb257XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHQudGlja2V0LWNvbnRlbnQsLmZ1bGwtcmVkdWN0aW9uLWNvbnRlbnQsLmRpc2NvdW50LWNvbnRlbnR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cnB4O1xyXG5cdH1cclxuXHQudGlja2V0LW5hbWUtbWVzc2FnZSwuZnVsbC1yZWR1Y3Rpb24tbmFtZS1tZXNzYWdlLC5kaXNjb3VudC1uYW1lLW1lc3NhZ2V7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0XHJcblx0fVxyXG5cdC50aWNrZXQtbmFtZSwuZnVsbC1yZWR1Y3Rpb24tbmFtZSwuZGlzY291bnQtbmFtZXtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0fVxyXG5cdC50aWNrZXQtbWVzc2FnZSwuZnVsbC1yZWR1Y3Rpb24tbWVzc2FnZSwuZGlzY291bnQtbWVzc2FnZXtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblx0LnRpY2tldC1wcmljZSwuZnVsbC1yZWR1Y3Rpb24tcHJpY2UsLmRpc2NvdW50LXByaWNle1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdH1cclxuXHRcclxuXHQuaW50ZWdyYWwtZGlzY291bnR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuXHR9XHJcblx0LmludGVncmFsLWRpc2NvdW50LW5hbWV7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblx0LmludGVncmFsLWRpc2NvdW50LXByaWNle1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdH1cclxuXHQudG90YWwtZGlzY291bnRze1xyXG5cdFx0Ym9yZGVyLXRvcDogMnJweCBzb2xpZCAjZjBmMGYwO1xyXG5cdFx0cGFkZGluZy10b3A6IDMwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC50b3RhbC1kaXNjb3VudHMtbmFtZXtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblx0LmFsbC10b3RhbC1kaXNjb3VudHN7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5hbGwtcHJpY2UtbWVzc2FnZXtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5wcmljZS1uYW1lLW1lc3NhZ2V7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdC5wcmljZS1uYW1lLW1lc3NhZ2U6bGFzdC1jaGlsZHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cdC5wcmljZS1uYW1le1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5wcmljZS1uYW1lIGltYWdle1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnJweDtcclxuXHR9XHJcblx0LnByaWNlLW1lc3NhZ2V7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0fVxyXG5cdFxyXG5cdC5wYXktcGhvbmUtc2VydmljZXtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LnBheS1waG9uZXtcclxuXHRcdHdpZHRoOiAzNTBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzg4MzRmYSAwJSwgI2JjNjZmZiAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1x0XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdH1cclxuXHQucGF5LXBob25lIGJ1dHRvbiwuY29ubmVjdGlvbi1zZXJ2aWNlIGJ1dHRvbntcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuY29ubmVjdGlvbi1zZXJ2aWNle1xyXG5cdFx0d2lkdGg6IDM0OXJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgI2ZhMzQ3NSAwJSwgICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcdFxyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcdFx0XHJcblx0fVxyXG5cdFxyXG5cdC5yZXR1cm4tbWV3LWJlYW57XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRwYWRkaW5nOiAzM3JweCA0MHJweCA7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQubWV3LWJlYW4taW1hZ2VzLW1lc3NhZ2V7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblx0Lm1ldy1iZWFuLW1lc3NhZ2V7XHJcblx0XHRtYXJnaW4tbGVmdDogNDBycHg7XHJcblx0fVxyXG5cdC5tZXctYmVhbi1pbWFnZXMgaW1hZ2V7XHJcblx0XHR3aWR0aDogOTBycHg7XHJcblx0XHRoZWlnaHQ6IDcwcnB4O1xyXG5cdH1cclxuXHQucmV0dXJuLW51bWJlcntcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHQucmV0dXJuLWhpbnR7XHRcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0fVxyXG5cdC5teS1tZXctbmVhbntcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHRcclxuXHQub3JkZXItaW5mb3JtYXRpb257XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblx0XHJcblx0Lm9yZGVyLXNlcmlhbC1udW1iZXIsLm9yZGVyLXRpbWUsLnBheS1sYWJlbCwucGF5LXdheXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjRycHg7XHJcblx0fVxyXG5cdC5wYXktd2F5e1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblx0LnRpdGxlLW5hbWV7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdG1hcmdpbi1yaWdodDogMzJycHg7XHJcblx0fVxyXG5cdC5jb3B5e1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHQgbWFyZ2luLWxlZnQ6IDI0cnB4O1xyXG5cdH1cclxuXHRcclxuXHQvKiDnjJzkvaDllpzmrKIgKi9cclxuXHQuZ3Vlc3Mtd2hhdC15b3UtbGlrZSB7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweDtcclxuXHR9XHJcblx0LmxpbmUge1xyXG5cdFx0d2lkdGg6IDRycHg7XHJcblx0XHRoZWlnaHQ6IDE2cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzU3NjtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5yZWxhdGVkLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQuYm90dG9tLWltYWdlc3tcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbi10b3A6IDcwcnB4O1xyXG5cdH1cclxuXHQuYm90dG9tLWltYWdlcyBpbWFnZXtcclxuXHRcdHdpZHRoOiAzNjZycHg7XHJcblx0XHRoZWlnaHQ6IDI2MHJweDtcclxuXHR9XHJcblx0LmJvdHRvbS1oaW50e1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0bWFyZ2luLXRvcDogNDhycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pbW1vYmlsaXphdGlvbi1idXR0b257XHJcblx0XHRoZWlnaHQ6IDEwNHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHRcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdH1cclxuXHQuaW1tb2JpbGl6YXRpb24tYnV0dG9uc3tcclxuXHRcdGhlaWdodDogMTA0cnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcdFxyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5sZWZ0LWNvbnRuZXR7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5hcHBseS1mb3J7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdC5hbGwtYm90dG9ue1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5jYW5jZWwtb3JkZXIsLmNvbm5lY3Rpb24tc2VydmljZXMsLnByb21wdGx5LXBheXtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0XHJcblx0fVxyXG5cdC5jYW5jZWwtb3JkZXJzLC5jb25uZWN0aW9uLXNlcnZpY2Vzc3tcclxuXHRcdHdpZHRoOiAxNjBycHg7XHJcblx0XHRoZWlnaHQ6IDY0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2NHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMycnB4O1xyXG5cdFx0Ym9yZGVyOiBzb2xpZCAxcnB4ICM5OTk5OTk7XHRcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHQucHJvbXB0bHktcGF5c3tcclxuXHRcdHdpZHRoOiAxNjBycHg7XHJcblx0XHRoZWlnaHQ6IDY0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3gtc2hhZG93OiAwcnB4IDRycHggOHJweCAwcnB4ICByZ2JhKDI1MCwgNTMsIDExOCwgMC41KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMycnB4O1x0XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDY0cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzJycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlcjogMDtcclxuXHR9XHJcblx0XHJcblx0LnRvcC1idXR0b24ge1xyXG5cdFx0d2lkdGg6IDY0cnB4O1xuXHRcdGhlaWdodDogNjVycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjVycHg7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgICNmYTM0NzUgMCUsICAjZmY2Njk5IDEwMCUpO1xuXHRcdGJveC1zaGFkb3c6IDBycHggOHJweCAxNnJweCAwcnB4ICByZ2JhKDI1MCwgNTMsIDExOCwgMC4zMik7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogNDBycHg7XHJcblx0XHRib3R0b206IDEzMHB4O1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMjdycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGRlMWVlYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTk4OTI4ODc3MjIzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==