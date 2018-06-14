<template>
  <ul class="section2">
    <li>
      <div class="title clearFix"><h3>热门资源</h3> <router-link to="/list">更多</router-link></div>
      <div class="content">
        <el-carousel  height="513px" autoplay :interval="3000">
          <el-carousel-item v-for="item in 4" :key="item">
            <a href="">
              <div class="top">
                <div class="carousel-left">
                  <img src="../../../assets/guiqulai.jpg" alt="">
                </div>
                <div class="carousel-right">
                   <div class="top">
                     <div class="left">
                       <h3>归去来</h3>
                       <p>
                         <span>首播时间: 2018/4/20</span>
                         <span>集数: 30</span>
                         <span>单集时长: 45min</span>
                       </p>
                     </div>
                     <div class="right">
                       <Increment></Increment>
                     </div>
                   </div>
                   <div class="bottom">
                     <div class="left">
                        <p>导演：刘</p>
                        <p>主演：钟汉良 里层 钟汉良 里层 </p>
                        <p>平台：<em>腾讯视频</em><em>腾讯视频</em></p>
                        <p>类型：现代 爱情 言情 都市</p>
                        <h3>点位总数 <span style="color:#ff0000">588</span>处</h3>
                        <ul>
                          <li><span class="quart" style="background: #00CCCC"></span>物体识别：155处</li>
                          <li><span class="quart" style="background: #FF9900"></span>明星识别：155处</li>
                          <li><span class="quart" style="background: #00CCFF"></span>场景识别：155处</li>
                          <li><span class="quart" style="background: #FFFF00"></span>原生识别：155处</li>
                        </ul>
                     </div>
                     <div class="right">
                       饼图
                     </div>
                   </div>
                </div>
              </div>
              <div class="bottom">
                 曲线图
              </div>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </li>
    <li>
      <h3>智能识别排行榜</h3>
      <ul class="title">
        <li v-for="(item, index) in zhineng" @click="changIndex(item, index)" :key="index" :class="{target:item.status}">
          {{item.text}}
        </li>
      </ul>
      <ul class="content">
        <li v-show="showIndex === 0">
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
        </li>
        <li v-show="showIndex === 1">场景</li>
        <li v-show="showIndex === 2">物体</li>
        <li v-show="showIndex === 3">原生</li>
      </ul>
    </li>
  </ul>
</template>

<script>
import Cart from './cart.vue'
import Increment from '@/components/increment.vue'
export default {
  name: 'section2',
  data () {
    return {
      zhineng: [{text: '明星', status: true}, {text: '场景', status: false}, {text: '物体', status: false}, {text: '原生', status: false}],
      showIndex: 0
    }
  },
  components: {
    Cart,
    Increment
  },
  methods: {
    changIndex (item, index) {
      this.showIndex = index
      this.zhineng.map((item) => {
        item.status = false
      })
      item.status = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .section2{
    display: flex;display: -webkit-flex;justify-content:space-between;margin-top:10px;
    height:548px;
    >li:first-child{
      width:867px;background: #fff;border-radius: 5px;
      .title{
        padding:5px 15px;border-bottom:1px solid #F2F2F2;
        h3{
          float:left;
        }
        a{
          float:right;
        }
      }
      .content{
        .el-carousel__item h3 {
          color: #475669;
          font-size: 18px;
          opacity: 0.75;
          line-height: 300px;
          margin: 0;
        }
        .el-carousel__item:nth-child(2n) {
          background-color: #ffffff;
        }
        .el-carousel__item:nth-child(2n+1) {
          background-color: #ffffff;
        }
        .top{
          height:330px;
          .carousel-left{
            width:260px;height:300px;margin-top:25px;float:left;
            img{
              height:100%;
            }
          }
          .carousel-right{
            width:607px;height:100%;float:right;
            .top{
              height:88px;
              .left{
                height:100%;
                h3{
                  height:60px;line-height:60px ;text-align: left;color:#000;
                }
                span{
                  margin-right:15px;color:#000;
                }
              }
              .right{
                height:100%;color:#FA0019;
              }
            }
          }
        }
        .bottom{
          height:238px;text-align: left;
          .left{
            width:336px;height:100%;float: left;
            p{
              line-height: 30px;
            }
            em{
              border:1px solid #0099CC;margin-right:5px;font-style: normal;
            }
            h3{
              line-height: 48px;margin-top:8px;
            }
            li{
              width:50%;float:left;line-height: 30px;background: #FFFFFF;
            }
            .quart{
              display: block;width:20px;height:20px;background: pink;float:left;
              margin-top:5px;
            }
          }
          .right{
            width:269px;height:100%;background:pink;float: right;
          }
        }
      }
    }
    >li:last-child{
      width: 260px;
      .title{
        height:34px;background: #E4E4E4;display: flex;justify-content: space-between;
        li{
          width:25%;line-height: 34px;text-align: center;cursor: pointer;
        }
      }
      .content{
        height:488px;
        >li{
          height:100%;

        }
      }
    }
    .target{
      border-bottom:5px solid #ff0000;
    }
  }
</style>
