<template>
  <div class="container">
    <ul class="section1 clearFix">
      <li class="one">
        <img src="../../assets/guiqulai.jpg" alt="">
      </li>
      <li class="two">
        <div>
          <Message>
            <p>出品公司：<span>北京完美公司</span></p>
            <p>剧讲述了萧清、书澈、缪盈、宁鸣、成然和绿卡等人因为家庭、理想、爱情等种种原因相聚美国，成为藤校精英后，从象牙塔走向社会，一步步完成蜕变的故事...</p>
          </Message>
        </div>
      </li>
      <li class="three">
        <div class="top clearFix">
          <Increment></Increment>
        </div>
        <div class="bottom">
          <el-tabs v-model="activeName">
            <el-tab-pane label="1-24" name="first">
              <router-link to="/sigin" class="list" v-for="(item, index) in 24" :key="index">{{item}}</router-link>
            </el-tab-pane>
            <el-tab-pane label="25-38" name="second">
              <router-link to="/sigin" class="list" v-for="(item, index) in 8" :key="index">{{item}}</router-link>
            </el-tab-pane>
          </el-tabs>
        </div>
      </li>
    </ul>
    <div class="section2">
      <Title>播放量数据</Title>
    </div>
    <div class="section3">
      <ul class="one clearFix">
        <li>
          <p>今日播放量</p>
          <p>1.1亿</p>
        </li>
        <li>
          <p>昨日播放量</p>
          <p>1.1亿</p>
        </li>
        <li>
          <p>累计播放量</p>
          <p>1.1亿</p>
        </li>
        <li>
          <p>上映天数</p>
          <p>1.1亿</p>
        </li>
        <li>
          <p>当前点位数量</p>
          <p>1.1亿</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from '@/components/title.vue'
import Message from '@/components/message.vue'
import Increment from '@/components/increment.vue'
export default {
  name: 'Detail',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    Title,
    Message,
    Increment
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.section1{
  background: #fff;margin-top:-15px;padding:28px 15px;height:396px;
  .one{
    width:260px;border-radius: 8px;font-size:0;overflow: hidden;float: left;
    img{
      width:100%;
    }
  }
  .two{
    float:left;text-align: left;margin-left:20px;width:378px;height:100%;
    .tag{
      background: #FF6600;color:#fff;
    }
  }
  .three{
    width:482px;height: 100%;float:right;
    .top{
     >div{
       float:right;color:#FF3300;
     }
     >div:first-child{
       p:first-child{
         font-size: 44px;
       }
       p:last-child{
         font-size: 18px;
       }
     }
    }
    .bottom{
      padding-top:26px;padding-left:56px;
      .list{
        width:54px;height:34px;border-radius: 17px;border:1px solid #5CD6FF;text-align: center;
        line-height: 34px;margin-right:17px;margin-bottom:16px;float:left;
      }
    }
  }
}
.section3{
  background: #fff;margin-top:10px;
  .one{
    padding:30px 15px;
    li{
      width:174px;height:94px;float:left;margin-right:67px;
      padding:10px;background: #F2F2F2;border-radius: 5px;
      p{
        line-height: 32px;
      }
    }
    li:last-child{
      margin-right:0;
    }
  }
}
</style>
