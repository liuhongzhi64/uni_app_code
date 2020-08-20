<template>
	<view class="my_order_refund_reason"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		
		<view class="my_order_refund-content" :style="[{'padding-top':menuBottom+10+'px',height:height-menuBottom-10+'px'}]">
			<scroll-view class="my_order_refund-contents">
				<template>
					<view class="refund-content">
						<view class="refund-hint">
							<view class="hint-title">温馨提示:</view>
							<view class="hint-list" v-for="(i,k) in hintList" :key='k'> {{i}} </view>
						</view>
						<view class="refund-cause">
							<view class="refund-cause-titlt"> 退款原因 <text>(必填)</text> </view>
							<checkbox-group class="list-content" @change="checkboxChange">
								<label class="refund-cause-list" v-for="(item,index) in causeList" :key="index">
									<view>
										<checkbox :value="item" :checked="item.checked" color="#ff5f93" />
									</view>
									<view class="refund-cause-text">{{item}}</view>
								</label>
							</checkbox-group>
							<view class="text-input">
								 <textarea class="text-inputs" @input="userCause"  placeholder-style="color: #b2b2b2;" placeholder="原因说明(选填)"/>
							</view>
						</view>
						
						<view class="refund-user"> 退款联系人：张亮 </view>
						
						<view class="user-phone"> 联系电话：188****4357 </view>
						
						
					</view>
				</template>
			</scroll-view>
		</view>
		
		<view class="bottom-refund-hint">
			<view class="refund-hint-content">在线支付金额将在1-3个工作日原路退回，喵豆/余额将直接退回账户中，积分一旦抵扣后，将无法退回。</view>
			
			<view class="all-refund-apply-for">
				<view class="all-refund-sum">
					<view class="all-refund-title">合计退款：</view>
					<view class="sum"> <text>￥</text> 50000 </view>
				</view>
				<view class="apply-for-refund">
					<button class="apply-for" type="default"  plain="true" @tap='submitApplyFor'>申请退款</button>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import swiperTabHead from "../../components/swiper-tab.vue";
	export default {
		components: {
			topBar,
			swiperTabHead,
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
				backImage: '../static/images/back2.png',
				title: '申请退款',
				hintList: ['1、若发生整单退款，或是部分退款，我院有权收回相关赠品，并根据退款/退单后的情况重新计算优惠信息和赠品信息。', '2、若邮寄商品一律不支持无理由退货；',
					'邮寄中的商品，申请退款需要等待人工审核，我院需确认回收到货品后方可退款；', '4、关于退款金额，将原路返还。'
				],
				causeList:['价格原因','服务不好','想多对比几家','在本医院购买','不想要了','其他原因'],
				changeList:[],
				userInputContent:''
			}
		},
		onReady() {
			let that = this;
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
		},
		methods: {
			checkboxChange: function(e) {
				this.changeList = e.detail.value;
			},
			userCause:function(e){
				 this.userInputContent = e.detail.value
			},
			submitApplyFor:function(){
				console.log('退款原因:',this.changeList,'输入的原因:',this.userInputContent)
			}
		}
	}
</script>

<style scoped>
	.my_order_refund-content{
		background-color: #F6F6F6;
		padding-bottom: 240rpx;
	}
	.my_order_refund-contents{
		
	}
	.refund-content {
		background-color: #F6F6F6;
	}

	.refund-hint {
		background-color: #FFFFFF;
		padding: 30rpx 53rpx 30rpx 36rpx;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #111111;
		margin-bottom: 20rpx;
	}

	.refund-cause {
		background-color: #FFFFFF;
		padding: 40rpx;
	}

	.refund-cause-titlt {
		font-size: 24rpx;
		color: #111111;
		font-weight: bold;
		margin-bottom: 43rpx;
	}

	.refund-cause-titlt text {
		font-weight: 500;
		margin-left: 10rpx;
	}
	.list-content{
		display: flex;
		flex-wrap: wrap;
	}
	.refund-cause-list{
		display: flex;
		width: 50%;
		margin-bottom: 44rpx;
		align-items: center;
	}
	.refund-cause-text{
		font-size: 28rpx;
		color: #333333;
	}
	.text-input{
		height: 215rpx;
		border-radius: 16rpx;
		border: 1rpx solid  #999999;
		padding: 25rpx 0 0 18rpx;
	}
	.text-inputs{
		border: 0;
		height: 215rpx;
		font-size: 26rpx;
		color: #b2b2b2;
	}
	.refund-user,.user-phone{
		margin-top: 20rpx;
		background-color: #FFFFFF;
		padding: 32rpx 40rpx;
		font-size: 24rpx;
	}
	.bottom-refund-hint{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.refund-hint-content{
		color: #FFFFFF;
		font-size: 20rpx;
		line-height: 34rpx;
		background-color: #000000;
		padding: 16rpx 61rpx;
		text-align: center;
	}
	.all-refund-apply-for{
		padding: 12rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.all-refund-sum{
		display: flex;
		align-items: center;
	}
	.all-refund-sum .all-refund-title{
		color: #111111;
		font-size: 28rpx;
	}
	.all-refund-sum .sum{
		color: #fa3475;
		font-size: 40rpx;
		margin-left: 10rpx;
	}
	.all-refund-sum .sum text{
		font-size: 24rpx;
	}
	.apply-for{
		width: 220rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx  rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;	
		color: #FFFFFF;
		border: 0;
	}
	
</style>

