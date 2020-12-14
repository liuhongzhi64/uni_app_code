(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/diary/diary_detail"],{

/***/ 257:
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fdiary%2Fdiary_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _diary_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/diary/diary_detail.vue */ 258));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_diary_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 258:
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& */ 259);
/* harmony import */ var _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=script&lang=js& */ 261);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& */ 263);
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

/***/ 259:
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& */ 260);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 260:
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

/***/ 261:
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=script&lang=js& */ 262);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 262:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 476));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
























































































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
      backImage: '/static/images/back2.png',
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

    } else
    {
      that.menuTop = 50;
      that.menuHeight = 32;
      that.menuLeft = 278;
      that.menuBottom = 82;
    }
  },
  methods: {
    // 详情
    diarydetails: function diarydetails(id) {
      var that = this;
      var data = {
        interfaceId: 'diarydetails',
        diary_id: id };

      this.request.uniRequest("diary", data).then(function (res) {
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
    goToGoods: function goToGoods(goodsId, encrypted_id) {
      uni.navigateTo({
        url: "/pages/goods/goods_detail?sku_id=".concat(goodsId, "&encrypted_id=").concat(encrypted_id) });

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
    collectdiary: function collectdiary(id) {
      var that = this;
      var data = {
        interfaceId: 'collectdiary',
        diary_id: id };

      this.request.uniRequest("diary", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          that.is_collect = 1;
          that.collect_num += 1;
          uni.showToast({
            title: '收藏成功',
            duration: 1000 });

        }
      });
    },
    // 取消收藏
    cancelLike: function cancelLike(id) {
      var that = this;
      var data = {
        interfaceId: 'cancelcollectdiary',
        diary_id: id.toString() };

      this.request.uniRequest("diary", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          that.is_collect = 0;
          that.collect_num -= 1;
          uni.showToast({
            title: '已取消收藏',
            duration: 1000 });

        }
      });
    },
    // 咨询
    goToConsult: function goToConsult() {
      uni.navigateTo({
        url: "/pages/consultation/consultation" });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 263:
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& */ 264);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 264:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[257,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlPzE2MzAiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZGlhcnkvZGlhcnlfZGV0YWlsLnZ1ZT8yODdjIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWU/ZTlmNiIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlP2M0YmQiLCJ1bmktYXBwOi8vL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZGlhcnkvZGlhcnlfZGV0YWlsLnZ1ZT8xZmU0Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWU/YjE3YSJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsMkc7QUFDQUEsVUFBVSxDQUFDQyxxQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUk7QUFDckk7QUFDZ0U7QUFDTDtBQUNxQzs7O0FBR2hHO0FBQytLO0FBQy9LLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBcXFCLENBQWdCLG1xQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUZ6ckI7QUFDQTtBQUNBLGtCQURBLEVBREE7O0FBSUEsTUFKQSxrQkFJQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTtBQUdBLG1CQUhBO0FBSUEsaUJBSkE7QUFLQSxtQkFMQTtBQU1BLGVBTkE7QUFPQSxxQkFQQSxFQU9BO0FBQ0EsbUNBUkE7QUFTQSxzQkFUQTtBQVVBLDJDQVZBO0FBV0EsbUJBWEE7QUFZQSx3QkFaQSxFQVlBO0FBQ0Esd0JBYkEsRUFhQTtBQUNBLG9CQWRBO0FBZUEsWUFmQSxFQWVBO0FBQ0EsaUJBaEJBLEVBZ0JBO0FBQ0Esb0JBakJBLEVBaUJBO0FBQ0Esa0JBbEJBLEVBa0JBO0FBQ0Esa0JBbkJBLEVBbUJBO0FBQ0EsaUJBcEJBLEVBb0JBO0FBQ0Esa0JBckJBLEVBcUJBO0FBQ0EsY0F0QkEsRUFzQkE7QUFDQSxtQkF2QkEsRUF1QkE7QUFDQSxtQkF4QkEsRUF3QkE7QUFDQSxrQkF6QkE7QUEwQkEsb0JBMUJBLEVBMEJBO0FBQ0EsbUJBM0JBLEVBMkJBO0FBQ0EsZUE1QkEsRUE0QkE7QUFDQSxpQkE3QkEsRUE2QkE7QUFDQSxvQkE5QkE7O0FBZ0NBLEdBckNBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBNUNBO0FBNkNBLFNBN0NBLHFCQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FUQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUkE7O0FBVUEsS0FaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBaEZBO0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBSEEsQ0FHQTtBQUNBLHVDQUpBLENBSUE7QUFDQSwrQ0FMQSxDQUtBO0FBQ0EsMkNBTkEsQ0FNQTtBQUNBLHFDQVBBLENBT0E7QUFDQSxtQ0FSQSxDQVFBO0FBQ0EseUNBVEEsQ0FTQTtBQUNBLGlDQVZBLENBVUE7QUFDQSw2Q0FYQSxDQVdBO0FBQ0EsMkNBWkEsQ0FZQTtBQUNBO0FBQ0Esd0NBZEEsQ0FjQTtBQUNBLDJDQWZBLENBZUE7QUFDQSxtQ0FoQkEsQ0FnQkE7QUFDQSx5Q0FqQkEsQ0FpQkE7QUFDQTtBQUNBO0FBQ0EsT0FyQkE7QUFzQkEsS0E5QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0EsdUdBREE7O0FBR0EsS0FwQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBREE7O0FBR0EsS0ExQ0E7QUEyQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBREE7O0FBR0EsS0FoREE7O0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSwwQkFGQTs7QUFJQTtBQUNBLE9BVEE7QUFVQSxLQW5FQTtBQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQURBO0FBRUEsK0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsMEJBRkE7O0FBSUE7QUFDQSxPQVRBO0FBVUEsS0FyRkE7QUFzRkE7QUFDQTtBQUNBO0FBQ0EsK0NBREE7O0FBR0EsS0EzRkEsRUFqRkEsRTs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQUE7QUFBQTtBQUF3K0IsQ0FBZ0IsazhCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBNS9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvZGlhcnkvZGlhcnlfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5OWY5NmQyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk5Zjk2ZDImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3OTlmOTZkMlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5OWY5NmQyJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiZGlhcnlfZGV0YWlsXCI+XHJcblx0XHQ8dG9wQmFyIGNsYXNzPVwidG9wQmFyXCIgOnRvcEJhY2tncm91bmRDb2xvcj0ndG9wQmFja2dyb3VuZENvbG9yJyA6Y29sb3I9J2NvbG9yJyA6YmFja0ltYWdlPSdiYWNrSW1hZ2UnIDpiYXJOYW1lPSdiYXJOYW1lJ1xyXG5cdFx0IDp0aXRsZT0ndGl0bGUnIDptZW51V2lkdGg9J21lbnVXaWR0aCcgOm1lbnVUb3A9J21lbnVUb3AnIDptZW51SGVpZ2h0PSdtZW51SGVpZ2h0JyA6bWVudUxlZnQ9J21lbnVMZWZ0JyA6bWVudUJvdHRvbT0nbWVudUJvdHRvbSc+PC90b3BCYXI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImRpYXJ5X2RldGFpbF9jb250ZW50XCIgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOm1lbnVCb3R0b20rMTArJ3B4JywnbWluLWhlaWdodCc6aGVpZ2h0LW1lbnVCb3R0b20tMTArJ3B4J31dXCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteSBjbGFzcz1cImRldGFpbF9jb250ZW50XCI+XHJcblx0XHRcdFx0PHRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxfY29udGVudC1hbGxcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItaGVhZC1wb3J0cmFpdC1uYW1lLXBob25lLXNldFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWhlYWQtcG9ydHJhaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2hlYWRfaWNvXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZS1jYXJ0LXBob25lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWUtY2FydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIj57e25pY2tfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9udW1iZXJcIiBAdGFwPSdwZXJzb25hbCh1c2VyX21hcmspJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdOWFseiuoXt7ZGlhcnlfbnVtfX3nr4cgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbC1zd2lwZXJcIiB2LWlmPVwic3dpcGVyTGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzd2lwZXIgY2xhc3M9XCJ0b3Atc3dpcGVyXCIgaW5kaWNhdG9yLWRvdHMgaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcj1cIiNmZmZmZmZcIiA6aW50ZXJ2YWw9J2ludGVydmFsVGltZScgOmR1cmF0aW9uPVwiZHVyYXRpb25UaW1lXCJcclxuXHRcdFx0XHRcdFx0XHQgY2lyY3VsYXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJkb2N0b3ItaW5mb3JtYXRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0IHYtZm9yPVwiKGksaW5kZXgpIGluIHN3aXBlckxpc3RcIiA6a2V5PVwiaW5kZXhcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOid1cmwoJytyZXF1ZXN0VXJsK2krJyknfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcC1zd2lwZXItaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS0gPGltYWdlIGNsYXNzPVwidG9wLXN3aXBlci1pbWFnZXNcIiA6c3JjPVwicmVxdWVzdFVybCtpXCIgPjwvaW1hZ2U+XHRcdFx0XHRcdFx0XHRcdFx0XHQgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW1lc3NhZ2VcIiBAdGFwPSdnb1RvR29vZHMoZ29vZHMuaWQsZ29vZHMuZW5jcnlwdGVkX2lkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvcmR1Y3QtaW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtnb29kcy5oZWFkX2ltZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWUtcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWVcIj57e2dvb2RzLmdvb2RzX25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlXCI+wqU8dGV4dD57e2dvb2RzLnNhbGVfcHJpY2V9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvcnJlbGF0aW9uLWRvY3RvclwiIEB0YXA9J2dvVG9Eb2N0b3IoZG9jdG9yLmlkKSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvY3Rvci1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2RvY3Rvci5oZWFkaW5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvY3Rvci1uYW1lLXN1Ym9yZGluYXRlLXBvc2l0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG9jdG9yLW5hbWVcIj57e2RvY3Rvci5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3Vib3JkaW5hdGUtcG9zaXRpb25cIj57e2RvY3Rvci56aGljaGVuZ319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3dpcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsX2NvbnRlbnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxzLXRpdGxlXCI+IHt7ZGlhcnlUaXRsZX19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItZGV0YWlscy1jb250ZW50c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tjb250ZW50fX1cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tLW1lc3NhZ2VzXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicGFnZS12aWV3LWNvbGxlY3QtdHJhbnNwb25kXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYWdlLXZpZXdcIj7mtY/op4jph486IDx0ZXh0Pnt7dmlld19udW19fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0XCIgdi1pZj1cImlzX2NvbGxlY3QgPT0gMFwiIEB0YXA9J2NvbGxlY3RkaWFyeShpZCknPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NvbGxlY3QucG5nXCIgPjwvaW1hZ2U+PHRleHQ+e3tjb2xsZWN0X251bX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3RcIiB2LWVsc2UgQHRhcD0nY2FuY2VsTGlrZShpZCknPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NvbGxlY3RfaG92ZXIucG5nXCIgPjwvaW1hZ2U+PHRleHQgY2xhc3M9XCJjb2xsZWN0X2hvdmVyXCI+e3tjb2xsZWN0X251bX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRyYW5zcG9uZFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2hhcmUucG5nXCIgPjwvaW1hZ2U+IDx0ZXh0Pnt7c2hhcmVfbnVtfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiY29uc3VsdFwiIEB0YXA9J2dvVG9Db25zdWx0Jz5cclxuXHRcdFx05ZKo6K+iPlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB0b3BCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9wQmFyLnZ1ZVwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dG9wQmFyLFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVudVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1lbnVUb3A6IDAsXHJcblx0XHRcdFx0bWVudUhlaWdodDogMCxcclxuXHRcdFx0XHRtZW51TGVmdDogMCxcclxuXHRcdFx0XHRtZW51Qm90dG9tOiAwLFxyXG5cdFx0XHRcdGhlaWdodDogMCxcclxuXHRcdFx0XHRiYXJOYW1lOiAnYmFjaycsIC8v5a+86Iiq5p2h5ZCN56ewXHJcblx0XHRcdFx0dG9wQmFja2dyb3VuZENvbG9yOiAnIzMzMzMzMycsXHJcblx0XHRcdFx0Y29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRiYWNrSW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9iYWNrMi5wbmcnLFxyXG5cdFx0XHRcdHRpdGxlOiAn5pel6K6w6K+m5oOFJyxcclxuXHRcdFx0XHRpbnRlcnZhbFRpbWU6IDMwMDAsIC8v6Ieq5Yqo5YiH5o2i5pe26Ze06Ze06ZqUXHJcblx0XHRcdFx0ZHVyYXRpb25UaW1lOiAxMDAwLCAvL1x05ruR5Yqo5Yqo55S75pe26ZW/XHJcblx0XHRcdFx0c3dpcGVyTGlzdDogW10sXHJcblx0XHRcdFx0aWQ6JycsLy/ml6XorrBpZFxyXG5cdFx0XHRcdGNvbnRlbnQ6JycsLy/lhoXlrrlcclxuXHRcdFx0XHRjb2xsZWN0X251bTowLC8v5pel6K6w5pS26JeP5pWwXHJcblx0XHRcdFx0ZGlhcnlfbnVtOjEsLy/ml6XorrDmgLvmlbAsXHJcblx0XHRcdFx0ZG9jdG9yOlt7fV0sLy/ljLvnlJ/kv6Hmga8gICAg5Li656m65YiZ5LiN5bGV56S6XHJcblx0XHRcdFx0Z29vZHM6W3t9XSwvL+aXpeiusOWFs+iBlOeahOWVhuWTgeS/oeaBr1xyXG5cdFx0XHRcdGhlYWRfaWNvOicnLC8vIOaXpeiusOeUqOaIt+eUqOaIt+WktOWDj1xyXG5cdFx0XHRcdGltZ3M6W10sLy/ml6XorrDlm77niYflnLDlnYAgICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ5Zu+54mHXHJcblx0XHRcdFx0aXNfY29sbGVjdDowLC8vIOa1j+iniOeUqOaIt+aYr+WQpuaUtuiXjyAgICAwIOacquaUtuiXjyAgMSDlt7LmlLbol49cclxuXHRcdFx0XHRuaWNrX25hbWU6JycgLC8vIOaXpeiusOeUqOaIt+aYteensFxyXG5cdFx0XHRcdHNoYXJlX251bTowLFxyXG5cdFx0XHRcdGRpYXJ5VGl0bGU6JycsLy/ml6XorrDmoIfpophcclxuXHRcdFx0XHR1c2VyX21hcms6JycsLy/ml6XorrDnlKjmiLfmoIfnpLpcclxuXHRcdFx0XHR2aWRlbzonJyAsLy8g5pel6K6w6KeG6aKR5Zyw5Z2AICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ6KeG6aKRXHJcblx0XHRcdFx0dmlld19udW06MCwvL+aXpeiusOa1j+iniOaVsFxyXG5cdFx0XHRcdHJlcXVlc3RVcmw6ICcnLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdGNvbnN0IHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoYXQuaWQgPSBvcHRpb25zLmlkXHJcblx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3RcclxuXHRcdFx0dGhhdC5yZXF1ZXN0VXJsID0gdGhhdC5yZXF1ZXN0Lmdsb2JhbERhdGEucmVxdWVzdFVybFxyXG5cdFx0XHR0aGF0LmRpYXJ5ZGV0YWlscyh0aGF0LmlkKVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcdFx0XHJcblx0XHRcdHRoYXQuaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0O1xyXG5cdFx0XHQvLyDliKTlrprov5DooYzlubPlj7BcclxuXHRcdFx0bGV0IHBsYXRmb3JtID0gJydcclxuXHRcdFx0c3dpdGNoICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSkge1xyXG5cdFx0XHRcdGNhc2UgJ2FuZHJvaWQnOlxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnYW5kcm9pZCdcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lvcyc6XHJcblx0XHRcdFx0XHRwbGF0Zm9ybSA9ICdpb3MnXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0cGxhdGZvcm0gPSAnYXBwbGV0J1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYocGxhdGZvcm09PSdhcHBsZXQnKXtcclxuXHRcdFx0XHQvLyDojrflj5blsY/luZXpq5jluqZcclxuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG1lbnUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IG1lbnUud2lkdGhcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51VG9wID0gbWVudS50b3BcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51SGVpZ2h0ID0gbWVudS5oZWlnaHRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IG1lbnUubGVmdFxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSBtZW51LmJvdHRvbVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHR0aGF0Lm1lbnVUb3AgPSA1MFxyXG5cdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IDMyXHJcblx0XHRcdFx0dGhhdC5tZW51TGVmdCA9IDI3OFxyXG5cdFx0XHRcdHRoYXQubWVudUJvdHRvbSA9IDgyXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOivpuaDhVxuXHRcdFx0ZGlhcnlkZXRhaWxzOiBmdW5jdGlvbiAoaWQpIHtcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXNcblx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdkaWFyeWRldGFpbHMnLFxuXHRcdFx0XHRcdGRpYXJ5X2lkIDppZFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiZGlhcnlcIiwgZGF0YSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEwMDAgJiYgcmVzLmRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHRcdHRoYXQuaWQgPSBkYXRhLmlkLy/ml6XorrBpZFxyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQgLy/lhoXlrrlcclxuXHRcdFx0XHRcdFx0dGhhdC5jb2xsZWN0X251bSA9IGRhdGEuY29sbGVjdF9udW0vL+aXpeiusOaUtuiXj+aVsFxyXG5cdFx0XHRcdFx0XHR0aGF0LmRpYXJ5X251bSA9IGRhdGEuZGlhcnlfbnVtLy/ml6XorrDmgLvmlbAsXHJcblx0XHRcdFx0XHRcdHRoYXQuZG9jdG9yID0gZGF0YS5kb2N0b3IvL+WMu+eUn+S/oeaBryAgICDkuLrnqbrliJnkuI3lsZXnpLpcclxuXHRcdFx0XHRcdFx0dGhhdC5nb29kcyA9IGRhdGEuZ29vZHMvL+aXpeiusOWFs+iBlOeahOWVhuWTgeS/oeaBr1xyXG5cdFx0XHRcdFx0XHR0aGF0LmhlYWRfaWNvID0gZGF0YS5oZWFkX2ljby8vIOaXpeiusOeUqOaIt+eUqOaIt+WktOWDj1xyXG5cdFx0XHRcdFx0XHR0aGF0LmltZ3MgPSBkYXRhLmltZ3MvL+aXpeiusOWbvueJh+WcsOWdgCAgICAg6K+l5a2X5q615LiN5Li656m6ICDml6XorrDmnInlm77niYdcclxuXHRcdFx0XHRcdFx0dGhhdC5pc19jb2xsZWN0ID0gZGF0YS5pc19jb2xsZWN0Ly8g5rWP6KeI55So5oi35piv5ZCm5pS26JePICAgIDAg5pyq5pS26JePICAxIOW3suaUtuiXj1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm5pY2tfbmFtZSA9IGRhdGEubmlja19uYW1lIC8vIOaXpeiusOeUqOaIt+aYteensFxyXG5cdFx0XHRcdFx0XHR0aGF0LnNoYXJlX251bSA9IGRhdGEuc2hhcmVfbnVtXHJcblx0XHRcdFx0XHRcdHRoYXQuZGlhcnlUaXRsZSA9IGRhdGEudGl0bGUvL+aXpeiusOagh+mimFxyXG5cdFx0XHRcdFx0XHR0aGF0LnVzZXJfbWFyayA9IGRhdGEudXNlcl9tYXJrLy/ml6XorrDnlKjmiLfmoIfnpLpcclxuXHRcdFx0XHRcdFx0dGhhdC52aWRlbyA9IGRhdGEudmlkZW8vLyDml6XorrDop4bpopHlnLDlnYAgICAg6K+l5a2X5q615LiN5Li656m6ICDml6XorrDmnInop4bpopFcclxuXHRcdFx0XHRcdFx0dGhhdC52aWV3X251bSA9IGRhdGEudmlld19udW0vL+aXpeiusOa1j+iniOaVsFxyXG5cdFx0XHRcdFx0XHR0aGF0LnN3aXBlckxpc3QgPSB0aGF0LmltZ3Ncblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnm7jlhbPllYblk4FcclxuXHRcdFx0Z29Ub0dvb2RzOmZ1bmN0aW9uKGdvb2RzSWQsZW5jcnlwdGVkX2lkKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ29vZHMvZ29vZHNfZGV0YWlsP3NrdV9pZD0ke2dvb2RzSWR9JmVuY3J5cHRlZF9pZD0ke2VuY3J5cHRlZF9pZH1gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOebuOWFs+WMu+eUn1xyXG5cdFx0XHRnb1RvRG9jdG9yOmZ1bmN0aW9uKGRvY3RvcklkKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZG9jdG9yL2RvY3Rvcl9kZXRhaWw/aWQ9JHtkb2N0b3JJZH1gLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4quS6uuS4u+mhtVxyXG5cdFx0XHRwZXJzb25hbDpmdW5jdGlvbih1c2VyX21hcmspe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9kaWFyeS9kaWFyeV9wZXJzb25hbD91c2VyX21hcms9JHt1c2VyX21hcmt9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5pS26JePXHJcblx0XHRcdGNvbGxlY3RkaWFyeTpmdW5jdGlvbihpZCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDogJ2NvbGxlY3RkaWFyeScsXHJcblx0XHRcdFx0XHRkaWFyeV9pZCA6aWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJkaWFyeVwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNfY29sbGVjdCA9IDFcclxuXHRcdFx0XHRcdFx0dGhhdC5jb2xsZWN0X251bSArPTFcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmlLbol4/miJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHRcdH0pXHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj5bmtojmlLbol49cclxuXHRcdFx0Y2FuY2VsTGlrZTpmdW5jdGlvbihpZCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRpbnRlcmZhY2VJZDonY2FuY2VsY29sbGVjdGRpYXJ5JyxcclxuXHRcdFx0XHRcdGRpYXJ5X2lkOmlkLnRvU3RyaW5nKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJkaWFyeVwiLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNfY29sbGVjdCA9IDBcclxuXHRcdFx0XHRcdFx0dGhhdC5jb2xsZWN0X251bSAtPTFcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflt7Llj5bmtojmlLbol48nLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHRcdH0pXHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlkqjor6JcclxuXHRcdFx0Z29Ub0NvbnN1bHQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvY29uc3VsdGF0aW9uL2NvbnN1bHRhdGlvbmAsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuXHQudXNlci1tZXNzYWdlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcblx0fVxyXG5cclxuXHQudXNlci1oZWFkLXBvcnRyYWl0LW5hbWUtcGhvbmUtc2V0IHtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDQwcnB4IDQwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItaGVhZC1wb3J0cmFpdCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQudXNlci1oZWFkLXBvcnRyYWl0IGltYWdlIHtcclxuXHRcdHdpZHRoOiAxNjBycHg7XHJcblx0XHRoZWlnaHQ6IDE2MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDgwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNHJweDtcclxuXHRcdGJvcmRlcjogMXJweCBzb2xpZCAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZS1jYXJ0IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZS1jYXJ0IC51c2VyLW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmRldGFpbF9udW1iZXIge1xyXG5cdFx0Y29sb3I6ICNGQTM0NzU7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMThycHg7XHJcblx0fVxyXG5cclxuXHQuZGV0YWlsLXN3aXBlciB7XHJcblx0XHRtaW4taGVpZ2h0OjEwMDBycHg7XHJcblx0fVxyXG5cclxuXHQudG9wLXN3aXBlciB7XHJcblx0XHRtaW4taGVpZ2h0OjEwMDBycHg7XHJcblx0fVxyXG5cdC8qIC50b3Atc3dpcGVyLWl0ZW0gLnRvcC1zd2lwZXItaW1hZ2VzIHtcclxuXHRcdGhlaWdodDogNTg0cnB4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHR9ICovXHJcblx0LmRvY3Rvci1pbmZvcm1hdGlvbiB7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQudG9wLXN3aXBlci1pdGVtIHtcclxuXHRcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbWVzc2FnZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDU2cnB4O1xyXG5cdFx0bGVmdDogMzJycHg7XHJcblx0XHR3aWR0aDogMzIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdG9wYWNpdHk6IDAuNztcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdHBhZGRpbmc6IDhycHg7XHJcblx0fVxyXG5cclxuXHQuY29ycmVsYXRpb24tZG9jdG9yIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogNTZycHg7XHJcblx0XHRyaWdodDogMTBycHg7XHJcblx0XHR3aWR0aDogMzIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdG9wYWNpdHk6IDAuNztcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdHBhZGRpbmc6IDhycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1pbWFnZXMsXHJcblx0LnBvcmR1Y3QtaW1hZ2VzIGltYWdlIHtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0fVxyXG5cclxuXHQuY29ycmVsYXRpb24tZG9jdG9yIC5kb2N0b3ItaW1hZ2VzLFxyXG5cdC5jb3JyZWxhdGlvbi1kb2N0b3IgLmRvY3Rvci1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbmFtZS1wcmljZSxcclxuXHQuZG9jdG9yLW5hbWUtc3Vib3JkaW5hdGUtcG9zaXRpb24ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRtYXJnaW4tbGVmdDogMTJycHg7XHJcblx0fVxyXG5cclxuXHQuZG9jdG9yLW5hbWUge1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0LnBvcmR1Y3QtbmFtZS1wcmljZSAucG9yZHVjdC1uYW1lLFxyXG5cdC5zdWJvcmRpbmF0ZS1wb3NpdGlvbiB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHR3aWR0aDogMjA4cnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LXByaWNlIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5kZXRhaWxfY29udGVudHMge1xyXG5cdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmRldGFpbHMtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDI0cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMnJweCBzb2xpZCAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LnVzZXItZGV0YWlscy1jb250ZW50cyB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRwYWRkaW5nLXRvcDogMzJycHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTYwcnB4O1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbS1tZXNzYWdlcyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMzBycHggMDtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5wYWdlLXZpZXctY29sbGVjdC10cmFuc3BvbmQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHR9XHJcblxyXG5cdC5wYWdlLXZpZXctY29sbGVjdC10cmFuc3BvbmQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuY29sbGVjdCxcclxuXHQudHJhbnNwb25kIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBhZ2UtdmlldyB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0fVxyXG5cdC5wYWdlLXZpZXcgIHRleHR7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jb25zdWx0e1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGQTM0NzU7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHR3aWR0aDogMTMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEyMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0cmlnaHQ6IDEwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHR9XHJcblx0LmNvbGxlY3RfaG92ZXJ7XHJcblx0XHRjb2xvcjogIzlGNTVGRjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RpYXJ5X2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OTlmOTZkMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk5Zjk2ZDImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA3OTA3NjA0MzM4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==