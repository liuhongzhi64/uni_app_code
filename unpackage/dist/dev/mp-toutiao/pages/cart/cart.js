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
/* 11 */,
/* 12 */
/*!******************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fcart%2Fcart"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _cart = _interopRequireDefault(__webpack_require__(/*! ./pages/cart/cart.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_cart.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 13 */
/*!***********************************************!*\
  !*** D:/Code/code/uniapp/pages/cart/cart.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.vue?vue&type=template&id=0f00adf4&scoped=true& */ 14);
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
/* 14 */
/*!******************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/cart/cart.vue?vue&type=template&id=0f00adf4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cart.vue?vue&type=template&id=0f00adf4&scoped=true& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cart_vue_vue_type_template_id_0f00adf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
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
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var goodsShow = function goodsShow() {__webpack_require__.e(/*! require.ensure | components/goodsShow */ "components/goodsShow").then((function () {return resolve(__webpack_require__(/*! ../../components/goodsShow.vue */ 469));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var ticket = function ticket() {__webpack_require__.e(/*! require.ensure | components/ticket */ "components/ticket").then((function () {return resolve(__webpack_require__(/*! ../../components/ticket.vue */ 476));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =























































































































































































































































































































































































































{
  components: {
    goodsShow: goodsShow,
    ticket: ticket },

  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      barName: 'back', //导航条名称
      topBackgroundColor: '#222222',
      color: '#FFFFFF',
      backImage: '/static/images/return.png',
      title: '购物车',
      height: 0,
      productLists: [],
      productNameList: [{
        name: '全部',
        number: 0 },

      {
        name: '降价',
        number: 0 },

      {
        name: '医美',
        number: 0 },

      {
        name: '护肤品',
        number: 0 }],


      btnnum: 0,
      contentList: {},
      allchecked: false, //全选
      isShowDiscount: false, //显示优惠或卡券
      requestUrl: '',
      offset: 0,
      sku_list: [],
      specialList: {}, //广告
      get_count: 0, //可领取卡券数量
      cardList: [], //卡券列表
      act_info: {},
      uses_cardList: [],
      this_show_goods_spec: false, //显示修改商品规格
      goodsContentList: [],
      spec: [],
      pay_type: 1, //支付方式  0预约金 1 全款 2 全选
      class_type: 0, //领取方式 0到院 1邮寄
      setNewGoodsNumber: 1, //修改新的商品数量
      encrypted_id: '',
      sku_id: 0,
      cart_id: 160,
      order_info: {
        sale_info: [] }
      //订单的信息
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
    that.getLike();
    that.getCard();
    that.advertising();
    that.getUserCart();
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
      that.menuWidth = 90;
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
    getUserCart: function getUserCart() {
      var that = this;
      var dataInfo = {
        interfaceId: 'getcart',
        type: that.btnnum };

      that.request.uniRequest("shoppingCart", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          var day = 0;
          var house = 0;
          var second = 0;
          var minute = 0;
          for (var i = 0; i < data.sku_list.length; i++) {
            for (var j = 0; j < data.sku_list[i].goods_list.length; j++) {
              data.sku_list[i].goods_list[j].is_show_state = false; //显示订单操作
              data.sku_list[i].all_checked = false; //是否全选当前分类
              data.sku_list[i].goods_list[j].checked = false; //是否选择
              if (data.sku_list[i].act_info) {
                data.sku_list[i].day = parseInt(data.sku_list[i].act_info.rest_time / 60 / 60 / 24 % 30);
                data.sku_list[i].house = parseInt(data.sku_list[i].act_info.rest_time / 60 / 60 % 24);
                data.sku_list[i].second = parseInt(data.sku_list[i].act_info.rest_time / 60 % 60);
                data.sku_list[i].minute = parseInt(data.sku_list[i].act_info.rest_time % 60);
                // console.log(data.sku_list[i])
              }
            }
          }
          that.contentList = data;
          that.sku_list = data.sku_list;
          for (var _i = 0; _i < that.productNameList.length; _i++) {
            that.productNameList[_i].number = data.type_count[_i];
          }

        } else {
          that.sku_list = [];
        }
      });
    },
    // 显示可操作订单数据
    setgoodsState: function setgoodsState(k, is) {
      var that = this;
      that.contentList.sku_list[k].goods_list[is].is_show_state = !that.contentList.sku_list[k].goods_list[is].is_show_state;
    },
    // 全选当前分类
    checked_class_all: function checked_class_all(k) {
      var that = this;
      var act_id = '';
      var change_card_id = [];
      var cart = {};
      var arr = [];
      that.contentList.sku_list[k].all_checked = !that.contentList.sku_list[k].all_checked;
      if (that.contentList.sku_list[k].all_checked) {//全选
        for (var i = 0; i < that.contentList.sku_list[k].goods_list.length; i++) {
          that.contentList.sku_list[k].goods_list[i].checked = true;
        }
      } else {//点击清空全选
        for (var _i2 = 0; _i2 < that.contentList.sku_list[k].goods_list.length; _i2++) {
          that.contentList.sku_list[k].goods_list[_i2].checked = false;
        }
      }
      for (var _i3 = 0; _i3 < that.contentList.sku_list.length; _i3++) {
        arr.push(that.contentList.sku_list[_i3].all_checked);
      }
      var flag = arr.every(function (item, index, arr) {
        return item === true;
      });
      if (flag) {
        that.allchecked = !that.allchecked;
      } else {
        that.allchecked = false;

      }
      that.get_user_cart();
    },
    // 选择
    changeCheck: function changeCheck(k, is) {
      var that = this;
      var arr = [];
      var all_arr = [];
      that.contentList.sku_list[k].goods_list[is].checked = !that.contentList.sku_list[k].goods_list[is].checked;
      for (var i = 0; i < that.contentList.sku_list[k].goods_list.length; i++) {
        arr.push(that.contentList.sku_list[k].goods_list[i].checked);
      }
      var flag = arr.every(function (item, index, arr) {
        return item === true;
      });
      // 如果当分类下面的订单都选择了,则当前分类的全选为true
      if (flag) {
        that.contentList.sku_list[k].all_checked = !that.contentList.sku_list[k].all_checked;
        if (that.contentList.sku_list[k].all_checked) {//当前订单为选择时判定所有的订单是否已经全选
          for (var _i4 = 0; _i4 < that.contentList.sku_list.length; _i4++) {
            all_arr.push(that.contentList.sku_list[_i4].all_checked);
          }
          var flags = all_arr.every(function (item, index, all_arr) {
            return item === true;
          });
          that.allchecked = flags;
        }
      } else {
        that.contentList.sku_list[k].all_checked = false;
        that.allchecked = false;
      }
      that.get_user_cart();
    },
    // 结算的全选
    change_all_cart: function change_all_cart() {
      var that = this;
      that.allchecked = !that.allchecked;
      if (that.allchecked) {
        for (var i = 0; i < that.contentList.sku_list.length; i++) {
          that.contentList.sku_list[i].all_checked = true;
          for (var j = 0; j < that.contentList.sku_list[i].goods_list.length; j++) {
            that.contentList.sku_list[i].goods_list[j].checked = true;
          }
        }
        that.get_user_cart();
      } else
      {
        for (var _i5 = 0; _i5 < that.contentList.sku_list.length; _i5++) {
          that.contentList.sku_list[_i5].all_checked = false;
          for (var _j = 0; _j < that.contentList.sku_list[_i5].goods_list.length; _j++) {
            that.contentList.sku_list[_i5].goods_list[_j].checked = false;
          }
        }
        that.order_info = {
          sale_info: [] };
        //订单的信息
      }

    },
    // 获取购物车价格
    get_user_cart: function get_user_cart() {
      var that = this;
      var change_cart = [];
      if (that.contentList.sku_list.length > 0) {
        for (var i = 0; i < that.contentList.sku_list.length; i++) {
          if (that.contentList.sku_list[i].all_checked) {//先判断是否有全选了的订单
            var act_id = '';
            var cart_id = [];
            if (that.contentList.sku_list[i].act_id) {
              act_id = that.contentList.sku_list[i].act_id;
            }
            var cart = {
              act_id: act_id,
              cart_id_list: that.contentList.sku_list[i].cart_id_list };

            change_cart.push(cart);
          } else {
            for (var j = 0; j < that.contentList.sku_list[i].goods_list.length; j++) {
              if (that.contentList.sku_list[i].goods_list[j].checked) {//判定选择了的订单
                var _act_id = '';
                var _cart_id = [];
                if (that.contentList.sku_list[i].act_id) {
                  _act_id = that.contentList.sku_list[i].act_id;
                }
                _cart_id.push(that.contentList.sku_list[i].goods_list[j].cart_id);
                var _cart = {
                  act_id: _act_id,
                  cart_id_list: _cart_id };

                change_cart.push(_cart);
              }
            }
          }
        }
      }
      var dataInfo = {
        interfaceId: 'calculate',
        cart: change_cart };

      that.request.uniRequest("shoppingCart", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          // console.log(data)
          // total_price:0,//总价
          // sale_price:0,//总计优惠
          // hd_discount: 0,//活动优惠2020.11.04
          // online_pay: 0,//在线支付
          // offline_pay: 0,//线下支付
          // off_sale: 0,//去掉优惠后应付2020.11.02
          // sale_info: []//优惠信息
          that.order_info = data;
        } else {
          that.order_info = {
            sale_info: [] };
          //订单的信息
        }
      });
      // console.log(change_cart)
    },
    // 去结算
    goToSettlement: function goToSettlement() {
      console.log('去结算');
    },
    // 修改商品规格
    showSetSpec: function showSetSpec(sku_id, encrypted_id, number, cart_id) {
      var that = this;
      that.encrypted_id = encrypted_id;
      that.sku_id = sku_id;
      that.cart_id = cart_id;
      that.setNewGoodsNumber = number;
      var dataInfo = {
        interfaceId: 'goodsspudetails',
        encrypted_id: encrypted_id,
        sku_id: sku_id };

      that.request.uniRequest("goods", dataInfo).then(function (res) {
        if (res.data.code == 1000) {
          var data = res.data.data;
          uni.setStorageSync("goodsDetail", data);
          that.goodsContentList = data;
          that.spec = that.assembleSpec(data.sku.user_spec, 1);
          that.pay_type = data.sku.pay_type;
          that.this_show_goods_spec = !that.this_show_goods_spec;
          that.uses_cardList = that.goodsContentList.sku.card_list;
        } else {
          that.request.showToast(res.data.message);
        }
      });
    },
    // 点击确定修改规格
    orderSet: function orderSet() {
      var that = this;
      var dataInfo = {
        interfaceId: 'changcart',
        type: 1,
        cart_id: that.cart_id,
        num: that.setNewGoodsNumber,
        sku_id: that.sku_id,
        is_post: that.class_type,
        buy_type: that.pay_type };

      that.request.uniRequest("shoppingCart", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          that.this_show_goods_spec = !that.this_show_goods_spec;
          that.getUserCart();
        }
      });
    },
    // 点击加减数字
    reduce: function reduce(index) {
      var that = this;
      that.setNewGoodsNumber += index;
      if (that.setNewGoodsNumber >= that.goodsContentList.sku.max_buy_limit) {
        var number = parseInt(that.goodsContentList.sku.max_buy_limit);
        that.setNewGoodsNumber = number;
      } else if (that.setNewGoodsNumber < that.goodsContentList.sku.min_buy_limit) {
        var _number = parseInt(that.goodsContentList.sku.min_buy_limit);
        that.setNewGoodsNumber = _number;
      }
    },
    // 输入想要的数量
    changeGoodsNumber: function changeGoodsNumber(event) {
      var that = this;
      var value = event.detail.value;
      that.setNewGoodsNumber = value;
      if (that.setNewGoodsNumber >= that.contentList.sku.max_buy_limit) {
        var number = parseInt(that.contentList.sku.max_buy_limit);
        that.setNewGoodsNumber = number;
      } else if (that.setNewGoodsNumber < that.contentList.sku.min_buy_limit) {
        var _number2 = parseInt(that.contentList.sku.min_buy_limit);
        that.setNewGoodsNumber = _number2;
      }
    },
    // 支付方式
    changePay: function changePay(index) {
      var that = this;
      that.pay_type = index;
    },
    changeClass: function changeClass(index) {
      var that = this;
      that.class_type = index;
    },
    changeSpec: function changeSpec(index, sindex) {
      var that = this;
      // console.log(index,sindex)
      if (that.spec[index].attr[sindex] == 0) {
        that.getSpec(index, sindex);
      } else if (that.spec[index].attr[sindex] == 1) {
        that.cancelSpec(index, sindex);
      } else {
        return;
      }
    },
    // 修改规格的优惠信息
    seeMore: function seeMore(index) {
      var that = this;
      if (index == 0) {
        if (that.uses_cardList.length > 0) {
          var dataInfo = {
            interfaceId: 'ids_get_card',
            card_id: that.uses_cardList,
            limit: 6,
            offset: 0 };

          that.request.uniRequest("card", dataInfo).then(function (res) {
            if (res.data.code == 1000 && res.data.status == 'ok') {
              var data = res.data.data;
              that.isShowDiscount = !that.isShowDiscount;
              if (that.isShowDiscount) {
                for (var i = 0; i < data.cards.length; i++) {
                  data.cards[i].showTicketDetails = false;
                  data.cards[i].arrowImages = '/static/images/arrow-down.png';
                }
                that.cardList = data;
              } else
              {
                that.cardList = [];
              }
            }
          });
        } else {
          that.isShowDiscount = !that.isShowDiscount;
        }
      } else if (index == 1) {
        that.this_show_goods_spec = !that.this_show_goods_spec;
      }
    },
    // userSpec=用户可选规格，isFirst=是否首次进入，nowCheck=当前选项，isCancel=是否点击取消进入
    assembleSpec: function assembleSpec(userSpec, isFirst, nowCheck, isCancel) {
      var that = this;
      // 新规格数组，与原规格spec_value相对应，用于标记各种状态
      var specValue = uni.getStorageSync("goodsDetail").spec_value;
      var spec = uni.getStorageSync("goodsDetail").spec_value;
      var defaultUserSpec = isCancel == 1 ? "" : uni.getStorageSync("goodsDetail").sku.spec_attr;
      // 遍历规格类型
      for (var i in specValue) {
        for (var k in specValue[i].attr) {
          // 第一次进入全部可选，0=可选，1=选中
          if (isFirst == 1) {
            spec[i].attr[k] = 0;
            // 遍历默认选择规格
            for (var j in defaultUserSpec) {
              if (k == defaultUserSpec[j]) {
                spec[i].attr[k] = 1;
              }
            }
          } else {
            // 用户可选规格与整个规格进行匹配，匹配成功状态改为可选状态
            for (var _j2 in userSpec) {
              if (k == userSpec[_j2]) {
                spec[i].attr[k] = 0;
              }
            }
            // 判断当前选择项中是否有不存在用户可选规格，如有进行删除
            for (var n in nowCheck) {
              if (userSpec.indexOf(parseInt(nowCheck[n])) == -1) {
                nowCheck.splice(n, 1);
              }
            }
            // 显示当前选中规格
            for (var m in nowCheck) {
              if (k == nowCheck[m]) {
                spec[i].attr[k] = 1;
              }
            }
          }
        }
      }
      return spec;
    },
    // 选择规格
    getSpec: function getSpec(index, sindex) {
      var that = this;
      for (var i in that.spec[index].attr) {
        that.spec[index].attr[i] = 0;
      }
      that.spec[index].attr[sindex] = 1;
      // 查找当前选择数据
      var nowCheck = [];
      for (var _i6 in that.spec) {
        for (var k in that.spec[_i6].attr) {
          if (that.spec[_i6].attr[k] == 1) {
            nowCheck.push(k);
          }
        }
      }
      // 判断当前点击规格是否在用户允许选择范围，在就直接提交，不在就提交当前规格
      var userSpec = uni.getStorageSync("goodsDetail").sku.user_spec;
      var specAttr = "";
      if (userSpec) {
        for (var _k in userSpec) {
          if (userSpec.indexOf(parseInt(sindex)) == -1) {
            specAttr = [sindex];
          } else {
            specAttr = nowCheck;
          }
        }
      } else {
        specAttr = nowCheck;
      }
      var dataInfo = {
        interfaceId: "selectsku",
        encrypted_id: that.encrypted_id,
        spec_attr: specAttr };

      that.request.uniRequest("goods", dataInfo).then(function (res) {
        // 重新储存新用户可以选项
        var goodsDetail = uni.getStorageSync("goodsDetail");
        goodsDetail.sku.user_spec = res.data.data.user_spec;
        uni.setStorageSync("goodsDetail", goodsDetail);
        that.spec = that.assembleSpec(res.data.data.user_spec, res.data.data == "" ? 1 : 0, nowCheck);
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          that.goodsContentList.sku = data;
          that.sku_id = data.id;
          that.goodsContentList.sku.sale_price = data.sale_price;
        }
      });
    },
    // 取消选项
    cancelSpec: function cancelSpec(index, sindex) {
      var that = this;
      that.spec[index].attr[sindex] = 0;
      // 查找当前选择数据
      var nowCheck = [];
      for (var i in that.spec) {
        for (var k in that.spec[i].attr) {
          if (that.spec[i].attr[k] == 1) {
            nowCheck.push(k);
          }
        }
      }
      var dataInfo = {
        interfaceId: "selectsku",
        encrypted_id: that.encrypted_id,
        spec_attr: nowCheck };

      that.request.uniRequest("goods", dataInfo).then(function (res) {
        // 重新储存新用户可以选项
        var goodsDetail = uni.getStorageSync("goodsDetail");
        goodsDetail.sku.user_spec = res.data.data.user_spec;
        uni.setStorageSync("goodsDetail", goodsDetail);
        that.spec = that.assembleSpec(res.data.data.user_spec, res.data.data == "" ? 1 : 0, nowCheck, 1);
      });
    },
    // 商品
    goToGoods: function goToGoods(id, pid) {
      uni.navigateTo({
        url: "/pages/goods/goods_detail?sku_id=".concat(id, "&&encrypted_id=").concat(pid) });

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
          that.productLists = that.productLists.concat(data);
        } else {
          console.log('没有数据');
        }
      });
    },
    // 点击优惠或者卡券
    changeActivity: function changeActivity(index, list, info) {
      var that = this;
      if (index == 0) {//卡券
        var dataInfo = {
          interfaceId: 'ids_get_card',
          card_id: list,
          limit: 6,
          offset: 0 };

        that.act_info = info;
        that.request.uniRequest("card", dataInfo).then(function (res) {
          if (res.data.code == 1000 && res.data.status == 'ok') {
            var data = res.data.data;
            that.isShowDiscount = !that.isShowDiscount;
            if (that.isShowDiscount) {
              for (var i = 0; i < data.cards.length; i++) {
                data.cards[i].showTicketDetails = false;
                data.cards[i].arrowImages = '/static/images/arrow-down.png';
              }
              that.cardList = data;
            } else
            {
              that.cardList = [];
            }
          }
        });
      } else if (index == 1) {//优惠
        that.act_info = list;
        that.isShowDiscount = !that.isShowDiscount;
      } else if (index == 2) {
        that.isShowDiscount = !that.isShowDiscount;
        if (!that.isShowDiscount) {
          that.cardList = [];
        }
      }
    },
    // 领取卡券
    getCards: function getCards(cardId, prompt, index) {
      var that = this;
      if (prompt == '') {
        var dataInfo = {
          interfaceId: 'cardget',
          card_id: cardId };

        that.request.uniRequest("card", dataInfo).then(function (res) {
          if (res.data.code == 1000 && res.data.status == 'ok') {
            that.request.showToast('领取成功');
            that.cardList.cards[index].salecard_user_count = that.cardList.cards[index].salecard_user_count + 1;
          }
        });
      } else {
        that.request.showToast(prompt);
      }
    },
    // 使用卡券
    useCard: function useCard(id) {
      console.log('使用的卡券id:', id);
    },
    showTicket: function showTicket(cardId) {
      var that = this;
      for (var i = 0; i < that.cardList.cards.length; i++) {
        if (that.cardList.cards[i].id == cardId) {
          that.cardList.cards[i].showTicketDetails = !that.cardList.cards[i].showTicketDetails;
          if (that.cardList.cards[i].showTicketDetails) {
            that.cardList.cards[i].arrowImages = '/static/images/arrow-top.png';
          } else {
            that.cardList.cards[i].arrowImages = '/static/images/arrow-down.png';
          }
        }
      }
    },
    // 获取广告
    advertising: function advertising() {
      var that = this;
      var dataInfo = {
        interfaceId: 'getadvertising',
        location: 1 };

      that.request.uniRequest("home", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          that.specialList = data;
          // console.log(that.specialList)
        }
      });
    },
    // 获取可领取卡券
    getCard: function getCard() {
      var that = this;
      var dataInfo = {
        interfaceId: "may_receive" };

      that.request.uniRequest("card", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          that.get_count = data.num;
        }
      });
    },
    // 领券中心
    goToGain: function goToGain() {
      uni.navigateTo({
        url: "/pages/my/my_card_gain" });

    },
    // 选中商品
    changePorduct: function changePorduct(index) {
      var that = this;
      that.btnnum = index;
      that.contentList = {};
      that.getUserCart();
      that.allchecked = false;
      that.order_info = {
        sale_info: [] };
      //订单的信息
    },
    goToGoodsClassfiy: function goToGoodsClassfiy() {
      uni.switchTab({
        url: "/pages/goods/goods_classify" });

    },
    // 收藏、相似、删除
    setState: function setState(index, id, num, category_id, listName, encrypted_id) {
      // console.log(index,cart_id,sku_id,num)
      var that = this;
      // index 0 收藏 1 相似 2 删除
      if (index == 0) {//收藏
        var dataInfo = {
          interfaceId: 'collectgoodsspu',
          encrypted_id: encrypted_id };

        that.request.uniRequest("goods", dataInfo).then(function (res) {
          if (res.data.code == 1000 && res.data.status == 'ok') {
            that.request.showToast('已收藏');
          } else if (res.data.code == 1020) {
            that.request.showToast('该商品已收藏');
          }
        });
      } else if (index == 1) {//相似
        uni.navigateTo({
          url: "/pages/goods/goods_list?name=".concat(listName, "&id=").concat(category_id) });

      } else if (index == 2) {//删除
        var cart_id = [];
        cart_id.push(id);
        var _dataInfo = {
          interfaceId: 'changcart',
          type: 2,
          cart_id: cart_id };

        uni.showModal({
          title: '提示',
          content: '确定要删除此订单吗?',
          success: function success(res) {
            if (res.confirm) {
              that.request.uniRequest("shoppingCart", _dataInfo).then(function (res) {
                if (res.data.code == 1000 && res.data.status == 'ok') {
                  setTimeout(function () {
                    that.request.showToast(res.data.message);
                  }, 500);
                  setTimeout(function () {
                    that.getUserCart();
                  }, 800);
                }
              });
            }
          } });

      }
    },
    // 点击分类列表
    goodsClassfiy: function goodsClassfiy(id, listName) {
      uni.navigateTo({
        url: "/pages/goods/goods_list?name=".concat(listName, "&id=").concat(id) });

    },
    // 修改商品数量
    setGoodsNumber: function setGoodsNumber(id, cart_num) {
      var that = this;
      var cart_id = [];
      cart_id.push(id);
      var dataInfo = {
        interfaceId: 'changcart',
        type: 0,
        cart_id: cart_id,
        num: cart_num };

      that.request.uniRequest("shoppingCart", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          that.getUserCart();
        }
      });
    },
    // 加减数量
    setNumber: function setNumber(id, number, k, is) {
      var that = this;
      var goodsNumber = 0;
      var cart_num = that.contentList.sku_list[k].goods_list[is].cart_num;
      cart_num += number;
      goodsNumber = cart_num;
      if (goodsNumber >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
        var _number3 = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit);
        goodsNumber = _number3;
      } else if (goodsNumber < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
        var _number4 = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit);
        goodsNumber = _number4;
      }
      that.setNewGoodsNumber = goodsNumber;
      that.setGoodsNumber(id, goodsNumber);
    },
    // 输入数量
    setPorductNumber: function setPorductNumber(event) {
      var that = this;
      var value = event.target.value;
      var k = event.currentTarget.dataset.k;
      var is = event.currentTarget.dataset.is;
      var id = event.currentTarget.dataset.id;
      if (value == '') {
        value = 1;
        that.contentList.sku_list[k].goods_list[is].cart_num = 1;
      } else {
        that.contentList.sku_list[k].goods_list[is].cart_num = parseInt(value);
      }
      var goodsNumber = 0;
      var cart_num = that.contentList.sku_list[k].goods_list[is].cart_num;
      goodsNumber = cart_num;
      if (goodsNumber >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
        var number = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit);
        goodsNumber = number;
      } else if (goodsNumber < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
        var _number5 = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit);
        goodsNumber = _number5;
      }
      that.setNewGoodsNumber = goodsNumber;
      that.setGoodsNumber(id, goodsNumber);
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
],[[12,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NjYyMyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzljYmEiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT9hZGI0IiwidW5pLWFwcDovLy9wYWdlcy9jYXJ0L2NhcnQudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NWIxNSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzRmMGYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EseUY7QUFDQUEsVUFBVSxDQUFDQyxhQUFELENBQVYsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQzdIO0FBQ3dEO0FBQ0w7QUFDcUM7OztBQUd4RjtBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQTZwQixDQUFnQiwycEJBQUcsRUFB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QUNBO0FBQ0EsbUJBRkEsRUFFQSxHQUZBO0FBR0E7QUFDQSxlQVRBO0FBVUE7QUFDQSxXQWhCQTs7QUFrQkE7QUFDQSxLQTVuQkE7QUE2bkJBO0FBQ0E7QUFDQTtBQUNBLGdGQURBOztBQUdBLEtBbG9CQTtBQW1vQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxlQUZBO0FBR0Esd0JBSEE7QUFJQSxxQkFKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQW5wQkE7QUFvcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcHFCQTtBQXFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOXJCQSxFQWhIQSxFOzs7Ozs7Ozs7Ozs7QUN4WkE7QUFBQTtBQUFBO0FBQUE7QUFBZytCLENBQWdCLDA3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBcC9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvY2FydC9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2NhcnQvY2FydC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGYwMGFkZjRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2FydC9jYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNhcnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wLWJhclwiXHJcblx0XHQgOnN0eWxlPVwiW3snaGVpZ2h0JzptZW51SGVpZ2h0KydweCcsJ3BhZGRpbmctdG9wJzptZW51VG9wKydweCcsJ2xpbmUtaGVpZ2h0JzptZW51SGVpZ2h0KydweCcsJ3BhZGRpbmctYm90dG9tJzoxMCsncHgnLCdiYWNrZ3JvdW5kLWNvbG9yJzp0b3BCYWNrZ3JvdW5kQ29sb3IsJ2NvbG9yJzpjb2xvcn1dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmFjay10aXRsZVwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnfV1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhY2tcIiBAY2xpY2s9XCJnb0JhY2tcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiYmFja0ltYWdlXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj4ge3t0aXRsZX19IDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LXRvLW5hdlwiIDpzdHlsZT1cIlt7J3RvcCc6bWVudUJvdHRvbSsxMCsncHgnfV1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LW5hbWVcIiB2LWZvcj1cIihpLGspIGluIHByb2R1Y3ROYW1lTGlzdFwiIDprZXk9J2snIDpjbGFzcz1cIntjaGVja2VkUG9yZHVjdCA6YnRubnVtID09IGt9XCIgQHRhcD1cImNoYW5nZVBvcmR1Y3QoaylcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1uYW1lLWxpbmVcIj5cclxuXHRcdFx0XHRcdHt7IGkubmFtZSB9fSA8dGV4dD4oe3tpLm51bWJlcn19KTwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cIntjaGVja2VkTGluZSA6YnRubnVtID09IGt9XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3Pjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2FydC1jb250ZW50XCIgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOm1lbnVCb3R0b20rNTgrJ3B4J31dXCI+XHRcdFx0XHJcblx0XHRcdDwhLS0g6LSt54mp6L2m5Li656m6IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImVtcHR5LWNhcnRcIiB2LWlmPVwic2t1X2xpc3QubGVuZ3RoPT0wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbXB0eS1jYXJ0LWltYWdlXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9jYXJ0QmcucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wdHktY2FydC10ZXh0XCI+IOi0reeJqei9pui/mOaYr+epuueahOWTn34gPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ28tc3Ryb2xsXCIgQHRhcD0nZ29Ub0dvb2RzQ2xhc3NmaXknPiDljrvpgJvpgJsgPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6LSt54mp6L2m5LiN5Li656m6IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNhcnQtaGF2ZS1wcm9kdWN0XCIgdi1lbHNlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW5kLWNvbnRcIiA6Y2xhc3M9XCJ7ZGlzOmJ0bm51bSA9PSBpbmRleH1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBwcm9kdWN0TmFtZUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZC10b3BcIiBAdGFwPSdnb1RvR2Fpbic+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuLXJlY2VpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldz7mgqjmnIk8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0XCI+e3tnZXRfY291bnR9feW8oOS4k+WxnuS8mOaDoOWIuDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRzXCI+5Y+v6aKG5Y+Wfjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvLXJlY2VpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRyaWFuZ2xlLWxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcmFjdGVyXCI+5Y676aKG5Y+WJm5ic3A7Pjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG9waW5nLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LXNob3BwaW5nLXNob3dcIiB2LWZvcj1cIihpdGVtcyxrKSBpbiBjb250ZW50TGlzdC5za3VfbGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5YWo6YCJIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrLXNlZS1tb3JlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y2hlY2tib3ggIGNvbG9yPScjMDA3QUZGJyA6Y2hlY2tlZD1cIml0ZW1zLmFsbF9jaGVja2VkXCIgQHRhcD0nY2hlY2tlZF9jbGFzc19hbGwoayknIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IEB0YXA9J2dvb2RzQ2xhc3NmaXkoaXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUpJz4ge3tpdGVtcy5jYXRlZ29yeV90aXRsZX19ID4gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtb24taXRlbVwiIHYtaWY9XCJpdGVtcy5jYXJkcy5sZW5ndGg+MFwiIEB0YXA9XCJjaGFuZ2VBY3Rpdml0eSgwLGl0ZW1zLmNhcmRzLGl0ZW1zLmFjdF9pbmZvKVwiPiDpoobliLggPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtb24taXRlbVwiIHYtZWxzZS1pZj1cIml0ZW1zLmFjdF9pbmZvXCIgQHRhcD1cImNoYW5nZUFjdGl2aXR5KDEsaXRlbXMuYWN0X2luZm8pXCI+IOeci+S8mOaDoCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5LyY5oOg5rS75YqoIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1vZmZlclwiIHYtaWY9XCJpdGVtcy5hY3RfaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c1wiIHYtaWY9XCJpdGVtcy5hY3RfaW5mby5pc19jb3VudGRvd249PTFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IOmZkOaXtiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0Pui3nea0u+WKqOe7k+adn+i/mOWJqSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHktdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGF5IGhvdXNlc1wiPiB7eyBpdGVtcy5kYXkgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG91c2VzXCI+IHt7IGl0ZW1zLmhvdXNlIH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlY29uZFwiPiB7eyBpdGVtcy5zZWNvbmQgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWludXRlXCI+IHt7IGl0ZW1zLm1pbnV0ZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB2LWZvcj1cIihjb250ZW50LHR5cGUpIGluIGl0ZW1zLmFjdF9pbmZvLmFjdF9ydWxlXCIgOmtleT0ndHlwZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvblwiPiB7e2NvbnRlbnQuY2F0ZWdvcnl9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljLWFjdGl2aXR5XCI+IHt7Y29udGVudC5ydWxlX25hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWVhuWTgeWxleekuiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1jb250ZW50LWFsbFwiIHYtZm9yPVwiKGksaXMpIGluIGl0ZW1zLmdvb2RzX2xpc3RcIiA6a2V5PSdpcyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1jb250ZW50XCIgQGxvbmdwcmVzcz0nc2V0Z29vZHNTdGF0ZShrLGlzKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hlY2tib3gtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjaGVja2JveCBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIiBjb2xvcj0nIzAwN0FGRicgOmNoZWNrZWQ9XCJpLmNoZWNrZWRcIiBAdGFwPSdjaGFuZ2VDaGVjayhrLGlzKScgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1zaG93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1pbWFnZXNcIiBAdGFwPSdnb1RvR29vZHMoaS5Ta3VfaWQsaS5lbmNyeXB0ZWRfaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaGVhZF9pbWdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1uYW1lXCI+IHt7aS5nb29kc19uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zXCIgIEB0YXA9J3Nob3dTZXRTcGVjKGkuU2t1X2lkLGkuZW5jcnlwdGVkX2lkLGkuY2FydF9udW0saS5jYXJ0X2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zLW5hbWUtaXRlbVwiIHYtZm9yPVwiKGlzLHopIGluIGkuc3BlY19uYW1lXCIgOmtleT0neic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7en19Ont7aXN9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVuZm9sZFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvdW5mb2xkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTvv6U8dGV4dCBjbGFzcz1cInByaWNlXCI+e3tpLnNhbGVfcHJpY2V9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW1iZXItcHJpY2VcIiB2LWlmPVwiaS5tZW1iZXJcIj7kvJrlkZjku7c8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1cmNoYXNlTGltaXRhdGlvbk51bWJlclwiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KiB7eyBpLm1pbl9idXlfbGltaXQgfX0g5Lu26LW36LStLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTpmZDotK17e2kubWF4X2J1eV9saW1pdH195Lu2IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwiaS5jdXRfcHJpY2U8MFwiPiDmr5TliqDotK3ml7bpmY3ku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9XCJpLmN1dF9wcmljZT4wXCI+IOavlOWKoOi0reaXtua2qOS7t++/pXt7aS5jdXRfcHJpY2V9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib2ZmbGluZV9wYXktb25saW5lX3BheS1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvbmxpbmVfcGF5XCI+5Zyo57q/5pSv5LuY77+le3sgaS5vbmxpbmVfcGF5KmkuY2FydF9udW0gfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib2ZmbGluZV9wYXlcIj7liLDpmaLlho3ku5jvv6V7eyBpLm9mZmxpbmVfcGF5KmkuY2FydF9udW0gfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJ0cmFjdFwiIEB0YXA9XCJzZXROdW1iZXIoaS5jYXJ0X2lkLC0xLGssaXMpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc3VidHJhY3QucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJjYXJ0X251bVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpkYXRhLWs9J2snIDpkYXRhLWlzPSdpcycgOmRhdGEtaWQ9J2kuY2FydF9pZCcgdi1tb2RlbD1cImkuY2FydF9udW1cIiBAaW5wdXQ9J3NldFBvcmR1Y3ROdW1iZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG1heGxlbmd0aD1cIjJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkXCIgQHRhcD1cInNldE51bWJlcihpLmNhcnRfaWQsMSxrLGlzKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FkZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2dvb2RzX3N0YXRlXCIgdi1zaG93PVwiaS5pc19zaG93X3N0YXRlXCIgQHRhcD0nc2V0Z29vZHNTdGF0ZShrLGlzKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpc19pc19nb29kc19zdGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdGlvbiBzZXRfc3RhdGVcIiB2LWlmPVwiaXRlbXMuY2F0ZWdvcnlfc3RhdHVzPT0xXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMCxpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0Puenu+WFpTwvdGV4dD4gPHRleHQ+5pS26JePPC90ZXh0PiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaW1pbGFyIHNldF9zdGF0ZVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdzZXRTdGF0ZSgxLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+IOeci+ebuOS8vCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWxldGUgc2V0X3N0YXRlXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IEB0YXA9J3NldFN0YXRlKDIsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz4g5Yig6ZmkIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOW8ueeql+S8mOaDoOaIluiAheWNoeWIuCAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJtYW50bGVkXCIgdi1pZj1cImlzU2hvd0Rpc2NvdW50XCIgc2Nyb2xsLXk9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snaGVpZ2h0JzpjYXJkTGlzdC5jYXJkcz9oZWlnaHQvMisncHgnOmhlaWdodC80KydweCd9XVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHMtdGl0bGVcIj4g5L+D6ZSA5LyY5oOgIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLWhpbnRcIj4q5rip6aao5o+Q56S6Oua7oeWHj+OAgeaKmOaJo+OAgeWNoeWIuOWdh+WPr+WPoOWKoOS9v+eUqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1vZmZlclwiIHYtaWY9XCJhY3RfaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljLWFjdGl2aXR5LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHNcIiB2LWlmPVwiYWN0X2luZm8uaXNfY291bnRkb3duPT0xXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb25cIj4g6ZmQ5pe2IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0Pui3nea0u+WKqOe7k+adn+i/mOWJqSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpdml0eS10aW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRheSBob3VzZXNcIj4ge3sgaXRlbXMuZGF5IH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG91c2VzXCI+IHt7IGl0ZW1zLmhvdXNlIH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2Vjb25kXCI+IHt7IGl0ZW1zLnNlY29uZCB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1pbnV0ZVwiPiB7eyBpdGVtcy5taW51dGUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHNcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgdi1mb3I9XCIoY29udGVudCx0eXBlKSBpbiBhY3RfaW5mby5hY3RfcnVsZVwiIDprZXk9J3R5cGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IHt7Y29udGVudC5jYXRlZ29yeX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPiB7e2NvbnRlbnQucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZF9saXN0XCIgdi1pZj1cImNhcmRMaXN0LmNhcmRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZC10aXRsZS1hbGwtY2FyZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVsYXRlZC10aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PiDlj6/nlKjkvJjmg6DliLhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtb3JlLWNhcmRcIiBAdGFwPSdnb1RvR2Fpbic+IOabtOWkmuS8mOaDoOWIuCA+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGlja2V0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCA6Y2FyZHNMaXN0PSdjYXJkTGlzdC5jYXJkcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0IDp0aW1lX25vdz0nY2FyZExpc3QudGltZV9ub3cnIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgQHNob3dUaWNrZXQ9J3Nob3dUaWNrZXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBAZ2V0Q2FyZHM9J2dldENhcmRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgQHVzZUNhcmQgPSAndXNlQ2FyZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGlja2V0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWxldGUtZGlzY291bnRcIiBAdGFwPSdjaGFuZ2VBY3Rpdml0eSgyKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9kZWxldGUucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDov4fmnJ/lpLHmlYjnmoTllYblk4EgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3BpbmctY2FydFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcnQtc2hvcHBpbmctc2hvd1wiIHYtZm9yPVwiKGl0ZW1zLGspIGluIGNvbnRlbnRMaXN0LnNrdV9saXN0XCIgOmtleT0naycgdi1zaG93PVwiaXRlbXMuY2F0ZWdvcnlfc3RhdHVzPT0wXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtY2hlY2stc2VlLW1vcmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0PiDlpLHmlYjnmoTllYblk4EgIDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWdvb2RzXCIgQHRhcD0nZGVsZXRlSW52YWxpZChrLGlzKSc+IOa4heepuuWkseaViOWVhuWTgSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnQtYWxsXCIgdi1mb3I9XCIoaSxpcykgaW4gaXRlbXMuZ29vZHNfbGlzdFwiIDprZXk9J2lzJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnRcIiBAbG9uZ3ByZXNzPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tc2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0taW1hZ2VzXCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraS5oZWFkX2ltZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImludmFsaWQtZ29vZHNcIj48dmlldyBjbGFzcz1cImRlbGV0ZS1pbnZhbGlkLWdvb2RzXCI+5bey5aSx5pWIPC92aWV3Pjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1uYW1lXCI+IHt7aS5nb29kc19uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zXCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmVyc2lvbnMtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lLWl0ZW1cIiB2LWZvcj1cIihpcyx6KSBpbiBpLnNwZWNfbmFtZVwiIDprZXk9J3onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e3p9fTp7e2lzfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1bmZvbGRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3VuZm9sZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdO+/pTx0ZXh0IGNsYXNzPVwicHJpY2VcIj57e2kuc2FsZV9wcmljZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbWJlci1wcmljZVwiIHYtaWY9XCJpLm1lbWJlclwiPuS8muWRmOS7tzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqIHt7IGkubWluX2J1eV9saW1pdCB9fSDku7botbfotK0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOmZkOi0rXt7aS5tYXhfYnV5X2xpbWl0fX3ku7YgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJpLmN1dF9wcmljZTwwXCI+IOavlOWKoOi0reaXtumZjeS7t++/pXt7aS5jdXRfcHJpY2V9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtZWxzZS1pZj1cImkuY3V0X3ByaWNlPjBcIj4g5q+U5Yqg6LSt5pe25rao5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvZmZsaW5lX3BheS1vbmxpbmVfcGF5LWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib2ZmbGluZV9wYXktb25saW5lX3BheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9ubGluZV9wYXlcIj7lnKjnur/mlK/ku5jvv6V7eyBpLm9ubGluZV9wYXkqaS5jYXJ0X251bSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvZmZsaW5lX3BheVwiPuWIsOmZouWGjeS7mO+/pXt7IGkub2ZmbGluZV9wYXkqaS5jYXJ0X251bSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnRyYWN0XCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3N1YnRyYWN0LnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiY2FydF9udW1cIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ZGF0YS1rPSdrJyA6ZGF0YS1pcz0naXMnIHYtbW9kZWw9XCJpLmNhcnRfbnVtXCIgQGlucHV0PSdzZXRQb3JkdWN0TnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBtYXhsZW5ndGg9XCIyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZFwiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hZGQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19nb29kc19zdGF0ZVwiIHYtc2hvdz1cImkuaXNfc2hvd19zdGF0ZVwiIEB0YXA9J3NldGdvb2RzU3RhdGUoayxpcyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXNfaXNfZ29vZHNfc3RhdGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbWlsYXIgc2V0X3N0YXRlXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IEB0YXA9J3NldFN0YXRlKDEsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz4g55yL55u45Ly8IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZSBzZXRfc3RhdGVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMixpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPiDliKDpmaQgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1wZXJmb3JtYW5jZVwiIHYtaWY9XCJzcGVjaWFsTGlzdC5jb250ZW50Lmxlbmd0aD4wJiZza3VfbGlzdC5sZW5ndGg9PTBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWxMaXN0XCIgdi1pZj1cInNwZWNpYWxMaXN0LnR5cGU9PTFcIj5cclxuXHRcdFx0XHRcdDxzd2lwZXIgaW5kaWNhdG9yLWRvdHMgaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcj1cIiNmZjY2OTlcIiBhdXRvcGxheSBpbnRlcnZhbD0nNTAwMCcgZHVyYXRpb249JzMwMDAnIGNpcmN1bGFyPlxyXG5cdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJzd2lwZXItaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHNwZWNpYWxMaXN0LmNvbnRlbnRcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraXRlbS5pbWdcIiBtb2RlPVwid2lkdGhGaXhcIiA+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0XHRcdDwvc3dpcGVyPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJlY29tbWVuZC10by15b3VcIiB2LWlmPVwicHJvZHVjdExpc3RzXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldz7kuLrkvaDmjqjojZA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3ViamVjdC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8Z29vZHNTaG93IDpib3JkZXJSYWRpdXM9MjQgXHJcblx0XHRcdFx0XHQgOnJlcXVlc3RVcmw9J3JlcXVlc3RVcmwnIDp3aWR0aD0zNTAgOnBvcmR1Y3RMaXN0PSdwcm9kdWN0TGlzdHMnPlxyXG5cdFx0XHRcdFx0PC9nb29kc1Nob3c+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5YWo6YCJ5ZKM57uT566XIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNldHRsZW1lbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNldHRsZW1lbnQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtYWxsLWdvb2RzXCIgQHRhcD0nY2hhbmdlX2FsbF9jYXJ0JyA+XHJcblx0XHRcdFx0XHRcdDxjaGVja2JveCAgY29sb3I9JyMwMDdBRkYnIDpjaGVja2VkPVwiYWxsY2hlY2tlZFwiIC8+ICA8dGV4dCA+IOWFqOmAiSA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsLWRpc2NvdW50XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWxcIj7lkIjorqEgOiDvv6UgPHRleHQ+e3sgb3JkZXJfaW5mby5vZmZfc2FsZSB8fCAwIH19PC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlLWRpc2NvdW50XCIgdi1pZj1cIm9yZGVyX2luZm8uc2FsZV9pbmZvLmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx05LyY5oOg5YePOiDvv6V7eyBvcmRlcl9pbmZvLnNhbGVfcHJpY2UgfHwwIH19IFxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlLWRpc2NvdW50LWRldGFpbGVkXCIgPuS8mOaDoOaYjue7hjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb1NldHRsZW1lbnRcIiBAdGFwPSdnb1RvU2V0dGxlbWVudCgpJz7ljrvnu5Pnrpc8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOS/ruaUueWVhuWTgeinhOagvCAtLT5cclxuXHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cInNldF9nb29kc19zcGVjX2NvbnRlbnRcIiBzY3JvbGwteT1cInRydWVcIiB2LWlmPVwidGhpc19zaG93X2dvb2RzX3NwZWNcIiA6c3R5bGU9XCJbeydoZWlnaHQnOmhlaWdodC8yKydweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlzU2hvdy1jb250ZW50XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtY2FyZC10b3BcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1oZWFkX2ltZ1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwrZ29vZHNDb250ZW50TGlzdC5za3UuaGVhZF9pbWdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodC1nb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtZGlzY291bnRzXCIgdi1pZj1cImdvb2RzQ29udGVudExpc3Quc2t1LmFjdC5sZW5ndGghPTBcIiBAdGFwPSdzZWVNb3JlKDApJz4g5Y+C5LiO5LyY5oOgIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtYXJrZXRfcHJpY2VcIj7vv6V7e2dvb2RzQ29udGVudExpc3Quc2t1LnNhbGVfcHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbWJlcl9wcmljZVwiIHYtaWY9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5tZW1iZXIubWVtYmVyX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbWJlcl90aXRsZVwiID57e2dvb2RzQ29udGVudExpc3Quc2t1Lm1lbWJlci5tZW1iZXJfdGl0bGV9fTwvdGV4dD7vv6V7e2dvb2RzQ29udGVudExpc3Quc2t1Lm1lbWJlci5wcmljZX19XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3RvcmUtc2t1X25vXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgdi1zaG93PVwiZ29vZHNDb250ZW50TGlzdC5za3Uuc3RvcmU8PTEwMFwiPuW6k+WtmCB7e2dvb2RzQ29udGVudExpc3Quc2t1LnN0b3JlfX3ku7Y8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJza3Vfbm9cIj7nvJblj7c6IHt7Z29vZHNDb250ZW50TGlzdC5za3Uuc2t1X25vfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHRlbXBsYXRlID5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udGVudFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGdvb2RzQ29udGVudExpc3Quc3BlY192YWx1ZVwiIDpkYXRhLWluZGV4PSdpbmRleCcgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0ubmFtZX19XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8dGV4dCBjbGFzcz1cInNwZWNzLWhpbnRcIiA+6K+36YCJ5oupe3tpdGVtLm5hbWV9fTwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjcy1jb250XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIHYtZm9yPVwiKGlzLHNpbmRleCkgaW4gaXRlbS5hdHRyXCIgOmtleT1cInNpbmRleFwiIFxyXG5cdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJbc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdPT0xPydsaS1ob3Zlcic6c3BlY1tpbmRleF0uYXR0cltzaW5kZXhdPT0wPydsaS1ncmF5JzonJ11cIlxyXG5cdFx0XHRcdFx0XHRcdCBAdGFwPVwiY2hhbmdlU3BlYyhpbmRleCxzaW5kZXgpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7e2lzfX0gIFxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjcy1jb250LXBheVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwYXktdHh0XCI+5pSv5LuY5pa55byPPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIEB0YXA9J2NoYW5nZVBheSgwKScgOmNsYXNzPVwiW3BheV90eXBlPT0wfHxwYXlfdHlwZT09Mj8nbGktaG92ZXInOicnXVwiPlxyXG5cdFx0XHRcdFx0XHTpooTnuqbph5FcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiBAdGFwPSdjaGFuZ2VQYXkoMSknIDpjbGFzcz1cIltwYXlfdHlwZT09MXx8cGF5X3R5cGU9PTI/J2xpLWhvdmVyJzonJ11cIj5cclxuXHRcdFx0XHRcdFx05YWo5qy+5LuYXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udC1wYXlcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGF5LXR4dFwiPumihuWPluaWueW8jzwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiBAdGFwPSdjaGFuZ2VDbGFzcygwKScgOmNsYXNzPVwiW2NsYXNzX3R5cGU9PTA/J2xpLWhvdmVyJzonJ11cIj5cclxuXHRcdFx0XHRcdFx05Yiw6Zmi6aKG5Y+WXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlQ2xhc3MoMSknIDpjbGFzcz1cIltjbGFzc190eXBlPT0xPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOmCruWvhFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZU51bWJlclwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktdHh0XCI+5pWw6YePPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJudW1iZXItaGludFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD4ge3sgZ29vZHNDb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdCB9fSDku7botbfotK08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0PumZkOi0rSB7eyBnb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0IH19IOS7tjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWlucHV0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVkdWNlXCJcclxuXHRcdFx0XHRcdFx0IEB0YXA9XCJyZWR1Y2UoLTEpXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtY29sb3InOnNldE5ld0dvb2RzTnVtYmVyPT1nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0ID8gJyNkZGRkZGQnOicjOTk5OTk5J31dXCI+LTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJudW1iZXItaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJzZXROZXdHb29kc051bWJlclwiIHZhbHVlPTEgQGlucHV0PSdjaGFuZ2VHb29kc051bWJlcicgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1udW1iZXJcIlxyXG5cdFx0XHRcdFx0XHQgQHRhcD1cInJlZHVjZSgxKVwiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWNvbG9yJzpzZXROZXdHb29kc051bWJlcj09Z29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCA/ICcjZGRkZGRkJzonIzk5OTk5OSd9XVwiPis8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwia2VlcC1vcmRlclwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzPVwia2VlcC1vcmRlci1idXR0b25cIiBwbGFpbj1cInRydWVcIiBAdGFwPSdvcmRlclNldCgpJz7noa7lrpo8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWxldGUtc2VlLW1vcmUtZGlzY291bnRcIiBAdGFwPSdzZWVNb3JlKDEpJz5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2RlbGV0ZS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZ29vZHNTaG93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dvb2RzU2hvdy52dWVcIjtcclxuXHRpbXBvcnQgdGlja2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RpY2tldC52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGdvb2RzU2hvdyAsXHJcblx0XHRcdHRpY2tldFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVudVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1lbnVUb3A6IDAsXHJcblx0XHRcdFx0bWVudUhlaWdodDogMCxcclxuXHRcdFx0XHRtZW51TGVmdDogMCxcclxuXHRcdFx0XHRtZW51Qm90dG9tOiAwLFxyXG5cdFx0XHRcdGJhck5hbWU6ICdiYWNrJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHR0b3BCYWNrZ3JvdW5kQ29sb3I6ICcjMjIyMjIyJyxcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdGJhY2tJbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3JldHVybi5wbmcnLFxyXG5cdFx0XHRcdHRpdGxlOiAn6LSt54mp6L2mJyxcclxuXHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0cHJvZHVjdExpc3RzOiBbXSxcclxuXHRcdFx0XHRwcm9kdWN0TmFtZUxpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflhajpg6gnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn6ZmN5Lu3JyxcclxuXHRcdFx0XHRcdFx0bnVtYmVyOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WMu+e+jicsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfmiqTogqTlk4EnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0YnRubnVtOiAwLFxyXG5cdFx0XHRcdGNvbnRlbnRMaXN0OiB7fSxcclxuXHRcdFx0XHRhbGxjaGVja2VkOiBmYWxzZSwvL+WFqOmAiVxyXG5cdFx0XHRcdGlzU2hvd0Rpc2NvdW50OmZhbHNlLC8v5pi+56S65LyY5oOg5oiW5Y2h5Yi4XHJcblx0XHRcdFx0cmVxdWVzdFVybDogJycsXHJcblx0XHRcdFx0b2Zmc2V0OiAwLFxyXG5cdFx0XHRcdHNrdV9saXN0OltdLFxyXG5cdFx0XHRcdHNwZWNpYWxMaXN0Ont9LC8v5bm/5ZGKXHJcblx0XHRcdFx0Z2V0X2NvdW50OjAsLy/lj6/pooblj5bljaHliLjmlbDph49cclxuXHRcdFx0XHRjYXJkTGlzdDpbXSwvL+WNoeWIuOWIl+ihqFxyXG5cdFx0XHRcdGFjdF9pbmZvOnt9LFxyXG5cdFx0XHRcdHVzZXNfY2FyZExpc3Q6W10sXHJcblx0XHRcdFx0dGhpc19zaG93X2dvb2RzX3NwZWM6ZmFsc2UsLy/mmL7npLrkv67mlLnllYblk4Hop4TmoLxcclxuXHRcdFx0XHRnb29kc0NvbnRlbnRMaXN0OiBbXSxcclxuXHRcdFx0XHRzcGVjOltdLFxyXG5cdFx0XHRcdHBheV90eXBlOiAxLCAvL+aUr+S7mOaWueW8jyAgMOmihOe6pumHkSAxIOWFqOasviAyIOWFqOmAiVxyXG5cdFx0XHRcdGNsYXNzX3R5cGU6MCwvL+mihuWPluaWueW8jyAw5Yiw6ZmiIDHpgq7lr4RcclxuXHRcdFx0XHRzZXROZXdHb29kc051bWJlcjoxLC8v5L+u5pS55paw55qE5ZWG5ZOB5pWw6YePXHJcblx0XHRcdFx0ZW5jcnlwdGVkX2lkOicnLFxyXG5cdFx0XHRcdHNrdV9pZDowLFxyXG5cdFx0XHRcdGNhcnRfaWQ6MTYwLFxyXG5cdFx0XHRcdG9yZGVyX2luZm86e1xyXG5cdFx0XHRcdFx0c2FsZV9pbmZvOltdXHJcblx0XHRcdFx0fSwvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5vZmZzZXQgKz0gMTtcclxuXHRcdFx0dGhhdC5nZXRMaWtlKClcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbikge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0dGhpcy5yZXF1ZXN0ID0gdGhpcy4kcmVxdWVzdFxyXG5cdFx0XHR0aGF0LnJlcXVlc3RVcmwgPSB0aGF0LnJlcXVlc3QuZ2xvYmFsRGF0YS5yZXF1ZXN0VXJsXHJcblx0XHRcdHRoYXQuZ2V0TGlrZSgpXHJcblx0XHRcdHRoYXQuZ2V0Q2FyZCgpXHJcblx0XHRcdHRoYXQuYWR2ZXJ0aXNpbmcoKVxyXG5cdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQuaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0O1xyXG5cdFx0XHQvLyDliKTlrprov5DooYzlubPlj7BcclxuXHRcdFx0bGV0IHBsYXRmb3JtID0gJydcclxuXHRcdFx0c3dpdGNoICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSkge1xyXG5cdFx0XHRcdGNhc2UgJ2FuZHJvaWQnOlxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnYW5kcm9pZCdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lvcyc6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdpb3MnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnYXBwbGV0J1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBsYXRmb3JtID09ICdhcHBsZXQnKSB7XHJcblx0XHRcdFx0Ly8g6I635Y+W5bGP5bmV6auY5bqmXHJcblx0XHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBtZW51ID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVRvcCA9IG1lbnUudG9wXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IG1lbnUuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gbWVudS5ib3R0b21cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoYXQubWVudVdpZHRoID0gOTBcclxuXHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSA1MFxyXG5cdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IDMyXHJcblx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IDI3OFxyXG5cdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IDgyXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOi/lOWbnlxyXG5cdFx0XHRnb0JhY2s6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VXNlckNhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZ2V0Y2FydCcsXHJcblx0XHRcdFx0XHR0eXBlOiB0aGF0LmJ0bm51bVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0bGV0IGRheSA9IDBcclxuXHRcdFx0XHRcdFx0bGV0IGhvdXNlID0gMFxyXG5cdFx0XHRcdFx0XHRsZXQgc2Vjb25kID0gMFxyXG5cdFx0XHRcdFx0XHRsZXQgbWludXRlID0gMFxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGRhdGEuc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmlzX3Nob3dfc3RhdGUgPSBmYWxzZSAvL+aYvuekuuiuouWNleaTjeS9nFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IGZhbHNlIC8v5piv5ZCm5YWo6YCJ5b2T5YmN5YiG57G7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCA9IGZhbHNlIC8v5piv5ZCm6YCJ5oupXHJcblx0XHRcdFx0XHRcdFx0XHRpZihkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5kYXkgPSBwYXJzZUludCgoZGF0YS5za3VfbGlzdFtpXS5hY3RfaW5mby5yZXN0X3RpbWUpIC8gNjAgLyA2MCAvIDI0ICUgMzApXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uaG91c2UgPSBwYXJzZUludCgoZGF0YS5za3VfbGlzdFtpXS5hY3RfaW5mby5yZXN0X3RpbWUpIC8gNjAgLyA2MCAlIDI0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLnNlY29uZCA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAlIDYwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLm1pbnV0ZSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgJSA2MClcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YS5za3VfbGlzdFtpXSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5za3VfbGlzdCA9IGRhdGEuc2t1X2xpc3RcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LnByb2R1Y3ROYW1lTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdE5hbWVMaXN0W2ldLm51bWJlciA9IGRhdGEudHlwZV9jb3VudFtpXVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2t1X2xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuWPr+aTjeS9nOiuouWNleaVsOaNrlxyXG5cdFx0XHRzZXRnb29kc1N0YXRlOiBmdW5jdGlvbihrLCBpcykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uaXNfc2hvd19zdGF0ZSA9ICF0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmlzX3Nob3dfc3RhdGVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YWo6YCJ5b2T5YmN5YiG57G7XHJcblx0XHRcdGNoZWNrZWRfY2xhc3NfYWxsOmZ1bmN0aW9uKGspe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBhY3RfaWQgPSAnJ1xyXG5cdFx0XHRcdGxldCBjaGFuZ2VfY2FyZF9pZCA9IFtdXHJcblx0XHRcdFx0bGV0IGNhcnQgPSB7fVxyXG5cdFx0XHRcdGxldCBhcnIgPSBbXVxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZFxyXG5cdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQpey8v5YWo6YCJXHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2ldLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1lbHNleyAvL+eCueWHu+a4heepuuWFqOmAiVxyXG5cdFx0XHRcdFx0Zm9yKGxldCBpPTA7aTx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpXS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRhcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkKVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBmbGFnID0gYXJyLmV2ZXJ5KChpdGVtLGluZGV4LGFycikgPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYoZmxhZyl7XHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSAhdGhhdC5hbGxjaGVja2VkXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuZ2V0X3VzZXJfY2FydCgpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieaLqVxyXG5cdFx0XHRjaGFuZ2VDaGVjazogZnVuY3Rpb24oaywgaXMpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgYXJyID0gW11cclxuXHRcdFx0XHRsZXQgYWxsX2FyciA9IFtdXHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jaGVja2VkID0gIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2hlY2tlZFx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7aTx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRhcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaV0uY2hlY2tlZClcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZmxhZyA9IGFyci5ldmVyeSgoaXRlbSxpbmRleCxhcnIpID0+e1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IHRydWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIOWmguaenOW9k+WIhuexu+S4i+mdoueahOiuouWNlemDvemAieaLqeS6hizliJnlvZPliY3liIbnsbvnmoTlhajpgInkuLp0cnVlXHJcblx0XHRcdFx0aWYoZmxhZyl7XHRcdFx0XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkID0gIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWRcclxuXHRcdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQpey8v5b2T5YmN6K6i5Y2V5Li66YCJ5oup5pe25Yik5a6a5omA5pyJ55qE6K6i5Y2V5piv5ZCm5bey57uP5YWo6YCJXHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0XHRcdGFsbF9hcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkKVxyXG5cdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBmbGFncyA9IGFsbF9hcnIuZXZlcnkoKGl0ZW0saW5kZXgsYWxsX2FycikgPT57XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmxhZ3NcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHR9LFx0XHJcblx0XHRcdC8vIOe7k+eul+eahOWFqOmAiVxyXG5cdFx0XHRjaGFuZ2VfYWxsX2NhcnQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSAhdGhhdC5hbGxjaGVja2VkXHJcblx0XHRcdFx0aWYodGhhdC5hbGxjaGVja2VkKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0Zm9yKGxldCBqPTA7ajx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3QubGVuZ3RoO2orKyl7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQuZ2V0X3VzZXJfY2FydCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRmb3IobGV0IGo9MDtqPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7aisrKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0c2FsZV9pbmZvOltdXHJcblx0XHRcdFx0XHR9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPlui0reeJqei9puS7t+agvFxyXG5cdFx0XHRnZXRfdXNlcl9jYXJ0OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGNoYW5nZV9jYXJ0ID0gW11cclxuXHRcdFx0XHRpZih0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCl7IC8v5YWI5Yik5pat5piv5ZCm5pyJ5YWo6YCJ5LqG55qE6K6i5Y2VXHJcblx0XHRcdFx0XHRcdFx0bGV0IGFjdF9pZCA9ICcnXHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkKXtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJ0ID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkOmFjdF9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDp0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VfY2FydC5wdXNoKGNhcnQpXHJcblx0XHRcdFx0XHRcdH0gZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IGo9MDtqPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7aisrKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkKXsgLy/liKTlrprpgInmi6nkuobnmoTorqLljZVcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGFjdF9pZCA9ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBjYXJ0X2lkID0gW11cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9pZC5wdXNoKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jYXJ0X2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgY2FydCA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQ6YWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDpjYXJ0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlX2NhcnQucHVzaChjYXJ0KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDonY2FsY3VsYXRlJyxcclxuXHRcdFx0XHRcdGNhcnQ6Y2hhbmdlX2NhcnRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHRcdC8vIHRvdGFsX3ByaWNlOjAsLy/mgLvku7dcclxuXHRcdFx0XHRcdFx0Ly8gc2FsZV9wcmljZTowLC8v5oC76K6h5LyY5oOgXHJcblx0XHRcdFx0XHRcdC8vIGhkX2Rpc2NvdW50OiAwLC8v5rS75Yqo5LyY5oOgMjAyMC4xMS4wNFxyXG5cdFx0XHRcdFx0XHQvLyBvbmxpbmVfcGF5OiAwLC8v5Zyo57q/5pSv5LuYXHJcblx0XHRcdFx0XHRcdC8vIG9mZmxpbmVfcGF5OiAwLC8v57q/5LiL5pSv5LuYXHJcblx0XHRcdFx0XHRcdC8vIG9mZl9zYWxlOiAwLC8v5Y675o6J5LyY5oOg5ZCO5bqU5LuYMjAyMC4xMS4wMlxyXG5cdFx0XHRcdFx0XHQvLyBzYWxlX2luZm86IFtdLy/kvJjmg6Dkv6Hmga9cclxuXHRcdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0gZGF0YVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRzYWxlX2luZm86W11cclxuXHRcdFx0XHRcdFx0fS8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhjaGFuZ2VfY2FydClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y6757uT566XXHJcblx0XHRcdGdvVG9TZXR0bGVtZW50OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+WOu+e7k+eulycpXHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS55ZWG5ZOB6KeE5qC8XHJcblx0XHRcdHNob3dTZXRTcGVjOiBmdW5jdGlvbihza3VfaWQsZW5jcnlwdGVkX2lkLG51bWJlcixjYXJ0X2lkKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5lbmNyeXB0ZWRfaWQgPSBlbmNyeXB0ZWRfaWRcclxuXHRcdFx0XHR0aGF0LnNrdV9pZCA9IHNrdV9pZFxyXG5cdFx0XHRcdHRoYXQuY2FydF9pZCA9IGNhcnRfaWRcclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdnb29kc3NwdWRldGFpbHMnLFxyXG5cdFx0XHRcdFx0ZW5jcnlwdGVkX2lkOiBlbmNyeXB0ZWRfaWQsXHJcblx0XHRcdFx0XHRza3VfaWQ6IHNrdV9pZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiLCBkYXRhKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5nb29kc0NvbnRlbnRMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnNwZWMgPSB0aGF0LmFzc2VtYmxlU3BlYyhkYXRhLnNrdS51c2VyX3NwZWMsIDEpXHJcblx0XHRcdFx0XHRcdHRoYXQucGF5X3R5cGUgPSBkYXRhLnNrdS5wYXlfdHlwZVxyXG5cdFx0XHRcdFx0XHR0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjID0gIXRoYXQudGhpc19zaG93X2dvb2RzX3NwZWNcclxuXHRcdFx0XHRcdFx0dGhhdC51c2VzX2NhcmRMaXN0ID0gdGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5jYXJkX2xpc3RcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QocmVzLmRhdGEubWVzc2FnZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vnoa7lrprkv67mlLnop4TmoLxcclxuXHRcdFx0b3JkZXJTZXQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDonY2hhbmdjYXJ0JyxcclxuXHRcdFx0XHRcdHR5cGU6MSxcclxuXHRcdFx0XHRcdGNhcnRfaWQ6dGhhdC5jYXJ0X2lkLFxyXG5cdFx0XHRcdFx0bnVtOnRoYXQuc2V0TmV3R29vZHNOdW1iZXIsXHJcblx0XHRcdFx0XHRza3VfaWQ6dGhhdC5za3VfaWQsXHJcblx0XHRcdFx0XHRpc19wb3N0OnRoYXQuY2xhc3NfdHlwZSxcclxuXHRcdFx0XHRcdGJ1eV90eXBlOnRoYXQucGF5X3R5cGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlYyA9ICF0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjXHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+WKoOWHj+aVsOWtl1xyXG5cdFx0XHRyZWR1Y2U6ZnVuY3Rpb24oaW5kZXgpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgKz0gaW5kZXhcclxuXHRcdFx0XHRpZih0aGF0LnNldE5ld0dvb2RzTnVtYmVyID49IHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCl7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1lbHNlIGlmKHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPCB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQpe1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdClcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi+k+WFpeaDs+imgeeahOaVsOmHj1xyXG5cdFx0XHRjaGFuZ2VHb29kc051bWJlcjpmdW5jdGlvbihldmVudCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IHZhbHVlXHJcblx0XHRcdFx0aWYodGhhdC5zZXROZXdHb29kc051bWJlciA+PSB0aGF0LmNvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0KXtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1lbHNlIGlmKHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0KXtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pSv5LuY5pa55byPXHJcblx0XHRcdGNoYW5nZVBheTogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnBheV90eXBlID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlQ2xhc3M6ZnVuY3Rpb24oaW5kZXgpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuY2xhc3NfdHlwZSA9IGluZGV4XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZVNwZWM6ZnVuY3Rpb24oaW5kZXgsc2luZGV4KXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbmRleCxzaW5kZXgpXHJcblx0XHRcdFx0aWYodGhhdC5zcGVjW2luZGV4XS5hdHRyW3NpbmRleF09PTApe1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRTcGVjKGluZGV4LHNpbmRleClcclxuXHRcdFx0XHR9ZWxzZSBpZih0aGF0LnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XT09MSl7XHJcblx0XHRcdFx0XHR0aGF0LmNhbmNlbFNwZWMoaW5kZXgsc2luZGV4KVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkv67mlLnop4TmoLznmoTkvJjmg6Dkv6Hmga9cclxuXHRcdFx0c2VlTW9yZTpmdW5jdGlvbihpbmRleCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYoaW5kZXg9PTApe1xyXG5cdFx0XHRcdFx0aWYodGhhdC51c2VzX2NhcmRMaXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdGludGVyZmFjZUlkOidpZHNfZ2V0X2NhcmQnLFxyXG5cdFx0XHRcdFx0XHRcdGNhcmRfaWQ6dGhhdC51c2VzX2NhcmRMaXN0LFxyXG5cdFx0XHRcdFx0XHRcdGxpbWl0OjYsXHJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0OjBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImNhcmRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYodGhhdC5pc1Nob3dEaXNjb3VudCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jYXJkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuY2FyZHNbaV0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZSBpZihpbmRleD09MSl7XHJcblx0XHRcdFx0XHR0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjID0gIXRoYXQudGhpc19zaG93X2dvb2RzX3NwZWNcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fSxcdFx0XHRcclxuXHRcdFx0Ly8gdXNlclNwZWM955So5oi35Y+v6YCJ6KeE5qC877yMaXNGaXJzdD3mmK/lkKbpppbmrKHov5vlhaXvvIxub3dDaGVjaz3lvZPliY3pgInpobnvvIxpc0NhbmNlbD3mmK/lkKbngrnlh7vlj5bmtojov5vlhaVcclxuXHRcdFx0YXNzZW1ibGVTcGVjOiBmdW5jdGlvbih1c2VyU3BlYywgaXNGaXJzdCwgbm93Q2hlY2ssIGlzQ2FuY2VsKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8g5paw6KeE5qC85pWw57uE77yM5LiO5Y6f6KeE5qC8c3BlY192YWx1ZeebuOWvueW6lO+8jOeUqOS6juagh+iusOWQhOenjeeKtuaAgVxyXG5cdFx0XHRcdGxldCBzcGVjVmFsdWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKS5zcGVjX3ZhbHVlO1xyXG5cdFx0XHRcdGxldCBzcGVjID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIikuc3BlY192YWx1ZTtcclxuXHRcdFx0XHRsZXQgZGVmYXVsdFVzZXJTcGVjID0gKGlzQ2FuY2VsID09IDEpID8gXCJcIiA6IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpLnNrdS5zcGVjX2F0dHI7XHRcdFx0XHRcclxuXHRcdFx0XHQvLyDpgY3ljobop4TmoLznsbvlnotcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHNwZWNWYWx1ZSkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiBzcGVjVmFsdWVbaV0uYXR0cikge1xyXG5cdFx0XHRcdFx0XHQvLyDnrKzkuIDmrKHov5vlhaXlhajpg6jlj6/pgInvvIwwPeWPr+mAie+8jDE96YCJ5LitXHJcblx0XHRcdFx0XHRcdGlmIChpc0ZpcnN0ID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRzcGVjW2ldLmF0dHJba10gPSAwO1xyXG5cdFx0XHRcdFx0XHRcdC8vIOmBjeWOhum7mOiupOmAieaLqeinhOagvFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGogaW4gZGVmYXVsdFVzZXJTcGVjKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoayA9PSBkZWZhdWx0VXNlclNwZWNbal0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY1tpXS5hdHRyW2tdID0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8g55So5oi35Y+v6YCJ6KeE5qC85LiO5pW05Liq6KeE5qC86L+b6KGM5Yy56YWN77yM5Yy56YWN5oiQ5Yqf54q25oCB5pS55Li65Y+v6YCJ54q25oCBXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiBpbiB1c2VyU3BlYykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGsgPT0gdXNlclNwZWNbal0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY1tpXS5hdHRyW2tdID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8g5Yik5pat5b2T5YmN6YCJ5oup6aG55Lit5piv5ZCm5pyJ5LiN5a2Y5Zyo55So5oi35Y+v6YCJ6KeE5qC877yM5aaC5pyJ6L+b6KGM5Yig6ZmkXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgbiBpbiBub3dDaGVjaykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHVzZXJTcGVjLmluZGV4T2YocGFyc2VJbnQobm93Q2hlY2tbbl0pKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRub3dDaGVjay5zcGxpY2UobiwgMSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8g5pi+56S65b2T5YmN6YCJ5Lit6KeE5qC8XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgbSBpbiBub3dDaGVjaykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGsgPT0gbm93Q2hlY2tbbV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY1tpXS5hdHRyW2tdID0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHNwZWM7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieaLqeinhOagvFxyXG5cdFx0XHRnZXRTcGVjOiBmdW5jdGlvbihpbmRleCxzaW5kZXgpIHtcclxuXHRcdFx0XHRjb25zdCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoYXQuc3BlY1tpbmRleF0uYXR0cikge1xyXG5cdFx0XHRcdFx0dGhhdC5zcGVjW2luZGV4XS5hdHRyW2ldID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5zcGVjW2luZGV4XS5hdHRyW3NpbmRleF0gPSAxO1xyXG5cdFx0XHRcdC8vIOafpeaJvuW9k+WJjemAieaLqeaVsOaNrlxyXG5cdFx0XHRcdGxldCBub3dDaGVjayA9IFtdO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhhdC5zcGVjKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIHRoYXQuc3BlY1tpXS5hdHRyKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LnNwZWNbaV0uYXR0cltrXSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0bm93Q2hlY2sucHVzaChrKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDliKTmlq3lvZPliY3ngrnlh7vop4TmoLzmmK/lkKblnKjnlKjmiLflhYHorrjpgInmi6nojIPlm7TvvIzlnKjlsLHnm7TmjqXmj5DkuqTvvIzkuI3lnKjlsLHmj5DkuqTlvZPliY3op4TmoLxcclxuXHRcdFx0XHRsZXQgdXNlclNwZWMgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKS5za3UudXNlcl9zcGVjO1xyXG5cdFx0XHRcdGxldCBzcGVjQXR0ciA9IFwiXCI7XHJcblx0XHRcdFx0aWYgKHVzZXJTcGVjKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIHVzZXJTcGVjKSB7XHJcblx0XHRcdFx0XHRcdGlmICh1c2VyU3BlYy5pbmRleE9mKHBhcnNlSW50KHNpbmRleCkpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0c3BlY0F0dHIgPSBbc2luZGV4XTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzcGVjQXR0ciA9IG5vd0NoZWNrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNwZWNBdHRyID0gbm93Q2hlY2s7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiBcInNlbGVjdHNrdVwiLFxyXG5cdFx0XHRcdFx0ZW5jcnlwdGVkX2lkOiB0aGF0LmVuY3J5cHRlZF9pZCxcclxuXHRcdFx0XHRcdHNwZWNfYXR0cjogc3BlY0F0dHJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g6YeN5paw5YKo5a2Y5paw55So5oi35Y+v5Lul6YCJ6aG5XHJcblx0XHRcdFx0XHRsZXQgZ29vZHNEZXRhaWwgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKTtcclxuXHRcdFx0XHRcdGdvb2RzRGV0YWlsLnNrdS51c2VyX3NwZWMgPSByZXMuZGF0YS5kYXRhLnVzZXJfc3BlYztcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIsIGdvb2RzRGV0YWlsKTtcclxuXHRcdFx0XHRcdHRoYXQuc3BlYyA9IHRoYXQuYXNzZW1ibGVTcGVjKHJlcy5kYXRhLmRhdGEudXNlcl9zcGVjLCByZXMuZGF0YS5kYXRhID09IFwiXCIgPyAxIDogMCwgbm93Q2hlY2spXHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnNrdV9pZCA9IGRhdGEuaWRcclxuXHRcdFx0XHRcdFx0dGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5zYWxlX3ByaWNlID0gZGF0YS5zYWxlX3ByaWNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcdFx0XHRcclxuXHRcdFx0Ly8g5Y+W5raI6YCJ6aG5XHJcblx0XHRcdGNhbmNlbFNwZWM6IGZ1bmN0aW9uKGluZGV4LHNpbmRleCkge1xyXG5cdFx0XHRcdGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdID0gMDtcclxuXHRcdFx0XHQvLyDmn6Xmib7lvZPliY3pgInmi6nmlbDmja5cclxuXHRcdFx0XHRsZXQgbm93Q2hlY2sgPSBbXTtcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoYXQuc3BlYykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiB0aGF0LnNwZWNbaV0uYXR0cikge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5zcGVjW2ldLmF0dHJba10gPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdG5vd0NoZWNrLnB1c2goayk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6IFwic2VsZWN0c2t1XCIsXHJcblx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IHRoYXQuZW5jcnlwdGVkX2lkLFxyXG5cdFx0XHRcdFx0c3BlY19hdHRyOiBub3dDaGVja1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHQvLyDph43mlrDlgqjlrZjmlrDnlKjmiLflj6/ku6XpgInpoblcclxuXHRcdFx0XHRcdGxldCBnb29kc0RldGFpbCA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpO1xyXG5cdFx0XHRcdFx0Z29vZHNEZXRhaWwuc2t1LnVzZXJfc3BlYyA9IHJlcy5kYXRhLmRhdGEudXNlcl9zcGVjO1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIiwgZ29vZHNEZXRhaWwpO1xyXG5cdFx0XHRcdFx0dGhhdC5zcGVjID0gdGhhdC5hc3NlbWJsZVNwZWMocmVzLmRhdGEuZGF0YS51c2VyX3NwZWMsIHJlcy5kYXRhLmRhdGEgPT0gXCJcIiA/IDEgOiAwLCBub3dDaGVjaywgMSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDllYblk4FcclxuXHRcdFx0Z29Ub0dvb2RzOiBmdW5jdGlvbihpZCwgcGlkKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbD9za3VfaWQ9JHtpZH0mJmVuY3J5cHRlZF9pZD0ke3BpZH1gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4uuS9oOaOqOiNkFxyXG5cdFx0XHRnZXRMaWtlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ3VzZXJyZWNvbW1lbmRlZGdvb2Rzc3B1bGlzdCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnMycsXHJcblx0XHRcdFx0XHRvZmZzZXQ6IHRoYXQub2Zmc2V0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gdGhhdC5wcm9kdWN0TGlzdHMuY29uY2F0KGRhdGEpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5rKh5pyJ5pWw5o2uJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vkvJjmg6DmiJbogIXljaHliLhcclxuXHRcdFx0Y2hhbmdlQWN0aXZpdHk6ZnVuY3Rpb24oaW5kZXgsbGlzdCxpbmZvKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZihpbmRleD09MCl7IC8v5Y2h5Yi4XHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOidpZHNfZ2V0X2NhcmQnLFxyXG5cdFx0XHRcdFx0XHRjYXJkX2lkOmxpc3QsXHJcblx0XHRcdFx0XHRcdGxpbWl0OjYsXHJcblx0XHRcdFx0XHRcdG9mZnNldDowXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LmFjdF9pbmZvID0gaW5mb1xyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJjYXJkXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHRcdFx0XHRpZih0aGF0LmlzU2hvd0Rpc2NvdW50KXtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jYXJkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5jYXJkc1tpXS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZydcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gW11cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2UgaWYoaW5kZXg9PTEpey8v5LyY5oOgXHJcblx0XHRcdFx0XHR0aGF0LmFjdF9pbmZvID0gbGlzdFxyXG5cdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0fWVsc2UgaWYoaW5kZXg9PTIpe1xyXG5cdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0XHRpZighdGhhdC5pc1Nob3dEaXNjb3VudCl7XHJcblx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBbXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6aKG5Y+W5Y2h5Yi4XHJcblx0XHRcdGdldENhcmRzOiBmdW5jdGlvbihjYXJkSWQsIHByb21wdCxpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmIChwcm9tcHQgPT0gJycpIHtcclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjYXJkZ2V0JyxcclxuXHRcdFx0XHRcdFx0Y2FyZF9pZDogY2FyZElkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImNhcmRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QoJ+mihuWPluaIkOWKnycpXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdC5jYXJkc1tpbmRleF0uc2FsZWNhcmRfdXNlcl9jb3VudCA9IHRoYXQuY2FyZExpc3QuY2FyZHNbaW5kZXhdLnNhbGVjYXJkX3VzZXJfY291bnQrMVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KHByb21wdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS9v+eUqOWNoeWIuFxyXG5cdFx0XHR1c2VDYXJkOmZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5L2/55So55qE5Y2h5Yi4aWQ6JyxpZClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1RpY2tldDogZnVuY3Rpb24oY2FyZElkKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNhcmRMaXN0LmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAodGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5pZCA9PSBjYXJkSWQpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlscyA9ICF0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzXHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy10b3AucG5nJ1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPluW5v+WRilxyXG5cdFx0XHRhZHZlcnRpc2luZzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdnZXRhZHZlcnRpc2luZycsXHJcblx0XHRcdFx0XHRsb2NhdGlvbjogMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImhvbWVcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuc3BlY2lhbExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQuc3BlY2lhbExpc3QpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W5Y+v6aKG5Y+W5Y2h5Yi4XHJcblx0XHRcdGdldENhcmQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDpcIm1heV9yZWNlaXZlXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJjYXJkXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LmdldF9jb3VudCA9IGRhdGEubnVtXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6aKG5Yi45Lit5b+DXHJcblx0XHRcdGdvVG9HYWluOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvbXkvbXlfY2FyZF9nYWluYCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInkuK3llYblk4FcclxuXHRcdFx0Y2hhbmdlUG9yZHVjdDogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmJ0bm51bSA9IGluZGV4XHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdCA9IHt9XHJcblx0XHRcdFx0dGhhdC5nZXRVc2VyQ2FydCgpXHJcblx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRzYWxlX2luZm86W11cclxuXHRcdFx0XHR9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0fSxcclxuXHRcdFx0Z29Ub0dvb2RzQ2xhc3NmaXk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2NsYXNzaWZ5YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlLbol4/jgIHnm7jkvLzjgIHliKDpmaRcclxuXHRcdFx0c2V0U3RhdGU6ZnVuY3Rpb24oaW5kZXgsaWQsbnVtLGNhdGVnb3J5X2lkLGxpc3ROYW1lLGVuY3J5cHRlZF9pZCl7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW5kZXgsY2FydF9pZCxza3VfaWQsbnVtKVxyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8vIGluZGV4IDAg5pS26JePIDEg55u45Ly8IDIg5Yig6ZmkXHJcblx0XHRcdFx0aWYoaW5kZXg9PTApey8v5pS26JePXHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOidjb2xsZWN0Z29vZHNzcHUnLFxyXG5cdFx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6ZW5jcnlwdGVkX2lkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KCflt7LmlLbol48nKVxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlID09IDEwMjApe1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QoJ+ivpeWVhuWTgeW3suaUtuiXjycpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2UgaWYoaW5kZXg9PTEpey8v55u45Ly8XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19saXN0P25hbWU9JHtsaXN0TmFtZX0maWQ9JHtjYXRlZ29yeV9pZH1gLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSBpZihpbmRleD09Mil7Ly/liKDpmaRcclxuXHRcdFx0XHRcdGxldCBjYXJ0X2lkID0gW11cclxuXHRcdFx0XHRcdGNhcnRfaWQucHVzaChpZClcclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6J2NoYW5nY2FydCcsXHJcblx0XHRcdFx0XHRcdHR5cGU6MixcclxuXHRcdFx0XHRcdFx0Y2FydF9pZDpjYXJ0X2lkLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50Oifnoa7lrpropoHliKDpmaTmraTorqLljZXlkJc/JyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QocmVzLmRhdGEubWVzc2FnZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LDUwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LDgwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vliIbnsbvliJfooahcclxuXHRcdFx0Z29vZHNDbGFzc2ZpeTogZnVuY3Rpb24oaWQsIGxpc3ROYW1lKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3Q/bmFtZT0ke2xpc3ROYW1lfSZpZD0ke2lkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS55ZWG5ZOB5pWw6YePXHJcblx0XHRcdHNldEdvb2RzTnVtYmVyOmZ1bmN0aW9uKGlkLGNhcnRfbnVtKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgY2FydF9pZCA9IFtdXHJcblx0XHRcdFx0Y2FydF9pZC5wdXNoKGlkKVxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOidjaGFuZ2NhcnQnLFxyXG5cdFx0XHRcdFx0dHlwZTowLFxyXG5cdFx0XHRcdFx0Y2FydF9pZDpjYXJ0X2lkLFxyXG5cdFx0XHRcdFx0bnVtOmNhcnRfbnVtLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliqDlh4/mlbDph49cclxuXHRcdFx0c2V0TnVtYmVyOiBmdW5jdGlvbihpZCwgbnVtYmVyLCBrLCBpcykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBnb29kc051bWJlciA9IDBcclxuXHRcdFx0XHRsZXQgY2FydF9udW0gPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtXHJcblx0XHRcdFx0Y2FydF9udW0gKz0gbnVtYmVyXHJcblx0XHRcdFx0Z29vZHNOdW1iZXIgPSBjYXJ0X251bVxyXG5cdFx0XHRcdGlmIChnb29kc051bWJlciA+PSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZ29vZHNOdW1iZXIgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gZ29vZHNOdW1iZXJcclxuXHRcdFx0XHR0aGF0LnNldEdvb2RzTnVtYmVyKGlkLGdvb2RzTnVtYmVyKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDovpPlhaXmlbDph49cclxuXHRcdFx0c2V0UG9yZHVjdE51bWJlcjogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0XHRcdFx0bGV0IGsgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQua1xyXG5cdFx0XHRcdGxldCBpcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pc1xyXG5cdFx0XHRcdGxldCBpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG5cdFx0XHRcdGlmKHZhbHVlPT0nJyl7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IDFcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSAxXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtID0gcGFyc2VJbnQodmFsdWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBnb29kc051bWJlciA9IDBcclxuXHRcdFx0XHRsZXQgY2FydF9udW0gPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtXHJcblx0XHRcdFx0Z29vZHNOdW1iZXIgPSBjYXJ0X251bVxyXG5cdFx0XHRcdGlmIChnb29kc051bWJlciA+PSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZ29vZHNOdW1iZXIgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBnb29kc051bWJlclxyXG5cdFx0XHRcdHRoYXQuc2V0R29vZHNOdW1iZXIoaWQsZ29vZHNOdW1iZXIpXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHRcclxuXHQudG9wLWJhciB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdH1cclxuXHRcclxuXHQuYmFjay10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDM4cnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQuYmFjayB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0fVxyXG5cdFxyXG5cdC5iYWNrIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzNnJweDtcclxuXHRcdGhlaWdodDogMzZycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5iYWNrLXRpdGxlIC50aXRsZSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Zm9udC1zaXplOiAzN3JweDtcclxuXHR9XHJcblx0LmNhcnQtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdH1cclxuXHJcblx0LmVtcHR5LWNhcnQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmVtcHR5LWNhcnQtaW1hZ2Uge1xyXG5cdFx0cGFkZGluZzogNjhycHggMTc3cnB4IDQwcnB4IDE3NHJweDtcclxuXHR9XHJcblxyXG5cdC5lbXB0eS1jYXJ0LWltYWdlIGltYWdlIHtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRoZWlnaHQ6IDI1NHJweDtcclxuXHR9XHJcblxyXG5cdC5nby1zdHJvbGwge1xyXG5cdFx0d2lkdGg6IDIyMHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogODdycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY2Njk5IDAlLCAjZmEzNDc1IDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiA0MHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lhbC1wZXJmb3JtYW5jZSB7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdC5zcGVjaWFsTGlzdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHQuc3BlY2lhbExpc3QgaW1hZ2V7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5yZWNvbW1lbmQtdG8teW91IHtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0d2lkdGg6IDZycHg7XHJcblx0XHRoZWlnaHQ6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzU3NjtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5jaGVja2VkTGluZSB7XHJcblx0XHRcdHBhZGRpbmc6IDAgMjBycHg7XHJcblx0XHR9XHJcblx0XHJcblx0LmNoZWNrZWRMaW5lIHZpZXcge1xyXG5cdFx0aGVpZ2h0OiA0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5yZWxhdGVkLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5zdWJqZWN0LWNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LXRvLW5hdiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGhlaWdodDogOTZycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0fVxyXG5cclxuXHQucHJvZHVjdC1uYW1lIHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRsaW5lLWhlaWdodDogOTZycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZFBvcmR1Y3Qge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LmVuZC1jb250IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQuZGlzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHQuY2FyZC10b3Age1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tdG9wOiA1cnB4O1xyXG5cdH1cclxuXHRcclxuXHQudGFiQmFyTGlzdCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0XHJcblx0LmNhbi1yZWNlaXZlIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMjFycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY2FuLXJlY2VpdmUgLnRleHQge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHR9XHJcblx0XHJcblx0LnRleHRzIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3OXJweDtcclxuXHR9XHJcblx0LmdvLXJlY2VpdmUge1x0XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHRcclxuXHQuZ28tcmVjZWl2ZSAudHJpYW5nbGUtbGluZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiA0MHJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICM1YmUzZDUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC01NnJweDtcclxuXHR9XHJcblx0LmNoYXJhY3RlciB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlM2Q1O1xyXG5cdFx0d2lkdGg6IDE3MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jYXJ0LXNob3BwaW5nLXNob3cge1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGFuZ2UtY2hlY2stc2VlLW1vcmUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZS1jaGVjayB0ZXh0IHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdC5kZWxldGUtZ29vZHN7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuYWRkLW9uLWl0ZW0ge1xyXG5cdFx0d2lkdGg6IDg4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnNwZWNpYWwtb2ZmZXIge1xyXG5cdFx0cGFkZGluZzogMHJweCAxMHJweCAxMHJweCA1MHJweDtcclxuXHR9XHJcblxyXG5cdC5mdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTJycHg7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZThmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lmaWMtYWN0aXZpdHkge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5hY3Rpdml0eS10aW1lIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYWN0aXZpdHktdGltZSB0ZXh0IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bWFyZ2luOiAwIDhycHg7XHJcblx0fVxyXG5cclxuXHQuaG91c2VzLFxyXG5cdC5taW51dGUsXHJcblx0LnNlY29uZCB7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tbGVmdDogNXJweDtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudC1hbGwge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQuc2hvd19nb29kc19zdGF0ZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQudGhpc19pc19nb29kc19zdGF0ZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LnNldF9zdGF0ZXtcclxuXHRcdHdpZHRoOiA4NHJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAyOHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDY1cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LmNvbGxlY3Rpb257XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRjlCQjAwIDAlLCAjRjlCQjAwIDEwMCUpO1xyXG5cdH1cclxuXHQuc2ltaWxhcntcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNGRjk5NjYgMCUsICNGRjk5NjYgMTAwJSk7XHJcblx0fVxyXG5cdC50aGlzX2lzX2dvb2RzX3N0YXRlIC5kZWxldGV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuXHQuc2V0X3N0YXRlIHRleHR7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmNoZWNrYm94LWl0ZW0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZ29vZHMtaW5mbyB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tc2hvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjRjBGMEYwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2Vze1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQucG9yZHVjdC1pdGVtLWltYWdlcyAuaW52YWxpZC1nb29kc3tcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG5cdC5kZWxldGUtaW52YWxpZC1nb29kc3tcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNzVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXIge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZSAucHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdH1cclxuXHJcblx0Lm1lbWJlci1wcmljZSB7XHJcblx0XHR3aWR0aDogNjRycHg7XHJcblx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwMDAgMCUsICMyYzJjMmMgMTAwJSksIGxpbmVhci1ncmFkaWVudCgjMjgyODI4LCAjMjgyODI4KTtcclxuXHRcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsLCBub3JtYWw7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdGNvbG9yOiAjZmVmZWZlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0fVxyXG5cclxuXHQucHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblx0LnB1cmNoYXNlTGltaXRhdGlvbk51bWJlciB0ZXh0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHQub2ZmbGluZV9wYXktb25saW5lX3BheS1jaGVja2VkTnVtYmVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5vZmZsaW5lX3BheS1vbmxpbmVfcGF5IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQub25saW5lX3BheSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZE51bWJlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0d2lkdGg6IDE4MHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRib3JkZXI6IHNvbGlkIDFycHggI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTnVtYmVyIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuaW5wdXQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LmlucHV0IC5jYXJ0X251bSB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1cnB4O1xyXG5cdH1cclxuXHJcblx0LnN1YnRyYWN0LFxyXG5cdC5hZGQge1xyXG5cdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cclxuXHQucG9yZHVjdC1pdGVtLW5hbWUge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucyB7XHJcblx0XHR3aWR0aDogMzYwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCAxNnJweDtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucy1uYW1lIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0fVxyXG5cdC52ZXJzaW9ucy1uYW1lLWl0ZW17XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cdC52ZXJzaW9ucy1uYW1lLWl0ZW06Zmlyc3QtY2hpbGR7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51bmZvbGQge1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblx0Lm5hbWUtcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXIge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHRcclxuXHQubWFudGxlZHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG5cdFx0ei1pbmRleDogNTM7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdH1cclxuXHQuZGlzY291bnRzLXRpdGxle1x0XHRcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0cGFkZGluZy10b3A6IDI1cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuZGlzY291bnRzLWhpbnR7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuY2FyZF9saXN0e1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0fVxyXG5cdC5jYXJkLXRpdGxlLWFsbC1jYXJke1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdC5tb3JlLWNhcmR7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cdC5kZWxldGUtZGlzY291bnR7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDI1cnB4O1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHQuZGVsZXRlLWRpc2NvdW50IGltYWdle1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblx0LnNldHRsZW1lbnR7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5zZXR0bGVtZW50LWluZm97XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDMwcnB4O1xyXG5cdH1cclxuXHQudG90YWwtZGlzY291bnR7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQudG90YWwtZGlzY291bnQgLnRvdGFse1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDBycHg7XHJcblx0fVxyXG5cdC51c2UtZGlzY291bnR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0LnVzZS1kaXNjb3VudC1kZXRhaWxlZHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzRycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHBhZGRpbmc6IDAgMTVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdC5nb1NldHRsZW1lbnR7XHJcblx0XHR3aWR0aDogMTgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDcwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzVycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNldF9nb29kc19zcGVjX2NvbnRlbnR7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiA1MjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cdC5pc1Nob3ctY29udGVudCB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAyMHJweDtcclxuXHR9XHJcblx0LnNwZWNzLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuc3BlY3MtaGludCB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjJycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5zcGVjcyB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAzMHJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cdFxyXG5cdC5wYXktdHh0IHtcclxuXHRcdHBhZGRpbmctbGVmdDogMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblx0XHJcblx0LnNwZWNzLWNvbnQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0zMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblx0XHJcblx0LnNwZWNzLWNvbnQtcGF5IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5saSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRsaW5lLWhlaWdodDogNTJycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MnJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjVycHg7XHJcblx0XHRib3JkZXI6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHRcdGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcblx0XHRtYXJnaW46IDIwcnB4IDAgMCAyMHJweDtcclxuXHR9XHJcblx0XHJcblx0LnNwZWNzLWNvbnQtcGF5IC5saSB7XHJcblx0XHRtYXJnaW46IDAgMCAwIDMwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQubGktaG92ZXIge1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNmYTM0NzU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZlOGYwO1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdFxyXG5cdC5zcGVjcy1jb250IC5saS1ncmF5IHtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHQuYWRkLWNhcmQtdG9we1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5sZWZ0LWhlYWRfaW1nIGltYWdle1xyXG5cdFx0d2lkdGg6IDI0MHJweDtcclxuXHR9XHJcblx0LnJpZ2h0LWdvb2RzLWluZm97XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBycHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHQuZ29vZHMtZGlzY291bnRze1xyXG5cdFx0d2lkdGg6IDE2MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzg4MzRmYSAwJSwgI2JjNjZmZiAxMDAlKTtcclxuXHR9XHJcblx0Lmdvb2QtcHJpY2V7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQubWFya2V0X3ByaWNle1xyXG5cdFx0Y29sb3I6ICNGRjAwMDA7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQubWVtYmVyX3ByaWNle1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxMHJweCAxMHJweCAwO1xyXG5cdH1cclxuXHQubWVtYmVyX3RpdGxle1xyXG5cdFx0cGFkZGluZzogMTBycHggMTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHR9XHJcblx0LnN0b3JlLXNrdV9ub3tcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHQuc2t1X25ve1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHQuaXNTaG93IC5zcGVjcy1jb250LXBheXtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDAgMDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHQuaXNTaG93IC5zcGVjcy1jb250e1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cdC5pc1Nob3cgLnNwZWNzLWNvbnQtcGF5IC5wYXktdHh0e1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0LmNoYW5nZU51bWJlcntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LmNoYW5nZU51bWJlciAucGF5LXR4dHtcclxuXHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDQwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdC5udW1iZXItaGludHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogICNmYTM0NzU7XHJcblx0fVxyXG5cdC5udW1iZXItaGludCB0ZXh0e1xyXG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jaGFuZ2UtaW5wdXR7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHR9XHJcblx0Lm51bWJlci1pbnB1dHtcclxuXHRcdGhlaWdodDogODRycHg7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGJvcmRlci10b3A6IDFycHggc29saWQgIzk5OTk5OTtcclxuXHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzk5OTk5OTtcclxuXHR9XHJcblx0Lm51bWJlci1pbnB1dCBpbnB1dHtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJvcmRlcjogMDtcdFx0XHJcblx0fVxyXG5cdC5yZWR1Y2UsLmFkZC1udW1iZXJ7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiA1NnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICM5OTk5OTk7XHJcblx0fVxyXG5cdC5rZWVwLW9yZGVye1x0XHRcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHJcblx0fVxyXG5cdC5idXR0b257XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDQwcnB4O1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0fVxyXG5cdC5rZWVwLW9yZGVyLWJ1dHRvbntcclxuXHRcdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblx0LmRlbGV0ZS1zZWUtbW9yZS1kaXNjb3VudHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMjBycHg7XHJcblx0XHRyaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5kZWxldGUtc2VlLW1vcmUtZGlzY291bnQgaW1hZ2V7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNDY2NzQ1NzYwOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=