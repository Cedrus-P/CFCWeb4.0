<template>
	<div id="homemid">
		<div class="homemid-barrier">
			<div class="homemid-up">
				<div class="homemid-up-contents">
					<div class="innertext">
						<div class="text intro-text" v-if="seen1">
							<p>
								<b> 这里有最浓厚的技术氛围：</b
								><br /><br />开放的空间，自由的环境，拿起小黑板就是一场 idea
								的碰撞，打开投影仪就是一场激情的展示。每两周一次的 LightON!
								技术交流活动，团队成员畅所欲言，交流自己的所学所想，你可以在此刻大放异彩，分享最炫酷的黑科技；或是交流最核心的技术细节，与志同道合的小伙伴一起攻下难题。
							</p>
						</div>
						<div class="text intro-text" v-if="seen2">
							<p>
								<b>这里有最给力的硬件资源：</b><br /><br />Wi-Fi
								全覆盖，畅享高速网络；宽敞专属座位，只为舒适 Coding；
								各类技术书籍应有尽有，还有海内外各式云服务器任你折腾！
							</p>
						</div>
						<div class="text intro-text" v-if="seen3">
							<p>
								在这里，你除了可以和志同道合的小伙伴一起<b>探讨各种前沿的计算机技术</b>，还可以跟学长学姐<b>组队征战各类计算机技术相关的比赛</b>，或者选择<b>合作接手商业性项目</b>，挣点外快，磨练技术，为以后进一线互联网公司工作做积攒实战经验。在这里的大家，都怀着一颗coding的心，我们互相激励互相学习互相帮助，在不同的道路上追寻着自己的梦想。
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="homemid-down">
				<img
					src="../assets/MidImg/human1.jpg"
					alt=""
					class="human-img img-blue"
					@click="onImgClicked1"
				/>
				<img
					src="../assets/MidImg/human2.jpg"
					alt=""
					class="human-img img-orange"
					@click="onImgClicked2"
				/>
				<img
					src="../assets/MidImg/human3.jpg"
					alt=""
					class="human-img img-green"
					@click="onImgClicked3"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import utils from '../assets/utils'

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
			intro1: '',
			intro2: '',
			intro3: ''
		}
	},
	components: {},
	mounted() {
		let bg = document.querySelector('.homemid-barrier')
		const rect = bg.getBoundingClientRect()
		bg.addEventListener(
			'mousemove',
			utils.throttle((e) => {
				let x = e.clientX - rect.left
				let y = e.clientY - rect.top
				bg.style.backgroundPositionX = -x / 10 - 300 + 'px'
				bg.style.backgroundPositionY = y / 10 - 250 + 'px'
			}, 24)
		)
	},
	methods: {
		onImgClicked1() {
			this.seen1 = true
			this.seen2 = false
			this.seen3 = false
			let box = document.querySelector('.img-blue')
			box.classList.add('imgClicked')
			setTimeout(() => {
				box.classList.remove('imgClicked')
			}, 10000)
		},
		onImgClicked2() {
			this.seen1 = false
			this.seen2 = true
			this.seen3 = false
			let box = document.querySelector('.img-orange')
			box.classList.add('imgClicked')
			setTimeout(() => {
				box.classList.remove('imgClicked')
			}, 10000)
		},
		onImgClicked3() {
			this.seen1 = false
			this.seen2 = false
			this.seen3 = true
			let box = document.querySelector('.img-green')
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
#homemid {
	height: 100vh;
	width: 100%;
	background-color: rgb(255, 255, 255);
}
.homemid-barrier {
	height: 100%;
	width: 100%;
	background-image: url('../assets/MidImg/04.png');
	background-size: 120%;
	background-attachment: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.homemid-up {
	height: 40%;
	width: 100%;
	display: flex;
	justify-content: center;
}
.homemid-up-contents {
	background-color: rgba(255, 255, 255, 0.5);
	position: relative;
	height: 100%;
	width: 90%;
	max-width: 1000px;
	min-width: 350px;
	border-radius: 15px;
	backdrop-filter: blur(20px);
	box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 5px 5px,
		rgba(255, 255, 255, 0.3) 6px 6px 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.innertext {
	width: 90%;
	height: auto;
	display: flex;
}
.intro-text {
	line-height: 1.5em;
	font-size: 0.4rem;
	height: fit-content;
}

.homemid-down {
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.human-img {
	width: 16em;
	height: 16em;
	margin: 0 5% 0 5%;
	border-radius: 50%;
}
.imgClicked {
	animation: shakeY 5s;
	animation-iteration-count: 2;
	box-shadow: rgba(0, 0, 0, 0.6) 3px -3px 6px 6px;
}
.img-blue:hover {
	animation: swing 2s;
	box-shadow: rgba(0, 0, 255, 0.6) 3px 3px 3px 3px;
}
.img-orange:hover {
	animation: swing 2s;
	box-shadow: rgba(255, 68, 0, 0.6) 3px 3px 3px 3px;
}
.img-green:hover {
	animation: swing 2s;
	box-shadow: rgba(20, 150, 79, 0.6) 3px 3px 3px 3px;
}

// 适配
@media screen and (max-width: 769px) {
	.human-img {
		height: 100px;
		width: 100px;
	}
}
</style>
