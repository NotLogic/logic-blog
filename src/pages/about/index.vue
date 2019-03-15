<template>
  <div class="about-me">
    <form class="fieldsetForm">
      <fieldset>
        <legend>博客简介</legend>
      </fieldset>
    </form>
    <div class="content">
      <p>本博客使用的技术为Vue v2.5 + Element</p>
      <p>源码地址为 <a href="https://github.com/NotLogic/logic-blog" target="_blank">github</a>，仅供参考，不作商业用途</p>
    </div>
    <form class="fieldsetForm">
      <fieldset>
        <legend>关于我</legend>
      </fieldset>
    </form>
    <div class="content">
      <ul>
        <li>姓名：刘彬彬</li>
        <li>学历：本科 信息管理与信息系统</li>
        <li>联系方式：<i class="iconfont icon-qq"></i> 1045382156 <div class="divider divider-vertical"></div> <i class="iconfont icon-email"></i> logic1900@163.com</li>
        <li>坐标：深圳市</li>
        <li>
          <div>技能</div>
          <ul>
            <li>HTML、CSS、Javascript：能熟练开发服务W3C标准的页面</li>
            <li>Vue框架：熟练使用</li>
            <li>React框架：入门</li>
            <li>es6：熟练使用</li>
            <li>webpack：入门，可对脚手架进行针对性配置</li>
          </ul>
        </li>
        <li>
          <div>其他</div>
          <ul>
            <li>常用开发工具：vscode、webstorm、git</li>
            <li>熟悉的UI工具：Iview、element-ui、antd</li>
          </ul>
        </li>
        <!-- <li>
          <div>个人</div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-me',
}
</script>

<style scoped>
.divider{
  margin: 0 8px;
  display: inline-block;
  height: .9em;
  width: 1px;
  vertical-align: middle;
  position: relative;
  top: -.06em;
}
.divider-vertical{
  font-size: 14px;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0,0,0,.65);
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  background: #e8e8e8;
}

.fieldsetForm{
	margin: 10px 0;
}
.fieldsetForm fieldset{
	border:none;
	border-top: 1px solid #e2e2e2;
}
.fieldsetForm legend{
	margin-left: 20px;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 16px;
}

.content{
  font-size: 14px;
}
.content ul{
  padding-left: 20px;
}
.content ul li{
  list-style: circle;
}
</style>
