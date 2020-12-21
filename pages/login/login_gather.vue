<template>
	<view class="login_gather">
		<!-- 微信登录 -->
		<view class="weichat-login" :style="[{'height':height+'px'}]">
			<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
			 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>


			<view class="login_gather_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
				<view class="advertising-images">
					<image src="https://mytest.hmzixin.com/upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg" mode=""></image>
				</view>

				<view class="go-weichat-login-btn">
					<button class="go-weichat-login" type="default" plain="true" open-type="getUserInfo" @getuserinfo='getUserInfo'>一键登录</button>
				</view>

				<view class="phone-login-and-register" @tap='goToPhoneLogin'> 手机号码登录/注册 </view>
			</view>

		</view>

		<view class="agreement" @tap='agreement'> 登录代表您同意<text>华美整呗用户服务协议</text></view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar,
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '欢迎登录',
				requestUrl:''
			}
		},
		onLoad: function(options) {
			const that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			// 判定运行平台
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			} else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			// 返回
			goBack: function() {
				// console.log('back', 1111)
				this.isPhoneLogin = !this.isPhoneLogin
				uni.navigateBack({
					delta: 1
				});
			},
			getUserInfo: function(e) {
				const type = e.detail.userInfo.gender;
				const that = this;
				// console.log(type)
				if (uni.getStorageSync("sessionKey") !== "") {
					uni.checkSession({
						success() {
							that.submitUserInfo(e, type);
						},
						fail() {
							that.getSessionKey(e, type);
						}
					})
				} else {
					that.getSessionKey(e, type);
				}
			},
			// 用户授权数据提交
			submitUserInfo: function(e, type) {
				// console.log(e, type)
				const that = this;
				let dataInfo = {};
				if (type === 0) {
					dataInfo = {
						interfaceId: "register",
						encryptedData: encodeURIComponent(e.detail.encryptedData),
						iv: e.detail.iv,
						type: 1,
						code_session: uni.getStorageSync("sessionKey"),
						channelSource: uni.getStorageSync("userInfo").channelSource
					}
				}
				if (type === 1) {
					console.log(123)
					dataInfo = {
						interfaceId: "userinfo",
						encryptedData: encodeURIComponent(e.detail.encryptedData),
						iv: e.detail.iv,
						type: 1,
						code_session: uni.getStorageSync("sessionKey"),
						nickName: e.detail.userInfo.nickName,
						avatarUrl: e.detail.userInfo.avatarUrl,
						gender: e.detail.userInfo.gender
					}
				}
				console.log(dataInfo)
				that.request.uniRequest("login", dataInfo).then(res => {
					if (res.data.code === 1000) {
						let data = res.data.data;
						uni.setStorageSync("consultation", data.consultation);
						uni.setStorageSync("token", data.token);
						uni.setStorageSync("userInfo", data);
						that.onShow();
						if (type === "0") {
							that.isCheckPhone = true
						}
					} else if (res.data.code === 2007 || res.data.code === 2008) {
						uni.setStorageSync("sessionKey", "");
						that.request.showModal("网络错误，稍后再试！");
					} else if (res.data.code === 2013) {
						that.accountTel = res.data.data.tel;
						
							that.accountPopup = true,
							that.accountTips = true,
							that.accountTelCompile = res.data.data.tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
					
					}
				})
			},
			// 更新sessionKey
			getSessionKey: function(e, type) {
				const that = this;
				uni.login({
					success: function(res) {
						if (res.code) {
							// console.log(res.code)
							let data = {
								interfaceId: "sessionkey",
								code_session: res.code
							}						
							that.request.uniRequest("login", data).then(res => {
								console.log(res,111)
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
			goToPhoneLogin: function() {
				uni.navigateTo({
					url: '/pages/login/login_phone'
				});
			},
			agreement:function(){
				uni.navigateTo({
					url: '/pages/agreement/agreement'
				});
			}
		}
	}
</script>

<style scoped>
	.weichat-login {
		display: flex;
		flex-direction: column;
		background-color: #F6F6F6;
	}


	.weichat-login .login-top {
		text-align: center;
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

	.go-weichat-login-btn {
		padding: 0 30rpx 44rpx;
	}

	.go-weichat-login {
		width: 690rpx;
		height: 88rpx;
		line-height: 88rpx;
		background-color: #09bb07;
		border-radius: 44rpx;
		border: solid 1rpx #029400;
		color: #ffffff;
		font-size: 32rpx;
	}

	.phone-login-and-register {
		font-size: 24rpx;
		text-align: center;
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
</style>
