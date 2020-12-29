(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/ticket"],{

/***/ 514:
/*!*************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& */ 515);
/* harmony import */ var _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.vue?vue&type=script&lang=js& */ 517);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& */ 519);
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

/***/ 515:
/*!********************************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& */ 516);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 516:
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
    var m4 =
      item.get_end_time - _vm.time_now > 0
        ? parseInt(((item.get_end_time - _vm.time_now) / 60 / 60) % 24)
        : null
    var m5 =
      item.get_end_time - _vm.time_now > 0
        ? parseInt(((item.get_end_time - _vm.time_now) / 60) % 60)
        : null
    var m6 =
      item.get_end_time - _vm.time_now > 0
        ? parseInt((item.get_end_time - _vm.time_now) % 60)
        : null
    return {
      $orig: $orig,
      m0: m0,
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6
    }
  })

  var l1 = _vm.__map(_vm.goodsCardsList, function(item, k) {
    var $orig = _vm.__get_orig(item)

    var m7 =
      item.rest_time > 0 ? parseInt((item.rest_time / 60 / 60) % 24) : null
    var m8 = item.rest_time > 0 ? parseInt((item.rest_time / 60) % 60) : null
    var m9 = item.rest_time > 0 ? parseInt(item.rest_time % 60) : null
    return {
      $orig: $orig,
      m7: m7,
      m8: m8,
      m9: m9
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

/***/ 517:
/*!**************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=script&lang=js& */ 518);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 518:
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

/***/ 519:
/*!**********************************************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& */ 520);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 520:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/components/ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9jb21wb25lbnRzL3RpY2tldC52dWU/OGMyNiIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9jb21wb25lbnRzL3RpY2tldC52dWU/MWNiNyIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9jb21wb25lbnRzL3RpY2tldC52dWU/ZTU2YSIsIndlYnBhY2s6Ly8vRDovQ29kZS9jb2RlL3VuaWFwcC9jb21wb25lbnRzL3RpY2tldC52dWU/Y2RhNSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy90aWNrZXQudnVlIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL2NvbXBvbmVudHMvdGlja2V0LnZ1ZT9mNzIwIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL2NvbXBvbmVudHMvdGlja2V0LnZ1ZT9hYjM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDtBQUNxQzs7O0FBRzFGO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFBQTtBQUFncEIsQ0FBZ0IsNnBCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxWXBxQjtBQUNBO0FBQ0EseUJBREE7QUFFQSxxQkFGQTtBQUdBLG9CQUhBO0FBSUEscUJBSkE7QUFLQSxvQkFMQTtBQU1BLG1CQU5BO0FBT0EseUJBUEE7QUFRQSxvQkFSQSxFQURBOztBQVdBLE1BWEEsa0JBV0E7QUFDQTtBQUNBLGlCQURBO0FBRUEscUVBRkE7O0FBSUEsR0FoQkE7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBLEtBUkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5CQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FSQTtBQVNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0EsT0FoQkEsTUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQW5CQTtBQW9CQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBOztBQUVBLEtBcEVBO0FBcUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9FQTtBQWdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBekZBOztBQTJGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0ZBO0FBZ0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwR0E7QUFxR0E7QUFDQTtBQUNBO0FBQ0EsS0F4R0E7O0FBMEdBO0FBQ0E7QUFDQSxLQTVHQSxFQWxCQSxFOzs7Ozs7Ozs7Ozs7O0FDcllBO0FBQUE7QUFBQTtBQUFBO0FBQTY4QixDQUFnQiw0N0JBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FqK0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJjb21wb25lbnRzL3RpY2tldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdGlja2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYjExZjNmMiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGlja2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFiMTFmM2YyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYWIxMWYzZjJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy90aWNrZXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFiMTFmM2YyJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDAgPSBfdm0uX19tYXAoX3ZtLmNhcmRzTGlzdCwgZnVuY3Rpb24oaXRlbSwgaykge1xuICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGl0ZW0pXG5cbiAgICB2YXIgbTAgPVxuICAgICAgaXRlbS5jYXJkX25vICYmIGl0ZW0udXNlX2VuZF90aW1lIC0gX3ZtLnRpbWVfbm93ID4gMFxuICAgICAgICA/IHBhcnNlSW50KCgoaXRlbS51c2VfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cpIC8gNjAgLyA2MCAvIDI0KSAlIDMwKVxuICAgICAgICA6IG51bGxcbiAgICB2YXIgbTEgPVxuICAgICAgaXRlbS5jYXJkX25vICYmIGl0ZW0udXNlX2VuZF90aW1lIC0gX3ZtLnRpbWVfbm93ID4gMCAmJiBtMCA+IDBcbiAgICAgICAgPyBwYXJzZUludCgoKGl0ZW0udXNlX2VuZF90aW1lIC0gX3ZtLnRpbWVfbm93KSAvIDYwIC8gNjAgLyAyNCkgJSAzMClcbiAgICAgICAgOiBudWxsXG4gICAgdmFyIG0yID1cbiAgICAgIGl0ZW0uY2FyZF9ubyAmJiBpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdyA+IDAgJiYgIShtMCA+IDApXG4gICAgICAgID8gcGFyc2VJbnQoKChpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCAvIDYwKSAlIDI0KVxuICAgICAgICA6IG51bGxcbiAgICB2YXIgbTMgPVxuICAgICAgaXRlbS5jYXJkX25vICYmXG4gICAgICBpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdyA+IDAgJiZcbiAgICAgICEobTAgPiAwKSAmJlxuICAgICAgbTIgPiAwXG4gICAgICAgID8gcGFyc2VJbnQoKChpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCAvIDYwKSAlIDI0KVxuICAgICAgICA6IG51bGxcbiAgICB2YXIgbTQgPVxuICAgICAgaXRlbS5nZXRfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cgPiAwXG4gICAgICAgID8gcGFyc2VJbnQoKChpdGVtLmdldF9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCAvIDYwKSAlIDI0KVxuICAgICAgICA6IG51bGxcbiAgICB2YXIgbTUgPVxuICAgICAgaXRlbS5nZXRfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cgPiAwXG4gICAgICAgID8gcGFyc2VJbnQoKChpdGVtLmdldF9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCkgJSA2MClcbiAgICAgICAgOiBudWxsXG4gICAgdmFyIG02ID1cbiAgICAgIGl0ZW0uZ2V0X2VuZF90aW1lIC0gX3ZtLnRpbWVfbm93ID4gMFxuICAgICAgICA/IHBhcnNlSW50KChpdGVtLmdldF9lbmRfdGltZSAtIF92bS50aW1lX25vdykgJSA2MClcbiAgICAgICAgOiBudWxsXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIG0wOiBtMCxcbiAgICAgIG0xOiBtMSxcbiAgICAgIG0yOiBtMixcbiAgICAgIG0zOiBtMyxcbiAgICAgIG00OiBtNCxcbiAgICAgIG01OiBtNSxcbiAgICAgIG02OiBtNlxuICAgIH1cbiAgfSlcblxuICB2YXIgbDEgPSBfdm0uX19tYXAoX3ZtLmdvb2RzQ2FyZHNMaXN0LCBmdW5jdGlvbihpdGVtLCBrKSB7XG4gICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaXRlbSlcblxuICAgIHZhciBtNyA9XG4gICAgICBpdGVtLnJlc3RfdGltZSA+IDAgPyBwYXJzZUludCgoaXRlbS5yZXN0X3RpbWUgLyA2MCAvIDYwKSAlIDI0KSA6IG51bGxcbiAgICB2YXIgbTggPSBpdGVtLnJlc3RfdGltZSA+IDAgPyBwYXJzZUludCgoaXRlbS5yZXN0X3RpbWUgLyA2MCkgJSA2MCkgOiBudWxsXG4gICAgdmFyIG05ID0gaXRlbS5yZXN0X3RpbWUgPiAwID8gcGFyc2VJbnQoaXRlbS5yZXN0X3RpbWUgJSA2MCkgOiBudWxsXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIG03OiBtNyxcbiAgICAgIG04OiBtOCxcbiAgICAgIG05OiBtOVxuICAgIH1cbiAgfSlcblxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGwwOiBsMCxcbiAgICAgICAgbDE6IGwxXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtY29udGVudFwiPlx0XHRcdFx0XHRcclxuXHRcdDwhLS0g57q/5LiKIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaXRlbXNcIiB2LWZvcj1cIihpdGVtLGspIGluIGNhcmRzTGlzdFwiIDprZXk9J2snID5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbnVtYmVyLWV4cGlyYXRpb24tdGltZVwiIHYtaWY9XCJpdGVtLmNhcmRfbm9cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1udW1lclwiPuWNoeWIuOe8luWPtzp7e2l0ZW0uY2FyZF9ub319PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhwaXJhdGlvbi10aW1lXCIgdi1pZj1cIml0ZW0udXNlX2VuZF90aW1lIC0gdGltZV9ub3cgPiAwIFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInBhcnNlSW50KChpdGVtLnVzZV9lbmRfdGltZSAtIHRpbWVfbm93KSAvIDYwIC8gNjAgLyAyNCAlIDMwICk+MFwiPlxyXG5cdFx0XHRcdFx0XHR7eyBwYXJzZUludCgoaXRlbS51c2VfZW5kX3RpbWUgLSB0aW1lX25vdykgLyA2MCAvIDYwIC8gMjQgJSAzMCApIH195aSp5YaF6L+H5pyfXHJcblx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9XCJwYXJzZUludCgoaXRlbS51c2VfZW5kX3RpbWUgLSB0aW1lX25vdykgLyA2MCAvIDYwICUgMjQgKT4wXCI+IFxyXG5cdFx0XHRcdFx0XHR7eyBwYXJzZUludCgoaXRlbS51c2VfZW5kX3RpbWUgLSB0aW1lX25vdykgLyA2MCAvIDYwICUgMjQgKSB9feWwj+aXtuWGhei/h+acn1xyXG5cdFx0XHRcdFx0PC90ZXh0Plx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZXh0IHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0MeWwj+aXtuWGhei/h+acn1xyXG5cdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4cGlyYXRpb24tdGltZVwiIHYtZWxzZSBAdGFwPSdkZWxldGVDYXJkKGl0ZW0uaWQpJz4g5Yig6ZmkIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOS4u+S9k+WGheWuuSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaXRlbXMtY29udGVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLXdyaXRlci1zdGF0ZS11c2VyVGltZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtd3JpdGVyXCIgPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIiBcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MCAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWlmPVwiaXRlbS5jYXJkX3R5cGU9PTF8fGl0ZW0uY2FyZF90eXBlID09IDJcIj5cclxuXHRcdFx0XHRcdFx0XHTmu6Hlh4/liLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uY19zdGF0dXM9PTAgJiYgaXRlbS5zdGF0ZSAhPSAzICYmIGl0ZW0uc3RhdGUhPTQgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNfY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY19jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNfY2FyZF90eXBlPT0xfHxpdGVtLmNfY2FyZF90eXBlPT0yXCI+XHJcblx0XHRcdFx0XHRcdFx05ruh5YeP5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MCAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZT09M3x8aXRlbS5jYXJkX3R5cGU9PTRcIj5cclxuXHRcdFx0XHRcdFx0XHTmipjmiaPliLhcclxuXHRcdFx0XHRcdFx0IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCIgXHJcblx0XHRcdFx0XHRcdCAgIDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmNfc3RhdHVzPT0wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jX2NhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNfY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgIHYtZWxzZS1pZj1cIml0ZW0uY19jYXJkX3R5cGU9PTN8fGl0ZW0uY19jYXJkX3R5cGU9PTRcIj5cclxuXHRcdFx0XHRcdFx0IFx05oqY5omj5Yi4XHJcblx0XHRcdFx0XHRcdCAgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0wICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGUgPT0gNSBcIj5cclxuXHRcdFx0XHRcdFx0XHTnpLzlk4HliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uY19zdGF0dXM9PTAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywke2l0ZW0uY19jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jX2NhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiBcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY19jYXJkX3R5cGU9PTVcIj5cclxuXHRcdFx0XHRcdFx0XHTnpLzlk4HliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0wICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgJiYgaXRlbS5zdG9yZS1pdGVtLnRha2Vfc3RvcmUgPjAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIlxyXG5cdFx0XHRcdFx0XHQgIHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlID09IDZcIj5cclxuXHRcdFx0XHRcdFx0XHTkvZPpqozliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uY19zdGF0dXM9PTAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiB2LWVsc2UtaWY9XCJpdGVtLmNfY2FyZF90eXBlID09IDZcIj5cclxuXHRcdFx0XHRcdFx0XHTkvZPpqozliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWNoeWIuOS7i+e7jSAtLT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtd3JpdGVyXCI+IFxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5zaG93X25hbWUgfHwgaXRlbS5jX3Nob3dfbmFtZX19IFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0LWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOW9k+WJjeeKtuaAgSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtc3RhdGVcIiB2LWlmPVwiaXRlbS5zdGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdOW9k+WJjeeKtuaAgTpcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFsbC1zdGF0ZVwiIDpzdHlsZT1cIlt7J2NvbG9yJzppdGVtLnN0YXRlPT0xPycjZmEzNDc1JzooaXRlbS5zdGF0ZT09Mj8nIzAwNzNjNCc6JyM5OTk5OTknKX1dXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPSdpdGVtLnN0YXRlPT0xJz7lj6/kvb/nlKg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9J2l0ZW0uc3RhdGU9PTInPuWGu+e7k+S4rTwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UtaWY9J2l0ZW0uc3RhdGU9PTQnPuW3suS9v+eUqDwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWVsc2U+5bey5aSx5pWIPC90ZXh0PiBcclxuXHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Y+v6aKG5Y+W5Yi45pWwIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhbi1yZWNlaXZlXCJcclxuXHRcdFx0XHRcdFx0IHYtaWY9XCJpdGVtLmdldF9saW1pdC1pdGVtLnNhbGVjYXJkX3VzZXJfY291bnQ+LTEmJml0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlPjAmJml0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgXCI+IFxyXG5cdFx0XHRcdFx0XHRcdOWPr+mihuWPlnt7aXRlbS5nZXRfbGltaXQtaXRlbS5zYWxlY2FyZF91c2VyX2NvdW50fX3lvKAgXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PCEtLSDpooblj5blgJLorqHml7YgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVjZWl2ZS10aW1lXCIgdi1pZj1cIml0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93ID4gMFwiPlxyXG5cdFx0XHRcdFx0XHRcdOi3nee7k+adn+i/mOWJqVxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZXNcIj57eyBwYXJzZUludCgoaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3cgKSAvIDYwIC8gNjAgJSAyNCkgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lLWxpbmVcIj46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZXNcIj57eyBwYXJzZUludCgoaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3cpIC8gNjAgJSA2MCkgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lLWxpbmVcIj46PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZXNcIj57eyBwYXJzZUludCgoaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3cpICUgNjApIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0g5L2/55So5pe26Ze0IC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItdGltZVwiIHYtZWxzZS1pZj1cIiFpdGVtLmdldF9lbmRfdGltZSYmaXRlbS5jX3VzZV9lbmRfdGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdOS9v+eUqOaXtumXtDpcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXRlbS5jX3VzZV9zdGFydF90aW1lfX0g6IezIHt7aXRlbS5jX3VzZV9lbmRfdGltZX19XHJcblx0XHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVjZWl2ZS10aW1lc1wiIHYtZWxzZT4g5bey57uT5p2fIHt7aXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3cgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDkuK3pl7TlnIYgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGxfY2lyY3VsYXJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2lyY3VsYXJcIiB2LWZvcj1cIihpLGspIGluIGNpcmN1bGFyX2xpc3RcIiA6a2V5PVwia1wiPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaW1hZ2VzLWV4Y2x1c2l2ZU5hbWVcIiB2LWlmPVwiIWl0ZW0uc3RhdHVzXCJcclxuXHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzPT0wICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtbmFtZVwiICA+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm5vdGVfaW1nXCIgc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF9sYWJlbF9iZy5wbmcgXCIgPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGhpc19ub3RlXCI+e3tpdGVtLm5vdGV9fTwvdGV4dD4gXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWlmPVwiaXRlbS5jb25kaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtcHJpY2VcIiAgdi1pZj1cIml0ZW0uY2FyZF90eXBlICE9IDYmJml0ZW0uY2FyZF90eXBlICE9IDVcIiBcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzppdGVtLm5vdGUgPyAnMTBycHgnOicxNnJweCd9XVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0Pu+/pTwvdGV4dD4gIHt7aXRlbS5taW5fYWZmZWN0fX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0ubWluX2FmZmVjdH19XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZWV0LXByaWNlLXVzZXJcIiB2LWlmPVwiaXRlbS5jYXJkX3R5cGUgIT0gNiYmaXRlbS5jYXJkX3R5cGUgIT0gNVwiID5cclxuXHRcdFx0XHRcdFx0XHTmu6F7e2l0ZW0uY29uZGl0aW9ufX3lj6/nlKhcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiIHYtZWxzZSBzdHlsZT1cIm1hcmdpbi10b3A6MTBycHggO1wiPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5jb25kaXRpb259fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLXByaWNlXCIgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOml0ZW0ubm90ZSA/ICcxMHJweCc6JzE2cnB4J31dXCI+XHJcblx0XHRcdFx0XHRcdFx05paH5qGI5LiAXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZWV0LXByaWNlLXVzZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTmlofmoYjkuoxcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJJbW1lZGlhdGVseS1yZWNlaXZlIHVzZWluZy10aWNrZXRcIlxyXG5cdFx0XHRcdFx0IHYtaWY9XCJpdGVtLmdldF9saW1pdD5pdGVtLnNhbGVjYXJkX3VzZXJfY291bnRcIlxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLmdldF9saW1pdD5pdGVtLnNhbGVjYXJkX3VzZXJfY291bnQgJiYgaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3c+MCAmJiBpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZSA+MCA/IGl0ZW0uY2FyZF9zdHlsZTogJyM5OTk5OTknfVwiXHJcblx0XHRcdFx0XHQgQHRhcD0nZ2V0Q2FyZChpdGVtLmlkLGl0ZW0uc3RvcmUsaXRlbS5zYWxlY2FyZF91c2VyX2NvdW50LGl0ZW0uZ2V0X2xpbWl0LGspJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z6aKG5Y+WXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZWluZy10aWNrZXRcIiB2LWVsc2VcclxuXHRcdFx0XHRcdCAgOnN0eWxlPVwieydjb2xvcic6IGl0ZW0uY2FyZF9zdHlsZSB9XCJcclxuXHRcdFx0XHRcdCAgQHRhcD0ndXNlckNhcmQoaXRlbS5pZCknPlxyXG5cdFx0XHRcdFx0XHTnq4vljbPkvb/nlKhcclxuXHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOaIkeeahOWNoeWIuCAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1pbWFnZXMtZXhjbHVzaXZlTmFtZVwiIHYtZWxzZVxyXG5cdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5zdGF0dXMhPTIgJiYgaXRlbS51c2VfZW5kX3RpbWUtdGltZV9ub3c+MCAgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgICR7aXRlbS5jX2NhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNfY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtbmFtZVwiID5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibm90ZV9pbWdcIiBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC9jYXJkX2xhYmVsX2JnLnBuZyBcIiA+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aGlzX25vdGVcIj57e2l0ZW0uY19ub3RlfX08L3RleHQ+IFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtZXhjbHVzaXZlLXByaWNlXCIgdi1pZj1cIml0ZW0uY19jb25kaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtcHJpY2VcIiBcclxuXHRcdFx0XHRcdFx0IHYtaWY9XCJpdGVtLmNfY2FyZF90eXBlIT02JiZpdGVtLmNfY2FyZF90eXBlICE9IDVcIiBcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzppdGVtLmNfbm90ZSA/ICcxMHJweCc6JzE2cnB4J31dXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+77+lPC90ZXh0PiB7e2l0ZW0uY19taW5fYWZmZWN0fX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uY19taW5fYWZmZWN0fX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiIHYtaWY9XCJpdGVtLmNfY2FyZF90eXBlIT02JiZpdGVtLmNfY2FyZF90eXBlICE9IDVcIj5cclxuXHRcdFx0XHRcdFx0XHTmu6F7e2l0ZW0uY19jb25kaXRpb259feWPr+eUqFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVldC1wcmljZS11c2VyXCIgdi1lbHNlIHN0eWxlPVwibWFyZ2luLXRvcDoxMHJweCA7XCI+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLmNfY29uZGl0aW9ufX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtZXhjbHVzaXZlLXByaWNlXCIgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6aXRlbS5jX25vdGUgPyAnMTBycHgnOicxNnJweCd9XVwiPlxyXG5cdFx0XHRcdFx0XHRcdOaWh+ahiOS4gFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVldC1wcmljZS11c2VyXCI+XHJcblx0XHRcdFx0XHRcdFx05paH5qGI5LqMXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VpbmctdGlja2V0XCJcclxuXHRcdFx0XHRcdCB2LWlmPVwiaXRlbS5jX3VzZV9jaGFubmVsICE9IDFcIlxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLmNfc3RhdHVzIT0yICYmIGl0ZW0udXNlX2VuZF90aW1lLXRpbWVfbm93PjAgPyAgaXRlbS5jX2NhcmRfc3R5bGU6ICcjOTk5OTk5J31cIlxyXG5cdFx0XHRcdFx0IEB0YXA9J3VzZXJDYXJkKGl0ZW0uY19pZCxpdGVtLmNfc3RhdHVzKSc+XHJcblx0XHRcdFx0XHRcdOeri+WNs+S9v+eUqFxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZWluZy10aWNrZXRcIiB2LWVsc2UtaWY9XCJpdGVtLmNfdXNlX2NoYW5uZWwgPT0gMSBcIlxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLmNfc3RhdHVzIT0yICYmIGl0ZW0udXNlX2VuZF90aW1lLXRpbWVfbm93PjAgID8gIGl0ZW0uY19jYXJkX3N0eWxlOiAnIzk5OTk5OSd9XCJcclxuXHRcdFx0XHRcdCBAdGFwPSdzY2FuX2NhcmQoaXRlbS5jX2lkKSc+XHJcblx0XHRcdFx0XHRcdOeri+WNs+aguOmUgFxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0RGV0YWlsc1wiIEB0YXA9J3Nob3dUaWNrZXQoaXRlbS5pZCknPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlscy10aXRsZVwiPiA8dGV4dD7ljaHliLjor6bmg4U8L3RleHQ+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXJyb3dJbWFnZXNcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxzLWNvbnRlbnRcIiB2LWlmPVwiaXRlbS5zaG93VGlja2V0RGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWRldGFpbHNcIj57e2l0ZW0uY19pbnRyb3x8aXRlbS5pbnRyb319PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOW3suaKouWFiSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtaW1hZ2VzXCIgdi1pZj1cIml0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlPT0wXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfbm8ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlt7Lnu5PmnZ8gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLWltYWdlc1wiIHYtZWxzZS1pZj1cIml0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93IDwgMFwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC9jYXJkX2VuZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOS4iumZkCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtaW1hZ2VzXCIgdi1lbHNlLWlmPVwiaXRlbS5nZXRfbGltaXQtaXRlbS5zYWxlY2FyZF91c2VyX2NvdW50PT0wXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfdG9wLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cdFx0XHRcclxuXHRcdFx0PCEtLSDlt7LlpLHmlYggLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLWltYWdlcyBpbnZhbGlkXCJcclxuXHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0udXNlX2VuZF90aW1lLXRpbWVfbm93PDAgJiYgaXRlbS51c2VfZW5kX3RpbWUhPTAgXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfaW52YWxpZC5wbmdcIiA+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOW3suS9v+eUqCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtaW1hZ2VzIGludmFsaWRcIiB2LWVsc2UtaWY9XCJpdGVtLnN0YXR1cz09M1wiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC9jYXJkX3VzZWQucG5nXCIgPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlt7LmoLjplIAgIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC1pbWFnZXMgaW52YWxpZFwiIHYtZWxzZS1pZj1cIml0ZW0uc2Nhbj09MVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCJodHRwczovL3hjeC5obXppeGluLmNvbS91cGxvYWQvaW1hZ2VzLzMuMC9jYXJkX29mZi5wbmcgXCIgPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdCA8IS0tIOWPs+i+ueeahOmhtumDqOiDjOaZr2h0dHBzOi8veGN4Lmhteml4aW4uY29tL3VwbG9hZC9pbWFnZXMvMy4wL2NhcmRfbGFiZWxfYmcucG5nIC0tPlxyXG5cdFx0PCEtLSDllYblk4HnmoTljaHliLggLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1pdGVtc1wiIHYtZm9yPVwiKGl0ZW0saykgaW4gZ29vZHNDYXJkc0xpc3RcIiA6a2V5PSdrJyA+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWl0ZW1zLWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC13cml0ZXItc3RhdGUtdXNlclRpbWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLXdyaXRlclwiID5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCIgXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5zdGF0dXM9PTEgJiYgaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3c+MCAmJiBpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZSA+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1pZj1cIml0ZW0uY2FyZF90eXBlPT0xfHxpdGVtLmNhcmRfdHlwZSA9PSAyXCI+XHJcblx0XHRcdFx0XHRcdFx05ruh5YeP5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MSAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZT09M3x8aXRlbS5jYXJkX3R5cGU9PTRcIj5cclxuXHRcdFx0XHRcdFx0XHTmipjmiaPliLhcclxuXHRcdFx0XHRcdFx0IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MSAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiBcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlID09IDUgXCI+XHJcblx0XHRcdFx0XHRcdFx056S85ZOB5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MSAmJiBpdGVtLnJlc3RfdGltZSA+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiXHJcblx0XHRcdFx0XHRcdCAgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGUgPT0gNlwiPlxyXG5cdFx0XHRcdFx0XHRcdOS9k+mqjOWIuFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Y2h5Yi45LuL57uNIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC13cml0ZXJcIj4gXHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLnNob3dfbmFtZSB9fSBcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1ib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDlj6/pooblj5bliLjmlbAgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuLXJlY2VpdmVcIlxyXG5cdFx0XHRcdFx0XHQgdi1pZj1cIml0ZW0uc3RhdHVzPjAmJml0ZW0ucmVzdF90aW1lPjAgXCI+IFxyXG5cdFx0XHRcdFx0XHRcdOWPr+mihuWPlnt7aXRlbS5nZXRfbGltaXR9feW8oCBcclxuXHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8IS0tIOmihuWPluWAkuiuoeaXtiAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNlaXZlLXRpbWVcIiB2LWlmPVwiaXRlbS5yZXN0X3RpbWUgPiAwXCI+XHJcblx0XHRcdFx0XHRcdFx06Led57uT5p2f6L+Y5YmpXHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLnJlc3RfdGltZSApIC8gNjAgLyA2MCAlIDI0KSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtbGluZVwiPjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLnJlc3RfdGltZSkgLyA2MCAlIDYwKSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtbGluZVwiPjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLnJlc3RfdGltZSkgJSA2MCkgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNlaXZlLXRpbWVzXCIgdi1lbHNlPiDlt7Lnu5PmnZ8ge3sgaXRlbS5yZXN0X3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaW1hZ2VzLWV4Y2x1c2l2ZU5hbWVcIlxyXG5cdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5yZXN0X3RpbWUgPjAgJiYgaXRlbS5zdGF0dXM+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLW5hbWVcIiA+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm5vdGVfaW1nXCIgc3JjPVwiaHR0cHM6Ly94Y3guaG16aXhpbi5jb20vdXBsb2FkL2ltYWdlcy8zLjAvY2FyZF9sYWJlbF9iZy5wbmcgXCIgPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGhpc19ub3RlXCI+e3tpdGVtLm5vdGV9fTwvdGV4dD4gXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWlmPVwiaXRlbS5jb25kaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtcHJpY2VcIiB2LWlmPVwiaXRlbS5jYXJkX3R5cGUgIT0gNlwiIFxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOml0ZW0ubm90ZSA/ICcxMHJweCc6JzE2cnB4J31dXCI+IDx0ZXh0Pu+/pTwvdGV4dD4ge3tpdGVtLm1pbl9hZmZlY3R9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLXByaWNlXCIgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5taW5fYWZmZWN0fX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiPlxyXG5cdFx0XHRcdFx0XHRcdOa7oXt7aXRlbS5jb25kaXRpb259feWPr+eUqFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJJbW1lZGlhdGVseS1yZWNlaXZlIHVzZWluZy10aWNrZXRcIiB2LWlmPVwiaXRlbS5zdGF0dXM+MFwiXHJcblx0XHRcdFx0XHQgOnN0eWxlPVwieydjb2xvcic6IGl0ZW0ucmVzdF90aW1lID4wID8gaXRlbS5jYXJkX3N0eWxlOiAnIzk5OTk5OSd9XCJcclxuXHRcdFx0XHRcdCBAdGFwPSdnZXRDYXJkcyhpdGVtLmNhcmRfaWQsayxpdGVtLnN0YXR1cyxpdGVtLmdldF9saW1pdCknPlxyXG5cdFx0XHRcdFx0XHTnq4vljbPpooblj5ZcclxuXHRcdFx0XHRcdDwvdmlldz5cdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJJbW1lZGlhdGVseS1yZWNlaXZlIHVzZWluZy10aWNrZXRcIiB2LWVsc2VcclxuXHRcdFx0XHRcdCA6c3R5bGU9XCJ7J2NvbG9yJzogaXRlbS5yZXN0X3RpbWUgPjAgPyBpdGVtLmNhcmRfc3R5bGU6ICcjOTk5OTk5J31cIlxyXG5cdFx0XHRcdFx0IEB0YXA9J2dldENhcmQoaXRlbS5jYXJkX2lkLGspJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z5L2/55SoXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXREZXRhaWxzXCIgQHRhcD0nc2hvd1RpY2tldChpdGVtLmNhcmRfaWQpJz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbHMtdGl0bGVcIj4gPHRleHQ+5Y2h5Yi46K+m5oOFPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmFycm93SW1hZ2VzXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlscy1jb250ZW50XCIgdi1pZj1cIml0ZW0uc2hvd1RpY2tldERldGFpbHNcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1kZXRhaWxzXCI+e3sgaXRlbS5pbnRybyB9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcclxuXHRcdDwhLS0g56Gu6K6k6K6i5Y2V5Y2h5Yi4IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1jb250ZW50XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gb3JkZXJfY2FyZFwiIDprZXk9J2luZGV4Jz5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwiY2FuX3VzZV9jYXJkX2xpc3RcIiBAdGFwPVwiY2hlY2tib3hDaGFuZ2UoaW5kZXgsaXRlbS5pZCxjYW5fdXNlLHBsYXRmb3JtKVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1jYXJkX2NvbnRlbnRcIlxyXG5cdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5pc191c2UgPyBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmRfbm90ZVwiPiB7eyBpdGVtLm5vdGUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX2NvbmRpdGlvblwiIHYtaWY9XCJpdGVtLmNhcmRfdHlwZSAhPSA2JiZpdGVtLmNhcmRfdHlwZSAhPSA1XCIgPiA8dGV4dD7vv6U8L3RleHQ+IHt7IGl0ZW0uY29uZGl0aW9uIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZF9jb25kaXRpb25cIiB2LWVsc2UgPiB7eyBpdGVtLmNvbmRpdGlvbiB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmRfbWluX2FmZmVjdFwiIHYtaWY9XCJpdGVtLmNhcmRfdHlwZSAhPSA2JiZpdGVtLmNhcmRfdHlwZSAhPSA1XCI+IOa7oXt7IGl0ZW0ubWluX2FmZmVjdCB9feWPr+eUqCA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmRfbWluX2FmZmVjdFwiIHYtZWxzZT4ge3sgaXRlbS5taW5fYWZmZWN0IH19IDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodF9jYXJkX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLXdyaXRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uaXNfdXNlID8gIGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiXHJcblx0XHRcdFx0XHRcdCB2LWlmPVwiaXRlbS5jYXJkX3R5cGU9PTF8fGl0ZW0uY2FyZF90eXBlID09IDJcIj5cclxuXHRcdFx0XHRcdFx0XHTmu6Hlh4/liLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uaXNfdXNlID8gIGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZT09M3x8aXRlbS5jYXJkX3R5cGU9PTRcIj5cclxuXHRcdFx0XHRcdFx0XHTmipjmiaPliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uaXNfdXNlID8gIGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZSA9PSA1IFwiPlxyXG5cdFx0XHRcdFx0XHRcdOekvOWTgeWIuFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LWxhYmVsc1wiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5pc191c2UgPyAgYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCJcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlID09IDZcIj5cclxuXHRcdFx0XHRcdFx0XHTkvZPpqozliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWNoeWIuOS7i+e7jSAtLT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtd3JpdGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0e3sgaXRlbS5zaG93X25hbWUgfX1cclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDlvZPliY3nirbmgIEgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1zdGF0ZVwiIDpzdHlsZT1cIlt7J2NvbG9yJzppdGVtLnVzZV9lbmRfdGltZS1pdGVtLnVzZV9zdGFydF90aW1lPjAgJiYgaXRlbS5pc191c2UgPycjZmEzNDc1JzonIzk5OTk5OSd9XVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFsbC1zdGF0ZVwiID5cclxuXHRcdFx0XHRcdFx0XHTlvZPliY3nirbmgIE6XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj0naXRlbS51c2VfZW5kX3RpbWUtaXRlbS51c2Vfc3RhcnRfdGltZT4wJz7lj6/kvb/nlKg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlPuW3suWkseaViDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLXRpbWVcIiB2LWlmPVwiaXRlbS51c2VfZW5kX3RpbWUtaXRlbS51c2Vfc3RhcnRfdGltZT4wXCI+XHJcblx0XHRcdFx0XHRcdOS9v+eUqOaXtumXtDpcclxuXHRcdFx0XHRcdFx0PHRleHQ+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLmNfdXNlX3N0YXJ0X3RpbWV9fSDoh7Mge3tpdGVtLmNfdXNlX2VuZF90aW1lfX1cclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNlaXZlLXRpbWVzXCIgdi1lbHNlPiDlt7Lnu5PmnZ8gPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYW5nZV9jaGVja2JveFwiPlxyXG5cdFx0XHRcdFx0PGNoZWNrYm94IGNvbG9yPVwiI2ZmNjY5OVwiICA6Y2hlY2tlZD1cIml0ZW0uY2hlY2tlZFwiIDpkaXNhYmxlZD0nY2FuX3VzZT09MScgIC8+XHJcblx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiY2hlY2tfYm94XCIgdi1zaG93PVwicGxhdGZvcm0hPSdhcHBsZXQnJiYhaXRlbS5jaGVja2VkXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PGljb24gdHlwZT1cInN1Y2Nlc3NcIiBjb2xvcj1cIiNmZjY2OTlcIiB2LXNob3c9XCJwbGF0Zm9ybSE9J2FwcGxldCcmJml0ZW0uY2hlY2tlZFwiIHNpemU9XCIyNlwiLz4gLS0+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2xhYmVsPlx0XHRcdFxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldERldGFpbHNcIiAgQHRhcD1cInNob3dfb3JkZXJfdGlja2V0KGluZGV4LGNhbl91c2UscGxhdGZvcm0pXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxzLXRpdGxlXCI+IDx0ZXh0PuWNoeWIuOivpuaDhTwvdGV4dD5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hcnJvd0ltYWdlc1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbHMtY29udGVudFwiIHYtc2hvdz1cIml0ZW0uc2hvd1RpY2tldERldGFpbHNcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1kZXRhaWxzXCI+e3sgaXRlbS5pbnRybyB9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdDwvdmlldz5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGdvb2RzQ2FyZHNMaXN0OiBBcnJheSxcclxuXHRcdFx0b3JkZXJfY2FyZDpBcnJheSxcclxuXHRcdFx0Y2FyZHNMaXN0OiBBcnJheSxcclxuXHRcdFx0bWFyZ2luVG9wOiBOdW1iZXIsXHJcblx0XHRcdHRpbWVfbm93Ok51bWJlcixcclxuXHRcdFx0Y2FuX3VzZTpOdW1iZXIsXHJcblx0XHRcdGNhcmRfY2hlY2tlZDpCb29sZWFuLFxyXG5cdFx0XHRwbGF0Zm9ybTpTdHJpbmdcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNob3c6ZmFsc2UsXHJcblx0XHRcdFx0Y2lyY3VsYXJfbGlzdDpbJycsJycsJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g5pi+56S65Y2h5Yi46K+m5oOFXHJcblx0XHRcdHNob3dEZXRhaWxzOiBmdW5jdGlvbihudW1iZXIpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdzaG93RGV0YWlscycsIG51bWJlcilcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1RpY2tldDpmdW5jdGlvbihpZCl7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnc2hvd1RpY2tldCcsIGlkKVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGlkKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93X29yZGVyX3RpY2tldDpmdW5jdGlvbihpbmRleCxjYW5fdXNlKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLnNob3dUaWNrZXREZXRhaWxzID0gIXRoYXQub3JkZXJfY2FyZFtpbmRleF0uc2hvd1RpY2tldERldGFpbHNcclxuXHRcdFx0XHRpZiAodGhhdC5vcmRlcl9jYXJkW2luZGV4XS5zaG93VGlja2V0RGV0YWlscykge1xyXG5cdFx0XHRcdFx0dGhhdC5vcmRlcl9jYXJkW2luZGV4XS5hcnJvd0ltYWdlcyA9ICcvc3RhdGljL2ltYWdlcy9hcnJvdy10b3AucG5nJ1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LWRvd24ucG5nJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdzaG93VGlja2V0Jyx0aGF0Lm9yZGVyX2NhcmQsY2FuX3VzZSlcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLnNob3dUaWNrZXREZXRhaWxzLHRoYXQub3JkZXJfY2FyZFtpbmRleCsxXS5zaG93VGlja2V0RGV0YWlscylcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hlY2tib3hDaGFuZ2U6ZnVuY3Rpb24oaW5kZXgsaWQsY2FuX3VzZSxwbGF0Zm9ybSl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocGxhdGZvcm0pXHJcblx0XHRcdFx0aWYocGxhdGZvcm09PSdhcHBsZXQnKXtcclxuXHRcdFx0XHRcdGlmKGNhbl91c2U9PTApe1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQgPSAhdGhhdC5vcmRlcl9jYXJkW2luZGV4XS5jaGVja2VkXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQub3JkZXJfY2FyZFtpbmRleF0uY2hlY2tlZCx0aGF0Lm9yZGVyX2NhcmRbaW5kZXgrMV0uY2hlY2tlZClcclxuXHRcdFx0XHRcdFx0aWYodGhhdC5vcmRlcl9jYXJkW2luZGV4XS5jaGVja2VkKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGVja2JveENoYW5nZScsdGhhdC5vcmRlcl9jYXJkLGlkLGluZGV4LDEpXHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoZWNrYm94Q2hhbmdlJyx0aGF0Lm9yZGVyX2NhcmQsaWQsaW5kZXgsMClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5Y2h5Yi45LiN5Y+v5L2/55SoXCIsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlmKGNhbl91c2U9PTApe1xyXG5cdFx0XHRcdFx0XHQvLyDnm67liY1BcHDnq6/pgInmi6nljaHliLjlh7rnjrDmnKrliKTlrprnmoTnjrDosaHvvIzpgInmi6lpbmRleOeahOWAvO+8jOS8mumAoOaIkOS4i+S4gOS4quebuOWQjGlk55qE5YC85Lqn55Sf6YCa5YyW77yM5Lmf5bCx5piv5pS55Y+Y5LiA5Liq55qE5YC877yM5Y+m5LiA5Liq55u45ZCMaWTnmoTlgLzkuZ/pmo/kuYvmlLnlj5jvvIzogIzkuJTlgZrlvpfliKTlrprkuI3nlJ/mlYhcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5vcmRlcl9jYXJkW2luZGV4XS5jaGVja2VkID0gIXRoYXQub3JkZXJfY2FyZFtpbmRleF0uY2hlY2tlZFxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQsdGhhdC5vcmRlcl9jYXJkW2luZGV4KzFdLmNoZWNrZWQpXHJcblx0XHRcdFx0XHRcdGZvcihsZXQga2V5IGluIHRoYXQub3JkZXJfY2FyZCl7XHJcblx0XHRcdFx0XHRcdFx0aWYoa2V5PT1pbmRleCYmaWQ9PXRoYXQub3JkZXJfY2FyZFtrZXldLmlkKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQub3JkZXJfY2FyZFtrZXldLmNoZWNrZWQgPSAhdGhhdC5vcmRlcl9jYXJkW2tleV0uY2hlY2tlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaW5kZXgsa2V5KVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5vcmRlcl9jYXJkW2luZGV4XS5jaGVja2VkLHRoYXQub3JkZXJfY2FyZFtpbmRleCsxXS5jaGVja2VkKVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gbGV0IG9iaiA9IHRoYXQub3JkZXJfY2FyZFtrZXldXHJcblx0XHRcdFx0XHRcdFx0XHQvLyB0aGlzLiRzZXQodGhhdC5vcmRlcl9jYXJkLGluZGV4LG9iailcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHRoYXQub3JkZXJfY2FyZFtpbmRleF0uY2hlY2tlZCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoZWNrYm94Q2hhbmdlJyx0aGF0Lm9yZGVyX2NhcmQsaWQsaW5kZXgsMSlcclxuXHRcdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGVja2JveENoYW5nZScsdGhhdC5vcmRlcl9jYXJkLGlkLGluZGV4LDApXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuWNoeWIuOS4jeWPr+S9v+eUqFwiLFxyXG5cdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpooblj5bljaHliLhcclxuXHRcdFx0Z2V0Q2FyZDpmdW5jdGlvbihpZCxzdG9yZSxzYWxlY2FyZF91c2VyX2NvdW50LGdldF9saW1pdCxpbmRleCl7XHJcblx0XHRcdFx0bGV0IHByb21wdCA9ICcnXHJcblx0XHRcdFx0aWYoZ2V0X2xpbWl0PnNhbGVjYXJkX3VzZXJfY291bnQmJnN0b3JlPjApe1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnZ2V0Q2FyZHMnLGlkLHByb21wdCxpbmRleClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHByb21wdCA9ICfml6Dms5Xpooblj5bor6XljaHliLgnXHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdnZXRDYXJkcycsaWQscHJvbXB0LGluZGV4KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Q2FyZHM6ZnVuY3Rpb24oaWQsaW5kZXgsc3RhdHVzLGdldF9saW1pdCl7XHJcblx0XHRcdFx0bGV0IHByb21wdCA9ICcnXHJcblx0XHRcdFx0aWYoZ2V0X2xpbWl0PjAmJnN0YXR1cz4wKXtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2dldENhcmRzJyxpZCxwcm9tcHQsaW5kZXgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRwcm9tcHQgPSAn5peg5rOV6aKG5Y+W6K+l5Y2h5Yi4J1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnZ2V0Q2FyZHMnLGlkLHByb21wdCxpbmRleClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDkvb/nlKjljaHliLhcclxuXHRcdFx0dXNlckNhcmQ6ZnVuY3Rpb24oaWQsc3RhdGUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHN0YXRlKVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3VzZUNhcmQnLCBpZCxzdGF0ZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5qC46ZSA5Y2h5Yi4XHJcblx0XHRcdHNjYW5fY2FyZDpmdW5jdGlvbihpZCl7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnc2Nhbl9jYXJkJywgaWQpXHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWIoOmZpOWNoeWIuFxyXG5cdFx0XHRkZWxldGVDYXJkOmZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdkZWxldGVDYXJkJyxpZClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHNob3dfb3JkZXJfYXBwbGV0OmZ1bmN0aW9uKGluZGV4LGlkLCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHRcclxuXHQudGlja2V0LWl0ZW1zIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0XHJcblx0LnRpY2tldC1pdGVtczpsYXN0LWNoaWxke1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDMycnB4O1xyXG5cdH1cclxuXHRcclxuXHQudGlja2V0LW51bWVyIHtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1udW1iZXItZXhwaXJhdGlvbi10aW1lIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1udW1iZXIge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQuZXhwaXJhdGlvbi10aW1lIHtcclxuXHRcdGNvbG9yOiAjZmEzNDc1O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1pdGVtcy1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1ib3R0b206IDFycHggZGFzaGVkICM5OTk5OTk7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC50aWNrZXQtaXRlbXMtY29udGVudC1hcHBsZXR7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IGRhc2hlZCAjOTk5OTk5O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtbGFiZWwtd3JpdGVyLXN0YXRlLXVzZXJUaW1lIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOiAzMHJweCAzMnJweCAyMHJweDtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1sYWJlbC13cml0ZXIge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyOHJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtbGFiZWxzIHtcclxuXHRcdHBhZGRpbmc6IDAgOXJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjODgzNGZhIDAlLCAjYTI1ZWZmIDEwMCUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtd3JpdGVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0XHRjb2xvcjogIzExMTExMTtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtc3RhdGUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LnVzZXJfaGF2ZXtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5jYW4tcmVjZWl2ZSB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQucmVjZWl2ZS10aW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTZycHg7XHJcblx0fVxyXG5cclxuXHQucmVjZWl2ZS10aW1lcyB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRcdC8qIG1hcmdpbi10b3A6IDgwcnB4OyAqL1xyXG5cdH1cclxuXHJcblx0LnJlY2VpdmUtdGltZSAudGltZXMge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYTM0NzU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQucmVjZWl2ZS10aW1lIC50aW1lLWxpbmUge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LXN0YXRlIHRleHQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItdGltZSB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRtYXJnaW4tdG9wOiAxNHJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtaW1hZ2VzLWV4Y2x1c2l2ZU5hbWUge1xyXG5cdFx0d2lkdGg6IDI0OHJweDtcclxuXHRcdG1pbi1oZWlnaHQ6IDI0MHJweDtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmV4Y2x1c2l2ZS1uYW1lIHtcclxuXHRcdHdpZHRoOiAxMjhycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQubm90ZV9pbWd7XHJcblx0XHR3aWR0aDogMTI4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTZycHg7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cdC50aGlzX25vdGV7XHJcblx0XHR3aWR0aDogMTI4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzZycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0XHR0b3A6IC04cnB4O1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cdFxyXG5cclxuXHQuZXhjbHVzaXZlLXByaWNlIHtcclxuXHRcdGZvbnQtc2l6ZTogNDhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHQvKiBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAxOyAqL1xyXG5cdH1cclxuXHJcblx0LmV4Y2x1c2l2ZS1wcmljZSB0ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cclxuXHQubWVldC1wcmljZS11c2VyIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHQvKiBtYXJnaW4tdG9wOiAxMHJweDsgKi9cclxuXHRcdGxpbmUtaGVpZ2h0OiAzOHJweDtcclxuXHR9XHJcblxyXG5cdC51c2VpbmctdGlja2V0IHtcclxuXHRcdHdpZHRoOiAxNjBycHg7XHJcblx0XHQvKiBoZWlnaHQ6IDQwcnB4OyAqL1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBycHggM3JweCA2cnB4IDBycHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdH1cclxuXHJcblx0LnRpY2tldERldGFpbHMge1xyXG5cdFx0cGFkZGluZzogMThycHggMjZycHggMThycHggMzBycHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnJweDtcclxuXHRcdGJveC1zaGFkb3c6IDBycHggMHJweCAzMnJweCAwcnB4IHJnYmEoMTAxLCAxMDEsIDEwMSwgMC4yNCk7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDU0cnB4O1xyXG5cdH1cclxuXHJcblx0LmRldGFpbHMtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmRldGFpbHMtdGl0bGUgaW1hZ2Uge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE1cnB4O1xyXG5cdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0aGVpZ2h0OiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5pdGVtLWRldGFpbHMge1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtbGFiZWwtaW1hZ2VzIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNDBycHg7XHJcblx0XHRyaWdodDogMTcwcnB4O1xyXG5cdFx0ei1pbmRleDogNjtcclxuXHR9XHJcblx0LmludmFsaWR7XHJcblx0XHR0b3A6IDgwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1sYWJlbC1pbWFnZXMgaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDE5NXJweDtcclxuXHRcdGhlaWdodDogMTU1cnB4O1xyXG5cdH1cclxuXHRcclxuXHQvKiDnoa7orqTorqLljZUgKi9cclxuXHQub3JkZXItY29udGVudHtcclxuXHRcdFxyXG5cdH1cclxuXHQuY2FuX3VzZV9jYXJkX2xpc3Qge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBkYXNoZWQgIzk5OTk5OTtcclxuXHR9XHJcblx0LmxlZnQtY2FyZF9jb250ZW50IHtcclxuXHRcdHdpZHRoOiAyNDhycHg7XHJcblx0XHRoZWlnaHQ6IDI0MHJweDtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkX25vdGUge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtNXJweDtcclxuXHRcdGxlZnQ6IDYwcnB4O1xyXG5cdFx0d2lkdGg6IDEyOHJweDtcclxuXHRcdGhlaWdodDogMzZycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwNjA2O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMHJweCAwcnB4IDE2cnB4IDE2cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHRcclxuXHQuY2FyZF9jb25kaXRpb24ge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDU2cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkX2NvbmRpdGlvbiB0ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkX21pbl9hZmZlY3Qge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHQucmlnaHRfY2FyZF9jb250ZW50IHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdC5jaGFuZ2VfY2hlY2tib3gge1xyXG5cdFx0d2lkdGg6IDY4cnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY2hlY2tfYm94e1xyXG5cdFx0d2lkdGg6IDQ0cnB4O1xyXG5cdFx0aGVpZ2h0OiA0NHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIycnB4O1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICNmZjY2OTk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHRcclxuXHQuYWxsX2NpcmN1bGFye1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cnB4O1xyXG5cdFx0d2lkdGg6IDEwcnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDI0NXJweDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LmNpcmN1bGFye1xyXG5cdFx0d2lkdGg6IDEwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hYjExZjNmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWIxMWYzZjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA5MjM1OTE4MTk0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ticket-create-component',
    {
        'components/ticket-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(514))
        })
    },
    [['components/ticket-create-component']]
]);
