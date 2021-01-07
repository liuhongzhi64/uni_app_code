(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my_order_detail"],{

/***/ 399:
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fmy%2Fmy_order_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _my_order_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my_order_detail.vue */ 400));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my_order_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 400:
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 401);
/* harmony import */ var _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=script&lang=js& */ 403);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 405);
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

/***/ 401:
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 402);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 402:
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

/***/ 403:
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=script&lang=js& */ 404);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 404:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var goodsShow = function goodsShow() {__webpack_require__.e(/*! require.ensure | components/goodsShow */ "components/goodsShow").then((function () {return resolve(__webpack_require__(/*! ../../components/goodsShow.vue */ 496));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =


































































































































































































































































































































































































































































































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
      barName: 'back', //导航条名称
      color: '#FFFFFF',
      backImage: '/static/images/back2.png',
      title: '订单详情',
      state: '已付款', //是否付款
      requestUrl: '',
      order_info: {
        giving_info: [],
        discount_description: [] },

      is_post_list: [], //邮寄商品
      scan_one_list: [], //收费室使用商品
      scan_two_list: [], //会员中心使用商品	
      showTop: false,
      offset: 0,
      over_time: '',
      productLists: [],
      expiration_time: 0, //过期时间
      this_show_discount: false,
      discounts_list: [],
      card_sale_list: [],
      all_discount: 0,
      day: 0,
      house: 0,
      second: 0,
      minute: 0 };

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
  onShow: function onShow() {

  },
  onReady: function onReady() {
    var that = this;
    that.height = uni.getSystemInfoSync().screenHeight;
    // 判定运行平台
    var platform = getApp().platform || getApp().globalData.platform;
    if (platform == 'Applets') {
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

    } else
    if (platform == 'APP') {
      that.menuWidth = 90;
      that.menuTop = 40;
      that.menuBottom = 70;
      that.menuHeight = 30;
      that.menuLeft = 278;
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
          var time = data.order_info.create_time + data.order_info.cancel_time - data.order_info.time_now;
          if (time > 0 && data.order_info.status == 0) {
            that.set_dount_down(time);
          }
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
          // console.log(data.mweb_url)
          var url = data.mweb_url;
          uni.showLoading({
            title: '支付中...' });

          // app支付
          var webview = plus.webview.create("", "custom-webview");
          webview.loadURL(url, { "Referer": that.requestUrl });
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
      // house = parseInt((date) / 1000 / 60 / 60 % 24)
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
      house = date.getHours();
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
    // 开启倒计时
    set_dount_down: function set_dount_down(time) {
      var that = this;
      var secondTime = 0; // 分
      var hourTime = 0; // 小时
      var day = 0; //天
      var timers = setInterval(function () {
        time -= 1;
        var minuteTime = time; // 秒
        if (minuteTime > 60) {
          secondTime = parseInt(minuteTime / 60);
          minuteTime = parseInt(minuteTime % 60);
          if (secondTime > 60) {
            hourTime = parseInt(secondTime / 60);
            secondTime = parseInt(secondTime % 60);
            if (hourTime > 24) {
              day = parseInt(hourTime / 24);
              hourTime = parseInt(hourTime % 60);
            }
          }
        } else {
          secondTime = 0;
          hourTime = 0;
          day = 0;
        }
        that.day = day;
        that.house = hourTime;
        that.second = secondTime;
        that.minute = minuteTime;
        if (time <= 0) {
          clearInterval(timers);
          that.order_info.status = 1;
        }
        if (that.timers > 0) {
          clearInterval(timers);
        }
      }, 1000);

    },
    // 为你推荐
    getLike: function getLike() {
      var that = this;
      var dataInfo = {
        interfaceId: 'userrecommendedgoodsspulist',
        type: '5',
        offset: that.offset * 6 };

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
    // 商品详情
    goods_detail: function goods_detail(id, encrypted_id) {
      uni.navigateTo({
        url: "/pages/goods/goods_detail?sku_id=".concat(id, "&encrypted_id=").concat(encrypted_id) });

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
    // 显示优惠信息
    this_discount: function this_discount(info, card_sale_info, discount) {
      var that = this;
      if (info.length > 0) {
        that.discounts_list = [];
        that.discounts_list = info;
        that.this_show_discount = !that.this_show_discount;
        that.all_discount = discount;
      } else if (card_sale_info && card_sale_info.length > 0) {
        that.card_sale_list = [];
        that.card_sale_list = card_sale_info;
        that.this_show_discount = !that.this_show_discount;
        that.all_discount = discount;
      } else {
        uni.showToast({
          title: '暂无优惠信息',
          icon: 'none' });

      }
    },
    // 优惠合计
    this_all_discount: function this_all_discount(info) {
      var that = this;
      if (info.length == 0) {
        uni.showToast({
          title: '暂无优惠信息',
          icon: 'none' });

      } else {
        for (var key in info) {
          that.discounts_list = [];
          that.card_sale_list = [];
          that.all_discount = 0;
          if (info[key].tools_id == 'discount') {
            that.discounts_list.push(info[key]);
          } else if (info[key].tools_id == 'sale_card_user') {
            that.card_sale_list.push(info[key]);
          }
          that.all_discount += info[key].sale_price;
        }
        that.this_show_discount = !that.this_show_discount;
      }
    },
    hide_discount: function hide_discount() {
      var that = this;
      that.this_show_discount = !that.this_show_discount;
    },
    // 去首页和分类
    go_to_page: function go_to_page() {
      uni.reLaunch({
        url: '/pages/goods/goods_classify' });

    },
    // 返回顶部
    ToTop: function ToTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 600 });

    },
    // 申请退款
    go_refund: function go_refund(id) {
      uni.navigateTo({
        url: "/pages/my/my_order_refund?id=".concat(id) });

    },
    // 退款结果
    // cancel_detail: function(id) {
    // 	uni.navigateTo({
    // 		url: `/pages/my/my_order_refund_progress?id=${id}`,
    // 	})
    // },
    // 取消订单
    cancel_order: function cancel_order(id) {
      var that = this;
      uni.showModal({
        title: "提示",
        content: '您正在取消订单,确认取消订单吗？',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            var dataInfo = {
              interfaceId: 'cancel',
              id: id };

            that.request.uniRequest("order", dataInfo).then(function (res) {
              if (res.data.code == 1000 && res.data.status == 'ok') {
                uni.showToast({
                  title: '取消订单成功!' });

                setTimeout(function () {
                  uni.navigateTo({
                    url: "/pages/my/my_order?type=0" });

                }, 1000);
              }
            });
          }
        } });

    },
    // 联系客服
    contact: function contact() {
      uni.navigateTo({
        url: "/pages/consultation/consultation" });

    },
    // 写日记和评价
    write_content: function write_content(info) {
      // 写日记
      if (info == 'diary') {
        uni.navigateTo({
          url: "/pages/diary/diary_write" });

      } else if (info == 'comment') {
        // 写评价
        uni.navigateTo({
          url: "/pages/my/write_comment" });

      }
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

/***/ 405:
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 406);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 406:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[399,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlPzE1NmQiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZT9mOWM3Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/YzRmNSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlPzhmZDgiLCJ1bmktYXBwOi8vL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZT9jOTQ5Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/MTIzNiJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsOEc7QUFDQUEsVUFBVSxDQUFDQyx3QkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUNxQzs7O0FBR25HO0FBQytLO0FBQy9LLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBd3FCLENBQWdCLHNxQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21lNXJCO0FBQ0E7QUFDQSx3QkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLGlCQUpBO0FBS0EsbUJBTEE7QUFNQSxlQU5BO0FBT0EscUJBUEEsRUFPQTtBQUNBLHNCQVJBO0FBU0EsMkNBVEE7QUFVQSxtQkFWQTtBQVdBLGtCQVhBLEVBV0E7QUFDQSxvQkFaQTtBQWFBO0FBQ0EsdUJBREE7QUFFQSxnQ0FGQSxFQWJBOztBQWlCQSxzQkFqQkEsRUFpQkE7QUFDQSx1QkFsQkEsRUFrQkE7QUFDQSx1QkFuQkEsRUFtQkE7QUFDQSxvQkFwQkE7QUFxQkEsZUFyQkE7QUFzQkEsbUJBdEJBO0FBdUJBLHNCQXZCQTtBQXdCQSx3QkF4QkEsRUF3QkE7QUFDQSwrQkF6QkE7QUEwQkEsd0JBMUJBO0FBMkJBLHdCQTNCQTtBQTRCQSxxQkE1QkE7QUE2QkEsWUE3QkE7QUE4QkEsY0E5QkE7QUErQkEsZUEvQkE7QUFnQ0EsZUFoQ0E7O0FBa0NBLEdBdkNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E1Q0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxNQUVBO0FBQ0EsbUNBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxHQXZEQTtBQXdEQTs7QUFFQSxHQTFEQTtBQTJEQSxTQTNEQSxxQkEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FSQTs7QUFVQSxLQVpBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXBGQTtBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxjQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BbkNBO0FBb0NBLEtBNUNBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWkE7QUFhQSxLQWpFQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4RkE7QUF5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBeEhBO0FBeUhBO0FBQ0E7QUFDQTtBQUNBLHlCQUZBLENBRUE7QUFDQSx1QkFIQSxDQUdBO0FBQ0Esa0JBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQSw4QkFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BOUJBLEVBOEJBLElBOUJBOztBQWdDQSxLQS9KQTtBQWdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQURBO0FBRUEsaUJBRkE7QUFHQSwrQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0EsU0FWQSxNQVVBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0EsT0FqQkE7QUFrQkEsS0ExTEE7QUEyTEE7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0FoTUE7QUFpTUE7QUFDQTtBQUNBO0FBQ0Esa0dBREE7O0FBR0EsS0F0TUE7QUF1TUE7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7O0FBR0EsS0E1TUE7QUE2TUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0EsNEJBREE7O0FBR0EsU0FOQTs7QUFRQSxLQXZOQTtBQXdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLE1BS0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsc0JBRkE7O0FBSUE7QUFDQSxLQTNPQTtBQTRPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSxzQkFGQTs7QUFJQSxPQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxRQTtBQW1RQTtBQUNBO0FBQ0E7QUFDQSxLQXRRQTtBQXVRQTtBQUNBO0FBQ0E7QUFDQSwwQ0FEQTs7QUFHQSxLQTVRQTtBQTZRQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHFCQUZBOztBQUlBLEtBblJBO0FBb1JBO0FBQ0E7QUFDQTtBQUNBLHVEQURBOztBQUdBLEtBelJBO0FBMFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxtQ0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTs7QUFHQTtBQUNBO0FBQ0Esb0RBREE7O0FBR0EsaUJBSkEsRUFJQSxJQUpBO0FBS0E7QUFDQSxhQVhBO0FBWUE7QUFDQSxTQXZCQTs7QUF5QkEsS0E1VEE7QUE2VEE7QUFDQTtBQUNBO0FBQ0EsK0NBREE7O0FBR0EsS0FsVUE7QUFtVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQURBOztBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSx3Q0FEQTs7QUFHQTtBQUNBLEtBaFZBLEVBckZBOztBQXVhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxHQTlhQSxFOzs7Ozs7Ozs7Ozs7O0FDbmVBO0FBQUE7QUFBQTtBQUFBO0FBQTIrQixDQUFnQixxOEJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0EvL0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9teS9teV9vcmRlcl9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGRlMWVlYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA4ZGUxZWViXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL215L215X29yZGVyX2RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJteV9vcmRlcl9kZXRhaWxcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wLW5hdi1tZXNzYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibXktdG9wLWJhclwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLXRvcCc6bWVudVRvcCsncHgnLCdsaW5lLWhlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLWJvdHRvbSc6MTArJ3B4J31dXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrLXRpdGxlXCIgOnN0eWxlPVwiW3snaGVpZ2h0JzptZW51SGVpZ2h0KydweCd9XVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrXCIgQGNsaWNrPVwiZ29CYWNrXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3JldHVybi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIiA6c3R5bGU9XCJbeydtYXJnaW4tcmlnaHQnOm1lbnVXaWR0aCsncHgnfV1cIj4ge3t0aXRsZX19IDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3AtbWVzc2FnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cyE9MVwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzptZW51SGVpZ2h0KzkwKydweCd9XVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOetieW+heS7mOasviB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci11c2VpbmctdGltZS1wcmljZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndhaXQtcGF5XCI+562J5b6F5LuY5qy+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWAkuiuoeaXtiAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZXNpZHVlLXRpbWVcIj7liankvZnmlK/ku5jml7bpl7Q6XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+e3sgZGF5IH19PC90ZXh0PuWkqTx0ZXh0Pnt7IGhvdXNlIH19PC90ZXh0PuaXtjx0ZXh0Pnt7IHNlY29uZCB9fTwvdGV4dD7liIY8dGV4dD57eyBtaW51dGUgfX08L3RleHQ+56eSXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLXBheS1wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdOWcqOe6v+aUr+S7mO+/pTx0ZXh0Pnt7IG9yZGVyX2luZm8ub25saW5lX3BheSB9fTwvdGV4dD4s5Yiw6Zmi5YaN5LuY77+lPHRleHQ+e3sgb3JkZXJfaW5mby5vZmZsaW5lX3BheSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwibm93X3BheVwiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiBAdGFwPVwicGxlYXNlX3BheShvcmRlcl9pbmZvLmlkKVwiPueri+WNs+aUr+S7mDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDlt7Lku5jmrL4gdi1lbHNlLWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci11c2VpbmctdGltZS1wcmljZVwiIHYtZWxzZS1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2FpdC1wYXlcIj7lt7Lku5jmrL48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVzaWR1ZS10aW1lXCI+5pyJ5ZWG5ZOB5LqOIHt7IGV4cGlyYXRpb25fdGltZSB9fSDkvZzlup88L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1wYXktcHJpY2VzXCI+IOivt+WwveW/q+WIsOmZouS9v+eUqCA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOW3sumAgOasviBvcmRlcl9pbmZvLnN0YXR1cz09NyAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVmdW5kZWRcIiB2LWVsc2UtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9kZWxldGUucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVmdW5kZWRfaGludFwiPuW3sumAgOasvjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlt7LkvZzlup8gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuY2VsLW9yZGVyX3RvcFwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzptZW51Qm90dG9tKzQwKydweCd9XVwiIHYtZWxzZS1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0xXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2RlbGV0ZS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhbmNlbF9oaW50XCI+5bey5L2c5bqfPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOaUtui0p+WcsOWdgOWSjOiBlOezu+aWueW8jyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidXNlci1hbGwtbWVzc2FnZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbWVzc2FnZS1jb250ZW50XCIgdi1pZj1cIm9yZGVyX2luZm8uZGlzdHJpYnV0aW9uPT0xXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW1lc3NhZ2UtbGVmdFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWUtcGhvbmUtZGVmYXVsdC1hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1uYW1lXCI+IHt7IG9yZGVyX2luZm8uYWNjZXB0X25hbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItcGhvbmVcIj4ge3sgb3JkZXJfaW5mby50ZWxwaG9uZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVmYXVsdC1hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWZhdWx0XCI+6buY6K6kPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVmYXVsdC1hZGRyZXNzLWNvbnRlbnRcIj4ge3sgb3JkZXJfaW5mby50YWcgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoaXBwaW5nLWFkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRyZXNzLW5hbWVcIj7mlLbotKflnLDlnYA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkcmVzcy1jb250ZW50XCI+IHt7IG9yZGVyX2luZm8ucHJvdmluY2VfY24gKyBvcmRlcl9pbmZvLmNpdHlfY24gKyBvcmRlcl9pbmZvLmFyZWFfY24gKyBvcmRlcl9pbmZvLmFkZHJlc3MgfX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaW5mb1wiIHYtZWxzZS1pZj1cIm9yZGVyX2luZm8uZGlzdHJpYnV0aW9uPT0wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NlcHRfbmFtZVwiPiB7eyBvcmRlcl9pbmZvLmFjY2VwdF9uYW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRlbHBob25lXCI+IHt7IG9yZGVyX2luZm8udGVscGhvbmUgfX0gPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wYXJ0aWN1bGFyc1wiPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJvcmRlci1wYXJ0aWN1bGFyc1wiPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLW9yZGVyLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDlt7Lku5jmrL7nmoTmoLjplIDnoIEgb3JkZXJfaW5mby5zdGF0dXM9PTIgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGVcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtbnVtYmVyXCI+6K6i5Y2V5qC46ZSA56CBIC0ge3sgb3JkZXJfaW5mby5oeF9jb2RlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtaGludFwiPuWMu+e+jumhueebruivt+WcqOaUtui0ueWupOWHuuekujwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtaGludFwiPuaKpOiCpOWTgemhueebruWcqOS8muWRmOS4reW/g+WHuuekujwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK29yZGVyX2luZm8ucXJjb2Rlc1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOiuouWNleWVhuWTgeS/oeaBryAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDpgq7lr4TllYblk4EgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1pdGVtc1wiIHYtaWY9XCJpc19wb3N0X2xpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VydmljZS1jb25kaXRpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZS1zZXJ2aWNlLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLW5hbWVcIj4g6YKu5a+E5ZWG5ZOBIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFwcG9pbnRtZW50XCIgdi1zaG93PVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIj4g5aSx5pWI55qE5ZWG5ZOB5bCG6Ieq5Yqo6YCA5qy+77yM6K+35Y+K5pe25Yiw6Zmi5L2/55SoIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1jb250ZW50XCIgdi1mb3I9XCIoaSxrKSBpbiBpc19wb3N0X2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZhaWx1cmUtdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1oaW50XCI+5ZWG5ZOB5aSx5pWI5pe26Ze0OiB7eyBvdmVyX3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3JlZnVuZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LWltYWdlXCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT01XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF91c2VkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtdGV4dFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiPuW+heS9v+eUqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtaW1hZ2VzLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraS5pbWdcIiBAdGFwPVwiZ29vZHNfZGV0YWlsKGkuc2t1X2lkLGkuZW5jcnlwdGVkX2lkKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWVcIj57e2kuc3B1X25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2t1X3NwZWNfY29udGVudFwiIEB0YXA9J3RoaXNfc2hvd19za3Vfc3BlYyhpLGspJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnRfaXRlbXNcIiB2LWZvcj1cIih6LGopIGluIGkuc2t1X3NwZWNcIiA6a2V5PSdqJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnNcIj4ge3sgeiB9fSA6IHt7IGogfX0gOyA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfaXRlbV9jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknIHYtaWY9XCJpLnNob3dfc2t1X3NwZWNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2FsbF9pdGVtc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZS1udW1iZXJcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJpLnN0YXR1cz09MHx8aS5zdGF0dXM9PTJ8fGkuc3RhdHVzPT0zfHxpLnN0YXR1cz09NT8nc2hvd19jb2xvcic6JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlXCIgPjx0ZXh0Pu+/pTwvdGV4dD57e2kuc2t1X3ByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1udW1iZXJcIiA+eHt7aS5za3VfbnVtc319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1mb3ItdGhlLW9yZGVyIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LW9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiIHRvdGFsLXByaWNlLW9uLWxpbmUtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtcHJpY2VcIj7mgLvku7cgPHRleHQ+77+lIHt7aS5wYXlhYmxlX2Ftb3VudH19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9uLWxpbmUtcGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWcqOe6v+aUr+S7mCA8dGV4dD7vv6Uge3tpLm9ubGluZV9wYXl9fSA8L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1ob3NwaXRhbC1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx05LyY5oOgIDx0ZXh0Pu+/pSB7eyBpLmRpc2NvdW50IHx8IDB9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPVwidGhpc19kaXNjb3VudChpLmhkX3NhbGVfaW5mbyxpLmNhcmRfc2FsZV9pbmZvLGkuZGlzY291bnQpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvc3BpdGFsLXBheVwiPuWIsOmZouWGjeS7mCA8dGV4dD7vv6Uge3tpLm9mZmxpbmVfcGF5fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcGUtd2l0aFwiPuW6lOS7mCA8dGV4dD7vv6Uge3tpLnJlbF9wcmljZX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOaUtui0ueWupOS9v+eUqOWVhuWTgSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWl0ZW1zXCIgdi1lbHNlLWlmPVwic2Nhbl9vbmVfbGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLWNvbmRpdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lLXNlcnZpY2UtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcnZpY2UtbmFtZVwiPiDmlLbotLnlrqTkvb/nlKjllYblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXBwb2ludG1lbnRcIiB2LXNob3c9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiPiDlpLHmlYjnmoTllYblk4HlsIboh6rliqjpgIDmrL7vvIzor7flj4rml7bliLDpmaLkvb/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWNvbnRlbnRcIiB2LWZvcj1cIihpLGspIGluIHNjYW5fb25lX2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZhaWx1cmUtdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1oaW50XCI+5ZWG5ZOB5aSx5pWI5pe26Ze0OiB7eyBvdmVyX3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcmVmdW5kLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC9jYXJkX3VzZWQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC10ZXh0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCI+5b6F5L2/55SoPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1pbWFnZXMtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmltZ1wiIEB0YXA9XCJnb29kc19kZXRhaWwoaS5za3VfaWQsaS5lbmNyeXB0ZWRfaWQpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbmFtZVwiPnt7aS5zcHVfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJza3Vfc3BlY19jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudF9pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19pdGVtX2NvbnRlbnRcIiBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKScgdi1pZj1cImkuc2hvd19za3Vfc3BlY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfYWxsX2l0ZW1zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWl0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlLW51bWJlclwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj48dGV4dD7vv6U8L3RleHQ+e3tpLnNrdV9wcmljZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbnVtYmVyXCI+IHgge3tpLnNrdV9udW1zfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1mb3ItdGhlLW9yZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktb3JkZXItY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1wcmljZS1vbi1saW5lLXBheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsLXByaWNlXCI+IOaAu+S7tyA8dGV4dD7vv6Uge3tpLnBheWFibGVfYW1vdW50fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib24tbGluZS1wYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx05Zyo57q/5pSv5LuYIDx0ZXh0Pu+/pSB7e2kub25saW5lX3BheX19IDwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLWhvc3BpdGFsLXBheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50c1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJpLnN0YXR1cz09MHx8aS5zdGF0dXM9PTJ8fGkuc3RhdHVzPT0zfHxpLnN0YXR1cz09NT8nc2hvd19jb2xvcic6JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTkvJjmg6AgPHRleHQ+77+lIHt7IGkuZGlzY291bnQgfHwgMH19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hc2sxLnBuZ1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPVwidGhpc19kaXNjb3VudChpLmhkX3NhbGVfaW5mbyxpLmNhcmRfc2FsZV9pbmZvLGkuZGlzY291bnQpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvc3BpdGFsLXBheVwiPuWIsOmZouWGjeS7mCA8dGV4dD7vv6Uge3tpLm9mZmxpbmVfcGF5fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcGUtd2l0aFwiPuW6lOS7mCA8dGV4dD7vv6Uge3tpLnJlbF9wcmljZX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOS8muS4reW/g+WRmOS9v+eUqOWVhuWTgSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWl0ZW1zXCIgdi1lbHNlLWlmPVwic2Nhbl90d29fbGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLWNvbmRpdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lLXNlcnZpY2UtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcnZpY2UtbmFtZVwiPiDkvJrkuK3lv4PlkZjkvb/nlKjllYblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXBwb2ludG1lbnRcIiB2LXNob3c9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiPiDlpLHmlYjnmoTllYblk4HlsIboh6rliqjpgIDmrL7vvIzor7flj4rml7bliLDpmaLkvb/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWNvbnRlbnRcIiB2LWZvcj1cIihpLGspIGluIHNjYW5fdHdvX2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZhaWx1cmUtdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1oaW50XCI+5ZWG5ZOB5aSx5pWI5pe26Ze0OiB7eyBvdmVyX3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcmVmdW5kLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC9jYXJkX3VzZWQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC10ZXh0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCI+5b6F5L2/55SoPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1pbWFnZXMtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmltZ1wiIEB0YXA9XCJnb29kc19kZXRhaWwoaS5za3VfaWQsaS5lbmNyeXB0ZWRfaWQpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbmFtZVwiPnt7aS5zcHVfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJza3Vfc3BlY19jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudF9pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19pdGVtX2NvbnRlbnRcIiBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKScgdi1pZj1cImkuc2hvd19za3Vfc3BlY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfYWxsX2l0ZW1zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWl0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlLW51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZVwiPjx0ZXh0Pu+/pTwvdGV4dD57e2kuc2t1X3ByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1udW1iZXJcIj54e3tpLnNrdV9udW1zfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LWZvci10aGUtb3JkZXIgXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktb3JkZXItY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCIgdG90YWwtcHJpY2Utb24tbGluZS1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPuaAu+S7tyA8dGV4dD7vv6Uge3tpLnBheWFibGVfYW1vdW50fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib24tbGluZS1wYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx05Zyo57q/5pSv5LuYIDx0ZXh0Pu+/pSB7e2kub25saW5lX3BheX19IDwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLWhvc3BpdGFsLXBheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50c1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJpLnN0YXR1cz09MHx8aS5zdGF0dXM9PTJ8fGkuc3RhdHVzPT0zfHxpLnN0YXR1cz09NT8nc2hvd19jb2xvcic6JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTkvJjmg6AgPHRleHQ+77+lIHt7IGkuZGlzY291bnQgfHwgMH19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hc2sxLnBuZ1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPVwidGhpc19kaXNjb3VudChpLmhkX3NhbGVfaW5mbyxpLmNhcmRfc2FsZV9pbmZvLGkuZGlzY291bnQpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvc3BpdGFsLXBheVwiPuWIsOmZouWGjeS7mCA8dGV4dD7vv6Uge3tpLm9mZmxpbmVfcGF5fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcGUtd2l0aFwiPuW6lOS7mCA8dGV4dD7vv6Uge3tpLnJlbF9wcmljZX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOi1oOWTgSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LXRvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3AtbmFtZVwiPui1oOmAgeS/oeaBrzwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXktY29tcGxpbWVudGFyeVwiIEB0YXA9XCJteV9jYXJkKClcIj7miJHnmoTotaDlk4EgPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeS1oaW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHTmuKnppqjmj5DnpLrvvJrmiYDmnInotaDlk4HlsIbku6XljaHliLjnmoTlvaLlvI/lj5HmlL7liLDotKbmiLfkuK3jgILoi6Xlj5HnlJ/mlbTljZXpgIDmrL7vvIzmiJbmmK/pg6jliIbpgIDmrL7vvIxcclxuXHRcdFx0XHRcdFx0XHRcdOaIkemZouacieadg+aUtuWbnuebuOWFs+i1oOWTge+8jOW5tuagueaNrumAgOasvi/pgIDljZXlkI7nmoTmg4XlhrXph43mlrDorqHnrpfotaDlk4Hkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtY29tcGxpbWVudGFyeVwiIHYtaWY9XCJvcmRlcl9pbmZvLmdpdmluZ19pbmZvLmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktaXRlbVwiIHYtZm9yPVwiKGl0ZW0saykgaW4gb3JkZXJfaW5mby5naXZpbmdfaW5mb1wiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktbmFtZVwiPiB7eyBpdGVtLmNhdGVnb3J5IH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LWNvbnRlbnRcIj4ge3sgaXRlbS5ydWxlX25hbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOS8mOaDoOS/oeaBryAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtZGlzY291bnQtZnVsbC1yZWR1Y3Rpb25cIiB2LWlmPVwib3JkZXJfaW5mby5kaXNjb3VudF9kZXNjcmlwdGlvbi5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWNvbnRlbnRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcmRlcl9pbmZvLmRpc2NvdW50X2Rlc2NyaXB0aW9uXCIgOmtleT0naW5kZXgnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbmFtZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LW5hbWVcIj4ge3sgaXRlbS5jYXRlZ29yeSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LW1lc3NhZ2VcIj4ge3tpdGVtLnJ1bGVfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LXByaWNlXCI+Le+/pSB7eyBpdGVtLnNhbGVfcHJpY2UgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOS8mOaDoOWQiOiuoSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsLWRpc2NvdW50c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1kaXNjb3VudHMtbmFtZVwiPuS8mOaDoOWQiOiuoTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLXRvdGFsLWRpc2NvdW50c1wiPi3vv6Uge3sgb3JkZXJfaW5mby50b3RhbF9kaXNjb3VudCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5ZWG5ZOB5Lu35qC85L+h5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1wcmljZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZVwiPiDllYblk4HmgLvku7cgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlXCI+IO+/pSB7eyBvcmRlcl9pbmZvLnBheWFibGVfYW1vdW50IHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lXCI+IOS8mOaDoOWQiOiuoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgQHRhcD1cInRoaXNfYWxsX2Rpc2NvdW50KG9yZGVyX2luZm8uZGlzY291bnRfZGVzY3JpcHRpb24pXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlXCI+IO+/pSB7eyBvcmRlcl9pbmZvLnRvdGFsX2Rpc2NvdW50IHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lXCI+IOmCruWvhOi/kOi0uSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW1lc3NhZ2VcIj4g77+lIHt7IG9yZGVyX2luZm8ucmVhbF9mcmVpZ2h0IHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lXCI+IOWunumZheW6lOS7mCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW1lc3NhZ2VcIj4g77+lIHt7IG9yZGVyX2luZm8ucmVsX3ByaWNlIHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUtbWVzc2FnZSBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZSBjb2xvclwiPiDlnKjnur/mlK/ku5ggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlIGNvbG9yXCI+IO+/pSB7eyBvcmRlcl9pbmZvLm9ubGluZV9wYXkgfHwgMCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUgY29sb3JcIj4g5Yiw6Zmi5YaN5LuYIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbWVzc2FnZSBjb2xvclwiPiDvv6Uge3sgb3JkZXJfaW5mby5vZmZsaW5lX3BheSB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDllrXosYYgLS0+XHJcblx0XHRcdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJyZXR1cm4tbWV3LWJlYW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldy1iZWFuLWltYWdlcy1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldy1iZWFuLWltYWdlc1wiPjxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NhcnRCZy5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldy1iZWFuLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZXR1cm4tbnVtYmVyXCI+6L+U5Za16LGGMTAwMOS4qjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZXR1cm4taGludFwiPui0reeJqei/lOWWteixhizllrXosYblj6/mirXnjrA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXktbWV3LW5lYW5cIj7miJHnmoTllrXosYYgPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Y2V5Y+3IC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWluZm9ybWF0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1zZXJpYWwtbnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7orqLljZXnvJblj7c6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJpYWwtbnVtYmVyXCI+IHt7IG9yZGVyX2luZm8ub3JkZXJfbm8gfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb3B5XCIgQHRhcD0nY29weV9vcmRlcl9ubyhvcmRlcl9pbmZvLm9yZGVyX25vKSc+5aSN5Yi2PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGUtbmFtZVwiPuS4i+WNleaXtumXtDo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXRpbWUtY29udGVudFwiPiB7eyBvcmRlcl9pbmZvLmNyZWF0ZV90aW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGUtbmFtZVwiPuaUr+S7mOexu+Weizo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1sYWJlbC1jb250ZW50XCI+6aKE57qm6YeR5pSv5LuYL+WFqOasvuS7mDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktd2F5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7mlK/ku5jmlrnlvI86PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktd2F5LWNvbnRlbnRcIiB2LWlmPVwib3JkZXJfaW5mby5wYXlfZHJpdmVyPT0nd2VjaGF0J1wiPuW+ruS/oeaUr+S7mDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXdheS1jb250ZW50XCIgdi1lbHNlPuaUr+S7mOWuneaUr+S7mDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDnjJzkvaDllpzmrKIgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ3Vlc3Mtd2hhdC15b3UtbGlrZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVsYXRlZC10aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PiDnjJzkvaDllpzmrKJcclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJqZWN0LWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxnb29kc1Nob3cgOmJvcmRlclJhZGl1cz0yNCA6cmVxdWVzdFVybD0ncmVxdWVzdFVybCcgOndpZHRoPTM1MCA6cG9yZHVjdExpc3Q9J3Byb2R1Y3RMaXN0cyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2dvb2RzU2hvdz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20taW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY2FydEJnLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWhpbnRcIj7mnKzllrXkuZ/mmK/mnInlupXnur/nmoR+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5bqV6YOo5oyJ6ZKuIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbW1vYmlsaXphdGlvbi1idXR0b25cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJidXR0b25fYWxsXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0wXCIgc2l6ZT1cIm1pbmlcIiBAdGFwPVwiY2FuY2VsX29yZGVyKG9yZGVyX2luZm8uaWQpXCI+XHJcblx0XHRcdFx0XHTlj5bmtojorqLljZVcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiBzaXplPVwibWluaVwiIEB0YXA9XCJjb250YWN0KClcIj7ogZTns7vlrqLmnI08L2J1dHRvbj5cclxuXHRcdFx0XHQ8IS0tIDxidXR0b24gY2xhc3M9XCJcIiB0eXBlPVwiZGVmYXVsdFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09NHx8b3JkZXJfaW5mby5zdGF0dXM9PTZ8fG9yZGVyX2luZm8uc3RhdHVzPT03fHxvcmRlcl9pbmZvLnN0YXR1cz09OFwiXHJcblx0XHRcdFx0IHNpemU9XCJtaW5pXCIgQHRhcD1cImNhbmNlbF9kZXRhaWwob3JkZXJfaW5mby5pZClcIj5cclxuXHRcdFx0XHRcdOmAgOasvuaYjue7hlxyXG5cdFx0XHRcdDwvYnV0dG9uPiAtLT5cclxuXHRcdFx0XHQ8IS0tIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiIC0tPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJcIiB0eXBlPVwiZGVmYXVsdFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiICBzaXplPVwibWluaVwiIEB0YXA9J2dvX3JlZnVuZChvcmRlcl9pbmZvLmlkKSc+XHJcblx0XHRcdFx0XHTnlLPor7fpgIDmrL5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY29sb3JfYnRuXCIgdHlwZT1cImRlZmF1bHRcIiBzaXplPVwibWluaVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiIEB0YXA9XCJnb190b19wYWdlXCI+XHJcblx0XHRcdFx0XHTljrvpgJvpgJtcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8IS0tIDxidXR0b24gY2xhc3M9XCJcIiB0eXBlPVwiZGVmYXVsdFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiIHNpemU9XCJtaW5pXCI+XHJcblx0XHRcdFx0XHTnq4vljbPpooTnuqZcclxuXHRcdFx0XHQ8L2J1dHRvbj4gLS0+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImNvbG9yX2J0blwiIHR5cGU9XCJkZWZhdWx0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0wXCIgc2l6ZT1cIm1pbmlcIiBAdGFwPVwicGxlYXNlX3BheShvcmRlcl9pbmZvLmlkKVwiPlxyXG5cdFx0XHRcdFx056uL5Y2z5pSv5LuYXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImNvbG9yX2J0blwiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIiBAdGFwPVwid3JpdGVfY29udGVudCgnZGlhcnknKVwiID7lhpnml6XorrA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiBzaXplPVwibWluaVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09NVwiIEB0YXA9XCJ3cml0ZV9jb250ZW50KCdjb21tZW50JylcIj7lhpnor4Tku7c8L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDlm57liLDpobbpg6ggLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcC1idXR0b25cIiBAY2xpY2s9XCJUb1RvcFwiIHYtaWY9XCJzaG93VG9wXCI+IFxyXG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvb3JkZXJfdG9wLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOS8mOaDoOS/oeaBryAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRfY29udGVudFwiIEB0YXA9XCJoaWRlX2Rpc2NvdW50XCIgdi1pZj1cInRoaXNfc2hvd19kaXNjb3VudFwiIDpzdHlsZT1cIlt7J2hlaWdodCc6aGVpZ2h0LW1lbnVCb3R0b20tMTArJ3B4JywndG9wJzptZW51Qm90dG9tKzEwKydweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50LWhpbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50c19saXN0XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3RfaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGRpc2NvdW50c19saXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9uYW1lXCI+IDx2aWV3IGNsYXNzPVwiY2F0ZWdvcnlcIj4ge3tpdGVtLmNhdGVnb3J5fX0gPC92aWV3PiA8dmlldz4ge3sgaXRlbS5ydWxlX25hbWUgfX0gPC92aWV3PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzX3NhbGVfcHJpY2VcIj4gLSDvv6Uge3sgaXRlbS5zYWxlX3ByaWNlIHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0X2l0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjYXJkX3NhbGVfbGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fbmFtZVwiPiA8dmlldyBjbGFzcz1cImNhdGVnb3J5XCI+IHt7aXRlbS5jYXRlZ29yeX19IDwvdmlldz4gPHZpZXc+IHt7IGl0ZW0ucnVsZV9uYW1lIH19IDwvdmlldz4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50c19zYWxlX3ByaWNlXCI+IC0g77+lIHt7IGl0ZW0uc2FsZV9wcmljZSB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGxfZGlzY291bnRzXCI+IFxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJhbGxfZGlzY291bnRzX25hbWVcIj4g5ZCI6K6h5LyY5oOgIDwvdGV4dD4gXHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRpc2NvdW50c19zYWxlX3ByaWNlXCI+IC0g77+lIHt7IGFsbF9kaXNjb3VudCB8fCAwIH19IDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImlfa25vd1wiIHR5cGU9XCJkZWZhdWx0XCIgPlxyXG5cdFx0XHRcdFx05oiR55+l6YGT5LqGXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBnb29kc1Nob3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ29vZHNTaG93LnZ1ZVwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Z29vZHNTaG93XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZW51V2lkdGg6IDAsXHJcblx0XHRcdFx0bWVudVRvcDogMCxcclxuXHRcdFx0XHRtZW51SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdG1lbnVMZWZ0OiAwLFxyXG5cdFx0XHRcdG1lbnVCb3R0b206IDAsXHJcblx0XHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGJhck5hbWU6ICdiYWNrJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdGJhY2tJbWFnZTogJy9zdGF0aWMvaW1hZ2VzL2JhY2syLnBuZycsXHJcblx0XHRcdFx0dGl0bGU6ICforqLljZXor6bmg4UnLFxyXG5cdFx0XHRcdHN0YXRlOiAn5bey5LuY5qy+JywgLy/mmK/lkKbku5jmrL5cclxuXHRcdFx0XHRyZXF1ZXN0VXJsOiAnJyxcclxuXHRcdFx0XHRvcmRlcl9pbmZvOiB7XHJcblx0XHRcdFx0XHRnaXZpbmdfaW5mbzpbXSxcclxuXHRcdFx0XHRcdGRpc2NvdW50X2Rlc2NyaXB0aW9uOltdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpc19wb3N0X2xpc3Q6IFtdLCAvL+mCruWvhOWVhuWTgVxyXG5cdFx0XHRcdHNjYW5fb25lX2xpc3Q6IFtdLCAvL+aUtui0ueWupOS9v+eUqOWVhuWTgVxyXG5cdFx0XHRcdHNjYW5fdHdvX2xpc3Q6IFtdLCAvL+S8muWRmOS4reW/g+S9v+eUqOWVhuWTgVx0XHJcblx0XHRcdFx0c2hvd1RvcDogZmFsc2UsXHJcblx0XHRcdFx0b2Zmc2V0OiAwLFxyXG5cdFx0XHRcdG92ZXJfdGltZTogJycsXHJcblx0XHRcdFx0cHJvZHVjdExpc3RzOiBbXSxcclxuXHRcdFx0XHRleHBpcmF0aW9uX3RpbWU6IDAsIC8v6L+H5pyf5pe26Ze0XHJcblx0XHRcdFx0dGhpc19zaG93X2Rpc2NvdW50OmZhbHNlLFxyXG5cdFx0XHRcdGRpc2NvdW50c19saXN0OltdLFxyXG5cdFx0XHRcdGNhcmRfc2FsZV9saXN0OltdLFxyXG5cdFx0XHRcdGFsbF9kaXNjb3VudDowLFxyXG5cdFx0XHRcdGRheTogMCxcclxuXHRcdFx0XHRob3VzZTogMCxcclxuXHRcdFx0XHRzZWNvbmQ6IDAsXHJcblx0XHRcdFx0bWludXRlOiAwLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5vZmZzZXQgKz0gMTtcclxuXHRcdFx0dGhhdC5nZXRMaWtlKClcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbikge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0dGhpcy5yZXF1ZXN0ID0gdGhpcy4kcmVxdWVzdFxyXG5cdFx0XHR0aGF0LnJlcXVlc3RVcmwgPSB0aGF0LnJlcXVlc3QuZ2xvYmFsRGF0YS5yZXF1ZXN0VXJsXHJcblx0XHRcdGlmIChvcHRpb24uaW5mbykge1xyXG5cdFx0XHRcdHRoYXQuZ2V0X29yZGVyX2RlcmFpbChvcHRpb24uaW5mbylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGF0LmdldF9vcmRlcl9kZXJhaWwoMjMxNDkpIC8vMjMxNzBcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGF0LmdldExpa2UoKVxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdzpmdW5jdGlvbigpe1xyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQuaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0O1xyXG5cdFx0XHQvLyDliKTlrprov5DooYzlubPlj7BcclxuXHRcdFx0bGV0IHBsYXRmb3JtID0gZ2V0QXBwKCkucGxhdGZvcm0gfHwgZ2V0QXBwKCkuZ2xvYmFsRGF0YS5wbGF0Zm9ybVxyXG5cdFx0XHRpZiAocGxhdGZvcm0gPT0gJ0FwcGxldHMnKSB7XHJcblx0XHRcdFx0Ly8g6I635Y+W5bGP5bmV6auY5bqmXHJcblx0XHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBtZW51ID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVRvcCA9IG1lbnUudG9wXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IG1lbnUuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gbWVudS5ib3R0b21cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IFxyXG5cdFx0XHRlbHNlIGlmIChwbGF0Zm9ybSA9PSAnQVBQJyl7XHJcblx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSA5MFxyXG5cdFx0XHRcdHRoYXQubWVudVRvcCA9IDQwXHJcblx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gNzBcclxuXHRcdFx0XHR0aGF0Lm1lbnVIZWlnaHQgPSAzMFxyXG5cdFx0XHRcdHRoYXQubWVudUxlZnQgPSAyNzhcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6I635Y+W6K6i5Y2V6K+m5oOFXHJcblx0XHRcdGdldF9vcmRlcl9kZXJhaWw6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdnZXRfb3JkZXJfaW5mbycsXHJcblx0XHRcdFx0XHRpZDogaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJvcmRlclwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0bGV0IHRpbWUgPSBkYXRhLm9yZGVyX2luZm8uY3JlYXRlX3RpbWUgKyBkYXRhLm9yZGVyX2luZm8uY2FuY2VsX3RpbWUgLSBkYXRhLm9yZGVyX2luZm8udGltZV9ub3dcclxuXHRcdFx0XHRcdFx0aWYgKHRpbWUgPiAwICYmIGRhdGEub3JkZXJfaW5mby5zdGF0dXM9PTApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNldF9kb3VudF9kb3duKHRpbWUpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8g6K6i5Y2V5ZWG5ZOB5L+h5oGvXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5vcmRlcl9nb29kcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOaYvuekuueahOinhOagvFxyXG5cdFx0XHRcdFx0XHRcdGRhdGEub3JkZXJfZ29vZHNbaV0uc2hvd19za3Vfc3BlYyA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEub3JkZXJfaW5mby5kaXN0cmlidXRpb24gPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5pc19wb3N0X2xpc3QucHVzaChkYXRhLm9yZGVyX2dvb2RzW2ldKVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS5vcmRlcl9nb29kc1tpXS5zY2FuX2RlcGFydG1lbnQgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5zY2FuX29uZV9saXN0LnB1c2goZGF0YS5vcmRlcl9nb29kc1tpXSlcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEub3JkZXJfZ29vZHNbaV0uc2Nhbl9kZXBhcnRtZW50ID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuc2Nhbl90d29fbGlzdC5wdXNoKGRhdGEub3JkZXJfZ29vZHNbaV0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIOacgOi/keeahOi/h+acn+aXtumXtFxyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhLm9yZGVyX2dvb2RzW2ldLm92ZXJkdWVfdGltZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRhdGEub3JkZXJfZ29vZHNbaV0ub3ZlcmR1ZV90aW1lID4gdGhhdC5leHBpcmF0aW9uX3RpbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5leHBpcmF0aW9uX3RpbWUgPSBkYXRhLm9yZGVyX2dvb2RzW2ldLm92ZXJkdWVfdGltZVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyDml7bpl7RcclxuXHRcdFx0XHRcdFx0dGhhdC5vdmVyX3RpbWUgPSB0aGF0LnNldFRpbWVyKGRhdGEub3JkZXJfaW5mby5jcmVhdGVfdGltZSArIGRhdGEub3JkZXJfaW5mby5jYW5jZWxfdGltZSlcclxuXHRcdFx0XHRcdFx0ZGF0YS5vcmRlcl9pbmZvLmNyZWF0ZV90aW1lID0gdGhhdC5zZXRUaW1lcihkYXRhLm9yZGVyX2luZm8uY3JlYXRlX3RpbWUpXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LmV4cGlyYXRpb25fdGltZSA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmV4cGlyYXRpb25fdGltZSA9IHRoYXQuc2V0VGltZXIodGhhdC5leHBpcmF0aW9uX3RpbWUpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8g6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IGRhdGEub3JkZXJfaW5mb1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeri+WNs+aUr+S7mFxyXG5cdFx0XHRwbGVhc2VfcGF5OiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhX2luZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ3dlY2hhdHdhcCcsXHJcblx0XHRcdFx0XHRvcmRlcl9pZDogaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJwYXlcIiwgZGF0YV9pbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhLm13ZWJfdXJsKVxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gZGF0YS5td2ViX3VybFxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pSv5LuY5LitLi4uJ1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Ly8gYXBw5pSv5LuYXHJcblx0XHRcdFx0XHRcdGNvbnN0IHdlYnZpZXcgPSBwbHVzLndlYnZpZXcuY3JlYXRlKFwiXCIsXCJjdXN0b20td2Vidmlld1wiKVxyXG5cdFx0XHRcdFx0XHR3ZWJ2aWV3LmxvYWRVUkwodXJsLHtcIlJlZmVyZXJcIjp0aGF0LnJlcXVlc3RVcmx9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuinhOagvFxyXG5cdFx0XHR0aGlzX3Nob3dfc2t1X3NwZWM6IGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKHRoYXQuaXNfcG9zdF9saXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBpbiB0aGF0LmlzX3Bvc3RfbGlzdCkge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5pc19wb3N0X2xpc3Rba2V5XS5pZCA9PSBpdGVtLmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc19wb3N0X2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjID0gIXRoYXQuaXNfcG9zdF9saXN0W2tleV0uc2hvd19za3Vfc3BlY1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGF0LnNjYW5fb25lX2xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHRoYXQuc2Nhbl9vbmVfbGlzdCkge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5zY2FuX29uZV9saXN0W2tleV0uaWQgPT0gaXRlbS5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuc2Nhbl9vbmVfbGlzdFtrZXldLnNob3dfc2t1X3NwZWMgPSAhdGhhdC5zY2FuX29uZV9saXN0W2tleV0uc2hvd19za3Vfc3BlY1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBpbiB0aGF0LnNjYW5fdHdvX2xpc3QpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuc2Nhbl90d29fbGlzdFtrZXldLmlkID09IGl0ZW0uaWQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNjYW5fdHdvX2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjID0gIXRoYXQuc2Nhbl90d29fbGlzdFtrZXldLnNob3dfc2t1X3NwZWNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L2s5o2i5pe26Ze05qC85byPXHJcblx0XHRcdHNldFRpbWVyOiBmdW5jdGlvbihkYXRlKSB7XHJcblx0XHRcdFx0bGV0IGhvdXNlID0gMFxyXG5cdFx0XHRcdGxldCBzZWNvbmQgPSAwXHJcblx0XHRcdFx0bGV0IG1pbnV0ZSA9IDBcclxuXHRcdFx0XHQvLyBob3VzZSA9IHBhcnNlSW50KChkYXRlKSAvIDEwMDAgLyA2MCAvIDYwICUgMjQpXHJcblx0XHRcdFx0c2Vjb25kID0gcGFyc2VJbnQoKGRhdGUpIC8gNjAgJSA2MClcclxuXHRcdFx0XHRtaW51dGUgPSBwYXJzZUludCgoZGF0ZSkgJSA2MClcclxuXHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApXHJcblx0XHRcdFx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG5cdFx0XHRcdGlmIChtb250aCA8IDEwKSB7XHJcblx0XHRcdFx0XHRtb250aCA9IFwiMFwiICsgbW9udGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXHJcblx0XHRcdFx0aWYgKGRheSA8IDEwKSB7XHJcblx0XHRcdFx0XHRkYXkgPSBcIjBcIiArIGRheVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRob3VzZSA9IGRhdGUuZ2V0SG91cnMoKVxyXG5cdFx0XHRcdGlmIChob3VzZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRob3VzZSA9IFwiMFwiICsgaG91c2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHNlY29uZCA8IDEwKSB7XHJcblx0XHRcdFx0XHRzZWNvbmQgPSBcIjBcIiArIHNlY29uZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAobWludXRlIDwgMTApIHtcclxuXHRcdFx0XHRcdG1pbnV0ZSA9IFwiMFwiICsgbWludXRlXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgdGltZSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIG1vbnRoICsgJy0nICsgZGF5ICsgXCIgIFwiICsgJyAnICsgaG91c2UgKyAnOicgKyBzZWNvbmQgKyAnOicgKyBtaW51dGVcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aW1lKVxyXG5cdFx0XHRcdHJldHVybiB0aW1lXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW8gOWQr+WAkuiuoeaXtlxyXG5cdFx0XHRzZXRfZG91bnRfZG93bjpmdW5jdGlvbih0aW1lKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHNlY29uZFRpbWUgPSAwOyAvLyDliIZcclxuXHRcdFx0XHRsZXQgaG91clRpbWUgPSAwOyAvLyDlsI/ml7ZcclxuXHRcdFx0XHRsZXQgZGF5ID0gMDsgLy/lpKlcclxuXHRcdFx0XHRsZXQgdGltZXJzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR0aW1lIC09IDFcclxuXHRcdFx0XHRcdGxldCBtaW51dGVUaW1lID0gdGltZTsgLy8g56eSXHJcblx0XHRcdFx0XHRpZiAobWludXRlVGltZSA+IDYwKSB7XHJcblx0XHRcdFx0XHRcdHNlY29uZFRpbWUgPSBwYXJzZUludChtaW51dGVUaW1lIC8gNjApXHJcblx0XHRcdFx0XHRcdG1pbnV0ZVRpbWUgPSBwYXJzZUludChtaW51dGVUaW1lICUgNjApXHJcblx0XHRcdFx0XHRcdGlmIChzZWNvbmRUaW1lID4gNjApIHtcclxuXHRcdFx0XHRcdFx0XHRob3VyVGltZSA9IHBhcnNlSW50KHNlY29uZFRpbWUgLyA2MClcclxuXHRcdFx0XHRcdFx0XHRzZWNvbmRUaW1lID0gcGFyc2VJbnQoc2Vjb25kVGltZSAlIDYwKVxyXG5cdFx0XHRcdFx0XHRcdGlmIChob3VyVGltZSA+IDI0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXkgPSBwYXJzZUludChob3VyVGltZSAvIDI0KVxyXG5cdFx0XHRcdFx0XHRcdFx0aG91clRpbWUgPSBwYXJzZUludChob3VyVGltZSAlIDYwKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2Vjb25kVGltZSA9IDBcclxuXHRcdFx0XHRcdFx0aG91clRpbWUgPSAwXHJcblx0XHRcdFx0XHRcdGRheSA9IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQuZGF5ID0gZGF5XHJcblx0XHRcdFx0XHR0aGF0LmhvdXNlID0gaG91clRpbWVcclxuXHRcdFx0XHRcdHRoYXQuc2Vjb25kID0gc2Vjb25kVGltZVxyXG5cdFx0XHRcdFx0dGhhdC5taW51dGUgPSBtaW51dGVUaW1lXHJcblx0XHRcdFx0XHRpZiAodGltZSA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXJzKVxyXG5cdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8uc3RhdHVzID0gMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYodGhhdC50aW1lcnM+MCl7XHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXJzKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4uuS9oOaOqOiNkFxyXG5cdFx0XHRnZXRMaWtlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ3VzZXJyZWNvbW1lbmRlZGdvb2Rzc3B1bGlzdCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnNScsXHJcblx0XHRcdFx0XHRvZmZzZXQ6IHRoYXQub2Zmc2V0KjZcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gdGhhdC5wcm9kdWN0TGlzdHMuY29uY2F0KGRhdGEpXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ayoeacieabtOWkmuS6hicsXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ayoeacieabtOWkmuS6hicsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L+U5Zue5LiK5LiA57qnXHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDllYblk4Hor6bmg4VcclxuXHRcdFx0Z29vZHNfZGV0YWlsOmZ1bmN0aW9uKGlkLGVuY3J5cHRlZF9pZCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbD9za3VfaWQ9JHtpZH0mZW5jcnlwdGVkX2lkPSR7ZW5jcnlwdGVkX2lkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5oiR55qE6LWg5ZOBXHJcblx0XHRcdG15X2NhcmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9teS9teV9jYXJkYCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlpI3liLbljZXlj7dcclxuXHRcdFx0Y29weV9vcmRlcl9ubzogZnVuY3Rpb24oaW5mbykge1xyXG5cdFx0XHRcdHVuaS5zZXRDbGlwYm9hcmREYXRhKHtcclxuXHRcdFx0XHRcdGRhdGE6IGluZm8sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflt7LlpI3liLbliLDliarliIfmnb8nXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuS8mOaDoOS/oeaBr1xyXG5cdFx0XHR0aGlzX2Rpc2NvdW50OmZ1bmN0aW9uKGluZm8sY2FyZF9zYWxlX2luZm8sZGlzY291bnQpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmKGluZm8ubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0dGhhdC5kaXNjb3VudHNfbGlzdCA9IFtdXHJcblx0XHRcdFx0XHR0aGF0LmRpc2NvdW50c19saXN0ID0gaW5mb1xyXG5cdFx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZGlzY291bnQgPSAhdGhhdC50aGlzX3Nob3dfZGlzY291bnRcclxuXHRcdFx0XHRcdHRoYXQuYWxsX2Rpc2NvdW50ID0gZGlzY291bnRcclxuXHRcdFx0XHR9ZWxzZSBpZihjYXJkX3NhbGVfaW5mbyYmY2FyZF9zYWxlX2luZm8ubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0dGhhdC5jYXJkX3NhbGVfbGlzdCA9IFtdXHJcblx0XHRcdFx0XHR0aGF0LmNhcmRfc2FsZV9saXN0ID0gY2FyZF9zYWxlX2luZm9cclxuXHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2Rpc2NvdW50ID0gIXRoYXQudGhpc19zaG93X2Rpc2NvdW50XHJcblx0XHRcdFx0XHR0aGF0LmFsbF9kaXNjb3VudCA9IGRpc2NvdW50XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+aaguaXoOS8mOaDoOS/oeaBrycsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5LyY5oOg5ZCI6K6hXHJcblx0XHRcdHRoaXNfYWxsX2Rpc2NvdW50OmZ1bmN0aW9uKGluZm8pe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmKGluZm8ubGVuZ3RoPT0wKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon5pqC5peg5LyY5oOg5L+h5oGvJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRmb3IobGV0IGtleSBpbiBpbmZvKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5kaXNjb3VudHNfbGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdHRoYXQuY2FyZF9zYWxlX2xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0XHR0aGF0LmFsbF9kaXNjb3VudCA9IDBcclxuXHRcdFx0XHRcdFx0aWYoaW5mb1trZXldLnRvb2xzX2lkPT0nZGlzY291bnQnKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmRpc2NvdW50c19saXN0LnB1c2goaW5mb1trZXldKVxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihpbmZvW2tleV0udG9vbHNfaWQ9PSdzYWxlX2NhcmRfdXNlcicpe1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2FyZF9zYWxlX2xpc3QucHVzaChpbmZvW2tleV0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5hbGxfZGlzY291bnQgKz0gaW5mb1trZXldLnNhbGVfcHJpY2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2Rpc2NvdW50ID0gIXRoYXQudGhpc19zaG93X2Rpc2NvdW50XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoaWRlX2Rpc2NvdW50OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZGlzY291bnQgPSAhdGhhdC50aGlzX3Nob3dfZGlzY291bnRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y676aaW6aG15ZKM5YiG57G7XHJcblx0XHRcdGdvX3RvX3BhZ2U6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR1bmkucmVMYXVuY2goe1xyXG5cdFx0XHRcdCAgICB1cmw6ICcvcGFnZXMvZ29vZHMvZ29vZHNfY2xhc3NpZnknXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L+U5Zue6aG26YOoXHJcblx0XHRcdFRvVG9wOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0XHRcdHNjcm9sbFRvcDogMCxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiA2MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnlLPor7fpgIDmrL5cclxuXHRcdFx0Z29fcmVmdW5kOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9teS9teV9vcmRlcl9yZWZ1bmQ/aWQ9JHtpZH1gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAgOasvue7k+aenFxyXG5cdFx0XHQvLyBjYW5jZWxfZGV0YWlsOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHQvLyBcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0Ly8gXHRcdHVybDogYC9wYWdlcy9teS9teV9vcmRlcl9yZWZ1bmRfcHJvZ3Jlc3M/aWQ9JHtpZH1gLFxyXG5cdFx0XHQvLyBcdH0pXHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdC8vIOWPlua2iOiuouWNlVxyXG5cdFx0XHRjYW5jZWxfb3JkZXI6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogXCLmj5DnpLpcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfmgqjmraPlnKjlj5bmtojorqLljZUs56Gu6K6k5Y+W5raI6K6i5Y2V5ZCX77yfJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6J2NhbmNlbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRpZDppZFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcIm9yZGVyXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiflj5bmtojorqLljZXmiJDlip8hJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L215X29yZGVyP3R5cGU9MGAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwxMDAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDogZTns7vlrqLmnI1cclxuXHRcdFx0Y29udGFjdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2NvbnN1bHRhdGlvbi9jb25zdWx0YXRpb25gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWGmeaXpeiusOWSjOivhOS7t1xyXG5cdFx0XHR3cml0ZV9jb250ZW50OiBmdW5jdGlvbihpbmZvKSB7XHJcblx0XHRcdFx0Ly8g5YaZ5pel6K6wXHJcblx0XHRcdFx0aWYgKGluZm8gPT0gJ2RpYXJ5Jykge1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZGlhcnkvZGlhcnlfd3JpdGVgLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZm8gPT0gJ2NvbW1lbnQnKSB7XHJcblx0XHRcdFx0XHQvLyDlhpnor4Tku7dcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L3dyaXRlX2NvbW1lbnRgLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0Ly8g5pi+56S65Zue5Yiw6aG26YOo5oyJ6ZKuXHJcblx0XHRvblBhZ2VTY3JvbGw6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKGUuc2Nyb2xsVG9wID4gMCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvcCA9IHRydWVcclxuXHRcdFx0fSBlbHNlIGlmIChlLnNjcm9sbFRvcCA9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93VG9wID0gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5zaG93X2NvbG9ye1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdC5teV9vcmRlcl9kZXRhaWwge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuXHR9XHJcblxyXG5cdC50b3AtbmF2LW1lc3NhZ2Uge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00OWRlZywgI2YyNDc4OCAwJSwgI2ZmNjlhMSAxMDAlKTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcnB4O1xyXG5cdH1cclxuXHJcblx0Lm15LXRvcC1iYXIge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ5ZGVnLCAjZjI0Nzg4IDAlLCAjZmY2OWExIDEwMCUpO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC5iYWNrLXRpdGxlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAzOHJweDtcclxuXHR9XHJcblxyXG5cdC5iYWNrIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmJhY2sgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDM2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHR9XHJcblxyXG5cdC5iYWNrLXRpdGxlIC50aXRsZSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDgwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRvcC1tZXNzYWdlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC8qIHBhZGRpbmctdG9wOiAyMTBycHg7ICovXHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC53YWl0LXBheSB7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItcGF5LXByaWNlcyB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0Lm5vd19wYXkge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHR3aWR0aDogMjQwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5ub3dfcGF5OjphZnRlciB7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQucmVzaWR1ZS10aW1lIHtcclxuXHRcdG9wYWNpdHk6IDAuNztcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQudXNlci1hbGwtbWVzc2FnZSB7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTEzMHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLW1lc3NhZ2UtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDM0cnB4IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZS1waG9uZS1kZWZhdWx0LWFkZHJlc3Mge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudXNlci1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1waG9uZSB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LmRlZmF1bHQtYWRkcmVzcyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmRlZmF1bHQge1xyXG5cdFx0d2lkdGg6IDY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0LWFkZHJlc3MtY29udGVudCB7XHJcblx0XHR3aWR0aDogNjZycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODgzNGZhIDAlLCAjYmM2NmZmIDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTZycHg7XHJcblx0fVxyXG5cclxuXHQuc2hpcHBpbmctYWRkcmVzcyB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICMzNDM0MzQ7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuYWRkcmVzcy1jb250ZW50IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMnJweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcblx0XHR3aWR0aDogNzYlO1xyXG5cdH1cclxuXHJcblx0LmFsbC1vcmRlci1tZXNzYWdlIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxNzBycHg7XHJcblx0fVxyXG5cclxuXHQuYWNjb3VudC1wYWlkLWNvZGUge1xyXG5cdFx0cGFkZGluZzogNDBycHggMjBycHggMDtcclxuXHR9XHJcblxyXG5cdC5hY2NvdW50LXBhaWQtY29kZS1jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDAgMzBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYWNjb3VudC1wYWlkLWNvZGUtbnVtYmVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmFjY291bnQtcGFpZC1jb2RlLWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LmFjY291bnQtcGFpZC1jb2RlLWltYWdlIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMjBycHg7XHJcblx0XHRoZWlnaHQ6IDMyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDI1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1jb250ZW50IHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaXRlbXMge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwO1xyXG5cdH1cclxuXHJcblx0LnNlcnZpY2UtY29uZGl0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIycnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQubGluZS1zZXJ2aWNlLW5hbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHR3aWR0aDogNnJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5zZXJ2aWNlLW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHJcblx0LmFwcG9pbnRtZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1wb3JkdWN0LWNvbnRlbnQge1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1wb3JkdWN0LWxpbmUge1xyXG5cdFx0cGFkZGluZzogMCAwIDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbGluZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0aGVpZ2h0OiAycnB4O1xyXG5cdH1cclxuXHJcblx0LmZhaWx1cmUtdGltZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQudGltZS1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5oaW50LWltYWdlIHtcclxuXHRcdHdpZHRoOiAxNjVycHg7XHJcblx0XHRoZWlnaHQ6IDEzMHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTEwMHJweDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdH1cclxuXHJcblx0LmhpbnQtaW1hZ2UgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDE2NXJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmhpbnQtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQub3JkZXItcG9yZHVjdC1pbWFnZXMtbmFtZSB7XHJcblx0XHRib3JkZXItYm90dG9tOiAycnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMzBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaW1hZ2VzIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWltYWdlcyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1yaWdodCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDAgMTBycHggMjBycHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcblx0fVxyXG5cclxuXHQuc2t1X3NwZWNfY29udGVudCB7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0LyogbGluZS1oZWlnaHQ6IDQwcnB4OyAqL1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHdpZHRoOiA3NiU7XHJcblx0XHRwYWRkaW5nOiAwIDE2cnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMjBycHg7XHJcblx0XHR0b3A6IDc2cnB4O1xyXG5cdH1cclxuXHJcblx0Lml0ZW1fY29udGVudCB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC5za3Vfc3BlY19jb250ZW50IGltYWdlLFxyXG5cdC5zaG93X2l0ZW1fY29udGVudCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnNob3dfaXRlbV9jb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDIwcnB4O1xyXG5cdFx0dG9wOiA3NnJweDtcclxuXHRcdHdpZHRoOiA3NiU7XHJcblx0XHRwYWRkaW5nOiA2cnB4IDE2cnB4IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0fVxyXG5cclxuXHQuc2hvd19pdGVtX2NvbnRlbnQgaW1hZ2Uge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlLW51bWJlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjODA4MDgwO1xyXG5cdH1cclxuXHRcclxuXHJcblx0LnBvcmR1Y3QtcHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LW51bWJlciB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnBheS1vcmRlci1jb250ZW50IHtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI0YwRjBGMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI0YwRjBGMDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBheS1vcmRlci1jb250ZW50IHRleHQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRvdGFsLXByaWNlLW9uLWxpbmUtcGF5LFxyXG5cdC5kaXNjb3VudHMtaG9zcGl0YWwtcGF5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50cyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5vbi1saW5lLXBheSxcclxuXHQuaG9zcGl0YWwtcGF5IHtcclxuXHRcdG1pbi13aWR0aDogNDIlO1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50cyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjZycHg7XHJcblx0XHRoZWlnaHQ6IDI2cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcGUtd2l0aCB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmNvbXBsaW1lbnRhcnkge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS10b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcblxyXG5cdC50b3AtbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5teS1jb21wbGltZW50YXJ5IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5jb21wbGltZW50YXJ5LWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0cGFkZGluZzogMTVycHggMCAzMnJweDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5hbGwtY29tcGxpbWVudGFyeSB7XHJcblx0XHRwYWRkaW5nLXRvcDogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5jb21wbGltZW50YXJ5LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMThycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1jb250ZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHJcblx0fVxyXG5cclxuXHQudGlja2V0LWRpc2NvdW50LWZ1bGwtcmVkdWN0aW9uIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtbmFtZS1tZXNzYWdlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW1lc3NhZ2Uge1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1wcmljZSB7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQudG90YWwtZGlzY291bnRzIHtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHRcdHBhZGRpbmctdG9wOiAzMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRvdGFsLWRpc2NvdW50cy1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblxyXG5cdC5hbGwtdG90YWwtZGlzY291bnRzIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5hbGwtcHJpY2UtbWVzc2FnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnByaWNlLW5hbWUtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucHJpY2UtbmFtZS1tZXNzYWdlOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5wcmljZS1uYW1lIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnByaWNlLW5hbWUgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnJweDtcclxuXHR9XHJcblxyXG5cdC5wcmljZS1tZXNzYWdlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblxyXG5cdC5yZXR1cm4tbWV3LWJlYW4ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogMzNycHggNDBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1pbWFnZXMtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1tZXNzYWdlIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDkwcnB4O1xyXG5cdFx0aGVpZ2h0OiA3MHJweDtcclxuXHR9XHJcblxyXG5cdC5yZXR1cm4tbnVtYmVyIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHJcblx0LnJldHVybi1oaW50IHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0fVxyXG5cclxuXHQubXktbWV3LW5lYW4ge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaW5mb3JtYXRpb24ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQub3JkZXItc2VyaWFsLW51bWJlcixcclxuXHQub3JkZXItdGltZSxcclxuXHQucGF5LWxhYmVsLFxyXG5cdC5wYXktd2F5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQucGF5LXdheSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlLW5hbWUge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcHkge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW4tbGVmdDogMjRycHg7XHJcblx0fVxyXG5cclxuXHQvKiDnjJzkvaDllpzmrKIgKi9cclxuXHQuZ3Vlc3Mtd2hhdC15b3UtbGlrZSB7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5yZWxhdGVkLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbS1pbWFnZXMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luLXRvcDogNzBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWltYWdlcyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNjBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0bWFyZ2luLXRvcDogNDhycHg7XHJcblx0fVxyXG5cclxuXHQuaW1tb2JpbGl6YXRpb24tYnV0dG9uIHtcclxuXHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0RBREFEQTtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCBidXR0b24ge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmJnX2J0biB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCBidXR0b246OmFmdGVyIHtcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblxyXG5cdC50b3AtYnV0dG9uIHtcclxuXHRcdHdpZHRoOiAxMjBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogMzBycHg7XHJcblx0XHRib3R0b206IDgwcHg7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdH1cclxuXHQudG9wLWJ1dHRvbiBpbWFnZXtcclxuXHRcdHdpZHRoOjgwcnB4O1xyXG5cdH1cclxuXHJcblx0Lyog5paw5YaZ55qE5qC35byPICovXHJcblx0LnJlZnVuZGVkIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucmVmdW5kZWQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDY0cnB4O1xyXG5cdFx0aGVpZ2h0OiA2NHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucmVmdW5kZWRfaGludCB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuY2FuY2VsLW9yZGVyX3RvcCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIxMHJweDtcclxuXHR9XHJcblxyXG5cdC5jYW5jZWwtb3JkZXJfdG9wIGltYWdlIHtcclxuXHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNhbmNlbF9oaW50IHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXJfaW5mbyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdC8qIHBhZGRpbmc6IDM0cnB4IDA7ICovXHJcblx0XHRwYWRkaW5nOiA4MHJweCAwO1xyXG5cdH1cclxuXHJcblx0LmNvbG9yIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHQvKiDkvJjmg6Dkv6Hmga8gKi9cclxuXHQuZGlzY291bnRfY29udGVudHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuZGlzY291bnQtaGludHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweCAxMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDYwJTtcclxuXHR9XHJcblx0LmRpc2NvdW50c19saXN0e1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjODA4MDgwO1xyXG5cdH1cclxuXHQubGlzdF9pdGVte1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdC5pdGVtX25hbWV7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cdC5jYXRlZ29yeXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICAjZmEzNDc1IDAlLCAgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdHBhZGRpbmc6IDAgMjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0LmRpc2NvdW50c19zYWxlX3ByaWNle1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdC5hbGxfZGlzY291bnRze1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOiAzMHJweCAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjODA4MDgwO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBycHg7XHJcblx0fVxyXG5cdC5hbGxfZGlzY291bnRzX25hbWV7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0Lmlfa25vd3tcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxyXG5cdH1cclxuXHQuaV9rbm93OjphZnRlcntcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblx0XHJcblx0LmNvbG9yX2J0bntcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICAjZmEzNDc1IDAlLCAgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGRlMWVlYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTAwMDMwNzU2MzNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9