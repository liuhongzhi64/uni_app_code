<template>
	<view class="ticket-content">
		<view class="ticket-items" v-for="(i,k) in ticketList" :key='k'>
			<!-- 过期时间 -->
			<view class="ticket-number-expiration-time" v-if="i.expirationTime>0">
				<view class="ticket-numer">卡券编号:{{i.serialNumber}}</view>
				<view class="expiration-time" v-if="i.state == '可使用' || i.state =='冻结中'|| i.state =='已核销'">{{i.expirationTime}}小时内过期</view>
				<view class="expiration-time" v-if="i.state == '已失效' || i.state =='已使用'"> 删除 </view>
			</view>
			<view class="ticket-items-content">
				<view class="ticket-label-writer-state-userTime">
					<view class="ticket-label-writer">
						<text class="ticket-labels" :style="[{'background-image': i.state == '可使用' || i.state =='冻结中' || i.receive>0 && i.state!='已结束'? `linear-gradient(-90deg,  ${i.goColor} 0%,  ${i.toColor} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
							{{i.ticketLabel}}
						</text>
						<text class="ticket-writer"> {{i.writer}} </text>
					</view>
					<!-- 当前状态 -->
					<view class="ticket-state" v-if="i.state&&i.state!='已结束'">当前状态:
						<text v-if="i.state == '可使用'&&i.state != '冻结中'" :style="[{'color':'#fa3475'}]">
							{{i.state}}
						</text>
						<text v-if="i.state != '可使用'&&i.state == '冻结中'" :style="[{'color':'#0073c4'}]">
							{{i.state}}
						</text>
						<text v-if="i.state == '已使用'||i.state == '已失效' ||i.state == '已核销'" :style="[{'color':'#111111'}]">{{i.state}}</text>
					</view>

					<!-- 可领取券数 -->
					<view class="can-receive" v-if="i.receive>=0 && i.receiveTime"> 可领取{{i.receive}}张 </view>
					<!-- 活动时间 -->
					<view class="user-time" v-if="i.userTime">使用时间:<text>{{i.userTime}}</text></view>
					<!-- 领取倒计时 -->
					<view class="receive-time" v-if="i.receiveTime && i.allReceive>0">
						距结束还剩
						<text class="times">23</text>
						<text class="time-line">:</text>
						<text class="times">23</text>
						<text class="time-line">:</text>
						<text class="times">23</text>
					</view>
					<view class="receive-times" v-if="!i.receiveTime && i.allReceive"> 已结束 </view>

				</view>
				<view class="ticket-images-exclusiveName" v-if="i.state" :style="[{'background-image': i.state == '可使用' || i.state =='冻结中'  ? `linear-gradient(-90deg,  ${i.goColor} 0%,  ${i.toColor} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="exclusive-name">{{i.exclusiveName}}</view>
					<view class="exclusive-price"> <text>￥</text> {{i.exclusivePrice}}</view>
					<view class="meet-price-user">满{{i.meetPriceUser}}元可用</view>

					<view class="useing-ticket" v-if="i.state == '可使用' || i.state =='冻结中'||i.state == '已核销'" :style="{'color':i.state == '已核销'?'#999999':i.toColor}">
						立即使用 </view>
					<view class="Immediately-receive useing-ticket" v-if="i.receive>0" :style="{'color':i.state=='已结束' ?  '#999999':i.toColor}">
						立即领取 </view>

				</view>

				<view class="ticket-images-exclusiveName" v-if="!i.state" :style="[{'background-image': i.receive>0 &&i.receiveTime  ? `linear-gradient(-90deg,  ${i.goColor} 0%,  ${i.toColor} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="exclusive-name">{{i.exclusiveName}}</view>
					<view class="exclusive-price"> <text>￥</text> {{i.exclusivePrice}}</view>
					<view class="meet-price-user">满{{i.meetPriceUser}}元可用</view>

					<view class="Immediately-receive useing-ticket" v-if="i.receive>0 " :style="{'color':i.receive>0&&i.receiveTime?i.toColor:'#999999'}">
						立即领取 </view>

					<view class="useing-ticket" v-if="i.receive==0&&i.allReceive>=0" @tap='goUserCard' :style="{'color':'#999999'}">
						立即使用 </view>

				</view>

			</view>
			<view class="ticketDetails" @tap='showDetails(i.serialNumber)'>
				<view class="details-title"> <text>卡券详情</text>
					<image :src="i.arrowImages" mode=""></image>
				</view>
				<view class="details-content" v-if="i.showTicketDetails">
					<view class="item-details" v-for="(i,k) in i.ticketDetails">{{i}}</view>
				</view>
			</view>
			<view class="ticket-label-images" v-if="i.state == '已使用'">
				<image src="../static/images/state2.png" mode=""></image>
			</view>
			<view class="ticket-label-images" v-if="i.state == '已失效'">
				<image src="../static/images/state1.png" mode=""></image>
			</view>
			<view class="ticket-label-images" v-if="i.state == '已核销'" style="top: 80rpx;">
				<image src="../static/images/check.png" mode=""></image>
			</view>
			<view class="ticket-label-images" v-if="i.receive==0&&i.receiveTime&& i.uesrReceive == 2">
				<!-- 上限 -->
				<image src="../static/images/upper-limit.png" mode=""></image>
			</view>
			<view class="ticket-label-images" v-if="i.receive==0 && i.allReceive == 0">
				<!-- 已抢光 -->
				<image src="../static/images/loot-all.png" mode=""></image>
			</view>
			<view class="ticket-label-images" v-if="i.receive>0&&!i.receiveTime&& i.allReceive > 0">
				<!-- 已结束 -->
				<image src="../static/images/ticke-over.png" mode=""></image>
			</view>
		</view>
		<!-- 线上 -->
		<view class="ticket-items" v-for="(item,k) in cardsList" :key='k' v-show="item.get_end_time-time_now >0">
			<view class="ticket-number-expiration-time" v-if="item.card_no">
				<view class="ticket-numer">卡券编号:{{item.card_no}}</view>
				<view class="expiration-time" v-if="item.use_end_time - time_now > 0 ">{{ parseInt((item.use_end_time - time_now)/ 1000 / 60 / 60 % 24) }}小时内过期</view>
				<view class="expiration-time" v-else> 删除 </view>
			</view>
			<!-- 主体内容 -->
			<view class="ticket-items-content">
				<view class="ticket-label-writer-state-userTime">
					<!-- 这是领券 -->
					<view class="ticket-label-writer" >
						<text class="ticket-labels" 
						:style="[{'background-image': item.status==0 ||item.c_status==0 ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						v-if="item.card_type==1||item.card_type == 2||item.c_card_type==1||item.c_card_type==2">满减券</text>
						<text class="ticket-labels" :style="[{'background-image': item.status==0 ||item.c_status==0 ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						v-else-if="item.card_type==3||item.card_type==4||item.c_card_type==3||item.c_card_type==4">折扣券</text>
						<text class="ticket-labels" :style="[{'background-image': item.status==0 ||item.c_status==0 ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						v-else-if="item.card_type == 5||item.c_card_type==5">礼品券</text>
						<text class="ticket-labels" :style="[{'background-image': item.status==0 ||item.c_status==0 ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" v-else>体验券</text>
						<text class="ticket-writer"> {{item.show_name || item.c_show_name}} </text>
					</view>
					
					<view class="left-bottom">
						<!-- 当前状态 -->
						<view class="ticket-state" v-if="item.state">
							当前状态:
							<text v-if="item.state==0">已禁用</text> <text v-else-if='item.state==1'>可使用</text>
							<text v-else-if='item.state==2'>冻结中</text> <text v-else-if='item.state==3'>已使用</text> 
							<text v-else-if='item.state==4'>已作废</text> <text v-else-if='item.state==5'>已失效</text> 
							<text v-else>未开始</text>
						</view>
						<!-- 可领取券数 -->
						<view class="can-receive" v-if="item.get_limit-item.salecard_user_count>-1&&item.store-item.take_store>0&&item.get_end_time-time_now>0 "> 
							可领取{{item.get_limit-item.salecard_user_count}}张 
						</view>
						<!-- 活动时间 -->
						<!-- <view class="user-time">使用时间:<text>{{}}</text></view> -->
						<!-- 领取倒计时 -->
						<view class="receive-time" v-if="item.get_end_time-time_now > 0">
							距结束还剩
							<text class="times">{{ parseInt((item.get_end_time-time_now )/ 1000 / 60 / 60 % 24) }}</text>
							<text class="time-line">:</text>
							<text class="times">{{ parseInt((item.get_end_time-time_now) / 1000 / 60 % 60) }}</text>
							<text class="time-line">:</text>
							<text class="times">{{ parseInt((item.get_end_time-time_now) / 1000 % 60) }}</text>
						</view>
						<view class="receive-times" v-else> 已结束 </view>
					</view>
					
				</view>
				<view class="ticket-images-exclusiveName"
				 :style="[{'background-image': item.store-item.take_store>0 ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="exclusive-name" v-if="item.note" >{{item.note}}</view>
					<view class="no-exclusive-name" v-else></view>
					<view class="exclusive-price" :style="[{'margin-top':item.note ? '10rpx':'16rpx'}]"> <text>￥</text> {{item.condition}}</view>
					<view class="meet-price-user">满{{item.min_affect}}元可用</view>
					
					<button class="Immediately-receive useing-ticket" type="default" plain="true" 
					 :style="{'color':item.status==0 && item.store-item.take_store>0 ? item.card_style: '#999999'}"
					 @tap='getCard(item.id,item.store,item.salecard_user_count,item.get_limit,k)'
					 v-if="item.get_limit>item.salecard_user_count&&item.store>0"
					 >立即领取</button>
					<button class="useing-ticket" type="default" plain="true" v-else 
					  :disabled="item.get_end_time-time_now == 0||item.store-item.take_store==0?true:false"
					  :style="{'color':item.status==0 && item.store-item.salecard_user_count > 0 ?  item.card_style: '#999999'}"
					  v-else
					  @tap='userCard(item.id)'
					 >立即使用</button>				
				</view>

			</view>
			<view class="ticketDetails" @tap='showTicket(item.id)'>
				<view class="details-title"> <text>卡券详情</text>
					<image :src="item.arrowImages" mode=""></image>
				</view>
				<view class="details-content" v-if="item.showTicketDetails">
					<view class="item-details">{{item.intro}}</view>
				</view>
			</view>
			<!-- 提示 -->
			<view class="ticket-label-images" v-if="item.store-item.take_store==0">
				<!-- 已抢光 -->
				<image src="../static/images/loot-all.png" mode=""></image>
			</view>
			<view class="ticket-label-images" v-else-if="item.get_end_time-time_now == 0">
				<!-- 已结束 -->
				<image src="../static/images/ticke-over.png" mode=""></image>
			</view>
			<!-- 上限 -->
			<view class="ticket-label-images" v-else-if="item.get_limit-item.salecard_user_count==0">
				<image src="../static/images/upper-limit.png" mode=""></image>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			ticketList: Array,
			cardsList: Array,
			marginTop: Number,
			time_now:Number
		},
		data() {
			return {
				show:false
			}
		},
		methods: {
			// 显示卡券详情
			showDetails: function(number) {
				this.$emit('showDetails', number)
			},
			showTicket:function(id){
				this.$emit('showTicket', id)
			},
			// 领取卡券
			getCard:function(id,store,salecard_user_count,get_limit,index){
				let prompt = ''
				if(get_limit>salecard_user_count&&store>0){
					this.$emit('getCards',id,prompt,index)
				}
				else{
					prompt = '无法领取该卡券'
					this.$emit('getCards',id,prompt,index)
				}
			},
			goUserCard: function() {
				uni.navigateTo({
					url: `/pages/my/my_card_use`,
				})
			},
			// 使用卡券
			userCard:function(id){
				console.log(id)
			}
		}
	}
