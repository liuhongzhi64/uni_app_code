if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/goodsShow?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ticket?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/topBar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/swiper-tab?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/porduct?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/diary?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/swperDot?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/doctorShow?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/raffle?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/cart/cart?hash=dd94f3059fdaab29e64a564f0f85c71ff3d61c07');
require('../../pages/confirm_order/confirm_order?hash=1854b3d27a9772c5a16affc090148d7f9b384301');
require('../../pages/goods/goods_classify?hash=26715d52418ad3de11c40a751cce4cc713265238');
require('../../pages/goods/goods_detail?hash=9af8876d43e2596c90e98f5095161eea3db3a681');
require('../../pages/goods/goods_list?hash=d1a4f2301598deb76bcce58a2eb39014205df1d9');
require('../../pages/goods/goods_detail_comment?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/goods/goods_detail_comment_detail?hash=041571c9b44350087b213c2d6e9b638db3a6faad');
require('../../pages/goods/goods_detail_notice?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods_detail_problem?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/goods/goods_detail_problem_detail?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/goods/goods_detail_video?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/index/index?hash=72e865b2e480c93df9f65c9a09c7e5691276eec8');
require('../../pages/login/login_phone?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login_gather?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/login/register?hash=b140bcd1308e78286deebb97430ef3ef07b7fbb4');
require('../../pages/agreement/agreement?hash=1da28b75d4898855163eebe2030454dfb90909e3');
require('../../pages/check/check_card?hash=acb5252d225882f406b1c96dc95cc17e3363915f');
require('../../pages/check/check_order?hash=041571c9b44350087b213c2d6e9b638db3a6faad');
require('../../pages/confirm_order/no_refund?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/consultation/consultation?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/diary/diary?hash=3f749953b7a6cb01fd8d856962b555531854be62');
require('../../pages/diary/diary_about?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/diary/diary_detail?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/diary/diary_keep?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/diary/diary_personal?hash=8298210432a027452ab8f3838d64ed061f5a2285');
require('../../pages/diary/diary_successs?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/diary/diary_video?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/diary/diary_write?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/diary/diary_write_video?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/doctor/doctor?hash=4f7079e934b32547f2d92b4c9efa26cc91dff0d5');
require('../../pages/doctor/doctor_certificate?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/doctor/doctor_detail?hash=82fe04ed320bb121e7efa160796bab456fb25a70');
require('../../pages/doctor/doctor_photo?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/message/message?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/message/message_detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/account_number?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/add_address?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/my/after_sales?hash=5174cde910927ff6660551628b7b9003dedbb4e5');
require('../../pages/my/harves_address?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/my/my?hash=71187d8835f80c3f39a281733173c5cc21cafff8');
require('../../pages/my/my_card?hash=2fbc9ca46aa497366c584f1fa82b04ad5f120024');
require('../../pages/my/my_card_gain?hash=2fbc9ca46aa497366c584f1fa82b04ad5f120024');
require('../../pages/my/my_card_use?hash=041571c9b44350087b213c2d6e9b638db3a6faad');
require('../../pages/my/my_collection?hash=30ba38f32dc08e1af91566c70d63444f6291cecc');
require('../../pages/my/my_comment?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/my/my_order?hash=30ba38f32dc08e1af91566c70d63444f6291cecc');
require('../../pages/my/my_order_detail?hash=b140bcd1308e78286deebb97430ef3ef07b7fbb4');
require('../../pages/my/my_order_refund?hash=041571c9b44350087b213c2d6e9b638db3a6faad');
require('../../pages/my/my_order_refund_progress?hash=041571c9b44350087b213c2d6e9b638db3a6faad');
require('../../pages/my/my_order_refund_reason?hash=30ba38f32dc08e1af91566c70d63444f6291cecc');
require('../../pages/my/write_comment?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/my/my_set?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/other/jump?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/pay_success/pay_success?hash=8c64ab8bb1a8274c6e1c3da45500d6597a01ca6e');
require('../../pages/poster/poster?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/search/search?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/search/search_result?hash=539f6e87563722552c132c072e450b94404cb5e1');
require('../../pages/sign/sign?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}