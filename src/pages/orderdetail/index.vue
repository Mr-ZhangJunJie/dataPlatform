<template>
  <div class="container">
    <div class="section1">
      <Title class="pool">
        点位订单
      </Title>
    </div>
    <div class="section2">
      <Title>
        提交时间：<span class="time">2018-06-28</span>
      </Title>
    </div>
    <div class="section3">
      <UserMessage></UserMessage>
    </div>
    <div class="section4 clearFix">
      <Type></Type>
    </div>
    <div class="section5">
      <TvMessage></TvMessage>
      <TvMessage></TvMessage>
      <TvMessage></TvMessage>
    </div>
    <div class="section6">
      <Navagator></Navagator>
    </div>
  </div>
</template>

<script>
import Title from '@/components/title.vue'
import UserMessage from '@/components/userMessage.vue'
import Type from '@/components/type.vue'
import TvMessage from '@/components/tvMessage.vue'
import Navagator from '@/components/navagator.vue'
export default {
  name: 'OrderDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Title,
    UserMessage,
    Type,
    TvMessage,
    Navagator
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
  .time{
    color:#f00;
  }
}
.section3{
  padding:10px;background:#fff;margin-top:10px;border-radius: 5px;
}
.section4{
  margin-top:10px;
}
.section5{
  ul{
    padding:0;
  }
}
</style>
