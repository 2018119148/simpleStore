<template>
  <div>
      <!-- <button @click="btn">{{$store.state.count}}</button>
      <button @click="btn1">but1</button>
      <p>{{$store.state.message}}</p> -->
      用户名：<input type="text" v-model="username">

      密码：<input type="text">
      <button @click="login">提交</button>
      <p>{{$store.state.username}}</p>

  </div>
</template>

<script>
export default {
  data () {
   return {
       count:100,
       islogin:true,
    //    message:"aaa"
   };
  },

  components: {},

  computed: {},


  methods: {
    //   btn(){
    //     return this.$store.commit("add",this.count)
    //   },
    //    btn1(){
    //      this.$store.commit({
    //         type:"add1",
    //         count:this.count,
    //         islogin:this.islogin
    // })
    // // this.$store.dispath("bdd")
        
    //   }
    login(){
        this.$store.commit("log",this.username)
    }
  }
}

</script>
<style>
</style>