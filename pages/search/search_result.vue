<template>
	<view class="search_result"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<!-- 搜索栏 -->
		<view class="search-input" :style="[{'top':menuBottom+10+'px'}]">
			<view class="search-input-text">
				<view class="left-input"> <icon type="search" size="18"/> <input class="search-content" @input="onKeyInput" placeholder-style='color: #b2b2b2;' placeholder="请输入关键词搜索" /></view>
				<view class="right-text">确定</view>
			</view>
			
		</view>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+60+'px'}]">
			<swiperTabHead :tabBars="tabBars" :size='size' :line="line" :tabIndex="tabIndex" :tabBackgroundColor='tabBackgroundColor'
			 @tabtap="tabtap"></swiperTabHead>
		</view>		
		<view class="search-input_content" :style="[{'padding-top':menuBottom+100+'px'}]">
			<view class="search-input_items">
				<swiper :style="[{'height':height-menuBottom-100+'px'}]" :current="tabIndex" @change="tabChange">
					<swiper-item v-for="(item,index) in tabBars" :key="index">
						<scroll-view scroll-y :style="[{'height':height-menuBottom-100+'px'}]">
							<template>
								<block>
									<view class="result_content">
										<view class="item-all">
											{{item.name+item.type}}
										</view>
										<goodsShow
										 :borderRadius=24 
										 :requestUrl='requestUrl' 
										 :width=350 
										 :porductList='productList' 
										 v-if='items.type==0'>
										</goodsShow>
										<doctor :doctorList="productList"
										 :requestUrl="requestUrl" :paddingLR='paddingLR' @collectLike='collectLike'
										 @cancelLike='cancelLike' v-else-if="items.type==1">
										</doctor>
										<diary :diaryList="productList" :requestUrl='requestUrl' v-else-if="items.type==2"></diary>
										<porduct :width=350 :porductList='productList' v-else-if="item.type==3"></porduct>	
									</view>
								</block>
							</template>
						</scroll-view>
					</swiper-item>
				</swiper>
				</view>
			</view>		
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import porduct from '../../components/porduct.vue'
	import swiperTabHead from "../../components/swiper-tab.vue";
	import goodsShow from "../../components/goodsShow.vue";
	import diary from '../../components/diary.vue';
	import doctor from '../../components/doctorShow.vue'
	export default {
		components: {
			topBar,
			porduct,
			swiperTabHead,
			goodsShow,
			diary,
			doctor
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
				title: '搜索结果页',
				tabBars: [
					{
						name: '商品',
						id: 'porduct',
						type: 0
					},
					{
						name: '医生',
						id: 'doctor',
						type: 1,
					},
					{
						name: '日记',
						id: 'diary',
						type: 2
					},
					{
						name: '视频',
						id: 'video',
						type: 3
					},
				
				],
				line: true, //是否显示选中线
				tabBackgroundColor: '#FFFFFF',
				size: 24,
				tabIndex: 0, // 选中的顶部的导航的索引
				inputValue: '',
				contentList: [],
				productList:[
					{
						url:'../../static/images/19.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/23.png',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'',
						productTitle:'',
						prouctPrice:0
					},
					{
						url:'../../static/images/20.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/test.jpg',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'../../static/images/20.png',
						productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						prouctPrice:998
					},
					{
						url:'../../static/images/19.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/23.png',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'',
						productTitle:'',
						prouctPrice:0
					},
					{
						url:'../../static/images/20.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/test.jpg',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'../../static/images/20.png',
						productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						prouctPrice:998
					},
					{
						url:'../../static/images/20.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/test.jpg',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'../../static/images/20.png',
						productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						prouctPrice:998
					},
				],
				offset:0,
				searchContent:'祛斑'
			}
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			if(option.search){
				let search = option.search
				that.searchContent = search
			}
			that.getVideo()
		},
		onReady() {
			let that = this;
			// 判定运行平台
			let platform = ''
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					platform = 'android'
					break;
				case 'ios':
					platform = 'ios'
					break;
				default:
					platform = 'applet'
					break;
			}
			if (platform == 'applet') {
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
					}
				})
			} else {
				that.height = uni.getSystemInfoSync().screenHeight;
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			getGoods:function(){
				let that = this
				let dataInfo = {
					interfaceId:'goodssearch',
					search:that.searchContent,
					offset:that.offset,
					limit:6
				}
				that.request.uniRequest("search", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						console.log(data)
					}
				})
			},
			getDoctor:function(){
				let that = this
				let dataInfo = {
					interfaceId:'doctorsearch',
					search:that.searchContent,
					offset:that.offset,
					limit:6
				}
				that.request.uniRequest("search", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						console.log(data)
					}
				})
			},
			getDiary:function(){
				let that = this
				let dataInfo = {
					interfaceId:'diarysearch',
					search:that.searchContent,
					offset:that.offset,
					limit:6
				}
				that.request.uniRequest("search", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						console.log(data)
					}
				})
			},
			getVideo:function(){
				let that = this
				let dataInfo = {
					interfaceId:'videosearch',
					search:that.searchContent,
					offset:that.offset,
					limit:6
				}
				that.request.uniRequest("search", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						console.log(data)
					}
				})
			},
			
			
			onKeyInput: function(event) {
			   this.inputValue = event.target.value
			},
			tabtap: function(index, type) {
				this.tabIndex = index;
				console.log(index,type)
			},
			tabChange: function(e) {
				this.tabIndex = e.detail.current;
				let index = e.detail.current;
				let type = e.detail.current
			}
		}
	}
</script>

<style scoped>
	.search-input{
		background-color: #F6F6F6;
		height: 88rpx;
		position: fixed;
		z-index: 9;
		width: 100%;
	}
	.search-input-text{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx  20rpx;
	}
	.left-input{
		width: 620rpx;
		height: 56rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		border: solid 1rpx #e6e6ea;
		background-color: #FFFFFF;
		line-height: 56rpx;
		display: flex;
		align-items: center;
		padding-left: 24rpx;
	}
	.left-input icon{
		height: 40rpx;
	}
	.search-content{
		font-size: 26rpx;
		height: 56rpx;
		line-height: 56rpx;
		/* text-indent: 55rpx; */
	}
	.right-text{
		font-size: 26rpx;
	}
	.top-swiper-tab {
		position: fixed;
		z-index: 9;
		width: 100%;
	}
	.search-input_items {
		background-color: #F6F6F6;
	}
	.result_content{
		padding: 0 20rpx;
	}
</style>

