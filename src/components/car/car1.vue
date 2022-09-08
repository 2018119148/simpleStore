<template>
  <div class="car1">
    <div class="car1_1">
      <p class="p1">选择</p>
      <p class="p2">商品信息</p>
      <p class="p3">单价</p>
      <p class="p3">数量</p>
      <p class="p3">金额</p>
      <p class="p3">操作</p>
    </div>
    <!-- 商品详情 -->
    <div class="car1_2">
      <li
        class="car1_21"
        v-show="$store.state.show1"
        v-for="(item, index) in list"
        :key="index"
      >
        <input
          type="checkbox"
          class="checkbox2"
          v-bind:checked="item.isSelect"
          @click="item.isSelect = !item.isSelect"
        />
        <img :src="item.img" alt="" />
        <div class="div1">
          <span class="span1">{{ item.text }}</span>
        </div>
        <div class="div2">
          <span class="span2">{{ item.price.toFixed(2) }}</span>
        </div>
        <div class="car1_2_1">
          <button @click="add1(index)">+</button>
          <span class="span3">{{ item.number }}</span>
          <button @click="reduce1(index)">-</button>
        </div>
        <span class="span4">{{ (item.number * item.price).toFixed(2) }}</span>
        <button class="button1" @click="dell(index)">删除</button>
      </li>
    </div>
    <div class="car1_3">
      <input
        type="checkbox"
        class="checkbox1"
        @click="selectProduct(isSelectAll)"
        v-bind:checked="isSelectAll"
      /><span>全选</span>
      <p @click="deleted3">清空购物车</p>
      <div class="div_1">
        已选商品<span>&nbsp;{{ getTotal.totalNum }}&nbsp;</span>件 合计<span
          >&nbsp;&nbsp;￥{{ getTotal.totalPrice.toFixed(2) }}</span
        >
      </div>
      <router-link to="/car2" class="button1" @click.native="gotoBill"
        >去结算</router-link
      >
    </div>
    <div class="car1_4"></div>
    <div class="car1_5">
      <p>明日科技</p>
      <p>商城首页</p>
      <p>支付宝</p>
      <p>物流</p>
    </div>
    <div class="car1_6">
      <p>
        关于明日 合作伙伴 联系我们 网站地图 @2016-2025 mingrisoft.com 版权所有
      </p>
    </div>
  </div>
</template>
<script>
import oppo from "../../assets/images/phone1.jpg";
import vive from "../../assets/images/phone2.jpg";
export default {
  data() {
    return {
      newtable: [],
      sum: "",
      b: "",
      list: [
        {
          img: oppo,
          text: "OPPO R15智能手机全网通",
          number: 1,
          price: 599.0,
          a: "快递配送",
          isSelect: false,
        },
        {
          img: vive,
          text: "VIVO X27 8GB+256GB 大内存",
          number: 1,
          price: 699.0,
          a: "快递配送",
          isSelect: false,
        },
      ],
    };
  },
  components: {},
  computed: {
    isSelectAll() {
      //如果list中每一条数据的isSelect都为true，返回true，否则返回false;
      return this.list.every(function (val) {
        return val.isSelect;
      });
    },
    // 结算
    getTotal: function () {
      var prolist = this.list.filter(function (val) {
          return val.isSelect;
        }),
      totalPri = 0;
      for (var i = 0, len = prolist.length; i < len; i++) {
        totalPri += prolist[i].price * prolist[i].number;
      }
      this.sum = totalPri;
      return { totalNum: prolist.length, totalPrice: totalPri };
    },
  },
  methods: {
    add1(index) {
      //增加
      this.list[index].number++;
    },
    reduce1(index) {
      //减少
      this.list[index].number--;
    },
    dell(index) {
      //删除
      this.list.splice(index, 1);
    },
    deleted3() {
      //清空购物车
      this.list = this.list.filter(function (item) {
        return !item.isSelect;
      });
    },
    selectProduct: function (_isSelect) {
      //全选
      //遍历productList，全部取反
      for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].isSelect = !_isSelect;
      }
      var b = event.target.checked;
      console.log(b);
      if (b) {
        console.log(this.newtable);
      } else {
        this.newtable = [];
        this.sum = 0;
        // delete this.newtable[index]
        console.log(this.newtable);
      }
    },
    gotoBill() {
      //去结算
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].isSelect == true) {
          var arr = {
            img: this.list[i].img,
            text: this.list[i].text,
            number: this.list[i].number,
            price: this.list[i].price,
            a: this.list[i].a,
          };
          this.newtable.push(arr);
          // this.newtable.splice(index,0,arr);
        }
      }
      console.log(this.newtable);
      // console.log(this.b);
      this.$store.commit("gotobill", {
        // newtable: this.deteleObject,
        newtable: this.newtable,
        sum: this.sum,
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
.car1 {
  width: 80%;
  margin: 0 auto;
  margin-top: 15px;
}
.car1_1 {
  display: flex;
  border: 1px solid black;
  height: 50px;
  line-height: 50px;
}
.car1_1 .p1 {
  margin-left: 3%;
  margin-right: 10%;
}
.car1_1 .p2 {
  margin-left: 10%;
  margin-right: 20%;
}
.car1_1 .p3 {
  margin-left: 8%;
}
.car1_2 {
  margin-top: 10px;
  width: 100%;
}
.car1_21 {
  display: flex;
  border: 1px solid rgb(206, 197, 197);
  height: 100px;
  line-height: 100px;
}
.car1_2 img {
  width: 80px;
  height: 80px;
  margin-top: 10px;
}
.car1_2 input {
  margin-top: 40px;
  margin-left: 3%;
  margin-right: 3%;
}
.div1 {
  width: 20%;
  height: 100px;
  margin-left: 5%;
}
.div2 {
  width: 5%;
  height: 100px;
  margin-left: 20%;
}
.car1_2_1 {
  margin-left: 7%;
}
.car1_2_1 button {
  border: none;
  background-color: red;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
}
.car1_2 .span4 {
  margin-left: 6%;
}
.car1_2 .button1 {
  margin-left: 7%;
  border: none;
  background-color: white;
}
.car1_3 {
  display: flex;
  margin-top: 20px;
  background-color: rgb(211, 201, 201);
  height: 50px;
  line-height: 50px;
}
.car1_3 input {
  margin-top: 20px;
  margin-left: 1%;
}
.car1_3 span {
  width: 4%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.car1_3 p {
  margin-left: 1%;
  font-weight: 600;
  width: 10%;
}
.car1_3 .div_1 {
  width: 35%;
  margin-left: 50%;
  float: right;
}
.car1_3 .button1 {
  background-color: red;
  width: 9%;
  text-align: center;
}
.div_1 span {
  color: yellow;
}
.car1_4 {
  border-bottom: 2px solid orange;
  margin-top: 30px;
}
.car1_5 {
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid rgb(185, 179, 179);
}
.car1_5 p {
  border-right: 1px solid rgb(185, 179, 179);
  width: 80px;
  height: 30px;
  text-align: center;
}
a {
  color: white;
  text-decoration: none;
}
</style>