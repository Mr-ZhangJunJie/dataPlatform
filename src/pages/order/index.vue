<template>
  <div class="container">
    <div class="section1">
      <Title class="pool">
        我的点位池
      </Title>
    </div>
    <div class="section2">
      <UserMessage>
        <template slot="userName">
           <input type="text" placeholder="请输入姓名" key="1">
        </template>
        <template slot="userPhone">
          <input type="text" placeholder="请输入联系方式">
        </template>
      </UserMessage>
    </div>
    <div class="section3 clearFix">
      <Type></Type>
    </div>
    <div class="section4">
      <tvMessage></tvMessage>
      <tvMessage></tvMessage>
      <tvMessage></tvMessage>
      <tvMessage></tvMessage>
      <tvMessage></tvMessage>
    </div>
    <div class="section5">
      <Navagator>
        <template slot="inputGroup">
          <router-link to="/submitSuccess">提交订单</router-link>
        </template>
      </Navagator>
    </div>
  </div>
</template>

<script>
import Title from '@/components/title.vue'
import Type from '@/components/type.vue'
import TvMessage from '@/components/tvMessage.vue'
import Navagator from '@/components/navagator.vue'
import UserMessage from '@/components/userMessage.vue'
export default {
  name: 'HelloWorld',
  components: {
    Title,
    Type,
    TvMessage,
    Navagator,
    UserMessage
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
  background: #fff;padding:15px;border-radius: 5px;
  input{
    height:30px;text-indent: 10px;
  }
}
.section3,.section4{
  margin-top:10px;
}
.section4{
  ul{
    padding:2px 0;
  }
}
</style>
