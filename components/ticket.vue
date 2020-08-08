<template>
	<view class="ticket-content">
		<view class="ticket-items" v-for="(i,k) in ticketList" :key='k'>
			<view class="ticket-number-expiration-time">
				<view class="ticket-numer">{{i.serialNumber}}</view>
				<view class="expiration-time" v-if="i.state == '可使用' || i.state =='冻结中'">{{i.expirationTime}}小时内过期</view>
				<view class="expiration-time" v-if="i.state == '已失效' || i.state =='已使用'"> 删除 </view>
			</view>

			<view class="ticket-items-content">
				<view class="ticket-label-writer-state-userTime">
					<view class="ticket-label-writer">
						<text class="ticket-labels" :style="[{'background-image': i.state == '可使用' || i.state =='冻结中' ? `linear-gradient(-90deg,  ${i.goColor} 0%,  ${i.toColor} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
							{{i.ticketLabel}}</text>
						<text class="ticket-writer"> {{i.writer}} </text>
					</view>
					<view class="ticket-state">当前状态:
						<text v-if="i.state == '可使用'&&i.state != '冻结中'" :style="[{'color':'#fa3475'}]">
							{{i.state}}
						</text>
						<text v-if="i.state != '可使用'&&i.state == '冻结中'" :style="[{'color':'#0073c4'}]">
							{{i.state}}
						</text>
						<text v-if="i.state == '已使用'||i.state == '已失效'" :style="[{'color':'#111111'}]">
							{{i.state}}
						</text>
					</view>
					<view class="user-time">使用时间:<text>{{i.userTime}}</text></view>
				</view>
				<view class="ticket-images-exclusiveName" :style="[{'background-image': i.state == '可使用' || i.state =='冻结中' ? `linear-gradient(-90deg,  ${i.goColor} 0%,  ${i.toColor} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
					<view class="exclusive-name">{{i.exclusiveName}}</view>
					<view class="exclusive-price"> <text>￥</text> {{i.exclusivePrice}}</view>
					<view class="meet-price-user">满{{i.meetPriceUser}}元可用</view>
					<view class="useing-ticket" v-if="i.state == '可使用' || i.state =='冻结中'" :style="{'color':i.toColor}"> 立即使用
					</view>
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
		</view>
	</view>


</template>

<script>
	export default {
		props: {
			ticketList: Array
		},

		methods: {
			// 显示卡券详情
			// this.$props.ticketList[i].arrowImages = '../../static/images/arrow-down.png'
			showDetails:function(number) {
				for (let i = 0; i < this.ticketList.length; i++) {
					if (this.ticketList[i].serialNumber == number) {
						console.log(this.ticketList[i].showTicketDetails)
						this.ticketList[i].showTicketDetails = !this.ticketList[i].showTicketDetails
						if (this.ticketList[i].showTicketDetails) {
							console.log(this.ticketList[i].arrowImages)
							this.ticketList[i].arrowImages = '../../static/images/arrow-top.png'
						} else {
							console.log(this.ticketList[i].arrowImages)
							this.ticketList[i].arrowImages = '../../static/images/arrow-down.png'
						}
					}
					
				}
			}
		}
	}
</script>

<style scoped>
	.ticket-items {
		margin-top: 46rpx;
		position: relative;
	}

	.ticket-numer {
		color: #999999;
	}

	.ticket-number-expiration-time {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20rpx;
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
		/* align-items: center; */
		border-bottom: 1rpx dashed #999999;
		margin-top: 20rpx;
	}

	.ticket-label-writer-state-userTime {
		background-color: #FFFFFF;
		display: flex;
		flex: 1;
		flex-direction: column;
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
		margin-top: 47rpx;
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

	.exclusive-price {
		font-size: 56rpx;
		margin-top: 10rpx;
	}

	.exclusive-price text {
		font-size: 32rpx;
	}

	.meet-price-user {
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.useing-ticket {
		width: 160rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 3rpx 6rpx 0rpx rgba(0, 0, 0, 0.16);
		border-radius: 20rpx;
		margin-top: 20rpx;
		font-size: 24rpx;
	}

	.ticketDetails {
		padding: 18rpx 26rpx 18rpx 30rpx;
		border-bottom-left-radius: 16rpx;
		border-bottom-right-radius: 16rpx;
		box-shadow: 0rpx 0rpx 32rpx 0rpx rgba(101, 101, 101, 0.24);
		color: #999999;
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
		top: 80rpx;
		right: 170rpx;
		z-index: 9;
	}

	.ticket-label-images image {
		width: 195rpx;
		height: 155rpx;
	}
</style>
