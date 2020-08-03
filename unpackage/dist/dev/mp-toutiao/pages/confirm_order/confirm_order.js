(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/confirm_order/confirm_order"],[
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
/*!************************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fconfirm_order%2Fconfirm_order"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _confirm_order = _interopRequireDefault(__webpack_require__(/*! ./pages/confirm_order/confirm_order.vue */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_confirm_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 12 */
/*!*****************************************************************!*\
  !*** D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm_order.vue?vue&type=template&id=51e0fab4&scoped=true& */ 13);
/* harmony import */ var _confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm_order.vue?vue&type=script&lang=js& */ 15);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm_order.vue?vue&type=style&index=0&id=51e0fab4&scoped=true&lang=css& */ 17);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51e0fab4",
  null,
  false,
  _confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/confirm_order/confirm_order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/*!************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=template&id=51e0fab4&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirm_order.vue?vue&type=template&id=51e0fab4&scoped=true& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=template&id=51e0fab4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!******************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirm_order.vue?vue&type=script&lang=js& */ 16);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 266));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
















































































































































































{
  components: {
    topBar: topBar },

  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      height: 0,
      barName: 'back', //导航条名称
      title: '确认订单',
      topBackgroundColor: '#222222',
      color: '#FFFFFF',
      backImage: '../static/images/return.png',
      modeList: ['邮寄', '到院领取'],
      btnnum: 0,
      porductImagesList: [{
        id: 1,
        url: '../../static/images/23.png' },
      {
        id: 2,
        url: '../../static/images/20.png' },
      {
        id: 1,
        url: '../../static/images/23.png' },
      {
        id: 1,
        url: '../../static/images/19.png' }],

      complimentaryList: ['HB面膜(2片装)一盒', '华桑葆骊科玮防晒霜SPF30（2支）', '20元无门槛卡券', '2000元满减券'],
      ticketList: [{
        name: '卡券',
        content: '满5000减500',
        price: 500,
        more: true },

      {
        name: '满减',
        content: '满5000减500',
        price: 500,
        more: false },

      {
        name: '折扣',
        content: '满2件减500',
        price: 500,
        more: false }],


      deductionList: [{
        name: '积分',
        content: '共100000，可用5000,',
        price: 800,
        checked: true },

      {
        name: '喵豆',
        content: '共4000，可用4000,',
        price: 4000,
        checked: false },

      {
        name: '余额',
        content: '共400，可用40,',
        price: 80,
        checked: false }],


      priceList: [{
        name: '商品总价',
        price: 56800 },

      {
        name: '优惠合计',
        price: 6800,
        minus: true,
        color: true,
        ask: true },

      {
        name: '邮寄运费',
        price: 0 },

      {
        name: '实际应付',
        price: 50000 },

      {
        name: '在线支付',
        price: 1000,
        color: true,
        colors: true },

      {
        name: '到院再付',
        price: 49000 }],


      playWayList: [{
        url: '../../static/images/weixin_3f.png',
        name: '微信',
        value: 'weixin' },

      {
        url: '../../static/images/zhifubao.png',
        name: '支付宝',
        value: 'zhifubao' },

      {
        url: '../../static/images/yinlian.png',
        name: '银联支付',
        value: 'yinlian' }],


      palyPrice: [
      {
        allPrice: 50000,
        newPlay: 1000,
        hospitalPlay: 49000 }] };




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
    chooseLabel: function chooseLabel(k) {
      this.btnnum = k;
    },
    switchChange: function switchChange(e) {
      console.log(e.target.value);
      console.log(e.currentTarget.dataset);
    },
    playChange: function playChange(e) {
      var items = this.playWayList,
      values = e.detail.value;
      console.log(values);
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        var item = items[i];
        if (values.includes(item.value)) {
          this.$set(item, 'checked', true);
        } else {
          this.$set(item, 'checked', false);
        }
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 17 */
/*!**************************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=style&index=0&id=51e0fab4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirm_order.vue?vue&type=style&index=0&id=51e0fab4&scoped=true&lang=css& */ 18);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=style&index=0&id=51e0fab4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[11,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NvbmZpcm1fb3JkZXIvY29uZmlybV9vcmRlci52dWU/NDlhMiIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jb25maXJtX29yZGVyL2NvbmZpcm1fb3JkZXIudnVlPzJiODIiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY29uZmlybV9vcmRlci9jb25maXJtX29yZGVyLnZ1ZT9iMGQ3IiwidW5pLWFwcDovLy9wYWdlcy9jb25maXJtX29yZGVyL2NvbmZpcm1fb3JkZXIudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NvbmZpcm1fb3JkZXIvY29uZmlybV9vcmRlci52dWU/ZGRhZSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jb25maXJtX29yZGVyL2NvbmZpcm1fb3JkZXIudnVlPzIyMjYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSxvSDtBQUNBQSxVQUFVLENBQUNDLHNCQUFELENBQVYsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNJO0FBQ3RJO0FBQ2lFO0FBQ0w7QUFDcUM7OztBQUdqRztBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsb0dBQU07QUFDUixFQUFFLDZHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQXNxQixDQUFnQixvcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lMMXJCO0FBQ0E7QUFDQSxrQkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLGlCQUpBO0FBS0EsbUJBTEE7QUFNQSxlQU5BO0FBT0EscUJBUEEsRUFPQTtBQUNBLG1CQVJBO0FBU0EsbUNBVEE7QUFVQSxzQkFWQTtBQVdBLDhDQVhBO0FBWUEsOEJBWkE7QUFhQSxlQWJBO0FBY0E7QUFDQSxhQURBO0FBRUEseUNBRkE7QUFHQTtBQUNBLGFBREE7QUFFQSx5Q0FGQSxFQUhBO0FBTUE7QUFDQSxhQURBO0FBRUEseUNBRkEsRUFOQTtBQVNBO0FBQ0EsYUFEQTtBQUVBLHlDQUZBLEVBVEEsQ0FkQTs7QUEyQkEsc0ZBM0JBO0FBNEJBO0FBQ0Esa0JBREE7QUFFQSw0QkFGQTtBQUdBLGtCQUhBO0FBSUEsa0JBSkE7O0FBTUE7QUFDQSxrQkFEQTtBQUVBLDRCQUZBO0FBR0Esa0JBSEE7QUFJQSxtQkFKQSxFQU5BOztBQVlBO0FBQ0Esa0JBREE7QUFFQSwwQkFGQTtBQUdBLGtCQUhBO0FBSUEsbUJBSkEsRUFaQSxDQTVCQTs7O0FBK0NBO0FBQ0Esa0JBREE7QUFFQSxrQ0FGQTtBQUdBLGtCQUhBO0FBSUEscUJBSkE7O0FBTUE7QUFDQSxrQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUJBSEE7QUFJQSxzQkFKQSxFQU5BOztBQVlBO0FBQ0Esa0JBREE7QUFFQSw2QkFGQTtBQUdBLGlCQUhBO0FBSUEsc0JBSkEsRUFaQSxDQS9DQTs7O0FBa0VBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBLG9CQURBO0FBRUEsbUJBRkE7QUFHQSxtQkFIQTtBQUlBLG1CQUpBO0FBS0EsaUJBTEEsRUFKQTs7QUFXQTtBQUNBLG9CQURBO0FBRUEsZ0JBRkEsRUFYQTs7QUFlQTtBQUNBLG9CQURBO0FBRUEsb0JBRkEsRUFmQTs7QUFtQkE7QUFDQSxvQkFEQTtBQUVBLG1CQUZBO0FBR0EsbUJBSEE7QUFJQSxvQkFKQSxFQW5CQTs7QUF5QkE7QUFDQSxvQkFEQTtBQUVBLG9CQUZBLEVBekJBLENBbEVBOzs7QUFnR0E7QUFDQSxnREFEQTtBQUVBLGtCQUZBO0FBR0EsdUJBSEE7O0FBS0E7QUFDQSwrQ0FEQTtBQUVBLG1CQUZBO0FBR0EseUJBSEEsRUFMQTs7QUFVQTtBQUNBLDhDQURBO0FBRUEsb0JBRkE7QUFHQSx3QkFIQSxFQVZBLENBaEdBOzs7QUFnSEE7QUFDQTtBQUNBLHVCQURBO0FBRUEscUJBRkE7QUFHQSwyQkFIQSxFQURBLENBaEhBOzs7OztBQXlIQSxHQTlIQTtBQStIQSxTQS9IQSxxQkErSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZBOztBQVlBLEdBOUlBO0FBK0lBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBUUE7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEJBLEVBL0lBLEU7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUFBO0FBQUE7QUFBQTtBQUF5K0IsQ0FBZ0IsbThCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E3L0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9jb25maXJtX29yZGVyL2NvbmZpcm1fb3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvY29uZmlybV9vcmRlci9jb25maXJtX29yZGVyLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvbmZpcm1fb3JkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxZTBmYWI0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29uZmlybV9vcmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpcm1fb3JkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbmZpcm1fb3JkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTFlMGZhYjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1MWUwZmFiNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jb25maXJtX29yZGVyL2NvbmZpcm1fb3JkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jb25maXJtX29yZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWUwZmFiNCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbmZpcm1fb3JkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbmZpcm1fb3JkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29uZmlybV9vcmRlclwiPlxyXG5cdFx0PHRvcEJhciBjbGFzcz1cInRvcEJhclwiIDp0b3BCYWNrZ3JvdW5kQ29sb3I9J3RvcEJhY2tncm91bmRDb2xvcicgOmNvbG9yPSdjb2xvcicgOmJhY2tJbWFnZT0nYmFja0ltYWdlJyA6YmFyTmFtZT0nYmFyTmFtZSdcclxuXHRcdCA6dGl0bGU9J3RpdGxlJyA6bWVudVdpZHRoPSdtZW51V2lkdGgnIDptZW51VG9wPSdtZW51VG9wJyA6bWVudUhlaWdodD0nbWVudUhlaWdodCcgOm1lbnVMZWZ0PSdtZW51TGVmdCcgOm1lbnVCb3R0b209J21lbnVCb3R0b20nPjwvdG9wQmFyPlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJwb3JkdWN0LWNvbnRlbnRcIiBzY3JvbGwteSA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUJvdHRvbSsxMCsncHgnLCdoZWlnaHQnOmhlaWdodC1tZW51Qm90dG9tLTEwKydweCd9XVwiPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29uZmlybV9vcmRlcl9jb250ZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlbGVjdG9yLW1vZGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOiuouWNleS/oeaBr+OAgeWVhuWTgeexu+Wei+OAgeaWueW8j+OAgeeUqOaIt+WQjeOAgeeUteivneOAgeaUtui0p+WcsOWdgCAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbGFiZWwtbW9kZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWxhYmVsXCI+5oqk6IKk5ZOBPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtbW9kZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vZGUtbGFiZWxcIiBAdGFwPSdjaG9vc2VMYWJlbChrKScgdi1mb3I9XCIoaSxrKSBpbiBtb2RlTGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibW9kZS1idG5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW5kLWNvbnRcIiA6Y2xhc3M9XCJ7ZGlzOmJ0bm51bSA9PSBrfVwiPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vZGUtbmFtZVwiPnt7aX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNob29zZS1waWNrdXAtbWV0aG9kXCI+ICror7fpgInmi6nmiqTogqTlk4HnmoTpooblj5bmlrnlvI8gPC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIj4g5byg5LquIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1waG9uZVwiPjE4OCoqKio0MzU3PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWZ1bHQtc2l0ZVwiPum7mOiupDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1ob21lXCI+5a62PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaGlwcGluZy1hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoaXBwaW5nLWFkZHJlc3MtdGl0bGVcIj7mlLbotKflnLDlnYA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZHJlc3NcIj7lm5vlt53nnIHmiJDpg73luILmrabkvq/ljLrljY7nvo7ntKvppqjljLvlrabnvo7lrrnljLvpmaLlnLDlnYDlpKrlpJrmnIDlpJrkuKTooYzvvIzmnIDlpJrkuKTooYw8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9iYWNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWVhuWTgeS/oeaBryAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWludHJvZHVjZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pbnRyb2R1Y2UtdG9wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXMtdGl0bGVcIj7llYblk4Hkv6Hmga8gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LXNldC1kZXRhaWxzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludFwiPuacieWVhuWTgeWxnuS6juS4jeaUr+aMgemAgOasvuaTjeS9nDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXQtZGV0YWlsc1wiPiDmn6XnnIvor6bmg4UgPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWVhuWTgeWbvueJh+OAgeaAu+iuoSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaW1hZ2VzLWFsbC1zZXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pbWFnZXMtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJwb3JkdWN0LWltYWdlcy1pdGVtc1wiIHNjcm9sbC14PVwidHJ1ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW1hZ2VzLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pbWFnZXMtbGlzdFwiIHYtZm9yPVwiKGksaykgaW4gcG9yZHVjdEltYWdlc0xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpLnVybFwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1zZWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtcG9yZHVjdFwiPiDlhbHorqE05Lu2IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWVcIj4g5p+l55yLID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PCEtLSDotaDlk4EgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeS1pdGVtc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktaXRlbVwiIHYtZm9yPVwiKGksaykgaW4gY29tcGxpbWVudGFyeUxpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktdGl0bGVcIj7otaDlk4E8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LWNvbnRlbnRcIj57e2l9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWhpbnRcIj4g6LWg5ZOB5bCG5Lul5Y2h5Yi455qE5pa55byP6Ieq5Yqo5Y+R5pS+5Yiw5Y2h5YyFIDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0PCEtLSDnlZnoqIAgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVhdmUtYS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzYWdlLXRleHRcIj4g55WZ6KiAIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2UtaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdOW7uuiurueVmeiogOWJjeWFiOS4juWSqOivouayn+mAmlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0PCEtLSB0aWNrZXTliLhkaXNjb3VudOaKmOaJoyAgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWRpc2NvdW50XCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJlZmVyZW50aWFsLXBvbGljeVwiIHYtZm9yPVwiKGksaykgaW4gdGlja2V0TGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbmFtZS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LW5hbWVcIj4ge3tpLm5hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWNvbnRlbnRcIj4ge3tpLmNvbnRlbnR9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmVmZXJlbnRpYWwtcHJpY2VcIiB2LWlmPVwiaS5tb3JlXCI+IHt7aS5wcmljZX19ICZuYnNwOz4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmVmZXJlbnRpYWwtcHJpY2VzXCIgdi1pZj1cIiFpLm1vcmVcIj4ge3tpLnByaWNlfX0mZW5zcDs8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8IS0tIOenr+WIhuOAgeWWteixhuOAgeS9meminSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWR1Y3Rpb25cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlZHVjdGlvbkxpc3RcIiB2LWZvcj1cIihpLGspIGluIGRlZHVjdGlvbkxpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVkdWN0aW9uLW5hbWUtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlZHVjdGlvbi1uYW1lXCI+e3tpLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWR1Y3Rpb24tY29udGVudFwiPnt7aS5jb250ZW50fX0gPHRleHQgY2xhc3M9XCJkZWR1Y3Rpb24tcHJpY2VcIj7mirV7e2kucHJpY2V9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWR1Y3Rpb24tc3dpdGNoXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzd2l0Y2ggY29sb3I9JyMwOWJiMDcnIHN0eWxlPVwidHJhbnNmb3JtOnNjYWxlKDAuOClcIiA6Y2hlY2tlZD0naS5jaGVja2VkJyA6ZGF0YS1rPSdrJyBAY2hhbmdlPVwic3dpdGNoQ2hhbmdlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdDwhLS0g5ZWG5ZOB5Lu35qC85ZKM5ZCE56eN5LyY5oOgIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2UtaXRlbVwiIHYtZm9yPVwiKGksaykgaW4gcHJpY2VMaXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiIDpjbGFzcz1cIntjb2xvcjppLmNvbG9yc31cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+e3tpLm5hbWV9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaS5hc2tcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FzazEucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLWNvbnRlbnRcIiA6Y2xhc3M9XCJ7Y29sb3I6aS5jb2xvcn1cIj4gPHRleHQgdi1pZj1cImkubWludXNcIj4tPC90ZXh0PiDvv6V7e2kucHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibW9kZS1vZi1wYXltZW50XCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpcy10aXRsZVwiPuaUr+S7mOaWueW8jyA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXltZW50LXdheVwiIHYtZm9yPVwiKGksaykgaW4gcGxheVdheUxpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW1hZ2UtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImkudXJsXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGxheS1uYW1lXCI+e3tpLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGxheS1yYWRpb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y2hlY2tib3gtZ3JvdXAgQGNoYW5nZT1cInBsYXlDaGFuZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGNoZWNrYm94IGNvbG9yPVwiI2ZmNjY5OVwiIDp2YWx1ZT1cImkudmFsdWVcIiA6Y2hlY2tlZD1cImkuY2hlY2tlZFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9jaGVja2JveC1ncm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb290ZXItbmF2aWdhdGlvbi1iYXJzXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb290ZXItaGludFwiPuacieWVhuWTgeS6jjIwMjAuMDYuMjbov4fmnJ/vvIzor7flsL3lv6vliLDpmaLmoLjplIDkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1wbGF5XCIgdi1mb3I9XCIoaSxrKSBpbiBwYWx5UHJpY2VcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtaXRlbS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLXByaWNlXCI+IDx0ZXh0IGNsYXNzPVwidG90YWxcIj7lkIjorqE6PC90ZXh0PiA8dGV4dCBjbGFzcz1cInRleHRcIj7vv6U8L3RleHQ+IDx0ZXh0IGNsYXNzPVwiYWxsLXByaWNlc1wiPnt7aS5hbGxQcmljZX19PC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1wcmljZVwiPuWcqOe6v+aUr+S7mDrvv6V7e2kubmV3UGxheX19LCDliLDpmaLlho3ku5g677+le3tpLmhvc3BpdGFsUGxheX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9tcHRseS1wbGF5XCI+56uL5Y2z5pSv5LuYPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3IHNjcm9sbC15PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHRvcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b3BCYXIudnVlXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR0b3BCYXIsXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZW51V2lkdGg6IDAsXHJcblx0XHRcdFx0bWVudVRvcDogMCxcclxuXHRcdFx0XHRtZW51SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdG1lbnVMZWZ0OiAwLFxyXG5cdFx0XHRcdG1lbnVCb3R0b206IDAsXHJcblx0XHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGJhck5hbWU6ICdiYWNrJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHR0aXRsZTogJ+ehruiupOiuouWNlScsXHJcblx0XHRcdFx0dG9wQmFja2dyb3VuZENvbG9yOiAnIzIyMjIyMicsXHJcblx0XHRcdFx0Y29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRiYWNrSW1hZ2U6ICcuLi9zdGF0aWMvaW1hZ2VzL3JldHVybi5wbmcnLFxyXG5cdFx0XHRcdG1vZGVMaXN0OiBbJ+mCruWvhCcsICfliLDpmaLpooblj5YnXSxcclxuXHRcdFx0XHRidG5udW06IDAsXHJcblx0XHRcdFx0cG9yZHVjdEltYWdlc0xpc3Q6IFt7XHJcblx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjMucG5nJyxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjAucG5nJyxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjMucG5nJyxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMTkucG5nJyxcclxuXHRcdFx0XHR9LCBdLFxyXG5cdFx0XHRcdGNvbXBsaW1lbnRhcnlMaXN0OiBbJ0hC6Z2i6IacKDLniYfoo4Up5LiA55uSJywgJ+WNjuahkeiRhumqiuenkeeOrumYsuaZkumcnFNQRjMw77yIMuaUr++8iScsICcyMOWFg+aXoOmXqOanm+WNoeWIuCcsICcyMDAw5YWD5ruh5YeP5Yi4J10sXHJcblx0XHRcdFx0dGlja2V0TGlzdDogW3tcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WNoeWIuCcsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmu6E1MDAw5YePNTAwJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IDUwMCxcclxuXHRcdFx0XHRcdFx0bW9yZTogdHJ1ZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+a7oeWHjycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmu6E1MDAw5YePNTAwJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IDUwMCxcclxuXHRcdFx0XHRcdFx0bW9yZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfmipjmiaMnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5ruhMuS7tuWHjzUwMCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiA1MDAsXHJcblx0XHRcdFx0XHRcdG1vcmU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0ZGVkdWN0aW9uTGlzdDogW3tcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+enr+WIhicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICflhbExMDAwMDDvvIzlj6/nlKg1MDAwLCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiA4MDAsXHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IHRydWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllrXosYYnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5YWxNDAwMO+8jOWPr+eUqDQwMDAsJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IDQwMDAsXHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5L2Z6aKdJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+WFsTQwMO+8jOWPr+eUqDQwLCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiA4MCxcclxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRwcmljZUxpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HmgLvku7cnLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogNTY4MDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5LyY5oOg5ZCI6K6hJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IDY4MDAsXHJcblx0XHRcdFx0XHRcdG1pbnVzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YXNrOiB0cnVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn6YKu5a+E6L+Q6LS5JyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5a6e6ZmF5bqU5LuYJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IDUwMDAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WcqOe6v+aUr+S7mCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAxMDAwLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Y29sb3JzOiB0cnVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5Yiw6Zmi5YaN5LuYJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IDQ5MDAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHBsYXlXYXlMaXN0OiBbe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL3dlaXhpbl8zZi5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5b6u5L+hJyxcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICd3ZWl4aW4nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy96aGlmdWJhby5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5pSv5LuY5a6dJyxcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICd6aGlmdWJhbycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL3lpbmxpYW4ucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+mTtuiBlOaUr+S7mCcsXHJcblx0XHRcdFx0XHRcdHZhbHVlOiAneWlubGlhbicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0cGFseVByaWNlOltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YWxsUHJpY2U6NTAwMDAsXHJcblx0XHRcdFx0XHRcdG5ld1BsYXk6MTAwMCxcclxuXHRcdFx0XHRcdFx0aG9zcGl0YWxQbGF5OjQ5MDAwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8g6I635Y+W5bGP5bmV6auY5bqmXHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdHRoYXQuaGVpZ2h0ID0gcmVzLnNjcmVlbkhlaWdodFxyXG5cdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSBtZW51LnRvcFxyXG5cdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IG1lbnUuYm90dG9tXHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVQYWRkaW5nUmlnaHQgPSByZXMud2luZG93V2lkdGggLSBtZW51LnJpZ2h0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hvb3NlTGFiZWw6IGZ1bmN0aW9uKGspIHtcclxuXHRcdFx0XHR0aGlzLmJ0bm51bSA9IGtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpdGNoQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0Y29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYXlDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR2YXIgaXRlbXMgPSB0aGlzLnBsYXlXYXlMaXN0LFxyXG5cdFx0XHRcdFx0dmFsdWVzID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZXMpXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbkkgPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW5JOyArK2kpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSBpdGVtc1tpXVxyXG5cdFx0XHRcdFx0aWYgKHZhbHVlcy5pbmNsdWRlcyhpdGVtLnZhbHVlKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzZXQoaXRlbSwgJ2NoZWNrZWQnLCB0cnVlKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2V0KGl0ZW0sICdjaGVja2VkJywgZmFsc2UpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnBvcmR1Y3QtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdH1cclxuXHJcblx0LnNlbGVjdG9yLW1vZGUge1xyXG5cdFx0cGFkZGluZzogMzJycHggNDBycHggNThycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjRycHg7XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjRycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1sYWJlbC1tb2RlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmFsbC1tb2RlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHJcblx0Lm1vZGUtbGFiZWwge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubW9kZS1idG4ge1xyXG5cdFx0d2lkdGg6IDI0cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgI2RjZGNkYztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzOHJweDtcclxuXHR9XHJcblxyXG5cdC5lbmQtY29udCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0LmRpcyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAyNHJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMnJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmEzNDc1IDAlLCAjZmY1ZjkzIDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LmNob29zZS1waWNrdXAtbWV0aG9kIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI2ZiNDk4MztcclxuXHRcdG1hcmdpbi10b3A6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdG1hcmdpbi10b3A6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItcGhvbmUge1xyXG5cdFx0bWFyZ2luOiAwIDUwcnB4IDAgMzJycHg7XHJcblx0fVxyXG5cclxuXHQuZGVmdWx0LXNpdGUge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdHdpZHRoOiA2NnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC51c2VyLWhvbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdHdpZHRoOiA2NnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODgzNGZhIDAlLCAjYmM2NmZmIDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNoaXBwaW5nLWFkZHJlc3Mge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzM0MzQzNDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnNoaXBwaW5nLWFkZHJlc3MtdGl0bGUge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5hZGRyZXNzIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdH1cclxuXHJcblx0LnNoaXBwaW5nLWFkZHJlc3MgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDIwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblx0XHRtYXJnaW4tbGVmdDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQvKiDllYblk4Hkv6Hmga8gKi9cclxuXHQucG9yZHVjdC1pbnRyb2R1Y2Uge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaW50cm9kdWNlLXRvcCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC50aGlzLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0fVxyXG5cclxuXHQuaGludC1zZXQtZGV0YWlscyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC5oaW50IHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cdH1cclxuXHJcblx0LnNldC1kZXRhaWxzIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblxyXG5cdC5wb3JkdWN0LWltYWdlcy1hbGwtc2V0IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pbWFnZXMtaXRlbSB7XHJcblx0XHR3aWR0aDogNTIycnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0fVxyXG5cclxuXHQuaW1hZ2VzLWl0ZW0ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaW1hZ2VzLWl0ZW1zIHt9XHJcblxyXG5cdC5wb3JkdWN0LWltYWdlcy1saXN0IHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pbWFnZXMtbGlzdCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0fVxyXG5cclxuXHQuYWxsLXNlZSB7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5zZWUge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjRycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS10aXRsZSB7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZThmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxOHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWhpbnQge1xyXG5cdFx0bWFyZ2luLXRvcDogMzdycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDMwcnB4O1xyXG5cdFx0Ym9yZGVyLXRvcDogMnJweCBzb2xpZCAjZjBmMGYwO1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQvKiDnlZnoqIAgKi9cclxuXHQubGVhdmUtYS1tZXNzYWdlIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXNzYWdlLXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQubWVzc2FnZS1pbnB1dCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0LyogaGVpZ2h0OiA4MHJweDsgKi9cclxuXHRcdGJvcmRlci1yYWRpdXM6IDhycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdFx0cGFkZGluZzogMjhycHggMCAyOHJweCAzMnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC8qIOS8mOaDoCAqL1xyXG5cdC50aWNrZXQtZGlzY291bnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5wcmVmZXJlbnRpYWwtcG9saWN5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnByZWZlcmVudGlhbC1wb2xpY3k6bGFzdC1jaGlsZCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1uYW1lLWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZThmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnJweDtcclxuXHR9XHJcblxyXG5cdC5wcmVmZXJlbnRpYWwtcHJpY2UsXHJcblx0LnByZWZlcmVudGlhbC1wcmljZXMge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQ4cnB4O1xyXG5cdH1cclxuXHJcblx0LnByZWZlcmVudGlhbC1wcmljZXMge1xyXG5cdFx0cGFkZGluZy1yaWdodDogNDJycHg7XHJcblx0fVxyXG5cclxuXHQvKiDnp6/liIbjgIHllrXosYbjgIHkvZnpop0gKi9cclxuXHQuZGVkdWN0aW9uIHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuZGVkdWN0aW9uTGlzdCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5kZWR1Y3Rpb25MaXN0Omxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5kZWR1Y3Rpb24tbmFtZS1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmRlZHVjdGlvbi1uYW1lLWNvbnRlbnQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdG1hcmdpbjogMCAyNHJweCAwIDEycnB4O1xyXG5cdH1cclxuXHJcblx0LmRlZHVjdGlvbi1wcmljZSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC8qIOWVhuWTgeaAu+S7tyAqL1xyXG5cdC5wb3JkdWN0LXByaWNlIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZS1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZS1pdGVtOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5pdGVtLW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuaXRlbS1uYW1lIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTJycHg7XHJcblx0fVxyXG5cclxuXHQucHJpY2UtY29udGVudCB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC5jb2xvciB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC8qIOaUr+S7mOaWueW8jyAqL1xyXG5cdC5tb2RlLW9mLXBheW1lbnQge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyOTRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5wYXltZW50LXdheSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDM3cnB4O1xyXG5cdH1cclxuXHJcblx0LmltYWdlLW5hbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0fVxyXG5cclxuXHQuaW1hZ2UtbmFtZSBpbWFnZSB7XHJcblx0XHR3aWR0aDogNzJycHg7XHJcblx0XHRoZWlnaHQ6IDcycnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzZycHg7XHJcblx0fVxyXG5cclxuXHJcblx0Lyog5bqV6YOoICovXHJcblx0LmZvb3Rlci1uYXZpZ2F0aW9uLWJhcnMge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHRcclxuXHQuZm9vdGVyLWhpbnR7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMTRycHggMDtcclxuXHRcdG9wYWNpdHk6IDAuODtcclxuXHR9XHJcblx0LnByaWNlLXBsYXl7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZzogMTJycHggNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHR9XHJcblx0LmFsbC1wcmljZXtcclxuXHRcdGNvbG9yOiAjMTExMTExO1x0XHJcblx0fVxyXG5cdC50b3RhbHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdH1cclxuXHQuYWxsLXByaWNlIC50ZXh0e1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEycnB4O1xyXG5cdH1cclxuXHQuYWxsLXByaWNlc3tcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblx0Lml0ZW0tcHJpY2V7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNHJweDtcclxuXHR9XHJcblx0LnByb21wdGx5LXBsYXl7XHJcblx0XHR3aWR0aDogMjIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIFxyXG5cdFx0XHQjZmEzNDc1IDAlLCBcclxuXHRcdFx0I2ZmNjY5OSAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1x0XHJcblx0fVxyXG5cdFxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jb25maXJtX29yZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUxZTBmYWI0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbmZpcm1fb3JkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTFlMGZhYjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTk2NDQ0Njc1MDc1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==