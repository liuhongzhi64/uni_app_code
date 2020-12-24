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
					<view class="good-reputation">好评度{{rate}}%</view>
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
						<view class="ueser-comment-list" v-for="(item,index) in contentList" :key='index' @tap='detailComment(item.id)'>
							
							<view class="top-content">
								<view class="left-content">
									<image class="user-images" :src="requestUrl+item.head_ico" mode=""></image>
									<view class="user-name-star">
										<view class="user-name" v-if="item.is_anonymous==0">{{item.nick_name}}</view>
										<view class="user-name" v-else>匿名用户</view>
										<view class="star-list">
											<view class="star-img" v-for="(i,k) in imgs" :key="k" >
												<image class="star" :src="i.id>item.point?'':src1"></image>
											</view>
										</view>
									</view>
								</view>
								<view class="top-right" v-if="item.point==1||item.point==2">较差</view>
								<view class="top-right" v-else-if="item.point==3">一般</view>
								<view class="top-right" v-else-if="item.point==4">满意</view>
								<view class="top-right" v-else>非常满意</view>
							</view>
							
							<view class="service_list">
								<view class="service_list_content" v-for="(item,index) in item.label" :key="index">
									{{item}}
								</view>
							</view>
							
							<view class="ueser-comment-details"> {{item.contents}} </view>
							
							<view class="image-video">
								<view class="image_list" v-for="(item,index) in  item.imgs_list" :key='index'>
									<!-- 后期使用item.imgs_list  item.video_list-->
									<image class="list-content" :src="requestUrl+item" mode=""></image>
								</view>
								<view class="image_list" v-for="(item,index) in  item.video_list" :key='index'>
									<image class="list-content" :src="requestUrl+item" mode=""></image>
									<image class="video_img" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" ></image>
								</view>
							</view>
							
							<view class="browse-like-consult">
								<view class="browse" v-if="item.views_num<=9999">{{item.views_num}}浏览量</view>
								<view class="browse" v-else>9999+浏览量</view>
								<view class="like">
									<image src="https://xcx.hmzixin.com/upload/images/3.0/collect.png" mode="" v-if="item.is_collect == 0" ></image> 
									<image src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png" mode="" v-else ></image> 
									<text :class="item.is_collect == 0?'':'collect_hover'">{{item.collect_num}}</text>
								</view>
								<view class="consult">
									<image src="../../static/images/share.png" mode=""></image> <text>提问</text>
								</view>
							</view>
							
						</view>	
						<view class="no-content" v-if="contentList.length==0">
							<image src="../../static/images/cartBg.png" mode=""></image>
							<view class="hint">喵~ 暂无相关内容</view>
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
				backImage: '/static/images/back2.png',
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
				listType: 1,
				contentList:[],
				requestUrl:'',
				offset:0,
				rate:'',//评分
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
				imgs_list:[],
				encrypted_id:''
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
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
				that.menuLeft = 278
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			that.encrypted_id = option.encrypted_id
			that.getMessage()
		},
		methods: {
			tabtap: function(index = 0, type = 0) {
				let that = this
				that.tabIndex = index;
				that.listType = type //类型 1全部 2最新 3有视频 4有图 5无图
				that.getMessage()
			},
			getMessage:function(){
				let that = this
				// let encrypted_id = 'MFFrKzlnYnMzUTV1NGNrRjYvS3I1Zz09'
				let dataInfo = {
					interfaceId : 'goodscommentlist',
					encrypted_id : that.encrypted_id,
					type:that.listType,
					offset:that.offset,
					limit:6
				}
				this.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code === 1000) {
						let data = res.data.data
						that.contentList = data.list
						that.rate = data.rate
					} else {
						this.request.showToast(res.data.message);
					}
				})
			},
			detailComment:function(id){
				let conmentId = id
				uni.navigateTo({
					url: `/pages/goods/goods_detail_comment_detail?id=${conmentId}`,
				})
			},
			
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
	.image_list{
		position: relative;
	}
	.list-content{
		width: 230rpx;
		height: 230rpx;
		background-color: #acacac;
		border-radius: 16rpx;
		margin-right: 6rpx;
	}
	.video_img{
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		top: 85rpx;
		left: 85rpx;
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
	.no-content{
		margin-top: 140rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.no-content image{
		width: 525rpx;
		height: 370rpx;
	}
	.no-content .hint{
		color: #9e9e9e;
		font-size: 28rpx;
		margin-top: 56rpx;
	}
	.collect_hover{
		color: #9F55FF;	
	}
</style>
