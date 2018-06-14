<template>
  <div class="cartBox clearFix">
    <div class="left">
      <img src="../../../assets/u541.jpg" alt="">
    </div>
    <div class="right">
      <h4>办公室 <span style="color:#ff0000;float:right;font-size:24px;">1</span></h4>
      <p>识别次数：271次</p>
      <p>识别时长：271s</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section2',
  data () {
    return {
      showIndex: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cartBox{
  background: #ffffff;padding:6px 10px;margin-top:10px;border-radius: 5px;
}
.left{
  width:123px;
  img{
    width:100%;
  }
}
.right{
  text-align: left;font-size:12px;width:110px;height:100%;line-height: 16px;
  h4{
    font-size: 16px;line-height: 34px;
  }
}
</style>
