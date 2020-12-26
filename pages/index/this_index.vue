<template>
	<view class="this_index">
		<view class="index_top_fixed" :style="[{'padding-top':menu_top+'px','background-color':index_info.background.up,'padding-bottom':10+'px'}]">
			<view class="this_top_left" :style="[{'height':menu_height+'px','padding-bottom':10+'px'}]">
				<navigator class="top_img_nav" :url="'/pages'+index_info.top_advertising.content.page+'?id='+index_info.top_advertising.content.page_id">
					<image class="top_bar_img" :src="requestUrl+index_info.top_advertising.content.img" :style="[{'height':menu_height+'px'}]"></image>
				</navigator>
				<navigator class="top_info" url="/pages/cart/cart">
					<image class="top_image" src="/static/images/cart.png"></image>
					<text>购物车</text>
				</navigator>
				<navigator class="top_info" url="/pages/message/message">
					<image class="top_image" src="/static/images/consulting.png"></image>
					<text>消息</text>
				</navigator>
			</view>
			<navigator class="top_input" url="/pages/search/search" :style="[{'line-height':menu_height+'px','border-radius':menu_height/2+'px','margin-right':this_width-menu_width-menu_left+'px','width':search_width+'px'}]">
				<image class="search-icon" src="/static/images/search_icon.png"></image>
				<text class="search_hint">请输入关键字...</text>
			</navigator>
			<view class="top_calssify" style="margin-top: 10px;">
				<view class="top_calssify_info">
					<scroll-view class="calssify_info" scroll-x="true">
						<view class="calssify_item" >
							<navigator class="item_info" v-for="(item,index) in index_info.top_navigation" :key='index'
							 :url="'/pages'+item.page+'?id='+item.page_id">
								{{ item.title}}
							</navigator>
						</view>
					</scroll-view>
				</view>
				<navigator class="goods_classify" url="/pages/goods/goods_classify" open-type="switchTab">
					<image class="classify_img" src="/static/images/barcClassify.png" ></image> 分类
				</navigator>
			</view>
		</view>
		
		<view class="index_top_info" :style="[{'padding-top':menu_bottom*2+20+'px','background-color':index_info.background.up}]">
			<view class="top_swiper">
				<swiper class="banner_swiper" indicator-dots indicator-active-color="#ffffff" autoplay interval="5000" duration="3000" circular>
					<swiper-item class="banner_swiper_item" v-for="(item,index) in index_info.banner.content" :key="index">
						<view class="banner_info">
							<image class="banner_img" :src="requestUrl+item.img" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="certification">
				<scroll-view class="certifications_content" scroll-x="true">
					<view class="honor_list_info">
						<view class="honor_list" v-for="(item,index) in index_info.honor_list" :key="index">
							<image class="honor_image" src="/static/images/1.png" ></image>
							<view :style="[{'color':index_info.top_font_color}]">{{item}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="this_index_icon_list">
				<swiper class="icon_list" @change="change_swiper_line">
					<swiper-item class="icon_list_info" v-for="(list,index) in index_info.icon_list" :key="index">
						<navigator class="icon_list_item" v-for="(item,k) in list" :key="k"  :url="'/pages'+item.page">
							<image class="icon_img" :src="requestUrl+item.img" mode="widthFix"></image>
							<view class="icon_title"> {{item.title}} </view>
						</navigator>
					</swiper-item>
				</swiper>
				<swiperline class="swiper_line" :current="swiper_line" :list="index_info.icon_list"></swiperline>
			</view>
		</view>
		<!-- 中部广告位 -->
		<view class="all_advertising" v-for="(list,index) in index_info.centre_advertising.content" :key='index'>
			<view class="tile_advertising" v-for="(item,k) in list" :key='k'>
				<view class="advertising">
					<image class="advertisImg" :src="requestUrl+item.img" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import swiperline from "../../components/swperDot.vue";
	export default {
		components: {
			swiperline,
		},
		data() {
			return {
				menu_width: 0,
				menu_top: 0,
				menu_height: 0,
				menu_left: 0,
				menu_bottom: 0,
				this_height: 0,
				this_width: 0,
				search_width: 315,
				requestUrl: '',
				index_info: {},
				swiper_line:0
			}
		},
		onLoad: function(options) {
			const that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
		},
		onShow: function() {
			let that = this
			that.get_index_info()
		},
		onReady() {
			let that = this;
			that.this_height = uni.getSystemInfoSync().screenHeight;
			that.this_width = uni.getSystemInfoSync().screenWidth
			// 判定运行平台
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menu_width = menu.width
						that.menu_top = menu.top
						that.menu_height = menu.height
						that.menu_left = menu.left
						that.menu_bottom = menu.bottom
						that.search_width = that.menu_left + that.menu_width - (that.this_width - that.menu_width - that.menu_left)
					}
				})
			} else if (platform == 'APP') {
				that.menu_width = 90
				that.menu_top = 40
				that.menu_bottom = 70
				that.menu_height = 30
				that.menu_left = 280
				that.search_width = that.menu_left + that.menu_width - (that.this_width - that.menu_width - that.menu_left)
			}
		},
		// 下拉刷新
		onPullDownRefresh: function() {
			let that = this
			success: {
				title: '刷新成功'
			};
			setTimeout(function() {
				// 停止下拉刷新
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			get_index_info: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'index'
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						data.icon_list = that.group(data.icon_list, 10)
						that.index_info = data

					}
				})
			},
			// 分割数组
			group: function(array, number) {
				let index = 0;
				let newArray = [];
				while (index < array.length) {
					newArray.push(array.slice(index, index += number));
				}
				return newArray;
			},
			change_swiper_line: function(e) {
				let that = this
				that.swiper_line = e.detail.current;
			},
		}
	}
