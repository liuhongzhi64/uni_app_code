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
          }
          cart_info = {
            act_id: act_id,
            cart_id_list: sku_list[i].cart_id_list };

          cart_id_list.push(cart_info);
        }
      } else {//如果是没有全选，就循环判定购物车的分类列表是否有全选的，有，先导入，没有再循环内部的商品是否选中
        for (var _i7 = 0; _i7 < sku_list.length; _i7++) {
          if (sku_list[_i7].all_checked) {//分类列表是否有全选的，有，先导入，没有再循环内部的商品是否选中
            if (sku_list[_i7].act_id) {
              act_id = sku_list[_i7].act_id;
            }
            cart_info = {
              act_id: act_id,
              cart_id_list: sku_list[_i7].cart_id_list };

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
      // console.log(cart_id_list)
      uni.setStorageSync("cart_id_list", cart_id_list); //将数据存储，方便在确认订单时使用
      // 清除本地存的购物车数据
      // uni.removeStorageSync('contentList');
      if (cart_id_list.length > 0) {
        // 确认订单
        uni.navigateTo({
          url: "/pages/confirm_order/confirm_order" });

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
              console.log();
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
    setNumber: function setNumber(id, number, k, is) {
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
      } else if (goodsNumber < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
        var _number4 = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit);
        goodsNumber = _number4;
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
      if (value == '') {
        value = 1;
        that.contentList.sku_list[k].goods_list[is].cart_num = 1;
      } else {
        that.contentList.sku_list[k].goods_list[is].cart_num = parseInt(value);
      }
      var goodsNumber = 0;
      var cart_num = that.contentList.sku_list[k].goods_list[is].cart_num;
      goodsNumber = cart_num;
      if (that.contentList.sku_list[k].goods_list[is].max_buy_limit == 0) {
        that.contentList.sku_list[k].goods_list[is].max_buy_limit = 999999;
      }
      if (goodsNumber >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
        var number = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit);
        goodsNumber = number;
      } else if (goodsNumber < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
        var _number5 = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit);
        goodsNumber = _number5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NjYyMyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzljYmEiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT9hZGI0IiwidW5pLWFwcDovLy9wYWdlcy9jYXJ0L2NhcnQudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NWIxNSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzRmMGYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EseUY7QUFDQUEsVUFBVSxDQUFDQyxhQUFELENBQVYsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQzdIO0FBQ3dEO0FBQ0w7QUFDcUM7OztBQUd4RjtBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQTZwQixDQUFnQiwycEJBQUcsRUFB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O0FBQ0EsbUNBREE7QUFFQTtBQUNBLG1CQU5BLEVBTUEsR0FOQTtBQU9BO0FBQ0EsZUFiQTtBQWNBO0FBQ0EsV0FwQkE7O0FBc0JBO0FBQ0EsS0E5dkJBO0FBK3ZCQTtBQUNBO0FBQ0E7QUFDQSxnRkFEQTs7QUFHQSxLQXB3QkE7QUFxd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGVBRkE7QUFHQSx3QkFIQTtBQUlBLHFCQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FuQkE7QUFvQkEsS0F0eUJBO0FBdXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM3pCQTtBQTR6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6MUJBO0FBMDFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOTFCQTtBQSsxQkE7QUFDQTtBQUNBO0FBQ0EsS0FsMkJBLEVBbEhBLEU7Ozs7Ozs7Ozs7OztBQy9hQTtBQUFBO0FBQUE7QUFBQTtBQUFnK0IsQ0FBZ0IsMDdCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FwL0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9jYXJ0L2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvY2FydC9jYXJ0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwZjAwYWRmNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jYXJ0L2NhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY2FydFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3AtYmFyXCIgOnN0eWxlPVwiW3snaGVpZ2h0JzptZW51SGVpZ2h0KydweCcsJ3BhZGRpbmctdG9wJzptZW51VG9wKydweCcsJ2xpbmUtaGVpZ2h0JzptZW51SGVpZ2h0KydweCcsJ3BhZGRpbmctYm90dG9tJzoxMCsncHgnLCdiYWNrZ3JvdW5kLWNvbG9yJzp0b3BCYWNrZ3JvdW5kQ29sb3IsJ2NvbG9yJzpjb2xvcn1dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmFjay10aXRsZVwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnfV1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhY2tcIiBAY2xpY2s9XCJnb0JhY2tcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiYmFja0ltYWdlXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj4ge3t0aXRsZX19IDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LXRvLW5hdlwiIDpzdHlsZT1cIlt7J3RvcCc6bWVudUJvdHRvbSsxMCsncHgnfV1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LW5hbWVcIiB2LWZvcj1cIihpLGspIGluIHByb2R1Y3ROYW1lTGlzdFwiIDprZXk9J2snIDpjbGFzcz1cIntjaGVja2VkUG9yZHVjdCA6YnRubnVtID09IGt9XCIgQHRhcD1cImNoYW5nZVBvcmR1Y3QoaylcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1uYW1lLWxpbmVcIj5cclxuXHRcdFx0XHRcdHt7IGkubmFtZSB9fSA8dGV4dD4oe3tpLm51bWJlcn19KTwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cIntjaGVja2VkTGluZSA6YnRubnVtID09IGt9XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3Pjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2FydC1jb250ZW50XCIgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOm1lbnVCb3R0b20rNTgrJ3B4J31dXCI+XHJcblx0XHRcdDwhLS0g6LSt54mp6L2m5Li656m6IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImVtcHR5LWNhcnRcIiB2LWlmPVwic2t1X2xpc3QubGVuZ3RoPT0wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbXB0eS1jYXJ0LWltYWdlXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9jYXJ0QmcucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wdHktY2FydC10ZXh0XCI+IOi0reeJqei9pui/mOaYr+epuueahOWTn34gPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ28tc3Ryb2xsXCIgQHRhcD0nZ29Ub0dvb2RzQ2xhc3NmaXknPiDljrvpgJvpgJsgPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6LSt54mp6L2m5LiN5Li656m6IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNhcnQtaGF2ZS1wcm9kdWN0XCIgdi1lbHNlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW5kLWNvbnRcIiA6Y2xhc3M9XCJ7ZGlzOmJ0bm51bSA9PSBpbmRleH1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBwcm9kdWN0TmFtZUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZC10b3BcIiBAdGFwPSdnb1RvR2Fpbic+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuLXJlY2VpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldz7mgqjmnIk8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0XCI+e3tnZXRfY291bnR9feW8oOS4k+WxnuS8mOaDoOWIuDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRzXCI+5Y+v6aKG5Y+Wfjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvLXJlY2VpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRyaWFuZ2xlLWxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhcmFjdGVyXCI+5Y676aKG5Y+WJm5ic3A7Pjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG9waW5nLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LXNob3BwaW5nLXNob3dcIiB2LWZvcj1cIihpdGVtcyxrKSBpbiBjb250ZW50TGlzdC5za3VfbGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5YWo6YCJIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrLXNlZS1tb3JlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y2hlY2tib3ggY29sb3I9JyMwMDdBRkYnIDpjaGVja2VkPVwiaXRlbXMuYWxsX2NoZWNrZWRcIiBAdGFwPSdjaGVja2VkX2NsYXNzX2FsbChrKScgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgQHRhcD0nZ29vZHNDbGFzc2ZpeShpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSknPiB7e2l0ZW1zLmNhdGVnb3J5X3RpdGxlfX0gPiA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1vbi1pdGVtXCIgdi1pZj1cIml0ZW1zLmNhcmRzLmxlbmd0aD4wXCIgQHRhcD1cImNoYW5nZUFjdGl2aXR5KDAsaXRlbXMuY2FyZHMsaXRlbXMuYWN0X2luZm8pXCI+IOmihuWIuFxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtb24taXRlbVwiIHYtZWxzZS1pZj1cIml0ZW1zLmFjdF9pbmZvXCIgQHRhcD1cImNoYW5nZUFjdGl2aXR5KDEsaXRlbXMuYWN0X2luZm8pXCI+IOeci+S8mOaDoCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5LyY5oOg5rS75YqoIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1vZmZlclwiIHYtaWY9XCJpdGVtcy5hY3RfaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c1wiIHYtaWY9XCJpdGVtcy5hY3RfaW5mby5pc19jb3VudGRvd249PTFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IOmZkOaXtiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0Pui3nea0u+WKqOe7k+adn+i/mOWJqSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHktdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGF5IGhvdXNlc1wiPiB7eyBpdGVtcy5kYXkgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG91c2VzXCI+IHt7IGl0ZW1zLmhvdXNlIH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlY29uZFwiPiB7eyBpdGVtcy5zZWNvbmQgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWludXRlXCI+IHt7IGl0ZW1zLm1pbnV0ZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1mb3I9XCIoY29udGVudCx0eXBlKSBpbiBpdGVtcy5hY3RfaW5mby5hY3RfcnVsZVwiIDprZXk9J3R5cGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb25cIj4ge3tjb250ZW50LmNhdGVnb3J5fX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPiB7e2NvbnRlbnQucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWVhuWTgeWxleekuiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1jb250ZW50LWFsbFwiIHYtZm9yPVwiKGksaXMpIGluIGl0ZW1zLmdvb2RzX2xpc3RcIiA6a2V5PSdpcyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1jb250ZW50XCIgQGxvbmdwcmVzcz0nc2V0Z29vZHNTdGF0ZShrLGlzKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hlY2tib3gtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjaGVja2JveCBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIiBjb2xvcj0nIzAwN0FGRicgOmNoZWNrZWQ9XCJpLmNoZWNrZWRcIiBAdGFwPSdjaGFuZ2VDaGVjayhrLGlzKScgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1zaG93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1pbWFnZXNcIiBAdGFwPSdnb1RvR29vZHMoaS5Ta3VfaWQsaS5lbmNyeXB0ZWRfaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaGVhZF9pbWdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1uYW1lXCI+IHt7aS5nb29kc19uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zXCIgQHRhcD0nc2hvd1NldFNwZWMoaS5Ta3VfaWQsaS5lbmNyeXB0ZWRfaWQsaS5jYXJ0X251bSxpLmNhcnRfaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnMtbmFtZS1pdGVtXCIgdi1mb3I9XCIoaXMseikgaW4gaS5zcGVjX25hbWVcIiA6a2V5PSd6Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3t6fX06e3tpc319XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVuZm9sZFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvdW5mb2xkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTvv6U8dGV4dCBjbGFzcz1cInByaWNlXCI+e3tpLnNhbGVfcHJpY2V9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW1iZXItcHJpY2VcIiB2LWlmPVwiaS5tZW1iZXJcIj7kvJrlkZjku7c8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1cmNoYXNlTGltaXRhdGlvbk51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqIHt7IGkubWluX2J1eV9saW1pdCB9fSDku7botbfotK1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1zaG93PVwiaS5tYXhfYnV5X2xpbWl0PjAmJmkubWF4X2J1eV9saW1pdCE9OTk5OTk5XCI+ICwg6ZmQ6LSte3tpLm1heF9idXlfbGltaXR9feS7tiA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJpLmN1dF9wcmljZTwwXCI+IOavlOWKoOi0reaXtumZjeS7t++/pXt7aS5jdXRfcHJpY2V9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtZWxzZS1pZj1cImkuY3V0X3ByaWNlPjBcIj4g5q+U5Yqg6LSt5pe25rao5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvZmZsaW5lX3BheS1vbmxpbmVfcGF5LWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib2ZmbGluZV9wYXktb25saW5lX3BheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9ubGluZV9wYXlcIj7lnKjnur/mlK/ku5jvv6V7eyBpLm9ubGluZV9wYXkqaS5jYXJ0X251bSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvZmZsaW5lX3BheVwiPuWIsOmZouWGjeS7mO+/pXt7IGkub2ZmbGluZV9wYXkqaS5jYXJ0X251bSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnRyYWN0XCIgQHRhcD1cInNldE51bWJlcihpLmNhcnRfaWQsLTEsayxpcylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImNhcnRfbnVtXCIgOmRhdGEtaz0naycgOmRhdGEtaXM9J2lzJyA6ZGF0YS1pZD0naS5jYXJ0X2lkJyB2LW1vZGVsPVwiaS5jYXJ0X251bVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IEBpbnB1dD0nc2V0UG9yZHVjdE51bWJlcicgbWF4bGVuZ3RoPVwiMlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRcIiBAdGFwPVwic2V0TnVtYmVyKGkuY2FydF9pZCwxLGssaXMpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYWRkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZ29vZHNfc3RhdGVcIiB2LXNob3c9XCJpLmlzX3Nob3dfc3RhdGVcIiBAdGFwPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzX2lzX2dvb2RzX3N0YXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0aW9uIHNldF9zdGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHYtaWY9XCJpdGVtcy5jYXRlZ29yeV9zdGF0dXM9PTFcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMCxpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+56e75YWlPC90ZXh0PiA8dGV4dD7mlLbol488L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2ltaWxhciBzZXRfc3RhdGVcIiBAdGFwPSdzZXRTdGF0ZSgxLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHTnnIvnm7jkvLwgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlIHNldF9zdGF0ZVwiIEB0YXA9J3NldFN0YXRlKDIsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWIoOmZpCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDlvLnnqpfkvJjmg6DmiJbogIXljaHliLggLS0+XHJcblx0XHRcdFx0XHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwibWFudGxlZFwiIHYtaWY9XCJpc1Nob3dEaXNjb3VudFwiIHNjcm9sbC15PVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2hlaWdodCc6Y2FyZExpc3QuY2FyZHM/aGVpZ2h0LzIrJ3B4JzpoZWlnaHQvNCsncHgnfV1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLXRpdGxlXCI+IOS/g+mUgOS8mOaDoCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1oaW50XCI+Kua4qemmqOaPkOekujrmu6Hlh4/jgIHmipjmiaPjgIHljaHliLjlnYflj6/lj6DliqDkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtb2ZmZXJcIiB2LWlmPVwiYWN0X2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1pZj1cImFjdF9pbmZvLmlzX2NvdW50ZG93bj09MVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IOmZkOaXtiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7ot53mtLvliqjnu5PmnZ/ov5jliakgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHktdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXkgaG91c2VzXCI+IHt7IGl0ZW1zLmRheSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvdXNlc1wiPiB7eyBpdGVtcy5ob3VzZSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlY29uZFwiPiB7eyBpdGVtcy5zZWNvbmQgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaW51dGVcIj4ge3sgaXRlbXMubWludXRlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1mb3I9XCIoY29udGVudCx0eXBlKSBpbiBhY3RfaW5mby5hY3RfcnVsZVwiIDprZXk9J3R5cGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IHt7Y29udGVudC5jYXRlZ29yeX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPiB7e2NvbnRlbnQucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX2xpc3RcIiB2LWlmPVwiY2FyZExpc3QuY2FyZHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkLXRpdGxlLWFsbC1jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+IOWPr+eUqOS8mOaDoOWIuFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vcmUtY2FyZFwiIEB0YXA9J2dvVG9HYWluJz4g5pu05aSa5LyY5oOg5Yi4ID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aWNrZXQgOmNhcmRzTGlzdD0nY2FyZExpc3QuY2FyZHMnIDp0aW1lX25vdz0nY2FyZExpc3QudGltZV9ub3cnIEBzaG93VGlja2V0PSdzaG93VGlja2V0JyBAZ2V0Q2FyZHM9J2dldENhcmRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgQHVzZUNhcmQ9J3VzZUNhcmQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RpY2tldD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWRpc2NvdW50XCIgQHRhcD0nY2hhbmdlQWN0aXZpdHkoMiknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g6L+H5pyf5aSx5pWI55qE5ZWG5ZOBIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG9waW5nLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LXNob3BwaW5nLXNob3dcIiB2LWZvcj1cIihpdGVtcyxrKSBpbiBjb250ZW50TGlzdC5za3VfbGlzdFwiIDprZXk9J2snIHYtc2hvdz1cIml0ZW1zLmNhdGVnb3J5X3N0YXR1cz09MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrLXNlZS1tb3JlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD4g5aSx5pWI55qE5ZWG5ZOBIDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWdvb2RzXCIgQHRhcD0nZGVsZXRlSW52YWxpZChrLGlzKSc+IOa4heepuuWkseaViOWVhuWTgSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnQtYWxsXCIgdi1mb3I9XCIoaSxpcykgaW4gaXRlbXMuZ29vZHNfbGlzdFwiIDprZXk9J2lzJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnRcIiBAbG9uZ3ByZXNzPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tc2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0taW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRfaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW52YWxpZC1nb29kc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWludmFsaWQtZ29vZHNcIj7lt7LlpLHmlYg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1uYW1lXCI+IHt7aS5nb29kc19uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zLW5hbWUtaXRlbVwiIHYtZm9yPVwiKGlzLHopIGluIGkuc3BlY19uYW1lXCIgOmtleT0neic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7en19Ont7aXN9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1bmZvbGRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3VuZm9sZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdO+/pTx0ZXh0IGNsYXNzPVwicHJpY2VcIj57e2kuc2FsZV9wcmljZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbWJlci1wcmljZVwiIHYtaWY9XCJpLm1lbWJlclwiPuS8muWRmOS7tzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCoge3sgaS5taW5fYnV5X2xpbWl0IH19IOS7tui1t+i0rVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LXNob3c9XCJpLm1heF9idXlfbGltaXQ+MCYmaS5tYXhfYnV5X2xpbWl0IT05OTk5OTlcIj4gLCDpmZDotK17e2kubWF4X2J1eV9saW1pdH195Lu2IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cImkuY3V0X3ByaWNlPDBcIj4g5q+U5Yqg6LSt5pe26ZmN5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlLWlmPVwiaS5jdXRfcHJpY2U+MFwiPiDmr5TliqDotK3ml7bmtqjku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXktY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvZmZsaW5lX3BheS1vbmxpbmVfcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib25saW5lX3BheVwiPuWcqOe6v+aUr+S7mO+/pXt7IGkub25saW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9mZmxpbmVfcGF5XCI+5Yiw6Zmi5YaN5LuY77+le3sgaS5vZmZsaW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidHJhY3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImNhcnRfbnVtXCIgOmRhdGEtaz0naydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmRhdGEtaXM9J2lzJyB2LW1vZGVsPVwiaS5jYXJ0X251bVwiIEBpbnB1dD0nc2V0UG9yZHVjdE51bWJlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbWF4bGVuZ3RoPVwiMlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hZGQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19nb29kc19zdGF0ZVwiIHYtc2hvdz1cImkuaXNfc2hvd19zdGF0ZVwiIEB0YXA9J3NldGdvb2RzU3RhdGUoayxpcyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXNfaXNfZ29vZHNfc3RhdGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbWlsYXIgc2V0X3N0YXRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMSxpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx055yL55u45Ly8IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZSBzZXRfc3RhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdzZXRTdGF0ZSgyLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHTliKDpmaQgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbC1wZXJmb3JtYW5jZVwiIHYtaWY9XCJzcGVjaWFsTGlzdC5jb250ZW50Lmxlbmd0aD4wJiZza3VfbGlzdC5sZW5ndGg9PTBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWxMaXN0XCIgdi1pZj1cInNwZWNpYWxMaXN0LnR5cGU9PTFcIj5cclxuXHRcdFx0XHRcdDxzd2lwZXIgaW5kaWNhdG9yLWRvdHMgaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcj1cIiNmZjY2OTlcIiBhdXRvcGxheSBpbnRlcnZhbD0nNTAwMCcgZHVyYXRpb249JzMwMDAnIGNpcmN1bGFyPlxyXG5cdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJzd2lwZXItaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHNwZWNpYWxMaXN0LmNvbnRlbnRcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraXRlbS5pbWdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHRcdFx0PC9zd2lwZXI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicmVjb21tZW5kLXRvLXlvdVwiIHYtaWY9XCJwcm9kdWN0TGlzdHNcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlbGF0ZWQtdGl0bGVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3PuS4uuS9oOaOqOiNkDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJqZWN0LWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxnb29kc1Nob3cgOmJvcmRlclJhZGl1cz0yNCA6cmVxdWVzdFVybD0ncmVxdWVzdFVybCcgOndpZHRoPTM1MCA6cG9yZHVjdExpc3Q9J3Byb2R1Y3RMaXN0cyc+XHJcblx0XHRcdFx0XHQ8L2dvb2RzU2hvdz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlhajpgInlkoznu5PnrpcgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2V0dGxlbWVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2V0dGxlbWVudC1pbmZvXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1hbGwtZ29vZHNcIiBAdGFwPSdjaGFuZ2VfYWxsX2NhcnQnPlxyXG5cdFx0XHRcdFx0XHQ8Y2hlY2tib3ggY29sb3I9JyMwMDdBRkYnIDpjaGVja2VkPVwiYWxsY2hlY2tlZFwiIC8+IDx0ZXh0PiDlhajpgIkgPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1kaXNjb3VudFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsXCI+5ZCI6K6hIDogPHRleHQ+IO+/pXt7IG9yZGVyX2luZm8ub2ZmX3NhbGUgfHwgMCB9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2UtZGlzY291bnRcIiB2LWlmPVwib3JkZXJfaW5mby5zYWxlX2luZm8ubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHTkvJjmg6Dlh486IO+/pXt7IG9yZGVyX2luZm8uc2FsZV9wcmljZSB8fDAgfX1cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZS1kaXNjb3VudC1kZXRhaWxlZFwiIEB0YXA9J3VzZXJfZGlzY291bnQnPuS8mOaDoOaYjue7hjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb1NldHRsZW1lbnRcIiBAdGFwPSdnb1RvU2V0dGxlbWVudCgpJz7ljrvnu5Pnrpc8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOS/ruaUueWVhuWTgeinhOagvCAtLT5cclxuXHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cInNldF9nb29kc19zcGVjX2NvbnRlbnRcIiBzY3JvbGwteT1cInRydWVcIiB2LWlmPVwidGhpc19zaG93X2dvb2RzX3NwZWNcIiA6c3R5bGU9XCJbeydoZWlnaHQnOmhlaWdodC8yKydweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlzU2hvdy1jb250ZW50XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtY2FyZC10b3BcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1oZWFkX2ltZ1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwrZ29vZHNDb250ZW50TGlzdC5za3UuaGVhZF9pbWdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodC1nb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtZGlzY291bnRzXCIgdi1pZj1cImdvb2RzQ29udGVudExpc3Quc2t1LmFjdC5sZW5ndGghPTBcIiBAdGFwPSdzZWVNb3JlKDApJz4g5Y+C5LiO5LyY5oOgIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtYXJrZXRfcHJpY2VcIj7vv6V7e2dvb2RzQ29udGVudExpc3Quc2t1LnNhbGVfcHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbWJlcl9wcmljZVwiIHYtaWY9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5tZW1iZXIubWVtYmVyX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbWJlcl90aXRsZVwiPnt7Z29vZHNDb250ZW50TGlzdC5za3UubWVtYmVyLm1lbWJlcl90aXRsZX19PC90ZXh0Pu+/pXt7Z29vZHNDb250ZW50TGlzdC5za3UubWVtYmVyLnByaWNlfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdG9yZS1za3Vfbm9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCB2LXNob3c9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5zdG9yZTw9MTAwXCI+5bqT5a2YIHt7Z29vZHNDb250ZW50TGlzdC5za3Uuc3RvcmV9feS7tjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNrdV9ub1wiPue8luWPtzoge3tnb29kc0NvbnRlbnRMaXN0LnNrdS5za3Vfbm99fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLWNvbnRlbnRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBnb29kc0NvbnRlbnRMaXN0LnNwZWNfdmFsdWVcIiA6ZGF0YS1pbmRleD0naW5kZXgnIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLm5hbWV9fVxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJzcGVjcy1oaW50XCIgPuivt+mAieaLqXt7aXRlbS5uYW1lfX08L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiB2LWZvcj1cIihpcyxzaW5kZXgpIGluIGl0ZW0uYXR0clwiIDprZXk9XCJzaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdCA6Y2xhc3M9XCJbc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdPT0xPydsaS1ob3Zlcic6c3BlY1tpbmRleF0uYXR0cltzaW5kZXhdPT0wPydsaS1ncmF5JzonJ11cIlxyXG5cdFx0XHRcdFx0XHRcdCBAdGFwPVwiY2hhbmdlU3BlYyhpbmRleCxzaW5kZXgpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7e2lzfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udC1wYXlcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGF5LXR4dFwiPuaUr+S7mOaWueW8jzwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiBAdGFwPSdjaGFuZ2VQYXkoMCknIDpjbGFzcz1cIltwYXlfdHlwZT09MHx8cGF5X3R5cGU9PTI/J2xpLWhvdmVyJzonJ11cIj5cclxuXHRcdFx0XHRcdFx06aKE57qm6YeRXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlUGF5KDEpJyA6Y2xhc3M9XCJbcGF5X3R5cGU9PTF8fHBheV90eXBlPT0yPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOWFqOasvuS7mFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLWNvbnQtcGF5XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBheS10eHRcIj7pooblj5bmlrnlvI88L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlQ2xhc3MoMCknIDpjbGFzcz1cIltjbGFzc190eXBlPT0wPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOWIsOmZoumihuWPllxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIEB0YXA9J2NoYW5nZUNsYXNzKDEpJyA6Y2xhc3M9XCJbY2xhc3NfdHlwZT09MT8nbGktaG92ZXInOicnXVwiPlxyXG5cdFx0XHRcdFx0XHTpgq7lr4RcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2VOdW1iZXJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXR4dFwiPuaVsOmHjzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibnVtYmVyLWhpbnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgPiB7eyBnb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0IH19IOS7tui1t+i0rTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgXHJcblx0XHRcdFx0XHRcdCB2LXNob3c9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0PjAmJmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQhPTk5OTk5OVwiPlxyXG5cdFx0XHRcdFx0XHRcdOmZkOi0rSB7eyBnb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0IH19IOS7tlxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1pbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZHVjZVwiIEB0YXA9XCJyZWR1Y2UoLTEpXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtY29sb3InOnNldE5ld0dvb2RzTnVtYmVyPT1nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0ID8gJyNkZGRkZGQnOicjOTk5OTk5J31dXCI+LTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJudW1iZXItaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJzZXROZXdHb29kc051bWJlclwiIHZhbHVlPTEgQGlucHV0PSdjaGFuZ2VHb29kc051bWJlcicgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1udW1iZXJcIiBAdGFwPVwicmVkdWNlKDEpXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtY29sb3InOnNldE5ld0dvb2RzTnVtYmVyPT1nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0ID8gJyNkZGRkZGQnOicjOTk5OTk5J31dXCI+Kzwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJrZWVwLW9yZGVyXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJrZWVwLW9yZGVyLWJ1dHRvblwiIHBsYWluPVwidHJ1ZVwiIEB0YXA9J29yZGVyU2V0KCknPuehruWumjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZS1zZWUtbW9yZS1kaXNjb3VudFwiIEB0YXA9J3NlZU1vcmUoMSknPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwhLS0g5LyY5oOg5piO57uGIC0tPlxyXG5cdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIHYtaWY9XCJzaG93X2Rpc2NvdW50XCIgOnN0eWxlPVwiW3snaGVpZ2h0JzpoZWlnaHQvNCsncHgnfV1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzX3Nob3dfZGlzY291bnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZGlzY291bnRfdGl0bGVcIj7kvJjmg6DmmI7nu4Y8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2Rpc2NvdW50X2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRfc2FsZV9pbmZvXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGljb3VudF9wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX3RpdGxlXCI+5ZWG5ZOB5oC76aKdPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlXCI+e3tvcmRlcl9pbmZvLnRvdGFsX3ByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaWNvdW50X3ByaWNlXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gb3JkZXJfaW5mby5zYWxlX2luZm9cIiA6a2V5PSdpbmRleCc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fdGl0bGVcIj57e2l0ZW0uY2F0ZWdvcnl9fSB7e2l0ZW0ucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlXCIgdi1pZj1cIml0ZW0udG9vbHNfaWQ9PSdnaXZpbmcnXCI+IO+/pXt7aXRlbS5zYWxlX3ByaWNlfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlXCIgdi1lbHNlPiAt77+le3tpdGVtLnNhbGVfcHJpY2V9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGxfZGlzY291bnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNhbGVfaW5mb190aXRsZVwiPiDkvJjmg6DlkIjorqEgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlXCI+IO+/pXt7b3JkZXJfaW5mby5zYWxlX3ByaWNlfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnQtaGludFwiPuS7peS4iuS8mOaDoOS4jeWMheWQq+enr+WIhuOAgeWWteixhuOAgeS9memineetieeUqOaIt+i1hOS6p+aKteaJo++8jOi1hOS6p+aKteaJo+ivt+WcqOe7k+eul+mhtemdouafpeecizwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJpX2tub3dcIiB0eXBlPVwiZGVmYXVsdFwiIHNpemU9XCJtaW5pXCIgQHRhcD0nSUtub3cnPiDmiJHnn6XpgZPkuoYgPC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGdvb2RzU2hvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nb29kc1Nob3cudnVlXCI7XHJcblx0aW1wb3J0IHRpY2tldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90aWNrZXQudnVlXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRnb29kc1Nob3csXHJcblx0XHRcdHRpY2tldFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVudVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1lbnVUb3A6IDAsXHJcblx0XHRcdFx0bWVudUhlaWdodDogMCxcclxuXHRcdFx0XHRtZW51TGVmdDogMCxcclxuXHRcdFx0XHRtZW51Qm90dG9tOiAwLFxyXG5cdFx0XHRcdGJhck5hbWU6ICdiYWNrJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHR0b3BCYWNrZ3JvdW5kQ29sb3I6ICcjMjIyMjIyJyxcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdGJhY2tJbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3JldHVybi5wbmcnLFxyXG5cdFx0XHRcdHRpdGxlOiAn6LSt54mp6L2mJyxcclxuXHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0cHJvZHVjdExpc3RzOiBbXSxcclxuXHRcdFx0XHRwcm9kdWN0TmFtZUxpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflhajpg6gnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn6ZmN5Lu3JyxcclxuXHRcdFx0XHRcdFx0bnVtYmVyOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WMu+e+jicsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfmiqTogqTlk4EnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0YnRubnVtOiAwLFxyXG5cdFx0XHRcdGNvbnRlbnRMaXN0OiB7fSxcclxuXHRcdFx0XHRhbGxjaGVja2VkOiBmYWxzZSwgLy/lhajpgIlcclxuXHRcdFx0XHRpc1Nob3dEaXNjb3VudDogZmFsc2UsIC8v5pi+56S65LyY5oOg5oiW5Y2h5Yi4XHJcblx0XHRcdFx0cmVxdWVzdFVybDogJycsXHJcblx0XHRcdFx0b2Zmc2V0OiAwLFxyXG5cdFx0XHRcdHNrdV9saXN0OiBbXSxcclxuXHRcdFx0XHRzcGVjaWFsTGlzdDoge30sIC8v5bm/5ZGKXHJcblx0XHRcdFx0Z2V0X2NvdW50OiAwLCAvL+WPr+mihuWPluWNoeWIuOaVsOmHj1xyXG5cdFx0XHRcdGNhcmRMaXN0OiBbXSwgLy/ljaHliLjliJfooahcclxuXHRcdFx0XHRhY3RfaW5mbzoge30sXHJcblx0XHRcdFx0dXNlc19jYXJkTGlzdDogW10sXHJcblx0XHRcdFx0dGhpc19zaG93X2dvb2RzX3NwZWM6IGZhbHNlLCAvL+aYvuekuuS/ruaUueWVhuWTgeinhOagvFxyXG5cdFx0XHRcdGdvb2RzQ29udGVudExpc3Q6IFtdLFxyXG5cdFx0XHRcdHNwZWM6IFtdLFxyXG5cdFx0XHRcdHBheV90eXBlOiAxLCAvL+aUr+S7mOaWueW8jyAgMOmihOe6pumHkSAxIOWFqOasviAyIOWFqOmAiVxyXG5cdFx0XHRcdGNsYXNzX3R5cGU6IDAsIC8v6aKG5Y+W5pa55byPIDDliLDpmaIgMemCruWvhFxyXG5cdFx0XHRcdHNldE5ld0dvb2RzTnVtYmVyOiAxLCAvL+S/ruaUueaWsOeahOWVhuWTgeaVsOmHj1xyXG5cdFx0XHRcdGVuY3J5cHRlZF9pZDogJycsXHJcblx0XHRcdFx0c2t1X2lkOiAwLFxyXG5cdFx0XHRcdGNhcnRfaWQ6IDE2MCxcclxuXHRcdFx0XHRvcmRlcl9pbmZvOiB7XHJcblx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0fSwgLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRzaG93X2Rpc2NvdW50OiBmYWxzZSwgLy/mmL7npLrkvJjmg6DnmoTlvLnnqpdcclxuXHRcdFx0XHR2ZXJpZmljYXRpb25fc3BlY0F0dHI6IFtdLCAvL+mqjOivgemAieinhOagvOeJiOacrFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5vZmZzZXQgKz0gMTtcclxuXHRcdFx0dGhhdC5nZXRMaWtlKClcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbikge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0dGhpcy5yZXF1ZXN0ID0gdGhpcy4kcmVxdWVzdFxyXG5cdFx0XHR0aGF0LnJlcXVlc3RVcmwgPSB0aGF0LnJlcXVlc3QuZ2xvYmFsRGF0YS5yZXF1ZXN0VXJsXHJcblx0XHRcdHRoYXQuZ2V0TGlrZSgpXHJcblx0XHRcdHRoYXQuZ2V0Q2FyZCgpXHJcblx0XHRcdHRoYXQuYWR2ZXJ0aXNpbmcoKVxyXG5cdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQuaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0O1xyXG5cdFx0XHQvLyDliKTlrprov5DooYzlubPlj7BcclxuXHRcdFx0bGV0IHBsYXRmb3JtID0gJydcclxuXHRcdFx0c3dpdGNoICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSkge1xyXG5cdFx0XHRcdGNhc2UgJ2FuZHJvaWQnOlxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnYW5kcm9pZCdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lvcyc6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdpb3MnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnYXBwbGV0J1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBsYXRmb3JtID09ICdhcHBsZXQnKSB7XHJcblx0XHRcdFx0Ly8g6I635Y+W5bGP5bmV6auY5bqmXHJcblx0XHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBtZW51ID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVRvcCA9IG1lbnUudG9wXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IG1lbnUuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gbWVudS5ib3R0b21cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoYXQubWVudVdpZHRoID0gOTBcclxuXHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSA1MFxyXG5cdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IDMyXHJcblx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IDI3OFxyXG5cdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IDgyXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOi/lOWbnlxyXG5cdFx0XHRnb0JhY2s6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VXNlckNhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZ2V0Y2FydCcsXHJcblx0XHRcdFx0XHR0eXBlOiB0aGF0LmJ0bm51bVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0bGV0IGRheSA9IDBcclxuXHRcdFx0XHRcdFx0bGV0IGhvdXNlID0gMFxyXG5cdFx0XHRcdFx0XHRsZXQgc2Vjb25kID0gMFxyXG5cdFx0XHRcdFx0XHRsZXQgbWludXRlID0gMFxyXG5cdFx0XHRcdFx0XHQvLyBsZXQgZm9ybWVyX3NrdV9saXN0ID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiY29udGVudExpc3RcIikuc2t1X2xpc3Q7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGZvcm1lcl9za3VfbGlzdCkgLy/kuLrkuobliKTlrprmlbDmja7mmK/lkKbmnInpgInkuK3nmoTnirbmgIFcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnNrdV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBkYXRhLnNrdV9saXN0W2ldLmdvb2RzX2xpc3QubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5pc19zaG93X3N0YXRlID0gZmFsc2UgLy/mmL7npLrorqLljZXmk43kvZxcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQgPSBmYWxzZSAvL+aYr+WQpuWFqOmAieW9k+WJjeWIhuexu1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQgPSBmYWxzZSAvL+aYr+WQpumAieaLqVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRhdGEuc2t1X2xpc3RbaV0uYWN0X2luZm8pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5kYXkgPSBwYXJzZUludCgoZGF0YS5za3VfbGlzdFtpXS5hY3RfaW5mby5yZXN0X3RpbWUpIC8gNjAgLyA2MCAvIDI0ICUgMzApXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uaG91c2UgPSBwYXJzZUludCgoZGF0YS5za3VfbGlzdFtpXS5hY3RfaW5mby5yZXN0X3RpbWUpIC8gNjAgLyA2MCAlIDI0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLnNlY29uZCA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAlIDYwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLm1pbnV0ZSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgJSA2MClcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YS5za3VfbGlzdFtpXSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5za3VfbGlzdCA9IGRhdGEuc2t1X2xpc3RcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LnByb2R1Y3ROYW1lTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdE5hbWVMaXN0W2ldLm51bWJlciA9IGRhdGEudHlwZV9jb3VudFtpXVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5za3VfbGlzdCA9IFtdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pi+56S65Y+v5pON5L2c6K6i5Y2V5pWw5o2uXHJcblx0XHRcdHNldGdvb2RzU3RhdGU6IGZ1bmN0aW9uKGssIGlzKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5pc19zaG93X3N0YXRlID0gIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uaXNfc2hvd19zdGF0ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlhajpgInlvZPliY3liIbnsbtcclxuXHRcdFx0Y2hlY2tlZF9jbGFzc19hbGw6IGZ1bmN0aW9uKGspIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgYWN0X2lkID0gJydcclxuXHRcdFx0XHRsZXQgY2hhbmdlX2NhcmRfaWQgPSBbXVxyXG5cdFx0XHRcdGxldCBjYXJ0ID0ge31cclxuXHRcdFx0XHRsZXQgYXJyID0gW11cclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkID0gIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCkgeyAvL+WFqOmAiVxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2ldLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2UgeyAvL+eCueWHu+a4heepuuWFqOmAiVxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2ldLmNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0XHR9IC8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0YXJyLnB1c2godGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGZsYWcgPSBhcnIuZXZlcnkoKGl0ZW0sIGluZGV4LCBhcnIpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtID09PSB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAoZmxhZykge1xyXG5cdFx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gIXRoYXQuYWxsY2hlY2tlZFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5nZXRfdXNlcl9jYXJ0KClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5oupXHJcblx0XHRcdGNoYW5nZUNoZWNrOiBmdW5jdGlvbihrLCBpcykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBhcnIgPSBbXVxyXG5cdFx0XHRcdGxldCBhbGxfYXJyID0gW11cclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNoZWNrZWQgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jaGVja2VkXHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGFyci5wdXNoKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpXS5jaGVja2VkKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZmxhZyA9IGFyci5ldmVyeSgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IHRydWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIOWmguaenOW9k+WIhuexu+S4i+mdoueahOiuouWNlemDvemAieaLqeS6hizliJnlvZPliY3liIbnsbvnmoTlhajpgInkuLp0cnVlXHJcblx0XHRcdFx0aWYgKGZsYWcpIHtcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZFxyXG5cdFx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQpIHsgLy/lvZPliY3orqLljZXkuLrpgInmi6nml7bliKTlrprmiYDmnInnmoTorqLljZXmmK/lkKblt7Lnu4/lhajpgIlcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0YWxsX2Fyci5wdXNoKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGV0IGZsYWdzID0gYWxsX2Fyci5ldmVyeSgoaXRlbSwgaW5kZXgsIGFsbF9hcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmbGFnc1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2hlY2tlZCl7XHJcblx0XHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0bGV0IG5ld19hcnIgPSBbXVxyXG5cdFx0XHRcdFx0Zm9yKGxldCBpPTA7aTx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRmb3IobGV0IGo9MDtqPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7aisrKVxyXG5cdFx0XHRcdFx0XHRuZXdfYXJyLnB1c2godGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQpXHJcblx0XHRcdFx0XHRcdC8vIGlmKCF0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCl7XHJcblx0XHRcdFx0XHRcdC8vIFx0XHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxldCBmbGFnID0gbmV3X2Fyci5ldmVyeSgoaXRlbSwgaW5kZXgsIG5ld19hcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSxpbmRleClcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IGZhbHNlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZmxhZylcclxuXHRcdFx0XHRcdGlmKGZsYWcpe1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0c2FsZV9pbmZvOiBbXVxyXG5cdFx0XHRcdFx0XHR9IC8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC5nZXRfdXNlcl9jYXJ0KClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7k+eul+eahOWFqOmAiVxyXG5cdFx0XHRjaGFuZ2VfYWxsX2NhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9ICF0aGF0LmFsbGNoZWNrZWRcclxuXHRcdFx0XHRpZiAodGhhdC5hbGxjaGVja2VkKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3QubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5nZXRfdXNlcl9jYXJ0KClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0XHR9IC8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W6LSt54mp6L2m5Lu35qC8XHJcblx0XHRcdGdldF91c2VyX2NhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBjaGFuZ2VfY2FydCA9IFtdXHJcblx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkKSB7IC8v5YWI5Yik5pat5piv5ZCm5pyJ5YWo6YCJ5LqG55qE6K6i5Y2VXHJcblx0XHRcdFx0XHRcdFx0bGV0IGFjdF9pZCA9ICcnXHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFjdF9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnQgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RfaWQ6IGFjdF9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDogdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5jYXJ0X2lkX2xpc3RcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlX2NhcnQucHVzaChjYXJ0KVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQpIHsgLy/liKTlrprpgInmi6nkuobnmoTorqLljZVcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGFjdF9pZCA9ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBjYXJ0X2lkID0gW11cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkLnB1c2godGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNhcnRfaWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBjYXJ0ID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogYWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDogY2FydF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZV9jYXJ0LnB1c2goY2FydClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjYWxjdWxhdGUnLFxyXG5cdFx0XHRcdFx0Y2FydDogY2hhbmdlX2NhcnRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGNoYW5nZV9jYXJ0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwic2hvcHBpbmdDYXJ0XCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdFx0XHRcdC8vIHRvdGFsX3ByaWNlOjAsLy/mgLvku7dcclxuXHRcdFx0XHRcdFx0XHQvLyBzYWxlX3ByaWNlOjAsLy/mgLvorqHkvJjmg6BcclxuXHRcdFx0XHRcdFx0XHQvLyBoZF9kaXNjb3VudDogMCwvL+a0u+WKqOS8mOaDoDIwMjAuMTEuMDRcclxuXHRcdFx0XHRcdFx0XHQvLyBvbmxpbmVfcGF5OiAwLC8v5Zyo57q/5pSv5LuYXHJcblx0XHRcdFx0XHRcdFx0Ly8gb2ZmbGluZV9wYXk6IDAsLy/nur/kuIvmlK/ku5hcclxuXHRcdFx0XHRcdFx0XHQvLyBvZmZfc2FsZTogMCwvL+WOu+aOieS8mOaDoOWQjuW6lOS7mDIwMjAuMTEuMDJcclxuXHRcdFx0XHRcdFx0XHQvLyBzYWxlX2luZm86IFtdLy/kvJjmg6Dkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSBkYXRhXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2FsZV9pbmZvOiBbXVxyXG5cdFx0XHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGNoYW5nZV9jYXJ0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDljrvnu5PnrpdcclxuXHRcdFx0Z29Ub1NldHRsZW1lbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBza3VfbGlzdCA9IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RcclxuXHRcdFx0XHRsZXQgY2FydF9pbmZvID0ge30gLy/ljZXmnaHotK3nianovabnmoTpgInkuK3nmoTmlbDmja5cclxuXHRcdFx0XHRsZXQgYWN0X2lkID0gJycgLy/mtLvliqhpZCBcclxuXHRcdFx0XHRsZXQgY2FydF9pZF9saXN0ID0gW10gLy/orqLljZVpZOWIl+ihqFxyXG5cdFx0XHRcdGlmICh0aGF0LmFsbGNoZWNrZWQpIHsgLy/liKTlrprotK3nianovabmmK/lkKblhajpgInkuobvvIzlhajpgInnm7TmjqXlrZjlgqjlr7nlupTnmoTotK3nianovabmtLvliqhpZOWSjOi0reeJqei9pmlkXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNrdV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChza3VfbGlzdFtpXS5hY3RfaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRhY3RfaWQgPSBza3VfbGlzdFtpXS5hY3RfaWRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjYXJ0X2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0YWN0X2lkOiBhY3RfaWQsXHJcblx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiBza3VfbGlzdFtpXS5jYXJ0X2lkX2xpc3RcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QucHVzaChjYXJ0X2luZm8pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHsgLy/lpoLmnpzmmK/msqHmnInlhajpgInvvIzlsLHlvqrnjq/liKTlrprotK3nianovabnmoTliIbnsbvliJfooajmmK/lkKbmnInlhajpgInnmoTvvIzmnInvvIzlhYjlr7zlhaXvvIzmsqHmnInlho3lvqrnjq/lhoXpg6jnmoTllYblk4HmmK/lkKbpgInkuK1cclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFsbF9jaGVja2VkKSB7IC8v5YiG57G75YiX6KGo5piv5ZCm5pyJ5YWo6YCJ55qE77yM5pyJ77yM5YWI5a+85YWl77yM5rKh5pyJ5YaN5b6q546v5YaF6YOo55qE5ZWG5ZOB5piv5ZCm6YCJ5LitXHJcblx0XHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFjdF9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogYWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiBza3VfbGlzdFtpXS5jYXJ0X2lkX2xpc3RcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0LnB1c2goY2FydF9pbmZvKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgeyAvL+W+queOr+WGhemDqOeahOWVhuWTgeaYr+WQpumAieS4rVxyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJ0X2xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFjdF9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQgPSBza3VfbGlzdFtpXS5hY3RfaWRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChza3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9saXN0LnB1c2goc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jYXJ0X2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAoY2FydF9saXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0X2lkOiBhY3RfaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDogY2FydF9saXN0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QucHVzaChjYXJ0X2luZm8pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhjYXJ0X2lkX2xpc3QpXHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiY2FydF9pZF9saXN0XCIsIGNhcnRfaWRfbGlzdCk7IC8v5bCG5pWw5o2u5a2Y5YKo77yM5pa55L6/5Zyo56Gu6K6k6K6i5Y2V5pe25L2/55SoXHJcblx0XHRcdFx0Ly8g5riF6Zmk5pys5Zyw5a2Y55qE6LSt54mp6L2m5pWw5o2uXHJcblx0XHRcdFx0Ly8gdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdjb250ZW50TGlzdCcpO1xyXG5cdFx0XHRcdGlmIChjYXJ0X2lkX2xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0Ly8g56Gu6K6k6K6i5Y2VXHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9jb25maXJtX29yZGVyL2NvbmZpcm1fb3JkZXJgLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOBJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS/ruaUueWVhuWTgeinhOagvFxyXG5cdFx0XHRzaG93U2V0U3BlYzogZnVuY3Rpb24oc2t1X2lkLCBlbmNyeXB0ZWRfaWQsIG51bWJlciwgY2FydF9pZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuZW5jcnlwdGVkX2lkID0gZW5jcnlwdGVkX2lkXHJcblx0XHRcdFx0dGhhdC5za3VfaWQgPSBza3VfaWRcclxuXHRcdFx0XHR0aGF0LmNhcnRfaWQgPSBjYXJ0X2lkXHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZ29vZHNzcHVkZXRhaWxzJyxcclxuXHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogZW5jcnlwdGVkX2lkLFxyXG5cdFx0XHRcdFx0c2t1X2lkOiBza3VfaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIiwgZGF0YSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZ29vZHNDb250ZW50TGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5zcGVjID0gdGhhdC5hc3NlbWJsZVNwZWMoZGF0YS5za3UudXNlcl9zcGVjLCAxKVxyXG5cdFx0XHRcdFx0XHR0aGF0LnBheV90eXBlID0gZGF0YS5za3UucGF5X3R5cGVcclxuXHRcdFx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlYyA9ICF0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjXHJcblx0XHRcdFx0XHRcdHRoYXQudXNlc19jYXJkTGlzdCA9IHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UuY2FyZF9saXN0XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KHJlcy5kYXRhLm1lc3NhZ2UpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye756Gu5a6a5L+u5pS56KeE5qC8XHJcblx0XHRcdG9yZGVyU2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgc3BlY0F0dHIgPSB0aGF0LnZlcmlmaWNhdGlvbl9zcGVjQXR0clxyXG5cdFx0XHRcdGxldCBkYXRhSW5mb3MgPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogXCJzZWxlY3Rza3VcIixcclxuXHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogdGhhdC5lbmNyeXB0ZWRfaWQsXHJcblx0XHRcdFx0XHRzcGVjX2F0dHI6IHNwZWNBdHRyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm9zKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NoYW5nY2FydCcsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogMSxcclxuXHRcdFx0XHRcdFx0XHRjYXJ0X2lkOiB0aGF0LmNhcnRfaWQsXHJcblx0XHRcdFx0XHRcdFx0bnVtOiB0aGF0LnNldE5ld0dvb2RzTnVtYmVyLFxyXG5cdFx0XHRcdFx0XHRcdHNrdV9pZDogdGhhdC5za3VfaWQsXHJcblx0XHRcdFx0XHRcdFx0aXNfcG9zdDogdGhhdC5jbGFzc190eXBlLFxyXG5cdFx0XHRcdFx0XHRcdGJ1eV90eXBlOiB0aGF0LnBheV90eXBlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjID0gIXRoYXQudGhpc19zaG93X2dvb2RzX3NwZWNcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2FsZV9pbmZvOiBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0fSAvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOifor7fpgInmi6nmraPnoa7op4TmoLwnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75Yqg5YeP5pWw5a2XXHJcblx0XHRcdHJlZHVjZTogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyICs9IGluZGV4XHJcblx0XHRcdFx0aWYgKHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQgPSA5OTk5OTlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPj0gdGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhhdC5zZXROZXdHb29kc051bWJlciA8IHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdCkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdClcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi+k+WFpeaDs+imgeeahOaVsOmHj1xyXG5cdFx0XHRjaGFuZ2VHb29kc051bWJlcjogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBldmVudC5kZXRhaWwudmFsdWVcclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gdmFsdWVcclxuXHRcdFx0XHRpZiAodGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0ID09IDApIHtcclxuXHRcdFx0XHRcdHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCA9IDk5OTk5OVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhhdC5zZXROZXdHb29kc051bWJlciA+PSB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaSkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pKVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhhdC5zZXROZXdHb29kc051bWJlciA8IHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdCkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdClcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaUr+S7mOaWueW8j1xyXG5cdFx0XHRjaGFuZ2VQYXk6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5wYXlfdHlwZSA9IGluZGV4XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZUNsYXNzOiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuY2xhc3NfdHlwZSA9IGluZGV4XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZVNwZWM6IGZ1bmN0aW9uKGluZGV4LCBzaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbmRleCxzaW5kZXgpXHJcblx0XHRcdFx0aWYgKHRoYXQuc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdID09IDApIHtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0U3BlYyhpbmRleCwgc2luZGV4KVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhhdC5zcGVjW2luZGV4XS5hdHRyW3NpbmRleF0gPT0gMSkge1xyXG5cdFx0XHRcdFx0dGhhdC5jYW5jZWxTcGVjKGluZGV4LCBzaW5kZXgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS56KeE5qC855qE5LyY5oOg5L+h5oGvXHJcblx0XHRcdHNlZU1vcmU6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKGluZGV4ID09IDApIHtcclxuXHRcdFx0XHRcdGlmICh0aGF0LnVzZXNfY2FyZExpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdpZHNfZ2V0X2NhcmQnLFxyXG5cdFx0XHRcdFx0XHRcdGNhcmRfaWQ6IHRoYXQudXNlc19jYXJkTGlzdCxcclxuXHRcdFx0XHRcdFx0XHRsaW1pdDogNixcclxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ6IDBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImNhcmRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuaXNTaG93RGlzY291bnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlscyA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5jYXJkc1tpXS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XHJcblx0XHRcdFx0XHR0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjID0gIXRoYXQudGhpc19zaG93X2dvb2RzX3NwZWNcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIHVzZXJTcGVjPeeUqOaIt+WPr+mAieinhOagvO+8jGlzRmlyc3Q95piv5ZCm6aaW5qyh6L+b5YWl77yMbm93Q2hlY2s95b2T5YmN6YCJ6aG577yMaXNDYW5jZWw95piv5ZCm54K55Ye75Y+W5raI6L+b5YWlXHJcblx0XHRcdGFzc2VtYmxlU3BlYzogZnVuY3Rpb24odXNlclNwZWMsIGlzRmlyc3QsIG5vd0NoZWNrLCBpc0NhbmNlbCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8vIOaWsOinhOagvOaVsOe7hO+8jOS4juWOn+inhOagvHNwZWNfdmFsdWXnm7jlr7nlupTvvIznlKjkuo7moIforrDlkITnp43nirbmgIFcclxuXHRcdFx0XHRsZXQgc3BlY1ZhbHVlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIikuc3BlY192YWx1ZTtcclxuXHRcdFx0XHRsZXQgc3BlYyA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpLnNwZWNfdmFsdWU7XHJcblx0XHRcdFx0bGV0IGRlZmF1bHRVc2VyU3BlYyA9IChpc0NhbmNlbCA9PSAxKSA/IFwiXCIgOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKS5za3Uuc3BlY19hdHRyO1xyXG5cdFx0XHRcdC8vIOmBjeWOhuinhOagvOexu+Wei1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gc3BlY1ZhbHVlKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIHNwZWNWYWx1ZVtpXS5hdHRyKSB7XHJcblx0XHRcdFx0XHRcdC8vIOesrOS4gOasoei/m+WFpeWFqOmDqOWPr+mAie+8jDA95Y+v6YCJ77yMMT3pgInkuK1cclxuXHRcdFx0XHRcdFx0aWYgKGlzRmlyc3QgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHNwZWNbaV0uYXR0cltrXSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0Ly8g6YGN5Y6G6buY6K6k6YCJ5oup6KeE5qC8XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiBpbiBkZWZhdWx0VXNlclNwZWMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChrID09IGRlZmF1bHRVc2VyU3BlY1tqXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjW2ldLmF0dHJba10gPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDnlKjmiLflj6/pgInop4TmoLzkuI7mlbTkuKrop4TmoLzov5vooYzljLnphY3vvIzljLnphY3miJDlip/nirbmgIHmlLnkuLrlj6/pgInnirbmgIFcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqIGluIHVzZXJTcGVjKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoayA9PSB1c2VyU3BlY1tqXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjW2ldLmF0dHJba10gPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyDliKTmlq3lvZPliY3pgInmi6npobnkuK3mmK/lkKbmnInkuI3lrZjlnKjnlKjmiLflj6/pgInop4TmoLzvvIzlpoLmnInov5vooYzliKDpmaRcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBuIGluIG5vd0NoZWNrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodXNlclNwZWMuaW5kZXhPZihwYXJzZUludChub3dDaGVja1tuXSkpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG5vd0NoZWNrLnNwbGljZShuLCAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyDmmL7npLrlvZPliY3pgInkuK3op4TmoLxcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBtIGluIG5vd0NoZWNrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoayA9PSBub3dDaGVja1ttXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjW2ldLmF0dHJba10gPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gc3BlYztcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5oup6KeE5qC8XHJcblx0XHRcdGdldFNwZWM6IGZ1bmN0aW9uKGluZGV4LCBzaW5kZXgpIHtcclxuXHRcdFx0XHRjb25zdCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoYXQuc3BlY1tpbmRleF0uYXR0cikge1xyXG5cdFx0XHRcdFx0dGhhdC5zcGVjW2luZGV4XS5hdHRyW2ldID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5zcGVjW2luZGV4XS5hdHRyW3NpbmRleF0gPSAxO1xyXG5cdFx0XHRcdC8vIOafpeaJvuW9k+WJjemAieaLqeaVsOaNrlxyXG5cdFx0XHRcdGxldCBub3dDaGVjayA9IFtdO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhhdC5zcGVjKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIHRoYXQuc3BlY1tpXS5hdHRyKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LnNwZWNbaV0uYXR0cltrXSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0bm93Q2hlY2sucHVzaChrKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyDliKTmlq3lvZPliY3ngrnlh7vop4TmoLzmmK/lkKblnKjnlKjmiLflhYHorrjpgInmi6nojIPlm7TvvIzlnKjlsLHnm7TmjqXmj5DkuqTvvIzkuI3lnKjlsLHmj5DkuqTlvZPliY3op4TmoLxcclxuXHRcdFx0XHRsZXQgdXNlclNwZWMgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKS5za3UudXNlcl9zcGVjO1xyXG5cdFx0XHRcdGxldCBzcGVjQXR0ciA9IFwiXCI7XHJcblx0XHRcdFx0aWYgKHVzZXJTcGVjKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIHVzZXJTcGVjKSB7XHJcblx0XHRcdFx0XHRcdGlmICh1c2VyU3BlYy5pbmRleE9mKHBhcnNlSW50KHNpbmRleCkpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0c3BlY0F0dHIgPSBbc2luZGV4XTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzcGVjQXR0ciA9IG5vd0NoZWNrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNwZWNBdHRyID0gbm93Q2hlY2s7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiBcInNlbGVjdHNrdVwiLFxyXG5cdFx0XHRcdFx0ZW5jcnlwdGVkX2lkOiB0aGF0LmVuY3J5cHRlZF9pZCxcclxuXHRcdFx0XHRcdHNwZWNfYXR0cjogc3BlY0F0dHJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC52ZXJpZmljYXRpb25fc3BlY0F0dHIgPSBzcGVjQXR0ciAvL+eUqOS6jumqjOivgeaYr+WQpuaYr+WQiOeQhueahOinhOagvOmAieWPllxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdC8vIOmHjeaWsOWCqOWtmOaWsOeUqOaIt+WPr+S7pemAiemhuVxyXG5cdFx0XHRcdFx0bGV0IGdvb2RzRGV0YWlsID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIik7XHJcblx0XHRcdFx0XHRnb29kc0RldGFpbC5za3UudXNlcl9zcGVjID0gcmVzLmRhdGEuZGF0YS51c2VyX3NwZWM7XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiLCBnb29kc0RldGFpbCk7XHJcblx0XHRcdFx0XHR0aGF0LnNwZWMgPSB0aGF0LmFzc2VtYmxlU3BlYyhyZXMuZGF0YS5kYXRhLnVzZXJfc3BlYywgcmVzLmRhdGEuZGF0YSA9PSBcIlwiID8gMSA6IDAsIG5vd0NoZWNrKVxyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdSA9IGRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5za3VfaWQgPSBkYXRhLmlkXHJcblx0XHRcdFx0XHRcdHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3Uuc2FsZV9wcmljZSA9IGRhdGEuc2FsZV9wcmljZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWPlua2iOmAiemhuVxyXG5cdFx0XHRjYW5jZWxTcGVjOiBmdW5jdGlvbihpbmRleCwgc2luZGV4KSB7XHJcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5zcGVjW2luZGV4XS5hdHRyW3NpbmRleF0gPSAwO1xyXG5cdFx0XHRcdC8vIOafpeaJvuW9k+WJjemAieaLqeaVsOaNrlxyXG5cdFx0XHRcdGxldCBub3dDaGVjayA9IFtdO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhhdC5zcGVjKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIHRoYXQuc3BlY1tpXS5hdHRyKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LnNwZWNbaV0uYXR0cltrXSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0bm93Q2hlY2sucHVzaChrKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogXCJzZWxlY3Rza3VcIixcclxuXHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogdGhhdC5lbmNyeXB0ZWRfaWQsXHJcblx0XHRcdFx0XHRzcGVjX2F0dHI6IG5vd0NoZWNrXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdC8vIOmHjeaWsOWCqOWtmOaWsOeUqOaIt+WPr+S7pemAiemhuVxyXG5cdFx0XHRcdFx0bGV0IGdvb2RzRGV0YWlsID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIik7XHJcblx0XHRcdFx0XHRnb29kc0RldGFpbC5za3UudXNlcl9zcGVjID0gcmVzLmRhdGEuZGF0YS51c2VyX3NwZWM7XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiLCBnb29kc0RldGFpbCk7XHJcblx0XHRcdFx0XHR0aGF0LnNwZWMgPSB0aGF0LmFzc2VtYmxlU3BlYyhyZXMuZGF0YS5kYXRhLnVzZXJfc3BlYywgcmVzLmRhdGEuZGF0YSA9PSBcIlwiID8gMSA6IDAsIG5vd0NoZWNrLCAxKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWVhuWTgVxyXG5cdFx0XHRnb1RvR29vZHM6IGZ1bmN0aW9uKGlkLCBwaWQpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfZGV0YWlsP3NrdV9pZD0ke2lkfSYmZW5jcnlwdGVkX2lkPSR7cGlkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Li65L2g5o6o6I2QXHJcblx0XHRcdGdldExpa2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAndXNlcnJlY29tbWVuZGVkZ29vZHNzcHVsaXN0JyxcclxuXHRcdFx0XHRcdHR5cGU6ICczJyxcclxuXHRcdFx0XHRcdG9mZnNldDogdGhhdC5vZmZzZXRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5wcm9kdWN0TGlzdHMgPSB0aGF0LnByb2R1Y3RMaXN0cy5jb25jYXQoZGF0YSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsqHmnInmlbDmja4nKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+S8mOaDoOaIluiAheWNoeWIuFxyXG5cdFx0XHRjaGFuZ2VBY3Rpdml0eTogZnVuY3Rpb24oaW5kZXgsIGxpc3QsIGluZm8pIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZiAoaW5kZXggPT0gMCkgeyAvL+WNoeWIuFxyXG5cdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2lkc19nZXRfY2FyZCcsXHJcblx0XHRcdFx0XHRcdGNhcmRfaWQ6IGxpc3QsXHJcblx0XHRcdFx0XHRcdGxpbWl0OiA2LFxyXG5cdFx0XHRcdFx0XHRvZmZzZXQ6IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQuYWN0X2luZm8gPSBpbmZvXHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImNhcmRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0LmlzU2hvd0Rpc2NvdW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlscyA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuY2FyZHNbaV0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gW11cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAxKSB7IC8v5LyY5oOgXHJcblx0XHRcdFx0XHR0aGF0LmFjdF9pbmZvID0gbGlzdFxyXG5cdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAyKSB7XHJcblx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHRcdGlmICghdGhhdC5pc1Nob3dEaXNjb3VudCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gW11cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmihuWPluWNoeWIuFxyXG5cdFx0XHRnZXRDYXJkczogZnVuY3Rpb24oY2FyZElkLCBwcm9tcHQsIGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKHByb21wdCA9PSAnJykge1xyXG5cdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NhcmRnZXQnLFxyXG5cdFx0XHRcdFx0XHRjYXJkX2lkOiBjYXJkSWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiY2FyZFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdCgn6aKG5Y+W5oiQ5YqfJylcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0LmNhcmRzW2luZGV4XS5zYWxlY2FyZF91c2VyX2NvdW50ID0gdGhhdC5jYXJkTGlzdC5jYXJkc1tpbmRleF0uc2FsZWNhcmRfdXNlcl9jb3VudCArIDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdChwcm9tcHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkvb/nlKjljaHliLhcclxuXHRcdFx0dXNlQ2FyZDogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5L2/55So55qE5Y2h5Yi4aWQ6JywgaWQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dUaWNrZXQ6IGZ1bmN0aW9uKGNhcmRJZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5jYXJkTGlzdC5jYXJkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uaWQgPT0gY2FyZElkKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHMgPSAhdGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlsc1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlscykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctdG9wLnBuZydcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5blub/lkYpcclxuXHRcdFx0YWR2ZXJ0aXNpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZ2V0YWR2ZXJ0aXNpbmcnLFxyXG5cdFx0XHRcdFx0bG9jYXRpb246IDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJob21lXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnNwZWNpYWxMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0LnNwZWNpYWxMaXN0KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPluWPr+mihuWPluWNoeWIuFxyXG5cdFx0XHRnZXRDYXJkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogXCJtYXlfcmVjZWl2ZVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiY2FyZFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5nZXRfY291bnQgPSBkYXRhLm51bVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmihuWIuOS4reW/g1xyXG5cdFx0XHRnb1RvR2FpbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L215X2NhcmRfZ2FpbmAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5Lit5ZWG5ZOBXHJcblx0XHRcdGNoYW5nZVBvcmR1Y3Q6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5idG5udW0gPSBpbmRleFxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3QgPSB7fVxyXG5cdFx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdjb250ZW50TGlzdCcpO1xyXG5cdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHR9IC8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdH0sXHJcblx0XHRcdGdvVG9Hb29kc0NsYXNzZml5OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19jbGFzc2lmeWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pS26JeP44CB55u45Ly844CB5Yig6ZmkXHJcblx0XHRcdHNldFN0YXRlOiBmdW5jdGlvbihpbmRleCwgaWQsIG51bSwgY2F0ZWdvcnlfaWQsIGxpc3ROYW1lLCBlbmNyeXB0ZWRfaWQpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbmRleCxjYXJ0X2lkLHNrdV9pZCxudW0pXHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8gaW5kZXggMCDmlLbol48gMSDnm7jkvLwgMiDliKDpmaRcclxuXHRcdFx0XHRpZiAoaW5kZXggPT0gMCkgeyAvL+aUtuiXj1xyXG5cdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NvbGxlY3Rnb29kc3NwdScsXHJcblx0XHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogZW5jcnlwdGVkX2lkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KCflt7LmlLbol48nKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAyMCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QoJ+ivpeWVhuWTgeW3suaUtuiXjycpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAxKSB7IC8v55u45Ly8XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19saXN0P25hbWU9JHtsaXN0TmFtZX0maWQ9JHtjYXRlZ29yeV9pZH1gLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDIpIHsgLy/liKDpmaRcclxuXHRcdFx0XHRcdGxldCBjYXJ0X2lkID0gW11cclxuXHRcdFx0XHRcdGNhcnRfaWQucHVzaChpZClcclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjaGFuZ2NhcnQnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAyLFxyXG5cdFx0XHRcdFx0XHRjYXJ0X2lkOiBjYXJ0X2lkLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+ehruWumuimgeWIoOmZpOatpOiuouWNleWQlz8nLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwic2hvcHBpbmdDYXJ0XCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdChyZXMuZGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIDUwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5nZXRVc2VyQ2FydCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IC8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgODAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+WIhuexu+WIl+ihqFxyXG5cdFx0XHRnb29kc0NsYXNzZml5OiBmdW5jdGlvbihpZCwgbGlzdE5hbWUpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfbGlzdD9uYW1lPSR7bGlzdE5hbWV9JmlkPSR7aWR9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkv67mlLnllYblk4HmlbDph49cclxuXHRcdFx0c2V0R29vZHNOdW1iZXI6IGZ1bmN0aW9uKGlkLCBjYXJ0X251bSkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBjYXJ0X2lkID0gW11cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0LmNvbnRlbnRMaXN0KSAvL+aDs+azleaYr+WcqOS/ruaUueaVsOmHj+eahOaXtuWAmeWFiOaKiui0reeJqei9pueahOaVsOaNruWtmOWCqO+8jOS4uuS6huWIpOWumumCo+S6m+aVsOaNruaYr+mAieS4reS6hiznhLblkI7orqHnrpfku7fmoLxcclxuXHRcdFx0XHQvLyB1bmkuc2V0U3RvcmFnZVN5bmMoXCJjb250ZW50TGlzdFwiLCB0aGF0LmNvbnRlbnRMaXN0KTtcclxuXHRcdFx0XHRjYXJ0X2lkLnB1c2goaWQpXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjaGFuZ2NhcnQnLFxyXG5cdFx0XHRcdFx0dHlwZTogMCxcclxuXHRcdFx0XHRcdGNhcnRfaWQ6IGNhcnRfaWQsXHJcblx0XHRcdFx0XHRudW06IGNhcnRfbnVtLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coKVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jYXJ0X2lkID09IGNhcnRfaWQpIHsgLy/liKTlrprpgInmi6nkuobnmoTorqLljZVcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5nZXRfdXNlcl9jYXJ0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyBcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5nZXRVc2VyQ2FydCgpXHJcblx0XHRcdFx0XHRcdC8vIHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdC8vIHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRzYWxlX2luZm86W11cclxuXHRcdFx0XHRcdFx0Ly8gfS8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Yqg5YeP5pWw6YePXHJcblx0XHRcdHNldE51bWJlcjogZnVuY3Rpb24oaWQsIG51bWJlciwgaywgaXMpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZ29vZHNOdW1iZXIgPSAwXHJcblx0XHRcdFx0bGV0IGNhcnRfbnVtID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bVxyXG5cdFx0XHRcdGNhcnRfbnVtICs9IG51bWJlclxyXG5cdFx0XHRcdGdvb2RzTnVtYmVyID0gY2FydF9udW1cclxuXHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0ID09IDApIHtcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCA9IDk5OTk5OVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZ29vZHNOdW1iZXIgPj0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGdvb2RzTnVtYmVyIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bSA9IGdvb2RzTnVtYmVyXHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IGdvb2RzTnVtYmVyXHJcblx0XHRcdFx0dGhhdC5zZXRHb29kc051bWJlcihpZCwgZ29vZHNOdW1iZXIpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi+k+WFpeaVsOmHj1xyXG5cdFx0XHRzZXRQb3JkdWN0TnVtYmVyOiBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdFx0XHRsZXQgayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rXHJcblx0XHRcdFx0bGV0IGlzID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlzXHJcblx0XHRcdFx0bGV0IGlkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcblx0XHRcdFx0aWYgKHZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IDFcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSAxXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSBwYXJzZUludCh2YWx1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGdvb2RzTnVtYmVyID0gMFxyXG5cdFx0XHRcdGxldCBjYXJ0X251bSA9IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW1cclxuXHRcdFx0XHRnb29kc051bWJlciA9IGNhcnRfbnVtXHJcblx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQgPSA5OTk5OTlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGdvb2RzTnVtYmVyID49IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdClcclxuXHRcdFx0XHRcdGdvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fSBlbHNlIGlmIChnb29kc051bWJlciA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWluX2J1eV9saW1pdCkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWluX2J1eV9saW1pdClcclxuXHRcdFx0XHRcdGdvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBnb29kc051bWJlclxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSBnb29kc051bWJlclxyXG5cdFx0XHRcdHRoYXQuc2V0R29vZHNOdW1iZXIoaWQsIGdvb2RzTnVtYmVyKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrkvJjmg6DmmI7nu4ZcclxuXHRcdFx0dXNlcl9kaXNjb3VudDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5zaG93X2Rpc2NvdW50ID0gIXRoYXQuc2hvd19kaXNjb3VudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRJS25vdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5zaG93X2Rpc2NvdW50ID0gIXRoYXQuc2hvd19kaXNjb3VudFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnRvcC1iYXIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC5iYWNrLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzhycHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYmFjayB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0fVxyXG5cclxuXHQuYmFjayBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdH1cclxuXHJcblx0LmJhY2stdGl0bGUgLnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzdycHg7XHJcblx0fVxyXG5cclxuXHQuY2FydC1jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQuZW1wdHktY2FydCB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZW1wdHktY2FydC1pbWFnZSB7XHJcblx0XHRwYWRkaW5nOiA2OHJweCAxNzdycHggNDBycHggMTc0cnB4O1xyXG5cdH1cclxuXHJcblx0LmVtcHR5LWNhcnQtaW1hZ2UgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDQwMHJweDtcclxuXHRcdGhlaWdodDogMjU0cnB4O1xyXG5cdH1cclxuXHJcblx0LmdvLXN0cm9sbCB7XHJcblx0XHR3aWR0aDogMjIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4N3JweDtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjY2OTkgMCUsICNmYTM0NzUgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsLXBlcmZvcm1hbmNlIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsTGlzdCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsTGlzdCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5yZWNvbW1lbmQtdG8teW91IHtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0d2lkdGg6IDZycHg7XHJcblx0XHRoZWlnaHQ6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzU3NjtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZExpbmUge1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTGluZSB2aWV3IHtcclxuXHRcdGhlaWdodDogNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucmVsYXRlZC10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQ4cnB4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc3ViamVjdC1jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQucHJvZHVjdC10by1uYXYge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRoZWlnaHQ6IDk2cnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtbmFtZSB7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDk2cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmNoZWNrZWRQb3JkdWN0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5lbmQtY29udCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0LmRpcyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblxyXG5cdC5jYXJkLXRvcCB7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi10b3A6IDVycHg7XHJcblx0fVxyXG5cclxuXHQudGFiQmFyTGlzdCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5jYW4tcmVjZWl2ZSB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIxcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHR9XHJcblxyXG5cdC5jYW4tcmVjZWl2ZSAudGV4dCB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdH1cclxuXHJcblx0LnRleHRzIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3OXJweDtcclxuXHR9XHJcblxyXG5cdC5nby1yZWNlaXZlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuZ28tcmVjZWl2ZSAudHJpYW5nbGUtbGluZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiA0MHJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICM1YmUzZDUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC01NnJweDtcclxuXHR9XHJcblxyXG5cdC5jaGFyYWN0ZXIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzViZTNkNTtcclxuXHRcdHdpZHRoOiAxNzBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY2FydC1zaG9wcGluZy1zaG93IHtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY2hhbmdlLWNoZWNrLXNlZS1tb3JlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGFuZ2UtY2hlY2sgdGV4dCB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1nb29kcyB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuYWRkLW9uLWl0ZW0ge1xyXG5cdFx0d2lkdGg6IDg4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnNwZWNpYWwtb2ZmZXIge1xyXG5cdFx0cGFkZGluZzogMHJweCAxMHJweCAxMHJweCA1MHJweDtcclxuXHR9XHJcblxyXG5cdC5mdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTJycHg7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZThmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lmaWMtYWN0aXZpdHkge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5hY3Rpdml0eS10aW1lIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYWN0aXZpdHktdGltZSB0ZXh0IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bWFyZ2luOiAwIDhycHg7XHJcblx0fVxyXG5cclxuXHQuaG91c2VzLFxyXG5cdC5taW51dGUsXHJcblx0LnNlY29uZCB7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tbGVmdDogNXJweDtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudC1hbGwge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQuc2hvd19nb29kc19zdGF0ZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnRoaXNfaXNfZ29vZHNfc3RhdGUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnNldF9zdGF0ZSB7XHJcblx0XHR3aWR0aDogODRycHg7XHJcblx0XHRoZWlnaHQ6IDEzMHJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjhycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2NXJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY29sbGVjdGlvbiB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRjlCQjAwIDAlLCAjRjlCQjAwIDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNpbWlsYXIge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI0ZGOTk2NiAwJSwgI0ZGOTk2NiAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC50aGlzX2lzX2dvb2RzX3N0YXRlIC5kZWxldGUge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zZXRfc3RhdGUgdGV4dCB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmNoZWNrYm94LWl0ZW0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZ29vZHMtaW5mbyB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tc2hvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjRjBGMEYwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLWltYWdlcyB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLWltYWdlcyAuaW52YWxpZC1nb29kcyB7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1pbnZhbGlkLWdvb2RzIHtcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNzVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXIge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZSAucHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdH1cclxuXHJcblx0Lm1lbWJlci1wcmljZSB7XHJcblx0XHR3aWR0aDogNjRycHg7XHJcblx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwMDAgMCUsICMyYzJjMmMgMTAwJSksIGxpbmVhci1ncmFkaWVudCgjMjgyODI4LCAjMjgyODI4KTtcclxuXHRcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsLCBub3JtYWw7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdGNvbG9yOiAjZmVmZWZlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0fVxyXG5cclxuXHQucHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXIgdGV4dCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQub2ZmbGluZV9wYXktb25saW5lX3BheS1jaGVja2VkTnVtYmVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5vZmZsaW5lX3BheS1vbmxpbmVfcGF5IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQub25saW5lX3BheSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZE51bWJlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0d2lkdGg6IDE4MHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRib3JkZXI6IHNvbGlkIDFycHggI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTnVtYmVyIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuaW5wdXQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LmlucHV0IC5jYXJ0X251bSB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1cnB4O1xyXG5cdH1cclxuXHJcblx0LnN1YnRyYWN0LFxyXG5cdC5hZGQge1xyXG5cdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cclxuXHQucG9yZHVjdC1pdGVtLW5hbWUge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucyB7XHJcblx0XHR3aWR0aDogMzYwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCAxNnJweDtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucy1uYW1lIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0fVxyXG5cclxuXHQudmVyc2lvbnMtbmFtZS1pdGVtIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucy1uYW1lLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudW5mb2xkIHtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQubmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlciB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQubWFudGxlZCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuXHRcdHotaW5kZXg6IDUzO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5kaXNjb3VudHMtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRwYWRkaW5nLXRvcDogMjVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZGlzY291bnRzLWhpbnQge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jYXJkX2xpc3Qge1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY2FyZC10aXRsZS1hbGwtY2FyZCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5tb3JlLWNhcmQge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1kaXNjb3VudCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDI1cnB4O1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1kaXNjb3VudCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnNldHRsZW1lbnQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR6LWluZGV4OiAxMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnNldHRsZW1lbnQtaW5mbyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0fVxyXG5cclxuXHQudG90YWwtZGlzY291bnQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC50b3RhbC1kaXNjb3VudCAudG90YWwge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDBycHg7XHJcblx0fVxyXG5cclxuXHQudG90YWwtZGlzY291bnQgLnRvdGFsIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LnVzZS1kaXNjb3VudCB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51c2UtZGlzY291bnQtZGV0YWlsZWQge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5nb1NldHRsZW1lbnQge1xyXG5cdFx0d2lkdGg6IDE4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM1cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zZXRfZ29vZHNfc3BlY19jb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDUyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5pc1Nob3ctY29udGVudCB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5zcGVjcy10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdHBhZGRpbmctdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5zcGVjcy1oaW50IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyMnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5zcGVjcyB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAzMHJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQucGF5LXR4dCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0fVxyXG5cclxuXHQuc3BlY3MtY29udCB7XHJcblx0XHRtYXJnaW4tbGVmdDogLTMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0LnNwZWNzLWNvbnQtcGF5IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQubGkge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUycnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTJycHg7XHJcblx0XHRwYWRkaW5nOiAwIDI1cnB4O1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNmMGYwZjA7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG5cdFx0bWFyZ2luOiAyMHJweCAwIDAgMjBycHg7XHJcblx0fVxyXG5cclxuXHQuc3BlY3MtY29udC1wYXkgLmxpIHtcclxuXHRcdG1hcmdpbjogMCAwIDAgMzBycHg7XHJcblx0fVxyXG5cclxuXHQubGktaG92ZXIge1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNmYTM0NzU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZlOGYwO1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuc3BlY3MtY29udCAubGktZ3JheSB7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblxyXG5cdC5hZGQtY2FyZC10b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubGVmdC1oZWFkX2ltZyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0LWdvb2RzLWluZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC5nb29kcy1kaXNjb3VudHMge1xyXG5cdFx0d2lkdGg6IDE2MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzg4MzRmYSAwJSwgI2JjNjZmZiAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5nb29kLXByaWNlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubWFya2V0X3ByaWNlIHtcclxuXHRcdGNvbG9yOiAjRkYwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5tZW1iZXJfcHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxMHJweCAxMHJweCAwO1xyXG5cdH1cclxuXHJcblx0Lm1lbWJlcl90aXRsZSB7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnN0b3JlLXNrdV9ubyB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5za3Vfbm8ge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LmlzU2hvdyAuc3BlY3MtY29udC1wYXkge1xyXG5cdFx0cGFkZGluZzogMzBycHggMCAwO1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQuaXNTaG93IC5zcGVjcy1jb250IHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0LmlzU2hvdyAuc3BlY3MtY29udC1wYXkgLnBheS10eHQge1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5jaGFuZ2VOdW1iZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDA7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZU51bWJlciAucGF5LXR4dCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA0MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0Lm51bWJlci1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5udW1iZXItaGludCB0ZXh0IHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZS1pbnB1dCB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5udW1iZXItaW5wdXQge1xyXG5cdFx0aGVpZ2h0OiA4NHJweDtcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym9yZGVyLXRvcDogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0Lm51bWJlci1pbnB1dCBpbnB1dCB7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRib3JkZXI6IDA7XHJcblx0fVxyXG5cclxuXHQucmVkdWNlLFxyXG5cdC5hZGQtbnVtYmVyIHtcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0XHRmb250LXNpemU6IDU2cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5rZWVwLW9yZGVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHR9XHJcblxyXG5cdC5idXR0b24ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmtlZXAtb3JkZXItYnV0dG9uIHtcclxuXHRcdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5kZWxldGUtc2VlLW1vcmUtZGlzY291bnQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAyMHJweDtcclxuXHRcdHJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5kZWxldGUtc2VlLW1vcmUtZGlzY291bnQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC50aGlzX3Nob3dfZGlzY291bnQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiA4MHJweDtcclxuXHR9XHJcblxyXG5cdC5zaG93X2Rpc2NvdW50X3RpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5zaG93X2Rpc2NvdW50X2NvbnRlbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuZGlzY291bnRfc2FsZV9pbmZvIHtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDE1MHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5kaWNvdW50X3ByaWNlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjBycHggMDtcclxuXHR9XHJcblxyXG5cdC5hbGxfZGlzY291bnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAwIDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmFsbF9kaXNjb3VudCAuc2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50LWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0Lmlfa25vdyB7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNTUxODc2MTUxNlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=