<template>
  <div class='page-hero'>
    <div class="topbar">
      <img src="@/assets/logo.png" height="30" />
      <div class="topbar-title">
        <span>王者荣耀</span>

        <span class="topbar-title2">攻略站</span>
        
      </div>
      <router-link to="/" tag="div" style="color:white;">更多英雄 &gt;</router-link>
    </div>
    <div v-if="model && model.banner" class="top" :style="{'background-image': `url(${model.banner})`}">
        <div class="info">
            <div class="hero-title">{{model.title}}</div>
            <div class="hero-name">{{model.name}}</div>
            {{model.categories.map(v => v.name).join('/')}}
            <div class="down-container">
            <div class="scores">
                <span>难度</span><span class="yuan"></span>
                <span>攻击</span><span class="yuan">{{model.scores.attack}}</span>
                <span>技能</span><span class="yuan">{{model.scores.skills}}</span>
                <span>生存</span><span class="yuan">{{model.scores.survive}}</span>
            </div>
            <router-link to="/" tag="span">皮肤: 2 &gt;</router-link>
            </div>
        </div>
    </div>
    <div class="hero-content">
        <div class="top-bar">
            <div>英雄初识</div>
            <div>进阶攻略</div>
        </div>
        <div class="hero-video-container">
            <button class="hero-video">英雄介绍视频</button>
        <button class="hero-video">英雄介绍视频</button>
        </div>
        <div v-for="skill in model.skills">
            <img :src="skill.icon">
        </div>
        <div>{{model.skills[currentSkill].name}}</div>
        <div>{{model.skills[currentSkill].description}}</div>
    </div>
    </div>
</template>

<script>
export default {
props:{
    id:{required:true}
},
created(){
    this.fetch()
},
data(){
   return{
       currentSkill:0,
        model:{
            skills:[]
        }
   }
},
methods:{
    async fetch(){
       const res= await this.$http.get(`heroes/${this.id}`)
       this.model=res.data
    }
}
}
</script>

<style lang="scss" scoped>
$setColor1: #f09a37;
$setColor1-2: #e99b39;
$setColor2: #666;
$setColor3: #fff;
  .topbar {
    background-color: #000;
    display: flex;
    position: sticky;
    top: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    z-index: 1000;
    .topbar-title {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      flex: 1;
       color: $setColor3;
       .topbar-title2{
           margin-left: 0.5rem;
       }
    }
  }
.page-hero{
    
    .top{
        height: 50vw;
        background:#fff  no-repeat top center;
        background-size: auto 100%;
        .info{
            height:100%;
            background: linear-gradient(transparent, black);
            display: flex;
           justify-content: flex-end;
           flex-direction: column;
           color: #fff;
           padding:1rem;
           box-sizing: border-box;
            .hero-title{
                font-size: 0.9231rem;
                
            }
            .hero-name{
                    font-size: 1.5em;
                    font-weight: bold;
            }
            .down-container{
                display: flex;
                justify-content: space-between;
            .scores{
                .yuan{
                display: inline-block;
                width: 1rem;
                height:1rem;
                background-color: yellow;
                text-align: center;
                border-radius: 50%;
                margin:0 0.25rem;
            }
            }
            }
        }
    }
}
.hero-content{
    
    .top-bar{
        padding-bottom: 0.5rem;
        padding-top: 1rem;

         display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: 1px solid #d4d9de;
    }
    .hero-video-container{
        display: flex;
        padding:1rem;
            background-color: #fff;
         .hero-video{
             flex: 1;
        display: inline-block;
        padding: 0.8rem 1rem;
        border: 1px solid #eceef0;
            background: #fcfcfc;
    }
    }
   
}
</style>