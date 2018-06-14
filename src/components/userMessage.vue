<template>
  <div class="userMessage">
    <p>
      用户信息
    </p>
    <p class="two">
      <span>用户名：user123</span>
      <span>
        联系人：
        <slot name="userName"></slot>
      </span>
      <span>
        联系方式：
        <slot name="userPhone"></slot>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'UserMessage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.userMessage{
  p{
    height:30px;line-height: 30px;text-align: left;
    font-size: 18px;
  }
  .two{
    display: flex;height:40px;line-height: 40px;
    span{
      flex:1;
    }
  }
}
</style>
