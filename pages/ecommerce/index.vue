<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
    <ecommerce-top />
    <ecommerce-text />
    <ecommerce-content />
    <charges-agreement />
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import EcommerceTop from '@/components/ecommerce/EcommerceTop.vue'
import EcommerceText from '@/components/ecommerce/EcommerceText.vue'
import EcommerceContent from '@/components/ecommerce/EcommerceContent.vue'

import ChargesAgreement from '@/components/charges/ChargesAgreement.vue'
// import FooterIndex from '@/components/index/footer/FooterIndex.vue'

export default {
  components: {
   
   // SlidePage,
   EcommerceTop,
   EcommerceText,
   EcommerceContent,
   ChargesAgreement
    
  }
}
</script>

<style>

</style>
