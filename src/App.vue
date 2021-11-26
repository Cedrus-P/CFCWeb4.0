<template>
	<div id="app">
		<div id="header">
			<div id="menu-small">
				<router-link to="/">
					<div class="box box1">Home</div>
				</router-link>
				<!-- <router-link to="/about">
					<div class="box">About</div>
				</router-link> -->
				<a href="https://blog.crazyforcode.org/" class="box box2">
					<span>
						Blogs
					</span>
				</a>
				<a href="#joinus" class="box box3">Join Us</a>
				<!-- <a href="#" class="box box4">Time Line</a> -->
			</div>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
	border: 0;
	font-family: -apple-system, 'Noto Sans', 'Helvetica Neue', Helvetica,
		'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB',
		'Noto Sans CJK SC', 'Source Han Sans SC', 'Source Han Sans CN',
		'Microsoft YaHei', 'Wenquanyi Micro Hei', 'WenQuanYi Zen Hei', 'ST Heiti',
		SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif;
	// height: 100vh;
}
html {
	font-size: 16px;
}
#header {
	// width: 100%;
	height: 50px;
	position: fixed;
	// display: flex;
}
#menu-small {
	height: 50px;
	width: 99%;
	font-size: 18px;
	display: flex;
	position: fixed;
	flex-direction: row;
	justify-content: flex-end;
	z-index: 1000;
}
.menu-icon {
	width: 50px;
	height: 50px;
}
.box {
	height: fit-content;
	margin: 15px;
	padding: 5px;
	color: #000000;
	mix-blend-mode: difference;
	text-decoration: none;
	font-weight: bold;
	transition: all .5s ease;
  position: relative;
}
.box:hover {
  color: #d62a58;
}

.box::after {
  content: "";
  width: 0%;
  height: 3px;
  background: #d62a58;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all .5s ease;
}
.box:hover::after {
  opacity: 1;
  width: 100%;
}
.router-link-active {
	text-decoration: none;
}
</style>
