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
require('../../components/swiper-tab?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/swperDot?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/topBar?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=06a208927f65248d3580bec9b9427ad2c22cfd4d');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/register?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/poster/poster?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/sign/sign?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/doctor/doctor?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/doctor/doctor_detail?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/doctor/doctor_star?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/after_sales?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_card?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_card_gain?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_card_use?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_collection?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_order?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_order_detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_order_refund?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_order_refund_progress?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my_order_refund_reason?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/diary/diary?hash=644830cb880905bcd7f994fb92805a8bdf32c0c6');
require('../../pages/diary/diary_detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/diary/diary_video?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/search/search?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/search/search_result?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/message/message?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/message/message_detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods_classify?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods_detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods_detail_comment?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods_detail_notice?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods_detail_problem?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods_detail_video?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods_list?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cart/cart?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/confirm_order/confirm_order?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/pay_success/pay_success?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}