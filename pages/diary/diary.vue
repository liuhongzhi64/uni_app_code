<template>
	<view class="diary">
		<view class="diary-top-bar">
			<view class="bar-name" :style="[{'height':menuHeight+'px','margin-top':menuTop+'px','border-radius':menuHeight/2+'px','line-height':menuHeight+'px','padding-right':menuWidth+20+'px','padding-bottom':10+'px'}]">
				<view class="top-navigation-bars" v-for="(item,index) in navigationList" :key='index' :class="{checked :btnnum == index}"
				 @tap="change(index)"> {{ item }}
					<view :class="{checkedBar :btnnum == index}"> </view>
				</view>
			</view>
		</view>
		<view class="content-all-bar" :style="[{'top':menuBottom+10+'px'}]">
			<view class="content-bar">
				<scroll-view class="content-bar-items" scroll-x="true">
					<view class="top-content">
						<view class="top-content-list" v-for="(i,k) in topTabList" :key="k" @tap="changeContentBar(k)">
							<view class="list-items">
								<view class="item-image">
									<image :src="requestUrl+i.icon" mode=""></image>
								</view>
								<view class="item-name">{{i.name}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="content" :style="[{'padding-top':menuBottom+85+'px','min-height':height-menuBottom-130+'px'}]">
			<view class="content-list">
				<scroll-view scroll-y>
					<template>
						<!-- 主体内容 -->
						<view class="detail-content">
							<!-- 主体内容 -->
							<diary :diaryList="contentList" :requestUrl='requestUrl' @collect_diary='collect_diary' @cancel_like='cancel_like' >
							</diary>
						</view>
					</template>
				</scroll-view>
			</view>
		</view>		
		<view class="write_diary" @tap='writeDiary'>
			 写日记
		</view>		
	</view>
</template>

<script>
	import diary from '../../components/diary.vue';
	export default {
		components: {
			diary
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				btnnum: 0,
				navigationList: ['全部', '直播', '日记', '视频'],
				topTabList: [],
				contentList: [],
				requestUrl: '',
				offset: 0,//开始数据下标
				limit: 5,//条数
			}
		},
		onLoad: function() {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.getDiaryClassfiy()
			that.getDiaryList()
			that.change()			
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			// 判定运行平台
			let platform = ''
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					// console.log('运行Android上')
					platform = 'android'
					break;
				case 'ios':
					// console.log('运行iOS上')
					platform = 'ios'
					break;
				default:
					// console.log('运行在开发者工具上')
					platform = 'applet'
					break;
			}
			if(platform=='applet'){
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						pageHeight = res.screenHeight
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
		onReachBottom: function () {
			var that = this;
			that.offset += 5;
			that.getDiaryList()
		},
		methods: {
			change: function(index = 2) {
				this.btnnum = index
			},
			changeContentBar: function(k) {
				console.log(k)
			},
			// 获取日记分类
			getDiaryClassfiy: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'category'
				}
				that.request.uniRequest("diary", dataInfo).then(res => {
					if (res.data.code == 1000) {
						that.topTabList = res.data.data
						// console.log(that.topTabList)
					}
				})
			},
			// 获取推荐日记列表
			getDiaryList: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'recommenddiarylist',
					offset: that.offset,
					limit: that.limit
				}
				that.request.uniRequest("diary", dataInfo).then(res => {
					if (res.data.code == 1000) {
						let data = res.data.data
						if(data.length == 0){
							that.request.showToast('没有更多了')
						}
						that.contentList = that.contentList.concat(data)
						// console.log(that.contentList)
					}
				})
			},
			// 收藏
			collect_diary:function(id,index){
				let that = this
				let data = {
					interfaceId: 'collectdiary',
					diary_id :id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.contentList[index].is_collect = 1
						that.contentList[index].collect_num +=1
						uni.showToast({
							title: '已收藏',
							duration: 1000
						})				
					}
				})
			},
			// 取消收藏
			cancel_like:function(id,index){
				let that = this
				let data = {
					interfaceId:'cancelcollectdiary',
					diary_id:id.toString()
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.contentList[index].is_collect = 0
						that.contentList[index].collect_num -=1
						uni.showToast({
							title: '已取消收藏',
							duration: 1000
						})				
					}
				})
			},
			// 写日记
			writeDiary:function(){
				uni.navigateTo({
					url: `/pages/diary/diary_write`,
				})
			},
			// 点击日记进入详情页
			diaryDetail:function(id){
				let that = this
				let detail_id = id
				uni.navigateTo({
					url: `/pages/diary/diary_detail?id=${detail_id}`,
				})
			}
		}
	}
</script>

