<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="main-swiper" >
        <swiper-slide>
          <img src="@/assets/images/03.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/02.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/01.jpeg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data(){
        return{
            swiperOptions: {
        pagination: {
    el: '.swiper-pagination',
    clickable :true,
  },loop:true
      }
        }
    },
    components: {
    swiper,
    swiperSlide
  }
}

</script>
<style lang="scss" scoped>
    
.main-swiper{
    .swiper-pagination{
    
    text-align: right;
  }
  img{
      width: 100%;
  }
  

}
</style>