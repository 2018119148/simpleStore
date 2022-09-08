<template>
  <div class="car2">
    <div class="car2_1">
      <span>确认收货地址</span>
      <button>使用新地址</button>
    </div>
    <div class="car2_2">
      <div class="car2_2_1" v-show="showit1">
        <img
          v-show="isActivate1"
          :src="require('@/assets/images/peraddressbg.png')"
          alt=""
          class="isimg"
        />
        <p>李丹 1586699****<span v-show="isActivate1">默认地址</span></p>
        <p>收货地址：吉林省 长春市 南关区区卫星广场财富领域5A16室</p>
        <div class="car2_2_11">
          <button class="b1" @click="btn1" v-show="!isActivate1">
            设为默认
          </button>
          <button class="b2">编辑</button>
          <button class="b3" @click="btn3">删除</button>
        </div>
      </div>
      <div class="car2_2_1" v-show="showit2">
        <img
          v-show="isActivate2"
          :src="require('@/assets/images/peraddressbg.png')"
          alt=""
          class="isimg"
        />
        <p>李丹 1586699****<span v-show="isActivate2">默认地址</span></p>
        <p>收货地址：吉林省 长春市 南关区区卫星广场财富领域5A16室</p>
        <div class="car2_2_11">
          <button class="b1" @click="btn2" v-show="!isActivate2">
            设为默认
          </button>
          <button class="b2">编辑</button>
          <button class="b3" @click="btn4">删除</button>
        </div>
      </div>
    </div>
    <div class="car2_3">
      <p>选择物流方式</p>
      <div class="car2_3_1">
        <div class="car2_3_11">
          <img :src="require('@/assets/images/advTip.jpg')" alt="" />
          <p>圆通</p>
        </div>
        <div class="car2_3_11">
          <img :src="require('@/assets/images/advTip.jpg')" alt="" />
          <p>申通</p>
        </div>
        <div class="car2_3_11">
          <img :src="require('@/assets/images/advTip.jpg')" alt="" />
          <p>中通</p>
        </div>
        <div class="car2_3_11">
          <img :src="require('@/assets/images/advTip.jpg')" alt="" />
          <p>韵达</p>
        </div>
        <div class="car2_3_11">
          <img :src="require('@/assets/images/advTip.jpg')" alt="" />
          <p>顺丰</p>
        </div>
      </div>
    </div>
    <div class="car2_3">
      <p>选择支付方式</p>
      <div class="car2_3_1">
        <div class="car2_3_11">
          <img :src="require('@/assets/images/wangyin.jpg')" alt="" />
          <p>银联</p>
        </div>
        <div class="car2_3_11">
          <img :src="require('@/assets/images/weizhifu.jpg')" alt="" />
          <p>微信</p>
        </div>
        <div class="car2_3_11">
          <img :src="require('@/assets/images/zhifubao.jpg')" alt="" />
          <p>支付宝</p>
        </div>
      </div>
    </div>
    <div class="car2_5">
      <p>确认订单信息</p>
      <div class="car2_51">
        <p class="p1">商品信息</p>
        <p class="p2">单价</p>
        <p class="p2">数量</p>
        <p class="p2">金额</p>
        <p class="p2">配送方式</p>
      </div>
      <div
        class="car2_52"
        v-for="(item, index) in $store.state.newtable"
        :key="index"
      >
        <img :src="item.img" alt="" />
        <div class="div1">
          <span class="span1">{{ item.text }}</span>
        </div>
        <div class="div2">
          <span class="span2">{{ item.price }}</span>
        </div>
        <div class="div3">
          <span class="span3">{{ item.number }}</span>
        </div>
        <div class="div4">
          <span class="span4">{{ item.number * item.price }}</span>
        </div>
        <p>{{ item.a }}</p>
      </div>
      <div class="car2_53">
        <div class="car2_53_1">
          买家留言:<input
            type="text"
            placeholder="选填 建议填写和卖家达成一致的说明"
          />
          优惠券<select>
            <option>￥3 【无使用门槛】</option>
          </select>
          <div class="car2_53_2">
            红包<select>
              <option>￥50.00元还剩50.00元</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="car2_6">
      <div class="car2_61">
        <div class="car2_6_1">
          合计（含运费）￥<span class="span1">{{ $store.state.sum }}</span>
        </div>
        <div class="car2_6_2">
          <p class="p1">
            实付款：<span class="span3">￥</span
            ><span class="span2">{{ $store.state.sum }}</span>
          </p>
          <p>
            寄送至：<span>吉林省 长春市 南关区区卫星广场财富领域5A16室</span>
          </p>
          <p class="p2">收货人：李丹 1586699****</p>
        </div>
        <button @click="btn5">提交订单</button>
      </div>
    </div>
    <div class="car2_7"></div>
    <div class="car2_8">
      <p>明日科技</p>
      <p>商城首页</p>
      <p>支付宝</p>
      <p>物流</p>
    </div>
    <div class="car2_9">
      <p>
        关于明日 合作伙伴 联系我们 网站地图 @2016-2025 mingrisoft.com 版权所有
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActivate1: false,
      isActivate2: false,
      showit1: true,
      showit2: true,
    };
  },

  components: {
    
  },

  computed: {},

  methods: {
    btn1() {
      this.isActivate1 = !this.isActivate1;
      this.isActivate2 = false;
    },
    btn2() {
      this.isActivate2 = !this.isActivate2;
      this.isActivate1 = false;
    },
    btn3() {
      this.showit1 = false;
    },
    btn4() {
      this.showit2 = false;
    },
    btn5() {
      alert("订单提交成功");
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.car2 {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}
.car2_1 button {
  background-color: red;
  border: none;
  width: 8%;
  height: 30px;
  margin-left: 2%;
  color: white;
}
.car2_1 span {
  font-weight: 550;
}
.car2_2 {
  display: flex;
  margin-top: 20px;
}
.car2_2 .car2_2_1 {
  width: 20%;
  height: 150px;
  margin-right: 10px;
}
.car2_2_1 > p {
  margin-top: 5px;
  margin-left: 8px;
}
.car2_2_1 .car2_2_11 {
  margin-top: 50px;
  display: flex;
  margin-right: 10px;
  float: right;
}
.car2_2_11 button {
  border: none;
  background-color: white;
  /* position: absolute; */
}

.car2_2_11 .b1 {
  width: 80px;
  border-right: 1px solid black;
}
.car2_2_11 .b2 {
  width: 40px;
  border-right: 1px solid black;
}
.car2_2_11 .b3 {
  width: 40px;
}
.car2_3 {
  margin-bottom: 10px;
}
.car2_3 > p {
  font-weight: 550;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
}
.car2_3_1 {
  display: flex;
}
.car2_3_11 {
  margin-right: 10%;
  height: 50px;
  display: flex;
  line-height: 50px;
}
.car2_3_11 > p {
  margin-left: 10px;
}
.car2_3_1 .car2_3_11 img {
  width: 50px;
  height: 50px;
}
.car2_8 {
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid rgb(185, 179, 179);
}
.car2_8 p {
  border-right: 1px solid rgb(185, 179, 179);
  width: 80px;
  height: 30px;
  text-align: center;
}
.car2_5 > p {
  font-weight: 700;
  margin-bottom: 10px;
}
.car2_51 {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgb(194, 188, 188);
  line-height: 50px;
}
.car2_51 .p1 {
  margin-left: 20%;
  margin-right: 20%;
}
.car2_51 .p2 {
  margin-right: 10%;
}
.car2_52 {
  display: flex;
  height: 100px;
  line-height: 100px;
  border: 1px solid rgb(206, 203, 203);
}
.car2_52 img {
  width: 80px;
  height: 80px;
  margin-left: 5%;
  margin-top: 10px;
}
.car2_52 .div1 {
  width: 25%;
  height: 100px;
  text-align: center;
}
.car2_52 .div2 {
  width: 8%;
  height: 100px;
  text-align: center;
  margin-left: 6%;
}
.car2_52 .div3 {
  width: 8%;
  height: 100px;
  text-align: center;
  margin-left: 6%;
}
.car2_52 .div4 {
  width: 12%;
  height: 100px;
  text-align: center;
  margin-left: 3%;
}

.car2_52 .car2_52_2 {
  width: 8%;
  height: 100px;
  text-align: center;
  margin-left: 6%;
}
.car2_52 > p {
  width: 10%;
  height: 100px;
  text-align: center;
  margin-left: 3%;
}
.car2_5 .car2_53 {
  border: 1px solid rgb(219, 214, 214);
  height: 80px;
}
.car2_53_1 {
  margin-top: 10px;
  margin-left: 2%;
}
.car2_53_1 > input {
  margin-right: 62%;
}
.car2_53_2 {
  margin-left: 82.3%;
  margin-top: 10px;
}
.car2_6 {
  height: 250px;
  border-bottom: 1px solid orangered;
}
.car2_61 {
  margin-top: 10px;
  float: right;
}
.car2_6_1 {
  float: right;
}
.car2_6_2 {
  margin-top: 40px;
}
.car2_6_2 .p1 {
  margin-left: 40%;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: end;
}
.car2_6_2 .p2 {
  margin-left: 52%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.car2_6_2 {
  border: 2px solid orangered;
  height: 120px;
}
.car2_61 > button {
  margin-top: 10px;
  float: right;
  border: none;
  width: 100px;
  height: 30px;
  color: white;
  background-color: orangered;
}
.isimg {
  position: absolute;
  z-index: -1;
}
.car2_2_1 span {
  background-color: rgb(202, 194, 194);
  margin-left: 30px;
  color: white;
  font-size: 10px;
}
.car2_6_1 .span1 {
  color: orangered;
}
.car2_6_2 .span2 {
  color: orangered;
  font-weight: 700;
  font-size: 25px;
}
.car2_6_2 .span3 {
  font-weight: 700;
  font-size: 25px;
}
</style>