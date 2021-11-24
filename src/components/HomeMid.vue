<template>
	<div class="homemid">
		<!-- <bg-snow></bg-snow> -->
		<div class="barrier">
			<div class="human-top">
				<div class="human-contents">
					<div class="innertext">
						<div class="text intro-text" v-if="seen1">
							<p>自由没有思想自由，就没有科学，没有真理。—— 勒南（法国作家、历史学家）<br/>在这里，没有老师，没有教条，你学什么，怎么学由你自己定夺。不用害怕前进路上的黑暗，心中的火焰会照亮属于你的那条路。</p>
						</div>
						<div class="text intro-text" v-if="seen2">
							<p>热爱实践热爱真理，是发现真理最有利的条件。—— 爱尔维修（法国哲学家、启蒙思想家）<br/>兴趣是最好的老师，热爱是最澎湃的动力。学海无涯，热爱为帆，永远Crazy For Code！</p>
						</div>
						<div class="text intro-text" v-if="seen3">
							<p>氛围志气这东西是能传染的，你能感染着笼罩在你的环境中的精神。那些在你周围不断向上奋发的人的胜利，会鼓励激发你作更艰苦的奋斗，以求达到如像他们所做的样子。—— 斯蒂文（弗兰德数学家、工程师）<br/>在这里的大家，都怀着一颗coding的心，我们互相激励互相学习互相帮助，在不同的道路上追寻着自己的梦想。</p>
						</div>
					</div>
				</div>
			</div>
			<div id="human-img">
				<img
					src="../assets/MidImg/human1.jpg"
					alt=""
					class="humanImg imgBlue"
					@click="onImgClicked1"
				/>
				<img
					src="../assets/MidImg/human2.jpg"
					alt=""
					class="humanImg imgOrange"
					@click="onImgClicked2"
				/>
				<img
					src="../assets/MidImg/human3.jpg"
					alt=""
					class="humanImg imgGreen"
					@click="onImgClicked3"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import utils from '../assets/utils'
import BgSnow from '@/components/BgSnow.vue'

export default {
	name: 'HomeMid',
	props: {
		msg: String
	},
	data() {
		return {
			seen1: true,
			seen2: false,
			seen3: false,
			intro1:
				'',
			intro2:
				'',
			intro3:
				''
		}
	},
	components: {
		BgSnow
	},
	mounted() {
		let bg = document.querySelector('.barrier')
		const rect = bg.getBoundingClientRect()
		bg.addEventListener(
			'mousemove',
			utils.throttle((e) => {
				let x = e.clientX - rect.left
				let y = e.clientY - rect.top
				bg.style.backgroundPositionX = -x / 10 - 300 + 'px'
				bg.style.backgroundPositionY = y / 10 - 250 + 'px'
				// console.log('ok');
			}, 24)
		)
	},
	methods: {
		onImgClicked1() {
			this.seen1 = true
			this.seen2 = false
			this.seen3 = false
			let box = document.querySelector('.imgBlue')
			box.classList.add('imgClicked')
			console.log(box.classList)
			setTimeout(() => {
				box.classList.remove('imgClicked')
			}, 10000)
		},
		onImgClicked2() {
			this.seen1 = false
			this.seen2 = true
			this.seen3 = false
			let box = document.querySelector('.imgOrange')
			box.classList.add('imgClicked')
			setTimeout(() => {
				box.classList.remove('imgClicked')
			}, 10000)
		},
		onImgClicked3() {
			this.seen1 = false
			this.seen2 = false
			this.seen3 = true
			let box = document.querySelector('.imgGreen')
			box.classList.add('imgClicked')
			setTimeout(() => {
				box.classList.remove('imgClicked')
			}, 10000)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homemid {
	height: 100vh;
	width: 100vh;
	background-color: rgb(255, 255, 255);
	// background: linear-gradient(0.9turn, rgb(21,23,39) 50%, white 50%);
	// background-color: #282828;
}
.barrier {
	height: 100vh;
	width: 100vw;
	background-image: url('../assets/MidImg/04.png');
	background-size: 120%;
	background-attachment: fixed;
	// overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.human-top {
	height: 40%;
	width: 100%;
	display: flex;
	justify-content: center;
}
.human-contents {
	background-color: rgba(255, 255, 255, 0.5);
	position: relative;
	height: 100%;
	width: 60%;
	max-width: 1000px;
	min-width: 500px;
	border-radius: 15px;
	backdrop-filter: blur(20px);
	box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 5px 5px,
		rgba(255, 255, 255, 0.3) 6px 6px 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	// animation: heartBeat 15s ;
	// animation-iteration-count: infinite;
}

// .human-contents::before {
// 	content: '';

// 	bottom: calc(-3 * 3rem);
// 	left: 50px;
// 	position: absolute;
// 	height: calc(3 * 3rem);
// 	width: 2rem;
// 	background-color: transparent;
// 	border-top-left-radius: 3rem;
// 	box-shadow: #ffffff 0px calc(-2 * 2rem) 0px 0px;
// }
.innertext {
	width: 90%;
	height: auto;
	display: flex;
	// flex-direction: row;
	// justify-content: center;
}
.intro-text {
	font-size: 24px;
	height: fit-content;
}

#human-img {
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.humanImg {
	width: 10rem;
	height: auto;
	min-width: 150px;
	margin: 0 5% 0 5%;
	border-radius: 50%;
}
.imgClicked {
	animation: shakeY 5s;
	animation-iteration-count: 2;
	box-shadow: rgba(0, 0, 0, 0.6) 3px -3px 6px 6px;
}
.imgBlue:hover {
	animation: swing 2s;
	box-shadow: rgba(0, 0, 255, 0.6) 3px 3px 3px 3px;
}
.imgOrange:hover {
	animation: swing 2s;
	box-shadow: rgba(255, 68, 0, 0.6) 3px 3px 3px 3px;
}
.imgGreen:hover {
	animation: swing 2s;
	box-shadow: rgba(20, 150, 79, 0.6) 3px 3px 3px 3px;
}
</style>
