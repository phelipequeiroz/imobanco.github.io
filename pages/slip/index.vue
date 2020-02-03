<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
    <slip-slide/>
    <slip-strategy/>
    <slip-management/>
    <slip-plans/>
    
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import SlipSlide from '@/components/slip/SlipSlide.vue'
import SlipStrategy from '@/components/slip/SlipStrategy.vue'
import SlipManagement from '@/components/slip/SlipManagement.vue'
import SlipPlans from '@/components/slip/SlipPlans.vue'

export default {
  components: {
   
   SlipSlide,
   SlipStrategy,
   SlipManagement,
   SlipPlans

  
    
  }
}
</script>

<style>

</style>
