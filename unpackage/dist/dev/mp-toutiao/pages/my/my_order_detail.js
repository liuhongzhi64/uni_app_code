(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my_order_detail"],[
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
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fmy%2Fmy_order_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _my_order_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my_order_detail.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my_order_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 13 */
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 14);
/* harmony import */ var _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=script&lang=js& */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 18);
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
/* 14 */
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
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
/* 16 */
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=script&lang=js& */ 17);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var goodsShow = function goodsShow() {__webpack_require__.e(/*! require.ensure | components/goodsShow */ "components/goodsShow").then((function () {return resolve(__webpack_require__(/*! ../../components/goodsShow.vue */ 469));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =








































































































































































































































































































































































































































{
  components: {
    goodsShow: goodsShow },

  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      height: 0,
      barName: 'particularsPage', //导航条名称
      color: '#FFFFFF',
      backImage: '/static/images/back2.png',
      title: '订单详情',
      state: '已付款', //是否付款
      requestUrl: '',
      order_info: {},
      is_post_list: [], //邮寄商品
      scan_one_list: [], //收费室使用商品
      scan_two_list: [], //会员中心使用商品	
      showTop: false,
      offset: 0,
      over_time: '',
      productLists: [],
      expiration_time: 0 //过期时间
    };
  },
  onReachBottom: function onReachBottom() {
    var that = this;
    that.offset += 1;
    that.getLike();
  },
  onLoad: function onLoad(option) {
    var that = this;
    this.request = this.$request;
    that.requestUrl = that.request.globalData.requestUrl;
    if (option.info) {
      that.get_order_derail(option.info);
    } else {
      that.get_order_derail(23149); //23170
    }
    that.getLike();
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
    // 获取订单详情
    get_order_derail: function get_order_derail(id) {
      var that = this;
      var dataInfo = {
        interfaceId: 'get_order_info',
        id: id };

      that.request.uniRequest("order", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          // 订单商品信息
          for (var i = 0; i < data.order_goods.length; i++) {
            // 显示的规格
            data.order_goods[i].show_sku_spec = false;
            if (data.order_info.distribution == 1) {
              that.is_post_list.push(data.order_goods[i]);
            } else if (data.order_goods[i].scan_department == 0) {
              that.scan_one_list.push(data.order_goods[i]);
            } else if (data.order_goods[i].scan_department == 1) {
              that.scan_two_list.push(data.order_goods[i]);
            }
            // 最近的过期时间
            if (data.order_goods[i].overdue_time) {
              if (data.order_goods[i].overdue_time > that.expiration_time) {
                that.expiration_time = data.order_goods[i].overdue_time;
              }
            }
          }
          // 时间
          that.over_time = that.setTimer(data.order_info.create_time + data.order_info.cancel_time);
          data.order_info.create_time = that.setTimer(data.order_info.create_time);
          // console.log(data)
          if (that.expiration_time > 0) {
            that.expiration_time = that.setTimer(that.expiration_time);
          }
          // 订单的信息
          that.order_info = data.order_info;
        }
      });
    },
    // 立即支付
    please_pay: function please_pay(id) {
      var that = this;
      var data_info = {
        interfaceId: 'wechatwap',
        order_id: id };

      that.request.uniRequest("pay", data_info).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          console.log(data.mweb_url);
          var url = data.mweb_url;
          uni.showLoading({
            title: '支付中...' });

          // app支付
          // const webview = plus.webview.create("","custom-webview")
          // webview.loadURL(that.pay_url,{"Referer":that.requestUrl})
        }
      });
    },
    // 显示规格
    this_show_sku_spec: function this_show_sku_spec(item, index) {
      var that = this;
      if (that.is_post_list.length > 0) {
        for (var key in that.is_post_list) {
          if (that.is_post_list[key].id == item.id) {
            that.is_post_list[key].show_sku_spec = !that.is_post_list[key].show_sku_spec;
          }
        }
      } else if (that.scan_one_list.length > 0) {
        for (var _key in that.scan_one_list) {
          if (that.scan_one_list[_key].id == item.id) {
            that.scan_one_list[_key].show_sku_spec = !that.scan_one_list[_key].show_sku_spec;
          }
        }
      } else {
        for (var _key2 in that.scan_two_list) {
          if (that.scan_two_list[_key2].id == item.id) {
            that.scan_two_list[_key2].show_sku_spec = !that.scan_two_list[_key2].show_sku_spec;
          }
        }
      }
    },
    // 转换时间格式
    setTimer: function setTimer(date) {
      var house = 0;
      var second = 0;
      var minute = 0;
      house = parseInt(date / 1000 / 60 / 60 % 24);
      second = parseInt(date / 60 % 60);
      minute = parseInt(date % 60);
      date = new Date(date * 1000);
      var month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      var day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      if (house < 10) {
        house = "0" + house;
      }
      if (second < 10) {
        second = "0" + second;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }

      var time = date.getFullYear() + '-' + month + '-' + day + "  " + ' ' + house + ':' + second + ':' + minute;
      // console.log(time)
      return time;
    },
    // 为你推荐
    getLike: function getLike() {
      var that = this;
      var dataInfo = {
        interfaceId: 'userrecommendedgoodsspulist',
        type: '3',
        offset: that.offset };

      that.request.uniRequest("goods", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          if (data.length > 0) {
            that.productLists = that.productLists.concat(data);
          } else {
            uni.showToast({
              title: '没有更多了',
              icon: 'none' });

          }
        } else {
          uni.showToast({
            title: '没有更多了',
            icon: 'none' });

        }
      });
    },
    // 返回上一级
    goBack: function goBack() {
      uni.navigateBack({
        delta: 1 });

    },
    // 我的赠品
    my_card: function my_card() {
      uni.navigateTo({
        url: "/pages/my/my_card" });

    },
    // 复制单号
    copy_order_no: function copy_order_no(info) {
      uni.setClipboardData({
        data: info,
        success: function success() {
          uni.showToast({
            title: '已复制到剪切板' });

        } });

    },
    // 返回顶部
    ToTop: function ToTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 600 });

    },
    // 申请退款
    goToRefund: function goToRefund() {
      uni.navigateTo({
        url: "/pages/my/my_order_refund" });

    } },

  // 显示回到顶部按钮
  onPageScroll: function onPageScroll(e) {
    if (e.scrollTop > 0) {
      this.showTop = true;
    } else if (e.scrollTop == 0) {
      this.showTop = false;
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 19);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[12,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/ZjljNyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlP2M0ZjUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZT84ZmQ4IiwidW5pLWFwcDovLy9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/Yzk0OSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlPzEyMzYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsNkc7QUFDQUEsVUFBVSxDQUFDQyx3QkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3STtBQUN4STtBQUNtRTtBQUNMO0FBQ3FDOzs7QUFHbkc7QUFDK0s7QUFDL0ssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUscUZBQU07QUFDUixFQUFFLHNHQUFNO0FBQ1IsRUFBRSwrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUF3cUIsQ0FBZ0Isc3FCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3lhNXJCO0FBQ0E7QUFDQSx3QkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLGlCQUpBO0FBS0EsbUJBTEE7QUFNQSxlQU5BO0FBT0EsZ0NBUEEsRUFPQTtBQUNBLHNCQVJBO0FBU0EsMkNBVEE7QUFVQSxtQkFWQTtBQVdBLGtCQVhBLEVBV0E7QUFDQSxvQkFaQTtBQWFBLG9CQWJBO0FBY0Esc0JBZEEsRUFjQTtBQUNBLHVCQWZBLEVBZUE7QUFDQSx1QkFoQkEsRUFnQkE7QUFDQSxvQkFqQkE7QUFrQkEsZUFsQkE7QUFtQkEsbUJBbkJBO0FBb0JBLHNCQXBCQTtBQXFCQSx3QkFyQkEsQ0FxQkE7QUFyQkE7QUF1QkEsR0E1QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWpDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBLE1BRUE7QUFDQSxtQ0FEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLEdBNUNBO0FBNkNBLFNBN0NBLHFCQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FUQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUkE7O0FBVUEsS0FaQSxNQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBL0VBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLGNBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BL0JBO0FBZ0NBLEtBeENBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWkE7QUFhQSxLQTdEQTtBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwRkE7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQW5IQTtBQW9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQURBO0FBRUEsaUJBRkE7QUFHQSwyQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0EsU0FWQSxNQVVBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0EsT0FqQkE7QUFrQkEsS0E5SUE7QUErSUE7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0FwSkE7QUFxSkE7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7O0FBR0EsS0ExSkE7QUEySkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0EsNEJBREE7O0FBR0EsU0FOQTs7QUFRQSxLQXJLQTtBQXNLQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHFCQUZBOztBQUlBLEtBNUtBO0FBNktBO0FBQ0E7QUFDQTtBQUNBLHdDQURBOztBQUdBLEtBbExBLEVBaEZBOztBQW9RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxHQTNRQSxFOzs7Ozs7Ozs7Ozs7QUN6YUE7QUFBQTtBQUFBO0FBQUE7QUFBMitCLENBQWdCLHE4QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBLy9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwOGRlMWVlYlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibXlfb3JkZXJfZGV0YWlsXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcC1uYXYtbWVzc2FnZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm15LXRvcC1iYXJcIiA6c3R5bGU9XCJbeydoZWlnaHQnOm1lbnVIZWlnaHQrJ3B4JywncGFkZGluZy10b3AnOm1lbnVUb3ArJ3B4JywnbGluZS1oZWlnaHQnOm1lbnVIZWlnaHQrJ3B4JywncGFkZGluZy1ib3R0b20nOjEwKydweCd9XVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFjay10aXRsZVwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFja1wiIEBjbGljaz1cImdvQmFja1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9yZXR1cm4ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCIgOnN0eWxlPVwiW3snbWFyZ2luLXJpZ2h0JzptZW51V2lkdGgrJ3B4J31dXCI+IHt7dGl0bGV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLW1lc3NhZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXMhPTFcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0PCEtLSDnrYnlvoXku5jmrL4gdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0wXCIgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItdXNlaW5nLXRpbWUtcHJpY2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3YWl0LXBheVwiPuetieW+heS7mOasvjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDlgJLorqHml7YgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVzaWR1ZS10aW1lXCI+5Ymp5L2Z5pSv5LuY5pe26Ze0OlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PjA8L3RleHQ+5aSpPHRleHQ+MDwvdGV4dD7ml7Y8dGV4dD4zPC90ZXh0PuWIhjx0ZXh0PjU5PC90ZXh0PuenklxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1wYXktcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHTlnKjnur/mlK/ku5jvv6U8dGV4dD57eyBvcmRlcl9pbmZvLm9ubGluZV9wYXkgfX08L3RleHQ+LOWIsOmZouWGjeS7mO+/pTx0ZXh0Pnt7IG9yZGVyX2luZm8ub2ZmbGluZV9wYXkgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIm5vd19wYXlcIiB0eXBlPVwiZGVmYXVsdFwiIHNpemU9XCJtaW5pXCIgQHRhcD1cInBsZWFzZV9wYXkob3JkZXJfaW5mby5pZClcIj7nq4vljbPmlK/ku5g8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g5bey5LuY5qy+IHYtZWxzZS1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCIgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItdXNlaW5nLXRpbWUtcHJpY2VcIiB2LWVsc2UtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndhaXQtcGF5XCI+5bey5LuY5qy+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlc2lkdWUtdGltZVwiPuacieWVhuWTgeS6jiB7eyBleHBpcmF0aW9uX3RpbWUgfX0g5L2c5bqfPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItcGF5LXByaWNlc1wiPiDor7flsL3lv6vliLDpmaLkvb/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDlt7LpgIDmrL4gb3JkZXJfaW5mby5zdGF0dXM9PTcgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZnVuZGVkXCIgdi1lbHNlLWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTdcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZnVuZGVkX2hpbnRcIj7lt7LpgIDmrL48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5bey5L2c5bqfIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNhbmNlbC1vcmRlcl90b3BcIiA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUJvdHRvbSs0MCsncHgnfV1cIiB2LWVsc2UtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2RlbGV0ZS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhbmNlbF9oaW50XCI+5bey5L2c5bqfPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOaUtui0p+WcsOWdgOWSjOiBlOezu+aWueW8jyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidXNlci1hbGwtbWVzc2FnZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbWVzc2FnZS1jb250ZW50XCIgdi1pZj1cIm9yZGVyX2luZm8uZGlzdHJpYnV0aW9uPT0xXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW1lc3NhZ2UtbGVmdFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWUtcGhvbmUtZGVmYXVsdC1hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1uYW1lXCI+IHt7IG9yZGVyX2luZm8uYWNjZXB0X25hbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItcGhvbmVcIj4ge3sgb3JkZXJfaW5mby50ZWxwaG9uZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVmYXVsdC1hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWZhdWx0XCI+6buY6K6kPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVmYXVsdC1hZGRyZXNzLWNvbnRlbnRcIj4ge3sgb3JkZXJfaW5mby50YWcgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoaXBwaW5nLWFkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRyZXNzLW5hbWVcIj7mlLbotKflnLDlnYA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkcmVzcy1jb250ZW50XCI+IHt7IG9yZGVyX2luZm8ucHJvdmluY2VfY24gKyBvcmRlcl9pbmZvLmNpdHlfY24gKyBvcmRlcl9pbmZvLmFyZWFfY24gKyBvcmRlcl9pbmZvLmFkZHJlc3MgfX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaW5mb1wiIHYtZWxzZS1pZj1cIm9yZGVyX2luZm8uZGlzdHJpYnV0aW9uPT0wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NlcHRfbmFtZVwiPiB7eyBvcmRlcl9pbmZvLmFjY2VwdF9uYW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRlbHBob25lXCI+IHt7IG9yZGVyX2luZm8udGVscGhvbmUgfX0gPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wYXJ0aWN1bGFyc1wiPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJvcmRlci1wYXJ0aWN1bGFyc1wiPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLW9yZGVyLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDlt7Lku5jmrL7nmoTmoLjplIDnoIEgb3JkZXJfaW5mby5zdGF0dXM9PTIgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGVcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtbnVtYmVyXCI+6K6i5Y2V5qC46ZSA56CBIC0ge3sgb3JkZXJfaW5mby5oeF9jb2RlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtaGludFwiPuWMu+e+jumhueebruivt+WcqOaUtui0ueWupOWHuuekujwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtaGludFwiPuaKpOiCpOWTgemhueebruWcqOS8muWRmOS4reW/g+WHuuekujwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK29yZGVyX2luZm8ucXJjb2Rlc1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOiuouWNleWVhuWTgeS/oeaBryAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDpgq7lr4TllYblk4EgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1pdGVtc1wiIHYtaWY9XCJpc19wb3N0X2xpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VydmljZS1jb25kaXRpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZS1zZXJ2aWNlLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLW5hbWVcIj4g6YKu5a+E5ZWG5ZOBIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFwcG9pbnRtZW50XCIgdi1zaG93PVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIj4g5aSx5pWI55qE5ZWG5ZOB5bCG6Ieq5Yqo6YCA5qy+77yM6K+35Y+K5pe25Yiw6Zmi5L2/55SoIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1jb250ZW50XCIgdi1mb3I9XCIoaSxrKSBpbiBpc19wb3N0X2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZhaWx1cmUtdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1oaW50XCI+5ZWG5ZOB5aSx5pWI5pe26Ze0OiB7eyBvdmVyX3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcmVmdW5kLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3N0YXRlMi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LXRleHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIj7lvoXkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWltYWdlcy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWVcIj57e2kuc3B1X25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2t1X3NwZWNfY29udGVudFwiICBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50X2l0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2l0ZW1fY29udGVudFwiIEB0YXA9J3RoaXNfc2hvd19za3Vfc3BlYyhpLGspJyB2LWlmPVwiaS5zaG93X3NrdV9zcGVjXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19hbGxfaXRlbXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQtaXRlbXNcIiB2LWZvcj1cIih6LGopIGluIGkuc2t1X3NwZWNcIiA6a2V5PSdqJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnNcIj4ge3sgeiB9fSA6IHt7IGogfX0gOyA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2UtbnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZVwiPjx0ZXh0Pu+/pTwvdGV4dD57e2kuc2t1X3ByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1udW1iZXJcIj54e3tpLnNrdV9udW1zfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LWZvci10aGUtb3JkZXIgXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktb3JkZXItY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCIgdG90YWwtcHJpY2Utb24tbGluZS1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPuaAu+S7tyA8dGV4dD7vv6Uge3tpLnBheWFibGVfYW1vdW50fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib24tbGluZS1wYXlcIj7lnKjnur/mlK/ku5ggPHRleHQ+77+lIHt7aS5vbmxpbmVfcGF5fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1ob3NwaXRhbC1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHNcIj7kvJjmg6AgPHRleHQ+77+lIHt7IGkudG90YWxfZGlzY291bnQgfHwgMH19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1zaG93PVwiaS50b3RhbF9kaXNjb3VudD4wXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hc2sxLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG9zcGl0YWwtcGF5XCI+5Yiw6Zmi5YaN5LuYIDx0ZXh0Pu+/pSB7e2kub2ZmbGluZV9wYXl9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29wZS13aXRoXCI+5bqU5LuYIDx0ZXh0Pu+/pSB7e2kucmVsX3ByaWNlfX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5pS26LS55a6k5L2/55So5ZWG5ZOBIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItaXRlbXNcIiB2LWVsc2UtaWY9XCJzY2FuX29uZV9saXN0Lmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcnZpY2UtY29uZGl0aW9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmUtc2VydmljZS1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VydmljZS1uYW1lXCI+IOaUtui0ueWupOS9v+eUqOWVhuWTgSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhcHBvaW50bWVudFwiIHYtc2hvdz1cIm9yZGVyX2luZm8uc3RhdHVzPT0wXCI+IOWkseaViOeahOWVhuWTgeWwhuiHquWKqOmAgOasvu+8jOivt+WPiuaXtuWIsOmZouS9v+eUqCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtY29udGVudFwiIHYtZm9yPVwiKGksaykgaW4gc2Nhbl9vbmVfbGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1saW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmFpbHVyZS10aW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aW1lLWhpbnRcIj7llYblk4HlpLHmlYjml7bpl7Q6IHt7IG92ZXJfdGltZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LWltYWdlXCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT03XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9yZWZ1bmQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09NVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc3RhdGUyLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtdGV4dFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiPuW+heS9v+eUqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtaW1hZ2VzLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraS5pbWdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbmFtZVwiPnt7aS5zcHVfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJza3Vfc3BlY19jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudF9pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19pdGVtX2NvbnRlbnRcIiBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKScgdi1pZj1cImkuc2hvd19za3Vfc3BlY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfYWxsX2l0ZW1zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWl0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlLW51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj48dGV4dD7vv6U8L3RleHQ+e3tpLnNrdV9wcmljZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbnVtYmVyXCI+eHt7aS5za3VfbnVtc319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1mb3ItdGhlLW9yZGVyIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LW9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiIHRvdGFsLXByaWNlLW9uLWxpbmUtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtcHJpY2VcIj7mgLvku7cgPHRleHQ+77+lIHt7aS5wYXlhYmxlX2Ftb3VudH19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9uLWxpbmUtcGF5XCI+5Zyo57q/5pSv5LuYIDx0ZXh0Pu+/pSB7e2kub25saW5lX3BheX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHMtaG9zcGl0YWwtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzXCI+5LyY5oOgIDx0ZXh0Pu+/pSB7eyBpLnRvdGFsX2Rpc2NvdW50IHx8IDB9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtc2hvdz1cImkudG90YWxfZGlzY291bnQ+MFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvc3BpdGFsLXBheVwiPuWIsOmZouWGjeS7mCA8dGV4dD7vv6Uge3tpLm9mZmxpbmVfcGF5fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcGUtd2l0aFwiPuW6lOS7mCA8dGV4dD7vv6Uge3tpLnJlbF9wcmljZX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOS8muS4reW/g+WRmOS9v+eUqOWVhuWTgSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWl0ZW1zXCIgdi1lbHNlLWlmPVwic2Nhbl90d29fbGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLWNvbmRpdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lLXNlcnZpY2UtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcnZpY2UtbmFtZVwiPiDkvJrkuK3lv4PlkZjkvb/nlKjllYblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXBwb2ludG1lbnRcIiB2LXNob3c9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiPiDlpLHmlYjnmoTllYblk4HlsIboh6rliqjpgIDmrL7vvIzor7flj4rml7bliLDpmaLkvb/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWNvbnRlbnRcIiB2LWZvcj1cIihpLGspIGluIHNjYW5fdHdvX2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZhaWx1cmUtdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1oaW50XCI+5ZWG5ZOB5aSx5pWI5pe26Ze0OiB7eyBvdmVyX3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcmVmdW5kLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3N0YXRlMi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LXRleHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIj7lvoXkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWltYWdlcy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWVcIj57e2kuc3B1X25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2t1X3NwZWNfY29udGVudFwiICBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50X2l0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2l0ZW1fY29udGVudFwiICBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKScgdi1pZj1cImkuc2hvd19za3Vfc3BlY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfYWxsX2l0ZW1zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWl0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlLW51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj48dGV4dD7vv6U8L3RleHQ+e3tpLnNrdV9wcmljZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbnVtYmVyXCI+eHt7aS5za3VfbnVtc319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1mb3ItdGhlLW9yZGVyIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LW9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiIHRvdGFsLXByaWNlLW9uLWxpbmUtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtcHJpY2VcIj7mgLvku7cgPHRleHQ+77+lIHt7aS5wYXlhYmxlX2Ftb3VudH19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9uLWxpbmUtcGF5XCI+5Zyo57q/5pSv5LuYIDx0ZXh0Pu+/pSB7e2kub25saW5lX3BheX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHMtaG9zcGl0YWwtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzXCI+5LyY5oOgIDx0ZXh0Pu+/pSB7eyBpLnRvdGFsX2Rpc2NvdW50IHx8IDB9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtc2hvdz1cImkudG90YWxfZGlzY291bnQ+MFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvc3BpdGFsLXBheVwiPuWIsOmZouWGjeS7mCA8dGV4dD7vv6Uge3tpLm9mZmxpbmVfcGF5fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcGUtd2l0aFwiPuW6lOS7mCA8dGV4dD7vv6Uge3tpLnJlbF9wcmljZX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOi1oOWTgSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LXRvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3AtbmFtZVwiPui1oOmAgeS/oeaBrzwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXktY29tcGxpbWVudGFyeVwiIEB0YXA9XCJteV9jYXJkKClcIj7miJHnmoTotaDlk4EgPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeS1oaW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHTmuKnppqjmj5DnpLrvvJrmiYDmnInotaDlk4HlsIbku6XljaHliLjnmoTlvaLlvI/lj5HmlL7liLDotKbmiLfkuK3jgILoi6Xlj5HnlJ/mlbTljZXpgIDmrL7vvIzmiJbmmK/pg6jliIbpgIDmrL7vvIxcclxuXHRcdFx0XHRcdFx0XHRcdOaIkemZouacieadg+aUtuWbnuebuOWFs+i1oOWTge+8jOW5tuagueaNrumAgOasvi/pgIDljZXlkI7nmoTmg4XlhrXph43mlrDorqHnrpfotaDlk4Hkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtY29tcGxpbWVudGFyeVwiIHYtaWY9XCJvcmRlcl9pbmZvLmdpdmluZ19pbmZvLmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktaXRlbVwiIHYtZm9yPVwiKGl0ZW0saykgaW4gb3JkZXJfaW5mby5naXZpbmdfaW5mb1wiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktbmFtZVwiPiB7eyBpdGVtLmNhdGVnb3J5IH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LWNvbnRlbnRcIj4ge3sgaXRlbS5ydWxlX25hbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOS8mOaDoOS/oeaBryAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtZGlzY291bnQtZnVsbC1yZWR1Y3Rpb25cIiB2LWlmPVwib3JkZXJfaW5mby5kaXNjb3VudF9kZXNjcmlwdGlvbi5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWNvbnRlbnRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcmRlcl9pbmZvLmRpc2NvdW50X2Rlc2NyaXB0aW9uXCIgOmtleT0naW5kZXgnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbmFtZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LW5hbWVcIj4ge3sgaXRlbS5jYXRlZ29yeSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LW1lc3NhZ2VcIj4ge3tpdGVtLnJ1bGVfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LXByaWNlXCI+Le+/pSB7eyBpdGVtLnNhbGVfcHJpY2UgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOS8mOaDoOWQiOiuoSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsLWRpc2NvdW50c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1kaXNjb3VudHMtbmFtZVwiPuS8mOaDoOWQiOiuoTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLXRvdGFsLWRpc2NvdW50c1wiPi3vv6Uge3sgb3JkZXJfaW5mby50b3RhbF9kaXNjb3VudCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5ZWG5ZOB5Lu35qC85L+h5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1wcmljZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZVwiPiDllYblk4HmgLvku7cgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlXCI+IO+/pSB7eyBvcmRlcl9pbmZvLnBheWFibGVfYW1vdW50IHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lXCI+IOS8mOaDoOWQiOiuoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1zaG93PVwib3JkZXJfaW5mby50b3RhbF9kaXNjb3VudD4wXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hc2sxLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW1lc3NhZ2VcIj4g77+lIHt7IG9yZGVyX2luZm8udG90YWxfZGlzY291bnQgfHwgMCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWVcIj4g6YKu5a+E6L+Q6LS5IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbWVzc2FnZVwiPiDvv6Uge3sgb3JkZXJfaW5mby5yZWFsX2ZyZWlnaHQgfHwgMCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWVcIj4g5a6e6ZmF5bqU5LuYIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbWVzc2FnZVwiPiDvv6Uge3sgb3JkZXJfaW5mby5yZWxfcHJpY2UgfHwgMCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZS1tZXNzYWdlIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lIGNvbG9yXCI+IOWcqOe6v+aUr+S7mCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW1lc3NhZ2UgY29sb3JcIj4g77+lIHt7IG9yZGVyX2luZm8ub25saW5lX3BheSB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZSBjb2xvclwiPiDliLDpmaLlho3ku5ggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlIGNvbG9yXCI+IO+/pSB7eyBvcmRlcl9pbmZvLm9mZmxpbmVfcGF5IHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWWteixhiAtLT5cclxuXHRcdFx0XHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cInJldHVybi1tZXctYmVhblwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWV3LWJlYW4taW1hZ2VzLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWV3LWJlYW4taW1hZ2VzXCI+PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY2FydEJnLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWV3LWJlYW4tbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJldHVybi1udW1iZXJcIj7ov5TllrXosYYxMDAw5LiqPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJldHVybi1oaW50XCI+6LSt54mp6L+U5Za16LGGLOWWteixhuWPr+aKteeOsDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJteS1tZXctbmVhblwiPuaIkeeahOWWteixhiA+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHRcdFx0PCEtLSDljZXlj7cgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItaW5mb3JtYXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXNlcmlhbC1udW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGUtbmFtZVwiPuiuouWNlee8luWPtzo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcmlhbC1udW1iZXJcIj4ge3sgb3JkZXJfaW5mby5vcmRlcl9ubyB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcHlcIiBAdGFwPSdjb3B5X29yZGVyX25vKG9yZGVyX2luZm8ub3JkZXJfbm8pJz7lpI3liLY8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+5LiL5Y2V5pe26Ze0Ojwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItdGltZS1jb250ZW50XCI+IHt7IG9yZGVyX2luZm8uY3JlYXRlX3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+5pSv5LuY57G75Z6LOjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LWxhYmVsLWNvbnRlbnRcIj7pooTnuqbph5HmlK/ku5gv5YWo5qy+5LuYPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS13YXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGUtbmFtZVwiPuaUr+S7mOaWueW8jzo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS13YXktY29udGVudFwiIHYtaWY9XCJvcmRlcl9pbmZvLnBheV9kcml2ZXI9PSd3ZWNoYXQnXCI+5b6u5L+h5pSv5LuYPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktd2F5LWNvbnRlbnRcIiB2LWVsc2U+5pSv5LuY5a6d5pSv5LuYPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOeMnOS9oOWWnOasoiAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJndWVzcy13aGF0LXlvdS1saWtlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+IOeMnOS9oOWWnOasolxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YmplY3QtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGdvb2RzU2hvdyA6Ym9yZGVyUmFkaXVzPTI0IDpyZXF1ZXN0VXJsPSdyZXF1ZXN0VXJsJyA6d2lkdGg9MzUwIDpwb3JkdWN0TGlzdD0ncHJvZHVjdExpc3RzJz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZ29vZHNTaG93PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9jYXJ0QmcucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20taGludFwiPuacrOWWteS5n+aYr+acieW6lee6v+eahH48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g5bqV6YOo5oyJ6ZKuIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbW1vYmlsaXphdGlvbi1idXR0b25cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJidXR0b25fYWxsXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0wfHxvcmRlcl9pbmZvLnN0YXR1cz09MlwiIHNpemU9XCJtaW5pXCI+5Y+W5raI6K6i5Y2VPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiA+6IGU57O75a6i5pyNPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0wXCIgc2l6ZT1cIm1pbmlcIj7nq4vljbPmlK/ku5g8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTR8fG9yZGVyX2luZm8uc3RhdHVzPT02fHxvcmRlcl9pbmZvLnN0YXR1cz09N3x8b3JkZXJfaW5mby5zdGF0dXM9PThcIlxyXG5cdFx0XHRcdCBzaXplPVwibWluaVwiID5cclxuXHRcdFx0XHRcdOmAgOasvuaYjue7hlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJcIiB0eXBlPVwiZGVmYXVsdFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiIHNpemU9XCJtaW5pXCI+55Sz6K+36YCA5qy+PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCIgc2l6ZT1cIm1pbmlcIiA+56uL5Y2z6aKE57qmPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCIgc2l6ZT1cIm1pbmlcIiA+5qC46ZSA5L2/55SoPC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5Zue5Yiw6aG26YOoIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3AtYnV0dG9uXCIgQGNsaWNrPVwiVG9Ub3BcIiB2LWlmPVwic2hvd1RvcFwiPiBUT1AgPC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGdvb2RzU2hvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nb29kc1Nob3cudnVlXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRnb29kc1Nob3dcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lbnVXaWR0aDogMCxcclxuXHRcdFx0XHRtZW51VG9wOiAwLFxyXG5cdFx0XHRcdG1lbnVIZWlnaHQ6IDAsXHJcblx0XHRcdFx0bWVudUxlZnQ6IDAsXHJcblx0XHRcdFx0bWVudUJvdHRvbTogMCxcclxuXHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0YmFyTmFtZTogJ3BhcnRpY3VsYXJzUGFnZScsIC8v5a+86Iiq5p2h5ZCN56ewXHJcblx0XHRcdFx0Y29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRiYWNrSW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9iYWNrMi5wbmcnLFxyXG5cdFx0XHRcdHRpdGxlOiAn6K6i5Y2V6K+m5oOFJyxcclxuXHRcdFx0XHRzdGF0ZTogJ+W3suS7mOasvicsIC8v5piv5ZCm5LuY5qy+XHJcblx0XHRcdFx0cmVxdWVzdFVybDogJycsXHJcblx0XHRcdFx0b3JkZXJfaW5mbzoge30sXHJcblx0XHRcdFx0aXNfcG9zdF9saXN0OiBbXSwgLy/pgq7lr4TllYblk4FcclxuXHRcdFx0XHRzY2FuX29uZV9saXN0OiBbXSwgLy/mlLbotLnlrqTkvb/nlKjllYblk4FcclxuXHRcdFx0XHRzY2FuX3R3b19saXN0OiBbXSwgLy/kvJrlkZjkuK3lv4Pkvb/nlKjllYblk4FcdFxyXG5cdFx0XHRcdHNob3dUb3A6IGZhbHNlLFxyXG5cdFx0XHRcdG9mZnNldDogMCxcclxuXHRcdFx0XHRvdmVyX3RpbWU6ICcnLFxyXG5cdFx0XHRcdHByb2R1Y3RMaXN0czogW10sXHJcblx0XHRcdFx0ZXhwaXJhdGlvbl90aW1lOiAwLCAvL+i/h+acn+aXtumXtFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5vZmZzZXQgKz0gMTtcclxuXHRcdFx0dGhhdC5nZXRMaWtlKClcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbikge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0dGhpcy5yZXF1ZXN0ID0gdGhpcy4kcmVxdWVzdFxyXG5cdFx0XHR0aGF0LnJlcXVlc3RVcmwgPSB0aGF0LnJlcXVlc3QuZ2xvYmFsRGF0YS5yZXF1ZXN0VXJsXHJcblx0XHRcdGlmIChvcHRpb24uaW5mbykge1xyXG5cdFx0XHRcdHRoYXQuZ2V0X29yZGVyX2RlcmFpbChvcHRpb24uaW5mbylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGF0LmdldF9vcmRlcl9kZXJhaWwoMjMxNDkpIC8vMjMxNzBcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGF0LmdldExpa2UoKVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5oZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHQ7XHJcblx0XHRcdC8vIOWIpOWumui/kOihjOW5s+WPsFxyXG5cdFx0XHRsZXQgcGxhdGZvcm0gPSAnJ1xyXG5cdFx0XHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XHJcblx0XHRcdFx0Y2FzZSAnYW5kcm9pZCc6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhbmRyb2lkJ1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaW9zJzpcclxuXHRcdFx0XHRcdHBsYXRmb3JtID0gJ2lvcydcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhcHBsZXQnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGxhdGZvcm0gPT0gJ2FwcGxldCcpIHtcclxuXHRcdFx0XHQvLyDojrflj5blsY/luZXpq5jluqZcclxuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IG1lbnUud2lkdGhcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51VG9wID0gbWVudS50b3BcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IG1lbnUubGVmdFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSBtZW51LmJvdHRvbVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhhdC5tZW51VG9wID0gNTBcclxuXHRcdFx0XHR0aGF0Lm1lbnVIZWlnaHQgPSAzMlxyXG5cdFx0XHRcdHRoYXQubWVudUxlZnQgPSAyNzhcclxuXHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSA4MlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDojrflj5borqLljZXor6bmg4VcclxuXHRcdFx0Z2V0X29yZGVyX2RlcmFpbDogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2dldF9vcmRlcl9pbmZvJyxcclxuXHRcdFx0XHRcdGlkOiBpZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcIm9yZGVyXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHQvLyDorqLljZXllYblk4Hkv6Hmga9cclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLm9yZGVyX2dvb2RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8g5pi+56S655qE6KeE5qC8XHJcblx0XHRcdFx0XHRcdFx0ZGF0YS5vcmRlcl9nb29kc1tpXS5zaG93X3NrdV9zcGVjID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5vcmRlcl9pbmZvLmRpc3RyaWJ1dGlvbiA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmlzX3Bvc3RfbGlzdC5wdXNoKGRhdGEub3JkZXJfZ29vZHNbaV0pXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLm9yZGVyX2dvb2RzW2ldLnNjYW5fZGVwYXJ0bWVudCA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnNjYW5fb25lX2xpc3QucHVzaChkYXRhLm9yZGVyX2dvb2RzW2ldKVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS5vcmRlcl9nb29kc1tpXS5zY2FuX2RlcGFydG1lbnQgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5zY2FuX3R3b19saXN0LnB1c2goZGF0YS5vcmRlcl9nb29kc1tpXSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8g5pyA6L+R55qE6L+H5pyf5pe26Ze0XHJcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEub3JkZXJfZ29vZHNbaV0ub3ZlcmR1ZV90aW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5vcmRlcl9nb29kc1tpXS5vdmVyZHVlX3RpbWUgPiB0aGF0LmV4cGlyYXRpb25fdGltZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmV4cGlyYXRpb25fdGltZSA9IGRhdGEub3JkZXJfZ29vZHNbaV0ub3ZlcmR1ZV90aW1lXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIOaXtumXtFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm92ZXJfdGltZSA9IHRoYXQuc2V0VGltZXIoZGF0YS5vcmRlcl9pbmZvLmNyZWF0ZV90aW1lICsgZGF0YS5vcmRlcl9pbmZvLmNhbmNlbF90aW1lKVxyXG5cdFx0XHRcdFx0XHRkYXRhLm9yZGVyX2luZm8uY3JlYXRlX3RpbWUgPSB0aGF0LnNldFRpbWVyKGRhdGEub3JkZXJfaW5mby5jcmVhdGVfdGltZSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSlcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuZXhwaXJhdGlvbl90aW1lID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuZXhwaXJhdGlvbl90aW1lID0gdGhhdC5zZXRUaW1lcih0aGF0LmV4cGlyYXRpb25fdGltZSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyDorqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0gZGF0YS5vcmRlcl9pbmZvXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g56uL5Y2z5pSv5LuYXHJcblx0XHRcdHBsZWFzZV9wYXk6ZnVuY3Rpb24oaWQpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhX2luZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDond2VjaGF0d2FwJyxcclxuXHRcdFx0XHRcdG9yZGVyX2lkOmlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwicGF5XCIsIGRhdGFfaW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5td2ViX3VybClcclxuXHRcdFx0XHRcdFx0bGV0IHVybCA9IGRhdGEubXdlYl91cmxcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0ICAgIHRpdGxlOiAn5pSv5LuY5LitLi4uJ1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Ly8gYXBw5pSv5LuYXHJcblx0XHRcdFx0XHRcdC8vIGNvbnN0IHdlYnZpZXcgPSBwbHVzLndlYnZpZXcuY3JlYXRlKFwiXCIsXCJjdXN0b20td2Vidmlld1wiKVxyXG5cdFx0XHRcdFx0XHQvLyB3ZWJ2aWV3LmxvYWRVUkwodGhhdC5wYXlfdXJsLHtcIlJlZmVyZXJcIjp0aGF0LnJlcXVlc3RVcmx9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuinhOagvFxyXG5cdFx0XHR0aGlzX3Nob3dfc2t1X3NwZWM6ZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYodGhhdC5pc19wb3N0X2xpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhhdC5pc19wb3N0X2xpc3Qpe1xyXG5cdFx0XHRcdFx0XHRpZih0aGF0LmlzX3Bvc3RfbGlzdFtrZXldLmlkPT1pdGVtLmlkKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzX3Bvc3RfbGlzdFtrZXldLnNob3dfc2t1X3NwZWMgPSAhdGhhdC5pc19wb3N0X2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjIFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC5zY2FuX29uZV9saXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdGZvcihsZXQga2V5IGluIHRoYXQuc2Nhbl9vbmVfbGlzdCl7XHJcblx0XHRcdFx0XHRcdGlmKHRoYXQuc2Nhbl9vbmVfbGlzdFtrZXldLmlkPT1pdGVtLmlkKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNjYW5fb25lX2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjID0gIXRoYXQuc2Nhbl9vbmVfbGlzdFtrZXldLnNob3dfc2t1X3NwZWMgXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGZvcihsZXQga2V5IGluIHRoYXQuc2Nhbl90d29fbGlzdCl7XHJcblx0XHRcdFx0XHRcdGlmKHRoYXQuc2Nhbl90d29fbGlzdFtrZXldLmlkPT1pdGVtLmlkKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNjYW5fdHdvX2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjID0gIXRoYXQuc2Nhbl90d29fbGlzdFtrZXldLnNob3dfc2t1X3NwZWMgXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi9rOaNouaXtumXtOagvOW8j1xyXG5cdFx0XHRzZXRUaW1lcjogZnVuY3Rpb24oZGF0ZSkge1xyXG5cdFx0XHRcdGxldCBob3VzZSA9IDBcclxuXHRcdFx0XHRsZXQgc2Vjb25kID0gMFxyXG5cdFx0XHRcdGxldCBtaW51dGUgPSAwXHJcblx0XHRcdFx0aG91c2UgPSBwYXJzZUludCgoZGF0ZSkgLyAxMDAwIC8gNjAgLyA2MCAlIDI0KVxyXG5cdFx0XHRcdHNlY29uZCA9IHBhcnNlSW50KChkYXRlKSAvIDYwICUgNjApXHJcblx0XHRcdFx0bWludXRlID0gcGFyc2VJbnQoKGRhdGUpICUgNjApXHJcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKVxyXG5cdFx0XHRcdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuXHRcdFx0XHRpZiAobW9udGggPCAxMCkge1xyXG5cdFx0XHRcdFx0bW9udGggPSBcIjBcIiArIG1vbnRoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG5cdFx0XHRcdGlmIChkYXkgPCAxMCkge1xyXG5cdFx0XHRcdFx0ZGF5ID0gXCIwXCIgKyBkYXlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGhvdXNlIDwgMTApIHtcclxuXHRcdFx0XHRcdGhvdXNlID0gXCIwXCIgKyBob3VzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoc2Vjb25kIDwgMTApIHtcclxuXHRcdFx0XHRcdHNlY29uZCA9IFwiMFwiICsgc2Vjb25kXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChtaW51dGUgPCAxMCkge1xyXG5cdFx0XHRcdFx0bWludXRlID0gXCIwXCIgKyBtaW51dGVcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCB0aW1lID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgbW9udGggKyAnLScgKyBkYXkgKyBcIiAgXCIgKyAnICcgKyBob3VzZSArICc6JyArIHNlY29uZCArICc6JyArIG1pbnV0ZVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRpbWUpXHJcblx0XHRcdFx0cmV0dXJuIHRpbWVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Li65L2g5o6o6I2QXHJcblx0XHRcdGdldExpa2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAndXNlcnJlY29tbWVuZGVkZ29vZHNzcHVsaXN0JyxcclxuXHRcdFx0XHRcdHR5cGU6ICczJyxcclxuXHRcdFx0XHRcdG9mZnNldDogdGhhdC5vZmZzZXRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gdGhhdC5wcm9kdWN0TGlzdHMuY29uY2F0KGRhdGEpXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ayoeacieabtOWkmuS6hicsXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ayoeacieabtOWkmuS6hicsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L+U5Zue5LiK5LiA57qnXHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmiJHnmoTotaDlk4FcclxuXHRcdFx0bXlfY2FyZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L215X2NhcmRgLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWkjeWItuWNleWPt1xyXG5cdFx0XHRjb3B5X29yZGVyX25vOiBmdW5jdGlvbihpbmZvKSB7XHJcblx0XHRcdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xyXG5cdFx0XHRcdFx0ZGF0YTogaW5mbyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3suWkjeWItuWIsOWJquWIh+advydcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L+U5Zue6aG26YOoXHJcblx0XHRcdFRvVG9wOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0XHRcdHNjcm9sbFRvcDogMCxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiA2MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnlLPor7fpgIDmrL5cclxuXHRcdFx0Z29Ub1JlZnVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L215X29yZGVyX3JlZnVuZGAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOaYvuekuuWbnuWIsOmhtumDqOaMiemSrlxyXG5cdFx0b25QYWdlU2Nyb2xsOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmIChlLnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0XHR0aGlzLnNob3dUb3AgPSB0cnVlXHJcblx0XHRcdH0gZWxzZSBpZiAoZS5zY3JvbGxUb3AgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvcCA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQubXlfb3JkZXJfZGV0YWlsIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQudG9wLW5hdi1tZXNzYWdlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDlkZWcsICNmMjQ3ODggMCUsICNmZjY5YTEgMTAwJSk7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC5teS10b3AtYmFyIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00OWRlZywgI2YyNDc4OCAwJSwgI2ZmNjlhMSAxMDAlKTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiAxMDA7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQuYmFjay10aXRsZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzhycHg7XHJcblx0fVxyXG5cclxuXHQuYmFjayB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5iYWNrIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzNnJweDtcclxuXHRcdGhlaWdodDogMzZycHg7XHJcblx0fVxyXG5cclxuXHQuYmFjay10aXRsZSAudGl0bGUge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdG1hcmdpbi1sZWZ0OiA4MHJweDtcclxuXHR9XHJcblxyXG5cdC50b3AtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjEwcnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIxMHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLW1lc3NhZ2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQud2FpdC1wYXkge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLXBheS1wcmljZXMge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5ub3dfcGF5IHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDI0MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQubm93X3BheTo6YWZ0ZXIge1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHJcblx0LnJlc2lkdWUtdGltZSB7XHJcblx0XHRvcGFjaXR5OiAwLjc7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdH1cclxuXHJcblx0LnVzZXItYWxsLW1lc3NhZ2Uge1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IC0xNTBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1tZXNzYWdlLWNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAzNHJweCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLW5hbWUtcGhvbmUtZGVmYXVsdC1hZGRyZXNzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItcGhvbmUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0LWFkZHJlc3Mge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0IHtcclxuXHRcdHdpZHRoOiA2NnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuZGVmYXVsdC1hZGRyZXNzLWNvbnRlbnQge1xyXG5cdFx0d2lkdGg6IDY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg4MzRmYSAwJSwgI2JjNjZmZiAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdH1cclxuXHJcblx0LnNoaXBwaW5nLWFkZHJlc3Mge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMzQzNDM0O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0LmFkZHJlc3MtY29udGVudCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjJycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdFx0d2lkdGg6IDc2JTtcclxuXHR9XHJcblxyXG5cdC5hbGwtb3JkZXItbWVzc2FnZSB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTcwcnB4O1xyXG5cdH1cclxuXHJcblx0LmFjY291bnQtcGFpZC1jb2RlIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQuYWNjb3VudC1wYWlkLWNvZGUtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwIDMwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmFjY291bnQtcGFpZC1jb2RlLW51bWJlciB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5hY2NvdW50LXBhaWQtY29kZS1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5hY2NvdW50LXBhaWQtY29kZS1pbWFnZSBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzIwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyNXJweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1jb250ZW50IHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaXRlbXMge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwO1xyXG5cdH1cclxuXHJcblx0LnNlcnZpY2UtY29uZGl0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIycnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQubGluZS1zZXJ2aWNlLW5hbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHR3aWR0aDogNnJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5zZXJ2aWNlLW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHJcblx0LmFwcG9pbnRtZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1wb3JkdWN0LWNvbnRlbnQge1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1wb3JkdWN0LWxpbmUge1xyXG5cdFx0cGFkZGluZzogMCAwIDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbGluZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0aGVpZ2h0OiAycnB4O1xyXG5cdH1cclxuXHJcblx0LmZhaWx1cmUtdGltZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQudGltZS1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5oaW50LWltYWdlIHtcclxuXHRcdHdpZHRoOiAxNjVycHg7XHJcblx0XHRoZWlnaHQ6IDEzMHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTEwMHJweDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdH1cclxuXHJcblx0LmhpbnQtaW1hZ2UgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDE2NXJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmhpbnQtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQub3JkZXItcG9yZHVjdC1pbWFnZXMtbmFtZSB7XHJcblx0XHRib3JkZXItYm90dG9tOiAycnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMzBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0LyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWltYWdlcyB7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtcmlnaHQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAwIDEwcnB4IDIwcnB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdH1cclxuXHJcblx0LnNrdV9zcGVjX2NvbnRlbnQge1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogIzMzMzMzMztcclxuXHRcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHR3aWR0aDogNzYlO1xyXG5cdFx0cGFkZGluZzogMCAxNnJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDIwcnB4O1xyXG5cdFx0dG9wOiA3NnJweDtcclxuXHR9XHJcblxyXG5cdC5pdGVtX2NvbnRlbnQge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cclxuXHQuc2t1X3NwZWNfY29udGVudCBpbWFnZSxcclxuXHQuc2hvd19pdGVtX2NvbnRlbnQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5zaG93X2l0ZW1fY29udGVudCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAyMHJweDtcclxuXHRcdHRvcDogNzZycHg7XHJcblx0XHR3aWR0aDogNzYlO1xyXG5cdFx0LyogbGluZS1oZWlnaHQ6IDQwcnB4OyAqL1xyXG5cdFx0cGFkZGluZzogNnJweCAxNnJweCAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG5cdH1cclxuXHJcblx0LnNob3dfaXRlbV9jb250ZW50IGltYWdlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZS1udW1iZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZSB0ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1udW1iZXIge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5wYXktb3JkZXItY29udGVudCB7XHJcblx0XHRib3JkZXItdG9wOiAycnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRib3JkZXItYm90dG9tOiAycnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5wYXktb3JkZXItY29udGVudCB0ZXh0IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC50b3RhbC1wcmljZS1vbi1saW5lLXBheSxcclxuXHQuZGlzY291bnRzLWhvc3BpdGFsLXBheSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5kaXNjb3VudHMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQub24tbGluZS1wYXksXHJcblx0LmRpc2NvdW50cyB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5vbi1saW5lLXBheSxcclxuXHQuaG9zcGl0YWwtcGF5IHtcclxuXHRcdG1pbi13aWR0aDogNDIlO1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50cyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjZycHg7XHJcblx0XHRoZWlnaHQ6IDI2cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcGUtd2l0aCB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmNvbXBsaW1lbnRhcnkge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS10b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcblxyXG5cdC50b3AtbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5teS1jb21wbGltZW50YXJ5IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5jb21wbGltZW50YXJ5LWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0cGFkZGluZzogMTVycHggMCAzMnJweDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5hbGwtY29tcGxpbWVudGFyeSB7XHJcblx0XHRwYWRkaW5nLXRvcDogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5jb21wbGltZW50YXJ5LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMThycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1jb250ZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHJcblx0fVxyXG5cclxuXHQudGlja2V0LWRpc2NvdW50LWZ1bGwtcmVkdWN0aW9uIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtbmFtZS1tZXNzYWdlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW1lc3NhZ2Uge1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1wcmljZSB7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQudG90YWwtZGlzY291bnRzIHtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHRcdHBhZGRpbmctdG9wOiAzMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRvdGFsLWRpc2NvdW50cy1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblxyXG5cdC5hbGwtdG90YWwtZGlzY291bnRzIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5hbGwtcHJpY2UtbWVzc2FnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnByaWNlLW5hbWUtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucHJpY2UtbmFtZS1tZXNzYWdlOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5wcmljZS1uYW1lIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnByaWNlLW5hbWUgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnJweDtcclxuXHR9XHJcblxyXG5cdC5wcmljZS1tZXNzYWdlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblxyXG5cdC5yZXR1cm4tbWV3LWJlYW4ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogMzNycHggNDBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1pbWFnZXMtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1tZXNzYWdlIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDkwcnB4O1xyXG5cdFx0aGVpZ2h0OiA3MHJweDtcclxuXHR9XHJcblxyXG5cdC5yZXR1cm4tbnVtYmVyIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHJcblx0LnJldHVybi1oaW50IHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0fVxyXG5cclxuXHQubXktbWV3LW5lYW4ge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaW5mb3JtYXRpb24ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQub3JkZXItc2VyaWFsLW51bWJlcixcclxuXHQub3JkZXItdGltZSxcclxuXHQucGF5LWxhYmVsLFxyXG5cdC5wYXktd2F5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQucGF5LXdheSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlLW5hbWUge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcHkge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW4tbGVmdDogMjRycHg7XHJcblx0fVxyXG5cclxuXHQvKiDnjJzkvaDllpzmrKIgKi9cclxuXHQuZ3Vlc3Mtd2hhdC15b3UtbGlrZSB7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5yZWxhdGVkLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbS1pbWFnZXMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luLXRvcDogNzBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWltYWdlcyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNjBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0bWFyZ2luLXRvcDogNDhycHg7XHJcblx0fVxyXG5cclxuXHQuaW1tb2JpbGl6YXRpb24tYnV0dG9uIHtcclxuXHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0RBREFEQTtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdC5idXR0b25fYWxsIGJ1dHRvbntcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMwcnB4O1xyXG5cdH1cclxuXHQuYmdfYnRue1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuXHQuYnV0dG9uX2FsbCBidXR0b246OmFmdGVye1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHJcblx0LnRvcC1idXR0b24ge1xyXG5cdFx0d2lkdGg6IDY0cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDY1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGJveC1zaGFkb3c6IDBycHggOHJweCAxNnJweCAwcnB4IHJnYmEoMjUwLCA1MywgMTE4LCAwLjMyKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiA0MHJweDtcclxuXHRcdGJvdHRvbTogMTMwcHg7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lyog5paw5YaZ55qE5qC35byPICovXHJcblx0LnJlZnVuZGVkIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucmVmdW5kZWQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDY0cnB4O1xyXG5cdFx0aGVpZ2h0OiA2NHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucmVmdW5kZWRfaGludCB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuY2FuY2VsLW9yZGVyX3RvcCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIxMHJweDtcclxuXHRcdHBhZGRpbmctdG9wOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5jYW5jZWwtb3JkZXJfdG9wIGltYWdlIHtcclxuXHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNhbmNlbF9oaW50IHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnVzZXJfaW5mbyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdHBhZGRpbmc6IDM0cnB4IDA7XHJcblx0fVxyXG5cclxuXHQuY29sb3Ige1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNjM4NDg3OTQ0M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=