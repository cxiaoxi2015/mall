<template>
  <div id="app">
    <router-view keep-alive/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	html,body{
		margin:0;
		padding:0;
		width:100%;
		height:100%;
	}
	div,ul,ol,li,a{
		list-style:none;
		text-decoration:none;
		box-sizing:border-box;
		margin:0;
		padding:0;
    color:#555555;
	}
	#app {
	  font-family: 'Lato', sans-serif;
	  font-size: 16px;
		line-height: 1.4;
		color: #666666;
		background-color: #f8f8f8;
		-webkit-font-smoothing: antialiased;
		box-sizing:border-box;
		width:100%;
		height:100%;
	}
</style>
