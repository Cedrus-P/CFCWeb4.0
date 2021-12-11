<template>
	<div class="hometop">
		<div class="test-bg">
			<div id="barrier">
				<div class="content-left">
					<div class="content-top">
						<h1 id="cfc-top-text" class="text cfc-text text-changed big-text">
							CFC Studio
						</h1>
						<h2 class="text cfc-text typing">Crazy For Code</h2>
					</div>
					<div class="content-down">
						<transition name="fade">
							<div class="content1" v-if="show1">
								<p class="click-text text">Click Me! ></p>
								<div class="control-point" @click="onPointClick"></div>
							</div>
						</transition>
						<transition name="fade">
							<div class="content2" v-if="show2">
								<p class="text ariticle">
									CFC团队成立于2013年1月，是重庆理工大学第一支完全由学生自主创立的计算机实验室。团队最初由三位热爱Web技术，渴望交流的学长组建，经过多年的发展，团队不断壮大，成员们的学习方向也不再局限于Web。<br />CFC已经成为重理工最大的的极客聚居地之一，并创造了多个校史第一。CFC一直秉承CrazyForCode的理念，为校内热爱技术、乐于学习的学子提供一个舒适的Coding环境和优秀的交流平台。
								</p>
								<div class="arrow-down " @click="onArrowClick">
									<img src="../assets/FootImg/next.png" alt="" id="nextImg" />
								</div>
							</div>
						</transition>
						<transition name="fade">
							<div class="content3" v-if="show3">
								<p class="text ariticle">
									团队擅长互联网技术开发，不仅致力于面向市场的网站和移动App，更希望服务大家的生活，提高工作效率；同时也有计算机领域的偏学术研究。<br />我们以技术交流和知识分享为主，鼓励创新和创造，喜欢做“酷”的东西，最重要的是我们希望营造一个好的学习环境。<br />在这里，遇见志同道合的朋友，交流技术与心得，碰撞思维的火花，成为更好的自己！
									<br />
								</p>
							</div>
						</transition>
					</div>
				</div>
				<!-- <div class="content-right"></div> -->
			</div>
		</div>
	</div>
</template>

<script>
import utils from '../assets/utils'

export default {
	name: 'HomeTop',
	components: {},
	props: {
		msg: String
	},
	data() {
		return {
			show1: true,
			show2: false,
			show3: false
		}
	},
	mounted() {
		document.addEventListener('scroll', this.onScroll, true)
		let bg = document.querySelector('.test-bg')
		const rect = bg.getBoundingClientRect()
		bg.addEventListener(
			'mousemove',
			utils.throttle((e) => {
				let x = e.clientX - rect.left
				let y = e.clientY - rect.top
				bg.style.backgroundPositionX = x / 5 - 300 + 'px'
				bg.style.backgroundPositionY = y / 5 - 250 + 'px'
			}, 24)
		)
	},
	methods: {
		onScroll() {
			utils.debounce(() => {
				let box1 = document.querySelector('.content-top')
				box1.classList.add('smaller')
				document.getElementById('cfc-top-text').classList.remove('text-changed')
				this.show1 = false
				if (!this.show3) this.show2 = true
			}, 300)
		},
		onPointClick() {
			let box1 = document.querySelector('.content-top')
			box1.classList.add('smaller')
			document.getElementById('cfc-top-text').classList.remove('text-changed')
			// 文案切换
			this.show1 = false
			this.show2 = true
		},
		onArrowClick() {
			console.log('ok')
			this.show2 = false
			this.show3 = true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {
	height: 1.5em;
	color: rgb(0, 0, 0);
	animation: fadeInLeft;
	animation-duration: 3s;
}
.hometop {
	height: 100vh;
	width: 100%;
	background: rgb(255, 255, 255);
	transition: 1s ease-in-out;
}
.test-bg {
	background-image: url('../assets/HomeImg/03.png');
	background-size: 130% auto;
	background-position: center;
	background-repeat: repeat;
	background-attachment: fixed;
}
#barrier {
	display: flex;
	flex-direction: row;
}
.content-left {
	height: 100vh;
}
.content-top {
	height: auto;
	width: fit-content;
	padding: 30% 0 0 8%;
	transition: 1s ease-in-out;
}
.smaller {
	padding-top: 10%;
	transition: 1s ease-in-out;
}
.cfc-text {
	width: 7.5rem;
	font-size: 1rem;
	font-weight: 500;
	transition: 1s ease-in-out;
}
.big-text {
	width: 12rem;
}
.typing {
	height: 1.25em;
	border-right: 5px solid;
	animation: typing 3s steps(15, end), blink-caret 1s step-end infinite;
	word-break: break-all;
	overflow: hidden;
}
@keyframes typing {
	from {
		width: 0;
	}
	to {
		width: 5.5em;
	}
}
@keyframes blink-caret {
	from,
	to {
		border-color: transparent;
	}
	50% {
		border-color: rgba(0, 125, 0, 0.8);
	}
}
.text-changed {
	font-size: 2rem;
}
// 下半部分
.content-down {
	width: auto;
	height: auto;
}

.content1 {
	height: auto;
	width: auto;
	margin-top: 8%;
	display: flex;
	align-items: center;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.content2 {
	width: fit-content;
	margin-top: 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.ariticle {
	// height: fit-content;
	height: auto;
	max-width: 1000px;
	line-height: 1.4em;
	width: 80%;
	font-size: 0.5rem;
	animation: fadeInUp;
	animation-duration: 2s;
}
.control-point {
	width: 20px;
	height: 20px;
	margin-left: 50px;
	background-color: #55ddee;
	border-radius: 10px;
	border: 1px solid #55ddee;
	border-radius: 50%;
	box-shadow: 0 1px 2px #55ddee;
	overflow: hidden;
	animation-timing-function: ease-in-out;
	animation-name: breathe;
	animation-duration: 1500ms;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}
@keyframes breathe {
	0% {
		opacity: 0.4;
		box-shadow: 0 1px 2px #55ddee, 0 1px 1px #55ddee inset;
	}

	100% {
		opacity: 1;
		border: 1px solid #55dceeac;
		box-shadow: 0 1px 30px #55ddee, 0 1px 20px #55ddee inset;
	}
}
.click-text {
	padding-left: 10%;
	font-size: 0.5rem;
	font-weight: 600;
}
.arrow-down {
	width: auto;
	height: auto;

	:hover {
		animation: heartBeat;
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}
}
#nextImg {
	width: 30px;
}
.content3 {
	width: fit-content;
	margin-top: 3%;
	display: flex;
	justify-content: center;
	animation: fadeInUp;
	animation-duration: 2s;
}
.content-right {
	color: white;
	font-size: 36px;
}
</style>
