<template>
  <div class="clearfix">
    <div class="header-logo">
      <img src="images/avatar.jpg" width="16" alt="">
      <!-- <i class="iconfont icon-data"></i> -->
      <span class="logo-text">Logic的个人笔记</span>
    </div>
    <!-- <div class="search">
      搜索
    </div> -->
    <div class="nav fl">
      <ul class="clearfix">
        <li class="btn" @click="goPage('/')" :class="{'btn-active': currentRouterName == 'index'}">首页</li>
        <li class="btn" @click="goPage('/about')" :class="{'btn-active': currentRouterName == 'about'}">关于</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'logic-header',
  data(){
    return {

    }
  },
  mounted(){
    
  },
  computed: {
    currentRouterName(){
      return this.$route.name
    }
  },
  methods: {
    goPage(path){
      this.$router.push({path})
    }
  }
}
</script>

<style lang='scss' scoped>
.header-logo{
  float: left;
  width: 215px;  
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 30px;
  line-height: 30px;
  border-right: 1px solid #ebedf0;
}
.logo-text{
  font-size: 18px;
  margin-left: 10px;
}
.nav{
  margin-left: 20px;
}
.btn{
  cursor: pointer;
  float: left;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  border-top: 2px solid #fff;
}
.btn:hover,
.btn-active{
  border-color: $main-theme;
  color: $main-theme;
}
</style>
