<template>
	<section class="imobanco-color-05">
		<div class="container">
			<div class="row justify-content-center pt-3 pb-3">
				<div class="col-lg-12 text-center mb-4">
                <h2 class="mt-5 imo-text-01 text-titulo">DEPOIMENTOS</h2>
                <p class="imo-text-01 text-content">Veja o depoimento de quem usa imobanco na sua empresa</p>
            </div>
				<card-depoimento />
			
			</div>
		</div>
	</section>
</template>

<script>
import CardDepoimento from '@/components/index/depoimento/CardDepoimento.vue'


export default {
  components: {
    CardDepoimento

  }
  
}
	
</script>

<style>
	
</style>