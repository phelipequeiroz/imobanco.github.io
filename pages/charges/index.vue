<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
    <charges-slide />
    <charges-content />
    <charges-imobanco />
    <charges-agreement />
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import ChargesSlide from '@/components/charges/ChargesSlide.vue'
import ChargesContent from '@/components/charges/ChargesContent.vue'
import ChargesImobanco from '@/components/charges/ChargesImobanco.vue'
import ChargesAgreement from '@/components/charges/ChargesAgreement.vue'
// import FooterIndex from '@/components/index/footer/FooterIndex.vue'

export default {
  components: {
   
   // SlidePage,
   ChargesSlide,
   ChargesContent,
   ChargesImobanco,
   ChargesAgreement
    
  }
}
</script>

<style>

</style>
