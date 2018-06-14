<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'title'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h3{
    padding: 5px 15px;text-align: left;margin-top:10px;background: #ffffff;
    border-bottom: 1px solid #F2F2F2;border-radius: 5px;
  }
</style>
