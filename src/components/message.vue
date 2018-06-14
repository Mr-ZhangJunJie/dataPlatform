<template>
  <div>
      <h4>归去来 <el-tag class="tag">电视剧</el-tag><el-tag class="tag">更新至47</el-tag></h4>
      <p>首播时间：<span>2018/05/14</span></p>
      <p class="episode">集数：<span>50</span> 单集片长：<span>45min</span></p>
      <p>上映平台：<span class="platform">腾讯视频</span>
        <span class="platform">腾讯视频</span>
        <span class="platform">腾讯视频</span>
      </p>
      <p class="copyright">版权：<span>版权剧</span></p>
      <p>导演：<span>刘江</span></p>
      <p class="type">类型：<span>现代</span><span>爱情</span><span>都市</span></p>
      <p class="position">点位标签：<span>时尚</span><span>金融</span><span>车旅</span></p>
      <p class="protagonist">主演：<span>唐嫣</span><span>唐嫣</span><span>唐嫣</span><span>唐嫣</span></p>
      <slot>

      </slot>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h4{
  .tag{
    background: #FF6600;color:#fff;
  }
  .tag:first-child{
     margin-left:30px;
  }
  .tag:last-child{
    margin-left:10px;
  }
  span{
    padding: 0 4px;
  }
}
p{
  font-size: 14px;line-height: 26px;
}
.episode{
  span{
    margin-right:20px;
  }
}
.platform{
  border:1px solid #0099CC;padding:2px;color:#0099CC;margin-left:5px;
}
.copyright{
  span{
    color:#FF0000;
  }
}
.type,.position,.protagonist{
  span{
    color:#0099CC;margin-right:10px;
  }
}
</style>
