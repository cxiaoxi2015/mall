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
            </div>
            <div class="login" v-show="!isLogin">
              <router-link to="/Login">登录/注册</router-link>
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
    overflow:hidden;
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
  .toolsBar{
    height:100%;
    position:relative;
  }
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
    overflow:hidden;
    height:35px;
    line-height:30px;
    display:flex;
    justify-content: center;
    align-items: flex-end;
    font-family: 'Dosis', sans-serif;
    letter-spacing: 0.5px;
    font-weight:600;
    transform: translate(0, 3px);
  }
  .login a:after,
  .isLogin a:after{
    width:0;
    height:4px;
    background:#D2A637;
    content:'';
    display: block;
    margin:0 auto;
  }
  .login:hover a:after,
  .isLogin:hover a:after{
    width:100%;
    transition:.5s;
  }
  .login:hover{
    cursor:pointer;
  }
  .login-group{
    width:200px;
    height:80px;
    line-height:80px;
    float:right;
    margin-right:95px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
