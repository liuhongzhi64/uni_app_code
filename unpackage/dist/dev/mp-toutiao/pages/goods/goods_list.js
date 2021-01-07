(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/goods_list"],{

/***/ 203:
/*!*************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fgoods%2Fgoods_list"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _goods_list = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/goods_list.vue */ 204));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_goods_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 204:
/*!******************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& */ 205);
/* harmony import */ var _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_list.vue?vue&type=script&lang=js& */ 207);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& */ 209);
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

/***/ 205:
/*!*************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=template&id=0b383cb9&scoped=true& */ 206);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0b383cb9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 206:
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
  var l2 = !(
    _vm.productLists.length == 0 &&
    _vm.doctorList.length == 0 &&
    _vm.video_list.length == 0
  )
    ? _vm.__map(_vm.tabBars, function(item, index) {
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
    : null
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

/***/ 207:
/*!*******************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=script&lang=js& */ 208);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 208:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 510));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var goodsShow = function goodsShow() {__webpack_require__.e(/*! require.ensure | components/goodsShow */ "components/goodsShow").then((function () {return resolve(__webpack_require__(/*! ../../components/goodsShow.vue */ 496));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var diary = function diary() {__webpack_require__.e(/*! require.ensure | components/diary */ "components/diary").then((function () {return resolve(__webpack_require__(/*! ../../components/diary.vue */ 517));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =











































































































































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
      top_index: 0,
      offset: 0,
      tabBars: [
      {
        name: '商品',
        type: 0 },

      {
        name: '买家秀',
        type: 1 },

      {
        name: '医生',
        type: 2 },

      {
        name: '视频',
        type: 3 }],


      productLists: [],
      doctorList: [],
      video_list: [] };

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
    if (option.id) {
      that.top_id = option.id;
    }
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
    go_to_doctor: function go_to_doctor(doctorId, heading) {
      uni.navigateTo({
        url: "/pages/doctor/doctor_detail?id=".concat(doctorId, "&&heading=").concat(heading) });

    },
    // 点击商品
    gotoGoods: function gotoGoods(id, encrypted_id) {
      uni.navigateTo({
        url: "/pages/goods/goods_detail?sku_id=".concat(id, "&encrypted_id=").concat(encrypted_id) });

    },
    cancel_video_like: function cancel_video_like(is_collect, id, index) {
      var that = this;
      if (is_collect == 0) {
        var dataInfo = {
          interfaceId: 'collectvideo',
          video_id: id.toString() };

        this.request.uniRequest("video", dataInfo).then(function (res) {
          if (res.data.code == 1000 && res.data.status == 'ok') {
            that.video_list[index].is_collect = 1;
            that.video_list[index].collect_num += 1;
            uni.showToast({
              title: '已收藏',
              duration: 1000 });

          }
        });
      } else {
        var _dataInfo = {
          interfaceId: 'cancelcollectvideo',
          video_id: id.toString() };

        this.request.uniRequest("video", _dataInfo).then(function (res) {
          if (res.data.code == 1000 && res.data.status == 'ok') {
            that.video_list[index].is_collect = 0;
            that.video_list[index].collect_num -= 1;
            uni.showToast({
              title: '已取消收藏',
              duration: 1000 });

          }
        });
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 209:
/*!***************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& */ 210);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_style_index_0_id_0b383cb9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 210:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/goods/goods_list.vue?vue&type=style&index=0&id=0b383cb9&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[203,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZT81MzM2Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3QudnVlPzRlYzMiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZ29vZHMvZ29vZHNfbGlzdC52dWU/NTYxNCIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZT83ZWUxIiwidW5pLWFwcDovLy9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZT9lMTY2Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzX2xpc3QudnVlPzNjZDQiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLHVHO0FBQ0FBLFVBQVUsQ0FBQ0MsbUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1JO0FBQ25JO0FBQzhEO0FBQ0w7QUFDcUM7OztBQUc5RjtBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUsaUdBQU07QUFDUixFQUFFLDBHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUFtcUIsQ0FBZ0IsaXFCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0SXZyQjtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQTtBQUdBLGdCQUhBLEVBREE7O0FBTUEsTUFOQSxrQkFNQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTtBQUdBLG1CQUhBO0FBSUEsaUJBSkE7QUFLQSxtQkFMQTtBQU1BLGVBTkE7QUFPQSxxQkFQQSxFQU9BO0FBQ0EsbUNBUkE7QUFTQSxzQkFUQTtBQVVBLDRDQVZBO0FBV0EsbUJBWEE7QUFZQSxvQkFaQTtBQWFBLGdCQWJBO0FBY0Esa0JBZEE7QUFlQSxlQWZBO0FBZ0JBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGVBRkEsRUFEQTs7QUFLQTtBQUNBLG1CQURBO0FBRUEsZUFGQSxFQUxBOztBQVNBO0FBQ0Esa0JBREE7QUFFQSxlQUZBLEVBVEE7O0FBYUE7QUFDQSxrQkFEQTtBQUVBLGVBRkEsRUFiQSxDQWhCQTs7O0FBa0NBLHNCQWxDQTtBQW1DQSxvQkFuQ0E7QUFvQ0Esb0JBcENBOztBQXNDQSxHQTdDQTtBQThDQSxTQTlDQSxxQkE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FSQTs7QUFVQSxLQVpBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXZFQTtBQXdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBNUVBO0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXhGQTtBQXlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0EsMENBREE7QUFFQSxlQUZBO0FBR0EsNEJBSEE7QUFJQSxlQUpBO0FBS0Esb0JBTEE7QUFNQSwyQkFOQTtBQU9BLGdCQVBBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0EsV0FWQSxNQVVBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSw0QkFGQTs7QUFJQTtBQUNBLFdBVkE7QUFXQTtBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsNEJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsT0FyQ0E7QUFzQ0EsS0EzREE7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLHlCQUZBO0FBR0EsbUJBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0F6RUE7QUEwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLHlCQUZBO0FBR0EsbUJBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0F2RkE7QUF3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0EsT0FUQTtBQVVBLEtBekdBO0FBMEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBREE7QUFFQSwrQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSwwQkFGQTs7QUFJQTtBQUNBLE9BVEE7QUFVQSxLQTNIQTtBQTRIQTtBQUNBO0FBQ0E7QUFDQSw2RkFEQTs7QUFHQSxLQWpJQTtBQWtJQTtBQUNBO0FBQ0E7QUFDQSxrR0FEQTs7QUFHQSxLQXZJQTtBQXdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsaUNBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsNEJBRkE7O0FBSUE7QUFDQSxTQVRBO0FBVUEsT0FmQSxNQWVBO0FBQ0E7QUFDQSwyQ0FEQTtBQUVBLGlDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0EsU0FUQTtBQVVBO0FBQ0EsS0F6S0EsRUF6RkEsRTs7Ozs7Ozs7Ozs7OztBQzVJQTtBQUFBO0FBQUE7QUFBQTtBQUFzK0IsQ0FBZ0IsZzhCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBMS9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvZ29vZHMvZ29vZHNfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2dvb2RzX2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiMzgzY2I5JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ29vZHNfbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dvb2RzX2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2dvb2RzX2xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGIzODNjYjkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYjM4M2NiOVwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9nb29kcy9nb29kc19saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZ29vZHNfbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGIzODNjYjkmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBsMiA9ICEoXG4gICAgX3ZtLnByb2R1Y3RMaXN0cy5sZW5ndGggPT0gMCAmJlxuICAgIF92bS5kb2N0b3JMaXN0Lmxlbmd0aCA9PSAwICYmXG4gICAgX3ZtLnZpZGVvX2xpc3QubGVuZ3RoID09IDBcbiAgKVxuICAgID8gX3ZtLl9fbWFwKF92bS50YWJCYXJzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgICAgIHZhciBsMCA9XG4gICAgICAgICAgIShpdGVtLnR5cGUgPT0gMCkgJiYgIShpdGVtLnR5cGUgPT0gMSkgJiYgaXRlbS50eXBlID09IDJcbiAgICAgICAgICAgID8gX3ZtLl9fbWFwKF92bS5kb2N0b3JMaXN0LCBmdW5jdGlvbihpLCBrKSB7XG4gICAgICAgICAgICAgICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaSlcblxuICAgICAgICAgICAgICAgIHZhciBnMCA9IE1hdGgucm91bmQoaS5lbXBsb3llZF95KVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAkb3JpZzogJG9yaWcsXG4gICAgICAgICAgICAgICAgICBnMDogZzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgdmFyIGwxID1cbiAgICAgICAgICAhKGl0ZW0udHlwZSA9PSAwKSAmJlxuICAgICAgICAgICEoaXRlbS50eXBlID09IDEpICYmXG4gICAgICAgICAgIShpdGVtLnR5cGUgPT0gMikgJiZcbiAgICAgICAgICBpdGVtLnR5cGUgPT0gM1xuICAgICAgICAgICAgPyBfdm0uX19tYXAoX3ZtLnZpZGVvX2xpc3QsIGZ1bmN0aW9uKGksIGspIHtcbiAgICAgICAgICAgICAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpKVxuXG4gICAgICAgICAgICAgICAgdmFyIGcxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGkuZ29vZHNfcmVsYXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgICAgICAgICAgICAgIGcxOiBnMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgICAgICBsMDogbDAsXG4gICAgICAgICAgbDE6IGwxXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgOiBudWxsXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDI6IGwyXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImdvb2RzXCI+IFxyXG5cdFx0PHRvcEJhciBjbGFzcz1cInRvcEJhclwiIDp0b3BCYWNrZ3JvdW5kQ29sb3I9J3RvcEJhY2tncm91bmRDb2xvcidcclxuXHRcdCA6Y29sb3I9J2NvbG9yJyA6YmFja0ltYWdlPSdiYWNrSW1hZ2UnIDpiYXJOYW1lPSdiYXJOYW1lJ1xyXG5cdFx0IDp0aXRsZT0ndGl0bGUnIDptZW51V2lkdGg9J21lbnVXaWR0aCcgOm1lbnVUb3A9J21lbnVUb3AnIFxyXG5cdFx0IDptZW51SGVpZ2h0PSdtZW51SGVpZ2h0JyA6bWVudUxlZnQ9J21lbnVMZWZ0JyA6bWVudUJvdHRvbT0nbWVudUJvdHRvbSc+XHJcblx0XHQ8L3RvcEJhcj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidG9wLWxpc3RcIiA6c3R5bGU9XCJbeyd0b3AnOm1lbnVCb3R0b20rMTArJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdC1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gdGFiQmFyc1wiIDprZXk9J2luZGV4JyBcclxuXHRcdFx0IDpjbGFzcz1cInsnY2hhbmdlLWNsYXNzJyA6IHRvcF9pbmRleD09aW5kZXh9XCIgQHRhcD0nY2hhbmdUb3AoaW5kZXgpJz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tbmFtZVwiPnt7aXRlbS5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWItbGluZVwiIHYtc2hvdz1cInRvcF9pbmRleD09aW5kZXhcIj48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cdFx0XHRcdFxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1saXN0LWNvbnRlbnRcIiA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6bWVudUJvdHRvbSs1MCsncHgnLCdtaW4taGVpZ2h0JzpoZWlnaHQtbWVudUJvdHRvbS01MCsncHgnfV1cIj5cdFx0XHRcclxuXHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15ICBjbGFzcz1cIml0ZW0tbGlzdC1jb250ZW50XCIgPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibm8taGF2ZS1wb3JkdWN0XCIgdi1pZj1cInByb2R1Y3RMaXN0cy5sZW5ndGg9PTAmJmRvY3Rvckxpc3QubGVuZ3RoPT0wJiZ2aWRlb19saXN0Lmxlbmd0aD09MFwiXHJcblx0XHRcdFx0IDpzdHlsZT1cIlt7J21pbi1oZWlnaHQnOmhlaWdodC1tZW51Qm90dG9tLTUwKydweCd9XVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL25vX2NvbW1lbnQucG5nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibm8taGF2ZS1wb3JkdWN0LWhpbnRcIj7mmoLml6Dnm7jlhbPCt8K3wrc8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1jb250ZW50IGVuZC1jb250XCIgdi1lbHNlIDpjbGFzcz1cIntkaXM6dG9wX2luZGV4PT1pbmRleH1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB0YWJCYXJzXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXMtaXRlbS1jb250ZW50XCIgdi1pZj1cIml0ZW0udHlwZT09MFwiPlxyXG5cdFx0XHRcdFx0XHQ8Z29vZHNTaG93IDpib3JkZXJSYWRpdXM9MjRcclxuXHRcdFx0XHRcdFx0IDpyZXF1ZXN0VXJsPSdyZXF1ZXN0VXJsJyA6d2lkdGg9MzUwIFxyXG5cdFx0XHRcdFx0XHQgOnBvcmR1Y3RMaXN0PSdwcm9kdWN0TGlzdHMnXHJcblx0XHRcdFx0XHRcdCA+XHJcblx0XHRcdFx0XHRcdDwvZ29vZHNTaG93PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aGlzLWl0ZW0tY29udGVudFwiIHYtZWxzZS1pZj1cIml0ZW0udHlwZT09MVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGlhcnkgOmRpYXJ5TGlzdD1cInByb2R1Y3RMaXN0c1wiIDpyZXF1ZXN0VXJsPSdyZXF1ZXN0VXJsJyBAY29sbGVjdF9kaWFyeT0nY29sbGVjdF9kaWFyeScgQGNhbmNlbF9saWtlPSdjYW5jZWxfbGlrZSc+PC9kaWFyeT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpcy1pdGVtLWNvbnRlbnQtdHlwZVwiIHYtZWxzZS1pZj1cIml0ZW0udHlwZT09MlwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXMtZG9jdG9yXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzd2lwZXItaXRlbVwiIHYtZm9yPVwiKGksaykgaW4gZG9jdG9yTGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzd2lwZXItaXRlbS1jb250ZW50XCI+XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLXRvcC1jb250ZW50XCIgQHRhcD0nZ29fdG9fZG9jdG9yKGkuaWQscmVxdWVzdFVybCtpLmhlYWRpbmcpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWQtcG9ydHJhaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmhlYWRpbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaWRkbGUtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaWRkbGUtZG9jdG9yLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3tpLm5hbWV9fSA8dGV4dD57e2kuemhpY2hlbmd9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wbG95ZWRfdGltZS1jYXNlX251bVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVtcGxveWVkX3RpbWVcIj4g5LuO5Lia57uP6aqMOnt7TWF0aC5yb3VuZChpLmVtcGxveWVkX3kpfX3lubQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FzZV9udW1cIj7moYjliJfmlbA6e3tpLmNhc2VfbnVtfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHNfY2F0ZWdvcnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJnb29kc19jYXRlZ29yeS10aXRsZVwiPuaThemVvzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9J2dvb2RzX2NhdGVnb3J5LWl0ZW0nIHYtZm9yPVwiKGlzLGluZGV4KSBpbiBpLmdvb2RzX3Byb2plY3RcIiA6a2V5PSdpbmRleCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3tpc319IOOAgVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvY3Rvcl92aWV3XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPSdkb2N0b3Jfdmlld190aXRsZSc+6KeC54K5PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZpZXdfY29udGVudFwiPnt7aS52aWV3fX08L3RleHQ+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxuYXZpZ2F0b3IgY2xhc3M9XCJjb25zdWx0XCIgdXJsPVwiL3BhZ2VzL2NvbnN1bHRhdGlvbi9jb25zdWx0YXRpb25cIj4g5ZKo6K+iIDwvbmF2aWdhdG9yPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNvbW1lbmRlZF9nb29kc1wiXHJcblx0XHRcdFx0XHRcdFx0XHQgQHRhcD0nZ290b0dvb2RzKGkucmVjb21tZW5kZWRfZ29vZHMuaWQsaS5yZWNvbW1lbmRlZF9nb29kcy5lbmNyeXB0ZWRfaWQpJyB2LWlmPVwiaS5yZWNvbW1lbmRlZF9nb29kcyE9JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc190aXRsZVwiPuaOqDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImdvb3NzX2NvbnRlbnRcIj57e2kucmVjb21tZW5kZWRfZ29vZHMuZ29vZHNfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHNfcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNhbGVfd2VpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e2kucmVjb21tZW5kZWRfZ29vZHMuc2FsZV93ZWlnaHQraS5yZWNvbW1lbmRlZF9nb29kcy50YWtlX3N0b3JlfX3kurrpooTnuqZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzYWxlX3ByaWNlXCI+IDx0ZXh0Pu+/pTwvdGV4dD4ge3tpLnJlY29tbWVuZGVkX2dvb2RzLnNhbGVfcHJpY2V9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXNfaG90XCIgQHRhcD0nZ290b0dvb2RzKGkuaG90X2dvb2RzLmlkLGkuaG90X2dvb2RzLmVuY3J5cHRlZF9pZCknIHYtaWY9XCJpLmhvdF9nb29kcyE9JydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpc19ob3RfdGl0bGVcIj7ng608L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29zc19jb250ZW50XCI+e3tpLmhvdF9nb29kcy5nb29kc19uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kc19yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2FsZV93ZWlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQge3tpLmhvdF9nb29kcy5zYWxlX3dlaWdodCtpLmhvdF9nb29kcy50YWtlX3N0b3JlfX3kurrpooTnuqZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzYWxlX3ByaWNlXCI+IDx0ZXh0Pu+/pTwvdGV4dD4ge3tpLmhvdF9nb29kcy5zYWxlX3ByaWNlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhpc19jb250ZW50X3ZpZGVvXCIgdi1lbHNlLWlmPVwiaXRlbS50eXBlPT0zXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW9faW5mb1wiIHYtZm9yPVwiKGksaykgaW4gdmlkZW9fbGlzdFwiIDprZXk9J2snPlxyXG5cdFx0XHRcdFx0XHRcdDxuYXZpZ2F0b3IgY2xhc3M9XCJ2aWRlby1pbWFnZXNcIiA6dXJsPVwiJy9wYWdlcy9kaWFyeS9kaWFyeV92aWRlbz9wYXRoPScraS5wYXRoKycmaWQ9JytpLmlkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ2aWRlb19pbWdcIiA6c3JjPVwicmVxdWVzdFVybCtpLmNvdmVyX2ltZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJwYXlfYnRuXCIgc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvdmlkZW9fcGxheS5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvbmF2aWdhdG9yPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mb19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvX25hbWVcIj4ge3sgaS5uYW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2F0ZWdvcnlfbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3RfaXRlbVwiIHYtZm9yPVwiKGlzLHopIGluIGkuY2F0ZWdvcnlfbmFtZVwiIDprZXk9J3onPiB7eyBpcyB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bmF2aWdhdG9yIGNsYXNzPVwidmlkZW9fZ29vZHNcIiB2LWlmPVwiT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGkuZ29vZHNfcmVsYXRpb24pIT0nW29iamVjdCBBcnJheV0nXCJcclxuXHRcdFx0XHRcdFx0XHRcdCA6dXJsPVwiJy9wYWdlcy9nb29kcy9nb29kc19kZXRhaWw/c2t1X2lkPScraS5nb29kc19yZWxhdGlvbi5pZCsnJmVuY3J5cHRlZF9pZD0nK2kuZ29vZHNfcmVsYXRpb24uZW5jcnlwdGVkX2lkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpLmdvb2RzX3JlbGF0aW9uLmhlYWRfaW1nXCIgY2xhc3M9XCJnb29kc19pbWdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvX2dvb2RzX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvX2dvb2RzX25hbWVcIj4ge3sgaS5nb29kc19yZWxhdGlvbi5nb29kc19uYW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvX2dvb2RzX3NhbGVfcHJpY2VcIj4g77+le3sgaS5nb29kc19yZWxhdGlvbi5zYWxlX3ByaWNlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRfaWNvLW5pY2tfbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRfaWNvXCIgOnNyYz1cInJlcXVlc3RVcmwraS5kb2N0b3JfcmVsYXRpb24uaGVhZGluZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibmlja19uYW1lXCI+e3sgaS5kb2N0b3JfcmVsYXRpb24ubmFtZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlzX25vX2NvbGxlY3RcIiB2LWlmPVwiaS5pc19jb2xsZWN0PT0wXCIgQHRhcD1cImNhbmNlbF92aWRlb19saWtlKGkuaXNfY29sbGVjdCxpLmlkLGspXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaWtlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJsaWtlLWltYWdlXCIgc3JjPVwiaHR0cHM6Ly9pbWctYmxvZy5jc2RuaW1nLmNuLzIwMjAwNjIwMTY1MDAzNjE2LnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7IGkuY29sbGVjdF9udW0gfHwgMCB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdF9udW1cIiB2LWVsc2UgQHRhcD1cImNhbmNlbF92aWRlb19saWtlKGkuaXNfY29sbGVjdCxpLmlkLGspXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaWtlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJsaWtlLWltYWdlXCIgc3JjPVwiaHR0cHM6Ly9pbWctYmxvZy5jc2RuaW1nLmNuLzIwMjAwNjIwMTY1MDAzNjE2LnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7IGkuY29sbGVjdF9udW0gfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB0b3BCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9wQmFyLnZ1ZVwiO1xyXG5cdGltcG9ydCBnb29kc1Nob3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ29vZHNTaG93LnZ1ZVwiO1xyXG5cdGltcG9ydCBkaWFyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYXJ5LnZ1ZSc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR0b3BCYXIsXHJcblx0XHRcdGdvb2RzU2hvdyxcclxuXHRcdFx0ZGlhcnksXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZW51V2lkdGg6IDAsXHJcblx0XHRcdFx0bWVudVRvcDogMCxcclxuXHRcdFx0XHRtZW51SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdG1lbnVMZWZ0OiAwLFxyXG5cdFx0XHRcdG1lbnVCb3R0b206IDAsXHJcblx0XHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGJhck5hbWU6ICdiYWNrJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHR0b3BCYWNrZ3JvdW5kQ29sb3I6ICcjMjIyMjIyJyxcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdGJhY2tJbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3JldHVybi5wbmcnLFxyXG5cdFx0XHRcdHRpdGxlOiAn5ZWG5ZOB5YiX6KGoJyxcclxuXHRcdFx0XHRyZXF1ZXN0VXJsOiAnJyxcclxuXHRcdFx0XHR0b3BfaWQ6MjMsXHJcblx0XHRcdFx0dG9wX2luZGV4OjAsXHJcblx0XHRcdFx0b2Zmc2V0OjAsXHJcblx0XHRcdFx0dGFiQmFyczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOBJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+S5sOWutuengCcsXHJcblx0XHRcdFx0XHRcdHR5cGU6IDFcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfljLvnlJ8nLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAyXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn6KeG6aKRJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogM1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHByb2R1Y3RMaXN0czpbXSxcclxuXHRcdFx0XHRkb2N0b3JMaXN0OltdLFxyXG5cdFx0XHRcdHZpZGVvX2xpc3Q6W11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8g5Yik5a6a6L+Q6KGM5bmz5Y+wXHJcblx0XHRcdHRoYXQuaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0IDtcclxuXHRcdFx0bGV0IHBsYXRmb3JtID0gZ2V0QXBwKCkucGxhdGZvcm0gfHwgZ2V0QXBwKCkuZ2xvYmFsRGF0YS5wbGF0Zm9ybSB8fCAnQXBwbGV0cydcclxuXHRcdFx0aWYgKHBsYXRmb3JtID09ICdBcHBsZXRzJykge1xyXG5cdFx0XHRcdC8vIOiOt+WPluWxj+W5lemrmOW6plxyXG5cdFx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRsZXQgbWVudSA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVdpZHRoID0gbWVudS53aWR0aFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSBtZW51LnRvcFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVIZWlnaHQgPSBtZW51LmhlaWdodFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gbWVudS5sZWZ0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IG1lbnUuYm90dG9tXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBcclxuXHRcdFx0ZWxzZSBpZiAocGxhdGZvcm0gPT0gJ0FQUCcpe1xyXG5cdFx0XHRcdHRoYXQubWVudVdpZHRoID0gOTBcclxuXHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSA0MFxyXG5cdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IDcwXHJcblx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gMzBcclxuXHRcdFx0XHR0aGF0Lm1lbnVMZWZ0ID0gMjc4XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5vZmZzZXQgKz0gMTtcclxuXHRcdFx0dGhhdC5nZXRDbGFzc0xpc3QodGhhdC50b3BfaWQpXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uKSB7XHJcblx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3RcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoYXQucmVxdWVzdFVybCA9IHRoYXQucmVxdWVzdC5nbG9iYWxEYXRhLnJlcXVlc3RVcmxcclxuXHRcdFx0aWYob3B0aW9uLm5hbWUpe1xyXG5cdFx0XHRcdHRoYXQudGl0bGUgPSBvcHRpb24ubmFtZVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKG9wdGlvbi5pZCl7XHJcblx0XHRcdFx0dGhhdC50b3BfaWQgPSBvcHRpb24uaWQgXHJcblx0XHRcdH1cclxuXHRcdFx0dGhhdC5nZXRDbGFzc0xpc3QodGhhdC50b3BfaWQsdGhhdC50b3BfaW5kZXgpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaGFuZ1RvcDpmdW5jdGlvbihpbmRleCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC50b3BfaW5kZXggPSBpbmRleFxyXG5cdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzID0gW11cclxuXHRcdFx0XHR0aGF0LmRvY3Rvckxpc3QgPSBbXVxyXG5cdFx0XHRcdHRoYXQudmlkZW9fbGlzdCA9IFtdXHJcblx0XHRcdFx0dGhhdC5vZmZzZXQgPSAwXHJcblx0XHRcdFx0dGhhdC5nZXRDbGFzc0xpc3QodGhhdC50b3BfaWQsdGhhdC50b3BfaW5kZXgpXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENsYXNzTGlzdDpmdW5jdGlvbihpZCx0eXBlKXtcclxuXHRcdFx0XHRjb25zdCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbz17XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDonY2F0ZWdvcnlzcHV6b25lbGlzdCcsXHJcblx0XHRcdFx0XHRjaWQ6aWQsXHJcblx0XHRcdFx0XHR0eXBlOnRoYXQudG9wX2luZGV4LFxyXG5cdFx0XHRcdFx0c29ydDowLFxyXG5cdFx0XHRcdFx0c29ydF90eXBlOjAsXHJcblx0XHRcdFx0XHRvZmZzZXQ6dGhhdC5vZmZzZXQsXHJcblx0XHRcdFx0XHRsaW1pdDo2XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQucmVxdWVzdC51bmlSZXF1ZXN0KFwiZ29vZHNcIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdHRoYXQudGl0bGUgPSBkYXRhLm5hbWVcclxuXHRcdFx0XHRcdFx0aWYodHlwZT09Mil7XHJcblx0XHRcdFx0XHRcdFx0aWYoZGF0YS5saXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuZG9jdG9yTGlzdCA9IHRoYXQuZG9jdG9yTGlzdC5jb25jYXQoZGF0YS5saXN0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmKGRhdGEubGlzdC5sZW5ndGg9PTAmJnRoYXQub2Zmc2V0PjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOifmsqHmnInmm7TlpJrkuoYhJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZih0eXBlPT0zKXtcclxuXHRcdFx0XHRcdFx0XHRpZihkYXRhLmxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC52aWRlb19saXN0ID0gdGhhdC52aWRlb19saXN0LmNvbmNhdChkYXRhLmxpc3QpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYoZGF0YS5saXN0Lmxlbmd0aD09MCYmdGhhdC5vZmZzZXQ+MCl7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6J+ayoeacieabtOWkmuS6hiEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZih0eXBlPT0wfHx0eXBlPT0xKXtcclxuXHRcdFx0XHRcdFx0XHRpZihkYXRhLmxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5wcm9kdWN0TGlzdHMgPSB0aGF0LnByb2R1Y3RMaXN0cy5jb25jYXQoZGF0YS5saXN0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmKGRhdGEubGlzdC5sZW5ndGg9PTAmJnRoYXQub2Zmc2V0PjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOifmsqHmnInmm7TlpJrkuoYhJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K56LWeXHJcblx0XHRcdGNvbGxlY3RMaWtlOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB2aWRlb0lkID0gaWRcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAndmlkZW9fY29sbGVjdCcsXHJcblx0XHRcdFx0XHR2aWRlb19pZDogdmlkZW9JZCxcclxuXHRcdFx0XHRcdHN0YXR1czogJzAnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiL2RvY3RvclwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVxdWVzdC5zaG93VG9hc3QoJ+aIkOWKnycpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y+W5raI54K56LWeXHJcblx0XHRcdGNhbmNlbExpa2U6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdFx0bGV0IHZpZGVvSWQgPSBpZFxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICd2aWRlb19jb2xsZWN0JyxcclxuXHRcdFx0XHRcdHZpZGVvX2lkOiB2aWRlb0lkLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiAnMSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCIvZG9jdG9yXCIsIGRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0LnNob3dUb2FzdCgn5oiQ5YqfJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlLbol49cclxuXHRcdFx0Y29sbGVjdF9kaWFyeTogZnVuY3Rpb24oaWQsIGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NvbGxlY3RkaWFyeScsXHJcblx0XHRcdFx0XHRkaWFyeV9pZDogaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJkaWFyeVwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzW2luZGV4XS5pc19jb2xsZWN0ID0gMVxyXG5cdFx0XHRcdFx0XHR0aGF0LnByb2R1Y3RMaXN0c1tpbmRleF0uY29sbGVjdF9udW0gKz0gMVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3suaUtuiXjycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj5bmtojmlLbol49cclxuXHRcdFx0Y2FuY2VsX2xpa2U6IGZ1bmN0aW9uKGlkLCBpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjYW5jZWxjb2xsZWN0ZGlhcnknLFxyXG5cdFx0XHRcdFx0ZGlhcnlfaWQ6IGlkLnRvU3RyaW5nKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJkaWFyeVwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQucHJvZHVjdExpc3RzW2luZGV4XS5pc19jb2xsZWN0ID0gMFxyXG5cdFx0XHRcdFx0XHR0aGF0LnByb2R1Y3RMaXN0c1tpbmRleF0uY29sbGVjdF9udW0gLT0gMVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3suWPlua2iOaUtuiXjycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDljLvnlJ/kuLvpobVcclxuXHRcdFx0Z29fdG9fZG9jdG9yOmZ1bmN0aW9uKGRvY3RvcklkLGhlYWRpbmcpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9kb2N0b3IvZG9jdG9yX2RldGFpbD9pZD0ke2RvY3RvcklkfSYmaGVhZGluZz0ke2hlYWRpbmd9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vllYblk4FcclxuXHRcdFx0Z290b0dvb2RzOiBmdW5jdGlvbihpZCxlbmNyeXB0ZWRfaWQpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfZGV0YWlsP3NrdV9pZD0ke2lkfSZlbmNyeXB0ZWRfaWQ9JHtlbmNyeXB0ZWRfaWR9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYW5jZWxfdmlkZW9fbGlrZTpmdW5jdGlvbihpc19jb2xsZWN0LGlkLGluZGV4KXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZihpc19jb2xsZWN0PT0wKXtcclxuXHRcdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0aW50ZXJmYWNlSWQ6J2NvbGxlY3R2aWRlbycsXHJcblx0XHRcdFx0XHRcdHZpZGVvX2lkOmlkLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwidmlkZW9cIiwgZGF0YUluZm8pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQudmlkZW9fbGlzdFtpbmRleF0uaXNfY29sbGVjdCA9IDFcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnZpZGVvX2xpc3RbaW5kZXhdLmNvbGxlY3RfbnVtICs9MVxyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICflt7LmlLbol48nLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0XHR9KVx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGludGVyZmFjZUlkOidjYW5jZWxjb2xsZWN0dmlkZW8nLFxyXG5cdFx0XHRcdFx0XHR2aWRlb19pZDppZC50b1N0cmluZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnJlcXVlc3QudW5pUmVxdWVzdChcInZpZGVvXCIsIGRhdGFJbmZvKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnZpZGVvX2xpc3RbaW5kZXhdLmlzX2NvbGxlY3QgPSAwXHJcblx0XHRcdFx0XHRcdFx0dGhhdC52aWRlb19saXN0W2luZGV4XS5jb2xsZWN0X251bSAtPTFcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5bey5Y+W5raI5pS26JePJyxcclxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHRcdFx0fSlcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuZ29vZHMtbGlzdC1jb250ZW50e1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHR9XHJcblx0LnRvcC1saXN0e1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMTEwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICM5OTk5OTk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHQubGlzdC1pdGVte1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRib3JkZXItcmlnaHQ6IDFycHggc29saWQgI0YwRjBGMDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0Lmxpc3QtaXRlbTpsYXN0LWNoaWxke1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAwO1xyXG5cdH1cclxuXHQuY2hhbmdlLWNsYXNze1xyXG5cdFx0Y29sb3I6ICNGQTM0NzU7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0LnRhYi1saW5lIHtcclxuXHRcdGhlaWdodDogNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGQTM0NzU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDJycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IC0ycnB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC5lbmQtY29udCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHRcclxuXHQuZGlzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHQudGhpcy1pdGVtLWNvbnRlbnR7XHJcblx0XHRwYWRkaW5nOiAzMHJweCAyMHJweCAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHR9XHJcblx0LnRoaXMtaXRlbS1jb250ZW50LXR5cGV7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdH1cclxuXHQuc3dpcGVyLWl0ZW0ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHR9XHJcblx0XHJcblx0LnN3aXBlci1pdGVtLWNvbnRlbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0Lml0ZW0tdG9wLWNvbnRlbnR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmhlYWQtcG9ydHJhaXQgaW1hZ2Uge1xyXG5cdFx0aGVpZ2h0OiAxMjBycHg7XHJcblx0XHR3aWR0aDogMTIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNjBycHg7XHJcblx0fVxyXG5cdC5taWRkbGUtY29udGVudHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRtYXJnaW46IDAgMTBycHg7XHJcblx0fVxyXG5cdC5taWRkbGUtZG9jdG9yLW5hbWV7XHJcblx0XHRmb250LXNpemU6IDM0cnB4O1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHR9XHJcblx0Lm1pZGRsZS1kb2N0b3ItbmFtZSB0ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblx0LmVtcGxveWVkX3RpbWUtY2FzZV9udW17XHJcblx0XHR3aWR0aDogNzAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXJweDtcclxuXHR9XHJcblx0XHJcblx0Lmdvb2RzX2NhdGVnb3J5e1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cdC5nb29kc19jYXRlZ29yeS10aXRsZXtcclxuXHRcdHdpZHRoOiA1MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyNHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVycHg7XHJcblx0XHRib3JkZXI6IHNvbGlkIDFycHggI2U4NWM5ZTtcclxuXHRcdGNvbG9yOiAjZTg1YzllO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5lbmRfY29udHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5kb2N0b3Jfdmlld3tcclxuXHRcdHdpZHRoOiAxMDAlO1x0XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuZG9jdG9yX3ZpZXdfdGl0bGV7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjRycHg7XHJcblx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXJweDtcclxuXHRcdGJvcmRlcjogc29saWQgMXJweCAjNjg5ZWZiO1x0XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICM2ODllZmI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHQucmVjb21tZW5kZWRfZ29vZHN7XHJcblx0XHR3aWR0aDogNTcwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdGhlaWdodDogNTZycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNTZycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjhycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyN3JweDtcclxuXHR9XHJcblx0Lmdvb2RzX2xlZnR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0Lmdvb2RzX3RpdGxle1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZjdiMWE7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHR9XHJcblx0Lmdvb3NzX2NvbnRlbnR7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdC5nb29kc19yaWdodHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQuc2FsZV93ZWlnaHR7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRtaW4td2lkdGg6IDEwMHJweDtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdH1cclxuXHQuc2FsZV9wcmljZXtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogI2NmYmU4NTtcclxuXHRcdFxyXG5cdH1cclxuXHQuc2FsZV9wcmljZSB0ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblx0LmlzX2hvdHtcclxuXHRcdG1hcmdpbi10b3A6IDE1cnB4O1xyXG5cdFx0d2lkdGg6IDU3MHJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjBycHg7XHJcblx0XHRoZWlnaHQ6IDU2cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDU2cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI4cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQuaXNfaG90X3RpdGxle1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyOHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkYTEyOWY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcdFxyXG5cdH1cclxuXHQuY29uc3VsdHtcclxuXHRcdHdpZHRoOiAxMTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDZycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdGJvcmRlcjogMnJweCBzb2xpZCAjY2ZiZTg1O1xyXG5cdFx0Y29sb3I6ICNjZmJkODU7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0b3A6ICAwO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHR9XHJcblx0LnRoaXNfY29udGVudF92aWRlb3tcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDE1cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LnZpZGVvX2luZm97XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblx0LnZpZGVvLWltYWdlcyB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdFxyXG5cdC52aWRlb19pbWcge1xyXG5cdFx0d2lkdGg6IDM1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4IDE2cnB4IDAgMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblx0XHJcblx0LnBheV9idG4ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMTQ1cnB4O1xyXG5cdFx0Ym90dG9tOiA0NSU7XHJcblx0XHR3aWR0aDogNjBycHg7XHJcblx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdH1cclxuXHQuaW5mb19jb250ZW50IHtcclxuXHRcdHBhZGRpbmc6IDEwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdFxyXG5cdC52aWRlb19uYW1lIHtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblx0XHJcblx0LmNhdGVnb3J5X2xpc3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRwYWRkaW5nLXRvcDogMTVycHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5saXN0X2l0ZW0ge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXJweDtcclxuXHRcdGZvbnQtc2l6ZTogMThycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcblx0fVxyXG5cdFxyXG5cdC52aWRlb19nb29kcyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxMHJweDtcclxuXHR9XHJcblx0XHJcblx0Lmdvb2RzX2ltZyB7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBmMGYwO1xyXG5cdH1cclxuXHRcclxuXHQudmlkZW9fZ29vZHNfaW5mbyB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0XHJcblx0LnZpZGVvX2dvb2RzX25hbWUge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdH1cclxuXHRcclxuXHQudmlkZW9fZ29vZHNfc2FsZV9wcmljZSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblx0XHJcblx0LnVzZXJfaW5mbyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LmhlYWRfaWNvLW5pY2tfbmFtZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmhlYWRfaWNvIHtcclxuXHRcdHdpZHRoOiA0OHJweDtcclxuXHRcdGhlaWdodDogNDhycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdH1cclxuXHRcclxuXHQubmlja19uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblx0XHJcblx0LmNvbGxlY3RfbnVtIHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRjb2xvcjogI2ZjNDc4MztcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQuaXNfbm9fY29sbGVjdCB7XHJcblx0XHRjb2xvcjogI0IyQjJCMjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHR9XHJcblx0XHJcblx0LmlzX25vX2NvbGxlY3QgLmxpa2Uge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY29sbGVjdF9udW0gLmxpa2Uge1xyXG5cdFx0d2lkdGg6IDQycnB4O1xyXG5cdFx0aGVpZ2h0OiA0MnJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIxcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmYTM0NzUgMCUsICNmZjY2OTkgMTAwJSksIGxpbmVhci1ncmFkaWVudCgjZjU2ZmI0LCAjZjU2ZmI0KTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cnB4O1xyXG5cdH1cclxuXHRcclxuXHQubGlrZS1pbWFnZSB7XHJcblx0XHR3aWR0aDogMjRycHg7XHJcblx0XHRoZWlnaHQ6IDI0cnB4O1xyXG5cdH1cclxuXHQubm8taGF2ZS1wb3JkdWN0IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cdFxyXG5cdC5uby1oYXZlLXBvcmR1Y3QgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDQwMHJweDtcclxuXHR9XHJcblx0LmhhdmUtcG9yZHVjdC1pdGVte1xyXG5cdFx0bWFyZ2luLXRvcDogLTIwcnB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDEwcnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZ29vZHNfbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjM4M2NiOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nb29kc19saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiMzgzY2I5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMDAwMzA3NTY0M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=