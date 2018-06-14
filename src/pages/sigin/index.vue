<template>
  <div class="container">
    <div class="section1 clearFix">
      <div class="one">
        <img src="../../assets/guiqulai.jpg" alt="">
      </div>
      <div class="two">
        <Message></Message>
      </div>
      <ul class="three">
        <li>
          <p>今日播放量</p>
          <p>1.1亿</p>
        </li>
        <li>
          <p>昨日播放量</p>
          <p>1.1亿</p>
        </li>
      </ul>
    </div>
    <div class="section2">
      <ul class="one">
        <li class="one_left"></li>
        <li class="one_right"></li>
      </ul>
      <ul class="two clearFix">
        <Type></Type>
      </ul>
      <ul class="three clearFix">
        <ClassType></ClassType>
      </ul>
      <div class="four clearFix">
        <ul class="list">
          <table style="border-spacing:0 10px;">
              <tr v-for="(item, index) in 16" :key="index">
                <label :for="'checkStatus' + index">
                  <td width="5%"><input type="checkbox" :id="'checkStatus' + index"></td>
                  <td width="20%">点位1</td>
                  <td width="20%">入点：00:12:13</td>
                  <td width="20%">时长：3秒</td>
                  <td width="35%" align="right" style="padding-right:10px;">场景：办公室</td>
                </label>
              </tr>
          </table>
        </ul>
        <ul class="imgMessage">
          <Title>
            点位预览图
          </Title>
          <li class="imgBox">
            <img src="../../assets/1.jpg" alt="">
          </li>
          <li class="content">
            <p>所属资源：电视剧 《归去来》第三集</p>
            <p>场景识别：办公室</p>
            <p><span class="left">入点：00:02:13</span> <span class="right">时长：3秒</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="section3">
      <Navagator>
        <template slot="chebox">
          <input type="checkbox" id="all"><label for="all">全选</label>
        </template>
        <tempalte slot="inputGroup">
          <router-link to="/pointpool">查看点位池</router-link>
          <router-link to="/">加入点位池</router-link>
        </tempalte>
      </Navagator>
    </div>
  </div>
</template>

<script>
import Message from '@/components/message.vue'
import Type from '@/components/type.vue'
import ClassType from '@/components/classType.vue'
import Title from '@/components/title.vue'
import Navagator from '@/components/navagator.vue'
export default {
  name: 'Details',
  data () {
    return {
    }
  },
  components: {
    Message,
    Type,
    ClassType,
    Title,
    Navagator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.section1{
  background: #ffffff;padding:25px 15px;margin:-15px;margin-bottom: 0;
  .one{
    width:186px;float:left;border-radius: 6px;overflow: hidden;
    img{
      width:100%;
    }
  }
  .two{
    float:left;margin-left:20px;text-align: left;
  }
  .three{
    float:right;
    li{
      width:174px;height:94px;margin-right:67px;
      padding:10px;background: #F2F2F2;border-radius: 5px;margin-bottom:40px;
      p{
        line-height: 32px;
      }
    }
  }
}
.section2{
  .one{
    height:278px;
    li{
      width:570px;height:100%;background: red;
    }
    li:first-child{
      float:left;
    }
    li:last-child{
      float:right;
    }
  }
  .two{
    margin-top:20px;
    li{
      width:33.33%;height:46px;border-right:1px solid #E2E2E2;float:left;
      line-height: 46px;background: #fff;
    }
    li:last-child{
      border-right:none;
    }
  }
  .three{
    margin-top:20px;height:40px;background: #fff;
  }
  .four{
    margin-top:15px;
    .list{
      width:716px;height:648px;float:left;overflow: scroll;
      table{
        width:100%;
        label{
          display:block;width:699px;
        }
        tr{
          height:52px;background: #fff;
        }
      }
    }
    .imgMessage{
      width:454px;padding-bottom:20px;float:left;background: #fff;
      .imgBox{
        padding:0 15px;margin-top:15px;font-size: 0;
        img{
          width:100%;
        }
      }
      .content{
        margin-top:20px;
        p{
          padding:0 15px;text-align: left;line-height: 26px;
        }
        p:last-child{
          margin-top:20px;
        }
      }
    }
  }
}
.section3{
  padding-bottom: 20px;
}
</style>
