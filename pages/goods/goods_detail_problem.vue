<template>
	<view class="goods_detail_problem">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="goods_detail_problem_contnet" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<scroll-view class="problem-content">
				<template>
					<view class="content-details">
						<view class="content-list" >
							<view class="top-ask">
								<view class="ask-title">问</view>
								<view class="ask-contnet">请问植发在哪个季节做比较好？</view>
							</view>
							
							<view class="answer">
								<view class="answer-title">答</view>
								<view class="answer-content">
									您好！植发是不分季节的哟，而且夏季的话从医学角度上讲对于植发回更加好，因为夏天的新陈代谢快，我们的头发生长快最多五排多的就会有.....
								</view>
							</view>
							
							<view class="browse-like-consult">
								<view class="browse" v-if="item.views_num<=9999">{{item.views_num}}浏览量</view>
								<view class="browse" v-else>9999+浏览量</view>
								<view class="like">
									<image src="../../static/images/collect.png" mode="" v-if="item.is_collect == 0" ></image> 
									<image src="../../static/images/checked-collect.png" mode="" v-else ></image> 
									<text>45</text>
								</view>
								<view class="consult">
									<image src="../../static/images/share.png" mode=""></image> <text>提问</text>
								</view>
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
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
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '整呗官方答疑',
				contentList:[]
			}
		},
		onLoad: function(option) {
			let that = this
			that.getMessage()
		},
		onReady() {
			let that = this;
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
		},
		methods: {
			getMessage:function(){
				this.request = this.$request
				let that = this
				let encrypted_id = 'MFFrKzlnYnMzUTV1NGNrRjYvS3I1Zz09'
				let dataInfo = {
					interfaceId : 'qalist',
					encrypted_id : encrypted_id,
					offset:0,
					limit:6
				}
				this.request.uniRequest("qa", dataInfo).then(res => {
					if (res.data.code === 1000) {
						console.log(res.data.data)
				
					} else {
						this.request.showToast(res.data.message);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.goods_detail_problem_contnet{
		background-color: #F0F0F0;
	}
	.content-list{
		padding: 32rpx 20rpx 40rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-bottom: 20rpx;
	}
	.content-list:first-child{
		border-radius: 0 0 24rpx 24rpx;
	}
	.top-ask{
		display: flex;
		align-items: center;
	}
	.ask-title{
		width: 32rpx;
		line-height: 32rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%, #ff6699 100%);
		font-size: 18rpx;
		color: #FFFFFF;	
		border-radius: 18rpx;
		text-align: center;
	}
	.ask-contnet{
		font-size: 28rpx;
		margin-left: 15rpx;
	}
	.answer{
		display: flex;
		padding-top: 40rpx;
		padding-bottom: 23rpx;
		border-bottom: 1rpx solid #F0F0F0;
	}
	.answer-title{
		width: 32rpx;
		height: 32rpx;
		font-size: 18rpx;
		color: #FFFFFF;	
		border-radius: 18rpx;
		text-align: center;
		background-image: linear-gradient(-45deg, #8834fa 0%, #bc66ff 100%);	
	}
	.answer-content{
		font-size: 24rpx;
		line-height: 36rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		margin-left: 15rpx;
		flex: 1;
	}
	.browse-like-consult{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		color: #b2b2b2;
		padding-top: 26rpx;
	}
	.browse-like-consult image{
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}
	.browse-like-consult .like{
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 33.3%;
	}
	.browse-like-consult .consult{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 33.3%;
	}
	.browse{
		color: #fa3475;
		flex: 1;
		text-align: center;
	}
</style>
