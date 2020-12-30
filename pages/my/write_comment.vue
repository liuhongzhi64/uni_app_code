<template>
	<view class="write_comment">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<scroll-view scroll-y="true" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<view class="write_comment_content">
				<view class="top-content">
					<image class="headimg" :src="requestUrl+content.img">
					</image>
					<view class="to-right">
						<view class="goods_name"> {{ content.spu_name }} </view>
						<view class='itembox'>
							<view v-for="(item,index) in imgs" :key="index" @tap='select' :data-index="item.id">
								<image class="star" :src="item.id>starId?src2:src1"></image>
							</view>
							<text style="color: #999999;" v-if="starId<=3&&starId!=4&&starId!=5&&starId!=0">一般</text>
							<text v-else-if="starId==4">满意</text>
							<text style="margin-left: 20rpx;" v-else-if="starId==5">非常满意</text>
						</view>
						<view class="service_title">完成100字+图片/视频的优质评价，<text>返2倍喵豆</text></view>
					</view>
				</view>
				<view class="service_list" v-show="content.label_name.length>0">
					<view class="service_list_content">
						<block v-for="(item,index) in content.label_name" :key="index">
							<view class="items" @tap="choice(index)" :class="item.show == true? 'active':''">
								{{ item.name }}
							</view>
						</block>
					</view>
				</view>
				<!-- 写评价 -->
				<view class="write">
					<view class="write-title">写评价,<text>返10喵豆</text></view>
					<view class="text-content">
						<textarea @input="bindTextAreaBlur" maxlength='500' placeholder-style="color: #c5c5c5;font-size: 26rpx;"
						 placeholder="宝贝满足您的期待？说说你的看法吧~字数限制10-500字" />
						</view>
				</view>
				<!-- 上传图片 -->
				<view class="upload">
					<view class="upload-title"> 
						<view class="title-left">上传图片/视频,<text>返25喵豆</text></view>
						<view class="title-right">{{imagesNum}}/6</view>
					</view>
					<view class="upload-content">
						<label class="video-list" v-for="(item,index) in imageList" :key="index" @longpress='set_delete(0,index)'>
							<image class="changes" :src="item.img" mode="widthFix" ></image>
							<view class="show_delete" v-if="item.is_show" @tap="delete_item(0,index)"> 删除 </view>
						</label>
						<label class="video-list" v-for="(item,index) in videoList" :key="index" @longpress='set_delete(1,index)'>
							<video class="changes" :src="item" controls></video>
							<view class="show_delete" v-if="item.is_show" @tap="delete_item(1,index)"> 删除 </view>
						</label>
						<view class="change-video" @tap="chooseImage" v-if="imageList.length+videoList.length<7"> + </view>
					</view>		
				</view>
				<!-- 是否匿名 -->
				<view class="anonymous">
					 <checkbox-group @change="checkboxChange">
						 <label class="anonymous-content">
							 <checkbox color='#ff6699'  :checked="isChange" value="1" /> 匿名评价
						 </label>
					</checkbox-group>
				</view>		
				<view class="footer">
					<view class="next-step">
						<view class="button_hint" v-show="show_issue"> 提示 : 请先打评分和评价 </view>
						<button class="issue-botton" type="default" :disabled="show_issue" @tap='issue'>
							发布 
						</button>
					</view>
				</view>
			</view>
		</scroll-view>
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
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '写评价',
				imgs: [{
					id: 1
				}, {
					id: 2
				}, {
					id: 3
				}, {
					id: 4
				}, {
					id: 5
				}],
				starId: 0,
				src1: 'https://img-blog.csdnimg.cn/20200610110052243.png',
				src2: 'https://img-blog.csdnimg.cn/20200610110053850.png',
				
				reason:'',
				show_issue: true,
				imageList: [],
				image_list:[],
				video_list:[],
				videoList:[],
				count: 6, //上传数量
				imagesNum:0,
				isChange:true,
				is_anonymous:1,
				requestUrl:'',
				content:{
					id:3,
					spu_name:'我是商品名称，我是商品名称，我是商品名称，我是商品名称，我是商,我是商品名称，我是商品名称...',
					img:'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
					sku_id:39,
					is_comment:0,
					label_name:{
						"1": "环境好",
						"2": "医生专业",
						"3": "效果好",
						"4": "态度好",
						"5": "热情服务"
					}
				}
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			// that.get_my_goods_comment(options.id)
			that.get_my_goods_comment()
		},
		onReady() {
			let that = this;
			// 判定运行平台
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			} 
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
				that.menuLeft = 278
			}
		},
		methods: {
			get_my_goods_comment:function(id){
				let that = this
				let list = []
				for(let key in that.content.label_name){
					let obj = {
						name:'',
						show:false
					}
					obj.name = that.content.label_name[key]
					list.push(obj)
					
				}
				that.content.label_name = list
				// 后面上面的删除
				let dataInfo = {
					interfaceId:'mygoodscomment',
					order_goods_id:id
				}
				// that.request.uniRequest("goods", dataInfo).then(res => {
				// 	if (res.data.code == 1000 && res.data.status == 'ok') {
				// 		let data = res.data.data
				// 		let list = []
				// 		for(let key in data.label_name){
				// 			let obj = {
				// 				name:'',
				// 				show:false
				// 			}
				// 			obj.name = data.label_name[key]
				// 			list.push(obj)
				// 		}
				// 		data.label_name = list
				// 		that.content = data
				// 	}
				// })
			},
			// 星星打分
			select: function(e) {
				const that = this;
				that.starId = e.currentTarget.dataset.index;
				that.starId = this.starId
				that.step()
			},
			// 选择优质服务
			choice: function(index) {
				const that = this;
				that.content.label_name[index].show = !that.content.label_name[index].show
				that.step()
			},
			// 文本框的内容
			bindTextAreaBlur:function(e){
				let that = this
				that.reason=e.detail.value;
				that.step()
			},
			// 选择图片
			chooseImage: async function() {
				const that = this
				if (that.imageList.length === that.count) {
					let isContinue = await that.isFullImg();
					// console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				uni.showModal({
					title: '提示',
					content: '请选择上传视频/图片',
					confirmText:'视频',
					cancelText:'图片',
					success: function (res) {
					    if (res.confirm) {
					       that.isChooseVideo()
					    } else if (res.cancel) {
					        that.isChooseImage()
					    }
					}
				})
				
			},
			// 上传图片
			isChooseImage:function(){
				let that = this
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					sizeType: ['original', 'compressed'],
					count: that.count,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths; //获取到本地图片地址
						let list = []
						// let img_list = []
						// let video_list = []
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
										that.image_list.push(data.file_name)
									}else{
										that.video_list.push(data.file_name)
									}
							    }
							 });
							 obj.img = tempFilePaths[key]
							 list.push(obj) 
						}
						// that.video_list = video_list
						// console.log(img_list,2222)
						// that.image_list = img_list
						that.imageList = that.imageList.concat(list)
						// console.log(that.imageList)
						that.imagesNum = that.imageList.length + that.videoList.length
					}
				})
			},
			// 上传视频
			isChooseVideo:function(){
				let that = this
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
						const tempFilePaths = res.tempFilePath; //获取到本地图片地址
						let img_list = []
						let video_list = []
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
										that.image_list.push(data.file_name)
									}else{
										that.video_list.push(data.file_name)
									}
							    }
							});
							obj.img = tempFilePaths[key]
							list.push(obj) 
						}
						// list.push(tempFilePaths)
						// that.image_list = img_list
						// that.video_list = video_list
						that.videoList = that.videoList.concat(list)
						that.imagesNum = that.imageList.length + that.videoList.length
					}
				});
			},
			/* 图片数量满了弹出窗口询问是否清空 */
			isFullImg: function() {
				let that = this
				return new Promise((res) => {
					let content = '最多只能选择六张'
					uni.showToast({
						title:content,
						icon:'none'
					})
				})
			},
			// 显示删除
			set_delete:function(type,index){
				let that = this
				if(type==0){
					that.imageList[index].is_show = !that.imageList[index].is_show
				}
				else{
					that.videoList[index].is_show = !that.videoList[index].is_show
				}
			},
			// 删除图片或者视频
			delete_item:function(type,index){
				let that = this
				if(type==0){
					that.imageList.splice(index,1)
					that.image_list.splice(index,1)
					that.imagesNum -=1
				}else{
					that.videoList.splice(index,1)
					that.video_list.splice(index,1)
					that.imagesNum -=1
				}
			},
			checkboxChange: function (e) {
				let values = e.detail.value;
				let that = this
				// 大于零表示匿名
				if(values.length>0){
					that.isChange = true
					that.is_anonymous = 1
				}else{
					that.isChange = false
					that.is_anonymous = 0
				}
			},
			issue:function(){
				let that = this
				if(!that.show_issue){
					let label = ''
					for(let key in that.content.label_name){
						if(that.content.label_name[key].show){
							label = label + that.content.label_name[key].name + ','
						}
					}
					// that.starId表示评分
					// let point = 0
					// if(that.starId==1){
					// 	point=2
					// }else if(that.starId==2){
					// 	point=4
					// }else if(that.starId==3){
					// 	point=6
					// }else if(that.starId==4){
					// 	point=8
					// }else if(that.starId==5){
					// 	point=10
					// }
					let dataInfo = {
						interfaceId:'writegoodscomment',
						order_goods_id:that.content.id,
						point:that.starId,//评分 1 ～10分
						contents:that.reason,//评价内容 500字符以内
						is_anonymous:that.is_anonymous,//是否匿名 0 否 1 是
						label:label,//评论标签id 多个已逗号隔开
						video_list:that.video_list,
						imgs_list:that.image_list
					}
					console.log(dataInfo)
					
					that.request.uniRequest("goods", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							uni.showToast({
								title:'评价成功!',
							})
							uni.navigateTo({
								url: `/pages/my/my_comment`,
							})
							that.show_issue = true
						}
					})
					
				}
			},
			// 判断步骤
			step: function() {
				const that = this;
				var arr = []
				if (that.starId > 0 && that.reason ) {
					that.show_issue = false
				} else {
					that.show_issue = true
				}
			},
		}
	}
