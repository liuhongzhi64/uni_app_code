<template>
	<view class="specs-content" v-for="(item,index) in spec_value" :data-index='index' :key="index">
		<view class="specs-title">
			{{item.name}}
		</view>
		<view class="specs-cont">
			<view class="li" v-for="(is,sindex) in item.attr"
			 :key="sindex" :class="[spec[index].attr[sindex]==1?'li-hover':spec[index].attr[sindex]==0?'li-gray':'']"
			 @tap="changeSpec(index,sindex)">
				{{is}}
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			barList: Array
		},
		data() {
			return {
				spec_value: {
					name: '项目名称',
					attr: {
						'11': '测试1',
						'12': '测试2',
						'13': '测试3',
						'14': '测试4',
						'15': '测试5',
						'16': '测试6',
						'17': '测试7',
					}
				}
				spec: {
					"1": {
						name: '项目名称',
						attr: {
							'11': 0,
							'12': 0,
							'13': 0,
							'14': 0,
							'15': 0,
							'16': 0,
							'17': 1,
						}
					}
				}
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>
