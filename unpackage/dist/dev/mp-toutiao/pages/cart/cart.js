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
      show_discount: false //显示优惠的弹窗
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
      } else
      {//如果是没有全选，就循环判定购物车的分类列表是否有全选的，有，先导入，没有再循环内部的商品是否选中
        for (var _i6 = 0; _i6 < sku_list.length; _i6++) {
          if (sku_list[_i6].all_checked) {//分类列表是否有全选的，有，先导入，没有再循环内部的商品是否选中
            if (sku_list[_i6].act_id) {
              act_id = sku_list[_i6].act_id;
            }
            cart_info = {
              act_id: act_id,
              cart_id_list: sku_list[_i6].cart_id_list };

            cart_id_list.push(cart_info);
          } else {//循环内部的商品是否选中
            var cart_list = [];
            for (var j = 0; j < sku_list[_i6].goods_list.length; j++) {
              if (sku_list[_i6].act_id) {
                act_id = sku_list[_i6].act_id;
              }
              if (sku_list[_i6].goods_list[j].checked) {
                cart_list.push(sku_list[_i6].goods_list[j].cart_id);
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
      for (var _i7 in that.spec) {
        for (var k in that.spec[_i7].attr) {
          if (that.spec[_i7].attr[k] == 1) {
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
          that.get_user_cart();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlP2YwYzIiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT82NjIzIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/OWNiYSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlP2FkYjQiLCJ1bmktYXBwOi8vL3BhZ2VzL2NhcnQvY2FydC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT81YjE1Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NGYwZiJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSx5RjtBQUNBQSxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDd0Q7QUFDTDtBQUNxQzs7O0FBR3hGO0FBQytLO0FBQy9LLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2dkJBO0FBd3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWx4QkE7QUFteEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2eEJBO0FBd3hCQTtBQUNBO0FBQ0E7QUFDQSxLQTN4QkEsRUFqSEEsRTs7Ozs7Ozs7Ozs7O0FDamJBO0FBQUE7QUFBQTtBQUFBO0FBQWcrQixDQUFnQiwwN0JBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXAvQjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2NhcnQvY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9jYXJ0L2NhcnQudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBmMDBhZGY0XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NhcnQvY2FydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjYXJ0XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcC1iYXJcIlxyXG5cdFx0IDpzdHlsZT1cIlt7J2hlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLXRvcCc6bWVudVRvcCsncHgnLCdsaW5lLWhlaWdodCc6bWVudUhlaWdodCsncHgnLCdwYWRkaW5nLWJvdHRvbSc6MTArJ3B4JywnYmFja2dyb3VuZC1jb2xvcic6dG9wQmFja2dyb3VuZENvbG9yLCdjb2xvcic6Y29sb3J9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJhY2stdGl0bGVcIiA6c3R5bGU9XCJbeydoZWlnaHQnOm1lbnVIZWlnaHQrJ3B4J31dXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrXCIgQGNsaWNrPVwiZ29CYWNrXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImJhY2tJbWFnZVwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+IHt7dGl0bGV9fSA8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC10by1uYXZcIiA6c3R5bGU9XCJbeyd0b3AnOm1lbnVCb3R0b20rMTArJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1uYW1lXCIgdi1mb3I9XCIoaSxrKSBpbiBwcm9kdWN0TmFtZUxpc3RcIiA6a2V5PSdrJyA6Y2xhc3M9XCJ7Y2hlY2tlZFBvcmR1Y3QgOmJ0bm51bSA9PSBrfVwiIEB0YXA9XCJjaGFuZ2VQb3JkdWN0KGspXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tbmFtZS1saW5lXCI+XHJcblx0XHRcdFx0XHR7eyBpLm5hbWUgfX0gPHRleHQ+KHt7aS5udW1iZXJ9fSk8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7Y2hlY2tlZExpbmUgOmJ0bm51bSA9PSBrfVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldz48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNhcnQtY29udGVudFwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzptZW51Qm90dG9tKzU4KydweCd9XVwiPlx0XHRcdFxyXG5cdFx0XHQ8IS0tIOi0reeJqei9puS4uuepuiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJlbXB0eS1jYXJ0XCIgdi1pZj1cInNrdV9saXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wdHktY2FydC1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY2FydEJnLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVtcHR5LWNhcnQtdGV4dFwiPiDotK3nianovabov5jmmK/nqbrnmoTlk59+IDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvLXN0cm9sbFwiIEB0YXA9J2dvVG9Hb29kc0NsYXNzZml5Jz4g5Y676YCb6YCbIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOi0reeJqei9puS4jeS4uuepuiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LWhhdmUtcHJvZHVjdFwiIHYtZWxzZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVuZC1jb250XCIgOmNsYXNzPVwie2RpczpidG5udW0gPT0gaW5kZXh9XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcHJvZHVjdE5hbWVMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmQtdG9wXCIgQHRhcD0nZ29Ub0dhaW4nPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhbi1yZWNlaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+5oKo5pyJPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dFwiPnt7Z2V0X2NvdW50fX3lvKDkuJPlsZ7kvJjmg6DliLg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0c1wiPuWPr+mihuWPln48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnby1yZWNlaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0cmlhbmdsZS1saW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXJhY3RlclwiPuWOu+mihuWPliZuYnNwOz48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvcGluZy1jYXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FydC1zaG9wcGluZy1zaG93XCIgdi1mb3I9XCIoaXRlbXMsaykgaW4gY29udGVudExpc3Quc2t1X2xpc3RcIiA6a2V5PSdrJz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWFqOmAiSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVjay1zZWUtbW9yZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGNoZWNrYm94ICBjb2xvcj0nIzAwN0FGRicgOmNoZWNrZWQ9XCJpdGVtcy5hbGxfY2hlY2tlZFwiIEB0YXA9J2NoZWNrZWRfY2xhc3NfYWxsKGspJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBAdGFwPSdnb29kc0NsYXNzZml5KGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlKSc+IHt7aXRlbXMuY2F0ZWdvcnlfdGl0bGV9fSA+IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLW9uLWl0ZW1cIiB2LWlmPVwiaXRlbXMuY2FyZHMubGVuZ3RoPjBcIiBAdGFwPVwiY2hhbmdlQWN0aXZpdHkoMCxpdGVtcy5jYXJkcyxpdGVtcy5hY3RfaW5mbylcIj4g6aKG5Yi4IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLW9uLWl0ZW1cIiB2LWVsc2UtaWY9XCJpdGVtcy5hY3RfaW5mb1wiIEB0YXA9XCJjaGFuZ2VBY3Rpdml0eSgxLGl0ZW1zLmFjdF9pbmZvKVwiPiDnnIvkvJjmg6AgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOS8mOaDoOa0u+WKqCAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtb2ZmZXJcIiB2LWlmPVwiaXRlbXMuYWN0X2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHktaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHNcIiB2LWlmPVwiaXRlbXMuYWN0X2luZm8uaXNfY291bnRkb3duPT0xXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvblwiPiDpmZDml7YgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7ot53mtLvliqjnu5PmnZ/ov5jliakgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGl2aXR5LXRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRheSBob3VzZXNcIj4ge3sgaXRlbXMuZGF5IH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvdXNlc1wiPiB7eyBpdGVtcy5ob3VzZSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWNvbmRcIj4ge3sgaXRlbXMuc2Vjb25kIH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1pbnV0ZVwiPiB7eyBpdGVtcy5taW51dGUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgdi1mb3I9XCIoY29udGVudCx0eXBlKSBpbiBpdGVtcy5hY3RfaW5mby5hY3RfcnVsZVwiIDprZXk9J3R5cGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb25cIj4ge3tjb250ZW50LmNhdGVnb3J5fX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eVwiPiB7e2NvbnRlbnQucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDllYblk4HlsZXnpLogLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tY29udGVudC1hbGxcIiB2LWZvcj1cIihpLGlzKSBpbiBpdGVtcy5nb29kc19saXN0XCIgOmtleT0naXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tY29udGVudFwiIEBsb25ncHJlc3M9J3NldGdvb2RzU3RhdGUoayxpcyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1pdGVtXCIgY29sb3I9JyMwMDdBRkYnIDpjaGVja2VkPVwiaS5jaGVja2VkXCIgQHRhcD0nY2hhbmdlQ2hlY2soayxpcyknIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tc2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0taW1hZ2VzXCIgQHRhcD0nZ29Ub0dvb2RzKGkuU2t1X2lkLGkuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRfaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hbWUtcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tbmFtZVwiPiB7e2kuZ29vZHNfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9uc1wiICBAdGFwPSdzaG93U2V0U3BlYyhpLlNrdV9pZCxpLmVuY3J5cHRlZF9pZCxpLmNhcnRfbnVtLGkuY2FydF9pZCknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmVyc2lvbnMtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lLWl0ZW1cIiB2LWZvcj1cIihpcyx6KSBpbiBpLnNwZWNfbmFtZVwiIDprZXk9J3onPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e3p9fTp7e2lzfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1bmZvbGRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3VuZm9sZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx077+lPHRleHQgY2xhc3M9XCJwcmljZVwiPnt7aS5zYWxlX3ByaWNlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVtYmVyLXByaWNlXCIgdi1pZj1cImkubWVtYmVyXCI+5Lya5ZGY5Lu3PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCoge3sgaS5taW5fYnV5X2xpbWl0IH19IOS7tui1t+i0rSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx06ZmQ6LSte3tpLm1heF9idXlfbGltaXR9feS7tiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cImkuY3V0X3ByaWNlPDBcIj4g5q+U5Yqg6LSt5pe26ZmN5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlLWlmPVwiaS5jdXRfcHJpY2U+MFwiPiDmr5TliqDotK3ml7bmtqjku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXktY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvZmZsaW5lX3BheS1vbmxpbmVfcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib25saW5lX3BheVwiPuWcqOe6v+aUr+S7mO+/pXt7IGkub25saW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9mZmxpbmVfcGF5XCI+5Yiw6Zmi5YaN5LuY77+le3sgaS5vZmZsaW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidHJhY3RcIiBAdGFwPVwic2V0TnVtYmVyKGkuY2FydF9pZCwtMSxrLGlzKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3N1YnRyYWN0LnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiY2FydF9udW1cIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ZGF0YS1rPSdrJyA6ZGF0YS1pcz0naXMnIDpkYXRhLWlkPSdpLmNhcnRfaWQnIHYtbW9kZWw9XCJpLmNhcnRfbnVtXCIgQGlucHV0PSdzZXRQb3JkdWN0TnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBtYXhsZW5ndGg9XCIyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZFwiIEB0YXA9XCJzZXROdW1iZXIoaS5jYXJ0X2lkLDEsayxpcylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9hZGQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19nb29kc19zdGF0ZVwiIHYtc2hvdz1cImkuaXNfc2hvd19zdGF0ZVwiIEB0YXA9J3NldGdvb2RzU3RhdGUoayxpcyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXNfaXNfZ29vZHNfc3RhdGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3Rpb24gc2V0X3N0YXRlXCIgdi1pZj1cIml0ZW1zLmNhdGVnb3J5X3N0YXR1cz09MVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IEB0YXA9J3NldFN0YXRlKDAsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7np7vlhaU8L3RleHQ+IDx0ZXh0PuaUtuiXjzwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2ltaWxhciBzZXRfc3RhdGVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMSxpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPiDnnIvnm7jkvLwgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlIHNldF9zdGF0ZVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdzZXRTdGF0ZSgyLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+IOWIoOmZpCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDlvLnnqpfkvJjmg6DmiJbogIXljaHliLggLS0+XHJcblx0XHRcdFx0XHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwibWFudGxlZFwiIHYtaWY9XCJpc1Nob3dEaXNjb3VudFwiIHNjcm9sbC15PVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2hlaWdodCc6Y2FyZExpc3QuY2FyZHM/aGVpZ2h0LzIrJ3B4JzpoZWlnaHQvNCsncHgnfV1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRzLXRpdGxlXCI+IOS/g+mUgOS8mOaDoCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy1oaW50XCI+Kua4qemmqOaPkOekujrmu6Hlh4/jgIHmipjmiaPjgIHljaHliLjlnYflj6/lj6DliqDkvb/nlKg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtb2ZmZXJcIiB2LWlmPVwiYWN0X2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWZpYy1hY3Rpdml0eS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1pZj1cImFjdF9pbmZvLmlzX2NvdW50ZG93bj09MVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1zcGVjaWZpYy1hY3Rpdml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IOmZkOaXtiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD7ot53mtLvliqjnu5PmnZ/ov5jliakgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aXZpdHktdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXkgaG91c2VzXCI+IHt7IGl0ZW1zLmRheSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhvdXNlc1wiPiB7eyBpdGVtcy5ob3VzZSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlY29uZFwiPiB7eyBpdGVtcy5zZWNvbmQgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaW51dGVcIj4ge3sgaXRlbXMubWludXRlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHYtZm9yPVwiKGNvbnRlbnQsdHlwZSkgaW4gYWN0X2luZm8uYWN0X3J1bGVcIiA6a2V5PSd0eXBlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvblwiPiB7e2NvbnRlbnQuY2F0ZWdvcnl9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj4ge3tjb250ZW50LnJ1bGVfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmRfbGlzdFwiIHYtaWY9XCJjYXJkTGlzdC5jYXJkc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmQtdGl0bGUtYWxsLWNhcmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlbGF0ZWQtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz4g5Y+v55So5LyY5oOg5Yi4XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibW9yZS1jYXJkXCIgQHRhcD0nZ29Ub0dhaW4nPiDmm7TlpJrkvJjmg6DliLggPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRpY2tldFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgOmNhcmRzTGlzdD0nY2FyZExpc3QuY2FyZHMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdCA6dGltZV9ub3c9J2NhcmRMaXN0LnRpbWVfbm93JyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0IEBzaG93VGlja2V0PSdzaG93VGlja2V0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgQGdldENhcmRzPSdnZXRDYXJkcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0IEB1c2VDYXJkID0gJ3VzZUNhcmQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RpY2tldD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLWRpc2NvdW50XCIgQHRhcD0nY2hhbmdlQWN0aXZpdHkoMiknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g6L+H5pyf5aSx5pWI55qE5ZWG5ZOBIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG9waW5nLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LXNob3BwaW5nLXNob3dcIiB2LWZvcj1cIihpdGVtcyxrKSBpbiBjb250ZW50TGlzdC5za3VfbGlzdFwiIDprZXk9J2snIHYtc2hvdz1cIml0ZW1zLmNhdGVnb3J5X3N0YXR1cz09MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrLXNlZS1tb3JlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD4g5aSx5pWI55qE5ZWG5ZOBICA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZS1nb29kc1wiIEB0YXA9J2RlbGV0ZUludmFsaWQoayxpcyknPiDmuIXnqbrlpLHmlYjllYblk4EgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1jb250ZW50LWFsbFwiIHYtZm9yPVwiKGksaXMpIGluIGl0ZW1zLmdvb2RzX2xpc3RcIiA6a2V5PSdpcyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1jb250ZW50XCIgQGxvbmdwcmVzcz0nc2V0Z29vZHNTdGF0ZShrLGlzKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLXNob3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLWltYWdlc1wiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuaGVhZF9pbWdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnZhbGlkLWdvb2RzXCI+PHZpZXcgY2xhc3M9XCJkZWxldGUtaW52YWxpZC1nb29kc1wiPuW3suWkseaViDwvdmlldz48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hbWUtcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tbmFtZVwiPiB7e2kuZ29vZHNfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9uc1wiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnMtbmFtZS1pdGVtXCIgdi1mb3I9XCIoaXMseikgaW4gaS5zcGVjX25hbWVcIiA6a2V5PSd6Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3t6fX06e3tpc319XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidW5mb2xkXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy91bmZvbGQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTvv6U8dGV4dCBjbGFzcz1cInByaWNlXCI+e3tpLnNhbGVfcHJpY2V9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW1iZXItcHJpY2VcIiB2LWlmPVwiaS5tZW1iZXJcIj7kvJrlkZjku7c8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1cmNoYXNlTGltaXRhdGlvbk51bWJlclwiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KiB7eyBpLm1pbl9idXlfbGltaXQgfX0g5Lu26LW36LStLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTpmZDotK17e2kubWF4X2J1eV9saW1pdH195Lu2IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwiaS5jdXRfcHJpY2U8MFwiPiDmr5TliqDotK3ml7bpmY3ku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9XCJpLmN1dF9wcmljZT4wXCI+IOavlOWKoOi0reaXtua2qOS7t++/pXt7aS5jdXRfcHJpY2V9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib2ZmbGluZV9wYXktb25saW5lX3BheS1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvbmxpbmVfcGF5XCI+5Zyo57q/5pSv5LuY77+le3sgaS5vbmxpbmVfcGF5KmkuY2FydF9udW0gfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib2ZmbGluZV9wYXlcIj7liLDpmaLlho3ku5jvv6V7eyBpLm9mZmxpbmVfcGF5KmkuY2FydF9udW0gfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJ0cmFjdFwiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImNhcnRfbnVtXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OmRhdGEtaz0naycgOmRhdGEtaXM9J2lzJyB2LW1vZGVsPVwiaS5jYXJ0X251bVwiIEBpbnB1dD0nc2V0UG9yZHVjdE51bWJlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbWF4bGVuZ3RoPVwiMlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYWRkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZ29vZHNfc3RhdGVcIiB2LXNob3c9XCJpLmlzX3Nob3dfc3RhdGVcIiBAdGFwPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzX2lzX2dvb2RzX3N0YXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaW1pbGFyIHNldF9zdGF0ZVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdzZXRTdGF0ZSgxLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+IOeci+ebuOS8vCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWxldGUgc2V0X3N0YXRlXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IEB0YXA9J3NldFN0YXRlKDIsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz4g5Yig6ZmkIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpYWwtcGVyZm9ybWFuY2VcIiB2LWlmPVwic3BlY2lhbExpc3QuY29udGVudC5sZW5ndGg+MCYmc2t1X2xpc3QubGVuZ3RoPT0wXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsTGlzdFwiIHYtaWY9XCJzcGVjaWFsTGlzdC50eXBlPT0xXCI+XHJcblx0XHRcdFx0XHQ8c3dpcGVyIGluZGljYXRvci1kb3RzIGluZGljYXRvci1hY3RpdmUtY29sb3I9XCIjZmY2Njk5XCIgYXV0b3BsYXkgaW50ZXJ2YWw9JzUwMDAnIGR1cmF0aW9uPSczMDAwJyBjaXJjdWxhcj5cclxuXHRcdFx0XHRcdFx0PHN3aXBlci1pdGVtIGNsYXNzPVwic3dpcGVyLWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBzcGVjaWFsTGlzdC5jb250ZW50XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2l0ZW0uaW1nXCIgbW9kZT1cIndpZHRoRml4XCIgPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHRcdFx0XHQ8L3N3aXBlcj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNvbW1lbmQtdG8teW91XCIgdi1pZj1cInByb2R1Y3RMaXN0c1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVsYXRlZC10aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+5Li65L2g5o6o6I2QPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YmplY3QtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGdvb2RzU2hvdyA6Ym9yZGVyUmFkaXVzPTI0IFxyXG5cdFx0XHRcdFx0IDpyZXF1ZXN0VXJsPSdyZXF1ZXN0VXJsJyA6d2lkdGg9MzUwIDpwb3JkdWN0TGlzdD0ncHJvZHVjdExpc3RzJz5cclxuXHRcdFx0XHRcdDwvZ29vZHNTaG93PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOWFqOmAieWSjOe7k+eulyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZXR0bGVtZW50XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXR0bGVtZW50LWluZm9cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWFsbC1nb29kc1wiIEB0YXA9J2NoYW5nZV9hbGxfY2FydCcgPlxyXG5cdFx0XHRcdFx0XHQ8Y2hlY2tib3ggIGNvbG9yPScjMDA3QUZGJyA6Y2hlY2tlZD1cImFsbGNoZWNrZWRcIiAvPiAgPHRleHQgPiDlhajpgIkgPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbC1kaXNjb3VudFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvdGFsXCI+5ZCI6K6hIDogPHRleHQ+IO+/pXt7IG9yZGVyX2luZm8ub2ZmX3NhbGUgfHwgMCB9fSA8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2UtZGlzY291bnRcIiB2LWlmPVwib3JkZXJfaW5mby5zYWxlX2luZm8ubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHTkvJjmg6Dlh486IO+/pXt7IG9yZGVyX2luZm8uc2FsZV9wcmljZSB8fDAgfX0gXHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1c2UtZGlzY291bnQtZGV0YWlsZWRcIiBAdGFwPSd1c2VyX2Rpc2NvdW50Jz7kvJjmg6DmmI7nu4Y8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29TZXR0bGVtZW50XCIgQHRhcD0nZ29Ub1NldHRsZW1lbnQoKSc+5Y6757uT566XPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDkv67mlLnllYblk4Hop4TmoLwgLS0+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJzZXRfZ29vZHNfc3BlY19jb250ZW50XCIgc2Nyb2xsLXk9XCJ0cnVlXCIgdi1pZj1cInRoaXNfc2hvd19nb29kc19zcGVjXCIgOnN0eWxlPVwiW3snaGVpZ2h0JzpoZWlnaHQvMisncHgnfV1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpc1Nob3ctY29udGVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLWNhcmQtdG9wXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxlZnQtaGVhZF9pbWdcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2dvb2RzQ29udGVudExpc3Quc2t1LmhlYWRfaW1nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtZ29vZHMtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzLWRpc2NvdW50c1wiIHYtaWY9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5hY3QubGVuZ3RoIT0wXCIgQHRhcD0nc2VlTW9yZSgwKSc+IOWPguS4juS8mOaDoCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZC1wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWFya2V0X3ByaWNlXCI+77+le3tnb29kc0NvbnRlbnRMaXN0LnNrdS5zYWxlX3ByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW1iZXJfcHJpY2VcIiB2LWlmPVwiZ29vZHNDb250ZW50TGlzdC5za3UubWVtYmVyLm1lbWJlcl90aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW1iZXJfdGl0bGVcIiA+e3tnb29kc0NvbnRlbnRMaXN0LnNrdS5tZW1iZXIubWVtYmVyX3RpdGxlfX08L3RleHQ+77+le3tnb29kc0NvbnRlbnRMaXN0LnNrdS5tZW1iZXIucHJpY2V9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN0b3JlLXNrdV9ub1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHYtc2hvdz1cImdvb2RzQ29udGVudExpc3Quc2t1LnN0b3JlPD0xMDBcIj7lupPlrZgge3tnb29kc0NvbnRlbnRMaXN0LnNrdS5zdG9yZX195Lu2PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2t1X25vXCI+57yW5Y+3OiB7e2dvb2RzQ29udGVudExpc3Quc2t1LnNrdV9ub319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSA+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLWNvbnRlbnRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBnb29kc0NvbnRlbnRMaXN0LnNwZWNfdmFsdWVcIiA6ZGF0YS1pbmRleD0naW5kZXgnIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLm5hbWV9fVxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJzcGVjcy1oaW50XCIgPuivt+mAieaLqXt7aXRlbS5uYW1lfX08L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiB2LWZvcj1cIihpcyxzaW5kZXgpIGluIGl0ZW0uYXR0clwiIDprZXk9XCJzaW5kZXhcIiBcclxuXHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiW3NwZWNbaW5kZXhdLmF0dHJbc2luZGV4XT09MT8nbGktaG92ZXInOnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XT09MD8nbGktZ3JheSc6JyddXCJcclxuXHRcdFx0XHRcdFx0XHQgQHRhcD1cImNoYW5nZVNwZWMoaW5kZXgsc2luZGV4KVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tpc319ICBcclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY3MtY29udC1wYXlcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGF5LXR4dFwiPuaUr+S7mOaWueW8jzwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiBAdGFwPSdjaGFuZ2VQYXkoMCknIDpjbGFzcz1cIltwYXlfdHlwZT09MHx8cGF5X3R5cGU9PTI/J2xpLWhvdmVyJzonJ11cIj5cclxuXHRcdFx0XHRcdFx06aKE57qm6YeRXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlUGF5KDEpJyA6Y2xhc3M9XCJbcGF5X3R5cGU9PTF8fHBheV90eXBlPT0yPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOWFqOasvuS7mFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLWNvbnQtcGF5XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBheS10eHRcIj7pooblj5bmlrnlvI88L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlQ2xhc3MoMCknIDpjbGFzcz1cIltjbGFzc190eXBlPT0wPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOWIsOmZoumihuWPllxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIEB0YXA9J2NoYW5nZUNsYXNzKDEpJyA6Y2xhc3M9XCJbY2xhc3NfdHlwZT09MT8nbGktaG92ZXInOicnXVwiPlxyXG5cdFx0XHRcdFx0XHTpgq7lr4RcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2VOdW1iZXJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGF5LXR4dFwiPuaVsOmHjzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibnVtYmVyLWhpbnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQ+IHt7IGdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQgfX0g5Lu26LW36LStPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD7pmZDotK0ge3sgZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCB9fSDku7Y8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1pbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZHVjZVwiXHJcblx0XHRcdFx0XHRcdCBAdGFwPVwicmVkdWNlKC0xKVwiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWNvbG9yJzpzZXROZXdHb29kc051bWJlcj09Z29vZHNDb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdCA/ICcjZGRkZGRkJzonIzk5OTk5OSd9XVwiPi08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibnVtYmVyLWlucHV0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwic2V0TmV3R29vZHNOdW1iZXJcIiB2YWx1ZT0xIEBpbnB1dD0nY2hhbmdlR29vZHNOdW1iZXInIC8+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGQtbnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0IEB0YXA9XCJyZWR1Y2UoMSlcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1jb2xvcic6c2V0TmV3R29vZHNOdW1iZXI9PWdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQgPyAnI2RkZGRkZCc6JyM5OTk5OTknfV1cIj4rPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImtlZXAtb3JkZXJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cImtlZXAtb3JkZXItYnV0dG9uXCIgcGxhaW49XCJ0cnVlXCIgQHRhcD0nb3JkZXJTZXQoKSc+56Gu5a6aPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlLXNlZS1tb3JlLWRpc2NvdW50XCIgQHRhcD0nc2VlTW9yZSgxKSc+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9kZWxldGUucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PCEtLSDkvJjmg6DmmI7nu4YgLS0+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgdi1pZj1cInNob3dfZGlzY291bnRcIiA6c3R5bGU9XCJbeydoZWlnaHQnOmhlaWdodC80KydweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRoaXNfc2hvd19kaXNjb3VudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvd19kaXNjb3VudF90aXRsZVwiPuS8mOaDoOaYjue7hjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZGlzY291bnRfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudF9zYWxlX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaWNvdW50X3ByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fdGl0bGVcIj7llYblk4HmgLvpop08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIj57e29yZGVyX2luZm8udG90YWxfcHJpY2V9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpY291bnRfcHJpY2VcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcmRlcl9pbmZvLnNhbGVfaW5mb1wiIDprZXk9J2luZGV4Jz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNhbGVfaW5mb190aXRsZVwiPnt7aXRlbS5jYXRlZ29yeX19IHt7aXRlbS5ydWxlX25hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIiB2LWlmPVwiaXRlbS50b29sc19pZD09J2dpdmluZydcIj4g77+le3tpdGVtLnNhbGVfcHJpY2V9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIiB2LWVsc2U+IC3vv6V7e2l0ZW0uc2FsZV9wcmljZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbF9kaXNjb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX3RpdGxlXCI+IOS8mOaDoOWQiOiuoSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fZGlzY291bnRfcHJpY2VcIj4g77+le3tvcmRlcl9pbmZvLnNhbGVfcHJpY2V9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudC1oaW50XCI+5Lul5LiK5LyY5oOg5LiN5YyF5ZCr56ev5YiG44CB5Za16LGG44CB5L2Z6aKd562J55So5oi36LWE5Lqn5oq15omj77yM6LWE5Lqn5oq15omj6K+35Zyo57uT566X6aG16Z2i5p+l55yLPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImlfa25vd1wiIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIm1pbmlcIiBAdGFwPSdJS25vdyc+IOaIkeefpemBk+S6hiA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZ29vZHNTaG93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dvb2RzU2hvdy52dWVcIjtcclxuXHRpbXBvcnQgdGlja2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RpY2tldC52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGdvb2RzU2hvdyAsXHJcblx0XHRcdHRpY2tldFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVudVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1lbnVUb3A6IDAsXHJcblx0XHRcdFx0bWVudUhlaWdodDogMCxcclxuXHRcdFx0XHRtZW51TGVmdDogMCxcclxuXHRcdFx0XHRtZW51Qm90dG9tOiAwLFxyXG5cdFx0XHRcdGJhck5hbWU6ICdiYWNrJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHR0b3BCYWNrZ3JvdW5kQ29sb3I6ICcjMjIyMjIyJyxcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdGJhY2tJbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3JldHVybi5wbmcnLFxyXG5cdFx0XHRcdHRpdGxlOiAn6LSt54mp6L2mJyxcclxuXHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0cHJvZHVjdExpc3RzOiBbXSxcclxuXHRcdFx0XHRwcm9kdWN0TmFtZUxpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflhajpg6gnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn6ZmN5Lu3JyxcclxuXHRcdFx0XHRcdFx0bnVtYmVyOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WMu+e+jicsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfmiqTogqTlk4EnLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0YnRubnVtOiAwLFxyXG5cdFx0XHRcdGNvbnRlbnRMaXN0OiB7fSxcclxuXHRcdFx0XHRhbGxjaGVja2VkOiBmYWxzZSwvL+WFqOmAiVxyXG5cdFx0XHRcdGlzU2hvd0Rpc2NvdW50OmZhbHNlLC8v5pi+56S65LyY5oOg5oiW5Y2h5Yi4XHJcblx0XHRcdFx0cmVxdWVzdFVybDogJycsXHJcblx0XHRcdFx0b2Zmc2V0OiAwLFxyXG5cdFx0XHRcdHNrdV9saXN0OltdLFxyXG5cdFx0XHRcdHNwZWNpYWxMaXN0Ont9LC8v5bm/5ZGKXHJcblx0XHRcdFx0Z2V0X2NvdW50OjAsLy/lj6/pooblj5bljaHliLjmlbDph49cclxuXHRcdFx0XHRjYXJkTGlzdDpbXSwvL+WNoeWIuOWIl+ihqFxyXG5cdFx0XHRcdGFjdF9pbmZvOnt9LFxyXG5cdFx0XHRcdHVzZXNfY2FyZExpc3Q6W10sXHJcblx0XHRcdFx0dGhpc19zaG93X2dvb2RzX3NwZWM6ZmFsc2UsLy/mmL7npLrkv67mlLnllYblk4Hop4TmoLxcclxuXHRcdFx0XHRnb29kc0NvbnRlbnRMaXN0OiBbXSxcclxuXHRcdFx0XHRzcGVjOltdLFxyXG5cdFx0XHRcdHBheV90eXBlOiAxLCAvL+aUr+S7mOaWueW8jyAgMOmihOe6pumHkSAxIOWFqOasviAyIOWFqOmAiVxyXG5cdFx0XHRcdGNsYXNzX3R5cGU6MCwvL+mihuWPluaWueW8jyAw5Yiw6ZmiIDHpgq7lr4RcclxuXHRcdFx0XHRzZXROZXdHb29kc051bWJlcjoxLC8v5L+u5pS55paw55qE5ZWG5ZOB5pWw6YePXHJcblx0XHRcdFx0ZW5jcnlwdGVkX2lkOicnLFxyXG5cdFx0XHRcdHNrdV9pZDowLFxyXG5cdFx0XHRcdGNhcnRfaWQ6MTYwLFxyXG5cdFx0XHRcdG9yZGVyX2luZm86e1xyXG5cdFx0XHRcdFx0c2FsZV9pbmZvOltdXHJcblx0XHRcdFx0fSwvL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdHNob3dfZGlzY291bnQ6ZmFsc2UsLy/mmL7npLrkvJjmg6DnmoTlvLnnqpdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQub2Zmc2V0ICs9IDE7XHJcblx0XHRcdHRoYXQuZ2V0TGlrZSgpXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbihvcHRpb24pIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3RcclxuXHRcdFx0dGhhdC5yZXF1ZXN0VXJsID0gdGhhdC5yZXF1ZXN0Lmdsb2JhbERhdGEucmVxdWVzdFVybFxyXG5cdFx0XHR0aGF0LmdldExpa2UoKVxyXG5cdFx0XHR0aGF0LmdldENhcmQoKVxyXG5cdFx0XHR0aGF0LmFkdmVydGlzaW5nKClcclxuXHRcdFx0dGhhdC5nZXRVc2VyQ2FydCgpXHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR0aGF0LmhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbkhlaWdodDtcclxuXHRcdFx0Ly8g5Yik5a6a6L+Q6KGM5bmz5Y+wXHJcblx0XHRcdGxldCBwbGF0Zm9ybSA9ICcnXHJcblx0XHRcdHN3aXRjaCAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0pIHtcclxuXHRcdFx0XHRjYXNlICdhbmRyb2lkJzpcclxuXHRcdFx0XHRcdHBsYXRmb3JtID0gJ2FuZHJvaWQnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdpb3MnOlxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnaW9zJ1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHBsYXRmb3JtID0gJ2FwcGxldCdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwbGF0Zm9ybSA9PSAnYXBwbGV0Jykge1xyXG5cdFx0XHRcdC8vIOiOt+WPluWxj+W5lemrmOW6plxyXG5cdFx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRsZXQgbWVudSA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVdpZHRoID0gbWVudS53aWR0aFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSBtZW51LnRvcFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVIZWlnaHQgPSBtZW51LmhlaWdodFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gbWVudS5sZWZ0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IG1lbnUuYm90dG9tXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IDkwXHJcblx0XHRcdFx0dGhhdC5tZW51VG9wID0gNTBcclxuXHRcdFx0XHR0aGF0Lm1lbnVIZWlnaHQgPSAzMlxyXG5cdFx0XHRcdHRoYXQubWVudUxlZnQgPSAyNzhcclxuXHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSA4MlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDov5Tlm55cclxuXHRcdFx0Z29CYWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFVzZXJDYXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2dldGNhcnQnLFxyXG5cdFx0XHRcdFx0dHlwZTogdGhhdC5idG5udW1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdGxldCBkYXkgPSAwXHJcblx0XHRcdFx0XHRcdGxldCBob3VzZSA9IDBcclxuXHRcdFx0XHRcdFx0bGV0IHNlY29uZCA9IDBcclxuXHRcdFx0XHRcdFx0bGV0IG1pbnV0ZSA9IDBcclxuXHRcdFx0XHRcdFx0Ly8gbGV0IGZvcm1lcl9za3VfbGlzdCA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImNvbnRlbnRMaXN0XCIpLnNrdV9saXN0O1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhmb3JtZXJfc2t1X2xpc3QpIC8v5Li65LqG5Yik5a6a5pWw5o2u5piv5ZCm5pyJ6YCJ5Lit55qE54q25oCBXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5za3VfbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uaXNfc2hvd19zdGF0ZSA9IGZhbHNlIC8v5pi+56S66K6i5Y2V5pON5L2cXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmFsbF9jaGVja2VkID0gZmFsc2UgLy/mmK/lkKblhajpgInlvZPliY3liIbnsbtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkID0gZmFsc2UgLy/mmK/lkKbpgInmi6lcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGRhdGEuc2t1X2xpc3RbaV0uYWN0X2luZm8pe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmRheSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAvIDYwIC8gMjQgJSAzMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5ob3VzZSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAvIDYwICUgMjQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uc2Vjb25kID0gcGFyc2VJbnQoKGRhdGEuc2t1X2xpc3RbaV0uYWN0X2luZm8ucmVzdF90aW1lKSAvIDYwICUgNjApXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0ubWludXRlID0gcGFyc2VJbnQoKGRhdGEuc2t1X2xpc3RbaV0uYWN0X2luZm8ucmVzdF90aW1lKSAlIDYwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhLnNrdV9saXN0W2ldKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnNrdV9saXN0ID0gZGF0YS5za3VfbGlzdFxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQucHJvZHVjdE5hbWVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5wcm9kdWN0TmFtZUxpc3RbaV0ubnVtYmVyID0gZGF0YS50eXBlX2NvdW50W2ldXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC5za3VfbGlzdCA9IFtdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pi+56S65Y+v5pON5L2c6K6i5Y2V5pWw5o2uXHJcblx0XHRcdHNldGdvb2RzU3RhdGU6IGZ1bmN0aW9uKGssIGlzKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5pc19zaG93X3N0YXRlID0gIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uaXNfc2hvd19zdGF0ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlhajpgInlvZPliY3liIbnsbtcclxuXHRcdFx0Y2hlY2tlZF9jbGFzc19hbGw6ZnVuY3Rpb24oayl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGFjdF9pZCA9ICcnXHJcblx0XHRcdFx0bGV0IGNoYW5nZV9jYXJkX2lkID0gW11cclxuXHRcdFx0XHRsZXQgY2FydCA9IHt9XHJcblx0XHRcdFx0bGV0IGFyciA9IFtdXHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCA9ICF0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkXHJcblx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCl7Ly/lhajpgIlcclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaV0uY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdFx0fWVsc2V7IC8v54K55Ye75riF56m65YWo6YCJXHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2ldLmNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdGFyci5wdXNoKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQpXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGZsYWcgPSBhcnIuZXZlcnkoKGl0ZW0saW5kZXgsYXJyKSA9PntcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtID09PSB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihmbGFnKXtcclxuXHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9ICF0aGF0LmFsbGNoZWNrZWRcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5nZXRfdXNlcl9jYXJ0KClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5oupXHJcblx0XHRcdGNoYW5nZUNoZWNrOiBmdW5jdGlvbihrLCBpcykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBhcnIgPSBbXVxyXG5cdFx0XHRcdGxldCBhbGxfYXJyID0gW11cclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNoZWNrZWQgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jaGVja2VkXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdGFyci5wdXNoKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpXS5jaGVja2VkKVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBmbGFnID0gYXJyLmV2ZXJ5KChpdGVtLGluZGV4LGFycikgPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g5aaC5p6c5b2T5YiG57G75LiL6Z2i55qE6K6i5Y2V6YO96YCJ5oup5LqGLOWImeW9k+WJjeWIhuexu+eahOWFqOmAieS4unRydWVcclxuXHRcdFx0XHRpZihmbGFnKXtcdFx0XHRcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZFxyXG5cdFx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCl7Ly/lvZPliY3orqLljZXkuLrpgInmi6nml7bliKTlrprmiYDmnInnmoTorqLljZXmmK/lkKblt7Lnu4/lhajpgIlcclxuXHRcdFx0XHRcdFx0Zm9yKGxldCBpPTA7aTx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0YWxsX2Fyci5wdXNoKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQpXHJcblx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0bGV0IGZsYWdzID0gYWxsX2Fyci5ldmVyeSgoaXRlbSxpbmRleCxhbGxfYXJyKSA9PntcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtID09PSB0cnVlXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmbGFnc1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuZ2V0X3VzZXJfY2FydCgpXHJcblx0XHRcdH0sXHRcclxuXHRcdFx0Ly8g57uT566X55qE5YWo6YCJXHJcblx0XHRcdGNoYW5nZV9hbGxfY2FydDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9ICF0aGF0LmFsbGNoZWNrZWRcclxuXHRcdFx0XHRpZih0aGF0LmFsbGNoZWNrZWQpe1xyXG5cdFx0XHRcdFx0Zm9yKGxldCBpPTA7aTx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRmb3IobGV0IGo9MDtqPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7aisrKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5nZXRfdXNlcl9jYXJ0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaj0wO2o8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDtqKyspe1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRzYWxlX2luZm86W11cclxuXHRcdFx0XHRcdH0vL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W6LSt54mp6L2m5Lu35qC8XHJcblx0XHRcdGdldF91c2VyX2NhcnQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgY2hhbmdlX2NhcnQgPSBbXVxyXG5cdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0Zm9yKGxldCBpPTA7aTx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRpZih0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkKXsgLy/lhYjliKTmlq3mmK/lkKbmnInlhajpgInkuobnmoTorqLljZVcclxuXHRcdFx0XHRcdFx0XHRsZXQgYWN0X2lkID0gJydcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FydF9pZCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnQgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RfaWQ6YWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OnRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uY2FydF9pZF9saXN0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZV9jYXJ0LnB1c2goY2FydClcclxuXHRcdFx0XHRcdFx0fSBlbHNle1xyXG5cdFx0XHRcdFx0XHRcdGZvcihsZXQgaj0wO2o8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDtqKyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQpeyAvL+WIpOWumumAieaLqeS6hueahOiuouWNlVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgYWN0X2lkID0gJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZih0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFjdF9pZCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkLnB1c2godGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNhcnRfaWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBjYXJ0ID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZDphY3RfaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OmNhcnRfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VfY2FydC5wdXNoKGNhcnQpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOidjYWxjdWxhdGUnLFxyXG5cdFx0XHRcdFx0Y2FydDpjaGFuZ2VfY2FydFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSlcclxuXHRcdFx0XHRcdFx0Ly8gdG90YWxfcHJpY2U6MCwvL+aAu+S7t1xyXG5cdFx0XHRcdFx0XHQvLyBzYWxlX3ByaWNlOjAsLy/mgLvorqHkvJjmg6BcclxuXHRcdFx0XHRcdFx0Ly8gaGRfZGlzY291bnQ6IDAsLy/mtLvliqjkvJjmg6AyMDIwLjExLjA0XHJcblx0XHRcdFx0XHRcdC8vIG9ubGluZV9wYXk6IDAsLy/lnKjnur/mlK/ku5hcclxuXHRcdFx0XHRcdFx0Ly8gb2ZmbGluZV9wYXk6IDAsLy/nur/kuIvmlK/ku5hcclxuXHRcdFx0XHRcdFx0Ly8gb2ZmX3NhbGU6IDAsLy/ljrvmjonkvJjmg6DlkI7lupTku5gyMDIwLjExLjAyXHJcblx0XHRcdFx0XHRcdC8vIHNhbGVfaW5mbzogW10vL+S8mOaDoOS/oeaBr1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSBkYXRhXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdHNhbGVfaW5mbzpbXVxyXG5cdFx0XHRcdFx0XHR9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGNoYW5nZV9jYXJ0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDljrvnu5PnrpdcclxuXHRcdFx0Z29Ub1NldHRsZW1lbnQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgc2t1X2xpc3QgPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0XHJcblx0XHRcdFx0bGV0IGNhcnRfaW5mbyA9IHt9IC8v5Y2V5p2h6LSt54mp6L2m55qE6YCJ5Lit55qE5pWw5o2uXHJcblx0XHRcdFx0bGV0IGFjdF9pZCA9ICcnIC8v5rS75YqoaWQgXHJcblx0XHRcdFx0bGV0IGNhcnRfaWRfbGlzdCA9IFtdIC8v6K6i5Y2VaWTliJfooahcclxuXHRcdFx0XHRpZih0aGF0LmFsbGNoZWNrZWQpeyAvL+WIpOWumui0reeJqei9puaYr+WQpuWFqOmAieS6hu+8jOWFqOmAieebtOaOpeWtmOWCqOWvueW6lOeahOi0reeJqei9pua0u+WKqGlk5ZKM6LSt54mp6L2maWRcclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8c2t1X2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdGlmKHNrdV9saXN0W2ldLmFjdF9pZCl7XHJcblx0XHRcdFx0XHRcdFx0YWN0X2lkID0gc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y2FydF9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdGFjdF9pZDphY3RfaWQsXHJcblx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OnNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdC5wdXNoKGNhcnRfaW5mbylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXsgLy/lpoLmnpzmmK/msqHmnInlhajpgInvvIzlsLHlvqrnjq/liKTlrprotK3nianovabnmoTliIbnsbvliJfooajmmK/lkKbmnInlhajpgInnmoTvvIzmnInvvIzlhYjlr7zlhaXvvIzmsqHmnInlho3lvqrnjq/lhoXpg6jnmoTllYblk4HmmK/lkKbpgInkuK1cclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8c2t1X2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdGlmKHNrdV9saXN0W2ldLmFsbF9jaGVja2VkKXsvL+WIhuexu+WIl+ihqOaYr+WQpuacieWFqOmAieeahO+8jOacie+8jOWFiOWvvOWFpe+8jOayoeacieWGjeW+queOr+WGhemDqOeahOWVhuWTgeaYr+WQpumAieS4rVxyXG5cdFx0XHRcdFx0XHRcdGlmKHNrdV9saXN0W2ldLmFjdF9pZCl7XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RfaWQgPSBza3VfbGlzdFtpXS5hY3RfaWRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y2FydF9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkOmFjdF9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDpza3VfbGlzdFtpXS5jYXJ0X2lkX2xpc3RcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0LnB1c2goY2FydF9pbmZvKVxyXG5cdFx0XHRcdFx0XHR9ZWxzZXsgLy/lvqrnjq/lhoXpg6jnmoTllYblk4HmmK/lkKbpgInkuK1cclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FydF9saXN0ID0gW11cclxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IGo9MDtqPHNrdV9saXN0W2ldLmdvb2RzX2xpc3QubGVuZ3RoO2orKyl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihza3VfbGlzdFtpXS5hY3RfaWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQgPSBza3VfbGlzdFtpXS5hY3RfaWRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmKHNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhcnRfbGlzdC5wdXNoKHNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2FydF9pZClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYoY2FydF9saXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0X2lkOmFjdF9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0OmNhcnRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydF9pZF9saXN0LnB1c2goY2FydF9pbmZvKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhjYXJ0X2lkX2xpc3QpXHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiY2FydF9pZF9saXN0XCIsIGNhcnRfaWRfbGlzdCk7IC8v5bCG5pWw5o2u5a2Y5YKo77yM5pa55L6/5Zyo56Gu6K6k6K6i5Y2V5pe25L2/55SoXHJcblx0XHRcdFx0Ly8g5riF6Zmk5pys5Zyw5a2Y55qE6LSt54mp6L2m5pWw5o2uXHJcblx0XHRcdFx0Ly8gdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdjb250ZW50TGlzdCcpO1xyXG5cdFx0XHRcdGlmKGNhcnRfaWRfbGlzdC5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHQvLyDnoa7orqTorqLljZVcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2NvbmZpcm1fb3JkZXIvY29uZmlybV9vcmRlcmAsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifor7fpgInmi6nllYblk4EnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS/ruaUueWVhuWTgeinhOagvFxyXG5cdFx0XHRzaG93U2V0U3BlYzogZnVuY3Rpb24oc2t1X2lkLGVuY3J5cHRlZF9pZCxudW1iZXIsY2FydF9pZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuZW5jcnlwdGVkX2lkID0gZW5jcnlwdGVkX2lkXHJcblx0XHRcdFx0dGhhdC5za3VfaWQgPSBza3VfaWRcclxuXHRcdFx0XHR0aGF0LmNhcnRfaWQgPSBjYXJ0X2lkXHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZ29vZHNzcHVkZXRhaWxzJyxcclxuXHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogZW5jcnlwdGVkX2lkLFxyXG5cdFx0XHRcdFx0c2t1X2lkOiBza3VfaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIiwgZGF0YSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZ29vZHNDb250ZW50TGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5zcGVjID0gdGhhdC5hc3NlbWJsZVNwZWMoZGF0YS5za3UudXNlcl9zcGVjLCAxKVxyXG5cdFx0XHRcdFx0XHR0aGF0LnBheV90eXBlID0gZGF0YS5za3UucGF5X3R5cGVcclxuXHRcdFx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlYyA9ICF0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjXHJcblx0XHRcdFx0XHRcdHRoYXQudXNlc19jYXJkTGlzdCA9IHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UuY2FyZF9saXN0XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KHJlcy5kYXRhLm1lc3NhZ2UpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye756Gu5a6a5L+u5pS56KeE5qC8XHJcblx0XHRcdG9yZGVyU2V0OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6J2NoYW5nY2FydCcsXHJcblx0XHRcdFx0XHR0eXBlOjEsXHJcblx0XHRcdFx0XHRjYXJ0X2lkOnRoYXQuY2FydF9pZCxcclxuXHRcdFx0XHRcdG51bTp0aGF0LnNldE5ld0dvb2RzTnVtYmVyLFxyXG5cdFx0XHRcdFx0c2t1X2lkOnRoYXQuc2t1X2lkLFxyXG5cdFx0XHRcdFx0aXNfcG9zdDp0aGF0LmNsYXNzX3R5cGUsXHJcblx0XHRcdFx0XHRidXlfdHlwZTp0aGF0LnBheV90eXBlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwic2hvcHBpbmdDYXJ0XCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2dvb2RzX3NwZWMgPSAhdGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlY1xyXG5cdFx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdHNhbGVfaW5mbzpbXVxyXG5cdFx0XHRcdFx0XHR9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vliqDlh4/mlbDlrZdcclxuXHRcdFx0cmVkdWNlOmZ1bmN0aW9uKGluZGV4KXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyICs9IGluZGV4XHJcblx0XHRcdFx0aWYodGhhdC5zZXROZXdHb29kc051bWJlciA+PSB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQpe1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdClcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9ZWxzZSBpZih0aGF0LnNldE5ld0dvb2RzTnVtYmVyIDwgdGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0KXtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDovpPlhaXmg7PopoHnmoTmlbDph49cclxuXHRcdFx0Y2hhbmdlR29vZHNOdW1iZXI6ZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IGV2ZW50LmRldGFpbC52YWx1ZVxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSB2YWx1ZVxyXG5cdFx0XHRcdGlmKHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPj0gdGhhdC5jb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdCl7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3UubWF4X2J1eV9saW1pdClcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9ZWxzZSBpZih0aGF0LnNldE5ld0dvb2RzTnVtYmVyIDwgdGhhdC5jb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdCl7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdClcclxuXHRcdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaUr+S7mOaWueW8j1xyXG5cdFx0XHRjaGFuZ2VQYXk6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5wYXlfdHlwZSA9IGluZGV4XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZUNsYXNzOmZ1bmN0aW9uKGluZGV4KXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmNsYXNzX3R5cGUgPSBpbmRleFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VTcGVjOmZ1bmN0aW9uKGluZGV4LHNpbmRleCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW5kZXgsc2luZGV4KVxyXG5cdFx0XHRcdGlmKHRoYXQuc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdPT0wKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0U3BlYyhpbmRleCxzaW5kZXgpXHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC5zcGVjW2luZGV4XS5hdHRyW3NpbmRleF09PTEpe1xyXG5cdFx0XHRcdFx0dGhhdC5jYW5jZWxTcGVjKGluZGV4LHNpbmRleClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS56KeE5qC855qE5LyY5oOg5L+h5oGvXHJcblx0XHRcdHNlZU1vcmU6ZnVuY3Rpb24oaW5kZXgpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmKGluZGV4PT0wKXtcclxuXHRcdFx0XHRcdGlmKHRoYXQudXNlc19jYXJkTGlzdC5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDonaWRzX2dldF9jYXJkJyxcclxuXHRcdFx0XHRcdFx0XHRjYXJkX2lkOnRoYXQudXNlc19jYXJkTGlzdCxcclxuXHRcdFx0XHRcdFx0XHRsaW1pdDo2LFxyXG5cdFx0XHRcdFx0XHRcdG9mZnNldDowXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJjYXJkXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHRoYXQuaXNTaG93RGlzY291bnQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmNhcmRzW2ldLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gW11cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2UgaWYoaW5kZXg9PTEpe1xyXG5cdFx0XHRcdFx0dGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlYyA9ICF0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdH0sXHRcdFx0XHJcblx0XHRcdC8vIHVzZXJTcGVjPeeUqOaIt+WPr+mAieinhOagvO+8jGlzRmlyc3Q95piv5ZCm6aaW5qyh6L+b5YWl77yMbm93Q2hlY2s95b2T5YmN6YCJ6aG577yMaXNDYW5jZWw95piv5ZCm54K55Ye75Y+W5raI6L+b5YWlXHJcblx0XHRcdGFzc2VtYmxlU3BlYzogZnVuY3Rpb24odXNlclNwZWMsIGlzRmlyc3QsIG5vd0NoZWNrLCBpc0NhbmNlbCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8vIOaWsOinhOagvOaVsOe7hO+8jOS4juWOn+inhOagvHNwZWNfdmFsdWXnm7jlr7nlupTvvIznlKjkuo7moIforrDlkITnp43nirbmgIFcclxuXHRcdFx0XHRsZXQgc3BlY1ZhbHVlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIikuc3BlY192YWx1ZTtcclxuXHRcdFx0XHRsZXQgc3BlYyA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpLnNwZWNfdmFsdWU7XHJcblx0XHRcdFx0bGV0IGRlZmF1bHRVc2VyU3BlYyA9IChpc0NhbmNlbCA9PSAxKSA/IFwiXCIgOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKS5za3Uuc3BlY19hdHRyO1x0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6YGN5Y6G6KeE5qC857G75Z6LXHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBzcGVjVmFsdWUpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gc3BlY1ZhbHVlW2ldLmF0dHIpIHtcclxuXHRcdFx0XHRcdFx0Ly8g56ys5LiA5qyh6L+b5YWl5YWo6YOo5Y+v6YCJ77yMMD3lj6/pgInvvIwxPemAieS4rVxyXG5cdFx0XHRcdFx0XHRpZiAoaXNGaXJzdCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0c3BlY1tpXS5hdHRyW2tdID0gMDtcclxuXHRcdFx0XHRcdFx0XHQvLyDpgY3ljobpu5jorqTpgInmi6nop4TmoLxcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqIGluIGRlZmF1bHRVc2VyU3BlYykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGsgPT0gZGVmYXVsdFVzZXJTcGVjW2pdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWNbaV0uYXR0cltrXSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOeUqOaIt+WPr+mAieinhOagvOS4juaVtOS4quinhOagvOi/m+ihjOWMuemFje+8jOWMuemFjeaIkOWKn+eKtuaAgeaUueS4uuWPr+mAieeKtuaAgVxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGogaW4gdXNlclNwZWMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChrID09IHVzZXJTcGVjW2pdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWNbaV0uYXR0cltrXSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIOWIpOaWreW9k+WJjemAieaLqemhueS4reaYr+WQpuacieS4jeWtmOWcqOeUqOaIt+WPr+mAieinhOagvO+8jOWmguaciei/m+ihjOWIoOmZpFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG4gaW4gbm93Q2hlY2spIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh1c2VyU3BlYy5pbmRleE9mKHBhcnNlSW50KG5vd0NoZWNrW25dKSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bm93Q2hlY2suc3BsaWNlKG4sIDEpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIOaYvuekuuW9k+WJjemAieS4reinhOagvFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG0gaW4gbm93Q2hlY2spIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChrID09IG5vd0NoZWNrW21dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWNbaV0uYXR0cltrXSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBzcGVjO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInmi6nop4TmoLxcclxuXHRcdFx0Z2V0U3BlYzogZnVuY3Rpb24oaW5kZXgsc2luZGV4KSB7XHJcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGF0LnNwZWNbaW5kZXhdLmF0dHIpIHtcclxuXHRcdFx0XHRcdHRoYXQuc3BlY1tpbmRleF0uYXR0cltpXSA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdID0gMTtcclxuXHRcdFx0XHQvLyDmn6Xmib7lvZPliY3pgInmi6nmlbDmja5cclxuXHRcdFx0XHRsZXQgbm93Q2hlY2sgPSBbXTtcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoYXQuc3BlYykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiB0aGF0LnNwZWNbaV0uYXR0cikge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5zcGVjW2ldLmF0dHJba10gPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdG5vd0NoZWNrLnB1c2goayk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5Yik5pat5b2T5YmN54K55Ye76KeE5qC85piv5ZCm5Zyo55So5oi35YWB6K646YCJ5oup6IyD5Zu077yM5Zyo5bCx55u05o6l5o+Q5Lqk77yM5LiN5Zyo5bCx5o+Q5Lqk5b2T5YmN6KeE5qC8XHJcblx0XHRcdFx0bGV0IHVzZXJTcGVjID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIikuc2t1LnVzZXJfc3BlYztcclxuXHRcdFx0XHRsZXQgc3BlY0F0dHIgPSBcIlwiO1xyXG5cdFx0XHRcdGlmICh1c2VyU3BlYykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiB1c2VyU3BlYykge1xyXG5cdFx0XHRcdFx0XHRpZiAodXNlclNwZWMuaW5kZXhPZihwYXJzZUludChzaW5kZXgpKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdHNwZWNBdHRyID0gW3NpbmRleF07XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c3BlY0F0dHIgPSBub3dDaGVjaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzcGVjQXR0ciA9IG5vd0NoZWNrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogXCJzZWxlY3Rza3VcIixcclxuXHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogdGhhdC5lbmNyeXB0ZWRfaWQsXHJcblx0XHRcdFx0XHRzcGVjX2F0dHI6IHNwZWNBdHRyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdC8vIOmHjeaWsOWCqOWtmOaWsOeUqOaIt+WPr+S7pemAiemhuVxyXG5cdFx0XHRcdFx0bGV0IGdvb2RzRGV0YWlsID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIik7XHJcblx0XHRcdFx0XHRnb29kc0RldGFpbC5za3UudXNlcl9zcGVjID0gcmVzLmRhdGEuZGF0YS51c2VyX3NwZWM7XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiLCBnb29kc0RldGFpbCk7XHJcblx0XHRcdFx0XHR0aGF0LnNwZWMgPSB0aGF0LmFzc2VtYmxlU3BlYyhyZXMuZGF0YS5kYXRhLnVzZXJfc3BlYywgcmVzLmRhdGEuZGF0YSA9PSBcIlwiID8gMSA6IDAsIG5vd0NoZWNrKVxyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdSA9IGRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5za3VfaWQgPSBkYXRhLmlkXHJcblx0XHRcdFx0XHRcdHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3Uuc2FsZV9wcmljZSA9IGRhdGEuc2FsZV9wcmljZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHRcdFx0XHJcblx0XHRcdC8vIOWPlua2iOmAiemhuVxyXG5cdFx0XHRjYW5jZWxTcGVjOiBmdW5jdGlvbihpbmRleCxzaW5kZXgpIHtcclxuXHRcdFx0XHRjb25zdCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XSA9IDA7XHJcblx0XHRcdFx0Ly8g5p+l5om+5b2T5YmN6YCJ5oup5pWw5o2uXHJcblx0XHRcdFx0bGV0IG5vd0NoZWNrID0gW107XHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGF0LnNwZWMpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gdGhhdC5zcGVjW2ldLmF0dHIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuc3BlY1tpXS5hdHRyW2tdID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRub3dDaGVjay5wdXNoKGspO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiBcInNlbGVjdHNrdVwiLFxyXG5cdFx0XHRcdFx0ZW5jcnlwdGVkX2lkOiB0aGF0LmVuY3J5cHRlZF9pZCxcclxuXHRcdFx0XHRcdHNwZWNfYXR0cjogbm93Q2hlY2tcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g6YeN5paw5YKo5a2Y5paw55So5oi35Y+v5Lul6YCJ6aG5XHJcblx0XHRcdFx0XHRsZXQgZ29vZHNEZXRhaWwgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKTtcclxuXHRcdFx0XHRcdGdvb2RzRGV0YWlsLnNrdS51c2VyX3NwZWMgPSByZXMuZGF0YS5kYXRhLnVzZXJfc3BlYztcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIsIGdvb2RzRGV0YWlsKTtcclxuXHRcdFx0XHRcdHRoYXQuc3BlYyA9IHRoYXQuYXNzZW1ibGVTcGVjKHJlcy5kYXRhLmRhdGEudXNlcl9zcGVjLCByZXMuZGF0YS5kYXRhID09IFwiXCIgPyAxIDogMCwgbm93Q2hlY2ssIDEpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ZWG5ZOBXHJcblx0XHRcdGdvVG9Hb29kczogZnVuY3Rpb24oaWQsIHBpZCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19kZXRhaWw/c2t1X2lkPSR7aWR9JiZlbmNyeXB0ZWRfaWQ9JHtwaWR9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkuLrkvaDmjqjojZBcclxuXHRcdFx0Z2V0TGlrZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICd1c2VycmVjb21tZW5kZWRnb29kc3NwdWxpc3QnLFxyXG5cdFx0XHRcdFx0dHlwZTogJzMnLFxyXG5cdFx0XHRcdFx0b2Zmc2V0OiB0aGF0Lm9mZnNldFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnByb2R1Y3RMaXN0cyA9IHRoYXQucHJvZHVjdExpc3RzLmNvbmNhdChkYXRhKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+ayoeacieaVsOaNricpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75LyY5oOg5oiW6ICF5Y2h5Yi4XHJcblx0XHRcdGNoYW5nZUFjdGl2aXR5OmZ1bmN0aW9uKGluZGV4LGxpc3QsaW5mbyl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYoaW5kZXg9PTApeyAvL+WNoeWIuFxyXG5cdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDonaWRzX2dldF9jYXJkJyxcclxuXHRcdFx0XHRcdFx0Y2FyZF9pZDpsaXN0LFxyXG5cdFx0XHRcdFx0XHRsaW1pdDo2LFxyXG5cdFx0XHRcdFx0XHRvZmZzZXQ6MFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5hY3RfaW5mbyA9IGluZm9cclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiY2FyZFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0XHRcdFx0aWYodGhhdC5pc1Nob3dEaXNjb3VudCl7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlscyA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuY2FyZHNbaV0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNlIGlmKGluZGV4PT0xKXsvL+S8mOaDoFxyXG5cdFx0XHRcdFx0dGhhdC5hY3RfaW5mbyA9IGxpc3RcclxuXHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdH1lbHNlIGlmKGluZGV4PT0yKXtcclxuXHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdFx0aWYoIXRoYXQuaXNTaG93RGlzY291bnQpe1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gW11cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmihuWPluWNoeWIuFxyXG5cdFx0XHRnZXRDYXJkczogZnVuY3Rpb24oY2FyZElkLCBwcm9tcHQsaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZiAocHJvbXB0ID09ICcnKSB7XHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOiAnY2FyZGdldCcsXHJcblx0XHRcdFx0XHRcdGNhcmRfaWQ6IGNhcmRJZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJjYXJkXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KCfpooblj5bmiJDlip8nKVxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QuY2FyZHNbaW5kZXhdLnNhbGVjYXJkX3VzZXJfY291bnQgPSB0aGF0LmNhcmRMaXN0LmNhcmRzW2luZGV4XS5zYWxlY2FyZF91c2VyX2NvdW50KzFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdChwcm9tcHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkvb/nlKjljaHliLhcclxuXHRcdFx0dXNlQ2FyZDpmdW5jdGlvbihpZCl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+S9v+eUqOeahOWNoeWIuGlkOicsaWQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dUaWNrZXQ6IGZ1bmN0aW9uKGNhcmRJZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5jYXJkTGlzdC5jYXJkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uaWQgPT0gY2FyZElkKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHMgPSAhdGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlsc1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlscykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctdG9wLnBuZydcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5blub/lkYpcclxuXHRcdFx0YWR2ZXJ0aXNpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZ2V0YWR2ZXJ0aXNpbmcnLFxyXG5cdFx0XHRcdFx0bG9jYXRpb246IDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJob21lXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHR0aGF0LnNwZWNpYWxMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0LnNwZWNpYWxMaXN0KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPluWPr+mihuWPluWNoeWIuFxyXG5cdFx0XHRnZXRDYXJkOmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6XCJtYXlfcmVjZWl2ZVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiY2FyZFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5nZXRfY291bnQgPSBkYXRhLm51bVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmihuWIuOS4reW/g1xyXG5cdFx0XHRnb1RvR2FpbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL215L215X2NhcmRfZ2FpbmAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5Lit5ZWG5ZOBXHJcblx0XHRcdGNoYW5nZVBvcmR1Y3Q6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5idG5udW0gPSBpbmRleFxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3QgPSB7fVxyXG5cdFx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdjb250ZW50TGlzdCcpO1xyXG5cdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdHNhbGVfaW5mbzpbXVxyXG5cdFx0XHRcdH0vL+iuouWNleeahOS/oeaBr1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnb1RvR29vZHNDbGFzc2ZpeTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfY2xhc3NpZnlgLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaUtuiXj+OAgeebuOS8vOOAgeWIoOmZpFxyXG5cdFx0XHRzZXRTdGF0ZTpmdW5jdGlvbihpbmRleCxpZCxudW0sY2F0ZWdvcnlfaWQsbGlzdE5hbWUsZW5jcnlwdGVkX2lkKXtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbmRleCxjYXJ0X2lkLHNrdV9pZCxudW0pXHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8gaW5kZXggMCDmlLbol48gMSDnm7jkvLwgMiDliKDpmaRcclxuXHRcdFx0XHRpZihpbmRleD09MCl7Ly/mlLbol49cclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6J2NvbGxlY3Rnb29kc3NwdScsXHJcblx0XHRcdFx0XHRcdGVuY3J5cHRlZF9pZDplbmNyeXB0ZWRfaWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QoJ+W3suaUtuiXjycpXHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGUgPT0gMTAyMCl7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdCgn6K+l5ZWG5ZOB5bey5pS26JePJylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSBpZihpbmRleD09MSl7Ly/nm7jkvLxcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3Q/bmFtZT0ke2xpc3ROYW1lfSZpZD0ke2NhdGVnb3J5X2lkfWAsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNlIGlmKGluZGV4PT0yKXsvL+WIoOmZpFxyXG5cdFx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdFx0Y2FydF9pZC5wdXNoKGlkKVxyXG5cdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDonY2hhbmdjYXJ0JyxcclxuXHRcdFx0XHRcdFx0dHlwZToyLFxyXG5cdFx0XHRcdFx0XHRjYXJ0X2lkOmNhcnRfaWQsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+aPkOekuicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6J+ehruWumuimgeWIoOmZpOatpOiuouWNleWQlz8nLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdChyZXMuZGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sNTAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2FsZV9pbmZvOltdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LDgwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vliIbnsbvliJfooahcclxuXHRcdFx0Z29vZHNDbGFzc2ZpeTogZnVuY3Rpb24oaWQsIGxpc3ROYW1lKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3Q/bmFtZT0ke2xpc3ROYW1lfSZpZD0ke2lkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS55ZWG5ZOB5pWw6YePXHJcblx0XHRcdHNldEdvb2RzTnVtYmVyOmZ1bmN0aW9uKGlkLGNhcnRfbnVtKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgY2FydF9pZCA9IFtdXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5jb250ZW50TGlzdCkgLy/mg7Pms5XmmK/lnKjkv67mlLnmlbDph4/nmoTml7blgJnlhYjmiorotK3nianovabnmoTmlbDmja7lrZjlgqjvvIzkuLrkuobliKTlrprpgqPkupvmlbDmja7mmK/pgInkuK3kuoYs54S25ZCO6K6h566X5Lu35qC8XHJcblx0XHRcdFx0Ly8gdW5pLnNldFN0b3JhZ2VTeW5jKFwiY29udGVudExpc3RcIiwgdGhhdC5jb250ZW50TGlzdCk7XHJcblx0XHRcdFx0Y2FydF9pZC5wdXNoKGlkKVxyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOidjaGFuZ2NhcnQnLFxyXG5cdFx0XHRcdFx0dHlwZTowLFxyXG5cdFx0XHRcdFx0Y2FydF9pZDpjYXJ0X2lkLFxyXG5cdFx0XHRcdFx0bnVtOmNhcnRfbnVtLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHRcdFx0XHQvLyB0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5vcmRlcl9pbmZvID0ge1xyXG5cdFx0XHRcdFx0XHQvLyBcdHNhbGVfaW5mbzpbXVxyXG5cdFx0XHRcdFx0XHQvLyB9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliqDlh4/mlbDph49cclxuXHRcdFx0c2V0TnVtYmVyOiBmdW5jdGlvbihpZCwgbnVtYmVyLCBrLCBpcykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBnb29kc051bWJlciA9IDBcclxuXHRcdFx0XHRsZXQgY2FydF9udW0gPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtXHJcblx0XHRcdFx0Y2FydF9udW0gKz0gbnVtYmVyXHJcblx0XHRcdFx0Z29vZHNOdW1iZXIgPSBjYXJ0X251bVxyXG5cdFx0XHRcdGlmIChnb29kc051bWJlciA+PSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZ29vZHNOdW1iZXIgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtID0gZ29vZHNOdW1iZXJcclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gZ29vZHNOdW1iZXJcclxuXHRcdFx0XHR0aGF0LnNldEdvb2RzTnVtYmVyKGlkLGdvb2RzTnVtYmVyKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDovpPlhaXmlbDph49cclxuXHRcdFx0c2V0UG9yZHVjdE51bWJlcjogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0XHRcdFx0bGV0IGsgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQua1xyXG5cdFx0XHRcdGxldCBpcyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pc1xyXG5cdFx0XHRcdGxldCBpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG5cdFx0XHRcdGlmKHZhbHVlPT0nJyl7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IDFcclxuXHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSAxXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtID0gcGFyc2VJbnQodmFsdWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBnb29kc051bWJlciA9IDBcclxuXHRcdFx0XHRsZXQgY2FydF9udW0gPSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtXHJcblx0XHRcdFx0Z29vZHNOdW1iZXIgPSBjYXJ0X251bVxyXG5cdFx0XHRcdGlmIChnb29kc051bWJlciA+PSB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1heF9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZ29vZHNOdW1iZXIgPCB0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpIHtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHRnb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBnb29kc051bWJlclxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2FydF9udW0gPSBnb29kc051bWJlclxyXG5cdFx0XHRcdHRoYXQuc2V0R29vZHNOdW1iZXIoaWQsZ29vZHNOdW1iZXIpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuS8mOaDoOaYjue7hlxyXG5cdFx0XHR1c2VyX2Rpc2NvdW50OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5zaG93X2Rpc2NvdW50ID0gIXRoYXQuc2hvd19kaXNjb3VudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRJS25vdzpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuc2hvd19kaXNjb3VudCA9ICF0aGF0LnNob3dfZGlzY291bnRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlx0XHJcblx0LnRvcC1iYXIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblx0XHJcblx0LmJhY2stdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzOHJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmJhY2sge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0XHR3aWR0aDogNjBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdH1cclxuXHRcclxuXHQuYmFjayBpbWFnZSB7XHJcblx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdH1cclxuXHRcclxuXHQuYmFjay10aXRsZSAudGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzN3JweDtcclxuXHR9XHJcblx0LmNhcnQtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdH1cclxuXHJcblx0LmVtcHR5LWNhcnQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmVtcHR5LWNhcnQtaW1hZ2Uge1xyXG5cdFx0cGFkZGluZzogNjhycHggMTc3cnB4IDQwcnB4IDE3NHJweDtcclxuXHR9XHJcblxyXG5cdC5lbXB0eS1jYXJ0LWltYWdlIGltYWdlIHtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRoZWlnaHQ6IDI1NHJweDtcclxuXHR9XHJcblxyXG5cdC5nby1zdHJvbGwge1xyXG5cdFx0d2lkdGg6IDIyMHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogODdycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY2Njk5IDAlLCAjZmEzNDc1IDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiA0MHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lhbC1wZXJmb3JtYW5jZSB7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAyMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdC5zcGVjaWFsTGlzdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHQuc3BlY2lhbExpc3QgaW1hZ2V7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5yZWNvbW1lbmQtdG8teW91IHtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0d2lkdGg6IDZycHg7XHJcblx0XHRoZWlnaHQ6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzU3NjtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5jaGVja2VkTGluZSB7XHJcblx0XHRcdHBhZGRpbmc6IDAgMjBycHg7XHJcblx0XHR9XHJcblx0XHJcblx0LmNoZWNrZWRMaW5lIHZpZXcge1xyXG5cdFx0aGVpZ2h0OiA0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5yZWxhdGVkLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDhycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5zdWJqZWN0LWNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LXRvLW5hdiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGhlaWdodDogOTZycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0fVxyXG5cclxuXHQucHJvZHVjdC1uYW1lIHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRsaW5lLWhlaWdodDogOTZycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZFBvcmR1Y3Qge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LmVuZC1jb250IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQuZGlzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHQuY2FyZC10b3Age1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tdG9wOiA1cnB4O1xyXG5cdH1cclxuXHRcclxuXHQudGFiQmFyTGlzdCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0XHJcblx0LmNhbi1yZWNlaXZlIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMjFycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY2FuLXJlY2VpdmUgLnRleHQge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHR9XHJcblx0XHJcblx0LnRleHRzIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3OXJweDtcclxuXHR9XHJcblx0LmdvLXJlY2VpdmUge1x0XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHRcclxuXHQuZ28tcmVjZWl2ZSAudHJpYW5nbGUtbGluZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiA0MHJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICM1YmUzZDUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC01NnJweDtcclxuXHR9XHJcblx0LmNoYXJhY3RlciB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlM2Q1O1xyXG5cdFx0d2lkdGg6IDE3MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jYXJ0LXNob3BwaW5nLXNob3cge1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGFuZ2UtY2hlY2stc2VlLW1vcmUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZS1jaGVjayB0ZXh0IHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdC5kZWxldGUtZ29vZHN7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuYWRkLW9uLWl0ZW0ge1xyXG5cdFx0d2lkdGg6IDg4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnNwZWNpYWwtb2ZmZXIge1xyXG5cdFx0cGFkZGluZzogMHJweCAxMHJweCAxMHJweCA1MHJweDtcclxuXHR9XHJcblxyXG5cdC5mdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTJycHg7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZThmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lmaWMtYWN0aXZpdHkge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC5hY3Rpdml0eS10aW1lIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYWN0aXZpdHktdGltZSB0ZXh0IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bWFyZ2luOiAwIDhycHg7XHJcblx0fVxyXG5cclxuXHQuaG91c2VzLFxyXG5cdC5taW51dGUsXHJcblx0LnNlY29uZCB7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tbGVmdDogNXJweDtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudC1hbGwge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQuc2hvd19nb29kc19zdGF0ZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQudGhpc19pc19nb29kc19zdGF0ZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LnNldF9zdGF0ZXtcclxuXHRcdHdpZHRoOiA4NHJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAyOHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDY1cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LmNvbGxlY3Rpb257XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRjlCQjAwIDAlLCAjRjlCQjAwIDEwMCUpO1xyXG5cdH1cclxuXHQuc2ltaWxhcntcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNGRjk5NjYgMCUsICNGRjk5NjYgMTAwJSk7XHJcblx0fVxyXG5cdC50aGlzX2lzX2dvb2RzX3N0YXRlIC5kZWxldGV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuXHQuc2V0X3N0YXRlIHRleHR7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmNoZWNrYm94LWl0ZW0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZ29vZHMtaW5mbyB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LWl0ZW0tc2hvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjRjBGMEYwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2Vze1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQucG9yZHVjdC1pdGVtLWltYWdlcyAuaW52YWxpZC1nb29kc3tcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG5cdC5kZWxldGUtaW52YWxpZC1nb29kc3tcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNzVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXIge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1wcmljZSAucHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdH1cclxuXHJcblx0Lm1lbWJlci1wcmljZSB7XHJcblx0XHR3aWR0aDogNjRycHg7XHJcblx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwMDAgMCUsICMyYzJjMmMgMTAwJSksIGxpbmVhci1ncmFkaWVudCgjMjgyODI4LCAjMjgyODI4KTtcclxuXHRcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsLCBub3JtYWw7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdGNvbG9yOiAjZmVmZWZlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0fVxyXG5cclxuXHQucHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblx0LnB1cmNoYXNlTGltaXRhdGlvbk51bWJlciB0ZXh0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHQub2ZmbGluZV9wYXktb25saW5lX3BheS1jaGVja2VkTnVtYmVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5vZmZsaW5lX3BheS1vbmxpbmVfcGF5IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQub25saW5lX3BheSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1yaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tlZE51bWJlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0d2lkdGg6IDE4MHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRib3JkZXI6IHNvbGlkIDFycHggI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTnVtYmVyIGltYWdlIHtcclxuXHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdGhlaWdodDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuaW5wdXQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LmlucHV0IC5jYXJ0X251bSB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1cnB4O1xyXG5cdH1cclxuXHJcblx0LnN1YnRyYWN0LFxyXG5cdC5hZGQge1xyXG5cdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cclxuXHQucG9yZHVjdC1pdGVtLW5hbWUge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucyB7XHJcblx0XHR3aWR0aDogMzYwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCAxNnJweDtcclxuXHR9XHJcblxyXG5cdC52ZXJzaW9ucy1uYW1lIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0fVxyXG5cdC52ZXJzaW9ucy1uYW1lLWl0ZW17XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cdC52ZXJzaW9ucy1uYW1lLWl0ZW06Zmlyc3QtY2hpbGR7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51bmZvbGQge1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblx0Lm5hbWUtcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXIge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHRcclxuXHQubWFudGxlZHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG5cdFx0ei1pbmRleDogNTM7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdH1cclxuXHQuZGlzY291bnRzLXRpdGxle1x0XHRcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0cGFkZGluZy10b3A6IDI1cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuZGlzY291bnRzLWhpbnR7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuY2FyZF9saXN0e1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0fVxyXG5cdC5jYXJkLXRpdGxlLWFsbC1jYXJke1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdC5tb3JlLWNhcmR7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cdC5kZWxldGUtZGlzY291bnR7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDI1cnB4O1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHQuZGVsZXRlLWRpc2NvdW50IGltYWdle1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblx0LnNldHRsZW1lbnR7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5zZXR0bGVtZW50LWluZm97XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0fVxyXG5cdC50b3RhbC1kaXNjb3VudHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC50b3RhbC1kaXNjb3VudCAudG90YWx7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMHJweDtcclxuXHR9XHJcblx0LnRvdGFsLWRpc2NvdW50IC50b3RhbCB0ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHQudXNlLWRpc2NvdW50e1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC51c2UtZGlzY291bnQtZGV0YWlsZWR7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM0cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHQuZ29TZXR0bGVtZW50e1xyXG5cdFx0d2lkdGg6IDE4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM1cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zZXRfZ29vZHNfc3BlY19jb250ZW50e1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogNTI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdH1cclxuXHQuaXNTaG93LWNvbnRlbnQge1xyXG5cdFx0cGFkZGluZzogMzBycHggMjBycHg7XHJcblx0fVxyXG5cdC5zcGVjcy10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdHBhZGRpbmctdG9wOiAyMHJweDtcclxuXHR9XHJcblx0XHJcblx0LnNwZWNzLWhpbnQge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRmb250LXNpemU6IDIycnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuc3BlY3Mge1xyXG5cdFx0cGFkZGluZzogMzBycHggMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHRcclxuXHQucGF5LXR4dCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0fVxyXG5cdFxyXG5cdC5zcGVjcy1jb250IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cdFxyXG5cdC5zcGVjcy1jb250LXBheSB7XHJcblx0XHRtYXJnaW4tbGVmdDogLTMwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQubGkge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUycnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTJycHg7XHJcblx0XHRwYWRkaW5nOiAwIDI1cnB4O1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNmMGYwZjA7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG5cdFx0bWFyZ2luOiAyMHJweCAwIDAgMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5zcGVjcy1jb250LXBheSAubGkge1xyXG5cdFx0bWFyZ2luOiAwIDAgMCAzMHJweDtcclxuXHR9XHJcblx0XHJcblx0LmxpLWhvdmVyIHtcclxuXHRcdGJvcmRlcjogMnJweCBzb2xpZCAjZmEzNDc1O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZThmMDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHRcclxuXHQuc3BlY3MtY29udCAubGktZ3JheSB7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblx0LmFkZC1jYXJkLXRvcHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQubGVmdC1oZWFkX2ltZyBpbWFnZXtcclxuXHRcdHdpZHRoOiAyNDBycHg7XHJcblx0fVxyXG5cdC5yaWdodC1nb29kcy1pbmZve1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblx0Lmdvb2RzLWRpc2NvdW50c3tcclxuXHRcdHdpZHRoOiAxNjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogNTBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNXJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM4ODM0ZmEgMCUsICNiYzY2ZmYgMTAwJSk7XHJcblx0fVxyXG5cdC5nb29kLXByaWNle1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0Lm1hcmtldF9wcmljZXtcclxuXHRcdGNvbG9yOiAjRkYwMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0Lm1lbWJlcl9wcmljZXtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgIzk5OTk5OTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0cGFkZGluZzogMTBycHggMTBycHggMTBycHggMDtcclxuXHR9XHJcblx0Lm1lbWJlcl90aXRsZXtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDEwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVycHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cdC5zdG9yZS1za3Vfbm97XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblx0LnNrdV9ub3tcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblx0LmlzU2hvdyAuc3BlY3MtY29udC1wYXl7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAwIDA7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblx0LmlzU2hvdyAuc3BlY3MtY29udHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHQuaXNTaG93IC5zcGVjcy1jb250LXBheSAucGF5LXR4dHtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdC5jaGFuZ2VOdW1iZXJ7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZzogMjBycHggMDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cdC5jaGFuZ2VOdW1iZXIgLnBheS10eHR7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA0MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQubnVtYmVyLWhpbnR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICAjZmEzNDc1O1xyXG5cdH1cclxuXHQubnVtYmVyLWhpbnQgdGV4dHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY2hhbmdlLWlucHV0e1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogNDBycHg7XHJcblx0fVxyXG5cdC5udW1iZXItaW5wdXR7XHJcblx0XHRoZWlnaHQ6IDg0cnB4O1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRib3JkZXItdG9wOiAxcnB4IHNvbGlkICM5OTk5OTk7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICM5OTk5OTk7XHJcblx0fVxyXG5cdC5udW1iZXItaW5wdXQgaW5wdXR7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRib3JkZXI6IDA7XHRcdFxyXG5cdH1cclxuXHQucmVkdWNlLC5hZGQtbnVtYmVye1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogNTZycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdH1cclxuXHQua2VlcC1vcmRlcntcdFx0XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFxyXG5cdH1cclxuXHQuYnV0dG9ue1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdH1cclxuXHQua2VlcC1vcmRlci1idXR0b257XHJcblx0XHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0fVxyXG5cdC5kZWxldGUtc2VlLW1vcmUtZGlzY291bnR7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDIwcnB4O1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHQuZGVsZXRlLXNlZS1tb3JlLWRpc2NvdW50IGltYWdle1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblx0XHJcblx0LnRoaXNfc2hvd19kaXNjb3VudHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogODBycHg7XHJcblx0fVxyXG5cdC5zaG93X2Rpc2NvdW50X3RpdGxle1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuc2hvd19kaXNjb3VudF9jb250ZW50e1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cdC5kaXNjb3VudF9zYWxlX2luZm97XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxNTBycHggMjBycHg7XHJcblx0fVxyXG5cdC5kaWNvdW50X3ByaWNle1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdH1cclxuXHQuYWxsX2Rpc2NvdW50e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAwIDIwcnB4O1xyXG5cdH1cclxuXHQuYWxsX2Rpc2NvdW50IC5zYWxlX2luZm9fZGlzY291bnRfcHJpY2V7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblx0LmRpc2NvdW50LWhpbnR7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fSBcclxuXHQuaV9rbm93e1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHJweDtcclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDUwMDI2MDE3NzlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9