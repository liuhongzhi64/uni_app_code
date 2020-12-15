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
		<view class="top-swiper-tab" :style="[{'top':menuBottom+50+'px'}]">
			<view class="top-swiper-content" :class="{'active' : tabIndex==index}" v-for="(item,index) in tabBars" :key='index'
			 @tap='tabtap(index,item.type)'>
			 <view class="top_item">
				 <text class="item_name" :class="tabIndex==index?'change_item':''">
					 {{item.name}}
				 </text>
				 
			 </view>
			</view>
		</view>
		<view class="search-input_content" :style="[{'padding-top':menuBottom+100+'px'}]">
			<view class="result_content" :style="[{'min-height':height-menuBottom-120+'px'}]">
				<!-- 商品 -->
				<view class="this_goods_result" v-if="tabIndex==0">
					<navigator class="goods_info" v-for="(item,index) in content_list" :key='index'
					 :url="'/pages/goods/goods_detail?sku_id='+item.id+'&encrypted_id='+item.encrypted_id">
						<image class="head_img" :src="requestUrl+item.head_img" ></image>
						<image :src="requestUrl+item.spu_icon" class="spu_icon"></image>
						<view class="goods_right">
							<view class="goods_name"> {{ item.goods_name }} </view>
							<view class="goods-label" v-if="item.label.list.length>0">
								<view class="label_item" v-for="(i,k) in item.label.list" :key="k" > {{ i }} </view>
							</view>
							<view class="all_price">
								<text class="sale_price"> ￥ {{ item.sale_price }}  </text>
								<view class="member" v-if="item.member.member_title">
									<text>{{item.member.member_title}}</text> {{ item.member.price }}
								</view>
							</view>
							<view class="rate_sales">
								<text>{{ item.sales }} 预约</text> <text> {{ item.rate }}%好评 </text>
							</view>
						</view>
					</navigator>
				</view>
				<!-- 医生 -->
				<view class="this_result" v-if="tabIndex==1">
					<view class="doctor_info" v-for="(item,index) in content_list" :key='index' >
						<navigator class="doctor_top" :url="'/pages/doctor/doctor_detail?id='+item.id+'&heading='+item.heading">
							<image class="doctor_head_img" :src="requestUrl+item.head_img" ></image>
							<view class="doctor_right_info">
								<view class="doctor_name"> {{ item.name }} <text class="zhicheng"> {{ item.zhicheng }} </text> </view>
								<view class="employed_y_case_num">
									<view class="employed_y"> 从业经验: {{ item.employed_y }}年</view>
									<view class="case_num">案列数: {{ item.case_num }} </view>
								</view>																
								<view class="goods_project">
									<view class="goods_project_title">擅长</view>
									<text class='goods_category-item' v-for="(i,k) in item.goods_project" :key='k'> {{ i }}  </text>
								</view>
								<view class="view_content">
									<view class='doctor_view_title'>观点</view>
									<text class="views">{{item.view}}</text>
								</view>	
							</view>
							<view class="consult" >咨询</view>
						</navigator>
						<view class="doctor_recommended_goods" v-if="Object.prototype.toString.call(item.recommended_goods)!='[object Array]'">
							<view class="recommende_goods_name">
								<text class="recommende_title"> 推 </text> {{ item.recommended_goods.goods_name }}
							</view>
							<view class="sale_weight_sale_price">
								<text>{{ item.recommended_goods.sale_weight }}</text> <text> {{ item.recommended_goods.sale_price }} </text>
							</view>
						</view>
						<view class="doctor_hot_goods" v-if="Object.prototype.toString.call(item.hot_goods)!='[object Array]'">
							<view class="recommende_goods_name">
								<text class="hot_goods_title"> 热 </text> {{ item.hot_goods.goods_name }}
							</view>
							<view class="sale_weight_sale_price">
								<text>{{ item.hot_goods.sale_weight }}</text> <text> {{ item.hot_goods.sale_price }} </text>
							</view>
						</view>
					</view>
				</view>
				<!-- 日记 -->
				<view class="this_list"  v-else-if="tabIndex==2">
					<diary :diaryList="content_list" :requestUrl='requestUrl' @collect_diary='collect_diary' @cancel_like='cancel_like'></diary>
				</view>
				<!-- 视频 -->
				<view class="this_list" v-else-if='tabIndex==3'>
					<view class="video_info">
						<view class="video_left" >
							<view class="left_content">
								<view class="left_item" v-for="(item,index) in content_list" :key='index' v-if="index%2==0">
									<view class="video-images">
										<image class="video_img" :src="requestUrl+item.cover_img" mode="widthFix"></image>
										<image class="pay_btn" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix"></image>
									</view>
									<view class="info_content">
										<view class="video_name"> {{ item.name }} </view>
										<view class="category_list">
											<view class="list_item" v-for="(i,k) in item.category_name" :key='k'> {{ i }} </view>
										</view>
										<view class="video_goods" >
											<image :src="requestUrl+item.goods_relation.head_img" class="goods_img"></image>
											<view class="video_goods_info">
												<view class="video_goods_name"> {{ item.goods_relation.goods_name }} </view>
												<view class="video_goods_sale_price"> ￥{{ item.goods_relation.sale_price }} </view>
											</view>
										</view>
										<view class="user_info">
											<view class="head_ico-nick_name">
												<image class="head_ico" :src="requestUrl+item.doctor_relation.heading" mode=""></image>
												<text class="nick_name">{{ item.doctor_relation.name }}</text>
											</view>
											<view class="is_no_collect" v-if="item.is_collect==0" @tap="cancel_video_like(item.is_collect,item.id,index)"> 
												<view class="like">
													<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
												</view>
												{{ item.collect_num || 0 }} 
											 </view>
											<view class="collect_num" v-else @tap="cancel_video_like(item.is_collect,item.id,index)">
												<view class="like">
													<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
												</view>
												{{ item.collect_num }} 
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="video_right">
							<view class="right_content">
								<view class="right_item" v-for="(item,index) in content_list" :key='index' v-if="index%2==1">
									<view class="video-images">
										<image class="video_img" :src="requestUrl+item.cover_img" mode="widthFix"></image>
										<image class="pay_btn" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix"></image>
									</view>
									<view class="info_content">
										<view class="video_name"> {{  item.name }} </view>
										<view class="category_list">
											<view class="list_item" v-for="(i,k) in item.category_name" :key='k'> {{ i }} </view>
										</view>
										<view class="video_goods" >
											<image :src="requestUrl+item.goods_relation.head_img" class="goods_img"></image>
											<view class="video_goods_info">
												<view class="video_goods_name"> {{ item.goods_relation.goods_name }} </view>
												<view class="video_goods_sale_price"> ￥{{ item.goods_relation.sale_price }} </view>
											</view>
										</view>
										<view class="user_info">
											<view class="head_ico-nick_name">
												<image class="head_ico" :src="requestUrl+item.doctor_relation.heading" mode=""></image>
												<text class="nick_name">{{ item.doctor_relation.name }}</text>
											</view>
											<view class="is_no_collect" v-if="item.is_collect==0" @tap="cancel_video_like(item.is_collect,item.id,index)"> 
												<view class="like">
													<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
												</view>
												{{ item.collect_num || 0 }} 
											 </view>
											<view class="collect_num" v-else @tap="cancel_video_like(item.is_collect,item.id,index)">
												<view class="like">
													<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
												</view>
												{{ item.collect_num }} 
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import diary from '../../components/diary.vue';
	export default {
		components: {
			topBar,
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
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '搜索',
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
				tabIndex: 3, // 选中的顶部的导航的索引,类型
				inputValue: '',
				content_list: [],
				offset: 0,
				searchContent: '隆鼻',
				requestUrl:''
			}
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			if(option.search){
				that.searchContent = option.search
			}
			
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
							that.content_list = data
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
							that.content_list = data
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
							that.content_list = data
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
				that.content_list = []
				that.offset = 0
				that.get_search()
			},
			// 视频收藏
			cancel_video_like:function(is_collect,id,index){
				let that = this
				if(is_collect==0){
					let dataInfo = {
						interfaceId:'collectvideo',
						video_id:id.toString()
					}
					this.request.uniRequest("video", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.content_list[index].is_collect = 1
							that.content_list[index].collect_num +=1
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
							that.content_list[index].is_collect = 0
							that.content_list[index].collect_num -=1
							uni.showToast({
								title: '已取消收藏',
								duration: 1000
							})				
						}
					})
				}
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
						that.content_list[index].is_collect = 1
						that.content_list[index].collect_num +=1
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
						that.content_list[index].is_collect = 0
						that.content_list[index].collect_num -=1
						uni.showToast({
							title: '已取消收藏',
							duration: 1000
						})				
					}
				})
			},
		}
	}
