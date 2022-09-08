<template>
  <div>
    <div class="login">
      <div class="login1">
        <img :src="require('@/assets/big.png')" alt="" />
      </div>
      <div class="login2">
        <div class="login2_1">登录</div>
        <div class="login2_2">
          <div class="login2_2_1">
            <img :src="require('@/assets/用户.png')" alt="" />
            <input
              type="text"
              placeholder="邮箱、手机、用户名"
              v-model="username"
            />
          </div>
          <div class="login2_2_1">
            <img :src="require('@/assets/锁定.png')" alt="" />
            <input type="text" placeholder="请输入密码" v-model="password" />
          </div>
        </div>
        <div class="login2_3">
          <input type="checkbox" />记住密码
          <span>注册</span>
        </div>
        <div class="login2_4"><button @click="login">登录</button></div>
        <div class="login2_5">合作账号</div>
        <div class="login2_6">
          <div class="login2_6_1">
            <img :src="require('@/assets/qq.png')" alt="" />qq登录
          </div>
          <div class="login2_6_1">
            <img :src="require('@/assets/新浪微博.png')" alt="" />微博登录
          </div>
          <div class="login2_6_1">
            <img :src="require('@/assets/微信.png')" alt="" />微信登录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showimg3: false,
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$store.commit("showimg3", this.showimg3);
  },
  methods: {
    login() {
      this.$axios.get("/login.json").then((res1) => {
        console.log(res1.data.data);
        if (
          res1.data.data.username == this.username &&
          res1.data.data.password == this.password
        ) {
          this.$store.commit("log", this.username);
          sessionStorage.setItem("token", "true");
          this.$router.push({ path: "/" });
          alert("登录成功！！！");
        } else {
          alert("登录失败");
        }
      });
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.login {
  background-color: #ffa07a;
  width: 100%;
  height: 500px;
  margin-top: 50px;
  display: flex;
}
.login .login1 {
  margin-left: 15%;
}
.login .login2 {
  width: 25%;
  height: 450px;
  background-color: #e9e9e9;
  margin-top: 25px;
}
.login .login2 .login2_1 {
  text-align: center;
  margin-top: 10px;
  font-weight: 600;
  margin-bottom: 40px;
}
.login2_2 {
  width: 95%;
  margin: 0 auto;
}
.login .login2 .login2_2_1 {
  background-color: white;
  margin-bottom: 2px;
  height: 40px;
  line-height: 40px;
}
.login .login2 .login2_2_1 img {
  width: 20px;
  height: 20px;
  margin-left: 3%;
}
.login .login2 .login2_2_1 input {
  border: none;
  margin-left: 3%;
  color: rgb(65, 62, 62);
  outline: none;
}
.login2_3 {
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
}
.login2_3 input {
  margin-left: 2.5%;
  margin-top: 5px;
}
.login2_3 span {
  margin-left: 65%;
}
.login2_4 {
  margin: 0 auto;
  width: 95%;
}
.login2_4 button {
  width: 100%;
  height: 50px;
  border: none;
  background-color: #1296db;
  font-size: 18px;
  color: white;
}
.login2_5 {
  margin-left: 2.5%;
  margin-top: 15px;
}
.login2_6 {
  display: flex;
  margin-top: 15px;
}
.login2_6_1 {
  margin-left: 8%;
}
</style>