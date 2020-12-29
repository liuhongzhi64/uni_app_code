(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/diary/diary_detail"],{

/***/ 160:
/*!***************************************************************************!*\
  !*** D:/Code/code/uniapp/main.js?{"page":"pages%2Fdiary%2Fdiary_detail"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _diary_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/diary/diary_detail.vue */ 161));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_diary_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 161:
/*!********************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& */ 162);
/* harmony import */ var _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=script&lang=js& */ 164);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& */ 166);
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

/***/ 162:
/*!***************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=template&id=799f96d2&scoped=true& */ 163);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_template_id_799f96d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 163:
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

/***/ 164:
/*!*********************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=script&lang=js& */ 165);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 165:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var topBar = function topBar() {__webpack_require__.e(/*! require.ensure | components/topBar */ "components/topBar").then((function () {return resolve(__webpack_require__(/*! ../../components/topBar.vue */ 479));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =







































































































































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
      swiper_height: 350, //外部的高度
      swiperList: [],
      id: '117', //日记id
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
      requestUrl: '',
      this_my: false,
      my_diary: {
        // id: 15, //日记id
        // title: "黎巴嫩总统承认3周前就知道贝鲁特港有危险：但我不负责", //日记标题
        // video: "", //日记视频
        // content: "爆炸现场（图源：路透社）<br /><br />海外网8月8日电黎巴嫩总统米歇尔·奥恩周五（7日）向记者表示，他在近3周前首次被告知贝鲁特港口有危险库存，并立即命令军事和安全机构采取“必要行动”。但奥恩否认他对爆炸负有责任，因为自己无权决定该港口事务，而前任政府也已被告知危险品存在。<br /><br />据英国《独立报》报道，当记者问到“您知道有多少问题正在累积”时，奥恩回答说，2013年这艘船被没收后，上一届政府就已经知道这种危险的存在，“它们在那里存放了7年，他们说这很危险，但我不负责。我不知道它到底放在哪，我甚至不知道危险程度”，而他表示，自从7月20日得知这批库存时，他已经立即要求军事和安全官员做应该做的事情。<br /><br />奥恩还补充说，贝鲁特港口爆炸的原因尚未确定，因为有些国家可能通过火箭弹、炸弹或其他手段干扰别国。奥恩表示已请求马克龙向黎巴嫩提供爆炸瞬间的航拍照片，如果没有，黎方将请其他国家确定事件是外部力量导致还是起火引发爆炸。<br /><br />截至目前，黎巴嫩首都贝鲁特港口区突发的剧烈爆炸已致154人死亡，5000多人受伤。事后，存放多年最终被引燃的2750多吨硝酸铵引发外界强烈关注。黎巴嫩政府第一时间将事故原因指向在贝鲁特港“不安全存放”6年的大量硝酸铵，奥恩誓言对责任人施加“最严重的惩罚”。（海外网 魏雪巍）<br /><br />本文系版权作品，未经授权严禁转载。海外视野，中国立场，浏览人民日报海外版官网——海外网www.haiwainet.cn或“海客”客户端，领先一步获取权威资讯", //日记正文
        // seo_keyword: null,
        // seo_description: null,
        // status: -1, //日记状态  -1  审核未听过  1审核通过  0带审核
        // collect_num: 1, //收藏数量
        // share_num: 0, //分享数量
        // view_num: 0, //日记浏览数
        // imgs: [ //日记图片 列表
        // 	"upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg",
        // 	"upload/goods/images/202010/15/txz4G5kFQGKgAJ6jGiNuVHCI2ZPsZl1Fw8ZeAAXm_250.jpeg"
        // ],
        // head_ico: "", //日记所属 用户头像
        // nick_name: "测试1", //日记所属用户昵称
        // diary_num: 9, //日记总数
        // user_mark: "VUZSUFNGTkVTVzV5YjFCT05tcGxVbGRHUW1KR05HTkNVRVpDYjNZeVkwSTJTSGxsVVdkV016QmFjejA9",//日记标示 
        // goods: { //日记所属商品
        // 	status: "1",
        // 	is_delete: "0",
        // 	encrypted_id: "MFFrKzlnYnMzUTV1NGNrRjYvS3I1Zz09", //商品  spu_id
        // 	goods_name: "和你很高3", //商品名称
        // 	head_img: "upload/goods/images/202008/05/7f11c62e18ddb253e231f489bd08f0bd4371_250.jpg", //商品头像
        // 	sku_is_delete: "0",
        // 	id: "39", //商品 sku_id
        // 	sale_price: "300.0" //商品销售价格
        // },
        // doctor: {
        // 	id: "1",
        // 	name: "陈扬",
        // 	heading: "upload/goods/images/202007/24/7ec5237f17324f7959149d06f1a9d1ee4165.jpg",
        // 	zhicheng: " 华美紫馨眼部整形及修复中心主"
        // },
        // audit: "抱歉！您的日记审核未通过！修改后可以重新发起审核喔！<br /><br />审核意见：图片不清晰；描写内容与所选商品不符；"
      } //我的日记
    };
  },
  onLoad: function onLoad(options) {
    var that = this;
    this.request = this.$request;
    that.requestUrl = that.request.globalData.requestUrl;
    // options.route = 'my'
    if (options.route) {
      that.this_my = true;
      that.get_my_diary();
    } else {
      that.id = options.id;
      that.diarydetails(that.id);
    }
    console.log(getApp().globalData.platform);
    // 后面移动到请求我的日记详情中处理内容和提示
    // that.my_diary.content = that.set_content(that.my_diary.content)
    // that.my_diary.audit = that.set_content(that.my_diary.audit)
  },
  onReady: function onReady() {
    var that = this;
    that.height = uni.getSystemInfoSync().screenHeight;
    // 判定运行平台
    var platform = getApp().platform || getApp().globalData.platform;
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

    } else if (platform == 'APP') {
      that.menuWidth = 90;
      that.menuTop = 40;
      that.menuHeight = 30;
      that.menuLeft = 278;
      that.menuBottom = 70;
    }
  },
  methods: {
    getlist_height: function getlist_height(list) {
      var that = this;
      var query = uni.createSelectorQuery();
      query.select(list).boundingClientRect(function (data) {
        that.swiper_height = data.height;
        // console.log(data.height, 1111)
      }).exec();
    },
    change_swiper: function change_swiper(e) {
      var that = this;
      that.getlist_height(".list_img".concat(e.target.current));
    },
    get_img_height: function get_img_height(event) {
      var that = this;
      setTimeout(function () {
        var e = {
          target: {
            current: 0 } };


        that.change_swiper(e);
      }, 500);
      // let height = event.detail.height
      // if (that.platform != 'applet') {
      // 	that.swiper_height = height / 2 - 18
      // } else {
      // 	that.swiper_height = height / 2
      // }
    },
    set_content: function set_content(text) {
      var list = [];
      var text1 = text.replace(/<[^>]+>/g, "\n"); //截取html标签

      var text2 = text1.replace(/&nbsp;/ig, " "); //截取空格等特殊标签
      if (text2.indexOf('\n') != -1) {
        list = text2.split('\n');
      }
      return list;
    },
    // 详情
    diarydetails: function diarydetails(id) {
      var that = this;
      var data = {
        interfaceId: 'diarydetails',
        diary_id: id };

      this.request.uniRequest("diary", data).then(function (res) {
        if (res.data.code == 1000 && res.data.status == 'ok') {
          var _data = res.data.data;
          that.id = _data.id; //日记id
          that.content = that.set_content(_data.content);
          // that.content = data.content
          // console.log(that.set_content(data.content))
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
    // 我的个人日记详情
    get_my_diary: function get_my_diary() {
      var that = this;
      var dataInfo = {
        interfaceId: 'mydiarydetails',
        diary_id: that.id };

      // this.request.uniRequest("diary", dataInfo).then(res => {
      // 	if (res.data.code == 1000 && res.data.status == 'ok') {
      // 		let data = res.data.data
      // 		console.log(data)
      // 	}
      // })
    },
    set_my_diary: function set_my_diary(type) {
      var that = this;
      // type 0 删除 1编辑
      if (type == 0) {
        uni.showModal({
          title: '提示',
          content: '是否删除这条日记？',
          success: function success(res) {
            if (res.confirm) {
              var dataInfo = {
                interfaceId: 'deletediary',
                diary_id: that.id };

              that.request.uniRequest("diary", dataInfo).then(function (res) {
                if (res.data.code == 1000 && res.data.status == 'ok') {
                  uni.showToast({
                    title: '删除成功',
                    duration: 1000 });

                  uni.navigateTo({
                    url: "/diary/diary_personal?route=my" });

                }
              });
            }
          } });

      } else if (type == 1) {
        if (that.my_diary.video) {
          uni.navigateTo({
            url: "/pages/diary/diary_write_video?id=".concat(that.id) });

        } else {
          uni.navigateTo({
            url: "/pages/diary/diary_write?id=".concat(that.id) });

        }
      }
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
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 166:
/*!*****************************************************************************************************************!*\
  !*** D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& */ 167);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_diary_detail_vue_vue_type_style_index_0_id_799f96d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 167:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/pages/diary/diary_detail.vue?vue&type=style&index=0&id=799f96d2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[160,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlPzE2MzAiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZGlhcnkvZGlhcnlfZGV0YWlsLnZ1ZT8yODdjIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWU/ZTlmNiIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9wYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlP2M0YmQiLCJ1bmktYXBwOi8vL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvcGFnZXMvZGlhcnkvZGlhcnlfZGV0YWlsLnZ1ZT8xZmU0Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL3BhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC52dWU/YjE3YSJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsMkc7QUFDQUEsVUFBVSxDQUFDQyxxQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUk7QUFDckk7QUFDZ0U7QUFDTDtBQUNxQzs7O0FBR2hHO0FBQytLO0FBQy9LLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBcXFCLENBQWdCLG1xQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN3SXpyQjtBQUNBO0FBQ0Esa0JBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBO0FBR0EsbUJBSEE7QUFJQSxpQkFKQTtBQUtBLG1CQUxBO0FBTUEsZUFOQTtBQU9BLHFCQVBBLEVBT0E7QUFDQSxtQ0FSQTtBQVNBLHNCQVRBO0FBVUEsMkNBVkE7QUFXQSxtQkFYQTtBQVlBLHdCQVpBLEVBWUE7QUFDQSxvQkFiQTtBQWNBLGVBZEEsRUFjQTtBQUNBLGlCQWZBLEVBZUE7QUFDQSxvQkFoQkEsRUFnQkE7QUFDQSxrQkFqQkEsRUFpQkE7QUFDQSxrQkFsQkEsRUFrQkE7QUFDQSxpQkFuQkEsRUFtQkE7QUFDQSxrQkFwQkEsRUFvQkE7QUFDQSxjQXJCQSxFQXFCQTtBQUNBLG1CQXRCQSxFQXNCQTtBQUNBLG1CQXZCQSxFQXVCQTtBQUNBLGtCQXhCQTtBQXlCQSxvQkF6QkEsRUF5QkE7QUFDQSxtQkExQkEsRUEwQkE7QUFDQSxlQTNCQSxFQTJCQTtBQUNBLGlCQTVCQSxFQTRCQTtBQUNBLG9CQTdCQTtBQThCQSxvQkE5QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkNBLE9BL0JBLENBbUVBO0FBbkVBO0FBcUVBLEdBMUVBO0FBMkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBM0ZBO0FBNEZBLFNBNUZBLHFCQTRGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVJBOztBQVVBLEtBWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBcEhBO0FBcUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLElBSEE7QUFJQSxLQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQSxFQURBOzs7QUFLQTtBQUNBLE9BUEEsRUFPQSxHQVBBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3QkE7QUE4QkE7QUFDQTtBQUNBLGlEQUZBLENBRUE7O0FBRUEsaURBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2Q0E7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBLDZCQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FOQSxDQU1BO0FBQ0EsMkNBUEEsQ0FPQTtBQUNBLHFDQVJBLENBUUE7QUFDQSxtQ0FUQSxDQVNBO0FBQ0EseUNBVkEsQ0FVQTtBQUNBLGlDQVhBLENBV0E7QUFDQSw2Q0FaQSxDQVlBO0FBQ0EsMkNBYkEsQ0FhQTtBQUNBO0FBQ0Esd0NBZkEsQ0FlQTtBQUNBLDJDQWhCQSxDQWdCQTtBQUNBLG1DQWpCQSxDQWlCQTtBQUNBLHlDQWxCQSxDQWtCQTtBQUNBO0FBQ0E7QUFDQSxPQXRCQTtBQXVCQSxLQXRFQTtBQXVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUEseUJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwRkE7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsOEJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLGlDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBLGlDQURBO0FBRUEsa0NBRkE7O0FBSUE7QUFDQSx5REFEQTs7QUFHQTtBQUNBLGVBVkE7QUFXQTtBQUNBLFdBckJBOztBQXVCQSxPQXhCQSxNQXdCQTtBQUNBO0FBQ0E7QUFDQSxxRUFEQTs7QUFHQSxTQUpBLE1BSUE7QUFDQTtBQUNBLCtEQURBOztBQUdBO0FBQ0E7QUFDQSxLQTNIQTtBQTRIQTtBQUNBO0FBQ0E7QUFDQSx1RUFEQTs7QUFHQSxLQWpJQTtBQWtJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsMEJBRkE7O0FBSUE7QUFDQSxPQVRBO0FBVUEsS0FuSkE7QUFvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBLCtCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0EsT0FUQTtBQVVBLEtBcktBLEVBckhBLEU7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFBQTtBQUFBO0FBQUE7QUFBdytCLENBQWdCLGs4QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTUvQjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2RpYXJ5L2RpYXJ5X2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9kaWFyeS9kaWFyeV9kZXRhaWwudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTlmOTZkMiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RpYXJ5X2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RpYXJ5X2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5OWY5NmQyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzk5Zjk2ZDJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZGlhcnkvZGlhcnlfZGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTlmOTZkMiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RpYXJ5X2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGlhcnlfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImRpYXJ5X2RldGFpbFwiPlxyXG5cdFx0PHRvcEJhciBjbGFzcz1cInRvcEJhclwiIDp0b3BCYWNrZ3JvdW5kQ29sb3I9J3RvcEJhY2tncm91bmRDb2xvcicgOmNvbG9yPSdjb2xvcicgOmJhY2tJbWFnZT0nYmFja0ltYWdlJyA6YmFyTmFtZT0nYmFyTmFtZSdcclxuXHRcdCA6dGl0bGU9J3RpdGxlJyA6bWVudVdpZHRoPSdtZW51V2lkdGgnIDptZW51VG9wPSdtZW51VG9wJyA6bWVudUhlaWdodD0nbWVudUhlaWdodCcgOm1lbnVMZWZ0PSdtZW51TGVmdCcgOm1lbnVCb3R0b209J21lbnVCb3R0b20nPjwvdG9wQmFyPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJkaWFyeV9kZXRhaWxfY29udGVudFwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzptZW51Qm90dG9tKzEwKydweCcsJ21pbi1oZWlnaHQnOmhlaWdodC1tZW51Qm90dG9tLTEwKydweCd9XVwiPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXkgY2xhc3M9XCJkZXRhaWxfY29udGVudFwiPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsX2NvbnRlbnQtYWxsXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1tZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWhlYWQtcG9ydHJhaXQtbmFtZS1waG9uZS1zZXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1oZWFkLXBvcnRyYWl0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtoZWFkX2ljb1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hbWUtY2FydC1waG9uZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1uYW1lLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1uYW1lXCI+e3tuaWNrX25hbWV8fCfmmLXnp7AnfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsX251bWJlclwiIEB0YXA9J3BlcnNvbmFsKHVzZXJfbWFyayknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx05YWx6K6he3tkaWFyeV9udW19feevhyA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsLXN3aXBlclwiIHYtaWY9XCJzd2lwZXJMaXN0Lmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx0PHN3aXBlciBjbGFzcz1cInRvcC1zd2lwZXJcIiBpbmRpY2F0b3ItZG90cyBAY2hhbmdlPVwiY2hhbmdlX3N3aXBlclwiIDpzdHlsZT1cIntoZWlnaHQ6c3dpcGVyX2hlaWdodCsncHgnfVwiXHJcblx0XHRcdFx0XHRcdFx0IGluZGljYXRvci1hY3RpdmUtY29sb3I9XCIjRkEzNDc1XCIgY2lyY3VsYXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJkb2N0b3ItaW5mb3JtYXRpb25cIiB2LWZvcj1cIihpLGluZGV4KSBpbiBzd2lwZXJMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLXN3aXBlci1pdGVtXCIgOnN0eWxlPVwie2hlaWdodDpzd2lwZXJfaGVpZ2h0KydweCd9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2lcIiA6Y2xhc3M9XCInbGlzdF9pbWcnK2luZGV4XCIgbW9kZT1cIndpZHRoRml4XCIgdi1pZj1cImluZGV4PT0wXCIgbGF6eS1sb2FkIEBsb2FkPSdnZXRfaW1nX2hlaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwraVwiIDpjbGFzcz1cIidsaXN0X2ltZycraW5kZXhcIiBtb2RlPVwid2lkdGhGaXhcIiB2LWVsc2UgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG5hdmlnYXRvciBjbGFzcz1cInBvcmR1Y3QtbWVzc2FnZVwiIDp1cmw9XCInL3BhZ2VzL2dvb2RzL2dvb2RzX2RldGFpbD9za3VfaWQ9Jytnb29kcy5pZCsnJmVuY3J5cHRlZF9pZD0nK2dvb2RzLmVuY3J5cHRlZF9pZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJlcXVlc3RVcmwrZ29vZHMuaGVhZF9pbWdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWUtcHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LW5hbWVcIj57e2dvb2RzLmdvb2RzX25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3JkdWN0LXByaWNlXCI+wqU8dGV4dD57e2dvb2RzLnNhbGVfcHJpY2V9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG5hdmlnYXRvciBjbGFzcz1cImNvcnJlbGF0aW9uLWRvY3RvclwiIDp1cmw9XCInL3BhZ2VzL2RvY3Rvci9kb2N0b3JfZGV0YWlsP2lkPScrZG9jdG9yLmlkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvY3Rvci1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2RvY3Rvci5oZWFkaW5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG9jdG9yLW5hbWUtc3Vib3JkaW5hdGUtcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb2N0b3ItbmFtZVwiPnt7ZG9jdG9yLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJvcmRpbmF0ZS1wb3NpdGlvblwiPnt7ZG9jdG9yLnpoaWNoZW5nfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9zd2lwZXI+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxfY29udGVudHNcIiB2LWlmPVwiIXRoaXNfbXlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbHMtdGl0bGVcIj4ge3sgZGlhcnlUaXRsZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyX2RpYXJ5X2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9jb250ZW50XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gY29udGVudFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtIH19XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5oiR55qE6K+m5oOFIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoaXNfbXlfZGlhcnlcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdFx0PHN3aXBlciBjbGFzcz1cInRvcC1zd2lwZXJcIiBpbmRpY2F0b3ItZG90cyBAY2hhbmdlPVwiY2hhbmdlX3N3aXBlclwiIDpzdHlsZT1cIntoZWlnaHQ6c3dpcGVyX2hlaWdodCsncHgnfVwiXHJcblx0XHRcdFx0XHRcdFx0IGluZGljYXRvci1hY3RpdmUtY29sb3I9XCIjRkEzNDc1XCIgY2lyY3VsYXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJkb2N0b3ItaW5mb3JtYXRpb25cIiB2LWZvcj1cIihpLGluZGV4KSBpbiBteV9kaWFyeS5pbWdzXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG9wLXN3aXBlci1pdGVtXCIgOnN0eWxlPVwie2hlaWdodDpzd2lwZXJfaGVpZ2h0KydweCd9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyZXF1ZXN0VXJsK2lcIiA6Y2xhc3M9XCInbGlzdF9pbWcnK2luZGV4XCIgbW9kZT1cIndpZHRoRml4XCIgdi1pZj1cImluZGV4PT0wXCIgQGxvYWQ9J2dldF9pbWdfaGVpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicmVxdWVzdFVybCtpXCIgOmNsYXNzPVwiJ2xpc3RfaW1nJytpbmRleFwiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtZWxzZSA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15X2RpYXJ5X3JlbGV2YW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmF2aWdhdG9yIGNsYXNzPVwicmVsZXZhbnRcIiA6dXJsPVwiJy9wYWdlcy9nb29kcy9nb29kc19kZXRhaWw/c2t1X2lkPScrbXlfZGlhcnkuZ29vZHMuaWQrJyZlbmNyeXB0ZWRfaWQ9JytteV9kaWFyeS5nb29kcy5lbmNyeXB0ZWRfaWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwicmVsZXZhbnRfZ29vZHNfaW1nXCIgOnNyYz1cInJlcXVlc3RVcmwrbXlfZGlhcnkuZ29vZHMuaGVhZF9pbWdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxldmFudF9pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxldmFudF9uYW1lXCI+IHt7IG15X2RpYXJ5Lmdvb2RzLmdvb2RzX25hbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZC1wcmljZVwiPiA8dGV4dD7vv6U8L3RleHQ+IHt7IG15X2RpYXJ5Lmdvb2RzLnNhbGVfcHJpY2UgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L25hdmlnYXRvcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxuYXZpZ2F0b3IgY2xhc3M9XCJyZWxldmFudFwiIDp1cmw9XCInL3BhZ2VzL2RvY3Rvci9kb2N0b3JfZGV0YWlsP2lkPScrbXlfZGlhcnkuZG9jdG9yLmlkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInJlbGV2YW50X2RvY3Rvcl9pbWdcIiA6c3JjPVwicmVxdWVzdFVybCtteV9kaWFyeS5kb2N0b3IuaGVhZF9pbWdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxldmFudF9pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWxldmFudF9uYW1lXCI+IHt7IG15X2RpYXJ5LmRvY3Rvci5uYW1lIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInpoaWNoZW5nXCI+IHt7IG15X2RpYXJ5LmRvY3Rvci56aGljaGVuZyB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbmF2aWdhdG9yPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L3N3aXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15X2RpYXJ5X2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlscy10aXRsZVwiPiB7eyBteV9kaWFyeS50aXRsZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfZGlhcnlfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fY29udGVudFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG15X2RpYXJ5LmNvbnRlbnRcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtICB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwibXlfZGlhcnlfaGludFwiIHYtaWY9XCJ0aGlzX215XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaGludF9jb250ZW50XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbXlfZGlhcnkuYXVkaXRcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHR7eyBpdGVtIH19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDxuYXZpZ2F0b3IgY2xhc3M9XCJjb25zdWx0YXRpb25cIiB1cmw9XCIvcGFnZXMvY29uc3VsdGF0aW9uL2NvbnN1bHRhdGlvblwiIHYtaWY9XCIhdGhpc19teVwiPlxyXG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJjb25zdWx0YXRpb25faW1nXCIgc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY29uc3VsdGluZy5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm15X2RpYXJ5X2J0blwiIHYtaWY9XCJ0aGlzX215XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZGlhcnlfYnRuXCIgQHRhcD1cInNldF9teV9kaWFyeSgwKVwiIHYtaWY9XCJteV9kaWFyeS5zdGF0dXMhPTFcIj4g5Yig6ZmkIDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkaWFyeV9idG5cIiBAdGFwPVwic2V0X215X2RpYXJ5KDEpXCI+IOe8lui+kSA8L3ZpZXc+XHJcblx0XHRcdDxuYXZpZ2F0b3IgY2xhc3M9XCJkaWFyeV9idG5cIiB1cmw9XCIvcGFnZXMvY29uc3VsdGF0aW9uL2NvbnN1bHRhdGlvblwiPiDlkqjor6IgPC9uYXZpZ2F0b3I+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbS1tZXNzYWdlc1wiIHYtaWY9XCIhdGhpc19teVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBhZ2Utdmlldy1jb2xsZWN0LXRyYW5zcG9uZFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFnZS12aWV3XCI+5rWP6KeI6YePOiA8dGV4dD57e3ZpZXdfbnVtfX08L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdFwiIHYtaWY9XCJpc19jb2xsZWN0ID09IDBcIiBAdGFwPSdjb2xsZWN0ZGlhcnkoaWQpJz5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC9jb2xsZWN0LnBuZ1wiPjwvaW1hZ2U+PHRleHQ+e3tjb2xsZWN0X251bX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3RcIiB2LWVsc2UgQHRhcD0nY2FuY2VsTGlrZShpZCknPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NvbGxlY3RfaG92ZXIucG5nXCI+PC9pbWFnZT48dGV4dCBjbGFzcz1cImNvbGxlY3RfaG92ZXJcIj57e2NvbGxlY3RfbnVtfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidHJhbnNwb25kXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaGFyZS5wbmdcIj48L2ltYWdlPiA8dGV4dD57e3NoYXJlX251bX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHRvcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b3BCYXIudnVlXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR0b3BCYXIsXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZW51V2lkdGg6IDAsXHJcblx0XHRcdFx0bWVudVRvcDogMCxcclxuXHRcdFx0XHRtZW51SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdG1lbnVMZWZ0OiAwLFxyXG5cdFx0XHRcdG1lbnVCb3R0b206IDAsXHJcblx0XHRcdFx0aGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGJhck5hbWU6ICdiYWNrJywgLy/lr7zoiKrmnaHlkI3np7BcclxuXHRcdFx0XHR0b3BCYWNrZ3JvdW5kQ29sb3I6ICcjMzMzMzMzJyxcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdGJhY2tJbWFnZTogJy9zdGF0aWMvaW1hZ2VzL2JhY2syLnBuZycsXHJcblx0XHRcdFx0dGl0bGU6ICfml6XorrDor6bmg4UnLFxyXG5cdFx0XHRcdHN3aXBlcl9oZWlnaHQ6IDM1MCwgLy/lpJbpg6jnmoTpq5jluqZcclxuXHRcdFx0XHRzd2lwZXJMaXN0OiBbXSxcclxuXHRcdFx0XHRpZDogJzExNycsIC8v5pel6K6waWRcclxuXHRcdFx0XHRjb250ZW50OiAnJywgLy/lhoXlrrlcclxuXHRcdFx0XHRjb2xsZWN0X251bTogMCwgLy/ml6XorrDmlLbol4/mlbBcclxuXHRcdFx0XHRkaWFyeV9udW06IDEsIC8v5pel6K6w5oC75pWwLFxyXG5cdFx0XHRcdGRvY3RvcjogW3t9XSwgLy/ljLvnlJ/kv6Hmga8gICAg5Li656m65YiZ5LiN5bGV56S6XHJcblx0XHRcdFx0Z29vZHM6IFt7fV0sIC8v5pel6K6w5YWz6IGU55qE5ZWG5ZOB5L+h5oGvXHJcblx0XHRcdFx0aGVhZF9pY286ICcnLCAvLyDml6XorrDnlKjmiLfnlKjmiLflpLTlg49cclxuXHRcdFx0XHRpbWdzOiBbXSwgLy/ml6XorrDlm77niYflnLDlnYAgICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ5Zu+54mHXHJcblx0XHRcdFx0aXNfY29sbGVjdDogMCwgLy8g5rWP6KeI55So5oi35piv5ZCm5pS26JePICAgIDAg5pyq5pS26JePICAxIOW3suaUtuiXj1xyXG5cdFx0XHRcdG5pY2tfbmFtZTogJycsIC8vIOaXpeiusOeUqOaIt+aYteensFxyXG5cdFx0XHRcdHNoYXJlX251bTogMCxcclxuXHRcdFx0XHRkaWFyeVRpdGxlOiAnJywgLy/ml6XorrDmoIfpophcclxuXHRcdFx0XHR1c2VyX21hcms6ICcnLCAvL+aXpeiusOeUqOaIt+agh+ekulxyXG5cdFx0XHRcdHZpZGVvOiAnJywgLy8g5pel6K6w6KeG6aKR5Zyw5Z2AICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ6KeG6aKRXHJcblx0XHRcdFx0dmlld19udW06IDAsIC8v5pel6K6w5rWP6KeI5pWwXHJcblx0XHRcdFx0cmVxdWVzdFVybDogJycsXHJcblx0XHRcdFx0dGhpc19teTogZmFsc2UsXHJcblx0XHRcdFx0bXlfZGlhcnk6IHtcclxuXHRcdFx0XHRcdC8vIGlkOiAxNSwgLy/ml6XorrBpZFxyXG5cdFx0XHRcdFx0Ly8gdGl0bGU6IFwi6buO5be05aup5oC757uf5om/6K6kM+WRqOWJjeWwseefpemBk+i0nemygeeJuea4r+acieWNsemZqe+8muS9huaIkeS4jei0n+i0o1wiLCAvL+aXpeiusOagh+mimFxyXG5cdFx0XHRcdFx0Ly8gdmlkZW86IFwiXCIsIC8v5pel6K6w6KeG6aKRXHJcblx0XHRcdFx0XHQvLyBjb250ZW50OiBcIueIhueCuOeOsOWcuu+8iOWbvua6kO+8mui3r+mAj+ekvu+8iTxiciAvPjxiciAvPua1t+Wklue9kTjmnIg45pel55S16buO5be05aup5oC757uf57Gz5q2H5bCUwrflpaXmganlkajkupTvvIg35pel77yJ5ZCR6K6w6ICF6KGo56S677yM5LuW5Zyo6L+RM+WRqOWJjemmluasoeiiq+WRiuefpei0nemygeeJuea4r+WPo+acieWNsemZqeW6k+WtmO+8jOW5tueri+WNs+WRveS7pOWGm+S6i+WSjOWuieWFqOacuuaehOmHh+WPluKAnOW/heimgeihjOWKqOKAneOAguS9huWlpeaBqeWQpuiupOS7luWvueeIhueCuOi0n+aciei0o+S7u++8jOWboOS4uuiHquW3seaXoOadg+WGs+Wumuivpea4r+WPo+S6i+WKoe+8jOiAjOWJjeS7u+aUv+W6nOS5n+W3suiiq+WRiuefpeWNsemZqeWTgeWtmOWcqOOAgjxiciAvPjxiciAvPuaNruiLseWbveOAiueLrOeri+aKpeOAi+aKpemBk++8jOW9k+iusOiAhemXruWIsOKAnOaCqOefpemBk+acieWkmuWwkemXrumimOato+WcqOe0r+enr+KAneaXtu+8jOWlpeaBqeWbnuetlOivtO+8jDIwMTPlubTov5noiZjoiLnooqvmsqHmlLblkI7vvIzkuIrkuIDlsYrmlL/lupzlsLHlt7Lnu4/nn6XpgZPov5nnp43ljbHpmannmoTlrZjlnKjvvIzigJzlroPku6zlnKjpgqPph4zlrZjmlL7kuoY35bm077yM5LuW5Lus6K+06L+Z5b6I5Y2x6Zmp77yM5L2G5oiR5LiN6LSf6LSj44CC5oiR5LiN55+l6YGT5a6D5Yiw5bqV5pS+5Zyo5ZOq77yM5oiR55Sa6Iez5LiN55+l6YGT5Y2x6Zmp56iL5bqm4oCd77yM6ICM5LuW6KGo56S677yM6Ieq5LuON+aciDIw5pel5b6X55+l6L+Z5om55bqT5a2Y5pe277yM5LuW5bey57uP56uL5Y2z6KaB5rGC5Yab5LqL5ZKM5a6J5YWo5a6Y5ZGY5YGa5bqU6K+l5YGa55qE5LqL5oOF44CCPGJyIC8+PGJyIC8+5aWl5oGp6L+Y6KGl5YWF6K+077yM6LSd6bKB54m55riv5Y+j54iG54K455qE5Y6f5Zug5bCa5pyq56Gu5a6a77yM5Zug5Li65pyJ5Lqb5Zu95a625Y+v6IO96YCa6L+H54Gr566t5by544CB54K45by55oiW5YW25LuW5omL5q615bmy5omw5Yir5Zu944CC5aWl5oGp6KGo56S65bey6K+35rGC6ams5YWL6b6Z5ZCR6buO5be05aup5o+Q5L6b54iG54K4556s6Ze055qE6Iiq5ouN54Wn54mH77yM5aaC5p6c5rKh5pyJ77yM6buO5pa55bCG6K+35YW25LuW5Zu95a6256Gu5a6a5LqL5Lu25piv5aSW6YOo5Yqb6YeP5a+86Ie06L+Y5piv6LW354Gr5byV5Y+R54iG54K444CCPGJyIC8+PGJyIC8+5oiq6Iez55uu5YmN77yM6buO5be05aup6aaW6YO96LSd6bKB54m55riv5Y+j5Yy656qB5Y+R55qE5Ymn54OI54iG54K45bey6Ie0MTU05Lq65q275Lqh77yMNTAwMOWkmuS6uuWPl+S8pOOAguS6i+WQju+8jOWtmOaUvuWkmuW5tOacgOe7iOiiq+W8leeHg+eahDI3NTDlpJrlkKjnoZ3phbjpk7XlvJXlj5HlpJbnlYzlvLrng4jlhbPms6jjgILpu47lt7Tlq6nmlL/lupznrKzkuIDml7bpl7TlsIbkuovmlYXljp/lm6DmjIflkJHlnKjotJ3psoHnibnmuK/igJzkuI3lronlhajlrZjmlL7igJ025bm055qE5aSn6YeP56Gd6YW46ZO177yM5aWl5oGp6KqT6KiA5a+56LSj5Lu75Lq65pa95Yqg4oCc5pyA5Lil6YeN55qE5oOp572a4oCd44CC77yI5rW35aSW572RIOmtj+mbquW3je+8iTxiciAvPjxiciAvPuacrOaWh+ezu+eJiOadg+S9nOWTge+8jOacque7j+aOiOadg+S4peemgei9rOi9veOAgua1t+WkluinhumHju+8jOS4reWbveeri+Wcuu+8jOa1j+iniOS6uuawkeaXpeaKpea1t+WklueJiOWumOe9keKAlOKAlOa1t+Wklue9kXd3dy5oYWl3YWluZXQuY27miJbigJzmtbflrqLigJ3lrqLmiLfnq6/vvIzpooblhYjkuIDmraXojrflj5bmnYPlqIHotYTorq9cIiwgLy/ml6XorrDmraPmlodcclxuXHRcdFx0XHRcdC8vIHNlb19rZXl3b3JkOiBudWxsLFxyXG5cdFx0XHRcdFx0Ly8gc2VvX2Rlc2NyaXB0aW9uOiBudWxsLFxyXG5cdFx0XHRcdFx0Ly8gc3RhdHVzOiAtMSwgLy/ml6XorrDnirbmgIEgIC0xICDlrqHmoLjmnKrlkKzov4cgIDHlrqHmoLjpgJrov4cgIDDluKblrqHmoLhcclxuXHRcdFx0XHRcdC8vIGNvbGxlY3RfbnVtOiAxLCAvL+aUtuiXj+aVsOmHj1xyXG5cdFx0XHRcdFx0Ly8gc2hhcmVfbnVtOiAwLCAvL+WIhuS6q+aVsOmHj1xyXG5cdFx0XHRcdFx0Ly8gdmlld19udW06IDAsIC8v5pel6K6w5rWP6KeI5pWwXHJcblx0XHRcdFx0XHQvLyBpbWdzOiBbIC8v5pel6K6w5Zu+54mHIOWIl+ihqFxyXG5cdFx0XHRcdFx0Ly8gXHRcInVwbG9hZC9nb29kcy9pbWFnZXMvMjAyMDEwLzE1LzFLdGd3NWpKNTVQelZTMVBvZ1MxeUtGd1luMmxHSGNYeExXdmlxSTdfMjUwLmpwZWdcIixcclxuXHRcdFx0XHRcdC8vIFx0XCJ1cGxvYWQvZ29vZHMvaW1hZ2VzLzIwMjAxMC8xNS90eHo0RzVrRlFHS2dBSjZqR2lOdVZIQ0kyWlBzWmwxRnc4WmVBQVhtXzI1MC5qcGVnXCJcclxuXHRcdFx0XHRcdC8vIF0sXHJcblx0XHRcdFx0XHQvLyBoZWFkX2ljbzogXCJcIiwgLy/ml6XorrDmiYDlsZ4g55So5oi35aS05YOPXHJcblx0XHRcdFx0XHQvLyBuaWNrX25hbWU6IFwi5rWL6K+VMVwiLCAvL+aXpeiusOaJgOWxnueUqOaIt+aYteensFxyXG5cdFx0XHRcdFx0Ly8gZGlhcnlfbnVtOiA5LCAvL+aXpeiusOaAu+aVsFxyXG5cdFx0XHRcdFx0Ly8gdXNlcl9tYXJrOiBcIlZVWlNVRk5HVGtWVFZ6VjVZakZDVDA1dGNHeFZiR1JIVVcxS1IwNUhUa05WUlZwRFlqTlplVmt3U1RKVFNHeHNWVmRrVjAxNlFtRmplakE5XCIsLy/ml6XorrDmoIfnpLogXHJcblx0XHRcdFx0XHQvLyBnb29kczogeyAvL+aXpeiusOaJgOWxnuWVhuWTgVxyXG5cdFx0XHRcdFx0Ly8gXHRzdGF0dXM6IFwiMVwiLFxyXG5cdFx0XHRcdFx0Ly8gXHRpc19kZWxldGU6IFwiMFwiLFxyXG5cdFx0XHRcdFx0Ly8gXHRlbmNyeXB0ZWRfaWQ6IFwiTUZGckt6bG5Zbk16VVRWMU5HTnJSall2UzNJMVp6MDlcIiwgLy/llYblk4EgIHNwdV9pZFxyXG5cdFx0XHRcdFx0Ly8gXHRnb29kc19uYW1lOiBcIuWSjOS9oOW+iOmrmDNcIiwgLy/llYblk4HlkI3np7BcclxuXHRcdFx0XHRcdC8vIFx0aGVhZF9pbWc6IFwidXBsb2FkL2dvb2RzL2ltYWdlcy8yMDIwMDgvMDUvN2YxMWM2MmUxOGRkYjI1M2UyMzFmNDg5YmQwOGYwYmQ0MzcxXzI1MC5qcGdcIiwgLy/llYblk4HlpLTlg49cclxuXHRcdFx0XHRcdC8vIFx0c2t1X2lzX2RlbGV0ZTogXCIwXCIsXHJcblx0XHRcdFx0XHQvLyBcdGlkOiBcIjM5XCIsIC8v5ZWG5ZOBIHNrdV9pZFxyXG5cdFx0XHRcdFx0Ly8gXHRzYWxlX3ByaWNlOiBcIjMwMC4wXCIgLy/llYblk4HplIDllK7ku7fmoLxcclxuXHRcdFx0XHRcdC8vIH0sXHJcblx0XHRcdFx0XHQvLyBkb2N0b3I6IHtcclxuXHRcdFx0XHRcdC8vIFx0aWQ6IFwiMVwiLFxyXG5cdFx0XHRcdFx0Ly8gXHRuYW1lOiBcIumZiOaJrFwiLFxyXG5cdFx0XHRcdFx0Ly8gXHRoZWFkaW5nOiBcInVwbG9hZC9nb29kcy9pbWFnZXMvMjAyMDA3LzI0LzdlYzUyMzdmMTczMjRmNzk1OTE0OWQwNmYxYTlkMWVlNDE2NS5qcGdcIixcclxuXHRcdFx0XHRcdC8vIFx0emhpY2hlbmc6IFwiIOWNjue+jue0q+mmqOecvOmDqOaVtOW9ouWPiuS/ruWkjeS4reW/g+S4u1wiXHJcblx0XHRcdFx0XHQvLyB9LFxyXG5cdFx0XHRcdFx0Ly8gYXVkaXQ6IFwi5oqx5q2J77yB5oKo55qE5pel6K6w5a6h5qC45pyq6YCa6L+H77yB5L+u5pS55ZCO5Y+v5Lul6YeN5paw5Y+R6LW35a6h5qC45ZaU77yBPGJyIC8+PGJyIC8+5a6h5qC45oSP6KeB77ya5Zu+54mH5LiN5riF5pmw77yb5o+P5YaZ5YaF5a655LiO5omA6YCJ5ZWG5ZOB5LiN56ym77ybXCJcclxuXHRcdFx0XHR9LCAvL+aIkeeahOaXpeiusFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdGNvbnN0IHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoaXMucmVxdWVzdCA9IHRoaXMuJHJlcXVlc3RcclxuXHRcdFx0dGhhdC5yZXF1ZXN0VXJsID0gdGhhdC5yZXF1ZXN0Lmdsb2JhbERhdGEucmVxdWVzdFVybFxyXG5cdFx0XHQvLyBvcHRpb25zLnJvdXRlID0gJ215J1xyXG5cdFx0XHRpZiAob3B0aW9ucy5yb3V0ZSkge1xyXG5cdFx0XHRcdHRoYXQudGhpc19teSA9IHRydWVcclxuXHRcdFx0XHR0aGF0LmdldF9teV9kaWFyeSgpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhhdC5pZCA9IG9wdGlvbnMuaWRcclxuXHRcdFx0XHR0aGF0LmRpYXJ5ZGV0YWlscyh0aGF0LmlkKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKGdldEFwcCgpLmdsb2JhbERhdGEucGxhdGZvcm0pXHJcblx0XHRcdC8vIOWQjumdouenu+WKqOWIsOivt+axguaIkeeahOaXpeiusOivpuaDheS4reWkhOeQhuWGheWuueWSjOaPkOekulxyXG5cdFx0XHQvLyB0aGF0Lm15X2RpYXJ5LmNvbnRlbnQgPSB0aGF0LnNldF9jb250ZW50KHRoYXQubXlfZGlhcnkuY29udGVudClcclxuXHRcdFx0Ly8gdGhhdC5teV9kaWFyeS5hdWRpdCA9IHRoYXQuc2V0X2NvbnRlbnQodGhhdC5teV9kaWFyeS5hdWRpdClcclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQuaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0O1xyXG5cdFx0XHQvLyDliKTlrprov5DooYzlubPlj7BcclxuXHRcdFx0bGV0IHBsYXRmb3JtID0gZ2V0QXBwKCkucGxhdGZvcm0gfHwgZ2V0QXBwKCkuZ2xvYmFsRGF0YS5wbGF0Zm9ybVxyXG5cdFx0XHRpZiAocGxhdGZvcm0gPT0gJ0FwcGxldHMnKSB7XHJcblx0XHRcdFx0Ly8g6I635Y+W5bGP5bmV6auY5bqmXHJcblx0XHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBtZW51ID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51V2lkdGggPSBtZW51LndpZHRoXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudVRvcCA9IG1lbnUudG9wXHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUhlaWdodCA9IG1lbnUuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdHRoYXQubWVudUxlZnQgPSBtZW51LmxlZnRcclxuXHRcdFx0XHRcdFx0dGhhdC5tZW51Qm90dG9tID0gbWVudS5ib3R0b21cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2UgaWYgKHBsYXRmb3JtID09ICdBUFAnKXtcclxuXHRcdFx0XHR0aGF0Lm1lbnVXaWR0aCA9IDkwXHJcblx0XHRcdFx0dGhhdC5tZW51VG9wID0gNDBcclxuXHRcdFx0XHR0aGF0Lm1lbnVIZWlnaHQgPSAzMFxyXG5cdFx0XHRcdHRoYXQubWVudUxlZnQgPSAyNzhcclxuXHRcdFx0XHR0aGF0Lm1lbnVCb3R0b20gPSA3MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXRsaXN0X2hlaWdodDogZnVuY3Rpb24obGlzdCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdChsaXN0KS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGF0LnN3aXBlcl9oZWlnaHQgPSBkYXRhLmhlaWdodFxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YS5oZWlnaHQsIDExMTEpXHJcblx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2Vfc3dpcGVyOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuZ2V0bGlzdF9oZWlnaHQoYC5saXN0X2ltZyR7ZS50YXJnZXQuY3VycmVudH1gKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRfaW1nX2hlaWdodDogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bGV0IGUgPSB7XHJcblx0XHRcdFx0XHRcdHRhcmdldDoge1xyXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQ6IDBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5jaGFuZ2Vfc3dpcGVyKGUpXHJcblx0XHRcdFx0fSwgNTAwKVxyXG5cdFx0XHRcdC8vIGxldCBoZWlnaHQgPSBldmVudC5kZXRhaWwuaGVpZ2h0XHJcblx0XHRcdFx0Ly8gaWYgKHRoYXQucGxhdGZvcm0gIT0gJ2FwcGxldCcpIHtcclxuXHRcdFx0XHQvLyBcdHRoYXQuc3dpcGVyX2hlaWdodCA9IGhlaWdodCAvIDIgLSAxOFxyXG5cdFx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gXHR0aGF0LnN3aXBlcl9oZWlnaHQgPSBoZWlnaHQgLyAyXHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRfY29udGVudDogZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0XHRcdGxldCBsaXN0ID0gW11cclxuXHRcdFx0XHRsZXQgdGV4dDEgPSB0ZXh0LnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcXG5cIik7IC8v5oiq5Y+WaHRtbOagh+etvlxyXG5cclxuXHRcdFx0XHRsZXQgdGV4dDIgPSB0ZXh0MS5yZXBsYWNlKC8mbmJzcDsvaWcsIFwiIFwiKTsgLy/miKrlj5bnqbrmoLznrYnnibnmrormoIfnrb5cclxuXHRcdFx0XHRpZiAodGV4dDIuaW5kZXhPZignXFxuJykgIT0gLTEpIHtcclxuXHRcdFx0XHRcdGxpc3QgPSB0ZXh0Mi5zcGxpdCgnXFxuJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGxpc3RcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K+m5oOFXHJcblx0XHRcdGRpYXJ5ZGV0YWlsczogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0XHRjb25zdCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdkaWFyeWRldGFpbHMnLFxyXG5cdFx0XHRcdFx0ZGlhcnlfaWQ6IGlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiZGlhcnlcIiwgZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0dGhhdC5pZCA9IGRhdGEuaWQgLy/ml6XorrBpZFxyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnQgPSB0aGF0LnNldF9jb250ZW50KGRhdGEuY29udGVudClcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5jb250ZW50ID0gZGF0YS5jb250ZW50XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQuc2V0X2NvbnRlbnQoZGF0YS5jb250ZW50KSlcclxuXHRcdFx0XHRcdFx0dGhhdC5jb2xsZWN0X251bSA9IGRhdGEuY29sbGVjdF9udW0gLy/ml6XorrDmlLbol4/mlbBcclxuXHRcdFx0XHRcdFx0dGhhdC5kaWFyeV9udW0gPSBkYXRhLmRpYXJ5X251bSAvL+aXpeiusOaAu+aVsCxcclxuXHRcdFx0XHRcdFx0dGhhdC5kb2N0b3IgPSBkYXRhLmRvY3RvciAvL+WMu+eUn+S/oeaBryAgICDkuLrnqbrliJnkuI3lsZXnpLpcclxuXHRcdFx0XHRcdFx0dGhhdC5nb29kcyA9IGRhdGEuZ29vZHMgLy/ml6XorrDlhbPogZTnmoTllYblk4Hkv6Hmga9cclxuXHRcdFx0XHRcdFx0dGhhdC5oZWFkX2ljbyA9IGRhdGEuaGVhZF9pY28gLy8g5pel6K6w55So5oi355So5oi35aS05YOPXHJcblx0XHRcdFx0XHRcdHRoYXQuaW1ncyA9IGRhdGEuaW1ncyAvL+aXpeiusOWbvueJh+WcsOWdgCAgICAg6K+l5a2X5q615LiN5Li656m6ICDml6XorrDmnInlm77niYdcclxuXHRcdFx0XHRcdFx0dGhhdC5pc19jb2xsZWN0ID0gZGF0YS5pc19jb2xsZWN0IC8vIOa1j+iniOeUqOaIt+aYr+WQpuaUtuiXjyAgICAwIOacquaUtuiXjyAgMSDlt7LmlLbol49cclxuXHRcdFx0XHRcdFx0dGhhdC5uaWNrX25hbWUgPSBkYXRhLm5pY2tfbmFtZSAvLyDml6XorrDnlKjmiLfmmLXnp7BcclxuXHRcdFx0XHRcdFx0dGhhdC5zaGFyZV9udW0gPSBkYXRhLnNoYXJlX251bVxyXG5cdFx0XHRcdFx0XHR0aGF0LmRpYXJ5VGl0bGUgPSBkYXRhLnRpdGxlIC8v5pel6K6w5qCH6aKYXHJcblx0XHRcdFx0XHRcdHRoYXQudXNlcl9tYXJrID0gZGF0YS51c2VyX21hcmsgLy/ml6XorrDnlKjmiLfmoIfnpLpcclxuXHRcdFx0XHRcdFx0dGhhdC52aWRlbyA9IGRhdGEudmlkZW8gLy8g5pel6K6w6KeG6aKR5Zyw5Z2AICAgIOivpeWtl+auteS4jeS4uuepuiAg5pel6K6w5pyJ6KeG6aKRXHJcblx0XHRcdFx0XHRcdHRoYXQudmlld19udW0gPSBkYXRhLnZpZXdfbnVtIC8v5pel6K6w5rWP6KeI5pWwXHJcblx0XHRcdFx0XHRcdHRoYXQuc3dpcGVyTGlzdCA9IHRoYXQuaW1nc1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaIkeeahOS4quS6uuaXpeiusOivpuaDhVxyXG5cdFx0XHRnZXRfbXlfZGlhcnk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhSW5mbyA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnbXlkaWFyeWRldGFpbHMnLFxyXG5cdFx0XHRcdFx0ZGlhcnlfaWQ6IHRoYXQuaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gdGhpcy5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJkaWFyeVwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdC8vIFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdC8vIFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRfbXlfZGlhcnk6IGZ1bmN0aW9uKHR5cGUpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyB0eXBlIDAg5Yig6ZmkIDHnvJbovpFcclxuXHRcdFx0XHRpZiAodHlwZSA9PSAwKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5piv5ZCm5Yig6Zmk6L+Z5p2h5pel6K6w77yfJyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgZGF0YUluZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGludGVyZmFjZUlkOiAnZGVsZXRlZGlhcnknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaWFyeV9pZDogdGhhdC5pZFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0LnVuaVJlcXVlc3QoXCJkaWFyeVwiLCBkYXRhSW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwICYmIHJlcy5kYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WIoOmZpOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBgL2RpYXJ5L2RpYXJ5X3BlcnNvbmFsP3JvdXRlPW15YCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0aWYgKHRoYXQubXlfZGlhcnkudmlkZW8pIHtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9kaWFyeS9kaWFyeV93cml0ZV92aWRlbz9pZD0ke3RoYXQuaWR9YCxcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZGlhcnkvZGlhcnlfd3JpdGU/aWQ9JHt0aGF0LmlkfWAsXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkuKrkurrkuLvpobVcclxuXHRcdFx0cGVyc29uYWw6IGZ1bmN0aW9uKHVzZXJfbWFyaykge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9kaWFyeS9kaWFyeV9wZXJzb25hbD91c2VyX21hcms9JHt1c2VyX21hcmt9YCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlLbol49cclxuXHRcdFx0Y29sbGVjdGRpYXJ5OiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0aW50ZXJmYWNlSWQ6ICdjb2xsZWN0ZGlhcnknLFxyXG5cdFx0XHRcdFx0ZGlhcnlfaWQ6IGlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiZGlhcnlcIiwgZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzX2NvbGxlY3QgPSAxXHJcblx0XHRcdFx0XHRcdHRoYXQuY29sbGVjdF9udW0gKz0gMVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aUtuiXj+aIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj5bmtojmlLbol49cclxuXHRcdFx0Y2FuY2VsTGlrZTogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGludGVyZmFjZUlkOiAnY2FuY2VsY29sbGVjdGRpYXJ5JyxcclxuXHRcdFx0XHRcdGRpYXJ5X2lkOiBpZC50b1N0cmluZygpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdC51bmlSZXF1ZXN0KFwiZGlhcnlcIiwgZGF0YSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gMTAwMCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzX2NvbGxlY3QgPSAwXHJcblx0XHRcdFx0XHRcdHRoYXQuY29sbGVjdF9udW0gLT0gMVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W3suWPlua2iOaUtuiXjycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnVzZXItbWVzc2FnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG5cdH1cclxuXHJcblx0LnVzZXItaGVhZC1wb3J0cmFpdC1uYW1lLXBob25lLXNldCB7XHJcblx0XHRwYWRkaW5nOiAxMHJweCA0MHJweCA0MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VyLWhlYWQtcG9ydHJhaXQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdH1cclxuXHJcblx0LnVzZXItaGVhZC1wb3J0cmFpdCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMTYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxNjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4MHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjRycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZS1jYXJ0IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVzZXItbmFtZS1jYXJ0IC51c2VyLW5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmRldGFpbF9udW1iZXIge1xyXG5cdFx0Y29sb3I6ICNGQTM0NzU7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMThycHg7XHJcblx0fVxyXG5cclxuXHQudG9wLXN3aXBlci1pdGVtIGltYWdlIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHQudG9wLXN3aXBlci1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1tZXNzYWdlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogNTZycHg7XHJcblx0XHRsZWZ0OiAzMnJweDtcclxuXHRcdHdpZHRoOiAzMjBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0b3BhY2l0eTogMC43O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0cGFkZGluZzogOHJweDtcclxuXHR9XHJcblxyXG5cdC5jb3JyZWxhdGlvbi1kb2N0b3Ige1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiA1NnJweDtcclxuXHRcdHJpZ2h0OiAxMHJweDtcclxuXHRcdHdpZHRoOiAzMjBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0b3BhY2l0eTogMC43O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0cGFkZGluZzogOHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LWltYWdlcyxcclxuXHQucG9yZHVjdC1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuY29ycmVsYXRpb24tZG9jdG9yIC5kb2N0b3ItaW1hZ2VzLFxyXG5cdC5jb3JyZWxhdGlvbi1kb2N0b3IgLmRvY3Rvci1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LW5hbWUtcHJpY2UsXHJcblx0LmRvY3Rvci1uYW1lLXN1Ym9yZGluYXRlLXBvc2l0aW9uIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEycnB4O1xyXG5cdH1cclxuXHJcblx0LmRvY3Rvci1uYW1lIHtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC5wb3JkdWN0LW5hbWUtcHJpY2UgLnBvcmR1Y3QtbmFtZSxcclxuXHQuc3Vib3JkaW5hdGUtcG9zaXRpb24ge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0d2lkdGg6IDIwOHJweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucG9yZHVjdC1wcmljZSB0ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuZGV0YWlsX2NvbnRlbnRzIHtcclxuXHRcdHBhZGRpbmc6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuZGV0YWlscy10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0Y29sb3I6ICMxMTExMTE7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyNHJweDtcclxuXHRcdGJvcmRlci1ib3R0b206IDJycHggc29saWQgI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC51c2VyX2RpYXJ5X2NvbnRlbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0cGFkZGluZzogMzBycHggMCAxNjBycHg7XHJcblx0fVxyXG5cclxuXHQuaXRlbV9jb250ZW50IHtcclxuXHRcdG1pbi1oZWlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbS1tZXNzYWdlcyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMzBycHggMDtcclxuXHRcdGJvcmRlci10b3A6IDJycHggc29saWQgI2YwZjBmMDtcclxuXHR9XHJcblxyXG5cdC5wYWdlLXZpZXctY29sbGVjdC10cmFuc3BvbmQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHR9XHJcblxyXG5cdC5wYWdlLXZpZXctY29sbGVjdC10cmFuc3BvbmQgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuY29sbGVjdCxcclxuXHQudHJhbnNwb25kIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBhZ2UtdmlldyB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0fVxyXG5cclxuXHQucGFnZS12aWV3IHRleHQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvbGxlY3RfaG92ZXIge1xyXG5cdFx0Y29sb3I6ICM5RjU1RkY7XHJcblx0fVxyXG5cclxuXHQuY29uc3VsdGF0aW9uIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdFx0Ym90dG9tOiAyNDBycHg7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG5cclxuXHQuY29uc3VsdGF0aW9uX2ltZyB7XHJcblx0XHR3aWR0aDogMTIwcnB4O1xyXG5cdH1cclxuXHJcblx0Lyog5oiR55qEICovXHJcblx0Lm15X2RpYXJ5X3JlbGV2YW50IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG5cdFx0cGFkZGluZzogMTVycHggMDtcclxuXHR9XHJcblxyXG5cdC5yZWxldmFudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHdpZHRoOiAzNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0LnJlbGV2YW50X2dvb2RzX2ltZyxcclxuXHQucmVsZXZhbnRfZG9jdG9yX2ltZyB7XHJcblx0XHR3aWR0aDogODBycHggIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnJlbGV2YW50X2luZm8ge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogMCAxMHJweDtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cclxuXHQucmVsZXZhbnRfbmFtZSB7XHJcblx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG5cdH1cclxuXHJcblx0Lmdvb2QtcHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0Lmdvb2QtcHJpY2UgdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnpoaWNoZW5nIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0fVxyXG5cclxuXHQubXlfZGlhcnlfY29udGVudCB7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAyMHJweCAxNjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0Lm15X2RpYXJ5X2hpbnQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG5cdFx0b3BhY2l0eTogMC42O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cclxuXHQuaGludF9jb250ZW50IHtcclxuXHRcdG1pbi1oZWlnaHQ6IDZycHg7XHJcblx0fVxyXG5cclxuXHQubXlfZGlhcnlfYnRuIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiAyMHJweDtcclxuXHRcdGJvdHRvbTogMjAwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuZGlhcnlfYnRuIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcblx0XHRvcGFjaXR5OiAwLjY7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RpYXJ5X2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OTlmOTZkMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kaWFyeV9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk5Zjk2ZDImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA5MjM1OTE4MjA3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==