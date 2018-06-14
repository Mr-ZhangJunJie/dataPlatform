<template>
  <div class="container" :style="{height:h}">
    <div class="section1">
      <Title class="pool">
        我的点位池
      </Title>
    </div>
    <ul class="section2">
      <li class="one">
        订单号：001
      </li>
      <li class="two">
        <p>点位数量：<span>16</span></p>
        <p>订单总时长：<span>00:16:24</span></p>
        <p>提交时间：<span>2018-06-14</span></p>
        <p><router-link to="/orderdetail">查看订单</router-link></p>
      </li>
    </ul>
  </div>
</template>

<script>
import Title from '@/components/title.vue'
export default {
  name: 'OrderList',
  data () {
    return {
      h: window.innerHeight + 'px'
    }
  },
  components: {
    Title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pool{
  height:64px;line-height: 64px;text-align: center;background: #199ED8;color:#fff;
  margin-bottom:10px;
}
.section2{
  background: #fff;text-align: left;padding:10px 15px;border-radius: 5px;
  li{
    height:40px;line-height: 40px;font-size: 20px;
  }
  .two{
    display: flex;
    p{
      flex:1;
    }
    p:last-child{
      text-align: right;
    }
   }

}
</style>