</script>

<style scoped>
	.write_comment_content{
		background-color: #F0F0F0;
		padding-bottom: 80rpx;
	}
	.top-content {
		display: flex;
		padding: 30rpx;
		background-color: #FFFFFF;
		padding-bottom: 24rpx;

	}

	.headimg {
		width: 200rpx;
		height: 200rpx;
		margin-right: 30rpx
	}

	.to-right {
		flex: 1;
		padding-top: 10rpx;
	}

	.goods_name {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: 5rpx;
		font-size: 26rpx;
		color: black;
		width: 100%;
	}

	/* 星星 */
	.itembox {
		display: flex;
		align-items: center;
		height: 60rpx;
	}
	.itembox text{
		font-size: 32rpx;
		color: #fa3475;
		margin-left: 40rpx;
	}

	.star {
		width: 50rpx;
		height: 50rpx;
		margin: 0 5rpx;
		vertical-align: middle;
	}

	.service_title {
		font-size: 20rpx;
		color: #999999;
		line-height: 66rpx;
	}

	.service_title text {
		color: #fa3475;
	}

	.service_list {
		padding: 30rpx;
		background-color: #FFFFFF;
	}

	.service_list_content {
		border-top: 1rpx solid #F0F0F0;
		border-bottom: 1rpx solid #F0F0F0;
		display: flex;
		flex-wrap: wrap;
		padding: 24rpx 0;
	}

	.service_list_content .items {
		background-color: rgba(242, 242, 242, 1);
		border-radius: 25rpx;
		font-size: 20rpx;
		text-align: center;
		margin-right: 50rpx;
		margin-bottom: 20rpx;
		padding: 0 25rpx;
		line-height: 48rpx;
	}

	.active {
		background-color: #ffe8f0;
		color: #fa3475;
		border: 1rpx solid #fa3475;
		line-height: 44rpx !important;
		padding: 0 23rpx !important;
	}
	.write,.upload{
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 0 0 24rpx 24rpx;
	}
	.write{
		padding-top: 0;
	}
	.upload{
		margin-top: 20rpx;
	}
	.write-title{
		font-size: 24rpx;
		line-height: 61rpx;
		margin-left: 18rpx;
	}
	.upload-title{
		font-size: 24rpx;
		line-height: 61rpx;
		margin-left: 18rpx;
		display: flex;
		justify-content: space-between;
	}
	.write-title text,.upload-title text{
		color: #fa3475;
	}
	.text-content{
		width: 100%;
		border:1rpx solid #F0F0F0;
	}
	.write textarea{
		width: 96%;
		padding: 16rpx;
		background-color: #F0F0F0;
	}
	.upload-content{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.changes {
		height: 220rpx;
		width: 220rpx;
		background-color: #F0F0F0;
	}
	.show_delete{
		width: 220rpx;
		height: 220rpx;
		background-color: #999999;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
		opacity: 0.8;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}
	.video-list {
		margin-right: 10rpx;
		position: relative;
	}
	.change-video {
		height: 220rpx;
		width: 220rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #999999;
		font-size: 60rpx;
		color: #FFFFFF;
	}
	.anonymous{
		padding: 30rpx;
		float: right;
		font-size: 24rpx;
		color: #fa3475;
		
	}
	.anonymous-content{
		display: flex;
		align-items: center;
	}
	.footer {
		margin-top: 250rpx;
		width: 100%;
	}
	.next-step {
		padding: 40rpx;
	}
	.issue-botton {
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;
		font-size: 28rpx;
		text-align: center;
		line-height: 80rpx;
		color: #FFFFFF;
	}
	.issue-botton::after{
		border: none;
	}
	.button_hint{
		width: 100%;
		font-size: 20rpx;
		color: #fa3475;
		text-align: center;
		padding-bottom: 20rpx;
	}

</style>
