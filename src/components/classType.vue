<template>
  <li>
    <span>全部</span>
    <span>明星</span>
    <span>场景</span>
    <span>物体</span>
    <span>原生广告位</span>
  </li>
</template>

<script>
export default {
  name: 'ClassType'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
span{
  float:left;display: block;margin-right:40px;height:40px;line-height: 35px;cursor: pointer;
}
span:first-child{
  margin-left:15px;
}
span:hover{
  border-bottom: 5px solid #f00;
}
</style>
