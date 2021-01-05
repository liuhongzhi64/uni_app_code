<template>
	<view class="goods"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor'
		 :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' 
		 :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'>
		</topBar>
		<view class="top-list" :style="[{'top':menuBottom+10+'px'}]">
			<view class="list-item" v-for="(item,index) in tabBars" :key='index' 
			 :class="{'change-class' : top_index==index}" @tap='changTop(index)'>
				<view class="item-name">{{item.name}}</view>
				<view class="tab-line" v-show="top_index==index"></view>
			</view>				
		</view>
		<view class="goods-list-content" :style="[{'padding-top':menuBottom+50+'px','min-height':height-menuBottom-50+'px'}]">			
			<scroll-view scroll-y  class="item-list-content" >
				<view class="no-have-porduct" v-if="productLists.length==0&&doctorList.length==0&&video_list.length==0"
				 :style="[{'min-height':height-menuBottom-50+'px'}]">
					<image src="https://xcx.hmzixin.com/upload/images/3.0/no_comment.png" mode="widthFix"></image>
					<view class="no-have-porduct-hint">暂无相关···</view>
				</view>
				<view class="item-content end-cont" v-else :class="{dis:top_index==index}" v-for="(item,index) in tabBars" :key="index">
					<view class="this-item-content" v-if="item.type==0">
						<goodsShow :borderRadius=24
						 :requestUrl='requestUrl' :width=350 
						 :porductList='productLists'
						 >
						</goodsShow>
					</view>
					<view class="this-item-content" v-else-if="item.type==1">
						<diary :diaryList="productLists" :requestUrl='requestUrl' @collect_diary='collect_diary' @cancel_like='cancel_like'></diary>
					</view>
					<view class="this-item-content-type" v-else-if="item.type==2">
						<view class="this-doctor">
							<view class="swiper-item" v-for="(i,k) in doctorList" :key='k'>
								<view class="swiper-item-content">	
									<view class="item-top-content" @tap='go_to_doctor(i.id,requestUrl+i.heading)'>
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
												<text class="goods_category-title">擅长</text>
												<text class='goods_category-item' v-for="(is,index) in i.goods_project" :key='index'>
													{{is}} 、
												</text>
											</view>
											<view class="doctor_view">
												<text class='doctor_view_title'>观点</text>
												<text class="view_content">{{i.view}}</text>															
											</view>														
										</view>	
									</view>									
									<navigator class="consult" url="/pages/consultation/consultation"> 咨询 </navigator>
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
					<view class="this_content_video" v-else-if="item.type==3">
						<view class="video_info" v-for="(i,k) in video_list" :key='k'>
							<navigator class="video-images" :url="'/pages/diary/diary_video?path='+i.path+'&id='+i.id">
								<image class="video_img" :src="requestUrl+i.cover_img" mode="widthFix"></image>
								<image class="pay_btn" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix"></image>
							</navigator>
							<view class="info_content">
								<view class="video_name"> {{ i.name }} </view>
								<view class="category_list">
									<view class="list_item" v-for="(is,z) in i.category_name" :key='z'> {{ is }} </view>
								</view>
								<navigator class="video_goods" v-if="Object.prototype.toString.call(i.goods_relation)!='[object Array]'"
								 :url="'/pages/goods/goods_detail?sku_id='+i.goods_relation.id+'&encrypted_id='+i.goods_relation.encrypted_id">
									<image :src="requestUrl+i.goods_relation.head_img" class="goods_img"></image>
									<view class="video_goods_info">
										<view class="video_goods_name"> {{ i.goods_relation.goods_name }} </view>
										<view class="video_goods_sale_price"> ￥{{ i.goods_relation.sale_price }} </view>
									</view>
								</navigator>
								<view class="user_info">
									<view class="head_ico-nick_name">
										<image class="head_ico" :src="requestUrl+i.doctor_relation.heading" mode=""></image>
										<text class="nick_name">{{ i.doctor_relation.name }}</text>
									</view>
									<view class="is_no_collect" v-if="i.is_collect==0" @tap="cancel_video_like(i.is_collect,i.id,k)">
										<view class="like">
											<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
										</view>
										{{ i.collect_num || 0 }}
									</view>
									<view class="collect_num" v-else @tap="cancel_video_like(i.is_collect,i.id,k)">
										<view class="like">
											<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
										</view>
										{{ i.collect_num }}
									</view>
								</view>
							</view>
						</view>
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
				top_id:23,
				top_index:0,
				offset:0,
				tabBars: [
					{
						name: '商品',
						type: 0
					},
					{
						name: '买家秀',
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
				doctorList:[],
				video_list:[]
			}
		},
		onReady() {
			let that = this;
			// 判定运行平台
			that.height = uni.getSystemInfoSync().windowHeight ;
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
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
			if(option.id){
				that.top_id = option.id 
			}
			that.getClassList(that.top_id,that.top_index)
		},
		methods: {
			changTop:function(index){
				let that = this
				that.top_index = index
				that.productLists = []
				that.doctorList = []
				that.video_list = []
				that.offset = 0
				that.getClassList(that.top_id,that.top_index)
			},
			getClassList:function(id,type){
				const that = this
				let dataInfo={
					interfaceId:'categoryspuzonelist',
					cid:id,
					type:that.top_index,
					sort:0,
					sort_type:0,
					offset:that.offset,
					limit:6
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.title = data.name
						if(type==2){
							if(data.list.length>0){
								that.doctorList = that.doctorList.concat(data.list)
							}
							else if(data.list.length==0&&that.offset>0){
								uni.showToast({
									title:'没有更多了!',
									icon:'none'
								})
							}
						}else if(type==3){
							if(data.list.length>0){
								that.video_list = that.video_list.concat(data.list)
							}
							else if(data.list.length==0&&that.offset>0){
								uni.showToast({
									title:'没有更多了!',
									icon:'none'
								})
							}
						}
						else if(type==0||type==1){
							if(data.list.length>0){
								that.productLists = that.productLists.concat(data.list)
							}
							else if(data.list.length==0&&that.offset>0){
								uni.showToast({
									title:'没有更多了!',
									icon:'none'
								})
							}
						}
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
			// 收藏
			collect_diary: function(id, index) {
				let that = this
				let data = {
					interfaceId: 'collectdiary',
					diary_id: id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.productLists[index].is_collect = 1
						that.productLists[index].collect_num += 1
						uni.showToast({
							title: '已收藏',
							duration: 1000
						})
					}
				})
			},
			// 取消收藏
			cancel_like: function(id, index) {
				let that = this
				let data = {
					interfaceId: 'cancelcollectdiary',
					diary_id: id.toString()
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.productLists[index].is_collect = 0
						that.productLists[index].collect_num -= 1
						uni.showToast({
							title: '已取消收藏',
							duration: 1000
						})
					}
				})
			},
			// 医生主页
			go_to_doctor:function(doctorId,heading){
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
			cancel_video_like:function(is_collect,id,index){
				let that = this
				if(is_collect==0){
					let dataInfo = {
						interfaceId:'collectvideo',
						video_id:id.toString()
					}
					this.request.uniRequest("video", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.video_list[index].is_collect = 1
							that.video_list[index].collect_num +=1
							uni.showToast({
								title: '已收藏',
								duration: 1000
							})				
						}
					})
				}else{
					let dataInfo = {
						interfaceId:'cancelcollectvideo',
						video_id:id.toString()
					}
					this.request.uniRequest("video", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.video_list[index].is_collect = 0
							that.video_list[index].collect_num -=1
							uni.showToast({
								title: '已取消收藏',
								duration: 1000
							})				
						}
					})
				}
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
		margin-top: 10rpx;
		height: 40rpx;
	}
	
	.doctor_view_title{
		width: 50rpx;
		line-height: 24rpx;
		height: 28rpx;
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
		height: 30rpx;
		color: #FFFFFF;
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
		height: 28rpx;
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
	.this_content_video{
		padding: 30rpx 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.video_info{
		margin-bottom: 20rpx;
	}
	.video-images {
		position: relative;
	}
	
	.video_img {
		width: 350rpx;
		border-radius: 16rpx 16rpx 0 0;
		background-color: #222222;
		display: block;
	}
	
	.pay_btn {
		position: absolute;
		left: 145rpx;
		bottom: 45%;
		width: 60rpx;
		height: 60rpx;
	}
	.info_content {
		padding: 10rpx;
		font-size: 24rpx;
		background-color: #FFFFFF;
	}
	
	.video_name {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 32rpx;
		color: #111111;
	}
	
	.category_list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
	}
	
	.list_item {
		line-height: 28rpx;
		padding: 0 15rpx;
		font-size: 18rpx;
		background-color: #999999;
		color: #FFFFFF;
		border-radius: 5rpx;
		margin-right: 20rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	
	.video_goods {
		display: flex;
		align-items: center;
		padding-bottom: 10rpx;
	}
	
	.goods_img {
		width: 100rpx;
		height: 100rpx;
		background-color: #F0f0f0;
	}
	
	.video_goods_info {
		flex: 1;
		height: 80rpx;
		padding: 0 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.video_goods_name {
		font-weight: lighter;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	
	.video_goods_sale_price {
		color: #fa3475;
	}
	
	.user_info {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.head_ico-nick_name {
		display: flex;
		align-items: center;
	}
	
	.head_ico {
		width: 48rpx;
		height: 48rpx;
		border-radius: 24rpx;
		margin-right: 10rpx;
		background-color: #F0F0F0;
	}
	
	.nick_name {
		font-size: 20rpx;
		color: #111111;
	}
	
	.collect_num {
		font-size: 30rpx;
		color: #fc4783;
		display: flex;
		align-items: center;
	}
	
	.is_no_collect {
		color: #B2B2B2;
		display: flex;
		align-items: center;
		font-size: 30rpx;
	}
	
	.is_no_collect .like {
		background-color: #d0d0d0;
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
	}
	
	.collect_num .like {
		width: 42rpx;
		height: 42rpx;
		border-radius: 21rpx;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%), linear-gradient(#f56fb4, #f56fb4);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
	}
	
	.like-image {
		width: 24rpx;
		height: 24rpx;
	}
	.no-have-porduct {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	
	.no-have-porduct image {
		width: 400rpx;
	}
	.have-porduct-item{
		margin-top: -20rpx;
		padding-top: 10rpx;
	}
</style>
