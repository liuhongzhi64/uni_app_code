<template>
	<view class="goods_detail_comment">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="top-tab" :style="[{'top':menuBottom+10+'px'}]">
			<view class="top-tab-content">
				<view class="title-good-reputation">
					<view class="title">
						<view class="line"></view>评价
					</view>
					<view class="good-reputation">好评度93.6%</view>
				</view>
				<view class="change-type">
					<view class="type-item" :class="{'active' : tabIndex==index}" @tap='tabtap(index,item.type)' v-for="(item,index) in typeList"
					 :key="index">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="goods_detail_comment_content" :style="[{'padding-top':menuBottom+95+'px','height':height-menuBottom-95+'px'}]">
			<scroll-view class="comment_content">
				<template>
					<view class="content-details">
						<view class="ueser-comment-list">
							
							<view class="top-content">
								<view class="left-content">
									<image class="user-images" src="../../static/images/20.png" mode=""></image>
									<view class="user-name-star">
										<view class="user-name">用户昵称几个字</view>
										<view class="star-list">
											<view class="star-img" v-for="(item,index) in imgs" :key="index" :data-index="item.id">
												<image class="star" :src="item.id>starId?src2:src1"></image>
											</view>
										</view>
									</view>
								</view>
								<view class="top-right" v-if="starId==1||starId==2">较差</view>
								<view class="top-right" v-else-if="starId==3">一般</view>
								<view class="top-right" v-else-if="starId==4">满意</view>
								<view class="top-right" v-else>非常满意</view>
							</view>
							
							<view class="service_list">
								<view class="service_list_content" v-for="(item,index) in label" :key="index">
									{{item}}
								</view>
							</view>
							
							<view class="ueser-comment-details">
								我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，								   我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是
							</view>
							
							<view class="image-video">
								<view class="image_list" v-for="(item,index) in  imgs_list" :key='index'>
									<image class="list-content" :src="item" mode=""></image>
								</view>
								<view class="image_list" v-for="(item,index) in  video_list" :key='index'>
									<video class="list-content" :src="item" controls></video>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '全部评价',
				typeList: [{
						name: '全部',
						type: 1
					},
					{
						name: '最新',
						type: 2
					},
					{
						name: '有视频',
						type: 3
					},
					{
						name: '有图',
						type: 4
					},
					{
						name: '无图',
						type: 5
					},
				],
				tabIndex: 0,
				listType: 0,
				imgs: [{
					id: 1
				}, {
					id: 2
				}, {
					id: 3
				}, {
					id: 4
				}, {
					id: 5
				}],
				src1: 'https://img-blog.csdnimg.cn/20200610110052243.png',
				src2: 'https://img-blog.csdnimg.cn/20200610110053850.png',
				starId: 5,
				label:['医生专业','环境很好','服务很好','效果很棒'],
				imgs_list:['../../static/images/20.png','../../static/images/19.png','../../static/images/20.png']
			}
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
		onLoad: function(option) {
			let that = this
			console.log(option)
		},
		methods: {
			tabtap: function(index = 0, type = 0) {
				let that = this
				that.tabIndex = index;
				that.listType = type //类型 0待评价 1已评价
			}
		}
	}
</script>

<style scoped>
	.top-tab {
		height: 170rpx;
		position: fixed;
		background-color: #FFFFFF;
		z-index: 9;
		width: 100%;
		border-radius: 0 0 24rpx 24rpx;

	}

	.top-tab-content {
		padding: 40rpx 20rpx;
	}

	.title-good-reputation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
	}

	.title {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		font-weight: bolder;
	}

	.title .line {
		width: 4rpx;
		height: 16rpx;
		background-color: #FA3576;
		margin-right: 16rpx;
	}

	.good-reputation {
		font-size: 24rpx;
		color: #fa3475;
	}

	.change-type {
		display: flex;
		align-items: center;
		height: 50rpx;
	}

	.type-item {
		line-height: 50rpx;
		background-color: #F0F0F0;
		font-size: 22rpx;
		padding: 0 35rpx;
		border-radius: 25rpx;
		margin-right: 20rpx;
	}

	.active {
		color: #FA3475;
		font-weight: bolder;
		background-color: #ffe8f0;
		border: 1rpx solid #fa3475;
	}

	.goods_detail_comment_content {
		background-color: #F0F0F0;
	}

	.ueser-comment-list {
		margin-top: 20rpx;
		border-radius: 24rpx;
		background-color: #FFFFFF;
		padding: 20rpx 20rpx 36rpx;
	}

	.top-content {
		margin-right: 12rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
	}

	.left-content {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #999999;
	}

	.user-name-star {
		margin-left: 15rpx;
	}

	.user-images {
		width: 74rpx;
		height: 74rpx;
		border-radius: 37rpx;
	}

	.star-list {
		display: flex;
	}

	.star {
		width: 24rpx;
		height: 24rpx;
		margin: 0 5rpx;
		vertical-align: middle;
	}

	.top-right {
		color: #fa3475;
		font-size: 24rpx;
	}
	.service_list{
		padding: 24rpx 0;
		display: flex;
		align-items: center;
	}
	.service_list_content{
		line-height: 36rpx;
		background-color: #ffe8f0;
		border-radius: 18rpx;	
		font-size: 20rpx;
		margin-right: 20rpx;
		padding: 0 30rpx;
	}
	.ueser-comment-details{
		font-size: 24rpx;
		line-height: 36rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.image-video{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 24rpx 0;
		border-bottom: 1rpx solid #F0F0F0;
	}
	.list-content{
		width: 230rpx;
		height: 230rpx;
		background-color: #acacac;
		border-radius: 16rpx;
		margin-right: 6rpx;
	}
	
</style>
