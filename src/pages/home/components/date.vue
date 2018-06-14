<template>
<ul class="timeLine">
  <p>
    {{message.weeks}}
  </p>
  <p>
    {{message.months}}月{{message.days}}日首播
  </p>
  <p>
    <span class="tiao"></span>
    <span class="circle" :style="{background:message.color}"></span>
  </p>
</ul>
</template>

<script>
export default {
  name: 'Date',
  props: ['message']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .timeLine{
    width:15%;
    >p:last-child{
      margin-top: 10px;position: relative;
      .tiao{
        display: block;width:100%;height:10px;background: #CCCCCC;
      }
      .circle{
        width:16px;height:16px;border-radius: 50%;position: absolute;
        left:50%;top:50%;margin-top:-8px;margin-left:-8px;
      }
    }
  }
</style>
