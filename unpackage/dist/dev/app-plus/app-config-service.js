
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/open_screen","pages/login/login_phone","pages/my/my","pages/my/add_address","pages/index/index","pages/goods/goods_detail","pages/agreement/agreement","pages/cart/cart","pages/confirm_order/confirm_order","pages/confirm_order/no_refund","pages/check/check_card","pages/check/check_order","pages/consultation/consultation","pages/diary/diary","pages/diary/diary_personal","pages/diary/diary_video","pages/diary/about_list","pages/diary/diary_about","pages/diary/diary_keep","pages/diary/diary_detail","pages/diary/diary_successs","pages/diary/diary_write","pages/diary/diary_write_video","pages/doctor/doctor","pages/doctor/doctor_certificate","pages/doctor/doctor_detail","pages/doctor/doctor_photo","pages/goods/goods_classify","pages/goods/goods_list","pages/goods/goods_detail_comment","pages/goods/goods_detail_comment_detail","pages/goods/goods_detail_notice","pages/goods/goods_detail_problem","pages/goods/goods_detail_problem_detail","pages/goods/goods_detail_video","pages/login/login_phone","pages/login/login","pages/login/login_gather","pages/login/register","pages/message/message","pages/message/message_detail","pages/my/account_number","pages/my/after_sales","pages/my/harves_address","pages/my/my_card","pages/my/my_card_gain","pages/my/my_card_use","pages/my/my_collection","pages/my/my_comment","pages/my/my_opinion","pages/my/my_order","pages/my/my_order_detail","pages/my/my_order_refund","pages/my/my_order_refund_progress","pages/my/my_order_refund_reason","pages/my/my_set","pages/my/my_poster","pages/my/write_comment","pages/other/jump","pages/pay_success/pay_success","pages/poster/poster","pages/search/search","pages/search/search_result","pages/sign/sign"],"window":{"renderingMode":"seperated","navigationStyle":"custom"},"tabBar":{"color":"#7A7E83","selectedColor":"#FA3475","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/index/index","iconPath":"static/images/footer_index.png","selectedIconPath":"static/images/footer_index_select.png","text":"首页"},{"pagePath":"pages/goods/goods_classify","iconPath":"static/images/footer_classify.png","selectedIconPath":"static/images/footer_classify_select.png","text":"分类"},{"pagePath":"pages/doctor/doctor","iconPath":"static/images/footer_doctor.png","selectedIconPath":"static/images/footer_doctor_seclect.png","text":"医生"},{"pagePath":"pages/my/my","iconPath":"static/images/footer_my.png","selectedIconPath":"static/images/footer_my_select.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"华美整呗","compilerVersion":"2.9.8","entryPagePath":"pages/index/open_screen","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/open_screen","meta":{"isQuit":true},"window":{}},{"path":"/pages/login/login_phone","meta":{},"window":{}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/my/add_address","meta":{},"window":{}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/goods/goods_detail","meta":{},"window":{}},{"path":"/pages/agreement/agreement","meta":{},"window":{}},{"path":"/pages/cart/cart","meta":{},"window":{}},{"path":"/pages/confirm_order/confirm_order","meta":{},"window":{}},{"path":"/pages/confirm_order/no_refund","meta":{},"window":{}},{"path":"/pages/check/check_card","meta":{},"window":{}},{"path":"/pages/check/check_order","meta":{},"window":{}},{"path":"/pages/consultation/consultation","meta":{},"window":{}},{"path":"/pages/diary/diary","meta":{},"window":{}},{"path":"/pages/diary/diary_personal","meta":{},"window":{}},{"path":"/pages/diary/diary_video","meta":{},"window":{}},{"path":"/pages/diary/about_list","meta":{},"window":{}},{"path":"/pages/diary/diary_about","meta":{},"window":{}},{"path":"/pages/diary/diary_keep","meta":{},"window":{}},{"path":"/pages/diary/diary_detail","meta":{},"window":{}},{"path":"/pages/diary/diary_successs","meta":{},"window":{}},{"path":"/pages/diary/diary_write","meta":{},"window":{}},{"path":"/pages/diary/diary_write_video","meta":{},"window":{}},{"path":"/pages/doctor/doctor","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/doctor/doctor_certificate","meta":{},"window":{}},{"path":"/pages/doctor/doctor_detail","meta":{},"window":{}},{"path":"/pages/doctor/doctor_photo","meta":{},"window":{}},{"path":"/pages/goods/goods_classify","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/goods/goods_list","meta":{},"window":{}},{"path":"/pages/goods/goods_detail_comment","meta":{},"window":{}},{"path":"/pages/goods/goods_detail_comment_detail","meta":{},"window":{}},{"path":"/pages/goods/goods_detail_notice","meta":{},"window":{}},{"path":"/pages/goods/goods_detail_problem","meta":{},"window":{}},{"path":"/pages/goods/goods_detail_problem_detail","meta":{},"window":{}},{"path":"/pages/goods/goods_detail_video","meta":{},"window":{}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/login/login_gather","meta":{},"window":{}},{"path":"/pages/login/register","meta":{},"window":{}},{"path":"/pages/message/message","meta":{},"window":{}},{"path":"/pages/message/message_detail","meta":{},"window":{}},{"path":"/pages/my/account_number","meta":{},"window":{}},{"path":"/pages/my/after_sales","meta":{},"window":{}},{"path":"/pages/my/harves_address","meta":{},"window":{}},{"path":"/pages/my/my_card","meta":{},"window":{}},{"path":"/pages/my/my_card_gain","meta":{},"window":{}},{"path":"/pages/my/my_card_use","meta":{},"window":{}},{"path":"/pages/my/my_collection","meta":{},"window":{}},{"path":"/pages/my/my_comment","meta":{},"window":{}},{"path":"/pages/my/my_opinion","meta":{},"window":{}},{"path":"/pages/my/my_order","meta":{},"window":{}},{"path":"/pages/my/my_order_detail","meta":{},"window":{}},{"path":"/pages/my/my_order_refund","meta":{},"window":{}},{"path":"/pages/my/my_order_refund_progress","meta":{},"window":{}},{"path":"/pages/my/my_order_refund_reason","meta":{},"window":{}},{"path":"/pages/my/my_set","meta":{},"window":{}},{"path":"/pages/my/my_poster","meta":{},"window":{}},{"path":"/pages/my/write_comment","meta":{},"window":{}},{"path":"/pages/other/jump","meta":{},"window":{}},{"path":"/pages/pay_success/pay_success","meta":{},"window":{}},{"path":"/pages/poster/poster","meta":{},"window":{}},{"path":"/pages/search/search","meta":{},"window":{}},{"path":"/pages/search/search_result","meta":{},"window":{}},{"path":"/pages/sign/sign","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
