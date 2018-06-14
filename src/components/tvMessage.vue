<template>
  <ul>
    <li class="one">
      <Title>
        <slot name="header">

        </slot>
        <span class="title">电视剧《归去来》</span>
      </Title>
    </li>
    <label for="checkS">
      <li>
        <slot name="footer">

        </slot>
      </li>
      <li>
        <img src="../assets/1.jpg" alt="">
      </li>
      <li>
        归去来
      </li>
      <li>
        第3集
      </li>
      <li>
        <p>入点：00:02:13</p>
        <p>时长：15秒</p>
      </li>
      <li>
        原生广告识别：笔记本电脑
      </li>
    </label>
  </ul>
</template>

<script>
import Title from './title.vue'
export default {
  name: 'Tvmessage',
  components: {
    Title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul{
  padding:0 15px;color:#000;background: #fff;margin-bottom: 10px;
  .one{
    margin-bottom:10px;
  }
  h3{
    background: #E4E4E4;
  }
  .title{
    color:#21CFFA;
  }
  label{
    width:100%;display: flex;
    li:nth-child(1){
      width:30px;flex:0;line-height: 130px;
    }
    li:nth-child(2){
      width:180px;
    }
    li{
      flex:2;
    }
    img{
      width:100%;
    }
  }
}
</style>
