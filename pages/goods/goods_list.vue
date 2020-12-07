<template>
	<view class="goods"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor'
		 :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' 
		 :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'>
		</topBar>
		<view class="top-list" :style="[{'top':menuBottom+10+'px'}]">
			<view class="list-item"
			 v-for="(item,index) in tabBars" :key='index' 
			 :class="{'change-class' : top_index==index}"
			 @tap='changTop(index)'>
				<view class="item-name">{{item.name}}</view>
				<view class="tab-line" v-show="top_index==index"></view>
			</view>				
		</view>
		<view class="goods-list-content" :style="[{'padding-top':menuBottom+50+'px','height':height-menuBottom-50+'px'}]">			
			<scroll-view scroll-y  class="item-list-content" >
				<view class="item-content end-cont" :class="{dis:top_index==index}" v-for="(item,index) in tabBars" :key="index">
					<view class="this-item-content" v-if="item.type==0">
						<goodsShow :borderRadius=24
						 :requestUrl='requestUrl' :width=350 
						 :porductList='productLists'
						 >
						</goodsShow>
					</view>
					<view class="this-item-content" v-else-if="item.type==1">
						<diary :diaryList="productLists" :requestUrl='requestUrl'></diary>
					</view>
					<view class="this-item-content-type" v-else-if="item.type==2">
						<view class="this-doctor">
							<view class="swiper-item" v-for="(i,k) in doctorList" :key='k'>
								<view class="swiper-item-content">	
									<view class="item-top-content" @tap='goToDoctor(i.id,requestUrl+i.heading)'>
										<view class="head-portrait">
											<image :src="requestUrl+i.heading" mode=""></image>
										</view>
										<view class="middle-content">
											<view class="middle-doctor-name">
												{{i.name}} <text>{{i.zhicheng}}</text>
											</view>
											<view class="employed_time-case_num">
												<view class="employed_time"> 从业经验:{{Math.round(i.employed_y)}}年</view>
												<view class="case_num">案列数:{{i.case_num}}</view>
											</view>																
											<view class="goods_category">
												<view class="goods_category-title">擅长</view>
												<text class='goods_category-item' v-for="(is,index) in i.goods_project" :key='index'>
													{{is}} 、
												</text>
											</view>
											<view class="doctor_view">
												<view class="doctor_view_content">
													<view class='doctor_view_title'>观点</view>
													<text class="view_content">{{i.view}}</text>
												</view>																	
											</view>														
										</view>	
									</view>									
									<view class="consult" @tap='goToConsult'>咨询</view>
								</view>
								<view class="recommended_goods"
								 @tap='gotoGoods(i.recommended_goods.id,i.recommended_goods.encrypted_id)' v-if="i.recommended_goods!=''">
									<view class="goods_left">
										<view class="goods_title">推</view>
										<view class="gooss_content">{{i.recommended_goods.goods_name}}</view>
									</view>
									<view class="goods_right">
										<text class="sale_weight">
											{{i.recommended_goods.sale_weight+i.recommended_goods.take_store}}人预约
										</text>
										<text class="sale_price"> <text>￥</text> {{i.recommended_goods.sale_price}}</text>
									</view>
								</view>		
								<view class="is_hot" @tap='gotoGoods(i.hot_goods.id,i.hot_goods.encrypted_id)' v-if="i.hot_goods!=''">
									<view class="goods_left">
										<view class="is_hot_title">热</view>
										<view class="gooss_content">{{i.hot_goods.goods_name}}</view>
									</view>
									<view class="goods_right">
										<text class="sale_weight">
										 {{i.hot_goods.sale_weight+i.hot_goods.take_store}}人预约
										</text>
										<text class="sale_price"> <text>￥</text> {{i.hot_goods.sale_price}}</text>
									</view>															
								</view>
							</view>
						</view>
					</view>
					<view class="this-item-content-video" v-else>
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import goodsShow from "../../components/goodsShow.vue";
	import diary from '../../components/diary.vue';
	export default {
		components: {
			topBar,
			goodsShow,
			diary,
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
				backImage: '/static/images/return.png',
				title: '商品列表',
				requestUrl: '',
				top_id:8,
				top_index:0,
				goods_sort:0,
				sort_type:0,
				offset:0,
				tabBars: [
					{
						name: '商品',
						type: 0
					},
					{
						name: '日记',
						type: 1
					},
					{
						name: '医生',
						type: 2
					},
					{
						name: '视频',
						type: 3
					},
				],
				productLists:[],
				doctorList:[]
			}
		},
		onReady() {
			let that = this;
			// 判定运行平台
			let platform = ''
			that.height = uni.getSystemInfoSync().windowHeight ;
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
			if (platform == 'applet') {
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
			} else {
				that.menuWidth = 87
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		onReachBottom: function () {
			var that = this;
			that.offset += 1;
			that.getClassList(that.top_id)
		},
		onLoad: function (option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			if(option.name){
				that.title = option.name
			}
			that.top_id = option.id
			that.getClassList(that.top_id,that.top_index)
			console.log(option)
		},
		methods: {
			changTop:function(index){
				let that = this
				that.top_index = index
				if(index==0){
					that.productLists = []
					that.doctorList = []
					that.offset = 0
					that.getClassList(that.top_id,that.top_index)
				}else if(index==1){
					that.productLists = []
					that.doctorList = []
					that.offset = 0
					that.getClassList(that.top_id,that.top_index)
				}else if(index==2){
					that.productLists = []
					that.doctorList = []
					that.offset = 0
					that.getClassList(that.top_id,that.top_index)
				}
				else{
					that.productLists = []
					that.doctorList = []
					that.offset = 0
					that.getClassList(that.top_id,that.top_index)
				}
				
			},
			getClassList:function(id,type){
				let that = this
				let dataInfo={
					interfaceId:'categoryspuzonelist',
					cid:id,
					type:that.top_index,
					sort:that.goods_sort,
					sort_type:that.sort_type,
					offset:that.offset,
					limit:6
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.title = data.name
						// that.productLists = data.list
						if(type==2){
							if(data.list.length>0){
								that.doctorList = that.productLists.concat(data.list)
							}
							else{
								uni.showToast({
									title:'没有更多了!',
									icon:'none'
								})
							}
						}else{
							if(data.list.length>0){
								that.productLists = that.productLists.concat(data.list)
							}
							else{
								uni.showToast({
									title:'没有更多了!',
									icon:'none'
								})
							}
						}
						
						// console.log(that.productLists)
					}
				})
			},
			// 点赞
			collectLike: function(id) {
				let videoId = id
				let data = {
					interfaceId: 'video_collect',
					video_id: videoId,
					status: '0'
				}
				this.request.uniRequest("/doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						this.request.showToast('成功')
					}
				})
			},
			// 取消点赞
			cancelLike: function(id) {
				let videoId = id
				let data = {
					interfaceId: 'video_collect',
					video_id: videoId,
					status: '1'
				}
				this.request.uniRequest("/doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						this.request.showToast('成功')
					}
				})
			},
			// 医生主页
			goToDoctor:function(doctorId,heading){
				uni.navigateTo({
					url: `/pages/doctor/doctor_detail?id=${doctorId}&&heading=${heading}`,
				})
			},
			// 点击商品
			gotoGoods: function(id,encrypted_id) {
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&encrypted_id=${encrypted_id}`,
				})
			},
			// 咨询
			goToConsult:function(){
				console.log('咨询')
				// uni.navigateTo({
				// 	url: `/pages/consultation/consultation`,
				// })
			},
		}
	}
</script>

<style scoped>
	.goods-list-content{
		background-color: #F0F0F0;
	}
	.top-list{
		position: fixed;
		width: 100%;
		left: 0;
		z-index: 110;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		border-bottom: 1rpx solid #999999;
		background-color: #FFFFFF;
	}
	.list-item{
		line-height: 80rpx;
		width: 100%;
		height: 100%;
		border-right: 1rpx solid #F0F0F0;
		position: relative;
	}
	.list-item:last-child{
		border-right: 0;
	}
	.change-class{
		color: #FA3475;
		font-weight: bold;
	}
	.tab-line {
		height: 4rpx;
		background-color: #FA3475;
		width: 100%;
		border-radius: 2rpx;
		position: absolute;
		bottom: -2rpx;
		left: 0;
	}

	.end-cont {
		display: none;
	}
	
	.dis {
		display: block;
	}
	.this-item-content{
		padding: 30rpx 20rpx 0;
		background-color: #F0F0F0;
	}
	.this-item-content-type{
		background-color: #F0F0F0;
	}
	.swiper-item {
		background-color: #FFFFFF;
		padding: 30rpx 40rpx;
		margin-top: 20rpx;
		border-radius: 24rpx;
	}
	
	.swiper-item-content {
		font-size: 24rpx;
		position: relative;
	}
	.item-top-content{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.head-portrait image {
		height: 120rpx;
		width: 120rpx;
		border-radius: 60rpx;
	}
	.middle-content{
		flex: 1;
		margin: 0 10rpx;
	}
	.middle-doctor-name{
		font-size: 34rpx;
		width: 80%;
	}
	.middle-doctor-name text{
		font-size: 26rpx;
		margin-left: 10rpx;
	}
	.employed_time-case_num{
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		margin-top: 15rpx;
		margin-bottom: 25rpx;
	}
	
	.goods_category{
		font-size: 24rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.goods_category-title{
		width: 50rpx;
		line-height: 24rpx;
		border-radius: 5rpx;
		border: solid 1rpx #e85c9e;
		color: #e85c9e;
		font-size: 20rpx;
		margin-right: 10rpx;
		text-align: center;
	}
	.end_cont{
		display: none;
	}
	.doctor_view{
		width: 100%;	
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		margin-top: 10rpx;
	}
	.doctor_view_content{
		display: flex;
	}
	.doctor_view_title{
		width: 50rpx;
		line-height: 24rpx;
		border-radius: 5rpx;
		border: solid 1rpx #689efb;	
		font-size: 20rpx;
		color: #689efb;
		text-align: center;
		margin-right: 10rpx;
	}
	.recommended_goods{
		width: 570rpx;
		padding: 0 20rpx;
		height: 56rpx;
		line-height: 56rpx;
		background-color: #202020;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		margin-top: 27rpx;
	}
	.goods_left{
		display: flex;
		align-items: center;
	}
	.goods_title{
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		background-color: #ff7b1a;
		border-radius: 5rpx;
		text-align: center;
		margin-right: 10rpx;
	}
	.gooss_content{
		width: 90%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		line-height: 30rpx;
	}
	.goods_right{
		display: flex;
		align-items: center;
	}
	
	.sale_weight{
		color: #999999;
		margin-right: 10rpx;
		min-width: 100rpx;
		text-align: right;
	}
	.sale_price{
		font-size: 28rpx;
		color: #cfbe85;
		
	}
	.sale_price text{
		font-size: 24rpx;
	}
	.is_hot{
		margin-top: 15rpx;
		width: 570rpx;
		padding: 0 20rpx;
		height: 56rpx;
		line-height: 56rpx;
		background-color: #F0F0F0;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
	}
	.is_hot_title{
		width: 30rpx;
		line-height: 30rpx;
		height: 30rpx;
		background-color: #da129f;
		border-radius: 5rpx;
		text-align: center;
		margin-right: 10rpx;	
	}
	.consult{
		width: 110rpx;
		line-height: 46rpx;
		border-radius: 10rpx;
		border: 2rpx solid #cfbe85;
		color: #cfbd85;
		font-size: 24rpx;
		text-align: center;
		position: absolute;
		right: 0;
		top:  0;
		z-index: 9;
	}
</style>
