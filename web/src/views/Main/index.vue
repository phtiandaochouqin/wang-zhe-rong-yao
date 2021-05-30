<template>
  <div >
    
    <my-swiper />
    <div class="middle-container">
      <div class="icon-container">
        <div class="icon-item" v-for="n in 10" :key="n">
          <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3544"><path d="M709.267658 1024H314.732342c-98.871625 0-179.336572-80.452093-179.336572-179.336572V270.79154a35.875027 35.875027 0 0 1 71.737199 0v573.871888a107.715057 107.715057 0 0 0 107.599373 107.599372h394.535316a107.727911 107.727911 0 0 0 107.599373-107.599372V270.79154a35.875027 35.875027 0 0 1 71.737199 0v573.871888c0 98.884479-80.452093 179.336572-179.336572 179.336572z" fill="#FFF000" p-id="3545"></path><path d="M341.635398 749.622243a34.075491 34.075491 0 0 1-34.075491-34.075491V408.880186a34.075491 34.075491 0 0 1 68.125275 0v306.666566a34.075491 34.075491 0 0 1-34.049784 34.075491zM512 749.622243a34.062637 34.062637 0 0 1-34.062637-34.075491V408.880186a34.062637 34.062637 0 0 1 68.125274 0v306.666566a34.062637 34.062637 0 0 1-34.062637 34.075491zM682.364602 749.622243a34.062637 34.062637 0 0 1-34.062638-34.075491V408.880186a34.062637 34.062637 0 0 1 68.125275 0v306.666566a34.062637 34.062637 0 0 1-34.062637 34.075491zM920.880186 204.440093H103.119814a34.075491 34.075491 0 1 1 0-68.125275h817.760372a34.075491 34.075491 0 1 1 0 68.125275zM648.301964 68.138128H375.698036a34.075491 34.075491 0 0 1 0-68.125274h272.603928a34.075491 34.075491 0 0 1 0 68.125274z" fill="#E51373" p-id="3546"></path></svg>
          <div>爆料站</div>
        </div>
      </div>
      <div class="fold">
        <svg
          class="icon"
          style="
            padding-bottom: 0.2rem;
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3797"
        >
          <path
            d="M896 864c-9.6 0-16-3.2-22.4-9.6L512 492.8 150.4 854.4c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8l384-384c12.8-12.8 32-12.8 44.8 0l384 384c12.8 12.8 12.8 32 0 44.8-6.4 6.4-12.8 9.6-22.4 9.6z"
            fill="rgb(193, 197, 207)"
            p-id="3798"
          ></path>
          <path
            d="M896 608c-9.6 0-16-3.2-22.4-9.6L512 236.8 150.4 598.4c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8l384-384c12.8-12.8 32-12.8 44.8 0l384 384c12.8 12.8 12.8 32 0 44.8-6.4 6.4-12.8 9.6-22.4 9.6z"
            fill="rgb(193, 197, 207)"
            p-id="3799"
          ></path></svg
        >收起
      </div>
    </div>
    <div class="card-container">
      <div class="card-top">
        <svg
          class="icon"
          style="
            padding-top: 0.1rem;
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5264"
        >
          <path
            d="M958.0544 96.8704v841.728h-888.832v-841.728h888.832m26.624-51.2h-942.08c-13.5168 0-24.576 11.0592-24.576 24.576v894.976c0 13.5168 11.0592 24.576 24.576 24.576h942.08c13.5168 0 24.576-11.0592 24.576-24.576v-894.976c0-13.7216-11.0592-24.576-24.576-24.576z"
            p-id="5265"
          ></path>
          <path
            d="M184.7296 517.7344H432.128c12.9024 0 23.552-10.6496 23.552-23.552V229.7856c0-12.9024-10.6496-23.552-23.552-23.552H184.7296c-12.9024 0-23.552 10.6496-23.552 23.552v264.3968c0.2048 12.9024 10.6496 23.552 23.552 23.552z m25.6-262.5536h196.1984v213.4016h-196.1984V255.1808zM577.3312 378.6752h259.072c16.1792 0 29.4912-13.312 29.4912-29.2864s-13.312-29.2864-29.4912-29.2864H577.3312c-16.1792 0-29.4912 13.312-29.4912 29.2864s13.312 29.2864 29.4912 29.2864zM836.4032 605.7984H190.6688c-16.1792 0-29.4912 13.312-29.4912 29.2864s13.312 29.2864 29.4912 29.2864h645.7344c16.1792 0 29.4912-13.312 29.4912-29.2864s-13.312-29.2864-29.4912-29.2864zM836.4032 770.2528H190.6688c-16.1792 0-29.4912 13.312-29.4912 29.2864 0 16.1792 13.312 29.2864 29.4912 29.2864h645.7344c16.1792 0 29.4912-13.312 29.4912-29.2864 0-16.1792-13.312-29.2864-29.4912-29.2864z"
            p-id="5266"
          ></path>
        </svg>
        <strong class="card-title">新闻资讯</strong>
        <svg
          class="icon"
          style="
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6935"
        >
          <path
            d="M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
            p-id="6936"
          ></path>
        </svg>
      </div>
      <div class="card-navbar">
        <div
          v-for="(item, i) in newCats"
          :key="item.name"
          class="cnb-item"
          :class="{ active: active == i }"
          @click="siwperControl(i)"
        >
          {{ item.name }}
        </div>
      </div>
      <swiper
        class="card-content"
        ref="activeSwiper"
        @slide-change="() => (active = $refs.activeSwiper.swiper.realIndex)"
      >
        <swiper-slide
          v-for="items in newCats"
          :key="items.name"
          class="card-swiper"
        >
          <router-link tag="div" :to="`/actives/${item._id}`" v-for="item in items.newList" class="row-article">
            <span class="row-leftBase" :class="colorAuto(item.categoryName)">{{
              item.categoryName
            }}</span>
            <span class="row-middle">{{ item.title }}</span>
            <span class="row-right">{{ item.createdDt | dataFix }}</span>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="card-container">
      <div class="card-top">
        <svg
          class="icon"
          style="
            padding-top: 0.1rem;
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5264"
        >
          <path
            d="M958.0544 96.8704v841.728h-888.832v-841.728h888.832m26.624-51.2h-942.08c-13.5168 0-24.576 11.0592-24.576 24.576v894.976c0 13.5168 11.0592 24.576 24.576 24.576h942.08c13.5168 0 24.576-11.0592 24.576-24.576v-894.976c0-13.7216-11.0592-24.576-24.576-24.576z"
            p-id="5265"
          ></path>
          <path
            d="M184.7296 517.7344H432.128c12.9024 0 23.552-10.6496 23.552-23.552V229.7856c0-12.9024-10.6496-23.552-23.552-23.552H184.7296c-12.9024 0-23.552 10.6496-23.552 23.552v264.3968c0.2048 12.9024 10.6496 23.552 23.552 23.552z m25.6-262.5536h196.1984v213.4016h-196.1984V255.1808zM577.3312 378.6752h259.072c16.1792 0 29.4912-13.312 29.4912-29.2864s-13.312-29.2864-29.4912-29.2864H577.3312c-16.1792 0-29.4912 13.312-29.4912 29.2864s13.312 29.2864 29.4912 29.2864zM836.4032 605.7984H190.6688c-16.1792 0-29.4912 13.312-29.4912 29.2864s13.312 29.2864 29.4912 29.2864h645.7344c16.1792 0 29.4912-13.312 29.4912-29.2864s-13.312-29.2864-29.4912-29.2864zM836.4032 770.2528H190.6688c-16.1792 0-29.4912 13.312-29.4912 29.2864 0 16.1792 13.312 29.2864 29.4912 29.2864h645.7344c16.1792 0 29.4912-13.312 29.4912-29.2864 0-16.1792-13.312-29.2864-29.4912-29.2864z"
            p-id="5266"
          ></path>
        </svg>
        <strong class="card-title">英雄列表</strong>
        <svg
          class="icon"
          style="
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6935"
        >
          <path
            d="M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
            p-id="6936"
          ></path>
        </svg>
      </div>
      <div class="card-navbar">
        <div @click="$refs.heroSwiper.swiper.slideTo(i)" class="cnb-item" :class="{ active: heroActive == i }" v-for="(item,i) in heroRes" :key="item.name">{{ item.name }}</div>
      </div>
      <swiper  :options="heroSwiper" ref="heroSwiper"  @slide-change="() => (heroActive = $refs.heroSwiper.swiper.realIndex)">
          <swiper-slide v-for="items in heroRes">
            <div class="heroSwiper">
               <router-link :to="`heroes/${item._id}`" tag="div" v-for="item in items.heroList" style="width:20%;text-align:center;padding:0.5rem;box-sizing: border-box;">
              <img :src="item.avatar" alt="" style="width:100%;"/>
              <div class="">{{ item.name }}</div>
               </router-link>
            </div>
           
          </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import MySwiper from "./MySwiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import dayjs from "dayjs";
