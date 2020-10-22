<template>
	<!-- 日记模板内容 -->
	<view class="diary"> 
		<!-- 主体内容 -->
		<view class="detail-content">
			<view class="left-content">
				<view class="subject-content ">
					<view class="subject-content-list"
					 v-for="(item,index) in diaryList" :key='index'
					 v-if="index%2==0">
						<view class="diary-item-top"  @tap='diaryDetail(item.id)'>
							<view class="image-label">
								<view class="diary-images"><image class="diary-image" :src="requestUrl+item.cover_img" mode=""></image></view>
								<view class="label">{{item.label}}</view>
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
								<image class="head_ico" :src="requestUrl+item.head_ico" mode=""></image>
								<text class="nick_name">{{item.nick_name}}</text>
							</view>
							<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" v-if="item.collect_num">
								<view class="like">
									<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								{{item.collect_num}} 
							 </view>
							<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" v-else>
								<view class="like">
									<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								0
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="right-content">
				<view class="subject-content ">
					<view class="subject-content-list"
					 v-for="(item,index) in diaryList" :key='index'
					 v-if="index%2==1">
						<view class="diary-item-top"  @tap='diaryDetail(item.id)'>
							<view class="image-label">
								<view class="diary-images"><image class="diary-image" :src="requestUrl+item.cover_img" mode=""></image></view>
								<view class="label">{{item.label}}</view>
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
								<image class="head_ico" :src="requestUrl+item.head_ico" mode=""></image>
								<text class="nick_name">{{item.nick_name}}</text>
							</view>
							<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" v-if="item.collect_num"> 
								<view class="like">
									<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								{{item.collect_num}} 
							 </view>
							<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" v-else>
								<view class="like">
									<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								0
							</view>
						</view>											
					</view>
				</view>
			</view>							
		</view>
	</view>
</template>

<script>	
	export default {
		props: {
			diaryList: Array,
			requestUrl:String
		},
		
		data() {
			return {
				// requestUrl:'https://mtest.hmzixin.com/'
			}
		},
		methods: {
			// 点击日记进入详情页
			diaryDetail:function(id){
				let that = this
				let detail_id = id
				uni.navigateTo({
					url: `/pages/diary/diary_detail?id=${detail_id}`,
				})
			}
		}
	}
</script>

<style scoped>
.detail-content{
		display: flex;
		justify-content: space-between;
		/* padding: 33rpx 20rpx; */
		width: 710rpx;
	}
	.left-content,.right-content{
		display: flex;
		flex-direction: column;
	}
	
	
	.subject-content-list{
		background-color: #FFFFFF;
		border-radius: 16rpx;
		margin-bottom: 10rpx;
		width: 350rpx;
		display: flex;
		flex-direction: column;
		height: auto;
	}
	.image-label{
		position: relative;
	}
	
	.diary-image{
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
	
	.diary-label{
		padding: 0 20rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.label-name{
		line-height: 26rpx;
		font-size: 16rpx;
		padding: 0 14rpx;
		background-color: #d3d3d3;
		color: #4f4f4f;
		margin-right: 10rpx;
	}
	.label{
		position: absolute;
		right: 0;
		bottom: 10rpx;
		line-height: 40rpx;
		padding: 0 10rpx;
		background-color: #fa3475;
		border-radius: 16rpx 0rpx 0rpx 0rpx;
		opacity: 0.8;
		color: #FFFFFF;
		font-size: 24rpx;
	}
	.category_name-doctor_name{
		display: flex;
		padding: 15rpx 20rpx;
	}
	.category_name,.doctor_name{
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
	.goods_name{
		padding: 0 20rpx ;
		color: #999999;
		font-size: 20rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.head_ico-nick_name-collect_num{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx 24rpx;
	}
	.head_ico-nick_name{
		display: flex;
		align-items: center;
	}
	.head_ico{
		width: 48rpx;
		height: 48rpx;
		border-radius: 24rpx;
		border: 1rpx solid red;
		margin-right: 10rpx;
	}
	.nick_name{
		font-size: 20rpx;
		color: #111111;
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
