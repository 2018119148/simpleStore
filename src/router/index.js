import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import car from '../views/car.vue'
import car2 from '../components/car/car2.vue'
// import App from '@/App.vue'

Vue.use(VueRouter)

const routes = [
  {path:"/",component:home,meta: {requireAuth: true}},
  {path:"/login",component:login},
  {path:"/car",component:car,meta: {requireAuth: true}},
  {path:"/car2",component:car2,meta: {requireAuth: true}},

]

const router = new VueRouter({
  routes
 
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem("token") == 'true') { // 判断本地是否存在token
      next()
    } else {
      // 未登录,跳转到登陆页面
      next({
        path: '/login'
      })
    }
  } else {
    if(sessionStorage.getItem("token") == 'true'){
      next('/');
    }else{
      next();
      // alert("请先登录！！！")
    }
  }
});