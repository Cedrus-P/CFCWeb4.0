<template>
	<div id="down">
		<!--Content before waves-->
		<div class="inner-header flex"></div>

		<!--Waves Container-->
		<div>
			<svg
				class="waves"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 24 150 28"
				preserveAspectRatio="none"
				shape-rendering="auto"
			>
				<defs>
					<path
						id="gentle-wave"
						d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
					/>
				</defs>
				<g class="parallax">
					<use xlink:href="#gentle-wave" x="48" y="0" fill="#4acac4c9" />
					<use
						xlink:href="#gentle-wave"
						x="48"
						y="3"
						fill="rgba(84,58,183,0.4)"
					/>
					<use
						xlink:href="#gentle-wave"
						x="48"
						y="5"
						fill="rgba(0,172,193,0.8)"
					/>
					<use xlink:href="#gentle-wave" x="48" y="7" fill="#4acac3" />
				</g>
			</svg>
		</div>
    <div class="content">
      <img src="../assets/FootImg/CFC.png" alt="" class="foot-img">
      <div id="icons">
					<div @click="onQQClick">
						<img src="../assets/FootImg/qq.png" alt="" class="iconImg" />
					</div>
					<a href="https://github.com/CrazyForCode"
						><img src="../assets/FootImg/github.png" alt="" class="iconImg" />
					</a>
					<a
						href="https://mp.weixin.qq.com/s?__biz=Mzg3NzUxNjE5OQ==&mid=2247483698&idx=1&sn=9e63c934c697a21665b4c8f7e736b663&chksm=cf2085faf8570cec13b773d84bcd80c8e6d1574fe7c5b343982ad0bd9381806b896a017dd634&mpshare=1&scene=23&srcid=1124z7zoWyC7pMy1QLQK5pzr&sharer_sharetime=1637759221463&sharer_shareid=502450450a38379b9390fed83b301578%23rd"
						><img src="../assets/FootImg/wechat.png" alt="" class="iconImg" />
					</a>
					<!-- <a href="#"><img src="../assets/FootImg/email.png" alt="" class="iconImg" /> </a> -->
				</div>
				<p id="footText" class="text">©2013-2021 Copy Right CFC</p>
			</div>
    </div>
</template>

<script>
export default {
	name: 'Down',
	methods: {
		onQQClick() {
			alert('加入2022 QQ招新群：981428044 了解更多')
		}
	}
}
</script>

<style>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

#down {
	position: relative;
	text-align: center;
	background-color: white;
	color: white;
}

.inner-header {
	width: 100%;
	margin: 0;
	padding: 0;
}

.flex {
	/*Flexbox for containers*/
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.waves {
	position: relative;
	width: 100%;
	height: 15vh;
	margin-bottom: -7px; /*Fix for safari gap*/
	min-height: 100px;
	max-height: 200px;
}

.content {
	position: relative;
	height: 25vh;
  width: auto;
	text-align: center;
	background-color: #4acac3;
  display: flex;
      flex-direction: column;
    align-items: center;
}

/* Animation */

.parallax > use {
	animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
	animation-delay: -2s;
	animation-duration: 7s;
}
.parallax > use:nth-child(2) {
	animation-delay: -3s;
	animation-duration: 10s;
}
.parallax > use:nth-child(3) {
	animation-delay: -4s;
	animation-duration: 13s;
}
.parallax > use:nth-child(4) {
	animation-delay: -5s;
	animation-duration: 20s;
}
@keyframes move-forever {
	0% {
		transform: translate3d(-90px, 0, 0);
	}
	100% {
		transform: translate3d(85px, 0, 0);
	}
}

@media (max-width: 768px) {
	.waves {
		height: 40px;
		min-height: 40px;
	}
	.content {
		height: 30vh;
	}
	h1 {
		font-size: 24px;
	}
}
.foot-img{
  height: 60%;
  width: auto;
  padding-bottom: 5px;
	padding-right: 5px;
  border-bottom: white 3px solid;
}
#icons {
	width: 205px;
	height: auto;
	padding: 5px 0px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	align-content: center;
}
.iconImg {
	width: 25px;
	height: 25px;
}
</style>
