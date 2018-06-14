<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <ul class="loginContainer" v-if="loginShow" @click.self="changeLoginShow()">
      <Login></Login>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from './components/navBar.vue'
import Login from './components/login.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    loginShow: function () {
      return this.$store.state.loginShow
    }
  },
  components: {
    Navbar,
    Login
  },
  methods: {
    ...mapActions([
      'changeLoginShow'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.loginContainer{
  position: fixed;
  top:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  z-index:9
}
</style>
