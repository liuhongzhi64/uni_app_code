<template>
	<view class="search">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<!-- 搜索栏 -->
		<view class="search-input" :style="[{'top':menuBottom+10+'px'}]">
			<view class="search-input-text">
				<view class="left-input">
					<image class="search-icon" src="/static/images/search_icon.png"></image>
					<input class="search-content" @input="onKeyInput" v-model="defaultContent" placeholder-style='color: #b2b2b2;'
					 :placeholder="searchContent||'请输入关键词搜索'" />
				</view>
				<view class="right-text" @tap='goToResult'>确定</view>
			</view>
		</view>
		<scroll-view class="search-all-content" scroll-y :style="[{'padding-top':menuBottom+50+'px'}]">
			<template>
				<view class="search-contents" :style="[{'height':height-menuBottom-122+'px'}]">
					<view class="search-swiper" v-if="advertising_img.content.length>0">
						<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" autoplay interval='6000' duration="3000"
						 circular>
							<swiper-item v-for="(item,index) in advertising_img.content" :key="index">
								<navigator class="top-swiper-item" :url="'/pages'+item.page+'?id='+item.page_id" open-type="switchTab">
									<image class="image" :src="requestUrl+item.img" mode="widthFix"></image>
								</navigator>
							</swiper-item>
						</swiper>
					</view>
					<!-- 热门搜索 -->
					<view class="hot-search" v-if="hotSearchList.length>0">
						<view class="title">热门搜索</view>
						<view class="hot-search-list">
							<view class="list-item" @tap='changeHotSearch(item,index)'
							 :class="{changeStyle:colorNum==index}"
							 v-for="(item,index) in hotSearchList"
							 :key="index">
								{{item}}
							</view>
						</view>
					</view>
					<!-- 搜索历史 -->
					<view class="search-history" v-if="searchHistoryList.length>0">
						<view class="title-empty">
							<view class="title">搜索历史</view>
							<view class="empty-search" @tap='emptySearch'>清空</view>
						</view>
						<view class="search-history-list">
							<view class="list-item" @tap='changeSearchHistory(item,index)' :class="{changeStyle:searchHistoryNum==index}"
							 v-for="(item,index) in searchHistoryList" :key="index">
								{{item}}
							</view>
						</view>
					</view>
					<!-- 热搜榜 -->
					<view class="hot-search-announcement" v-if="announcementList.length>0">
						<view class="title">热搜榜</view>
						<view class="hot-search-announcement-list">
							<view class="announcement-list-item" v-for="(item,index) in announcementList" :key='index'>
								<view class="left-ranking-content">
									<view class="ranking" :style="[{'color':index+1<=3?'#fa3475':'#111111'}]">{{index+1}}</view>
									<view class="item-content">{{item.content}}</view>
								</view>
								<view class="rise-and-fall-number">
									<view class="rise-and-fall">{{item.state}}</view>
									<view class="search-number" :style="[{'color':item.state == '↑'?'#fa3475':'#111111'}]">{{item.number}}</view>
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
				backImage: '/static/images/back2.png',
				title: '搜索',
				searchContent: '', //默认搜索内容
				defaultContent: '',
				advertising_img: {
					content: []
				},
				hotSearchList: [],
				colorNum: -1,
				searchHistoryList: [],
				searchHistoryNum: -1,
				requestUrl: '',
				announcementList: []
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			that.searchContent = option.search
			if (uni.getStorageSync("search_list")) {
				that.searchHistoryList = uni.getStorageSync("search_list")
			}
			that.getDetails()
			that.advertising()
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
				that.menuTop = 20
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 50
			}
		},
		methods: {
			// 获取搜索关键词
			getDetails: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'indexhotwords'
				}
				that.request.uniRequest("search", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.hotSearchList = data
					}
				})
			},
			// 获取广告
			advertising: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'getadvertising',
					location: 1
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.advertising_img = data
					}
				})
			},
			onKeyInput: function(event) {
				let that = this
				that.inputValue = event.target.value
				that.defaultContent = that.inputValue
			},
			// 点击确定
			goToResult: function() {
				let that = this
				if (that.inputValue) {
					uni.navigateTo({
						url: `/pages/search/search_result?search=${that.inputValue}`,
					})
					if (that.inputValue) {
						that.searchHistoryList.unshift(that.inputValue)
						that.searchHistoryList = that.setArr(that.searchHistoryList)
						uni.setStorageSync("search_list", that.searchHistoryList)
						that.defaultContent = ''
					}
				}else{
					uni.showToast({
						title:'请输入关键词',
						icon:'none'
					})
				}

			},

			changeHotSearch: function(item, index) {
				let that = this
				this.colorNum = index
				uni.navigateTo({
					url: `/pages/search/search_result?search=${item}`,
				})
				that.searchHistoryList.unshift(item)
				that.searchHistoryList = that.setArr(that.searchHistoryList)
				uni.setStorageSync("search_list", that.searchHistoryList)
			},
			changeSearchHistory: function(item, index) {
				this.searchHistoryNum = index
				uni.navigateTo({
					url: `/pages/search/search_result?search=${item}`,
				})
			},
			// 清空历史
			emptySearch: function() {
				let that = this
				this.searchHistoryList = []
				uni.setStorageSync("search_list", that.searchHistoryList)
			},
			// 数组去重
			setArr: function(arr) {
				//新建一个空数组
				let newArr = [];
				for (let i = 0; i < arr.length; i++) {
					//遍历传入的数组，查找传入数组的值第一次出现的下标
					if (arr.indexOf(arr[i]) === i) {
						//push传入数组的一次出现的数字
						newArr.push(arr[i]);
					}
				}
				//返回新的数组
				return newArr;
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
		width: 85%;
		height: 56rpx;
		background-color: #ffffff;
		border-radius: 28rpx;
		border: solid 1rpx #e6e6ea;
		background-color: #FFFFFF;
		line-height: 56rpx;
		display: flex;
		align-items: center;
		padding-left: 24rpx;
		position: relative;
	}

	.search-icon {
		position: absolute;
		left: 20rpx;
		width: 32rpx;
		height: 32rpx;
		top: 12rpx;
	}

	.search-content {
		font-size: 28rpx;
		height: 56rpx;
		line-height: 56rpx;
		padding-left: 30rpx;
	}

	.right-text {
		font-size: 26rpx;
	}

	.search-all-content {
		background-color: #F6F6F6;
	}

	.search-contents {
		padding-bottom: 120rpx;
	}

	.search-swiper {
		height: 220rpx;
		padding-top: 10rpx;
	}

	.top-swiper {
		height: 220rpx;
	}

	.top-swiper-item .image {
		width: 100%;
	}

	.hot-search,
	.search-history {
		padding: 40rpx 40rpx 14rpx;
		background-color: #FFFFFF;
		border-radius: 0rpx 0rpx 24rpx 24rpx;
	}

	.search-history {
		margin-top: 20rpx;
		border-radius: 24rpx;
	}

	.hot-search .title,
	.search-history .title {
		font-size: 32rpx;
		color: #000000;
		margin-bottom: 32rpx;
	}

	.hot-search-list,
	.search-history-list {
		display: flex;
		flex-wrap: wrap;
	}

	.title-empty {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.empty-search {
		font-size: 24rpx;
		color: #fa3475;
	}

	.list-item {
		width: 150rpx;
		height: 56rpx;
		background-color: #f0f0f0;
		border-radius: 28rpx;
		text-align: center;
		line-height: 56rpx;
		font-size: 24rpx;
		color: #505050;
		margin-bottom: 26rpx;
		margin-right: 17rpx;
		overflow: hidden;
	}

	.changeStyle {
		color: #fa3475;
	}

	.hot-search-announcement .title {
		font-size: 32rpx;
		color: #000000;
		margin-bottom: 15rpx;
	}

	.hot-search-announcement {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 40rpx;
		border-radius: 24rpx;
	}

	.announcement-list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15rpx;
	}

	.left-ranking-content {
		display: flex;
		font-size: 24rpx;
	}

	.item-content {
		margin-left: 30rpx;
	}

	.rise-and-fall-number {
		display: flex;
		font-size: 28rpx;
		color: #fa3475;
	}
</style>
