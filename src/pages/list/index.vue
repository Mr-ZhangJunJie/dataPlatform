<template>
  <div class="container">
    <div class="innerBox">
     <ul class="section1">
       <li class="section1_top clearFix">
         <ul class="left">
           <Title class="title1">
             按剧目分类
           </Title>
           <li>
             <p>资源级别：<span>全部</span><span>S级</span><span>A级</span><span>B级</span></p>
             <p>资源类型：<span>全部</span><span>自制剧</span><span>版权剧</span></p>
             <p>版权类型：<span>全部</span><span>电视剧</span><span>综艺</span></p>
             <p class="drop"><span>全部</span><span>棚内</span><span>棚外</span></p>
             <p>年代：2018</p>
           </li>
         </ul>
         <ul class="right">
           <Title class="title1">
             按点位分类
           </Title>
           <li>
             <span>场景分类：
                 <el-autocomplete
                 size="small"
                 class="inline-input"
                 v-model="state1"
                 :fetch-suggestions="querySearch"
                 placeholder="请输入内容"
                 @select="handleSelect"
                 ></el-autocomplete>
             </span>
           </li>
           <li>
             <span>人物识别：
                   <el-autocomplete
                     size="small"
                     class="inline-input"
                     v-model="state2"
                     :fetch-suggestions="querySearch"
                     placeholder="请输入内容"
                     @select="handleSelect"
                   ></el-autocomplete>
             </span>
           </li>
           <li>
             <span>物体识别：
                   <el-autocomplete
                     size="small"
                     class="inline-input"
                     v-model="state3"
                     :fetch-suggestions="querySearch"
                     placeholder="请输入内容"
                     @select="handleSelect"
                   ></el-autocomplete>
             </span>
           </li>
           <li>
             <span>原生植入：
                   <el-autocomplete
                     size="small"
                     class="inline-input"
                     v-model="state4"
                     :fetch-suggestions="querySearch"
                     placeholder="请输入内容"
                     @select="handleSelect"
                   ></el-autocomplete>
             </span>
           </li>
         </ul>
       </li>
       <li class="section1_bottom">
         <Title>
           资源标签 <span>金融</span> <span>商务</span> <span>车旅</span> <span>日化</span> <span>时尚</span>
         </Title>
       </li>
     </ul>
     <ul class="section2">
       <Title>
         已选条件：
         <el-tag
           v-for="tag in tags"
           :key="tag.name"
           closable
           :type="tag.type"
           @close="handleClose(tag)">
           {{tag.name}}
         </el-tag>
       </Title>
     </ul>
     <ul class="section3">
       <Title>
         <span style="padding:5px 0;">按首播时间排序</span>
         <span>按点位量排序</span>
         <span>按播放量排序</span>
       </Title>
     </ul>
     <ul class="section4 clearFix">
       <li>
         <router-link to="/detail">
           <img src="../../assets/guiqulai.jpg" alt="">
         </router-link>
       </li>
       <li>
         <router-link to="/detail">
           <img src="../../assets/guiqulai.jpg" alt="">
         </router-link>
       </li>
       <li>
         <router-link to="/detail">
           <img src="../../assets/guiqulai.jpg" alt="">
         </router-link>
       </li>
       <li>
         <router-link to="/detail">
           <img src="../../assets/guiqulai.jpg" alt="">
         </router-link>
       </li>
       <li>
         <router-link to="/detail">
           <img src="../../assets/guiqulai.jpg" alt="">
         </router-link>
       </li>
       <li>
         <router-link to="/detail">
           <img src="../../assets/guiqulai.jpg" alt="">
         </router-link>
       </li>
     </ul>
    </div>
  </div>
</template>

<script>
import Title from '@/components/title.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      restaurants: [],
      state1: '',
      state2: '',
      state3: '',
      state4: '',
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  components: {
    Title
  },
  methods: {
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' }
      ]
    },
    handleSelect (item) {
      console.log(item)
    },
    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.innerBox{
  margin-top:15px;
}
.section1{
  padding:0 15px;border-radius: 5px;background: #fff;
}
.section1_top{
  height:220px;border-bottom:1px solid #E4E4E4;
  .left{
    width:680px;height:100%;float:left;border-right:1px solid #E4E4E4;
    .title1{
      padding:5px 0;margin-bottom:10px;
    }
    p{
      line-height: 30px;height:30px;color:#000;
    }
    .drop{
      padding-left:80px;
    }
    p:last-child{
      margin-top:8px;font-weight: normal;
    }
    span{
      padding:5px 10px;margin-left:10px;cursor: pointer;
    }
  }
  .right{
    width:388px;height:100%;float:left;
    li{
      height:40px;line-height: 40px;
    }
  }
  p{
    text-align:left;
  }
}
.section1_bottom{
  h3{
    padding: 10px 0;
  }
  span{
    font-weight: normal;font-size: 16px;padding:5px 10px;margin-left:15px;
  }
}
.section2{
  h3{
    font-weight: normal;
  }
}
.section3{
  h3{
    font-weight: normal;font-size:14px;
  }
  span{
    padding:5px 10px;margin-right:10px;cursor: pointer;
  }
}
.section4{
  margin-top:20px;
  li{
    width:203px;margin-right:38px;margin-bottom:44px;float:left;font-size:0;
    img{
      width:100%;
    }
  }
  li:nth-child(5n){
    margin-right:0;
  }
}
</style>
