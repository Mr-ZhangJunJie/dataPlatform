<template>
  <ul class="section3">
    <li>
      <Title>
        新剧上线倒计时
      </Title>
    </li>
    <li class="timeBox">
      <DateCom v-for="(item, index) in time" :key="index" :message="item"></DateCom>
    </li>
    <li class="upTime">
      <ul v-for="(item, index) in 7" :key="index">
        <li class="clearFix" v-for="(item, index) in 7" :key="index">
          <div class="left">
             <div class="circle" style="background: #f00"></div>
          </div>
          <div class="right">
            <p style="font-weight:bold;line-height: 28px">腾讯视频</p>
            <p>进击吧，少女</p>
            <p style="font-size:14px;margin-top:10px;">20:00 首播</p>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import Title from '@/components/title.vue'
import DateCom from './date.vue'
export default {
  name: 'section3',
  data () {
    return {
      nowTime: new Date().getTime(),
      dayMil: 86400000
    }
  },
  computed: {
    time () {
      let day1 = this.computeTime(this.nowTime, '#FA0019')
      let day2 = this.computeTime(this.nowTime + this.dayMil, '#FA641D')
      let day3 = this.computeTime(this.nowTime + this.dayMil * 2, '#FCCC2A')
      let day4 = this.computeTime(this.nowTime + this.dayMil * 3, '#CCCCCC')
      let day5 = this.computeTime(this.nowTime + this.dayMil * 4, '#CCCCCC')
      let day6 = this.computeTime(this.nowTime + this.dayMil * 5, '#CCCCCC')
      let day7 = this.computeTime(this.nowTime + this.dayMil * 6, '#CCCCCC')
      return [day1, day2, day3, day4, day5, day6, day7]
    }
  },
  methods: {
    computeTime (mil, color) {
      let date = new Date(mil)
      let week = ''
      let Week = date.getDay()
      let nowDay = date.getDate()
      let nowMon = date.getMonth() + 1
      let nowWeek = new Date(this.nowTime).getDay()
      switch (Week) {
        case 1:
          if (Week === nowWeek) { week = '今天' }
          if (Week < nowWeek) { week = '下周一' }
          if (Week > nowWeek) { week = '本周一' }
          break
        case 2:
          if (Week === nowWeek) { week = '今天' }
          if (Week < nowWeek) { week = '下周二' }
          if (Week > nowWeek) { week = '本周二' }
          break
        case 3:
          if (Week === nowWeek) { week = '今天' }
          if (Week < nowWeek) { week = '下周三' }
          if (Week > nowWeek) { week = '本周三' }
          break
        case 4:
          if (Week === nowWeek) { week = '今天' }
          if (Week < nowWeek) { week = '下周四' }
          if (Week > nowWeek) { week = '本周四' }
          break
        case 5:
          if (Week === nowWeek) { week = '今天' }
          if (Week < nowWeek) { week = '下周五' }
          if (Week > nowWeek) { week = '本周五' }
          break
        case 6:
          if (Week === nowWeek) { week = '今天' }
          if (Week < nowWeek) { week = '下周六' }
          if (Week > nowWeek) { week = '本周六' }
          break
        case 0:
          if (Week === nowWeek) { week = '今天' } else {
            week = '本周日'
          }
          break
      }
      return {
        weeks: week,
        months: nowMon,
        days: nowDay,
        color: color
      }
    }
  },
  components: {
    Title,
    DateCom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.timeBox{
  display: flex;
}
.upTime{
  display: flex;margin-top:25px;
  ul{
    width:15%;padding:0 10px;
    li{
     width:100%;height:98px;padding:10px;margin-top:10px;background:#fff;display: flex;
      .left{
        width:20%;
      }
      .right{
       width:80%;text-align: left;
      }
    }
  }
}
.circle{
  display:block;width:16px;height:16px;border-radius: 50%;float:left;margin-top:5px;
}
</style>
