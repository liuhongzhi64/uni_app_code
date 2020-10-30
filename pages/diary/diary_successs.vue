<template>
	<view class="diary_success">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="diary_success_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<view class="diary_success_images">
				<image src="../../static/images/cartBg.png" mode=""></image>
			</view>
			<view class="diary_success_hint">
				<view class="diary_success_text">发布成功!</view>
				<view class="diary_success_hint_content">等待管理员审核中</view>
			</view>
			
			<view class="go-index-my-diary">
				<view class="go-index">
					<button class="go-index-botton" type="default" plain="true" @tap='goToIndex'> 返回首页 </button>
				</view>
				<view class="go-my-diary">
					<button class="go-my-diary-botton" type="default" plain="true" @tap='myDiary'> 我的日记 </button>
				</view>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '发布成功',

			}
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			// 判定运行平台
			let platform = ''
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					platform = 'android'
					break;
				case 'ios':
					platform = 'ios'
					break;
				default:
					platform = 'applet'
					break;
			}
			if(platform=='applet'){
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
			}
			else{
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			goToIndex:function(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			},
			myDiary:function(){
				uni.navigateTo({
				    url: '/pages/diary/diary_personal'
				});
			}
		}
	}
</script>

<style scoped>
	.diary_success_content{
		background-color: #F6F6F6;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.diary_success_images{
		padding-top: 93rpx;
	}
	.diary_success_images ,.diary_success_images image{
		width: 335rpx;
		height: 303rpx;	
	}
	.diary_success_hint{
		font-size: 34rpx;
		line-height: 40rpx;
		color: #111111;
		margin-top: 30rpx;
		font-weight: bolder;
		width: 100%;
		text-align: center;
	}
	.diary_success_hint_content{
		font-size: 26rpx;
		color: #9e9e9e;
		line-height: 40rpx;
		width: 100%;
		text-align: center;
		margin-top: 15rpx;
	}
	.go-index-my-diary{
		margin-top: 56rpx;
		display: flex;
	}
	.go-index{
		margin-right: 72rpx;
	}
	.go-index,.go-my-diary{
		width: 220rpx;
		height: 80rpx;	
	}
	.go-index-botton{
		width: 220rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-image: linear-gradient(-45deg,  #8834fa 0%,  #bc66ff 100%);
		border-radius: 40rpx;	
		border: 0;
		font-size: 28rpx;
		color: #ffffff;
	}
	.go-my-diary-botton{
		width: 220rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-image: linear-gradient(90deg, #ff6699 0%,  #fa3475 100%);
		border-radius: 40rpx;	
		border: 0;
		font-size: 28rpx;
		color: #ffffff;
	}
</style>
