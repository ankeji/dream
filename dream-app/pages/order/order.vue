<template>
	<view class="pa-32">
		<orderlist v-for="(item,index) in 10" :key="index" :item="item"></orderlist>
	</view>
</template>

<script>
	import orderlist from '../../components/listComponent/orderlist'
	export default {
		components: {orderlist},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
