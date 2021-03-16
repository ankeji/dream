<template>
	<view class="pa-32">
		<orderbar v-for="(item,index) in 10" :key="index" :item="item"></orderbar>
	</view>
</template>

<script>
	import orderbar from '../../components/orderbar'
	export default {
		components: {orderbar},
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