</script>

<style scoped>
	.ticket-items {
		position: relative;
	}
	
	.ticket-items:last-child{
		padding-bottom: 32rpx;
	}
	
	.ticket-numer {
		color: #999999;
	}

	.ticket-number-expiration-time {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20rpx;
		margin-bottom: 20rpx;
	}

	.ticket-number {
		color: #999999;
	}

	.expiration-time {
		color: #fa3475;
	}

	.ticket-items-content {
		display: flex;
		justify-content: center;
		border-bottom: 1rpx dashed #999999;
		/* margin-top: 20rpx; */
	}

	.ticket-label-writer-state-userTime {
		background-color: #FFFFFF;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		padding: 30rpx 32rpx 20rpx;
		border-top-left-radius: 16rpx;
	}

	.ticket-label-writer {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.ticket-labels {
		padding: 2rpx 9rpx;
		font-size: 18rpx;
		margin-right: 10rpx;
		color: #FFFFFF;
		background-image: linear-gradient(-90deg, #8834fa 0%, #a25eff 100%);
		border-radius: 4rpx;
	}

	.ticket-writer {
		font-size: 28rpx;
		color: #111111;
	}

	.ticket-state {
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.can-receive {
		font-size: 24rpx;
		color: #fa3475;
		/* margin-top: 40rpx; */
	}

	.receive-time {
		font-size: 24rpx;
		display: flex;
		margin-top: 16rpx;
	}

	.receive-times {
		font-size: 24rpx;
		font-weight: bolder;
		/* margin-top: 80rpx; */
	}

	.receive-time .times {
		display: inline-block;
		height: 30rpx;
		width: 30rpx;
		background-color: #fa3475;
		border-radius: 4rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 30rpx;
		margin-left: 10rpx;
	}

	.receive-time .time-line {
		color: #fa3475;
		margin-left: 10rpx;
		line-height: 30rpx;
	}

	.ticket-state text {
		margin-left: 10rpx;
	}

	.user-time {
		font-size: 20rpx;
		color: #999999;
		margin-top: 14rpx;
	}

	.ticket-images-exclusiveName {
		width: 248rpx;
		border-top-right-radius: 16rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #FFFFFF;
	}

	.exclusive-name {
		width: 128rpx;
		height: 36rpx;
		text-align: center;
		background-image: linear-gradient(0deg, #070606 0%, #303030 100%);
		border-radius: 0rpx 0rpx 16rpx 16rpx;
		font-size: 20rpx;
		line-height: 36rpx;
	}
	.no-exclusive-name{
		width: 128rpx;
		height: 26rpx;
		background-color: #999999;
	}

	.exclusive-price {
		font-size: 56rpx;
		margin-bottom: 10rpx;
	}

	.exclusive-price text {
		font-size: 32rpx;
	}

	.meet-price-user {
		font-size: 24rpx;
		margin-bottom: 20rpx;
	}

	.useing-ticket {
		width: 160rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 3rpx 6rpx 0rpx rgba(0, 0, 0, 0.16);
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		font-size: 24rpx;
		border: none;
	}

	.ticketDetails {
		padding: 18rpx 26rpx 18rpx 30rpx;
		border-bottom-left-radius: 16rpx;
		border-bottom-right-radius: 16rpx;
		box-shadow: 0rpx 0rpx 32rpx 0rpx rgba(101, 101, 101, 0.24);
		color: #999999;
		margin-bottom: 54rpx;
	}

	.details-title {
		font-size: 20rpx;
		display: flex;
		align-items: center;
	}

	.details-title image {
		margin-left: 15rpx;
		width: 32rpx;
		height: 32rpx;
	}

	.item-details {
		font-size: 20rpx;
		line-height: 30rpx;
	}

	.ticket-label-images {
		position: absolute;
		top: 40rpx;
		right: 170rpx;
		z-index: 6;
	}

	.ticket-label-images image {
		width: 195rpx;
		height: 155rpx;
	}
</style>
