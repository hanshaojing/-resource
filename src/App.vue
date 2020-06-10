<template>
  <div class="app-container" >
    <mt-header fixed title="黑马程序员.vue项目1111111111111111111111111111111111111111111111111111111111111">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
  
</mt-header> 
    
    <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
	<transition mode="out-in">
		<router-view></router-view>
	</transition>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">0</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon glyphicon glyphicon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			
		</nav>
	 
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>
  .app-container{
    padding-top: 40px;
	overflow: hidden;
  }
  h1{
    margin:0px;
  }
  .v-enter{
	  opacity: 0.8;
	  transform:translateX(100%);
	 
  }
  .v-leave-to{
	  opacity: 0.8;
	  transform:translateX(-100%);
	  position: relative;
  }
  .v-enter-active,
  .v-leave-active{
	  transition: all 0.5s ease;
	  position: relative;
  }
</style>
