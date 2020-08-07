<template>
	<view class="uni-tab-bar">
		<scroll-view class="uni-swiper-tab" :style="[{'background-color':tabBackgroundColor}]">
			<block  v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" 
				 :style="[{'width':tabBars.length == 4?'25%':'20%'}]"
				 :class="{'active' : tabIndex==index}" @tap="tabtap(index,tab.type)" 
				 >
					<view class="tabName">
						{{tab.name}} <text v-if="tab.number">({{tab.number}})</text>
					</view>
					<view class="tabContent"  v-if="tab.content">
						{{tab.content}}
					</view>
					<view class="swiper-tab-line" v-if="line" ></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
			line:{
				type:Boolean,
				default:false
			},
		},

		methods: {
			//点击切换导航
			tabtap(index,type) {
				this.$emit('tabtap', index,type)
				
			}
		}
	}
</script>　

<style scoped>
	.uni-swiper-tab {
		border-bottom: 1upx solid #EEEEEE;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		justify-content: space-around;
		height: 60rpx;
		background-color: #F6F6F6;
	}
	.swiper-tab-list {
		color: #666666;
		font-weight: bold;
		display: inline-block;
		text-align: center;
		line-height: 60rpx;
		font-size: 24rpx;
	}
	.tabContent{
		font-size: 20rpx;
		line-height: 20rpx;
	}

	.uni-tab-bar .active {
		color: #FA3475;
		font-size: 28rpx;
		font-weight: bolder;
	}

	.active .swiper-tab-line {
		border-bottom: 6rpx solid #FA3475;
		width: 80rpx;
		margin: auto;
		/* border-top: 6rpx solid #FEDE33; */
		border-radius: 10rpx;
	}
</style>
