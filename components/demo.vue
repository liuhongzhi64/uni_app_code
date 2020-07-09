<view id="skip" class="skip">
	<!-- 头部导航条 -->
	<swiperTabHead :tabBars="skipList" :tabIndex="tabtapTopIndex" @tabtap="tabtapTop"></swiperTabHead>
	<!-- <view @click="tabtapTop(index)" v-for="(items,index) in skipList" :key="index" :class="{btna:tabtapTopIndex == index}">基本信息</view> -->


	<!-- 导航条的主体内容 -->
	<view class="uni-tab-bar">
		<swiper class="swiper-box" :style="{height:topSwiperheight+'rpx'}" :current="tabtapTopIndex" @change="tabChangeTop">
			<swiper-item v-for="(items,index) in topTabTaplist" :key="index">
				<scroll-view scroll-y class="list">
					<template v-if="items.list.length > 0">
						<view v-for="(item,index1) in items.list" :key="index1">
							<view v-if="!item.swiperList">{{item}}</view>
							<!-- 轮播 -->
							<view id="swiper" v-if="item.swiperList">
								<swiper class="swiper" :indicator-dots="item.indicatorDots" :autoplay="item.autoplay" :interval="item.interval"
								 :duration="item.duration" previous-margin="40rpx">
									<swiper-item v-for="(i, index) in item.swiperList" :key="index" :class="i.bg">
										<view class="swiper-item">
											{{i.content}}
										</view>
									</swiper-item>
								</swiper>
							</view>

							<!-- 认证 -->
							<view id="certification" class="certification" v-if="item.certificationList">
								<view class="certification" v-for="(i, index) in item.certificationList" :key="index">
									<view>{{i}}</view>
								</view>
							</view>

							<!-- 自定义导航条 -->
							<view id="tabBarSwiper" v-if="item.tabBarSwiperList">
								<swiper :indicator-dots="item.indicatorDots" :interval="item.interval" :duration="item.duration">
									<swiper-item class="tabBarSwiper">
										<view v-for="(i, index) in item.tabBarSwiperList" :key="index" class="swiper-item tabBarSwiperItem">
											<view class="icon">
												<image :src="i.icon" mode=""></image>
											</view>
											<view class="text">
												{{i.name}}
											</view>
										</view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-item">
											2
										</view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-item">
											3
										</view>
									</swiper-item>
								</swiper>
							</view>

							<!-- 广告位01 -->
							<view id="advertising" v-if="item.advertisingUrl==''">
								<view class="advertising">
									<view class="advertis" :style="{backgroundImage:'url('+item.advertisingUrl+')'}" style="width: 100%;height: 100%;background-size: 100% 100%;">
										广告位01
									</view>
								</view>
							</view>

							<!-- 广告位03 -->
							<view id="advertising03" class="advertisingItem" v-if="item.advertisingList">
								<view class="advertising03" v-for="(i,k) in item.advertisingList" :key='k'>
									<view class="advertisingItems" :style="{backgroundImage:'url('+i.backgroungUrl+')'}" style="background-size: 100% 100%;">
										<view class="advertisingTitle">
											{{i.title}}
										</view>
										<view class="advertisingContent">
											{{i.content}}
										</view>
									</view>
								</view>
							</view>

							<!-- 广告位02 -->
							<view id="advertising02" class="advertising02Item" v-if="item.advertisingList">
								<view class="advertising02" v-for="(i,k) in advertisingList" :key='k'>
									<view class="advertisingItems" :style="{backgroundImage:'url('+i.backgroungUrl+')'}" style="background-size: 100% 100%;">
										<view class="advertisingTitle">
											{{i.title}}
										</view>
										<view class="advertisingContent">
											{{i.content}}
										</view>
									</view>
								</view>
							</view>

							<!-- 广告位01 -->
							<view id="advertising" v-if="item.advertisingUrl==''">
								<view class="advertising">
									<view class="advertis" :style="{backgroundImage:'url('+item.advertisingUrl+')'}" style="width: 100%;height: 100%;background-size: 100% 100%;">
										广告位01
									</view>
								</view>
							</view>

							<!-- 广告位04 -->
							<view id="scroll-view_H" v-if="item.scrollViewItemYList">
								<scroll-view class="scroll-view-item-Y" scroll-x="true" @scroll="scroll" scroll-left="0">
									<view id="scroll-view-item" class="scroll-view-item_H" v-for="(i,k) in item.scrollViewItemYList" :key='k'>
										{{ i.name }}
									</view>
								</scroll-view>
							</view>

							<!-- 自定义导航条加倒计时 -->
							<view id="countDown" v-if="item.productImgList">
								<view class="countDown">
									<!-- 自定义名称和时间倒计时 -->
									<view class="timeTitle-time">
										<view class="timeTitle">
											自定义名称
										</view>
										<view class="time">
											<!-- 时-->
											<view class="house">
												<view class="houses">

												</view>
												时
											</view>

											<view class="second">
												<view class="seconds">

												</view>
												分
											</view>

											<view class="minute">
												<view class="minutes">

												</view>
												秒
											</view>
										</view>
									</view>
									<!-- 全部 -->
									<view class="all">
										全部 >
									</view>
								</view>

								<!-- 图片导航 -->
								<view class="image">
									<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=421139999,1550188648&fm=26&gp=0.jpg"
									 mode="heightFix"></image>
								</view>

								<!-- 图片商品 -->
								<view class="productImg">
									<scroll-view class="productImgY" scroll-x="true" @scroll="scroll" scroll-left="0">
										<view id="productImg" class="productImgs" v-for="(i,k) in item.productImgList" :key='k'>
											<view :id="'productImg'+k" class="productItems">
												<!-- 图片 -->
												<view class="Imgs">
													<image :src="i.url" mode=""></image>
												</view>

												<!-- 内容 -->
												<view class="productContent">
													{{i.content}}
												</view>

												<!-- 价格 -->
												<view class="prouctPrice">
													<view class="newprice">￥:{{i.newPrice}}</view>
													<view class="oldPrice">
														￥:{{i.oldPrice}}
													</view>
												</view>
											</view>
										</view>
										<!-- 查看更多 -->
										<view id="seeAll" class="seeAll">
											<view class="all">
												查看更多>
											</view>
										</view>
									</scroll-view>
								</view>


							</view>

							<!-- 自定义导航条 -->
							<view id="image" v-if="item.newslist">
								<view class="tabBarList">
									<swiperTabHead :tabBars="item.tabBars" :tabIndex="item.tabIndex" @tabtap="tabtap"></swiperTabHead>
								</view>
								<view class="uni-tab-bar">
									<swiper class="swiper-box" :style="{height:item.swiperheight+'rpx'}" :current="item.tabIndex" @change="tabChange">
										<swiper-item v-for="(items,index) in item.newslist" :key="index">
											<scroll-view scroll-y class="list">
												<template v-if="items.list.length > 0">
													<block v-for="(item,index1) in items.list" :key="index1">
														<view>{{item}}</view>
													</block>
												</template>
											</scroll-view>
										</swiper-item>
									</swiper>
								</view>
							</view>
						</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</view>


<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goToPage: function(e) {
				let index = e.id
				switch (index) {
					case 0:
						uni.switchTab({
							url: '/pages/index/index',
						})
						break;
					case 1:
						uni.navigateTo({
							url: '/pages/goods/goods_classify',
						})
						break;
					case 2:
						uni.navigateTo({
							url: '/pages/goods/goods_detail',
						})
						break;
				}
			},
			// 选中的内容
			tabChangeTop: function(e) {
				console.log(e.detail.current, 1111)
				this.tabtapTopIndex = e.detail.current;
			},
		}
	}
</script>

<style>

</style>
