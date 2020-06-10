<template>
    <div>
      <mt-swipe :auto="4000"  >
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">

              <img :src="item" alt="shibai">
            </mt-swipe-item>
            
    </mt-swipe>
<!-- 九宫格该六宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频社区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 
      <h3>HomeContainer</h3>
    </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法
      this.$http.get("list").then(result => {

        console.log(result);
        // if (result.status==200) {
        //   // 成功了
        //   this.lunbotuList = result.body;
        
        // } else {
        //   // 失败的
        //   Toast("加载轮播图失败。。。");
        // }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
      &:nth-child(1){
        background-color: red;
      }
      &:nth-child(2){
        background-color: green;
      }
      &:nth-child(3){
        background-color:cyan;
      }
  }

 
}
  .mui-grid-view.mui-grid-9{
    margin:0px;
    padding:0px;
    background-color:white;
    border: none;
    img{
      width: 60px;
      height: 60px;
    }
  }
  mui-grid-view.mui-grid-9 .mui-table-view-cell  {
    border:0;
    
  }
  .mui-media-body{
    font-size: 13px;
  }
  .body11{
    background-color: #fff;
  }
</style>