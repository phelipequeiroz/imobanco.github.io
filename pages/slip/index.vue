<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
    <slip-slide/>
    <slip-phrase/>
    <slip-strategy/>
    <slip-management/>
    <slip-plans/>
    <slip-four/>
    
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import SlipSlide from '@/components/slip/SlipSlide.vue'
import SlipPhrase from '@/components/slip/SlipPhrase.vue'
import SlipStrategy from '@/components/slip/SlipStrategy.vue'
import SlipManagement from '@/components/slip/SlipManagement.vue'
import SlipPlans from '@/components/slip/SlipPlans.vue'
import SlipFour from '@/components/slip/SlipFour.vue'

export default {
  components: {
   
   SlipSlide,
   SlipPhrase,
   SlipStrategy,
   SlipManagement,
   SlipPlans,
   SlipFour

  
    
  }
}
</script>

<style>

</style>
