<template>
	<view class="doctor_homepage"> 
		<view class="this_doctor_top" :style="[{'padding-top':menuTop+'px','line-height':menuHeight+'px'}]"> 明星医生 </view>
		<view class="this_doctor_content" :style="[{'min-height':height-menuBottom-10+'px','padding-top':menuBottom+10+'px'}]">
			<view class="doctor_info">
				<scroll-view class="doctor_items" scroll-x="true">
					<view class="doctor_items_centent" >
						<view class="item_info" :class="{checked_doctor :doctor_change == index}" v-for="(item,index) in doctor_list" :key='index'
						 @tap="change_doctor(index,item.id)">
							<view class="doctor_info_content">
								<view class="heading_line" :class="{checked_heaing :doctor_change == index}">
									<image class="doctor_heading" :src="requestUrl+item.heading"></image>
								</view>
								<view class="doctor_name"> {{ item.name }} </view>
							</view>
							<view class="checked_line_info"> <view :class="{checked_line :doctor_change == index}"></view>  </view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="doctor_detail_info">
				<image class="doctor_tar_image" :src="requestUrl+doctor_detail_info.tar_image" mode=""></image>
				<view class="doctor_content">
					<view class="doctor_info_top">
						<view class="this_doctor_name">{{ doctor_detail_info.name }}</view>
						<view class="post"> {{doctor_detail_info.tar_sign}} </view>
						<view class="all_sign">
							<view class="sign_item" v-for="(i,k) in doctor_detail_info.sign" :key='k'> <text></text> {{i}} </view>
						</view>
						<view class="goods_project"> 擅长项目 </view>
						<view class="goods_project_item"> 
							<text v-for="(item,index) in doctor_detail_info.goods_project" :key='index'>{{item}} 、</text> 
						</view>
					</view>
					<view class="doctor_video_list" >
						<scroll-view class="video_info" scroll-x="true">
							<view class="video_item">
								<navigator class="video_item_info" :url="'/pages/diary/diary_video?id='+item.pivot.video_id+'&type='+'video'"
								 v-for="(item,index) in doctor_detail_info.video" :key='index'>
									<image class="video_image" :src="requestUrl+item.cover_img" mode=""></image>
									<image class="pay_btn" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix"></image>
									<view class="video_name"> {{item.name}} </view>
								</navigator>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<image id="line_img" class="line_img" src="https://xcx.hmzixin.com/upload/images/3.0/bullion.jpg" mode="widthFix"></image>
			<!-- 医生中心分类 -->
			<view id="this_doctor_classfiy" >
				<view  id="doctor_classfiy" :class="show_doctor_classfiy?'fixed_doctor_classfiy':'doctor_classfiy'"
				 :style="[{'top':menuBottom+10+'px'}]">
					<scroll-view class="doctor_classfiy_items" scroll-x="true">
						<view class="classfiy_items_content">
							<view class="classfiy_info"
							 v-for="(item,index) in doctor_classfiy_list" :key='index' v-show="item.docker_count>0"
							 :class="{checked_classfiy_doctor :change_classfiy == index}"
							  @tap="change_doctor_classfiy(index,item.id)">
								<view class="item-name">{{ item.name }}</view>
								<view :class="{change_classfiy__line :change_classfiy == index}"></view>
							</view>
						</view>											
					</scroll-view>
				</view>
				<view class="classfiy_doctor_info hide_item" :style="[{'margin-top':show_doctor_classfiy?menuBottom-20+'px':''}]"
				 :class="{show_item:change_classfiy == index}" 
				 v-for="(item,index) in doctor_classfiy_list" :key="index">
					<view class="this_swiper_info">
						<view class="swiper_item" v-for="(i,z) in classfiy_doctor_list" :key='z'>
							<view class="item__top_info" @tap='go_to_doctor(i.id,requestUrl+i.heading)'>
								<image class="item_img" :src="requestUrl+i.heading" ></image>
								<view class="item_doctor_info">
									<view class="name_zhicheng">
										{{i.name}} <text>{{i.zhicheng}}</text>
									</view>
									<view class="employed_time_case_num">
										<view class="employed_time"> 从业经验 : <text>{{(i.year)}}年</text></view>
										<!-- <view class="employed_time"> 从业经验:{{Math.round(i.now_time-i.employed_time/31104000)}}年</view> -->
										<view class="case_num">案列数 : <text>{{i.case_num}}</text></view>
									</view>																
									<view class="goods_category">
										<text class="goods_category_title">擅长</text>
										<text class='goods_category_item' v-for="(j,f) in i.goods_category" :key='f'>
											{{j}} <text :class="{hide_item:f+1 == i.goods_category.length}">、</text>
										</text>
									</view>
									<view class="doctor_view">
										<text class='view_title'>观点</text>
										<text class="view_content">{{i.view}}</text>																
									</view>	
								</view>
							</view>
							<navigator class="consult" url="/pages/consultation/consultation" >咨询</navigator>
							<view class="item_bottom_info">
								<view class="recommended_goods"
								 @tap='go_to_goods(i.recommended_goods.id,i.recommended_goods.encrypted_id)'
								 v-if="Object.values(i.recommended_goods).length>0">
									<view class="goods_left">
										<view class="goods_title">推</view>
										<view class="gooss_content">{{i.recommended_goods.goods_name}}</view>
									</view>
									<view class="goods_right">
										<text class="sale_weight">
											{{i.recommended_goods.sale_weight+i.recommended_goods.take_store||0}}人预约
										</text>
										<text class="sale_price"> <text>￥</text> {{i.recommended_goods.sale_price}}</text>
									</view>
								</view>		
								<view class="is_hot" @tap='go_to_goods(i.is_hot.id,i.is_hot.encrypted_id)'
								 v-if="Object.values(i.is_hot).length>0">
									<view class="goods_left">
										<view class="is_hot_title">热</view>
										<view class="gooss_content">{{i.is_hot.goods_name}}</view>
									</view>
									<view class="goods_right">
										<text class="sale_weight"> {{i.is_hot.sale_weight+i.is_hot.take_store||0}}人预约 </text>
										<text class="sale_price"> <text>￥</text> {{i.is_hot.sale_price}}</text>
									</view>															
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<image class="line_img" src="https://xcx.hmzixin.com/upload/images/3.0/bullion.jpg" mode="widthFix"></image>
			<!-- 拜托了医生 -->
			<view class="this_please_doctor">
				<view class="please_doctor_title"> 拜托了医生 </view>
				<view class="please_doctor">
					<scroll-view class="please_doctor_items" scroll-x="true">
						<view class="classfiy_items_content">
							<view class="classfiy_info"
							 v-for="(item,index) in please_doctor_list" :key='index' v-show="item.video_count>0"
							 :class="{checked_classfiy_doctor :change_please == index}"
							  @tap="change_please_doctor(index,item.id)">
								<view class="item-name please_doctor">{{ item.name }}</view>
								<view :class="{change_classfiy__line :change_please == index}"></view>
							</view>
						</view>											
					</scroll-view>
				</view>
				<view class=" please_doctor_info hide_item" :class="{show_item:change_please == index}" 
				 v-for="(item,index) in please_doctor_list" :key="index">
					<doctor :doctorList="doctor_please_list" 
					 :requestUrl="requestUrl" 
					 @collectLike='collectLike'
					 @cancelLike='cancelLike'>
					</doctor>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import doctor from '../../components/doctorShow.vue'
	export default {
		components: {
			doctor,
		},
		data() {
			return {
				menuTop: 0,
				menuHeight: 0,
				menuBottom:0,
				height: 0,
				requestUrl: '',
				doctor_list:[],
				doctor_change:0,
				doctor_detail_info:{},
				doctor_classfiy_list:[],
				change_classfiy:0,
				classfiy_doctor_list:[],
				please_doctor_list:[],
				change_please:0,
				doctor_please_list:[],
				show_doctor_classfiy:false,
				classfiy_top:605
			}
		},
		onShow:function(){
			
		},
		onPageScroll:function(event){
			// console.log(event.scrollTop)
			let that = this
			let top = event.scrollTop
			// console.log(top)
			if(top<that.classfiy_top){
				that.show_doctor_classfiy = false
			} else if(top>that.classfiy_top){
				that.show_doctor_classfiy = true
			}
		},
		onLoad: function() {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.get_doctor_list()
			that.get_doctor_classfiy()
			that.get_please_list()
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
					}
				})
			} 
			else if (platform == 'APP'){
				that.menuTop = 40
				that.menuHeight = 30
				that.menuBottom = 70
			}
			uni.getSystemInfo({
				success:function(res){
					let info = uni.createSelectorQuery().select("#this_doctor_classfiy")
					info.boundingClientRect(function(data) { 
						// that.classfiy_top = data.top+that.menuBottom-5
						// console.log(that.classfiy_top)
						// +that.menuBottom+13
					}).exec()
				}
			})
			uni.getSystemInfo({
				success:function(res){
					let info = uni.createSelectorQuery().select("#line_img")
					info.boundingClientRect(function(data) {
						// that.classfiy_top = data.top+data.height+that.menuBottom-30
					}).exec()
				}
			})
		},
		methods: {
			get_doctor_list:function(){
				let that = this
				let dataInfo = {
					interfaceId : 'start_list'
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.doctor_list = data
						that.change_doctor(0,data[0].id)
					}
				})
			},
			change_doctor:function(index,id){
				let that = this
				that.doctor_change = index
				let dataInfo = {
					interfaceId:'star',
					doctor_id:id
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.doctor_detail_info = data
					}
				})
			},
			// 医生中心分类
			get_doctor_classfiy:function(){
				let that = this
				let dataInfo = {
					interfaceId : 'centon'
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.doctor_classfiy_list = data
						let list = []
						for(let key in data){
							if(data[key].docker_count>0){
								list.push(key)
							}
						}
						this.change_doctor_classfiy(list[0],data[list[0]].id)
					}
				})
			},
			change_doctor_classfiy:function(index,id){
				let that = this
				that.change_classfiy = index
				let dataInfo = {
					interfaceId:'docker_centon',
					doctor_centon_id:id
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						for(let key in data){
							let time = 0
							time = parseInt((data[key].now_time-data[key].employed_time)/31536000) 
							data[key].year = time
						}
						that.classfiy_doctor_list = data
					}
				})	
			},
			// 拜托医生
			get_please_list:function(){
				let that = this
				let dataInfo = {
					interfaceId:'video_category'
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.please_doctor_list = data
						let list = []
						for(let key in data){
							if(data[key].video_count>0){
								list.push(key)
							}
						}
						that.change_please_doctor(list[0],data[list[0]].id)
					}
				})
			},
			change_please_doctor:function(index,id){
				let that = this
				that.change_please = index
				let dataInfo = {
					interfaceId:'video',
					category_id:id
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.doctor_please_list = data
					}
				})
			},
			go_to_goods:function(id,encrypted_id){
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&&encrypted_id=${encrypted_id}`,
				})
			},
			go_to_doctor:function(doctorId,heading){
				uni.navigateTo({
					url: `/pages/doctor/doctor_detail?id=${doctorId}&heading=${heading}`,
				})
			},
			// 点赞
			collectLike:function(id,index){
				let that = this
				let videoId = id
				let data = {
					interfaceId: 'video_collect',
					video_id :videoId,
					status:'0'
				}
				this.request.uniRequest("doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {	
						that.doctor_please_list[index].is_collect=1
						that.doctor_please_list[index].collect +=1
						uni.showToast({
							title: '已点赞',
							duration: 1000
						})
					}
				})
			},
			// 取消点赞
			cancelLike:function(id,index){
				let videoId = id
				let that = this
				let data = {
					interfaceId: 'video_collect',
					video_id :videoId,
					status:'1'
				}
				this.request.uniRequest("doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.doctor_please_list[index].is_collect=0
						that.doctor_please_list[index].collect -=1
						uni.showToast({
							title: '已取消点赞',
							duration: 1000
						})
					}
				})
			},
		}
	}
</script>

<style scoped>
	.this_doctor_top{
		width: 100%;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000000;
		color: #FFFFFF;
		padding-bottom: 10px;
		font-size: 40rpx;
		z-index: 99;
	}
	.this_doctor_content{
		background-image: linear-gradient(0deg, #2c2d31 0%, #101013 100%);
	}
	.doctor_info {
		white-space: nowrap;
		
	}
	.doctor_items{
		width: 100%;
		padding: 10rpx 0 0;
	}
	.doctor_items_centent{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.doctor_info_content{
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 55rpx;
		font-size: 24rpx;
	}
	.item_info{
		padding: 0 30rpx;
		color: #FFFFFF;
	}
	.checked_doctor{
		color: #d1bf86;
	}
	.checked_heaing{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		border: 2rpx solid #d1bf86;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.heading_line{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.doctor_heading{
		width: 88rpx;
		height: 88rpx;
		border-radius: 44rpx;
		background-color: #FFFFFF;
	}
	.doctor_name{
		padding-top: 10rpx;
	}
	.checked_line_info{
		position: relative;
		height: 30rpx;
	}
	.checked_line{
		position: absolute;
		border-bottom: 0;
		left: 25rpx;
		z-index: 2;
		width: 0;
		height: 0;
		border-width: 25rpx;
		border-style: solid;
		border-color: transparent #d1bf86 transparent transparent;
		transform: rotate(90deg);
		margin-top: -10rpx;
	}
	.doctor_detail_info{
		background-color: #1c1c1c;
		position: relative;
	}
	.doctor_tar_image{
		width: 100%;
		height: 970rpx;
	}
	.doctor_content{
		position: absolute;
		top: 130rpx;
		left: 0;
		width: 390rpx;
		height: 840rpx;
		padding-left: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.this_doctor_name{
		font-size: 60rpx;
		color: #d1bf86;
		padding-bottom: 24rpx;
	}
	.post {
		width: 390rpx;
		color: #d1bf86;
		line-height: 36rpx;
		font-size: 26rpx;
		padding-bottom: 20rpx;
	}
	.all_sign{
		color: #C0C0C0;
		line-height: 36rpx;
		font-size: 20rpx;
		max-height: 170rpx;
		overflow-y: scroll;
		margin-bottom: 20rpx;
	}
	.sign_item{
		display: flex;
	}
	.sign_item text{
		display: inline-block;
		width: 10rpx;
		height: 10rpx;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		margin: 15rpx 20rpx 0 0;
	}
	.goods_project{
		font-size: 28rpx;
		color: #d1bf86;
		padding-bottom: 20rpx;
	}
	.goods_project_item{
		line-height: 30rpx;
		font-size: 22rpx;
		color: #C0C0C0;
		max-height: 120rpx;
		overflow-y: scroll;
		margin-bottom: 30rpx;
	}
	.doctor_video_list{
		height: 280rpx;
		width: 100%;
	}
	.video_item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		white-space: normal;
	}
	.video_item_info{
		width: 210rpx;
		margin-right: 10rpx;
		height: 280rpx;
		position: relative;
	}
	.video_item_info:last-child{
		padding-right: 30rpx;
	}
	.pay_btn{
		position: absolute;
		top: 75rpx;
		left: 75rpx;
		width: 60rpx;
	}
	.video_image{
		width: 210rpx;
		height: 210rpx;
		border-radius: 16rpx;
		background-color: #FFFFFF;
	}
	.video_name{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 22rpx;
		color: #FFFFFF;
		line-height: 32rpx;
		font-weight: lighter;
		padding: 0 8rpx;
	}
	.line_img{
		width: 100%;
	}
	#this_doctor_classfiy{
		background-image: linear-gradient(left, #222222 0%, #202020 100%);
	}
	.doctor_classfiy {
		white-space: nowrap;
		margin-top: -20rpx;
	}
	
	
	.classfiy_items_content{
		width: 100%;
		display: flex;
	}
	.classfiy_info{
		padding: 50rpx 40rpx 0;
		color: #FFFFFF;
	}
	.checked_classfiy_doctor{
		font-weight: bold;
		display: flex;
		flex-direction: column;
	}
	.checked_classfiy_doctor .change_classfiy__line{
		display: block;
		height: 6rpx;
		margin-top: 6rpx;
		background-color: #d1bf86;
	}
	.hide_item{
		display: none;
	}
	.show_item{
		display: block;
	}
	.doctor_swiper{
		height: 1000rpx;
	}
	.classfiy_doctor_info{
		padding: 0 20rpx ;
	}
	.this_swiper_info{
		/* margin-top: 50rpx ; */
	}
	.swiper_item{
		color: #FFFFFF;
		margin-top: 40rpx;
		background-color: #2A2A2A;
		border-radius: 24rpx;
		padding: 30rpx;
		position: relative;
	}
	.item__top_info{
		display: flex;
		align-items: center;
	}
	.item_img{
		width: 120rpx;
		height: 120rpx;
		border-radius: 60rpx;
		background-color: #FFFFFF;
	}
	.item_doctor_info{
		padding-left: 20rpx;
		flex: 1;
	}
	.name_zhicheng{
		font-size: 34rpx;
		width: 75%;
	}
	.name_zhicheng text{
		font-size: 26rpx;
		padding-left: 10rpx;
	}
	.employed_time_case_num{
		width: 90%;
		display: flex;
		align-items: center;
		font-size: 24rpx;
		padding: 15rpx 0 30rpx;
	}
	.employed_time text,.case_num text{
		padding-left: 10rpx;
	}
	.case_num{
		padding-left: 40rpx;
	}
	.goods_category,.doctor_view{
		width: 100%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		color: #999999;
		margin-bottom: 15rpx;
		height: 40rpx;
	}
	.goods_category_title{
		border: 1rpx solid #e85c9e;
		color: #e85c9e;
		font-size: 22rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
		padding: 0 5rpx;
	}
	.view_title{
		border: 1rpx solid #689efb;	
		color: #689efb;
		font-size: 22rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
		width: 50rpx;
		padding: 0 5rpx;
	}
	.consult{
		width: 110rpx;
		line-height: 46rpx;
		border-radius: 10rpx;
		border: 2rpx solid #cfbe85;
		color: #cfbd85;
		font-size: 24rpx;
		text-align: center;
		position: absolute;
		right: 30rpx;
		top:  30rpx;
		z-index: 2;
	}
	.recommended_goods{
		width: 92%;
		padding: 0 20rpx;
		height: 56rpx;
		line-height: 56rpx;
		background-color: #202020;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		margin-top: 27rpx;
		margin-bottom: 15rpx;
	}
	.goods_left{
		display: flex;
		align-items: center;
	}
	.goods_title{
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		background-color: #ff7b1a;
		border-radius: 5rpx;
		text-align: center;
		margin-right: 10rpx;
	}
	.gooss_content{
		width: 80%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		line-height: 30rpx;
	}
	.goods_right{
		display: flex;
		align-items: center;
	}
	
	.sale_weight{
		color: #999999;
		margin-right: 10rpx;
		min-width: 120rpx;
		text-align: right;
	}
	.sale_price{
		font-size: 28rpx;
		color: #cfbe85;
		
	}
	.sale_price text{
		font-size: 24rpx;
	}
		
	.is_hot{
		width: 92%;
		padding: 0 20rpx;
		height: 56rpx;
		line-height: 56rpx;
		background-color: #202020;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
	}
	.is_hot_title{
		width: 30rpx;
		line-height: 30rpx;
		height: 30rpx;
		background-color: #da129f;
		border-radius: 5rpx;
		text-align: center;
		margin-right: 10rpx;	
	}
	.this_please_doctor{
		background-image: linear-gradient(left, #222222 0%, #202020 100%);
		margin-top: -20rpx;
		padding: 0 30rpx;
	}
	.please_doctor{
		white-space: nowrap;
	}
	.please_doctor_title{
		font-size: 56rpx;
		padding: 50rpx 0 0;
		color: #d1bf86;
	}
	.please_doctor_info{
		padding-top: 30rpx;
		padding-bottom: 40rpx;
	}
	.fixed_doctor_classfiy{
		position: fixed;
		white-space: nowrap;
		width: 100%;
		left: 0;
		z-index: 9;
		line-height: 24px;
		background-image: linear-gradient(left, #222222 0%, #202020 100%);
	}
	.fixed_doctor_classfiy .classfiy_info{
		padding: 0 40rpx !important;
	}
</style>
