<template>
  <div class="container-fluid">
    <div>
		<headerpage />
		<chargescontent />
		<charges-imobanco />
    </div>
  </div>
</template>

<script>

import Headerpage from '@/components/pages/Headerpage.vue'
import Chargescontent from '@/components/cobrancas/Chargescontent.vue'
import ChargesImobanco from '@/components/cobrancas/ChargesImobanco.vue'
// import FooterIndex from '@/components/index/footer/FooterIndex.vue'

export default {
  components: {
   
   Headerpage,
   Chargescontent,
   ChargesImobanco
    
  }
}
</script>

<style>

</style>
