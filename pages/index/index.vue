<template>
	<view class="this_index" >
		<view class="index_top_fixed" :style="[{'padding-top':menu_top+'px','background-color':index_info.background.up,'padding-bottom':10+'px'}]">
			<view class="this_top_left" :style="[{'height':menu_height+'px','padding-bottom':10+'px'}]">
				<navigator class="top_img_nav"
				 :url="'/pages'+index_info.top_advertising.content.page+'?id='+index_info.top_advertising.content.page_id" v-show="!show_go_top">
					<image class="top_bar_img" :src="requestUrl+index_info.top_advertising.content.img" :style="[{'height':menu_height+'px'}]"></image>
				</navigator>
				<view class="this_top_info" :style="[{'right':this_width-menu_left+10+'px','top':menu_top-8+'px'}]">
					<navigator class="top_info" url="/pages/cart/cart">
						<image class="top_image" src="/static/images/cart.png"></image>
						<text>购物车</text>
					</navigator>
					<navigator class="top_info" url="/pages/message/message">
						<image class="top_image" src="/static/images/consulting.png"></image>
						<text>消息</text>
					</navigator>
				</view>
			</view>
			<!-- #ifdef MP -->
			<navigator url="/pages/search/search" :class="show_go_top?'fixed_inupt':'top_input'"
			 :style="[{'line-height':menu_height+'px','border-radius':menu_height/2+'px','margin-right':this_width-menu_width-menu_left+'px','width':show_go_top?'140px':search_width+'px','top':show_go_top?menu_top+'px':''}]">
				<image class="search-icon" src="/static/images/search_icon.png"></image>
				<text class="search_hint">请输入关键字...</text>
			</navigator>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<navigator url="/pages/search/search" :class="show_go_top?'fixed_inupt':'top_input'"
			 :style="[{'line-height':menu_height+'px','border-radius':menu_height/2+'px','margin-right':this_width-menu_width-menu_left+'px','width':show_go_top?'140px':search_width+'px','top':show_go_top?menu_top-4+'px':''}]">
				<image class="search-icon" src="/static/images/search_icon.png"></image>
				<text class="search_hint">请输入关键字...</text>
			</navigator>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<navigator url="/pages/search/search" :class="show_go_top?'fixed_inupt':'top_input'"
			 :style="[{'line-height':menu_height+'px','border-radius':menu_height/2+'px','margin-right':this_width-menu_width-menu_left+'px','width':show_go_top?'140px':search_width+'px','top':show_go_top?menu_top-4+'px':''}]">
				<image class="search-icon" src="/static/images/search_icon.png"></image>
				<text class="search_hint">请输入关键字...</text>
			</navigator>
			<!-- #endif -->
			
			<view class="top_calssify" :style="[{'margin-top':!show_go_top?'10px':'','color':index_info.top_font_color}]">
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
		
		<view class="index_top_info"
		 :style="[{'padding-top':show_go_top?menu_bottom+35+'px':menu_bottom*2+20+'px','background-color':index_info.background.up}]">
			<view class="top_swiper">
				<swiper class="banner_swiper" indicator-dots indicator-active-color="#fa3475" autoplay interval="5000" duration="3000" circular>
					<swiper-item class="banner_swiper_item" v-for="(item,index) in index_info.banner.content" :key="index">
						<navigator class="banner_info" :url="'/pages'+item.page+'?id='+item.page_id">
							<image class="banner_img" :src="requestUrl+item.img" mode="widthFix"></image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="certification">
				<scroll-view class="certifications_content" scroll-x="true">
					<view class="honor_list_info">
						<view class="honor_list" v-for="(item,index) in index_info.honor_list" :key="index">
							<image class="honor_image" src="/static/images/1.png" ></image>
							<view :style="[{'color':index_info.honor_font_color}]">{{item}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="this_index_icon_list" :style="[{'color':index_info.icon_font_color,'background-color':index_info.background.centre}]">
				<swiper class="icon_list" @change="change_swiper_line" duration="3000">
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
		<!-- 秒杀 -->
		<view class="this_seckill_module" v-if="Object.prototype.toString.call(index_info.seckill_module) != '[object Array]'">
			<view class="seckill_module_top">
				<view class="seckill_module_left">
					<text class="seckill_module_title">每日秒杀</text>
					<view class="seckill_module_time">
						<text class="time_info" v-if="index_info.seckill_module.countdwon_format==1">{{ this_day }}</text> 
						<text class="time_line" v-if="index_info.seckill_module.countdwon_format==1">:</text> 
						<text class="time_info"> {{ this_house }} </text> <text class="time_line">:</text> 
						<text class="time_info"> {{ this_second }} </text> <text class="time_line">:</text> 
						<text class="time_info"> {{  this_minute }}</text> 
						<text class="time_line" v-if="index_info.seckill_module.countdwon_format==3">:</text>
						<text class="time_info" v-if="index_info.seckill_module.countdwon_format==3">{{ this_millisecond }}</text>
					</view>
				</view>
				<navigator class="seckill_module_right" 
				 :url="'/pages'+index_info.seckill_module.page+'?id='+index_info.seckill_module.page_id">
					全部 <image class="go_img" src="/static/images/unfold.png" mode="widthFix"></image>
				</navigator>
			</view>
			<view class="seckill_module_goods">
				<goodsShow :requestUrl='requestUrl' :width=240 :crosswiseGoods='index_info.seckill_module.act_goods_list'></goodsShow>
			</view>
		</view>
		<!-- 推荐 -->
		<view class="index_recommend">
			<view class="recommend_list">
				<scroll-view class="recommend_items" scroll-x="true">
					<view class="recommend_info">
						<view class="info_list" v-for="(item,index) in recommend_list" :key='index'
						 :class="{'change_recommend' : recommend_index==index}" @tap="choice_recommend(index)">
							<text class="recommend_title"> {{item.title}} </text>
							<text class="recommend_subtitle"> {{item.subtitle}} </text>
							<view class="this_line" v-if="index<recommend_list.length-1"></view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="recommend_content" v-if="this_recommend_list.length>0">
			<view class="recommen_content_item this_hide" :class="{this_show:recommend_index == index}" v-for="(item,index) in recommend_list" :key="index">
				<goodsShow :borderRadius=24 :requestUrl='requestUrl' :width=350 :porductList='this_recommend_list' v-if='index==0||index==1'>
				</goodsShow>
				<doctor :doctorList="this_recommend_list" :requestUrl="requestUrl" :paddingLR='10'
				 @collectLike='collectLike' @cancelLike='cancelLike' v-else-if="index==2">
				</doctor>
			</view>
		</view>
		<view class="go_top" v-if="show_go_top">
			<navigator class="consult" url="/pages/consultation/consultation"> <text>立即</text> <text>咨询</text> </navigator>
			<image class="go_top_image" src="https://xcx.hmzixin.com/upload/images/3.0/order_top.png" mode="widthFix" @tap="go_to_top"></image>
		</view>
		<!-- 弹窗 -->
		<view class="popup_info" v-show="this_show_popup">
			<navigator class="popup_window" :url="'/pages'+index_info.popup_window.content.page+'?id='+index_info.popup_window.content.page_id">
				<image class="popup_img" :src="requestUrl+index_info.popup_window.content.img" mode="widthFix"></image> 
			</navigator>
			<image class="close_popup" src="/static/images/delete.png" @tap='show_popup'></image>
			<!-- <view class="close_popup" @tap='show_popup'></view> -->
		</view>
	</view>
</template>

<script>
	import swiperline from "../../components/swperDot.vue";
	import goodsShow from "../../components/goodsShow.vue";
	import doctor from '../../components/doctorShow.vue';
	export default {
		components: {
			swiperline,
			goodsShow,
			doctor
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
				index_info: {
					banner:{
						content:[]
					},
					background:{
						up:''
					},
					centre_advertising:{
						content:[]
					},
					top_advertising:{
						content:{
							img:''
						}
					},
					seckill_module:{
						countdwon_format:1
					},
					popup_window:{
						content:{
							page:''
						}
					}
				},
				swiper_line:0,
				recommend_list:[
					{
						title:'精选',
						subtitle:'猜你喜欢'
					},
					{
						title: '护肤品',
						subtitle: '支持邮寄'
					},
					{
						title: '视频',
						subtitle: '精选视频'
					},
					{
						title: '直播',
						subtitle: '主播力荐'
					},
					{
						title: '日记',
						subtitle: '真人记录'
					},
				],
				recommend_index:0,
				this_recommend_list:[],
				this_offset:0,
				show_go_top:false,
				this_day: 0,
				this_house: 0,
				this_second: 0,
				this_minute: 0,
				this_millisecond:0,
				set_timers:0,
				this_show_popup:true
			}
		},
		onLoad: function(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.choice_recommend(0)
		},
		onShow: function() {
			let that = this
			that.set_timers = 0
			that.get_index_info()
		},
		onReady() {
			let that = this;
			that.this_height = uni.getSystemInfoSync().screenHeight;
			that.this_width = uni.getSystemInfoSync().screenWidth
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
			if (platform == 'Applets') {
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
				that.menu_width = 70
				that.menu_top = 40
				that.menu_bottom = 70
				that.menu_height = 30
				that.menu_left = 280
				that.search_width = that.menu_left + that.menu_width - (that.this_width - that.menu_width - that.menu_left)
			}
		},
		// 下拉刷新
		// onPullDownRefresh: function() {
		// 	let that = this
		// 	success: {
		// 		that.get_index_info()
		// 		uni.showToast({
		// 			title:'刷新成功'
		// 		})
		// 	};
		// 	setTimeout(function() {
		// 		// 停止下拉刷新
		// 		uni.stopPullDownRefresh();
		// 	}, 1500);
		// },
		// 显示回到顶部按钮
		onPageScroll: function(e) {
			let that = this
			let top = e.scrollTop
			if (top > 0) {
				that.show_go_top = true
			} else if (top == 0) {
				that.show_go_top = false
			}
		},
		onReachBottom: function() {
			let that = this
			that.this_offset += 1
			if(that.recommend_index==0){
				that.get_recommend_goods()
			}else{
				that.get_sift_list()
			}
		},
		onHide:function(){
			let that = this
			that.set_timers = 1
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
						if(Object.prototype.toString.call(data.seckill_module) != '[object Array]'&&data.seckill_module.rest_time>0){
							that.set_time(data.seckill_module.rest_time)
						}
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
			// 精选
			choice_recommend:function(index){
				let that = this
				if (index == 0 ) {
					that.recommend_index = index
					that.this_recommend_list = []
					that.this_offset = 0
					that.get_recommend_goods()
				}else if(index==1||index==2) {
					that.recommend_index = index
					that.this_recommend_list = []
					that.this_offset = 0
					that.get_sift_list()
				}else{
					uni.showToast({
						title: '正在升级中...敬请期待!',
						icon: 'none'
					})
				}
			},
			get_recommend_goods:function(){
				let that = this
				let dataInfo = {
					interfaceId: 'userrecommendedgoodsspulist',
					type: that.recommend_index,
					offset: that.this_offset*4
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if(data.length>0){
							that.this_recommend_list = that.this_recommend_list.concat(data)
						}
						else if(data.length==0&&that.this_offset>0){
							uni.showToast({
								title: '没有更多啦...',
								icon: 'none'
							})
						}
					}
				})
			},
			get_sift_list:function(){
				let that = this
				// type 0 护肤品 1视频 2 日记 3直播 //直播暂时为写
				// index 1 护肤品 2 视频 3直播 4日记
				let type = that.recommend_index - 1
				let dataInfo = {
					interfaceId: 'siftlist',
					type: type,
					offset: that.this_offset*4,
					limit: 4
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if(data.length>0){
							that.this_recommend_list = that.this_recommend_list.concat(data)
						}
						else if(data.length==0&&that.this_offset>0){
							uni.showToast({
								title: '没有更多啦...',
								icon: 'none'
							})
						}
					}
				})
			},
			go_to_top: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 600
				})
			},
			// 点赞
			collectLike: function(id,index) {
				let that = this
				let data = {
					interfaceId: 'video_collect',
					video_id: id,
					status: '0'
				}
				that.request.uniRequest("/doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.request.showToast('收藏成功')
						that.this_recommend_list[index].is_collect = 1
					}
				})
			},
			// 取消点赞
			cancelLike: function(id,index) {
				let that = this
				let data = {
					interfaceId: 'video_collect',
					video_id: id,
					status: '1'
				}
				that.request.uniRequest("/doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.request.showToast('取消成功')
						that.this_recommend_list[index].is_collect = 0
					}
				})
			},
			set_time:function(time){
				let that = this
				let millisecond = 0 //毫秒
				let secondTime = 0; // 分
				let hourTime = 0; // 小时
				let day = 0; //天
				let set_timer = setInterval(function() {
					time -= 1
					let minuteTime = time; // 秒
					if (minuteTime > 60) {
						secondTime = parseInt(minuteTime / 60)
						minuteTime = parseInt(minuteTime % 60)
						if (secondTime > 60) {
							hourTime = parseInt(secondTime / 60)
							secondTime = parseInt(secondTime % 60)
							if (hourTime > 24) {
								day = parseInt(hourTime / 24)
								hourTime = parseInt(hourTime % 60)
							}
						}
					} else {
						secondTime = 0
						hourTime = 0
						day = 0
					}
					
					that.this_day = day
					that.this_house = hourTime
					that.this_second = secondTime
					that.this_minute = minuteTime
					if (time <= 0) {
						clearInterval(set_timer)
					}
					if(that.set_timers>0){
						clearInterval(set_timer)
					}
				},1000)
			},
			show_popup:function(){
				let that = this
				that.this_show_popup = false
			}
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
	
	.this_top_info{
		display: flex;
		position: absolute;
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
		transition:width 2s;
	}
	.fixed_inupt{
		transition:width 2s;
		background-color: #FFFFFF;
		left: 20rpx;
		position: absolute;
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
		align-items: center;
	}
	.item_info{
		padding-right: 34rpx ;
		width: auto;
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
		justify-content: space-around;
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
		margin-left: -20rpx;
	}
	
	.this_seckill_module{
		padding: 30rpx 40rpx;
		background-color: #FFFFFF;
	}
	
	.seckill_module_top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
	}
	
	.seckill_module_left{
		display: flex;
		align-items: center;
	}
	
	.seckill_module_title{
		font-size: 32rpx;
		color: #212121;
		font-weight: bold;
		padding-right: 20rpx;
	}
	
	.seckill_module_time{
		display: flex;
		align-items: center;
		color: #FFFFFF;
		font-size: 20rpx;
	}
	.time_info{
		width: 30rpx;
		line-height: 30rpx;
		background-color: #FA3475;
		text-align: center;
		border-radius: 4rpx;
	}
	
	.time_line{
		font-weight: bold;
		color: #FA3475;
		line-height: 30rpx;
		padding: 0 10rpx;
	}
	
	.seckill_module_right{
		display: flex;
		align-items: center;
	}
	.go_img{
		width: 24rpx;
		margin-left: 6rpx;
		transform:rotate(270deg);
	}
	
	.index_recommend{
		background-color: #F6F6F6;
	}
	
	.recommend_list{
		width: 100%;
	}
	
	.recommend_items {
		overflow: hidden;
		white-space: nowrap;
	}
	
	.recommend_info {
		display: flex;
		align-items: center;
		padding: 30rpx 0;
		font-size: 28rpx;
	}
	
	.info_list {
		padding: 0 45rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #666666;
		font-size: 24rpx;
		position: relative;
	}
	
	.recommend_subtitle{
		font-size: 24rpx;
	}
	
	.change_recommend {
		color: #fa3475;
	}
	
	.change_recommend .recommend_title{
		font-weight: bolder;
	}
	
	.this_line {
		height: 32rpx;
		width: 1rpx;
		background-color: #666666;
		position: absolute;
		right: 0;
		top: 25%;
	}
	
	.recommen_content_item{
		padding: 0 20rpx;
		background-color: #F6F6F6;
	}
	
	.this_hide{
		display: none;
	}
	
	.this_show{
		display: block;
	}
	
	.go_top {
		position: fixed;
		right: 30rpx;
		bottom: 40px;
		z-index: 9;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.consult{
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		text-align: center;
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		margin-bottom: 40rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	
	.go_top_image{
		width: 80rpx;
	}
	
	.popup_info{
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	
	.popup_window{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.popup_img{
		width: 90%;
	}
	.close_popup{
		position: absolute;
		right: 40rpx;
		top: 240rpx;
		width: 80rpx;
		height: 80rpx;
		border-radius: 40rpx;
		z-index: 101;
		background-color: red;
		display: block;
	}
</style>
