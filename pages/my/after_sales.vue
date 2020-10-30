<template>
	<view class="after_sales">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<swiperTabHead :tabBars="tabBars" :size='size' :line="line" :tabIndex="tabIndex" :tabBackgroundColor='tabBackgroundColor'
			 @tabtap="tabtap"></swiperTabHead>
		</view>

		<view class="after_sales_content" :style="[{'padding-top':menuBottom+50+'px'}]">
			<view class="after_sales_items">
				<swiper :style="[{'height':height-menuBottom-50+'px'}]" :current="tabIndex" @change="tabChange">
					<swiper-item v-for="(i,index) in contentList" :key="index">
						<scroll-view scroll-y :style="[{'height':height-menuBottom-50+'px'}]">
							<template>
								<block>
									<view class="after_sales_items-content">
										<!-- 没有商品 -->
										<view class="no-have-code" v-if="changePorduct.length==0">
											<view class="images">
												<image src="../../static/images/cartBg.png" mode=""></image>
											</view>
											
											<view class="no-have-ticket">喵！暂无相关卡券~</view>
										</view>
										
										<porduct :changePorduct='changePorduct' :porductWidth="porductWidth" @openPorductContent='openPorductContent' />
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
	export default {
		components: {
			topBar,
			porduct,
			swiperTabHead,
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
				backImage: '/static/images/back2.png',
				title: '退换/售后',
				tabBars: [
					{
						name: '售后申请',
						id: 'after-sale',
						type: 0
					},
					{
						name: '处理中',
						id: 'being-processed',
						type: 1,
						number:3,
					},
					{
						name: '售后评价',
						id: 'after-sale-evaluate',
						type: 2
					},
					{
						name: '申请记录',
						id: 'record',
						type: 3
					},

				],
				line: true, //是否显示选中线
				tabBackgroundColor: '#FFFFFF',
				size: 24,
				tabIndex: 0, // 选中的顶部的导航的索引
				contentList: [
					{ name: '申请售后'  },
					{ name: '处理中'},
					{ name: '售后评价'},
					{ name: '申请记录'},
				],
				changePorduct: [],
				porductWidth:453
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
			this.tabtap()
		},
		methods: {
			tabtap: function(index = 0, type = 0) {
				this.tabIndex = index;
				if(type==0){
					this.changePorduct =  [
						{
							porduct: [{
								id: '02048492',
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: 'after'
							}]
						},
						{
							porduct: [{
								id: '02048495',
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: 'aftered'
							}]
						},
						{
							porduct: [{
								id: '02048499',
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: 'aftered'
							}]
						},
					]
				}
				else{
					this.changePorduct = []
				}
				
			},
			tabChange: function(e) {
				this.tabIndex = e.detail.current;
				let index = e.detail.current;
				let type = e.detail.current
				if(type==0){
					this.changePorduct =  [
						{
							porduct: [{
								id: '02048492',
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: 'after'
							}]
						},
						{
							porduct: [{
								id: '02048495',
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: 'aftered'
							}]
						},
						{
							porduct: [{
								id: '02048499',
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: 'aftered'
							}]
						},
					]
				}
				else{
					this.changePorduct = []
				}
			},
			
			openPorductContent: function(index, k) {
				console.log(index, k)
				// console.log(this.porductList[k].porduct[index].showPorduct)
				let showPorduct = this.changePorduct[k].porduct[index].showPorduct
				this.changePorduct[k].porduct[index].showPorduct = !showPorduct
			},
		}
	}
</script>

<style scoped>
	.top-swiper-tab {
		position: fixed;
		z-index: 9;
		width: 100%;
	}
	.after_sales_items {
		background-color: #F6F6F6;
	}
	
	.after_sales_items-content {
		/* padding-top: 20rpx; */
		height: 100%;
	}
	.no-have-code{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.no-have-ticket {
		text-align: center;
		font-size: 32rpx;
		color: #111111;
	}
	.images image {
		width: 360rpx;
		height: 345rpx;
	}
</style>
