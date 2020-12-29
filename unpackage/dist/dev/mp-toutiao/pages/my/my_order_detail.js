(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my_order_detail"],{

/***/ 389:
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fmy%2Fmy_order_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _my_order_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my_order_detail.vue */ 390));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my_order_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 390:
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 391);
/* harmony import */ var _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=script&lang=js& */ 393);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 395);
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

/***/ 391:
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 392);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 392:
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

/***/ 393:
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=script&lang=js& */ 394);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 394:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var goodsShow = function goodsShow() {__webpack_require__.e(/*! require.ensure | components/goodsShow */ "components/goodsShow").then((function () {return resolve(__webpack_require__(/*! ../../components/goodsShow.vue */ 486));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =


































































































































































































































































































































































































































































































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
      // let minuteTime = time;// 秒
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
        // console.log(that.day, that.house, that.second, that.minute)
      }, 1000);

    },
    // 为你推荐
    getLike: function getLike() {
      var that = this;
      var dataInfo = {
        interfaceId: 'userrecommendedgoodsspulist',
        type: '5',
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
          // console.log(info[key])
          if (info[key].tools_id == 'discount') {
            that.discounts_list.push(info[key]);
          } else if (info[key].tools_id == 'sale_card_user') {
            that.card_sale_list.push(info[key]);
          }
          that.all_discount += info[key].sale_price;
        }
        that.this_show_discount = !that.this_show_discount;
      }
      // console.log(that.discounts_list,that.card_sale_list)
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

/***/ 395:
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 396);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 396:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[389,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlPzE1NmQiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZT9mOWM3Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/YzRmNSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlPzhmZDgiLCJ1bmktYXBwOi8vL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZT9jOTQ5Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/MTIzNiJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsOEc7QUFDQUEsVUFBVSxDQUFDQyx3QkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUNxQzs7O0FBR25HO0FBQytLO0FBQy9LLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBd3FCLENBQWdCLHNxQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21lNXJCO0FBQ0E7QUFDQSx3QkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLGlCQUpBO0FBS0EsbUJBTEE7QUFNQSxlQU5BO0FBT0EscUJBUEEsRUFPQTtBQUNBLHNCQVJBO0FBU0EsMkNBVEE7QUFVQSxtQkFWQTtBQVdBLGtCQVhBLEVBV0E7QUFDQSxvQkFaQTtBQWFBO0FBQ0EsdUJBREE7QUFFQSxnQ0FGQSxFQWJBOztBQWlCQSxzQkFqQkEsRUFpQkE7QUFDQSx1QkFsQkEsRUFrQkE7QUFDQSx1QkFuQkEsRUFtQkE7QUFDQSxvQkFwQkE7QUFxQkEsZUFyQkE7QUFzQkEsbUJBdEJBO0FBdUJBLHNCQXZCQTtBQXdCQSx3QkF4QkEsRUF3QkE7QUFDQSwrQkF6QkE7QUEwQkEsd0JBMUJBO0FBMkJBLHdCQTNCQTtBQTRCQSxxQkE1QkE7QUE2QkEsWUE3QkE7QUE4QkEsY0E5QkE7QUErQkEsZUEvQkE7QUFnQ0EsZUFoQ0E7O0FBa0NBLEdBdkNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E1Q0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxNQUVBO0FBQ0EsbUNBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxHQXZEQTtBQXdEQTs7QUFFQSxHQTFEQTtBQTJEQSxTQTNEQSxxQkEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FSQTs7QUFVQSxLQVpBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXBGQTtBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxjQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BbkNBO0FBb0NBLEtBNUNBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWkE7QUFhQSxLQWpFQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4RkE7QUF5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBeEhBO0FBeUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBSEEsQ0FHQTtBQUNBLHVCQUpBLENBSUE7QUFDQSxrQkFMQSxDQUtBO0FBQ0E7QUFDQTtBQUNBLDhCQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FYQSxNQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQS9CQSxFQStCQSxJQS9CQTs7QUFpQ0EsS0FqS0E7QUFrS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFEQTtBQUVBLGlCQUZBO0FBR0EsMkJBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSwwQkFGQTs7QUFJQTtBQUNBLFNBVkEsTUFVQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBLE9BakJBO0FBa0JBLEtBNUxBO0FBNkxBO0FBQ0E7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBbE1BO0FBbU1BO0FBQ0E7QUFDQTtBQUNBLGtHQURBOztBQUdBLEtBeE1BO0FBeU1BO0FBQ0E7QUFDQTtBQUNBLGdDQURBOztBQUdBLEtBOU1BO0FBK01BO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBLDRCQURBOztBQUdBLFNBTkE7O0FBUUEsS0F6TkE7QUEwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQSxNQUtBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0EsS0E3T0E7QUE4T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsc0JBRkE7O0FBSUEsT0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdFFBO0FBdVFBO0FBQ0E7QUFDQTtBQUNBLEtBMVFBO0FBMlFBO0FBQ0E7QUFDQTtBQUNBLDBDQURBOztBQUdBLEtBaFJBO0FBaVJBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEscUJBRkE7O0FBSUEsS0F2UkE7QUF3UkE7QUFDQTtBQUNBO0FBQ0EsdURBREE7O0FBR0EsS0E3UkE7QUE4UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1DQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBLGtDQURBOztBQUdBO0FBQ0EsYUFOQTtBQU9BO0FBQ0EsU0FsQkE7O0FBb0JBLEtBM1RBO0FBNFRBO0FBQ0E7QUFDQTtBQUNBLCtDQURBOztBQUdBLEtBalVBO0FBa1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FEQTs7QUFHQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0Esd0NBREE7O0FBR0E7QUFDQSxLQS9VQSxFQXJGQTs7QUFzYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsR0E3YUEsRTs7Ozs7Ozs7Ozs7OztBQ25lQTtBQUFBO0FBQUE7QUFBQTtBQUEyK0IsQ0FBZ0IscThCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBLy9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwOGRlMWVlYlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibXlfb3JkZXJfZGV0YWlsXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcC1uYXYtbWVzc2FnZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm15LXRvcC1iYXJcIiA6c3R5bGU9XCJbeydoZWlnaHQnOm1lbnVIZWlnaHQrJ3B4JywncGFkZGluZy10b3AnOm1lbnVUb3ArJ3B4JywnbGluZS1oZWlnaHQnOm1lbnVIZWlnaHQrJ3B4JywncGFkZGluZy1ib3R0b20nOjEwKydweCd9XVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFjay10aXRsZVwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFja1wiIEBjbGljaz1cImdvQmFja1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9yZXR1cm4ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCIgOnN0eWxlPVwiW3snbWFyZ2luLXJpZ2h0JzptZW51V2lkdGgrJ3B4J31dXCI+IHt7dGl0bGV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLW1lc3NhZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXMhPTFcIiA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUhlaWdodCs5MCsncHgnfV1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0PCEtLSDnrYnlvoXku5jmrL4gdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0wXCIgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItdXNlaW5nLXRpbWUtcHJpY2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3YWl0LXBheVwiPuetieW+heS7mOasvjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDlgJLorqHml7YgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVzaWR1ZS10aW1lXCI+5Ymp5L2Z5pSv5LuY5pe26Ze0OlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0Pnt7IGRheSB9fTwvdGV4dD7lpKk8dGV4dD57eyBob3VzZSB9fTwvdGV4dD7ml7Y8dGV4dD57eyBzZWNvbmQgfX08L3RleHQ+5YiGPHRleHQ+e3sgbWludXRlIH19PC90ZXh0PuenklxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1wYXktcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHTlnKjnur/mlK/ku5jvv6U8dGV4dD57eyBvcmRlcl9pbmZvLm9ubGluZV9wYXkgfX08L3RleHQ+LOWIsOmZouWGjeS7mO+/pTx0ZXh0Pnt7IG9yZGVyX2luZm8ub2ZmbGluZV9wYXkgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIm5vd19wYXlcIiB0eXBlPVwiZGVmYXVsdFwiIHNpemU9XCJtaW5pXCIgQHRhcD1cInBsZWFzZV9wYXkob3JkZXJfaW5mby5pZClcIj7nq4vljbPmlK/ku5g8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g5bey5LuY5qy+IHYtZWxzZS1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCIgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItdXNlaW5nLXRpbWUtcHJpY2VcIiB2LWVsc2UtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndhaXQtcGF5XCI+5bey5LuY5qy+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlc2lkdWUtdGltZVwiPuacieWVhuWTgeS6jiB7eyBleHBpcmF0aW9uX3RpbWUgfX0g5L2c5bqfPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItcGF5LXByaWNlc1wiPiDor7flsL3lv6vliLDpmaLkvb/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDlt7LpgIDmrL4gb3JkZXJfaW5mby5zdGF0dXM9PTcgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZnVuZGVkXCIgdi1lbHNlLWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTdcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZnVuZGVkX2hpbnRcIj7lt7LpgIDmrL48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5bey5L2c5bqfIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNhbmNlbC1vcmRlcl90b3BcIiA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUJvdHRvbSs0MCsncHgnfV1cIiB2LWVsc2UtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9kZWxldGUucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYW5jZWxfaGludFwiPuW3suS9nOW6nzwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDmlLbotKflnLDlnYDlkozogZTns7vmlrnlvI8gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVzZXItYWxsLW1lc3NhZ2VcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW1lc3NhZ2UtY29udGVudFwiIHYtaWY9XCJvcmRlcl9pbmZvLmRpc3RyaWJ1dGlvbj09MVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1tZXNzYWdlLWxlZnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1uYW1lLXBob25lLWRlZmF1bHQtYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbmFtZVwiPiB7eyBvcmRlcl9pbmZvLmFjY2VwdF9uYW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLXBob25lXCI+IHt7IG9yZGVyX2luZm8udGVscGhvbmUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlZmF1bHQtYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVmYXVsdFwiPum7mOiupDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlZmF1bHQtYWRkcmVzcy1jb250ZW50XCI+IHt7IG9yZGVyX2luZm8udGFnIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaGlwcGluZy1hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkcmVzcy1uYW1lXCI+5pS26LSn5Zyw5Z2APC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZHJlc3MtY29udGVudFwiPiB7eyBvcmRlcl9pbmZvLnByb3ZpbmNlX2NuICsgb3JkZXJfaW5mby5jaXR5X2NuICsgb3JkZXJfaW5mby5hcmVhX2NuICsgb3JkZXJfaW5mby5hZGRyZXNzIH19XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyX2luZm9cIiB2LWVsc2UtaWY9XCJvcmRlcl9pbmZvLmRpc3RyaWJ1dGlvbj09MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjZXB0X25hbWVcIj4ge3sgb3JkZXJfaW5mby5hY2NlcHRfbmFtZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZWxwaG9uZVwiPiB7eyBvcmRlcl9pbmZvLnRlbHBob25lIH19IDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcGFydGljdWxhcnNcIj5cclxuXHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwib3JkZXItcGFydGljdWxhcnNcIj5cclxuXHRcdFx0XHQ8dGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1vcmRlci1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdDwhLS0g5bey5LuY5qy+55qE5qC46ZSA56CBIG9yZGVyX2luZm8uc3RhdHVzPT0yIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlXCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NvdW50LXBhaWQtY29kZS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLW51bWJlclwiPuiuouWNleaguOmUgOeggSAtIHt7IG9yZGVyX2luZm8uaHhfY29kZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWhpbnRcIj7ljLvnvo7pobnnm67or7flnKjmlLbotLnlrqTlh7rnpLo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWhpbnRcIj7miqTogqTlk4Hpobnnm67lnKjkvJrlkZjkuK3lv4Plh7rnpLo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY291bnQtcGFpZC1jb2RlLWltYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtvcmRlcl9pbmZvLnFyY29kZXNcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDorqLljZXllYblk4Hkv6Hmga8gLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g6YKu5a+E5ZWG5ZOBIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItaXRlbXNcIiB2LWlmPVwiaXNfcG9zdF9saXN0Lmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcnZpY2UtY29uZGl0aW9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmUtc2VydmljZS1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VydmljZS1uYW1lXCI+IOmCruWvhOWVhuWTgSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhcHBvaW50bWVudFwiIHYtc2hvdz1cIm9yZGVyX2luZm8uc3RhdHVzPT0wXCI+IOWkseaViOeahOWVhuWTgeWwhuiHquWKqOmAgOasvu+8jOivt+WPiuaXtuWIsOmZouS9v+eUqCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtY29udGVudFwiIHYtZm9yPVwiKGksaykgaW4gaXNfcG9zdF9saXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmYWlsdXJlLXRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpbWUtaGludFwiPuWVhuWTgeWkseaViOaXtumXtDoge3sgb3Zlcl90aW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9yZWZ1bmQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09NVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfdXNlZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LXRleHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIj7lvoXkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWltYWdlcy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaW1nXCIgQHRhcD1cImdvb2RzX2RldGFpbChpLnNrdV9pZCxpLmVuY3J5cHRlZF9pZClcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1uYW1lXCI+e3tpLnNwdV9uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNrdV9zcGVjX2NvbnRlbnRcIiBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50X2l0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2l0ZW1fY29udGVudFwiIEB0YXA9J3RoaXNfc2hvd19za3Vfc3BlYyhpLGspJyB2LWlmPVwiaS5zaG93X3NrdV9zcGVjXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19hbGxfaXRlbXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQtaXRlbXNcIiB2LWZvcj1cIih6LGopIGluIGkuc2t1X3NwZWNcIiA6a2V5PSdqJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnNcIj4ge3sgeiB9fSA6IHt7IGogfX0gOyA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2UtbnVtYmVyXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZVwiID48dGV4dD7vv6U8L3RleHQ+e3tpLnNrdV9wcmljZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbnVtYmVyXCIgPnh7e2kuc2t1X251bXN9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktZm9yLXRoZS1vcmRlciBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1vcmRlci1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIiB0b3RhbC1wcmljZS1vbi1saW5lLXBheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsLXByaWNlXCI+5oC75Lu3IDx0ZXh0Pu+/pSB7e2kucGF5YWJsZV9hbW91bnR9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvbi1saW5lLXBheVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJpLnN0YXR1cz09MHx8aS5zdGF0dXM9PTJ8fGkuc3RhdHVzPT0zfHxpLnN0YXR1cz09NT8nc2hvd19jb2xvcic6JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTlnKjnur/mlK/ku5ggPHRleHQ+77+lIHt7aS5vbmxpbmVfcGF5fX0gPC90ZXh0PiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHMtaG9zcGl0YWwtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOS8mOaDoCA8dGV4dD7vv6Uge3sgaS5kaXNjb3VudCB8fCAwfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FzazEucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD1cInRoaXNfZGlzY291bnQoaS5oZF9zYWxlX2luZm8saS5jYXJkX3NhbGVfaW5mbyxpLmRpc2NvdW50KVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJob3NwaXRhbC1wYXlcIj7liLDpmaLlho3ku5ggPHRleHQ+77+lIHt7aS5vZmZsaW5lX3BheX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb3BlLXdpdGhcIj7lupTku5ggPHRleHQ+77+lIHt7aS5yZWxfcHJpY2V9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDmlLbotLnlrqTkvb/nlKjllYblk4EgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1pdGVtc1wiIHYtZWxzZS1pZj1cInNjYW5fb25lX2xpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VydmljZS1jb25kaXRpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZS1zZXJ2aWNlLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLW5hbWVcIj4g5pS26LS55a6k5L2/55So5ZWG5ZOBIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFwcG9pbnRtZW50XCIgdi1zaG93PVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIj4g5aSx5pWI55qE5ZWG5ZOB5bCG6Ieq5Yqo6YCA5qy+77yM6K+35Y+K5pe25Yiw6Zmi5L2/55SoIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1jb250ZW50XCIgdi1mb3I9XCIoaSxrKSBpbiBzY2FuX29uZV9saXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmYWlsdXJlLXRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpbWUtaGludFwiPuWVhuWTgeWkseaViOaXtumXtDoge3sgb3Zlcl90aW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3JlZnVuZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LWltYWdlXCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT01XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF91c2VkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtdGV4dFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiPuW+heS9v+eUqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtaW1hZ2VzLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraS5pbWdcIiBAdGFwPVwiZ29vZHNfZGV0YWlsKGkuc2t1X2lkLGkuZW5jcnlwdGVkX2lkKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWVcIj57e2kuc3B1X25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2t1X3NwZWNfY29udGVudFwiIEB0YXA9J3RoaXNfc2hvd19za3Vfc3BlYyhpLGspJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnRfaXRlbXNcIiB2LWZvcj1cIih6LGopIGluIGkuc2t1X3NwZWNcIiA6a2V5PSdqJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnNcIj4ge3sgeiB9fSA6IHt7IGogfX0gOyA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfaXRlbV9jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknIHYtaWY9XCJpLnNob3dfc2t1X3NwZWNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2FsbF9pdGVtc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZS1udW1iZXJcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJpLnN0YXR1cz09MHx8aS5zdGF0dXM9PTJ8fGkuc3RhdHVzPT0zfHxpLnN0YXR1cz09NT8nc2hvd19jb2xvcic6JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlXCI+PHRleHQ+77+lPC90ZXh0Pnt7aS5za3VfcHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW51bWJlclwiPiB4IHt7aS5za3VfbnVtc319IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktZm9yLXRoZS1vcmRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LW9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtcHJpY2Utb24tbGluZS1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPiDmgLvku7cgPHRleHQ+77+lIHt7aS5wYXlhYmxlX2Ftb3VudH19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9uLWxpbmUtcGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWcqOe6v+aUr+S7mCA8dGV4dD7vv6Uge3tpLm9ubGluZV9wYXl9fSA8L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1ob3NwaXRhbC1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx05LyY5oOgIDx0ZXh0Pu+/pSB7eyBpLmRpc2NvdW50IHx8IDB9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD1cInRoaXNfZGlzY291bnQoaS5oZF9zYWxlX2luZm8saS5jYXJkX3NhbGVfaW5mbyxpLmRpc2NvdW50KVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJob3NwaXRhbC1wYXlcIj7liLDpmaLlho3ku5ggPHRleHQ+77+lIHt7aS5vZmZsaW5lX3BheX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb3BlLXdpdGhcIj7lupTku5ggPHRleHQ+77+lIHt7aS5yZWxfcHJpY2V9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDkvJrkuK3lv4PlkZjkvb/nlKjllYblk4EgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1pdGVtc1wiIHYtZWxzZS1pZj1cInNjYW5fdHdvX2xpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VydmljZS1jb25kaXRpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZS1zZXJ2aWNlLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLW5hbWVcIj4g5Lya5Lit5b+D5ZGY5L2/55So5ZWG5ZOBIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFwcG9pbnRtZW50XCIgdi1zaG93PVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIj4g5aSx5pWI55qE5ZWG5ZOB5bCG6Ieq5Yqo6YCA5qy+77yM6K+35Y+K5pe25Yiw6Zmi5L2/55SoIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1jb250ZW50XCIgdi1mb3I9XCIoaSxrKSBpbiBzY2FuX3R3b19saXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItcG9yZHVjdC1saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmYWlsdXJlLXRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpbWUtaGludFwiPuWVhuWTgeWkseaViOaXtumXtDoge3sgb3Zlcl90aW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3JlZnVuZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LWltYWdlXCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT01XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF91c2VkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtdGV4dFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiPuW+heS9v+eUqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtaW1hZ2VzLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraS5pbWdcIiBAdGFwPVwiZ29vZHNfZGV0YWlsKGkuc2t1X2lkLGkuZW5jcnlwdGVkX2lkKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWVcIj57e2kuc3B1X25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2t1X3NwZWNfY29udGVudFwiIEB0YXA9J3RoaXNfc2hvd19za3Vfc3BlYyhpLGspJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnRfaXRlbXNcIiB2LWZvcj1cIih6LGopIGluIGkuc2t1X3NwZWNcIiA6a2V5PSdqJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnNcIj4ge3sgeiB9fSA6IHt7IGogfX0gOyA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfaXRlbV9jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknIHYtaWY9XCJpLnNob3dfc2t1X3NwZWNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2FsbF9pdGVtc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZS1udW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj48dGV4dD7vv6U8L3RleHQ+e3tpLnNrdV9wcmljZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbnVtYmVyXCI+eHt7aS5za3VfbnVtc319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1mb3ItdGhlLW9yZGVyIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LW9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiIHRvdGFsLXByaWNlLW9uLWxpbmUtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtcHJpY2VcIj7mgLvku7cgPHRleHQ+77+lIHt7aS5wYXlhYmxlX2Ftb3VudH19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9uLWxpbmUtcGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWcqOe6v+aUr+S7mCA8dGV4dD7vv6Uge3tpLm9ubGluZV9wYXl9fSA8L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1ob3NwaXRhbC1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx05LyY5oOgIDx0ZXh0Pu+/pSB7eyBpLmRpc2NvdW50IHx8IDB9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD1cInRoaXNfZGlzY291bnQoaS5oZF9zYWxlX2luZm8saS5jYXJkX3NhbGVfaW5mbyxpLmRpc2NvdW50KVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJob3NwaXRhbC1wYXlcIj7liLDpmaLlho3ku5ggPHRleHQ+77+lIHt7aS5vZmZsaW5lX3BheX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb3BlLXdpdGhcIj7lupTku5ggPHRleHQ+77+lIHt7aS5yZWxfcHJpY2V9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDotaDlk4EgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeS10b3BcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLW5hbWVcIj7otaDpgIHkv6Hmga88L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15LWNvbXBsaW1lbnRhcnlcIiBAdGFwPVwibXlfY2FyZCgpXCI+5oiR55qE6LWg5ZOBID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktaGludFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx05rip6aao5o+Q56S677ya5omA5pyJ6LWg5ZOB5bCG5Lul5Y2h5Yi455qE5b2i5byP5Y+R5pS+5Yiw6LSm5oi35Lit44CC6Iul5Y+R55Sf5pW05Y2V6YCA5qy+77yM5oiW5piv6YOo5YiG6YCA5qy+77yMXHJcblx0XHRcdFx0XHRcdFx0XHTmiJHpmaLmnInmnYPmlLblm57nm7jlhbPotaDlk4HvvIzlubbmoLnmja7pgIDmrL4v6YCA5Y2V5ZCO55qE5oOF5Ya16YeN5paw6K6h566X6LWg5ZOB5L+h5oGvXHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLWNvbXBsaW1lbnRhcnlcIiB2LWlmPVwib3JkZXJfaW5mby5naXZpbmdfaW5mby5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LWl0ZW1cIiB2LWZvcj1cIihpdGVtLGspIGluIG9yZGVyX2luZm8uZ2l2aW5nX2luZm9cIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LW5hbWVcIj4ge3sgaXRlbS5jYXRlZ29yeSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeS1jb250ZW50XCI+IHt7IGl0ZW0ucnVsZV9uYW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDkvJjmg6Dkv6Hmga8gLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWRpc2NvdW50LWZ1bGwtcmVkdWN0aW9uXCIgdi1pZj1cIm9yZGVyX2luZm8uZGlzY291bnRfZGVzY3JpcHRpb24ubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1jb250ZW50XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gb3JkZXJfaW5mby5kaXNjb3VudF9kZXNjcmlwdGlvblwiIDprZXk9J2luZGV4Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LW5hbWUtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1uYW1lXCI+IHt7IGl0ZW0uY2F0ZWdvcnkgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1tZXNzYWdlXCI+IHt7aXRlbS5ydWxlX25hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1wcmljZVwiPi3vv6Uge3sgaXRlbS5zYWxlX3ByaWNlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDkvJjmg6DlkIjorqEgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1kaXNjb3VudHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtZGlzY291bnRzLW5hbWVcIj7kvJjmg6DlkIjorqE8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC10b3RhbC1kaXNjb3VudHNcIj4t77+lIHt7IG9yZGVyX2luZm8udG90YWxfZGlzY291bnQgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWVhuWTgeS7t+agvOS/oeaBryAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtcHJpY2UtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWVcIj4g5ZWG5ZOB5oC75Lu3IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbWVzc2FnZVwiPiDvv6Uge3sgb3JkZXJfaW5mby5wYXlhYmxlX2Ftb3VudCB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZVwiPiDkvJjmg6DlkIjorqFcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIEB0YXA9XCJ0aGlzX2FsbF9kaXNjb3VudChvcmRlcl9pbmZvLmRpc2NvdW50X2Rlc2NyaXB0aW9uKVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FzazEucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbWVzc2FnZVwiPiDvv6Uge3sgb3JkZXJfaW5mby50b3RhbF9kaXNjb3VudCB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZVwiPiDpgq7lr4Tov5DotLkgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlXCI+IO+/pSB7eyBvcmRlcl9pbmZvLnJlYWxfZnJlaWdodCB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZVwiPiDlrp7pmYXlupTku5ggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlXCI+IO+/pSB7eyBvcmRlcl9pbmZvLnJlbF9wcmljZSB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2UgXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUgY29sb3JcIj4g5Zyo57q/5pSv5LuYIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbWVzc2FnZSBjb2xvclwiPiDvv6Uge3sgb3JkZXJfaW5mby5vbmxpbmVfcGF5IHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lIGNvbG9yXCI+IOWIsOmZouWGjeS7mCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW1lc3NhZ2UgY29sb3JcIj4g77+lIHt7IG9yZGVyX2luZm8ub2ZmbGluZV9wYXkgfHwgMCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Za16LGGIC0tPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwicmV0dXJuLW1ldy1iZWFuXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1pbWFnZXMtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1pbWFnZXNcIj48aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9jYXJ0QmcucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmV0dXJuLW51bWJlclwiPui/lOWWteixhjEwMDDkuKo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmV0dXJuLWhpbnRcIj7otK3nianov5TllrXosYYs5Za16LGG5Y+v5oq1546wPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15LW1ldy1uZWFuXCI+5oiR55qE5Za16LGGID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWNleWPtyAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1pbmZvcm1hdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItc2VyaWFsLW51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+6K6i5Y2V57yW5Y+3Ojwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VyaWFsLW51bWJlclwiPiB7eyBvcmRlcl9pbmZvLm9yZGVyX25vIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29weVwiIEB0YXA9J2NvcHlfb3JkZXJfbm8ob3JkZXJfaW5mby5vcmRlcl9ubyknPuWkjeWItjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci10aW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7kuIvljZXml7bpl7Q6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci10aW1lLWNvbnRlbnRcIj4ge3sgb3JkZXJfaW5mby5jcmVhdGVfdGltZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7mlK/ku5jnsbvlnos6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktbGFiZWwtY29udGVudFwiPumihOe6pumHkeaUr+S7mC/lhajmrL7ku5g8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXdheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+5pSv5LuY5pa55byPOjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXdheS1jb250ZW50XCIgdi1pZj1cIm9yZGVyX2luZm8ucGF5X2RyaXZlcj09J3dlY2hhdCdcIj7lvq7kv6HmlK/ku5g8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS13YXktY29udGVudFwiIHYtZWxzZT7mlK/ku5jlrp3mlK/ku5g8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g54yc5L2g5Zac5qyiIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImd1ZXNzLXdoYXQteW91LWxpa2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlbGF0ZWQtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz4g54yc5L2g5Zac5qyiXHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3ViamVjdC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Z29vZHNTaG93IDpib3JkZXJSYWRpdXM9MjQgOnJlcXVlc3RVcmw9J3JlcXVlc3RVcmwnIDp3aWR0aD0zNTAgOnBvcmR1Y3RMaXN0PSdwcm9kdWN0TGlzdHMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9nb29kc1Nob3c+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NhcnRCZy5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1oaW50XCI+5pys5Za15Lmf5piv5pyJ5bqV57q/55qEfjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOW6lemDqOaMiemSriAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaW1tb2JpbGl6YXRpb24tYnV0dG9uXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYnV0dG9uX2FsbFwiPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJcIiB0eXBlPVwiZGVmYXVsdFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiIHNpemU9XCJtaW5pXCIgQHRhcD1cImNhbmNlbF9vcmRlcihvcmRlcl9pbmZvLmlkKVwiPlxyXG5cdFx0XHRcdFx05Y+W5raI6K6i5Y2VXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiBAdGFwPVwiY29udGFjdCgpXCI+6IGU57O75a6i5pyNPC9idXR0b24+XHJcblx0XHRcdFx0PCEtLSA8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTR8fG9yZGVyX2luZm8uc3RhdHVzPT02fHxvcmRlcl9pbmZvLnN0YXR1cz09N3x8b3JkZXJfaW5mby5zdGF0dXM9PThcIlxyXG5cdFx0XHRcdCBzaXplPVwibWluaVwiIEB0YXA9XCJjYW5jZWxfZGV0YWlsKG9yZGVyX2luZm8uaWQpXCI+XHJcblx0XHRcdFx0XHTpgIDmrL7mmI7nu4ZcclxuXHRcdFx0XHQ8L2J1dHRvbj4gLS0+XHJcblx0XHRcdFx0PCEtLSB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIiAtLT5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIiAgc2l6ZT1cIm1pbmlcIiBAdGFwPSdnb19yZWZ1bmQob3JkZXJfaW5mby5pZCknPlxyXG5cdFx0XHRcdFx055Sz6K+36YCA5qy+XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImNvbG9yX2J0blwiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTdcIiBAdGFwPVwiZ29fdG9fcGFnZVwiPlxyXG5cdFx0XHRcdFx05Y676YCb6YCbXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PCEtLSA8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIiBzaXplPVwibWluaVwiPlxyXG5cdFx0XHRcdFx056uL5Y2z6aKE57qmXHJcblx0XHRcdFx0PC9idXR0b24+IC0tPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjb2xvcl9idG5cIiB0eXBlPVwiZGVmYXVsdFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiIHNpemU9XCJtaW5pXCIgQHRhcD1cInBsZWFzZV9wYXkob3JkZXJfaW5mby5pZClcIj5cclxuXHRcdFx0XHRcdOeri+WNs+aUr+S7mFxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjb2xvcl9idG5cIiB0eXBlPVwiZGVmYXVsdFwiIHNpemU9XCJtaW5pXCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT01XCIgQHRhcD1cIndyaXRlX2NvbnRlbnQoJ2RpYXJ5JylcIiA+5YaZ5pel6K6wPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIiBAdGFwPVwid3JpdGVfY29udGVudCgnY29tbWVudCcpXCI+5YaZ6K+E5Lu3PC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5Zue5Yiw6aG26YOoIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3AtYnV0dG9uXCIgQGNsaWNrPVwiVG9Ub3BcIiB2LWlmPVwic2hvd1RvcFwiPiBcclxuXHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL29yZGVyX3RvcC5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDkvJjmg6Dkv6Hmga8gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50X2NvbnRlbnRcIiBAdGFwPVwiaGlkZV9kaXNjb3VudFwiIHYtaWY9XCJ0aGlzX3Nob3dfZGlzY291bnRcIiA6c3R5bGU9XCJbeydoZWlnaHQnOmhlaWdodC1tZW51Qm90dG9tLTEwKydweCcsJ3RvcCc6bWVudUJvdHRvbSsxMCsncHgnfV1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudC1oaW50XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHNfbGlzdFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0X2l0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBkaXNjb3VudHNfbGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fbmFtZVwiPiA8dmlldyBjbGFzcz1cImNhdGVnb3J5XCI+IHt7aXRlbS5jYXRlZ29yeX19IDwvdmlldz4gPHZpZXc+IHt7IGl0ZW0ucnVsZV9uYW1lIH19IDwvdmlldz4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50c19zYWxlX3ByaWNlXCI+IC0g77+lIHt7IGl0ZW0uc2FsZV9wcmljZSB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdF9pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gY2FyZF9zYWxlX2xpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX25hbWVcIj4gPHZpZXcgY2xhc3M9XCJjYXRlZ29yeVwiPiB7e2l0ZW0uY2F0ZWdvcnl9fSA8L3ZpZXc+IDx2aWV3PiB7eyBpdGVtLnJ1bGVfbmFtZSB9fSA8L3ZpZXc+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHNfc2FsZV9wcmljZVwiPiAtIO+/pSB7eyBpdGVtLnNhbGVfcHJpY2UgfHwgMCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsX2Rpc2NvdW50c1wiPiBcclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYWxsX2Rpc2NvdW50c19uYW1lXCI+IOWQiOiuoeS8mOaDoCA8L3RleHQ+IFxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkaXNjb3VudHNfc2FsZV9wcmljZVwiPiAtIO+/pSB7eyBhbGxfZGlzY291bnQgfHwgMCB9fSA8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJpX2tub3dcIiB0eXBlPVwiZGVmYXVsdFwiID5cclxuXHRcdFx0XHRcdOaIkeefpemBk+S6hlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZ29vZHNTaG93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dvb2RzU2hvdy52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGdvb2RzU2hvd1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVudVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1lbnVUb3A6IDAsXHJcblx0XHRcdFx0bWVudUhlaWdodDogMCxcclxuXHRcdFx0XHRtZW51TGVmdDogMCxcclxuXHRcdFx0XHRtZW51Qm90dG9tOiAwLFxyXG5cdFx0XHRcdGhlaWdodDogMCxcclxuXHRcdFx0XHRiYXJOYW1lOiAnYmFjaycsIC8v5a+86Iiq5p2h5ZCN56ewXHJcblx0XHRcdFx0Y29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRiYWNrSW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9iYWNrMi5wbmcnLFxyXG5cdFx0XHRcdHRpdGxlOiAn6K6i5Y2V6K+m5oOFJyxcclxuXHRcdFx0XHRzdGF0ZTogJ+W3suS7mOasvicsIC8v5piv5ZCm5LuY5qy+XHJcblx0XHRcdFx0cmVxdWVzdFVybDogJycsXHJcblx0XHRcdFx0b3JkZXJfaW5mbzoge1xyXG5cdFx0XHRcdFx0Z2l2aW5nX2luZm86W10sXHJcblx0XHRcdFx0XHRkaXNjb3VudF9kZXNjcmlwdGlvbjpbXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aXNfcG9zdF9saXN0OiBbXSwgLy/pgq7lr4TllYblk4FcclxuXHRcdFx0XHRzY2FuX29uZV9saXN0OiBbXSwgLy/mlLbotLnlrqTkvb/nlKjllYblk4FcclxuXHRcdFx0XHRzY2FuX3R3b19saXN0OiBbXSwgLy/kvJrlkZjkuK3lv4Pkvb/nlKjllYblk4FcdFxyXG5cdFx0XHRcdHNob3dUb3A6IGZhbHNlLFxyXG5cdFx0XHRcdG9mZnNldDogMCxcclxuXHRcdFx0XHRvdmVyX3RpbWU6ICcnLFxyXG5cdFx0XHRcdHByb2R1Y3RMaXN0czogW10sXHJcblx0XHRcdFx0ZXhwaXJhdGlvbl90aW1lOiAwLCAvL+i/h+acn+aXtumXtFxyXG5cdFx0XHRcdHRoaXNfc2hvd19kaXNjb3VudDpmYWxzZSxcclxuXHRcdFx0XHRkaXNjb3VudHNfbGlzdDpbXSxcclxuXHRcdFx0XHRjYXJkX3NhbGVfbGlzdDpbXSxcclxuXHRcdFx0XHRhbGxfZGlzY291bnQ6MCxcclxuXHRcdFx0XHRkYXk6IDAsXHJcblx0XHRcdFx0aG91c2U6IDAsXHJcblx0XHRcdFx0c2Vjb25kOiAwLFxyXG5cdFx0XHRcdG1pbnV0ZTogMCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQub2Zmc2V0ICs9IDE7XHJcblx0XHRcdHRoYXQuZ2V0TGlrZSgpXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbihvcHRpb24pIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3RcclxuXHRcdFx0dGhhdC5yZXF1ZXN0VXJsID0gdGhhdC5yZXF1ZXN0Lmdsb2JhbERhdGEucmVxdWVzdFVybFxyXG5cdFx0XHRpZiAob3B0aW9uLmluZm8pIHtcclxuXHRcdFx0XHR0aGF0LmdldF9vcmRlcl9kZXJhaWwob3B0aW9uLmluZm8pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhhdC5nZXRfb3JkZXJfZGVyYWlsKDIzMTQ5KSAvLzIzMTcwXHJcblx0XHRcdH1cclxuXHRcdFx0dGhhdC5nZXRMaWtlKClcclxuXHRcdH0sXHJcblx0XHRvblNob3c6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR0aGF0LmhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbkhlaWdodDtcclxuXHRcdFx0Ly8g5Yik5a6a6L+Q6KGM5bmz5Y+wXHJcblx0XHRcdGxldCBwbGF0Zm9ybSA9IGdldEFwcCgpLnBsYXRmb3JtIHx8IGdldEFwcCgpLmdsb2JhbERhdGEucGxhdGZvcm1cclxuXHRcdFx0aWYgKHBsYXRmb3JtID09ICdBcHBsZXRzJykge1xyXG5cdFx0XHRcdC8vIOiOt+WPluWxj+W5lemrmOW6plxyXG5cdFx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRsZXQgbWVudSA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVdpZHRoID0gbWVudS53aWR0aFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSBtZW51LnRvcFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVIZWlnaHQgPSBtZW51LmhlaWdodFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gbWVudS5sZWZ0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IG1lbnUuYm90dG9tXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBcclxuXHRcdFx0ZWxzZSBpZiAocGxhdGZvcm0gPT0gJ0FQUCcpe1xyXG5cdFx0XHRcdHRoYXQubWVudVdpZHRoID0gOTBcclxuXHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSA0MFxyXG5cdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IDcwXHJcblx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gMzBcclxuXHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gMjc4XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOiOt+WPluiuouWNleivpuaDhVxyXG5cdFx0XHRnZXRfb3JkZXJfZGVyYWlsOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZ2V0X29yZGVyX2luZm8nLFxyXG5cdFx0XHRcdFx0aWQ6IGlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwib3JkZXJcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdGxldCB0aW1lID0gZGF0YS5vcmRlcl9pbmZvLmNyZWF0ZV90aW1lICsgZGF0YS5vcmRlcl9pbmZvLmNhbmNlbF90aW1lIC0gZGF0YS5vcmRlcl9pbmZvLnRpbWVfbm93XHJcblx0XHRcdFx0XHRcdGlmICh0aW1lID4gMCAmJiBkYXRhLm9yZGVyX2luZm8uc3RhdHVzPT0wKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5zZXRfZG91bnRfZG93bih0aW1lKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIOiuouWNleWVhuWTgeS/oeaBr1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEub3JkZXJfZ29vZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDmmL7npLrnmoTop4TmoLxcclxuXHRcdFx0XHRcdFx0XHRkYXRhLm9yZGVyX2dvb2RzW2ldLnNob3dfc2t1X3NwZWMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhLm9yZGVyX2luZm8uZGlzdHJpYnV0aW9uID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuaXNfcG9zdF9saXN0LnB1c2goZGF0YS5vcmRlcl9nb29kc1tpXSlcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEub3JkZXJfZ29vZHNbaV0uc2Nhbl9kZXBhcnRtZW50ID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuc2Nhbl9vbmVfbGlzdC5wdXNoKGRhdGEub3JkZXJfZ29vZHNbaV0pXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLm9yZGVyX2dvb2RzW2ldLnNjYW5fZGVwYXJ0bWVudCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnNjYW5fdHdvX2xpc3QucHVzaChkYXRhLm9yZGVyX2dvb2RzW2ldKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyDmnIDov5HnmoTov4fmnJ/ml7bpl7RcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5vcmRlcl9nb29kc1tpXS5vdmVyZHVlX3RpbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhLm9yZGVyX2dvb2RzW2ldLm92ZXJkdWVfdGltZSA+IHRoYXQuZXhwaXJhdGlvbl90aW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZXhwaXJhdGlvbl90aW1lID0gZGF0YS5vcmRlcl9nb29kc1tpXS5vdmVyZHVlX3RpbWVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8g5pe26Ze0XHJcblx0XHRcdFx0XHRcdHRoYXQub3Zlcl90aW1lID0gdGhhdC5zZXRUaW1lcihkYXRhLm9yZGVyX2luZm8uY3JlYXRlX3RpbWUgKyBkYXRhLm9yZGVyX2luZm8uY2FuY2VsX3RpbWUpXHJcblx0XHRcdFx0XHRcdGRhdGEub3JkZXJfaW5mby5jcmVhdGVfdGltZSA9IHRoYXQuc2V0VGltZXIoZGF0YS5vcmRlcl9pbmZvLmNyZWF0ZV90aW1lKVxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5leHBpcmF0aW9uX3RpbWUgPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5leHBpcmF0aW9uX3RpbWUgPSB0aGF0LnNldFRpbWVyKHRoYXQuZXhwaXJhdGlvbl90aW1lKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIOiuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSBkYXRhLm9yZGVyX2luZm9cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnq4vljbPmlK/ku5hcclxuXHRcdFx0cGxlYXNlX3BheTogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YV9pbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICd3ZWNoYXR3YXAnLFxyXG5cdFx0XHRcdFx0b3JkZXJfaWQ6IGlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwicGF5XCIsIGRhdGFfaW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YS5td2ViX3VybClcclxuXHRcdFx0XHRcdFx0bGV0IHVybCA9IGRhdGEubXdlYl91cmxcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aUr+S7mOS4rS4uLidcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8vIGFwcOaUr+S7mFxyXG5cdFx0XHRcdFx0XHRjb25zdCB3ZWJ2aWV3ID0gcGx1cy53ZWJ2aWV3LmNyZWF0ZShcIlwiLFwiY3VzdG9tLXdlYnZpZXdcIilcclxuXHRcdFx0XHRcdFx0d2Vidmlldy5sb2FkVVJMKHVybCx7XCJSZWZlcmVyXCI6dGhhdC5yZXF1ZXN0VXJsfSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrop4TmoLxcclxuXHRcdFx0dGhpc19zaG93X3NrdV9zcGVjOiBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmICh0aGF0LmlzX3Bvc3RfbGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhhdC5pc19wb3N0X2xpc3QpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuaXNfcG9zdF9saXN0W2tleV0uaWQgPT0gaXRlbS5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNfcG9zdF9saXN0W2tleV0uc2hvd19za3Vfc3BlYyA9ICF0aGF0LmlzX3Bvc3RfbGlzdFtrZXldLnNob3dfc2t1X3NwZWNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhhdC5zY2FuX29uZV9saXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBpbiB0aGF0LnNjYW5fb25lX2xpc3QpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuc2Nhbl9vbmVfbGlzdFtrZXldLmlkID09IGl0ZW0uaWQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNjYW5fb25lX2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjID0gIXRoYXQuc2Nhbl9vbmVfbGlzdFtrZXldLnNob3dfc2t1X3NwZWNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhhdC5zY2FuX3R3b19saXN0KSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LnNjYW5fdHdvX2xpc3Rba2V5XS5pZCA9PSBpdGVtLmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5zY2FuX3R3b19saXN0W2tleV0uc2hvd19za3Vfc3BlYyA9ICF0aGF0LnNjYW5fdHdvX2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi9rOaNouaXtumXtOagvOW8j1xyXG5cdFx0XHRzZXRUaW1lcjogZnVuY3Rpb24oZGF0ZSkge1xyXG5cdFx0XHRcdGxldCBob3VzZSA9IDBcclxuXHRcdFx0XHRsZXQgc2Vjb25kID0gMFxyXG5cdFx0XHRcdGxldCBtaW51dGUgPSAwXHJcblx0XHRcdFx0Ly8gaG91c2UgPSBwYXJzZUludCgoZGF0ZSkgLyAxMDAwIC8gNjAgLyA2MCAlIDI0KVxyXG5cdFx0XHRcdHNlY29uZCA9IHBhcnNlSW50KChkYXRlKSAvIDYwICUgNjApXHJcblx0XHRcdFx0bWludXRlID0gcGFyc2VJbnQoKGRhdGUpICUgNjApXHJcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKVxyXG5cdFx0XHRcdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuXHRcdFx0XHRpZiAobW9udGggPCAxMCkge1xyXG5cdFx0XHRcdFx0bW9udGggPSBcIjBcIiArIG1vbnRoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG5cdFx0XHRcdGlmIChkYXkgPCAxMCkge1xyXG5cdFx0XHRcdFx0ZGF5ID0gXCIwXCIgKyBkYXlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aG91c2UgPSBkYXRlLmdldEhvdXJzKClcclxuXHRcdFx0XHRpZiAoaG91c2UgPCAxMCkge1xyXG5cdFx0XHRcdFx0aG91c2UgPSBcIjBcIiArIGhvdXNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzZWNvbmQgPCAxMCkge1xyXG5cdFx0XHRcdFx0c2Vjb25kID0gXCIwXCIgKyBzZWNvbmRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG1pbnV0ZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRtaW51dGUgPSBcIjBcIiArIG1pbnV0ZVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHRpbWUgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBtb250aCArICctJyArIGRheSArIFwiICBcIiArICcgJyArIGhvdXNlICsgJzonICsgc2Vjb25kICsgJzonICsgbWludXRlXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGltZSlcclxuXHRcdFx0XHRyZXR1cm4gdGltZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvIDlkK/lgJLorqHml7ZcclxuXHRcdFx0c2V0X2RvdW50X2Rvd246ZnVuY3Rpb24odGltZSkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8vIGxldCBtaW51dGVUaW1lID0gdGltZTsvLyDnp5JcclxuXHRcdFx0XHRsZXQgc2Vjb25kVGltZSA9IDA7IC8vIOWIhlxyXG5cdFx0XHRcdGxldCBob3VyVGltZSA9IDA7IC8vIOWwj+aXtlxyXG5cdFx0XHRcdGxldCBkYXkgPSAwOyAvL+WkqVxyXG5cdFx0XHRcdGxldCB0aW1lcnMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRpbWUgLT0gMVxyXG5cdFx0XHRcdFx0bGV0IG1pbnV0ZVRpbWUgPSB0aW1lOyAvLyDnp5JcclxuXHRcdFx0XHRcdGlmIChtaW51dGVUaW1lID4gNjApIHtcclxuXHRcdFx0XHRcdFx0c2Vjb25kVGltZSA9IHBhcnNlSW50KG1pbnV0ZVRpbWUgLyA2MClcclxuXHRcdFx0XHRcdFx0bWludXRlVGltZSA9IHBhcnNlSW50KG1pbnV0ZVRpbWUgJSA2MClcclxuXHRcdFx0XHRcdFx0aWYgKHNlY29uZFRpbWUgPiA2MCkge1xyXG5cdFx0XHRcdFx0XHRcdGhvdXJUaW1lID0gcGFyc2VJbnQoc2Vjb25kVGltZSAvIDYwKVxyXG5cdFx0XHRcdFx0XHRcdHNlY29uZFRpbWUgPSBwYXJzZUludChzZWNvbmRUaW1lICUgNjApXHJcblx0XHRcdFx0XHRcdFx0aWYgKGhvdXJUaW1lID4gMjQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRheSA9IHBhcnNlSW50KGhvdXJUaW1lIC8gMjQpXHJcblx0XHRcdFx0XHRcdFx0XHRob3VyVGltZSA9IHBhcnNlSW50KGhvdXJUaW1lICUgNjApXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWNvbmRUaW1lID0gMFxyXG5cdFx0XHRcdFx0XHRob3VyVGltZSA9IDBcclxuXHRcdFx0XHRcdFx0ZGF5ID0gMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5kYXkgPSBkYXlcclxuXHRcdFx0XHRcdHRoYXQuaG91c2UgPSBob3VyVGltZVxyXG5cdFx0XHRcdFx0dGhhdC5zZWNvbmQgPSBzZWNvbmRUaW1lXHJcblx0XHRcdFx0XHR0aGF0Lm1pbnV0ZSA9IG1pbnV0ZVRpbWVcclxuXHRcdFx0XHRcdGlmICh0aW1lIDw9IDApIHtcclxuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcnMpXHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mby5zdGF0dXMgPSAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGF0LnRpbWVycz4wKXtcclxuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcnMpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0LmRheSwgdGhhdC5ob3VzZSwgdGhhdC5zZWNvbmQsIHRoYXQubWludXRlKVxyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4uuS9oOaOqOiNkFxyXG5cdFx0XHRnZXRMaWtlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ3VzZXJyZWNvbW1lbmRlZGdvb2Rzc3B1bGlzdCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnNScsXHJcblx0XHRcdFx0XHRvZmZzZXQ6IHRoYXQub2Zmc2V0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnByb2R1Y3RMaXN0cyA9IHRoYXQucHJvZHVjdExpc3RzLmNvbmNhdChkYXRhKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmsqHmnInmm7TlpJrkuoYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmsqHmnInmm7TlpJrkuoYnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/lOWbnuS4iuS4gOe6p1xyXG5cdFx0XHRnb0JhY2s6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ZWG5ZOB6K+m5oOFXHJcblx0XHRcdGdvb2RzX2RldGFpbDpmdW5jdGlvbihpZCxlbmNyeXB0ZWRfaWQpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19kZXRhaWw/c2t1X2lkPSR7aWR9JmVuY3J5cHRlZF9pZD0ke2VuY3J5cHRlZF9pZH1gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaIkeeahOi1oOWTgVxyXG5cdFx0XHRteV9jYXJkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvbXkvbXlfY2FyZGAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5aSN5Yi25Y2V5Y+3XHJcblx0XHRcdGNvcHlfb3JkZXJfbm86IGZ1bmN0aW9uKGluZm8pIHtcclxuXHRcdFx0XHR1bmkuc2V0Q2xpcGJvYXJkRGF0YSh7XHJcblx0XHRcdFx0XHRkYXRhOiBpbmZvLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5bey5aSN5Yi25Yiw5Ymq5YiH5p2/J1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrkvJjmg6Dkv6Hmga9cclxuXHRcdFx0dGhpc19kaXNjb3VudDpmdW5jdGlvbihpbmZvLGNhcmRfc2FsZV9pbmZvLGRpc2NvdW50KXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZihpbmZvLmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdHRoYXQuZGlzY291bnRzX2xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0dGhhdC5kaXNjb3VudHNfbGlzdCA9IGluZm9cclxuXHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2Rpc2NvdW50ID0gIXRoYXQudGhpc19zaG93X2Rpc2NvdW50XHJcblx0XHRcdFx0XHR0aGF0LmFsbF9kaXNjb3VudCA9IGRpc2NvdW50XHJcblx0XHRcdFx0fWVsc2UgaWYoY2FyZF9zYWxlX2luZm8mJmNhcmRfc2FsZV9pbmZvLmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdHRoYXQuY2FyZF9zYWxlX2xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0dGhhdC5jYXJkX3NhbGVfbGlzdCA9IGNhcmRfc2FsZV9pbmZvXHJcblx0XHRcdFx0XHR0aGF0LnRoaXNfc2hvd19kaXNjb3VudCA9ICF0aGF0LnRoaXNfc2hvd19kaXNjb3VudFxyXG5cdFx0XHRcdFx0dGhhdC5hbGxfZGlzY291bnQgPSBkaXNjb3VudFxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifmmoLml6DkvJjmg6Dkv6Hmga8nLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS8mOaDoOWQiOiuoVxyXG5cdFx0XHR0aGlzX2FsbF9kaXNjb3VudDpmdW5jdGlvbihpbmZvKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZihpbmZvLmxlbmd0aD09MCl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+aaguaXoOS8mOaDoOS/oeaBrycsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gaW5mbyl7XHJcblx0XHRcdFx0XHRcdHRoYXQuZGlzY291bnRzX2xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0XHR0aGF0LmNhcmRfc2FsZV9saXN0ID0gW11cclxuXHRcdFx0XHRcdFx0dGhhdC5hbGxfZGlzY291bnQgPSAwXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGluZm9ba2V5XSlcclxuXHRcdFx0XHRcdFx0aWYoaW5mb1trZXldLnRvb2xzX2lkPT0nZGlzY291bnQnKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmRpc2NvdW50c19saXN0LnB1c2goaW5mb1trZXldKVxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihpbmZvW2tleV0udG9vbHNfaWQ9PSdzYWxlX2NhcmRfdXNlcicpe1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2FyZF9zYWxlX2xpc3QucHVzaChpbmZvW2tleV0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5hbGxfZGlzY291bnQgKz0gaW5mb1trZXldLnNhbGVfcHJpY2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2Rpc2NvdW50ID0gIXRoYXQudGhpc19zaG93X2Rpc2NvdW50XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQuZGlzY291bnRzX2xpc3QsdGhhdC5jYXJkX3NhbGVfbGlzdClcclxuXHRcdFx0fSxcclxuXHRcdFx0aGlkZV9kaXNjb3VudDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQudGhpc19zaG93X2Rpc2NvdW50ID0gIXRoYXQudGhpc19zaG93X2Rpc2NvdW50XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWOu+mmlumhteWSjOWIhuexu1xyXG5cdFx0XHRnb190b19wYWdlOmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHQgICAgdXJsOiAnL3BhZ2VzL2dvb2RzL2dvb2RzX2NsYXNzaWZ5J1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/lOWbnumhtumDqFxyXG5cdFx0XHRUb1RvcDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLnBhZ2VTY3JvbGxUbyh7XHJcblx0XHRcdFx0XHRzY3JvbGxUb3A6IDAsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogNjAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g55Sz6K+36YCA5qy+XHJcblx0XHRcdGdvX3JlZnVuZDogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvbXkvbXlfb3JkZXJfcmVmdW5kP2lkPSR7aWR9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgIDmrL7nu5PmnpxcclxuXHRcdFx0Ly8gY2FuY2VsX2RldGFpbDogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0Ly8gXHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdC8vIFx0XHR1cmw6IGAvcGFnZXMvbXkvbXlfb3JkZXJfcmVmdW5kX3Byb2dyZXNzP2lkPSR7aWR9YCxcclxuXHRcdFx0Ly8gXHR9KVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHQvLyDlj5bmtojorqLljZVcclxuXHRcdFx0Y2FuY2VsX29yZGVyOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IFwi5o+Q56S6XCIsXHJcblx0XHRcdFx0XHRjb250ZW50OiAn5oKo5q2j5Zyo5Y+W5raI6K6i5Y2VLOehruiupOWPlua2iOiuouWNleWQl++8nycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGludGVyZmFjZUlkOidjYW5jZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ6aWRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJvcmRlclwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon5Y+W5raI6K6i5Y2V5oiQ5YqfISdcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6IGU57O75a6i5pyNXHJcblx0XHRcdGNvbnRhY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9jb25zdWx0YXRpb24vY29uc3VsdGF0aW9uYCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlhpnml6XorrDlkozor4Tku7dcclxuXHRcdFx0d3JpdGVfY29udGVudDogZnVuY3Rpb24oaW5mbykge1xyXG5cdFx0XHRcdC8vIOWGmeaXpeiusFxyXG5cdFx0XHRcdGlmIChpbmZvID09ICdkaWFyeScpIHtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2RpYXJ5L2RpYXJ5X3dyaXRlYCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmZvID09ICdjb21tZW50Jykge1xyXG5cdFx0XHRcdFx0Ly8g5YaZ6K+E5Lu3XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9teS93cml0ZV9jb21tZW50YCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdC8vIOaYvuekuuWbnuWIsOmhtumDqOaMiemSrlxyXG5cdFx0b25QYWdlU2Nyb2xsOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmIChlLnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0XHR0aGlzLnNob3dUb3AgPSB0cnVlXHJcblx0XHRcdH0gZWxzZSBpZiAoZS5zY3JvbGxUb3AgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvcCA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuc2hvd19jb2xvcntcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHQubXlfb3JkZXJfZGV0YWlsIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQudG9wLW5hdi1tZXNzYWdlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDlkZWcsICNmMjQ3ODggMCUsICNmZjY5YTEgMTAwJSk7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC5teS10b3AtYmFyIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00OWRlZywgI2YyNDc4OCAwJSwgI2ZmNjlhMSAxMDAlKTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiAxMDA7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQuYmFjay10aXRsZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzhycHg7XHJcblx0fVxyXG5cclxuXHQuYmFjayB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5iYWNrIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzNnJweDtcclxuXHRcdGhlaWdodDogMzZycHg7XHJcblx0fVxyXG5cclxuXHQuYmFjay10aXRsZSAudGl0bGUge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdG1hcmdpbi1sZWZ0OiA4MHJweDtcclxuXHR9XHJcblxyXG5cdC50b3AtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQvKiBwYWRkaW5nLXRvcDogMjEwcnB4OyAqL1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIxMHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLW1lc3NhZ2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQud2FpdC1wYXkge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLXBheS1wcmljZXMge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5ub3dfcGF5IHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDI0MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQubm93X3BheTo6YWZ0ZXIge1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHJcblx0LnJlc2lkdWUtdGltZSB7XHJcblx0XHRvcGFjaXR5OiAwLjc7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdH1cclxuXHJcblx0LnVzZXItYWxsLW1lc3NhZ2Uge1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IC0xMzBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1tZXNzYWdlLWNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAzNHJweCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLW5hbWUtcGhvbmUtZGVmYXVsdC1hZGRyZXNzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItcGhvbmUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0LWFkZHJlc3Mge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0IHtcclxuXHRcdHdpZHRoOiA2NnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuZGVmYXVsdC1hZGRyZXNzLWNvbnRlbnQge1xyXG5cdFx0d2lkdGg6IDY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg4MzRmYSAwJSwgI2JjNjZmZiAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdH1cclxuXHJcblx0LnNoaXBwaW5nLWFkZHJlc3Mge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMzQzNDM0O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0LmFkZHJlc3MtY29udGVudCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjJycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdFx0d2lkdGg6IDc2JTtcclxuXHR9XHJcblxyXG5cdC5hbGwtb3JkZXItbWVzc2FnZSB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTcwcnB4O1xyXG5cdH1cclxuXHJcblx0LmFjY291bnQtcGFpZC1jb2RlIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQuYWNjb3VudC1wYWlkLWNvZGUtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwIDMwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmFjY291bnQtcGFpZC1jb2RlLW51bWJlciB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5hY2NvdW50LXBhaWQtY29kZS1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5hY2NvdW50LXBhaWQtY29kZS1pbWFnZSBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzIwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyNXJweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1jb250ZW50IHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaXRlbXMge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwO1xyXG5cdH1cclxuXHJcblx0LnNlcnZpY2UtY29uZGl0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIycnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQubGluZS1zZXJ2aWNlLW5hbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHR3aWR0aDogNnJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5zZXJ2aWNlLW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHJcblx0LmFwcG9pbnRtZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1wb3JkdWN0LWNvbnRlbnQge1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1wb3JkdWN0LWxpbmUge1xyXG5cdFx0cGFkZGluZzogMCAwIDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbGluZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0aGVpZ2h0OiAycnB4O1xyXG5cdH1cclxuXHJcblx0LmZhaWx1cmUtdGltZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQudGltZS1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5oaW50LWltYWdlIHtcclxuXHRcdHdpZHRoOiAxNjVycHg7XHJcblx0XHRoZWlnaHQ6IDEzMHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTEwMHJweDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdH1cclxuXHJcblx0LmhpbnQtaW1hZ2UgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDE2NXJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmhpbnQtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQub3JkZXItcG9yZHVjdC1pbWFnZXMtbmFtZSB7XHJcblx0XHRib3JkZXItYm90dG9tOiAycnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMzBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaW1hZ2VzIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWltYWdlcyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1yaWdodCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDAgMTBycHggMjBycHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcblx0fVxyXG5cclxuXHQuc2t1X3NwZWNfY29udGVudCB7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0LyogbGluZS1oZWlnaHQ6IDQwcnB4OyAqL1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHdpZHRoOiA3NiU7XHJcblx0XHRwYWRkaW5nOiAwIDE2cnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMjBycHg7XHJcblx0XHR0b3A6IDc2cnB4O1xyXG5cdH1cclxuXHJcblx0Lml0ZW1fY29udGVudCB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC5za3Vfc3BlY19jb250ZW50IGltYWdlLFxyXG5cdC5zaG93X2l0ZW1fY29udGVudCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnNob3dfaXRlbV9jb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDIwcnB4O1xyXG5cdFx0dG9wOiA3NnJweDtcclxuXHRcdHdpZHRoOiA3NiU7XHJcblx0XHRwYWRkaW5nOiA2cnB4IDE2cnB4IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0fVxyXG5cclxuXHQuc2hvd19pdGVtX2NvbnRlbnQgaW1hZ2Uge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlLW51bWJlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjODA4MDgwO1xyXG5cdH1cclxuXHRcclxuXHJcblx0LnBvcmR1Y3QtcHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LW51bWJlciB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnBheS1vcmRlci1jb250ZW50IHtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI0YwRjBGMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI0YwRjBGMDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBheS1vcmRlci1jb250ZW50IHRleHQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRvdGFsLXByaWNlLW9uLWxpbmUtcGF5LFxyXG5cdC5kaXNjb3VudHMtaG9zcGl0YWwtcGF5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50cyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5vbi1saW5lLXBheSxcclxuXHQuaG9zcGl0YWwtcGF5IHtcclxuXHRcdG1pbi13aWR0aDogNDIlO1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50cyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjZycHg7XHJcblx0XHRoZWlnaHQ6IDI2cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcGUtd2l0aCB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmNvbXBsaW1lbnRhcnkge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS10b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcblxyXG5cdC50b3AtbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5teS1jb21wbGltZW50YXJ5IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5jb21wbGltZW50YXJ5LWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0cGFkZGluZzogMTVycHggMCAzMnJweDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5hbGwtY29tcGxpbWVudGFyeSB7XHJcblx0XHRwYWRkaW5nLXRvcDogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5jb21wbGltZW50YXJ5LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMThycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1jb250ZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHJcblx0fVxyXG5cclxuXHQudGlja2V0LWRpc2NvdW50LWZ1bGwtcmVkdWN0aW9uIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtbmFtZS1tZXNzYWdlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW1lc3NhZ2Uge1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1wcmljZSB7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQudG90YWwtZGlzY291bnRzIHtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHRcdHBhZGRpbmctdG9wOiAzMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRvdGFsLWRpc2NvdW50cy1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblxyXG5cdC5hbGwtdG90YWwtZGlzY291bnRzIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5hbGwtcHJpY2UtbWVzc2FnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnByaWNlLW5hbWUtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucHJpY2UtbmFtZS1tZXNzYWdlOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5wcmljZS1uYW1lIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnByaWNlLW5hbWUgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnJweDtcclxuXHR9XHJcblxyXG5cdC5wcmljZS1tZXNzYWdlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblxyXG5cdC5yZXR1cm4tbWV3LWJlYW4ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogMzNycHggNDBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1pbWFnZXMtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1tZXNzYWdlIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDkwcnB4O1xyXG5cdFx0aGVpZ2h0OiA3MHJweDtcclxuXHR9XHJcblxyXG5cdC5yZXR1cm4tbnVtYmVyIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHJcblx0LnJldHVybi1oaW50IHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0fVxyXG5cclxuXHQubXktbWV3LW5lYW4ge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaW5mb3JtYXRpb24ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQub3JkZXItc2VyaWFsLW51bWJlcixcclxuXHQub3JkZXItdGltZSxcclxuXHQucGF5LWxhYmVsLFxyXG5cdC5wYXktd2F5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQucGF5LXdheSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlLW5hbWUge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcHkge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW4tbGVmdDogMjRycHg7XHJcblx0fVxyXG5cclxuXHQvKiDnjJzkvaDllpzmrKIgKi9cclxuXHQuZ3Vlc3Mtd2hhdC15b3UtbGlrZSB7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5yZWxhdGVkLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbS1pbWFnZXMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luLXRvcDogNzBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWltYWdlcyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNjBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0bWFyZ2luLXRvcDogNDhycHg7XHJcblx0fVxyXG5cclxuXHQuaW1tb2JpbGl6YXRpb24tYnV0dG9uIHtcclxuXHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0RBREFEQTtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCBidXR0b24ge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmJnX2J0biB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCBidXR0b246OmFmdGVyIHtcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblxyXG5cdC50b3AtYnV0dG9uIHtcclxuXHRcdHdpZHRoOiAxMjBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogNDBycHg7XHJcblx0XHRib3R0b206IDEzMHB4O1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHR9XHJcblx0LnRvcC1idXR0b24gaW1hZ2V7XHJcblx0XHR3aWR0aDogMTIwcnB4O1xyXG5cdH1cclxuXHJcblx0Lyog5paw5YaZ55qE5qC35byPICovXHJcblx0LnJlZnVuZGVkIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucmVmdW5kZWQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDY0cnB4O1xyXG5cdFx0aGVpZ2h0OiA2NHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucmVmdW5kZWRfaGludCB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuY2FuY2VsLW9yZGVyX3RvcCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIxMHJweDtcclxuXHR9XHJcblxyXG5cdC5jYW5jZWwtb3JkZXJfdG9wIGltYWdlIHtcclxuXHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNhbmNlbF9oaW50IHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXJfaW5mbyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdC8qIHBhZGRpbmc6IDM0cnB4IDA7ICovXHJcblx0XHRwYWRkaW5nOiA4MHJweCAwO1xyXG5cdH1cclxuXHJcblx0LmNvbG9yIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHQvKiDkvJjmg6Dkv6Hmga8gKi9cclxuXHQuZGlzY291bnRfY29udGVudHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuZGlzY291bnQtaGludHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweCAxMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDYwJTtcclxuXHR9XHJcblx0LmRpc2NvdW50c19saXN0e1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjODA4MDgwO1xyXG5cdH1cclxuXHQubGlzdF9pdGVte1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdC5pdGVtX25hbWV7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cdC5jYXRlZ29yeXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICAjZmEzNDc1IDAlLCAgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdHBhZGRpbmc6IDAgMjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0LmRpc2NvdW50c19zYWxlX3ByaWNle1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdC5hbGxfZGlzY291bnRze1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOiAzMHJweCAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjODA4MDgwO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBycHg7XHJcblx0fVxyXG5cdC5hbGxfZGlzY291bnRzX25hbWV7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0Lmlfa25vd3tcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxyXG5cdH1cclxuXHQuaV9rbm93OjphZnRlcntcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblx0XHJcblx0LmNvbG9yX2J0bntcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICAjZmEzNDc1IDAlLCAgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGRlMWVlYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDkyMzU5MTgxNzRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9