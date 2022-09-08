<template>
  <div>
    <router-link class="body1" to="/login">{{$store.state.message}}</router-link>
    &nbsp;&nbsp;&nbsp;<span @click="tuichu">{{$store.state.info}}</span>
    <router-link class="body2" to="/">商城首页</router-link>
    <router-link class="body3" to="/car">购物车</router-link>
    <router-link class="body4" to="/home">收藏夹</router-link>
    <div class="body5">
      <img :src="require('@/assets/images/logo.png')" alt="" v-show="$store.state.showimg">
      <input type="text">
      <button>搜索</button>
    </div>
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

  methods: {
    tuichu(){
      this.$store.commit("log1")
      sessionStorage.setItem("token", 'false');
      this.$router.push("/login");
      alert("退出成功！！！")

    }
  }
}

</script>
<style scoped>
 .body{
   margin: 0 auto;
 }
 div>a{
    color: red;
    text-decoration: none;
 }
 .body1{
   margin-left: 10%;
 }
 .body2{
   margin-left: 50%;
 }
 .body3{
   margin-left: 3%;
 }
 .body4{
   margin-left: 3%;
 }
 .body5{
    margin: 0 auto;
    width: 50%;
    margin-top: 25px;
    display: flex;
    height: 80px;
  }
  .body5 input{
    width: 80%;
    height: 35px;
    border:none;
    border: 1px solid red;
    border-right: none;
    margin-top: 20px;
    outline:none;
    margin-left: 10px;
  }
  .body5 button{
    width: 15%;
    height: 39px;
    background-color: red;
    border: none;
    color: white;
    margin-top: 20px;
  }
  span{
    color: #000;
  }
</style>

