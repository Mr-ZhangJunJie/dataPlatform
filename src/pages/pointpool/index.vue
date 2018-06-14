<template>
  <div class="container">
    <div class="section1">
      <Title class="pool">
        我的点位池
      </Title>
    </div>
    <div class="section2 clearFix">
      <Type></Type>
    </div>
    <div class="section3">
      <TvMessage>
        <template slot="header">
          <input type="checkbox">
        </template>
        <template slot="footer">
          <input type="checkbox" id="checkS">
        </template>
      </TvMessage>
      <TvMessage>
        <template slot="header">
          <input type="checkbox">
        </template>
        <template slot="footer">
          <input type="checkbox" id="checkS">
        </template>
      </TvMessage>
      <TvMessage>
        <template slot="header">
          <input type="checkbox">
        </template>
        <template slot="footer">
          <input type="checkbox" id="checkS">
        </template>
      </TvMessage>
      <TvMessage>
        <template slot="header">
          <input type="checkbox">
        </template>
        <template slot="footer">
          <input type="checkbox" id="checkS">
        </template>
      </TvMessage>
    </div>
    <div class="section4">
      <Navagator>
        <template slot="chebox">
          <input type="checkbox" id="all"><label for="all">全选</label>
        </template>
        <tempalte slot="inputGroup">
          <router-link to="/order">加入订单</router-link>
        </tempalte>
      </Navagator>
    </div>
  </div>
</template>

<script>
import Title from '@/components/title.vue'
import Type from '@/components/type.vue'
import TvMessage from '@/components/tvMessage.vue'
import Navagator from '@/components/navagator.vue'
export default {
  name: 'PointPool',
  components: {
    Title,
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
</style>
