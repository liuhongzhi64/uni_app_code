<template>
	<view class="my_comment">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<view class="top-swiper-content" 
			 :class="{'active' : tabIndex==index}" 
			 v-for="(item,index) in tabBars" :key='index'
			 @tap='tabtap(index,item.type)'>{{item.name}}
				<view class="swiper-tab-line" v-if="tabIndex==index" ></view>
			</view>
		</view>
		<view class="comment-content" :style="[{'padding-top':menuBottom+50+'px','min-height':height-menuBottom-50+'px'}]">
			<view class="no-content" v-if="contentList.length==0">
				<image src="../../static/images/cartBg.png" mode="widthFix"></image>
				<view class="hint">喵~ 暂无相关内容</view>
			</view>
			<view class="content-item"  v-else >
				<view class="have-content" >
					<view class="comment_item" v-for="(item,index) in contentList" :key='index'>
						<view class="item_top_content">
							<image class="goods_img" :src="requestUrl+item.img" mode="widthFix"></image>
							<view class="comment_item_content">
								<view class="spu_name"> {{ item.spu_name }} </view>
								<view class="commtent_hint" v-if="tabIndex==0">
									<text class="commtent_text"> 评价完成得 <text> 30 </text> 喵豆 </text>
									<navigator :url="'/pages/my/write_comment?id='+item.id+'&sku_id='+item.sku_id" class="write_comment">评价</navigator>
								</view>
								<view class="score" v-else>
									评分 : 
									<view class="star-list">
										<view class="star-img" v-for="(i,k) in imgs" :key="k" >
											<image class="star" :src="i.id>item.point?src2:src1"></image>
										</view>
									</view>
									<view class="top-right" v-if="item.point==1||item.point==2">较差</view>
									<view class="top-right" v-else-if="item.point==3">一般</view>
									<view class="top-right" v-else-if="item.point==4">满意</view>
									<view class="top-right" v-else>非常满意</view>
								</view>
							</view>
						</view>
						<view class="item_bottom" v-if="tabIndex==1">
							<view class="user_comment"> {{ item.contents }} </view>
							<view class="whether_delete">
								<view class="is_show" v-if="item.is_anonymous==1"> 已经匿名评价 </view>
								<view class="is_show" v-else></view>
								<button type="default" size="mini" class="operation_delete" @tap="delete_comment(item.id)"> 删除 </button>
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
				title: '我的评价',
				tabBars: [
					{
						name: '待评价',
						type: 0
					},
					{
						name: '已评价',
						type: 1
					}
				],
				tabIndex:0,
				listType:0,
				contentList:[
					{
						id:4,
						is_anonymous:0,//是否匿名  1 匿名 0不匿名
						contents:"测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是",//评价内容
						point:6,//评价分数
						img:'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',//商品图片
						spu_name:'测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是' ,//商品名称
						sku_id:13
					},
					{
						id:5,
						is_anonymous:1,//是否匿名  1 匿名 0不匿名
						contents:"测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是",//评价内容
						point:3,//评价分数
						img:'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',//商品图片
						spu_name:'测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是,测试测序这是' ,//商品名称
						sku_id:12
					}
				],
				requestUrl:'',
				offset:0,
				imgs: [{
					id: 1
				}, {
					id: 2
				}, {
					id: 3
				}, {
					id: 4
				}, {
					id: 5
				}],
				src1: 'https://img-blog.csdnimg.cn/20200610110052243.png',
				src2: 'https://img-blog.csdnimg.cn/20200610110053850.png',
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			if(options.index){
				that.listType = options.index
				that.tabIndex = options.index
			}
			that.get_my_comment()
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.get_my_comment()
		},
		onReady() {
			let that = this;
			// 判定运行平台
			that.height = uni.getSystemInfoSync().screenHeight;
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
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
				that.menuLeft = 278
			}
		},
		methods: {
			get_my_comment:function(){
				let that = this
				let dataInfo = {
					interfaceId:'mygoodscommentlist',
					type:that.listType,
					offset:that.offset,
					limit:4
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.contentList = that.contentList.concat(data)
					}
				})
			},
			tabtap: function(index = 0, type = 0) {
				let that = this
				that.tabIndex = index;
				that.listType = type //类型 0待评价 1已评价
				// that.contentList = []
				// that.get_my_comment()
			},
			delete_comment:function(id){
				let that = this
				// console.log(id)
				uni.showModal({
					title: '提示',
					content: '确定删除此评价？',
					success: function (res) {
					    if (res.confirm) {
					      let dataInfo = {
							  interfaceId:'deletegoodscomment',
							  goods_comment_id:id
						  }
						  that.request.uniRequest("goods", dataInfo).then(res => {
						  	if (res.data.code == 1000 && res.data.status == 'ok') {
						  		uni.showToast({
						  			title:'删除成功',
						  			duration: 1000
						  		})
						  	}else{
								uni.showToast({
									title:res.data.message,
									duration: 1000,
									icon:'none'
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
	.my_comment {
		background-color: #F0F0F0;
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
	.top-swiper-content{
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
		left: 162rpx;
	}
	.no-content{
		margin-top: 140rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.no-content image{
		width: 525rpx;
	}
	.no-content .hint{
		color: #9e9e9e;
		font-size: 28rpx;
		margin-top: 56rpx;
	}
	.have-content{
		margin-top: 20rpx;
		height: 100%;
	}
	.comment_item{
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
		border-radius: 24rpx;
		padding: 30rpx;
		
	}
	.item_top_content{
		display: flex;
		justify-content: space-between;
	}
	.goods_img{
		width: 200rpx;
	}
	.comment_item_content{
		flex: 1;
		padding: 10rpx 0 10rpx 20rpx;
		font-size: 24rpx;
		/* height: 180rpx; */
	}
	.spu_name{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.commtent_hint{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		padding-top: 20rpx;
	}
	.commtent_text{
		font-size: 20rpx;
	}
	.commtent_text text{
		color: #fa3475;
	}
	.write_comment{
		padding: 0 20rpx;
		line-height: 30rpx;
		border-radius: 15rpx;
		color: #fa3475;
		border: 1rpx solid #fa3475;
	}
	.score{
		padding-top: 20rpx;
		display: flex;
		align-items: center;
	}
	.star-list {
		display: flex;
		align-items: center;
		padding-left: 20rpx;
	}
	
	.star {
		width: 24rpx;
		height: 24rpx;
		margin: 0 5rpx;
		vertical-align: middle;
	}
	.star-img{
		display: flex;
		align-items: center;
	}
	.top-right {
		color: #fa3475;
		padding-left: 20rpx;
	}
	.item_bottom{
		font-size: 24rpx;
		padding: 20rpx 0 0;
	}
	.user_comment{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.whether_delete{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 20rpx;
	}
	.is_show{
		flex: 1;
		font-weight: lighter;
	}
	.operation_delete{
		width: 140rpx;
		line-height: 42rpx;
		border: 1rpx solid #999999;
		border-radius: 22rpx;
		color: #999999;
	}
	.operation_delete::after{
		border: none;
	}
</style>
