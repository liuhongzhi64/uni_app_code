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
        sale_info: [] },
      //订单的信息
      show_discount: false, //显示优惠的弹窗
      verification_specAttr: [] //验证选规格版本
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
          // let former_sku_list = uni.getStorageSync("contentList").sku_list;
          // console.log(former_sku_list) //为了判定数据是否有选中的状态
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
        that.order_info = {
          sale_info: [] };
        //订单的信息
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
      if (that.contentList.sku_list[k].goods_list[is].checked) {
        that.get_user_cart();
      } else
      {
        var new_arr = [];
        for (var _i5 = 0; _i5 < that.contentList.sku_list.length; _i5++) {
          for (var j = 0; j < that.contentList.sku_list[_i5].goods_list.length; j++) {
            new_arr.push(that.contentList.sku_list[_i5].goods_list[j].checked);}
          // if(!that.contentList.sku_list[i].goods_list[j].checked){
          // 	
          // }
        }
        var _flag = new_arr.every(function (item, index, new_arr) {
          // console.log(item,index)
          return item === false;
        });
        // console.log(flag)
        if (_flag) {
          that.order_info = {
            sale_info: [] };
          //订单的信息
        } else {
          that.get_user_cart();
        }
      }
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
      } else {
        for (var _i6 = 0; _i6 < that.contentList.sku_list.length; _i6++) {
          that.contentList.sku_list[_i6].all_checked = false;
          for (var _j = 0; _j < that.contentList.sku_list[_i6].goods_list.length; _j++) {
            that.contentList.sku_list[_i6].goods_list[_j].checked = false;
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

      if (change_cart.length > 0) {
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
      }

      // console.log(change_cart)
    },
    // 去结算
    goToSettlement: function goToSettlement() {
      var that = this;
      var sku_list = that.contentList.sku_list;
      var cart_info = {}; //单条购物车的选中的数据
      var act_id = ''; //活动id 
      var cart_id_list = []; //订单id列表
      if (that.allchecked) {//判定购物车是否全选了，全选直接存储对应的购物车活动id和购物车id
        for (var i = 0; i < sku_list.length; i++) {
          if (sku_list[i].act_id) {
            act_id = sku_list[i].act_id;
            cart_info = {
              act_id: act_id,
              cart_id_list: sku_list[i].cart_id_list };

          } else {
            cart_info = {
              act_id: '',
              cart_id_list: sku_list[i].cart_id_list };

          }
          cart_id_list.push(cart_info);
        }
      } else {//如果是没有全选，就循环判定购物车的分类列表是否有全选的，有，先导入，没有再循环内部的商品是否选中
        for (var _i7 = 0; _i7 < sku_list.length; _i7++) {
          if (sku_list[_i7].all_checked) {//分类列表是否有全选的，有，先导入，没有再循环内部的商品是否选中
            if (sku_list[_i7].act_id) {
              act_id = sku_list[_i7].act_id;
              cart_info = {
                act_id: act_id,
                cart_id_list: sku_list[_i7].cart_id_list };

            } else {
              cart_info = {
                act_id: '',
                cart_id_list: sku_list[_i7].cart_id_list };

            }
            cart_id_list.push(cart_info);
          } else {//循环内部的商品是否选中
            var cart_list = [];
            for (var j = 0; j < sku_list[_i7].goods_list.length; j++) {
              if (sku_list[_i7].act_id) {
                act_id = sku_list[_i7].act_id;
              }
              if (sku_list[_i7].goods_list[j].checked) {
                cart_list.push(sku_list[_i7].goods_list[j].cart_id);
              }
            }
            if (cart_list.length > 0) {
              cart_info = {
                act_id: act_id,
                cart_id_list: cart_list };

              cart_id_list.push(cart_info);
            }

          }
        }
      }
      // console.log(cart_id_list,33333333)
      // uni.setStorageSync("cart_id_list", cart_id_list); //将数据存储，方便在确认订单时使用
      // 清除本地存的购物车数据
      // uni.removeStorageSync('contentList');
      if (cart_id_list.length > 0) {
        cart_id_list = JSON.stringify(cart_id_list);
        // 确认订单
        uni.navigateTo({
          url: "/pages/confirm_order/confirm_order?cart_id_list=".concat(cart_id_list) });

      } else {
        uni.showToast({
          title: '请选择商品',
          icon: 'none' });

      }

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
      var specAttr = that.verification_specAttr;
      var dataInfos = {
        interfaceId: "selectsku",
        encrypted_id: that.encrypted_id,
        spec_attr: specAttr };


      that.request.uniRequest("goods", dataInfos).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
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
              that.allchecked = false;
              that.getUserCart();
              that.order_info = {
                sale_info: [] };
              //订单的信息
            }
          });
        } else
        {
          uni.showToast({
            title: '请选择正确规格',
            icon: 'none' });

        }
      });

    },
    // 点击加减数字
    reduce: function reduce(index) {
      var that = this;
      that.setNewGoodsNumber += index;
      if (that.goodsContentList.sku.max_buy_limit == 0) {
        that.goodsContentList.sku.max_buy_limit = 999999;
      }
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
      if (that.goodsContentList.sku.max_buy_limit == 0) {
        that.goodsContentList.sku.max_buy_limit = 999999;
      }
      if (that.setNewGoodsNumber >= that.goodsContentList.sku.max_buy_limi) {
        var number = parseInt(that.goodsContentList.sku.max_buy_limi);
        that.setNewGoodsNumber = number;
      } else if (that.setNewGoodsNumber < that.goodsContentList.sku.min_buy_limit) {
        var _number2 = parseInt(that.goodsContentList.sku.min_buy_limit);
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
              } else {
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
      for (var _i8 in that.spec) {
        for (var k in that.spec[_i8].attr) {
          if (that.spec[_i8].attr[k] == 1) {
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

      that.verification_specAttr = specAttr; //用于验证是否是合理的规格选取
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
            } else {
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
      uni.removeStorageSync('contentList');
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
                    that.allchecked = false;
                    that.order_info = {
                      sale_info: [] };
                    //订单的信息
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
      // console.log(that.contentList) //想法是在修改数量的时候先把购物车的数据存储，为了判定那些数据是选中了,然后计算价格
      // uni.setStorageSync("contentList", that.contentList);
      cart_id.push(id);
      var dataInfo = {
        interfaceId: 'changcart',
        type: 0,
        cart_id: cart_id,
        num: cart_num };

      that.request.uniRequest("shoppingCart", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          for (var i = 0; i < that.contentList.sku_list.length; i++) {
            for (var j = 0; j < that.contentList.sku_list[i].goods_list.length; j++) {
              if (that.contentList.sku_list[i].goods_list[j].cart_id == cart_id) {//判定选择了的订单
                if (that.contentList.sku_list[i].goods_list[j].checked) {
                  that.get_user_cart();
                }
              }
            }
          }
          // 
          // that.getUserCart()
          // that.allchecked = false
          // that.order_info = {
          // 	sale_info:[]
          // }//订单的信息
        }
      });
    },
    // 加减数量
    setNumber: function setNumber(id, number, k, is, store, take_store) {
      var that = this;
      var goodsNumber = 0;
      var cart_num = that.contentList.sku_list[k].goods_list[is].cart_num;
      cart_num += number;
      goodsNumber = cart_num;
      if (that.contentList.sku_list[k].goods_list[is].max_buy_limit == 0) {
        that.contentList.sku_list[k].goods_list[is].max_buy_limit = 999999;
      }
      if (goodsNumber >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
        var _number3 = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit);
        goodsNumber = _number3;
        uni.showToast({
          title: "\u9650\u8D2D".concat(that.contentList.sku_list[k].goods_list[is].max_buy_limit, "\u4EF6"),
          icon: 'none' });

      } else if (goodsNumber < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
        var _number4 = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit);
        goodsNumber = _number4;
      }
      // 如果加减的数量加上销量小于库存就可以正常设置，如果大于就只能设置最大的数量加上销量等于库存量
      if (goodsNumber + take_store > store) {
        goodsNumber = store - take_store;
        uni.showToast({
          title: "\u5E93\u5B58\u91CF\u4EC5\u5269".concat(store - take_store),
          icon: 'none' });

      }

      that.contentList.sku_list[k].goods_list[is].cart_num = goodsNumber;
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
      var take_store = event.currentTarget.dataset.take_store;
      var store = event.currentTarget.dataset.store;
      var goodsNumber = 0;
      var cart_num = parseInt(value);
      goodsNumber = cart_num;
      if (that.contentList.sku_list[k].goods_list[is].max_buy_limit == 0) {
        that.contentList.sku_list[k].goods_list[is].max_buy_limit = 999999;
      }
      // 输入数量加上销量小于库存就可以正常设置，如果大于就只能设置最大的数量加上销量等于库存量
      var num = parseInt(goodsNumber);
      take_store = parseInt(take_store);
      if (num + take_store > store) {
        num = parseInt(store) - parseInt(take_store);
        that.setNewGoodsNumber = num;
        that.contentList.sku_list[k].goods_list[is].cart_num = num;
        goodsNumber = num;
        uni.showToast({
          title: "\u5E93\u5B58\u91CF\u4EC5\u5269".concat(store - take_store),
          icon: 'none' });

      }
      if (goodsNumber >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
        var number = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit);
        goodsNumber = number;
        uni.showToast({
          title: "\u9650\u8D2D".concat(that.contentList.sku_list[k].goods_list[is].max_buy_limit, "\u4EF6"),
          icon: 'none' });

      } else if (goodsNumber < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
        var _number5 = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit);
        goodsNumber = _number5;
      }
      if (value == '') {
        value = 1;
        that.contentList.sku_list[k].goods_list[is].cart_num = 1;
      } else {
        that.contentList.sku_list[k].goods_list[is].cart_num = goodsNumber;
      }
      that.setNewGoodsNumber = goodsNumber;
      that.contentList.sku_list[k].goods_list[is].cart_num = goodsNumber;
      that.setGoodsNumber(id, goodsNumber);
    },
    // 显示优惠明细
    user_discount: function user_discount() {
      var that = this;
      that.show_discount = !that.show_discount;
    },
    IKnow: function IKnow() {
      var that = this;
      that.show_discount = !that.show_discount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NjYyMyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzljYmEiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT9hZGI0IiwidW5pLWFwcDovLy9wYWdlcy9jYXJ0L2NhcnQudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NWIxNSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzRmMGYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EseUY7QUFDQUEsVUFBVSxDQUFDQyxhQUFELENBQVYsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQzdIO0FBQ3dEO0FBQ0w7QUFDcUM7OztBQUd4RjtBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQTZwQixDQUFnQiwycEJBQUcsRUFB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QSxLQW5EQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBdkZBO0FBd0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFHQTtBQUNBO0FBQ0EsT0FYQSxNQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOUlBO0FBK0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkEsTUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBOztBQUVBLEtBdktBO0FBd0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxxRUFGQTs7QUFJQTtBQUNBLFdBWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQURBO0FBRUEsd0NBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQW80QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXg0QkE7QUF5NEJBO0FBQ0E7QUFDQTtBQUNBLEtBNTRCQSxFQWxIQSxFOzs7Ozs7Ozs7Ozs7QUNqYkE7QUFBQTtBQUFBO0FBQUE7QUFBZytCLENBQWdCLDA3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBcC9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvY2FydC9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2NhcnQvY2FydC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGYwMGFkZjRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2FydC9jYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNhcnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wLWJhclwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLXRvcCc6bWVudVRvcCsncHgnLCdsaW5lLWhlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLWJvdHRvbSc6MTArJ3B4JywnYmFja2dyb3VuZC1jb2xvcic6dG9wQmFja2dyb3VuZENvbG9yLCdjb2xvcic6Y29sb3J9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJhY2stdGl0bGVcIiA6c3R5bGU9XCJbeydoZWlnaHQnOm1lbnVIZWlnaHQrJ3B4J31dXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrXCIgQGNsaWNrPVwiZ29CYWNrXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImJhY2tJbWFnZVwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+IHt7dGl0bGV9fSA8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC10by1uYXZcIiA6c3R5bGU9XCJbeyd0b3AnOm1lbnVCb3R0b20rMTArJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1uYW1lXCIgdi1mb3I9XCIoaSxrKSBpbiBwcm9kdWN0TmFtZUxpc3RcIiA6a2V5PSdrJyA6Y2xhc3M9XCJ7Y2hlY2tlZFBvcmR1Y3QgOmJ0bm51bSA9PSBrfVwiIEB0YXA9XCJjaGFuZ2VQb3JkdWN0KGspXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tbmFtZS1saW5lXCI+XHJcblx0XHRcdFx0XHR7eyBpLm5hbWUgfX0gPHRleHQ+KHt7aS5udW1iZXJ9fSk8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7Y2hlY2tlZExpbmUgOmJ0bm51bSA9PSBrfVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldz48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNhcnQtY29udGVudFwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzptZW51Qm90dG9tKzU4KydweCd9XVwiPlxyXG5cdFx0XHQ8IS0tIOi0reeJqei9puS4uuepuiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJlbXB0eS1jYXJ0XCIgdi1pZj1cInNrdV9saXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wdHktY2FydC1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY2FydEJnLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVtcHR5LWNhcnQtdGV4dFwiPiDotK3nianovabov5jmmK/nqbrnmoTlk59+IDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvLXN0cm9sbFwiIEB0YXA9J2dvVG9Hb29kc0NsYXNzZml5Jz4g5Y676YCb6YCbIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOi0reeJqei9puS4jeS4uuepuiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LWhhdmUtcHJvZHVjdFwiIHYtZWxzZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVuZC1jb250XCIgOmNsYXNzPVwie2RpczpidG5udW0gPT0gaW5kZXh9XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcHJvZHVjdE5hbWVMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmQtdG9wXCIgQHRhcD0nZ29Ub0dhaW4nPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhbi1yZWNlaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+5oKo5pyJPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dFwiPnt7Z2V0X2NvdW50fX3lvKDkuJPlsZ7kvJjmg6DliLg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0c1wiPuWPr+mihuWPln48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnby1yZWNlaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0cmlhbmdsZS1saW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXJhY3RlclwiPuWOu+mihuWPliZuYnNwOz48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvcGluZy1jYXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FydC1zaG9wcGluZy1zaG93XCIgdi1mb3I9XCIoaXRlbXMsaykgaW4gY29udGVudExpc3Quc2t1X2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWFqOmAiSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVjay1zZWUtbW9yZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGNoZWNrYm94IGNvbG9yPScjMDA3QUZGJyA6Y2hlY2tlZD1cIml0ZW1zLmFsbF9jaGVja2VkXCIgQHRhcD0nY2hlY2tlZF9jbGFzc19hbGwoayknIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IEB0YXA9J2dvb2RzQ2xhc3NmaXkoaXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUpJz4ge3tpdGVtcy5jYXRlZ29yeV90aXRsZX19ID4gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtb24taXRlbVwiIHYtaWY9XCJpdGVtcy5jYXJkcy5sZW5ndGg+MFwiIEB0YXA9XCJjaGFuZ2VBY3Rpdml0eSgwLGl0ZW1zLmNhcmRzLGl0ZW1zLmFjdF9pbmZvKVwiPiDpoobliLhcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLW9uLWl0ZW1cIiB2LWVsc2UtaWY9XCJpdGVtcy5hY3RfaW5mb1wiIEB0YXA9XCJjaGFuZ2VBY3Rpdml0eSgxLGl0ZW1zLmFjdF9pbmZvKVwiPiDnnIvkvJjmg6AgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOS8mOaDoOa0u+WKqCAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtb2ZmZXJcIiB2LWlmPVwiaXRlbXMuYWN0X2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHktaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHNcIiB2LWlmPVwiaXRlbXMuYWN0X2luZm8uaXNfY291bnRkb3duPT0xXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvblwiPiDpmZDml7YgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7ot53mtLvliqjnu5PmnZ/ov5jliakgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGl2aXR5LXRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRheSBob3VzZXNcIj4ge3sgaXRlbXMuZGF5IH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvdXNlc1wiPiB7eyBpdGVtcy5ob3VzZSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWNvbmRcIj4ge3sgaXRlbXMuc2Vjb25kIH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1pbnV0ZVwiPiB7eyBpdGVtcy5taW51dGUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c1wiIHYtZm9yPVwiKGNvbnRlbnQsdHlwZSkgaW4gaXRlbXMuYWN0X2luZm8uYWN0X3J1bGVcIiA6a2V5PSd0eXBlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IHt7Y29udGVudC5jYXRlZ29yeX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj4ge3tjb250ZW50LnJ1bGVfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDllYblk4HlsZXnpLogLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tY29udGVudC1hbGxcIiB2LWZvcj1cIihpLGlzKSBpbiBpdGVtcy5nb29kc19saXN0XCIgOmtleT0naXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tY29udGVudFwiIEBsb25ncHJlc3M9J3NldGdvb2RzU3RhdGUoayxpcyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1pdGVtXCIgY29sb3I9JyMwMDdBRkYnIDpjaGVja2VkPVwiaS5jaGVja2VkXCIgQHRhcD0nY2hhbmdlQ2hlY2soayxpcyknIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tc2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0taW1hZ2VzXCIgQHRhcD0nZ29Ub0dvb2RzKGkuU2t1X2lkLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRfaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hbWUtcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tbmFtZVwiPiB7e2kuZ29vZHNfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9uc1wiIEB0YXA9J3Nob3dTZXRTcGVjKGkuU2t1X2lkLGkuZW5jcnlwdGVkX2lkLGkuY2FydF9udW0saS5jYXJ0X2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zLW5hbWUtaXRlbVwiIHYtZm9yPVwiKGlzLHopIGluIGkuc3BlY19uYW1lXCIgOmtleT0neic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7en19Ont7aXN9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1bmZvbGRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3VuZm9sZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx077+lPHRleHQgY2xhc3M9XCJwcmljZVwiPnt7aS5zYWxlX3ByaWNlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVtYmVyLXByaWNlXCIgdi1pZj1cImkubWVtYmVyXCI+5Lya5ZGY5Lu3PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KiB7eyBpLm1pbl9idXlfbGltaXQgfX0g5Lu26LW36LStXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtc2hvdz1cImkubWF4X2J1eV9saW1pdD4wJiZpLm1heF9idXlfbGltaXQhPTk5OTk5OVwiPiAsIOmZkOi0rXt7aS5tYXhfYnV5X2xpbWl0fX3ku7YgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwiaS5jdXRfcHJpY2U8MFwiPiDmr5TliqDotK3ml7bpmY3ku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9XCJpLmN1dF9wcmljZT4wXCI+IOavlOWKoOi0reaXtua2qOS7t++/pXt7aS5jdXRfcHJpY2V9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib2ZmbGluZV9wYXktb25saW5lX3BheS1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvbmxpbmVfcGF5XCI+5Zyo57q/5pSv5LuY77+le3sgaS5vbmxpbmVfcGF5KmkuY2FydF9udW0gfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib2ZmbGluZV9wYXlcIj7liLDpmaLlho3ku5jvv6V7eyBpLm9mZmxpbmVfcGF5KmkuY2FydF9udW0gfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJ0cmFjdFwiIEB0YXA9XCJzZXROdW1iZXIoaS5jYXJ0X2lkLC0xLGssaXMpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc3VidHJhY3QucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJjYXJ0X251bVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDpkYXRhLWs9J2snIDpkYXRhLWlzPSdpcycgOmRhdGEtdGFrZV9zdG9yZT0naS50YWtlX3N0b3JlJyA6ZGF0YS1zdG9yZT0naS5zdG9yZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmRhdGEtaWQ9J2kuY2FydF9pZCcgdi1tb2RlbD1cImkuY2FydF9udW1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBAaW5wdXQ9J3NldFBvcmR1Y3ROdW1iZXInIG1heGxlbmd0aD1cIjJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkXCIgQHRhcD1cInNldE51bWJlcihpLmNhcnRfaWQsMSxrLGlzLGkuc3RvcmUsaS50YWtlX3N0b3JlKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FkZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2dvb2RzX3N0YXRlXCIgdi1zaG93PVwiaS5pc19zaG93X3N0YXRlXCIgQHRhcD0nc2V0Z29vZHNTdGF0ZShrLGlzKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpc19pc19nb29kc19zdGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdGlvbiBzZXRfc3RhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB2LWlmPVwiaXRlbXMuY2F0ZWdvcnlfc3RhdHVzPT0xXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IEB0YXA9J3NldFN0YXRlKDAsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0Puenu+WFpTwvdGV4dD4gPHRleHQ+5pS26JePPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbWlsYXIgc2V0X3N0YXRlXCIgQHRhcD0nc2V0U3RhdGUoMSxpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx055yL55u45Ly8IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZSBzZXRfc3RhdGVcIiBAdGFwPSdzZXRTdGF0ZSgyLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHTliKDpmaQgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5by556qX5LyY5oOg5oiW6ICF5Y2h5Yi4IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cIm1hbnRsZWRcIiB2LXNob3c9XCJpc1Nob3dEaXNjb3VudFwiIHNjcm9sbC15PVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2hlaWdodCc6Y2FyZExpc3QuY2FyZHM/aGVpZ2h0LzIrJ3B4JzpoZWlnaHQvNCsncHgnfV1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLXRpdGxlXCI+IOS/g+mUgOS8mOaDoCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1oaW50XCI+Kua4qemmqOaPkOekujrmu6Hlh4/jgIHmipjmiaPjgIHljaHliLjlnYflj6/lj6DliqDkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtb2ZmZXJcIiB2LWlmPVwiYWN0X2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1pZj1cImFjdF9pbmZvLmlzX2NvdW50ZG93bj09MVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IOmZkOaXtiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7ot53mtLvliqjnu5PmnZ/ov5jliakgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHktdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXkgaG91c2VzXCI+IHt7IGl0ZW1zLmRheSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvdXNlc1wiPiB7eyBpdGVtcy5ob3VzZSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlY29uZFwiPiB7eyBpdGVtcy5zZWNvbmQgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaW51dGVcIj4ge3sgaXRlbXMubWludXRlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1mb3I9XCIoY29udGVudCx0eXBlKSBpbiBhY3RfaW5mby5hY3RfcnVsZVwiIDprZXk9J3R5cGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IHt7Y29udGVudC5jYXRlZ29yeX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPiB7e2NvbnRlbnQucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX2xpc3RcIiB2LWlmPVwiY2FyZExpc3QuY2FyZHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkLXRpdGxlLWFsbC1jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+IOWPr+eUqOS8mOaDoOWIuFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vcmUtY2FyZFwiIEB0YXA9J2dvVG9HYWluJz4g5pu05aSa5LyY5oOg5Yi4ID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aWNrZXQgOmNhcmRzTGlzdD0nY2FyZExpc3QuY2FyZHMnIDp0aW1lX25vdz0nY2FyZExpc3QudGltZV9ub3cnIEBzaG93VGlja2V0PSdzaG93VGlja2V0JyBAZ2V0Q2FyZHM9J2dldENhcmRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgQHVzZUNhcmQ9J3VzZUNhcmQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RpY2tldD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWRpc2NvdW50XCIgQHRhcD0nY2hhbmdlQWN0aXZpdHkoMiknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g6L+H5pyf5aSx5pWI55qE5ZWG5ZOBIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG9waW5nLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LXNob3BwaW5nLXNob3dcIiB2LWZvcj1cIihpdGVtcyxrKSBpbiBjb250ZW50TGlzdC5za3VfbGlzdFwiIDprZXk9J2snIHYtc2hvdz1cIml0ZW1zLmNhdGVnb3J5X3N0YXR1cz09MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrLXNlZS1tb3JlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD4g5aSx5pWI55qE5ZWG5ZOBIDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWdvb2RzXCIgQHRhcD0nZGVsZXRlSW52YWxpZChrLGlzKSc+IOa4heepuuWkseaViOWVhuWTgSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnQtYWxsXCIgdi1mb3I9XCIoaSxpcykgaW4gaXRlbXMuZ29vZHNfbGlzdFwiIDprZXk9J2lzJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnRcIiBAbG9uZ3ByZXNzPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tc2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0taW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRfaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW52YWxpZC1nb29kc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWludmFsaWQtZ29vZHNcIj7lt7LlpLHmlYg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1uYW1lXCI+IHt7aS5nb29kc19uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zLW5hbWUtaXRlbVwiIHYtZm9yPVwiKGlzLHopIGluIGkuc3BlY19uYW1lXCIgOmtleT0neic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7en19Ont7aXN9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1bmZvbGRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3VuZm9sZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdO+/pTx0ZXh0IGNsYXNzPVwicHJpY2VcIj57e2kuc2FsZV9wcmljZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbWJlci1wcmljZVwiIHYtaWY9XCJpLm1lbWJlclwiPuS8muWRmOS7tzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCoge3sgaS5taW5fYnV5X2xpbWl0IH19IOS7tui1t+i0rVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LXNob3c9XCJpLm1heF9idXlfbGltaXQ+MCYmaS5tYXhfYnV5X2xpbWl0IT05OTk5OTlcIj4gLCDpmZDotK17e2kubWF4X2J1eV9saW1pdH195Lu2IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cImkuY3V0X3ByaWNlPDBcIj4g5q+U5Yqg6LSt5pe26ZmN5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlLWlmPVwiaS5jdXRfcHJpY2U+MFwiPiDmr5TliqDotK3ml7bmtqjku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXktY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvZmZsaW5lX3BheS1vbmxpbmVfcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib25saW5lX3BheVwiPuWcqOe6v+aUr+S7mO+/pXt7IGkub25saW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9mZmxpbmVfcGF5XCI+5Yiw6Zmi5YaN5LuY77+le3sgaS5vZmZsaW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidHJhY3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImNhcnRfbnVtXCIgOmRhdGEtaz0naydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmRhdGEtaXM9J2lzJyB2LW1vZGVsPVwiaS5jYXJ0X251bVwiIEBpbnB1dD0nc2V0UG9yZHVjdE51bWJlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbWF4bGVuZ3RoPVwiMlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hZGQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19nb29kc19zdGF0ZVwiIHYtc2hvdz1cImkuaXNfc2hvd19zdGF0ZVwiIEB0YXA9J3NldGdvb2RzU3RhdGUoayxpcyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXNfaXNfZ29vZHNfc3RhdGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbWlsYXIgc2V0X3N0YXRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMSxpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx055yL55u45Ly8IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZSBzZXRfc3RhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdzZXRTdGF0ZSgyLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHTliKDpmaQgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1wZXJmb3JtYW5jZVwiIHYtaWY9XCJzcGVjaWFsTGlzdC5jb250ZW50Lmxlbmd0aD4wJiZza3VfbGlzdC5sZW5ndGg9PTBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWxMaXN0XCIgdi1pZj1cInNwZWNpYWxMaXN0LnR5cGU9PTFcIj5cclxuXHRcdFx0XHRcdDxzd2lwZXIgaW5kaWNhdG9yLWRvdHMgaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcj1cIiNmZjY2OTlcIiBhdXRvcGxheSBpbnRlcnZhbD0nNTAwMCcgZHVyYXRpb249JzMwMDAnIGNpcmN1bGFyPlxyXG5cdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJzd2lwZXItaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHNwZWNpYWxMaXN0LmNvbnRlbnRcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraXRlbS5pbWdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHRcdFx0PC9zd2lwZXI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicmVjb21tZW5kLXRvLXlvdVwiIHYtaWY9XCJwcm9kdWN0TGlzdHNcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlbGF0ZWQtdGl0bGVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3PuS4uuS9oOaOqOiNkDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJqZWN0LWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxnb29kc1Nob3cgOmJvcmRlclJhZGl1cz0yNCA6cmVxdWVzdFVybD0ncmVxdWVzdFVybCcgOndpZHRoPTM1MCA6cG9yZHVjdExpc3Q9J3Byb2R1Y3RMaXN0cyc+XHJcblx0XHRcdFx0XHQ8L2dvb2RzU2hvdz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlhajpgInlkoznu5PnrpcgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2V0dGxlbWVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2V0dGxlbWVudC1pbmZvXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1hbGwtZ29vZHNcIiBAdGFwPSdjaGFuZ2VfYWxsX2NhcnQnPlxyXG5cdFx0XHRcdFx0XHQ8Y2hlY2tib3ggY29sb3I9JyMwMDdBRkYnIDpjaGVja2VkPVwiYWxsY2hlY2tlZFwiIC8+IDx0ZXh0PiDlhajpgIkgPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1kaXNjb3VudFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsXCI+5ZCI6K6hIDogPHRleHQ+IO+/pXt7IG9yZGVyX2luZm8ub2ZmX3NhbGUgfHwgMCB9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2UtZGlzY291bnRcIiB2LWlmPVwib3JkZXJfaW5mby5zYWxlX2luZm8ubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHTkvJjmg6Dlh486IO+/pXt7IG9yZGVyX2luZm8uc2FsZV9wcmljZSB8fDAgfX1cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZS1kaXNjb3VudC1kZXRhaWxlZFwiIEB0YXA9J3VzZXJfZGlzY291bnQnPuS8mOaDoOaYjue7hjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb1NldHRsZW1lbnRcIiBAdGFwPSdnb1RvU2V0dGxlbWVudCgpJz7ljrvnu5Pnrpc8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOS/ruaUueWVhuWTgeinhOagvCAtLT5cclxuXHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cInNldF9nb29kc19zcGVjX2NvbnRlbnRcIiBzY3JvbGwteT1cInRydWVcIiB2LWlmPVwidGhpc19zaG93X2dvb2RzX3NwZWNcIiA6c3R5bGU9XCJbeydoZWlnaHQnOmhlaWdodC8yKydweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlzU2hvdy1jb250ZW50XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtY2FyZC10b3BcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1oZWFkX2ltZ1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwrZ29vZHNDb250ZW50TGlzdC5za3UuaGVhZF9pbWdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodC1nb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtZGlzY291bnRzXCIgdi1pZj1cImdvb2RzQ29udGVudExpc3Quc2t1LmFjdC5sZW5ndGghPTBcIiBAdGFwPSdzZWVNb3JlKDApJz4g5Y+C5LiO5LyY5oOgIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtYXJrZXRfcHJpY2VcIj7vv6V7e2dvb2RzQ29udGVudExpc3Quc2t1LnNhbGVfcHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbWJlcl9wcmljZVwiIHYtaWY9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5tZW1iZXIubWVtYmVyX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbWJlcl90aXRsZVwiPnt7Z29vZHNDb250ZW50TGlzdC5za3UubWVtYmVyLm1lbWJlcl90aXRsZX19PC90ZXh0Pu+/pXt7Z29vZHNDb250ZW50TGlzdC5za3UubWVtYmVyLnByaWNlfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdG9yZS1za3Vfbm9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCB2LXNob3c9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5zdG9yZTw9MTAwXCI+5bqT5a2YIHt7Z29vZHNDb250ZW50TGlzdC5za3Uuc3RvcmV9feS7tjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNrdV9ub1wiPue8luWPtzoge3tnb29kc0NvbnRlbnRMaXN0LnNrdS5za3Vfbm99fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLWNvbnRlbnRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBnb29kc0NvbnRlbnRMaXN0LnNwZWNfdmFsdWVcIiA6ZGF0YS1pbmRleD0naW5kZXgnIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLm5hbWV9fVxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJzcGVjcy1oaW50XCIgPuivt+mAieaLqXt7aXRlbS5uYW1lfX08L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiB2LWZvcj1cIihpcyxzaW5kZXgpIGluIGl0ZW0uYXR0clwiIDprZXk9XCJzaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJbc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdPT0xPydsaS1ob3Zlcic6c3BlY1tpbmRleF0uYXR0cltzaW5kZXhdPT0wPydsaS1ncmF5JzonJ11cIlxyXG5cdFx0XHRcdFx0XHRcdCBAdGFwPVwiY2hhbmdlU3BlYyhpbmRleCxzaW5kZXgpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7e2lzfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udC1wYXlcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGF5LXR4dFwiPuaUr+S7mOaWueW8jzwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiBAdGFwPSdjaGFuZ2VQYXkoMCknIDpjbGFzcz1cIltwYXlfdHlwZT09MHx8cGF5X3R5cGU9PTI/J2xpLWhvdmVyJzonJ11cIj5cclxuXHRcdFx0XHRcdFx06aKE57qm6YeRXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlUGF5KDEpJyA6Y2xhc3M9XCJbcGF5X3R5cGU9PTF8fHBheV90eXBlPT0yPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOWFqOasvuS7mFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLWNvbnQtcGF5XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBheS10eHRcIj7pooblj5bmlrnlvI88L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlQ2xhc3MoMCknIDpjbGFzcz1cIltjbGFzc190eXBlPT0wPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOWIsOmZoumihuWPllxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIEB0YXA9J2NoYW5nZUNsYXNzKDEpJyA6Y2xhc3M9XCJbY2xhc3NfdHlwZT09MT8nbGktaG92ZXInOicnXVwiPlxyXG5cdFx0XHRcdFx0XHTpgq7lr4RcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2VOdW1iZXJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXR4dFwiPuaVsOmHjzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibnVtYmVyLWhpbnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgPiB7eyBnb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0IH19IOS7tui1t+i0rTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgXHJcblx0XHRcdFx0XHRcdCB2LXNob3c9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0PjAmJmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQhPTk5OTk5OVwiPlxyXG5cdFx0XHRcdFx0XHRcdOmZkOi0rSB7eyBnb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0IH19IOS7tlxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1pbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZHVjZVwiIEB0YXA9XCJyZWR1Y2UoLTEpXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtY29sb3InOnNldE5ld0dvb2RzTnVtYmVyPT1nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0ID8gJyNkZGRkZGQnOicjOTk5OTk5J31dXCI+LTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJudW1iZXItaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJzZXROZXdHb29kc051bWJlclwiIHZhbHVlPTEgQGlucHV0PSdjaGFuZ2VHb29kc051bWJlcicgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1udW1iZXJcIiBAdGFwPVwicmVkdWNlKDEpXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtY29sb3InOnNldE5ld0dvb2RzTnVtYmVyPT1nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0ID8gJyNkZGRkZGQnOicjOTk5OTk5J31dXCI+Kzwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJrZWVwLW9yZGVyXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJrZWVwLW9yZGVyLWJ1dHRvblwiIHBsYWluPVwidHJ1ZVwiIEB0YXA9J29yZGVyU2V0KCknPuehruWumjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZS1zZWUtbW9yZS1kaXNjb3VudFwiIEB0YXA9J3NlZU1vcmUoMSknPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwhLS0g5LyY5oOg5piO57uGIC0tPlxyXG5cdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIHYtc2hvdz1cInNob3dfZGlzY291bnRcIiA6c3R5bGU9XCJbeydoZWlnaHQnOmhlaWdodC80KydweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRoaXNfc2hvd19kaXNjb3VudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19kaXNjb3VudF90aXRsZVwiPuS8mOaDoOaYjue7hjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZGlzY291bnRfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudF9zYWxlX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaWNvdW50X3ByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fdGl0bGVcIj7llYblk4HmgLvpop08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIj57e29yZGVyX2luZm8udG90YWxfcHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpY291bnRfcHJpY2VcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcmRlcl9pbmZvLnNhbGVfaW5mb1wiIDprZXk9J2luZGV4Jz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNhbGVfaW5mb190aXRsZVwiPnt7aXRlbS5jYXRlZ29yeX19IHt7aXRlbS5ydWxlX25hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIiB2LWlmPVwiaXRlbS50b29sc19pZD09J2dpdmluZydcIj4g77+le3tpdGVtLnNhbGVfcHJpY2V9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIiB2LWVsc2U+IC3vv6V7e2l0ZW0uc2FsZV9wcmljZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbF9kaXNjb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX3RpdGxlXCI+IOS8mOaDoOWQiOiuoSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIj4g77+le3tvcmRlcl9pbmZvLnNhbGVfcHJpY2V9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudC1oaW50XCI+5Lul5LiK5LyY5oOg5LiN5YyF5ZCr56ev5YiG44CB5Za16LGG44CB5L2Z6aKd562J55So5oi36LWE5Lqn5oq15omj77yM6LWE5Lqn5oq15omj6K+35Zyo57uT566X6aG16Z2i5p+l55yLPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImlfa25vd1wiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiBAdGFwPSdJS25vdyc+IOaIkeefpemBk+S6hiA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZ29vZHNTaG93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dvb2RzU2hvdy52dWVcIjtcclxuXHRpbXBvcnQgdGlja2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RpY2tldC52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGdvb2RzU2hvdyxcclxuXHRcdFx0dGlja2V0XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZW51V2lkdGg6IDAsXHJcblx0XHRcdFx0bWVudVRvcDogMCxcclxuXHRcdFx0XHRtZW51SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdG1lbnVMZWZ0OiAwLFxyXG5cdFx0XHRcdG1lbnVCb3R0b206IDAsXHJcblx0XHRcdFx0YmFyTmFtZTogJ2JhY2snLCAvL+WvvOiIquadoeWQjeensFxyXG5cdFx0XHRcdHRvcEJhY2tncm91bmRDb2xvcjogJyMyMjIyMjInLFxyXG5cdFx0XHRcdGNvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0YmFja0ltYWdlOiAnL3N0YXRpYy9pbWFnZXMvcmV0dXJuLnBuZycsXHJcblx0XHRcdFx0dGl0bGU6ICfotK3nianovaYnLFxyXG5cdFx0XHRcdGhlaWdodDogMCxcclxuXHRcdFx0XHRwcm9kdWN0TGlzdHM6IFtdLFxyXG5cdFx0XHRcdHByb2R1Y3ROYW1lTGlzdDogW3tcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WFqOmDqCcsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfpmY3ku7cnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5Yy7576OJyxcclxuXHRcdFx0XHRcdFx0bnVtYmVyOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+aKpOiCpOWTgScsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRidG5udW06IDAsXHJcblx0XHRcdFx0Y29udGVudExpc3Q6IHt9LFxyXG5cdFx0XHRcdGFsbGNoZWNrZWQ6IGZhbHNlLCAvL+WFqOmAiVxyXG5cdFx0XHRcdGlzU2hvd0Rpc2NvdW50OiBmYWxzZSwgLy/mmL7npLrkvJjmg6DmiJbljaHliLhcclxuXHRcdFx0XHRyZXF1ZXN0VXJsOiAnJyxcclxuXHRcdFx0XHRvZmZzZXQ6IDAsXHJcblx0XHRcdFx0c2t1X2xpc3Q6IFtdLFxyXG5cdFx0XHRcdHNwZWNpYWxMaXN0OiB7fSwgLy/lub/lkYpcclxuXHRcdFx0XHRnZXRfY291bnQ6IDAsIC8v5Y+v6aKG5Y+W5Y2h5Yi45pWw6YePXHJcblx0XHRcdFx0Y2FyZExpc3Q6IFtdLCAvL+WNoeWIuOWIl+ihqFxyXG5cdFx0XHRcdGFjdF9pbmZvOiB7fSxcclxuXHRcdFx0XHR1c2VzX2NhcmRMaXN0OiBbXSxcclxuXHRcdFx0XHR0aGlzX3Nob3dfZ29vZHNfc3BlYzogZmFsc2UsIC8v5pi+56S65L+u5pS55ZWG5ZOB6KeE5qC8XHJcblx0XHRcdFx0Z29vZHNDb250ZW50TGlzdDogW10sXHJcblx0XHRcdFx0c3BlYzogW10sXHJcblx0XHRcdFx0cGF5X3R5cGU6IDEsIC8v5pSv5LuY5pa55byPICAw6aKE57qm6YeRIDEg5YWo5qy+IDIg5YWo6YCJXHJcblx0XHRcdFx0Y2xhc3NfdHlwZTogMCwgLy/pooblj5bmlrnlvI8gMOWIsOmZoiAx6YKu5a+EXHJcblx0XHRcdFx0c2V0TmV3R29vZHNOdW1iZXI6IDEsIC8v5L+u5pS55paw55qE5ZWG5ZOB5pWw6YePXHJcblx0XHRcdFx0ZW5jcnlwdGVkX2lkOiAnJyxcclxuXHRcdFx0XHRza3VfaWQ6IDAsXHJcblx0XHRcdFx0Y2FydF9pZDogMTYwLFxyXG5cdFx0XHRcdG9yZGVyX2luZm86IHtcclxuXHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHR9LCAvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdHNob3dfZGlzY291bnQ6IGZhbHNlLCAvL+aYvuekuuS8mOaDoOeahOW8ueeql1xyXG5cdFx0XHRcdHZlcmlmaWNhdGlvbl9zcGVjQXR0cjogW10sIC8v6aqM6K+B6YCJ6KeE5qC854mI5pysXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWNoQm90dG9tOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR0aGF0Lm9mZnNldCArPSAxO1xyXG5cdFx0XHR0aGF0LmdldExpa2UoKVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZDogZnVuY3Rpb24ob3B0aW9uKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHR0aGlzLnJlcXVlc3QgPSB0aGlzLiRyZXF1ZXN0XHJcblx0XHRcdHRoYXQucmVxdWVzdFVybCA9IHRoYXQucmVxdWVzdC5nbG9iYWxEYXRhLnJlcXVlc3RVcmxcclxuXHRcdFx0dGhhdC5nZXRMaWtlKClcclxuXHRcdFx0dGhhdC5nZXRDYXJkKClcclxuXHRcdFx0dGhhdC5hZHZlcnRpc2luZygpXHJcblx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5oZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHQ7XHJcblx0XHRcdC8vIOWIpOWumui/kOihjOW5s+WPsFxyXG5cdFx0XHRsZXQgcGxhdGZvcm0gPSAnJ1xyXG5cdFx0XHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XHJcblx0XHRcdFx0Y2FzZSAnYW5kcm9pZCc6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhbmRyb2lkJ1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaW9zJzpcclxuXHRcdFx0XHRcdHBsYXRmb3JtID0gJ2lvcydcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhcHBsZXQnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGxhdGZvcm0gPT0gJ2FwcGxldCcpIHtcclxuXHRcdFx0XHQvLyDojrflj5blsY/luZXpq5jluqZcclxuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IG1lbnUud2lkdGhcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51VG9wID0gbWVudS50b3BcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IG1lbnUubGVmdFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSBtZW51LmJvdHRvbVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSA5MFxyXG5cdFx0XHRcdHRoYXQubWVudVRvcCA9IDUwXHJcblx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gMzJcclxuXHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gMjc4XHJcblx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gODJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6L+U5ZueXHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRVc2VyQ2FydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdnZXRjYXJ0JyxcclxuXHRcdFx0XHRcdHR5cGU6IHRoYXQuYnRubnVtXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwic2hvcHBpbmdDYXJ0XCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRsZXQgZGF5ID0gMFxyXG5cdFx0XHRcdFx0XHRsZXQgaG91c2UgPSAwXHJcblx0XHRcdFx0XHRcdGxldCBzZWNvbmQgPSAwXHJcblx0XHRcdFx0XHRcdGxldCBtaW51dGUgPSAwXHJcblx0XHRcdFx0XHRcdC8vIGxldCBmb3JtZXJfc2t1X2xpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJjb250ZW50TGlzdFwiKS5za3VfbGlzdDtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZm9ybWVyX3NrdV9saXN0KSAvL+S4uuS6huWIpOWumuaVsOaNruaYr+WQpuaciemAieS4reeahOeKtuaAgVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGRhdGEuc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmlzX3Nob3dfc3RhdGUgPSBmYWxzZSAvL+aYvuekuuiuouWNleaTjeS9nFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IGZhbHNlIC8v5piv5ZCm5YWo6YCJ5b2T5YmN5YiG57G7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCA9IGZhbHNlIC8v5piv5ZCm6YCJ5oupXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5za3VfbGlzdFtpXS5hY3RfaW5mbykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmRheSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAvIDYwIC8gMjQgJSAzMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5ob3VzZSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAvIDYwICUgMjQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uc2Vjb25kID0gcGFyc2VJbnQoKGRhdGEuc2t1X2xpc3RbaV0uYWN0X2luZm8ucmVzdF90aW1lKSAvIDYwICUgNjApXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0ubWludXRlID0gcGFyc2VJbnQoKGRhdGEuc2t1X2xpc3RbaV0uYWN0X2luZm8ucmVzdF90aW1lKSAlIDYwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhLnNrdV9saXN0W2ldKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnNrdV9saXN0ID0gZGF0YS5za3VfbGlzdFxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQucHJvZHVjdE5hbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5wcm9kdWN0TmFtZUxpc3RbaV0ubnVtYmVyID0gZGF0YS50eXBlX2NvdW50W2ldXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNrdV9saXN0ID0gW11cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrlj6/mk43kvZzorqLljZXmlbDmja5cclxuXHRcdFx0c2V0Z29vZHNTdGF0ZTogZnVuY3Rpb24oaywgaXMpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmlzX3Nob3dfc3RhdGUgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5pc19zaG93X3N0YXRlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWFqOmAieW9k+WJjeWIhuexu1xyXG5cdFx0XHRjaGVja2VkX2NsYXNzX2FsbDogZnVuY3Rpb24oaykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBhY3RfaWQgPSAnJ1xyXG5cdFx0XHRcdGxldCBjaGFuZ2VfY2FyZF9pZCA9IFtdXHJcblx0XHRcdFx0bGV0IGNhcnQgPSB7fVxyXG5cdFx0XHRcdGxldCBhcnIgPSBbXVxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkKSB7IC8v5YWo6YCJXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaV0uY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSB7IC8v54K55Ye75riF56m65YWo6YCJXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaV0uY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRhcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZmxhZyA9IGFyci5ldmVyeSgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IHRydWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmIChmbGFnKSB7XHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSAhdGhhdC5hbGxjaGVja2VkXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInmi6lcclxuXHRcdFx0Y2hhbmdlQ2hlY2s6IGZ1bmN0aW9uKGssIGlzKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGFyciA9IFtdXHJcblx0XHRcdFx0bGV0IGFsbF9hcnIgPSBbXVxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2hlY2tlZCA9ICF0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNoZWNrZWRcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0YXJyLnB1c2godGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2ldLmNoZWNrZWQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBmbGFnID0gYXJyLmV2ZXJ5KChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g5aaC5p6c5b2T5YiG57G75LiL6Z2i55qE6K6i5Y2V6YO96YCJ5oup5LqGLOWImeW9k+WJjeWIhuexu+eahOWFqOmAieS4unRydWVcclxuXHRcdFx0XHRpZiAoZmxhZykge1xyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCA9ICF0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkXHJcblx0XHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCkgeyAvL+W9k+WJjeiuouWNleS4uumAieaLqeaXtuWIpOWumuaJgOacieeahOiuouWNleaYr+WQpuW3sue7j+WFqOmAiVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRhbGxfYXJyLnB1c2godGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsZXQgZmxhZ3MgPSBhbGxfYXJyLmV2ZXJ5KChpdGVtLCBpbmRleCwgYWxsX2FycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtID09PSB0cnVlXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZsYWdzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jaGVja2VkKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0X3VzZXJfY2FydCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRsZXQgbmV3X2FyciA9IFtdXHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaj0wO2o8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDtqKyspXHJcblx0XHRcdFx0XHRcdG5ld19hcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZClcclxuXHRcdFx0XHRcdFx0Ly8gaWYoIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkKXtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcclxuXHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGV0IGZsYWcgPSBuZXdfYXJyLmV2ZXJ5KChpdGVtLCBpbmRleCwgbmV3X2FycikgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpdGVtLGluZGV4KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhmbGFnKVxyXG5cdFx0XHRcdFx0aWYoZmxhZyl7XHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uT566X55qE5YWo6YCJXHJcblx0XHRcdGNoYW5nZV9hbGxfY2FydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gIXRoYXQuYWxsY2hlY2tlZFxyXG5cdFx0XHRcdGlmICh0aGF0LmFsbGNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5botK3nianovabku7fmoLxcclxuXHRcdFx0Z2V0X3VzZXJfY2FydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGNoYW5nZV9jYXJ0ID0gW11cclxuXHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQpIHsgLy/lhYjliKTmlq3mmK/lkKbmnInlhajpgInkuobnmoTorqLljZVcclxuXHRcdFx0XHRcdFx0XHRsZXQgYWN0X2lkID0gJydcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FydF9pZCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RfaWQgPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FydCA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogYWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VfY2FydC5wdXNoKGNhcnQpXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3QubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCkgeyAvL+WIpOWumumAieaLqeS6hueahOiuouWNlVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgYWN0X2lkID0gJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQgPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhcnRfaWQucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2FydF9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGNhcnQgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0X2lkOiBhY3RfaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiBjYXJ0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlX2NhcnQucHVzaChjYXJ0KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NhbGN1bGF0ZScsXHJcblx0XHRcdFx0XHRjYXJ0OiBjaGFuZ2VfY2FydFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoY2hhbmdlX2NhcnQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHRcdFx0Ly8gdG90YWxfcHJpY2U6MCwvL+aAu+S7t1xyXG5cdFx0XHRcdFx0XHRcdC8vIHNhbGVfcHJpY2U6MCwvL+aAu+iuoeS8mOaDoFxyXG5cdFx0XHRcdFx0XHRcdC8vIGhkX2Rpc2NvdW50OiAwLC8v5rS75Yqo5LyY5oOgMjAyMC4xMS4wNFxyXG5cdFx0XHRcdFx0XHRcdC8vIG9ubGluZV9wYXk6IDAsLy/lnKjnur/mlK/ku5hcclxuXHRcdFx0XHRcdFx0XHQvLyBvZmZsaW5lX3BheTogMCwvL+e6v+S4i+aUr+S7mFxyXG5cdFx0XHRcdFx0XHRcdC8vIG9mZl9zYWxlOiAwLC8v5Y675o6J5LyY5oOg5ZCO5bqU5LuYMjAyMC4xMS4wMlxyXG5cdFx0XHRcdFx0XHRcdC8vIHNhbGVfaW5mbzogW10vL+S8mOaDoOS/oeaBr1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IGRhdGFcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0XHRcdFx0fSAvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coY2hhbmdlX2NhcnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWOu+e7k+eul1xyXG5cdFx0XHRnb1RvU2V0dGxlbWVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHNrdV9saXN0ID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFxyXG5cdFx0XHRcdGxldCBjYXJ0X2luZm8gPSB7fSAvL+WNleadoei0reeJqei9pueahOmAieS4reeahOaVsOaNrlxyXG5cdFx0XHRcdGxldCBhY3RfaWQgPSAnJyAvL+a0u+WKqGlkIFxyXG5cdFx0XHRcdGxldCBjYXJ0X2lkX2xpc3QgPSBbXSAvL+iuouWNlWlk5YiX6KGoXHJcblx0XHRcdFx0aWYgKHRoYXQuYWxsY2hlY2tlZCkgeyAvL+WIpOWumui0reeJqei9puaYr+WQpuWFqOmAieS6hu+8jOWFqOmAieebtOaOpeWtmOWCqOWvueW6lOeahOi0reeJqei9pua0u+WKqGlk5ZKM6LSt54mp6L2maWRcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFjdF9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogYWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiBza3VfbGlzdFtpXS5jYXJ0X2lkX2xpc3RcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3Q6IHNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QucHVzaChjYXJ0X2luZm8pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHsgLy/lpoLmnpzmmK/msqHmnInlhajpgInvvIzlsLHlvqrnjq/liKTlrprotK3nianovabnmoTliIbnsbvliJfooajmmK/lkKbmnInlhajpgInnmoTvvIzmnInvvIzlhYjlr7zlhaXvvIzmsqHmnInlho3lvqrnjq/lhoXpg6jnmoTllYblk4HmmK/lkKbpgInkuK1cclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFsbF9jaGVja2VkKSB7IC8v5YiG57G75YiX6KGo5piv5ZCm5pyJ5YWo6YCJ55qE77yM5pyJ77yM5YWI5a+85YWl77yM5rKh5pyJ5YaN5b6q546v5YaF6YOo55qE5ZWG5ZOB5piv5ZCm6YCJ5LitXHJcblx0XHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFjdF9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0X2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogYWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3Q6IHNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3Q6IHNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QucHVzaChjYXJ0X2luZm8pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7IC8v5b6q546v5YaF6YOo55qE5ZWG5ZOB5piv5ZCm6YCJ5LitXHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfbGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBza3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoc2t1X2xpc3RbaV0uYWN0X2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2xpc3QucHVzaChza3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNhcnRfaWQpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmIChjYXJ0X2xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQ6IGFjdF9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiBjYXJ0X2xpc3RcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdC5wdXNoKGNhcnRfaW5mbylcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGNhcnRfaWRfbGlzdCwzMzMzMzMzMylcclxuXHRcdFx0XHQvLyB1bmkuc2V0U3RvcmFnZVN5bmMoXCJjYXJ0X2lkX2xpc3RcIiwgY2FydF9pZF9saXN0KTsgLy/lsIbmlbDmja7lrZjlgqjvvIzmlrnkvr/lnKjnoa7orqTorqLljZXml7bkvb/nlKhcclxuXHRcdFx0XHQvLyDmuIXpmaTmnKzlnLDlrZjnmoTotK3nianovabmlbDmja5cclxuXHRcdFx0XHQvLyB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ2NvbnRlbnRMaXN0Jyk7XHJcblx0XHRcdFx0aWYgKGNhcnRfaWRfbGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QgPSBKU09OLnN0cmluZ2lmeShjYXJ0X2lkX2xpc3QpXHJcblx0XHRcdFx0XHQvLyDnoa7orqTorqLljZVcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2NvbmZpcm1fb3JkZXIvY29uZmlybV9vcmRlcj9jYXJ0X2lkX2xpc3Q9JHtjYXJ0X2lkX2xpc3R9YCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+mAieaLqeWVhuWTgScsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkv67mlLnllYblk4Hop4TmoLxcclxuXHRcdFx0c2hvd1NldFNwZWM6IGZ1bmN0aW9uKHNrdV9pZCwgZW5jcnlwdGVkX2lkLCBudW1iZXIsIGNhcnRfaWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmVuY3J5cHRlZF9pZCA9IGVuY3J5cHRlZF9pZFxyXG5cdFx0XHRcdHRoYXQuc2t1X2lkID0gc2t1X2lkXHJcblx0XHRcdFx0dGhhdC5jYXJ0X2lkID0gY2FydF9pZFxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2dvb2Rzc3B1ZGV0YWlscycsXHJcblx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IGVuY3J5cHRlZF9pZCxcclxuXHRcdFx0XHRcdHNrdV9pZDogc2t1X2lkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDApIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIsIGRhdGEpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuc3BlYyA9IHRoYXQuYXNzZW1ibGVTcGVjKGRhdGEuc2t1LnVzZXJfc3BlYywgMSlcclxuXHRcdFx0XHRcdFx0dGhhdC5wYXlfdHlwZSA9IGRhdGEuc2t1LnBheV90eXBlXHJcblx0XHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2dvb2RzX3NwZWMgPSAhdGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlY1xyXG5cdFx0XHRcdFx0XHR0aGF0LnVzZXNfY2FyZExpc3QgPSB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1LmNhcmRfbGlzdFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdChyZXMuZGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+ehruWumuS/ruaUueinhOagvFxyXG5cdFx0XHRvcmRlclNldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHNwZWNBdHRyID0gdGhhdC52ZXJpZmljYXRpb25fc3BlY0F0dHJcclxuXHRcdFx0XHRsZXQgZGF0YUluZm9zID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6IFwic2VsZWN0c2t1XCIsXHJcblx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IHRoYXQuZW5jcnlwdGVkX2lkLFxyXG5cdFx0XHRcdFx0c3BlY19hdHRyOiBzcGVjQXR0clxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvcykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjaGFuZ2NhcnQnLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IDEsXHJcblx0XHRcdFx0XHRcdFx0Y2FydF9pZDogdGhhdC5jYXJ0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdG51bTogdGhhdC5zZXROZXdHb29kc051bWJlcixcclxuXHRcdFx0XHRcdFx0XHRza3VfaWQ6IHRoYXQuc2t1X2lkLFxyXG5cdFx0XHRcdFx0XHRcdGlzX3Bvc3Q6IHRoYXQuY2xhc3NfdHlwZSxcclxuXHRcdFx0XHRcdFx0XHRidXlfdHlwZTogdGhhdC5wYXlfdHlwZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwic2hvcHBpbmdDYXJ0XCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlYyA9ICF0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjXHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5nZXRVc2VyQ2FydCgpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTon6K+36YCJ5oup5q2j56Gu6KeE5qC8JyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+WKoOWHj+aVsOWtl1xyXG5cdFx0XHRyZWR1Y2U6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciArPSBpbmRleFxyXG5cdFx0XHRcdGlmICh0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQgPT0gMCkge1xyXG5cdFx0XHRcdFx0dGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0ID0gOTk5OTk5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGF0LnNldE5ld0dvb2RzTnVtYmVyID49IHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdClcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPCB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDovpPlhaXmg7PopoHnmoTmlbDph49cclxuXHRcdFx0Y2hhbmdlR29vZHNOdW1iZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IHZhbHVlXHJcblx0XHRcdFx0aWYgKHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQgPSA5OTk5OTlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPj0gdGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWkpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaSlcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPCB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlK/ku5jmlrnlvI9cclxuXHRcdFx0Y2hhbmdlUGF5OiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQucGF5X3R5cGUgPSBpbmRleFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VDbGFzczogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmNsYXNzX3R5cGUgPSBpbmRleFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VTcGVjOiBmdW5jdGlvbihpbmRleCwgc2luZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW5kZXgsc2luZGV4KVxyXG5cdFx0XHRcdGlmICh0aGF0LnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XSA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGF0LmdldFNwZWMoaW5kZXgsIHNpbmRleClcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoYXQuc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdID09IDEpIHtcclxuXHRcdFx0XHRcdHRoYXQuY2FuY2VsU3BlYyhpbmRleCwgc2luZGV4KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS/ruaUueinhOagvOeahOS8mOaDoOS/oeaBr1xyXG5cdFx0XHRzZWVNb3JlOiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHRpZiAodGhhdC51c2VzX2NhcmRMaXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdGludGVyZmFjZUlkOiAnaWRzX2dldF9jYXJkJyxcclxuXHRcdFx0XHRcdFx0XHRjYXJkX2lkOiB0aGF0LnVzZXNfY2FyZExpc3QsXHJcblx0XHRcdFx0XHRcdFx0bGltaXQ6IDYsXHJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0OiAwXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJjYXJkXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGF0LmlzU2hvd0Rpc2NvdW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jYXJkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuY2FyZHNbaV0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xyXG5cdFx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlYyA9ICF0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyB1c2VyU3BlYz3nlKjmiLflj6/pgInop4TmoLzvvIxpc0ZpcnN0PeaYr+WQpummluasoei/m+WFpe+8jG5vd0NoZWNrPeW9k+WJjemAiemhue+8jGlzQ2FuY2VsPeaYr+WQpueCueWHu+WPlua2iOi/m+WFpVxyXG5cdFx0XHRhc3NlbWJsZVNwZWM6IGZ1bmN0aW9uKHVzZXJTcGVjLCBpc0ZpcnN0LCBub3dDaGVjaywgaXNDYW5jZWwpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyDmlrDop4TmoLzmlbDnu4TvvIzkuI7ljp/op4TmoLxzcGVjX3ZhbHVl55u45a+55bqU77yM55So5LqO5qCH6K6w5ZCE56eN54q25oCBXHJcblx0XHRcdFx0bGV0IHNwZWNWYWx1ZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpLnNwZWNfdmFsdWU7XHJcblx0XHRcdFx0bGV0IHNwZWMgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKS5zcGVjX3ZhbHVlO1xyXG5cdFx0XHRcdGxldCBkZWZhdWx0VXNlclNwZWMgPSAoaXNDYW5jZWwgPT0gMSkgPyBcIlwiIDogdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIikuc2t1LnNwZWNfYXR0cjtcclxuXHRcdFx0XHQvLyDpgY3ljobop4TmoLznsbvlnotcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHNwZWNWYWx1ZSkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiBzcGVjVmFsdWVbaV0uYXR0cikge1xyXG5cdFx0XHRcdFx0XHQvLyDnrKzkuIDmrKHov5vlhaXlhajpg6jlj6/pgInvvIwwPeWPr+mAie+8jDE96YCJ5LitXHJcblx0XHRcdFx0XHRcdGlmIChpc0ZpcnN0ID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRzcGVjW2ldLmF0dHJba10gPSAwO1xyXG5cdFx0XHRcdFx0XHRcdC8vIOmBjeWOhum7mOiupOmAieaLqeinhOagvFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGogaW4gZGVmYXVsdFVzZXJTcGVjKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoayA9PSBkZWZhdWx0VXNlclNwZWNbal0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY1tpXS5hdHRyW2tdID0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8g55So5oi35Y+v6YCJ6KeE5qC85LiO5pW05Liq6KeE5qC86L+b6KGM5Yy56YWN77yM5Yy56YWN5oiQ5Yqf54q25oCB5pS55Li65Y+v6YCJ54q25oCBXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiBpbiB1c2VyU3BlYykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGsgPT0gdXNlclNwZWNbal0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY1tpXS5hdHRyW2tdID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8g5Yik5pat5b2T5YmN6YCJ5oup6aG55Lit5piv5ZCm5pyJ5LiN5a2Y5Zyo55So5oi35Y+v6YCJ6KeE5qC877yM5aaC5pyJ6L+b6KGM5Yig6ZmkXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgbiBpbiBub3dDaGVjaykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHVzZXJTcGVjLmluZGV4T2YocGFyc2VJbnQobm93Q2hlY2tbbl0pKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRub3dDaGVjay5zcGxpY2UobiwgMSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8g5pi+56S65b2T5YmN6YCJ5Lit6KeE5qC8XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgbSBpbiBub3dDaGVjaykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGsgPT0gbm93Q2hlY2tbbV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY1tpXS5hdHRyW2tdID0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHNwZWM7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieaLqeinhOagvFxyXG5cdFx0XHRnZXRTcGVjOiBmdW5jdGlvbihpbmRleCwgc2luZGV4KSB7XHJcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGF0LnNwZWNbaW5kZXhdLmF0dHIpIHtcclxuXHRcdFx0XHRcdHRoYXQuc3BlY1tpbmRleF0uYXR0cltpXSA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdID0gMTtcclxuXHRcdFx0XHQvLyDmn6Xmib7lvZPliY3pgInmi6nmlbDmja5cclxuXHRcdFx0XHRsZXQgbm93Q2hlY2sgPSBbXTtcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoYXQuc3BlYykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiB0aGF0LnNwZWNbaV0uYXR0cikge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5zcGVjW2ldLmF0dHJba10gPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdG5vd0NoZWNrLnB1c2goayk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g5Yik5pat5b2T5YmN54K55Ye76KeE5qC85piv5ZCm5Zyo55So5oi35YWB6K646YCJ5oup6IyD5Zu077yM5Zyo5bCx55u05o6l5o+Q5Lqk77yM5LiN5Zyo5bCx5o+Q5Lqk5b2T5YmN6KeE5qC8XHJcblx0XHRcdFx0bGV0IHVzZXJTcGVjID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIikuc2t1LnVzZXJfc3BlYztcclxuXHRcdFx0XHRsZXQgc3BlY0F0dHIgPSBcIlwiO1xyXG5cdFx0XHRcdGlmICh1c2VyU3BlYykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiB1c2VyU3BlYykge1xyXG5cdFx0XHRcdFx0XHRpZiAodXNlclNwZWMuaW5kZXhPZihwYXJzZUludChzaW5kZXgpKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdHNwZWNBdHRyID0gW3NpbmRleF07XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c3BlY0F0dHIgPSBub3dDaGVjaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzcGVjQXR0ciA9IG5vd0NoZWNrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogXCJzZWxlY3Rza3VcIixcclxuXHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogdGhhdC5lbmNyeXB0ZWRfaWQsXHJcblx0XHRcdFx0XHRzcGVjX2F0dHI6IHNwZWNBdHRyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQudmVyaWZpY2F0aW9uX3NwZWNBdHRyID0gc3BlY0F0dHIgLy/nlKjkuo7pqozor4HmmK/lkKbmmK/lkIjnkIbnmoTop4TmoLzpgInlj5ZcclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHQvLyDph43mlrDlgqjlrZjmlrDnlKjmiLflj6/ku6XpgInpoblcclxuXHRcdFx0XHRcdGxldCBnb29kc0RldGFpbCA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpO1xyXG5cdFx0XHRcdFx0Z29vZHNEZXRhaWwuc2t1LnVzZXJfc3BlYyA9IHJlcy5kYXRhLmRhdGEudXNlcl9zcGVjO1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIiwgZ29vZHNEZXRhaWwpO1xyXG5cdFx0XHRcdFx0dGhhdC5zcGVjID0gdGhhdC5hc3NlbWJsZVNwZWMocmVzLmRhdGEuZGF0YS51c2VyX3NwZWMsIHJlcy5kYXRhLmRhdGEgPT0gXCJcIiA/IDEgOiAwLCBub3dDaGVjaylcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UgPSBkYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuc2t1X2lkID0gZGF0YS5pZFxyXG5cdFx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1LnNhbGVfcHJpY2UgPSBkYXRhLnNhbGVfcHJpY2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj5bmtojpgInpoblcclxuXHRcdFx0Y2FuY2VsU3BlYzogZnVuY3Rpb24oaW5kZXgsIHNpbmRleCkge1xyXG5cdFx0XHRcdGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdID0gMDtcclxuXHRcdFx0XHQvLyDmn6Xmib7lvZPliY3pgInmi6nmlbDmja5cclxuXHRcdFx0XHRsZXQgbm93Q2hlY2sgPSBbXTtcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoYXQuc3BlYykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiB0aGF0LnNwZWNbaV0uYXR0cikge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5zcGVjW2ldLmF0dHJba10gPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdG5vd0NoZWNrLnB1c2goayk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6IFwic2VsZWN0c2t1XCIsXHJcblx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IHRoYXQuZW5jcnlwdGVkX2lkLFxyXG5cdFx0XHRcdFx0c3BlY19hdHRyOiBub3dDaGVja1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHQvLyDph43mlrDlgqjlrZjmlrDnlKjmiLflj6/ku6XpgInpoblcclxuXHRcdFx0XHRcdGxldCBnb29kc0RldGFpbCA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpO1xyXG5cdFx0XHRcdFx0Z29vZHNEZXRhaWwuc2t1LnVzZXJfc3BlYyA9IHJlcy5kYXRhLmRhdGEudXNlcl9zcGVjO1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIiwgZ29vZHNEZXRhaWwpO1xyXG5cdFx0XHRcdFx0dGhhdC5zcGVjID0gdGhhdC5hc3NlbWJsZVNwZWMocmVzLmRhdGEuZGF0YS51c2VyX3NwZWMsIHJlcy5kYXRhLmRhdGEgPT0gXCJcIiA/IDEgOiAwLCBub3dDaGVjaywgMSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDllYblk4FcclxuXHRcdFx0Z29Ub0dvb2RzOiBmdW5jdGlvbihpZCwgcGlkKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbD9za3VfaWQ9JHtpZH0mJmVuY3J5cHRlZF9pZD0ke3BpZH1gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4uuS9oOaOqOiNkFxyXG5cdFx0XHRnZXRMaWtlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ3VzZXJyZWNvbW1lbmRlZGdvb2Rzc3B1bGlzdCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnMycsXHJcblx0XHRcdFx0XHRvZmZzZXQ6IHRoYXQub2Zmc2V0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gdGhhdC5wcm9kdWN0TGlzdHMuY29uY2F0KGRhdGEpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5rKh5pyJ5pWw5o2uJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vkvJjmg6DmiJbogIXljaHliLhcclxuXHRcdFx0Y2hhbmdlQWN0aXZpdHk6IGZ1bmN0aW9uKGluZGV4LCBsaXN0LCBpbmZvKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKGluZGV4ID09IDApIHsgLy/ljaHliLhcclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdpZHNfZ2V0X2NhcmQnLFxyXG5cdFx0XHRcdFx0XHRjYXJkX2lkOiBsaXN0LFxyXG5cdFx0XHRcdFx0XHRsaW1pdDogNixcclxuXHRcdFx0XHRcdFx0b2Zmc2V0OiAwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LmFjdF9pbmZvID0gaW5mb1xyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJjYXJkXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5pc1Nob3dEaXNjb3VudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmNhcmRzW2ldLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gMSkgeyAvL+S8mOaDoFxyXG5cdFx0XHRcdFx0dGhhdC5hY3RfaW5mbyA9IGxpc3RcclxuXHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gMikge1xyXG5cdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0XHRpZiAoIXRoYXQuaXNTaG93RGlzY291bnQpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IFtdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpooblj5bljaHliLhcclxuXHRcdFx0Z2V0Q2FyZHM6IGZ1bmN0aW9uKGNhcmRJZCwgcHJvbXB0LCBpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmIChwcm9tcHQgPT0gJycpIHtcclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjYXJkZ2V0JyxcclxuXHRcdFx0XHRcdFx0Y2FyZF9pZDogY2FyZElkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImNhcmRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QoJ+mihuWPluaIkOWKnycpXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdC5jYXJkc1tpbmRleF0uc2FsZWNhcmRfdXNlcl9jb3VudCA9IHRoYXQuY2FyZExpc3QuY2FyZHNbaW5kZXhdLnNhbGVjYXJkX3VzZXJfY291bnQgKyAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QocHJvbXB0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L2/55So5Y2h5Yi4XHJcblx0XHRcdHVzZUNhcmQ6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+S9v+eUqOeahOWNoeWIuGlkOicsIGlkKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93VGlja2V0OiBmdW5jdGlvbihjYXJkSWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY2FyZExpc3QuY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmICh0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLmlkID09IGNhcmRJZCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzID0gIXRoYXQuY2FyZExpc3QuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHNcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZydcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W5bm/5ZGKXHJcblx0XHRcdGFkdmVydGlzaW5nOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2dldGFkdmVydGlzaW5nJyxcclxuXHRcdFx0XHRcdGxvY2F0aW9uOiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiaG9tZVwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5zcGVjaWFsTGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5zcGVjaWFsTGlzdClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5blj6/pooblj5bljaHliLhcclxuXHRcdFx0Z2V0Q2FyZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6IFwibWF5X3JlY2VpdmVcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImNhcmRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0X2NvdW50ID0gZGF0YS5udW1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpoobliLjkuK3lv4NcclxuXHRcdFx0Z29Ub0dhaW46IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9teS9teV9jYXJkX2dhaW5gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieS4reWVhuWTgVxyXG5cdFx0XHRjaGFuZ2VQb3JkdWN0OiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuYnRubnVtID0gaW5kZXhcclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0ID0ge31cclxuXHRcdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYygnY29udGVudExpc3QnKTtcclxuXHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0fSAvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnb1RvR29vZHNDbGFzc2ZpeTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfY2xhc3NpZnlgLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaUtuiXj+OAgeebuOS8vOOAgeWIoOmZpFxyXG5cdFx0XHRzZXRTdGF0ZTogZnVuY3Rpb24oaW5kZXgsIGlkLCBudW0sIGNhdGVnb3J5X2lkLCBsaXN0TmFtZSwgZW5jcnlwdGVkX2lkKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW5kZXgsY2FydF9pZCxza3VfaWQsbnVtKVxyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8vIGluZGV4IDAg5pS26JePIDEg55u45Ly8IDIg5Yig6ZmkXHJcblx0XHRcdFx0aWYgKGluZGV4ID09IDApIHsgLy/mlLbol49cclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjb2xsZWN0Z29vZHNzcHUnLFxyXG5cdFx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IGVuY3J5cHRlZF9pZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdCgn5bey5pS26JePJylcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuZGF0YS5jb2RlID09IDEwMjApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KCfor6XllYblk4Hlt7LmlLbol48nKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gMSkgeyAvL+ebuOS8vFxyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfbGlzdD9uYW1lPSR7bGlzdE5hbWV9JmlkPSR7Y2F0ZWdvcnlfaWR9YCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAyKSB7IC8v5Yig6ZmkXHJcblx0XHRcdFx0XHRsZXQgY2FydF9pZCA9IFtdXHJcblx0XHRcdFx0XHRjYXJ0X2lkLnB1c2goaWQpXHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOiAnY2hhbmdjYXJ0JyxcclxuXHRcdFx0XHRcdFx0dHlwZTogMixcclxuXHRcdFx0XHRcdFx0Y2FydF9pZDogY2FydF9pZCxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrpropoHliKDpmaTmraTorqLljZXlkJc/JyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QocmVzLmRhdGEubWVzc2FnZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCA1MDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2FsZV9pbmZvOiBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSAvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIDgwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vliIbnsbvliJfooahcclxuXHRcdFx0Z29vZHNDbGFzc2ZpeTogZnVuY3Rpb24oaWQsIGxpc3ROYW1lKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3Q/bmFtZT0ke2xpc3ROYW1lfSZpZD0ke2lkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS55ZWG5ZOB5pWw6YePXHJcblx0XHRcdHNldEdvb2RzTnVtYmVyOiBmdW5jdGlvbihpZCwgY2FydF9udW0pIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgY2FydF9pZCA9IFtdXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5jb250ZW50TGlzdCkgLy/mg7Pms5XmmK/lnKjkv67mlLnmlbDph4/nmoTml7blgJnlhYjmiorotK3nianovabnmoTmlbDmja7lrZjlgqjvvIzkuLrkuobliKTlrprpgqPkupvmlbDmja7mmK/pgInkuK3kuoYs54S25ZCO6K6h566X5Lu35qC8XHJcblx0XHRcdFx0Ly8gdW5pLnNldFN0b3JhZ2VTeW5jKFwiY29udGVudExpc3RcIiwgdGhhdC5jb250ZW50TGlzdCk7XHJcblx0XHRcdFx0Y2FydF9pZC5wdXNoKGlkKVxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnY2hhbmdjYXJ0JyxcclxuXHRcdFx0XHRcdHR5cGU6IDAsXHJcblx0XHRcdFx0XHRjYXJ0X2lkOiBjYXJ0X2lkLFxyXG5cdFx0XHRcdFx0bnVtOiBjYXJ0X251bSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3QubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2FydF9pZCA9PSBjYXJ0X2lkKSB7IC8v5Yik5a6a6YCJ5oup5LqG55qE6K6i5Y2VXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0X3VzZXJfY2FydCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gXHJcblx0XHRcdFx0XHRcdC8vIHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0XHRcdFx0XHQvLyB0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHQvLyB0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdC8vIFx0c2FsZV9pbmZvOltdXHJcblx0XHRcdFx0XHRcdC8vIH0vL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWKoOWHj+aVsOmHj1xyXG5cdFx0XHRzZXROdW1iZXI6IGZ1bmN0aW9uKGlkLCBudW1iZXIsIGssIGlzLHN0b3JlLHRha2Vfc3RvcmUpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZ29vZHNOdW1iZXIgPSAwXHJcblx0XHRcdFx0bGV0IGNhcnRfbnVtID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bVxyXG5cdFx0XHRcdGNhcnRfbnVtICs9IG51bWJlclxyXG5cdFx0XHRcdGdvb2RzTnVtYmVyID0gY2FydF9udW1cclxuXHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0ID09IDApIHtcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCA9IDk5OTk5OVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZ29vZHNOdW1iZXIgPj0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogYOmZkOi0rSR7dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0feS7tmAsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGdvb2RzTnVtYmVyIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5aaC5p6c5Yqg5YeP55qE5pWw6YeP5Yqg5LiK6ZSA6YeP5bCP5LqO5bqT5a2Y5bCx5Y+v5Lul5q2j5bi46K6+572u77yM5aaC5p6c5aSn5LqO5bCx5Y+q6IO96K6+572u5pyA5aSn55qE5pWw6YeP5Yqg5LiK6ZSA6YeP562J5LqO5bqT5a2Y6YePXHJcblx0XHRcdFx0aWYoZ29vZHNOdW1iZXIrdGFrZV9zdG9yZT5zdG9yZSl7XHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IHN0b3JlIC0gdGFrZV9zdG9yZVxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBg5bqT5a2Y6YeP5LuF5YmpJHtzdG9yZSAtIHRha2Vfc3RvcmV9YCxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtID0gZ29vZHNOdW1iZXJcclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gZ29vZHNOdW1iZXJcclxuXHRcdFx0XHR0aGF0LnNldEdvb2RzTnVtYmVyKGlkLCBnb29kc051bWJlcilcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L6T5YWl5pWw6YePXHJcblx0XHRcdHNldFBvcmR1Y3ROdW1iZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHRcdGxldCBrID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmtcclxuXHRcdFx0XHRsZXQgaXMgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXNcclxuXHRcdFx0XHRsZXQgaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuXHRcdFx0XHRsZXQgdGFrZV9zdG9yZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YWtlX3N0b3JlXHJcblx0XHRcdFx0bGV0IHN0b3JlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnN0b3JlXHJcblx0XHRcdFx0bGV0IGdvb2RzTnVtYmVyID0gMFxyXG5cdFx0XHRcdGxldCBjYXJ0X251bSA9IHBhcnNlSW50KHZhbHVlKVxyXG5cdFx0XHRcdGdvb2RzTnVtYmVyID0gY2FydF9udW1cclxuXHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0ID09IDApIHtcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCA9IDk5OTk5OVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDovpPlhaXmlbDph4/liqDkuIrplIDph4/lsI/kuo7lupPlrZjlsLHlj6/ku6XmraPluLjorr7nva7vvIzlpoLmnpzlpKfkuo7lsLHlj6rog73orr7nva7mnIDlpKfnmoTmlbDph4/liqDkuIrplIDph4/nrYnkuo7lupPlrZjph49cclxuXHRcdFx0XHRsZXQgbnVtID0gcGFyc2VJbnQoZ29vZHNOdW1iZXIpXHJcblx0XHRcdFx0dGFrZV9zdG9yZSA9IHBhcnNlSW50KHRha2Vfc3RvcmUpXHJcblx0XHRcdFx0aWYobnVtK3Rha2Vfc3RvcmU+c3RvcmUpe1xyXG5cdFx0XHRcdFx0bnVtID0gcGFyc2VJbnQoc3RvcmUpLSBwYXJzZUludCh0YWtlX3N0b3JlKVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bVxyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bSA9IG51bVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1cclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogYOW6k+WtmOmHj+S7heWJqSR7c3RvcmUgLSB0YWtlX3N0b3JlfWAsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGdvb2RzTnVtYmVyID49IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdClcclxuXHRcdFx0XHRcdGdvb2RzTnVtYmVyID0gbnVtYmVyXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBg6ZmQ6LStJHt0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXR95Lu2YCxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZ29vZHNOdW1iZXIgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gMVxyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bSA9IDFcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bSA9IGdvb2RzTnVtYmVyXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IGdvb2RzTnVtYmVyXHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bSA9IGdvb2RzTnVtYmVyXHJcblx0XHRcdFx0dGhhdC5zZXRHb29kc051bWJlcihpZCwgZ29vZHNOdW1iZXIpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuS8mOaDoOaYjue7hlxyXG5cdFx0XHR1c2VyX2Rpc2NvdW50OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnNob3dfZGlzY291bnQgPSAhdGhhdC5zaG93X2Rpc2NvdW50XHJcblx0XHRcdH0sXHJcblx0XHRcdElLbm93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnNob3dfZGlzY291bnQgPSAhdGhhdC5zaG93X2Rpc2NvdW50XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudG9wLWJhciB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LmJhY2stdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzOHJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5iYWNrIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRvcDogMDtcclxuXHR9XHJcblxyXG5cdC5iYWNrIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzNnJweDtcclxuXHRcdGhlaWdodDogMzZycHg7XHJcblx0fVxyXG5cclxuXHQuYmFjay10aXRsZSAudGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzN3JweDtcclxuXHR9XHJcblxyXG5cdC5jYXJ0LWNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuXHR9XHJcblxyXG5cdC5lbXB0eS1jYXJ0IHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5lbXB0eS1jYXJ0LWltYWdlIHtcclxuXHRcdHBhZGRpbmc6IDY4cnB4IDE3N3JweCA0MHJweCAxNzRycHg7XHJcblx0fVxyXG5cclxuXHQuZW1wdHktY2FydC1pbWFnZSBpbWFnZSB7XHJcblx0XHR3aWR0aDogNDAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyNTRycHg7XHJcblx0fVxyXG5cclxuXHQuZ28tc3Ryb2xsIHtcclxuXHRcdHdpZHRoOiAyMjBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDg3cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmNjY5OSAwJSwgI2ZhMzQ3NSAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNDBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnNwZWNpYWwtcGVyZm9ybWFuY2Uge1xyXG5cdFx0cGFkZGluZzogNDBycHggMjBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0LnNwZWNpYWxMaXN0IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnNwZWNpYWxMaXN0IGltYWdlIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnJlY29tbWVuZC10by15b3Uge1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHR3aWR0aDogNnJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmEzNTc2O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTGluZSB7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNoZWNrZWRMaW5lIHZpZXcge1xyXG5cdFx0aGVpZ2h0OiA0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5yZWxhdGVkLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5zdWJqZWN0LWNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LXRvLW5hdiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGhlaWdodDogOTZycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0fVxyXG5cclxuXHQucHJvZHVjdC1uYW1lIHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRsaW5lLWhlaWdodDogOTZycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZFBvcmR1Y3Qge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LmVuZC1jb250IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQuZGlzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHJcblx0LmNhcmQtdG9wIHtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLXRvcDogNXJweDtcclxuXHR9XHJcblxyXG5cdC50YWJCYXJMaXN0IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmNhbi1yZWNlaXZlIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMjFycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNhbi1yZWNlaXZlIC50ZXh0IHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0fVxyXG5cclxuXHQudGV4dHMge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDc5cnB4O1xyXG5cdH1cclxuXHJcblx0LmdvLXJlY2VpdmUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5nby1yZWNlaXZlIC50cmlhbmdsZS1saW5lIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRib3JkZXItd2lkdGg6IDQwcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzViZTNkNSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0XHRtYXJnaW4tbGVmdDogLTU2cnB4O1xyXG5cdH1cclxuXHJcblx0LmNoYXJhY3RlciB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlM2Q1O1xyXG5cdFx0d2lkdGg6IDE3MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jYXJ0LXNob3BwaW5nLXNob3cge1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGFuZ2UtY2hlY2stc2VlLW1vcmUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZS1jaGVjayB0ZXh0IHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuZGVsZXRlLWdvb2RzIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5hZGQtb24taXRlbSB7XHJcblx0XHR3aWR0aDogODhycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTZycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lhbC1vZmZlciB7XHJcblx0XHRwYWRkaW5nOiAwcnB4IDEwcnB4IDEwcnB4IDUwcnB4O1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHkge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZnVsbC1yZWR1Y3Rpb24ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMnJweDtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWZpYy1hY3Rpdml0eSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0LmFjdGl2aXR5LXRpbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5hY3Rpdml0eS10aW1lIHRleHQge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW46IDAgOHJweDtcclxuXHR9XHJcblxyXG5cdC5ob3VzZXMsXHJcblx0Lm1pbnV0ZSxcclxuXHQuc2Vjb25kIHtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtaXRlbS1jb250ZW50LWFsbCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC5zaG93X2dvb2RzX3N0YXRlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQudGhpc19pc19nb29kc19zdGF0ZSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuc2V0X3N0YXRlIHtcclxuXHRcdHdpZHRoOiA4NHJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAyOHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDY1cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jb2xsZWN0aW9uIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNGOUJCMDAgMCUsICNGOUJCMDAgMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuc2ltaWxhciB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRkY5OTY2IDAlLCAjRkY5OTY2IDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnRoaXNfaXNfZ29vZHNfc3RhdGUgLmRlbGV0ZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNldF9zdGF0ZSB0ZXh0IHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtaXRlbS1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tib3gtaXRlbSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5nb29kcy1pbmZvIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtaXRlbS1zaG93IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2VzIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2VzIC5pbnZhbGlkLWdvb2RzIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG5cclxuXHQuZGVsZXRlLWludmFsaWQtZ29vZHMge1xyXG5cdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxNTBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA3NXJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlciB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0tcHJpY2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlIC5wcmljZSB7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0fVxyXG5cclxuXHQubWVtYmVyLXByaWNlIHtcclxuXHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdGhlaWdodDogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjhycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDAwMCAwJSwgIzJjMmMyYyAxMDAlKSwgbGluZWFyLWdyYWRpZW50KCMyODI4MjgsICMyODI4MjgpO1xyXG5cdFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWwsIG5vcm1hbDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRycHg7XHJcblx0XHRmb250LXNpemU6IDE2cnB4O1xyXG5cdFx0Y29sb3I6ICNmZWZlZmU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tbGVmdDogNXJweDtcclxuXHR9XHJcblxyXG5cdC5wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXIge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnB1cmNoYXNlTGltaXRhdGlvbk51bWJlciB0ZXh0IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5vZmZsaW5lX3BheS1vbmxpbmVfcGF5LWNoZWNrZWROdW1iZXIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0Lm9mZmxpbmVfcGF5LW9ubGluZV9wYXkge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5vbmxpbmVfcGF5IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTnVtYmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogMTgwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGJvcmRlcjogc29saWQgMXJweCAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LmNoZWNrZWROdW1iZXIgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5pbnB1dCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcblx0fVxyXG5cclxuXHQuaW5wdXQgLmNhcnRfbnVtIHtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDVycHg7XHJcblx0fVxyXG5cclxuXHQuc3VidHJhY3QsXHJcblx0LmFkZCB7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0tbmFtZSB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdH1cclxuXHJcblx0LnZlcnNpb25zIHtcclxuXHRcdHdpZHRoOiAzNjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwIDE2cnB4O1xyXG5cdH1cclxuXHJcblx0LnZlcnNpb25zLW5hbWUge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucy1uYW1lLWl0ZW0ge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnZlcnNpb25zLW5hbWUtaXRlbTpmaXJzdC1jaGlsZCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51bmZvbGQge1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5uYW1lLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC5tYW50bGVkIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG5cdFx0ei1pbmRleDogNTM7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50cy10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdHBhZGRpbmctdG9wOiAyNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5kaXNjb3VudHMtaGludCB7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmNhcmRfbGlzdCB7XHJcblx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jYXJkLXRpdGxlLWFsbC1jYXJkIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0Lm1vcmUtY2FyZCB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuZGVsZXRlLWRpc2NvdW50IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMjVycHg7XHJcblx0XHRyaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuZGVsZXRlLWRpc2NvdW50IGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuc2V0dGxlbWVudCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuc2V0dGxlbWVudC1pbmZvIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjBycHggMzBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHR9XHJcblxyXG5cdC50b3RhbC1kaXNjb3VudCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRvdGFsLWRpc2NvdW50IC50b3RhbCB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMHJweDtcclxuXHR9XHJcblxyXG5cdC50b3RhbC1kaXNjb3VudCAudG90YWwgdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQudXNlLWRpc2NvdW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVzZS1kaXNjb3VudC1kZXRhaWxlZCB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM0cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmdvU2V0dGxlbWVudCB7XHJcblx0XHR3aWR0aDogMTgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDcwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzVycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNldF9nb29kc19zcGVjX2NvbnRlbnQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogNTI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LmlzU2hvdy1jb250ZW50IHtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnNwZWNzLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnNwZWNzLWhpbnQge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRmb250LXNpemU6IDIycnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnNwZWNzIHtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5wYXktdHh0IHtcclxuXHRcdHBhZGRpbmctbGVmdDogMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblxyXG5cdC5zcGVjcy1jb250IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQuc3BlY3MtY29udC1wYXkge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0zMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5saSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRsaW5lLWhlaWdodDogNTJycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MnJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjVycHg7XHJcblx0XHRib3JkZXI6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHRcdGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcblx0XHRtYXJnaW46IDIwcnB4IDAgMCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5zcGVjcy1jb250LXBheSAubGkge1xyXG5cdFx0bWFyZ2luOiAwIDAgMCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5saS1ob3ZlciB7XHJcblx0XHRib3JkZXI6IDJycHggc29saWQgI2ZhMzQ3NTtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmU4ZjA7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5zcGVjcy1jb250IC5saS1ncmF5IHtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHJcblx0LmFkZC1jYXJkLXRvcCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5sZWZ0LWhlYWRfaW1nIGltYWdlIHtcclxuXHRcdHdpZHRoOiAyNDBycHg7XHJcblx0fVxyXG5cclxuXHQucmlnaHQtZ29vZHMtaW5mbyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBycHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0Lmdvb2RzLWRpc2NvdW50cyB7XHJcblx0XHR3aWR0aDogMTYwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjODgzNGZhIDAlLCAjYmM2NmZmIDEwMCUpO1xyXG5cdH1cclxuXHJcblx0Lmdvb2QtcHJpY2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5tYXJrZXRfcHJpY2Uge1xyXG5cdFx0Y29sb3I6ICNGRjAwMDA7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0Lm1lbWJlcl9wcmljZSB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICM5OTk5OTk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDEwcnB4IDEwcnB4IDA7XHJcblx0fVxyXG5cclxuXHQubWVtYmVyX3RpdGxlIHtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDEwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVycHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuc3RvcmUtc2t1X25vIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnNrdV9ubyB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuaXNTaG93IC5zcGVjcy1jb250LXBheSB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAwIDA7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5pc1Nob3cgLnNwZWNzLWNvbnQge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQuaXNTaG93IC5zcGVjcy1jb250LXBheSAucGF5LXR4dCB7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZU51bWJlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZzogMjBycHggMDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQuY2hhbmdlTnVtYmVyIC5wYXktdHh0IHtcclxuXHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDQwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQubnVtYmVyLWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0Lm51bWJlci1oaW50IHRleHQge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY2hhbmdlLWlucHV0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0Lm51bWJlci1pbnB1dCB7XHJcblx0XHRoZWlnaHQ6IDg0cnB4O1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRib3JkZXItdG9wOiAxcnB4IHNvbGlkICM5OTk5OTk7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQubnVtYmVyLWlucHV0IGlucHV0IHtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJvcmRlcjogMDtcclxuXHR9XHJcblxyXG5cdC5yZWR1Y2UsXHJcblx0LmFkZC1udW1iZXIge1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogNTZycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0LmtlZXAtb3JkZXIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdH1cclxuXHJcblx0LmJ1dHRvbiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDQwcnB4O1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0fVxyXG5cclxuXHQua2VlcC1vcmRlci1idXR0b24ge1xyXG5cdFx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1zZWUtbW9yZS1kaXNjb3VudCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDIwcnB4O1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1zZWUtbW9yZS1kaXNjb3VudCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnRoaXNfc2hvd19kaXNjb3VudCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjBycHggMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDgwcnB4O1xyXG5cdH1cclxuXHJcblx0LnNob3dfZGlzY291bnRfdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnNob3dfZGlzY291bnRfY29udGVudCB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdC5kaXNjb3VudF9zYWxlX2luZm8ge1xyXG5cdFx0cGFkZGluZzogMTBycHggMTUwcnB4IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmRpY291bnRfcHJpY2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdH1cclxuXHJcblx0LmFsbF9kaXNjb3VudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDAgMjBycHg7XHJcblx0fVxyXG5cclxuXHQuYWxsX2Rpc2NvdW50IC5zYWxlX2luZm9fZGlzY291bnRfcHJpY2Uge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuZGlzY291bnQtaGludCB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQuaV9rbm93IHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA1NjA2MjYzMDg5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==