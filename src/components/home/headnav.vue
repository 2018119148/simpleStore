<template>
  <div class="nav">
      <div class="head_nav">
      <div class="classify">全部分类</div>
      <ul class="head_nav_ul">
        <li><b><a href="">首页</a></b></li>
        <li><b><a href="">闪购</a></b></li>
        <li><b><a href="">生鲜</a></b></li>
        <li><b><a href="">团购</a></b></li>
        <li><b><a href="">全球购</a></b></li>
      </ul>
    </div>
    <div class="hr"></div>
  </div>
</template>
<script>
export default {
  data () {
   return {
   };
  },

  components: {},

  computed: {},
 methods:{

 }

 
}


</script>
<style scoped>
 *{
    padding: 0;
    margin: 0;
  }
  .nav{
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .head_nav{
    height: 50px;
    
  }

  .classify{
    float: left;
    margin-right: 10px;
    width: 15%;
    height: 50px;
    background-color: red;
    line-height: 50px;
    text-align: center;
    color:white;
  }
  .head_nav_ul li{
    float: left;
    list-style: none;
    margin-right: 10px;
    margin-left: 10px;
    height: 50px;
    line-height: 50px;
    /* border-right: 1px solid gray; */
    text-align: center;
    width: 10%;
  }
  .head_nav_ul a{
    text-decoration: none;
    color: #000;
  }
  .hr{
     border-bottom: 1px solid red;
  }
  
</style>