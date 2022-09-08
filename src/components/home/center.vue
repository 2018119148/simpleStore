<template>
  <div class="center">
      <div class="center1">
        
         
         <img :src="require('@/assets/images/clockbg.png')" alt="" class="img1">
         <img  :src="require('@/assets/images/2016.png')" alt="" class="img2">
        <p>今日推荐</p>
      </div>
      <div class="center2">
           <div class="text1">
            <div class="div1">真的有鱼</div>
            <div class="div2">开年福利篇</div>
            </div>  
          <div class="center_img">
          <img :src="require('@/assets/images/tj.png')" alt=""></div>
      </div>
      <div class="center2">
          <div class="text1">
              <div class="div1">囤货过节</div>
              <div class="div2">让爱早回家</div>
          </div>
           <div class="center_img">
         <img :src="require('@/assets/images/tj1.png')" alt=""></div>
      </div>
      <div class="center2">
          <div class="text1">
              <div class="div1">浪漫情人节</div>
              <div class="div2">甜甜蜜蜜</div>
          </div>
           <div class="center_img">
         <img :src="require('@/assets/images/tj2.png')" alt=""></div>
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


  methods: {}
}

</script>
<style scoped>
.center{
    width: 80%;
    height: 150px;
    margin: 0 auto;
    margin-top: 10px;
    /* background-color: orchid; */
    display: flex;
    position: relative;
}
.center .center1{
    width: 22%;
    height: 150px;
    
}
.center .center1 .img1{
    width: 20%;
    height: 150px;
    position: absolute;
}
.img2{
    width: 13%;
    margin-left:80px;
    height: 150px;
    position: absolute;
}
.center1 p{
    position: absolute;
    font-size: 30px;
    width: 80px;
    margin-left: 20px;
    color:white;
}
.center .center2{
    width: 28%;
    height: 150px;
    display: flex;
    border-right: 1px solid black;
    margin-right: 5px;
}
.center .text1{
     margin-top: 20px;
     width: 28%;
     height: 150px;
     font-weight: 500;
}
.center .text1 .div2{
     font-weight: 200;
}

.center .center2 .center_img{
    width: 70%;
    height: 150px;
    perspective: 1000px;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    transition: 3s linear;
}
.center .center2 .center_img img:hover{
    transform: translateX(-120px);
}
.center .center2 .center_img img{
    width: 100px;
    height: 100px;
    top:50%;
    margin-top: 50px;
    right: 0;
    margin-left: 120px;

}
</style>