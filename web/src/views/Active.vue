<template>
  <div>
      <div class="article-header" v-if="model">
 <svg class="icon" style="width: 1.5rem; height: 100%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2681"><path d="M705 923c-6.4 0-12.8-2.4-17.7-7.3l-386-386c-9.8-9.8-9.8-25.6 0-35.4l386-386c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L354.4 512l368.3 368.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.9-11.3 7.3-17.7 7.3z" fill="#3bc4fd" p-id="2682"></path></svg>
  <div class="article-title" >{{model.title}}</div>
  <div class="acticle-right">{{model.updatedAt | timeFix}}</div>
  </div>
  <div class="article-moddle" v-html="model.body"></div>
  <div class="about-container">
  <div class="title-container"><svg class="icon" style="vertical-align:-5px; width: 1.5rem; height: 1.5rem;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3816"><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 48C291.0864 112 112 291.0864 112 512s179.0864 400 400 400 400-179.0864 400-400S732.9136 112 512 112z m0 352c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z m-192 0c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z m384 0c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z" fill="#979797" p-id="3817"></path></svg>
  <span class="about-title">相关资讯</span></div>
  <router-link tag="div" :to="`/actives/${item._id}`"  class="moveTitle" v-for="item in model.related" :key="item._id" >{{item.title}}</router-link>
  </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    props:{
        id:{required:true}
    },
    watch: {
    id: 'fetch',
    // id(){
    //   this.fetch()
    // }
  },
created(){
this.fetch()
},
data(){
    return{
        model:null
    }
},
methods:{
    async fetch(){
     const res=await this.$http.get(`articles/${this.id}`)
     this.model=res.data
  }
},
filters:{
timeFix(val){
return dayjs(val).format('YYYY/MM/DD')
}
}
}
</script>

<style lang="scss">
.article-header{
display: flex;
padding: 0 0.6022rem;
height: 2.6667rem;
border-bottom: 1px solid #d4d4d5;
margin-bottom: 0.6667rem;
line-height: 2.667rem;
.article-title{
    flex:1;
    box-sizing: border-box;
    padding-right: 20px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #4394e4;
        font-weight: bold;
        margin-left: 1.3233rem;
}
.acticle-right{
    color: #9fa0a0;
    font-size: 0.6667rem;
    
}
}
.article-moddle {
    box-sizing: border-box;
    // width: 100%;
    padding: 20px;
    font-size: 1.0769rem;
    img{
           max-width: 100%;
            height: auto;
    }
    iframe {
      width: 100%;
      height: auto;

    }
}
.moveTitle{
    padding-top:0.25rem;
    padding-bottom: 0.25rem;
}
.about-container{
    padding: 1rem;
    border-top:#d4d4d5 1px solid;
    .title-container{
        margin-bottom: 0.5115rem;
    .about-title{
        margin-left: 0.25rem;
        font-size: 1.0769rem;
        color: #4394e4;
        font-weight: bold;
    }
    }
}
</style>