<template>
  <ul>
    <li>腾讯</li>
    <li>爱奇艺</li>
    <li>芒果TV</li>
  </ul>
</template>
<script>
export default {
  name: 'Type'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  li{
    width:33.33%;height:46px;border-right:1px solid #E2E2E2;float:left;
    line-height: 46px;background: #fff;cursor: pointer;
  }
  li:last-child{
    border-right:none;
  }
  li:hover{
    background: #3ED0F8;color:#fff;
  }
</style>
