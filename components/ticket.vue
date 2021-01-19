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
							满减券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.c_status==0 && item.state != 3 && item.state!=4 ? `linear-gradient(-90deg, ${item.c_card_style} 0%,  ${item.c_card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.c_card_type==1||item.c_card_type==2">
							满减券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0 && item.store-item.take_store >0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.card_type==3||item.card_type==4">
							折扣券
						 </text>
						<text class="ticket-labels" 
						   :style="[{'background-image': item.c_status==0 ? `linear-gradient(-90deg, ${item.c_card_style} 0%,  ${item.c_card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						  v-else-if="item.c_card_type==3||item.c_card_type==4">
						 	折扣券
						  </text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0 ? `linear-gradient(-90deg,${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.card_type == 5 ">
							礼品券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.c_status==0 ? `linear-gradient(-90deg,${item.c_card_style} 0%,  ${item.c_card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" 
						 v-else-if="item.c_card_type==5">
							礼品券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0 && item.store-item.take_store >0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]"
						  v-else-if="item.card_type == 6">
							体验券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.c_status==0 ? `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]" v-else-if="item.c_card_type == 6">
							体验券
						</text>
						<!-- 卡券介绍 -->
						<text class="ticket-writer"> 
							{{item.show_name || item.c_show_name}} 
						</text>
					</view>					
					<view class="left-bottom">
						<!-- 当前状态 -->
						<view class="ticket-state" v-if="item.state||item.status">
							当前状态:
							<text class="all-state"
							 :style="[{'color':item.state==1||item.status==1?'#fa3475':(item.state==2||item.status==2?'#0073c4':'#999999')}]">
								<text class="this_no_usetime" v-if='time_now<item.use_start_time'>未到使用时间</text>
								<text v-else-if='item.state==1||item.status==1'>可使用</text>
								<text v-else-if='item.state==2||item.status==2'>冻结中</text> 
								<text v-else-if='item.state==4||item.status==3'>已使用</text> 
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
							<text class="this_time">距结束</text>
							<text class="times">{{ item.day }}</text>
							<text class="time-line">天</text>
							<text class="times">{{ item.house }}</text>
							<text class="time-line">时</text>
							<text class="times">{{ item.second }}</text>
							<text class="time-line">分</text>
							<text class="times">{{ item.minute }}</text>
							<text class="time-line">秒</text>
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
				<!-- 中间圆 -->
				<view class="all_circular">
					<view class="circular" v-for="(i,k) in circular_list" :key="k"></view>
				</view>
				<view class="ticket-images-exclusiveName" v-if="!item.status"
				 :style="[{'background-image': item.status==0 && item.get_end_time-time_now>0  && item.store-item.take_store >0 ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="exclusive-name"  >
						<image class="note_img" src="/static/images/card_label_bg.png" ></image>
						<text class="this_note">{{item.note}}</text> 
					</view>
					<view class="all-exclusive-price" v-if="item.condition">
						<view class="exclusive-price"  v-if="item.card_type != 6&&item.card_type != 5" 
						 :style="[{'padding-top':item.note ? '10rpx':'16rpx'}]">
							<text>￥</text>  {{item.min_affect}}
						</view>
						<view class="exclusive-price" v-else>
							{{item.min_affect}}
						</view>
						<view class="meet-price-user" v-if="item.card_type != 6&&item.card_type != 5" >
							满{{item.condition}}可用
						</view>
						<view class="meet-price-user" v-else style="margin-top:10rpx ;">
							{{item.condition}}
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
					
					<view class="useing-ticket" v-else-if="item.use_channel == 1 "
					 :style="{'color': item.card_style }"
					 @tap='scan_card(item.id)'>
						立即核销
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
					<view class="exclusive-name" >
						<image class="note_img" src="/static/images/card_label_bg.png" ></image>
						<text class="this_note">{{item.c_note}}</text> 
					</view>
					<view class="all-exclusive-price" v-if="item.c_condition">
						<view class="exclusive-price" 
						 v-if="item.c_card_type!=6&&item.c_card_type != 5" 
						 :style="[{'padding-top':item.c_note ? '10rpx':'16rpx'}]">
							<text>￥</text> {{item.c_min_affect}}
						</view>
						<view class="exclusive-price" v-else>
							{{item.c_min_affect}}
						</view>
						<view class="meet-price-user" v-if="item.c_card_type!=6&&item.c_card_type != 5">
							满{{item.c_condition}}可用
						</view>
						<view class="meet-price-user" v-else style="margin-top:10rpx ;">
							{{item.c_condition}}
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
					 v-if="item.c_use_channel != 1"
					 :style="{'color': item.c_status!=2 && item.use_end_time-time_now>0 ?  item.c_card_style: '#999999'}"
					 @tap='userCard(item.c_id,item.status)'>
						立即使用
					</view>	
					<view class="useing-ticket" v-else-if="item.c_use_channel == 1 "
					 :style="{'color': item.c_status!=2 && item.use_end_time-time_now>0  ?  item.c_card_style: '#999999'}"
					 @tap='scan_card(item.c_id)'>
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
				<image src="/static/images/card_no.png" mode=""></image>
			</view>
			<!-- 已结束 -->
			<view class="ticket-label-images" v-else-if="item.get_end_time-time_now < 0">
				<image src="/static/images/card_end.png" mode=""></image>
			</view>
			<!-- 上限 -->
			<view class="ticket-label-images" v-else-if="item.get_limit-item.salecard_user_count==0">
				<image src="/static/images/card_top.png"></image>
			</view>			
			<!-- 已失效 -->
			<view class="ticket-label-images invalid"
			 v-else-if="item.use_end_time-time_now<0 && item.use_end_time!=0 ">
				<image src="/static/images/card_invalid.png" ></image>
			</view>
			<!-- 已使用 -->
			<view class="ticket-label-images invalid" v-else-if="item.status==3">
				<image src="/static/images/card_used.png" ></image>
			</view>
			<!-- 已核销  -->
			<view class="ticket-label-images invalid" v-else-if="item.scan==1">
				<image src="/static/images/card_off.png" ></image>
			</view>
		</view>
		 <!-- 右边的顶部背景https://xcx.hmzixin.com/upload/images/3.0/card_label_bg.png -->
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
						<view class="can-receive" v-if="item.status>0&&item.rest_time>0 "> 
							可领取{{item.get_limit-item.salecard_user_count}}张 
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
					<view class="exclusive-name" >
						<image class="note_img" src="/static/images/card_label_bg.png " ></image>
						<text class="this_note">{{item.note}}</text> 
					</view>
					<view class="all-exclusive-price" v-if="item.condition">
						<view class="exclusive-price" v-if="item.card_type != 6" 
						 :style="[{'padding-top':item.note ? '10rpx':'16rpx'}]"> <text>￥</text> {{item.min_affect}}
						</view>
						<view class="exclusive-price" v-else>
							{{item.min_affect}}
						</view>
						<view class="meet-price-user">
							满{{item.condition}}可用
						</view>
					</view>														
					<view class="Immediately-receive useing-ticket" v-if="item.status>0"
					 :style="{'color': item.rest_time >0 ? item.card_style: '#999999'}"
					 @tap='getCards(item.card_id,k,item.status,item.get_limit,item.get_limit)'>
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
	
		<!-- 确认订单卡券 -->
		<view class="order-content" v-for="(item,index) in order_card" :key='index'>
			<label class="can_use_card_list" @tap="checkboxChange(index,item.id,can_use,platform)">
				<view class="left-card_content"
				 :style="[{'background-image': item.is_use ? `linear-gradient(-90deg,  ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="card_note"> {{ item.note }} </view>
					<view class="card_condition" v-if="item.card_type != 6&&item.card_type != 5" > <text>￥</text> {{ item.condition }} </view>
					<view class="card_condition" v-else > {{ item.condition }} </view>
					<view class="card_min_affect" v-if="item.card_type != 6&&item.card_type != 5"> 满{{ item.min_affect }}可用 </view>
					<view class="card_min_affect" v-else> {{ item.min_affect }} </view>
				</view>
				<view class="right_card_content">
					<view class="ticket-label-writer">
						<text class="ticket-labels"
						 :style="[{'background-image': item.is_use ?  `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]"
						 v-if="item.card_type==1||item.card_type == 2">
							满减券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.is_use ?  `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]"
						 v-else-if="item.card_type==3||item.card_type==4">
							折扣券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.is_use ?  `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]"
						 v-else-if="item.card_type == 5 ">
							礼品券
						</text>
						<text class="ticket-labels"
						 :style="[{'background-image': item.is_use ?  `linear-gradient(-90deg, ${item.card_style} 0%,  ${item.card_style} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]"
						 v-else-if="item.card_type == 6">
							体验券
						</text>
						<!-- 卡券介绍 -->
						<text class="ticket-writer">
							{{ item.show_name }}
						</text>
					</view>
					<!-- 当前状态 -->
					<view class="ticket-state" :style="[{'color':item.use_end_time-item.use_start_time>0 && item.is_use ?'#fa3475':'#999999'}]">
						<text class="all-state" >
							当前状态:
							<text v-if='item.use_end_time-item.use_start_time>0'>可使用</text>
							<text v-else>已失效</text>
						</text>
					</view>
					<view class="user-time" v-if="item.use_end_time-item.use_start_time>0">
						使用时间:
						<text>
							{{item.c_use_start_time}} 至 {{item.c_use_end_time}}
						</text>
					</view>
					<view class="receive-times" v-else> 已结束 </view>
				</view>
				<view class="change_checkbox">
					<checkbox color="#ff6699"  :checked="item.checked" :disabled='can_use==1'  />
					<!-- <view class="check_box" v-show="platform!='applet'&&!item.checked"></view>
					<icon type="success" color="#ff6699" v-show="platform!='applet'&&item.checked" size="26"/> -->
				</view>
			</label>			
			<view class="ticketDetails"  @tap="show_order_ticket(index,can_use,platform)">
				<view class="details-title"> <text>卡券详情</text>
					<image :src="item.arrowImages" mode=""></image>
				</view>
				<view class="details-content" v-show="item.showTicketDetails">
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
			order_card:Array,
			cardsList: Array,
			marginTop: Number,
			time_now:Number,
			can_use:Number,
			card_checked:Boolean,
			platform:String
		},
		data() {
			return {
				show:false,
				circular_list:['','','','','','','','','','','','']
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
			show_order_ticket:function(index,can_use){
				let that = this
				that.order_card[index].showTicketDetails = !that.order_card[index].showTicketDetails
				if (that.order_card[index].showTicketDetails) {
					that.order_card[index].arrowImages = '/static/images/arrow-top.png'
				} else {
					that.order_card[index].arrowImages = '/static/images/arrow-down.png'
				}
				this.$emit('showTicket',that.order_card,can_use)
				// console.log(that.order_card[index].showTicketDetails,that.order_card[index+1].showTicketDetails)
			},
			checkboxChange:function(index,id,can_use,platform){
				let that = this
				// console.log(platform)
				if(platform=='applet'){
					if(can_use==0){
						that.order_card[index].checked = !that.order_card[index].checked
						// console.log(that.order_card[index].checked,that.order_card[index+1].checked)
						if(that.order_card[index].checked){
							this.$emit('checkboxChange',that.order_card,id,index,1)
						}else{
							this.$emit('checkboxChange',that.order_card,id,index,0)
						}
					}
					else{
						uni.showToast({
							title: "卡券不可使用",
							icon:'none'
						})
					}
				}else{
					if(can_use==0){
						// 目前App端选择卡券出现未判定的现象，选择index的值，会造成下一个相同id的值产生通化，也就是改变一个的值，另一个相同id的值也随之改变，而且做得判定不生效
						// that.order_card[index].checked = !that.order_card[index].checked
						// console.log(that.order_card[index].checked,that.order_card[index+1].checked)
						for(let key in that.order_card){
							if(key==index&&id==that.order_card[key].id){
								that.order_card[key].checked = !that.order_card[key].checked
								console.log(index,key)
								// console.log(that.order_card[index].checked,that.order_card[index+1].checked)
								// let obj = that.order_card[key]
								// this.$set(that.order_card,index,obj)
								if(that.order_card[index].checked){
									this.$emit('checkboxChange',that.order_card,id,index,1)
								}else{
									this.$emit('checkboxChange',that.order_card,id,index,0)
								}
								return
							}
						}
					}
					else{
						uni.showToast({
							title: "卡券不可使用",
							icon:'none'
						})
					}
				}
				
			},
			// 领取卡券
			getCard:function(id,store,salecard_user_count,get_limit,index){
				let prompt = ''
				if(get_limit>salecard_user_count&&store>0){
					this.$emit('getCards',id,prompt,index,get_limit)
				}
				else{
					prompt = '无法领取该卡券'
					this.$emit('getCards',id,prompt,index,get_limit)
				}
			},
			getCards:function(id,index,status,get_limit){
				let prompt = ''
				if(get_limit>0&&status>0){
					this.$emit('getCards',id,prompt,index,get_limit)
				}
				else{
					prompt = '无法领取该卡券'
					this.$emit('getCards',id,prompt,index,get_limit)
				}
			},
			
			// 使用卡券
			userCard:function(id,state){
				console.log(state)
				this.$emit('useCard', id,state)
			},
			// 核销卡券
			scan_card:function(id){
				this.$emit('scan_card', id)
				let that = this
			},
			// 删除卡券
			deleteCard:function(id){
				this.$emit('deleteCard',id)
			},
			
			show_order_applet:function(index,id,){
				let that = this
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
		position: relative;
	}
	.ticket-items-content-applet{
		display: flex;
		justify-content: center;
		border-bottom: 1rpx dashed #999999;
		align-items: center;
	}

	.ticket-label-writer-state-userTime {
		background-color: #FFFFFF;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		padding: 30rpx 30rpx 20rpx;
		border-top-left-radius: 16rpx;
	}

	.ticket-label-writer {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-height: 28rpx;
	}

	.ticket-labels {
		padding: 0 9rpx;
		font-size: 20rpx;
		margin-right: 10rpx;
		color: #FFFFFF;
		background-image: linear-gradient(-90deg, #8834fa 0%, #a25eff 100%);
		border-radius: 8rpx;
	}

	.ticket-writer {
		font-size: 26rpx;
		color: #111111;
	}

	.ticket-state {
		font-size: 24rpx;
		margin-top: 20rpx;
		display: flex;
		/* justify-content: space-between; */
	}
	.this_no_usetime{
		color: #FA3475;
	}
	.user_have{
		margin-right: 20rpx;
	}
	.can-receive {
		font-size: 24rpx;
		color: #fa3475;
	}

	.receive-time {
		font-size: 24rpx;
		display: flex;
		margin-top: 16rpx;
	}
	.this_time{
		font-size: 20rpx;
	}

	.receive-times {
		font-size: 24rpx;
		font-weight: bolder;
	}

	.receive-time .times {
		display: inline-block;
		height: 30rpx;
		min-width: 30rpx;
		background-color: #fa3475;
		border-radius: 4rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 30rpx;
		margin-left: 10rpx;
		font-size: 20rpx;
	}

	.receive-time .time-line {
		color: #fa3475;
		margin-left: 10rpx;
		line-height: 30rpx;
		font-size: 20rpx;
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
		width: 140rpx;
		height: 36rpx;
		position: relative;
	}
	.note_img{
		width: 140rpx;
		height: 36rpx;
		position: absolute;
		top: -6rpx;
		z-index: 1;
		right: 0;
	}
	.this_note{
		width: 140rpx;
		height: 36rpx;
		text-align: center;
		position: absolute;
		font-size: 20rpx;
		line-height: 36rpx;
		color: #FFFFFF;
		z-index: 1;
		top: -8rpx;
		right: 0;
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
	
	/* 确认订单 */
	.order-content{
		
	}
	.can_use_card_list {
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top-right-radius: 16rpx;
		border-bottom: 1rpx dashed #999999;
	}
	.left-card_content {
		width: 248rpx;
		height: 240rpx;
		border-top-left-radius: 16rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	
	.card_note {
		position: absolute;
		top: -5rpx;
		left: 60rpx;
		width: 128rpx;
		height: 36rpx;
		text-align: center;
		background-color: #070606;
		border-radius: 0rpx 0rpx 16rpx 16rpx;
		font-size: 20rpx;
		line-height: 36rpx;
		color: #FFFFFF;
	}
	
	.card_condition {
		color: #FFFFFF;
		font-size: 56rpx;
		margin-bottom: 20rpx;
	}
	
	.card_condition text {
		font-size: 32rpx;
	}
	
	.card_min_affect {
		color: #FFFFFF;
		font-size: 24rpx;
	}
	.right_card_content {
		flex: 1;
		margin-left: 20rpx;
	}
	.change_checkbox {
		width: 68rpx;
		height: 100%;
		margin-left: 20rpx;
	}
	
	.check_box{
		width: 44rpx;
		height: 44rpx;
		border-radius: 22rpx;
		border: 1rpx solid #ff6699;
		background-color: #FFFFFF;
	}
	
	.all_circular{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 5rpx;
		width: 10rpx;
		position: absolute;
		right: 245rpx;
		top: 0;
		height: 100%;
	}
	.circular{
		width: 10rpx;
		height: 10rpx;
		border-radius: 10rpx;
		background-color: #FFFFFF;
	}
	
</style>
