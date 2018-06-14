<template>
  <nav id="navbar" class="allWidth center">
    <ul class="left">
      <li class="logoBox">
        <router-link to="/" class="left"><img src="../assets/logo.png" alt="海米logo"></router-link>
        <h3 class="left">海米文化传媒广告数据平台</h3>
      </li>
    </ul>
    <ul class="right" >
      <el-button @click="changeLoginShow()">
        <i class="fontFamily el-icon-hm-yonghudenglu"></i>
        登录
      </el-button>
      <el-button class="userDown">
        <i class="fontFamily el-icon-hm-yonghudenglu"></i>
        {{user}}
        <i class="el-icon-caret-bottom el-icon--right"></i>
        <ul class="drawDown">
          <li><a href="">个性化定制</a></li>
          <li><a href="">我的点位池</a></li>
          <li><router-link to="/orderlist">我的订单列表</router-link></li>
          <li><a href="">退出</a></li>
        </ul>
      </el-button>
    </ul>
  </nav>
</template>

<script>
import ElButton from '../../node_modules/element-ui/packages/button/src/button'
import { mapActions } from 'vuex'
export default {
  components: {ElButton},
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: '张俊杰',
      loginStatus: false
    }
  },
  methods: {
    ...mapActions([
      'changeLoginShow'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 #navbar{
   height:50px;border: 1px solid #E4E7ED;border-top:none;line-height: 50px;
   padding:0 15px;background: #00CCFF;position: fixed;z-index: 99;left:50%;
   margin-left:-600px;
   ul{
     height:100%;
   }
   .logoBox{
     h3{
       height:50px;margin-left:10px;
     }
     img {
       height:30px;margin-top:10px;
     }
   }
   .userDown{
     position:relative;
   }
   .drawDown{
    height:200px;position: absolute;right:0;top:40px;border:1px solid #00CCFF;
    background:#fff;display: none;
     li{
       width:150px;height:50px;line-height: 50px;border:1px solid #00CCFF;
       a{
         display: block;width:100%;height:100%;font-size: 18px;
       }
     }
     li:hover{
       background: #67C23A;
     }
   }
   .userDown:hover .drawDown{
     display: block;
   }
 }
</style>
