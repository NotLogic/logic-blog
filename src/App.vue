<template>
  <div id="app">
    <div class="logic-header">
      <LogicHeader />
    </div>
    <div class="logic-side">
      <div class="my-info">
        <img src="images/avatar.jpg" width="150" alt="">
        <div class="my-name">刘彬彬</div>
        <div class="my-duty">我是一块砖，哪里需要那里添</div>
        <ul class="my-links">
          <li class="link-item">
            <i class="iconfont icon-github"></i>
            <a href="https://github.com/NotLogic" target="_blank">github</a>
          </li>
        </ul>
      </div>
      <form class="fieldsetForm">
        <fieldset>
          <legend>作品</legend>
        </fieldset>
      </form>
      <ul class="project-list" @click="previewProject">
        <li class="project-item" :to='env.swagger'>swagger接口</li>
        <li class="project-item" :to='env.xyz'>xyz</li>
      </ul>
      <div class="copyright">
        <a target="_blank" href="http://www.miitbeian.gov.cn">豫ICP备20006920号-1</a>
        <div>仅供个人学习使用</div>
      </div>
    </div>
    <div class="logic-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LogicHeader from '@/components/header'
import env from '@/config'
export default {
  name: 'app',
  components: {
    LogicHeader
  },
  data () {
    return {
      env
    }
  },
  methods: {
    previewProject(e){
      var path = e.target.getAttribute('to') || '/'
      var one = path.slice(0,1)
      if(one == '/'){
        this.$router.push({path})
      }else{
        window.location.href = path
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .app{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .logic-header{
    height: 60px;
    box-shadow: 0 2px 8px #f0f1f2;
  }
  .logic-side{    
    width: 215px;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 80px;
    border-right: 1px solid #ebedf0;
  }

  .my-info{
    text-align: center;
  }
  .my-name{
    margin: 5px 0;
    font-weight: 700;
    font-size: 1.5em;
  }
  .project-list{

  }
  .project-item{
    cursor: pointer;
    padding: 0 20px;
    line-height: 32px;
  }
  .project-item:hover{
    background-color: #eee;
    color: $main-theme;
  }
  .link-item{
    display: inline-block;
  }
  .link-item:hover{
    padding: 0 3px;
    background-color: rgba(0,0,0,.2);
    border-radius: 5px;
  }
  .link-item a{
    margin-left: 5px;
    color: inherit;
  }

  .copyright{
    position: absolute;
    width: 100%;
    bottom: 10px;
    text-align: center;
  }
  .copyright a{
    color: cornflowerblue;
  }

  .logic-main{
    position: absolute;
    left: 235px;
    top: 80px;
    right: 0;
    bottom: 0;
  }

  .fieldsetForm{
    margin: 10px 0;
  }
  .fieldsetForm fieldset{
    border:none;
    border-top: 1px solid #e2e2e2;
  }
  .fieldsetForm legend{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }
</style>

