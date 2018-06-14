<template>
  <div>
    <div>
      <p>4.8%</p>
      <p>单周增量</p>
    </div>
    <div>
      <i class="fontFamily el-icon-hm-shangshengjiantou"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Increment'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  div{
    float:left;
  }
  div:first-child{
    font-size: 14px;padding-top:10px;
    p:first-child{
      font-size: 34px;
    }
  }
  div:last-child{
    padding-top:15px;
  }
  i{
    font-size: 60px;
  }
</style>
