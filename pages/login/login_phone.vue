<template>
	<view class="login_phone">
		<view class="login" :style="[{'height':height+'px'}]">
			<view class="login-top" :style="[{'padding-top':menuTop+'px','line-height':menuHeight+'px'}]">
				<view class="back-title">
					<view class="back" @tap='goBack'>
						<image src="../../static/images/return.png" mode=""></image>
					</view>
					<view class="title">
						<view class="title-name" :style="[{'padding-right':80+'rpx'}]"> 手机号登录 </view>
					</view>
				</view>
			</view>
			<view class="login-input" :style="'height:'+height +'rpx'">
				<view class="login-message">
					<view class="phone">
						<input class="phone-input" type="number" @blur="phoneInput" placeholder="请输入手机号" maxlength="11" />
					</view>
					<view class="phone-hint" v-if="!phoneValueState"> *请输入手机号 / 请输入正确的手机号 </view>

					<view class="graphic-code">
						<input class="phone-input" @blur="graphicInput" placeholder="请输入图形码" maxlength="4" />
						<image class="graphic" :src="imageCode" @tap="getImageCode"></image>
					</view>
					<view class="phone-hint" v-if="!imageCodeValueState">图形码错误</view>
					<view class="verification-code">
						<input class="phone-input" @blur="verificationInput" placeholder="请输入验证码" maxlength="6" />
						<button class="verification" type="default" plain="true" @tap='getPhoneCode'>发送请求</button>
					</view>
					<view class="phone-hint" v-if="!phoneCodeValueState">请输入验证码 / 验证码错误</view>

					<button class="go-login" type="default" plain="true" form-type='submit' @tap="submit">登录</button>
				</view>

				<view class="no-have-code-content">
					<text class="no-have-code" @tap='consultation'>收不到验证码？</text>
				</view>
			</view>

		</view>
		<view class="agreement" @tap='agreement'> 登录代表您同意<text>华美整呗用户服务协议</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				imageCode: "", // 图形验证码
				imageCodeKey: "", // 图形码key值
				phoneValue: "", // 手机号输入值
				phoneValueState: true, // 手机号验证状态
				imageCodeValue: "", // 图形码输入值
				imageCodeValueState: true, // 图形码验证状态
				phoneCodeValue: "", // 短信验证码输入值
				phoneCodeValueState: true, // 短信验证码验证状态
				thisPlatform:'' //运行环境
			}
		},
		onShow: function() {
			this.getImageCode();
		},
		onReady() {
			let that = this;
			// 判定运行平台
			let platform = ''
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					// console.log('运行Android上')
					platform = 'android'
					this.thisPlatform = platform
					break;
				case 'ios':
					// console.log('运行iOS上')
					platform = 'ios'
					this.thisPlatform = platform
					break;
				default:
					// console.log('运行在开发者工具上')
					platform = 'applet'
					this.thisPlatform = platform
					break;
			}
			if(platform=='applet'){
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						that.height = res.screenHeight
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			}
			else{
				that.height = 812
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
			// console.log(this.thisPlatform)			
		},
		methods: {
			// 返回
			goBack: function() {
				this.isPhoneLogin = !this.isPhoneLogin
				uni.navigateBack({
					delta: 1
				});
			},
			phoneInput: function(event) {
				this.phoneValue = event.target.value
			},
			// 获取、刷新图形码
			getImageCode: function() {
				this.request = this.$request
				const that = this;
				let dataInfo = {
					interfaceId: "captcha"
				}
				this.request.uniRequest("login", dataInfo).then(res => {
					if (res.data.code === 1000) {
						that.imageCodeKey = res.data.data.captcha_key;
						that.imageCode = res.data.data.url
					} else {
						this.request.showToast(res.data.message);
					}
				})
			},
			graphicInput: function(event) {
				this.imageCodeValue = event.target.value
			},

			// 获取短信验证码
			getPhoneCode: function() {
				this.request = this.$request
				const that = this;
				if (!that.check()) return false;
				let dataInfo = {
					interfaceId: "mobilecode",
					type: "webverifi",
					mobile: that.phoneValue,
					captcha: that.imageCodeValue,
					captcha_key: that.imageCodeKey
				}
				this.request.uniRequest("login", dataInfo).then(res => {
					that.getImageCode();
					if (res.data.code === 1000) {
						this.request.showToast("发送成功");
					}
				})
			},

			verificationInput: function(event) {
				this.phoneCodeValue = event.target.value
			},
			agreement: function() {
				uni.navigateTo({
					url: '/pages/agreement/agreement'
				});
			},
			// 验证
			check: function(type) {
				const that = this;
				if (!/(^1[3|4|5|6|7|8|9][0-9]{9}$)/.test(that.phoneValue)) {
					that.phoneValueState = false,
						that.imageCodeValueState = true,
						that.phoneCodeValueState = true
					return false;
				} else if (that.imageCodeValue === "") {
					that.phoneValueState = true,
						that.imageCodeValueState = false,
						that.phoneCodeValueState = true
					return false;
				}
				// type=1则验证短信验证码，默认不验证
				else if (type === "1" && that.phoneCodeValue === "") {
					that.phoneValueState = true,
						that.imageCodeValueState = true,
						that.phoneCodeValueState = false
					return false;
				} else {
					that.phoneValueState = true,
						that.imageCodeValueState = true,
						that.phoneCodeValueState = true
					return true;
				}
			},
			// 登录
			submit: function(e) {
				this.request = this.$request
				const that = this;
				if (!that.check(e.currentTarget.dataset.type)) return false;
				
				let dataInfo ={
					interfaceId:'commonlogin',
					tel:that.phoneValue,
					mobile_code:that.phoneCodeValue,
					archives_id:'',
					f_unique_id:''					
				}
				this.request.uniRequest("login", dataInfo).then(res => {
					that.getImageCode();
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						console.log(data)
						uni.setStorageSync("token", data.token)
						uni.setStorageSync("userInfo", data)
						this.request.showToast("登录成功")
						uni.switchTab({
							url: `/pages/index/index`
						});
					}
				})
								
				// 判定运行环境是小程序还是安卓IOS
				// if(that.thisPlatform=='applet'){
				// 	// 判定sessionKey是否有值
				// 	if (uni.getStorageSync("sessionKey") !== "") {
				// 		// 检查登录状态是否过期
				// 		uni.checkSession({
				// 			success() {
				// 				let dataInfo = {
				// 					interfaceId: "phoneregister",
				// 					tel: that.phoneValue,
				// 					mobile_code: that.phoneCodeValue,
				// 					type: 1,
				// 					code_session: uni.getStorageSync("sessionKey"),
				// 					channelSource: uni.getStorageSync("userInfo").channelSource
				// 				}
				// 				console.log(dataInfo)
				// 				// this.request.uniRequest("login", dataInfo).then(res => {
				// 				// 	that.getImageCode();
				// 				// 	if (res.data.code === 1000) {
				// 				// 		let data = res.data.data;
				// 				// 		uni.setStorageSync("consultation", data.consultation);
				// 				// 		uni.setStorageSync("token", data.token);
				// 				// 		uni.setStorageSync("userInfo", data);
				// 				// 		this.request.showToast("登录成功");
				// 				// 	}
				// 				// })
				// 			},
				// 			fail() {
				// 				that.getSessionKey();
				// 			}
				// 		})
				// 	} else {
				// 		that.getSessionKey();
				// 	}
				// }else{
				// 	let dataInfo ={
				// 		interfaceId:'commonlogin',
				// 		tel:that.phoneValue,
				// 		mobile_code:that.phoneCodeValue,
				// 		archives_id:'',
				// 		f_unique_id:''					
				// 	}
				// }
							
			},
			consultation:function(){
				uni.navigateTo({
					url: `/pages/consultation/consultation`,
				})
			},
			// 更新sessionKey
			getSessionKey: function() {
				const that = this;
				uni.login({
					success: function(res) {
						if (res.code) {
							let data = {
								interfaceId: "sessionkey",
								code_session: res.code
							}						
							that.request.uniRequest("login", data).then(res => {
								console.log(res,111999999)
								if (res.data.code === 1000) {
									console.log(res.data)
									// uni.setStorageSync("sessionKey", res.data.data.session_key);
									// that.submitUserInfo(e, type);
								}
							})
						}
					}
				})
			},
		}
	}
