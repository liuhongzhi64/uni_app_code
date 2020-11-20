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
      specialList: {
        content: [] },
      //广告
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

      if (that.pay_type == 2) {
        uni.showToast({
          title: '请选择一种付款方式',
          icon: "none" });

      } else {
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
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlP2YwYzIiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT82NjIzIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/OWNiYSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlP2FkYjQiLCJ1bmktYXBwOi8vL3BhZ2VzL2NhcnQvY2FydC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT81YjE1Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NGYwZiJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSx5RjtBQUNBQSxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDd0Q7QUFDTDtBQUNxQzs7O0FBR3hGO0FBQytLO0FBQy9LLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7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TUE0QkE7QUFDQTtBQUNBO0FBQ0EsT0FoQ0E7QUFpQ0EsS0E5Q0E7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5EQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBdkZBO0FBd0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFHQTtBQUNBO0FBQ0EsT0FYQSxNQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOUlBO0FBK0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkEsTUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBOztBQUVBLEtBdktBO0FBd0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxxRUFGQTs7QUFJQTtBQUNBLFdBWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBLDJHQURBO0FBRUEsc0JBRkE7O0FBSUEsT0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMzRCQTtBQTQ0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWg1QkE7QUFpNUJBO0FBQ0E7QUFDQTtBQUNBLEtBcDVCQSxFQXBIQSxFOzs7Ozs7Ozs7Ozs7QUNqYkE7QUFBQTtBQUFBO0FBQUE7QUFBZytCLENBQWdCLDA3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBcC9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvY2FydC9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2NhcnQvY2FydC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGYwMGFkZjRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2FydC9jYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNhcnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wLWJhclwiIDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLXRvcCc6bWVudVRvcCsncHgnLCdsaW5lLWhlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLWJvdHRvbSc6MTArJ3B4JywnYmFja2dyb3VuZC1jb2xvcic6dG9wQmFja2dyb3VuZENvbG9yLCdjb2xvcic6Y29sb3J9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJhY2stdGl0bGVcIiA6c3R5bGU9XCJbeydoZWlnaHQnOm1lbnVIZWlnaHQrJ3B4J31dXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrXCIgQGNsaWNrPVwiZ29CYWNrXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImJhY2tJbWFnZVwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+IHt7dGl0bGV9fSA8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC10by1uYXZcIiA6c3R5bGU9XCJbeyd0b3AnOm1lbnVCb3R0b20rMTArJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1uYW1lXCIgdi1mb3I9XCIoaSxrKSBpbiBwcm9kdWN0TmFtZUxpc3RcIiA6a2V5PSdrJyA6Y2xhc3M9XCJ7Y2hlY2tlZFBvcmR1Y3QgOmJ0bm51bSA9PSBrfVwiIEB0YXA9XCJjaGFuZ2VQb3JkdWN0KGspXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tbmFtZS1saW5lXCI+XHJcblx0XHRcdFx0XHR7eyBpLm5hbWUgfX0gPHRleHQ+KHt7aS5udW1iZXJ9fSk8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7Y2hlY2tlZExpbmUgOmJ0bm51bSA9PSBrfVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldz48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNhcnQtY29udGVudFwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzptZW51Qm90dG9tKzU4KydweCd9XVwiPlxyXG5cdFx0XHQ8IS0tIOi0reeJqei9puS4uuepuiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJlbXB0eS1jYXJ0XCIgdi1pZj1cInNrdV9saXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wdHktY2FydC1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY2FydEJnLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVtcHR5LWNhcnQtdGV4dFwiPiDotK3nianovabov5jmmK/nqbrnmoTlk59+IDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvLXN0cm9sbFwiIEB0YXA9J2dvVG9Hb29kc0NsYXNzZml5Jz4g5Y676YCb6YCbIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOi0reeJqei9puS4jeS4uuepuiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LWhhdmUtcHJvZHVjdFwiIHYtZWxzZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVuZC1jb250XCIgOmNsYXNzPVwie2RpczpidG5udW0gPT0gaW5kZXh9XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcHJvZHVjdE5hbWVMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmQtdG9wXCIgQHRhcD0nZ29Ub0dhaW4nPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhbi1yZWNlaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+5oKo5pyJPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dFwiPnt7Z2V0X2NvdW50fX3lvKDkuJPlsZ7kvJjmg6DliLg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0c1wiPuWPr+mihuWPln48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnby1yZWNlaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0cmlhbmdsZS1saW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXJhY3RlclwiPuWOu+mihuWPliZuYnNwOz48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvcGluZy1jYXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FydC1zaG9wcGluZy1zaG93XCIgdi1mb3I9XCIoaXRlbXMsaykgaW4gY29udGVudExpc3Quc2t1X2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWFqOmAiSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVjay1zZWUtbW9yZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGNoZWNrYm94IGNvbG9yPScjMDA3QUZGJyA6Y2hlY2tlZD1cIml0ZW1zLmFsbF9jaGVja2VkXCIgQHRhcD0nY2hlY2tlZF9jbGFzc19hbGwoayknIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IEB0YXA9J2dvb2RzQ2xhc3NmaXkoaXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUpJz4ge3tpdGVtcy5jYXRlZ29yeV90aXRsZX19ID4gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtb24taXRlbVwiIHYtaWY9XCJpdGVtcy5jYXJkcy5sZW5ndGg+MFwiIEB0YXA9XCJjaGFuZ2VBY3Rpdml0eSgwLGl0ZW1zLmNhcmRzLGl0ZW1zLmFjdF9pbmZvKVwiPiDpoobliLhcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLW9uLWl0ZW1cIiB2LWVsc2UtaWY9XCJpdGVtcy5hY3RfaW5mb1wiIEB0YXA9XCJjaGFuZ2VBY3Rpdml0eSgxLGl0ZW1zLmFjdF9pbmZvKVwiPiDnnIvkvJjmg6AgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOS8mOaDoOa0u+WKqCAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtb2ZmZXJcIiB2LWlmPVwiaXRlbXMuYWN0X2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHktaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHNcIiB2LWlmPVwiaXRlbXMuYWN0X2luZm8uaXNfY291bnRkb3duPT0xXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvblwiPiDpmZDml7YgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7ot53mtLvliqjnu5PmnZ/ov5jliakgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGl2aXR5LXRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRheSBob3VzZXNcIj4ge3sgaXRlbXMuZGF5IH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvdXNlc1wiPiB7eyBpdGVtcy5ob3VzZSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWNvbmRcIj4ge3sgaXRlbXMuc2Vjb25kIH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1pbnV0ZVwiPiB7eyBpdGVtcy5taW51dGUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c1wiIHYtZm9yPVwiKGNvbnRlbnQsdHlwZSkgaW4gaXRlbXMuYWN0X2luZm8uYWN0X3J1bGVcIiA6a2V5PSd0eXBlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IHt7Y29udGVudC5jYXRlZ29yeX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj4ge3tjb250ZW50LnJ1bGVfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDllYblk4HlsZXnpLogLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tY29udGVudC1hbGxcIiB2LWZvcj1cIihpLGlzKSBpbiBpdGVtcy5nb29kc19saXN0XCIgOmtleT0naXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tY29udGVudFwiIEBsb25ncHJlc3M9J3NldGdvb2RzU3RhdGUoayxpcyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1pdGVtXCIgY29sb3I9JyMwMDdBRkYnIDpjaGVja2VkPVwiaS5jaGVja2VkXCIgQHRhcD0nY2hhbmdlQ2hlY2soayxpcyknIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tc2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0taW1hZ2VzXCIgQHRhcD0nZ29Ub0dvb2RzKGkuU2t1X2lkLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRfaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hbWUtcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tbmFtZVwiPiB7e2kuZ29vZHNfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9uc1wiIEB0YXA9J3Nob3dTZXRTcGVjKGkuU2t1X2lkLGkuZW5jcnlwdGVkX2lkLGkuY2FydF9udW0saS5jYXJ0X2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zLW5hbWUtaXRlbVwiIHYtZm9yPVwiKGlzLHopIGluIGkuc3BlY19uYW1lXCIgOmtleT0neic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7en19Ont7aXN9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1bmZvbGRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3VuZm9sZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx077+lPHRleHQgY2xhc3M9XCJwcmljZVwiPnt7aS5zYWxlX3ByaWNlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVtYmVyLXByaWNlXCIgdi1pZj1cImkubWVtYmVyXCI+5Lya5ZGY5Lu3PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KiB7eyBpLm1pbl9idXlfbGltaXQgfX0g5Lu26LW36LStXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtc2hvdz1cImkubWF4X2J1eV9saW1pdD4wJiZpLm1heF9idXlfbGltaXQhPTk5OTk5OVwiPiAsIOmZkOi0rXt7aS5tYXhfYnV5X2xpbWl0fX3ku7YgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwiaS5jdXRfcHJpY2U+MFwiPiDmr5TliqDotK3ml7bpmY3ku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0IHYtZWxzZS1pZj1cImkuY3V0X3ByaWNlPDBcIj4g5q+U5Yqg6LSt5pe25rao5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib2ZmbGluZV9wYXktb25saW5lX3BheS1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvbmxpbmVfcGF5XCI+5Zyo57q/5pSv5LuY77+le3sgaS5vbmxpbmVfcGF5KmkuY2FydF9udW0gfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib2ZmbGluZV9wYXlcIiB2LXNob3c9XCJpLm9mZmxpbmVfcGF5KmkuY2FydF9udW0+MFwiPuWIsOmZouWGjeS7mO+/pXt7IGkub2ZmbGluZV9wYXkqaS5jYXJ0X251bSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnRyYWN0XCIgQHRhcD1cInNldE51bWJlcihpLmNhcnRfaWQsLTEsayxpcylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImNhcnRfbnVtXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgOmRhdGEtaz0naycgOmRhdGEtaXM9J2lzJyA6ZGF0YS10YWtlX3N0b3JlPSdpLnRha2Vfc3RvcmUnIDpkYXRhLXN0b3JlPSdpLnN0b3JlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6ZGF0YS1pZD0naS5jYXJ0X2lkJyB2LW1vZGVsPVwiaS5jYXJ0X251bVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IEBpbnB1dD0nc2V0UG9yZHVjdE51bWJlcicgbWF4bGVuZ3RoPVwiMlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRcIiBAdGFwPVwic2V0TnVtYmVyKGkuY2FydF9pZCwxLGssaXMsaS5zdG9yZSxpLnRha2Vfc3RvcmUpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYWRkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZ29vZHNfc3RhdGVcIiB2LXNob3c9XCJpLmlzX3Nob3dfc3RhdGVcIiBAdGFwPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzX2lzX2dvb2RzX3N0YXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0aW9uIHNldF9zdGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHYtaWY9XCJpdGVtcy5jYXRlZ29yeV9zdGF0dXM9PTFcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMCxpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+56e75YWlPC90ZXh0PiA8dGV4dD7mlLbol488L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2ltaWxhciBzZXRfc3RhdGVcIiBAdGFwPSdzZXRTdGF0ZSgxLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHTnnIvnm7jkvLwgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlIHNldF9zdGF0ZVwiIEB0YXA9J3NldFN0YXRlKDIsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWIoOmZpCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDlvLnnqpfkvJjmg6DmiJbogIXljaHliLggLS0+XHJcblx0XHRcdFx0XHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwibWFudGxlZFwiIHYtaWY9XCJpc1Nob3dEaXNjb3VudFwiIHNjcm9sbC15PVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2hlaWdodCc6Y2FyZExpc3QuY2FyZHM/aGVpZ2h0LzIrJ3B4JzpoZWlnaHQvNCsncHgnfV1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLXRpdGxlXCI+IOS/g+mUgOS8mOaDoCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1oaW50XCI+Kua4qemmqOaPkOekujrmu6Hlh4/jgIHmipjmiaPjgIHljaHliLjlnYflj6/lj6DliqDkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtb2ZmZXJcIiB2LWlmPVwiYWN0X2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1pZj1cImFjdF9pbmZvLmlzX2NvdW50ZG93bj09MVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IOmZkOaXtiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7ot53mtLvliqjnu5PmnZ/ov5jliakgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHktdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXkgaG91c2VzXCI+IHt7IGl0ZW1zLmRheSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvdXNlc1wiPiB7eyBpdGVtcy5ob3VzZSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlY29uZFwiPiB7eyBpdGVtcy5zZWNvbmQgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaW51dGVcIj4ge3sgaXRlbXMubWludXRlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1mb3I9XCIoY29udGVudCx0eXBlKSBpbiBhY3RfaW5mby5hY3RfcnVsZVwiIDprZXk9J3R5cGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IHt7Y29udGVudC5jYXRlZ29yeX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPiB7e2NvbnRlbnQucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX2xpc3RcIiB2LWlmPVwiY2FyZExpc3QuY2FyZHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkLXRpdGxlLWFsbC1jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+IOWPr+eUqOS8mOaDoOWIuFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vcmUtY2FyZFwiIEB0YXA9J2dvVG9HYWluJz4g5pu05aSa5LyY5oOg5Yi4ID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aWNrZXQgOmNhcmRzTGlzdD0nY2FyZExpc3QuY2FyZHMnIDp0aW1lX25vdz0nY2FyZExpc3QudGltZV9ub3cnIEBzaG93VGlja2V0PSdzaG93VGlja2V0JyBAZ2V0Q2FyZHM9J2dldENhcmRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgQHVzZUNhcmQ9J3VzZUNhcmQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RpY2tldD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWRpc2NvdW50XCIgQHRhcD0nY2hhbmdlQWN0aXZpdHkoMiknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g6L+H5pyf5aSx5pWI55qE5ZWG5ZOBIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG9waW5nLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LXNob3BwaW5nLXNob3dcIiB2LWZvcj1cIihpdGVtcyxrKSBpbiBjb250ZW50TGlzdC5za3VfbGlzdFwiIDprZXk9J2snIHYtc2hvdz1cIml0ZW1zLmNhdGVnb3J5X3N0YXR1cz09MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrLXNlZS1tb3JlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD4g5aSx5pWI55qE5ZWG5ZOBIDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWdvb2RzXCIgQHRhcD0nZGVsZXRlSW52YWxpZChrLGlzKSc+IOa4heepuuWkseaViOWVhuWTgSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnQtYWxsXCIgdi1mb3I9XCIoaSxpcykgaW4gaXRlbXMuZ29vZHNfbGlzdFwiIDprZXk9J2lzJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnRcIiBAbG9uZ3ByZXNzPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tc2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0taW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRfaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW52YWxpZC1nb29kc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWludmFsaWQtZ29vZHNcIj7lt7LlpLHmlYg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1uYW1lXCI+IHt7aS5nb29kc19uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zLW5hbWUtaXRlbVwiIHYtZm9yPVwiKGlzLHopIGluIGkuc3BlY19uYW1lXCIgOmtleT0neic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7en19Ont7aXN9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1bmZvbGRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3VuZm9sZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdO+/pTx0ZXh0IGNsYXNzPVwicHJpY2VcIj57e2kuc2FsZV9wcmljZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbWJlci1wcmljZVwiIHYtaWY9XCJpLm1lbWJlclwiPuS8muWRmOS7tzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCoge3sgaS5taW5fYnV5X2xpbWl0IH19IOS7tui1t+i0rVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LXNob3c9XCJpLm1heF9idXlfbGltaXQ+MCYmaS5tYXhfYnV5X2xpbWl0IT05OTk5OTlcIj4gLCDpmZDotK17e2kubWF4X2J1eV9saW1pdH195Lu2IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cImkuY3V0X3ByaWNlPDBcIj4g5q+U5Yqg6LSt5pe26ZmN5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlLWlmPVwiaS5jdXRfcHJpY2U+MFwiPiDmr5TliqDotK3ml7bmtqjku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXktY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvZmZsaW5lX3BheS1vbmxpbmVfcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib25saW5lX3BheVwiPuWcqOe6v+aUr+S7mO+/pXt7IGkub25saW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9mZmxpbmVfcGF5XCIgdi1zaG93PVwiaS5vZmZsaW5lX3BheSppLmNhcnRfbnVtPjBcIj7liLDpmaLlho3ku5jvv6V7eyBpLm9mZmxpbmVfcGF5KmkuY2FydF9udW0gfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJ0cmFjdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3N1YnRyYWN0LnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiY2FydF9udW1cIiA6ZGF0YS1rPSdrJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA6ZGF0YS1pcz0naXMnIHYtbW9kZWw9XCJpLmNhcnRfbnVtXCIgQGlucHV0PSdzZXRQb3JkdWN0TnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBtYXhsZW5ndGg9XCIyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FkZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2dvb2RzX3N0YXRlXCIgdi1zaG93PVwiaS5pc19zaG93X3N0YXRlXCIgQHRhcD0nc2V0Z29vZHNTdGF0ZShrLGlzKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpc19pc19nb29kc19zdGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2ltaWxhciBzZXRfc3RhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdzZXRTdGF0ZSgxLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHTnnIvnm7jkvLwgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlIHNldF9zdGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IEB0YXA9J3NldFN0YXRlKDIsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWIoOmZpCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsLXBlcmZvcm1hbmNlXCIgdi1pZj1cInNwZWNpYWxMaXN0LmNvbnRlbnQubGVuZ3RoPjAmJnNrdV9saXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbExpc3RcIiB2LWlmPVwic3BlY2lhbExpc3QudHlwZT09MVwiPlxyXG5cdFx0XHRcdFx0PHN3aXBlciBpbmRpY2F0b3ItZG90cyBpbmRpY2F0b3ItYWN0aXZlLWNvbG9yPVwiI2ZmNjY5OVwiIGF1dG9wbGF5IGludGVydmFsPSc1MDAwJyBkdXJhdGlvbj0nMzAwMCcgY2lyY3VsYXI+XHJcblx0XHRcdFx0XHRcdDxzd2lwZXItaXRlbSBjbGFzcz1cInN3aXBlci1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gc3BlY2lhbExpc3QuY29udGVudFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpdGVtLmltZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHRcdFx0XHQ8L3N3aXBlcj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNvbW1lbmQtdG8teW91XCIgdi1pZj1cInByb2R1Y3RMaXN0c1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVsYXRlZC10aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+5Li65L2g5o6o6I2QPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YmplY3QtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGdvb2RzU2hvdyA6Ym9yZGVyUmFkaXVzPTI0IDpyZXF1ZXN0VXJsPSdyZXF1ZXN0VXJsJyA6d2lkdGg9MzUwIDpwb3JkdWN0TGlzdD0ncHJvZHVjdExpc3RzJz5cclxuXHRcdFx0XHRcdDwvZ29vZHNTaG93PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOWFqOmAieWSjOe7k+eulyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZXR0bGVtZW50XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXR0bGVtZW50LWluZm9cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWFsbC1nb29kc1wiIEB0YXA9J2NoYW5nZV9hbGxfY2FydCc+XHJcblx0XHRcdFx0XHRcdDxjaGVja2JveCBjb2xvcj0nIzAwN0FGRicgOmNoZWNrZWQ9XCJhbGxjaGVja2VkXCIgLz4gPHRleHQ+IOWFqOmAiSA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsLWRpc2NvdW50XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWxcIj7lkIjorqEgOiA8dGV4dD4g77+le3sgb3JkZXJfaW5mby5vZmZfc2FsZSB8fCAwIH19IDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZS1kaXNjb3VudFwiIHYtaWY9XCJvcmRlcl9pbmZvLnNhbGVfaW5mby5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdOS8mOaDoOWHjzog77+le3sgb3JkZXJfaW5mby5zYWxlX3ByaWNlIHx8MCB9fVxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlLWRpc2NvdW50LWRldGFpbGVkXCIgQHRhcD0ndXNlcl9kaXNjb3VudCc+5LyY5oOg5piO57uGPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvU2V0dGxlbWVudFwiIEB0YXA9J2dvVG9TZXR0bGVtZW50KCknPuWOu+e7k+eulzwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5L+u5pS55ZWG5ZOB6KeE5qC8IC0tPlxyXG5cdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwic2V0X2dvb2RzX3NwZWNfY29udGVudFwiIHNjcm9sbC15PVwidHJ1ZVwiIHYtaWY9XCJ0aGlzX3Nob3dfZ29vZHNfc3BlY1wiIDpzdHlsZT1cIlt7J2hlaWdodCc6aGVpZ2h0LzIrJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaXNTaG93LWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1jYXJkLXRvcFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0LWhlYWRfaW1nXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtnb29kc0NvbnRlbnRMaXN0LnNrdS5oZWFkX2ltZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWdvb2RzLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1kaXNjb3VudHNcIiB2LWlmPVwiZ29vZHNDb250ZW50TGlzdC5za3UuYWN0Lmxlbmd0aCE9MFwiIEB0YXA9J3NlZU1vcmUoMCknPiDlj4LkuI7kvJjmg6AgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2QtcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1hcmtldF9wcmljZVwiPu+/pXt7Z29vZHNDb250ZW50TGlzdC5za3Uuc2FsZV9wcmljZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVtYmVyX3ByaWNlXCIgdi1pZj1cImdvb2RzQ29udGVudExpc3Quc2t1Lm1lbWJlci5tZW1iZXJfdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVtYmVyX3RpdGxlXCI+e3tnb29kc0NvbnRlbnRMaXN0LnNrdS5tZW1iZXIubWVtYmVyX3RpdGxlfX08L3RleHQ+77+le3tnb29kc0NvbnRlbnRMaXN0LnNrdS5tZW1iZXIucHJpY2V9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN0b3JlLXNrdV9ub1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHYtc2hvdz1cImdvb2RzQ29udGVudExpc3Quc2t1LnN0b3JlPD0xMDBcIj7lupPlrZgge3tnb29kc0NvbnRlbnRMaXN0LnNrdS5zdG9yZX195Lu2PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2t1X25vXCI+57yW5Y+3OiB7e2dvb2RzQ29udGVudExpc3Quc2t1LnNrdV9ub319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udGVudFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGdvb2RzQ29udGVudExpc3Quc3BlY192YWx1ZVwiIDpkYXRhLWluZGV4PSdpbmRleCcgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0ubmFtZX19XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8dGV4dCBjbGFzcz1cInNwZWNzLWhpbnRcIiA+6K+36YCJ5oupe3tpdGVtLm5hbWV9fTwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjcy1jb250XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIHYtZm9yPVwiKGlzLHNpbmRleCkgaW4gaXRlbS5hdHRyXCIgOmtleT1cInNpbmRleFwiXHJcblx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cIltzcGVjW2luZGV4XS5hdHRyW3NpbmRleF09PTE/J2xpLWhvdmVyJzpzcGVjW2luZGV4XS5hdHRyW3NpbmRleF09PTA/J2xpLWdyYXknOicnXVwiXHJcblx0XHRcdFx0XHRcdFx0IEB0YXA9XCJjaGFuZ2VTcGVjKGluZGV4LHNpbmRleClcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXN9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjcy1jb250LXBheVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwYXktdHh0XCI+5pSv5LuY5pa55byPPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIEB0YXA9J2NoYW5nZVBheSgwKScgOmNsYXNzPVwiW3BheV90eXBlPT0wfHxwYXlfdHlwZT09Mj8nbGktaG92ZXInOicnXVwiPlxyXG5cdFx0XHRcdFx0XHTpooTnuqbph5FcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiBAdGFwPSdjaGFuZ2VQYXkoMSknIDpjbGFzcz1cIltwYXlfdHlwZT09MXx8cGF5X3R5cGU9PTI/J2xpLWhvdmVyJzonJ11cIj5cclxuXHRcdFx0XHRcdFx05YWo5qy+5LuYXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udC1wYXlcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGF5LXR4dFwiPumihuWPluaWueW8jzwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiBAdGFwPSdjaGFuZ2VDbGFzcygwKScgOmNsYXNzPVwiW2NsYXNzX3R5cGU9PTA/J2xpLWhvdmVyJzonJ11cIj5cclxuXHRcdFx0XHRcdFx05Yiw6Zmi6aKG5Y+WXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlQ2xhc3MoMSknIDpjbGFzcz1cIltjbGFzc190eXBlPT0xPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOmCruWvhFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZU51bWJlclwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYXktdHh0XCI+5pWw6YePPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJudW1iZXItaGludFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCA+IHt7IGdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQgfX0g5Lu26LW36LStPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBcclxuXHRcdFx0XHRcdFx0IHYtc2hvdz1cImdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQ+MCYmZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCE9OTk5OTk5XCI+XHJcblx0XHRcdFx0XHRcdFx06ZmQ6LStIHt7IGdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQgfX0g5Lu2XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWlucHV0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVkdWNlXCIgQHRhcD1cInJlZHVjZSgtMSlcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1jb2xvcic6c2V0TmV3R29vZHNOdW1iZXI9PWdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQgPyAnI2RkZGRkZCc6JyM5OTk5OTknfV1cIj4tPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm51bWJlci1pbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInNldE5ld0dvb2RzTnVtYmVyXCIgdmFsdWU9MSBAaW5wdXQ9J2NoYW5nZUdvb2RzTnVtYmVyJyAvPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLW51bWJlclwiIEB0YXA9XCJyZWR1Y2UoMSlcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1jb2xvcic6c2V0TmV3R29vZHNOdW1iZXI9PWdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQgPyAnI2RkZGRkZCc6JyM5OTk5OTknfV1cIj4rPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImtlZXAtb3JkZXJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cImtlZXAtb3JkZXItYnV0dG9uXCIgcGxhaW49XCJ0cnVlXCIgQHRhcD0nb3JkZXJTZXQoKSc+56Gu5a6aPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLXNlZS1tb3JlLWRpc2NvdW50XCIgQHRhcD0nc2VlTW9yZSgxKSc+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9kZWxldGUucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PCEtLSDkvJjmg6DmmI7nu4YgLS0+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgdi1pZj1cInNob3dfZGlzY291bnRcIiA6c3R5bGU9XCJbeydoZWlnaHQnOmhlaWdodC80KydweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRoaXNfc2hvd19kaXNjb3VudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19kaXNjb3VudF90aXRsZVwiPuS8mOaDoOaYjue7hjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZGlzY291bnRfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudF9zYWxlX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaWNvdW50X3ByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fdGl0bGVcIj7llYblk4HmgLvpop08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIj57e29yZGVyX2luZm8udG90YWxfcHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpY291bnRfcHJpY2VcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcmRlcl9pbmZvLnNhbGVfaW5mb1wiIDprZXk9J2luZGV4Jz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNhbGVfaW5mb190aXRsZVwiPnt7aXRlbS5jYXRlZ29yeX19IHt7aXRlbS5ydWxlX25hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIiB2LWlmPVwiaXRlbS50b29sc19pZD09J2dpdmluZydcIj4g77+le3tpdGVtLnNhbGVfcHJpY2V9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIiB2LWVsc2U+IC3vv6V7e2l0ZW0uc2FsZV9wcmljZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbF9kaXNjb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX3RpdGxlXCI+IOS8mOaDoOWQiOiuoSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIj4g77+le3tvcmRlcl9pbmZvLnNhbGVfcHJpY2V9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudC1oaW50XCI+5Lul5LiK5LyY5oOg5LiN5YyF5ZCr56ev5YiG44CB5Za16LGG44CB5L2Z6aKd562J55So5oi36LWE5Lqn5oq15omj77yM6LWE5Lqn5oq15omj6K+35Zyo57uT566X6aG16Z2i5p+l55yLPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImlfa25vd1wiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiBAdGFwPSdJS25vdyc+IOaIkeefpemBk+S6hiA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZ29vZHNTaG93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dvb2RzU2hvdy52dWVcIjtcclxuXHRpbXBvcnQgdGlja2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RpY2tldC52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGdvb2RzU2hvdyxcclxuXHRcdFx0dGlja2V0XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZW51V2lkdGg6IDAsXHJcblx0XHRcdFx0bWVudVRvcDogMCxcclxuXHRcdFx0XHRtZW51SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdG1lbnVMZWZ0OiAwLFxyXG5cdFx0XHRcdG1lbnVCb3R0b206IDAsXHJcblx0XHRcdFx0YmFyTmFtZTogJ2JhY2snLCAvL+WvvOiIquadoeWQjeensFxyXG5cdFx0XHRcdHRvcEJhY2tncm91bmRDb2xvcjogJyMyMjIyMjInLFxyXG5cdFx0XHRcdGNvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0YmFja0ltYWdlOiAnL3N0YXRpYy9pbWFnZXMvcmV0dXJuLnBuZycsXHJcblx0XHRcdFx0dGl0bGU6ICfotK3nianovaYnLFxyXG5cdFx0XHRcdGhlaWdodDogMCxcclxuXHRcdFx0XHRwcm9kdWN0TGlzdHM6IFtdLFxyXG5cdFx0XHRcdHByb2R1Y3ROYW1lTGlzdDogW3tcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WFqOmDqCcsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfpmY3ku7cnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5Yy7576OJyxcclxuXHRcdFx0XHRcdFx0bnVtYmVyOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+aKpOiCpOWTgScsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRidG5udW06IDAsXHJcblx0XHRcdFx0Y29udGVudExpc3Q6IHt9LFxyXG5cdFx0XHRcdGFsbGNoZWNrZWQ6IGZhbHNlLCAvL+WFqOmAiVxyXG5cdFx0XHRcdGlzU2hvd0Rpc2NvdW50OiBmYWxzZSwgLy/mmL7npLrkvJjmg6DmiJbljaHliLhcclxuXHRcdFx0XHRyZXF1ZXN0VXJsOiAnJyxcclxuXHRcdFx0XHRvZmZzZXQ6IDAsXHJcblx0XHRcdFx0c2t1X2xpc3Q6IFtdLFxyXG5cdFx0XHRcdHNwZWNpYWxMaXN0OiB7XHJcblx0XHRcdFx0XHRjb250ZW50OltdXHJcblx0XHRcdFx0fSwgLy/lub/lkYpcclxuXHRcdFx0XHRnZXRfY291bnQ6IDAsIC8v5Y+v6aKG5Y+W5Y2h5Yi45pWw6YePXHJcblx0XHRcdFx0Y2FyZExpc3Q6IFtdLCAvL+WNoeWIuOWIl+ihqFxyXG5cdFx0XHRcdGFjdF9pbmZvOiB7fSxcclxuXHRcdFx0XHR1c2VzX2NhcmRMaXN0OiBbXSxcclxuXHRcdFx0XHR0aGlzX3Nob3dfZ29vZHNfc3BlYzogZmFsc2UsIC8v5pi+56S65L+u5pS55ZWG5ZOB6KeE5qC8XHJcblx0XHRcdFx0Z29vZHNDb250ZW50TGlzdDogW10sXHJcblx0XHRcdFx0c3BlYzogW10sXHJcblx0XHRcdFx0cGF5X3R5cGU6IDEsIC8v5pSv5LuY5pa55byPICAw6aKE57qm6YeRIDEg5YWo5qy+IDIg5YWo6YCJXHJcblx0XHRcdFx0Y2xhc3NfdHlwZTogMCwgLy/pooblj5bmlrnlvI8gMOWIsOmZoiAx6YKu5a+EXHJcblx0XHRcdFx0c2V0TmV3R29vZHNOdW1iZXI6IDEsIC8v5L+u5pS55paw55qE5ZWG5ZOB5pWw6YePXHJcblx0XHRcdFx0ZW5jcnlwdGVkX2lkOiAnJyxcclxuXHRcdFx0XHRza3VfaWQ6IDAsXHJcblx0XHRcdFx0Y2FydF9pZDogMTYwLFxyXG5cdFx0XHRcdG9yZGVyX2luZm86IHtcclxuXHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHR9LCAvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdHNob3dfZGlzY291bnQ6IGZhbHNlLCAvL+aYvuekuuS8mOaDoOeahOW8ueeql1xyXG5cdFx0XHRcdHZlcmlmaWNhdGlvbl9zcGVjQXR0cjogW10sIC8v6aqM6K+B6YCJ6KeE5qC854mI5pysXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWNoQm90dG9tOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR0aGF0Lm9mZnNldCArPSAxO1xyXG5cdFx0XHR0aGF0LmdldExpa2UoKVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZDogZnVuY3Rpb24ob3B0aW9uKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHR0aGlzLnJlcXVlc3QgPSB0aGlzLiRyZXF1ZXN0XHJcblx0XHRcdHRoYXQucmVxdWVzdFVybCA9IHRoYXQucmVxdWVzdC5nbG9iYWxEYXRhLnJlcXVlc3RVcmxcclxuXHRcdFx0dGhhdC5nZXRMaWtlKClcclxuXHRcdFx0dGhhdC5nZXRDYXJkKClcclxuXHRcdFx0dGhhdC5hZHZlcnRpc2luZygpXHJcblx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5oZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHQ7XHJcblx0XHRcdC8vIOWIpOWumui/kOihjOW5s+WPsFxyXG5cdFx0XHRsZXQgcGxhdGZvcm0gPSAnJ1xyXG5cdFx0XHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XHJcblx0XHRcdFx0Y2FzZSAnYW5kcm9pZCc6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhbmRyb2lkJ1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaW9zJzpcclxuXHRcdFx0XHRcdHBsYXRmb3JtID0gJ2lvcydcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhcHBsZXQnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGxhdGZvcm0gPT0gJ2FwcGxldCcpIHtcclxuXHRcdFx0XHQvLyDojrflj5blsY/luZXpq5jluqZcclxuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IG1lbnUud2lkdGhcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51VG9wID0gbWVudS50b3BcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IG1lbnUubGVmdFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSBtZW51LmJvdHRvbVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSA5MFxyXG5cdFx0XHRcdHRoYXQubWVudVRvcCA9IDUwXHJcblx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gMzJcclxuXHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gMjc4XHJcblx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gODJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6L+U5ZueXHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRVc2VyQ2FydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdnZXRjYXJ0JyxcclxuXHRcdFx0XHRcdHR5cGU6IHRoYXQuYnRubnVtXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwic2hvcHBpbmdDYXJ0XCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRsZXQgZGF5ID0gMFxyXG5cdFx0XHRcdFx0XHRsZXQgaG91c2UgPSAwXHJcblx0XHRcdFx0XHRcdGxldCBzZWNvbmQgPSAwXHJcblx0XHRcdFx0XHRcdGxldCBtaW51dGUgPSAwXHJcblx0XHRcdFx0XHRcdC8vIGxldCBmb3JtZXJfc2t1X2xpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJjb250ZW50TGlzdFwiKS5za3VfbGlzdDtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZm9ybWVyX3NrdV9saXN0KSAvL+S4uuS6huWIpOWumuaVsOaNruaYr+WQpuaciemAieS4reeahOeKtuaAgVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGRhdGEuc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmlzX3Nob3dfc3RhdGUgPSBmYWxzZSAvL+aYvuekuuiuouWNleaTjeS9nFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IGZhbHNlIC8v5piv5ZCm5YWo6YCJ5b2T5YmN5YiG57G7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCA9IGZhbHNlIC8v5piv5ZCm6YCJ5oupXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5za3VfbGlzdFtpXS5hY3RfaW5mbykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmRheSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAvIDYwIC8gMjQgJSAzMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5ob3VzZSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAvIDYwICUgMjQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uc2Vjb25kID0gcGFyc2VJbnQoKGRhdGEuc2t1X2xpc3RbaV0uYWN0X2luZm8ucmVzdF90aW1lKSAvIDYwICUgNjApXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0ubWludXRlID0gcGFyc2VJbnQoKGRhdGEuc2t1X2xpc3RbaV0uYWN0X2luZm8ucmVzdF90aW1lKSAlIDYwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhLnNrdV9saXN0W2ldKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnNrdV9saXN0ID0gZGF0YS5za3VfbGlzdFxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQucHJvZHVjdE5hbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5wcm9kdWN0TmFtZUxpc3RbaV0ubnVtYmVyID0gZGF0YS50eXBlX2NvdW50W2ldXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNrdV9saXN0ID0gW11cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrlj6/mk43kvZzorqLljZXmlbDmja5cclxuXHRcdFx0c2V0Z29vZHNTdGF0ZTogZnVuY3Rpb24oaywgaXMpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmlzX3Nob3dfc3RhdGUgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5pc19zaG93X3N0YXRlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWFqOmAieW9k+WJjeWIhuexu1xyXG5cdFx0XHRjaGVja2VkX2NsYXNzX2FsbDogZnVuY3Rpb24oaykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBhY3RfaWQgPSAnJ1xyXG5cdFx0XHRcdGxldCBjaGFuZ2VfY2FyZF9pZCA9IFtdXHJcblx0XHRcdFx0bGV0IGNhcnQgPSB7fVxyXG5cdFx0XHRcdGxldCBhcnIgPSBbXVxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkKSB7IC8v5YWo6YCJXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaV0uY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSB7IC8v54K55Ye75riF56m65YWo6YCJXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaV0uY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRhcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZmxhZyA9IGFyci5ldmVyeSgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IHRydWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmIChmbGFnKSB7XHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSAhdGhhdC5hbGxjaGVja2VkXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInmi6lcclxuXHRcdFx0Y2hhbmdlQ2hlY2s6IGZ1bmN0aW9uKGssIGlzKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGFyciA9IFtdXHJcblx0XHRcdFx0bGV0IGFsbF9hcnIgPSBbXVxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2hlY2tlZCA9ICF0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNoZWNrZWRcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0YXJyLnB1c2godGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2ldLmNoZWNrZWQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBmbGFnID0gYXJyLmV2ZXJ5KChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g5aaC5p6c5b2T5YiG57G75LiL6Z2i55qE6K6i5Y2V6YO96YCJ5oup5LqGLOWImeW9k+WJjeWIhuexu+eahOWFqOmAieS4unRydWVcclxuXHRcdFx0XHRpZiAoZmxhZykge1xyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCA9ICF0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkXHJcblx0XHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCkgeyAvL+W9k+WJjeiuouWNleS4uumAieaLqeaXtuWIpOWumuaJgOacieeahOiuouWNleaYr+WQpuW3sue7j+WFqOmAiVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRhbGxfYXJyLnB1c2godGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsZXQgZmxhZ3MgPSBhbGxfYXJyLmV2ZXJ5KChpdGVtLCBpbmRleCwgYWxsX2FycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtID09PSB0cnVlXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZsYWdzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jaGVja2VkKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0X3VzZXJfY2FydCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRsZXQgbmV3X2FyciA9IFtdXHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaj0wO2o8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDtqKyspXHJcblx0XHRcdFx0XHRcdG5ld19hcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZClcclxuXHRcdFx0XHRcdFx0Ly8gaWYoIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkKXtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcclxuXHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGV0IGZsYWcgPSBuZXdfYXJyLmV2ZXJ5KChpdGVtLCBpbmRleCwgbmV3X2FycikgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpdGVtLGluZGV4KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhmbGFnKVxyXG5cdFx0XHRcdFx0aWYoZmxhZyl7XHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uT566X55qE5YWo6YCJXHJcblx0XHRcdGNoYW5nZV9hbGxfY2FydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gIXRoYXQuYWxsY2hlY2tlZFxyXG5cdFx0XHRcdGlmICh0aGF0LmFsbGNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5botK3nianovabku7fmoLxcclxuXHRcdFx0Z2V0X3VzZXJfY2FydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGNoYW5nZV9jYXJ0ID0gW11cclxuXHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQpIHsgLy/lhYjliKTmlq3mmK/lkKbmnInlhajpgInkuobnmoTorqLljZVcclxuXHRcdFx0XHRcdFx0XHRsZXQgYWN0X2lkID0gJydcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FydF9pZCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RfaWQgPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FydCA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogYWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VfY2FydC5wdXNoKGNhcnQpXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3QubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCkgeyAvL+WIpOWumumAieaLqeS6hueahOiuouWNlVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgYWN0X2lkID0gJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQgPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhcnRfaWQucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2FydF9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGNhcnQgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0X2lkOiBhY3RfaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiBjYXJ0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlX2NhcnQucHVzaChjYXJ0KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NhbGN1bGF0ZScsXHJcblx0XHRcdFx0XHRjYXJ0OiBjaGFuZ2VfY2FydFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoY2hhbmdlX2NhcnQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHRcdFx0Ly8gdG90YWxfcHJpY2U6MCwvL+aAu+S7t1xyXG5cdFx0XHRcdFx0XHRcdC8vIHNhbGVfcHJpY2U6MCwvL+aAu+iuoeS8mOaDoFxyXG5cdFx0XHRcdFx0XHRcdC8vIGhkX2Rpc2NvdW50OiAwLC8v5rS75Yqo5LyY5oOgMjAyMC4xMS4wNFxyXG5cdFx0XHRcdFx0XHRcdC8vIG9ubGluZV9wYXk6IDAsLy/lnKjnur/mlK/ku5hcclxuXHRcdFx0XHRcdFx0XHQvLyBvZmZsaW5lX3BheTogMCwvL+e6v+S4i+aUr+S7mFxyXG5cdFx0XHRcdFx0XHRcdC8vIG9mZl9zYWxlOiAwLC8v5Y675o6J5LyY5oOg5ZCO5bqU5LuYMjAyMC4xMS4wMlxyXG5cdFx0XHRcdFx0XHRcdC8vIHNhbGVfaW5mbzogW10vL+S8mOaDoOS/oeaBr1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IGRhdGFcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzYWxlX2luZm86IFtdXHJcblx0XHRcdFx0XHRcdFx0fSAvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coY2hhbmdlX2NhcnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWOu+e7k+eul1xyXG5cdFx0XHRnb1RvU2V0dGxlbWVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHNrdV9saXN0ID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFxyXG5cdFx0XHRcdGxldCBjYXJ0X2luZm8gPSB7fSAvL+WNleadoei0reeJqei9pueahOmAieS4reeahOaVsOaNrlxyXG5cdFx0XHRcdGxldCBhY3RfaWQgPSAnJyAvL+a0u+WKqGlkIFxyXG5cdFx0XHRcdGxldCBjYXJ0X2lkX2xpc3QgPSBbXSAvL+iuouWNlWlk5YiX6KGoXHJcblx0XHRcdFx0aWYgKHRoYXQuYWxsY2hlY2tlZCkgeyAvL+WIpOWumui0reeJqei9puaYr+WQpuWFqOmAieS6hu+8jOWFqOmAieebtOaOpeWtmOWCqOWvueW6lOeahOi0reeJqei9pua0u+WKqGlk5ZKM6LSt54mp6L2maWRcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFjdF9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogYWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiBza3VfbGlzdFtpXS5jYXJ0X2lkX2xpc3RcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3Q6IHNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QucHVzaChjYXJ0X2luZm8pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHsgLy/lpoLmnpzmmK/msqHmnInlhajpgInvvIzlsLHlvqrnjq/liKTlrprotK3nianovabnmoTliIbnsbvliJfooajmmK/lkKbmnInlhajpgInnmoTvvIzmnInvvIzlhYjlr7zlhaXvvIzmsqHmnInlho3lvqrnjq/lhoXpg6jnmoTllYblk4HmmK/lkKbpgInkuK1cclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFsbF9jaGVja2VkKSB7IC8v5YiG57G75YiX6KGo5piv5ZCm5pyJ5YWo6YCJ55qE77yM5pyJ77yM5YWI5a+85YWl77yM5rKh5pyJ5YaN5b6q546v5YaF6YOo55qE5ZWG5ZOB5piv5ZCm6YCJ5LitXHJcblx0XHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmFjdF9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0X2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZDogYWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3Q6IHNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3Q6IHNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QucHVzaChjYXJ0X2luZm8pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7IC8v5b6q546v5YaF6YOo55qE5ZWG5ZOB5piv5ZCm6YCJ5LitXHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfbGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBza3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoc2t1X2xpc3RbaV0uYWN0X2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2xpc3QucHVzaChza3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNhcnRfaWQpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmIChjYXJ0X2xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQ6IGFjdF9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OiBjYXJ0X2xpc3RcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdC5wdXNoKGNhcnRfaW5mbylcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGNhcnRfaWRfbGlzdCwzMzMzMzMzMylcclxuXHRcdFx0XHQvLyB1bmkuc2V0U3RvcmFnZVN5bmMoXCJjYXJ0X2lkX2xpc3RcIiwgY2FydF9pZF9saXN0KTsgLy/lsIbmlbDmja7lrZjlgqjvvIzmlrnkvr/lnKjnoa7orqTorqLljZXml7bkvb/nlKhcclxuXHRcdFx0XHQvLyDmuIXpmaTmnKzlnLDlrZjnmoTotK3nianovabmlbDmja5cclxuXHRcdFx0XHQvLyB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ2NvbnRlbnRMaXN0Jyk7XHJcblx0XHRcdFx0aWYgKGNhcnRfaWRfbGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QgPSBKU09OLnN0cmluZ2lmeShjYXJ0X2lkX2xpc3QpXHJcblx0XHRcdFx0XHQvLyDnoa7orqTorqLljZVcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2NvbmZpcm1fb3JkZXIvY29uZmlybV9vcmRlcj9jYXJ0X2lkX2xpc3Q9JHtjYXJ0X2lkX2xpc3R9YCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+mAieaLqeWVhuWTgScsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkv67mlLnllYblk4Hop4TmoLxcclxuXHRcdFx0c2hvd1NldFNwZWM6IGZ1bmN0aW9uKHNrdV9pZCwgZW5jcnlwdGVkX2lkLCBudW1iZXIsIGNhcnRfaWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmVuY3J5cHRlZF9pZCA9IGVuY3J5cHRlZF9pZFxyXG5cdFx0XHRcdHRoYXQuc2t1X2lkID0gc2t1X2lkXHJcblx0XHRcdFx0dGhhdC5jYXJ0X2lkID0gY2FydF9pZFxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2dvb2Rzc3B1ZGV0YWlscycsXHJcblx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IGVuY3J5cHRlZF9pZCxcclxuXHRcdFx0XHRcdHNrdV9pZDogc2t1X2lkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDApIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIsIGRhdGEpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuc3BlYyA9IHRoYXQuYXNzZW1ibGVTcGVjKGRhdGEuc2t1LnVzZXJfc3BlYywgMSlcclxuXHRcdFx0XHRcdFx0dGhhdC5wYXlfdHlwZSA9IGRhdGEuc2t1LnBheV90eXBlXHJcblx0XHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2dvb2RzX3NwZWMgPSAhdGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlY1xyXG5cdFx0XHRcdFx0XHR0aGF0LnVzZXNfY2FyZExpc3QgPSB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1LmNhcmRfbGlzdFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdChyZXMuZGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+ehruWumuS/ruaUueinhOagvFxyXG5cdFx0XHRvcmRlclNldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYodGhhdC5wYXlfdHlwZT09Mil7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+ivt+mAieaLqeS4gOenjeS7mOasvuaWueW8jycsXHJcblx0XHRcdFx0XHRcdGljb246XCJub25lXCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRsZXQgc3BlY0F0dHIgPSB0aGF0LnZlcmlmaWNhdGlvbl9zcGVjQXR0clxyXG5cdFx0XHRcdFx0bGV0IGRhdGFJbmZvcyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6IFwic2VsZWN0c2t1XCIsXHJcblx0XHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogdGhhdC5lbmNyeXB0ZWRfaWQsXHJcblx0XHRcdFx0XHRcdHNwZWNfYXR0cjogc3BlY0F0dHJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mb3MpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGludGVyZmFjZUlkOiAnY2hhbmdjYXJ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkOiB0aGF0LmNhcnRfaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRudW06IHRoYXQuc2V0TmV3R29vZHNOdW1iZXIsXHJcblx0XHRcdFx0XHRcdFx0XHRza3VfaWQ6IHRoYXQuc2t1X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNfcG9zdDogdGhhdC5jbGFzc190eXBlLFxyXG5cdFx0XHRcdFx0XHRcdFx0YnV5X3R5cGU6IHRoYXQucGF5X3R5cGVcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlYyA9ICF0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2FsZV9pbmZvOiBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IC8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6J+ivt+mAieaLqeato+ehruinhOagvCcsXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vliqDlh4/mlbDlrZdcclxuXHRcdFx0cmVkdWNlOiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgKz0gaW5kZXhcclxuXHRcdFx0XHRpZiAodGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0ID09IDApIHtcclxuXHRcdFx0XHRcdHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCA9IDk5OTk5OVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhhdC5zZXROZXdHb29kc051bWJlciA+PSB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQpXHJcblx0XHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGF0LnNldE5ld0dvb2RzTnVtYmVyIDwgdGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L6T5YWl5oOz6KaB55qE5pWw6YePXHJcblx0XHRcdGNoYW5nZUdvb2RzTnVtYmVyOiBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IGV2ZW50LmRldGFpbC52YWx1ZVxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSB2YWx1ZVxyXG5cdFx0XHRcdGlmICh0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQgPT0gMCkge1xyXG5cdFx0XHRcdFx0dGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0ID0gOTk5OTk5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGF0LnNldE5ld0dvb2RzTnVtYmVyID49IHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pKSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWkpXHJcblx0XHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGF0LnNldE5ld0dvb2RzTnVtYmVyIDwgdGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pSv5LuY5pa55byPXHJcblx0XHRcdGNoYW5nZVBheTogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnBheV90eXBlID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlQ2xhc3M6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5jbGFzc190eXBlID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlU3BlYzogZnVuY3Rpb24oaW5kZXgsIHNpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGluZGV4LHNpbmRleClcclxuXHRcdFx0XHRpZiAodGhhdC5zcGVjW2luZGV4XS5hdHRyW3NpbmRleF0gPT0gMCkge1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRTcGVjKGluZGV4LCBzaW5kZXgpXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGF0LnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XSA9PSAxKSB7XHJcblx0XHRcdFx0XHR0aGF0LmNhbmNlbFNwZWMoaW5kZXgsIHNpbmRleClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkv67mlLnop4TmoLznmoTkvJjmg6Dkv6Hmga9cclxuXHRcdFx0c2VlTW9yZTogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZiAoaW5kZXggPT0gMCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoYXQudXNlc19jYXJkTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2lkc19nZXRfY2FyZCcsXHJcblx0XHRcdFx0XHRcdFx0Y2FyZF9pZDogdGhhdC51c2VzX2NhcmRMaXN0LFxyXG5cdFx0XHRcdFx0XHRcdGxpbWl0OiA2LFxyXG5cdFx0XHRcdFx0XHRcdG9mZnNldDogMFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiY2FyZFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhhdC5pc1Nob3dEaXNjb3VudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmNhcmRzW2ldLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gW11cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcclxuXHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2dvb2RzX3NwZWMgPSAhdGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlY1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gdXNlclNwZWM955So5oi35Y+v6YCJ6KeE5qC877yMaXNGaXJzdD3mmK/lkKbpppbmrKHov5vlhaXvvIxub3dDaGVjaz3lvZPliY3pgInpobnvvIxpc0NhbmNlbD3mmK/lkKbngrnlh7vlj5bmtojov5vlhaVcclxuXHRcdFx0YXNzZW1ibGVTcGVjOiBmdW5jdGlvbih1c2VyU3BlYywgaXNGaXJzdCwgbm93Q2hlY2ssIGlzQ2FuY2VsKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8g5paw6KeE5qC85pWw57uE77yM5LiO5Y6f6KeE5qC8c3BlY192YWx1ZeebuOWvueW6lO+8jOeUqOS6juagh+iusOWQhOenjeeKtuaAgVxyXG5cdFx0XHRcdGxldCBzcGVjVmFsdWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKS5zcGVjX3ZhbHVlO1xyXG5cdFx0XHRcdGxldCBzcGVjID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIikuc3BlY192YWx1ZTtcclxuXHRcdFx0XHRsZXQgZGVmYXVsdFVzZXJTcGVjID0gKGlzQ2FuY2VsID09IDEpID8gXCJcIiA6IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpLnNrdS5zcGVjX2F0dHI7XHJcblx0XHRcdFx0Ly8g6YGN5Y6G6KeE5qC857G75Z6LXHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBzcGVjVmFsdWUpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gc3BlY1ZhbHVlW2ldLmF0dHIpIHtcclxuXHRcdFx0XHRcdFx0Ly8g56ys5LiA5qyh6L+b5YWl5YWo6YOo5Y+v6YCJ77yMMD3lj6/pgInvvIwxPemAieS4rVxyXG5cdFx0XHRcdFx0XHRpZiAoaXNGaXJzdCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0c3BlY1tpXS5hdHRyW2tdID0gMDtcclxuXHRcdFx0XHRcdFx0XHQvLyDpgY3ljobpu5jorqTpgInmi6nop4TmoLxcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqIGluIGRlZmF1bHRVc2VyU3BlYykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGsgPT0gZGVmYXVsdFVzZXJTcGVjW2pdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWNbaV0uYXR0cltrXSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOeUqOaIt+WPr+mAieinhOagvOS4juaVtOS4quinhOagvOi/m+ihjOWMuemFje+8jOWMuemFjeaIkOWKn+eKtuaAgeaUueS4uuWPr+mAieeKtuaAgVxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGogaW4gdXNlclNwZWMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChrID09IHVzZXJTcGVjW2pdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWNbaV0uYXR0cltrXSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIOWIpOaWreW9k+WJjemAieaLqemhueS4reaYr+WQpuacieS4jeWtmOWcqOeUqOaIt+WPr+mAieinhOagvO+8jOWmguaciei/m+ihjOWIoOmZpFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG4gaW4gbm93Q2hlY2spIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh1c2VyU3BlYy5pbmRleE9mKHBhcnNlSW50KG5vd0NoZWNrW25dKSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bm93Q2hlY2suc3BsaWNlKG4sIDEpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIOaYvuekuuW9k+WJjemAieS4reinhOagvFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG0gaW4gbm93Q2hlY2spIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChrID09IG5vd0NoZWNrW21dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWNbaV0uYXR0cltrXSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBzcGVjO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInmi6nop4TmoLxcclxuXHRcdFx0Z2V0U3BlYzogZnVuY3Rpb24oaW5kZXgsIHNpbmRleCkge1xyXG5cdFx0XHRcdGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhhdC5zcGVjW2luZGV4XS5hdHRyKSB7XHJcblx0XHRcdFx0XHR0aGF0LnNwZWNbaW5kZXhdLmF0dHJbaV0gPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XSA9IDE7XHJcblx0XHRcdFx0Ly8g5p+l5om+5b2T5YmN6YCJ5oup5pWw5o2uXHJcblx0XHRcdFx0bGV0IG5vd0NoZWNrID0gW107XHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGF0LnNwZWMpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gdGhhdC5zcGVjW2ldLmF0dHIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuc3BlY1tpXS5hdHRyW2tdID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRub3dDaGVjay5wdXNoKGspO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOWIpOaWreW9k+WJjeeCueWHu+inhOagvOaYr+WQpuWcqOeUqOaIt+WFgeiuuOmAieaLqeiMg+WbtO+8jOWcqOWwseebtOaOpeaPkOS6pO+8jOS4jeWcqOWwseaPkOS6pOW9k+WJjeinhOagvFxyXG5cdFx0XHRcdGxldCB1c2VyU3BlYyA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpLnNrdS51c2VyX3NwZWM7XHJcblx0XHRcdFx0bGV0IHNwZWNBdHRyID0gXCJcIjtcclxuXHRcdFx0XHRpZiAodXNlclNwZWMpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gdXNlclNwZWMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHVzZXJTcGVjLmluZGV4T2YocGFyc2VJbnQoc2luZGV4KSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRzcGVjQXR0ciA9IFtzaW5kZXhdO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNwZWNBdHRyID0gbm93Q2hlY2s7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c3BlY0F0dHIgPSBub3dDaGVjaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6IFwic2VsZWN0c2t1XCIsXHJcblx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IHRoYXQuZW5jcnlwdGVkX2lkLFxyXG5cdFx0XHRcdFx0c3BlY19hdHRyOiBzcGVjQXR0clxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnZlcmlmaWNhdGlvbl9zcGVjQXR0ciA9IHNwZWNBdHRyIC8v55So5LqO6aqM6K+B5piv5ZCm5piv5ZCI55CG55qE6KeE5qC86YCJ5Y+WXHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g6YeN5paw5YKo5a2Y5paw55So5oi35Y+v5Lul6YCJ6aG5XHJcblx0XHRcdFx0XHRsZXQgZ29vZHNEZXRhaWwgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKTtcclxuXHRcdFx0XHRcdGdvb2RzRGV0YWlsLnNrdS51c2VyX3NwZWMgPSByZXMuZGF0YS5kYXRhLnVzZXJfc3BlYztcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIsIGdvb2RzRGV0YWlsKTtcclxuXHRcdFx0XHRcdHRoYXQuc3BlYyA9IHRoYXQuYXNzZW1ibGVTcGVjKHJlcy5kYXRhLmRhdGEudXNlcl9zcGVjLCByZXMuZGF0YS5kYXRhID09IFwiXCIgPyAxIDogMCwgbm93Q2hlY2spXHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnNrdV9pZCA9IGRhdGEuaWRcclxuXHRcdFx0XHRcdFx0dGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5zYWxlX3ByaWNlID0gZGF0YS5zYWxlX3ByaWNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y+W5raI6YCJ6aG5XHJcblx0XHRcdGNhbmNlbFNwZWM6IGZ1bmN0aW9uKGluZGV4LCBzaW5kZXgpIHtcclxuXHRcdFx0XHRjb25zdCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XSA9IDA7XHJcblx0XHRcdFx0Ly8g5p+l5om+5b2T5YmN6YCJ5oup5pWw5o2uXHJcblx0XHRcdFx0bGV0IG5vd0NoZWNrID0gW107XHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGF0LnNwZWMpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gdGhhdC5zcGVjW2ldLmF0dHIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuc3BlY1tpXS5hdHRyW2tdID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRub3dDaGVjay5wdXNoKGspO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiBcInNlbGVjdHNrdVwiLFxyXG5cdFx0XHRcdFx0ZW5jcnlwdGVkX2lkOiB0aGF0LmVuY3J5cHRlZF9pZCxcclxuXHRcdFx0XHRcdHNwZWNfYXR0cjogbm93Q2hlY2tcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g6YeN5paw5YKo5a2Y5paw55So5oi35Y+v5Lul6YCJ6aG5XHJcblx0XHRcdFx0XHRsZXQgZ29vZHNEZXRhaWwgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKTtcclxuXHRcdFx0XHRcdGdvb2RzRGV0YWlsLnNrdS51c2VyX3NwZWMgPSByZXMuZGF0YS5kYXRhLnVzZXJfc3BlYztcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIsIGdvb2RzRGV0YWlsKTtcclxuXHRcdFx0XHRcdHRoYXQuc3BlYyA9IHRoYXQuYXNzZW1ibGVTcGVjKHJlcy5kYXRhLmRhdGEudXNlcl9zcGVjLCByZXMuZGF0YS5kYXRhID09IFwiXCIgPyAxIDogMCwgbm93Q2hlY2ssIDEpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ZWG5ZOBXHJcblx0XHRcdGdvVG9Hb29kczogZnVuY3Rpb24oaWQsIHBpZCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19kZXRhaWw/c2t1X2lkPSR7aWR9JiZlbmNyeXB0ZWRfaWQ9JHtwaWR9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkuLrkvaDmjqjojZBcclxuXHRcdFx0Z2V0TGlrZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICd1c2VycmVjb21tZW5kZWRnb29kc3NwdWxpc3QnLFxyXG5cdFx0XHRcdFx0dHlwZTogJzMnLFxyXG5cdFx0XHRcdFx0b2Zmc2V0OiB0aGF0Lm9mZnNldFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnByb2R1Y3RMaXN0cyA9IHRoYXQucHJvZHVjdExpc3RzLmNvbmNhdChkYXRhKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+ayoeacieaVsOaNricpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75LyY5oOg5oiW6ICF5Y2h5Yi4XHJcblx0XHRcdGNoYW5nZUFjdGl2aXR5OiBmdW5jdGlvbihpbmRleCwgbGlzdCwgaW5mbykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7IC8v5Y2h5Yi4XHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOiAnaWRzX2dldF9jYXJkJyxcclxuXHRcdFx0XHRcdFx0Y2FyZF9pZDogbGlzdCxcclxuXHRcdFx0XHRcdFx0bGltaXQ6IDYsXHJcblx0XHRcdFx0XHRcdG9mZnNldDogMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5hY3RfaW5mbyA9IGluZm9cclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiY2FyZFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuaXNTaG93RGlzY291bnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jYXJkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5jYXJkc1tpXS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZydcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDEpIHsgLy/kvJjmg6BcclxuXHRcdFx0XHRcdHRoYXQuYWN0X2luZm8gPSBsaXN0XHJcblx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcclxuXHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdFx0aWYgKCF0aGF0LmlzU2hvd0Rpc2NvdW50KSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBbXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6aKG5Y+W5Y2h5Yi4XHJcblx0XHRcdGdldENhcmRzOiBmdW5jdGlvbihjYXJkSWQsIHByb21wdCwgaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZiAocHJvbXB0ID09ICcnKSB7XHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOiAnY2FyZGdldCcsXHJcblx0XHRcdFx0XHRcdGNhcmRfaWQ6IGNhcmRJZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJjYXJkXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KCfpooblj5bmiJDlip8nKVxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QuY2FyZHNbaW5kZXhdLnNhbGVjYXJkX3VzZXJfY291bnQgPSB0aGF0LmNhcmRMaXN0LmNhcmRzW2luZGV4XS5zYWxlY2FyZF91c2VyX2NvdW50ICsgMVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KHByb21wdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS9v+eUqOWNoeWIuFxyXG5cdFx0XHR1c2VDYXJkOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfkvb/nlKjnmoTljaHliLhpZDonLCBpZClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1RpY2tldDogZnVuY3Rpb24oY2FyZElkKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNhcmRMaXN0LmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAodGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5pZCA9PSBjYXJkSWQpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlscyA9ICF0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzXHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy10b3AucG5nJ1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPluW5v+WRilxyXG5cdFx0XHRhZHZlcnRpc2luZzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdnZXRhZHZlcnRpc2luZycsXHJcblx0XHRcdFx0XHRsb2NhdGlvbjogMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImhvbWVcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuc3BlY2lhbExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQuc3BlY2lhbExpc3QpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W5Y+v6aKG5Y+W5Y2h5Yi4XHJcblx0XHRcdGdldENhcmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiBcIm1heV9yZWNlaXZlXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJjYXJkXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LmdldF9jb3VudCA9IGRhdGEubnVtXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6aKG5Yi45Lit5b+DXHJcblx0XHRcdGdvVG9HYWluOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvbXkvbXlfY2FyZF9nYWluYCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInkuK3llYblk4FcclxuXHRcdFx0Y2hhbmdlUG9yZHVjdDogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmJ0bm51bSA9IGluZGV4XHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdCA9IHt9XHJcblx0XHRcdFx0dGhhdC5nZXRVc2VyQ2FydCgpXHJcblx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ2NvbnRlbnRMaXN0Jyk7XHJcblx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0c2FsZV9pbmZvOiBbXVxyXG5cdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0fSxcclxuXHRcdFx0Z29Ub0dvb2RzQ2xhc3NmaXk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2NsYXNzaWZ5YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlLbol4/jgIHnm7jkvLzjgIHliKDpmaRcclxuXHRcdFx0c2V0U3RhdGU6IGZ1bmN0aW9uKGluZGV4LCBpZCwgbnVtLCBjYXRlZ29yeV9pZCwgbGlzdE5hbWUsIGVuY3J5cHRlZF9pZCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGluZGV4LGNhcnRfaWQsc2t1X2lkLG51bSlcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyBpbmRleCAwIOaUtuiXjyAxIOebuOS8vCAyIOWIoOmZpFxyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7IC8v5pS26JePXHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOiAnY29sbGVjdGdvb2Rzc3B1JyxcclxuXHRcdFx0XHRcdFx0ZW5jcnlwdGVkX2lkOiBlbmNyeXB0ZWRfaWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QoJ+W3suaUtuiXjycpXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzLmRhdGEuY29kZSA9PSAxMDIwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdCgn6K+l5ZWG5ZOB5bey5pS26JePJylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDEpIHsgLy/nm7jkvLxcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3Q/bmFtZT0ke2xpc3ROYW1lfSZpZD0ke2NhdGVnb3J5X2lkfWAsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gMikgeyAvL+WIoOmZpFxyXG5cdFx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdFx0Y2FydF9pZC5wdXNoKGlkKVxyXG5cdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NoYW5nY2FydCcsXHJcblx0XHRcdFx0XHRcdHR5cGU6IDIsXHJcblx0XHRcdFx0XHRcdGNhcnRfaWQ6IGNhcnRfaWQsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn56Gu5a6a6KaB5Yig6Zmk5q2k6K6i5Y2V5ZCXPycsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KHJlcy5kYXRhLm1lc3NhZ2UpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgNTAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNhbGVfaW5mbzogW11cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCA4MDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75YiG57G75YiX6KGoXHJcblx0XHRcdGdvb2RzQ2xhc3NmaXk6IGZ1bmN0aW9uKGlkLCBsaXN0TmFtZSkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19saXN0P25hbWU9JHtsaXN0TmFtZX0maWQ9JHtpZH1gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS/ruaUueWVhuWTgeaVsOmHj1xyXG5cdFx0XHRzZXRHb29kc051bWJlcjogZnVuY3Rpb24oaWQsIGNhcnRfbnVtKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQuY29udGVudExpc3QpIC8v5oOz5rOV5piv5Zyo5L+u5pS55pWw6YeP55qE5pe25YCZ5YWI5oqK6LSt54mp6L2m55qE5pWw5o2u5a2Y5YKo77yM5Li65LqG5Yik5a6a6YKj5Lqb5pWw5o2u5piv6YCJ5Lit5LqGLOeEtuWQjuiuoeeul+S7t+agvFxyXG5cdFx0XHRcdC8vIHVuaS5zZXRTdG9yYWdlU3luYyhcImNvbnRlbnRMaXN0XCIsIHRoYXQuY29udGVudExpc3QpO1xyXG5cdFx0XHRcdGNhcnRfaWQucHVzaChpZClcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NoYW5nY2FydCcsXHJcblx0XHRcdFx0XHR0eXBlOiAwLFxyXG5cdFx0XHRcdFx0Y2FydF9pZDogY2FydF9pZCxcclxuXHRcdFx0XHRcdG51bTogY2FydF9udW0sXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwic2hvcHBpbmdDYXJ0XCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNhcnRfaWQgPT0gY2FydF9pZCkgeyAvL+WIpOWumumAieaLqeS6hueahOiuouWNlVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIFxyXG5cdFx0XHRcdFx0XHQvLyB0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHQvLyBcdHNhbGVfaW5mbzpbXVxyXG5cdFx0XHRcdFx0XHQvLyB9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliqDlh4/mlbDph49cclxuXHRcdFx0c2V0TnVtYmVyOiBmdW5jdGlvbihpZCwgbnVtYmVyLCBrLCBpcyxzdG9yZSx0YWtlX3N0b3JlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGdvb2RzTnVtYmVyID0gMFxyXG5cdFx0XHRcdGxldCBjYXJ0X251bSA9IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW1cclxuXHRcdFx0XHRjYXJ0X251bSArPSBudW1iZXJcclxuXHRcdFx0XHRnb29kc051bWJlciA9IGNhcnRfbnVtXHJcblx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQgPSA5OTk5OTlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGdvb2RzTnVtYmVyID49IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdClcclxuXHRcdFx0XHRcdGdvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGDpmZDotK0ke3RoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdH3ku7ZgLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmIChnb29kc051bWJlciA8IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWluX2J1eV9saW1pdCkge1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWluX2J1eV9saW1pdClcclxuXHRcdFx0XHRcdGdvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOWmguaenOWKoOWHj+eahOaVsOmHj+WKoOS4iumUgOmHj+Wwj+S6juW6k+WtmOWwseWPr+S7peato+W4uOiuvue9ru+8jOWmguaenOWkp+S6juWwseWPquiDveiuvue9ruacgOWkp+eahOaVsOmHj+WKoOS4iumUgOmHj+etieS6juW6k+WtmOmHj1xyXG5cdFx0XHRcdGlmKGdvb2RzTnVtYmVyK3Rha2Vfc3RvcmU+c3RvcmUpe1xyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBzdG9yZSAtIHRha2Vfc3RvcmVcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogYOW6k+WtmOmHj+S7heWJqSR7c3RvcmUgLSB0YWtlX3N0b3JlfWAsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bSA9IGdvb2RzTnVtYmVyXHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IGdvb2RzTnVtYmVyXHJcblx0XHRcdFx0dGhhdC5zZXRHb29kc051bWJlcihpZCwgZ29vZHNOdW1iZXIpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi+k+WFpeaVsOmHj1xyXG5cdFx0XHRzZXRQb3JkdWN0TnVtYmVyOiBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdFx0XHRsZXQgayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rXHJcblx0XHRcdFx0bGV0IGlzID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlzXHJcblx0XHRcdFx0bGV0IGlkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcblx0XHRcdFx0bGV0IHRha2Vfc3RvcmUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFrZV9zdG9yZVxyXG5cdFx0XHRcdGxldCBzdG9yZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zdG9yZVxyXG5cdFx0XHRcdGxldCBnb29kc051bWJlciA9IDBcclxuXHRcdFx0XHRsZXQgY2FydF9udW0gPSBwYXJzZUludCh2YWx1ZSlcclxuXHRcdFx0XHRnb29kc051bWJlciA9IGNhcnRfbnVtXHJcblx0XHRcdFx0aWYgKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10ubWF4X2J1eV9saW1pdCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQgPSA5OTk5OTlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g6L6T5YWl5pWw6YeP5Yqg5LiK6ZSA6YeP5bCP5LqO5bqT5a2Y5bCx5Y+v5Lul5q2j5bi46K6+572u77yM5aaC5p6c5aSn5LqO5bCx5Y+q6IO96K6+572u5pyA5aSn55qE5pWw6YeP5Yqg5LiK6ZSA6YeP562J5LqO5bqT5a2Y6YePXHJcblx0XHRcdFx0bGV0IG51bSA9IHBhcnNlSW50KGdvb2RzTnVtYmVyKVxyXG5cdFx0XHRcdHRha2Vfc3RvcmUgPSBwYXJzZUludCh0YWtlX3N0b3JlKVxyXG5cdFx0XHRcdGlmKG51bSt0YWtlX3N0b3JlPnN0b3JlKXtcclxuXHRcdFx0XHRcdG51bSA9IHBhcnNlSW50KHN0b3JlKS0gcGFyc2VJbnQodGFrZV9zdG9yZSlcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1cclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSBudW1cclxuXHRcdFx0XHRcdGdvb2RzTnVtYmVyID0gbnVtXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGDlupPlrZjph4/ku4Xliakke3N0b3JlIC0gdGFrZV9zdG9yZX1gLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChnb29kc051bWJlciA+PSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogYOmZkOi0rSR7dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0feS7tmAsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGdvb2RzTnVtYmVyIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IDFcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSAxXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSBnb29kc051bWJlclxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBnb29kc051bWJlclxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSBnb29kc051bWJlclxyXG5cdFx0XHRcdHRoYXQuc2V0R29vZHNOdW1iZXIoaWQsIGdvb2RzTnVtYmVyKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrkvJjmg6DmmI7nu4ZcclxuXHRcdFx0dXNlcl9kaXNjb3VudDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5zaG93X2Rpc2NvdW50ID0gIXRoYXQuc2hvd19kaXNjb3VudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRJS25vdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5zaG93X2Rpc2NvdW50ID0gIXRoYXQuc2hvd19kaXNjb3VudFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnRvcC1iYXIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC5iYWNrLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzhycHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYmFjayB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0fVxyXG5cclxuXHQuYmFjayBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdH1cclxuXHJcblx0LmJhY2stdGl0bGUgLnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzdycHg7XHJcblx0fVxyXG5cclxuXHQuY2FydC1jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQuZW1wdHktY2FydCB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZW1wdHktY2FydC1pbWFnZSB7XHJcblx0XHRwYWRkaW5nOiA2OHJweCAxNzdycHggNDBycHggMTc0cnB4O1xyXG5cdH1cclxuXHJcblx0LmVtcHR5LWNhcnQtaW1hZ2UgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDQwMHJweDtcclxuXHRcdGhlaWdodDogMjU0cnB4O1xyXG5cdH1cclxuXHJcblx0LmdvLXN0cm9sbCB7XHJcblx0XHR3aWR0aDogMjIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4N3JweDtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjY2OTkgMCUsICNmYTM0NzUgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsLXBlcmZvcm1hbmNlIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsTGlzdCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsTGlzdCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5yZWNvbW1lbmQtdG8teW91IHtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0d2lkdGg6IDZycHg7XHJcblx0XHRoZWlnaHQ6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzU3NjtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZExpbmUge1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTGluZSB2aWV3IHtcclxuXHRcdGhlaWdodDogNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucmVsYXRlZC10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQ4cnB4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc3ViamVjdC1jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQucHJvZHVjdC10by1uYXYge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRoZWlnaHQ6IDk2cnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtbmFtZSB7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDk2cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmNoZWNrZWRQb3JkdWN0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5lbmQtY29udCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0LmRpcyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblxyXG5cdC5jYXJkLXRvcCB7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi10b3A6IDVycHg7XHJcblx0fVxyXG5cclxuXHQudGFiQmFyTGlzdCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5jYW4tcmVjZWl2ZSB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIxcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHR9XHJcblxyXG5cdC5jYW4tcmVjZWl2ZSAudGV4dCB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdH1cclxuXHJcblx0LnRleHRzIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3OXJweDtcclxuXHR9XHJcblxyXG5cdC5nby1yZWNlaXZlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuZ28tcmVjZWl2ZSAudHJpYW5nbGUtbGluZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiA0MHJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICM1YmUzZDUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC01NnJweDtcclxuXHR9XHJcblxyXG5cdC5jaGFyYWN0ZXIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzViZTNkNTtcclxuXHRcdHdpZHRoOiAxNzBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY2FydC1zaG9wcGluZy1zaG93IHtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY2hhbmdlLWNoZWNrLXNlZS1tb3JlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGFuZ2UtY2hlY2sgdGV4dCB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1nb29kcyB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuYWRkLW9uLWl0ZW0ge1xyXG5cdFx0d2lkdGg6IDg4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnNwZWNpYWwtb2ZmZXIge1xyXG5cdFx0cGFkZGluZzogMHJweCAxMHJweCAxMHJweCA1MHJweDtcclxuXHR9XHJcblxyXG5cdC5mdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTJycHg7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZThmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lmaWMtYWN0aXZpdHkge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5hY3Rpdml0eS10aW1lIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYWN0aXZpdHktdGltZSB0ZXh0IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bWFyZ2luOiAwIDhycHg7XHJcblx0fVxyXG5cclxuXHQuaG91c2VzLFxyXG5cdC5taW51dGUsXHJcblx0LnNlY29uZCB7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tbGVmdDogNXJweDtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudC1hbGwge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQuc2hvd19nb29kc19zdGF0ZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnRoaXNfaXNfZ29vZHNfc3RhdGUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnNldF9zdGF0ZSB7XHJcblx0XHR3aWR0aDogODRycHg7XHJcblx0XHRoZWlnaHQ6IDEzMHJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjhycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2NXJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY29sbGVjdGlvbiB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRjlCQjAwIDAlLCAjRjlCQjAwIDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNpbWlsYXIge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI0ZGOTk2NiAwJSwgI0ZGOTk2NiAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC50aGlzX2lzX2dvb2RzX3N0YXRlIC5kZWxldGUge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zZXRfc3RhdGUgdGV4dCB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmNoZWNrYm94LWl0ZW0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZ29vZHMtaW5mbyB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tc2hvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjRjBGMEYwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLWltYWdlcyB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLWltYWdlcyAuaW52YWxpZC1nb29kcyB7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1pbnZhbGlkLWdvb2RzIHtcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNzVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXIge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZSAucHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdH1cclxuXHJcblx0Lm1lbWJlci1wcmljZSB7XHJcblx0XHR3aWR0aDogNjRycHg7XHJcblx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwMDAgMCUsICMyYzJjMmMgMTAwJSksIGxpbmVhci1ncmFkaWVudCgjMjgyODI4LCAjMjgyODI4KTtcclxuXHRcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsLCBub3JtYWw7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdGNvbG9yOiAjZmVmZWZlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0fVxyXG5cclxuXHQucHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXIgdGV4dCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQub2ZmbGluZV9wYXktb25saW5lX3BheS1jaGVja2VkTnVtYmVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5vZmZsaW5lX3BheS1vbmxpbmVfcGF5IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQub25saW5lX3BheSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZE51bWJlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0d2lkdGg6IDE4MHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRib3JkZXI6IHNvbGlkIDFycHggI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTnVtYmVyIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuaW5wdXQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LmlucHV0IC5jYXJ0X251bSB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1cnB4O1xyXG5cdH1cclxuXHJcblx0LnN1YnRyYWN0LFxyXG5cdC5hZGQge1xyXG5cdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cclxuXHQucG9yZHVjdC1pdGVtLW5hbWUge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucyB7XHJcblx0XHR3aWR0aDogMzYwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCAxNnJweDtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucy1uYW1lIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0fVxyXG5cclxuXHQudmVyc2lvbnMtbmFtZS1pdGVtIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucy1uYW1lLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudW5mb2xkIHtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQubmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlciB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQubWFudGxlZCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuXHRcdHotaW5kZXg6IDUzO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5kaXNjb3VudHMtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRwYWRkaW5nLXRvcDogMjVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZGlzY291bnRzLWhpbnQge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jYXJkX2xpc3Qge1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuY2FyZC10aXRsZS1hbGwtY2FyZCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5tb3JlLWNhcmQge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1kaXNjb3VudCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDI1cnB4O1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmRlbGV0ZS1kaXNjb3VudCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LnNldHRsZW1lbnQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR6LWluZGV4OiAxMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnNldHRsZW1lbnQtaW5mbyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0fVxyXG5cclxuXHQudG90YWwtZGlzY291bnQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC50b3RhbC1kaXNjb3VudCAudG90YWwge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDBycHg7XHJcblx0fVxyXG5cclxuXHQudG90YWwtZGlzY291bnQgLnRvdGFsIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LnVzZS1kaXNjb3VudCB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51c2UtZGlzY291bnQtZGV0YWlsZWQge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5nb1NldHRsZW1lbnQge1xyXG5cdFx0d2lkdGg6IDE4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM1cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zZXRfZ29vZHNfc3BlY19jb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDUyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5pc1Nob3ctY29udGVudCB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5zcGVjcy10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdHBhZGRpbmctdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5zcGVjcy1oaW50IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyMnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5zcGVjcyB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAzMHJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQucGF5LXR4dCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0fVxyXG5cclxuXHQuc3BlY3MtY29udCB7XHJcblx0XHRtYXJnaW4tbGVmdDogLTMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0LnNwZWNzLWNvbnQtcGF5IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQubGkge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUycnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTJycHg7XHJcblx0XHRwYWRkaW5nOiAwIDI1cnB4O1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNmMGYwZjA7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG5cdFx0bWFyZ2luOiAyMHJweCAwIDAgMjBycHg7XHJcblx0fVxyXG5cclxuXHQuc3BlY3MtY29udC1wYXkgLmxpIHtcclxuXHRcdG1hcmdpbjogMCAwIDAgMzBycHg7XHJcblx0fVxyXG5cclxuXHQubGktaG92ZXIge1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNmYTM0NzU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZlOGYwO1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuc3BlY3MtY29udCAubGktZ3JheSB7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblxyXG5cdC5hZGQtY2FyZC10b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubGVmdC1oZWFkX2ltZyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMjQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0LWdvb2RzLWluZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC5nb29kcy1kaXNjb3VudHMge1xyXG5cdFx0d2lkdGg6IDE2MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzg4MzRmYSAwJSwgI2JjNjZmZiAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5nb29kLXByaWNlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubWFya2V0X3ByaWNlIHtcclxuXHRcdGNvbG9yOiAjRkYwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5tZW1iZXJfcHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxMHJweCAxMHJweCAwO1xyXG5cdH1cclxuXHJcblx0Lm1lbWJlcl90aXRsZSB7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnN0b3JlLXNrdV9ubyB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5za3Vfbm8ge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LmlzU2hvdyAuc3BlY3MtY29udC1wYXkge1xyXG5cdFx0cGFkZGluZzogMzBycHggMCAwO1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQuaXNTaG93IC5zcGVjcy1jb250IHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0LmlzU2hvdyAuc3BlY3MtY29udC1wYXkgLnBheS10eHQge1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5jaGFuZ2VOdW1iZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDA7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZU51bWJlciAucGF5LXR4dCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA0MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0Lm51bWJlci1oaW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5udW1iZXItaGludCB0ZXh0IHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZS1pbnB1dCB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5udW1iZXItaW5wdXQge1xyXG5cdFx0aGVpZ2h0OiA4NHJweDtcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym9yZGVyLXRvcDogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0Lm51bWJlci1pbnB1dCBpbnB1dCB7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRib3JkZXI6IDA7XHJcblx0fVxyXG5cclxuXHQucmVkdWNlLFxyXG5cdC5hZGQtbnVtYmVyIHtcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0XHRmb250LXNpemU6IDU2cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5rZWVwLW9yZGVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHR9XHJcblxyXG5cdC5idXR0b24ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmtlZXAtb3JkZXItYnV0dG9uIHtcclxuXHRcdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5kZWxldGUtc2VlLW1vcmUtZGlzY291bnQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAyMHJweDtcclxuXHRcdHJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5kZWxldGUtc2VlLW1vcmUtZGlzY291bnQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC50aGlzX3Nob3dfZGlzY291bnQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiA4MHJweDtcclxuXHR9XHJcblxyXG5cdC5zaG93X2Rpc2NvdW50X3RpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5zaG93X2Rpc2NvdW50X2NvbnRlbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuZGlzY291bnRfc2FsZV9pbmZvIHtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDE1MHJweCAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5kaWNvdW50X3ByaWNlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjBycHggMDtcclxuXHR9XHJcblxyXG5cdC5hbGxfZGlzY291bnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAwIDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmFsbF9kaXNjb3VudCAuc2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LmRpc2NvdW50LWhpbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0Lmlfa25vdyB7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNTg1Njg0MDMyM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=