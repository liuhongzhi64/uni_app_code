<template>
	<view class="specs-content" v-for="(item,index) in spec_value" :data-index='index' :key="index">
		<view class="specs-title">
			{{item.name}}
		</view>
		<view class="specs-cont">
			<view class="li" v-for="(is,sindex) in item.attr"
			 :key="sindex" :class="[spec[index].attr[sindex]==1?'li-hover':spec[index].attr[sindex]==0?'li-gray':'']"
			 @tap="changeSpec(index,sindex)">
				{{is}}
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			barList: Array
		},
		data() {
			return {
				spec_value: {
					name: '项目名称',
					attr: {
						'11': '测试1',
						'12': '测试2',
						'13': '测试3',
						'14': '测试4',
						'15': '测试5',
						'16': '测试6',
						'17': '测试7',
					}
				}
				spec: {
					"1": {
						name: '项目名称',
						attr: {
							'11': 0,
							'12': 0,
							'13': 0,
							'14': 0,
							'15': 0,
							'16': 0,
							'17': 1,
						}
					}
				}
			}
		},
		methods: {
			// uni.showModal({
			// 	title:'提示',
			// 	content:'订单生成成功,请立即支付',
			// 	confirmText:'立即支付',
			// 	confirmColor:'#fa3475',
			// 	cancelColor:'#333333',
			// 	cancelText:'取消支付',
			// 	success:function(res){
			// 		if(res.confirm){
			// 			// console.log('用户点击立即支付');
						
			// 		}else if(res.cancel){
			// 			console.log('用户点击取消支付');
			// 		}
			// 	}
			// })
			// 支付
			//支付地址 https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?
			//prepay_id=wx201533539114693757369db06e08930000&package=896493193
			// let prepay_id = ''
			// let packages = ''
			// let urls = url.match(/prepay_id(\S*)&/g)[0]
			// packages = url.match(/package(\S*)/)[0]
			// packages = url.match(/=(\S*)/)[0]
			// packages = packages.substr(1)
			// prepay_id = urls.substring(0,urls.length-1)
			// prepay_id = prepay_id.match(/=(\S*)/)[0]
			// prepay_id = prepay_id.substr(1)
			// let pay_info = {
			// 	appid:that.request.globalData.appid, //  'wx8068a8a4b6c8a39f'
			// 	package:packages,
			// 	timeStamp: String(Date.now()),
			// 	prepayid:prepay_id,
			// 	signType: 'MD5',
			// }
			// console.log(pay_info)
			// uni.requestPayment({
			// 	provider:'wxpay',
			// 	orderInfo: JSON.stringify(pay_info),
			// 	success: function (res) {
			// 	    console.log('success:' + JSON.stringify(res));
			// 	},
			// 	fail: function (err) {
			// 	    console.log('fail:' + JSON.stringify(err));
			// 	}
			// })
			
			// 调用第三方程序打开指定的URL
			// plus.runtime.openURL(data.mweb_url,function(res){
			// 	console.log(res)
			// })
			// if(that.provider = 'baidu'){
				
			// }
			// 百度的订单信息 除去payResultUrl为非必填，其他都为必填
			// let orderInfo = {
			// 	dealId: dealId,
			// 	//跳转百度收银台支付必带参数之一，是百度收银台的财务结算凭证，
			// 	//与账号绑定的结算协议一一对应，每笔交易将结算到 dealId 对应的协议主体。
			// 	appKey:appKey,
			// 	//支付能力开通后分配的支付 appKey ，用以表示应用身份的唯一 ID 
			// 	//在应用审核通过后进行分配，一经分配后不会发生更改，来唯一确定一个应用
			// 	totalAmount:totalAmount,//订单金额，单位为人民币分
			// 	tpOrderId:tpOrderId,//商户平台自己记录的订单 ID ，当支付状态发生变化时，会通过此订单 ID 通知商户
			// 	dealTitle:dealTitle,//订单的名称
			// 	signFieldsRange:1,
			// 	//用于区分验签字段范围。0：原验签字段 appKey+dealId+tpOrderId ；
			// 	//1：包含 totalAmount 的验签，验签字段包括 appKey+dealId+tpOrderId+totalAmount ，固定值为 1
			// 	rsaSign:rsaSign,//对appKey+dealId+totalAmount+tpOrderId进行 RSA 加密后的签名，防止订单被伪造
			// 	bizInfo:bizInfo,//订单详细信息，需要是一个可解析为 JSON Object 的字符串 
			// 	payResultUrl:payResultUrl //Web 态小程序支付成功后跳回的页面路径，例如：'/pages/payResult/payResult'  默认当前页面
			// }
			// 支付
			// uni.requestPayment({
			//     provider: 'alipay',  // alipay App 支付; wxpay 微信支付
			//     orderInfo: orderInfo, //微信、支付宝订单数据
			// 	timeStamp: String(Date.now()), //当前的时间。 微信小程序必填
			// 	// nonceStr: 'A1B2C3D4E5',  //随机字符串，长度为32个字符以下。微信小程序必填
			// 	// package: 'prepay_id=wx20180101abcdefg', //统一下单接口返回的 prepay_id 参数值 微信小程序必填
			// 	// signType: 'MD5', //签名算法，暂支持 MD5 微信小程序必填
			// 	// paySign: '', //签名 微信小程序必填
			// 	service: 3/4,//固定值：1（拉起小程序收银台）开发者如果不希望使用字节跳动小程序收银台，service设置为3/4时，可以直接拉起微信/支付宝进行支付：service=3： 微信API支付，不拉起小程序收银台；service=4： 支付宝API支付，不拉起小程序收银台。
			// 	_debug:1, //仅限调试用，上线前去掉该参数。_debug=1时，微信支付期间可以看到中间报错信息，方便调试
			//     success: function (res) {
			//         console.log('success:' + JSON.stringify(res));
			// 		uni.showToast({
			// 			title:"支付成功",
			// 			icon:'none',
			// 			duration:2000
			// 		})
			//     },
			//     fail: function (err) {
			//         console.log('fail:' + JSON.stringify(err));
			// 		uni.showToast({
			// 			title:"支付失败",
			// 			icon:'none',
			// 			duration:2000
			// 		})
			//     }
			// })
			
			// 微信支付
			// uni.requestPayment({
			//     provider: 'wxpay',
			//     timeStamp: String(Date.now()),
			//     nonceStr: 'A1B2C3D4E5',
			//     package: 'prepay_id=wx20180101abcdefg',
			//     signType: 'MD5',
			//     paySign: '',
			//     success: function (res) {
			//         console.log('success:' + JSON.stringify(res));
			//     },
			//     fail: function (err) {
			//         console.log('fail:' + JSON.stringify(err));
			//     }
			// });
		}
	}
</script>

<style scoped>

</style>
