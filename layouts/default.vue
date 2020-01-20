<template>
  <div>
    <navbar />
    <nuxt />
     <media />
    <footer-index />


  </div>
</template>

 
<script>
  import Navbar from '@/components/Navbar.vue'
  import Media from '@/components/index/media/Media.vue'
  import FooterIndex from '@/components/index/footer/FooterIndex.vue'

  export default {
  components: {
    Navbar,
    Media,
    FooterIndex
  }
}
</script>




<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


.solucoes{
        background-image: url("../assets/image/bgsolucoes.jpg"); 
        background-size: 100% auto cover;
        background-position: center top;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

.servicos{
       /* background-image: url("../assets/image/bgservicos.jpg");*/
        background-size: 100% auto cover;
        background-position: center top;
        background-repeat: no-repeat;
    }
.roudedtop{
    border-radius: 30px 30px 0px 30px;
  }
</style>
