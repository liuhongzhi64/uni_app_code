<template>
	<view class="search">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<!-- 搜索栏 -->
		<view class="search-input" :style="[{'top':menuBottom+10+'px'}]">
			<view class="search-input-text">
				<view class="left-input">
					<icon type="search" size="18" /> <input class="search-content" @input="onKeyInput" placeholder-style='color: #b2b2b2;'
					 placeholder="请输入关键词搜索" /></view>
				<view class="right-text">确定</view>
			</view>
		</view>
	
		<scroll-view class="search-all-content" scroll-y :style="[{'padding-top':menuBottom+50+'px','height':height-menuBottom-50+'px'}]">
			<template>		
				<view class="search-contents">
					<view class="search-swiper">
						<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" autoplay :interval='intervalTime'
						 :duration="durationTime" circular>
							<swiper-item v-for="(i,index) in swiperList" :key="index">
								<view class="top-swiper-item">
									<image :src="i.url" mode=""></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
					
					<!-- 热门搜索 -->
					<view class="hot-search">
						<view class="title">热门搜索</view>
						<view class="hot-search-list">
							<view class="list-item" 
							 @tap='changeHotSearch(item,index)' 
							 :class="{changeStyle:colorNum==index}" 
							 v-for="(item,index) in hotSearchList" :key="index">
								{{item}}
							</view>
						</view>						
					</view>
					
					<!-- 搜索历史 -->
					<view class="search-history">
						<view class="title-empty">
							<view class="title">搜索历史</view>
							<view class="empty-search" @tap='emptySearch'>清空</view>
						</view>
						
						<view class="search-history-list">
							<view class="list-item"
							 @tap='changeSearchHistory(item,index)' 
							 :class="{changeStyle:searchHistoryNum==index}" 
							 v-for="(item,index) in searchHistoryList" :key="index">
								{{item}}
							</view>
						</view>
					</view>
					
					<!-- 热搜榜 -->
					<view class="hot-search-announcement">
						<view class="title">热搜榜</view>
						<view class="hot-search-announcement-list">
							<view class="announcement-list-item" v-for="(item,index) in announcementList" :key='index'>
								<view class="left-ranking-content">
									<view class="ranking" :style="[{'color':index+1<=3?'#fa3475':'#111111'}]">{{index+1}}</view>
									<view class="item-content">{{item.content}}</view>
								</view>
								<view class="rise-and-fall-number">
									<view class="rise-and-fall">{{item.state}}</view>
									<view class="search-number" :style="[{'color':item.state == 'rise'?'#fa3475':'#111111'}]">{{item.number}}</view>
								</view>
							</view>
						</view>
					</view>
										
				</view>	
			</template>
		</scroll-view>			
	
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
				title: '搜索',
				searchContent: '', //默认搜索内容
				intervalTime: 3000, //自动切换时间间隔
				durationTime: 1000, //	滑动动画时长
				swiperList: [
					{
						id: 0,
						url: '../../static/images/0.png',
					},
					{
						id: 1,
						url: '../../static/images/22.png',
					},
					{
						id: 2,
						url: '../../static/images/0.png',
					},
					{
						id: 3,
						url: '../../static/images/22.png',
					},
				],
				hotSearchList:[
					'玻尿酸','双眼皮','脂肪填充','吸脂','水光针','鼻综合','瘦脸针','隆鼻','综合美胸','草莓妆'
				],
				colorNum:-1,
				searchHistoryList:['玻尿酸','双眼皮','脂肪填充','吸脂','水光针','鼻综合','瘦脸针','隆鼻','综合美胸','草莓妆'],
				searchHistoryNum:-1,
				requestUrl:'',
				announcementList:[
					{content:'拒绝大黄牙，分享我的牙齿美白经历',state:'rise',number:1597},
					{content:'后台配置内容，可控制',state:'rise',number:1597},
					{content:'拒绝大黄牙，分享我的牙齿美白经历',state:'',number:1200},
					{content:'后台配置内容，可控制',state:'fall',number:990},
					{content:'拒绝大黄牙，分享我的牙齿美白经历',state:'fall',number:496},
				]
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			that.searchContent = option.search
			that.getDetails()
			that.advertising()
		},
		onReady() {
			let that = this;
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
						that.height = res.screenHeight
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
						that.menuPaddingRight = res.windowWidth - menu.right
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
			// 获取搜索关键词
			getDetails:function(){
				let that = this
				let dataInfo = {
					interfaceId:'indexhotwords'
				}
				that.request.uniRequest("search", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.hotSearchList = data
					}
					else{
						// this.request.showToast('暂时没有数据')
						console.log('没有数据')
					}
				})
			},
			
			// 获取广告
			advertising:function(){
				let that = this
				let dataInfo = {
					interfaceId:'getadvertising',
					location:1
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						console.log(data)
					}
				})
			},
			
			onKeyInput: function(event) {
			   this.inputValue = event.target.value
			},
			changeHotSearch:function(item,index){
				this.colorNum = index
				console.log(item)
				uni.navigateTo({
					url: `/pages/search/search_result?search=${item}`,
				})
			},
			changeSearchHistory:function(item,index){
				this.searchHistoryNum = index
				console.log(item)
				uni.navigateTo({
					url: `/pages/search/search_result?search=${item}`,
				})
			},
			// 清空历史
			emptySearch:function(){
				this.searchHistoryList = []
			}
			
		}
	}
