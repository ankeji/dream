<template>
	<view class="content">
		<view class="big-tab-box bg-white px-32 flex justify-between items-center">
			<view class="pr-32 flex justify-center items-center">
				<view :class="tabIndex==item.key?'tab-list tab-list-active':'tab-list'" v-for="item in funlist"
					:key="item.key" @click="tebClick(item)">{{item.value}}</view>
			</view>
		</view>
		<view class="px-32 mb-32 news-big-box">
			<view class="mt-32 bg-white border-6" v-if="tabIndex==0||tabIndex==1">
				<view class="pa-32">
					<view class="server-status flex items-center">
						<image class="run-img" src="../../static/img/run.png" mode=""></image>
						<view class="server-css">{{serverStatus[0]}}</view>
					</view>
					<view class="flex mt-32 other-mt">
						<view class="point-green"></view>
						<textarea maxlength='-1' class="border-bottm more-input" auto-height
							:placeholder="funlist[tabIndex].addr.to" />
					</view>
					<view class="flex mt-32 other-mt">
						<view class="point-red"></view>
						<textarea maxlength='-1' class="border-bottm more-input" auto-height
							:placeholder="funlist[tabIndex].addr.from" />
					</view>
				</view>
			</view>
			<view class="mt-32 bg-white border-6 pa-32">
				<view class="server-status flex items-center">
					<image class="run-img" src="../../static/img/edit.png" mode=""></image>
					<view class="server-css">{{funlist[tabIndex].title}}</view>
				</view>
				<textarea maxlength='-1' class="more-input mt-32 detil-goods" auto-height
					:placeholder="funlist[tabIndex].describe" />
			</view>
			<view class="mt-32 bg-white border-6 pa-32">
				<view class="server-status flex items-center">
					<image class="run-img" src="../../static/img/phone.png" mode=""></image>
					<view class="server-css">填上您的手机号，方便订单有问题及时联系您哦</view>
				</view>
				<input class="mt-32 border-bottm more-input" type="number" placeholder="请输入您的手机号" />
			</view>
			<view class="mt-32 bg-white border-6 pa-32">
				<view class="server-status flex items-center">
					<image class="run-img" src="../../static/img/money.png" mode=""></image>
					<view class="server-css">建议最低20个跑币哦！要相信重赏之下必有勇夫</view>
				</view>
				<view class="mt-32 flex items-center">
					<view class="text-color text-d-size">跑币：</view>
					<input class="border money-width" type="number" placeholder="请输入您的报酬" />
					<view class="text-color text-d-size ml-32">个</view>
				</view>
			</view>
			
			<view class="mt-32 w-full bg-paoc btn border-6" @click="gopay">发布</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				serverStatus: ['该服务正常运营', '该服务已暂停'],
				funlist: [{
					key: 0,
					value: '帮我取',
					title:'描述物品内容',
					addr:{
						to:'请输入拿货地址',
						from:'请输入送达地址'
					},
					describe:'请描述您的商品信息:如取件码、姓名等等;方面取货哦!'
				}, {
					key: 1,
					value: '帮我买',
					title:'描述物品内容',
					addr:{
						to:'请输入购买地址',
						from:'请输入送达地点'
					},
					describe:'请描述您的商品信息:如取件码、姓名等等;方面取货哦!'
				}, {
					key: 2,
					value: '找人办事',
					title:'描述简要描述待办事项',
					addr:{
						to:null,
						from:null
					},
					describe:'请简要描述您的待办事项，方便有能力的跑男及时联系你哦！如：2020年1月3日下午14:30-15:30代课等等'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			tebClick(item) {
				this.tabIndex = item.key
			},
			gopay(){
				uni.reLaunch({
				    url: '/pages/success/success'
				});
			}
		}
	}
</script>

<style>
	.big-tab-box {
		width: 100%;
		height: 120rpx;
		box-sizing: border-box;
		overflow: hidden;
		overflow-x: scroll;
		border-top: solid 1px #e1e1e1;
		position: fixed;
		top: 88rpx;
		z-index: 5;
	}

	.big-tab-box::-webkit-scrollbar {
		display: none;
	}

	.tab-list {
		width: auto;
		padding: 16rpx 20rpx;
		margin: 10rpx;
		text-align: center;
		color: #999999;
		font-size: 32rpx;
		border: solid 1px #FFFFFF;
		border-radius: 80rpx;
	}

	.tab-list-active {
		color: #46495f;
		border: solid 1px #e1e1e1;
		border-radius: 80rpx;
	}

	.run-img {
		width: 30rpx;
		height: 30rpx;
	}

	.server-css {
		color: #46495F;
		font-size: 26rpx;
		line-height: 40rpx;
	}

	.run-img {
		margin-right: 16rpx;
	}

	.server-status {}

	.point-red {
		background-color: #ff6633;
		width: 15rpx;
		height: 15rpx;
		border-radius: 30rpx;
		border: 5rpx solid #fcc4b2;
		margin-right: 16rpx;
		margin-top: 12rpx;
	}
	.point-green {
		background-color: #33CC66;
		width: 15rpx;
		height: 15rpx;
		border-radius: 30rpx;
		border: 5rpx solid rgb(195, 252, 213);
		margin-right: 16rpx;
		margin-top: 12rpx;
	}
	.more-input{
		padding-bottom: 16rpx;
	}
	.other-mt{
		margin-top: 40rpx;
	}
	.detil-goods{
		min-height: 200rpx;
	}
	.money-width{
		width: 300rpx;
		padding: 8rpx;
	}
	.news-big-box{
		margin-top: 152rpx;
	}
	.btn{
		height: 100rpx;
		color: #ffffff;
		text-align: center;
		line-height: 100rpx;
	}
</style>
