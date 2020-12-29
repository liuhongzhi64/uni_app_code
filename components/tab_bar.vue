<template>
	<view class="this_tabbar" :style="[{'height':height+'px','background-color':background_color}]">
		<view class="list_item" v-for="(item,index) in bottom_icon" :key='index'
		 :style="[{'width':bottom_icon.length==5?'20%':bottom_icon.length==4?'25%':bottom_icon.length==3?'33%':'50%'}]" @tap='change_bar(index,item.page)'>
			<image class="icon_img" :src="requestUrl+item.img" mode="widthFix" :style="[{'width':icon_width+'px'}]"></image>
			<view class="icon_title"
			 :style="[{'color':change_index==index?selected_color:color,'padding-top':spacing+'px','font-size':font_size+'px'}]"> 
				{{ item.title }} 
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bottom_icon: {//icon列表
				type: Array,
				default: [
					{
						img:'upload/indexpages/images/202012/22/TNm385aHZiQVB0r0ZD09dK2gTsCVaebIcAv2xXtY.png',
						title: "首页",
						page:'index/index'
					},
					{
						img:'upload/indexpages/images/202012/22/uIQKeANcfDe9qBRQJ4IoD7bExUSxkHOzz0zlIQgV.png',
						title: "分类",
						page:'goods/goods_classify'
					},
					{
						img:'upload/indexpages/images/202012/22/RTePTFh6BE6FXfSpa8YyQVRAPQgNNQxzpboCgrki.png',
						title: "日记", //会员+
						page:'diary/diary'
					},
					{
						img:'upload/indexpages/images/202012/22/VTTLQfdeBc8PouQLThqpZbyKCLSGwchRpdZIlQ2i.png',
						title: "医生",
						page:'doctor/doctor'
					},
					{
						img:'upload/indexpages/images/202012/22/cz7YgCfRf8iEZ9WYXmsuf73dFW0LeKDztaGs0MNt.png',
						title: "我的",
						page:'my/my'
					},
				],
			},
			requestUrl:{//请求头
				type:String,
				default:'https://mytest.hmzixin.com/'
			},
			color:{//字体颜色
				type:String,
				default:'#7A7E83'
			},
			background_color:{
				type:String,
				default:'#F8F8F8'
			},
			selected_color:{//选中颜色
				type:String,
				default:'#FA3475'
			},
			border_style:{//上边框的颜色
				type:String,
				default:'black'
			},
			height:{//默认高度
				type:Number,
				default:50
			},
			spacing:{//图标和文字的间距
				type:Number,
				default:3
			},
			icon_width:{//图标默认宽度（高度等比例缩放）
				type:Number,
				default:24
			},
			font_size:{//文字默认大小
				type:Number,
				default:10
			}
		},
		data() {
			return {
				change_index:0
			}
		},

		onLoad() {

		},
		methods: {
			change_bar:function(index,page){
				let that = this
				that.change_index = index
				console.log('pages/'+page)
			}
		}
	}
</script>

<style scoped>
	.this_tabbar{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		position: fixed;
		z-index: 9999;
		left: 0;
		bottom: 0;
	}
	.list_item{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
