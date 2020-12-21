<template>
	<view class="diary_keep"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		
		<view class="diary_write-content" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<view class="top-content">
				<view class="title">日记形式</view>
				<view class="diary-classfiy">
					<radio-group @change="radioChange">
						<label class="change-video">
							<view class="chang_label"></view>
							<radio class="change-type" value="video" color='#fa3576' style="transform:scale(1.2)"  />
							<view class="video-text"> 视频日记 </view>
						</label>
						<label class="change-text-photo">
							<view class="chang_label"></view>
							<radio class="change-type" value="photo" color='#fa3576' style="transform:scale(1.2)" />
							<view class="photo-text"> 图文日记 </view>
						</label>
					</radio-group>
				</view>
		
				<view class="next-step">
					<button class="next-botton" type="default" plain="true" @tap='nextStep'> 下一步 </button>
				</view>
			</view>
			<view class="hint">
				有疑问？ <text>立即咨询</text>
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
				changeClassfiy: ''
			}
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
			radioChange: function (e){
				let values = e.detail.value;
				this.changeClassfiy = values
				// console.log(values)
			},
			nextStep: function() {
				if(!this.changeClassfiy){
					
					uni.showToast({
					    title: '请选择攻略',
					    duration: 1000
					});
				}else{
					let that = this
					let type = this.changeClassfiy
					uni.navigateTo({
						url: `/pages/diary/diary_write?type=${type}`,
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	.diary_write-content {
		background-color: #F0F0F0;
	}

	.top-content {
		background-color: #FFFFFF;
		border-radius: 0rpx 0rpx 24rpx 24rpx;
		padding: 40rpx 40rpx 60rpx;
	}

	.title {
		font-size: 32rpx;
		color: #111111;
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid #F0F0F0;
	}


	.diary-classfiy {
		padding: 50rpx;
	}
	.diary-classfiy  radio-group{
		display: flex;
		justify-content: space-between;	
		
	}
	.change-video, .change-text-photo{
		position: relative;
		text-align: center;
	}

	.diary-classfiy .chang_label{
		width: 240rpx;
		height: 260rpx;
		border-radius: 16rpx;
		margin-bottom: 25rpx;
		background-color: #F0F0F0;
	}
	.change-type{
		position: absolute;
		top: 16rpx;
		right: 10rpx;
	}

	.next-botton {
		width: 670rpx;
		height: 88rpx;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%);
		border-radius: 44rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		border: none;
		margin-top: 50rpx;
	}

	.hint {
		padding-left: 40rpx;
		padding-top: 32rpx;
		font-size: 24rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.hint {
		color: #fa3475;
	}
</style>

