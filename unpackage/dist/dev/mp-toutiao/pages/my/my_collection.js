(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my_collection"],{

/***/ 100:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_collection.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 469));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var swiperTabHead = function swiperTabHead() {__webpack_require__.e(/*! require.ensure | components/swiper-tab */ "components/swiper-tab").then((function () {return resolve(__webpack_require__(/*! ../../components/swiper-tab.vue */ 490));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =























































{
  components: {
    topBar: topBar,
    swiperTabHead: swiperTabHead },

  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      height: 0,
      barName: 'particularsPage', //导航条名称
      topBackgroundColor: '#222222',
      color: '#FFFFFF',
      backImage: '../static/images/back2.png',
      title: '我的收藏',
      tabBars: [{
        name: '商品',
        id: 'all',
        type: 0 },

      {
        name: '医生',
        id: 'obligation',
        type: 1 },

      {
        name: '日记',
        id: 'account-paid',
        type: 2 },

      {
        name: '问答',
        id: 'completed',
        type: 3 }],



      line: true, //是否显示选中线
      tabBackgroundColor: '#FFFFFF',
      size: 24,
      tabIndex: 0, // 选中的顶部的导航，
      listType: 0, //类型
      contentList: [
      {
        url: '../../static/images/20.png',
        goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称，',
        label: ['眼部美容', '眼部'], //标签
        price: 19800,
        vipPrice: 18800,
        subscribe: '441',
        goodReputation: '98' },

      {
        url: '../../static/images/22.png',
        goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称，',
        label: ['眼部美容', '眼部'], //标签
        price: 19800,
        vipPrice: 18800,
        subscribe: '441',
        goodReputation: '98' },

      {
        url: '../../static/images/19.png',
        goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称，',
        label: ['眼部美容', '眼部'], //标签
        price: 19800,
        vipPrice: 18800,
        subscribe: '441',
        goodReputation: '98' }] };



  },
  onReady: function onReady() {
    var that = this;
    // 获取屏幕高度
    uni.getSystemInfo({
      success: function success(res) {
        that.height = res.screenHeight;
        var menu = uni.getMenuButtonBoundingClientRect();
        that.menuWidth = menu.width;
        that.menuTop = menu.top;
        that.menuHeight = menu.height;
        that.menuLeft = menu.left;
        that.menuBottom = menu.bottom;
        that.menuPaddingRight = res.windowWidth - menu.right;
      } });

  },
  methods: {
    tabtap: function tabtap() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.tabIndex = index;
      this.listType = type; //类型 0商品 1医生 2日记 3问答
    },
    deleteItem: function deleteItem(e) {
      var that = this;
      var index = e.currentTarget.dataset.index;
      console.log(this.contentList);
      uni.showModal({
        title: '提示',
        content: '确定删除此收藏？',
        success: function success(res) {
          if (res.confirm) {
            that.contentList.splice(index, 1);
            uni.showToast({
              title: '删除成功',
              duration: 1000 });

          } else if (res.cancel) {
            uni.showToast({
              title: '取消删除',
              duration: 1000 });

          }
        } });


    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 101:
/*!***************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_collection.vue?vue&type=style&index=0&id=e97a0532&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_style_index_0_id_e97a0532_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_collection.vue?vue&type=style&index=0&id=e97a0532&scoped=true&lang=css& */ 102);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_style_index_0_id_e97a0532_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_style_index_0_id_e97a0532_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_style_index_0_id_e97a0532_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_style_index_0_id_e97a0532_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_style_index_0_id_e97a0532_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 102:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_collection.vue?vue&type=style&index=0&id=e97a0532&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 95:
/*!*************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fmy%2Fmy_collection"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _my_collection = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my_collection.vue */ 96));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my_collection.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 96:
/*!******************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_collection.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_collection.vue?vue&type=template&id=e97a0532&scoped=true& */ 97);
/* harmony import */ var _my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my_collection.vue?vue&type=script&lang=js& */ 99);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_collection_vue_vue_type_style_index_0_id_e97a0532_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my_collection.vue?vue&type=style&index=0&id=e97a0532&scoped=true&lang=css& */ 101);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e97a0532",
  null,
  false,
  _my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/my/my_collection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/*!*************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_collection.vue?vue&type=template&id=e97a0532&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_collection.vue?vue&type=template&id=e97a0532&scoped=true& */ 98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_template_id_e97a0532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 98:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/my/my_collection.vue?vue&type=template&id=e97a0532&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 99:
/*!*******************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/my/my_collection.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_collection.vue?vue&type=script&lang=js& */ 100);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

},[[95,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbXkvbXlfY29sbGVjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfY29sbGVjdGlvbi52dWU/NDcxMiIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9jb2xsZWN0aW9uLnZ1ZT9mOTc1IiwidW5pLWFwcDovLy9tYWluLmpzIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X2NvbGxlY3Rpb24udnVlP2Y0NzciLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvbXkvbXlfY29sbGVjdGlvbi52dWU/YTQwZSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9teS9teV9jb2xsZWN0aW9uLnZ1ZT9kMmU5Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL215L215X2NvbGxlY3Rpb24udnVlPzM2MWEiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQ0FGQSxFQURBOztBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLGlCQUpBO0FBS0EsbUJBTEE7QUFNQSxlQU5BO0FBT0EsZ0NBUEEsRUFPQTtBQUNBLG1DQVJBO0FBU0Esc0JBVEE7QUFVQSw2Q0FWQTtBQVdBLG1CQVhBO0FBWUE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBO0FBR0EsZUFIQTs7QUFLQTtBQUNBLGtCQURBO0FBRUEsd0JBRkE7QUFHQSxlQUhBLEVBTEE7O0FBVUE7QUFDQSxrQkFEQTtBQUVBLDBCQUZBO0FBR0EsZUFIQSxFQVZBOztBQWVBO0FBQ0Esa0JBREE7QUFFQSx1QkFGQTtBQUdBLGVBSEEsRUFmQSxDQVpBOzs7O0FBa0NBLGdCQWxDQSxFQWtDQTtBQUNBLG1DQW5DQTtBQW9DQSxjQXBDQTtBQXFDQSxpQkFyQ0EsRUFxQ0E7QUFDQSxpQkF0Q0EsRUFzQ0E7QUFDQTtBQUNBO0FBQ0EseUNBREE7QUFFQSw0REFGQTtBQUdBLDZCQUhBLEVBR0E7QUFDQSxvQkFKQTtBQUtBLHVCQUxBO0FBTUEsd0JBTkE7QUFPQSw0QkFQQSxFQURBOztBQVVBO0FBQ0EseUNBREE7QUFFQSw0REFGQTtBQUdBLDZCQUhBLEVBR0E7QUFDQSxvQkFKQTtBQUtBLHVCQUxBO0FBTUEsd0JBTkE7QUFPQSw0QkFQQSxFQVZBOztBQW1CQTtBQUNBLHlDQURBO0FBRUEsNERBRkE7QUFHQSw2QkFIQSxFQUdBO0FBQ0Esb0JBSkE7QUFLQSx1QkFMQTtBQU1BLHdCQU5BO0FBT0EsNEJBUEEsRUFuQkEsQ0F2Q0E7Ozs7QUFxRUEsR0EzRUE7QUE0RUEsU0E1RUEscUJBNEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FWQTs7QUFZQSxHQTNGQTtBQTRGQTtBQUNBO0FBQ0E7QUFDQSwyQkFGQSxDQUVBO0FBQ0EsS0FKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLDJCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDRCQUZBOztBQUlBLFdBTkEsTUFNQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSw0QkFGQTs7QUFJQTtBQUNBLFNBaEJBOzs7QUFtQkEsS0E1QkEsRUE1RkEsRTs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUF5K0IsQ0FBZ0IsbThCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBNy9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2Q7Ozs7Ozs7Ozs7Ozs7a0RDTkw7QUFDQTtBQUNBLHlHO0FBQ0FBLFVBQVUsQ0FBQ0Msc0JBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNJO0FBQ3RJO0FBQ2lFO0FBQ0w7QUFDcUM7OztBQUdqRztBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsb0dBQU07QUFDUixFQUFFLDZHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQXNxQixDQUFnQixvcUJBQUcsRUFBQyxDIiwiZmlsZSI6InBhZ2VzL215L215X2NvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJteV9jb2xsZWN0aW9uXCI+XHJcblx0XHQ8dG9wQmFyIGNsYXNzPVwidG9wQmFyXCIgOnRvcEJhY2tncm91bmRDb2xvcj0ndG9wQmFja2dyb3VuZENvbG9yJyA6Y29sb3I9J2NvbG9yJyA6YmFja0ltYWdlPSdiYWNrSW1hZ2UnIDpiYXJOYW1lPSdiYXJOYW1lJ1xyXG5cdFx0IDp0aXRsZT0ndGl0bGUnIDptZW51V2lkdGg9J21lbnVXaWR0aCcgOm1lbnVUb3A9J21lbnVUb3AnIDptZW51SGVpZ2h0PSdtZW51SGVpZ2h0JyA6bWVudUxlZnQ9J21lbnVMZWZ0JyA6bWVudUJvdHRvbT0nbWVudUJvdHRvbSc+PC90b3BCYXI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcC1zd2lwZXItdGFiXCIgOnN0eWxlPVwiW3sndG9wJzptZW51Qm90dG9tKzEwKydweCd9XVwiPlxyXG5cdFx0XHQ8c3dpcGVyVGFiSGVhZCA6dGFiQmFycz1cInRhYkJhcnNcIiA6c2l6ZT0nc2l6ZScgOmxpbmU9XCJsaW5lXCIgOnRhYkluZGV4PVwidGFiSW5kZXhcIiA6dGFiQmFja2dyb3VuZENvbG9yPSd0YWJCYWNrZ3JvdW5kQ29sb3InXHJcblx0XHRcdCBAdGFidGFwPVwidGFidGFwXCI+PC9zd2lwZXJUYWJIZWFkPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJteV9jb2xsZWN0aW9uLWNvbnRlbnRcIiA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUJvdHRvbSs1MCsncHgnLCdoZWlnaHQnOmhlaWdodC1tZW51Qm90dG9tLTUwKydweCd9XVwiPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJteV9jb2xsZWN0aW9uLWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3Rpb24tY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQtbGlzdCBjbGVhcmZpeFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGNvbnRlbnRMaXN0XCIgOmtleT0naW5kZXgnPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZC1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udXJsXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19uYW1lXCI+e3tpdGVtLmdvb2RzX25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsYWJlbC1saXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsYWJlbFwiIHYtZm9yPVwiKGksaykgaW4gaXRlbS5sYWJlbFwiIDprZXk9XCJrXCI+IHt7aX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2UtdmlwLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0Pu+/pTwvdGV4dD57e2l0ZW0ucHJpY2V9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpcC1jYXJ0LXByaWNlXCIgdi1pZj1cIml0ZW0udmlwUHJpY2U+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aXAtY2FydFwiPumSu+WNoTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmlwLXByaWNlXCI+77+le3tpdGVtLnZpcFByaWNlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwhLS0g6aKE57qm5ZKM5aW96K+EIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN1YnNjcmliZS1nb29kUmVwdXRhdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS0g6aKE57qmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3Vic2NyaWJlXCI+IHt7aXRlbS5zdWJzY3JpYmV9femihOe6piA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PCEtLSDlpb3or4QgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kUmVwdXRhdGlvblwiPiB7e2l0ZW0uZ29vZFJlcHV0YXRpb259fSXlpb3or4QgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRlbGV0ZS1zZWUtc2ltaWxhcml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiIEB0YXA9J2RlbGV0ZUl0ZW0nIHR5cGU9XCJkZWZhdWx0XCIgcGxhaW49XCJ0cnVlXCIgOmRhdGEtaW5kZXg9J2luZGV4Jz4g5Yig6ZmkIDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInNlZS1zaW1pbGFyaXR5XCIgdHlwZT1cImRlZmF1bHRcIiBwbGFpbj1cInRydWVcIj4g55yL55u45Ly8IDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdG9wQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RvcEJhci52dWVcIjtcclxuXHRpbXBvcnQgc3dpcGVyVGFiSGVhZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zd2lwZXItdGFiLnZ1ZVwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dG9wQmFyLFxyXG5cdFx0XHRzd2lwZXJUYWJIZWFkLFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVudVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1lbnVUb3A6IDAsXHJcblx0XHRcdFx0bWVudUhlaWdodDogMCxcclxuXHRcdFx0XHRtZW51TGVmdDogMCxcclxuXHRcdFx0XHRtZW51Qm90dG9tOiAwLFxyXG5cdFx0XHRcdGhlaWdodDogMCxcclxuXHRcdFx0XHRiYXJOYW1lOiAncGFydGljdWxhcnNQYWdlJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHR0b3BCYWNrZ3JvdW5kQ29sb3I6ICcjMjIyMjIyJyxcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdGJhY2tJbWFnZTogJy4uL3N0YXRpYy9pbWFnZXMvYmFjazIucG5nJyxcclxuXHRcdFx0XHR0aXRsZTogJ+aIkeeahOaUtuiXjycsXHJcblx0XHRcdFx0dGFiQmFyczogW3tcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgScsXHJcblx0XHRcdFx0XHRcdGlkOiAnYWxsJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WMu+eUnycsXHJcblx0XHRcdFx0XHRcdGlkOiAnb2JsaWdhdGlvbicsXHJcblx0XHRcdFx0XHRcdHR5cGU6IDFcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfml6XorrAnLFxyXG5cdFx0XHRcdFx0XHRpZDogJ2FjY291bnQtcGFpZCcsXHJcblx0XHRcdFx0XHRcdHR5cGU6IDJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfpl67nrZQnLFxyXG5cdFx0XHRcdFx0XHRpZDogJ2NvbXBsZXRlZCcsXHJcblx0XHRcdFx0XHRcdHR5cGU6IDNcclxuXHRcdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0bGluZTogdHJ1ZSwgLy/mmK/lkKbmmL7npLrpgInkuK3nur9cclxuXHRcdFx0XHR0YWJCYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRzaXplOiAyNCxcclxuXHRcdFx0XHR0YWJJbmRleDogMCwgLy8g6YCJ5Lit55qE6aG26YOo55qE5a+86Iiq77yMXHJcblx0XHRcdFx0bGlzdFR5cGU6IDAsIC8v57G75Z6LXHJcblx0XHRcdFx0Y29udGVudExpc3Q6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8yMC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRnb29kc19uYW1lOiAn5oiR5piv56eS5p2A5ZWG5ZOB5ZCN56ew77yM5oiR5piv56eS5p2A5ZWG5ZOB5ZCN56ew77yM5oiR5piv56eS5p2A5ZWG5ZOB5ZCN56ewLi4u5oiR5piv56eS5p2A5ZWG5ZOB5ZCN56ew77yMJyxcclxuXHRcdFx0XHRcdFx0bGFiZWw6IFsn55y86YOo576O5a65JywgJ+ecvOmDqCddLCAvL+agh+etvlxyXG5cdFx0XHRcdFx0XHRwcmljZTogMTk4MDAsXHJcblx0XHRcdFx0XHRcdHZpcFByaWNlOiAxODgwMCxcclxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlOiAnNDQxJyxcclxuXHRcdFx0XHRcdFx0Z29vZFJlcHV0YXRpb246ICc5OCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3N0YXRpYy9pbWFnZXMvMjIucG5nJyxcclxuXHRcdFx0XHRcdFx0Z29vZHNfbmFtZTogJ+aIkeaYr+enkuadgOWVhuWTgeWQjeensO+8jOaIkeaYr+enkuadgOWVhuWTgeWQjeensO+8jOaIkeaYr+enkuadgOWVhuWTgeWQjeensC4uLuaIkeaYr+enkuadgOWVhuWTgeWQjeensO+8jCcsXHJcblx0XHRcdFx0XHRcdGxhYmVsOiBbJ+ecvOmDqOe+juWuuScsICfnnLzpg6gnXSwgLy/moIfnrb5cclxuXHRcdFx0XHRcdFx0cHJpY2U6IDE5ODAwLFxyXG5cdFx0XHRcdFx0XHR2aXBQcmljZTogMTg4MDAsXHJcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogJzQ0MScsXHJcblx0XHRcdFx0XHRcdGdvb2RSZXB1dGF0aW9uOiAnOTgnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzLzE5LnBuZycsXHJcblx0XHRcdFx0XHRcdGdvb2RzX25hbWU6ICfmiJHmmK/np5LmnYDllYblk4HlkI3np7DvvIzmiJHmmK/np5LmnYDllYblk4HlkI3np7DvvIzmiJHmmK/np5LmnYDllYblk4HlkI3np7AuLi7miJHmmK/np5LmnYDllYblk4HlkI3np7DvvIwnLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogWyfnnLzpg6jnvo7lrrknLCAn55y86YOoJ10sIC8v5qCH562+XHJcblx0XHRcdFx0XHRcdHByaWNlOiAxOTgwMCxcclxuXHRcdFx0XHRcdFx0dmlwUHJpY2U6IDE4ODAwLFxyXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmU6ICc0NDEnLFxyXG5cdFx0XHRcdFx0XHRnb29kUmVwdXRhdGlvbjogJzk4J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdC8vIOiOt+WPluWxj+W5lemrmOW6plxyXG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHR0aGF0LmhlaWdodCA9IHJlcy5zY3JlZW5IZWlnaHRcclxuXHRcdFx0XHRcdGxldCBtZW51ID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdHRoYXQubWVudVdpZHRoID0gbWVudS53aWR0aFxyXG5cdFx0XHRcdFx0dGhhdC5tZW51VG9wID0gbWVudS50b3BcclxuXHRcdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IG1lbnUuaGVpZ2h0XHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gbWVudS5sZWZ0XHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSBtZW51LmJvdHRvbVxyXG5cdFx0XHRcdFx0dGhhdC5tZW51UGFkZGluZ1JpZ2h0ID0gcmVzLndpbmRvd1dpZHRoIC0gbWVudS5yaWdodFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHRhYnRhcDogZnVuY3Rpb24oaW5kZXggPSAwLCB0eXBlID0gMCkge1xyXG5cdFx0XHRcdHRoaXMudGFiSW5kZXggPSBpbmRleDtcclxuXHRcdFx0XHR0aGlzLmxpc3RUeXBlID0gdHlwZSAvL+exu+WeiyAw5ZWG5ZOBIDHljLvnlJ8gMuaXpeiusCAz6Zeu562UXHJcblx0XHRcdH0sXHJcblx0XHRcdGRlbGV0ZUl0ZW06ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb250ZW50TGlzdClcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrprliKDpmaTmraTmlLbol4/vvJ8nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdFx0ICAgIGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0ICAgICAgdGhhdC5jb250ZW50TGlzdC5zcGxpY2UoaW5kZXgsMSlcclxuXHRcdFx0XHRcdFx0ICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0ICBcdHRpdGxlOifliKDpmaTmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHQgIFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdFx0ICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdFx0ICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdCAgICAgICAgXHR0aXRsZTon5Y+W5raI5Yig6ZmkJyxcclxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHQgICAgICAgIH0pXHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQubXlfY29sbGVjdGlvbiB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdH1cclxuXHJcblx0LnRvcC1zd2lwZXItdGFiIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCAyNHJweCAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5jb2xsZWN0aW9uLWNvbnRlbnQge31cclxuXHJcblx0LmNvbnRlbnQtbGlzdCB7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnRvcC1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTZycHg7XHJcblx0XHRib3JkZXItYm90dG9tOiAycnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmhlYWQtaW1hZ2UgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDI0MHJweDtcclxuXHRcdGhlaWdodDogMjQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0LWNvbnRlbnQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0Lmdvb2RzX25hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNnJweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcblx0fVxyXG5cclxuXHQubGFiZWwtbGlzdCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTJycHg7XHJcblx0fVxyXG5cclxuXHQubGFiZWwge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyNnJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMTZycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtcHJpY2UtdmlwLWNhcnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZSB7XHJcblx0XHRmb250LXNpemU6IDUycnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHR9XHJcblxyXG5cdC52aXAtY2FydC1wcmljZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC52aXAtY2FydCB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDAwMCAwJSwgIzJjMmMyYyAxMDAlKSwgbGluZWFyLWdyYWRpZW50KCMyODI4MjgsICMyODI4MjgpO1xyXG5cdFx0Zm9udC1zaXplOiAxNnJweDtcclxuXHRcdHBhZGRpbmc6IDdycHggMTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogI2ZlZmVmZTtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhycHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cnB4O1xyXG5cdH1cclxuXHJcblx0LnZpcC1wcmljZSB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICMyODI4Mjg7XHJcblx0XHRwYWRkaW5nOiA0cnB4IDhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgIzI4MjgyODtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHJweDtcclxuXHR9XHJcblx0LnN1YnNjcmliZS1nb29kUmVwdXRhdGlvbntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdH1cclxuXHQuc3Vic2NyaWJle1xyXG5cdFx0Y29sb3I6ICM2NjY2NjY7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDQwcnB4O1xyXG5cdH1cclxuXHQuZ29vZFJlcHV0YXRpb257XHJcblx0XHRjb2xvcjogI2ZhMzU3NjtcclxuXHR9XHJcblxyXG5cdC5kZWxldGUtc2VlLXNpbWlsYXJpdHkge1xyXG5cdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbi10b3A6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LmNsZWFyZml4OmFmdGVyIHtcclxuXHRcdC8q5Lyq5YWD57Sg5piv6KGM5YaF5YWD57SgIOato+W4uOa1j+iniOWZqOa4hemZpOa1ruWKqOaWueazlSovXHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRjbGVhcjogYm90aDtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC5kZWxldGUge1xyXG5cdFx0d2lkdGg6IDEyMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI1cnB4O1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICNlMDYxOWQ7XHJcblx0XHRjb2xvcjogI2Y0NmVhZTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRib3JkZXI6IDFycHggc29saWQgI0UwNjE5RDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQuc2VlLXNpbWlsYXJpdHkge1xyXG5cdFx0d2lkdGg6IDE3MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNXJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X2NvbGxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTk3YTA1MzImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfY29sbGVjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lOTdhMDUzMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDcwODU0MjAyNDFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvbXkvbXlfY29sbGVjdGlvbi52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9teV9jb2xsZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lOTdhMDUzMiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL215X2NvbGxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9teV9jb2xsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9teV9jb2xsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU5N2EwNTMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTk3YTA1MzJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbXkvbXlfY29sbGVjdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL215X2NvbGxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5N2EwNTMyJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfY29sbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXlfY29sbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9