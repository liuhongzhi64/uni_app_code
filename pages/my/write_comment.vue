<template>
	<view class="write_comment">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<scroll-view scroll-y="true" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<view class="write_comment_content">
				<view class="top-content">
					<image class="headimg" src="https://xcx.hmzixin.com/upload/2020/03/27/4b67b2c083c5b3f65d7f0a443e3f9a81_250.jpg">
					</image>
					<view class="to-right">
						<view class="goods_name">我是商品名称，我是商品名称，我是商品名称，我是商品名称，我是商...</view>
						<view class='itembox'>
							<view v-for="(item,index) in imgs" :key="index" @tap='select' :data-index="item.id">
								<image class="star" :src="item.id>starId?src2:src1"></image>
							</view>
							<text v-if="starId<=3&&starId!=4&&starId!=5&&starId!=0">一般</text><text v-else-if="starId==4">满意</text><text
							 style="margin-left: 20rpx;" v-else-if="starId==5">非常满意</text>
						</view>
						<view class="service_title">完成100字+图片/视频的优质评价，<text>返2倍喵豆</text></view>
					</view>
				</view>

				<view class="service_list">
					<view class="service_list_content">
						<block v-for="(item,index) in service_list" :key="index">
							<view class="items" @tap="choice" :data-index="index" :class="item.ac == true? 'active':''">{{item.name}}</view>
						</block>
					</view>
				</view>
				<!-- 写评价 -->
				<view class="write">
					<view class="write-title">写评价,<text>返10喵豆</text></view>
					<view class="text-content"><textarea @blur="bindTextAreaBlur" maxlength='500' placeholder-style="color: #c5c5c5;font-size: 26rpx;"
						 placeholder="宝贝满足你的期待？说说你的看法吧~字数限制10—500字" /></view>
					
				</view>
				<!-- 上传图片 -->
				<view class="upload">
					<view class="upload-title"> 
						<view class="title-left">写评价,<text>返10喵豆</text></view>
						<view class="title-right">{{imagesNum}}/6</view>
					</view>
					<view class="upload-content">
						<label class="video-list" v-for="(item,index) in imageList" :key="index" :data-src="item">
							<image class="changes" :src="item" mode="" ></image>
						</label>
						<label class="video-list" v-for="(item,index) in videoList" :key="index" :data-src="item">
							<video class="changes" :src="item" controls></video>
						</label>
						<view class="change-video" @tap="chooseImage" v-if="imageList.length<7">
							+
						</view>
					</view>		
				</view>
				
				<view class="anonymous">
					 <checkbox-group @change="checkboxChange">
						 <label class="anonymous-content">
							 <checkbox color='#ff6699'  checked="true" value="true" /> 匿名评价
						 </label>
					
					</checkbox-group>
				</view>
				
				
				<view class="footer">
					<view class="next-step">
						<button class="issue-botton" type="default" plain="true" @tap='issue'> 发布 </button>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
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
				service_list: [{
						name: "环境好",
						ac:false
					},
					{
						name: "效果好",
						ac:false
					},
					{
						name: "态度好",
						ac:false
					},
					{
						name: "服务热情",
						ac:false
						},
					{
						name: "医生专业",
						ac:false
					},
				],
				reason:'',
				submit: true,
				imageList: [],
				videoList:[],
				count: 6, //上传数量
				imagesNum:0,
				isChange:true
			}
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					that.height = res.screenHeight
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
					that.menuPaddingRight = res.windowWidth - menu.right
				}
			})
		},
		methods: {
			// 星星打分
			select: function(e) {
				const that = this;
				that.starId = e.currentTarget.dataset.index;
				that.starId = this.starId
				that.step()
			},
			// 选择优质服务
			choice: function(e) {
				const that = this;
				let index = e.currentTarget.dataset.index;
				
				if (that.service_list[index].ac == false) {
					that.service_list[index].ac = true
				} else {
					 that.service_list[index].ac = false
				}
				that.step()
			},
			
			bindTextAreaBlur:function(e){
				this.reason=e.detail.value;
			},
			
			chooseImage: async function() {
				const that = this
				if (that.imageList.length === that.count) {
					let isContinue = await that.isFullImg();
					console.log("是否继续?", isContinue);
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
			isChooseImage:function(){
				let that = this
				/* 选中图片 */
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					sizeType: ['original', 'compressed'],
					count: that.count,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths; //获取到本地图片地址
						// console.log(res)
						let list = []
						list.push(tempFilePaths[0])
						that.imageList = that.imageList.concat(list)
						that.imagesNum = that.imageList.length + that.videoList.length
					}
				})
			},
			isChooseVideo:function(){
				let that = this
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
						const tempFilePaths = res.tempFilePath; //获取到本地图片地址
						let list = []
						list.push(tempFilePaths)
						that.videoList = that.videoList.concat(list)
						that.imagesNum = that.imageList.length + that.videoList.length
					}
				});
			},
			/* 图片数量满了弹出窗口询问是否清空 */
			isFullImg: function() {
				return new Promise((res) => {
					let content = '最多只能选择六张'
					uni.showModal({
						content: content,
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								that.imagesNum = 0
							} else {
			
							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},
			checkboxChange: function (e) {
				let values = e.detail.value;
				if(values.length>0){
					this.isChange = true
				}else{
					this.isChange = false
				}
			},
			issue:function(){
				console.log(this.isChange)
			},
			// 判断步骤
			step: function() {
				const that = this;
				var arr = []
				for (var i = 0; i < that.service_list.length; i++) {
					if (that.service_list[i].ac == true) {
						arr.push(that.service_list[i].ac)
					}
				}
				if (that.starId > 0 && that.evaluate > 0 && (that.type == "image" || that.type == "video") && arr.length > 0) {
					that.submit = true
				} else {
					that.submit = false
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
		/* width: 400rpx; */
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
		line-height: 48rpx;
	}
	.write,.upload{
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 0 0 24rpx 24rpx;
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
		/* height: 220rpx; */
		display: flex;
		flex-wrap: wrap;
	}
	.changes {
		height: 220rpx;
		width: 220rpx;
		background-color: #F0F0F0;
	}
	.video-list {
		margin-right: 10rpx;
	}
	.change-video {
		height: 220rpx;
		width: 220rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #F0F0F0;
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
		color: #FFFFFF;
		font-size: 28rpx;
		border: none;
		text-align: center;
		line-height: 80rpx;
	}

</style>
