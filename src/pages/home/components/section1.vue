<template>
  <ul class="section1">
    <li>
      <div>
        <p>5245min</p>
        <p>视频资源总时长</p>
      </div>
      <div>
        <i class="fontFamily el-icon-hm-zongshichangicon" style="color:#129BE3"></i>
      </div>
    </li>
    <li>
      <div>
        <p>腾讯 爱奇艺 芒果TV</p>
        <p>视频资源总时长</p>
      </div>
      <div>
        <i class="fontFamily el-icon-hm-zongshichangicon" style="color:#129BE3"></i>
      </div>
    </li>
    <li>
      <div>
        <p>5245min</p>
        <p>视频资源总时长</p>
      </div>
      <div>
        <i class="fontFamily el-icon-hm-zongshichangicon" style="color:#129BE3"></i>
      </div>
    </li>
    <li>
      <div>
        <p>5245min</p>
        <p>视频资源总时长</p>
      </div>
      <div>
        <i class="fontFamily el-icon-hm-zongshichangicon" style="color:#129BE3"></i>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'section1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .section1{
    display: flex;display: -webkit-flex;justify-content:space-between;
    li{
      width:260px;height:110px;background: #fff;display: flex;font-size: 18px;
      border-radius: 5px;
      div:first-child{
        width:70%;display: flex;flex-direction:column;justify-content:center;
        p:first-child{
          font-size: 18px;font-weight: bold;
        }
        p:last-child{
          font-size: 16px;
        }
      }
      div:last-child{
        width:30%;display: flex;
        i{
          font-size:40px;margin:auto;
        }
      }
    }
  }
</style>
