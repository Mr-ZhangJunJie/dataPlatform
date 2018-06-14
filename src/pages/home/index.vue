<template>
  <div class="container">
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
  </div>
</template>
<script>
import Section1 from './components/section1.vue'
import Section2 from './components/section2.vue'
import Section3 from './components/section3.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Section1,
    Section2,
    Section3
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
