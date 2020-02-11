<template>
<div class="slidemobile">
  <div class="container">
    <div class="row justify-content-left">
      <div class="col-lg-6 col-md-8 pt-5">
        <h1 class="mt-5 text-content imo-text-07" style="text-shadow: white 0.1em 0.1em 0.2em"> Abra uma conta <span class="text-titulo imo-text-02">Imobanco</span> e tenha 
        <span class="text-titulo imo-text-02"> Gestão financeira </span>para o seu negócio</h1>
      </div>
    </div>
  </div>

</div>
<!-- <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
     
      <b-carousel-slide class="slidemobile"
        img-src="~assets/image/bannerindex-boleto.jpg"
      ></b-carousel-slide>

     
      <b-carousel-slide 
        img-src="~assets/image/bannerindex-cobrancas.jpg"> 
      </b-carousel-slide>

     
      <b-carousel-slide 
      img-src="~assets/image/bannerindex-ecommerce.jpg">
      </b-carousel-slide>
    </b-carousel> -->
 
</template>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style>
/* .box {
  width: 180px;
  height: 400px;
  background-color: #212121;
  position: absolute;
  top: 100px;
  left: 210px;
} */
.slidemobile{
        height: 500px;
        background-image: url("~assets/image/bannerindexslide.jpg") !important;
        background-size: 100% auto cover;
        background-position: center;
        background-repeat: no-repeat;
}
  
</style>