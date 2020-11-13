(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/ticket"],{

/***/ 476:
/*!*************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& */ 477);
/* harmony import */ var _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.vue?vue&type=script&lang=js& */ 479);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& */ 481);
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

/***/ 477:
/*!********************************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=template&id=ab11f3f2&scoped=true& */ 478);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_template_id_ab11f3f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 478:
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
    var m0 = parseInt(((item.use_end_time - _vm.time_now) / 60 / 60 / 24) % 30)
    var m1 = parseInt(((item.use_end_time - _vm.time_now) / 60 / 60 / 24) % 30)
    var m2 = parseInt(((item.use_end_time - _vm.time_now) / 60 / 60) % 24)
    var m3 = parseInt(((item.use_end_time - _vm.time_now) / 60 / 60) % 24)
    var m4 = parseInt(((item.get_end_time - _vm.time_now) / 60 / 60) % 24)
    var m5 = parseInt(((item.get_end_time - _vm.time_now) / 60) % 60)
    var m6 = parseInt((item.get_end_time - _vm.time_now) % 60)
    return {
      $orig: _vm.__get_orig(item),
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
    var m7 = parseInt((item.rest_time / 60 / 60) % 24)
    var m8 = parseInt((item.rest_time / 60) % 60)
    var m9 = parseInt(item.rest_time % 60)
    return {
      $orig: _vm.__get_orig(item),
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

/***/ 479:
/*!**************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=script&lang=js& */ 480);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 480:
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
var _default =
{
  props: {
    goodsCardsList: Array,
    order_card: Array,
    cardsList: Array,
    marginTop: Number,
    time_now: Number,
    can_use: Number,
    card_checked: Boolean },

  data: function data() {
    return {
      show: false };

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
    checkboxChange: function checkboxChange(index, id, can_use) {
      var that = this;
      // this.$emit('checkboxChange',index,id)

      if (can_use == 0) {
        that.order_card[index].checked = !that.order_card[index].checked;
        // console.log(that.order_card[index].checked)
        if (that.order_card[index].checked) {
          this.$emit('checkboxChange', that.order_card, id, index, 1);
        } else {
          this.$emit('checkboxChange', that.order_card, id, index, 0);
        }
      } else
      {
        uni.showToast({
          title: "卡券不可使用" });

      }
      // console.log(index,id,that.order_card[index].checked,that.order_card[index+1].checked)
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
      this.$emit('useCard', id, state);
    },
    // 核销卡券
    scanCard: function scanCard(id) {
      this.$emit('scanCard', id);
    },
    // 删除卡券
    deleteCard: function deleteCard(id) {
      this.$emit('deleteCard', id);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 481:
/*!**********************************************************************************************************!*\
  !*** D:/Code/code/uniapp/components/ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuiderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& */ 482);
/* harmony import */ var _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuiderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ticket_vue_vue_type_style_index_0_id_ab11f3f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 482:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/code/uniapp/components/ticket.vue?vue&type=style&index=0&id=ab11f3f2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL2NvbXBvbmVudHMvdGlja2V0LnZ1ZT8xY2I3Iiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL2NvbXBvbmVudHMvdGlja2V0LnZ1ZT9lNTZhIiwid2VicGFjazovLy9EOi9Db2RlL2NvZGUvdW5pYXBwL2NvbXBvbmVudHMvdGlja2V0LnZ1ZT9jZGE1IiwidW5pLWFwcDovLy9jb21wb25lbnRzL3RpY2tldC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvY29tcG9uZW50cy90aWNrZXQudnVlP2Y3MjAiLCJ3ZWJwYWNrOi8vL0Q6L0NvZGUvY29kZS91bmlhcHAvY29tcG9uZW50cy90aWNrZXQudnVlP2FiMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErSDtBQUMvSDtBQUMwRDtBQUNMO0FBQ3FDOzs7QUFHMUY7QUFDNEs7QUFDNUssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxzR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFncEIsQ0FBZ0IsNnBCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN5WHBxQjtBQUNBO0FBQ0EseUJBREE7QUFFQSxxQkFGQTtBQUdBLG9CQUhBO0FBSUEscUJBSkE7QUFLQSxvQkFMQTtBQU1BLG1CQU5BO0FBT0EseUJBUEEsRUFEQTs7QUFVQSxNQVZBLGtCQVVBO0FBQ0E7QUFDQSxpQkFEQTs7QUFHQSxHQWRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbkJBO0FBb0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLE9BUkE7QUFTQTtBQUNBO0FBQ0EseUJBREE7O0FBR0E7QUFDQTtBQUNBLEtBdkNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxEQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNURBOztBQThEQTtBQUNBO0FBQ0E7QUFDQSxLQWpFQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQSxLQXJFQTtBQXNFQTtBQUNBO0FBQ0E7QUFDQSxLQXpFQSxFQWZBLEU7Ozs7Ozs7Ozs7Ozs7QUN6WEE7QUFBQTtBQUFBO0FBQUE7QUFBNjhCLENBQWdCLDQ3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWorQjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6ImNvbXBvbmVudHMvdGlja2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFiMTFmM2YyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWIxMWYzZjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhYjExZjNmMlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3RpY2tldC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3RpY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWIxMWYzZjImc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBsMCA9IF92bS5fX21hcChfdm0uY2FyZHNMaXN0LCBmdW5jdGlvbihpdGVtLCBrKSB7XG4gICAgdmFyIG0wID0gcGFyc2VJbnQoKChpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCAvIDYwIC8gMjQpICUgMzApXG4gICAgdmFyIG0xID0gcGFyc2VJbnQoKChpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCAvIDYwIC8gMjQpICUgMzApXG4gICAgdmFyIG0yID0gcGFyc2VJbnQoKChpdGVtLnVzZV9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCAvIDYwKSAlIDI0KVxuICAgIHZhciBtMyA9IHBhcnNlSW50KCgoaXRlbS51c2VfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cpIC8gNjAgLyA2MCkgJSAyNClcbiAgICB2YXIgbTQgPSBwYXJzZUludCgoKGl0ZW0uZ2V0X2VuZF90aW1lIC0gX3ZtLnRpbWVfbm93KSAvIDYwIC8gNjApICUgMjQpXG4gICAgdmFyIG01ID0gcGFyc2VJbnQoKChpdGVtLmdldF9lbmRfdGltZSAtIF92bS50aW1lX25vdykgLyA2MCkgJSA2MClcbiAgICB2YXIgbTYgPSBwYXJzZUludCgoaXRlbS5nZXRfZW5kX3RpbWUgLSBfdm0udGltZV9ub3cpICUgNjApXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiBfdm0uX19nZXRfb3JpZyhpdGVtKSxcbiAgICAgIG0wOiBtMCxcbiAgICAgIG0xOiBtMSxcbiAgICAgIG0yOiBtMixcbiAgICAgIG0zOiBtMyxcbiAgICAgIG00OiBtNCxcbiAgICAgIG01OiBtNSxcbiAgICAgIG02OiBtNlxuICAgIH1cbiAgfSlcblxuICB2YXIgbDEgPSBfdm0uX19tYXAoX3ZtLmdvb2RzQ2FyZHNMaXN0LCBmdW5jdGlvbihpdGVtLCBrKSB7XG4gICAgdmFyIG03ID0gcGFyc2VJbnQoKGl0ZW0ucmVzdF90aW1lIC8gNjAgLyA2MCkgJSAyNClcbiAgICB2YXIgbTggPSBwYXJzZUludCgoaXRlbS5yZXN0X3RpbWUgLyA2MCkgJSA2MClcbiAgICB2YXIgbTkgPSBwYXJzZUludChpdGVtLnJlc3RfdGltZSAlIDYwKVxuICAgIHJldHVybiB7XG4gICAgICAkb3JpZzogX3ZtLl9fZ2V0X29yaWcoaXRlbSksXG4gICAgICBtNzogbTcsXG4gICAgICBtODogbTgsXG4gICAgICBtOTogbTlcbiAgICB9XG4gIH0pXG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMDogbDAsXG4gICAgICAgIGwxOiBsMVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidGlja2V0LWNvbnRlbnRcIj5cdFx0XHRcdFx0XHJcblx0XHQ8IS0tIOe6v+S4iiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWl0ZW1zXCIgdi1mb3I9XCIoaXRlbSxrKSBpbiBjYXJkc0xpc3RcIiA6a2V5PSdrJyA+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LW51bWJlci1leHBpcmF0aW9uLXRpbWVcIiB2LWlmPVwiaXRlbS5jYXJkX25vXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbnVtZXJcIj7ljaHliLjnvJblj7c6e3tpdGVtLmNhcmRfbm99fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4cGlyYXRpb24tdGltZVwiIHYtaWY9XCJpdGVtLnVzZV9lbmRfdGltZSAtIHRpbWVfbm93ID4gMCBcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJwYXJzZUludCgoaXRlbS51c2VfZW5kX3RpbWUgLSB0aW1lX25vdykgLyA2MCAvIDYwIC8gMjQgJSAzMCApPjBcIj5cclxuXHRcdFx0XHRcdFx0e3sgcGFyc2VJbnQoKGl0ZW0udXNlX2VuZF90aW1lIC0gdGltZV9ub3cpIC8gNjAgLyA2MCAvIDI0ICUgMzAgKSB9feWkqeWGhei/h+acn1xyXG5cdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgdi1lbHNlLWlmPVwicGFyc2VJbnQoKGl0ZW0udXNlX2VuZF90aW1lIC0gdGltZV9ub3cpIC8gNjAgLyA2MCAlIDI0ICk+MFwiPiBcclxuXHRcdFx0XHRcdFx0e3sgcGFyc2VJbnQoKGl0ZW0udXNlX2VuZF90aW1lIC0gdGltZV9ub3cpIC8gNjAgLyA2MCAlIDI0ICkgfX3lsI/ml7blhoXov4fmnJ9cclxuXHRcdFx0XHRcdDwvdGV4dD5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dGV4dCB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdDHlsI/ml7blhoXov4fmnJ9cclxuXHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleHBpcmF0aW9uLXRpbWVcIiB2LWVsc2UgQHRhcD0nZGVsZXRlQ2FyZChpdGVtLmlkKSc+IOWIoOmZpCA8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDkuLvkvZPlhoXlrrkgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWl0ZW1zLWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC13cml0ZXItc3RhdGUtdXNlclRpbWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLXdyaXRlclwiID5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCIgXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5zdGF0dXM9PTAgJiYgaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3c+MCAmJiBpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZSA+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1pZj1cIml0ZW0uY2FyZF90eXBlPT0xfHxpdGVtLmNhcmRfdHlwZSA9PSAyXCI+XHJcblx0XHRcdFx0XHRcdFx05ruh5YeP5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmNfc3RhdHVzPT0wICYmIGl0ZW0uc3RhdGUgIT0gMyAmJiBpdGVtLnN0YXRlIT00ID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jX2NhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNfY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS5jX2NhcmRfdHlwZT09MXx8aXRlbS5jX2NhcmRfdHlwZT09MlwiPlxyXG5cdFx0XHRcdFx0XHRcdOa7oeWHj+WIuFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LWxhYmVsc1wiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5zdGF0dXM9PTAgJiYgaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3c+MCAmJiBpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZSA+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGU9PTN8fGl0ZW0uY2FyZF90eXBlPT00XCI+XHJcblx0XHRcdFx0XHRcdFx05oqY5omj5Yi4XHJcblx0XHRcdFx0XHRcdCA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LWxhYmVsc1wiIFxyXG5cdFx0XHRcdFx0XHQgICA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5jX3N0YXR1cz09MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY19jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jX2NhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiBcclxuXHRcdFx0XHRcdFx0ICB2LWVsc2UtaWY9XCJpdGVtLmNfY2FyZF90eXBlPT0zfHxpdGVtLmNfY2FyZF90eXBlPT00XCI+XHJcblx0XHRcdFx0XHRcdCBcdOaKmOaJo+WIuFxyXG5cdFx0XHRcdFx0XHQgIDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MCAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiBcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlID09IDUgXCI+XHJcblx0XHRcdFx0XHRcdFx056S85ZOB5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmNfc3RhdHVzPT0wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsJHtpdGVtLmNfY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY19jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNfY2FyZF90eXBlPT01XCI+XHJcblx0XHRcdFx0XHRcdFx056S85ZOB5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MCAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCJcclxuXHRcdFx0XHRcdFx0ICB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZSA9PSA2XCI+XHJcblx0XHRcdFx0XHRcdFx05L2T6aqM5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmNfc3RhdHVzPT0wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgdi1lbHNlLWlmPVwiaXRlbS5jX2NhcmRfdHlwZSA9PSA2XCI+XHJcblx0XHRcdFx0XHRcdFx05L2T6aqM5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PCEtLSDljaHliLjku4vnu40gLS0+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LXdyaXRlclwiPiBcclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uc2hvd19uYW1lIHx8IGl0ZW0uY19zaG93X25hbWV9fSBcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1ib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDlvZPliY3nirbmgIEgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LXN0YXRlXCIgdi1pZj1cIml0ZW0uc3RhdGVcIj5cclxuXHRcdFx0XHRcdFx0XHTlvZPliY3nirbmgIE6XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJhbGwtc3RhdGVcIiA6c3R5bGU9XCJbeydjb2xvcic6aXRlbS5zdGF0ZT09MT8nI2ZhMzQ3NSc6KGl0ZW0uc3RhdGU9PTI/JyMwMDczYzQnOicjOTk5OTk5Jyl9XVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj0naXRlbS5zdGF0ZT09MSc+5Y+v5L2/55SoPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlLWlmPSdpdGVtLnN0YXRlPT0yJz7lhrvnu5PkuK08L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlLWlmPSdpdGVtLnN0YXRlPT00Jz7lt7Lkvb/nlKg8L3RleHQ+IFxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlPuW3suWkseaViDwvdGV4dD4gXHJcblx0XHRcdFx0XHRcdFx0PC90ZXh0Plx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWPr+mihuWPluWIuOaVsCAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYW4tcmVjZWl2ZVwiXHJcblx0XHRcdFx0XHRcdCB2LWlmPVwiaXRlbS5nZXRfbGltaXQtaXRlbS5zYWxlY2FyZF91c2VyX2NvdW50Pi0xJiZpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZT4wJiZpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wIFwiPiBcclxuXHRcdFx0XHRcdFx0XHTlj6/pooblj5Z7e2l0ZW0uZ2V0X2xpbWl0LWl0ZW0uc2FsZWNhcmRfdXNlcl9jb3VudH195bygIFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwhLS0g6aKG5Y+W5YCS6K6h5pe2IC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY2VpdmUtdGltZVwiIHYtaWY9XCJpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdyA+IDBcIj5cclxuXHRcdFx0XHRcdFx0XHTot53nu5PmnZ/ov5jlialcclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVzXCI+e3sgcGFyc2VJbnQoKGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93ICkgLyA2MCAvIDYwICUgMjQpIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZS1saW5lXCI+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVzXCI+e3sgcGFyc2VJbnQoKGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93KSAvIDYwICUgNjApIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZS1saW5lXCI+OjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVzXCI+e3sgcGFyc2VJbnQoKGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93KSAlIDYwKSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOS9v+eUqOaXtumXtCAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLXRpbWVcIiB2LWVsc2UtaWY9XCIhaXRlbS5nZXRfZW5kX3RpbWUmJml0ZW0uY191c2VfZW5kX3RpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHTkvb/nlKjml7bpl7Q6XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7e2l0ZW0uY191c2Vfc3RhcnRfdGltZX19IOiHsyB7e2l0ZW0uY191c2VfZW5kX3RpbWV9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY2VpdmUtdGltZXNcIiB2LWVsc2U+IOW3sue7k+adnyB7e2l0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93IH19IDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWltYWdlcy1leGNsdXNpdmVOYW1lXCIgdi1pZj1cIiFpdGVtLnN0YXR1c1wiXHJcblx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MCAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICAmJiBpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZSA+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLW5hbWVcIiB2LWlmPVwiaXRlbS5ub3RlXCIgPlxyXG5cdFx0XHRcdFx0XHR7e2l0ZW0ubm90ZX19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5vLWV4Y2x1c2l2ZS1uYW1lXCIgdi1lbHNlPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLWV4Y2x1c2l2ZS1wcmljZVwiIHYtaWY9XCJpdGVtLmNvbmRpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiICB2LWlmPVwiaXRlbS5jYXJkX3R5cGUgIT0gNiYmaXRlbS5jYXJkX3R5cGUgIT0gNVwiIFxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOml0ZW0ubm90ZSA/ICcxMHJweCc6JzE2cnB4J31dXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+77+lPC90ZXh0PiB7e2l0ZW0uY29uZGl0aW9ufX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uY29uZGl0aW9ufX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiIHYtaWY9XCJpdGVtLmNhcmRfdHlwZSAhPSA2JiZpdGVtLmNhcmRfdHlwZSAhPSA1XCIgPlxyXG5cdFx0XHRcdFx0XHRcdOa7oXt7aXRlbS5taW5fYWZmZWN0fX3lj6/nlKhcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiIHYtZWxzZSBzdHlsZT1cIm1hcmdpbi10b3A6MTBycHggO1wiPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5taW5fYWZmZWN0fX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbGwtZXhjbHVzaXZlLXByaWNlXCIgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzppdGVtLm5vdGUgPyAnMTBycHgnOicxNnJweCd9XVwiPlxyXG5cdFx0XHRcdFx0XHRcdOaWh+ahiOS4gFxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVldC1wcmljZS11c2VyXCI+XHJcblx0XHRcdFx0XHRcdFx05paH5qGI5LqMXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiSW1tZWRpYXRlbHktcmVjZWl2ZSB1c2VpbmctdGlja2V0XCJcclxuXHRcdFx0XHRcdCB2LWlmPVwiaXRlbS5nZXRfbGltaXQ+aXRlbS5zYWxlY2FyZF91c2VyX2NvdW50XCJcclxuXHRcdFx0XHRcdCA6c3R5bGU9XCJ7J2NvbG9yJzogaXRlbS5nZXRfbGltaXQ+aXRlbS5zYWxlY2FyZF91c2VyX2NvdW50ICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PjAgJiYgaXRlbS5zdG9yZS1pdGVtLnRha2Vfc3RvcmUgPjAgPyBpdGVtLmNhcmRfc3R5bGU6ICcjOTk5OTk5J31cIlxyXG5cdFx0XHRcdFx0IEB0YXA9J2dldENhcmQoaXRlbS5pZCxpdGVtLnN0b3JlLGl0ZW0uc2FsZWNhcmRfdXNlcl9jb3VudCxpdGVtLmdldF9saW1pdCxrKSc+XHJcblx0XHRcdFx0XHRcdOeri+WNs+mihuWPllxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VpbmctdGlja2V0XCIgdi1lbHNlXHJcblx0XHRcdFx0XHQgIDpzdHlsZT1cInsnY29sb3InOiBpdGVtLmNhcmRfc3R5bGUgfVwiXHJcblx0XHRcdFx0XHQgIEB0YXA9J3VzZXJDYXJkKGl0ZW0uaWQpJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z5L2/55SoXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDmiJHnmoTljaHliLggLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaW1hZ2VzLWV4Y2x1c2l2ZU5hbWVcIiB2LWVsc2VcclxuXHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uc3RhdHVzIT0yICYmIGl0ZW0udXNlX2VuZF90aW1lLXRpbWVfbm93PjAgID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICAke2l0ZW0uY19jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jX2NhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLW5hbWVcIiB2LWlmPVwiaXRlbS5jX25vdGVcIiA+XHJcblx0XHRcdFx0XHRcdHt7aXRlbS5jX25vdGV9fVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuby1leGNsdXNpdmUtbmFtZVwiIHYtZWxzZT48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWlmPVwiaXRlbS5jX2NvbmRpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1pZj1cIml0ZW0uY19jYXJkX3R5cGUhPTYmJml0ZW0uY19jYXJkX3R5cGUgIT0gNVwiIFxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3sncGFkZGluZy10b3AnOml0ZW0uY19ub3RlID8gJzEwcnB4JzonMTZycHgnfV1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7vv6U8L3RleHQ+IHt7aXRlbS5jX2NvbmRpdGlvbn19XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJleGNsdXNpdmUtcHJpY2VcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLmNfY29uZGl0aW9ufX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiIHYtaWY9XCJpdGVtLmNfY2FyZF90eXBlIT02JiZpdGVtLmNfY2FyZF90eXBlICE9IDVcIj5cclxuXHRcdFx0XHRcdFx0XHTmu6F7e2l0ZW0uY19taW5fYWZmZWN0fX3lj6/nlKhcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiIHYtZWxzZSBzdHlsZT1cIm1hcmdpbi10b3A6MTBycHggO1wiPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5jX21pbl9hZmZlY3R9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFsbC1leGNsdXNpdmUtcHJpY2VcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLXByaWNlXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J3BhZGRpbmctdG9wJzppdGVtLmNfbm90ZSA/ICcxMHJweCc6JzE2cnB4J31dXCI+XHJcblx0XHRcdFx0XHRcdFx05paH5qGI5LiAXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZWV0LXByaWNlLXVzZXJcIj5cclxuXHRcdFx0XHRcdFx0XHTmlofmoYjkuoxcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZWluZy10aWNrZXRcIlxyXG5cdFx0XHRcdFx0IHYtaWY9XCJpdGVtLmNfdXNlX2NoYW5uZWwgPT0gMCAmJiBpdGVtLmNfY2FyZF90eXBlID09IDEgfHwgaXRlbS5jX2NhcmRfdHlwZSA9PTIgfHwgaXRlbS5jX2NhcmRfdHlwZSA9PTMgfHxpdGVtLmNfY2FyZF90eXBlID09NCBcIlxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLnN0YXR1cyE9MiAmJiBpdGVtLnVzZV9lbmRfdGltZS10aW1lX25vdz4wID8gIGl0ZW0uY19jYXJkX3N0eWxlOiAnIzk5OTk5OSd9XCJcclxuXHRcdFx0XHRcdCBAdGFwPSd1c2VyQ2FyZChpdGVtLmNfaWQsaXRlbS5zdGF0dXMpJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z5L2/55SoXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlaW5nLXRpY2tldFwiIHYtZWxzZVxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLnN0YXR1cyE9MiAmJiBpdGVtLnVzZV9lbmRfdGltZS10aW1lX25vdz4wICA/ICBpdGVtLmNfY2FyZF9zdHlsZTogJyM5OTk5OTknfVwiXHJcblx0XHRcdFx0XHQgQHRhcD0nc2NhbkNhcmQoaXRlbS5pZCknPlxyXG5cdFx0XHRcdFx0XHTnq4vljbPmoLjplIBcclxuXHRcdFx0XHRcdDwvdmlldz5cdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldERldGFpbHNcIiBAdGFwPSdzaG93VGlja2V0KGl0ZW0uaWQpJz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbHMtdGl0bGVcIj4gPHRleHQ+5Y2h5Yi46K+m5oOFPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmFycm93SW1hZ2VzXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlscy1jb250ZW50XCIgdi1pZj1cIml0ZW0uc2hvd1RpY2tldERldGFpbHNcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1kZXRhaWxzXCI+e3tpdGVtLmNfaW50cm98fGl0ZW0uaW50cm99fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlt7LmiqLlhYkgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLWltYWdlc1wiIHYtaWY9XCJpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZT09MFwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2xvb3QtYWxsLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5bey57uT5p2fIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC1pbWFnZXNcIiB2LWVsc2UtaWY9XCJpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdyA8IDBcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vc3RhdGljL2ltYWdlcy90aWNrZS1vdmVyLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5LiK6ZmQIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC1pbWFnZXNcIiB2LWVsc2UtaWY9XCJpdGVtLmdldF9saW1pdC1pdGVtLnNhbGVjYXJkX3VzZXJfY291bnQ9PTBcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vc3RhdGljL2ltYWdlcy91cHBlci1saW1pdC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3Plx0XHRcdFxyXG5cdFx0XHQ8IS0tIOW3suWkseaViCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtbGFiZWwtaW1hZ2VzIGludmFsaWRcIiB2LWVsc2UtaWY9XCJpdGVtLnVzZV9lbmRfdGltZS10aW1lX25vdzwwICYmIGl0ZW0uZ2V0X2VuZF90aW1lLXRpbWVfbm93PDBcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9zdGF0ZTEucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlt7Lkvb/nlKggLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLWltYWdlcyBpbnZhbGlkXCIgdi1lbHNlLWlmPVwiaXRlbS5zdGF0dXM9PTNcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9zdGF0ZTIucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSDllYblk4HnmoTljaHliLggLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1pdGVtc1wiIHYtZm9yPVwiKGl0ZW0saykgaW4gZ29vZHNDYXJkc0xpc3RcIiA6a2V5PSdrJyA+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWl0ZW1zLWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC13cml0ZXItc3RhdGUtdXNlclRpbWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0LWxhYmVsLXdyaXRlclwiID5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCIgXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5zdGF0dXM9PTEgJiYgaXRlbS5nZXRfZW5kX3RpbWUtdGltZV9ub3c+MCAmJiBpdGVtLnN0b3JlLWl0ZW0udGFrZV9zdG9yZSA+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiIFxyXG5cdFx0XHRcdFx0XHQgdi1pZj1cIml0ZW0uY2FyZF90eXBlPT0xfHxpdGVtLmNhcmRfdHlwZSA9PSAyXCI+XHJcblx0XHRcdFx0XHRcdFx05ruh5YeP5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MSAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wICYmIGl0ZW0uc3RvcmUtaXRlbS50YWtlX3N0b3JlID4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICR7aXRlbS5jYXJkX3N0eWxlfSAwJSwgICR7aXRlbS5jYXJkX3N0eWxlfSAxMDAlKWA6YCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCM5OTk5OTkgMCUsICAjOTk5OTk5IDEwMCUpYH1dXCIgXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZT09M3x8aXRlbS5jYXJkX3R5cGU9PTRcIj5cclxuXHRcdFx0XHRcdFx0XHTmipjmiaPliLhcclxuXHRcdFx0XHRcdFx0IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MSAmJiBpdGVtLmdldF9lbmRfdGltZS10aW1lX25vdz4wID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIiBcclxuXHRcdFx0XHRcdFx0IHYtZWxzZS1pZj1cIml0ZW0uY2FyZF90eXBlID09IDUgXCI+XHJcblx0XHRcdFx0XHRcdFx056S85ZOB5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLnN0YXR1cz09MSAmJiBpdGVtLnJlc3RfdGltZSA+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiXHJcblx0XHRcdFx0XHRcdCAgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGUgPT0gNlwiPlxyXG5cdFx0XHRcdFx0XHRcdOS9k+mqjOWIuFxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Y2h5Yi45LuL57uNIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC13cml0ZXJcIj4gXHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLnNob3dfbmFtZSB9fSBcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1ib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDlj6/pooblj5bliLjmlbAgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FuLXJlY2VpdmVcIlxyXG5cdFx0XHRcdFx0XHQgdi1pZj1cIml0ZW0uc3RhdHVzPjAmJml0ZW0ucmVzdF90aW1lPjAgXCI+IFxyXG5cdFx0XHRcdFx0XHRcdOWPr+mihuWPlnt7aXRlbS5nZXRfbGltaXR9feW8oCBcclxuXHRcdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8IS0tIOmihuWPluWAkuiuoeaXtiAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNlaXZlLXRpbWVcIiB2LWlmPVwiaXRlbS5yZXN0X3RpbWUgPiAwXCI+XHJcblx0XHRcdFx0XHRcdFx06Led57uT5p2f6L+Y5YmpXHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLnJlc3RfdGltZSApIC8gNjAgLyA2MCAlIDI0KSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtbGluZVwiPjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLnJlc3RfdGltZSkgLyA2MCAlIDYwKSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtbGluZVwiPjo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lc1wiPnt7IHBhcnNlSW50KChpdGVtLnJlc3RfdGltZSkgJSA2MCkgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWNlaXZlLXRpbWVzXCIgdi1lbHNlPiDlt7Lnu5PmnZ8ge3sgaXRlbS5yZXN0X3RpbWUgfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtaW1hZ2VzLWV4Y2x1c2l2ZU5hbWVcIlxyXG5cdFx0XHRcdCA6c3R5bGU9XCJbeydiYWNrZ3JvdW5kLWltYWdlJzogaXRlbS5yZXN0X3RpbWUgPjAgJiYgaXRlbS5zdGF0dXM+MCA/IGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXhjbHVzaXZlLW5hbWVcIiB2LWlmPVwiaXRlbS5ub3RlXCIgPlxyXG5cdFx0XHRcdFx0XHR7e2l0ZW0ubm90ZX19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5vLWV4Y2x1c2l2ZS1uYW1lXCIgdi1lbHNlPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWxsLWV4Y2x1c2l2ZS1wcmljZVwiIHYtaWY9XCJpdGVtLmNvbmRpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIHYtaWY9XCJpdGVtLmNhcmRfdHlwZSAhPSA2XCIgXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJbeydwYWRkaW5nLXRvcCc6aXRlbS5ub3RlID8gJzEwcnB4JzonMTZycHgnfV1cIj4gPHRleHQ+77+lPC90ZXh0PiB7e2l0ZW0uY29uZGl0aW9ufX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImV4Y2x1c2l2ZS1wcmljZVwiIHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uY29uZGl0aW9ufX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lZXQtcHJpY2UtdXNlclwiPlxyXG5cdFx0XHRcdFx0XHRcdOa7oXt7aXRlbS5taW5fYWZmZWN0fX3lj6/nlKhcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiSW1tZWRpYXRlbHktcmVjZWl2ZSB1c2VpbmctdGlja2V0XCIgdi1pZj1cIml0ZW0uc3RhdHVzPjBcIlxyXG5cdFx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOiBpdGVtLnJlc3RfdGltZSA+MCA/IGl0ZW0uY2FyZF9zdHlsZTogJyM5OTk5OTknfVwiXHJcblx0XHRcdFx0XHQgQHRhcD0nZ2V0Q2FyZHMoaXRlbS5jYXJkX2lkLGssaXRlbS5zdGF0dXMsaXRlbS5nZXRfbGltaXQpJz5cclxuXHRcdFx0XHRcdFx056uL5Y2z6aKG5Y+WXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiSW1tZWRpYXRlbHktcmVjZWl2ZSB1c2VpbmctdGlja2V0XCIgdi1lbHNlXHJcblx0XHRcdFx0XHQgOnN0eWxlPVwieydjb2xvcic6IGl0ZW0ucmVzdF90aW1lID4wID8gaXRlbS5jYXJkX3N0eWxlOiAnIzk5OTk5OSd9XCJcclxuXHRcdFx0XHRcdCBAdGFwPSdnZXRDYXJkKGl0ZW0uY2FyZF9pZCxrKSc+XHJcblx0XHRcdFx0XHRcdOeri+WNs+S9v+eUqFxyXG5cdFx0XHRcdFx0PC92aWV3Plx0XHJcblx0XHRcdFx0PC92aWV3Plx0XHRcdFxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0RGV0YWlsc1wiIEB0YXA9J3Nob3dUaWNrZXQoaXRlbS5jYXJkX2lkKSc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxzLXRpdGxlXCI+IDx0ZXh0PuWNoeWIuOivpuaDhTwvdGV4dD5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hcnJvd0ltYWdlc1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbHMtY29udGVudFwiIHYtaWY9XCJpdGVtLnNob3dUaWNrZXREZXRhaWxzXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tZGV0YWlsc1wiPnt7IGl0ZW0uaW50cm8gfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHJcblx0XHQ8IS0tIOehruiupOiuouWNleWNoeWIuCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwib3JkZXItY29udGVudFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG9yZGVyX2NhcmRcIiA6a2V5PSdpbmRleCc+XHJcblx0XHRcdDxsYWJlbCBjbGFzcz1cImNhbl91c2VfY2FyZF9saXN0XCIgQHRhcD1cImNoZWNrYm94Q2hhbmdlKGluZGV4LGl0ZW0uaWQsY2FuX3VzZSlcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxlZnQtY2FyZF9jb250ZW50XCJcclxuXHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uaXNfdXNlID8gYGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX25vdGVcIj4ge3sgaXRlbS5ub3RlIH19IDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZF9jb25kaXRpb25cIiB2LWlmPVwiaXRlbS5jYXJkX3R5cGUgIT0gNiYmaXRlbS5jYXJkX3R5cGUgIT0gNVwiID4gPHRleHQ+77+lPC90ZXh0PiB7eyBpdGVtLmNvbmRpdGlvbiB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmRfY29uZGl0aW9uXCIgdi1lbHNlID4ge3sgaXRlbS5jb25kaXRpb24gfX0gPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX21pbl9hZmZlY3RcIiB2LWlmPVwiaXRlbS5jYXJkX3R5cGUgIT0gNiYmaXRlbS5jYXJkX3R5cGUgIT0gNVwiPiDmu6F7eyBpdGVtLm1pbl9hZmZlY3QgfX3lj6/nlKggPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkX21pbl9hZmZlY3RcIiB2LWVsc2U+IHt7IGl0ZW0ubWluX2FmZmVjdCB9fSA8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHRfY2FyZF9jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpY2tldC1sYWJlbC13cml0ZXJcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmlzX3VzZSA/ICBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIlxyXG5cdFx0XHRcdFx0XHQgdi1pZj1cIml0ZW0uY2FyZF90eXBlPT0xfHxpdGVtLmNhcmRfdHlwZSA9PSAyXCI+XHJcblx0XHRcdFx0XHRcdFx05ruh5YeP5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmlzX3VzZSA/ICBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIlxyXG5cdFx0XHRcdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGU9PTN8fGl0ZW0uY2FyZF90eXBlPT00XCI+XHJcblx0XHRcdFx0XHRcdFx05oqY5omj5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aWNrZXQtbGFiZWxzXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIlt7J2JhY2tncm91bmQtaW1hZ2UnOiBpdGVtLmlzX3VzZSA/ICBgbGluZWFyLWdyYWRpZW50KC05MGRlZywgJHtpdGVtLmNhcmRfc3R5bGV9IDAlLCAgJHtpdGVtLmNhcmRfc3R5bGV9IDEwMCUpYDpgIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzk5OTk5OSAwJSwgICM5OTk5OTkgMTAwJSlgfV1cIlxyXG5cdFx0XHRcdFx0XHQgdi1lbHNlLWlmPVwiaXRlbS5jYXJkX3R5cGUgPT0gNSBcIj5cclxuXHRcdFx0XHRcdFx0XHTnpLzlk4HliLhcclxuXHRcdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpY2tldC1sYWJlbHNcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwiW3snYmFja2dyb3VuZC1pbWFnZSc6IGl0ZW0uaXNfdXNlID8gIGBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAke2l0ZW0uY2FyZF9zdHlsZX0gMCUsICAke2l0ZW0uY2FyZF9zdHlsZX0gMTAwJSlgOmAgbGluZWFyLWdyYWRpZW50KC05MGRlZywjOTk5OTk5IDAlLCAgIzk5OTk5OSAxMDAlKWB9XVwiXHJcblx0XHRcdFx0XHRcdCB2LWVsc2UtaWY9XCJpdGVtLmNhcmRfdHlwZSA9PSA2XCI+XHJcblx0XHRcdFx0XHRcdFx05L2T6aqM5Yi4XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PCEtLSDljaHliLjku4vnu40gLS0+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGlja2V0LXdyaXRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7IGl0ZW0uc2hvd19uYW1lIH19XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g5b2T5YmN54q25oCBIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aWNrZXQtc3RhdGVcIiA6c3R5bGU9XCJbeydjb2xvcic6aXRlbS51c2VfZW5kX3RpbWUtaXRlbS51c2Vfc3RhcnRfdGltZT4wICYmIGl0ZW0uaXNfdXNlID8nI2ZhMzQ3NSc6JyM5OTk5OTknfV1cIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJhbGwtc3RhdGVcIiA+XHJcblx0XHRcdFx0XHRcdFx05b2T5YmN54q25oCBOlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9J2l0ZW0udXNlX2VuZF90aW1lLWl0ZW0udXNlX3N0YXJ0X3RpbWU+MCc+5Y+v5L2/55SoPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHYtZWxzZT7lt7LlpLHmlYg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci10aW1lXCIgdi1pZj1cIml0ZW0udXNlX2VuZF90aW1lLWl0ZW0udXNlX3N0YXJ0X3RpbWU+MFwiPlxyXG5cdFx0XHRcdFx0XHTkvb/nlKjml7bpl7Q6XHJcblx0XHRcdFx0XHRcdDx0ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5jX3VzZV9zdGFydF90aW1lfX0g6IezIHt7aXRlbS5jX3VzZV9lbmRfdGltZX19XHJcblx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVjZWl2ZS10aW1lc1wiIHYtZWxzZT4g5bey57uT5p2fIDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGFuZ2VfY2hlY2tib3hcIj5cclxuXHRcdFx0XHRcdDxjaGVja2JveCBjb2xvcj1cIiNmZjY2OTlcIiA6Y2hlY2tlZD1cIml0ZW0uY2hlY2tlZFwiIDpkaXNhYmxlZD0nY2FuX3VzZT09MScgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvbGFiZWw+XHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGlja2V0RGV0YWlsc1wiICBAdGFwPSdzaG93X29yZGVyX3RpY2tldChpbmRleCxjYW5fdXNlKSc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxzLXRpdGxlXCI+IDx0ZXh0PuWNoeWIuOivpuaDhTwvdGV4dD5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hcnJvd0ltYWdlc1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbHMtY29udGVudFwiIHYtc2hvdz1cIml0ZW0uc2hvd1RpY2tldERldGFpbHNcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1kZXRhaWxzXCI+e3sgaXRlbS5pbnRybyB9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRnb29kc0NhcmRzTGlzdDogQXJyYXksXHJcblx0XHRcdG9yZGVyX2NhcmQ6QXJyYXksXHJcblx0XHRcdGNhcmRzTGlzdDogQXJyYXksXHJcblx0XHRcdG1hcmdpblRvcDogTnVtYmVyLFxyXG5cdFx0XHR0aW1lX25vdzpOdW1iZXIsXHJcblx0XHRcdGNhbl91c2U6TnVtYmVyLFxyXG5cdFx0XHRjYXJkX2NoZWNrZWQ6Qm9vbGVhblxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2hvdzpmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDmmL7npLrljaHliLjor6bmg4VcclxuXHRcdFx0c2hvd0RldGFpbHM6IGZ1bmN0aW9uKG51bWJlcikge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3Nob3dEZXRhaWxzJywgbnVtYmVyKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93VGlja2V0OmZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdzaG93VGlja2V0JywgaWQpXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaWQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dfb3JkZXJfdGlja2V0OmZ1bmN0aW9uKGluZGV4LGNhbl91c2Upe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQub3JkZXJfY2FyZFtpbmRleF0uc2hvd1RpY2tldERldGFpbHMgPSAhdGhhdC5vcmRlcl9jYXJkW2luZGV4XS5zaG93VGlja2V0RGV0YWlsc1xyXG5cdFx0XHRcdGlmICh0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLnNob3dUaWNrZXREZXRhaWxzKSB7XHJcblx0XHRcdFx0XHR0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmFycm93SW1hZ2VzID0gJy9zdGF0aWMvaW1hZ2VzL2Fycm93LXRvcC5wbmcnXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoYXQub3JkZXJfY2FyZFtpbmRleF0uYXJyb3dJbWFnZXMgPSAnL3N0YXRpYy9pbWFnZXMvYXJyb3ctZG93bi5wbmcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3Nob3dUaWNrZXQnLHRoYXQub3JkZXJfY2FyZCxjYW5fdXNlKVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQub3JkZXJfY2FyZFtpbmRleF0uc2hvd1RpY2tldERldGFpbHMsdGhhdC5vcmRlcl9jYXJkW2luZGV4KzFdLnNob3dUaWNrZXREZXRhaWxzKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGVja2JveENoYW5nZTpmdW5jdGlvbihpbmRleCxpZCxjYW5fdXNlKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyB0aGlzLiRlbWl0KCdjaGVja2JveENoYW5nZScsaW5kZXgsaWQpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoY2FuX3VzZT09MCl7XHJcblx0XHRcdFx0XHR0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQgPSAhdGhhdC5vcmRlcl9jYXJkW2luZGV4XS5jaGVja2VkXHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQpXHJcblx0XHRcdFx0XHRpZih0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGVja2JveENoYW5nZScsdGhhdC5vcmRlcl9jYXJkLGlkLGluZGV4LDEpXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hlY2tib3hDaGFuZ2UnLHRoYXQub3JkZXJfY2FyZCxpZCxpbmRleCwwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuWNoeWIuOS4jeWPr+S9v+eUqFwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbmRleCxpZCx0aGF0Lm9yZGVyX2NhcmRbaW5kZXhdLmNoZWNrZWQsdGhhdC5vcmRlcl9jYXJkW2luZGV4KzFdLmNoZWNrZWQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmihuWPluWNoeWIuFxyXG5cdFx0XHRnZXRDYXJkOmZ1bmN0aW9uKGlkLHN0b3JlLHNhbGVjYXJkX3VzZXJfY291bnQsZ2V0X2xpbWl0LGluZGV4KXtcclxuXHRcdFx0XHRsZXQgcHJvbXB0ID0gJydcclxuXHRcdFx0XHRpZihnZXRfbGltaXQ+c2FsZWNhcmRfdXNlcl9jb3VudCYmc3RvcmU+MCl7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdnZXRDYXJkcycsaWQscHJvbXB0LGluZGV4KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0cHJvbXB0ID0gJ+aXoOazlemihuWPluivpeWNoeWIuCdcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2dldENhcmRzJyxpZCxwcm9tcHQsaW5kZXgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDYXJkczpmdW5jdGlvbihpZCxpbmRleCxzdGF0dXMsZ2V0X2xpbWl0KXtcclxuXHRcdFx0XHRsZXQgcHJvbXB0ID0gJydcclxuXHRcdFx0XHRpZihnZXRfbGltaXQ+MCYmc3RhdHVzPjApe1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnZ2V0Q2FyZHMnLGlkLHByb21wdCxpbmRleClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHByb21wdCA9ICfml6Dms5Xpooblj5bor6XljaHliLgnXHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdnZXRDYXJkcycsaWQscHJvbXB0LGluZGV4KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOS9v+eUqOWNoeWIuFxyXG5cdFx0XHR1c2VyQ2FyZDpmdW5jdGlvbihpZCxzdGF0ZSl7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndXNlQ2FyZCcsIGlkLHN0YXRlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmoLjplIDljaHliLhcclxuXHRcdFx0c2NhbkNhcmQ6ZnVuY3Rpb24oaWQpe1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3NjYW5DYXJkJywgaWQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWIoOmZpOWNoeWIuFxyXG5cdFx0XHRkZWxldGVDYXJkOmZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdkZWxldGVDYXJkJyxpZClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdFxyXG5cdC50aWNrZXQtaXRlbXMge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHRcclxuXHQudGlja2V0LWl0ZW1zOmxhc3QtY2hpbGR7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMzJycHg7XHJcblx0fVxyXG5cdFxyXG5cdC50aWNrZXQtbnVtZXIge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW51bWJlci1leHBpcmF0aW9uLXRpbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LW51bWJlciB7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5leHBpcmF0aW9uLXRpbWUge1xyXG5cdFx0Y29sb3I6ICNmYTM0NzU7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWl0ZW1zLWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBkYXNoZWQgIzk5OTk5OTtcclxuXHRcdC8qIG1hcmdpbi10b3A6IDIwcnB4OyAqL1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1sYWJlbC13cml0ZXItc3RhdGUtdXNlclRpbWUge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDMycnB4IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWxhYmVsLXdyaXRlciB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0LXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1sYWJlbHMge1xyXG5cdFx0cGFkZGluZzogMCA5cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICM4ODM0ZmEgMCUsICNhMjVlZmYgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC13cml0ZXIge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjMTExMTExO1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1zdGF0ZSB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQudXNlcl9oYXZle1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblx0LmNhbi1yZWNlaXZlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHR9XHJcblxyXG5cdC5yZWNlaXZlLXRpbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tdG9wOiAxNnJweDtcclxuXHR9XHJcblxyXG5cdC5yZWNlaXZlLXRpbWVzIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0LyogbWFyZ2luLXRvcDogODBycHg7ICovXHJcblx0fVxyXG5cclxuXHQucmVjZWl2ZS10aW1lIC50aW1lcyB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhMzQ3NTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5yZWNlaXZlLXRpbWUgLnRpbWUtbGluZSB7XHJcblx0XHRjb2xvcjogI2ZhMzQ3NTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHR9XHJcblxyXG5cdC50aWNrZXQtc3RhdGUgdGV4dCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci10aW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHRcdG1hcmdpbi10b3A6IDE0cnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1pbWFnZXMtZXhjbHVzaXZlTmFtZSB7XHJcblx0XHQvKiBwYWRkaW5nOiAwIDMwcnB4OyAqL1xyXG5cdFx0d2lkdGg6IDI0OHJweDtcclxuXHRcdG1pbi1oZWlnaHQ6IDI0MHJweDtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmV4Y2x1c2l2ZS1uYW1lIHtcclxuXHRcdHdpZHRoOiAxMjhycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwNzA2MDYgMCUsICMzMDMwMzAgMTAwJSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcnB4IDBycHggMTZycHggMTZycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM2cnB4O1xyXG5cdH1cclxuXHQubm8tZXhjbHVzaXZlLW5hbWV7XHJcblx0XHR3aWR0aDogMTI4cnB4O1xyXG5cdFx0aGVpZ2h0OiAyNnJweDtcclxuXHR9XHJcblxyXG5cdC5leGNsdXNpdmUtcHJpY2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0OHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHRcdC8qIG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDE7ICovXHJcblx0fVxyXG5cclxuXHQuZXhjbHVzaXZlLXByaWNlIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5tZWV0LXByaWNlLXVzZXIge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdC8qIG1hcmdpbi10b3A6IDEwcnB4OyAqL1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM4cnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZWluZy10aWNrZXQge1xyXG5cdFx0d2lkdGg6IDE2MHJweDtcclxuXHRcdC8qIGhlaWdodDogNDBycHg7ICovXHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym94LXNoYWRvdzogMHJweCAzcnB4IDZycHggMHJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRib3JkZXI6IDA7XHJcblx0fVxyXG5cclxuXHQudGlja2V0RGV0YWlscyB7XHJcblx0XHRwYWRkaW5nOiAxOHJweCAyNnJweCAxOHJweCAzMHJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHJweCAwcnB4IDMycnB4IDBycHggcmdiYSgxMDEsIDEwMSwgMTAxLCAwLjI0KTtcclxuXHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTRycHg7XHJcblx0fVxyXG5cclxuXHQuZGV0YWlscy10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZGV0YWlscy10aXRsZSBpbWFnZSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTVycHg7XHJcblx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0Lml0ZW0tZGV0YWlscyB7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRpY2tldC1sYWJlbC1pbWFnZXMge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiA0MHJweDtcclxuXHRcdHJpZ2h0OiAxNzBycHg7XHJcblx0XHR6LWluZGV4OiA2O1xyXG5cdH1cclxuXHQuaW52YWxpZHtcclxuXHRcdHRvcDogODBycHg7XHJcblx0fVxyXG5cclxuXHQudGlja2V0LWxhYmVsLWltYWdlcyBpbWFnZSB7XHJcblx0XHR3aWR0aDogMTk1cnB4O1xyXG5cdFx0aGVpZ2h0OiAxNTVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC8qIOehruiupOiuouWNlSAqL1xyXG5cdC5vcmRlci1jb250ZW50e1xyXG5cdFx0XHJcblx0fVxyXG5cdC5jYW5fdXNlX2NhcmRfbGlzdCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZycHg7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IGRhc2hlZCAjOTk5OTk5O1xyXG5cdH1cclxuXHQubGVmdC1jYXJkX2NvbnRlbnQge1xyXG5cdFx0d2lkdGg6IDI0OHJweDtcclxuXHRcdGhlaWdodDogMjQwcnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0XHJcblx0LmNhcmRfbm90ZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IC01cnB4O1xyXG5cdFx0bGVmdDogNjBycHg7XHJcblx0XHR3aWR0aDogMTI4cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwNzA2MDY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcnB4IDBycHggMTZycHggMTZycHg7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM2cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkX2NvbmRpdGlvbiB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogNTZycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblx0XHJcblx0LmNhcmRfY29uZGl0aW9uIHRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHR9XHJcblx0XHJcblx0LmNhcmRfbWluX2FmZmVjdCB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG5cdC5yaWdodF9jYXJkX2NvbnRlbnQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcblx0LmNoYW5nZV9jaGVja2JveCB7XHJcblx0XHR3aWR0aDogNjhycHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90aWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWIxMWYzZjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdGlja2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFiMTFmM2YyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNTI1Nzc2NjA4NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ticket-create-component',
    {
        'components/ticket-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(476))
        })
    },
    [['components/ticket-create-component']]
]);
