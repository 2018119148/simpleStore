<template>
  <div>
    <!-- <top></top> -->
    <headnav></headnav>
    <headbar></headbar>
    <center></center>
    
  </div>
</template>

<script>
// 在home.vue导入组件对象

import headnav from '../components/home/headnav.vue'
import headbar from '../components/home/headbar.vue'
import center from '../components/home/center.vue'
// import aa from '../components/home/aa.vue'
export default {
  data () {
   return {
     showimg2:false
   };
  },

  components: {
    // 创建一个组件名为home对应的组件对象也是home
  
     headnav:headnav,
     headbar:headbar,
     center:center,
     
  },

  computed: {},
mounted(){
    this.$store.commit("showimg2",this.showimg2)
  },

  methods: {}
}

</script>
<style scoped>
 
</style>
