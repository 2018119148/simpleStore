<template>
  <div class="bar">
    <div class="head_bar">
      <!-- 列表 -->
        <ul class="head_bar1_ul">
          <li
            @mouseover="mouseOver(item.bigtype, index)"
            @mouseleave="mouseLeave"
            v-for="(item, index) in info"
            :key="index"
          >
            <div class="head_bar1_ul_list1">
              <img :src="require('@/assets' + item.url)" alt="" />
              <span>{{ item.bigtype }}</span>
              <p>></p>
            </div>
          </li>
        </ul>
        <!-- 分类详情 -->
        <div
          :class="active"
           class="head_bar_active"
          v-show="showit"
          @mouseover="Over"
          @mouseleave="Leave"
        >
          <div class="name1" v-for="(c, d) in text1" :key="d">
           <div class="name2">{{ c.name }}</div> 
            <div class="goods" v-for="(a, b) in c.goods" :key="b">{{ a }}</div>
          </div>
        </div>
       <!-- 轮播图 -->
        <div class="banner">
           <div class="banner_img" v-for="(item1,index1) in imgs" :key="index1" >
             <img :src="require('@/assets' + item1[currentIndex])"  class="img1" @mouseenter="Over2" @mouseleave="Leave2" alt="" />
           </div>
           <div class="banner_list">
             <!-- @click="gotoPage(prevIndex)" -->
             <div class="left" @click="gotoPage(prevIndex)">&lt;</div>
             <ul>
             <li v-for="(item1,index2) in imgs1" :key="index2" @click="gotoPage(index2)" :class="{'current':currentIndex == index2}"></li>
             </ul>
             <div class="right" @click="gotoPage(nextIndex)">&gt;</div>
          </div>
        </div>
        <!-- ！！！！！！！！！！！！ -->
        <!-- 右侧 -->
        <div class="head_bar_right">
           <div class="top">商城头条</div>
           <div class="list1">
             <div class="touxiang">
               <img :src="require('@/assets/images/getAvatar.do.jpg')" alt="" />
             </div>
             <div class="list1_1">
               <div class="list1_11">hi,&nbsp;&nbsp;小叮当</div>
                <div class="list1_12"><a href="">点击更多优惠活动</a></div>
             </div>
           </div>
           <div class="login" v-show="showtime">
               <button class="btn"><router-link class="body1" to="/login">{{$store.state.message1}}</router-link></button>
               <button class="btn"><router-link class="body1" to="/login">注册</router-link></button>
           </div>
           <div class="text">
               <li>[特惠]商城爆破1分秒杀</li>
               <li>[公告]商城与长春市签署战略合</li>
               <li>[特惠]洋河年末大促，低至两件</li>
               <li>[公告]华北、华中部分地区配送</li>
               <li>[特惠]家电狂欢千亿礼券 买1送1</li>
           </div>
            <img :src="require('@/assets/images/advTip.jpg')" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showit: false,
      showtime:true,
      active: "",
      info: "",
      text1: "",
      imgs:"",
      imgs1:"",
      currentIndex: 0,   //默认显示图片
      timer: null,    //定时器
      messages:""
    };
  },

  components: {},
  computed: {
  // 上一张
  prevIndex() {
    if(this.currentIndex == 0) {
      return this.imgs1.length - 1;
    }else{
      return this.currentIndex - 1;
    }
  },
  //下一张
  nextIndex() {
    if(this.currentIndex == this.imgs1.length-1) {
      return 0;
    }else {
      return this.currentIndex + 1;
    }
  },
  
 
  
},
  methods: {
    mouseOver(bigtype, index) {
      this.active = bigtype;
      // console.log(index);
      if (this.active == this.info[index].bigtype) {
        this.showit = true;
        this.text1 = this.info[index].smalltype;
      }
    },
    mouseLeave() {
      this.showit = false;
    },
    Over() {
      this.showit = true;
    },
    Leave() {
      this.showit = false;
    },
    // 轮播图
    gotoPage(index1) {
        this.currentIndex = index1;
        //  console.log(index1);
    },
    Over2(){
       console.log(111);
       clearInterval(this.timer);
      // clearInterval(this.timer)
    },
   Leave2(){
     console.log(222);
     this.timer = setInterval(() => {
       this.gotoPage(this.nextIndex);
    }, 1000)
  },
   
    
},
  
  created() {
    this.$axios({
      method: "get",
      url: "/data.json",
    }).then((data) => {
      this.info = data.data.data;
      console.log(data.data.data);
      // console.log(this.info);
    });
    this.$axios({
      method:"get",
      url:"/banner.json"
    }).then((res)=>{
        this.imgs=res.data;
        this.imgs1=res.data.img
        
        // console.log(res.data.img);
    });
    this.timer = setInterval(() => {
       this.gotoPage(this.nextIndex);
    }, 1000)
   
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.bar {
  width: 80%;
  height: 400px;
  margin: 0 auto;
}
.head_bar {
  width: 100%;
  height: 400px;
  display: flex;
}
.head_bar1_ul {
  width: 15%;
}
.head_bar_active {
  width: 70%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  position:absolute;
  z-index: 2;
	align-content: flex-start;
  background-color: blanchedalmond;
}
.head_bar1_ul_list1 {
  height: 40px;
  width: 100%;
  display: flex;
  background-color: black;
}
.head_bar1_ul li {
  height: 40px;
  list-style: none;
  line-height: 40px;
  color: white;
  position: relative;
}
.head_bar1_ul_list1:hover {
  color: red;
  background-color: white;
}
.head_bar1_ul_list1 img{
  width: 40px;
  height: 40px;
  margin-left: 5%;
}
span{
   margin-left: 10%;
}
p{
  position:absolute;
  right: 6%;
}
.head_bar_active{
  position:absolute;
  margin-left: 10%;
  width: 50%;
}
.head_bar_active .name1{
  width: 50%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
	align-content: flex-start;
  
}
.head_bar_active .name1 .name2{
   color:red;
   width: 100%;
   margin-left: 10px;

}
.head_bar_active .name1 .goods {
  border: 1px solid rgb(105, 96, 96);
  padding: 3px 5px 3px 5px;
  color: rgb(104, 92, 92);
  margin-left: 10px;
  margin-top: 10px;
}
.banner{
  margin-left: 2%;
  width: 60%;
  height: 400px;
  position: relative;
  /* z-index: -1; */
}
.head_bar .banner .banner_img{
  width: 100%;
  height: 400px;
  position:absolute;
}
.head_bar .banner .banner_img img{
  width: 100%;
  height: 400px;
}
.banner_list li{
  list-style: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgb(165, 158, 159);
  margin-left: 10px;
  margin-top: 3px;
  float: left;
}
.banner_list{
  position:absolute;
  display: flex;
  bottom: 6%;
  left: 40%;
  
}
.right, .left{
  font-size: 20px;
  width: 30px;
  height: 18px;
  background-color: rgb(148, 140, 140);
  line-height: 18px;
  text-align: center;
  border-radius: 20%;
}
.right{
  margin-left: 10px;
}
.left:active{
  background-color: red;
}
.right:active{
  background-color: red;
}
.banner_list li :hover{
   color: blue;
}
.banner_list .current{
  background-color:red;
}
.head_bar_right{
  width: 22%;
  height: 400px;
  margin-left: 2%;
  /* background-color: blue; */
}
.head_bar_right .top{
   color:red;
   font-weight: 700;
   font-size: 18px;
   border-bottom: 1px solid black;
}
.head_bar_right .list1{
  display: flex;
}
.head_bar_right .touxiang img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 0;
  /* background-color: brown; */
}
.head_bar_right .list1_1{
    margin-top: 5px;
    margin-left: 8%;
}
.head_bar_right .list1_12{
    font-size: 12px;
    margin-top: 10px;
   
}
.head_bar_right .list1_12 a{
  text-decoration: none;
   color: red;
}
.head_bar_right  .login{
   width: 95%;
   height: 30px;
   margin-top: 5px;
   background-color:rgba(255,255,255, 0);
}
.head_bar_right .login .btn{
  width: 45%;
  height: 30px;
  margin-right: 5%;
  color:white;
  background-color: #FF7F50;
  border: none;
}
.head_bar_right .login .btn a{
  text-decoration: none;
  color: #000;
  text-align: center;
}
.head_bar_right .text{
     width: 95%;
     height: 155px;
     margin-top: 20px;
    
} 
.text>li{
  list-style: none;
  margin-top: 5px;
  margin-left: 5px;
}
.head_bar_right img{
  margin-top: 10px;
}
</style>