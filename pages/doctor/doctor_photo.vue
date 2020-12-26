<template>
	<view class="doctor_detail"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuTop='menuTop' :menuHeight='menuHeight'  :menuBottom='menuBottom'></topBar>
		
		<view class="detail_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<view class="doctor_info">
				<image class="item_img" :src="requestUrl+item.url" mode="widthFix" v-for="(item,index) in photo_list" :key='index'
				 @tap="show_photo(index)"></image>
				<view class="bottom-hint" v-if="photo_list.length>0">
					本喵也是有底线的喵~
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar
		},
		data() {
			return {
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#000000',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '医生相册一览',
				requestUrl: '',
				doctor_id:4,
				photo_list:[],
				show_list:[]
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			that.doctor_id = option.id
			that.get_detail()
			
		},
		
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
					}
				})
			} else if (platform == 'APP') {
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
			}
		},
		methods: {
			get_detail:function(){
				let that = this
				let dataInfo = {
					interfaceId:'docker_img',
					doctor_id:that.doctor_id,
					type:'0'
				}
				this.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.photo_list = data
						let imgs_array = data
						let list = []
						for(let key in data){
							let url = that.requestUrl + data[key].url
							list.push(url)
						}
						that.show_list = list
					}
				})
			},
			show_photo:function(index){
				let that = this
				console.log(that.show_list)
				// // #ifdef MP
				// uni.previewImage({
				// 	current:index,
				// 	urls:that.show_list,
				// 	indicator:'number',
				// 	loop:true
				// })
				// //  #endif
				uni.previewImage({
					current:index,
					urls:that.show_list,
					indicator:'number',
					loop:true
				})
			}
		}
	}
</script>

<style scoped>
	.doctor_detail{
		background-image: linear-gradient(0deg, #222222 0%, #151515 100%);
	}
	
	.this_doctor_info{
		height: 1300rpx;
		position: relative;
	}
	.doctor_info{
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx;
		justify-content: space-between;
	}
	.item_img{
		width: 350rpx;
		border-radius: 16rpx;
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
	}
	.bottom-hint{
		width: 100%;
		text-align: center;
		color: #FFFFFF;
		font-size: 24rpx;
		padding-top: 40rpx;
	}
</style>
