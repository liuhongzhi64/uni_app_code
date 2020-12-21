<template>
	<view class="diary_write_video">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="diary_write_video-content" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<view class="top-video">
				<image src="https://mytest.hmzixin.com/upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg" mode=""></image>
			</view>
			<view class="top-content">
				<view class="top-title"><input class="top-title-input" @input="onKeyInput" placeholder="可以写标题" /></view>
				<view class="diary-content">
					<textarea auto-height @blur='bindText' placeholder-style="color:#999999" placeholder="请写下您的日记正文"/>
				</view>
			</view>
			
			<view class="relevance">
				<view class="relevance-porduct" @tap='goToPorduct'>
					<view class="relevance-title">选择对应的商品</view>
					<view class="go-to-content"> > </view>
				</view>
				<view class="relevance-doctor" @tap='goToDoctor'>
					<view class="relevance-title">选择对应的医生</view>
					<view class="go-to-content"> > </view>
				</view>
			</view>
			
			<view class="footer">
				<view class="next-step">
					<button class="issue-botton" type="default" plain="true" @tap='issue'> 发布 </button>
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
				title: '写日记',
				inputValue: '',
			}
		},

		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			// 判定运行平台
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
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			},
			bindText:function(e){
				console.log(e.detail.value)
			},
			goToPorduct:function(){
				console.log('相应商品')
			},
			goToDoctor:function(){
				console.log("相应医生")
			},
			issue:function(){
				uni.navigateTo({
					url: `/pages/diary/diary_successs`,
				})
			}
		}
	}
</script>

<style scoped>
	.diary_write_video-content {
		background-color: #F0F0F0;
		padding-bottom: 160rpx;
	}

	.top-video {
		width: 100%;
	}

	.top-video image {
		width: 100%;
		height: 640rpx;
	}

	.top-content {
		background-color: #FFFFFF;
		padding-left: 40rpx;
		padding-top: 44rpx;
		padding-bottom: 40rpx;
		border-radius: 0 0 24rpx 24rpx;
		min-height: 300rpx;
	}
	.top-title{
		padding: 44rpx 0;
		border-bottom: 1rpx solid #F0F0F0;
	}
	.diary-content{
		padding-top: 32rpx;
		font-size: 24rpx;
		color: #999999;
	}
	.diary-content textarea{
		width: 100%;
	}
	.relevance-porduct,.relevance-doctor{
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		padding: 35rpx 40rpx;
		font-size: 24rpx;
		color: #111111;
		border-radius: 24rpx;
	}
	.go-to-content{
		font-size: 40rpx;
	}
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 9;
		width: 100%;
	}
	.next-step {
		padding: 40rpx;
	}
	.issue-botton {
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		border: none;
		text-align: center;
		line-height: 80rpx;
	}
</style>
