(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/ticket"],{

/***/ 524:
/*!*************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& */ 525);
/* harmony import */ var _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.vue?vue&type=script&lang=js& */ 527);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& */ 529);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ab11f3f2",
  null,
  false,
  _ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/ticket.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 525:
/*!********************************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& */ 526);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 526:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/components/ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var l0 = _vm.__map(_vm.cardsList, function(item, k) {
    var $orig = _vm.__get_orig(item)

    var m0 =
      item.card_no && item.use_end_time - _vm.time_now > 0
        ? parseInt(((item.use_end_time - _vm.time_now) / 60 / 60 / 24) % 30)
        : null
    var m1 =
      item.card_no && item.use_end_time - _vm.time_now > 0 && m0 > 0
        ? parseInt(((item.use_end_time - _vm.time_now) / 60 / 60 / 24) % 30)
        : null
    var m2 =
      item.card_no && item.use_end_time - _vm.time_now > 0 && !(m0 > 0)
        ? parseInt(((item.use_end_time - _vm.time_now) / 60 / 60) % 24)
        : null
    var m3 =
      item.card_no &&
      item.use_end_time - _vm.time_now > 0 &&
      !(m0 > 0) &&
      m2 > 0
        ? parseInt(((item.use_end_time - _vm.time_now) / 60 / 60) % 24)
        : null
    return {
      $orig: $orig,
      m0: m0,
      m1: m1,
      m2: m2,
      m3: m3
    }
  })

  var l1 = _vm.__map(_vm.goodsCardsList, function(item, k) {
    var $orig = _vm.__get_orig(item)

    var m4 =
      item.rest_time > 0 ? parseInt((item.rest_time / 60 / 60) % 24) : null
    var m5 = item.rest_time > 0 ? parseInt((item.rest_time / 60) % 60) : null
    var m6 = item.rest_time > 0 ? parseInt(item.rest_time % 60) : null
    return {
      $orig: $orig,
      m4: m4,
      m5: m5,
      m6: m6
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 527:
/*!**************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=script&lang=js& */ 528);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 528:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/components/ticket.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    goodsCardsList: Array,
    order_card: Array,
    cardsList: Array,
    marginTop: Number,
    time_now: Number,
    can_use: Number,
    card_checked: Boolean,
    platform: String },

  data: function data() {
    return {
      show: false,
      circular_list: ['', '', '', '', '', '', '', '', '', '', '', ''] };

  },

  methods: {
    // 显示卡券详情
    showDetails: function showDetails(number) {
      this.$emit('showDetails', number);
    },
    showTicket: function showTicket(id) {
      this.$emit('showTicket', id);
      // console.log(id)
    },
    show_order_ticket: function show_order_ticket(index, can_use) {
      var that = this;
      that.order_card[index].showTicketDetails = !that.order_card[index].showTicketDetails;
      if (that.order_card[index].showTicketDetails) {
        that.order_card[index].arrowImages = '/static/images/arrow-top.png';
      } else {
        that.order_card[index].arrowImages = '/static/images/arrow-down.png';
      }
      this.$emit('showTicket', that.order_card, can_use);
      // console.log(that.order_card[index].showTicketDetails,that.order_card[index+1].showTicketDetails)
    },
    checkboxChange: function checkboxChange(index, id, can_use, platform) {
      var that = this;
      // console.log(platform)
      if (platform == 'applet') {
        if (can_use == 0) {
          that.order_card[index].checked = !that.order_card[index].checked;
          // console.log(that.order_card[index].checked,that.order_card[index+1].checked)
          if (that.order_card[index].checked) {
            this.$emit('checkboxChange', that.order_card, id, index, 1);
          } else {
            this.$emit('checkboxChange', that.order_card, id, index, 0);
          }
        } else
        {
          uni.showToast({
            title: "卡券不可使用",
            icon: 'none' });

        }
      } else {
        if (can_use == 0) {
          // 目前App端选择卡券出现未判定的现象，选择index的值，会造成下一个相同id的值产生通化，也就是改变一个的值，另一个相同id的值也随之改变，而且做得判定不生效
          // that.order_card[index].checked = !that.order_card[index].checked
          // console.log(that.order_card[index].checked,that.order_card[index+1].checked)
          for (var key in that.order_card) {
            if (key == index && id == that.order_card[key].id) {
              that.order_card[key].checked = !that.order_card[key].checked;
              console.log(index, key);
              // console.log(that.order_card[index].checked,that.order_card[index+1].checked)
              // let obj = that.order_card[key]
              // this.$set(that.order_card,index,obj)
              if (that.order_card[index].checked) {
                this.$emit('checkboxChange', that.order_card, id, index, 1);
              } else {
                this.$emit('checkboxChange', that.order_card, id, index, 0);
              }
              return;
            }
          }
        } else
        {
          uni.showToast({
            title: "卡券不可使用",
            icon: 'none' });

        }
      }

    },
    // 领取卡券
    getCard: function getCard(id, store, salecard_user_count, get_limit, index) {
      var prompt = '';
      if (get_limit > salecard_user_count && store > 0) {
        this.$emit('getCards', id, prompt, index);
      } else
      {
        prompt = '无法领取该卡券';
        this.$emit('getCards', id, prompt, index);
      }
    },
    getCards: function getCards(id, index, status, get_limit) {
      var prompt = '';
      if (get_limit > 0 && status > 0) {
        this.$emit('getCards', id, prompt, index);
      } else
      {
        prompt = '无法领取该卡券';
        this.$emit('getCards', id, prompt, index);
      }
    },

    // 使用卡券
    userCard: function userCard(id, state) {
      console.log(state);
      this.$emit('useCard', id, state);
    },
    // 核销卡券
    scan_card: function scan_card(id) {
      this.$emit('scan_card', id);
      var that = this;
    },
    // 删除卡券
    deleteCard: function deleteCard(id) {
      this.$emit('deleteCard', id);
    },

    show_order_applet: function show_order_applet(index, id) {
      var that = this;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 529:
/*!**********************************************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& */ 530);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 530:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/components/ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9jb21wb25lbnRzL3RpY2tldC52dWU/OGMyNiIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9jb21wb25lbnRzL3RpY2tldC52dWU/MWNiNyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9jb21wb25lbnRzL3RpY2tldC52dWU/ZTU2YSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9jb21wb25lbnRzL3RpY2tldC52dWU/Y2RhNSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy90aWNrZXQudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL2NvbXBvbmVudHMvdGlja2V0LnZ1ZT9mNzIwIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL2NvbXBvbmVudHMvdGlja2V0LnZ1ZT9hYjM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDtBQUNxQzs7O0FBRzFGO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFncEIsQ0FBZ0IsNnBCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa1pwcUI7QUFDQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQSxvQkFIQTtBQUlBLHFCQUpBO0FBS0Esb0JBTEE7QUFNQSxtQkFOQTtBQU9BLHlCQVBBO0FBUUEsb0JBUkEsRUFEQTs7QUFXQSxNQVhBLGtCQVdBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHFFQUZBOztBQUlBLEdBaEJBOztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFNBUkE7QUFTQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBLE9BaEJBLE1BZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FuQkE7QUFvQkE7QUFDQTtBQUNBLDJCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQTs7QUFFQSxLQXBFQTtBQXFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvRUE7QUFnRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpGQTs7QUEyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9GQTtBQWdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEdBO0FBcUdBO0FBQ0E7QUFDQTtBQUNBLEtBeEdBOztBQTBHQTtBQUNBO0FBQ0EsS0E1R0EsRUFsQkEsRTs7Ozs7Ozs7Ozs7OztBQ2xaQTtBQUFBO0FBQUE7QUFBQTtBQUE2OEIsQ0FBZ0IsNDdCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBaitCO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiY29tcG9uZW50cy90aWNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RpY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWIxMWYzZjImc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hYjExZjNmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImFiMTFmM2YyXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdGlja2V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdGlja2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYjExZjNmMiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGwwID0gX3ZtLl9fbWFwKF92bS5jYXJkc0xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGspIHtcbiAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgdmFyIG0wID1cbiAgICAgIGl0ZW0uY2FyZF9ubyAmJiBpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdyA+IDBcbiAgICAgICAgPyBwYXJzZUludCgoKGl0ZW0udXNlX2VuZF90aW1lIC0gX3ZtLnRpbWVfbm93KSAvIDYwIC8gNjAgLyAyNCkgJSAzMClcbiAgICAgICAgOiBudWxsXG4gICAgdmFyIG0xID1cbiAgICAgIGl0ZW0uY2FyZF9ubyAmJiBpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdyA+IDAgJiYgbTAgPiAwXG4gICAgICAgID8gcGFyc2VJbnQoKChpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCAvIDYwIC8gMjQpICUgMzApXG4gICAgICAgIDogbnVsbFxuICAgIHZhciBtMiA9XG4gICAgICBpdGVtLmNhcmRfbm8gJiYgaXRlbS51c2VfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cgPiAwICYmICEobTAgPiAwKVxuICAgICAgICA/IHBhcnNlSW50KCgoaXRlbS51c2VfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cpIC8gNjAgLyA2MCkgJSAyNClcbiAgICAgICAgOiBudWxsXG4gICAgdmFyIG0zID1cbiAgICAgIGl0ZW0uY2FyZF9ubyAmJlxuICAgICAgaXRlbS51c2VfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cgPiAwICYmXG4gICAgICAhKG0wID4gMCkgJiZcbiAgICAgIG0yID4gMFxuICAgICAgICA/IHBhcnNlSW50KCgoaXRlbS51c2VfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cpIC8gNjAgLyA2MCkgJSAyNClcbiAgICAgICAgOiBudWxsXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIG0wOiBtMCxcbiAgICAgIG0xOiBtMSxcbiAgICAgIG0yOiBtMixcbiAgICAgIG0zOiBtM1xuICAgIH1cbiAgfSlcblxuICB2YXIgbDEgPSBfdm0uX19tYXAoX3ZtLmdvb2RzQ2FyZHNMaXN0LCBmdW5jdGlvbihpdGVtLCBrKSB7XG4gICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaXRlbSlcblxuICAgIHZhciBtNCA9XG4gICAgICBpdGVtLnJlc3RfdGltZSA+IDAgPyBwYXJzZUludCgoaXRlbS5yZXN0X3RpbWUgLyA2MCAvIDYwKSAlIDI0KSA6IG51bGxcbiAgICB2YXIgbTUgPSBpdGVtLnJlc3RfdGltZSA+IDAgPyBwYXJzZUludCgoaXRlbS5yZXN0X3RpbWUgLyA2MCkgJSA2MCkgOiBudWxsXG4gICAgdmFyIG02ID0gaXRlbS5yZXN0X3RpbWUgPiAwID8gcGFyc2VJbnQoaXRlbS5yZXN0X3RpbWUgJSA2MCkgOiBudWxsXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIG00OiBtNCxcbiAgICAgIG01OiBtNSxcbiAgICAgIG02OiBtNlxuICAgIH1cbiAgfSlcblxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGwwOiBsMCxcbiAgICAgICAgbDE6IGwxXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtY29udGVudFwiPlx0XHRcdFx0XHRcclxuXHRcdDwhLS0g57q/5LiKIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaXRlbXNcIiB2LWZvcj1cIihpdGVtLGspIGluIGNhcmRzTGlzdFwiIDprZXk9J2snID5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbnVtYmVyLWV4cGlyYXRpb24tdGltZVwiIHYtaWY9XCJpdGVtLmNhcmRfbm9cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1udW1lclwiPuWNoeWIuOe8luWPtzp7e2l0ZW0uY2FyZF9ub319PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhwaXJhdGlvbi10aW1lXCIgdi1pZj1cIml0ZW0udXNlX2VuZF90aW1lIC0gdGltZV9ub3cgPiAwIFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInBhcnNlSW50KChpdGVtLnVzZV9lbmRfdGltZSAtIHRpbWVfbm93KSAvIDYwIC8gNjAgLyAyNCAlIDMwICk+MFwiPlxyXG5cdFx0XHRcdFx0XHR7eyBwYXJzZUludCgoaXRlbS51c2VfZW5kX3RpbWUgLSB0aW1lX25vdykgLyA2MCAvIDYwIC8gMjQgJSAzMCApIH195aSp5YaF6L+H5pyfXHJcblx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9XCJwYXJzZUludCgoaXRlbS51c2VfZW5kX3RpbWUgLSB0aW1lX25vdykgLyA2MCAvIDYwICUgMjQgKT4wXCI+IFxyXG5cdFx0XHRcdFx0XHR7eyBwYXJzZUludCgoaXRlbS51c2VfZW5kX3RpbWUgLSB0aW1lX25vdykgLyA2MCAvIDYwICUgMjQgKSB9feWwj+aXtuWGhei/h+acn1xyXG5cdFx0XHRcdFx0PC90ZXh0Plx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZXh0IHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0MeWwj+aXtuWGhei/h+acn1xyXG5cdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4cGlyYXRpb24tdGltZVwiIHYtZWxzZSBAdGFwPSdkZWxldGVDYXJkKGl0ZW0uaWQpJz4g5Yig6ZmkIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOS4u+S9k+WGheWuuSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaXRlbXMtY29udGVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLXdyaXRlci1zdGF0ZS11c2VyVGltZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtd3JpdGVyXCIgPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIiBcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MCAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWlmPVwiaXRlbS5jYXJkX3R5cGU9PTF8fGl0ZW0uY2FyZF90eXBlID09IDJcIj5cclxuXHRcdFx0XHRcdFx0XHTmu6Hlh4/liLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uY19zdGF0dXM9PTAgJiYgaXRlbS5zdGF0ZSAhPSAzICYmIGl0ZW0uc3RhdGUhPTQgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNfY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY19jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNfY2FyZF90eXBlPT0xfHxpdGVtLmNfY2FyZF90eXBlPT0yXCI+XHJcblx0XHRcdFx0XHRcdFx05ruh5YeP5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MCAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZT09M3x8aXRlbS5jYXJkX3R5cGU9PTRcIj5cclxuXHRcdFx0XHRcdFx0XHTmipjmiaPliLhcclxuXHRcdFx0XHRcdFx0IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCIgXHJcblx0XHRcdFx0XHRcdCAgIDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmNfc3RhdHVzPT0wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jX2NhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNfY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgIHYtZWxzZS1pZj1cIml0ZW0uY19jYXJkX3R5cGU9PTN8fGl0ZW0uY19jYXJkX3R5cGU9PTRcIj5cclxuXHRcdFx0XHRcdFx0IFx05oqY5omj5Yi4XHJcblx0XHRcdFx0XHRcdCAgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0wICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGUgPT0gNSBcIj5cclxuXHRcdFx0XHRcdFx0XHTnpLzlk4HliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uY19zdGF0dXM9PTAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywke2l0ZW0uY19jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jX2NhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiBcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY19jYXJkX3R5cGU9PTVcIj5cclxuXHRcdFx0XHRcdFx0XHTnpLzlk4HliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0wICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgJiYgaXRlbS5zdG9yZS1pdGVtLnRha2Vfc3RvcmUgPjAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIlxyXG5cdFx0XHRcdFx0XHQgIHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlID09IDZcIj5cclxuXHRcdFx0XHRcdFx0XHTkvZPpqozliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uY19zdGF0dXM9PTAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiB2LWVsc2UtaWY9XCJpdGVtLmNfY2FyZF90eXBlID09IDZcIj5cclxuXHRcdFx0XHRcdFx0XHTkvZPpqozliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWNoeWIuOS7i+e7jSAtLT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtd3JpdGVyXCI+IFxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5zaG93X25hbWUgfHwgaXRlbS5jX3Nob3dfbmFtZX19IFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0LWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOW9k+WJjeeKtuaAgSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtc3RhdGVcIiB2LWlmPVwiaXRlbS5zdGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdOW9k+WJjeeKtuaAgTpcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFsbC1zdGF0ZVwiIDpzdHlsZT1cIlt7J2NvbG9yJzppdGVtLnN0YXRlPT0xPycjZmEzNDc1JzooaXRlbS5zdGF0ZT09Mj8nIzAwNzNjNCc6JyM5OTk5OTknKX1dXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPSdpdGVtLnN0YXRlPT0xJz7lj6/kvb/nlKg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9J2l0ZW0uc3RhdGU9PTInPuWGu+e7k+S4rTwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9J2l0ZW0uc3RhdGU9PTQnPuW3suS9v+eUqDwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2U+5bey5aSx5pWIPC90ZXh0PiBcclxuXHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Y+v6aKG5Y+W5Yi45pWwIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhbi1yZWNlaXZlXCJcclxuXHRcdFx0XHRcdFx0IHYtaWY9XCJpdGVtLmdldF9saW1pdC1pdGVtLnNhbGVjYXJkX3VzZXJfY291bnQ+LTEmJml0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlPjAmJml0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgXCI+IFxyXG5cdFx0XHRcdFx0XHRcdOWPr+mihuWPlnt7aXRlbS5nZXRfbGltaXQtaXRlbS5zYWxlY2FyZF91c2VyX2NvdW50fX3lvKAgXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PCEtLSDpooblj5blgJLorqHml7YgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVjZWl2ZS10aW1lXCIgdi1pZj1cIml0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93ID4gMFwiPlxyXG5cdFx0XHRcdFx0XHRcdOi3nee7k+adn+i/mOWJqVxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdyApIC8gNjAgLyA2MCAlIDI0KSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtbGluZVwiPjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdykgLyA2MCAlIDYwKSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtbGluZVwiPjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdykgJSA2MCkgfX08L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZXNcIj57eyBpdGVtLmRheSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtbGluZVwiPjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IGl0ZW0uaG91c2UgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lLWxpbmVcIj46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZXNcIj57eyBpdGVtLnNlY29uZCB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtbGluZVwiPjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IGl0ZW0ubWludXRlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5L2/55So5pe26Ze0IC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItdGltZVwiIHYtZWxzZS1pZj1cIiFpdGVtLmdldF9lbmRfdGltZSYmaXRlbS5jX3VzZV9lbmRfdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdOS9v+eUqOaXtumXtDpcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXRlbS5jX3VzZV9zdGFydF90aW1lfX0g6IezIHt7aXRlbS5jX3VzZV9lbmRfdGltZX19XHJcblx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVjZWl2ZS10aW1lc1wiIHYtZWxzZT4g5bey57uT5p2fIHt7aXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3cgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDkuK3pl7TlnIYgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGxfY2lyY3VsYXJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2lyY3VsYXJcIiB2LWZvcj1cIihpLGspIGluIGNpcmN1bGFyX2xpc3RcIiA6a2V5PVwia1wiPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaW1hZ2VzLWV4Y2x1c2l2ZU5hbWVcIiB2LWlmPVwiIWl0ZW0uc3RhdHVzXCJcclxuXHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0wICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtbmFtZVwiICA+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm5vdGVfaW1nXCIgc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF9sYWJlbF9iZy5wbmcgXCIgPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGhpc19ub3RlXCI+e3tpdGVtLm5vdGV9fTwvdGV4dD4gXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWlmPVwiaXRlbS5jb25kaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtcHJpY2VcIiAgdi1pZj1cIml0ZW0uY2FyZF90eXBlICE9IDYmJml0ZW0uY2FyZF90eXBlICE9IDVcIiBcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzppdGVtLm5vdGUgPyAnMTBycHgnOicxNnJweCd9XVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0Pu+/pTwvdGV4dD4gIHt7aXRlbS5taW5fYWZmZWN0fX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0ubWluX2FmZmVjdH19XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZWV0LXByaWNlLXVzZXJcIiB2LWlmPVwiaXRlbS5jYXJkX3R5cGUgIT0gNiYmaXRlbS5jYXJkX3R5cGUgIT0gNVwiID5cclxuXHRcdFx0XHRcdFx0XHTmu6F7e2l0ZW0uY29uZGl0aW9ufX3lj6/nlKhcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiIHYtZWxzZSBzdHlsZT1cIm1hcmdpbi10b3A6MTBycHggO1wiPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5jb25kaXRpb259fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLXByaWNlXCIgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOml0ZW0ubm90ZSA/ICcxMHJweCc6JzE2cnB4J31dXCI+XHJcblx0XHRcdFx0XHRcdFx05paH5qGI5LiAXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZWV0LXByaWNlLXVzZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTmlofmoYjkuoxcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJJbW1lZGlhdGVseS1yZWNlaXZlIHVzZWluZy10aWNrZXRcIlxyXG5cdFx0XHRcdFx0IHYtaWY9XCJpdGVtLmdldF9saW1pdD5pdGVtLnNhbGVjYXJkX3VzZXJfY291bnRcIlxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLmdldF9saW1pdD5pdGVtLnNhbGVjYXJkX3VzZXJfY291bnQgJiYgaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3c+MCAmJiBpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZSA+MCA/IGl0ZW0uY2FyZF9zdHlsZTogJyM5OTk5OTknfVwiXHJcblx0XHRcdFx0XHQgQHRhcD0nZ2V0Q2FyZChpdGVtLmlkLGl0ZW0uc3RvcmUsaXRlbS5zYWxlY2FyZF91c2VyX2NvdW50LGl0ZW0uZ2V0X2xpbWl0LGspJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z6aKG5Y+WXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlaW5nLXRpY2tldFwiIHYtZWxzZS1pZj1cIml0ZW0udXNlX2NoYW5uZWwgPT0gMSBcIlxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLmNhcmRfc3R5bGUgfVwiXHJcblx0XHRcdFx0XHQgQHRhcD0nc2Nhbl9jYXJkKGl0ZW0uaWQpJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z5qC46ZSAXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlaW5nLXRpY2tldFwiIHYtZWxzZVxyXG5cdFx0XHRcdFx0ICA6c3R5bGU9XCJ7J2NvbG9yJzogaXRlbS5jYXJkX3N0eWxlIH1cIlxyXG5cdFx0XHRcdFx0ICBAdGFwPSd1c2VyQ2FyZChpdGVtLmlkKSc+XHJcblx0XHRcdFx0XHRcdOeri+WNs+S9v+eUqFxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5oiR55qE5Y2h5Yi4IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWltYWdlcy1leGNsdXNpdmVOYW1lXCIgdi1lbHNlXHJcblx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cyE9MiAmJiBpdGVtLnVzZV9lbmRfdGltZS10aW1lX25vdz4wICA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAgJHtpdGVtLmNfY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY19jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1uYW1lXCIgPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJub3RlX2ltZ1wiIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfbGFiZWxfYmcucG5nIFwiID48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRoaXNfbm90ZVwiPnt7aXRlbS5jX25vdGV9fTwvdGV4dD4gXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWlmPVwiaXRlbS5jX2NvbmRpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1pZj1cIml0ZW0uY19jYXJkX3R5cGUhPTYmJml0ZW0uY19jYXJkX3R5cGUgIT0gNVwiIFxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOml0ZW0uY19ub3RlID8gJzEwcnB4JzonMTZycHgnfV1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7vv6U8L3RleHQ+IHt7aXRlbS5jX21pbl9hZmZlY3R9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLXByaWNlXCIgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5jX21pbl9hZmZlY3R9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVldC1wcmljZS11c2VyXCIgdi1pZj1cIml0ZW0uY19jYXJkX3R5cGUhPTYmJml0ZW0uY19jYXJkX3R5cGUgIT0gNVwiPlxyXG5cdFx0XHRcdFx0XHRcdOa7oXt7aXRlbS5jX2NvbmRpdGlvbn195Y+v55SoXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZWV0LXByaWNlLXVzZXJcIiB2LWVsc2Ugc3R5bGU9XCJtYXJnaW4tdG9wOjEwcnB4IDtcIj5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uY19jb25kaXRpb259fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLXByaWNlXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzppdGVtLmNfbm90ZSA/ICcxMHJweCc6JzE2cnB4J31dXCI+XHJcblx0XHRcdFx0XHRcdFx05paH5qGI5LiAXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZWV0LXByaWNlLXVzZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTmlofmoYjkuoxcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZWluZy10aWNrZXRcIlxyXG5cdFx0XHRcdFx0IHYtaWY9XCJpdGVtLmNfdXNlX2NoYW5uZWwgIT0gMVwiXHJcblx0XHRcdFx0XHQgOnN0eWxlPVwieydjb2xvcic6IGl0ZW0uY19zdGF0dXMhPTIgJiYgaXRlbS51c2VfZW5kX3RpbWUtdGltZV9ub3c+MCA/ICBpdGVtLmNfY2FyZF9zdHlsZTogJyM5OTk5OTknfVwiXHJcblx0XHRcdFx0XHQgQHRhcD0ndXNlckNhcmQoaXRlbS5jX2lkLGl0ZW0uY19zdGF0dXMpJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z5L2/55SoXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlaW5nLXRpY2tldFwiIHYtZWxzZS1pZj1cIml0ZW0uY191c2VfY2hhbm5lbCA9PSAxIFwiXHJcblx0XHRcdFx0XHQgOnN0eWxlPVwieydjb2xvcic6IGl0ZW0uY19zdGF0dXMhPTIgJiYgaXRlbS51c2VfZW5kX3RpbWUtdGltZV9ub3c+MCAgPyAgaXRlbS5jX2NhcmRfc3R5bGU6ICcjOTk5OTk5J31cIlxyXG5cdFx0XHRcdFx0IEB0YXA9J3NjYW5fY2FyZChpdGVtLmNfaWQpJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z5qC46ZSAXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXREZXRhaWxzXCIgQHRhcD0nc2hvd1RpY2tldChpdGVtLmlkKSc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxzLXRpdGxlXCI+IDx0ZXh0PuWNoeWIuOivpuaDhTwvdGV4dD5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hcnJvd0ltYWdlc1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbHMtY29udGVudFwiIHYtaWY9XCJpdGVtLnNob3dUaWNrZXREZXRhaWxzXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tZGV0YWlsc1wiPnt7aXRlbS5jX2ludHJvfHxpdGVtLmludHJvfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5bey5oqi5YWJIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC1pbWFnZXNcIiB2LWlmPVwiaXRlbS5zdG9yZS1pdGVtLnRha2Vfc3RvcmU9PTBcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF9uby5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOW3sue7k+adnyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtaW1hZ2VzXCIgdi1lbHNlLWlmPVwiaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3cgPCAwXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfZW5kLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5LiK6ZmQIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC1pbWFnZXNcIiB2LWVsc2UtaWY9XCJpdGVtLmdldF9saW1pdC1pdGVtLnNhbGVjYXJkX3VzZXJfY291bnQ9PTBcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF90b3AucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3Plx0XHRcdFxyXG5cdFx0XHQ8IS0tIOW3suWkseaViCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtaW1hZ2VzIGludmFsaWRcIlxyXG5cdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS51c2VfZW5kX3RpbWUtdGltZV9ub3c8MCAmJiBpdGVtLnVzZV9lbmRfdGltZSE9MCBcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF9pbnZhbGlkLnBuZ1wiID48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5bey5L2/55SoIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC1pbWFnZXMgaW52YWxpZFwiIHYtZWxzZS1pZj1cIml0ZW0uc3RhdHVzPT0zXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfdXNlZC5wbmdcIiA+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOW3suaguOmUgCAgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLWltYWdlcyBpbnZhbGlkXCIgdi1lbHNlLWlmPVwiaXRlbS5zY2FuPT0xXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfb2ZmLnBuZyBcIiA+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0IDwhLS0g5Y+z6L6555qE6aG26YOo6IOM5pmvaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF9sYWJlbF9iZy5wbmcgLS0+XHJcblx0XHQ8IS0tIOWVhuWTgeeahOWNoeWIuCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWl0ZW1zXCIgdi1mb3I9XCIoaXRlbSxrKSBpbiBnb29kc0NhcmRzTGlzdFwiIDprZXk9J2snID5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaXRlbXMtY29udGVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLXdyaXRlci1zdGF0ZS11c2VyVGltZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtd3JpdGVyXCIgPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIiBcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MSAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWlmPVwiaXRlbS5jYXJkX3R5cGU9PTF8fGl0ZW0uY2FyZF90eXBlID09IDJcIj5cclxuXHRcdFx0XHRcdFx0XHTmu6Hlh4/liLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0xICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgJiYgaXRlbS5zdG9yZS1pdGVtLnRha2Vfc3RvcmUgPjAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiBcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlPT0zfHxpdGVtLmNhcmRfdHlwZT09NFwiPlxyXG5cdFx0XHRcdFx0XHRcdOaKmOaJo+WIuFxyXG5cdFx0XHRcdFx0XHQgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0xICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGUgPT0gNSBcIj5cclxuXHRcdFx0XHRcdFx0XHTnpLzlk4HliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0xICYmIGl0ZW0ucmVzdF90aW1lID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCJcclxuXHRcdFx0XHRcdFx0ICB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZSA9PSA2XCI+XHJcblx0XHRcdFx0XHRcdFx05L2T6aqM5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PCEtLSDljaHliLjku4vnu40gLS0+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LXdyaXRlclwiPiBcclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uc2hvd19uYW1lIH19IFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0LWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWPr+mihuWPluWIuOaVsCAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYW4tcmVjZWl2ZVwiXHJcblx0XHRcdFx0XHRcdCB2LWlmPVwiaXRlbS5zdGF0dXM+MCYmaXRlbS5yZXN0X3RpbWU+MCBcIj4gXHJcblx0XHRcdFx0XHRcdFx05Y+v6aKG5Y+We3tpdGVtLmdldF9saW1pdH195bygIFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwhLS0g6aKG5Y+W5YCS6K6h5pe2IC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY2VpdmUtdGltZVwiIHYtaWY9XCJpdGVtLnJlc3RfdGltZSA+IDBcIj5cclxuXHRcdFx0XHRcdFx0XHTot53nu5PmnZ/ov5jlialcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVzXCI+e3sgcGFyc2VJbnQoKGl0ZW0ucmVzdF90aW1lICkgLyA2MCAvIDYwICUgMjQpIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZS1saW5lXCI+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVzXCI+e3sgcGFyc2VJbnQoKGl0ZW0ucmVzdF90aW1lKSAvIDYwICUgNjApIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZS1saW5lXCI+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVzXCI+e3sgcGFyc2VJbnQoKGl0ZW0ucmVzdF90aW1lKSAlIDYwKSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY2VpdmUtdGltZXNcIiB2LWVsc2U+IOW3sue7k+adnyB7eyBpdGVtLnJlc3RfdGltZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1pbWFnZXMtZXhjbHVzaXZlTmFtZVwiXHJcblx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnJlc3RfdGltZSA+MCAmJiBpdGVtLnN0YXR1cz4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtbmFtZVwiID5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibm90ZV9pbWdcIiBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC9jYXJkX2xhYmVsX2JnLnBuZyBcIiA+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aGlzX25vdGVcIj57e2l0ZW0ubm90ZX19PC90ZXh0PiBcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLWV4Y2x1c2l2ZS1wcmljZVwiIHYtaWY9XCJpdGVtLmNvbmRpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIHYtaWY9XCJpdGVtLmNhcmRfdHlwZSAhPSA2XCIgXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6aXRlbS5ub3RlID8gJzEwcnB4JzonMTZycHgnfV1cIj4gPHRleHQ+77+lPC90ZXh0PiB7e2l0ZW0ubWluX2FmZmVjdH19XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtcHJpY2VcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLm1pbl9hZmZlY3R9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVldC1wcmljZS11c2VyXCI+XHJcblx0XHRcdFx0XHRcdFx05ruhe3tpdGVtLmNvbmRpdGlvbn195Y+v55SoXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIkltbWVkaWF0ZWx5LXJlY2VpdmUgdXNlaW5nLXRpY2tldFwiIHYtaWY9XCJpdGVtLnN0YXR1cz4wXCJcclxuXHRcdFx0XHRcdCA6c3R5bGU9XCJ7J2NvbG9yJzogaXRlbS5yZXN0X3RpbWUgPjAgPyBpdGVtLmNhcmRfc3R5bGU6ICcjOTk5OTk5J31cIlxyXG5cdFx0XHRcdFx0IEB0YXA9J2dldENhcmRzKGl0ZW0uY2FyZF9pZCxrLGl0ZW0uc3RhdHVzLGl0ZW0uZ2V0X2xpbWl0KSc+XHJcblx0XHRcdFx0XHRcdOeri+WNs+mihuWPllxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIkltbWVkaWF0ZWx5LXJlY2VpdmUgdXNlaW5nLXRpY2tldFwiIHYtZWxzZVxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLnJlc3RfdGltZSA+MCA/IGl0ZW0uY2FyZF9zdHlsZTogJyM5OTk5OTknfVwiXHJcblx0XHRcdFx0XHQgQHRhcD0nZ2V0Q2FyZChpdGVtLmNhcmRfaWQsayknPlxyXG5cdFx0XHRcdFx0XHTnq4vljbPkvb/nlKhcclxuXHRcdFx0XHRcdDwvdmlldz5cdFxyXG5cdFx0XHRcdDwvdmlldz5cdFx0XHRcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldERldGFpbHNcIiBAdGFwPSdzaG93VGlja2V0KGl0ZW0uY2FyZF9pZCknPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlscy10aXRsZVwiPiA8dGV4dD7ljaHliLjor6bmg4U8L3RleHQ+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXJyb3dJbWFnZXNcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxzLWNvbnRlbnRcIiB2LWlmPVwiaXRlbS5zaG93VGlja2V0RGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWRldGFpbHNcIj57eyBpdGVtLmludHJvIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFxyXG5cdFx0PCEtLSDnoa7orqTorqLljZXljaHliLggLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm9yZGVyLWNvbnRlbnRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcmRlcl9jYXJkXCIgOmtleT0naW5kZXgnPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJjYW5fdXNlX2NhcmRfbGlzdFwiIEB0YXA9XCJjaGVja2JveENoYW5nZShpbmRleCxpdGVtLmlkLGNhbl91c2UscGxhdGZvcm0pXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0LWNhcmRfY29udGVudFwiXHJcblx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmlzX3VzZSA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZF9ub3RlXCI+IHt7IGl0ZW0ubm90ZSB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmRfY29uZGl0aW9uXCIgdi1pZj1cIml0ZW0uY2FyZF90eXBlICE9IDYmJml0ZW0uY2FyZF90eXBlICE9IDVcIiA+IDx0ZXh0Pu+/pTwvdGV4dD4ge3sgaXRlbS5jb25kaXRpb24gfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX2NvbmRpdGlvblwiIHYtZWxzZSA+IHt7IGl0ZW0uY29uZGl0aW9uIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZF9taW5fYWZmZWN0XCIgdi1pZj1cIml0ZW0uY2FyZF90eXBlICE9IDYmJml0ZW0uY2FyZF90eXBlICE9IDVcIj4g5ruhe3sgaXRlbS5taW5fYWZmZWN0IH195Y+v55SoIDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZF9taW5fYWZmZWN0XCIgdi1lbHNlPiB7eyBpdGVtLm1pbl9hZmZlY3QgfX0gPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0X2NhcmRfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtd3JpdGVyXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LWxhYmVsc1wiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5pc191c2UgPyAgYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCJcclxuXHRcdFx0XHRcdFx0IHYtaWY9XCJpdGVtLmNhcmRfdHlwZT09MXx8aXRlbS5jYXJkX3R5cGUgPT0gMlwiPlxyXG5cdFx0XHRcdFx0XHRcdOa7oeWHj+WIuFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LWxhYmVsc1wiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5pc191c2UgPyAgYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCJcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlPT0zfHxpdGVtLmNhcmRfdHlwZT09NFwiPlxyXG5cdFx0XHRcdFx0XHRcdOaKmOaJo+WIuFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LWxhYmVsc1wiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5pc191c2UgPyAgYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCJcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlID09IDUgXCI+XHJcblx0XHRcdFx0XHRcdFx056S85ZOB5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmlzX3VzZSA/ICBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIlxyXG5cdFx0XHRcdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGUgPT0gNlwiPlxyXG5cdFx0XHRcdFx0XHRcdOS9k+mqjOWIuFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Y2h5Yi45LuL57uNIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC13cml0ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHR7eyBpdGVtLnNob3dfbmFtZSB9fVxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOW9k+WJjeeKtuaAgSAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LXN0YXRlXCIgOnN0eWxlPVwiW3snY29sb3InOml0ZW0udXNlX2VuZF90aW1lLWl0ZW0udXNlX3N0YXJ0X3RpbWU+MCAmJiBpdGVtLmlzX3VzZSA/JyNmYTM0NzUnOicjOTk5OTk5J31dXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYWxsLXN0YXRlXCIgPlxyXG5cdFx0XHRcdFx0XHRcdOW9k+WJjeeKtuaAgTpcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPSdpdGVtLnVzZV9lbmRfdGltZS1pdGVtLnVzZV9zdGFydF90aW1lPjAnPuWPr+S9v+eUqDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2U+5bey5aSx5pWIPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItdGltZVwiIHYtaWY9XCJpdGVtLnVzZV9lbmRfdGltZS1pdGVtLnVzZV9zdGFydF90aW1lPjBcIj5cclxuXHRcdFx0XHRcdFx05L2/55So5pe26Ze0OlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uY191c2Vfc3RhcnRfdGltZX19IOiHsyB7e2l0ZW0uY191c2VfZW5kX3RpbWV9fVxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY2VpdmUtdGltZXNcIiB2LWVsc2U+IOW3sue7k+adnyA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhbmdlX2NoZWNrYm94XCI+XHJcblx0XHRcdFx0XHQ8Y2hlY2tib3ggY29sb3I9XCIjZmY2Njk5XCIgIDpjaGVja2VkPVwiaXRlbS5jaGVja2VkXCIgOmRpc2FibGVkPSdjYW5fdXNlPT0xJyAgLz5cclxuXHRcdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJjaGVja19ib3hcIiB2LXNob3c9XCJwbGF0Zm9ybSE9J2FwcGxldCcmJiFpdGVtLmNoZWNrZWRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aWNvbiB0eXBlPVwic3VjY2Vzc1wiIGNvbG9yPVwiI2ZmNjY5OVwiIHYtc2hvdz1cInBsYXRmb3JtIT0nYXBwbGV0JyYmaXRlbS5jaGVja2VkXCIgc2l6ZT1cIjI2XCIvPiAtLT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvbGFiZWw+XHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0RGV0YWlsc1wiICBAdGFwPVwic2hvd19vcmRlcl90aWNrZXQoaW5kZXgsY2FuX3VzZSxwbGF0Zm9ybSlcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbHMtdGl0bGVcIj4gPHRleHQ+5Y2h5Yi46K+m5oOFPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmFycm93SW1hZ2VzXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlscy1jb250ZW50XCIgdi1zaG93PVwiaXRlbS5zaG93VGlja2V0RGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWRldGFpbHNcIj57eyBpdGVtLmludHJvIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Z29vZHNDYXJkc0xpc3Q6IEFycmF5LFxyXG5cdFx0XHRvcmRlcl9jYXJkOkFycmF5LFxyXG5cdFx0XHRjYXJkc0xpc3Q6IEFycmF5LFxyXG5cdFx0XHRtYXJnaW5Ub3A6IE51bWJlcixcclxuXHRcdFx0dGltZV9ub3c6TnVtYmVyLFxyXG5cdFx0XHRjYW5fdXNlOk51bWJlcixcclxuXHRcdFx0Y2FyZF9jaGVja2VkOkJvb2xlYW4sXHJcblx0XHRcdHBsYXRmb3JtOlN0cmluZ1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2hvdzpmYWxzZSxcclxuXHRcdFx0XHRjaXJjdWxhcl9saXN0OlsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDmmL7npLrljaHliLjor6bmg4VcclxuXHRcdFx0c2hvd0RldGFpbHM6IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3Nob3dEZXRhaWxzJywgbnVtYmVyKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93VGlja2V0OmZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdzaG93VGlja2V0JywgaWQpXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaWQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dfb3JkZXJfdGlja2V0OmZ1bmN0aW9uKGluZGV4LGNhbl91c2Upe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQub3JkZXJfY2FyZFtpbmRleF0uc2hvd1RpY2tldERldGFpbHMgPSAhdGhhdC5vcmRlcl9jYXJkW2luZGV4XS5zaG93VGlja2V0RGV0YWlsc1xyXG5cdFx0XHRcdGlmICh0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLnNob3dUaWNrZXREZXRhaWxzKSB7XHJcblx0XHRcdFx0XHR0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQub3JkZXJfY2FyZFtpbmRleF0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3Nob3dUaWNrZXQnLHRoYXQub3JkZXJfY2FyZCxjYW5fdXNlKVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQub3JkZXJfY2FyZFtpbmRleF0uc2hvd1RpY2tldERldGFpbHMsdGhhdC5vcmRlcl9jYXJkW2luZGV4KzFdLnNob3dUaWNrZXREZXRhaWxzKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGVja2JveENoYW5nZTpmdW5jdGlvbihpbmRleCxpZCxjYW5fdXNlLHBsYXRmb3JtKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwbGF0Zm9ybSlcclxuXHRcdFx0XHRpZihwbGF0Zm9ybT09J2FwcGxldCcpe1xyXG5cdFx0XHRcdFx0aWYoY2FuX3VzZT09MCl7XHJcblx0XHRcdFx0XHRcdHRoYXQub3JkZXJfY2FyZFtpbmRleF0uY2hlY2tlZCA9ICF0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWRcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5vcmRlcl9jYXJkW2luZGV4XS5jaGVja2VkLHRoYXQub3JkZXJfY2FyZFtpbmRleCsxXS5jaGVja2VkKVxyXG5cdFx0XHRcdFx0XHRpZih0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoZWNrYm94Q2hhbmdlJyx0aGF0Lm9yZGVyX2NhcmQsaWQsaW5kZXgsMSlcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hlY2tib3hDaGFuZ2UnLHRoYXQub3JkZXJfY2FyZCxpZCxpbmRleCwwKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLljaHliLjkuI3lj6/kvb/nlKhcIixcclxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0aWYoY2FuX3VzZT09MCl7XHJcblx0XHRcdFx0XHRcdC8vIOebruWJjUFwcOerr+mAieaLqeWNoeWIuOWHuueOsOacquWIpOWumueahOeOsOixoe+8jOmAieaLqWluZGV455qE5YC877yM5Lya6YCg5oiQ5LiL5LiA5Liq55u45ZCMaWTnmoTlgLzkuqfnlJ/pgJrljJbvvIzkuZ/lsLHmmK/mlLnlj5jkuIDkuKrnmoTlgLzvvIzlj6bkuIDkuKrnm7jlkIxpZOeahOWAvOS5n+maj+S5i+aUueWPmO+8jOiAjOS4lOWBmuW+l+WIpOWumuS4jeeUn+aViFxyXG5cdFx0XHRcdFx0XHQvLyB0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQgPSAhdGhhdC5vcmRlcl9jYXJkW2luZGV4XS5jaGVja2VkXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQub3JkZXJfY2FyZFtpbmRleF0uY2hlY2tlZCx0aGF0Lm9yZGVyX2NhcmRbaW5kZXgrMV0uY2hlY2tlZClcclxuXHRcdFx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhhdC5vcmRlcl9jYXJkKXtcclxuXHRcdFx0XHRcdFx0XHRpZihrZXk9PWluZGV4JiZpZD09dGhhdC5vcmRlcl9jYXJkW2tleV0uaWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5vcmRlcl9jYXJkW2tleV0uY2hlY2tlZCA9ICF0aGF0Lm9yZGVyX2NhcmRba2V5XS5jaGVja2VkXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhpbmRleCxrZXkpXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQsdGhhdC5vcmRlcl9jYXJkW2luZGV4KzFdLmNoZWNrZWQpXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBsZXQgb2JqID0gdGhhdC5vcmRlcl9jYXJkW2tleV1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMuJHNldCh0aGF0Lm9yZGVyX2NhcmQsaW5kZXgsb2JqKVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYodGhhdC5vcmRlcl9jYXJkW2luZGV4XS5jaGVja2VkKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hlY2tib3hDaGFuZ2UnLHRoYXQub3JkZXJfY2FyZCxpZCxpbmRleCwxKVxyXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoZWNrYm94Q2hhbmdlJyx0aGF0Lm9yZGVyX2NhcmQsaWQsaW5kZXgsMClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5Y2h5Yi45LiN5Y+v5L2/55SoXCIsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmihuWPluWNoeWIuFxyXG5cdFx0XHRnZXRDYXJkOmZ1bmN0aW9uKGlkLHN0b3JlLHNhbGVjYXJkX3VzZXJfY291bnQsZ2V0X2xpbWl0LGluZGV4KXtcclxuXHRcdFx0XHRsZXQgcHJvbXB0ID0gJydcclxuXHRcdFx0XHRpZihnZXRfbGltaXQ+c2FsZWNhcmRfdXNlcl9jb3VudCYmc3RvcmU+MCl7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdnZXRDYXJkcycsaWQscHJvbXB0LGluZGV4KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0cHJvbXB0ID0gJ+aXoOazlemihuWPluivpeWNoeWIuCdcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2dldENhcmRzJyxpZCxwcm9tcHQsaW5kZXgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDYXJkczpmdW5jdGlvbihpZCxpbmRleCxzdGF0dXMsZ2V0X2xpbWl0KXtcclxuXHRcdFx0XHRsZXQgcHJvbXB0ID0gJydcclxuXHRcdFx0XHRpZihnZXRfbGltaXQ+MCYmc3RhdHVzPjApe1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnZ2V0Q2FyZHMnLGlkLHByb21wdCxpbmRleClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHByb21wdCA9ICfml6Dms5Xpooblj5bor6XljaHliLgnXHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdnZXRDYXJkcycsaWQscHJvbXB0LGluZGV4KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOS9v+eUqOWNoeWIuFxyXG5cdFx0XHR1c2VyQ2FyZDpmdW5jdGlvbihpZCxzdGF0ZSl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coc3RhdGUpXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndXNlQ2FyZCcsIGlkLHN0YXRlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmoLjplIDljaHliLhcclxuXHRcdFx0c2Nhbl9jYXJkOmZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdzY2FuX2NhcmQnLCBpZClcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Yig6Zmk5Y2h5Yi4XHJcblx0XHRcdGRlbGV0ZUNhcmQ6ZnVuY3Rpb24oaWQpe1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2RlbGV0ZUNhcmQnLGlkKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0c2hvd19vcmRlcl9hcHBsZXQ6ZnVuY3Rpb24oaW5kZXgsaWQsKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdFxyXG5cdC50aWNrZXQtaXRlbXMge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHRcclxuXHQudGlja2V0LWl0ZW1zOmxhc3QtY2hpbGR7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMzJycHg7XHJcblx0fVxyXG5cdFxyXG5cdC50aWNrZXQtbnVtZXIge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW51bWJlci1leHBpcmF0aW9uLXRpbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW51bWJlciB7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5leHBpcmF0aW9uLXRpbWUge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWl0ZW1zLWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBkYXNoZWQgIzk5OTk5OTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LnRpY2tldC1pdGVtcy1jb250ZW50LWFwcGxldHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1ib3R0b206IDFycHggZGFzaGVkICM5OTk5OTk7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1sYWJlbC13cml0ZXItc3RhdGUtdXNlclRpbWUge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDMycnB4IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWxhYmVsLXdyaXRlciB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1sYWJlbHMge1xyXG5cdFx0cGFkZGluZzogMCA5cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICM4ODM0ZmEgMCUsICNhMjVlZmYgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC13cml0ZXIge1xyXG5cdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1zdGF0ZSB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQudXNlcl9oYXZle1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblx0LmNhbi1yZWNlaXZlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5yZWNlaXZlLXRpbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tdG9wOiAxNnJweDtcclxuXHR9XHJcblxyXG5cdC5yZWNlaXZlLXRpbWVzIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0LyogbWFyZ2luLXRvcDogODBycHg7ICovXHJcblx0fVxyXG5cclxuXHQucmVjZWl2ZS10aW1lIC50aW1lcyB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bWluLXdpZHRoOiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQucmVjZWl2ZS10aW1lIC50aW1lLWxpbmUge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LXN0YXRlIHRleHQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItdGltZSB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tdG9wOiAxNHJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtaW1hZ2VzLWV4Y2x1c2l2ZU5hbWUge1xyXG5cdFx0d2lkdGg6IDI0OHJweDtcclxuXHRcdG1pbi1oZWlnaHQ6IDI0MHJweDtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmV4Y2x1c2l2ZS1uYW1lIHtcclxuXHRcdHdpZHRoOiAxMjhycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQubm90ZV9pbWd7XHJcblx0XHR3aWR0aDogMTI4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTZycHg7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cdC50aGlzX25vdGV7XHJcblx0XHR3aWR0aDogMTI4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzZycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0XHR0b3A6IC04cnB4O1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cdFxyXG5cclxuXHQuZXhjbHVzaXZlLXByaWNlIHtcclxuXHRcdGZvbnQtc2l6ZTogNDhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHQvKiBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxOyAqL1xyXG5cdH1cclxuXHJcblx0LmV4Y2x1c2l2ZS1wcmljZSB0ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQubWVldC1wcmljZS11c2VyIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHQvKiBtYXJnaW4tdG9wOiAxMHJweDsgKi9cclxuXHRcdGxpbmUtaGVpZ2h0OiAzOHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VpbmctdGlja2V0IHtcclxuXHRcdHdpZHRoOiAxNjBycHg7XHJcblx0XHQvKiBoZWlnaHQ6IDQwcnB4OyAqL1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBycHggM3JweCA2cnB4IDBycHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdH1cclxuXHJcblx0LnRpY2tldERldGFpbHMge1xyXG5cdFx0cGFkZGluZzogMThycHggMjZycHggMThycHggMzBycHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnJweDtcclxuXHRcdGJveC1zaGFkb3c6IDBycHggMHJweCAzMnJweCAwcnB4IHJnYmEoMTAxLCAxMDEsIDEwMSwgMC4yNCk7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDU0cnB4O1xyXG5cdH1cclxuXHJcblx0LmRldGFpbHMtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmRldGFpbHMtdGl0bGUgaW1hZ2Uge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE1cnB4O1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5pdGVtLWRldGFpbHMge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtbGFiZWwtaW1hZ2VzIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNDBycHg7XHJcblx0XHRyaWdodDogMTcwcnB4O1xyXG5cdFx0ei1pbmRleDogNjtcclxuXHR9XHJcblx0LmludmFsaWR7XHJcblx0XHR0b3A6IDgwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1sYWJlbC1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDE5NXJweDtcclxuXHRcdGhlaWdodDogMTU1cnB4O1xyXG5cdH1cclxuXHRcclxuXHQvKiDnoa7orqTorqLljZUgKi9cclxuXHQub3JkZXItY29udGVudHtcclxuXHRcdFxyXG5cdH1cclxuXHQuY2FuX3VzZV9jYXJkX2xpc3Qge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBkYXNoZWQgIzk5OTk5OTtcclxuXHR9XHJcblx0LmxlZnQtY2FyZF9jb250ZW50IHtcclxuXHRcdHdpZHRoOiAyNDhycHg7XHJcblx0XHRoZWlnaHQ6IDI0MHJweDtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkX25vdGUge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtNXJweDtcclxuXHRcdGxlZnQ6IDYwcnB4O1xyXG5cdFx0d2lkdGg6IDEyOHJweDtcclxuXHRcdGhlaWdodDogMzZycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwNjA2O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMHJweCAwcnB4IDE2cnB4IDE2cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHRcclxuXHQuY2FyZF9jb25kaXRpb24ge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDU2cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkX2NvbmRpdGlvbiB0ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkX21pbl9hZmZlY3Qge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQucmlnaHRfY2FyZF9jb250ZW50IHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdC5jaGFuZ2VfY2hlY2tib3gge1xyXG5cdFx0d2lkdGg6IDY4cnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY2hlY2tfYm94e1xyXG5cdFx0d2lkdGg6IDQ0cnB4O1xyXG5cdFx0aGVpZ2h0OiA0NHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIycnB4O1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICNmZjY2OTk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHRcclxuXHQuYWxsX2NpcmN1bGFye1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdFx0d2lkdGg6IDEwcnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDI0NXJweDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LmNpcmN1bGFye1xyXG5cdFx0d2lkdGg6IDEwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hYjExZjNmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWIxMWYzZjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEwMDAzMDc1NTg5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ticket-create-component',
    {
        'components/ticket-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(524))
        })
    },
    [['components/ticket-create-component']]
]);
