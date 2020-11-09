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
      uni.setStorageSync("contentList", that.contentList);
      cart_id.push(id);
      var dataInfo = {
        interfaceId: 'changcart',
        type: 0,
        cart_id: cart_id,
        num: cart_num };

      that.request.uniRequest("shoppingCart", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          that.getUserCart();
          that.allchecked = false;
          that.order_info = {
            sale_info: [] };
          //订单的信息
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NjYyMyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzljYmEiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvY2FydC9jYXJ0LnZ1ZT9hZGI0IiwidW5pLWFwcDovLy9wYWdlcy9jYXJ0L2NhcnQudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2NhcnQvY2FydC52dWU/NWIxNSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9jYXJ0L2NhcnQudnVlPzRmMGYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EseUY7QUFDQUEsVUFBVSxDQUFDQyxhQUFELENBQVYsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQzdIO0FBQ3dEO0FBQ0w7QUFDcUM7OztBQUd4RjtBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQTZwQixDQUFnQiwycEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpYmpyQjtBQUNBO0FBQ0Esd0JBREE7QUFFQSxrQkFGQSxFQURBOztBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLGlCQUpBO0FBS0EsbUJBTEE7QUFNQSxxQkFOQSxFQU1BO0FBQ0EsbUNBUEE7QUFRQSxzQkFSQTtBQVNBLDRDQVRBO0FBVUEsa0JBVkE7QUFXQSxlQVhBO0FBWUEsc0JBWkE7QUFhQTtBQUNBLGtCQURBO0FBRUEsaUJBRkE7O0FBSUE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBSkE7O0FBUUE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBUkE7O0FBWUE7QUFDQSxtQkFEQTtBQUVBLGlCQUZBLEVBWkEsQ0FiQTs7O0FBOEJBLGVBOUJBO0FBK0JBLHFCQS9CQTtBQWdDQSx1QkFoQ0EsRUFnQ0E7QUFDQSwyQkFqQ0EsRUFpQ0E7QUFDQSxvQkFsQ0E7QUFtQ0EsZUFuQ0E7QUFvQ0Esa0JBcENBO0FBcUNBLHFCQXJDQSxFQXFDQTtBQUNBLGtCQXRDQSxFQXNDQTtBQUNBLGtCQXZDQSxFQXVDQTtBQUNBLGtCQXhDQTtBQXlDQSx1QkF6Q0E7QUEwQ0EsaUNBMUNBLEVBMENBO0FBQ0EsMEJBM0NBO0FBNENBLGNBNUNBO0FBNkNBLGlCQTdDQSxFQTZDQTtBQUNBLG1CQTlDQSxFQThDQTtBQUNBLDBCQS9DQSxFQStDQTtBQUNBLHNCQWhEQTtBQWlEQSxlQWpEQTtBQWtEQSxrQkFsREE7QUFtREE7QUFDQSxxQkFEQSxFQW5EQTtBQXFEQTtBQUNBLDBCQXREQSxDQXNEQTtBQXREQTtBQXdEQSxHQTlEQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBbkVBO0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTVFQTtBQTZFQSxTQTdFQSxxQkE2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBVEE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVJBOztBQVVBLEtBWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBaEhBO0FBaUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEseUJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQURBLENBQ0E7QUFDQSxtREFGQSxDQUVBO0FBQ0EsNkRBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0E1QkEsTUE0QkE7QUFDQTtBQUNBO0FBQ0EsT0FoQ0E7QUFpQ0EsS0E5Q0E7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5EQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQWxGQTtBQW1GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFHQTtBQUNBO0FBQ0EsT0FYQSxNQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhIQTtBQWlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUE7QUFDQTs7QUFFQSxLQTFJQTtBQTJJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEscUVBRkE7O0FBSUE7QUFDQSxXQVhBLE1BV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLHdDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSx5QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVhBLE1BV0E7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFDQTtBQUNBLE9BakJBO0FBa0JBO0FBQ0EsS0F0TUE7QUF1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFIQSxDQUdBO0FBQ0Esc0JBSkEsQ0FJQTtBQUNBLDRCQUxBLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLGtEQUZBOztBQUlBO0FBQ0E7QUFDQSxPQVhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLHNEQUZBOztBQUlBO0FBQ0EsV0FUQSxNQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsdUNBRkE7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQW5EQSxDQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFEQTs7QUFHQSxPQUxBLE1BS0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsc0JBRkE7O0FBSUE7O0FBRUEsS0ExUUE7QUEyUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsa0NBRkE7QUFHQSxzQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVJBLE1BUUE7QUFDQTtBQUNBO0FBQ0EsT0FaQTtBQWFBLEtBcFNBO0FBcVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxlQUZBO0FBR0EsNkJBSEE7QUFJQSxtQ0FKQTtBQUtBLDJCQUxBO0FBTUEsZ0NBTkE7QUFPQSwrQkFQQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBQ0E7QUFDQSxPQVRBO0FBVUEsS0EzVEE7QUE0VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZVQTtBQXdVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwVkE7QUFxVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpWQTtBQTBWQTtBQUNBO0FBQ0E7QUFDQSxLQTdWQTtBQThWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0F4V0E7QUF5V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSx1Q0FGQTtBQUdBLG9CQUhBO0FBSUEscUJBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQWZBO0FBZ0JBLFNBdkJBLE1BdUJBO0FBQ0E7QUFDQTtBQUNBLE9BM0JBLE1BMkJBO0FBQ0E7QUFDQTtBQUNBLEtBMVlBO0FBMllBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FSQSxNQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJiQTtBQXNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxNQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSx1Q0FGQTtBQUdBLDJCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWkE7QUFhQSxLQXRlQTtBQXVlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSx1Q0FGQTtBQUdBLDJCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQWhnQkE7QUFpZ0JBO0FBQ0E7QUFDQTtBQUNBLDBGQURBOztBQUdBLEtBdGdCQTtBQXVnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFEQTtBQUVBLGlCQUZBO0FBR0EsMkJBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsT0FQQTtBQVFBLEtBdmhCQTtBQXdoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsdUJBRkE7QUFHQSxrQkFIQTtBQUlBLG1CQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWZBO0FBZ0JBLE9BeEJBLE1Bd0JBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVqQkE7QUE2akJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLHlCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUxBO0FBTUEsT0FYQSxNQVdBO0FBQ0E7QUFDQTtBQUNBLEtBOWtCQTtBQStrQkE7QUFDQTtBQUNBO0FBQ0EsS0FsbEJBO0FBbWxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvbEJBO0FBZ21CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsbUJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BLEtBOW1CQTtBQSttQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBM25CQTtBQTRuQkE7QUFDQTtBQUNBO0FBQ0EscUNBREE7O0FBR0EsS0Fqb0JBO0FBa29CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBQ0EsS0E3b0JBO0FBOG9CQTtBQUNBO0FBQ0EsMENBREE7O0FBR0EsS0FscEJBO0FBbXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQURBO0FBRUEsb0NBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7QUFPQSxPQVpBLE1BWUE7QUFDQTtBQUNBLDJGQURBOztBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQURBO0FBRUEsaUJBRkE7QUFHQSwwQkFIQTs7QUFLQTtBQUNBLHFCQURBO0FBRUEsK0JBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUE7QUFDQSxtQkFOQSxFQU1BLEdBTkE7QUFPQTtBQUNBLGVBYkE7QUFjQTtBQUNBLFdBcEJBOztBQXNCQTtBQUNBLEtBdnNCQTtBQXdzQkE7QUFDQTtBQUNBO0FBQ0EsZ0ZBREE7O0FBR0EsS0E3c0JBO0FBOHNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxlQUZBO0FBR0Esd0JBSEE7QUFJQSxxQkFKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQTtBQUNBO0FBQ0EsT0FSQTtBQVNBLEtBcHVCQTtBQXF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FydkJBO0FBc3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0Evd0JBO0FBZ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcHhCQTtBQXF4QkE7QUFDQTtBQUNBO0FBQ0EsS0F4eEJBLEVBakhBLEU7Ozs7Ozs7Ozs7OztBQ2piQTtBQUFBO0FBQUE7QUFBQTtBQUFnK0IsQ0FBZ0IsMDdCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FwL0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9jYXJ0L2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvY2FydC9jYXJ0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGYwMGFkZjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwZjAwYWRmNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jYXJ0L2NhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY2FydFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3AtYmFyXCJcclxuXHRcdCA6c3R5bGU9XCJbeydoZWlnaHQnOm1lbnVIZWlnaHQrJ3B4JywncGFkZGluZy10b3AnOm1lbnVUb3ArJ3B4JywnbGluZS1oZWlnaHQnOm1lbnVIZWlnaHQrJ3B4JywncGFkZGluZy1ib3R0b20nOjEwKydweCcsJ2JhY2tncm91bmQtY29sb3InOnRvcEJhY2tncm91bmRDb2xvciwnY29sb3InOmNvbG9yfV1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiYWNrLXRpdGxlXCIgOnN0eWxlPVwiW3snaGVpZ2h0JzptZW51SGVpZ2h0KydweCd9XVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFja1wiIEBjbGljaz1cImdvQmFja1wiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJiYWNrSW1hZ2VcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPiB7e3RpdGxlfX0gPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtdG8tbmF2XCIgOnN0eWxlPVwiW3sndG9wJzptZW51Qm90dG9tKzEwKydweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtbmFtZVwiIHYtZm9yPVwiKGksaykgaW4gcHJvZHVjdE5hbWVMaXN0XCIgOmtleT0naycgOmNsYXNzPVwie2NoZWNrZWRQb3JkdWN0IDpidG5udW0gPT0ga31cIiBAdGFwPVwiY2hhbmdlUG9yZHVjdChrKVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLW5hbWUtbGluZVwiPlxyXG5cdFx0XHRcdFx0e3sgaS5uYW1lIH19IDx0ZXh0Pih7e2kubnVtYmVyfX0pPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgOmNsYXNzPVwie2NoZWNrZWRMaW5lIDpidG5udW0gPT0ga31cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXc+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjYXJ0LWNvbnRlbnRcIiA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUJvdHRvbSs1OCsncHgnfV1cIj5cdFx0XHRcclxuXHRcdFx0PCEtLSDotK3nianovabkuLrnqbogLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wdHktY2FydFwiIHYtaWY9XCJza3VfbGlzdC5sZW5ndGg9PTBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVtcHR5LWNhcnQtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NhcnRCZy5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbXB0eS1jYXJ0LXRleHRcIj4g6LSt54mp6L2m6L+Y5piv56m655qE5ZOffiA8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnby1zdHJvbGxcIiBAdGFwPSdnb1RvR29vZHNDbGFzc2ZpeSc+IOWOu+mAm+mAmyA8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDotK3nianovabkuI3kuLrnqbogLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2FydC1oYXZlLXByb2R1Y3RcIiB2LWVsc2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbmQtY29udFwiIDpjbGFzcz1cIntkaXM6YnRubnVtID09IGluZGV4fVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHByb2R1Y3ROYW1lTGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkLXRvcFwiIEB0YXA9J2dvVG9HYWluJz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYW4tcmVjZWl2ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3PuaCqOaciTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRcIj57e2dldF9jb3VudH195byg5LiT5bGe5LyY5oOg5Yi4PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dHNcIj7lj6/pooblj5Z+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ28tcmVjZWl2ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidHJpYW5nbGUtbGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFyYWN0ZXJcIj7ljrvpooblj5YmbmJzcDs+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3BpbmctY2FydFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcnQtc2hvcHBpbmctc2hvd1wiIHYtZm9yPVwiKGl0ZW1zLGspIGluIGNvbnRlbnRMaXN0LnNrdV9saXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDlhajpgIkgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtY2hlY2stc2VlLW1vcmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxjaGVja2JveCAgY29sb3I9JyMwMDdBRkYnIDpjaGVja2VkPVwiaXRlbXMuYWxsX2NoZWNrZWRcIiBAdGFwPSdjaGVja2VkX2NsYXNzX2FsbChrKScgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgQHRhcD0nZ29vZHNDbGFzc2ZpeShpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSknPiB7e2l0ZW1zLmNhdGVnb3J5X3RpdGxlfX0gPiA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1vbi1pdGVtXCIgdi1pZj1cIml0ZW1zLmNhcmRzLmxlbmd0aD4wXCIgQHRhcD1cImNoYW5nZUFjdGl2aXR5KDAsaXRlbXMuY2FyZHMsaXRlbXMuYWN0X2luZm8pXCI+IOmihuWIuCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1vbi1pdGVtXCIgdi1lbHNlLWlmPVwiaXRlbXMuYWN0X2luZm9cIiBAdGFwPVwiY2hhbmdlQWN0aXZpdHkoMSxpdGVtcy5hY3RfaW5mbylcIj4g55yL5LyY5oOgIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDkvJjmg6DmtLvliqggLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsLW9mZmVyXCIgdi1pZj1cIml0ZW1zLmFjdF9pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljLWFjdGl2aXR5LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvbi1hY3Rpdml0eS1zZWUtZGlzY291bnRzXCIgdi1pZj1cIml0ZW1zLmFjdF9pbmZvLmlzX2NvdW50ZG93bj09MVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb25cIj4g6ZmQ5pe2IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+6Led5rS75Yqo57uT5p2f6L+Y5YmpIDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpdml0eS10aW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXkgaG91c2VzXCI+IHt7IGl0ZW1zLmRheSB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJob3VzZXNcIj4ge3sgaXRlbXMuaG91c2UgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2Vjb25kXCI+IHt7IGl0ZW1zLnNlY29uZCB9fSA8L3ZpZXc+IDx0ZXh0Pjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaW51dGVcIj4ge3sgaXRlbXMubWludXRlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHNcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHYtZm9yPVwiKGNvbnRlbnQsdHlwZSkgaW4gaXRlbXMuYWN0X2luZm8uYWN0X3J1bGVcIiA6a2V5PSd0eXBlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uXCI+IHt7Y29udGVudC5jYXRlZ29yeX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHlcIj4ge3tjb250ZW50LnJ1bGVfbmFtZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5ZWG5ZOB5bGV56S6IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnQtYWxsXCIgdi1mb3I9XCIoaSxpcykgaW4gaXRlbXMuZ29vZHNfbGlzdFwiIDprZXk9J2lzJz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLWNvbnRlbnRcIiBAbG9uZ3ByZXNzPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGVja2JveC1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtaXRlbVwiIGNvbG9yPScjMDA3QUZGJyA6Y2hlY2tlZD1cImkuY2hlY2tlZFwiIEB0YXA9J2NoYW5nZUNoZWNrKGssaXMpJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZHVjdC1pdGVtLXNob3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLWltYWdlc1wiIEB0YXA9J2dvVG9Hb29kcyhpLlNrdV9pZCxpLmVuY3J5cHRlZF9pZCknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraS5oZWFkX2ltZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuYW1lLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLW5hbWVcIj4ge3tpLmdvb2RzX25hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmVyc2lvbnNcIiAgQHRhcD0nc2hvd1NldFNwZWMoaS5Ta3VfaWQsaS5lbmNyeXB0ZWRfaWQsaS5jYXJ0X251bSxpLmNhcnRfaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlcnNpb25zLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVyc2lvbnMtbmFtZS1pdGVtXCIgdi1mb3I9XCIoaXMseikgaW4gaS5zcGVjX25hbWVcIiA6a2V5PSd6Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3t6fX06e3tpc319XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidW5mb2xkXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy91bmZvbGQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdO+/pTx0ZXh0IGNsYXNzPVwicHJpY2VcIj57e2kuc2FsZV9wcmljZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbWJlci1wcmljZVwiIHYtaWY9XCJpLm1lbWJlclwiPuS8muWRmOS7tzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyXCI+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqIHt7IGkubWluX2J1eV9saW1pdCB9fSDku7botbfotK0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdOmZkOi0rXt7aS5tYXhfYnV5X2xpbWl0fX3ku7YgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJpLmN1dF9wcmljZTwwXCI+IOavlOWKoOi0reaXtumZjeS7t++/pXt7aS5jdXRfcHJpY2V9fSA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtZWxzZS1pZj1cImkuY3V0X3ByaWNlPjBcIj4g5q+U5Yqg6LSt5pe25rao5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvZmZsaW5lX3BheS1vbmxpbmVfcGF5LWNoZWNrZWROdW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib2ZmbGluZV9wYXktb25saW5lX3BheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9ubGluZV9wYXlcIj7lnKjnur/mlK/ku5jvv6V7eyBpLm9ubGluZV9wYXkqaS5jYXJ0X251bSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvZmZsaW5lX3BheVwiPuWIsOmZouWGjeS7mO+/pXt7IGkub2ZmbGluZV9wYXkqaS5jYXJ0X251bSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnRyYWN0XCIgQHRhcD1cInNldE51bWJlcihpLmNhcnRfaWQsLTEsayxpcylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zdWJ0cmFjdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImNhcnRfbnVtXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OmRhdGEtaz0naycgOmRhdGEtaXM9J2lzJyA6ZGF0YS1pZD0naS5jYXJ0X2lkJyB2LW1vZGVsPVwiaS5jYXJ0X251bVwiIEBpbnB1dD0nc2V0UG9yZHVjdE51bWJlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbWF4bGVuZ3RoPVwiMlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRcIiBAdGFwPVwic2V0TnVtYmVyKGkuY2FydF9pZCwxLGssaXMpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYWRkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZ29vZHNfc3RhdGVcIiB2LXNob3c9XCJpLmlzX3Nob3dfc3RhdGVcIiBAdGFwPSdzZXRnb29kc1N0YXRlKGssaXMpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzX2lzX2dvb2RzX3N0YXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0aW9uIHNldF9zdGF0ZVwiIHYtaWY9XCJpdGVtcy5jYXRlZ29yeV9zdGF0dXM9PTFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdzZXRTdGF0ZSgwLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+56e75YWlPC90ZXh0PiA8dGV4dD7mlLbol488L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNpbWlsYXIgc2V0X3N0YXRlXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IEB0YXA9J3NldFN0YXRlKDEsaS5jYXJ0X2lkLGkuY2FydF9udW0saXRlbXMuY2F0ZWdvcnlfaWQsaXRlbXMuY2F0ZWdvcnlfdGl0bGUsaS5lbmNyeXB0ZWRfaWQpJz4g55yL55u45Ly8IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZSBzZXRfc3RhdGVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMixpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPiDliKDpmaQgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5by556qX5LyY5oOg5oiW6ICF5Y2h5Yi4IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cIm1hbnRsZWRcIiB2LWlmPVwiaXNTaG93RGlzY291bnRcIiBzY3JvbGwteT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydoZWlnaHQnOmNhcmRMaXN0LmNhcmRzP2hlaWdodC8yKydweCc6aGVpZ2h0LzQrJ3B4J31dXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpc2NvdW50cy10aXRsZVwiPiDkv4PplIDkvJjmg6AgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXNjb3VudHMtaGludFwiPirmuKnppqjmj5DnpLo65ruh5YeP44CB5oqY5omj44CB5Y2h5Yi45Z2H5Y+v5Y+g5Yqg5L2/55SoPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsLW9mZmVyXCIgdi1pZj1cImFjdF9pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lmaWMtYWN0aXZpdHktaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c1wiIHYtaWY9XCJhY3RfaW5mby5pc19jb3VudGRvd249PTFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmdWxsLXJlZHVjdGlvblwiPiDpmZDml7YgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+6Led5rS75Yqo57uT5p2f6L+Y5YmpIDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGl2aXR5LXRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGF5IGhvdXNlc1wiPiB7eyBpdGVtcy5kYXkgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJob3VzZXNcIj4ge3sgaXRlbXMuaG91c2UgfX0gPC92aWV3PiA8dGV4dD46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWNvbmRcIj4ge3sgaXRlbXMuc2Vjb25kIH19IDwvdmlldz4gPHRleHQ+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWludXRlXCI+IHt7IGl0ZW1zLm1pbnV0ZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb24tYWN0aXZpdHktc2VlLWRpc2NvdW50c1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB2LWZvcj1cIihjb250ZW50LHR5cGUpIGluIGFjdF9pbmZvLmFjdF9ydWxlXCIgOmtleT0ndHlwZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZ1bGwtcmVkdWN0aW9uLXNwZWNpZmljLWFjdGl2aXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZnVsbC1yZWR1Y3Rpb25cIj4ge3tjb250ZW50LmNhdGVnb3J5fX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNpZmljLWFjdGl2aXR5XCI+IHt7Y29udGVudC5ydWxlX25hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX2xpc3RcIiB2LWlmPVwiY2FyZExpc3QuY2FyZHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkLXRpdGxlLWFsbC1jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxhdGVkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+IOWPr+eUqOS8mOaDoOWIuFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vcmUtY2FyZFwiIEB0YXA9J2dvVG9HYWluJz4g5pu05aSa5LyY5oOg5Yi4ID4gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aWNrZXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0IDpjYXJkc0xpc3Q9J2NhcmRMaXN0LmNhcmRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgOnRpbWVfbm93PSdjYXJkTGlzdC50aW1lX25vdycgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBAc2hvd1RpY2tldD0nc2hvd1RpY2tldCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0IEBnZXRDYXJkcz0nZ2V0Q2FyZHMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBAdXNlQ2FyZCA9ICd1c2VDYXJkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aWNrZXQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZS1kaXNjb3VudFwiIEB0YXA9J2NoYW5nZUFjdGl2aXR5KDIpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2RlbGV0ZS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOi/h+acn+WkseaViOeahOWVhuWTgSAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvcGluZy1jYXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FydC1zaG9wcGluZy1zaG93XCIgdi1mb3I9XCIoaXRlbXMsaykgaW4gY29udGVudExpc3Quc2t1X2xpc3RcIiA6a2V5PSdrJyB2LXNob3c9XCJpdGVtcy5jYXRlZ29yeV9zdGF0dXM9PTBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1jaGVjay1zZWUtbW9yZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+IOWkseaViOeahOWVhuWTgSAgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZWxldGUtZ29vZHNcIiBAdGFwPSdkZWxldGVJbnZhbGlkKGssaXMpJz4g5riF56m65aSx5pWI5ZWG5ZOBIDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tY29udGVudC1hbGxcIiB2LWZvcj1cIihpLGlzKSBpbiBpdGVtcy5nb29kc19saXN0XCIgOmtleT0naXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9kdWN0LWl0ZW0tY29udGVudFwiIEBsb25ncHJlc3M9J3NldGdvb2RzU3RhdGUoayxpcyknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByb2R1Y3QtaXRlbS1zaG93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1pbWFnZXNcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRfaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW52YWxpZC1nb29kc1wiPjx2aWV3IGNsYXNzPVwiZGVsZXRlLWludmFsaWQtZ29vZHNcIj7lt7LlpLHmlYg8L3ZpZXc+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuYW1lLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlci1jaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLW5hbWVcIj4ge3tpLmdvb2RzX25hbWV9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmVyc2lvbnNcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2ZXJzaW9ucy1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZlcnNpb25zLW5hbWUtaXRlbVwiIHYtZm9yPVwiKGlzLHopIGluIGkuc3BlY19uYW1lXCIgOmtleT0neic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7en19Ont7aXN9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVuZm9sZFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvdW5mb2xkLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaXRlbS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWl0ZW0tcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx077+lPHRleHQgY2xhc3M9XCJwcmljZVwiPnt7aS5zYWxlX3ByaWNlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVtYmVyLXByaWNlXCIgdi1pZj1cImkubWVtYmVyXCI+5Lya5ZGY5Lu3PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwdXJjaGFzZUxpbWl0YXRpb25OdW1iZXJcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCoge3sgaS5taW5fYnV5X2xpbWl0IH19IOS7tui1t+i0rSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx06ZmQ6LSte3tpLm1heF9idXlfbGltaXR9feS7tiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cImkuY3V0X3ByaWNlPDBcIj4g5q+U5Yqg6LSt5pe26ZmN5Lu377+le3tpLmN1dF9wcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlLWlmPVwiaS5jdXRfcHJpY2U+MFwiPiDmr5TliqDotK3ml7bmtqjku7fvv6V7e2kuY3V0X3ByaWNlfX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9mZmxpbmVfcGF5LW9ubGluZV9wYXktY2hlY2tlZE51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvZmZsaW5lX3BheS1vbmxpbmVfcGF5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib25saW5lX3BheVwiPuWcqOe6v+aUr+S7mO+/pXt7IGkub25saW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9mZmxpbmVfcGF5XCI+5Yiw6Zmi5YaN5LuY77+le3sgaS5vZmZsaW5lX3BheSppLmNhcnRfbnVtIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGVja2VkTnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidHJhY3RcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc3VidHJhY3QucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJjYXJ0X251bVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpkYXRhLWs9J2snIDpkYXRhLWlzPSdpcycgdi1tb2RlbD1cImkuY2FydF9udW1cIiBAaW5wdXQ9J3NldFBvcmR1Y3ROdW1iZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG1heGxlbmd0aD1cIjJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkXCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2FkZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2dvb2RzX3N0YXRlXCIgdi1zaG93PVwiaS5pc19zaG93X3N0YXRlXCIgQHRhcD0nc2V0Z29vZHNTdGF0ZShrLGlzKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpc19pc19nb29kc19zdGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2ltaWxhciBzZXRfc3RhdGVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nc2V0U3RhdGUoMSxpLmNhcnRfaWQsaS5jYXJ0X251bSxpdGVtcy5jYXRlZ29yeV9pZCxpdGVtcy5jYXRlZ29yeV90aXRsZSxpLmVuY3J5cHRlZF9pZCknPiDnnIvnm7jkvLwgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVsZXRlIHNldF9zdGF0ZVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdzZXRTdGF0ZSgyLGkuY2FydF9pZCxpLmNhcnRfbnVtLGl0ZW1zLmNhdGVnb3J5X2lkLGl0ZW1zLmNhdGVnb3J5X3RpdGxlLGkuZW5jcnlwdGVkX2lkKSc+IOWIoOmZpCA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjaWFsLXBlcmZvcm1hbmNlXCIgdi1pZj1cInNwZWNpYWxMaXN0LmNvbnRlbnQubGVuZ3RoPjAmJnNrdV9saXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3BlY2lhbExpc3RcIiB2LWlmPVwic3BlY2lhbExpc3QudHlwZT09MVwiPlxyXG5cdFx0XHRcdFx0PHN3aXBlciBpbmRpY2F0b3ItZG90cyBpbmRpY2F0b3ItYWN0aXZlLWNvbG9yPVwiI2ZmNjY5OVwiIGF1dG9wbGF5IGludGVydmFsPSc1MDAwJyBkdXJhdGlvbj0nMzAwMCcgY2lyY3VsYXI+XHJcblx0XHRcdFx0XHRcdDxzd2lwZXItaXRlbSBjbGFzcz1cInN3aXBlci1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gc3BlY2lhbExpc3QuY29udGVudFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpdGVtLmltZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiID48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHRcdFx0PC9zd2lwZXI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicmVjb21tZW5kLXRvLXlvdVwiIHYtaWY9XCJwcm9kdWN0TGlzdHNcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlbGF0ZWQtdGl0bGVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3PuS4uuS9oOaOqOiNkDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJqZWN0LWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxnb29kc1Nob3cgOmJvcmRlclJhZGl1cz0yNCBcclxuXHRcdFx0XHRcdCA6cmVxdWVzdFVybD0ncmVxdWVzdFVybCcgOndpZHRoPTM1MCA6cG9yZHVjdExpc3Q9J3Byb2R1Y3RMaXN0cyc+XHJcblx0XHRcdFx0XHQ8L2dvb2RzU2hvdz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlhajpgInlkoznu5PnrpcgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2V0dGxlbWVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2V0dGxlbWVudC1pbmZvXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZS1hbGwtZ29vZHNcIiBAdGFwPSdjaGFuZ2VfYWxsX2NhcnQnID5cclxuXHRcdFx0XHRcdFx0PGNoZWNrYm94ICBjb2xvcj0nIzAwN0FGRicgOmNoZWNrZWQ9XCJhbGxjaGVja2VkXCIgLz4gIDx0ZXh0ID4g5YWo6YCJIDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG90YWwtZGlzY291bnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3RhbFwiPuWQiOiuoSA6IDx0ZXh0PiDvv6V7eyBvcmRlcl9pbmZvLm9mZl9zYWxlIHx8IDAgfX0gPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlLWRpc2NvdW50XCIgdi1pZj1cIm9yZGVyX2luZm8uc2FsZV9pbmZvLmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx05LyY5oOg5YePOiDvv6V7eyBvcmRlcl9pbmZvLnNhbGVfcHJpY2UgfHwwIH19IFxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlLWRpc2NvdW50LWRldGFpbGVkXCIgQHRhcD0ndXNlcl9kaXNjb3VudCc+5LyY5oOg5piO57uGPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvU2V0dGxlbWVudFwiIEB0YXA9J2dvVG9TZXR0bGVtZW50KCknPuWOu+e7k+eulzwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5L+u5pS55ZWG5ZOB6KeE5qC8IC0tPlxyXG5cdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwic2V0X2dvb2RzX3NwZWNfY29udGVudFwiIHNjcm9sbC15PVwidHJ1ZVwiIHYtaWY9XCJ0aGlzX3Nob3dfZ29vZHNfc3BlY1wiIDpzdHlsZT1cIlt7J2hlaWdodCc6aGVpZ2h0LzIrJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaXNTaG93LWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC1jYXJkLXRvcFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0LWhlYWRfaW1nXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtnb29kc0NvbnRlbnRMaXN0LnNrdS5oZWFkX2ltZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWdvb2RzLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1kaXNjb3VudHNcIiB2LWlmPVwiZ29vZHNDb250ZW50TGlzdC5za3UuYWN0Lmxlbmd0aCE9MFwiIEB0YXA9J3NlZU1vcmUoMCknPiDlj4LkuI7kvJjmg6AgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2QtcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1hcmtldF9wcmljZVwiPu+/pXt7Z29vZHNDb250ZW50TGlzdC5za3Uuc2FsZV9wcmljZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVtYmVyX3ByaWNlXCIgdi1pZj1cImdvb2RzQ29udGVudExpc3Quc2t1Lm1lbWJlci5tZW1iZXJfdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVtYmVyX3RpdGxlXCIgPnt7Z29vZHNDb250ZW50TGlzdC5za3UubWVtYmVyLm1lbWJlcl90aXRsZX19PC90ZXh0Pu+/pXt7Z29vZHNDb250ZW50TGlzdC5za3UubWVtYmVyLnByaWNlfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdG9yZS1za3Vfbm9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCB2LXNob3c9XCJnb29kc0NvbnRlbnRMaXN0LnNrdS5zdG9yZTw9MTAwXCI+5bqT5a2YIHt7Z29vZHNDb250ZW50TGlzdC5za3Uuc3RvcmV9feS7tjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNrdV9ub1wiPue8luWPtzoge3tnb29kc0NvbnRlbnRMaXN0LnNrdS5za3Vfbm99fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dGVtcGxhdGUgPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjcy1jb250ZW50XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZ29vZHNDb250ZW50TGlzdC5zcGVjX3ZhbHVlXCIgOmRhdGEtaW5kZXg9J2luZGV4JyA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjcy10aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5uYW1lfX1cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwic3BlY3MtaGludFwiID7or7fpgInmi6l7e2l0ZW0ubmFtZX19PC90ZXh0PiAtLT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLWNvbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgdi1mb3I9XCIoaXMsc2luZGV4KSBpbiBpdGVtLmF0dHJcIiA6a2V5PVwic2luZGV4XCIgXHJcblx0XHRcdFx0XHRcdFx0IDpjbGFzcz1cIltzcGVjW2luZGV4XS5hdHRyW3NpbmRleF09PTE/J2xpLWhvdmVyJzpzcGVjW2luZGV4XS5hdHRyW3NpbmRleF09PTA/J2xpLWdyYXknOicnXVwiXHJcblx0XHRcdFx0XHRcdFx0IEB0YXA9XCJjaGFuZ2VTcGVjKGluZGV4LHNpbmRleClcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXN9fSAgXHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNwZWNzLWNvbnQtcGF5XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBheS10eHRcIj7mlK/ku5jmlrnlvI88L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpXCIgQHRhcD0nY2hhbmdlUGF5KDApJyA6Y2xhc3M9XCJbcGF5X3R5cGU9PTB8fHBheV90eXBlPT0yPydsaS1ob3Zlcic6JyddXCI+XHJcblx0XHRcdFx0XHRcdOmihOe6pumHkVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIEB0YXA9J2NoYW5nZVBheSgxKScgOmNsYXNzPVwiW3BheV90eXBlPT0xfHxwYXlfdHlwZT09Mj8nbGktaG92ZXInOicnXVwiPlxyXG5cdFx0XHRcdFx0XHTlhajmrL7ku5hcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzcGVjcy1jb250LXBheVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwYXktdHh0XCI+6aKG5Y+W5pa55byPPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaVwiIEB0YXA9J2NoYW5nZUNsYXNzKDApJyA6Y2xhc3M9XCJbY2xhc3NfdHlwZT09MD8nbGktaG92ZXInOicnXVwiPlxyXG5cdFx0XHRcdFx0XHTliLDpmaLpooblj5ZcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlcIiBAdGFwPSdjaGFuZ2VDbGFzcygxKScgOmNsYXNzPVwiW2NsYXNzX3R5cGU9PTE/J2xpLWhvdmVyJzonJ11cIj5cclxuXHRcdFx0XHRcdFx06YKu5a+EXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlTnVtYmVyXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBheS10eHRcIj7mlbDph488L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm51bWJlci1oaW50XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0PiB7eyBnb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0IH19IOS7tui1t+i0rTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQ+6ZmQ6LStIHt7IGdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQgfX0g5Lu2PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2UtaW5wdXRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWR1Y2VcIlxyXG5cdFx0XHRcdFx0XHQgQHRhcD1cInJlZHVjZSgtMSlcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1jb2xvcic6c2V0TmV3R29vZHNOdW1iZXI9PWdvb2RzQ29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQgPyAnI2RkZGRkZCc6JyM5OTk5OTknfV1cIj4tPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm51bWJlci1pbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInNldE5ld0dvb2RzTnVtYmVyXCIgdmFsdWU9MSBAaW5wdXQ9J2NoYW5nZUdvb2RzTnVtYmVyJyAvPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLW51bWJlclwiXHJcblx0XHRcdFx0XHRcdCBAdGFwPVwicmVkdWNlKDEpXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtY29sb3InOnNldE5ld0dvb2RzTnVtYmVyPT1nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0ID8gJyNkZGRkZGQnOicjOTk5OTk5J31dXCI+Kzwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJrZWVwLW9yZGVyXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJrZWVwLW9yZGVyLWJ1dHRvblwiIHBsYWluPVwidHJ1ZVwiIEB0YXA9J29yZGVyU2V0KCknPuehruWumjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZS1zZWUtbW9yZS1kaXNjb3VudFwiIEB0YXA9J3NlZU1vcmUoMSknPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVsZXRlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwhLS0g5LyY5oOg5piO57uGIC0tPlxyXG5cdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIHYtaWY9XCJzaG93X2Rpc2NvdW50XCIgOnN0eWxlPVwiW3snaGVpZ2h0JzpoZWlnaHQvNCsncHgnfV1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzX3Nob3dfZGlzY291bnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3dfZGlzY291bnRfdGl0bGVcIj7kvJjmg6DmmI7nu4Y8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaG93X2Rpc2NvdW50X2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnRfc2FsZV9pbmZvXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGljb3VudF9wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX3RpdGxlXCI+5ZWG5ZOB5oC76aKdPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlXCI+e3tvcmRlcl9pbmZvLnRvdGFsX3ByaWNlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaWNvdW50X3ByaWNlXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gb3JkZXJfaW5mby5zYWxlX2luZm9cIiA6a2V5PSdpbmRleCc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWxlX2luZm9fdGl0bGVcIj57e2l0ZW0uY2F0ZWdvcnl9fSB7e2l0ZW0ucnVsZV9uYW1lfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlXCIgdi1pZj1cIml0ZW0udG9vbHNfaWQ9PSdnaXZpbmcnXCI+IO+/pXt7aXRlbS5zYWxlX3ByaWNlfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlXCIgdi1lbHNlPiAt77+le3tpdGVtLnNhbGVfcHJpY2V9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGxfZGlzY291bnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNhbGVfaW5mb190aXRsZVwiPiDkvJjmg6DlkIjorqEgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2FsZV9pbmZvX2Rpc2NvdW50X3ByaWNlXCI+IO+/pXt7b3JkZXJfaW5mby5zYWxlX3ByaWNlfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlzY291bnQtaGludFwiPuS7peS4iuS8mOaDoOS4jeWMheWQq+enr+WIhuOAgeWWteixhuOAgeS9memineetieeUqOaIt+i1hOS6p+aKteaJo++8jOi1hOS6p+aKteaJo+ivt+WcqOe7k+eul+mhtemdouafpeecizwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJpX2tub3dcIiB0eXBlPVwiZGVmYXVsdFwiIHNpemU9XCJtaW5pXCIgQHRhcD0nSUtub3cnPiDmiJHnn6XpgZPkuoYgPC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGdvb2RzU2hvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nb29kc1Nob3cudnVlXCI7XHJcblx0aW1wb3J0IHRpY2tldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90aWNrZXQudnVlXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRnb29kc1Nob3cgLFxyXG5cdFx0XHR0aWNrZXRcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lbnVXaWR0aDogMCxcclxuXHRcdFx0XHRtZW51VG9wOiAwLFxyXG5cdFx0XHRcdG1lbnVIZWlnaHQ6IDAsXHJcblx0XHRcdFx0bWVudUxlZnQ6IDAsXHJcblx0XHRcdFx0bWVudUJvdHRvbTogMCxcclxuXHRcdFx0XHRiYXJOYW1lOiAnYmFjaycsIC8v5a+86Iiq5p2h5ZCN56ewXHJcblx0XHRcdFx0dG9wQmFja2dyb3VuZENvbG9yOiAnIzIyMjIyMicsXHJcblx0XHRcdFx0Y29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRiYWNrSW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9yZXR1cm4ucG5nJyxcclxuXHRcdFx0XHR0aXRsZTogJ+i0reeJqei9picsXHJcblx0XHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHByb2R1Y3RMaXN0czogW10sXHJcblx0XHRcdFx0cHJvZHVjdE5hbWVMaXN0OiBbe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5YWo6YOoJyxcclxuXHRcdFx0XHRcdFx0bnVtYmVyOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+mZjeS7tycsXHJcblx0XHRcdFx0XHRcdG51bWJlcjogMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfljLvnvo4nLFxyXG5cdFx0XHRcdFx0XHRudW1iZXI6IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5oqk6IKk5ZOBJyxcclxuXHRcdFx0XHRcdFx0bnVtYmVyOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGJ0bm51bTogMCxcclxuXHRcdFx0XHRjb250ZW50TGlzdDoge30sXHJcblx0XHRcdFx0YWxsY2hlY2tlZDogZmFsc2UsLy/lhajpgIlcclxuXHRcdFx0XHRpc1Nob3dEaXNjb3VudDpmYWxzZSwvL+aYvuekuuS8mOaDoOaIluWNoeWIuFxyXG5cdFx0XHRcdHJlcXVlc3RVcmw6ICcnLFxyXG5cdFx0XHRcdG9mZnNldDogMCxcclxuXHRcdFx0XHRza3VfbGlzdDpbXSxcclxuXHRcdFx0XHRzcGVjaWFsTGlzdDp7fSwvL+W5v+WRilxyXG5cdFx0XHRcdGdldF9jb3VudDowLC8v5Y+v6aKG5Y+W5Y2h5Yi45pWw6YePXHJcblx0XHRcdFx0Y2FyZExpc3Q6W10sLy/ljaHliLjliJfooahcclxuXHRcdFx0XHRhY3RfaW5mbzp7fSxcclxuXHRcdFx0XHR1c2VzX2NhcmRMaXN0OltdLFxyXG5cdFx0XHRcdHRoaXNfc2hvd19nb29kc19zcGVjOmZhbHNlLC8v5pi+56S65L+u5pS55ZWG5ZOB6KeE5qC8XHJcblx0XHRcdFx0Z29vZHNDb250ZW50TGlzdDogW10sXHJcblx0XHRcdFx0c3BlYzpbXSxcclxuXHRcdFx0XHRwYXlfdHlwZTogMSwgLy/mlK/ku5jmlrnlvI8gIDDpooTnuqbph5EgMSDlhajmrL4gMiDlhajpgIlcclxuXHRcdFx0XHRjbGFzc190eXBlOjAsLy/pooblj5bmlrnlvI8gMOWIsOmZoiAx6YKu5a+EXHJcblx0XHRcdFx0c2V0TmV3R29vZHNOdW1iZXI6MSwvL+S/ruaUueaWsOeahOWVhuWTgeaVsOmHj1xyXG5cdFx0XHRcdGVuY3J5cHRlZF9pZDonJyxcclxuXHRcdFx0XHRza3VfaWQ6MCxcclxuXHRcdFx0XHRjYXJ0X2lkOjE2MCxcclxuXHRcdFx0XHRvcmRlcl9pbmZvOntcclxuXHRcdFx0XHRcdHNhbGVfaW5mbzpbXVxyXG5cdFx0XHRcdH0sLy/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHRzaG93X2Rpc2NvdW50OmZhbHNlLC8v5pi+56S65LyY5oOg55qE5by556qXXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWNoQm90dG9tOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR0aGF0Lm9mZnNldCArPSAxO1xyXG5cdFx0XHR0aGF0LmdldExpa2UoKVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZDogZnVuY3Rpb24ob3B0aW9uKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHR0aGlzLnJlcXVlc3QgPSB0aGlzLiRyZXF1ZXN0XHJcblx0XHRcdHRoYXQucmVxdWVzdFVybCA9IHRoYXQucmVxdWVzdC5nbG9iYWxEYXRhLnJlcXVlc3RVcmxcclxuXHRcdFx0dGhhdC5nZXRMaWtlKClcclxuXHRcdFx0dGhhdC5nZXRDYXJkKClcclxuXHRcdFx0dGhhdC5hZHZlcnRpc2luZygpXHJcblx0XHRcdHRoYXQuZ2V0VXNlckNhcnQoKVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5oZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHQ7XHJcblx0XHRcdC8vIOWIpOWumui/kOihjOW5s+WPsFxyXG5cdFx0XHRsZXQgcGxhdGZvcm0gPSAnJ1xyXG5cdFx0XHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XHJcblx0XHRcdFx0Y2FzZSAnYW5kcm9pZCc6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhbmRyb2lkJ1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaW9zJzpcclxuXHRcdFx0XHRcdHBsYXRmb3JtID0gJ2lvcydcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdhcHBsZXQnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGxhdGZvcm0gPT0gJ2FwcGxldCcpIHtcclxuXHRcdFx0XHQvLyDojrflj5blsY/luZXpq5jluqZcclxuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IG1lbnUud2lkdGhcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51VG9wID0gbWVudS50b3BcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IG1lbnUubGVmdFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSBtZW51LmJvdHRvbVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSA5MFxyXG5cdFx0XHRcdHRoYXQubWVudVRvcCA9IDUwXHJcblx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gMzJcclxuXHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gMjc4XHJcblx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gODJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6L+U5ZueXHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRVc2VyQ2FydDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdnZXRjYXJ0JyxcclxuXHRcdFx0XHRcdHR5cGU6IHRoYXQuYnRubnVtXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwic2hvcHBpbmdDYXJ0XCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRsZXQgZGF5ID0gMFxyXG5cdFx0XHRcdFx0XHRsZXQgaG91c2UgPSAwXHJcblx0XHRcdFx0XHRcdGxldCBzZWNvbmQgPSAwXHJcblx0XHRcdFx0XHRcdGxldCBtaW51dGUgPSAwXHJcblx0XHRcdFx0XHRcdC8vIGxldCBmb3JtZXJfc2t1X2xpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJjb250ZW50TGlzdFwiKS5za3VfbGlzdDtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZm9ybWVyX3NrdV9saXN0KSAvL+S4uuS6huWIpOWumuaVsOaNruaYr+WQpuaciemAieS4reeahOeKtuaAgVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuc2t1X2xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGRhdGEuc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmlzX3Nob3dfc3RhdGUgPSBmYWxzZSAvL+aYvuekuuiuouWNleaTjeS9nFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IGZhbHNlIC8v5piv5ZCm5YWo6YCJ5b2T5YmN5YiG57G7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCA9IGZhbHNlIC8v5piv5ZCm6YCJ5oupXHJcblx0XHRcdFx0XHRcdFx0XHRpZihkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5za3VfbGlzdFtpXS5kYXkgPSBwYXJzZUludCgoZGF0YS5za3VfbGlzdFtpXS5hY3RfaW5mby5yZXN0X3RpbWUpIC8gNjAgLyA2MCAvIDI0ICUgMzApXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuc2t1X2xpc3RbaV0uaG91c2UgPSBwYXJzZUludCgoZGF0YS5za3VfbGlzdFtpXS5hY3RfaW5mby5yZXN0X3RpbWUpIC8gNjAgLyA2MCAlIDI0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLnNlY29uZCA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgLyA2MCAlIDYwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLnNrdV9saXN0W2ldLm1pbnV0ZSA9IHBhcnNlSW50KChkYXRhLnNrdV9saXN0W2ldLmFjdF9pbmZvLnJlc3RfdGltZSkgJSA2MClcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YS5za3VfbGlzdFtpXSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5za3VfbGlzdCA9IGRhdGEuc2t1X2xpc3RcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LnByb2R1Y3ROYW1lTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdE5hbWVMaXN0W2ldLm51bWJlciA9IGRhdGEudHlwZV9jb3VudFtpXVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2t1X2xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuWPr+aTjeS9nOiuouWNleaVsOaNrlxyXG5cdFx0XHRzZXRnb29kc1N0YXRlOiBmdW5jdGlvbihrLCBpcykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uaXNfc2hvd19zdGF0ZSA9ICF0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmlzX3Nob3dfc3RhdGVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YWo6YCJ5b2T5YmN5YiG57G7XHJcblx0XHRcdGNoZWNrZWRfY2xhc3NfYWxsOmZ1bmN0aW9uKGspe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBhY3RfaWQgPSAnJ1xyXG5cdFx0XHRcdGxldCBjaGFuZ2VfY2FyZF9pZCA9IFtdXHJcblx0XHRcdFx0bGV0IGNhcnQgPSB7fVxyXG5cdFx0XHRcdGxldCBhcnIgPSBbXVxyXG5cdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQgPSAhdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZFxyXG5cdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQpey8v5YWo6YCJXHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2ldLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1lbHNleyAvL+eCueWHu+a4heepuuWFqOmAiVxyXG5cdFx0XHRcdFx0Zm9yKGxldCBpPTA7aTx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpXS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRhcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkKVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBmbGFnID0gYXJyLmV2ZXJ5KChpdGVtLGluZGV4LGFycikgPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYoZmxhZyl7XHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSAhdGhhdC5hbGxjaGVja2VkXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuZ2V0X3VzZXJfY2FydCgpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieaLqVxyXG5cdFx0XHRjaGFuZ2VDaGVjazogZnVuY3Rpb24oaywgaXMpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgYXJyID0gW11cclxuXHRcdFx0XHRsZXQgYWxsX2FyciA9IFtdXHJcblx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jaGVja2VkID0gIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uZ29vZHNfbGlzdFtpc10uY2hlY2tlZFx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7aTx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRhcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaV0uY2hlY2tlZClcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZmxhZyA9IGFyci5ldmVyeSgoaXRlbSxpbmRleCxhcnIpID0+e1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IHRydWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIOWmguaenOW9k+WIhuexu+S4i+mdoueahOiuouWNlemDvemAieaLqeS6hizliJnlvZPliY3liIbnsbvnmoTlhajpgInkuLp0cnVlXHJcblx0XHRcdFx0aWYoZmxhZyl7XHRcdFx0XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmFsbF9jaGVja2VkID0gIXRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWRcclxuXHRcdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3Rba10uYWxsX2NoZWNrZWQpey8v5b2T5YmN6K6i5Y2V5Li66YCJ5oup5pe25Yik5a6a5omA5pyJ55qE6K6i5Y2V5piv5ZCm5bey57uP5YWo6YCJXHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0XHRcdGFsbF9hcnIucHVzaCh0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmFsbF9jaGVja2VkKVxyXG5cdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBmbGFncyA9IGFsbF9hcnIuZXZlcnkoKGl0ZW0saW5kZXgsYWxsX2FycikgPT57XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmxhZ3NcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5hbGxfY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LmdldF91c2VyX2NhcnQoKVxyXG5cdFx0XHR9LFx0XHJcblx0XHRcdC8vIOe7k+eul+eahOWFqOmAiVxyXG5cdFx0XHRjaGFuZ2VfYWxsX2NhcnQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSAhdGhhdC5hbGxjaGVja2VkXHJcblx0XHRcdFx0aWYodGhhdC5hbGxjaGVja2VkKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0Zm9yKGxldCBqPTA7ajx0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3QubGVuZ3RoO2orKyl7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQuZ2V0X3VzZXJfY2FydCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWxsX2NoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRmb3IobGV0IGo9MDtqPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7aisrKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmdvb2RzX2xpc3Rbal0uY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0c2FsZV9pbmZvOltdXHJcblx0XHRcdFx0XHR9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPlui0reeJqei9puS7t+agvFxyXG5cdFx0XHRnZXRfdXNlcl9jYXJ0OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGNoYW5nZV9jYXJ0ID0gW11cclxuXHRcdFx0XHRpZih0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hbGxfY2hlY2tlZCl7IC8v5YWI5Yik5pat5piv5ZCm5pyJ5YWo6YCJ5LqG55qE6K6i5Y2VXHJcblx0XHRcdFx0XHRcdFx0bGV0IGFjdF9pZCA9ICcnXHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkKXtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJ0ID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkOmFjdF9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDp0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2ldLmNhcnRfaWRfbGlzdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VfY2FydC5wdXNoKGNhcnQpXHJcblx0XHRcdFx0XHRcdH0gZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IGo9MDtqPHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdC5sZW5ndGg7aisrKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jaGVja2VkKXsgLy/liKTlrprpgInmi6nkuobnmoTorqLljZVcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGFjdF9pZCA9ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBjYXJ0X2lkID0gW11cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtpXS5hY3RfaWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FydF9pZC5wdXNoKHRoYXQuY29udGVudExpc3Quc2t1X2xpc3RbaV0uZ29vZHNfbGlzdFtqXS5jYXJ0X2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgY2FydCA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RfaWQ6YWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDpjYXJ0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlX2NhcnQucHVzaChjYXJ0KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDonY2FsY3VsYXRlJyxcclxuXHRcdFx0XHRcdGNhcnQ6Y2hhbmdlX2NhcnRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHRcdC8vIHRvdGFsX3ByaWNlOjAsLy/mgLvku7dcclxuXHRcdFx0XHRcdFx0Ly8gc2FsZV9wcmljZTowLC8v5oC76K6h5LyY5oOgXHJcblx0XHRcdFx0XHRcdC8vIGhkX2Rpc2NvdW50OiAwLC8v5rS75Yqo5LyY5oOgMjAyMC4xMS4wNFxyXG5cdFx0XHRcdFx0XHQvLyBvbmxpbmVfcGF5OiAwLC8v5Zyo57q/5pSv5LuYXHJcblx0XHRcdFx0XHRcdC8vIG9mZmxpbmVfcGF5OiAwLC8v57q/5LiL5pSv5LuYXHJcblx0XHRcdFx0XHRcdC8vIG9mZl9zYWxlOiAwLC8v5Y675o6J5LyY5oOg5ZCO5bqU5LuYMjAyMC4xMS4wMlxyXG5cdFx0XHRcdFx0XHQvLyBzYWxlX2luZm86IFtdLy/kvJjmg6Dkv6Hmga9cclxuXHRcdFx0XHRcdFx0dGhhdC5vcmRlcl9pbmZvID0gZGF0YVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRzYWxlX2luZm86W11cclxuXHRcdFx0XHRcdFx0fS8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhjaGFuZ2VfY2FydClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y6757uT566XXHJcblx0XHRcdGdvVG9TZXR0bGVtZW50OmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHNrdV9saXN0ID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFxyXG5cdFx0XHRcdGxldCBjYXJ0X2luZm8gPSB7fSAvL+WNleadoei0reeJqei9pueahOmAieS4reeahOaVsOaNrlxyXG5cdFx0XHRcdGxldCBhY3RfaWQgPSAnJyAvL+a0u+WKqGlkIFxyXG5cdFx0XHRcdGxldCBjYXJ0X2lkX2xpc3QgPSBbXSAvL+iuouWNlWlk5YiX6KGoXHJcblx0XHRcdFx0aWYodGhhdC5hbGxjaGVja2VkKXsgLy/liKTlrprotK3nianovabmmK/lkKblhajpgInkuobvvIzlhajpgInnm7TmjqXlrZjlgqjlr7nlupTnmoTotK3nianovabmtLvliqhpZOWSjOi0reeJqei9pmlkXHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHNrdV9saXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRpZihza3VfbGlzdFtpXS5hY3RfaWQpe1xyXG5cdFx0XHRcdFx0XHRcdGFjdF9pZCA9IHNrdV9saXN0W2ldLmFjdF9pZFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRhY3RfaWQ6YWN0X2lkLFxyXG5cdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDpza3VfbGlzdFtpXS5jYXJ0X2lkX2xpc3RcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3QucHVzaChjYXJ0X2luZm8pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7IC8v5aaC5p6c5piv5rKh5pyJ5YWo6YCJ77yM5bCx5b6q546v5Yik5a6a6LSt54mp6L2m55qE5YiG57G75YiX6KGo5piv5ZCm5pyJ5YWo6YCJ55qE77yM5pyJ77yM5YWI5a+85YWl77yM5rKh5pyJ5YaN5b6q546v5YaF6YOo55qE5ZWG5ZOB5piv5ZCm6YCJ5LitXHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHNrdV9saXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRpZihza3VfbGlzdFtpXS5hbGxfY2hlY2tlZCl7Ly/liIbnsbvliJfooajmmK/lkKbmnInlhajpgInnmoTvvIzmnInvvIzlhYjlr7zlhaXvvIzmsqHmnInlho3lvqrnjq/lhoXpg6jnmoTllYblk4HmmK/lkKbpgInkuK1cclxuXHRcdFx0XHRcdFx0XHRpZihza3VfbGlzdFtpXS5hY3RfaWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGNhcnRfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdF9pZDphY3RfaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0X2lkX2xpc3Q6c2t1X2xpc3RbaV0uY2FydF9pZF9saXN0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdC5wdXNoKGNhcnRfaW5mbylcclxuXHRcdFx0XHRcdFx0fWVsc2V7IC8v5b6q546v5YaF6YOo55qE5ZWG5ZOB5piv5ZCm6YCJ5LitXHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnRfbGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBqPTA7ajxza3VfbGlzdFtpXS5nb29kc19saXN0Lmxlbmd0aDtqKyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoc2t1X2xpc3RbaV0uYWN0X2lkKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0X2lkID0gc2t1X2xpc3RbaV0uYWN0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRpZihza3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNoZWNrZWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXJ0X2xpc3QucHVzaChza3VfbGlzdFtpXS5nb29kc19saXN0W2pdLmNhcnRfaWQpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmKGNhcnRfbGlzdC5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0X2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdF9pZDphY3RfaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdDpjYXJ0X2xpc3RcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGNhcnRfaWRfbGlzdC5wdXNoKGNhcnRfaW5mbylcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coY2FydF9pZF9saXN0KVxyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImNhcnRfaWRfbGlzdFwiLCBjYXJ0X2lkX2xpc3QpOyAvL+WwhuaVsOaNruWtmOWCqO+8jOaWueS+v+WcqOehruiupOiuouWNleaXtuS9v+eUqFxyXG5cdFx0XHRcdC8vIOa4hemZpOacrOWcsOWtmOeahOi0reeJqei9puaVsOaNrlxyXG5cdFx0XHRcdC8vIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnY29udGVudExpc3QnKTtcclxuXHRcdFx0XHRpZihjYXJ0X2lkX2xpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0Ly8g56Gu6K6k6K6i5Y2VXHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9jb25maXJtX29yZGVyL2NvbmZpcm1fb3JkZXJgLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon6K+36YCJ5oup5ZWG5ZOBJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkv67mlLnllYblk4Hop4TmoLxcclxuXHRcdFx0c2hvd1NldFNwZWM6IGZ1bmN0aW9uKHNrdV9pZCxlbmNyeXB0ZWRfaWQsbnVtYmVyLGNhcnRfaWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LmVuY3J5cHRlZF9pZCA9IGVuY3J5cHRlZF9pZFxyXG5cdFx0XHRcdHRoYXQuc2t1X2lkID0gc2t1X2lkXHJcblx0XHRcdFx0dGhhdC5jYXJ0X2lkID0gY2FydF9pZFxyXG5cdFx0XHRcdHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2dvb2Rzc3B1ZGV0YWlscycsXHJcblx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IGVuY3J5cHRlZF9pZCxcclxuXHRcdFx0XHRcdHNrdV9pZDogc2t1X2lkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDApIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIsIGRhdGEpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuc3BlYyA9IHRoYXQuYXNzZW1ibGVTcGVjKGRhdGEuc2t1LnVzZXJfc3BlYywgMSlcclxuXHRcdFx0XHRcdFx0dGhhdC5wYXlfdHlwZSA9IGRhdGEuc2t1LnBheV90eXBlXHJcblx0XHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2dvb2RzX3NwZWMgPSAhdGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlY1xyXG5cdFx0XHRcdFx0XHR0aGF0LnVzZXNfY2FyZExpc3QgPSB0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1LmNhcmRfbGlzdFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdChyZXMuZGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+ehruWumuS/ruaUueinhOagvFxyXG5cdFx0XHRvcmRlclNldDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOidjaGFuZ2NhcnQnLFxyXG5cdFx0XHRcdFx0dHlwZToxLFxyXG5cdFx0XHRcdFx0Y2FydF9pZDp0aGF0LmNhcnRfaWQsXHJcblx0XHRcdFx0XHRudW06dGhhdC5zZXROZXdHb29kc051bWJlcixcclxuXHRcdFx0XHRcdHNrdV9pZDp0aGF0LnNrdV9pZCxcclxuXHRcdFx0XHRcdGlzX3Bvc3Q6dGhhdC5jbGFzc190eXBlLFxyXG5cdFx0XHRcdFx0YnV5X3R5cGU6dGhhdC5wYXlfdHlwZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcInNob3BwaW5nQ2FydFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnRoaXNfc2hvd19nb29kc19zcGVjID0gIXRoYXQudGhpc19zaG93X2dvb2RzX3NwZWNcclxuXHRcdFx0XHRcdFx0dGhhdC5hbGxjaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0dGhhdC5nZXRVc2VyQ2FydCgpXHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRzYWxlX2luZm86W11cclxuXHRcdFx0XHRcdFx0fS8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75Yqg5YeP5pWw5a2XXHJcblx0XHRcdHJlZHVjZTpmdW5jdGlvbihpbmRleCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciArPSBpbmRleFxyXG5cdFx0XHRcdGlmKHRoYXQuc2V0TmV3R29vZHNOdW1iZXIgPj0gdGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5tYXhfYnV5X2xpbWl0KXtcclxuXHRcdFx0XHRcdGxldCBudW1iZXIgPSBwYXJzZUludCh0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQpXHJcblx0XHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC5zZXROZXdHb29kc051bWJlciA8IHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UubWluX2J1eV9saW1pdCl7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5nb29kc0NvbnRlbnRMaXN0LnNrdS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IG51bWJlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L6T5YWl5oOz6KaB55qE5pWw6YePXHJcblx0XHRcdGNoYW5nZUdvb2RzTnVtYmVyOmZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBldmVudC5kZXRhaWwudmFsdWVcclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gdmFsdWVcclxuXHRcdFx0XHRpZih0aGF0LnNldE5ld0dvb2RzTnVtYmVyID49IHRoYXQuY29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQpe1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuY29udGVudExpc3Quc2t1Lm1heF9idXlfbGltaXQpXHJcblx0XHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC5zZXROZXdHb29kc051bWJlciA8IHRoYXQuY29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQpe1xyXG5cdFx0XHRcdFx0bGV0IG51bWJlciA9IHBhcnNlSW50KHRoYXQuY29udGVudExpc3Quc2t1Lm1pbl9idXlfbGltaXQpXHJcblx0XHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gbnVtYmVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlK/ku5jmlrnlvI9cclxuXHRcdFx0Y2hhbmdlUGF5OiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQucGF5X3R5cGUgPSBpbmRleFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VDbGFzczpmdW5jdGlvbihpbmRleCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5jbGFzc190eXBlID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlU3BlYzpmdW5jdGlvbihpbmRleCxzaW5kZXgpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGluZGV4LHNpbmRleClcclxuXHRcdFx0XHRpZih0aGF0LnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XT09MCl7XHJcblx0XHRcdFx0XHR0aGF0LmdldFNwZWMoaW5kZXgsc2luZGV4KVxyXG5cdFx0XHRcdH1lbHNlIGlmKHRoYXQuc3BlY1tpbmRleF0uYXR0cltzaW5kZXhdPT0xKXtcclxuXHRcdFx0XHRcdHRoYXQuY2FuY2VsU3BlYyhpbmRleCxzaW5kZXgpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS/ruaUueinhOagvOeahOS8mOaDoOS/oeaBr1xyXG5cdFx0XHRzZWVNb3JlOmZ1bmN0aW9uKGluZGV4KXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZihpbmRleD09MCl7XHJcblx0XHRcdFx0XHRpZih0aGF0LnVzZXNfY2FyZExpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6J2lkc19nZXRfY2FyZCcsXHJcblx0XHRcdFx0XHRcdFx0Y2FyZF9pZDp0aGF0LnVzZXNfY2FyZExpc3QsXHJcblx0XHRcdFx0XHRcdFx0bGltaXQ6NixcclxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ6MFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiY2FyZFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5pc1Nob3dEaXNjb3VudCA9ICF0aGF0LmlzU2hvd0Rpc2NvdW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZih0aGF0LmlzU2hvd0Rpc2NvdW50KXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5jYXJkc1tpXS5zaG93VGlja2V0RGV0YWlscyA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5jYXJkc1tpXS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0ID0gZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1lbHNlIGlmKGluZGV4PT0xKXtcclxuXHRcdFx0XHRcdHRoYXQudGhpc19zaG93X2dvb2RzX3NwZWMgPSAhdGhhdC50aGlzX3Nob3dfZ29vZHNfc3BlY1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHR9LFx0XHRcdFxyXG5cdFx0XHQvLyB1c2VyU3BlYz3nlKjmiLflj6/pgInop4TmoLzvvIxpc0ZpcnN0PeaYr+WQpummluasoei/m+WFpe+8jG5vd0NoZWNrPeW9k+WJjemAiemhue+8jGlzQ2FuY2VsPeaYr+WQpueCueWHu+WPlua2iOi/m+WFpVxyXG5cdFx0XHRhc3NlbWJsZVNwZWM6IGZ1bmN0aW9uKHVzZXJTcGVjLCBpc0ZpcnN0LCBub3dDaGVjaywgaXNDYW5jZWwpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyDmlrDop4TmoLzmlbDnu4TvvIzkuI7ljp/op4TmoLxzcGVjX3ZhbHVl55u45a+55bqU77yM55So5LqO5qCH6K6w5ZCE56eN54q25oCBXHJcblx0XHRcdFx0bGV0IHNwZWNWYWx1ZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpLnNwZWNfdmFsdWU7XHJcblx0XHRcdFx0bGV0IHNwZWMgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiKS5zcGVjX3ZhbHVlO1xyXG5cdFx0XHRcdGxldCBkZWZhdWx0VXNlclNwZWMgPSAoaXNDYW5jZWwgPT0gMSkgPyBcIlwiIDogdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIikuc2t1LnNwZWNfYXR0cjtcdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOmBjeWOhuinhOagvOexu+Wei1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gc3BlY1ZhbHVlKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIHNwZWNWYWx1ZVtpXS5hdHRyKSB7XHJcblx0XHRcdFx0XHRcdC8vIOesrOS4gOasoei/m+WFpeWFqOmDqOWPr+mAie+8jDA95Y+v6YCJ77yMMT3pgInkuK1cclxuXHRcdFx0XHRcdFx0aWYgKGlzRmlyc3QgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHNwZWNbaV0uYXR0cltrXSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0Ly8g6YGN5Y6G6buY6K6k6YCJ5oup6KeE5qC8XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaiBpbiBkZWZhdWx0VXNlclNwZWMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChrID09IGRlZmF1bHRVc2VyU3BlY1tqXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjW2ldLmF0dHJba10gPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDnlKjmiLflj6/pgInop4TmoLzkuI7mlbTkuKrop4TmoLzov5vooYzljLnphY3vvIzljLnphY3miJDlip/nirbmgIHmlLnkuLrlj6/pgInnirbmgIFcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqIGluIHVzZXJTcGVjKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoayA9PSB1c2VyU3BlY1tqXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjW2ldLmF0dHJba10gPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyDliKTmlq3lvZPliY3pgInmi6npobnkuK3mmK/lkKbmnInkuI3lrZjlnKjnlKjmiLflj6/pgInop4TmoLzvvIzlpoLmnInov5vooYzliKDpmaRcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBuIGluIG5vd0NoZWNrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodXNlclNwZWMuaW5kZXhPZihwYXJzZUludChub3dDaGVja1tuXSkpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG5vd0NoZWNrLnNwbGljZShuLCAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyDmmL7npLrlvZPliY3pgInkuK3op4TmoLxcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBtIGluIG5vd0NoZWNrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoayA9PSBub3dDaGVja1ttXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjW2ldLmF0dHJba10gPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gc3BlYztcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5oup6KeE5qC8XHJcblx0XHRcdGdldFNwZWM6IGZ1bmN0aW9uKGluZGV4LHNpbmRleCkge1xyXG5cdFx0XHRcdGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhhdC5zcGVjW2luZGV4XS5hdHRyKSB7XHJcblx0XHRcdFx0XHR0aGF0LnNwZWNbaW5kZXhdLmF0dHJbaV0gPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnNwZWNbaW5kZXhdLmF0dHJbc2luZGV4XSA9IDE7XHJcblx0XHRcdFx0Ly8g5p+l5om+5b2T5YmN6YCJ5oup5pWw5o2uXHJcblx0XHRcdFx0bGV0IG5vd0NoZWNrID0gW107XHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGF0LnNwZWMpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gdGhhdC5zcGVjW2ldLmF0dHIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuc3BlY1tpXS5hdHRyW2tdID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRub3dDaGVjay5wdXNoKGspO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOWIpOaWreW9k+WJjeeCueWHu+inhOagvOaYr+WQpuWcqOeUqOaIt+WFgeiuuOmAieaLqeiMg+WbtO+8jOWcqOWwseebtOaOpeaPkOS6pO+8jOS4jeWcqOWwseaPkOS6pOW9k+WJjeinhOagvFxyXG5cdFx0XHRcdGxldCB1c2VyU3BlYyA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpLnNrdS51c2VyX3NwZWM7XHJcblx0XHRcdFx0bGV0IHNwZWNBdHRyID0gXCJcIjtcclxuXHRcdFx0XHRpZiAodXNlclNwZWMpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gdXNlclNwZWMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHVzZXJTcGVjLmluZGV4T2YocGFyc2VJbnQoc2luZGV4KSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRzcGVjQXR0ciA9IFtzaW5kZXhdO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNwZWNBdHRyID0gbm93Q2hlY2s7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c3BlY0F0dHIgPSBub3dDaGVjaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6IFwic2VsZWN0c2t1XCIsXHJcblx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IHRoYXQuZW5jcnlwdGVkX2lkLFxyXG5cdFx0XHRcdFx0c3BlY19hdHRyOiBzcGVjQXR0clxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHQvLyDph43mlrDlgqjlrZjmlrDnlKjmiLflj6/ku6XpgInpoblcclxuXHRcdFx0XHRcdGxldCBnb29kc0RldGFpbCA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImdvb2RzRGV0YWlsXCIpO1xyXG5cdFx0XHRcdFx0Z29vZHNEZXRhaWwuc2t1LnVzZXJfc3BlYyA9IHJlcy5kYXRhLmRhdGEudXNlcl9zcGVjO1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIiwgZ29vZHNEZXRhaWwpO1xyXG5cdFx0XHRcdFx0dGhhdC5zcGVjID0gdGhhdC5hc3NlbWJsZVNwZWMocmVzLmRhdGEuZGF0YS51c2VyX3NwZWMsIHJlcy5kYXRhLmRhdGEgPT0gXCJcIiA/IDEgOiAwLCBub3dDaGVjaylcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuZ29vZHNDb250ZW50TGlzdC5za3UgPSBkYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuc2t1X2lkID0gZGF0YS5pZFxyXG5cdFx0XHRcdFx0XHR0aGF0Lmdvb2RzQ29udGVudExpc3Quc2t1LnNhbGVfcHJpY2UgPSBkYXRhLnNhbGVfcHJpY2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFx0XHRcdFxyXG5cdFx0XHQvLyDlj5bmtojpgInpoblcclxuXHRcdFx0Y2FuY2VsU3BlYzogZnVuY3Rpb24oaW5kZXgsc2luZGV4KSB7XHJcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5zcGVjW2luZGV4XS5hdHRyW3NpbmRleF0gPSAwO1xyXG5cdFx0XHRcdC8vIOafpeaJvuW9k+WJjemAieaLqeaVsOaNrlxyXG5cdFx0XHRcdGxldCBub3dDaGVjayA9IFtdO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhhdC5zcGVjKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIHRoYXQuc3BlY1tpXS5hdHRyKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LnNwZWNbaV0uYXR0cltrXSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0bm93Q2hlY2sucHVzaChrKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogXCJzZWxlY3Rza3VcIixcclxuXHRcdFx0XHRcdGVuY3J5cHRlZF9pZDogdGhhdC5lbmNyeXB0ZWRfaWQsXHJcblx0XHRcdFx0XHRzcGVjX2F0dHI6IG5vd0NoZWNrXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdC8vIOmHjeaWsOWCqOWtmOaWsOeUqOaIt+WPr+S7pemAiemhuVxyXG5cdFx0XHRcdFx0bGV0IGdvb2RzRGV0YWlsID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwiZ29vZHNEZXRhaWxcIik7XHJcblx0XHRcdFx0XHRnb29kc0RldGFpbC5za3UudXNlcl9zcGVjID0gcmVzLmRhdGEuZGF0YS51c2VyX3NwZWM7XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJnb29kc0RldGFpbFwiLCBnb29kc0RldGFpbCk7XHJcblx0XHRcdFx0XHR0aGF0LnNwZWMgPSB0aGF0LmFzc2VtYmxlU3BlYyhyZXMuZGF0YS5kYXRhLnVzZXJfc3BlYywgcmVzLmRhdGEuZGF0YSA9PSBcIlwiID8gMSA6IDAsIG5vd0NoZWNrLCAxKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWVhuWTgVxyXG5cdFx0XHRnb1RvR29vZHM6IGZ1bmN0aW9uKGlkLCBwaWQpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfZGV0YWlsP3NrdV9pZD0ke2lkfSYmZW5jcnlwdGVkX2lkPSR7cGlkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Li65L2g5o6o6I2QXHJcblx0XHRcdGdldExpa2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAndXNlcnJlY29tbWVuZGVkZ29vZHNzcHVsaXN0JyxcclxuXHRcdFx0XHRcdHR5cGU6ICczJyxcclxuXHRcdFx0XHRcdG9mZnNldDogdGhhdC5vZmZzZXRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJnb29kc1wiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5wcm9kdWN0TGlzdHMgPSB0aGF0LnByb2R1Y3RMaXN0cy5jb25jYXQoZGF0YSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsqHmnInmlbDmja4nKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+S8mOaDoOaIluiAheWNoeWIuFxyXG5cdFx0XHRjaGFuZ2VBY3Rpdml0eTpmdW5jdGlvbihpbmRleCxsaXN0LGluZm8pe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmKGluZGV4PT0wKXsgLy/ljaHliLhcclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6J2lkc19nZXRfY2FyZCcsXHJcblx0XHRcdFx0XHRcdGNhcmRfaWQ6bGlzdCxcclxuXHRcdFx0XHRcdFx0bGltaXQ6NixcclxuXHRcdFx0XHRcdFx0b2Zmc2V0OjBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQuYWN0X2luZm8gPSBpbmZvXHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImNhcmRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNTaG93RGlzY291bnQgPSAhdGhhdC5pc1Nob3dEaXNjb3VudFxyXG5cdFx0XHRcdFx0XHRcdGlmKHRoYXQuaXNTaG93RGlzY291bnQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmNhcmRzW2ldLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuY2FyZExpc3QgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSBpZihpbmRleD09MSl7Ly/kvJjmg6BcclxuXHRcdFx0XHRcdHRoYXQuYWN0X2luZm8gPSBsaXN0XHJcblx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHR9ZWxzZSBpZihpbmRleD09Mil7XHJcblx0XHRcdFx0XHR0aGF0LmlzU2hvd0Rpc2NvdW50ID0gIXRoYXQuaXNTaG93RGlzY291bnRcclxuXHRcdFx0XHRcdGlmKCF0aGF0LmlzU2hvd0Rpc2NvdW50KXtcclxuXHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdCA9IFtdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpooblj5bljaHliLhcclxuXHRcdFx0Z2V0Q2FyZHM6IGZ1bmN0aW9uKGNhcmRJZCwgcHJvbXB0LGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKHByb21wdCA9PSAnJykge1xyXG5cdFx0XHRcdFx0bGV0IGRhdGFJbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NhcmRnZXQnLFxyXG5cdFx0XHRcdFx0XHRjYXJkX2lkOiBjYXJkSWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiY2FyZFwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnNob3dUb2FzdCgn6aKG5Y+W5oiQ5YqfJylcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0LmNhcmRzW2luZGV4XS5zYWxlY2FyZF91c2VyX2NvdW50ID0gdGhhdC5jYXJkTGlzdC5jYXJkc1tpbmRleF0uc2FsZWNhcmRfdXNlcl9jb3VudCsxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QocHJvbXB0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L2/55So5Y2h5Yi4XHJcblx0XHRcdHVzZUNhcmQ6ZnVuY3Rpb24oaWQpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfkvb/nlKjnmoTljaHliLhpZDonLGlkKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93VGlja2V0OiBmdW5jdGlvbihjYXJkSWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY2FyZExpc3QuY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmICh0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLmlkID09IGNhcmRJZCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLnNob3dUaWNrZXREZXRhaWxzID0gIXRoYXQuY2FyZExpc3QuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHNcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuY2FyZExpc3QuY2FyZHNbaV0uc2hvd1RpY2tldERldGFpbHMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNhcmRMaXN0LmNhcmRzW2ldLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jYXJkTGlzdC5jYXJkc1tpXS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy1kb3duLnBuZydcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W5bm/5ZGKXHJcblx0XHRcdGFkdmVydGlzaW5nOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2dldGFkdmVydGlzaW5nJyxcclxuXHRcdFx0XHRcdGxvY2F0aW9uOiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiaG9tZVwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5zcGVjaWFsTGlzdCA9IGRhdGFcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5zcGVjaWFsTGlzdClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5blj6/pooblj5bljaHliLhcclxuXHRcdFx0Z2V0Q2FyZDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOlwibWF5X3JlY2VpdmVcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImNhcmRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0X2NvdW50ID0gZGF0YS5udW1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpoobliLjkuK3lv4NcclxuXHRcdFx0Z29Ub0dhaW46IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9teS9teV9jYXJkX2dhaW5gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieS4reWVhuWTgVxyXG5cdFx0XHRjaGFuZ2VQb3JkdWN0OiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuYnRubnVtID0gaW5kZXhcclxuXHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0ID0ge31cclxuXHRcdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHR0aGF0LmFsbGNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYygnY29udGVudExpc3QnKTtcclxuXHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRzYWxlX2luZm86W11cclxuXHRcdFx0XHR9Ly/orqLljZXnmoTkv6Hmga9cclxuXHRcdFx0fSxcclxuXHRcdFx0Z29Ub0dvb2RzQ2xhc3NmaXk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2NsYXNzaWZ5YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlLbol4/jgIHnm7jkvLzjgIHliKDpmaRcclxuXHRcdFx0c2V0U3RhdGU6ZnVuY3Rpb24oaW5kZXgsaWQsbnVtLGNhdGVnb3J5X2lkLGxpc3ROYW1lLGVuY3J5cHRlZF9pZCl7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW5kZXgsY2FydF9pZCxza3VfaWQsbnVtKVxyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8vIGluZGV4IDAg5pS26JePIDEg55u45Ly8IDIg5Yig6ZmkXHJcblx0XHRcdFx0aWYoaW5kZXg9PTApey8v5pS26JePXHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOidjb2xsZWN0Z29vZHNzcHUnLFxyXG5cdFx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6ZW5jcnlwdGVkX2lkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LnJlcXVlc3QudW5pUmVxdWVzdChcImdvb2RzXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3Quc2hvd1RvYXN0KCflt7LmlLbol48nKVxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlID09IDEwMjApe1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QoJ+ivpeWVhuWTgeW3suaUtuiXjycpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2UgaWYoaW5kZXg9PTEpey8v55u45Ly8XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19saXN0P25hbWU9JHtsaXN0TmFtZX0maWQ9JHtjYXRlZ29yeV9pZH1gLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSBpZihpbmRleD09Mil7Ly/liKDpmaRcclxuXHRcdFx0XHRcdGxldCBjYXJ0X2lkID0gW11cclxuXHRcdFx0XHRcdGNhcnRfaWQucHVzaChpZClcclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6J2NoYW5nY2FydCcsXHJcblx0XHRcdFx0XHRcdHR5cGU6MixcclxuXHRcdFx0XHRcdFx0Y2FydF9pZDpjYXJ0X2lkLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50Oifnoa7lrpropoHliKDpmaTmraTorqLljZXlkJc/JyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdC5zaG93VG9hc3QocmVzLmRhdGEubWVzc2FnZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LDUwMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdldFVzZXJDYXJ0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2luZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNhbGVfaW5mbzpbXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fS8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSw4MDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75YiG57G75YiX6KGoXHJcblx0XHRcdGdvb2RzQ2xhc3NmaXk6IGZ1bmN0aW9uKGlkLCBsaXN0TmFtZSkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19saXN0P25hbWU9JHtsaXN0TmFtZX0maWQ9JHtpZH1gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS/ruaUueWVhuWTgeaVsOmHj1xyXG5cdFx0XHRzZXRHb29kc051bWJlcjpmdW5jdGlvbihpZCxjYXJ0X251bSl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGNhcnRfaWQgPSBbXVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQuY29udGVudExpc3QpIC8v5oOz5rOV5piv5Zyo5L+u5pS55pWw6YeP55qE5pe25YCZ5YWI5oqK6LSt54mp6L2m55qE5pWw5o2u5a2Y5YKo77yM5Li65LqG5Yik5a6a6YKj5Lqb5pWw5o2u5piv6YCJ5Lit5LqGLOeEtuWQjuiuoeeul+S7t+agvFxyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImNvbnRlbnRMaXN0XCIsIHRoYXQuY29udGVudExpc3QpO1xyXG5cdFx0XHRcdGNhcnRfaWQucHVzaChpZClcclxuXHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDonY2hhbmdjYXJ0JyxcclxuXHRcdFx0XHRcdHR5cGU6MCxcclxuXHRcdFx0XHRcdGNhcnRfaWQ6Y2FydF9pZCxcclxuXHRcdFx0XHRcdG51bTpjYXJ0X251bSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJzaG9wcGluZ0NhcnRcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5nZXRVc2VyQ2FydCgpXHJcblx0XHRcdFx0XHRcdHRoYXQuYWxsY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfaW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRzYWxlX2luZm86W11cclxuXHRcdFx0XHRcdFx0fS8v6K6i5Y2V55qE5L+h5oGvXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Yqg5YeP5pWw6YePXHJcblx0XHRcdHNldE51bWJlcjogZnVuY3Rpb24oaWQsIG51bWJlciwgaywgaXMpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZ29vZHNOdW1iZXIgPSAwXHJcblx0XHRcdFx0bGV0IGNhcnRfbnVtID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bVxyXG5cdFx0XHRcdGNhcnRfbnVtICs9IG51bWJlclxyXG5cdFx0XHRcdGdvb2RzTnVtYmVyID0gY2FydF9udW1cclxuXHRcdFx0XHRpZiAoZ29vZHNOdW1iZXIgPj0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGdvb2RzTnVtYmVyIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5zZXROZXdHb29kc051bWJlciA9IGdvb2RzTnVtYmVyXHJcblx0XHRcdFx0dGhhdC5zZXRHb29kc051bWJlcihpZCxnb29kc051bWJlcilcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L6T5YWl5pWw6YePXHJcblx0XHRcdHNldFBvcmR1Y3ROdW1iZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHRcdGxldCBrID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmtcclxuXHRcdFx0XHRsZXQgaXMgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXNcclxuXHRcdFx0XHRsZXQgaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuXHRcdFx0XHRpZih2YWx1ZT09Jycpe1xyXG5cdFx0XHRcdFx0dmFsdWUgPSAxXHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRMaXN0LnNrdV9saXN0W2tdLmdvb2RzX2xpc3RbaXNdLmNhcnRfbnVtID0gMVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bSA9IHBhcnNlSW50KHZhbHVlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZ29vZHNOdW1iZXIgPSAwXHJcblx0XHRcdFx0bGV0IGNhcnRfbnVtID0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5jYXJ0X251bVxyXG5cdFx0XHRcdGdvb2RzTnVtYmVyID0gY2FydF9udW1cclxuXHRcdFx0XHRpZiAoZ29vZHNOdW1iZXIgPj0gdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5tYXhfYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGdvb2RzTnVtYmVyIDwgdGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KSB7XHJcblx0XHRcdFx0XHRsZXQgbnVtYmVyID0gcGFyc2VJbnQodGhhdC5jb250ZW50TGlzdC5za3VfbGlzdFtrXS5nb29kc19saXN0W2lzXS5taW5fYnV5X2xpbWl0KVxyXG5cdFx0XHRcdFx0Z29vZHNOdW1iZXIgPSBudW1iZXJcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHR0aGF0LnNldE5ld0dvb2RzTnVtYmVyID0gZ29vZHNOdW1iZXJcclxuXHRcdFx0XHR0aGF0LnNldEdvb2RzTnVtYmVyKGlkLGdvb2RzTnVtYmVyKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrkvJjmg6DmmI7nu4ZcclxuXHRcdFx0dXNlcl9kaXNjb3VudDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuc2hvd19kaXNjb3VudCA9ICF0aGF0LnNob3dfZGlzY291bnRcclxuXHRcdFx0fSxcclxuXHRcdFx0SUtub3c6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnNob3dfZGlzY291bnQgPSAhdGhhdC5zaG93X2Rpc2NvdW50XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cdFxyXG5cdC50b3AtYmFyIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiAxMDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cdFxyXG5cdC5iYWNrLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzhycHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5iYWNrIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRvcDogMDtcclxuXHR9XHJcblx0XHJcblx0LmJhY2sgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDM2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHR9XHJcblx0XHJcblx0LmJhY2stdGl0bGUgLnRpdGxlIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmb250LXNpemU6IDM3cnB4O1xyXG5cdH1cclxuXHQuY2FydC1jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQuZW1wdHktY2FydCB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZW1wdHktY2FydC1pbWFnZSB7XHJcblx0XHRwYWRkaW5nOiA2OHJweCAxNzdycHggNDBycHggMTc0cnB4O1xyXG5cdH1cclxuXHJcblx0LmVtcHR5LWNhcnQtaW1hZ2UgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDQwMHJweDtcclxuXHRcdGhlaWdodDogMjU0cnB4O1xyXG5cdH1cclxuXHJcblx0LmdvLXN0cm9sbCB7XHJcblx0XHR3aWR0aDogMjIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4N3JweDtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjY2OTkgMCUsICNmYTM0NzUgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWFsLXBlcmZvcm1hbmNlIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblx0LnNwZWNpYWxMaXN0e1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5zcGVjaWFsTGlzdCBpbWFnZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnJlY29tbWVuZC10by15b3Uge1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHR3aWR0aDogNnJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmEzNTc2O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblx0LmNoZWNrZWRMaW5lIHtcclxuXHRcdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdH1cclxuXHRcclxuXHQuY2hlY2tlZExpbmUgdmlldyB7XHJcblx0XHRoZWlnaHQ6IDRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LnJlbGF0ZWQtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0OHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnN1YmplY3QtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtdG8tbmF2IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0aGVpZ2h0OiA5NnJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LW5hbWUge1xyXG5cdFx0d2lkdGg6IDI1JTtcclxuXHRcdGxpbmUtaGVpZ2h0OiA5NnJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkUG9yZHVjdCB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQuZW5kLWNvbnQge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5kaXMge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cdC5jYXJkLXRvcCB7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi10b3A6IDVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC50YWJCYXJMaXN0IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHRcclxuXHQuY2FuLXJlY2VpdmUge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMXJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jYW4tcmVjZWl2ZSAudGV4dCB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdH1cclxuXHRcclxuXHQudGV4dHMge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDc5cnB4O1xyXG5cdH1cclxuXHQuZ28tcmVjZWl2ZSB7XHRcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdFxyXG5cdC5nby1yZWNlaXZlIC50cmlhbmdsZS1saW5lIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRib3JkZXItd2lkdGg6IDQwcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzViZTNkNSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0XHRtYXJnaW4tbGVmdDogLTU2cnB4O1xyXG5cdH1cclxuXHQuY2hhcmFjdGVyIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1YmUzZDU7XHJcblx0XHR3aWR0aDogMTcwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmNhcnQtc2hvcHBpbmctc2hvdyB7XHJcblx0XHRwYWRkaW5nOiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNoYW5nZS1jaGVjay1zZWUtbW9yZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0fVxyXG5cclxuXHQuY2hhbmdlLWNoZWNrIHRleHQge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblx0LmRlbGV0ZS1nb29kc3tcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5hZGQtb24taXRlbSB7XHJcblx0XHR3aWR0aDogODhycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTZycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuc3BlY2lhbC1vZmZlciB7XHJcblx0XHRwYWRkaW5nOiAwcnB4IDEwcnB4IDEwcnB4IDUwcnB4O1xyXG5cdH1cclxuXHJcblx0LmZ1bGwtcmVkdWN0aW9uLWFjdGl2aXR5LXNlZS1kaXNjb3VudHMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuZnVsbC1yZWR1Y3Rpb24tc3BlY2lmaWMtYWN0aXZpdHkge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZnVsbC1yZWR1Y3Rpb24ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMnJweDtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5zcGVjaWZpYy1hY3Rpdml0eSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0LmFjdGl2aXR5LXRpbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5hY3Rpdml0eS10aW1lIHRleHQge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW46IDAgOHJweDtcclxuXHR9XHJcblxyXG5cdC5ob3VzZXMsXHJcblx0Lm1pbnV0ZSxcclxuXHQuc2Vjb25kIHtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtaXRlbS1jb250ZW50LWFsbCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC5zaG93X2dvb2RzX3N0YXRlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cdC50aGlzX2lzX2dvb2RzX3N0YXRle1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQuc2V0X3N0YXRle1xyXG5cdFx0d2lkdGg6IDg0cnB4O1xyXG5cdFx0aGVpZ2h0OiAxMzBycHg7XHJcblx0XHRwYWRkaW5nOiAwIDI4cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNjVycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuY29sbGVjdGlvbntcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNGOUJCMDAgMCUsICNGOUJCMDAgMTAwJSk7XHJcblx0fVxyXG5cdC5zaW1pbGFye1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI0ZGOTk2NiAwJSwgI0ZGOTk2NiAxMDAlKTtcclxuXHR9XHJcblx0LnRoaXNfaXNfZ29vZHNfc3RhdGUgLmRlbGV0ZXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0fVxyXG5cdC5zZXRfc3RhdGUgdGV4dHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtaXRlbS1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuY2hlY2tib3gtaXRlbSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5nb29kcy1pbmZvIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnByb2R1Y3QtaXRlbS1zaG93IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtaXRlbS1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblx0LnBvcmR1Y3QtaXRlbS1pbWFnZXN7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5wb3JkdWN0LWl0ZW0taW1hZ2VzIC5pbnZhbGlkLWdvb2Rze1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG9wYWNpdHk6IDAuODtcclxuXHR9XHJcblx0LmRlbGV0ZS1pbnZhbGlkLWdvb2Rze1xyXG5cdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxNTBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA3NXJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0tcHJpY2UtcHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyLWNoZWNrZWROdW1iZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlLXB1cmNoYXNlTGltaXRhdGlvbk51bWJlciB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0tcHJpY2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pdGVtLXByaWNlIC5wcmljZSB7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0fVxyXG5cclxuXHQubWVtYmVyLXByaWNlIHtcclxuXHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdGhlaWdodDogMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjhycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDAwMCAwJSwgIzJjMmMyYyAxMDAlKSwgbGluZWFyLWdyYWRpZW50KCMyODI4MjgsICMyODI4MjgpO1xyXG5cdFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWwsIG5vcm1hbDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRycHg7XHJcblx0XHRmb250LXNpemU6IDE2cnB4O1xyXG5cdFx0Y29sb3I6ICNmZWZlZmU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tbGVmdDogNXJweDtcclxuXHR9XHJcblxyXG5cdC5wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXIge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xyXG5cdH1cclxuXHQucHVyY2hhc2VMaW1pdGF0aW9uTnVtYmVyIHRleHR7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdC5vZmZsaW5lX3BheS1vbmxpbmVfcGF5LWNoZWNrZWROdW1iZXIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0Lm9mZmxpbmVfcGF5LW9ubGluZV9wYXkge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5vbmxpbmVfcGF5IHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2VkTnVtYmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogMTgwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGJvcmRlcjogc29saWQgMXJweCAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LmNoZWNrZWROdW1iZXIgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5pbnB1dCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcblx0fVxyXG5cclxuXHQuaW5wdXQgLmNhcnRfbnVtIHtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDVycHg7XHJcblx0fVxyXG5cclxuXHQuc3VidHJhY3QsXHJcblx0LmFkZCB7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblxyXG5cdC5wb3JkdWN0LWl0ZW0tbmFtZSB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdH1cclxuXHJcblx0LnZlcnNpb25zIHtcclxuXHRcdHdpZHRoOiAzNjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwIDE2cnB4O1xyXG5cdH1cclxuXHJcblx0LnZlcnNpb25zLW5hbWUge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR9XHJcblx0LnZlcnNpb25zLW5hbWUtaXRlbXtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblx0LnZlcnNpb25zLW5hbWUtaXRlbTpmaXJzdC1jaGlsZHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnVuZm9sZCB7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHQubmFtZS1wcmljZS1wdXJjaGFzZUxpbWl0YXRpb25OdW1iZXItY2hlY2tlZE51bWJlciB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cdFxyXG5cdC5tYW50bGVke1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcblx0XHR6LWluZGV4OiA1MztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0fVxyXG5cdC5kaXNjb3VudHMtdGl0bGV7XHRcdFxyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRwYWRkaW5nLXRvcDogMjVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5kaXNjb3VudHMtaGludHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDE1cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5jYXJkX2xpc3R7XHJcblx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHR9XHJcblx0LmNhcmQtdGl0bGUtYWxsLWNhcmR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblx0Lm1vcmUtY2FyZHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblx0LmRlbGV0ZS1kaXNjb3VudHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMjVycHg7XHJcblx0XHRyaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5kZWxldGUtZGlzY291bnQgaW1hZ2V7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHQuc2V0dGxlbWVudHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LnNldHRsZW1lbnQtaW5mb3tcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjBycHggMzBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHR9XHJcblx0LnRvdGFsLWRpc2NvdW50e1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LnRvdGFsLWRpc2NvdW50IC50b3RhbHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRmb250LXdlaWdodDogNzAwcnB4O1xyXG5cdH1cclxuXHQudG90YWwtZGlzY291bnQgLnRvdGFsIHRleHR7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdC51c2UtZGlzY291bnR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0LnVzZS1kaXNjb3VudC1kZXRhaWxlZHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzRycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHRcdHBhZGRpbmc6IDAgMTVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdC5nb1NldHRsZW1lbnR7XHJcblx0XHR3aWR0aDogMTgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDcwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzVycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmEzNDc1IDAlLCAjZmY2Njk5IDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNldF9nb29kc19zcGVjX2NvbnRlbnR7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiA1MjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cdC5pc1Nob3ctY29udGVudCB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAyMHJweDtcclxuXHR9XHJcblx0LnNwZWNzLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuc3BlY3MtaGludCB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjJycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5zcGVjcyB7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAzMHJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cdFxyXG5cdC5wYXktdHh0IHtcclxuXHRcdHBhZGRpbmctbGVmdDogMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblx0XHJcblx0LnNwZWNzLWNvbnQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0zMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblx0XHJcblx0LnNwZWNzLWNvbnQtcGF5IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMzBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5saSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRsaW5lLWhlaWdodDogNTJycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MnJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjVycHg7XHJcblx0XHRib3JkZXI6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHRcdGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcblx0XHRtYXJnaW46IDIwcnB4IDAgMCAyMHJweDtcclxuXHR9XHJcblx0XHJcblx0LnNwZWNzLWNvbnQtcGF5IC5saSB7XHJcblx0XHRtYXJnaW46IDAgMCAwIDMwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQubGktaG92ZXIge1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNmYTM0NzU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZlOGYwO1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cdFxyXG5cdC5zcGVjcy1jb250IC5saS1ncmF5IHtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHQuYWRkLWNhcmQtdG9we1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5sZWZ0LWhlYWRfaW1nIGltYWdle1xyXG5cdFx0d2lkdGg6IDI0MHJweDtcclxuXHR9XHJcblx0LnJpZ2h0LWdvb2RzLWluZm97XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBycHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHQuZ29vZHMtZGlzY291bnRze1xyXG5cdFx0d2lkdGg6IDE2MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzg4MzRmYSAwJSwgI2JjNjZmZiAxMDAlKTtcclxuXHR9XHJcblx0Lmdvb2QtcHJpY2V7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQubWFya2V0X3ByaWNle1xyXG5cdFx0Y29sb3I6ICNGRjAwMDA7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQubWVtYmVyX3ByaWNle1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxMHJweCAxMHJweCAwO1xyXG5cdH1cclxuXHQubWVtYmVyX3RpdGxle1xyXG5cdFx0cGFkZGluZzogMTBycHggMTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHR9XHJcblx0LnN0b3JlLXNrdV9ub3tcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHQuc2t1X25ve1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHQuaXNTaG93IC5zcGVjcy1jb250LXBheXtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDAgMDtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHQuaXNTaG93IC5zcGVjcy1jb250e1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cdC5pc1Nob3cgLnNwZWNzLWNvbnQtcGF5IC5wYXktdHh0e1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0LmNoYW5nZU51bWJlcntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LmNoYW5nZU51bWJlciAucGF5LXR4dHtcclxuXHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDQwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdC5udW1iZXItaGludHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogICNmYTM0NzU7XHJcblx0fVxyXG5cdC5udW1iZXItaGludCB0ZXh0e1xyXG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jaGFuZ2UtaW5wdXR7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHR9XHJcblx0Lm51bWJlci1pbnB1dHtcclxuXHRcdGhlaWdodDogODRycHg7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGJvcmRlci10b3A6IDFycHggc29saWQgIzk5OTk5OTtcclxuXHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzk5OTk5OTtcclxuXHR9XHJcblx0Lm51bWJlci1pbnB1dCBpbnB1dHtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJvcmRlcjogMDtcdFx0XHJcblx0fVxyXG5cdC5yZWR1Y2UsLmFkZC1udW1iZXJ7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiA1NnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICM5OTk5OTk7XHJcblx0fVxyXG5cdC5rZWVwLW9yZGVye1x0XHRcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHJcblx0fVxyXG5cdC5idXR0b257XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDQwcnB4O1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0fVxyXG5cdC5rZWVwLW9yZGVyLWJ1dHRvbntcclxuXHRcdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKTtcclxuXHR9XHJcblx0LmRlbGV0ZS1zZWUtbW9yZS1kaXNjb3VudHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMjBycHg7XHJcblx0XHRyaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5kZWxldGUtc2VlLW1vcmUtZGlzY291bnQgaW1hZ2V7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHRcclxuXHQudGhpc19zaG93X2Rpc2NvdW50e1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiA4MHJweDtcclxuXHR9XHJcblx0LnNob3dfZGlzY291bnRfdGl0bGV7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5zaG93X2Rpc2NvdW50X2NvbnRlbnR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblx0LmRpc2NvdW50X3NhbGVfaW5mb3tcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDE1MHJweCAyMHJweDtcclxuXHR9XHJcblx0LmRpY291bnRfcHJpY2V7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDA7XHJcblx0fVxyXG5cdC5hbGxfZGlzY291bnR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDAgMjBycHg7XHJcblx0fVxyXG5cdC5hbGxfZGlzY291bnQgLnNhbGVfaW5mb19kaXNjb3VudF9wcmljZXtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHQuZGlzY291bnQtaGludHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9IFxyXG5cdC5pX2tub3d7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdH1cclxuXHRcclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZjAwYWRmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmMDBhZGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNDkxMTg0Nzg3MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=