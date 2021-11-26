<template>
	<div id="home">
		<HomeTop />
		<HomeMid />
		<HomeBottom />
		<!-- <HomeDown/> -->
	</div>
</template>

<script>
// @ is an alias to /src
import HomeTop from '@/components/HomeTop.vue'
import HomeMid from '@/components/HomeMid.vue'
import HomeBottom from '@/components/HomeBottom.vue'

export default {
	name: 'Home',
	components: {
		HomeTop,
		HomeMid,
		HomeBottom
	},
}
</script>

<style>
#home {
	height: 100%;
	width: 100%;
}
</style>