</script>

<style scoped>
	.login{
		background-color: #F5F5F5;
	}
	.login .login-top {
		color: #FFFFFF;
		background-image: linear-gradient(90deg, #ff6699 0%, #fa3475 100%);
		text-align: center;
		font-size: 40rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.back-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 38rpx;
		width: 100%;
	}

	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
	}

	.back image {
		width: 36rpx;
		height: 36rpx;
	}

	.title {
		flex: 1;
	}

	.login-input {
		padding: 300rpx 45rpx 100rpx;
		background: #f6f6f6 url(https://xcx.hmzixin.com/upload/images/3.0/login_phone_bg.jpg?v=0) no-repeat;
		background-size: 100%;
	}

	.login-message {
		background-color: #FFFFFF;
		padding: 72rpx 45rpx;
		margin-top: -20rpx;
		border-radius: 24rpx;
		box-shadow: 0rpx 0rpx 32rpx 0rpx rgba(101, 101, 101, 0.16);
	}

	.phone {
		border-bottom: 2rpx solid #e0e0e0;
		padding: 20rpx 0;
	}

	.phone input {
		padding-left: 10rpx;
	}

	.phone-hint {
		font-size: 20rpx;
		line-height: 34rpx;
		color: #de0a0a;
		padding: 15rpx 8rpx;
	}

	.graphic-code,
	.verification-code {
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.graphic-code {
		margin-top: 30rpx;
	}

	.graphic-code input,
	.verification-code input {
		margin-right: 30rpx;
		padding-bottom: 15rpx;
		border-bottom: 2rpx solid #e0e0e0;
	}

	.graphic {
		width: 200rpx;
		height: 70rpx;
		line-height: 70rpx;
		background-color: #EEEEEE;
		text-align: center;
		border: 0;
	}

	.verification-code {
		margin-top: 40rpx;
	}

	.verification {
		width: 200rpx;
		height: 70rpx;
		border-radius: 35rpx;
		line-height: 70rpx;
		font-size: 24rpx;
		color: #fa3475;
		border: solid 2rpx #fa3475;
		text-align: center;
	}

	.go-login {
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 70rpx;
		text-align: center;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%);
		border-radius: 40rpx;
		font-size: 28rpx;
		color: #ffffff;
		border: none !important;
	}

	.no-have-code-content {
		display: flex;
		flex-direction: row-reverse;
		margin-top: 40rpx;
		padding-right: 35rpx;
	}

	.no-have-code {
		font-size: 24rpx;
		color: #fa3475;
	}

	.agreement {
		position: fixed;
		width: 100%;
		text-align: center;
		bottom: 44rpx;
		font-size: 24rpx;
	}

	.agreement text {
		color: #fa3475;
	}

	.advertising-images {
		padding-top: 233rpx;
		padding-bottom: 264rpx;
		/* background-color: #FFFFFF; */
		display: flex;
		justify-content: center;
	}

	.advertising-images image {
		width: 168rpx;
		height: 168rpx;
		box-shadow: 0rpx 0rpx 9rpx 0rpx rgba(108, 108, 108, 0.26);
		-webkit-box-reflect: below 0px -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.3) 0%, transparent 40%, transparent 100%);
	}
</style>
