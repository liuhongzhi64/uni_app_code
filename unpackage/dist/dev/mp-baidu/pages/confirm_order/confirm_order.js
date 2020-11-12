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
/* 11 */,
/* 12 */
/*!************************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fconfirm_order%2Fconfirm_order"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _confirm_order = _interopRequireDefault(__webpack_require__(/*! ./pages/confirm_order/confirm_order.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_confirm_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 13 */
/*!*****************************************************************!*\
  !*** D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm_order.vue?vue&type=template&id=51e0fab4&scoped=true& */ 14);
/* harmony import */ var _confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm_order.vue?vue&type=script&lang=js& */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm_order.vue?vue&type=style&index=0&id=51e0fab4&scoped=true&lang=css& */ 18);
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
/* 14 */
/*!************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=template&id=51e0fab4&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirm_order.vue?vue&type=template&id=51e0fab4&scoped=true& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_template_id_51e0fab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
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
/* 16 */
/*!******************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirm_order.vue?vue&type=script&lang=js& */ 17);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var ticket = function ticket() {__webpack_require__.e(/*! require.ensure | components/ticket */ "components/ticket").then((function () {return resolve(__webpack_require__(/*! ../../components/ticket.vue */ 476));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

























































































































































































































































































































































































{
  components: {
    ticket: ticket },

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
      title: '确认订单',
      btnnum: 0,
      deductionList: [{
        name: '积分',
        content: '共0，可用0,',
        price: 0,
        checked: false },

      {
        name: '喵豆',
        content: '共0，可用0,',
        price: 0,
        checked: false },

      {
        name: '余额',
        content: '共0，可用0,',
        price: 0,
        checked: false }],


      playWayList: [{
        url: '/static/images/weixin_3f.png',
        name: '微信',
        value: 'weixin',
        checked: true },

      {
        url: '/static/images/zhifubao.png',
        name: '支付宝',
        value: 'zhifubao',
        checked: false },

      {
        url: '/static/images/yinlian.png',
        name: '银联支付',
        value: 'yinlian',
        checked: false }],


      requestUrl: '',
      contentList: {}, //订单详情
      is_post_list: [], //邮寄商品
      scan_one_list: [], //收费室使用商品
      scan_two_list: [], //会员中心使用商品
      refundable_list: [], //不可线上退款的商品的skuid列表
      can_use_card: [],
      can_use_card_length: 0,
      no_use_card: [],
      no_use_card_length: 0,
      show_set_user_info: false, //显示用户的联系方式
      user_name: '',
      user_tel: '',
      show_card: true //显示卡券
    };
  },
  onShow: function onShow() {
    var that = this;
    var userInfo = uni.getStorageSync('newuserInfo');
    if (userInfo) {
      that.contentList.user_info = userInfo;
    }
  },
  onLoad: function onLoad(option) {
    var that = this;
    this.request = this.$request;
    that.requestUrl = that.request.globalData.requestUrl;
    var cart_id_list = uni.getStorageSync("cart_id_list");
    // 获取订单的详情
    that.get_order_detail(cart_id_list);
  },
  onReady: function onReady() {
    var that = this;
    that.height = uni.getSystemInfoSync().screenHeight;
    // 判定运行平台
    var platform = '';
    switch (uni.getSystemInfoSync().platform) {
      case 'android':
        platform = 'android';
        break;
      case 'ios':
        platform = 'ios';
        break;
      default:
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
      that.menuTop = 50;
      that.menuHeight = 32;
      that.menuLeft = 278;
      that.menuBottom = 82;
    }

  },
  methods: {
    // 返回
    goBack: function goBack() {
      uni.navigateBack({
        delta: 1 });

    },
    set_user_info: function set_user_info() {
      var that = this;
      that.show_set_user_info = !that.show_set_user_info;
    },
    set_user_name: function set_user_name(event) {
      var that = this;
      var value = event.detail.value;
      that.user_name = value;
    },
    set_user_tel: function set_user_tel(event) {
      var that = this;
      var value = event.detail.value;
      that.user_tel = value;
    },
    // 更改用户信息
    keep_user_info: function keep_user_info() {
      var that = this;
      console.log(that.user_name, that.user_tel);
      if (that.contentList.user_info.real_name && that.contentList.user_info.tel) {
        that.show_set_user_info = !that.show_set_user_info;
      } else if (that.user_name && that.user_tel) {
        that.contentList.user_info.real_name = that.user_name;
        that.contentList.user_info.tel = that.user_tel;
        var dataInfo = {
          interfaceId: 'update_info',
          tel: that.contentList.user_info.tel,
          name: that.contentList.user_info.real_name };

        that.request.uniRequest("login", dataInfo).then(function (res) {
          if (res.data.code == 1000 && res.data.status == 'ok') {
            var data = res.data.data;
            that.contentList.user_info = data;
            that.show_set_user_info = !that.show_set_user_info;
          }
        });
      } else if (that.user_name) {
        that.contentList.user_info.real_name = that.user_name;
        var _dataInfo = {
          interfaceId: 'update_info',
          tel: that.contentList.user_info.tel,
          name: that.contentList.user_info.real_name };

        that.request.uniRequest("login", _dataInfo).then(function (res) {
          if (res.data.code == 1000 && res.data.status == 'ok') {
            var data = res.data.data;
            that.contentList.user_info = data;
            that.show_set_user_info = !that.show_set_user_info;
          }
        });
      } else {
        uni.showToast({
          title: '请输入联系方式',
          icon: 'none' });

      }
    },
    go_to_harves_address: function go_to_harves_address() {
      uni.navigateTo({
        url: "/pages/my/harves_address" });

    },
    // 获取订单的详情
    get_order_detail: function get_order_detail(cart_id_list) {
      var that = this;
      var dataInfo = {
        interfaceId: 'confirmcart',
        cart: cart_id_list };

      that.request.uniRequest("order", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          var goods_list_obj = data.goods_list;
          var goods_list_arr = [];
          for (var key in goods_list_obj) {
            if (!goods_list_obj.hasOwnProperty(key)) {
              continue;
            }
            var item = {};
            item = goods_list_obj[key];
            goods_list_arr.push(item);
          }
          data.goods_list = goods_list_arr;
          that.contentList = data;
          // 用户信息
          var userInfo = uni.getStorageSync('newuserInfo');
          if (userInfo) {
            that.contentList.user_info = userInfo;
          }
          for (var i = 0; i < goods_list_arr.length; i++) {
            if (goods_list_arr[i].is_post == 1) {
              that.is_post_list.push(goods_list_arr[i]);
            } else if (goods_list_arr[i].scan_department == 0) {
              that.scan_one_list.push(goods_list_arr[i]);
            } else if (goods_list_arr[i].scan_department == 1) {
              that.scan_two_list.push(goods_list_arr[i]);
            }
            if (goods_list_arr[i].refundable == 0) {//是否允许退款，1：允许，0：不允许
              that.refundable_list.push(goods_list_arr[i].sku_id);
              console.log(that.refundable_list);
            }
          }
          // console.log(data)

          that.show_user_card(data.card_list);
        } else {
          console.log('没有数据');
        }
      });
    },
    // 显示卡券
    is_show_card: function is_show_card() {
      var that = this;
      that.show_card = !that.show_card;
    },
    show_user_card: function show_user_card(card_list) {
      var that = this;
      for (var key in card_list) {
        if (key == 1) {
          var list = [];
          var card_number = 0;
          var card_obj = card_list[key];
          for (var _key in card_obj) {
            if (!card_obj.hasOwnProperty(_key)) {
              continue;
            }
            var item = {};
            item = card_obj[_key];
            item.checked = false;
            item.showTicketDetails = false;
            item.arrowImages = '/static/images/arrow-down.png';
            var startTime = item.use_start_time;
            item.c_use_start_time = that.setTimer(startTime);
            var useTime = item.use_end_time;
            item.c_use_end_time = that.setTimer(useTime);
            item.is_use = true;
            card_number += item.have;
            // 在此处应该让用户有的卡券有几张就循环建几张
            for (var i = 0; i < item.have; i++) {
              list.push(item);
            }
          }
          that.can_use_card = list;

          that.can_use_card_length = card_number;
        } else {
          var _list = [];
          var _card_number = 0;
          var _card_obj = card_list[key];
          for (var _key2 in _card_obj) {
            if (!_card_obj.hasOwnProperty(_key2)) {
              continue;
            }
            var _item = {};
            _item = _card_obj[_key2];
            _item.checked = false;
            _item.showTicketDetails = false;
            _item.arrowImages = '/static/images/arrow-down.png';
            var _startTime = _item.use_start_time;
            _item.c_use_start_time = that.setTimer(_startTime);
            var _useTime = _item.use_end_time;
            _item.c_use_end_time = that.setTimer(_useTime);
            _item.is_use = false;
            _card_number += _item.have;
            _list.push(_item);
          }
          that.no_use_card = _list;
          that.no_use_card_length = _card_number;
        }
      }
    },
    setTimer: function setTimer(date) {
      date = new Date(date * 1000);
      var month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      var day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      var time = date.getFullYear() + '-' + month + '-' + day;
      // console.log(time)
      return time;
    },
    changeUse: function changeUse(index) {
      var that = this;
      that.btnnum = index;
    },
    showTicket: function showTicket(order_card, can_use) {
      var that = this;
      if (can_use == 0) {
        that.can_use_card = order_card;
        // that.can_use_card[index].showTicketDetails = !that.can_use_card[index].showTicketDetails
        // if (that.can_use_card[index].showTicketDetails) {
        // 	that.can_use_card[index].arrowImages = '/static/images/arrow-top.png'
        // } else {
        // 	that.can_use_card[index].arrowImages = '/static/images/arrow-down.png'
        // }
        // 因数据改变后页面没有渲染，只有强制刷新一次页面
        // this.$forceUpdate() 
        return;
      } else
      {
        that.no_use_card = order_card;
      }

    },
    checkboxChange: function checkboxChange(index) {
      var that = this;
      that.can_use_card[index].checked = !that.can_use_card[index].checked;
      if (that.can_use_card[index].checked) {
        var cards_list = [];
        var cart_id_list = [];
        // is_post_list: [], //邮寄商品
        // scan_one_list: [], //收费室使用商品
        // scan_two_list: [], //会员中心使用商品
        if (that.is_post_list.length > 0) {
          var list = {};
          for (var i = 0; i < that.is_post_list.length; i++) {
            list = {
              sku_id: that.is_post_list[i].sku_id,
              buy_type: that.is_post_list[i].buy_type,
              is_post: that.is_post_list[i].is_post,
              num: that.is_post_list[i].buy_num };

          }
          cart_id_list.push(list);
        }
        if (that.scan_one_list.length > 0) {
          var _list2 = {};
          for (var _i = 0; _i < that.scan_one_list.length; _i++) {
            _list2 = {
              sku_id: that.scan_one_list[_i].sku_id,
              buy_type: that.scan_one_list[_i].buy_type,
              is_post: that.scan_one_list[_i].is_post,
              num: that.scan_one_list[_i].buy_num };

          }
          cart_id_list.push(_list2);
        }
        if (that.scan_two_list.length > 0) {
          var _list3 = {};
          for (var _i2 = 0; _i2 < that.scan_two_list.length; _i2++) {
            _list3 = {
              sku_id: that.scan_two_list[_i2].sku_id,
              buy_type: that.scan_two_list[_i2].buy_type,
              is_post: that.scan_two_list[_i2].is_post,
              num: that.scan_two_list[_i2].buy_num };

          }
          cart_id_list.push(_list3);
        }
        for (var _i3 = 0; _i3 < that.can_use_card.length; _i3++) {
          if (that.can_use_card[_i3].checked) {
            cards_list.push(that.can_use_card[_i3].id);
          }
        }
        var dataInfo = {
          interfaceId: 'superposition',
          sku_list: cart_id_list,
          cards_list: cards_list };

        console.log(cart_id_list);
        // that.request.uniRequest("order", dataInfo).then(res => {
        // 	if (res.data.code == 1000 && res.data.status == 'ok') {
        // 		let data = res.data.data
        // 		console.log(data)

        // 	}
        // })
      }
    },
    use_ticket: function use_ticket() {
      var that = this;
      that.show_card = !that.show_card;
    },
    // 选择抵用
    switchChange: function switchChange(e) {
      console.log(e.target.value);
      console.log(e.currentTarget.dataset);
    },
    // 付款方式
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */
/*!**************************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=style&index=0&id=51e0fab4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirm_order.vue?vue&type=style&index=0&id=51e0fab4&scoped=true&lang=css& */ 19);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirm_order_vue_vue_type_style_index_0_id_51e0fab4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/confirm_order/confirm_order.vue?vue&type=style&index=0&id=51e0fab4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[12,"common/runtime","common/vendor"]]]);