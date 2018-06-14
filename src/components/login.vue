<template>
   <ul id="loginBox">
     <li>
       <img src="../assets/logo.png" alt="">
     </li>
     <li class="two">
       海米文化传媒广告数据平台通行证
     </li>
     <li>
       <el-input clearable placeholder="请输入账号"  v-model="user">
         <i slot="prefix" class="el-input__icon fontFamily el-icon-hm-zhanghao"></i>
       </el-input>
     </li>
     <li>
       <el-input clearable type="password" placeholder="请输入密码" v-model="password">
         <i slot="prefix" class="el-input__icon fontFamily el-icon-hm-mima"></i>
       </el-input>
     </li>
     <li class="last">
       <el-button type="primary" class="submit" @click="login">登录</el-button>
     </li>
   </ul>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      alert('登录')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #loginBox{
    width:350px;height:430px;background: #ffffff;border-radius: 10px;
    margin: auto;padding:15px;
    li{
      margin-top:20px;
    }
    .two{
      height:50px;line-height: 50px;font-size: 18px;font-weight: bold;color:#0F386C;
    }
    .submit{
      width:100%;
    }
    .last{
      margin-top: 30px;
    }
  }
</style>
