<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
    <ecommerce-top />
    <ecommerce-text />
    <ecommerce-content />
    <ecommerce-grafic />
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import EcommerceTop from '@/components/ecommerce/EcommerceTop.vue'
import EcommerceText from '@/components/ecommerce/EcommerceText.vue'
import EcommerceContent from '@/components/ecommerce/EcommerceContent.vue'
import EcommerceGrafic from '@/components/ecommerce/EcommerceGrafic.vue'


export default {
  components: {
   
   // SlidePage,
   EcommerceTop,
   EcommerceText,
   EcommerceContent,
   EcommerceGrafic
   
    
  }
}
</script>

<style>

</style>
