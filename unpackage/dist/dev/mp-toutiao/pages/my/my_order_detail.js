(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my_order_detail"],{

/***/ 20:
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fmy%2Fmy_order_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _my_order_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my_order_detail.vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my_order_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 21:
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 22);
/* harmony import */ var _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=script&lang=js& */ 24);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 26);
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

/***/ 22:
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=template&id=08de1eeb&scoped=true& */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_template_id_08de1eeb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 23:
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

/***/ 24:
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=script&lang=js& */ 25);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 25:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var goodsShow = function goodsShow() {__webpack_require__.e(/*! require.ensure | components/goodsShow */ "components/goodsShow").then((function () {return resolve(__webpack_require__(/*! ../../components/goodsShow.vue */ 476));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =






























































































































































































































































































































































































































































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
          // console.log(data.mweb_url)
          var url = data.mweb_url;
          uni.showLoading({
            title: '支付中...' });

          // app支付
          var webview = plus.webview.create("", "custom-webview");
          webview.loadURL(that.pay_url, { "Referer": that.requestUrl });
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

    },
    // 退款详情
    cancel_detail: function cancel_detail(id) {
      uni.navigateTo({
        url: "/pages/my/my_order_refund_progress?id=".concat(id) });

    },
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

/***/ 26:
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& */ 27);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_order_detail_vue_vue_type_style_index_0_id_08de1eeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 27:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_order_detail.vue?vue&type=style&index=0&id=08de1eeb&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[20,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/ZjljNyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlP2M0ZjUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZT84ZmQ4IiwidW5pLWFwcDovLy9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X29yZGVyX2RldGFpbC52dWU/Yzk0OSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9vcmRlcl9kZXRhaWwudnVlPzEyMzYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLDZHO0FBQ0FBLFVBQVUsQ0FBQ0Msd0JBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdJO0FBQ3hJO0FBQ21FO0FBQ0w7QUFDcUM7OztBQUduRztBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQXdxQixDQUFnQixzcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrYjVyQjtBQUNBO0FBQ0Esd0JBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBO0FBR0EsbUJBSEE7QUFJQSxpQkFKQTtBQUtBLG1CQUxBO0FBTUEsZUFOQTtBQU9BLGdDQVBBLEVBT0E7QUFDQSxzQkFSQTtBQVNBLDJDQVRBO0FBVUEsbUJBVkE7QUFXQSxrQkFYQSxFQVdBO0FBQ0Esb0JBWkE7QUFhQSxvQkFiQTtBQWNBLHNCQWRBLEVBY0E7QUFDQSx1QkFmQSxFQWVBO0FBQ0EsdUJBaEJBLEVBZ0JBO0FBQ0Esb0JBakJBO0FBa0JBLGVBbEJBO0FBbUJBLG1CQW5CQTtBQW9CQSxzQkFwQkE7QUFxQkEsd0JBckJBLENBcUJBO0FBckJBO0FBdUJBLEdBNUJBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxNQUVBO0FBQ0EsbUNBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxHQTVDQTtBQTZDQSxTQTdDQSxxQkE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBVEE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVJBOztBQVVBLEtBWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQS9FQTtBQWdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxjQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkEsTUFFQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQS9CQTtBQWdDQSxLQXhDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVpBO0FBYUEsS0E3REE7QUE4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEZBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXBIQTtBQXFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQURBO0FBRUEsaUJBRkE7QUFHQSwyQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0EsU0FWQSxNQVVBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0EsT0FqQkE7QUFrQkEsS0EvSUE7QUFnSkE7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0FySkE7QUFzSkE7QUFDQTtBQUNBO0FBQ0Esa0dBREE7O0FBR0EsS0EzSkE7QUE0SkE7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7O0FBR0EsS0FqS0E7QUFrS0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0EsNEJBREE7O0FBR0EsU0FOQTs7QUFRQSxLQTVLQTtBQTZLQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHFCQUZBOztBQUlBLEtBbkxBO0FBb0xBO0FBQ0E7QUFDQTtBQUNBLHdDQURBOztBQUdBLEtBekxBO0FBMExBO0FBQ0E7QUFDQTtBQUNBLGdFQURBOztBQUdBLEtBL0xBO0FBZ01BO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0Esa0NBREE7O0FBR0E7QUFDQSxhQU5BO0FBT0E7QUFDQSxTQWxCQTs7QUFvQkEsS0F0TkE7QUF1TkE7QUFDQTtBQUNBO0FBQ0EsK0NBREE7O0FBR0EsS0E1TkE7QUE2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQURBOztBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSx3Q0FEQTs7QUFHQTtBQUNBLEtBMU9BLEVBaEZBOztBQTRUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxHQW5VQSxFOzs7Ozs7Ozs7Ozs7O0FDL2JBO0FBQUE7QUFBQTtBQUFBO0FBQTIrQixDQUFnQixxOEJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0EvL0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9teS9teV9vcmRlcl9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvbXkvbXlfb3JkZXJfZGV0YWlsLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGRlMWVlYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA4ZGUxZWViXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL215L215X29yZGVyX2RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDhkZTFlZWImc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9teV9vcmRlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJteV9vcmRlcl9kZXRhaWxcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wLW5hdi1tZXNzYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibXktdG9wLWJhclwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLXRvcCc6bWVudVRvcCsncHgnLCdsaW5lLWhlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLWJvdHRvbSc6MTArJ3B4J31dXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrLXRpdGxlXCIgOnN0eWxlPVwiW3snaGVpZ2h0JzptZW51SGVpZ2h0KydweCd9XVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrXCIgQGNsaWNrPVwiZ29CYWNrXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3JldHVybi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIiA6c3R5bGU9XCJbeydtYXJnaW4tcmlnaHQnOm1lbnVXaWR0aCsncHgnfV1cIj4ge3t0aXRsZX19IDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3AtbWVzc2FnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cyE9MVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOetieW+heS7mOasviB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci11c2VpbmctdGltZS1wcmljZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndhaXQtcGF5XCI+562J5b6F5LuY5qy+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWAkuiuoeaXtiAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZXNpZHVlLXRpbWVcIj7liankvZnmlK/ku5jml7bpl7Q6XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+MDwvdGV4dD7lpKk8dGV4dD4wPC90ZXh0PuaXtjx0ZXh0PjM8L3RleHQ+5YiGPHRleHQ+NTk8L3RleHQ+56eSXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLXBheS1wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdOWcqOe6v+aUr+S7mO+/pTx0ZXh0Pnt7IG9yZGVyX2luZm8ub25saW5lX3BheSB9fTwvdGV4dD4s5Yiw6Zmi5YaN5LuY77+lPHRleHQ+e3sgb3JkZXJfaW5mby5vZmZsaW5lX3BheSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwibm93X3BheVwiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiBAdGFwPVwicGxlYXNlX3BheShvcmRlcl9pbmZvLmlkKVwiPueri+WNs+aUr+S7mDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDlt7Lku5jmrL4gdi1lbHNlLWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci11c2VpbmctdGltZS1wcmljZVwiIHYtZWxzZS1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2FpdC1wYXlcIj7lt7Lku5jmrL48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVzaWR1ZS10aW1lXCI+5pyJ5ZWG5ZOB5LqOIHt7IGV4cGlyYXRpb25fdGltZSB9fSDkvZzlup88L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1wYXktcHJpY2VzXCI+IOivt+WwveW/q+WIsOmZouS9v+eUqCA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOW3sumAgOasviBvcmRlcl9pbmZvLnN0YXR1cz09NyAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVmdW5kZWRcIiB2LWVsc2UtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9kZWxldGUucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVmdW5kZWRfaGludFwiPuW3sumAgOasvjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlt7LkvZzlup8gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuY2VsLW9yZGVyX3RvcFwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzptZW51Qm90dG9tKzQwKydweCd9XVwiIHYtZWxzZS1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0xXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuY2VsX2hpbnRcIj7lt7LkvZzlup88L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5pS26LSn5Zyw5Z2A5ZKM6IGU57O75pa55byPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWFsbC1tZXNzYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1tZXNzYWdlLWNvbnRlbnRcIiB2LWlmPVwib3JkZXJfaW5mby5kaXN0cmlidXRpb249PTFcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbWVzc2FnZS1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbmFtZS1waG9uZS1kZWZhdWx0LWFkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIj4ge3sgb3JkZXJfaW5mby5hY2NlcHRfbmFtZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1waG9uZVwiPiB7eyBvcmRlcl9pbmZvLnRlbHBob25lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWZhdWx0LWFkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlZmF1bHRcIj7pu5jorqQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWZhdWx0LWFkZHJlc3MtY29udGVudFwiPiB7eyBvcmRlcl9pbmZvLnRhZyB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hpcHBpbmctYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZHJlc3MtbmFtZVwiPuaUtui0p+WcsOWdgDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRyZXNzLWNvbnRlbnRcIj4ge3sgb3JkZXJfaW5mby5wcm92aW5jZV9jbiArIG9yZGVyX2luZm8uY2l0eV9jbiArIG9yZGVyX2luZm8uYXJlYV9jbiArIG9yZGVyX2luZm8uYWRkcmVzcyB9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9pbmZvXCIgdi1lbHNlLWlmPVwib3JkZXJfaW5mby5kaXN0cmlidXRpb249PTBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjY2VwdF9uYW1lXCI+IHt7IG9yZGVyX2luZm8uYWNjZXB0X25hbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGVscGhvbmVcIj4ge3sgb3JkZXJfaW5mby50ZWxwaG9uZSB9fSA8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBhcnRpY3VsYXJzXCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cIm9yZGVyLXBhcnRpY3VsYXJzXCI+XHJcblx0XHRcdFx0PHRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtb3JkZXItbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOW3suS7mOasvueahOaguOmUgOeggSBvcmRlcl9pbmZvLnN0YXR1cz09MiAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NvdW50LXBhaWQtY29kZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWNjb3VudC1wYWlkLWNvZGUtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NvdW50LXBhaWQtY29kZS1udW1iZXJcIj7orqLljZXmoLjplIDnoIEgLSB7eyBvcmRlcl9pbmZvLmh4X2NvZGUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NvdW50LXBhaWQtY29kZS1oaW50XCI+5Yy7576O6aG555uu6K+35Zyo5pS26LS55a6k5Ye656S6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NvdW50LXBhaWQtY29kZS1oaW50XCI+5oqk6IKk5ZOB6aG555uu5Zyo5Lya5ZGY5Lit5b+D5Ye656S6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY2NvdW50LXBhaWQtY29kZS1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwrb3JkZXJfaW5mby5xcmNvZGVzXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g6K6i5Y2V5ZWG5ZOB5L+h5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOmCruWvhOWVhuWTgSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWl0ZW1zXCIgdi1pZj1cImlzX3Bvc3RfbGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLWNvbmRpdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lLXNlcnZpY2UtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcnZpY2UtbmFtZVwiPiDpgq7lr4TllYblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXBwb2ludG1lbnRcIiB2LXNob3c9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiPiDlpLHmlYjnmoTllYblk4HlsIboh6rliqjpgIDmrL7vvIzor7flj4rml7bliLDpmaLkvb/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWNvbnRlbnRcIiB2LWZvcj1cIihpLGspIGluIGlzX3Bvc3RfbGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1saW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmFpbHVyZS10aW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aW1lLWhpbnRcIj7llYblk4HlpLHmlYjml7bpl7Q6IHt7IG92ZXJfdGltZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LWltYWdlXCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT03XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9yZWZ1bmQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09NVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc3RhdGUyLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtdGV4dFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiPuW+heS9v+eUqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLXBvcmR1Y3QtaW1hZ2VzLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraS5pbWdcIiBAdGFwPVwiZ29vZHNfZGV0YWlsKGkuc2t1X2lkLGkuZW5jcnlwdGVkX2lkKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWVcIj57e2kuc3B1X25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2t1X3NwZWNfY29udGVudFwiIEB0YXA9J3RoaXNfc2hvd19za3Vfc3BlYyhpLGspJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnRfaXRlbXNcIiB2LWZvcj1cIih6LGopIGluIGkuc2t1X3NwZWNcIiA6a2V5PSdqJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnNcIj4ge3sgeiB9fSA6IHt7IGogfX0gOyA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfaXRlbV9jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknIHYtaWY9XCJpLnNob3dfc2t1X3NwZWNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2FsbF9pdGVtc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZS1udW1iZXJcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJpLnN0YXR1cz09MHx8aS5zdGF0dXM9PTJ8fGkuc3RhdHVzPT0zfHxpLnN0YXR1cz09NT8nc2hvd19jb2xvcic6JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlXCIgPjx0ZXh0Pu+/pTwvdGV4dD57e2kuc2t1X3ByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1udW1iZXJcIiA+eHt7aS5za3VfbnVtc319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1mb3ItdGhlLW9yZGVyIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LW9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiIHRvdGFsLXByaWNlLW9uLWxpbmUtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtcHJpY2VcIj7mgLvku7cgPHRleHQ+77+lIHt7aS5wYXlhYmxlX2Ftb3VudH19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9uLWxpbmUtcGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWcqOe6v+aUr+S7mCA8dGV4dD7vv6Uge3tpLm9ubGluZV9wYXl9fSA8L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1ob3NwaXRhbC1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx05LyY5oOgIDx0ZXh0Pu+/pSB7eyBpLnRvdGFsX2Rpc2NvdW50IHx8IDB9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtc2hvdz1cImkudG90YWxfZGlzY291bnQ+MFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvc3BpdGFsLXBheVwiPuWIsOmZouWGjeS7mCA8dGV4dD7vv6Uge3tpLm9mZmxpbmVfcGF5fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcGUtd2l0aFwiPuW6lOS7mCA8dGV4dD7vv6Uge3tpLnJlbF9wcmljZX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOaUtui0ueWupOS9v+eUqOWVhuWTgSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWl0ZW1zXCIgdi1lbHNlLWlmPVwic2Nhbl9vbmVfbGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLWNvbmRpdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lLXNlcnZpY2UtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcnZpY2UtbmFtZVwiPiDmlLbotLnlrqTkvb/nlKjllYblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXBwb2ludG1lbnRcIiB2LXNob3c9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiPiDlpLHmlYjnmoTllYblk4HlsIboh6rliqjpgIDmrL7vvIzor7flj4rml7bliLDpmaLkvb/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWNvbnRlbnRcIiB2LWZvcj1cIihpLGspIGluIHNjYW5fb25lX2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZhaWx1cmUtdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1oaW50XCI+5ZWG5ZOB5aSx5pWI5pe26Ze0OiB7eyBvdmVyX3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcmVmdW5kLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3N0YXRlMi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LXRleHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIj7lvoXkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWltYWdlcy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaW1nXCIgQHRhcD1cImdvb2RzX2RldGFpbChpLnNrdV9pZCxpLmVuY3J5cHRlZF9pZClcIj4+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbmFtZVwiPnt7aS5zcHVfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJza3Vfc3BlY19jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudF9pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19pdGVtX2NvbnRlbnRcIiBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKScgdi1pZj1cImkuc2hvd19za3Vfc3BlY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfYWxsX2l0ZW1zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWl0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlLW51bWJlclwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj48dGV4dD7vv6U8L3RleHQ+e3tpLnNrdV9wcmljZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbnVtYmVyXCI+IHgge3tpLnNrdV9udW1zfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS1mb3ItdGhlLW9yZGVyIFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LW9yZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiIHRvdGFsLXByaWNlLW9uLWxpbmUtcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtcHJpY2VcIj7mgLvku7cgPHRleHQ+77+lIHt7aS5wYXlhYmxlX2Ftb3VudH19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9uLWxpbmUtcGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cImkuc3RhdHVzPT0wfHxpLnN0YXR1cz09Mnx8aS5zdGF0dXM9PTN8fGkuc3RhdHVzPT01PydzaG93X2NvbG9yJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWcqOe6v+aUr+S7mCA8dGV4dD7vv6Uge3tpLm9ubGluZV9wYXl9fSA8L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1ob3NwaXRhbC1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx05LyY5oOgIDx0ZXh0Pu+/pSB7eyBpLnRvdGFsX2Rpc2NvdW50IHx8IDB9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtc2hvdz1cImkudG90YWxfZGlzY291bnQ+MFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXNrMS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvc3BpdGFsLXBheVwiPuWIsOmZouWGjeS7mCA8dGV4dD7vv6Uge3tpLm9mZmxpbmVfcGF5fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcGUtd2l0aFwiPuW6lOS7mCA8dGV4dD7vv6Uge3tpLnJlbF9wcmljZX19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOS8muS4reW/g+WRmOS9v+eUqOWVhuWTgSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWl0ZW1zXCIgdi1lbHNlLWlmPVwic2Nhbl90d29fbGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXJ2aWNlLWNvbmRpdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lLXNlcnZpY2UtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlcnZpY2UtbmFtZVwiPiDkvJrkuK3lv4PlkZjkvb/nlKjllYblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXBwb2ludG1lbnRcIiB2LXNob3c9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiPiDlpLHmlYjnmoTllYblk4HlsIboh6rliqjpgIDmrL7vvIzor7flj4rml7bliLDpmaLkvb/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWNvbnRlbnRcIiB2LWZvcj1cIihpLGspIGluIHNjYW5fdHdvX2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZhaWx1cmUtdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1oaW50XCI+5ZWG5ZOB5aSx5pWI5pe26Ze0OiB7eyBvdmVyX3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGludC1pbWFnZVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09N1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcmVmdW5kLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhpbnQtaW1hZ2VcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3N0YXRlMi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoaW50LXRleHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIj7lvoXkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1wb3JkdWN0LWltYWdlcy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaW1nXCIgQHRhcD1cImdvb2RzX2RldGFpbChpLnNrdV9pZCxpLmVuY3J5cHRlZF9pZClcIj4+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbmFtZVwiPnt7aS5zcHVfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJza3Vfc3BlY19jb250ZW50XCIgQHRhcD0ndGhpc19zaG93X3NrdV9zcGVjKGksayknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudF9pdGVtc1wiIHYtZm9yPVwiKHosaikgaW4gaS5za3Vfc3BlY1wiIDprZXk9J2onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9uc1wiPiB7eyB6IH19IDoge3sgaiB9fSA7IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19pdGVtX2NvbnRlbnRcIiBAdGFwPSd0aGlzX3Nob3dfc2t1X3NwZWMoaSxrKScgdi1pZj1cImkuc2hvd19za3Vfc3BlY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfYWxsX2l0ZW1zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWl0ZW1zXCIgdi1mb3I9XCIoeixqKSBpbiBpLnNrdV9zcGVjXCIgOmtleT0naic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zXCI+IHt7IHogfX0gOiB7eyBqIH19IDsgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlLW51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1wcmljZVwiPjx0ZXh0Pu+/pTwvdGV4dD57e2kuc2t1X3ByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1udW1iZXJcIj54e3tpLnNrdV9udW1zfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LWZvci10aGUtb3JkZXIgXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktb3JkZXItY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCIgdG90YWwtcHJpY2Utb24tbGluZS1wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPuaAu+S7tyA8dGV4dD7vv6Uge3tpLnBheWFibGVfYW1vdW50fX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib24tbGluZS1wYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiaS5zdGF0dXM9PTB8fGkuc3RhdHVzPT0yfHxpLnN0YXR1cz09M3x8aS5zdGF0dXM9PTU/J3Nob3dfY29sb3InOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx05Zyo57q/5pSv5LuYIDx0ZXh0Pu+/pSB7e2kub25saW5lX3BheX19IDwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLWhvc3BpdGFsLXBheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50c1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJpLnN0YXR1cz09MHx8aS5zdGF0dXM9PTJ8fGkuc3RhdHVzPT0zfHxpLnN0YXR1cz09NT8nc2hvd19jb2xvcic6JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTkvJjmg6AgPHRleHQ+77+lIHt7IGkudG90YWxfZGlzY291bnQgfHwgMH19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1zaG93PVwiaS50b3RhbF9kaXNjb3VudD4wXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hc2sxLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG9zcGl0YWwtcGF5XCI+5Yiw6Zmi5YaN5LuYIDx0ZXh0Pu+/pSB7e2kub2ZmbGluZV9wYXl9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29wZS13aXRoXCI+5bqU5LuYIDx0ZXh0Pu+/pSB7e2kucmVsX3ByaWNlfX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g6LWg5ZOBIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktdG9wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcC1uYW1lXCI+6LWg6YCB5L+h5oGvPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJteS1jb21wbGltZW50YXJ5XCIgQHRhcD1cIm15X2NhcmQoKVwiPuaIkeeahOi1oOWTgSA+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21wbGltZW50YXJ5LWhpbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdOa4qemmqOaPkOekuu+8muaJgOaciei1oOWTgeWwhuS7peWNoeWIuOeahOW9ouW8j+WPkeaUvuWIsOi0puaIt+S4reOAguiLpeWPkeeUn+aVtOWNlemAgOasvu+8jOaIluaYr+mDqOWIhumAgOasvu+8jFxyXG5cdFx0XHRcdFx0XHRcdFx05oiR6Zmi5pyJ5p2D5pS25Zue55u45YWz6LWg5ZOB77yM5bm25qC55o2u6YCA5qy+L+mAgOWNleWQjueahOaDheWGtemHjeaWsOiuoeeul+i1oOWTgeS/oeaBr1xyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1jb21wbGltZW50YXJ5XCIgdi1pZj1cIm9yZGVyX2luZm8uZ2l2aW5nX2luZm8ubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeS1pdGVtXCIgdi1mb3I9XCIoaXRlbSxrKSBpbiBvcmRlcl9pbmZvLmdpdmluZ19pbmZvXCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tcGxpbWVudGFyeS1uYW1lXCI+IHt7IGl0ZW0uY2F0ZWdvcnkgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbXBsaW1lbnRhcnktY29udGVudFwiPiB7eyBpdGVtLnJ1bGVfbmFtZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5LyY5oOg5L+h5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1kaXNjb3VudC1mdWxsLXJlZHVjdGlvblwiIHYtaWY9XCJvcmRlcl9pbmZvLmRpc2NvdW50X2Rlc2NyaXB0aW9uLmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtY29udGVudFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG9yZGVyX2luZm8uZGlzY291bnRfZGVzY3JpcHRpb25cIiA6a2V5PSdpbmRleCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbmFtZVwiPiB7eyBpdGVtLmNhdGVnb3J5IH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbWVzc2FnZVwiPiB7e2l0ZW0ucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtcHJpY2VcIj4t77+lIHt7IGl0ZW0uc2FsZV9wcmljZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5LyY5oOg5ZCI6K6hIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtZGlzY291bnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsLWRpc2NvdW50cy1uYW1lXCI+5LyY5oOg5ZCI6K6hPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtdG90YWwtZGlzY291bnRzXCI+Le+/pSB7eyBvcmRlcl9pbmZvLnRvdGFsX2Rpc2NvdW50IH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDllYblk4Hku7fmoLzkv6Hmga8gLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLXByaWNlLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lXCI+IOWVhuWTgeaAu+S7tyA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW1lc3NhZ2VcIj4g77+lIHt7IG9yZGVyX2luZm8ucGF5YWJsZV9hbW91bnQgfHwgMCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZS1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWVcIj4g5LyY5oOg5ZCI6K6hXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSB2LXNob3c9XCJvcmRlcl9pbmZvLnRvdGFsX2Rpc2NvdW50PjBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FzazEucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbWVzc2FnZVwiPiDvv6Uge3sgb3JkZXJfaW5mby50b3RhbF9kaXNjb3VudCB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZVwiPiDpgq7lr4Tov5DotLkgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlXCI+IO+/pSB7eyBvcmRlcl9pbmZvLnJlYWxfZnJlaWdodCB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbmFtZVwiPiDlrp7pmYXlupTku5ggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1tZXNzYWdlXCI+IO+/pSB7eyBvcmRlcl9pbmZvLnJlbF9wcmljZSB8fCAwIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lLW1lc3NhZ2UgXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUgY29sb3JcIj4g5Zyo57q/5pSv5LuYIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2UtbWVzc2FnZSBjb2xvclwiPiDvv6Uge3sgb3JkZXJfaW5mby5vbmxpbmVfcGF5IHx8IDAgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW5hbWUtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcmljZS1uYW1lIGNvbG9yXCI+IOWIsOmZouWGjeS7mCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlLW1lc3NhZ2UgY29sb3JcIj4g77+lIHt7IG9yZGVyX2luZm8ub2ZmbGluZV9wYXkgfHwgMCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Za16LGGIC0tPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwicmV0dXJuLW1ldy1iZWFuXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1pbWFnZXMtbWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1pbWFnZXNcIj48aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9jYXJ0QmcucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXctYmVhbi1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmV0dXJuLW51bWJlclwiPui/lOWWteixhjEwMDDkuKo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmV0dXJuLWhpbnRcIj7otK3nianov5TllrXosYYs5Za16LGG5Y+v5oq1546wPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15LW1ldy1uZWFuXCI+5oiR55qE5Za16LGGID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWNleWPtyAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1pbmZvcm1hdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3JkZXItc2VyaWFsLW51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+6K6i5Y2V57yW5Y+3Ojwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VyaWFsLW51bWJlclwiPiB7eyBvcmRlcl9pbmZvLm9yZGVyX25vIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29weVwiIEB0YXA9J2NvcHlfb3JkZXJfbm8ob3JkZXJfaW5mby5vcmRlcl9ubyknPuWkjeWItjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci10aW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7kuIvljZXml7bpl7Q6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci10aW1lLWNvbnRlbnRcIj4ge3sgb3JkZXJfaW5mby5jcmVhdGVfdGltZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLW5hbWVcIj7mlK/ku5jnsbvlnos6PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktbGFiZWwtY29udGVudFwiPumihOe6pumHkeaUr+S7mC/lhajmrL7ku5g8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXdheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+5pSv5LuY5pa55byPOjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXdheS1jb250ZW50XCIgdi1pZj1cIm9yZGVyX2luZm8ucGF5X2RyaXZlcj09J3dlY2hhdCdcIj7lvq7kv6HmlK/ku5g8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS13YXktY29udGVudFwiIHYtZWxzZT7mlK/ku5jlrp3mlK/ku5g8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g54yc5L2g5Zac5qyiIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImd1ZXNzLXdoYXQteW91LWxpa2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlbGF0ZWQtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz4g54yc5L2g5Zac5qyiXHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3ViamVjdC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Z29vZHNTaG93IDpib3JkZXJSYWRpdXM9MjQgOnJlcXVlc3RVcmw9J3JlcXVlc3RVcmwnIDp3aWR0aD0zNTAgOnBvcmR1Y3RMaXN0PSdwcm9kdWN0TGlzdHMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9nb29kc1Nob3c+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NhcnRCZy5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1oaW50XCI+5pys5Za15Lmf5piv5pyJ5bqV57q/55qEfjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PCEtLSDlupXpg6jmjInpkq4gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImltbW9iaWxpemF0aW9uLWJ1dHRvblwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvbl9hbGxcIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTBcIiBzaXplPVwibWluaVwiIEB0YXA9XCJjYW5jZWxfb3JkZXIob3JkZXJfaW5mby5pZClcIj5cclxuXHRcdFx0XHRcdOWPlua2iOiuouWNlVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJcIiB0eXBlPVwiZGVmYXVsdFwiIHNpemU9XCJtaW5pXCIgQHRhcD1cImNvbnRhY3QoKVwiPuiBlOezu+WuouacjTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJcIiB0eXBlPVwiZGVmYXVsdFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MFwiIHNpemU9XCJtaW5pXCI+56uL5Y2z5pSv5LuYPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT00fHxvcmRlcl9pbmZvLnN0YXR1cz09Nnx8b3JkZXJfaW5mby5zdGF0dXM9PTd8fG9yZGVyX2luZm8uc3RhdHVzPT04XCJcclxuXHRcdFx0XHQgc2l6ZT1cIm1pbmlcIiBAdGFwPVwiY2FuY2VsX2RldGFpbChvcmRlcl9pbmZvLmlkKVwiPlxyXG5cdFx0XHRcdFx06YCA5qy+5piO57uGXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgdi1pZj1cIm9yZGVyX2luZm8uc3RhdHVzPT0yXCIgc2l6ZT1cIm1pbmlcIj7nlLPor7fpgIDmrL48L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTJcIiBzaXplPVwibWluaVwiPueri+WNs+mihOe6pjwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJcIiB0eXBlPVwiZGVmYXVsdFwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09MlwiIHNpemU9XCJtaW5pXCI+5qC46ZSA5L2/55SoPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIlwiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiB2LWlmPVwib3JkZXJfaW5mby5zdGF0dXM9PTVcIiBAdGFwPVwid3JpdGVfY29udGVudCgnZGlhcnknKVwiID7lhpnml6XorrA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiXCIgdHlwZT1cImRlZmF1bHRcIiBzaXplPVwibWluaVwiIHYtaWY9XCJvcmRlcl9pbmZvLnN0YXR1cz09NVwiIEB0YXA9XCJ3cml0ZV9jb250ZW50KCdjb21tZW50JylcIj7lhpnor4Tku7c8L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDlm57liLDpobbpg6ggLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcC1idXR0b25cIiBAY2xpY2s9XCJUb1RvcFwiIHYtaWY9XCJzaG93VG9wXCI+IFRPUCA8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZ29vZHNTaG93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dvb2RzU2hvdy52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGdvb2RzU2hvd1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVudVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1lbnVUb3A6IDAsXHJcblx0XHRcdFx0bWVudUhlaWdodDogMCxcclxuXHRcdFx0XHRtZW51TGVmdDogMCxcclxuXHRcdFx0XHRtZW51Qm90dG9tOiAwLFxyXG5cdFx0XHRcdGhlaWdodDogMCxcclxuXHRcdFx0XHRiYXJOYW1lOiAncGFydGljdWxhcnNQYWdlJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdGJhY2tJbWFnZTogJy9zdGF0aWMvaW1hZ2VzL2JhY2syLnBuZycsXHJcblx0XHRcdFx0dGl0bGU6ICforqLljZXor6bmg4UnLFxyXG5cdFx0XHRcdHN0YXRlOiAn5bey5LuY5qy+JywgLy/mmK/lkKbku5jmrL5cclxuXHRcdFx0XHRyZXF1ZXN0VXJsOiAnJyxcclxuXHRcdFx0XHRvcmRlcl9pbmZvOiB7fSxcclxuXHRcdFx0XHRpc19wb3N0X2xpc3Q6IFtdLCAvL+mCruWvhOWVhuWTgVxyXG5cdFx0XHRcdHNjYW5fb25lX2xpc3Q6IFtdLCAvL+aUtui0ueWupOS9v+eUqOWVhuWTgVxyXG5cdFx0XHRcdHNjYW5fdHdvX2xpc3Q6IFtdLCAvL+S8muWRmOS4reW/g+S9v+eUqOWVhuWTgVx0XHJcblx0XHRcdFx0c2hvd1RvcDogZmFsc2UsXHJcblx0XHRcdFx0b2Zmc2V0OiAwLFxyXG5cdFx0XHRcdG92ZXJfdGltZTogJycsXHJcblx0XHRcdFx0cHJvZHVjdExpc3RzOiBbXSxcclxuXHRcdFx0XHRleHBpcmF0aW9uX3RpbWU6IDAsIC8v6L+H5pyf5pe26Ze0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWNoQm90dG9tOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR0aGF0Lm9mZnNldCArPSAxO1xyXG5cdFx0XHR0aGF0LmdldExpa2UoKVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZDogZnVuY3Rpb24ob3B0aW9uKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHR0aGlzLnJlcXVlc3QgPSB0aGlzLiRyZXF1ZXN0XHJcblx0XHRcdHRoYXQucmVxdWVzdFVybCA9IHRoYXQucmVxdWVzdC5nbG9iYWxEYXRhLnJlcXVlc3RVcmxcclxuXHRcdFx0aWYgKG9wdGlvbi5pbmZvKSB7XHJcblx0XHRcdFx0dGhhdC5nZXRfb3JkZXJfZGVyYWlsKG9wdGlvbi5pbmZvKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoYXQuZ2V0X29yZGVyX2RlcmFpbCgyMzE0OSkgLy8yMzE3MFxyXG5cdFx0XHR9XHJcblx0XHRcdHRoYXQuZ2V0TGlrZSgpXHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR0aGF0LmhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbkhlaWdodDtcclxuXHRcdFx0Ly8g5Yik5a6a6L+Q6KGM5bmz5Y+wXHJcblx0XHRcdGxldCBwbGF0Zm9ybSA9ICcnXHJcblx0XHRcdHN3aXRjaCAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0pIHtcclxuXHRcdFx0XHRjYXNlICdhbmRyb2lkJzpcclxuXHRcdFx0XHRcdHBsYXRmb3JtID0gJ2FuZHJvaWQnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdpb3MnOlxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnaW9zJ1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHBsYXRmb3JtID0gJ2FwcGxldCdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwbGF0Zm9ybSA9PSAnYXBwbGV0Jykge1xyXG5cdFx0XHRcdC8vIOiOt+WPluWxj+W5lemrmOW6plxyXG5cdFx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRsZXQgbWVudSA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVdpZHRoID0gbWVudS53aWR0aFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSBtZW51LnRvcFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVIZWlnaHQgPSBtZW51LmhlaWdodFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gbWVudS5sZWZ0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IG1lbnUuYm90dG9tXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSA1MFxyXG5cdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IDMyXHJcblx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IDI3OFxyXG5cdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IDgyXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOiOt+WPluiuouWNleivpuaDhVxyXG5cdFx0XHRnZXRfb3JkZXJfZGVyYWlsOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZ2V0X29yZGVyX2luZm8nLFxyXG5cdFx0XHRcdFx0aWQ6IGlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwib3JkZXJcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdC8vIOiuouWNleWVhuWTgeS/oeaBr1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEub3JkZXJfZ29vZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDmmL7npLrnmoTop4TmoLxcclxuXHRcdFx0XHRcdFx0XHRkYXRhLm9yZGVyX2dvb2RzW2ldLnNob3dfc2t1X3NwZWMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhLm9yZGVyX2luZm8uZGlzdHJpYnV0aW9uID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuaXNfcG9zdF9saXN0LnB1c2goZGF0YS5vcmRlcl9nb29kc1tpXSlcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEub3JkZXJfZ29vZHNbaV0uc2Nhbl9kZXBhcnRtZW50ID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuc2Nhbl9vbmVfbGlzdC5wdXNoKGRhdGEub3JkZXJfZ29vZHNbaV0pXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLm9yZGVyX2dvb2RzW2ldLnNjYW5fZGVwYXJ0bWVudCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnNjYW5fdHdvX2xpc3QucHVzaChkYXRhLm9yZGVyX2dvb2RzW2ldKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyDmnIDov5HnmoTov4fmnJ/ml7bpl7RcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5vcmRlcl9nb29kc1tpXS5vdmVyZHVlX3RpbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhLm9yZGVyX2dvb2RzW2ldLm92ZXJkdWVfdGltZSA+IHRoYXQuZXhwaXJhdGlvbl90aW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZXhwaXJhdGlvbl90aW1lID0gZGF0YS5vcmRlcl9nb29kc1tpXS5vdmVyZHVlX3RpbWVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8g5pe26Ze0XHJcblx0XHRcdFx0XHRcdHRoYXQub3Zlcl90aW1lID0gdGhhdC5zZXRUaW1lcihkYXRhLm9yZGVyX2luZm8uY3JlYXRlX3RpbWUgKyBkYXRhLm9yZGVyX2luZm8uY2FuY2VsX3RpbWUpXHJcblx0XHRcdFx0XHRcdGRhdGEub3JkZXJfaW5mby5jcmVhdGVfdGltZSA9IHRoYXQuc2V0VGltZXIoZGF0YS5vcmRlcl9pbmZvLmNyZWF0ZV90aW1lKVxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5leHBpcmF0aW9uX3RpbWUgPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5leHBpcmF0aW9uX3RpbWUgPSB0aGF0LnNldFRpbWVyKHRoYXQuZXhwaXJhdGlvbl90aW1lKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIOiuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSBkYXRhLm9yZGVyX2luZm9cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnq4vljbPmlK/ku5hcclxuXHRcdFx0cGxlYXNlX3BheTogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YV9pbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICd3ZWNoYXR3YXAnLFxyXG5cdFx0XHRcdFx0b3JkZXJfaWQ6IGlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwicGF5XCIsIGRhdGFfaW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YS5td2ViX3VybClcclxuXHRcdFx0XHRcdFx0bGV0IHVybCA9IGRhdGEubXdlYl91cmxcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aUr+S7mOS4rS4uLidcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8vIGFwcOaUr+S7mFxyXG5cdFx0XHRcdFx0XHRjb25zdCB3ZWJ2aWV3ID0gcGx1cy53ZWJ2aWV3LmNyZWF0ZShcIlwiLFwiY3VzdG9tLXdlYnZpZXdcIilcclxuXHRcdFx0XHRcdFx0d2Vidmlldy5sb2FkVVJMKHRoYXQucGF5X3VybCx7XCJSZWZlcmVyXCI6dGhhdC5yZXF1ZXN0VXJsfSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrop4TmoLxcclxuXHRcdFx0dGhpc19zaG93X3NrdV9zcGVjOiBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmICh0aGF0LmlzX3Bvc3RfbGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhhdC5pc19wb3N0X2xpc3QpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuaXNfcG9zdF9saXN0W2tleV0uaWQgPT0gaXRlbS5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNfcG9zdF9saXN0W2tleV0uc2hvd19za3Vfc3BlYyA9ICF0aGF0LmlzX3Bvc3RfbGlzdFtrZXldLnNob3dfc2t1X3NwZWNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhhdC5zY2FuX29uZV9saXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBpbiB0aGF0LnNjYW5fb25lX2xpc3QpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuc2Nhbl9vbmVfbGlzdFtrZXldLmlkID09IGl0ZW0uaWQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNjYW5fb25lX2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjID0gIXRoYXQuc2Nhbl9vbmVfbGlzdFtrZXldLnNob3dfc2t1X3NwZWNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhhdC5zY2FuX3R3b19saXN0KSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LnNjYW5fdHdvX2xpc3Rba2V5XS5pZCA9PSBpdGVtLmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5zY2FuX3R3b19saXN0W2tleV0uc2hvd19za3Vfc3BlYyA9ICF0aGF0LnNjYW5fdHdvX2xpc3Rba2V5XS5zaG93X3NrdV9zcGVjXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi9rOaNouaXtumXtOagvOW8j1xyXG5cdFx0XHRzZXRUaW1lcjogZnVuY3Rpb24oZGF0ZSkge1xyXG5cdFx0XHRcdGxldCBob3VzZSA9IDBcclxuXHRcdFx0XHRsZXQgc2Vjb25kID0gMFxyXG5cdFx0XHRcdGxldCBtaW51dGUgPSAwXHJcblx0XHRcdFx0Ly8gaG91c2UgPSBwYXJzZUludCgoZGF0ZSkgLyAxMDAwIC8gNjAgLyA2MCAlIDI0KVxyXG5cdFx0XHRcdHNlY29uZCA9IHBhcnNlSW50KChkYXRlKSAvIDYwICUgNjApXHJcblx0XHRcdFx0bWludXRlID0gcGFyc2VJbnQoKGRhdGUpICUgNjApXHJcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKVxyXG5cdFx0XHRcdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuXHRcdFx0XHRpZiAobW9udGggPCAxMCkge1xyXG5cdFx0XHRcdFx0bW9udGggPSBcIjBcIiArIG1vbnRoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG5cdFx0XHRcdGlmIChkYXkgPCAxMCkge1xyXG5cdFx0XHRcdFx0ZGF5ID0gXCIwXCIgKyBkYXlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aG91c2UgPSBkYXRlLmdldEhvdXJzKClcclxuXHRcdFx0XHRpZiAoaG91c2UgPCAxMCkge1xyXG5cdFx0XHRcdFx0aG91c2UgPSBcIjBcIiArIGhvdXNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzZWNvbmQgPCAxMCkge1xyXG5cdFx0XHRcdFx0c2Vjb25kID0gXCIwXCIgKyBzZWNvbmRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG1pbnV0ZSA8IDEwKSB7XHJcblx0XHRcdFx0XHRtaW51dGUgPSBcIjBcIiArIG1pbnV0ZVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHRpbWUgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBtb250aCArICctJyArIGRheSArIFwiICBcIiArICcgJyArIGhvdXNlICsgJzonICsgc2Vjb25kICsgJzonICsgbWludXRlXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGltZSlcclxuXHRcdFx0XHRyZXR1cm4gdGltZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkuLrkvaDmjqjojZBcclxuXHRcdFx0Z2V0TGlrZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICd1c2VycmVjb21tZW5kZWRnb29kc3NwdWxpc3QnLFxyXG5cdFx0XHRcdFx0dHlwZTogJzUnLFxyXG5cdFx0XHRcdFx0b2Zmc2V0OiB0aGF0Lm9mZnNldFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5wcm9kdWN0TGlzdHMgPSB0aGF0LnByb2R1Y3RMaXN0cy5jb25jYXQoZGF0YSlcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5rKh5pyJ5pu05aSa5LqGJyxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5rKh5pyJ5pu05aSa5LqGJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDov5Tlm57kuIrkuIDnuqdcclxuXHRcdFx0Z29CYWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWVhuWTgeivpuaDhVxyXG5cdFx0XHRnb29kc19kZXRhaWw6ZnVuY3Rpb24oaWQsZW5jcnlwdGVkX2lkKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfZGV0YWlsP3NrdV9pZD0ke2lkfSZlbmNyeXB0ZWRfaWQ9JHtlbmNyeXB0ZWRfaWR9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmiJHnmoTotaDlk4FcclxuXHRcdFx0bXlfY2FyZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L215X2NhcmRgLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWkjeWItuWNleWPt1xyXG5cdFx0XHRjb3B5X29yZGVyX25vOiBmdW5jdGlvbihpbmZvKSB7XHJcblx0XHRcdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xyXG5cdFx0XHRcdFx0ZGF0YTogaW5mbyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3suWkjeWItuWIsOWJquWIh+advydcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L+U5Zue6aG26YOoXHJcblx0XHRcdFRvVG9wOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0XHRcdHNjcm9sbFRvcDogMCxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiA2MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnlLPor7fpgIDmrL5cclxuXHRcdFx0Z29Ub1JlZnVuZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L215X29yZGVyX3JlZnVuZGAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCA5qy+6K+m5oOFXHJcblx0XHRcdGNhbmNlbF9kZXRhaWw6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L215X29yZGVyX3JlZnVuZF9wcm9ncmVzcz9pZD0ke2lkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2FuY2VsX29yZGVyOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IFwi5o+Q56S6XCIsXHJcblx0XHRcdFx0XHRjb250ZW50OiAn5oKo5q2j5Zyo5Y+W5raI6K6i5Y2VLOehruiupOWPlua2iOiuouWNleWQl++8nycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGludGVyZmFjZUlkOidjYW5jZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ6aWRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJvcmRlclwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon5Y+W5raI6K6i5Y2V5oiQ5YqfISdcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6IGU57O75a6i5pyNXHJcblx0XHRcdGNvbnRhY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9jb25zdWx0YXRpb24vY29uc3VsdGF0aW9uYCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlhpnml6XorrDlkozor4Tku7dcclxuXHRcdFx0d3JpdGVfY29udGVudDogZnVuY3Rpb24oaW5mbykge1xyXG5cdFx0XHRcdC8vIOWGmeaXpeiusFxyXG5cdFx0XHRcdGlmIChpbmZvID09ICdkaWFyeScpIHtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2RpYXJ5L2RpYXJ5X3dyaXRlYCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmZvID09ICdjb21tZW50Jykge1xyXG5cdFx0XHRcdFx0Ly8g5YaZ6K+E5Lu3XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9teS93cml0ZV9jb21tZW50YCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdC8vIOaYvuekuuWbnuWIsOmhtumDqOaMiemSrlxyXG5cdFx0b25QYWdlU2Nyb2xsOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmIChlLnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0XHR0aGlzLnNob3dUb3AgPSB0cnVlXHJcblx0XHRcdH0gZWxzZSBpZiAoZS5zY3JvbGxUb3AgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvcCA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuc2hvd19jb2xvcntcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHQubXlfb3JkZXJfZGV0YWlsIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQudG9wLW5hdi1tZXNzYWdlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDlkZWcsICNmMjQ3ODggMCUsICNmZjY5YTEgMTAwJSk7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC5teS10b3AtYmFyIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00OWRlZywgI2YyNDc4OCAwJSwgI2ZmNjlhMSAxMDAlKTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiAxMDA7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQuYmFjay10aXRsZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzhycHg7XHJcblx0fVxyXG5cclxuXHQuYmFjayB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5iYWNrIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzNnJweDtcclxuXHRcdGhlaWdodDogMzZycHg7XHJcblx0fVxyXG5cclxuXHQuYmFjay10aXRsZSAudGl0bGUge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdG1hcmdpbi1sZWZ0OiA4MHJweDtcclxuXHR9XHJcblxyXG5cdC50b3AtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjEwcnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIxMHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLW1lc3NhZ2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQud2FpdC1wYXkge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLXBheS1wcmljZXMge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5ub3dfcGF5IHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDI0MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQubm93X3BheTo6YWZ0ZXIge1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHJcblx0LnJlc2lkdWUtdGltZSB7XHJcblx0XHRvcGFjaXR5OiAwLjc7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdH1cclxuXHJcblx0LnVzZXItYWxsLW1lc3NhZ2Uge1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IC0xNTBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1tZXNzYWdlLWNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAzNHJweCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLW5hbWUtcGhvbmUtZGVmYXVsdC1hZGRyZXNzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItcGhvbmUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0LWFkZHJlc3Mge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0IHtcclxuXHRcdHdpZHRoOiA2NnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuZGVmYXVsdC1hZGRyZXNzLWNvbnRlbnQge1xyXG5cdFx0d2lkdGg6IDY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg4MzRmYSAwJSwgI2JjNjZmZiAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdH1cclxuXHJcblx0LnNoaXBwaW5nLWFkZHJlc3Mge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMzQzNDM0O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0LmFkZHJlc3MtY29udGVudCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjJycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdFx0d2lkdGg6IDc2JTtcclxuXHR9XHJcblxyXG5cdC5hbGwtb3JkZXItbWVzc2FnZSB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTcwcnB4O1xyXG5cdH1cclxuXHJcblx0LmFjY291bnQtcGFpZC1jb2RlIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQuYWNjb3VudC1wYWlkLWNvZGUtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwIDMwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmFjY291bnQtcGFpZC1jb2RlLW51bWJlciB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5hY2NvdW50LXBhaWQtY29kZS1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5hY2NvdW50LXBhaWQtY29kZS1pbWFnZSBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzIwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyNXJweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1jb250ZW50IHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaXRlbXMge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwO1xyXG5cdH1cclxuXHJcblx0LnNlcnZpY2UtY29uZGl0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIycnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQubGluZS1zZXJ2aWNlLW5hbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHR3aWR0aDogNnJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5zZXJ2aWNlLW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHJcblx0LmFwcG9pbnRtZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1wb3JkdWN0LWNvbnRlbnQge1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1wb3JkdWN0LWxpbmUge1xyXG5cdFx0cGFkZGluZzogMCAwIDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbGluZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0aGVpZ2h0OiAycnB4O1xyXG5cdH1cclxuXHJcblx0LmZhaWx1cmUtdGltZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQudGltZS1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5oaW50LWltYWdlIHtcclxuXHRcdHdpZHRoOiAxNjVycHg7XHJcblx0XHRoZWlnaHQ6IDEzMHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTEwMHJweDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdH1cclxuXHJcblx0LmhpbnQtaW1hZ2UgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDE2NXJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmhpbnQtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQub3JkZXItcG9yZHVjdC1pbWFnZXMtbmFtZSB7XHJcblx0XHRib3JkZXItYm90dG9tOiAycnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMzBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaW1hZ2VzIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWltYWdlcyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1yaWdodCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDAgMTBycHggMjBycHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcblx0fVxyXG5cclxuXHQuc2t1X3NwZWNfY29udGVudCB7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHdpZHRoOiA3NiU7XHJcblx0XHRwYWRkaW5nOiAwIDE2cnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMjBycHg7XHJcblx0XHR0b3A6IDc2cnB4O1xyXG5cdH1cclxuXHJcblx0Lml0ZW1fY29udGVudCB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC5za3Vfc3BlY19jb250ZW50IGltYWdlLFxyXG5cdC5zaG93X2l0ZW1fY29udGVudCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnNob3dfaXRlbV9jb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDIwcnB4O1xyXG5cdFx0dG9wOiA3NnJweDtcclxuXHRcdHdpZHRoOiA3NiU7XHJcblx0XHRwYWRkaW5nOiA2cnB4IDE2cnB4IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0fVxyXG5cclxuXHQuc2hvd19pdGVtX2NvbnRlbnQgaW1hZ2Uge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlLW51bWJlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjODA4MDgwO1xyXG5cdH1cclxuXHRcclxuXHJcblx0LnBvcmR1Y3QtcHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LW51bWJlciB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnBheS1vcmRlci1jb250ZW50IHtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI0YwRjBGMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI0YwRjBGMDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBheS1vcmRlci1jb250ZW50IHRleHQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRvdGFsLXByaWNlLW9uLWxpbmUtcGF5LFxyXG5cdC5kaXNjb3VudHMtaG9zcGl0YWwtcGF5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50cyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5vbi1saW5lLXBheSxcclxuXHQuaG9zcGl0YWwtcGF5IHtcclxuXHRcdG1pbi13aWR0aDogNDIlO1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50cyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjZycHg7XHJcblx0XHRoZWlnaHQ6IDI2cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcGUtd2l0aCB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmNvbXBsaW1lbnRhcnkge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS10b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcblxyXG5cdC50b3AtbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5teS1jb21wbGltZW50YXJ5IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5jb21wbGltZW50YXJ5LWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMycnB4O1xyXG5cdFx0cGFkZGluZzogMTVycHggMCAzMnJweDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5hbGwtY29tcGxpbWVudGFyeSB7XHJcblx0XHRwYWRkaW5nLXRvcDogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1pdGVtOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5jb21wbGltZW50YXJ5LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMThycHg7XHJcblx0fVxyXG5cclxuXHQuY29tcGxpbWVudGFyeS1jb250ZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHJcblx0fVxyXG5cclxuXHQudGlja2V0LWRpc2NvdW50LWZ1bGwtcmVkdWN0aW9uIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtbmFtZS1tZXNzYWdlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW5hbWUge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW1lc3NhZ2Uge1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1wcmljZSB7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQudG90YWwtZGlzY291bnRzIHtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHRcdHBhZGRpbmctdG9wOiAzMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRvdGFsLWRpc2NvdW50cy1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblxyXG5cdC5hbGwtdG90YWwtZGlzY291bnRzIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5hbGwtcHJpY2UtbWVzc2FnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyNHJweDtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnByaWNlLW5hbWUtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucHJpY2UtbmFtZS1tZXNzYWdlOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5wcmljZS1uYW1lIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnByaWNlLW5hbWUgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnJweDtcclxuXHR9XHJcblxyXG5cdC5wcmljZS1tZXNzYWdlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblxyXG5cdC5yZXR1cm4tbWV3LWJlYW4ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogMzNycHggNDBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1pbWFnZXMtbWVzc2FnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1tZXNzYWdlIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5tZXctYmVhbi1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDkwcnB4O1xyXG5cdFx0aGVpZ2h0OiA3MHJweDtcclxuXHR9XHJcblxyXG5cdC5yZXR1cm4tbnVtYmVyIHtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHJcblx0LnJldHVybi1oaW50IHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0fVxyXG5cclxuXHQubXktbWV3LW5lYW4ge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaW5mb3JtYXRpb24ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQub3JkZXItc2VyaWFsLW51bWJlcixcclxuXHQub3JkZXItdGltZSxcclxuXHQucGF5LWxhYmVsLFxyXG5cdC5wYXktd2F5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQucGF5LXdheSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlLW5hbWUge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LmNvcHkge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW4tbGVmdDogMjRycHg7XHJcblx0fVxyXG5cclxuXHQvKiDnjJzkvaDllpzmrKIgKi9cclxuXHQuZ3Vlc3Mtd2hhdC15b3UtbGlrZSB7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5yZWxhdGVkLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbS1pbWFnZXMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luLXRvcDogNzBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWltYWdlcyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzY2cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNjBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0bWFyZ2luLXRvcDogNDhycHg7XHJcblx0fVxyXG5cclxuXHQuaW1tb2JpbGl6YXRpb24tYnV0dG9uIHtcclxuXHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0RBREFEQTtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCBidXR0b24ge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmJnX2J0biB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uX2FsbCBidXR0b246OmFmdGVyIHtcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblxyXG5cdC50b3AtYnV0dG9uIHtcclxuXHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2NXJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3gtc2hhZG93OiAwcnB4IDhycHggMTZycHggMHJweCByZ2JhKDI1MCwgNTMsIDExOCwgMC4zMik7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogNDBycHg7XHJcblx0XHRib3R0b206IDEzMHB4O1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC8qIOaWsOWGmeeahOagt+W8jyAqL1xyXG5cdC5yZWZ1bmRlZCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnJlZnVuZGVkIGltYWdlIHtcclxuXHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnJlZnVuZGVkX2hpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmNhbmNlbC1vcmRlcl90b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMTBycHg7XHJcblx0XHRwYWRkaW5nLXRvcDogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY2FuY2VsLW9yZGVyX3RvcCBpbWFnZSB7XHJcblx0XHR3aWR0aDogNjRycHg7XHJcblx0XHRoZWlnaHQ6IDY0cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jYW5jZWxfaGludCB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC51c2VyX2luZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRwYWRkaW5nOiAzNHJweCAwO1xyXG5cdH1cclxuXHJcblx0LmNvbG9yIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfb3JkZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA4ZGUxZWViJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X29yZGVyX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGRlMWVlYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDY1NTYzNjI0NjRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9