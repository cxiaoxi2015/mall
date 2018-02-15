<template>
	<div id="header">
		<el-row :gutter="10">
		  <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="8">
		  	<div class="logo"></div>
		  </el-col>
		  <el-col :xs="8" :sm="6" :md="8" :lg="16" :xl="8">
		  	<div class="nav">
		  		<ul>
		  			<li><a>首页</a></li>
		  			<li><a>热门商品</a></li>
		  			<li><a>新品</a></li>
		  			<li><a>分类</a></li>
		  			<li><a>促销</a></li>
		  		</ul>
		  	</div>
		  </el-col>
		  <el-col :xs="8" :sm="6" :md="8" :lg="4" :xl="8">
		  	<div class="toolsBar"></div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	#header{
		width:100%;
		height:80px;
		line-height:80px;
		background:#FFF;
	}
	.el-row,.el-col{height:100%;}
	.logo{
		height:100%;
		background:url(../../../static/images/logo.png) no-repeat center center;
	}
	.nav{height:100%;}
	.nav ul{
		display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	    justify-content: center;
	    -webkit-justify-content: center;
	}
	.nav ul li{
		float:left;
		margin:0 25px;
		position: relative;
		-moz-perspective: 1000px;
    	perspective: 1000px;
	}
	.nav ul li a{
		position: relative;
	    font-size: 18px;
	    font-weight: 600;
	    color: #555555;
	    text-transform: uppercase;
	    font-family: 'Dosis', sans-serif;
	    letter-spacing: 0.5px;
	    text-decoration: none;
	    display: inline-block;
	    line-height: 42px;
	    -webkit-transform: translate(0, 2px);
	    -ms-transform: translate(0, 2px);
	    -o-transform: translate(0, 2px);
	    transform: translate(0, 2px);
	}
</style>