</script>

<style scoped>
	.search-input {
		background-color: #F6F6F6;
		height: 88rpx;
		left: 0;
		position: fixed;
		z-index: 99;
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
		border-radius: 28rpx;
		background-color: #ffffff;
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
		/* height: 80rpx; */
		background-color: #FFFFFF;
		z-index: 9;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 80rpx;
	}

	.top-swiper-content {
		width: 50%;
		text-align: center;
		margin-top: 16rpx;
		font-size: 24rpx;
		height: 100%;
	}

	.active {
		color: #FA3475;
		font-size: 28rpx;
		font-weight: bolder;
	}
	.change_item{	
		border-bottom: 6rpx solid #FA3475;
	}

	.result_content {
		height: 100%;
		padding: 20rpx 0;
		background-color: #F6F6F6;
	}
	.this_list{
		padding: 0 20rpx;
	}
	.this_goods_result{
		padding: 0 20rpx;
	}
	
	.goods_info{
		background-color: #FFFFFF;
		position: relative;
		display: flex;
		justify-content: space-between;
		margin-bottom: 30rpx;
		border-radius: 24rpx;
	}
	
	.head_img{
		width: 230rpx;
		height: 230rpx;
		border-top-left-radius: 24rpx;
		border-bottom-left-radius: 24rpx;
	}
	.spu_icon{
		width: 120rpx;
		height: 40rpx;
		border-top-left-radius: 24rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
		opacity: 0.8;
	}
	.goods_right{
		padding: 20rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.goods_name{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 32rpx;
		font-size: 24rpx;
		color: #111111;
		font-weight: lighter;
	}
	.goods-label{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.label_item{
		font-size: 20rpx;
		font-weight: lighter;
		padding: 0 20rpx;
		line-height: 36rpx;
		border-radius: 18rpx;
		background-color: #F0F0F0;
		margin-right: 20rpx;
	}
	
	.all_price{
		display: flex;
		font-size: 32rpx;
	}
	.sale_price{
		color: #fa3475;
	}
	.member{
		display: flex;
		font-size: 20rpx;
	}
	.member text{
		color: #FFFFFF;
		background-color: #202020;
	}
	
	.rate_sales{
		display: flex;
		font-size: 24rpx;
		font-weight: lighter;
	}
	.rate_sales text{
		margin-right: 20rpx;
	}
	
	/* 医生 */
	.doctor_info{
		border-radius: 24rpx;
		background-color: #FFFFFF;
		margin-bottom: 30rpx;
		padding: 0 20rpx;
	}
	.doctor_top{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.consult{
		width: 80rpx;
		line-height: 32rpx;
		border-radius:16rpx;
		border: 1rpx solid #cfbe85;
		color: #cfbd85;
		font-size: 24rpx;
		text-align: center;
		position: absolute;
		right: 0;
		top:  20rpx;
		z-index: 9;
	}
	.doctor_head_img{
		width: 120rpx;
		height: 120rpx;
		border-radius: 60rpx;
		background-color: #000000;
	}
	.doctor_right_info{
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 20rpx;
	}
	.doctor_name{
		display: flex;
		align-items: center;
		width: 80%;
		font-size: 32rpx;
	}
	.zhicheng{
		font-size: 24rpx;
		margin-left: 20rpx;
	}
	
	.employed_y_case_num{
		display: flex;
		font-size: 24rpx;
	}
	.employed_y{
		margin-right: 20rpx;
	}
	
	.goods_project,.view_content{
		display: flex;
		align-items: center;
		font-size: 24rpx;
		padding-top: 10rpx;
	}
	.goods_project_title{
		border: 1rpx solid #fa3475;
		color: #fa3475;
		padding: 0 10rpx;
		border-radius: 10rpx;
		font-size: 20rpx;
		margin-right: 20rpx;
	}
	
	.doctor_view_title{
		border-radius: 10rpx;
		border: 1rpx solid #ADD8E6;
		color: #ADD8E6;
		padding: 0 10rpx;
		font-size: 20rpx;
		margin-right: 20rpx;
	}
	
	.doctor_recommended_goods,.doctor_hot_goods{
		line-height: 56rpx;
		padding: 0 20rpx;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		font-weight: lighter;
		margin-top: 20rpx;
		background-color: #F0F0F0;
	}
	.recommende_goods_name{
		width: 55%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		line-height: 56rpx;
		font-size: 24rpx;
		color: #111111;
	}
	.recommende_title{
		background-color: #ff7b1a;
		color: #FFFFFF;
	}
	.hot_goods_title{
		background-color: #da129f;
		color: #FFFFFF;
	}
	.sale_weight_sale_price{
		flex: 1;
		display: flex;
		justify-content: space-between;
		padding-left: 20rpx;
	}
	
	/* 视频 */
	.video_info{
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.left_content,.right_content{
		display: flex;
		flex-direction: column;
	}
	.left_item,.right_item{
		background-color: #FFFFFF;
		border-radius: 16rpx;
		width: 350rpx;
	}
	.video-images{
		position: relative;
	}
	.video_img{
		width: 350rpx;
		border-radius: 16rpx 16rpx 0 0;
		background-color: #EEEEEE;
		display: block;
	}
	.pay_btn{
		position: absolute;
		left: 145rpx;
		bottom: 40%;
		width: 60rpx;
		height: 60rpx;
	}
	
	.info_content{
		padding: 10rpx ;
		font-size: 24rpx;
	}
	.video_name{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 32rpx;
		color: #111111;
	}
	
	.category_list{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
	}
	.list_item{
		line-height: 28rpx;
		padding: 0 15rpx ;
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
	
	.video_goods{
		display: flex;
		align-items: center;
		padding-bottom: 10rpx;
	}
	.goods_img{
		width: 100rpx;
		height: 100rpx;
		background-color: #F0f0f0;
	}
	.video_goods_info{
		flex: 1;
		height: 80rpx;
		padding: 0 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.video_goods_name{
		font-weight: lighter;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.video_goods_sale_price{
		color: #fa3475;
	}
	
	.user_info{
		display: flex;
		align-items: center;
	}
	.head_ico-nick_name{
		display: flex;
		flex: 1;
		align-items: center;
	}
	.head_ico{
		width: 48rpx;
		height: 48rpx;
		border-radius: 24rpx;
		margin-right: 10rpx;
		background-color: #F0F0F0;
	}
	.nick_name{
		font-size: 20rpx;
		color: #111111;
		font-weight: lighter;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
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
	
</style>
