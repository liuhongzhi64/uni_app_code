<template>
	<view class="my_opinion"> 
		<topBar :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title'  :menuTop='menuTop' :menuHeight='menuHeight'  :menuBottom='menuBottom'></topBar>
		<view class="opinion_info" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<textarea class="info_content" @blur='get_opinion' @confirm='get_opinion' @input="get_length" placeholder="请填写反馈内容" :maxlength='max_length' />
			<view class="info_length" :class="info_length==max_length?'hint_info':''"> {{ info_length }} / {{ max_length }} </view>
			<view class="set_image">
				<view class="upload-title">
					<view class="title-left"> 图片 : </view>
					<view class="title-right" :class="image_length==count?'hint_info':''"> {{ image_length }} / {{ count }}</view>
				</view>
				<view class="hint_info hint-content"> (提示:图片支持格式'bmp','jpg','png','gif' 最大10M) </view>
				<view class="upload-content">
					<label class="image-list" v-for="(item,index) in image_list" :key="index" @longpress='set_delete(index)'>
						<image class="changes_img" :src="item.img" mode="widthFix" ></image>
						<view class="show_delete" v-if="item.is_show" @tap="delete_item(0,index)"> 删除 </view>
					</label>
					<view class="change-image" @tap="choose_image" v-if="image_list.length<7"> + </view>
				</view>
			</view>
		</view>
		<view class="submit_opinion"> <view class="submit_info" @tap='submit_opinion'>提交</view> </view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar,
		},
		data() {
			return {
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				height: 0,
				requestUrl: '',
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/return.png',
				title: '意见反馈',
				info_length:0,
				info_text:'',
				max_length:1000,
				image_list:[],
				upload_image_list:[],
				count: 6, //上传数量
				image_length:0
			}
		},
		onLoad: function(options) {
			const that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
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
				that.menuBottom = 70
				that.menuHeight = 30
			}
		},
		methods: {
			get_length:function(event){
				let that = this
				that.info_length = event.detail.value.length
				if(that.info_length==that.max_length){
					uni.showToast({
						title:'最多输入'+that.max_length+'个字',
						icon:'none'
					})
				}
			},
			get_opinion:function(event){
				let that = this
				that.info_text = event.detail.value
			},
			choose_image: async function() {
				let that = this
				if (that.image_list.length === that.count) {
					let isContinue = await that.is_full_img();
					if (!isContinue) {
						return;
					}
				}
				that.is_choose_image()
			},
			is_full_img:function(){
				let that = this
				uni.showToast({
					title:'最多上传' + that.count + '张图片',
					icon:'none'
				})
			},
			// 上传图片
			is_choose_image:function(){
				let that = this
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					sizeType: ['original', 'compressed'],
					count: that.count,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths; //获取到本地图片地址
						let list = []
						for(let key in tempFilePaths){
							let obj = {
								img:'',
								is_show:false
							}
							uni.uploadFile({
							    url: 'https://mytest.hmzixin.com/home', //仅为示例，非真实的接口地址
							    filePath: tempFilePaths[key],
							    name: 'file',
							    formData: {
							        'interfaceId': 'upload'
							    },
								header:{
									appid:that.request.globalData.appid,
									businessId:1,
									token: uni.getStorageSync("token")
								},
							    success: (uploadFileRes) => {
							        let data = uploadFileRes.data.data
									if(data.type==0){
										that.upload_image_list.push(data.file_name)
									}
							    }
							 });
							 obj.img = tempFilePaths[key]
							 list.push(obj) 
						}
						that.image_list = that.image_list.concat(list)
						that.image_length = that.image_list.length
					}
				})
			},
			set_delete:function(index){
				let that = this
				that.image_list[index].is_show = !that.image_list[index].is_show
			},
			submit_opinion:function(){
				let that = this
				// console.log(that.info_text,that.upload_image_list)
				if(that.info_text==''){
					uni.showToast({
						title:'请填写您的意见···',
						icon:'none'
					})
				}else{
					let dataInfo = {
						interfaceId:'writeopinion',
						content:that.info_text,
						img:that.upload_image_list
					}
					that.request.uniRequest("opinion", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							uni.showToast({
								title:'提交成功!',
								duration:1500
							})
							setTimeout(function(){
								uni.navigateBack({
									delta: 1
								});
							},2000)
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.opinion_info{
		background-color: #F0F0F0;
		position: relative;
	}
	.info_content{
		width: 100%;
		height: 500rpx;
		background-color: #FFFFFF;
		text-indent: 20rpx;
		padding: 20rpx;
	}
	.info_length{
		font-size: 24rpx;
		color: #999999;
		position: absolute;
		right: 20rpx;
		top: 640rpx;
		z-index: 9;
	}
	.hint_info{
		color: #FA3576;
	}
	.hint-content{
		font-size: 20rpx;
		padding: 0 20rpx 20rpx;
	}
	.set_image{
		padding-top: 40rpx;
	}
	.upload-title{
		font-size: 24rpx;
		line-height: 60rpx;
		margin-left: 18rpx;
		display: flex;
	}
	.title-left{
		padding-right: 40rpx;
	}
	.upload-content{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.image-list {
		margin-left: 20rpx;
		position: relative;
	}
	.changes_img {
		width: 220rpx;
		background-color: #F0F0F0;
	}
	.show_delete{
		width: 220rpx;
		height: 220rpx;
		background-color: #FFFFFF;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
		opacity: 0.8;
		display: flex;
		justify-content: center;
		align-items: center;
		color: red;
	}
	.change-image {
		height: 220rpx;
		width: 220rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #999999;
		font-size: 60rpx;
		color: #FFFFFF;
		margin-left: 20rpx;
	}
	
	.submit_opinion{
		position: fixed;
		left: 0;
		bottom: 40rpx;
		z-index: 10;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.submit_info{
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;
		font-size: 28rpx;
		text-align: center;
		line-height: 80rpx;
		color: #FFFFFF;
		width: 80%;
	}
</style>
