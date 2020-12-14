<template>
	<view class="search_result">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<!-- 搜索栏 -->
		<view class="search-input" :style="[{'top':menuBottom+10+'px'}]">
			<view class="search-input-text">
				<view class="left-input">
					<image class="search-icon" src="../../static/images/search_icon.png"></image>
					<input class="search-content" @input="onKeyInput" placeholder-style='color: #b2b2b2;' :placeholder="searchContent" />
				</view>
				<view class="right-text">确定</view>
			</view>
		</view>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+60+'px'}]">
			<view class="top-swiper-content" :class="{'active' : tabIndex==index}" v-for="(item,index) in tabBars" :key='index'
			 @tap='tabtap(index,item.type)'>{{item.name}}
				<view class="swiper-tab-line" v-if="tabIndex==index"></view>
			</view>
		</view>
		<view class="search-input_content" :style="[{'padding-top':menuBottom+100+'px'}]">
			<view class="result_content">
				<goodsShow :borderRadius=24 :requestUrl='requestUrl' :width=350 :porductList='content_list' v-if='items.type==0'>
				</goodsShow>
				<doctor :doctorList="content_list" :requestUrl="requestUrl" :paddingLR='paddingLR' @collectLike='collectLike'
				 @cancelLike='cancelLike' v-else-if="items.type==1">
				</doctor>
				<diary :diaryList="content_list" :requestUrl='requestUrl' v-else-if="items.type==2"></diary>
				<porduct :width=350 :porductList='content_list' v-else-if="item.type==3"></porduct>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import goodsShow from "../../components/goodsShow.vue";
	import diary from '../../components/diary.vue';
	import doctor from '../../components/doctorShow.vue'
	export default {
		components: {
			topBar,
			goodsShow,
			diary,
			doctor
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
				title: '搜索结果页',
				tabBars: [{
						name: '商品',
						id: 'porduct',
						type: 0
					},
					{
						name: '医生',
						id: 'doctor',
						type: 1,
					},
					{
						name: '买家秀',
						id: 'diary',
						type: 2
					},
					{
						name: '视频',
						id: 'video',
						type: 3
					},

				],

				tabIndex: 0, // 选中的顶部的导航的索引,类型
				inputValue: '',
				content_list: [],
				offset: 0,
				searchContent: ''
			}
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.searchContent = option.search
			that.get_search()
		},
		onReady() {
			let that = this;
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
			if (platform == 'applet') {
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
			} else {
				that.height = uni.getSystemInfoSync().screenHeight;
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			get_search:function(){
				let that = this
				if( that.tabIndex +1 == 1 ){
					let dataInfo = {
						interfaceId: 'goodssearch',
						search: that.searchContent,
						offset: that.offset,
						limit: 6
					}
					that.request.uniRequest("search", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.content_list = data
						}
					})
				}else if( that.tabIndex +1 == 2 ){
					let dataInfo = {
						interfaceId: 'doctorsearch',
						search: that.searchContent,
						offset: that.offset,
						limit: 6
					}
					that.request.uniRequest("search", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							console.log(data)
						}
					})
				}else if( that.tabIndex +1 == 3 ){
					let dataInfo = {
						interfaceId: 'diarysearch',
						search: that.searchContent,
						offset: that.offset,
						limit: 6
					}
					that.request.uniRequest("search", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							console.log(data)
						}
					})
				}else if( that.tabIndex +1 == 4 ){
					let dataInfo = {
						interfaceId: 'videosearch',
						search: that.searchContent,
						offset: that.offset,
						limit: 6
					}
					that.request.uniRequest("search", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							console.log(data)
						}
					})
				}
				
			},
			onKeyInput: function(event) {
				let that = this
				that.inputValue = event.target.value
				that.searchContent = that.inputValue
				that.get_search()
			},
			tabtap: function(index, type) {
				let that = this
				that.tabIndex = index
				that.get_search()
			},
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
		font-size: 26rpx;
		height: 56rpx;
		line-height: 56rpx;
		padding-left: 30rpx;
	}

	.right-text {
		font-size: 26rpx;
	}

	.top-swiper-tab {
		position: fixed;
		height: 80rpx;
		background-color: #FFFFFF;
		z-index: 9;
		width: 100%;
		border-radius: 0 0 24rpx 24rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top-swiper-content {
		width: 50%;
		line-height: 80rpx;
		text-align: center;
		font-size: 24rpx;
		position: relative;
	}

	.active {
		color: #FA3475;
		font-size: 28rpx;
		font-weight: bolder;
	}

	.swiper-tab-line {
		height: 6rpx;
		background-color: #FA3475;
		width: 50rpx;
		border-radius: 3rpx;
		position: absolute;
		bottom: 5rpx;
		left: 68rpx;
	}

	.search-input_items {
		background-color: #F6F6F6;
	}

	.result_content {
		padding: 0 20rpx;
	}
</style>
