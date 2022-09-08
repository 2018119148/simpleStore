import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state里存放需要的共享状态,全部组件都可以使用的data
    state:{
      count:0,    
      message:"亲，请登录 注册",
      info:"",
      message1:"登录",
      showname:false,
      username:localStorage.getItem("username"),
      showimg:false,
      show1:true,
      show2:true,
      newtable:"",
      sum:"",
     },
    // getter有点像组件里的计算属性，公用的计算属性
    getter:{
       countX(state){
           return state.count*state.count;
       },
    },
    // 类似于methods，我们只推荐用mutations去修改state里的数据
    //  在mutations里定义公用方法
    // 在组件里通过this.$store.commit提交
    // payload是传过来的参数
    // 在另一个.vue文件里定义一个监听事件，如@click=“btn”，btn（）{return this.$store.commit（“add”,this.count）}
    mutations:{
    //    add(state,payload){
    //        state.count=state.count+payload
    //    },
    //    add1(state,payload){
    //     state.count=state.count+payload.count
    //     if(payload.islogin){
    //          state.message="已登录"
    //     }
    //    },
    //    bdd(state){
    //        state.message="异步执行已完成"
    //    },
       log(state,payload){
           state.username=payload
        //    以kv对的形式保存在浏览器
           localStorage.setItem("username",payload)
           state.message=state.username+" "+"已登录"
           state.info="退出登录"
           state.message1="已登录"
          
       },
       log1(state){
          localStorage.removeItem("state.username")
          state.username=""
          state.message="亲，请登录 注册"
          state.info=""
          state.message1="登录"
       },
       gotobill(state,payload){
         state.sum=payload.sum
         if(state.sum>=53){
            state.sum=(payload.sum-53).toFixed(2)
         }
       
         state.newtable=payload.newtable
        //  console.log(state.sum)
       },
       
       showimg1(state,payload){
          state.showimg=payload
       },
       showimg2(state,payload){
         state.showimg=payload
      },
      showimg3(state,payload){
         state.showimg=payload
      },
      





    },


    actions:{
        aadd(context){
            setTimeout(() => {
                context.commit('bdd')
              }, 1000)
        }
    }
})