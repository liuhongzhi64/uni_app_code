<template>
	<view class="ticket-content">					
		<!-- 线上 -->
		<view class="ticket-items" v-for="(item,k) in cardsList" :key='k' >
			<view class="ticket-number-expiration-time" v-if="item.card_no">
				<view class="ticket-numer">卡券编号:{{item.card_no}}</view>
				<view class="expiration-time" v-if="item.use_end_time - time_now > 0 ">
					<text v-if="parseInt((item.use_end_time - time_now) / 60 / 60 / 24 % 30 )>0">
						{{ parseInt((item.use_end_time - time_now) / 60 / 60 / 24 % 30 ) }}天内过期
					</text>
					<text v-else-if="parseInt((item.use_end_time - time_now) / 60 / 60 % 24 )>0"> 
						{{ parseInt((item.use_end_time - time_now) / 60 / 60 % 24 ) }}小时内过期
					</text>					
					<text v-else>
						1小时内过期
					</text>
				</view>
				<view class="expiration-time" v-else @tap='deleteCard(item.id)'> 删除 </view>
			</view>
			<!-- 主体内容 -->
			<view class="ticket-items-content">
				<view class="ticket-label-writer-state-userTime">
					<view class="ticket-label-writer" >
						<text class="ticket-labels" 
						 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0 && item.store-item.take_store >0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-if="item.card_type==1||item.card_type == 2">
							满减券1
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.c_status==0 && item.state != 3 && item.state!=4 ? `linear-gradient(-90deg, ${item.c_card_style} 0%,  ${item.c_card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.c_card_type==1||item.c_card_type==2">
							满减券2
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0 && item.store-item.take_store >0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.card_type==3||item.card_type==4">
							折扣券1
						 </text>
						<text class="ticket-labels" 
						   :style="[{'background-image': item.c_status==0 ? `linear-gradient(-90deg, ${item.c_card_style} 0%,  ${item.c_card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						  v-else-if="item.c_card_type==3||item.c_card_type==4">
						 	折扣券2
						  </text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0 ? `linear-gradient(-90deg,${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.card_type == 5 ">
							礼品券1
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.c_status==0 ? `linear-gradient(-90deg,${item.c_card_style} 0%,  ${item.c_card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.c_card_type==5">
							礼品券2
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0 && item.store-item.take_store >0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]"
						  v-else-if="item.card_type == 6">
							体验券1
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.c_status==0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" v-else-if="item.c_card_type == 6">
							体验券2
						</text>
						<!-- 卡券介绍 -->
						<text class="ticket-writer"> 
							{{item.show_name || item.c_show_name}} 
						</text>
					</view>					
					<view class="left-bottom">
						<!-- 当前状态 -->
						<view class="ticket-state" v-if="item.state">
							当前状态:
							<text class="all-state" :style="[{'color':item.state==1?'#fa3475':(item.state==2?'#0073c4':'#999999')}]">
								<text v-if='item.state==1'>可使用</text>
								<text v-else-if='item.state==2'>冻结中</text> 
								<text v-else-if='item.state==4'>已使用</text> 
								<text v-else>已失效</text> 
							</text>		
						</view>
						<!-- 可领取券数 -->
						<view class="can-receive"
						 v-if="item.get_limit-item.salecard_user_count>-1&&item.store-item.take_store>0&&item.get_end_time-time_now>0 "> 
							可领取{{item.get_limit-item.salecard_user_count}}张 
						</view>						
						<!-- 领取倒计时 -->
						<view class="receive-time" v-if="item.get_end_time-time_now > 0">
							距结束还剩
							<text class="times">{{ parseInt((item.get_end_time-time_now ) / 60 / 60 % 24) }}</text>
							<text class="time-line">:</text>
							<text class="times">{{ parseInt((item.get_end_time-time_now) / 60 % 60) }}</text>
							<text class="time-line">:</text>
							<text class="times">{{ parseInt((item.get_end_time-time_now) % 60) }}</text>
						</view>
						<!-- 使用时间 -->
						<view class="user-time" v-else-if="!item.get_end_time&&item.c_use_end_time">
							使用时间:
							<text>
								{{item.c_use_start_time}} 至 {{item.c_use_end_time}}
							</text>
						</view>
						<view class="receive-times" v-else> 已结束 {{item.get_end_time-time_now }} </view>
					</view>					
				</view>
				<view class="ticket-images-exclusiveName" v-if="!item.status"
				 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0  && item.store-item.take_store >0 ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="exclusive-name" v-if="item.note" >
						{{item.note}}
					</view>
					<view class="no-exclusive-name" v-else></view>
					<view class="all-exclusive-price" v-if="item.condition">
						<view class="exclusive-price"  v-if="item.card_type != 6&&item.card_type != 5" 
						 :style="[{'padding-top':item.note ? '10rpx':'16rpx'}]">
							<text>￥</text> {{item.condition}}
						</view>
						<view class="exclusive-price" v-else>
							{{item.condition}}
						</view>
						<view class="meet-price-user" v-if="item.card_type != 6&&item.card_type != 5" >
							满{{item.min_affect}}可用
						</view>
						<view class="meet-price-user" v-else style="margin-top:10rpx ;">
							{{item.min_affect}}
						</view>
					</view>
					<view class="all-exclusive-price" v-else>
						<view class="exclusive-price" :style="[{'padding-top':item.note ? '10rpx':'16rpx'}]">
							文案一
						</view>
						<view class="meet-price-user">
							文案二
						</view>
					</view>															
					<view class="Immediately-receive useing-ticket"
					 v-if="item.get_limit>item.salecard_user_count"
					 :style="{'color': item.get_limit>item.salecard_user_count && item.get_end_time-time_now>0 && item.store-item.take_store >0 ? item.card_style: '#999999'}"
					 @tap='getCard(item.id,item.store,item.salecard_user_count,item.get_limit,k)'>
						立即领取
					</view>
					<view class="useing-ticket" v-else
					  :style="{'color': item.card_style }"
					  @tap='userCard(item.id)'>
						立即使用
					</view>				
				</view>
				<!-- 我的卡券 -->
				<view class="ticket-images-exclusiveName" v-else
				 :style="[{'background-image': item.status!=2 && item.use_end_time-time_now>0  ? `linear-gradient(-90deg,  ${item.c_card_style} 0%,  ${item.c_card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="exclusive-name" v-if="item.c_note" >
						{{item.c_note}}
					</view>
					<view class="no-exclusive-name" v-else></view>
					<view class="all-exclusive-price" v-if="item.c_condition">
						<view class="exclusive-price" 
						 v-if="item.c_card_type!=6&&item.c_card_type != 5" 
						 :style="[{'padding-top':item.c_note ? '10rpx':'16rpx'}]">
							<text>￥</text> {{item.c_condition}}
						</view>
						<view class="exclusive-price" v-else>
							{{item.c_condition}}
						</view>
						<view class="meet-price-user" v-if="item.c_card_type!=6&&item.c_card_type != 5">
							满{{item.c_min_affect}}可用
						</view>
						<view class="meet-price-user" v-else style="margin-top:10rpx ;">
							{{item.c_min_affect}}
						</view>
					</view>
					<view class="all-exclusive-price" v-else>
						<view class="exclusive-price"
						 :style="[{'padding-top':item.c_note ? '10rpx':'16rpx'}]">
							文案一
						</view>
						<view class="meet-price-user">
							文案二
						</view>
					</view>	
					<view class="useing-ticket"
					 v-if="item.c_use_channel == 0 && item.c_card_type == 1 || item.c_card_type ==2 || item.c_card_type ==3 ||item.c_card_type ==4 "
					 :style="{'color': item.status!=2 && item.use_end_time-time_now>0 ?  item.c_card_style: '#999999'}"
					 @tap='userCard(item.c_id,item.status)'>
						立即使用
					</view>	
					<view class="useing-ticket" v-else
					 :style="{'color': item.status!=2 && item.use_end_time-time_now>0  ?  item.c_card_style: '#999999'}"
					 @tap='scanCard(item.id)'>
						立即核销
					</view>				
				</view>
			</view>
			<view class="ticketDetails" @tap='showTicket(item.id)'>
				<view class="details-title"> <text>卡券详情</text>
					<image :src="item.arrowImages" mode=""></image>
				</view>
				<view class="details-content" v-if="item.showTicketDetails">
					<view class="item-details">{{item.c_intro||item.intro}}</view>
				</view>
			</view>
			<!-- 已抢光 -->
			<view class="ticket-label-images" v-if="item.store-item.take_store==0">
				<image src="../static/images/loot-all.png" mode=""></image>
			</view>
			<!-- 已结束 -->
			<view class="ticket-label-images" v-else-if="item.get_end_time-time_now < 0">
				<image src="../static/images/ticke-over.png" mode=""></image>
			</view>
			<!-- 上限 -->
			<view class="ticket-label-images" v-else-if="item.get_limit-item.salecard_user_count==0">
				<image src="../static/images/upper-limit.png" mode=""></image>
			</view>			
			<!-- 已失效 -->
			<view class="ticket-label-images invalid" v-else-if="item.use_end_time-time_now<0">
				<image src="../static/images/state1.png" mode=""></image>
			</view>
			<!-- 已使用 -->
			<view class="ticket-label-images invalid" v-else-if="item.status==3">
				<image src="../static/images/state2.png" mode=""></image>
			</view>
		</view>
		
		<!-- 商品的卡券 -->
		<view class="ticket-items" v-for="(item,k) in goodsCardsList" :key='k' >
			<view class="ticket-items-content">
				<view class="ticket-label-writer-state-userTime">
					<view class="ticket-label-writer" >
						<text class="ticket-labels" 
						 :style="[{'background-image': item.status==1 && item.get_end_time-time_now>0 && item.store-item.take_store >0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-if="item.card_type==1||item.card_type == 2">
							满减券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==1 && item.get_end_time-time_now>0 && item.store-item.take_store >0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.card_type==3||item.card_type==4">
							折扣券
						 </text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==1 && item.get_end_time-time_now>0 ? `linear-gradient(-90deg,${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.card_type == 5 ">
							礼品券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==1 && item.rest_time >0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]"
						  v-else-if="item.card_type == 6">
							体验券
						</text>
						<!-- 卡券介绍 -->
						<text class="ticket-writer"> 
							{{item.show_name }} 
						</text>
					</view>					
					<view class="left-bottom">
						<!-- 可领取券数 -->
						<view class="can-receive"
						 v-if="item.status>0&&item.rest_time>0 "> 
							可领取{{item.get_limit}}张 
						</view>						
						<!-- 领取倒计时 -->
						<view class="receive-time" v-if="item.rest_time > 0">
							距结束还剩
							<text class="times">{{ parseInt((item.rest_time ) / 60 / 60 % 24) }}</text>
							<text class="time-line">:</text>
							<text class="times">{{ parseInt((item.rest_time) / 60 % 60) }}</text>
							<text class="time-line">:</text>
							<text class="times">{{ parseInt((item.rest_time) % 60) }}</text>
						</view>
						<view class="receive-times" v-else> 已结束 {{ item.rest_time }} </view>
					</view>					
				</view>
				<view class="ticket-images-exclusiveName"
				 :style="[{'background-image': item.rest_time >0 && item.status>0 ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="exclusive-name" v-if="item.note" >
						{{item.note}}
					</view>
					<view class="no-exclusive-name" v-else></view>
					<view class="all-exclusive-price" v-if="item.condition">
						<view class="exclusive-price" v-if="item.card_type != 6" 
						 :style="[{'padding-top':item.note ? '10rpx':'16rpx'}]"> <text>￥</text> {{item.condition}}
						</view>
						<view class="exclusive-price" v-else>
							{{item.condition}}
						</view>
						<view class="meet-price-user">
							满{{item.min_affect}}可用
						</view>
					</view>														
					<view class="Immediately-receive useing-ticket" v-if="item.status>0"
					 :style="{'color': item.rest_time >0 ? item.card_style: '#999999'}"
					 @tap='getCards(item.card_id,k,item.status,item.get_limit)'>
						立即领取
					</view>	
					<view class="Immediately-receive useing-ticket" v-else
					 :style="{'color': item.rest_time >0 ? item.card_style: '#999999'}"
					 @tap='getCard(item.card_id,k)'>
						立即使用
					</view>	
				</view>			
			</view>
			<view class="ticketDetails" @tap='showTicket(item.card_id)'>
				<view class="details-title"> <text>卡券详情</text>
					<image :src="item.arrowImages" mode=""></image>
				</view>
				<view class="details-content" v-if="item.showTicketDetails">
					<view class="item-details">{{ item.intro }}</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			goodsCardsList: Array,
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
				// console.log(id)
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
			getCards:function(id,index,status,get_limit){
				let prompt = ''
				if(get_limit>0&&status>0){
					this.$emit('getCards',id,prompt,index)
				}
				else{
					prompt = '无法领取该卡券'
					this.$emit('getCards',id,prompt,index)
				}
			},
			
			// 使用卡券
			userCard:function(id,state){
				this.$emit('useCard', id,state)
			},
			// 核销卡券
			scanCard:function(id){
				this.$emit('scanCard', id)
			},
			// 删除卡券
			deleteCard:function(id){
				this.$emit('deleteCard',id)
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
		line-height: 28rpx;
	}

	.ticket-labels {
		padding: 0 9rpx;
		font-size: 22rpx;
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
		/* padding: 0 30rpx; */
		width: 248rpx;
		min-height: 240rpx;
		border-top-right-radius: 16rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		color: #FFFFFF;
		text-align: center;
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
	}

	.exclusive-price {
		font-size: 48rpx;
		line-height: 40rpx;
		/* overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1; */
	}

	.exclusive-price text {
		font-size: 32rpx;
	}

	.meet-price-user {
		font-size: 24rpx;
		text-align: center;
		/* margin-top: 10rpx; */
		line-height: 38rpx;
	}

	.useing-ticket {
		width: 160rpx;
		/* height: 40rpx; */
		text-align: center;
		line-height: 40rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 3rpx 6rpx 0rpx rgba(0, 0, 0, 0.16);
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		font-size: 24rpx;
		border: 0;
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
	.invalid{
		top: 80rpx;
	}

	.ticket-label-images image {
		width: 195rpx;
		height: 155rpx;
	}
</style>
