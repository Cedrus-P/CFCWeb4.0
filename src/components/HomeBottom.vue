<template>
	<div class="homebottom" id="joinus">
		<div class="barrier">
			<div class="filter">
				<div id="list">
					<div id="joinBox">
						<div id="joinText">
							<div id="j">J</div>
							<div id="o">OIN US</div>
						</div>
						<div id="joinLine"></div>
					</div>
					<form action="" id="jointable">
						<table id="joinContent" cellpadding="20px">
							<tbody>
								<tr>
									<td>Name</td>
									<td id="joinName">
										<input type="text" id="name" name="name" class="input" />
									</td>
									<td>Tel</td>
									<td id="joinTel">
										<input type="text" id="tel" name="tel" class="input" />
									</td>
								</tr>
								<tr>
									<td>Major</td>
									<td id="joinMajor">
										<input type="text" id="major" name="major" class="input" />
									</td>
									<td>Grade</td>
									<td id="joinGrade">
										<input type="text" id="grade" name="grade" class="input" />
									</td>
								</tr>
								<tr>
									<td>Interest</td>
									<td id="joinInterest">
										<input
											type="text"
											id="interest"
											name="interest"
											class="input"
										/>
									</td>
									<td>Email</td>
									<td id="joinEmail">
										<input type="text" id="email" name="email" class="input" />
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<button id="joinCommitBtu" @click="onCommitClick">
						<div id="joinCommitText">COMMIT</div>
						<img
							src="https://img.icons8.com/ios/50/000000/paper-plane.png"
							class="plane"
						/>
					</button>
				</div>
			</div>
		</div>
		<!-- <Footer /> -->
		<Down />
	</div>
</template>

<script>
import Footer from './Footer.vue'
import Down from './Down.vue'
export default {
	name: 'HomeBottom',
	components: {
		Footer,
		Down
	},
	props: {
		msg: String
	},
	methods: {
		onCommitClick() {
			alert('加入2022 QQ招新群：981428044 了解更多')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homebottom {
	height: 100%;
	width: 100%;
	transition: 1s all;
	position: absolute;
}

.barrier {
	height: 90%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.filter {
	height: 40%;
	width: 90%;
	max-width: 900px;
	min-width: 300px;
	min-height: 450px;
	position: absolute;
	z-index: 100;
	border: solid 1px rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(20px);
	transition: 1s all;
	background-color: rgba(255, 255, 255, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 1s ease-in-out;
}
.filter::after {
	background-image: inherit;
	width: inherit;
	height: 40%;
	position: absolute;
	bottom: -41%;
	transform: scaleY(-1);
}
#list {
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
#joinContent {
	position: relative;
	margin: auto;
	height: 100%;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
#joinBox {
	width: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
#joinText {
	height: 48px;
	font-size: 48px;
	font-weight: 600;
	color: rgb(0, 0, 0);
	text-align: center;
	display: flex;
	flex-direction: row;
}
#j {
	font-size: 60px;
	height: 60px;
}
#o {
	padding-top: 3px;
}
#joinLine {
	height: 6px;
	width: 146px;
	background-color: rgb(0, 0, 0);
	margin-top: 10px;
	display: block;
	margin-left: 50px;
}
td {
	font-weight: 600;
	color: rgb(0, 0, 0);
	padding: 5px 3px;
}
input {
	width: 70%;
	min-width: 30px;
	outline-style: none;
	margin: 10px;
	border-radius: 2px;
	background-color: rgba(147, 147, 147, 0.2);
}
.input {
	padding: 5px 11px;
	font-size: 14px;
}
input:focus {
	border-color: #ffffff;
	outline: 0;
	-webkit-box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075),
		0 0 5px rgba(255, 255, 255, 0.3);
	box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075),
		0 0 5px rgba(255, 255, 255, 0.3);
}
#joinCommitBtu {
	width: 150px;
	height: 40px;
	// border-radius: 20px;
	border: solid 1px rgb(32, 32, 32);
	font-size: 24px;
	font-weight: 600;
	color: rgb(62, 62, 62);
	background-color: #ffffff;
	text-align: center;
	vertical-align: middle;
	line-height: 40px;
	padding-left: 5px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
.plane {
	height: 25px;
	width: 25px;
}
#joinCommitBtu:hover {
	box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px 2px;
}

// 适配
@media screen and (max-width: 600px) {
	#join
	td{
		padding: 0;
	}
	input{
		margin: 0;
	}
	#joinContent {
		font-size: 14px;
	}


}
</style>
