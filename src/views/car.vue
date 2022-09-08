<template>
  <div>
      <car1></car1>
  </div>
</template>

<script>
import car1 from '../components/car/car1.vue'
export default {
  data () {
   return {
     showimg:true
   };
  },

  components: {
      car1:car1
  },

  computed: {},


  methods: {
  },
  mounted(){
    this.$store.commit("showimg1",this.showimg)
  }
}

</script>
<style>
</style>