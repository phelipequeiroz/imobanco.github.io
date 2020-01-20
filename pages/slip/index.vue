<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
    <slip-phrase/>
    <slip-strategy/>
    <slip-management/>
    <slip-plans/>
    
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import SlipPhrase from '@/components/slip/SlipPhrase.vue'
import SlipStrategy from '@/components/slip/SlipStrategy.vue'
import SlipManagement from '@/components/slip/SlipManagement.vue'
import SlipPlans from '@/components/slip/SlipPlans.vue'

export default {
  components: {
   
   // SlidePage,
   SlipPhrase,
   SlipStrategy,
   SlipManagement,
   SlipPlans

  
    
  }
}
</script>

<style>

</style>
