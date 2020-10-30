(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/diary/diary_detail"],{

/***/ 189:
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fdiary%2Fdiary_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _diary_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/diary/diary_detail.vue */ 190));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_diary_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 190:
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& */ 191);
/* harmony import */ var _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=script&lang=js& */ 193);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& */ 195);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "799f96d2",
  null,
  false,
  _diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/diary/diary_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 191:
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& */ 192);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 192:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& ***!
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

/***/ 193:
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=script&lang=js& */ 194);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 194:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 468));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =




























































































{
  components: {
    topBar: topBar },

  data: function data() {
    return {
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      menuLeft: 0,
      menuBottom: 0,
      height: 0,
      barName: 'back', //导航条名称
      topBackgroundColor: '#333333',
      color: '#FFFFFF',
      backImage: '../static/images/back2.png',
      title: '日记详情',
      intervalTime: 3000, //自动切换时间间隔
      durationTime: 1000, //	滑动动画时长
      swiperList: [],
      id: '', //日记id
      content: '', //内容
      collect_num: 0, //日记收藏数
      diary_num: 1, //日记总数,
      doctor: [{}], //医生信息    为空则不展示
      goods: [{}], //日记关联的商品信息
      head_ico: '', // 日记用户用户头像
      imgs: [], //日记图片地址     该字段不为空  日记有图片
      is_collect: 0, // 浏览用户是否收藏    0 未收藏  1 已收藏
      nick_name: '', // 日记用户昵称
      share_num: 0,
      diaryTitle: '', //日记标题
      user_mark: '', //日记用户标示
      video: '', // 日记视频地址    该字段不为空  日记有视频
      view_num: 0, //日记浏览数
      requestUrl: '' };

  },
  onLoad: function onLoad(options) {
    var that = this;
    that.id = options.id;
    this.request = this.$request;
    that.requestUrl = that.request.globalData.requestUrl;
    that.diarydetails(that.id);
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
    // 详情
    diarydetails: function diarydetails(id) {
      this.request = this.$request;
      var that = this;
      var data = {
        interfaceId: 'diarydetails',
        diary_id: id };

      this.request.uniRequest("/diary", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var _data = res.data.data;
          // console.log(data)
          that.id = _data.id; //日记id
          that.content = _data.content; //内容
          that.collect_num = _data.collect_num; //日记收藏数
          that.diary_num = _data.diary_num; //日记总数,
          that.doctor = _data.doctor; //医生信息    为空则不展示
          that.goods = _data.goods; //日记关联的商品信息
          that.head_ico = _data.head_ico; // 日记用户用户头像
          that.imgs = _data.imgs; //日记图片地址     该字段不为空  日记有图片
          that.is_collect = _data.is_collect; // 浏览用户是否收藏    0 未收藏  1 已收藏
          that.nick_name = _data.nick_name; // 日记用户昵称
          that.share_num = _data.share_num;
          that.diaryTitle = _data.title; //日记标题
          that.user_mark = _data.user_mark; //日记用户标示
          that.video = _data.video; // 日记视频地址    该字段不为空  日记有视频
          that.view_num = _data.view_num; //日记浏览数
          that.swiperList = that.imgs;
        }
      });
    },
    // 相关商品
    goToGoods: function goToGoods(goodsId) {
      // console.log(goodsId)
      uni.navigateTo({
        url: "/pages/goods/goods_detail?id=".concat(goodsId) });

    },
    // 相关医生
    goToDoctor: function goToDoctor(doctorId) {
      uni.navigateTo({
        url: "/pages/doctor/doctor_detail?id=".concat(doctorId) });

    },
    // 个人主页
    personal: function personal(user_mark) {
      uni.navigateTo({
        url: "/pages/diary/diary_personal?user_mark=".concat(user_mark) });

    },

    // 收藏
    collectdiary: function collectdiary(e) {var _this = this;
      this.request = this.$request;
      var id = e.currentTarget.dataset.id;
      var data = {
        interfaceId: 'collectdiary',
        diary_id: id };

      this.request.uniRequest("/diary", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          _this.request.showToast('成功');
        }
      });
    },
    // 取消收藏
    cancelLike: function cancelLike(id) {
      console.log(id);
    },
    // 咨询
    goToConsult: function goToConsult() {
      console.log('咨询');
      // uni.navigateTo({
      // 	url: `/pages/consultation/consultation`,
      // })
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 195:
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& */ 196);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 196:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[189,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWU/Mjg3YyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlP2U5ZjYiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZGlhcnkvZGlhcnlfZGV0YWlsLnZ1ZT9jNGJkIiwidW5pLWFwcDovLy9wYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWU/MWZlNCIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlP2IxN2EiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLDJHO0FBQ0FBLFVBQVUsQ0FBQ0MscUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFJO0FBQ3JJO0FBQ2dFO0FBQ0w7QUFDcUM7OztBQUdoRztBQUMrSztBQUMvSyxnQkFBZ0Isc0xBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVBQUUsbUdBQU07QUFDUixFQUFFLDRHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQXFxQixDQUFnQixtcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM2RnpyQjtBQUNBO0FBQ0Esa0JBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBO0FBR0EsbUJBSEE7QUFJQSxpQkFKQTtBQUtBLG1CQUxBO0FBTUEsZUFOQTtBQU9BLHFCQVBBLEVBT0E7QUFDQSxtQ0FSQTtBQVNBLHNCQVRBO0FBVUEsNkNBVkE7QUFXQSxtQkFYQTtBQVlBLHdCQVpBLEVBWUE7QUFDQSx3QkFiQSxFQWFBO0FBQ0Esb0JBZEE7QUFlQSxZQWZBLEVBZUE7QUFDQSxpQkFoQkEsRUFnQkE7QUFDQSxvQkFqQkEsRUFpQkE7QUFDQSxrQkFsQkEsRUFrQkE7QUFDQSxrQkFuQkEsRUFtQkE7QUFDQSxpQkFwQkEsRUFvQkE7QUFDQSxrQkFyQkEsRUFxQkE7QUFDQSxjQXRCQSxFQXNCQTtBQUNBLG1CQXZCQSxFQXVCQTtBQUNBLG1CQXhCQSxFQXdCQTtBQUNBLGtCQXpCQTtBQTBCQSxvQkExQkEsRUEwQkE7QUFDQSxtQkEzQkEsRUEyQkE7QUFDQSxlQTVCQSxFQTRCQTtBQUNBLGlCQTdCQSxFQTZCQTtBQUNBLG9CQTlCQTs7QUFnQ0EsR0FyQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E1Q0E7QUE2Q0EsU0E3Q0EscUJBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FWQTs7QUFZQSxHQTVEQTtBQTZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBSEEsQ0FHQTtBQUNBLHVDQUpBLENBSUE7QUFDQSwrQ0FMQSxDQUtBO0FBQ0EsMkNBTkEsQ0FNQTtBQUNBLHFDQVBBLENBT0E7QUFDQSxtQ0FSQSxDQVFBO0FBQ0EseUNBVEEsQ0FTQTtBQUNBLGlDQVZBLENBVUE7QUFDQSw2Q0FYQSxDQVdBO0FBQ0EsMkNBWkEsQ0FZQTtBQUNBO0FBQ0Esd0NBZEEsQ0FjQTtBQUNBLDJDQWZBLENBZUE7QUFDQSxtQ0FoQkEsQ0FnQkE7QUFDQSx5Q0FqQkEsQ0FpQkE7QUFDQTtBQUNBO0FBQ0EsT0FyQkE7QUFzQkEsS0EvQkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFEQTs7QUFHQSxLQXRDQTtBQXVDQTtBQUNBO0FBQ0E7QUFDQSwrREFEQTs7QUFHQSxLQTVDQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQSx1RUFEQTs7QUFHQSxLQWxEQTs7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0FqRUE7QUFrRUE7QUFDQTtBQUNBO0FBQ0EsS0FyRUE7QUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1RUEsRUE3REEsRTs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUF3K0IsQ0FBZ0IsazhCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBNS9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvZGlhcnkvZGlhcnlfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5OWY5NmQyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk5Zjk2ZDImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3OTlmOTZkMlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5OWY5NmQyJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiZGlhcnlfZGV0YWlsXCI+XHJcblx0XHQ8dG9wQmFyIGNsYXNzPVwidG9wQmFyXCIgOnRvcEJhY2tncm91bmRDb2xvcj0ndG9wQmFja2dyb3VuZENvbG9yJyA6Y29sb3I9J2NvbG9yJyA6YmFja0ltYWdlPSdiYWNrSW1hZ2UnIDpiYXJOYW1lPSdiYXJOYW1lJ1xyXG5cdFx0IDp0aXRsZT0ndGl0bGUnIDptZW51V2lkdGg9J21lbnVXaWR0aCcgOm1lbnVUb3A9J21lbnVUb3AnIDptZW51SGVpZ2h0PSdtZW51SGVpZ2h0JyA6bWVudUxlZnQ9J21lbnVMZWZ0JyA6bWVudUJvdHRvbT0nbWVudUJvdHRvbSc+PC90b3BCYXI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImRpYXJ5X2RldGFpbF9jb250ZW50XCIgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOm1lbnVCb3R0b20rMTArJ3B4JywnbWluLWhlaWdodCc6aGVpZ2h0LW1lbnVCb3R0b20tMTArJ3B4J31dXCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteSBjbGFzcz1cImRldGFpbF9jb250ZW50XCI+XHJcblx0XHRcdFx0PHRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxfY29udGVudC1hbGxcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItaGVhZC1wb3J0cmFpdC1uYW1lLXBob25lLXNldFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWhlYWQtcG9ydHJhaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2hlYWRfaWNvXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1jYXJ0LXBob25lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWUtY2FydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIj57e25pY2tfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9udW1iZXJcIiBAdGFwPSdwZXJzb25hbCh1c2VyX21hcmspJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWFseiuoXt7ZGlhcnlfbnVtfX3nr4cgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbC1zd2lwZXJcIiB2LWlmPVwic3dpcGVyTGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzd2lwZXIgY2xhc3M9XCJ0b3Atc3dpcGVyXCIgaW5kaWNhdG9yLWRvdHMgaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcj1cIiNmZmZmZmZcIiA6aW50ZXJ2YWw9J2ludGVydmFsVGltZScgOmR1cmF0aW9uPVwiZHVyYXRpb25UaW1lXCJcclxuXHRcdFx0XHRcdFx0XHQgY2lyY3VsYXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJkb2N0b3ItaW5mb3JtYXRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0IHYtZm9yPVwiKGksaW5kZXgpIGluIHN3aXBlckxpc3RcIiA6a2V5PVwiaW5kZXhcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOid1cmwoJytyZXF1ZXN0VXJsK2krJyknfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcC1zd2lwZXItaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS0gPGltYWdlIGNsYXNzPVwidG9wLXN3aXBlci1pbWFnZXNcIiA6c3JjPVwicmVxdWVzdFVybCtpXCIgPjwvaW1hZ2U+XHRcdFx0XHRcdFx0XHRcdFx0XHQgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW1lc3NhZ2VcIiBAdGFwPSdnb1RvR29vZHMoZ29vZHMuaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicG9yZHVjdC1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2dvb2RzLmhlYWRfaW1nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbmFtZS1wcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtbmFtZVwiPnt7Z29vZHMuZ29vZHNfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtcHJpY2VcIj7CpTx0ZXh0Pnt7Z29vZHMuc2FsZV9wcmljZX19PC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29ycmVsYXRpb24tZG9jdG9yXCIgQHRhcD0nZ29Ub0RvY3Rvcihkb2N0b3IuaWQpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG9jdG9yLWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwrZG9jdG9yLmhlYWRpbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG9jdG9yLW5hbWUtc3Vib3JkaW5hdGUtcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb2N0b3ItbmFtZVwiPnt7ZG9jdG9yLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJvcmRpbmF0ZS1wb3NpdGlvblwiPnt7ZG9jdG9yLnpoaWNoZW5nfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9zd2lwZXI+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsX2NvbnRlbnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxzLXRpdGxlXCI+IHt7ZGlhcnlUaXRsZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItZGV0YWlscy1jb250ZW50c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tjb250ZW50fX1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLW1lc3NhZ2VzXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicGFnZS12aWV3LWNvbGxlY3QtdHJhbnNwb25kXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYWdlLXZpZXdcIj7mtY/op4jph486IDx0ZXh0Pnt7dmlld19udW19fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0XCIgdi1pZj1cImlzX2NvbGxlY3QgPT0gMFwiIDpkYXRhLWlkPSdpZCcgQHRhcD0nY29sbGVjdGRpYXJ5Jz5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2NvbGxlY3QucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+PHRleHQ+e3tjb2xsZWN0X251bX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3RcIiB2LWVsc2UgQHRhcD0nY2FuY2VsTGlrZShpZCknPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvY2hlY2tlZC1jb2xsZWN0LnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPjx0ZXh0Pnt7Y29sbGVjdF9udW19fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0cmFuc3BvbmRcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3NoYXJlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPiA8dGV4dD57e3NoYXJlX251bX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnN1bHRcIiBAdGFwPSdnb1RvQ29uc3VsdCc+XHJcblx0XHRcdOWSqOivoj5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdG9wQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RvcEJhci52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHRvcEJhcixcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lbnVXaWR0aDogMCxcclxuXHRcdFx0XHRtZW51VG9wOiAwLFxyXG5cdFx0XHRcdG1lbnVIZWlnaHQ6IDAsXHJcblx0XHRcdFx0bWVudUxlZnQ6IDAsXHJcblx0XHRcdFx0bWVudUJvdHRvbTogMCxcclxuXHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0YmFyTmFtZTogJ2JhY2snLCAvL+WvvOiIquadoeWQjeensFxyXG5cdFx0XHRcdHRvcEJhY2tncm91bmRDb2xvcjogJyMzMzMzMzMnLFxyXG5cdFx0XHRcdGNvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0YmFja0ltYWdlOiAnLi4vc3RhdGljL2ltYWdlcy9iYWNrMi5wbmcnLFxyXG5cdFx0XHRcdHRpdGxlOiAn5pel6K6w6K+m5oOFJyxcclxuXHRcdFx0XHRpbnRlcnZhbFRpbWU6IDMwMDAsIC8v6Ieq5Yqo5YiH5o2i5pe26Ze06Ze06ZqUXHJcblx0XHRcdFx0ZHVyYXRpb25UaW1lOiAxMDAwLCAvL1x05ruR5Yqo5Yqo55S75pe26ZW/XHJcblx0XHRcdFx0c3dpcGVyTGlzdDogW10sXHJcblx0XHRcdFx0aWQ6JycsLy/ml6XorrBpZFxyXG5cdFx0XHRcdGNvbnRlbnQ6JycsLy/lhoXlrrlcclxuXHRcdFx0XHRjb2xsZWN0X251bTowLC8v5pel6K6w5pS26JeP5pWwXHJcblx0XHRcdFx0ZGlhcnlfbnVtOjEsLy/ml6XorrDmgLvmlbAsXHJcblx0XHRcdFx0ZG9jdG9yOlt7fV0sLy/ljLvnlJ/kv6Hmga8gICAg5Li656m65YiZ5LiN5bGV56S6XHJcblx0XHRcdFx0Z29vZHM6W3t9XSwvL+aXpeiusOWFs+iBlOeahOWVhuWTgeS/oeaBr1xyXG5cdFx0XHRcdGhlYWRfaWNvOicnLC8vIOaXpeiusOeUqOaIt+eUqOaIt+WktOWDj1xyXG5cdFx0XHRcdGltZ3M6W10sLy/ml6XorrDlm77niYflnLDlnYAgICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ5Zu+54mHXHJcblx0XHRcdFx0aXNfY29sbGVjdDowLC8vIOa1j+iniOeUqOaIt+aYr+WQpuaUtuiXjyAgICAwIOacquaUtuiXjyAgMSDlt7LmlLbol49cclxuXHRcdFx0XHRuaWNrX25hbWU6JycgLC8vIOaXpeiusOeUqOaIt+aYteensFxyXG5cdFx0XHRcdHNoYXJlX251bTowLFxyXG5cdFx0XHRcdGRpYXJ5VGl0bGU6JycsLy/ml6XorrDmoIfpophcclxuXHRcdFx0XHR1c2VyX21hcms6JycsLy/ml6XorrDnlKjmiLfmoIfnpLpcclxuXHRcdFx0XHR2aWRlbzonJyAsLy8g5pel6K6w6KeG6aKR5Zyw5Z2AICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ6KeG6aKRXHJcblx0XHRcdFx0dmlld19udW06MCwvL+aXpeiusOa1j+iniOaVsFxyXG5cdFx0XHRcdHJlcXVlc3RVcmw6ICcnLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdGNvbnN0IHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoYXQuaWQgPSBvcHRpb25zLmlkXHJcblx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3RcclxuXHRcdFx0dGhhdC5yZXF1ZXN0VXJsID0gdGhhdC5yZXF1ZXN0Lmdsb2JhbERhdGEucmVxdWVzdFVybFxyXG5cdFx0XHR0aGF0LmRpYXJ5ZGV0YWlscyh0aGF0LmlkKVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8g6I635Y+W5bGP5bmV6auY5bqmXHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdHRoYXQuaGVpZ2h0ID0gcmVzLnNjcmVlbkhlaWdodFxyXG5cdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSBtZW51LnRvcFxyXG5cdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IG1lbnUuYm90dG9tXHJcblx0XHRcdFx0XHR0aGF0Lm1lbnVQYWRkaW5nUmlnaHQgPSByZXMud2luZG93V2lkdGggLSBtZW51LnJpZ2h0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6K+m5oOFXG5cdFx0XHRkaWFyeWRldGFpbHM6IGZ1bmN0aW9uIChpZCkge1xyXG5cdFx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3Rcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXNcblx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdkaWFyeWRldGFpbHMnLFxuXHRcdFx0XHRcdGRpYXJ5X2lkIDppZFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiL2RpYXJ5XCIsIGRhdGEpLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdFx0XHR0aGF0LmlkID0gZGF0YS5pZC8v5pel6K6waWRcclxuXHRcdFx0XHRcdFx0dGhhdC5jb250ZW50ID0gZGF0YS5jb250ZW50IC8v5YaF5a65XHJcblx0XHRcdFx0XHRcdHRoYXQuY29sbGVjdF9udW0gPSBkYXRhLmNvbGxlY3RfbnVtLy/ml6XorrDmlLbol4/mlbBcclxuXHRcdFx0XHRcdFx0dGhhdC5kaWFyeV9udW0gPSBkYXRhLmRpYXJ5X251bS8v5pel6K6w5oC75pWwLFxyXG5cdFx0XHRcdFx0XHR0aGF0LmRvY3RvciA9IGRhdGEuZG9jdG9yLy/ljLvnlJ/kv6Hmga8gICAg5Li656m65YiZ5LiN5bGV56S6XHJcblx0XHRcdFx0XHRcdHRoYXQuZ29vZHMgPSBkYXRhLmdvb2RzLy/ml6XorrDlhbPogZTnmoTllYblk4Hkv6Hmga9cclxuXHRcdFx0XHRcdFx0dGhhdC5oZWFkX2ljbyA9IGRhdGEuaGVhZF9pY28vLyDml6XorrDnlKjmiLfnlKjmiLflpLTlg49cclxuXHRcdFx0XHRcdFx0dGhhdC5pbWdzID0gZGF0YS5pbWdzLy/ml6XorrDlm77niYflnLDlnYAgICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ5Zu+54mHXHJcblx0XHRcdFx0XHRcdHRoYXQuaXNfY29sbGVjdCA9IGRhdGEuaXNfY29sbGVjdC8vIOa1j+iniOeUqOaIt+aYr+WQpuaUtuiXjyAgICAwIOacquaUtuiXjyAgMSDlt7LmlLbol49cclxuXHRcdFx0XHRcdFx0dGhhdC5uaWNrX25hbWUgPSBkYXRhLm5pY2tfbmFtZSAvLyDml6XorrDnlKjmiLfmmLXnp7BcclxuXHRcdFx0XHRcdFx0dGhhdC5zaGFyZV9udW0gPSBkYXRhLnNoYXJlX251bVxyXG5cdFx0XHRcdFx0XHR0aGF0LmRpYXJ5VGl0bGUgPSBkYXRhLnRpdGxlLy/ml6XorrDmoIfpophcclxuXHRcdFx0XHRcdFx0dGhhdC51c2VyX21hcmsgPSBkYXRhLnVzZXJfbWFyay8v5pel6K6w55So5oi35qCH56S6XHJcblx0XHRcdFx0XHRcdHRoYXQudmlkZW8gPSBkYXRhLnZpZGVvLy8g5pel6K6w6KeG6aKR5Zyw5Z2AICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ6KeG6aKRXHJcblx0XHRcdFx0XHRcdHRoYXQudmlld19udW0gPSBkYXRhLnZpZXdfbnVtLy/ml6XorrDmtY/op4jmlbBcclxuXHRcdFx0XHRcdFx0dGhhdC5zd2lwZXJMaXN0ID0gdGhhdC5pbWdzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g55u45YWz5ZWG5ZOBXHJcblx0XHRcdGdvVG9Hb29kczpmdW5jdGlvbihnb29kc0lkKXtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhnb29kc0lkKVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9nb29kcy9nb29kc19kZXRhaWw/aWQ9JHtnb29kc0lkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g55u45YWz5Yy755SfXHJcblx0XHRcdGdvVG9Eb2N0b3I6ZnVuY3Rpb24oZG9jdG9ySWQpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9kb2N0b3IvZG9jdG9yX2RldGFpbD9pZD0ke2RvY3RvcklkfWAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Liq5Lq65Li76aG1XHJcblx0XHRcdHBlcnNvbmFsOmZ1bmN0aW9uKHVzZXJfbWFyayl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2RpYXJ5L2RpYXJ5X3BlcnNvbmFsP3VzZXJfbWFyaz0ke3VzZXJfbWFya31gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDmlLbol49cclxuXHRcdFx0Y29sbGVjdGRpYXJ5OmZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3RcclxuXHRcdFx0XHR2YXIgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG5cdFx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjb2xsZWN0ZGlhcnknLFxyXG5cdFx0XHRcdFx0ZGlhcnlfaWQgOmlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiL2RpYXJ5XCIsIGRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0LnNob3dUb2FzdCgn5oiQ5YqfJylcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y+W5raI5pS26JePXHJcblx0XHRcdGNhbmNlbExpa2U6ZnVuY3Rpb24oaWQpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGlkKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlkqjor6JcclxuXHRcdFx0Z29Ub0NvbnN1bHQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5ZKo6K+iJylcclxuXHRcdFx0XHQvLyB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0Ly8gXHR1cmw6IGAvcGFnZXMvY29uc3VsdGF0aW9uL2NvbnN1bHRhdGlvbmAsXHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuXHQudXNlci1tZXNzYWdlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcblx0fVxyXG5cclxuXHQudXNlci1oZWFkLXBvcnRyYWl0LW5hbWUtcGhvbmUtc2V0IHtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDQwcnB4IDQwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItaGVhZC1wb3J0cmFpdCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQudXNlci1oZWFkLXBvcnRyYWl0IGltYWdlIHtcclxuXHRcdHdpZHRoOiAxNjBycHg7XHJcblx0XHRoZWlnaHQ6IDE2MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDgwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNHJweDtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZS1jYXJ0IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZS1jYXJ0IC51c2VyLW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmRldGFpbF9udW1iZXIge1xyXG5cdFx0Y29sb3I6ICNGQTM0NzU7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMThycHg7XHJcblx0fVxyXG5cclxuXHQuZGV0YWlsLXN3aXBlciB7XHJcblx0XHRtaW4taGVpZ2h0OjEwMDBycHg7XHJcblx0fVxyXG5cclxuXHQudG9wLXN3aXBlciB7XHJcblx0XHRtaW4taGVpZ2h0OjEwMDBycHg7XHJcblx0fVxyXG5cdC8qIC50b3Atc3dpcGVyLWl0ZW0gLnRvcC1zd2lwZXItaW1hZ2VzIHtcclxuXHRcdGhlaWdodDogNTg0cnB4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHR9ICovXHJcblx0LmRvY3Rvci1pbmZvcm1hdGlvbiB7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQudG9wLXN3aXBlci1pdGVtIHtcclxuXHRcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbWVzc2FnZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDU2cnB4O1xyXG5cdFx0bGVmdDogMzJycHg7XHJcblx0XHR3aWR0aDogMzIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdG9wYWNpdHk6IDAuNztcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdHBhZGRpbmc6IDhycHg7XHJcblx0fVxyXG5cclxuXHQuY29ycmVsYXRpb24tZG9jdG9yIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogNTZycHg7XHJcblx0XHRyaWdodDogMTBycHg7XHJcblx0XHR3aWR0aDogMzIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdG9wYWNpdHk6IDAuNztcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdHBhZGRpbmc6IDhycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pbWFnZXMsXHJcblx0LnBvcmR1Y3QtaW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0fVxyXG5cclxuXHQuY29ycmVsYXRpb24tZG9jdG9yIC5kb2N0b3ItaW1hZ2VzLFxyXG5cdC5jb3JyZWxhdGlvbi1kb2N0b3IgLmRvY3Rvci1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbmFtZS1wcmljZSxcclxuXHQuZG9jdG9yLW5hbWUtc3Vib3JkaW5hdGUtcG9zaXRpb24ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRtYXJnaW4tbGVmdDogMTJycHg7XHJcblx0fVxyXG5cclxuXHQuZG9jdG9yLW5hbWUge1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbmFtZS1wcmljZSAucG9yZHVjdC1uYW1lLFxyXG5cdC5zdWJvcmRpbmF0ZS1wb3NpdGlvbiB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHR3aWR0aDogMjA4cnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5kZXRhaWxfY29udGVudHMge1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmRldGFpbHMtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDI0cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMnJweCBzb2xpZCAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LnVzZXItZGV0YWlscy1jb250ZW50cyB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRwYWRkaW5nLXRvcDogMzJycHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTYwcnB4O1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbS1tZXNzYWdlcyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMzBycHggMDtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5wYWdlLXZpZXctY29sbGVjdC10cmFuc3BvbmQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHR9XHJcblxyXG5cdC5wYWdlLXZpZXctY29sbGVjdC10cmFuc3BvbmQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuY29sbGVjdCxcclxuXHQudHJhbnNwb25kIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBhZ2UtdmlldyB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0fVxyXG5cdC5wYWdlLXZpZXcgIHRleHR7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jb25zdWx0e1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGQTM0NzU7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHR3aWR0aDogMTMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEyMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0cmlnaHQ6IDEwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RpYXJ5X2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OTlmOTZkMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk5Zjk2ZDImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA0MDQ4Njg2MjI0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==