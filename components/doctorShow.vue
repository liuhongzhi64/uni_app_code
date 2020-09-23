<template>
	<!-- 医生模板 -->
	<view class="doctor-content">
		<view class="goods_content">
			<view class="left-content">
				<view class="goods_item-content" 
				 style="width: 340rpx;"  
				 v-for="(item,index) in doctorList" 
				 :key='index' 
				 v-if="index%2==0" 
				 >
					<image @tap='playVideo(item.path)' class="cover_img" :src="requestUrl+item.cover_img" mode=""></image>
					<view class="bottom-content">
						<view class="item-title"> {{item.name}} </view>
						<view class="category_name">
							<view v-for="(i,index) in item.category_name" :key="index"> {{i}} </view>
						</view>
						<view class="doctor_collect">
							<view class="doctor_heading_name">
								<image :src="requestUrl+item.doctor_relation.heading" mode=""></image>
								<text>{{item.doctor_relation.name}}</text>
							</view>							
							<view 
							 :class="[item.is_collect==0?'is_no_collect':'collect_num']" 
							
							 v-if="item.collect"
							 >
								<view class="like"  @click="1==2?collectLike:cancelLike">
									<image class="like-image" 
									 src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								{{item.collect}} 
							 </view>
							<view :class="[item.is_collect==0?'is_no_collect':'collect_num']"
							 v-else
							 >
								<view class="like">
									<image class="like-image" 
									 src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								0 
							</view>
						</view>											
					</view>
				</view>
			</view>
			<view class="right-content">
				<view class="goods_item-content"
				 style="width: 340rpx;"
				 v-for="(item,index) in doctorList" 
				 :key='index' 
				 v-if="index%2==1" 
				 >
					<image @tap='playVideo(item.path)' class="cover_img" :src="requestUrl+item.cover_img" mode=""></image>
					<view class="bottom-content">
						<view class="item-title"> {{item.name}} </view>
						<view class="category_name">
							<view v-for="(i,index) in item.category_name" :key="index"> {{i}} </view>
						</view>
						<view class="doctor_collect">
							<view class="doctor_heading_name">
								<image :src="requestUrl+item.doctor_relation.heading" mode=""></image>
								<text>{{item.doctor_relation.name}}</text>
							</view>							
							<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" 
							 v-if="item.collect"
							 >
								<view class="like">
									<image class="like-image" 
									 src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								{{item.collect}} 
							 </view>
							<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" 
							 v-else
							 >
								<view class="like">
									<image class="like-image" 
									 src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
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
			doctorList: Array,
			requestUrl: String
		},

		data() {
			return {
				
			}
		},
		methods: {
			playVideo:function(path){
				uni.navigateTo({
					url: `/pages/diary/diary_video?path=${path}`,
				})
			},
			// 点赞
			collectLike:function(){
				console.log(111)
				// let videoId = id
				// this.$emit('collectLike',videoId)
			},
			// 取消点赞
			cancelLike:function(){
				console.log(222)
				// // let videoId = id
				// this.$emit('cancelLike',videoId)
			},
			
		}
	}
</script>

<style scoped>
/* 左右布局 */
	.goods_content{
		padding: 34rpx 10rpx;
		display: flex;
		justify-content: space-between;
	}
	.left-content,.right-content{
		display: flex;
		flex-direction: column;
	}
	.goods_item-content{
		background-color: #FFFFFF;
		margin-bottom: 12rpx;
		display: flex;
		flex-direction: column;
		border-radius: 10rpx;
	}
	.cover_img{
		width: 340rpx;
		border-radius: 10rpx 10rpx 0 0;
	}
	.bottom-content{
		padding: 20rpx 20rpx 30rpx;
	}
	.item-title{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: #111111;
	}
	
	.category_name{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 12rpx 0 20rpx;
	}
	.category_name view{
		padding: 0 20rpx;
		line-height: 36rpx;
		background-color: #aaaaaa;
		border-radius: 5rpx;
		font-size: 20rpx;
		text-align: center;
		color: #FFFFFF;
		margin-right: 12rpx;
	}
	.doctor_collect{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		align-items: center;
	}
	.doctor_heading_name{
		display: flex;
		align-items: center;
		color: #B2B2B2;
	}
	.doctor_heading_name image{
		width: 46rpx;
		height: 46rpx;
		border-radius: 23rpx;
		margin-right: 15rpx;
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
