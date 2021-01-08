<template>
	<view class="my_collection">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<view class="top-swiper-content" :class="{'active' : tabIndex==index}" v-for="(item,index) in tabBars" :key='index'
			 @tap='tabtap(index,item.type)'>{{item.name}}
				<view class="swiper-tab-line" v-if="tabIndex==index"></view>
			</view>
		</view>
		<view class="my_collection-content" :style="[{'padding-top':menuBottom+50+'px','min-height':height-menuBottom-50+'px'}]">
			<view class="no_have_collection" v-if="content_list.length==0">
				<image src="https://xcx.hmzixin.com/upload/images/3.0/no_comment.png" mode="widthFix"></image>
				<view class="no_have_hint">
					喵 ! 暂无相关内容
				</view>
				<view class="no_have_button">
					<button class="go_index" type="default" @tap="go_to_pages(tabIndex)"> 去看看 </button>
				</view>
			</view>
			
			<view class="have_collection" v-else>
				<!-- 商品 -->
				<view class="content-list clearfix"  v-for="(item,index) in content_list" :key='index' v-if="tabIndex==0">
					<view class="top-content" @tap="good_detail(item.sku_id,item.encrypted_id)">
						<view class="head-image">
							<image class="head_img" :src="requestUrl+item.head_img"></image>
							<image class="spu_icon" :src="requestUrl+item.spu_icon" mode="widthFix"></image>
						</view>
						<view class="right-content">
							<view class="goods_name">{{item.goods_name}}</view>
							<view class="label-list">
								<view class="label" v-for="(i,k) in item.label.list" :key="k">
									{{ i }}
								</view>
							</view>
							<view class="porduct-price-vip-cart">
								<view class="porduct-price">
									<text>￥</text> {{item.sale_price}}
								</view>
								<view class="vip-cart-price" v-if="item.member.member_title">
									<text class="vip-cart"> {{ item.member.member_title }} </text>
									<text class="vip-price">￥ {{ item.member.price }} </text>
								</view>
							</view>
							<!-- 预约和好评 -->
							<view class="subscribe-goodReputation">
								<!-- 预约 -->
								<view class="subscribe"> {{ item.sales }} 预约 </view>
								<!-- 好评 -->
								<view class="goodReputation"> {{ item.rate }} %好评 </view>
							</view>
						</view>
					</view>
					<view class="delete-see-similarity">
						<button class="delete" @tap='delete_item(item.encrypted_id)' type="default" size="mini"> 删除 </button>
						<button class="see-similarity" type="default" size="mini" @tap="see_similar(item.category_id)"> 看相似 </button>
					</view>
				</view>
				<!-- 医生 -->
				<view class="my_collection_doctor" v-if="tabIndex==1">
					<view class="swiper-item" v-for="(item,index) in content_list" :key='index'>
						<view class="swiper-item-content">
							<view class="item-top-content" @tap='go_to_doctor(item.id,requestUrl+item.heading)'>
								<view class="head-portrait">
									<image :src="requestUrl+item.heading"></image>
								</view>
								<view class="middle-content">
									<view class="middle-doctor-name">
										{{item.name}} <text>{{item.zhicheng}}</text>
									</view>
									<view class="employed_time-case_num">
										<view class="employed_time"> 从业经验:{{ item.employed_y }}年</view>
										<view class="case_num">案列数:{{item.case_num}}</view>
									</view>
									<view class="goods_category">
										<view class="goods_category-title">擅长</view>
										<text class='goods_category-item' v-for="(j,k) in item.goods_project" :key='k'>
											{{j}}<text>、</text>
										</text>
									</view>
									<view class="doctor_view">
										<view class="doctor_view_content">
											<view class='doctor_view_title'>观点 </view>
											<text class="view_content">{{item.view}}</text>
										</view>
									</view>
								</view>
							</view>
							<view class="consult" @tap='cancel_like(item.id)'> 删除 </view>
						</view>
						<view class="recommended_goods" @tap='good_detail(item.recommended_goods.id,item.recommended_goods.encrypted_id)'
						 v-if="item.recommended_goods.length>0">
							<view class="goods_left">
								<view class="goods_title">推</view>
								<view class="gooss_content">{{item.recommended_goods.goods_name}}</view>
							</view>
							<view class="goods_right">
								<text class="sale_weight">
									{{item.recommended_goods.sale_weight}}人预约
								</text>
								<text class="sale_price"> <text>￥</text> {{item.recommended_goods.sale_price}}</text>
							</view>
						</view>
						<view class="is_hot" @tap='good_detail(item.hot_goods.id,item.hot_goods.encrypted_id)' v-if="item.hot_goods.length>0">
							<view class="goods_left">
								<view class="is_hot_title">热</view>
								<view class="gooss_content">{{ item.hot_goods.goods_name }}</view>
							</view>
							<view class="goods_right">
								<text class="sale_weight">
									{{item.hot_goods.sale_weight}}人预约
								</text>
								<text class="sale_price"> <text>￥</text> {{item.hot_goods.sale_price}}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 日记 -->
				<view class="my_collection_diary" v-show="tabIndex==2">
					<view class="detail-content">
						<view class="left-content">
							<view class="subject-content ">
								<view class="subject-content-list" v-for="(item,index) in content_list" :key='index' v-if="index%2==0">
									<view class="diary-item-top" @tap='diary_detail(item.id)'>
										<view class="image-label">
											<view class="diary-images">
												<image class="diary-image" :src="requestUrl+item.cover_img" mode="widthFix"></image>
												<view class="diary_label">{{item.label}}</view>
											</view>										
										</view>
										<view class="diary-title" v-if="item.name"> {{item.name}} </view>
										<view class="diary-title" v-if="item.title"> {{item.title}} </view>
										<view class="category_name-doctor_name" v-if="item.category_name||item.doctor_name">
											<view class="category_name" v-if="item.category_name"> {{item.category_name}} </view>
											<view class="doctor_name" v-if="item.doctor_name"> {{item.doctor_name}} </view>
										</view>
										<view class="goods_name">{{item.goods_name}}</view>
									</view>
									<view class="head_ico-nick_name-collect_num">
										<view class="head_ico-nick_name">
											<image class="head_ico" :src="requestUrl+item.head_ico" ></image>
											<text class="nick_name">{{item.nick_name}}</text>
										</view>
										<view class="is_no_collect" v-if="item.is_collect==0">
											<view class="like">
												<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
											</view>
											{{ item.collect_num || 0 }}
										</view>
										<view class="collect_num" v-else>
											<view class="like">
												<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
											</view>
											{{ item.collect_num }}
										</view>
									</view>
									<view class="diary_operation">
										<button class="consultant_diary" type="default" size="mini" @tap="go_consult"> 咨询 </button>
										<button class="delete_diary" type="default" size="mini" @tap="delete_diary(item.id)"> 删除 </button>
									</view>
								</view>
							</view>
						</view>
						<view class="diary_right-content">
							<view class="subject-content ">
								<view class="subject-content-list" v-for="(item,index) in content_list" :key='index' v-if="index%2==1">
									<view class="diary-item-top" @tap='diary_detail(item.id)'>
										<view class="image-label">
											<view class="diary-images">
												<image class="diary-image" :src="requestUrl+item.cover_img" mode="widthFix"></image>
												<view class="diary_label">{{item.label}}</view>
											</view>
										</view>
										<view class="diary-title" v-if="item.name"> {{item.name}} </view>
										<view class="diary-title" v-if="item.title"> {{item.title}} </view>
										<view class="category_name-doctor_name" v-if="item.category_name||item.doctor_name">
											<view class="category_name" v-if="item.category_name"> {{item.category_name}} </view>
											<view class="doctor_name" v-if="item.doctor_name"> {{item.doctor_name}} </view>
										</view>
										<view class="goods_name" v-if="item.goods_name">{{item.goods_name}}</view>
									</view>
									<view class="head_ico-nick_name-collect_num">
										<view class="head_ico-nick_name">
											<image class="head_ico" :src="requestUrl+item.head_ico" ></image>
											<text class="nick_name">{{item.nick_name}}</text>
										</view>
										<view class="is_no_collect" v-if="item.is_collect==0">
											<view class="like">
												<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
											</view>
											{{ item.collect_num || 0 }}
										</view>
										<view class="collect_num" v-else>
											<view class="like">
												<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
											</view>
											{{ item.collect_num }}
										</view>
									</view>
									<view class="diary_operation">
										<button class="consultant_diary" type="default" size="mini" @tap="go_consult"> 咨询 </button>
										<button class="delete_diary" type="default" size="mini" @tap="delete_diary(item.id)"> 删除 </button>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 问答 -->
				<view class="questions" v-if="tabIndex==3">
					<view class="questions_content" v-for="(item,index) in content_list" :key='index'>
						<view class="questions_top_content" @tap="questions_detail(item.id)">
							<view class="ask-contnet">
								<view class="ask_top">
									<view class="ask_hint"> 问 </view>
									<view class="ask-title"> {{ item.q_contents }} </view>
								</view>
								<view class="ask_list" v-if="item.q_img_list.length>0">
									<scroll-view class="ask_list_item" scroll-x="true">
										<view class="item_img" v-for="(i,k) in item.q_img_list" :key="k">
											<image class="ask_img" :src="requestUrl+i.img" > </image>
											<image class="this_video" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" v-if="i.type==1"></image>
										</view>
									</scroll-view>
								</view>
							</view>
							<view class="answer">
								<view class="answer_top">
									<view class="answer_hint"> 答 </view>
									<view class="answer_title"> {{ item.a_contents }} </view>
								</view>
								<view class="answer_list" v-if="item.a_img_list.length>0">
									<scroll-view class="ask_list_item" scroll-x="true">
										<view class="item_img" v-for="(i,k) in item.a_img_list" :key="k">
											<image class="ask_img" :src="requestUrl+i.img" > </image>
											<image class="this_video" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" v-if="i.type==1"></image>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>
						<view class="questions_buttom">
							<view class="browse_content">
								<text v-if="item.views_num<9999"> {{ item.views_num }} </text>  
								<text v-else > 9999+ </text>
								浏览 
							</view>
							<view class="set_ask" @tap="go_consult"> <image src="../../static/images/advisory.png" ></image> 提问 </view>
							<view class="delete_questions" @tap="delete_questions(item.id)"> 删除 </view>
						</view>
					</view>
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar
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
				title: '我的收藏',
				tabBars: [{
						name: '商品',
						type: 0
					},
					{
						name: '医生',
						type: 1
					},
					{
						name: '买家秀',
						type: 2
					},
					{
						name: '问答',
						type: 3
					},
				],
				tabIndex: 0, // 选中的顶部的导航，
				listType: 0, //类型
				requestUrl: '',
				offset: 0,
				content_list: []
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.get_my_collection()
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.get_my_collection()
		},
		onReady() {
			let that = this;
			// 判定运行平台
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
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
		methods: {
			//获取我的收藏
			get_my_collection: function() {
				let that = this
				let interfaceId = ''
				if (this.listType == 0) { //类型 0商品 1医生 2日记 3问答
					interfaceId = 'collectlistgoods'
				} else if (this.listType == 1) {
					interfaceId = 'collectlistdoctor'
				} else if (this.listType == 2) {
					interfaceId = 'collectlistdiary'
				} else if (this.listType == 3) {
					interfaceId = 'collectlistqa'
				}
				let dataInfo = {
					interfaceId: interfaceId,
					offset: 6 * that.offset,
					limit: 6
				}
				that.request.uniRequest("my", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if (data.length > 0) {
							that.content_list = that.content_list.concat(data)
						} else if (that.offset > 0) {
							uni.showToast({
								title: '没有更多了',
								duration: 1000,
								icon: 'none'
							})
						}
					}
				})
			},
			tabtap: function(index, type) {
				let that = this
				that.content_list = []
				that.offset = 0
				that.tabIndex = index;
				that.listType = type //类型 0商品 1医生 2日记 3问答
				that.get_my_collection()
			},
			// 删除商品
			delete_item: function(encrypted_id) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除此收藏？',
					success: function(res) {
						if (res.confirm) {
							let dataInfo = {
								interfaceId: 'cancelcollectgoodsspu',
								encrypted_id: encrypted_id
							}
							that.request.uniRequest("goods", dataInfo).then(res => {
								if (res.data.code == 1000 && res.data.status == 'ok') {
									that.tabtap(that.tabIndex, that.listType)
									uni.showToast({
										title: '删除成功',
										duration: 1000
									})
								}
							})
						}
					}
				})
			},
			// 删除医生
			cancel_like: function(id) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除此收藏？',
					success: function(res) {
						if (res.confirm) {
							let dataInfo = {
								interfaceId: 'doctor_collect',
								doctor_id: id,
								status: '1'
							}
							that.request.uniRequest("doctor", dataInfo).then(res => {
								if (res.data.code == 1000 && res.data.status == 'ok') {
									that.tabtap(that.tabIndex, that.listType)
									uni.showToast({
										title: '删除成功',
										duration: 1000
									})
								}
							})
						}
					}
				})
			},
			// 取消收藏
			delete_diary:function(id){
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除此收藏？',
					success: function(res) {
						if (res.confirm) {
							let dataInfo = {
								interfaceId:'cancelcollectdiary',
								diary_id:id.toString()
							}
							that.request.uniRequest("diary", dataInfo).then(res => {
								if (res.data.code == 1000 && res.data.status == 'ok') {
									that.tabtap(that.tabIndex, that.listType)
									uni.showToast({
										title: '删除成功',
										duration: 1000
									})
								}
							})
						}
					}
				})
				
			},
			good_detail: function(id, encrypted_id) {
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&encrypted_id=${encrypted_id}`,
				})
			},
			// 咨询
			go_consult:function(){
				uni.navigateTo({
					url: `/pages/consultation/consultation`,
				})
			},
			// 看相似
			see_similar: function(category_id) {
				uni.navigateTo({
					url: `/pages/goods/goods_list?id=${category_id}`,
				})
			},
			go_to_pages: function(index) {
				if (index == 0) {
					uni.reLaunch({
						url: '/pages/goods/goods_classify'
					})
				} else if (index == 1) {
					uni.reLaunch({
						url: '/pages/doctor/doctor'
					})
				} else if (index == 2) {
					uni.reLaunch({
						url: '/pages/diary/diary'
					})
				} else {
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}
			},
			go_to_doctor: function(doctorId, heading) {
				uni.navigateTo({
					url: `/pages/doctor/doctor_detail?id=${doctorId}&&heading=${heading}`,
				})
			},
			diary_detail:function(id){
				uni.navigateTo({
					url: `/pages/diary/diary_detail?id=${id}`,
				})
			},
			// 问答详情
			questions_detail:function(id){
				uni.navigateTo({
					url: `/pages/goods/goods_detail_problem_detail?id=${id}`,
				})
			},
			// 删除问答
			delete_questions:function(id){
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除此收藏？',
					success: function(res) {
						if (res.confirm) {
							let dataInfo = {
								interfaceId: 'cancelcollectqa',
								qa_id: id
							}
							that.request.uniRequest("qa", dataInfo).then(res => {
								if (res.data.code == 1000 && res.data.status == 'ok') {
									that.tabtap(that.tabIndex, that.listType)
									uni.showToast({
										title: '删除成功',
										duration: 1000
									})
								}
							})
						}
					}
				})
			}
		
		}
	}
</script>

<style scoped>
	.my_collection {
		background-color: #F0F0F0;
	}

	.top-swiper-tab {
		position: fixed;
		height: 80rpx;
		background-color: #FFFFFF;
		z-index: 999;
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

	.content-list {
		margin-top: 20rpx;
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}

	.top-content {
		display: flex;
		padding-bottom: 16rpx;
		border-bottom: 2rpx solid #F0F0F0;
		align-items: center;
		align-items: center;
	}

	.head-image {
		position: relative;
	}

	.head-image .head_img {
		width: 240rpx;
		height: 240rpx;
	}

	.spu_icon {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
		opacity: 0.8;
		width: 120rpx;
		height: 40rpx;
	}

	.right-content {
		padding: 10rpx 0 10rpx 30rpx;
		height: 220rpx;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.goods_name {
		font-size: 26rpx;
		line-height: 36rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.label-list {
		display: flex;
		margin-top: 12rpx;
	}

	.label {
		background-color: #999999;
		text-align: center;
		width: 80rpx;
		line-height: 26rpx;
		border-radius: 4rpx;
		color: #FFFFFF;
		font-size: 16rpx;
		margin-right: 10rpx;
	}

	.porduct-price-vip-cart {
		display: flex;
		align-items: center;
		padding-top: 10rpx;
	}

	.porduct-price {
		font-size: 52rpx;
		padding-right: 20rpx;
		color: #fa3475;
	}

	.porduct-price text {
		font-size: 36rpx;
	}

	.vip-cart-price {
		display: flex;
		align-items: center;
	}

	.vip-cart {
		background-image: linear-gradient(0deg, #000000 0%, #2c2c2c 100%), linear-gradient(#282828, #282828);
		font-size: 16rpx;
		padding: 7rpx 10rpx;
		line-height: 20rpx;
		text-align: center;
		color: #fefefe;
		border-top-left-radius: 8rpx;
		border-bottom-left-radius: 8rpx;
	}

	.vip-price {
		font-size: 20rpx;
		color: #282828;
		padding: 4rpx 8rpx;
		line-height: 20rpx;
		text-align: center;
		border: 1rpx solid #282828;
		border-top-right-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
	}

	.subscribe-goodReputation {
		display: flex;
		font-size: 20rpx;
		padding-top: 16rpx;
	}

	.subscribe {
		color: #666666;
		margin-right: 40rpx;
	}

	.goodReputation {
		color: #fa3576;
	}

	.delete-see-similarity {
		float: right;
		display: flex;
		margin-top: 24rpx;
	}

	.clearfix:after {
		/*伪元素是行内元素 正常浏览器清除浮动方法*/
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.delete {
		width: 120rpx;
		line-height: 50rpx;
		border-radius: 25rpx;
		border: 1rpx solid #e0619d;
		color: #f46eae;
		font-size: 24rpx;
		border: 1rpx solid #E0619D;
		margin-right: 20rpx;
	}

	.delete::after,
	.see-similarity::after {
		border: none;
	}

	.see-similarity {
		width: 170rpx;
		line-height: 50rpx;
		background-image: linear-gradient(-90deg, #fa3475 0%, #ff6699 100%);
		border-radius: 25rpx;
		color: #FFFFFF;
		font-size: 24rpx;
		border: none;
	}

	.no_have_collection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-top: 80rpx;
	}

	.no_have_collection image {
		width: 60%;
	}

	.no_have_hint {
		padding-top: 30rpx;
		color: #fa3475;
		font-size: 24rpx;
	}

	.no_have_button {
		padding-top: 30rpx;
		width: 100%;
	}

	.go_index {
		width: 60%;
		background-image: linear-gradient(-90deg, #fa3475 0%, #ff6699 100%);
		line-height: 60rpx;
		border-radius: 30rpx;
		color: #FFFFFF;
	}

	.go_index::after {
		border: none;
	}

	.swiper-item {
		background-color: #2A2A2A;
		padding: 30rpx 40rpx;
		margin-top: 20rpx;
		border-radius: 24rpx;
	}

	.swiper-item-content {
		font-size: 24rpx;
		position: relative;
	}

	.item-top-content {
		display: flex;
		justify-content: space-between;
	}

	.head-portrait image {
		height: 120rpx;
		width: 120rpx;
		border-radius: 60rpx;
	}

	.middle-content {
		flex: 1;
		margin: 0 10rpx;
	}

	.middle-doctor-name {
		color: #ffffff;
		font-size: 34rpx;
		width: 80%;
	}

	.middle-doctor-name text {
		font-size: 26rpx;
		margin-left: 10rpx;
	}

	.employed_time-case_num {
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #F0F0F0;
		font-size: 24rpx;
		margin-top: 15rpx;
		margin-bottom: 25rpx;
	}

	.goods_category {
		font-size: 24rpx;
		display: flex;
		flex-wrap: wrap;
		color: #999999;
	}

	.goods_category-title {
		width: 50rpx;
		line-height: 24rpx;
		border-radius: 5rpx;
		border: solid 1rpx #e85c9e;
		color: #e85c9e;
		font-size: 20rpx;
		margin-right: 10rpx;
		text-align: center;
	}

	.doctor_view {
		width: 100%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		color: #999999;
		margin-top: 10rpx;
	}

	.doctor_view_content {
		display: flex;
	}

	.doctor_view_title {
		width: 50rpx;
		line-height: 24rpx;
		border-radius: 5rpx;
		border: solid 1rpx #689efb;
		font-size: 20rpx;
		color: #689efb;
		text-align: center;
		margin-right: 10rpx;
	}

	.recommended_goods {
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
		margin-bottom: 15rpx;
	}

	.goods_left {
		display: flex;
		align-items: center;
	}

	.goods_title {
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		background-color: #ff7b1a;
		border-radius: 5rpx;
		text-align: center;
		margin-right: 10rpx;
	}

	.gooss_content {
		width: 90%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		line-height: 30rpx;
	}

	.goods_right {
		display: flex;
		align-items: center;
	}

	.sale_weight {
		color: #999999;
		margin-right: 10rpx;
		min-width: 100rpx;
		text-align: right;
	}

	.sale_price {
		font-size: 28rpx;
		color: #cfbe85;

	}

	.sale_price text {
		font-size: 24rpx;
	}

	.is_hot {
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
	}

	.is_hot_title {
		width: 30rpx;
		line-height: 30rpx;
		height: 30rpx;
		background-color: #da129f;
		border-radius: 5rpx;
		text-align: center;
		margin-right: 10rpx;
	}

	.consult {
		width: 110rpx;
		line-height: 46rpx;
		border-radius: 23rpx;
		border: 2rpx solid #999999;
		color: #999999;
		font-size: 24rpx;
		text-align: center;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 9;
	}
	
	.my_collection_diary{
		height: 100%;
	}
	.detail-content {
		padding: 20rpx ;
		display: flex;
		justify-content: space-between;
	}

	.left-content,
	.diary_right-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}


	.subject-content-list {
		background-color: #FFFFFF;
		border-radius: 16rpx;
		margin-bottom: 10rpx;
		width: 350rpx;
		display: flex;
		flex-direction: column;

		height: auto;
	}

	.diary-images {
		position: relative;
	}

	.diary-image {
		width: 350rpx;
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

	.diary-label {
		padding: 0 20rpx;
		display: flex;
		flex-wrap: wrap;
	}

	.label-name {
		line-height: 26rpx;
		font-size: 16rpx;
		padding: 0 14rpx;
		background-color: #d3d3d3;
		color: #4f4f4f;
		margin-right: 10rpx;
	}

	.diary-images .diary_label {
		position: absolute;
		right: 0;
		bottom: 10rpx;
		line-height: 40rpx;
		background-color: #fa3475;
		border-radius: 16rpx 0rpx 0rpx 0rpx;
		opacity: 0.8;
		color: #FFFFFF;
		font-size: 24rpx;
		margin-right: 0;
		padding: 0 15rpx;
	}

	.category_name-doctor_name {
		display: flex;
		padding: 15rpx 20rpx;
	}

	.category_name,
	.doctor_name {
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

	.goods_name {
		padding: 0 20rpx;
		margin-bottom: 10rpx;
		color: #999999;
		font-size: 20rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.head_ico-nick_name-collect_num {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx 24rpx;
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
	
	.diary_operation{
		border-top: 1rpx solid #D3D3D3;
		padding: 20rpx 10rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #D3D3D3;
	}
	.diary_operation button{
		border: 1rpx solid #D3D3D3;
		color: #D3D3D3;
		line-height: 40rpx;
		width: 40%;
		border-radius: 20rpx;
	}
	.diary_operation button::after{
		border: none;
	}
	
	.questions_content{
		padding: 0 20rpx;
	}
	.ask_top,.answer_top{
		display: flex;
		font-size: 24rpx;
		padding: 20rpx 0;
	}
	.ask_hint,.answer_hint{
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 20rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20rpx;
		color: #FFFFFF;
		background-image: linear-gradient(-45deg, #8834fa 0%, #bc66ff 100%);
	}
	.answer_hint{
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}
	.ask-title,.answer_title{
		flex: 1;
		padding-left: 20rpx;
		color: #999999;
	}
	.answer_title{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
	}
	.answer{
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid #999999;
	}
	
	.ask_list,.answer_list{
		display: flex;
		align-items: center;
		height: 220rpx;
		width: 100%;
	}
	.ask_list_item{
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.item_img{
		width: 100%;
		display: inline-block;
		width: 220rpx;
		height: 220rpx;
		background-color: #000000;
		margin-right: 20rpx;
		position: relative;
	}
	.ask_img {
		width: 220rpx;
		height: 220rpx;
		border-radius: 16rpx;
	}
	.this_video{
		position: absolute;
		width: 60rpx;
		height: 60rpx;
		top: 80rpx;
		left: 80rpx;
		opacity: 0.8;
	}
	.item_img:last-child{
		margin-right: 0;
	}
	.questions_buttom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		padding: 30rpx 0;
	}
	.browse_content{
		color: #fa3475;
	}
	.browse_content text{
		padding-right: 10rpx;
	}
	.set_ask{
		display: flex;
		align-items: center;
	}
	.set_ask image{
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}
	.delete_questions{
		width: 120rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
		border: 1rpx solid #D3D3D3;
		text-align: center;
		color: #999999;
	}
	.delete_questions::after{
		border: none;
	}
	
</style>
