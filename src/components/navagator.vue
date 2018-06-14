<template>
  <div>
    <span>
      <slot name="chebox"></slot>
    </span>
    <span>已选点位数量：25</span>
    <span>时长：3分56秒</span>
    <slot name="inputGroup"></slot>
  </div>
</template>

<script>
export default {
  name: 'Navagator',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div{
  height:64px;background: #199ED8;line-height: 64px;text-align: left;
  margin:0 -15px;
  span{
    margin-left:20px;
  }
  a{
    display: block;width:144px;height:40px;background: #FFCC00;float:right;
    border-radius: 5px;line-height: 40px;text-align: center;
    margin-top:12px;margin-right:20px;
  }
}
</style>
