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
						<view class="diary-item-top">
							<view class="image-label" @tap='diaryDetail(item.id)'>
								<view class="diary-images">
									<image class="diary-image" :src="requestUrl+item.cover_img" mode="widthFix"></image>
									<view class="label">{{item.label}}</view>
									<view class="status" v-if="item.status"> 
										<text v-if="item.status==0">待审核</text>
										<text v-else-if="item.status==1">审核通过</text>
										<text v-else-if="item.status==-1">审核未通过</text>
									</view>
									<image class="pay_btn" v-if="item.video" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix">
									</image>
								</view>
							</view>
							<view class="diary-title" v-if="item.name"> {{item.name}} </view>	
							<view class="diary-title" v-if="item.title"> {{item.title}} </view>										
							<view class="category_name-doctor_name" v-if="item.category_name||item.doctor_name">
								<view class="category_name" v-if="item.category_name"> {{item.category_name}} </view>
								<view class="doctor_name" v-if="item.doctor_name"> {{item.doctor_name}} </view>
							</view>																				
							<view class="goods_name" v-if="item.goods_name"> <text> {{item.goods_name}} </text> </view>	
						</view>									
						<view class="head_ico-nick_name-collect_num" @tap='personal(item.user_mark)'>
							<view class="head_ico-nick_name">
								<image class="head_ico" :src="requestUrl+item.head_ico" v-if="!user_heading"></image>
								<image class="head_ico" :src="requestUrl+user_heading" v-else></image>
								<text class="nick_name">{{item.nick_name}}</text>
							</view>
							<view class="is_no_collect" v-if="item.is_collect==0" @tap="collect_diary(item.id,index)">
								<view class="like">
									<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								{{ item.collect_num || 0 }} 
							 </view>
							<view class="collect_num" v-else @tap="cancel_like(item.id,index)">
								<view class="like">
									<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								{{ item.collect_num }} 
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
						<view class="diary-item-top">
							<view class="image-label" @tap='diaryDetail(item.id)'>
								<view class="diary-images">
									<image class="diary-image" :src="requestUrl+item.cover_img" mode="widthFix"></image>
									<view class="label">{{item.label}}</view>
									<view class="status" v-if="item.status">
										<text v-if="item.status==0">待审核</text>
										<text v-else-if="item.status==1">审核通过</text>
										<text v-else-if="item.status==-1">审核未通过</text>
									</view>
									<image class="pay_btn" v-if="item.video" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix">
									</image>
								</view>
							</view>
							<view class="diary-title" v-if="item.name"> {{item.name}} </view>
							<view class="diary-title" v-if="item.title"> {{item.title}} </view>										
							<view class="category_name-doctor_name" v-if="item.category_name||item.doctor_name">
								<view class="category_name" v-if="item.category_name"> {{item.category_name}} </view>
								<view class="doctor_name" v-if="item.doctor_name"> {{item.doctor_name}} </view>
							</view>																				
							<view class="goods_name" v-if="item.goods_name"> <text> {{item.goods_name}} </text> </view>	
						</view>										
						<view class="head_ico-nick_name-collect_num" @tap='personal(item.user_mark)'>
							<view class="head_ico-nick_name">
								<image class="head_ico" :src="requestUrl+item.head_ico" v-if="!user_heading"></image>
								<image class="head_ico" :src="requestUrl+user_heading" v-else></image>
								<text class="nick_name">{{item.nick_name}}</text>
							</view>
							<view class="is_no_collect" v-if="item.is_collect==0" @tap="collect_diary(item.id,index)"> 
								<view class="like">
									<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								{{ item.collect_num || 0 }} 
							 </view>
							<view class="collect_num" v-else @tap="cancel_like(item.id,index)">
								<view class="like">
									<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
								</view>
								{{ item.collect_num }} 
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
			requestUrl:String,
			user_heading:String,
			this_my:Boolean
		},
		
		methods: {
			// 点击日记进入详情页
			diaryDetail:function(id){
				let that = this
				let detail_id = id
				if(that.this_my){
					uni.navigateTo({
						url: `/pages/diary/diary_detail?id=${detail_id}&route='my'`,
					})
				}else{
					uni.navigateTo({
						url: `/pages/diary/diary_detail?id=${detail_id}`,
					})
				}
			},
			collect_diary:function(id,index){
				this.$emit('collect_diary', id,index)
			},
			cancel_like:function(id,index){
				this.$emit('cancel_like', id,index)
			},
			// 个人主页
			personal:function(user_mark){
				let that = this
				if(!that.user_heading){
					uni.navigateTo({
						url: `/pages/diary/diary_personal?user_mark=${user_mark}`,
					})
				}
			},
		}
	}
</script>

<style scoped>
.detail-content{
		display: flex;
		justify-content: space-between;
		width: 710rpx;
	}
	.left-content,.right-content{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
	.diary-images{
		position: relative;
		height: 100%;
	}
	.image-label{
		margin-bottom: 15rpx;
	}
	
	.diary-image{
		width: 350rpx;
		border-radius: 16rpx 16rpx 0 0;
		background-color: #EEEEEE;
		display: block;
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
	.label{
		position: absolute;
		right: 0;
		bottom: 0;
		line-height: 40rpx;
		padding: 0 15rpx;
		background-color: #fa3475;
		border-radius: 16rpx 0rpx 0rpx 0rpx;
		opacity: 0.8;
		color: #FFFFFF;
		font-size: 24rpx;
	}
	.status{
		position: absolute;
		top: 0;
		right: 0;
		line-height: 30rpx;
		border-radius: 15rpx;
		padding: 0 15rpx;
		background-color: #FFFFFF;
		border: 1rpx solid #fa3475;
		color: #fa3475;
		font-size: 20rpx;
		opacity: 0.6;
	}
	
	.pay_btn{
		position: absolute;
		top: 145rpx;
		left: 145rpx;
		width: 60rpx;
	}
	
	.category_name-doctor_name{
		display: flex;
		padding: 15rpx 20rpx;
		flex-wrap: wrap;
	}
	.category_name,.doctor_name{
		line-height: 26rpx;
		background-color: #d3d3d3;
		border-radius: 4rpx;
		font-size: 16rpx;
		padding: 0 15rpx;
		text-align: center;
		color: #4f4f4f;
		margin-right: 10rpx;
	}
	.goods_name{
		padding: 0 20rpx ;
		margin-bottom: 10rpx;
		color: #999999;
		font-size: 20rpx;
		line-height: 32rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-weight: lighter;
	}
	.goods_name text{
		background-color: #F0F0F0;
		border-radius: 16rpx;
		padding: 0 10rpx;
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
		margin-right: 10rpx;
		background-color: #F0F0F0;
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
