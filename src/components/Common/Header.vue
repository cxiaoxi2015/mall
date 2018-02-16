<template>
	<div id="header">
		<el-row :gutter="10">
		  <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="8">
		  	<div class="logo"></div>
		  </el-col>
		  <el-col :xs="8" :sm="6" :md="8" :lg="12" :xl="8">
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
		  <el-col :xs="8" :sm="6" :md="8" :lg="8" :xl="8">
		  	<div class="toolsBar">
          <ul class="icon-bar">
            <li><a class="search"></a></li>
            <li><a class="collection"></a></li>
            <li>
              <el-badge :value="1" class="item shoppingCart-badge">
                <a class="shoppingCart"></a>
              </el-badge>
            </li>
          </ul>
          <div class="login-group">
            <div class="isLogin" v-show="isLogin">
              <a>欢迎您:Admin</a>
              <span class="mall-line"></span>
            </div>
            <div class="login" v-show="!isLogin">
              <a>登录/注册</a>
              <span class="mall-line"></span>
            </div>
          </div>
        </div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
  export default {
    data(){
      return {
        isLogin:false
      }
    }
  }
</script>

<style>
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
	.nav ul li{
		float:left;
		margin:0 15px;
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
  .toolsBar{position:relative;}
  .icon-bar li{
    float:left;
    line-height:80px;
    margin:0 15px;
  }
  .icon-bar li a{
    display:inline-block;
    width:20px;
    height:20px;
    position:relative;
    top:5px;
    cursor:pointer;
  }
  .search{
    background-image: url("../../../static/images/icon/search.png");
  }
  .search:hover{
    background-image: url("../../../static/images/icon/search_hover.png");
  }
  .collection{
    background-image: url("../../../static/images/icon/collection.png");
  }
  .collection:hover{
    background-image: url("../../../static/images/icon/collection_hover.png");
  }
  .shoppingCart{
    top:3px;
    background-image: url("../../../static/images/icon/shoppingCart.png");
  }
  .shoppingCart:hover{
    background-image: url("../../../static/images/icon/shoppingCart_hover.png");
  }
  .shoppingCart-badge .el-badge__content.is-fixed{
    top:48px;
  }
  .shoppingCart-badge .el-badge__content{
    cursor:pointer;
    background-color:#D7B251;
  }
  .login,
  .isLogin{
    margin-left:30px;
    width:100px;
    text-align:center;
    position:relative;
    overflow:hidden;
  }
  .mall-line{
    position:absolute;
    left:10%;
    bottom:15px;
    width:80%;
    height:3px;
    background-color:#D7B251;
    display:none;
  }
  .login:hover{
    cursor:pointer;
  }
  .login:hover .mall-line{
    display:inline-block;
    transition:all 0.5s;
  }
  .login-group{
    width:200px;
    height:80px;
    line-height:80px;
    float:right;
    margin-right:95px;
  }
  .login-group a{
    position:relative;
    top:3px;
  }
</style>
