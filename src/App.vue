<template>
  <div class="body">
    <top></top>
    <router-view></router-view>
   <!-- <p>{{$store.state.count}}</p>
   <p>{{$store.getter.countX}}</p> -->
  </div>
</template>
<script>
import top from './components/home/top.vue'
import vue from './views/vue.vue'
export default {
  data () {
   return {
   };
  },
  components: {
    // 创建一个组件名为home对应的组件对象也是home
      top:top,
      vue:vue
  },
  computed: {},
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  },
  methods: {}
}
</script>
<style scoped>

</style>