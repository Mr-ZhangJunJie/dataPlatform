<template>
  <div class="container">
   <section :style="{height:h}">
     <p>列表提交成功 <router-link to="/">返回首页</router-link></p>
   </section>
  </div>
</template>
<script>
export default {
  name: 'SubmitSuccess',
  data: function () {
    return {
      h: (window.innerHeight - 66) + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
section{
  display: flex;font-size:36px;
  p{
    margin:auto;
  }
}
</style>
