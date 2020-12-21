<template>
	<view class="my_set">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="set_content"  :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<view class="set_top">
				<view class="user_info" @tap="no_hint()">
					<view class="left_info"> 用户头像 </view>
					<view class="right_info">
						<image class="head_ico" :src="requestUrl+user_info.head_ico" ></image> 
						<image class="go_img" src="../../static/images/back1.png" ></image>
					</view>
				</view>
				<view class="user_info">
					<view class="left_info"> 用户昵称 </view>
					<view class="right_info">
						<view class="user_name" v-if="user_info.nick_name || user_info.real_name"> {{ user_info.real_name || user_info.nick_name }} </view>
						<view class="user-name" v-else> 姓名 / 昵称 </view>
						<image class="go_img" src="../../static/images/back1.png" ></image>
					</view>
				</view>
				<view class="user_info">
					<view class="left_info"> 手机号码 </view>
					<view class="right_info">
						<view class="user_name" v-if="user_info.tel"> {{ user_info.tel }} </view>
						<image class="go_img" src="../../static/images/back1.png" ></image>
					</view>
				</view>
			</view>
			
			<view class="set_info">
				<navigator class="user_info" @tap="no_hint()">
					<view class="left_info"> 实名认证 </view>
					<view class="right_info">
						<text class="authentication">未认证</text>
						<image class="go_img" src="../../static/images/back1.png" ></image>
					</view>
				</navigator>
				<navigator class="user_info" url="/pages/my/harves_address">
					<view class="left_info"> 收货地址 </view>
					<view class="right_info">
						<text class="address">管理地址</text>
						<image class="go_img" src="../../static/images/back1.png" ></image>
					</view>
				</navigator>
			</view>
			
			<view class="sign_out">
				<button class="sign_out_btn" type="default" > 退出登录 </button>
			</view>
		</view>
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
				barName: 'back', //导航条名称
				title: '设置',
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/return.png',
				requestUrl:'',
				user_info:{}
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.user_info = uni.getStorageSync("userInfo") 
			if(that.user_info.real_name.length==2){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'*')
			}else if(that.user_info.real_name.length==3){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'**')
			}
			else if(that.user_info.real_name.length==4){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'***')
			}
			else if(that.user_info.real_name.length==5){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'****')
			}
			else if(that.user_info.real_name.length==6){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'*****')
			}
			else if(that.user_info.real_name.length==7){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'******')
			}else if(that.user_info.real_name.length==8){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'*******')
			}else if(that.user_info.real_name.length==9){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'********')
			}else if(that.user_info.real_name.length==10){
				that.user_info.real_name = that.user_info.real_name.replace(that.user_info.real_name.substring(1),'*********')
			}
			that.user_info.tel = that.user_info.tel.replace(that.user_info.tel.substring(3,7),'****')
			
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
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
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			no_hint:function(){
				uni.showToast({
					title:'正在开发中...',
					icon:'none'
				})
			}
		}
	}
</script>

<style scoped>
	.set_content{
		background-color: #F0F0F0;
	}
	.set_top{
		background-color: #FFFFFF;
		border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
	}
	.set_info{
		margin-top: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}
	.user_info{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx ;
		border-bottom: 1rpx solid #F0F0F0;
	}
	.right_info{
		display: flex;
		align-items: center;
	}
	.head_ico{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: #C0C0C0;
	}
	.authentication{
		color: #fa3576;
	}
	.go_img{
		width: 32rpx;
		height: 32rpx;
		margin-left: 20rpx;
		transform:rotate(180deg)
	}
	.sign_out_btn{
		height: 80rpx;
		line-height: 80rpx;
		width: 100%;
		border-radius: 40rpx;
		text-align: center;
	}
	.sign_out{
		margin-top: 60rpx;
		padding: 0 20rpx;
	}
	.sign_out_btn::after{
		border: none;
	}
</style>