export default {
  created() {
    this.fetchNewsCats();
  },
  methods: {
    siwperControl(i) {
      this.$refs.activeSwiper.swiper.slideTo(i);
    },
    async fetchNewsCats() {
      // 一次获取所有文章navbar和文章标题的数据接口
      const res = await this.$http.get("news/list");
      this.newCats = res.data;
      const heroRes = await this.$http.get("heroes/list");
      this.heroRes = heroRes.data;
    },
    colorAuto(kind) {
      switch (kind) {
        case "赛事":
          return "yellow-kind";
        case "新闻":
          return "blue-kind";
        case "活动":
          return "red-kind";
        case "公告":
          return "yellow-kind";
      }
    },
  },
  data() {
    return {
      heroSwiper: {
        autoHeight: true,
      },
      //  存放所有文章navbar和文章标题
      newCats: [],
      heroActive:0,
      active: 0,
      heroRes: [],
    };
  },
  computed: {},
  components: {
    MySwiper,
    swiper,
    swiperSlide,
  },
  filters: {
    dataFix(val) {
      return dayjs(val).format("MM/DD");
    },
  },
};
</script>
<style lang="scss" scoped>
$setColor1: #f09a37;
$setColor1-2: #e99b39;
$setColor3: #fff;
$setColor3-1: #d4d9de;
$setColor3-2: #f9f9f9;
$setColor4: #0098ad;
$setColor5: #ff070c;


  
  .middle-container {
    border-top: 1px solid $setColor3-1;
    border-bottom: 1px solid $setColor3-1;
    padding-top: 1rem;
    margin-top: 1rem;
    color: #343440;
    text-align: center;
    background-color: $setColor3;
    .icon-container {
      display: flex;
      flex-wrap: wrap;
      .icon-item {
        width: 25%;
        border-right: 1px solid $setColor3-1;
        box-sizing: border-box;
      }
    }

    .fold {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 0.9231rem;
      background-color: $setColor3-2;
    }
  }
  .card-container {
    margin-top: 1rem;
    padding: 1rem;
    background-color: $setColor3;
    .heroSwiper {
      display: flex;
      flex-wrap: wrap;
      
    }
    .card-top {
      display: flex;
      padding-bottom: 1rem;
      border-bottom: solid 1px $setColor3-1;
      margin-bottom: 0.72rem;
      .card-title {
        font-size: 1.2308rem;
        flex: 1;
        padding-left: 0.5rem;
      }
    }
    .card-navbar {
      display: flex;
      justify-content: space-between;
      padding-bottom: 3px;
      .cnb-item {
        &.active {
          color: $setColor1-2;
          border-bottom: 3px solid $setColor1-2;
        }
      }
    }
    .card-content {
      margin-top: 0.9rem;
      .card-swiper {
        .row-article {
          display: flex;
          margin-bottom: 0.9rem;
          .row-leftBase {
            font-size: 0.75rem;
            border: transparent 1px solid;
            border-radius: 0.15rem;
            padding: 0.06rem 0.12rem;
          }
          .yellow-kind {
            border-color: $setColor1;
            color: $setColor1;
          }
          .red-kind {
            border-color: $setColor5;
            color: $setColor5;
          }
          .blue-kind {
            border-color: $setColor4;
            color: $setColor4;
          }
          .row-middle {
            flex: 1;
            font-size: 0.84rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .row-right {
            font-size: 0.75rem;
          }
        }
      }
    }
  }

</style>