</script>

<style scoped>
	.index_top_fixed {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		color: #FFFFFF;
		width: 100%;
		font-size: 24rpx;

	}

	.this_top_left {
		display: flex;
		align-items: center;
	}

	.top_img_nav {
		padding-left: 20rpx;
	}

	.top_bar_img {
		width: 280rpx;
	}

	.top_info {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-left: 40rpx;
	}

	.top_image {
		width: 46rpx;
		height: 46rpx;
	}

	.top_input {
		background-color: #FFFFFF;
		margin-left: 20rpx;
		position: relative;
		font-size: 24rpx;
		color: #999999;
	}

	.search-icon {
		position: absolute;
		left: 20rpx;
		width: 40rpx;
		height: 40rpx;
		top: 10rpx;
	}

	.search_hint {
		padding-left: 80rpx;
	}
	
	.top_calssify{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		padding: 0 20rpx;
	}
	.top_calssify_info{
		overflow: hidden;
		white-space: nowrap;
	}
	.calssify_info{
		width: 100%;
	}
	.calssify_item{
		width: 100%;
		display: flex;
	}
	.item_info{
		padding-right: 34rpx ;
	}
	
	.goods_classify {
		width: 186rpx;
		display: flex;
		justify-content: space-between;
		text-align: center;
		align-items: center;
	}
	
	.classify_img {
		width: 26rpx;
		height: 26rpx;
	}
	.banner_swiper{
		height: 280rpx;
	}
	.banner_swiper_item{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.banner_info{
		width: 80%;
	}
	.banner_img{
		width: 100%;
		border-radius: 16rpx;
	}
	
	.certification {
		font-size: 24rpx;
		line-height: 60rpx;
		padding: 0 20rpx;
	}
	
	.certifications_content{
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
		
	}
	.honor_list_info{
		display: flex;
		align-items: center;
	}
	.honor_list{
		display: inline-block;
		padding-left: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.honor_list:first-child{
		padding-left: 0;
	}
	
	.honor_image {
		width: 18rpx;
		height: 18rpx;
		margin-right: 10rpx;
	}
	
	.this_index_icon_list {
		position: relative;
		padding: 0 20rpx;
	}
	.icon_list{
		height: 350rpx;
	}
	.icon_list_info {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.icon_list_item {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24rpx;
		color: #FFFFFF;
		padding: 20rpx 22rpx;
	}
	.icon_img{
		width: 80rpx;
		height: 80rpx;
	}
	.icon_title{
		padding-top: 10rpx;
	}
	.swiper_line{
		position: absolute;
		width: 100%;
		bottom: 10rpx;
		display: flex;
		justify-content: center;
		margin-left: -30rpx;
	}
</style>