<style scoped>
	.diary-top-bar {
		background-color: #111111;
		color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
	}

	.bar-name {
		display: flex;
		justify-content: space-around;
		color: #FFFFFF;
	}

	.top-navigation-bars {
		font-size: 32rpx;
		font-weight: normal;
		font-stretch: normal;
	}

	.checked {
		font-size: 40rpx;
		font-weight: normal;
		font-stretch: normal;
	}

	.checkedBar {
		width: 0;
		height: 0;
		border-width: 15rpx;
		border-style: solid;
		border-color: transparent #FFFFFF transparent transparent;
		transform: rotate(90deg);
		margin-top: -5px;
		margin-left: 20rpx;
		margin-bottom: 0;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.content {
		background-color: #F6F6F6;
	}

	.content-all-bar {
		width: 100%;
		position: fixed;
		background-color: #FFFFFF;
		left: 0;
		z-index: 9;
		border-radius: 0 0 24rpx 24rpx;
	}

	.content-bar {
		white-space: nowrap;
	}

	.content-bar-items {
		width: 100%;
		height: 155rpx;
	}

	.top-content {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.top-content-list {
		height: 100%;
		text-align: center;
		padding: 0 45rpx;
		font-size: 24rpx;
		color: #4f4f4f;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.list-items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item-image {
		margin-bottom: 20rpx;
	}

	.item-image,
	.item-image image {
		width: 64rpx;
		height: 48rpx;
		border: 1rpx solid #EEEEEE;
	}

	.subject-content {
		background-color: #F6F6F6;
	}
	.detail-content{
		display: flex;
		justify-content: space-between;
		padding: 33rpx 20rpx;
		width: 710rpx;
	}
	.left-content,.right-content{
		display: flex;
		flex-direction: column;
	}
	
	
	.subject-content-list{
		background-color: #FFFFFF;
		border-radius: 16rpx;
		margin-bottom: 10rpx;
		width: 350rpx;
		position: relative;
		display: flex;
		flex-direction: column;
		height: auto;
	}
	
	.diary-image{
		width: 350rpx;
		/* height: 350rpx; */
		border-radius: 16rpx 16rpx 0 0;
		background-color: #EEEEEE;
	}
	.diary-title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		line-height: 34rpx;
		padding: 0 20rpx;
		color: #111111;
	}
	
	.diary-label{
		padding: 0 20rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.label-name{
		line-height: 26rpx;
		font-size: 16rpx;
		padding: 0 14rpx;
		background-color: #d3d3d3;
		color: #4f4f4f;
		margin-right: 10rpx;
	}
	.label{
		position: absolute;
		right: 0;
		top: 410rpx;
		line-height: 40rpx;
		padding: 0 10rpx;
		background-color: #fa3475;
		border-radius: 16rpx 0rpx 0rpx 0rpx;
		opacity: 0.8;
		color: #FFFFFF;
		font-size: 24rpx;
	}
	.category_name-doctor_name{
		display: flex;
		padding: 15rpx 20rpx;
	}
	.category_name,.doctor_name{
		line-height: 26rpx;
		background-color: #d3d3d3;
		border-radius: 4rpx;
		font-size: 16rpx;
		/* width: 80rpx; */
		padding: 0 15rpx;
		text-align: center;
		color: #4f4f4f;
		margin-right: 10rpx;
	}
	.goods_name{
		padding: 0 20rpx ;
		color: #999999;
		font-size: 20rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		/* margin-top: 15rpx; */
	}
	.head_ico-nick_name-collect_num{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24rpx 20rpx;
	}
	.head_ico-nick_name{
		display: flex;
		align-items: center;
	}
	.head_ico{
		width: 48rpx;
		height: 48rpx;
		border-radius: 24rpx;
		border: 1rpx solid red;
		margin-right: 10rpx;
	}
	.nick_name{
		font-size: 20rpx;
		color: #111111;
	}
	.collect_num{
		font-size: 30rpx;
		color: #fc4783;		
		display: flex;
		align-items: center;
	}
	.is_no_collect{
		color: #B2B2B2;
		display: flex;
		align-items: center;
		font-size: 30rpx;
	}
	.is_no_collect .like{
		background-color: #d0d0d0;
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
	}
	.collect_num .like{
		width: 42rpx;
		height: 42rpx;
		border-radius: 21rpx;
		background-image: linear-gradient(0deg,  #fa3475 0%,  #ff6699 100%),  linear-gradient( #f56fb4, #f56fb4);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
	}
	.like-image{
		width: 24rpx;
		height: 24rpx;
	}
	
	/* 写日记 */
	.write_diary{
		position: fixed;
		right: 30rpx;
		top: 50%;
		width: 92rpx;
		line-height: 110rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		z-index: 9;
		background-color: #E0619D;
		text-align: center;
		opacity: 0.8;
		border-radius: 16rpx;
	}
</style>