</script>

<style scoped>
	.search-input {
		background-color: #F6F6F6;
		height: 88rpx;
		position: fixed;
		z-index: 9;
		width: 100%;
	}

	.search-input-text {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 20rpx;
	}

	.left-input {
		width: 620rpx;
		height: 56rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		border: solid 1rpx #e6e6ea;
		background-color: #FFFFFF;
		line-height: 56rpx;
		display: flex;
		align-items: center;
		padding-left: 24rpx;
	}

	.left-input icon {
		height: 40rpx;
	}

	.search-content {
		font-size: 26rpx;
		height: 56rpx;
		line-height: 56rpx;
		/* text-indent: 55rpx; */
	}

	.right-text {
		font-size: 26rpx;
	}
	.search-contents{
		background-color: #F6F6F6;
		padding-bottom: 120rpx;
	}
	
	.search-swiper{
		height: 220rpx;
		padding-top: 10rpx;
	}
	.top-swiper {
		height: 220rpx;
	}
	
	.top-swiper-item image {
		height: 220rpx;
		width: 100%;
	}
	
	.hot-search,.search-history{
		padding: 40rpx 40rpx 14rpx;
		background-color: #FFFFFF;
		border-radius: 0rpx 0rpx 24rpx 24rpx;
	}
	.search-history{
		margin-top: 20rpx;
		border-radius: 24rpx;
	}
	.hot-search .title,.search-history .title{
		font-size: 32rpx;
		color: #000000;
		margin-bottom: 32rpx;
	}
	.hot-search-list,.search-history-list{
		display: flex;
		flex-wrap: wrap;
	}
	.title-empty{
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.empty-search{
		font-size: 24rpx;
		color: #fa3475;
	}
	.list-item{
		width: 150rpx;
		height: 56rpx;
		background-color: #f0f0f0;
		border-radius: 28rpx;
		text-align: center;
		line-height: 56rpx;
		font-size: 24rpx;
		color: #505050;
		margin-bottom:26rpx ;
		margin-right: 17rpx;
		overflow: hidden;
	}
	.changeStyle{
		color: #fa3475;
	}
	
	.hot-search-announcement .title{
		font-size: 32rpx;
		color: #000000;
		margin-bottom: 15rpx;
	}
	
	.hot-search-announcement{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 40rpx;
		border-radius: 24rpx;
	}
	
	.announcement-list-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom:15rpx;
	}
	.left-ranking-content{
		display: flex;
		font-size: 24rpx;
	}
	.item-content{
		margin-left: 30rpx;
	}
	.rise-and-fall-number{
		display: flex;
		font-size: 28rpx;
	}
	
</style>
