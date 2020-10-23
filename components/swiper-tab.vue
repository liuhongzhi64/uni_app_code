<template>
	<view class="uni-tab-bar">
		<scroll-view class="uni-swiper-tab" :style="[{'background-color':tabBackgroundColor}]" >
			<block  v-for="(tab,index) in tabBars" :key="index">
				<view class="swiper-tab-list" :style="[{'width':tabBars.length == 4?'25%':'20%'}]"
				 :class="{'active' : tabIndex==index}" @tap="tabtap(index,tab.type,tab.id)" 
				 >
					<view class="all-content">
						<view class="tabName-tabContent">
							<view class="tabName">
								{{tab.name}} 
								<text v-if="tab.number">({{tab.number}})</text>
								<text v-if="tab.number==0">(0)</text>
								<text v-if="tab.number>99">(99+)</text>
							</view>
							<view class="tabContent"  v-if="tab.content">
								{{tab.content}}
							</view>
						</view>						
						<view class="swiper-tab-line" v-if="line" ></view>
					</view>					
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
			tabBackgroundColor:String,
			line:{
				type:Boolean,
				default:false
			},
		},

		methods: {
			//点击切换导航
			tabtap(index,type,id) {
				this.$emit('tabtap', index,type,id)
				// console.log(index,type,this.tabBars)
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
		height: 80rpx;
		background-color: #F6F6F6;
	}
	.swiper-tab-list {
		color: #666666;
		font-weight: bold;
		display: inline-block;
		text-align: center;
		line-height: 80rpx;
		font-size: 24rpx;
		
	}
	.all-content{
		display: flex;
		flex-direction: column;
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
		/* border-top: 6rpx solid ; */
		height: 6rpx;
		background-color: #FA3475;
		width: 80rpx;
		margin: auto;
		border-radius: 3rpx;
		margin-top: -8rpx;
	}
</style>
