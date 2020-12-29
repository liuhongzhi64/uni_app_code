(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/goods_list"],[
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
/*!*************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fgoods%2Fgoods_list"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _goods_list = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/goods_list.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_goods_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 13 */
/*!******************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& */ 14);
/* harmony import */ var _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_list.vue?vue&type=script&lang=js& */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& */ 18);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b383cb9",
  null,
  false,
  _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods/goods_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/*!*************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& ***!
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
  var l2 = _vm.__map(_vm.tabBars, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var l0 =
      !(item.type == 0) && !(item.type == 1) && item.type == 2
        ? _vm.__map(_vm.doctorList, function(i, k) {
            var $orig = _vm.__get_orig(i)

            var g0 = Math.round(i.employed_y)
            return {
              $orig: $orig,
              g0: g0
            }
          })
        : null
    var l1 =
      !(item.type == 0) &&
      !(item.type == 1) &&
      !(item.type == 2) &&
      item.type == 3
        ? _vm.__map(_vm.video_list, function(i, k) {
            var $orig = _vm.__get_orig(i)

            var g1 = Object.prototype.toString.call(i.goods_relation)
            return {
              $orig: $orig,
              g1: g1
            }
          })
        : null
    return {
      $orig: $orig,
      l0: l0,
      l1: l1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l2: l2
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!*******************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=script&lang=js& */ 17);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 479));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var goodsShow = function goodsShow() {__webpack_require__.e(/*! require.ensure | components/goodsShow */ "components/goodsShow").then((function () {return resolve(__webpack_require__(/*! ../../components/goodsShow.vue */ 486));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var diary = function diary() {__webpack_require__.e(/*! require.ensure | components/diary */ "components/diary").then((function () {return resolve(__webpack_require__(/*! ../../components/diary.vue */ 493));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =








































































































































{
  components: {
    topBar: topBar,
    goodsShow: goodsShow,
    diary: diary },

  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      height: 0,
      barName: 'back', //导航条名称
      topBackgroundColor: '#222222',
      color: '#FFFFFF',
      backImage: '/static/images/return.png',
      title: '商品列表',
      requestUrl: '',
      top_id: 23,
      top_index: 3,
      offset: 0,
      tabBars: [
      {
        name: '商品',
        type: 0 },

      {
        name: '日记',
        type: 1 },

      {
        name: '医生',
        type: 2 },

      {
        name: '视频',
        type: 3 }],


      productLists: [],
      doctorList: [],
      video_list: [
      {
        id: 23,
        name: "科普：线雕吸收后会不会更垮？",
        cover_img: "upload/video/images/202012/22/xx5GVyoMAkdXlmc8SpT0wBwKRj50Bu3sQHlZov6f.png",
        path: "upload/video/videos/202012/22/BQqQmqBkkdxLGjYonOZD6wVyHD9XfyIAtD5xWzgI.mp4",
        collect_num: 32,
        doctor_relation: {
          id: "19",
          name: "李黠",
          heading: "upload/doctor/images/202012/19/EKn5ZUvAOGENSb6lA8UcQeVm990CHqEGeI64uGOW.jpeg",
          zhicheng: "华美紫馨无创抗衰老中心主诊医生" },

        category_name: ["埋线提升"],
        goods_relation: {
          status: "1",
          is_delete: "0",
          encrypted_id: "ZnBJeVNXUXR3UUJkVmI1K3hhM1JEdz09",
          goods_name: "测试1225",
          id: "329",
          sku_is_delete: "0",
          head_img: "upload/diary/images/202012/25/uDZOgBUfG6dsj66NY5YrsPcdd8SNyablsD17U6nh_250.jpeg",
          sale_price: "100.0" },

        is_collect: 0 }] };



  },
  onReady: function onReady() {
    var that = this;
    // 判定运行平台
    that.height = uni.getSystemInfoSync().windowHeight;
    var platform = getApp().platform || getApp().globalData.platform || 'Applets';
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
  onReachBottom: function onReachBottom() {
    var that = this;
    that.offset += 1;
    that.getClassList(that.top_id);
  },
  onLoad: function onLoad(option) {
    this.request = this.$request;
    var that = this;
    that.requestUrl = that.request.globalData.requestUrl;
    if (option.name) {
      that.title = option.name;
    }
    // that.top_id = option.id 
    that.getClassList(that.top_id, that.top_index);
  },
  methods: {
    changTop: function changTop(index) {
      var that = this;
      that.top_index = index;
      that.productLists = [];
      that.doctorList = [];
      that.video_list = [];
      that.offset = 0;
      that.getClassList(that.top_id, that.top_index);
    },
    getClassList: function getClassList(id, type) {
      var that = this;
      var dataInfo = {
        interfaceId: 'categoryspuzonelist',
        cid: id,
        type: that.top_index,
        sort: 0,
        sort_type: 0,
        offset: that.offset,
        limit: 6 };

      that.request.uniRequest("goods", dataInfo).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var data = res.data.data;
          that.title = data.name;
          if (type == 2) {
            if (data.list.length > 0) {
              that.doctorList = that.doctorList.concat(data.list);
            } else
            if (data.list.length == 0 && that.offset > 0) {
              uni.showToast({
                title: '没有更多了!',
                icon: 'none' });

            }
          } else if (type == 3) {
            if (data.list.length > 0) {
              that.video_list = that.video_list.concat(data.list);
              console.log(that.video_list);
            } else
            if (data.list.length == 0 && that.offset > 0) {
              uni.showToast({
                title: '没有更多了!',
                icon: 'none' });

            }
          } else
          if (type == 0 || type == 1) {
            if (data.list.length > 0) {
              that.productLists = that.productLists.concat(data.list);
            } else
            if (data.list.length == 0 && that.offset > 0) {
              uni.showToast({
                title: '没有更多了!',
                icon: 'none' });

            }
          }
        }
      });
    },
    // 点赞
    collectLike: function collectLike(id) {var _this = this;
      var videoId = id;
      var data = {
        interfaceId: 'video_collect',
        video_id: videoId,
        status: '0' };

      this.request.uniRequest("/doctor", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          _this.request.showToast('成功');
        }
      });
    },
    // 取消点赞
    cancelLike: function cancelLike(id) {var _this2 = this;
      var videoId = id;
      var data = {
        interfaceId: 'video_collect',
        video_id: videoId,
        status: '1' };

      this.request.uniRequest("/doctor", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          _this2.request.showToast('成功');
        }
      });
    },
    // 收藏
    collect_diary: function collect_diary(id, index) {
      var that = this;
      var data = {
        interfaceId: 'collectdiary',
        diary_id: id };

      this.request.uniRequest("diary", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          that.productLists[index].is_collect = 1;
          that.productLists[index].collect_num += 1;
          uni.showToast({
            title: '已收藏',
            duration: 1000 });

        }
      });
    },
    // 取消收藏
    cancel_like: function cancel_like(id, index) {
      var that = this;
      var data = {
        interfaceId: 'cancelcollectdiary',
        diary_id: id.toString() };

      this.request.uniRequest("diary", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          that.productLists[index].is_collect = 0;
          that.productLists[index].collect_num -= 1;
          uni.showToast({
            title: '已取消收藏',
            duration: 1000 });

        }
      });
    },
    // 医生主页
    goToDoctor: function goToDoctor(doctorId, heading) {
      uni.navigateTo({
        url: "/pages/doctor/doctor_detail?id=".concat(doctorId, "&&heading=").concat(heading) });

    },
    // 点击商品
    gotoGoods: function gotoGoods(id, encrypted_id) {
      uni.navigateTo({
        url: "/pages/goods/goods_detail?sku_id=".concat(id, "&encrypted_id=").concat(encrypted_id) });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */
/*!***************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& */ 19);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[12,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3QudnVlPzRlYzMiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZ29vZHMvZ29vZHNfbGlzdC52dWU/NTYxNCIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZT83ZWUxIiwidW5pLWFwcDovLy9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZT9lMTY2Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3QudnVlPzNjZDQiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0Esc0c7QUFDQUEsVUFBVSxDQUFDQyxtQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSTtBQUNuSTtBQUM4RDtBQUNMO0FBQ3FDOzs7QUFHOUY7QUFDK0s7QUFDL0ssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLGlHQUFNO0FBQ1IsRUFBRSwwR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQW1xQixDQUFnQixpcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUl2ckI7QUFDQTtBQUNBLGtCQURBO0FBRUEsd0JBRkE7QUFHQSxnQkFIQSxFQURBOztBQU1BLE1BTkEsa0JBTUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLGlCQUpBO0FBS0EsbUJBTEE7QUFNQSxlQU5BO0FBT0EscUJBUEEsRUFPQTtBQUNBLG1DQVJBO0FBU0Esc0JBVEE7QUFVQSw0Q0FWQTtBQVdBLG1CQVhBO0FBWUEsb0JBWkE7QUFhQSxnQkFiQTtBQWNBLGtCQWRBO0FBZUEsZUFmQTtBQWdCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxlQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGVBRkEsRUFMQTs7QUFTQTtBQUNBLGtCQURBO0FBRUEsZUFGQSxFQVRBOztBQWFBO0FBQ0Esa0JBREE7QUFFQSxlQUZBLEVBYkEsQ0FoQkE7OztBQWtDQSxzQkFsQ0E7QUFtQ0Esb0JBbkNBO0FBb0NBO0FBQ0E7QUFDQSxjQURBO0FBRUEsOEJBRkE7QUFHQSwrRkFIQTtBQUlBLDBGQUpBO0FBS0EsdUJBTEE7QUFNQTtBQUNBLGtCQURBO0FBRUEsb0JBRkE7QUFHQSxpR0FIQTtBQUlBLHFDQUpBLEVBTkE7O0FBWUEsK0JBWkE7QUFhQTtBQUNBLHFCQURBO0FBRUEsd0JBRkE7QUFHQSwwREFIQTtBQUlBLDhCQUpBO0FBS0EsbUJBTEE7QUFNQSw0QkFOQTtBQU9BLHFHQVBBO0FBUUEsNkJBUkEsRUFiQTs7QUF1QkEscUJBdkJBLEVBREEsQ0FwQ0E7Ozs7QUFnRUEsR0F2RUE7QUF3RUEsU0F4RUEscUJBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUkE7O0FBVUEsS0FaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqR0E7QUFrR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXRHQTtBQXVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWhIQTtBQWlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0EsMENBREE7QUFFQSxlQUZBO0FBR0EsNEJBSEE7QUFJQSxlQUpBO0FBS0Esb0JBTEE7QUFNQSwyQkFOQTtBQU9BLGdCQVBBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0EsV0FWQSxNQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFIQTtBQUlBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0EsV0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSw0QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxPQXRDQTtBQXVDQSxLQTVEQTtBQTZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEseUJBRkE7QUFHQSxtQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQTFFQTtBQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEseUJBRkE7QUFHQSxtQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQXhGQTtBQXlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsMEJBRkE7O0FBSUE7QUFDQSxPQVRBO0FBVUEsS0ExR0E7QUEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBLCtCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0EsT0FUQTtBQVVBLEtBNUhBO0FBNkhBO0FBQ0E7QUFDQTtBQUNBLDZGQURBOztBQUdBLEtBbElBO0FBbUlBO0FBQ0E7QUFDQTtBQUNBLGtHQURBOztBQUdBLEtBeElBLEVBakhBLEU7Ozs7Ozs7Ozs7OztBQ3pJQTtBQUFBO0FBQUE7QUFBQTtBQUFzK0IsQ0FBZ0IsZzhCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0ExL0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9nb29kcy9nb29kc19saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZ29vZHNfbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGIzODNjYjkmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ29vZHNfbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZ29vZHNfbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjM4M2NiOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBiMzgzY2I5XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2dvb2RzL2dvb2RzX2xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYjM4M2NiOSZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGwyID0gX3ZtLl9fbWFwKF92bS50YWJCYXJzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGl0ZW0pXG5cbiAgICB2YXIgbDAgPVxuICAgICAgIShpdGVtLnR5cGUgPT0gMCkgJiYgIShpdGVtLnR5cGUgPT0gMSkgJiYgaXRlbS50eXBlID09IDJcbiAgICAgICAgPyBfdm0uX19tYXAoX3ZtLmRvY3Rvckxpc3QsIGZ1bmN0aW9uKGksIGspIHtcbiAgICAgICAgICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGkpXG5cbiAgICAgICAgICAgIHZhciBnMCA9IE1hdGgucm91bmQoaS5lbXBsb3llZF95KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgICAgICAgICBnMDogZzBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IG51bGxcbiAgICB2YXIgbDEgPVxuICAgICAgIShpdGVtLnR5cGUgPT0gMCkgJiZcbiAgICAgICEoaXRlbS50eXBlID09IDEpICYmXG4gICAgICAhKGl0ZW0udHlwZSA9PSAyKSAmJlxuICAgICAgaXRlbS50eXBlID09IDNcbiAgICAgICAgPyBfdm0uX19tYXAoX3ZtLnZpZGVvX2xpc3QsIGZ1bmN0aW9uKGksIGspIHtcbiAgICAgICAgICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGkpXG5cbiAgICAgICAgICAgIHZhciBnMSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpLmdvb2RzX3JlbGF0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgICAgICAgICBnMTogZzFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IG51bGxcbiAgICByZXR1cm4ge1xuICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgbDA6IGwwLFxuICAgICAgbDE6IGwxXG4gICAgfVxuICB9KVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDI6IGwyXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImdvb2RzXCI+IFxyXG5cdFx0PHRvcEJhciBjbGFzcz1cInRvcEJhclwiIDp0b3BCYWNrZ3JvdW5kQ29sb3I9J3RvcEJhY2tncm91bmRDb2xvcidcclxuXHRcdCA6Y29sb3I9J2NvbG9yJyA6YmFja0ltYWdlPSdiYWNrSW1hZ2UnIDpiYXJOYW1lPSdiYXJOYW1lJ1xyXG5cdFx0IDp0aXRsZT0ndGl0bGUnIDptZW51V2lkdGg9J21lbnVXaWR0aCcgOm1lbnVUb3A9J21lbnVUb3AnIFxyXG5cdFx0IDptZW51SGVpZ2h0PSdtZW51SGVpZ2h0JyA6bWVudUxlZnQ9J21lbnVMZWZ0JyA6bWVudUJvdHRvbT0nbWVudUJvdHRvbSc+XHJcblx0XHQ8L3RvcEJhcj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wLWxpc3RcIiA6c3R5bGU9XCJbeyd0b3AnOm1lbnVCb3R0b20rMTArJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gdGFiQmFyc1wiIDprZXk9J2luZGV4JyBcclxuXHRcdFx0IDpjbGFzcz1cInsnY2hhbmdlLWNsYXNzJyA6IHRvcF9pbmRleD09aW5kZXh9XCIgQHRhcD0nY2hhbmdUb3AoaW5kZXgpJz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiPnt7aXRlbS5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWItbGluZVwiIHYtc2hvdz1cInRvcF9pbmRleD09aW5kZXhcIj48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cdFx0XHRcdFxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1saXN0LWNvbnRlbnRcIiA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUJvdHRvbSs1MCsncHgnLCdtaW4taGVpZ2h0JzpoZWlnaHQtbWVudUJvdHRvbS01MCsncHgnfV1cIj5cdFx0XHRcclxuXHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15ICBjbGFzcz1cIml0ZW0tbGlzdC1jb250ZW50XCIgPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1jb250ZW50IGVuZC1jb250XCIgOmNsYXNzPVwie2Rpczp0b3BfaW5kZXg9PWluZGV4fVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHRhYkJhcnNcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpcy1pdGVtLWNvbnRlbnRcIiB2LWlmPVwiaXRlbS50eXBlPT0wXCI+XHJcblx0XHRcdFx0XHRcdDxnb29kc1Nob3cgOmJvcmRlclJhZGl1cz0yNFxyXG5cdFx0XHRcdFx0XHQgOnJlcXVlc3RVcmw9J3JlcXVlc3RVcmwnIDp3aWR0aD0zNTAgXHJcblx0XHRcdFx0XHRcdCA6cG9yZHVjdExpc3Q9J3Byb2R1Y3RMaXN0cydcclxuXHRcdFx0XHRcdFx0ID5cclxuXHRcdFx0XHRcdFx0PC9nb29kc1Nob3c+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXMtaXRlbS1jb250ZW50XCIgdi1lbHNlLWlmPVwiaXRlbS50eXBlPT0xXCI+XHJcblx0XHRcdFx0XHRcdDxkaWFyeSA6ZGlhcnlMaXN0PVwicHJvZHVjdExpc3RzXCIgOnJlcXVlc3RVcmw9J3JlcXVlc3RVcmwnIEBjb2xsZWN0X2RpYXJ5PSdjb2xsZWN0X2RpYXJ5JyBAY2FuY2VsX2xpa2U9J2NhbmNlbF9saWtlJz48L2RpYXJ5PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzLWl0ZW0tY29udGVudC10eXBlXCIgdi1lbHNlLWlmPVwiaXRlbS50eXBlPT0yXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpcy1kb2N0b3JcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN3aXBlci1pdGVtXCIgdi1mb3I9XCIoaSxrKSBpbiBkb2N0b3JMaXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN3aXBlci1pdGVtLWNvbnRlbnRcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tdG9wLWNvbnRlbnRcIiBAdGFwPSdnb1RvRG9jdG9yKGkuaWQscmVxdWVzdFVybCtpLmhlYWRpbmcpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWQtcG9ydHJhaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRpbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaWRkbGUtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaWRkbGUtZG9jdG9yLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3tpLm5hbWV9fSA8dGV4dD57e2kuemhpY2hlbmd9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wbG95ZWRfdGltZS1jYXNlX251bVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVtcGxveWVkX3RpbWVcIj4g5LuO5Lia57uP6aqMOnt7TWF0aC5yb3VuZChpLmVtcGxveWVkX3kpfX3lubQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FzZV9udW1cIj7moYjliJfmlbA6e3tpLmNhc2VfbnVtfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHNfY2F0ZWdvcnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19jYXRlZ29yeS10aXRsZVwiPuaThemVvzwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9J2dvb2RzX2NhdGVnb3J5LWl0ZW0nIHYtZm9yPVwiKGlzLGluZGV4KSBpbiBpLmdvb2RzX3Byb2plY3RcIiA6a2V5PSdpbmRleCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3tpc319IOOAgVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvY3Rvcl92aWV3XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG9jdG9yX3ZpZXdfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPSdkb2N0b3Jfdmlld190aXRsZSc+6KeC54K5PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmlld19jb250ZW50XCI+e3tpLnZpZXd9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PG5hdmlnYXRvciBjbGFzcz1cImNvbnN1bHRcIiB1cmw9XCIvcGFnZXMvY29uc3VsdGF0aW9uL2NvbnN1bHRhdGlvblwiPiDlkqjor6IgPC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY29tbWVuZGVkX2dvb2RzXCJcclxuXHRcdFx0XHRcdFx0XHRcdCBAdGFwPSdnb3RvR29vZHMoaS5yZWNvbW1lbmRlZF9nb29kcy5pZCxpLnJlY29tbWVuZGVkX2dvb2RzLmVuY3J5cHRlZF9pZCknIHYtaWY9XCJpLnJlY29tbWVuZGVkX2dvb2RzIT0nJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzX2xlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzX3RpdGxlXCI+5o6oPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vc3NfY29udGVudFwiPnt7aS5yZWNvbW1lbmRlZF9nb29kcy5nb29kc19uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2FsZV93ZWlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7aS5yZWNvbW1lbmRlZF9nb29kcy5zYWxlX3dlaWdodCtpLnJlY29tbWVuZGVkX2dvb2RzLnRha2Vfc3RvcmV9feS6uumihOe6plxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNhbGVfcHJpY2VcIj4gPHRleHQ+77+lPC90ZXh0PiB7e2kucmVjb21tZW5kZWRfZ29vZHMuc2FsZV9wcmljZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpc19ob3RcIiBAdGFwPSdnb3RvR29vZHMoaS5ob3RfZ29vZHMuaWQsaS5ob3RfZ29vZHMuZW5jcnlwdGVkX2lkKScgdi1pZj1cImkuaG90X2dvb2RzIT0nJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzX2xlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlzX2hvdF90aXRsZVwiPueDrTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb3NzX2NvbnRlbnRcIj57e2kuaG90X2dvb2RzLmdvb2RzX25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzX3JpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzYWxlX3dlaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB7e2kuaG90X2dvb2RzLnNhbGVfd2VpZ2h0K2kuaG90X2dvb2RzLnRha2Vfc3RvcmV9feS6uumihOe6plxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNhbGVfcHJpY2VcIj4gPHRleHQ+77+lPC90ZXh0PiB7e2kuaG90X2dvb2RzLnNhbGVfcHJpY2V9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzX2NvbnRlbnRfdmlkZW9cIiB2LWVsc2UtaWY9XCJpdGVtLnR5cGU9PTNcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWRlb19pbmZvXCIgdi1mb3I9XCIoaSxrKSBpbiB2aWRlb19saXN0XCIgOmtleT0nayc+XHJcblx0XHRcdFx0XHRcdFx0PG5hdmlnYXRvciBjbGFzcz1cInZpZGVvLWltYWdlc1wiIDp1cmw9XCInL3BhZ2VzL2RpYXJ5L2RpYXJ5X3ZpZGVvP3BhdGg9JytpLnBhdGgrJyZpZD0nK2kuaWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInZpZGVvX2ltZ1wiIDpzcmM9XCJyZXF1ZXN0VXJsK2kuY292ZXJfaW1nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInBheV9idG5cIiBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC92aWRlb19wbGF5LnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW9fbmFtZVwiPiB7eyBpLm5hbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXRlZ29yeV9saXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdF9pdGVtXCIgdi1mb3I9XCIoaXMseikgaW4gaS5jYXRlZ29yeV9uYW1lXCIgOmtleT0neic+IHt7IGlzIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDxuYXZpZ2F0b3IgY2xhc3M9XCJ2aWRlb19nb29kc1wiIHYtaWY9XCJPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaS5nb29kc19yZWxhdGlvbikhPSdbb2JqZWN0IEFycmF5XSdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IDp1cmw9XCInL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbD9za3VfaWQ9JytpLmdvb2RzX3JlbGF0aW9uLmlkKycmZW5jcnlwdGVkX2lkPScraS5nb29kc19yZWxhdGlvbi5lbmNyeXB0ZWRfaWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2kuZ29vZHNfcmVsYXRpb24uaGVhZF9pbWdcIiBjbGFzcz1cImdvb2RzX2ltZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW9fZ29vZHNfaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW9fZ29vZHNfbmFtZVwiPiB7eyBpLmdvb2RzX3JlbGF0aW9uLmdvb2RzX25hbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW9fZ29vZHNfc2FsZV9wcmljZVwiPiDvv6V7eyBpLmdvb2RzX3JlbGF0aW9uLnNhbGVfcHJpY2UgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L25hdmlnYXRvcj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZF9pY28tbmlja19uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZF9pY29cIiA6c3JjPVwicmVxdWVzdFVybCtpLmRvY3Rvcl9yZWxhdGlvbi5oZWFkaW5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJuaWNrX25hbWVcIj57eyBpLmRvY3Rvcl9yZWxhdGlvbi5uYW1lIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXNfbm9fY29sbGVjdFwiIHYtaWY9XCJpLmlzX2NvbGxlY3Q9PTBcIiBAdGFwPVwiY2FuY2VsX3ZpZGVvX2xpa2UoaS5pc19jb2xsZWN0LGkuaWQsaylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpa2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImxpa2UtaW1hZ2VcIiBzcmM9XCJodHRwczovL2ltZy1ibG9nLmNzZG5pbWcuY24vMjAyMDA2MjAxNjUwMDM2MTYucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgaS5jb2xsZWN0X251bSB8fCAwIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0X251bVwiIHYtZWxzZSBAdGFwPVwiY2FuY2VsX3ZpZGVvX2xpa2UoaS5pc19jb2xsZWN0LGkuaWQsaylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpa2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImxpa2UtaW1hZ2VcIiBzcmM9XCJodHRwczovL2ltZy1ibG9nLmNzZG5pbWcuY24vMjAyMDA2MjAxNjUwMDM2MTYucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgaS5jb2xsZWN0X251bSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHRvcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b3BCYXIudnVlXCI7XHJcblx0aW1wb3J0IGdvb2RzU2hvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nb29kc1Nob3cudnVlXCI7XHJcblx0aW1wb3J0IGRpYXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhcnkudnVlJztcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHRvcEJhcixcclxuXHRcdFx0Z29vZHNTaG93LFxyXG5cdFx0XHRkaWFyeSxcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lbnVXaWR0aDogMCxcclxuXHRcdFx0XHRtZW51VG9wOiAwLFxyXG5cdFx0XHRcdG1lbnVIZWlnaHQ6IDAsXHJcblx0XHRcdFx0bWVudUxlZnQ6IDAsXHJcblx0XHRcdFx0bWVudUJvdHRvbTogMCxcclxuXHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0YmFyTmFtZTogJ2JhY2snLCAvL+WvvOiIquadoeWQjeensFxyXG5cdFx0XHRcdHRvcEJhY2tncm91bmRDb2xvcjogJyMyMjIyMjInLFxyXG5cdFx0XHRcdGNvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0YmFja0ltYWdlOiAnL3N0YXRpYy9pbWFnZXMvcmV0dXJuLnBuZycsXHJcblx0XHRcdFx0dGl0bGU6ICfllYblk4HliJfooagnLFxyXG5cdFx0XHRcdHJlcXVlc3RVcmw6ICcnLFxyXG5cdFx0XHRcdHRvcF9pZDoyMyxcclxuXHRcdFx0XHR0b3BfaW5kZXg6MyxcclxuXHRcdFx0XHRvZmZzZXQ6MCxcclxuXHRcdFx0XHR0YWJCYXJzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4EnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAwXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5pel6K6wJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WMu+eUnycsXHJcblx0XHRcdFx0XHRcdHR5cGU6IDJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfop4bpopEnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAzXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0cHJvZHVjdExpc3RzOltdLFxyXG5cdFx0XHRcdGRvY3Rvckxpc3Q6W10sXHJcblx0XHRcdFx0dmlkZW9fbGlzdDpbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlkOiAyMyxcclxuXHRcdFx0XHRcdFx0bmFtZTogXCLnp5Hmma7vvJrnur/pm5XlkLjmlLblkI7kvJrkuI3kvJrmm7Tlnq7vvJ9cIixcclxuXHRcdFx0XHRcdFx0Y292ZXJfaW1nOiBcInVwbG9hZC92aWRlby9pbWFnZXMvMjAyMDEyLzIyL3h4NUdWeW9NQWtkWGxtYzhTcFQwd0J3S1JqNTBCdTNzUUhsWm92NmYucG5nXCIsXHJcblx0XHRcdFx0XHRcdHBhdGg6IFwidXBsb2FkL3ZpZGVvL3ZpZGVvcy8yMDIwMTIvMjIvQlFxUW1xQmtrZHhMR2pZb25PWkQ2d1Z5SEQ5WGZ5SUF0RDV4V3pnSS5tcDRcIixcclxuXHRcdFx0XHRcdFx0Y29sbGVjdF9udW06IDMyLFxyXG5cdFx0XHRcdFx0XHRkb2N0b3JfcmVsYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRpZDogXCIxOVwiLFxyXG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwi5p2O6bugXCIsXHJcblx0XHRcdFx0XHRcdFx0aGVhZGluZzogXCJ1cGxvYWQvZG9jdG9yL2ltYWdlcy8yMDIwMTIvMTkvRUtuNVpVdkFPR0VOU2I2bEE4VWNRZVZtOTkwQ0hxRUdlSTY0dUdPVy5qcGVnXCIsXHJcblx0XHRcdFx0XHRcdFx0emhpY2hlbmc6IFwi5Y2O576O57Sr6aao5peg5Yib5oqX6KGw6ICB5Lit5b+D5Li76K+K5Yy755SfXCJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0Y2F0ZWdvcnlfbmFtZTogW1wi5Z+L57q/5o+Q5Y2HXCJdLFxyXG5cdFx0XHRcdFx0XHRnb29kc19yZWxhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXR1czogXCIxXCIsXHJcblx0XHRcdFx0XHRcdFx0aXNfZGVsZXRlOiBcIjBcIixcclxuXHRcdFx0XHRcdFx0XHRlbmNyeXB0ZWRfaWQ6IFwiWm5CSmVWTlhVWFIzVVVKa1ZtSTFLM2hoTTFKRWR6MDlcIixcclxuXHRcdFx0XHRcdFx0XHRnb29kc19uYW1lOiBcIua1i+ivlTEyMjVcIixcclxuXHRcdFx0XHRcdFx0XHRpZDogXCIzMjlcIixcclxuXHRcdFx0XHRcdFx0XHRza3VfaXNfZGVsZXRlOiBcIjBcIixcclxuXHRcdFx0XHRcdFx0XHRoZWFkX2ltZzogXCJ1cGxvYWQvZGlhcnkvaW1hZ2VzLzIwMjAxMi8yNS91RFpPZ0JVZkc2ZHNqNjZOWTVZcnNQY2RkOFNOeWFibHNEMTdVNm5oXzI1MC5qcGVnXCIsXHJcblx0XHRcdFx0XHRcdFx0c2FsZV9wcmljZTogXCIxMDAuMFwiXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGlzX2NvbGxlY3Q6IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdC8vIOWIpOWumui/kOihjOW5s+WPsFxyXG5cdFx0XHR0aGF0LmhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCA7XHJcblx0XHRcdGxldCBwbGF0Zm9ybSA9IGdldEFwcCgpLnBsYXRmb3JtIHx8IGdldEFwcCgpLmdsb2JhbERhdGEucGxhdGZvcm0gfHwgJ0FwcGxldHMnXHJcblx0XHRcdGlmIChwbGF0Zm9ybSA9PSAnQXBwbGV0cycpIHtcclxuXHRcdFx0XHQvLyDojrflj5blsY/luZXpq5jluqZcclxuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IG1lbnUud2lkdGhcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51VG9wID0gbWVudS50b3BcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IG1lbnUubGVmdFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSBtZW51LmJvdHRvbVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gXHJcblx0XHRcdGVsc2UgaWYgKHBsYXRmb3JtID09ICdBUFAnKXtcclxuXHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IDkwXHJcblx0XHRcdFx0dGhhdC5tZW51VG9wID0gNDBcclxuXHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSA3MFxyXG5cdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IDMwXHJcblx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IDI3OFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQub2Zmc2V0ICs9IDE7XHJcblx0XHRcdHRoYXQuZ2V0Q2xhc3NMaXN0KHRoYXQudG9wX2lkKVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbikge1xyXG5cdFx0XHR0aGlzLnJlcXVlc3QgPSB0aGlzLiRyZXF1ZXN0XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHR0aGF0LnJlcXVlc3RVcmwgPSB0aGF0LnJlcXVlc3QuZ2xvYmFsRGF0YS5yZXF1ZXN0VXJsXHJcblx0XHRcdGlmKG9wdGlvbi5uYW1lKXtcclxuXHRcdFx0XHR0aGF0LnRpdGxlID0gb3B0aW9uLm5hbWVcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB0aGF0LnRvcF9pZCA9IG9wdGlvbi5pZCBcclxuXHRcdFx0dGhhdC5nZXRDbGFzc0xpc3QodGhhdC50b3BfaWQsdGhhdC50b3BfaW5kZXgpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaGFuZ1RvcDpmdW5jdGlvbihpbmRleCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC50b3BfaW5kZXggPSBpbmRleFxyXG5cdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gW11cclxuXHRcdFx0XHR0aGF0LmRvY3Rvckxpc3QgPSBbXVxyXG5cdFx0XHRcdHRoYXQudmlkZW9fbGlzdCA9IFtdXHJcblx0XHRcdFx0dGhhdC5vZmZzZXQgPSAwXHJcblx0XHRcdFx0dGhhdC5nZXRDbGFzc0xpc3QodGhhdC50b3BfaWQsdGhhdC50b3BfaW5kZXgpXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENsYXNzTGlzdDpmdW5jdGlvbihpZCx0eXBlKXtcclxuXHRcdFx0XHRjb25zdCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbz17XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDonY2F0ZWdvcnlzcHV6b25lbGlzdCcsXHJcblx0XHRcdFx0XHRjaWQ6aWQsXHJcblx0XHRcdFx0XHR0eXBlOnRoYXQudG9wX2luZGV4LFxyXG5cdFx0XHRcdFx0c29ydDowLFxyXG5cdFx0XHRcdFx0c29ydF90eXBlOjAsXHJcblx0XHRcdFx0XHRvZmZzZXQ6dGhhdC5vZmZzZXQsXHJcblx0XHRcdFx0XHRsaW1pdDo2XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQudGl0bGUgPSBkYXRhLm5hbWVcclxuXHRcdFx0XHRcdFx0aWYodHlwZT09Mil7XHJcblx0XHRcdFx0XHRcdFx0aWYoZGF0YS5saXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuZG9jdG9yTGlzdCA9IHRoYXQuZG9jdG9yTGlzdC5jb25jYXQoZGF0YS5saXN0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmKGRhdGEubGlzdC5sZW5ndGg9PTAmJnRoYXQub2Zmc2V0PjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOifmsqHmnInmm7TlpJrkuoYhJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZih0eXBlPT0zKXtcclxuXHRcdFx0XHRcdFx0XHRpZihkYXRhLmxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC52aWRlb19saXN0ID0gdGhhdC52aWRlb19saXN0LmNvbmNhdChkYXRhLmxpc3QpXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0LnZpZGVvX2xpc3QpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYoZGF0YS5saXN0Lmxlbmd0aD09MCYmdGhhdC5vZmZzZXQ+MCl7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6J+ayoeacieabtOWkmuS6hiEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZih0eXBlPT0wfHx0eXBlPT0xKXtcclxuXHRcdFx0XHRcdFx0XHRpZihkYXRhLmxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5wcm9kdWN0TGlzdHMgPSB0aGF0LnByb2R1Y3RMaXN0cy5jb25jYXQoZGF0YS5saXN0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmKGRhdGEubGlzdC5sZW5ndGg9PTAmJnRoYXQub2Zmc2V0PjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOifmsqHmnInmm7TlpJrkuoYhJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K56LWeXHJcblx0XHRcdGNvbGxlY3RMaWtlOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB2aWRlb0lkID0gaWRcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAndmlkZW9fY29sbGVjdCcsXHJcblx0XHRcdFx0XHR2aWRlb19pZDogdmlkZW9JZCxcclxuXHRcdFx0XHRcdHN0YXR1czogJzAnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiL2RvY3RvclwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVxdWVzdC5zaG93VG9hc3QoJ+aIkOWKnycpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y+W5raI54K56LWeXHJcblx0XHRcdGNhbmNlbExpa2U6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdFx0bGV0IHZpZGVvSWQgPSBpZFxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICd2aWRlb19jb2xsZWN0JyxcclxuXHRcdFx0XHRcdHZpZGVvX2lkOiB2aWRlb0lkLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiAnMSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCIvZG9jdG9yXCIsIGRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0LnNob3dUb2FzdCgn5oiQ5YqfJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlLbol49cclxuXHRcdFx0Y29sbGVjdF9kaWFyeTogZnVuY3Rpb24oaWQsIGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NvbGxlY3RkaWFyeScsXHJcblx0XHRcdFx0XHRkaWFyeV9pZDogaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJkaWFyeVwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzW2luZGV4XS5pc19jb2xsZWN0ID0gMVxyXG5cdFx0XHRcdFx0XHR0aGF0LnByb2R1Y3RMaXN0c1tpbmRleF0uY29sbGVjdF9udW0gKz0gMVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3suaUtuiXjycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj5bmtojmlLbol49cclxuXHRcdFx0Y2FuY2VsX2xpa2U6IGZ1bmN0aW9uKGlkLCBpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjYW5jZWxjb2xsZWN0ZGlhcnknLFxyXG5cdFx0XHRcdFx0ZGlhcnlfaWQ6IGlkLnRvU3RyaW5nKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJkaWFyeVwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzW2luZGV4XS5pc19jb2xsZWN0ID0gMFxyXG5cdFx0XHRcdFx0XHR0aGF0LnByb2R1Y3RMaXN0c1tpbmRleF0uY29sbGVjdF9udW0gLT0gMVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3suWPlua2iOaUtuiXjycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDljLvnlJ/kuLvpobVcclxuXHRcdFx0Z29Ub0RvY3RvcjpmdW5jdGlvbihkb2N0b3JJZCxoZWFkaW5nKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZG9jdG9yL2RvY3Rvcl9kZXRhaWw/aWQ9JHtkb2N0b3JJZH0mJmhlYWRpbmc9JHtoZWFkaW5nfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75ZWG5ZOBXHJcblx0XHRcdGdvdG9Hb29kczogZnVuY3Rpb24oaWQsZW5jcnlwdGVkX2lkKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbD9za3VfaWQ9JHtpZH0mZW5jcnlwdGVkX2lkPSR7ZW5jcnlwdGVkX2lkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0Lmdvb2RzLWxpc3QtY29udGVudHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0fVxyXG5cdC50b3AtbGlzdHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHotaW5kZXg6IDExMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjOTk5OTk5O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0Lmxpc3QtaXRlbXtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAxcnB4IHNvbGlkICNGMEYwRjA7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5saXN0LWl0ZW06bGFzdC1jaGlsZHtcclxuXHRcdGJvcmRlci1yaWdodDogMDtcclxuXHR9XHJcblx0LmNoYW5nZS1jbGFzc3tcclxuXHRcdGNvbG9yOiAjRkEzNDc1O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdC50YWItbGluZSB7XHJcblx0XHRoZWlnaHQ6IDRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkEzNDc1O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAycnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtMnJweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQuZW5kLWNvbnQge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0XHJcblx0LmRpcyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblx0LnRoaXMtaXRlbS1jb250ZW50e1xyXG5cdFx0cGFkZGluZzogMzBycHggMjBycHggMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcblx0fVxyXG5cdC50aGlzLWl0ZW0tY29udGVudC10eXBle1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHR9XHJcblx0LnN3aXBlci1pdGVtIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiAzMHJweCA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjRycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5zd2lwZXItaXRlbS1jb250ZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5pdGVtLXRvcC1jb250ZW50e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5oZWFkLXBvcnRyYWl0IGltYWdlIHtcclxuXHRcdGhlaWdodDogMTIwcnB4O1xyXG5cdFx0d2lkdGg6IDEyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDYwcnB4O1xyXG5cdH1cclxuXHQubWlkZGxlLWNvbnRlbnR7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0bWFyZ2luOiAwIDEwcnB4O1xyXG5cdH1cclxuXHQubWlkZGxlLWRvY3Rvci1uYW1le1xyXG5cdFx0Zm9udC1zaXplOiAzNHJweDtcclxuXHRcdHdpZHRoOiA4MCU7XHJcblx0fVxyXG5cdC5taWRkbGUtZG9jdG9yLW5hbWUgdGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cdC5lbXBsb3llZF90aW1lLWNhc2VfbnVte1xyXG5cdFx0d2lkdGg6IDcwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDE1cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5nb29kc19jYXRlZ29yeXtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHQuZ29vZHNfY2F0ZWdvcnktdGl0bGV7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjRycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0Ym9yZGVyOiBzb2xpZCAxcnB4ICNlODVjOWU7XHJcblx0XHRjb2xvcjogI2U4NWM5ZTtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuZW5kX2NvbnR7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuZG9jdG9yX3ZpZXd7XHJcblx0XHR3aWR0aDogMTAwJTtcdFxyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblx0LmRvY3Rvcl92aWV3X2NvbnRlbnR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHQuZG9jdG9yX3ZpZXdfdGl0bGV7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjRycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0Ym9yZGVyOiBzb2xpZCAxcnB4ICM2ODllZmI7XHRcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogIzY4OWVmYjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cdC5yZWNvbW1lbmRlZF9nb29kc3tcclxuXHRcdHdpZHRoOiA1NzBycHg7XHJcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA1NnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1NnJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyOHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDI3cnB4O1xyXG5cdH1cclxuXHQuZ29vZHNfbGVmdHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuZ29vZHNfdGl0bGV7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmN2IxYTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHQuZ29vc3NfY29udGVudHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHR9XHJcblx0Lmdvb2RzX3JpZ2h0e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5zYWxlX3dlaWdodHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdG1pbi13aWR0aDogMTAwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0fVxyXG5cdC5zYWxlX3ByaWNle1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjY2ZiZTg1O1xyXG5cdFx0XHJcblx0fVxyXG5cdC5zYWxlX3ByaWNlIHRleHR7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQuaXNfaG90e1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0XHR3aWR0aDogNTcwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdGhlaWdodDogNTZycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNTZycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjhycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cdC5pc19ob3RfdGl0bGV7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2RhMTI5ZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1x0XHJcblx0fVxyXG5cdC5jb25zdWx0e1xyXG5cdFx0d2lkdGg6IDExMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NnJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNjZmJlODU7XHJcblx0XHRjb2xvcjogI2NmYmQ4NTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRvcDogIDA7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdH1cclxuXHQudGhpc19jb250ZW50X3ZpZGVve1xyXG5cdFx0cGFkZGluZzogMzBycHggMTVycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQudmlkZW9faW5mb3tcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHQudmlkZW8taW1hZ2VzIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0XHJcblx0LnZpZGVvX2ltZyB7XHJcblx0XHR3aWR0aDogMzUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTZycHggMTZycHggMCAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHRcclxuXHQucGF5X2J0biB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAxNDVycHg7XHJcblx0XHRib3R0b206IDQ1JTtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0fVxyXG5cdC5pbmZvX2NvbnRlbnQge1xyXG5cdFx0cGFkZGluZzogMTBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0XHJcblx0LnZpZGVvX25hbWUge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHRcclxuXHQuY2F0ZWdvcnlfbGlzdCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHBhZGRpbmctdG9wOiAxNXJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxNXJweDtcclxuXHR9XHJcblx0XHJcblx0Lmxpc3RfaXRlbSB7XHJcblx0XHRsaW5lLWhlaWdodDogMjhycHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxOHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHR9XHJcblx0XHJcblx0LnZpZGVvX2dvb2RzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDEwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuZ29vZHNfaW1nIHtcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMGYwZjA7XHJcblx0fVxyXG5cdFxyXG5cdC52aWRlb19nb29kc19pbmZvIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHRcclxuXHQudmlkZW9fZ29vZHNfbmFtZSB7XHJcblx0XHRmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcblx0fVxyXG5cdFxyXG5cdC52aWRlb19nb29kc19zYWxlX3ByaWNlIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHRcclxuXHQudXNlcl9pbmZvIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQuaGVhZF9pY28tbmlja19uYW1lIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQuaGVhZF9pY28ge1xyXG5cdFx0d2lkdGg6IDQ4cnB4O1xyXG5cdFx0aGVpZ2h0OiA0OHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkIHJlZDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uaWNrX25hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHRcclxuXHQuY29sbGVjdF9udW0ge1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGNvbG9yOiAjZmM0NzgzO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5pc19ub19jb2xsZWN0IHtcclxuXHRcdGNvbG9yOiAjQjJCMkIyO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuaXNfbm9fY29sbGVjdCAubGlrZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwO1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jb2xsZWN0X251bSAubGlrZSB7XHJcblx0XHR3aWR0aDogNDJycHg7XHJcblx0XHRoZWlnaHQ6IDQycnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjFycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZhMzQ3NSAwJSwgI2ZmNjY5OSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KCNmNTZmYjQsICNmNTZmYjQpO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5saWtlLWltYWdlIHtcclxuXHRcdHdpZHRoOiAyNHJweDtcclxuXHRcdGhlaWdodDogMjRycHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiMzgzY2I5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dvb2RzX2xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGIzODNjYjkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA5MjM3MDk2NzE2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==