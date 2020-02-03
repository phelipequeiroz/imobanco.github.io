<template>
	<section class="imobanco-color-07">
		<div class="container">
			<div class="row justify-content-center pt-5 pb-5">
				<div class="col-lg-8 text-center">
					<h4 class="text-content imo-text-06">Escolha um dos planos exclusivos adequados ao tamanho e necessidade dos seus negócios.</h4>
				</div>

				<div class="col-lg-12">
					    
					 <slip-card />
								    			  
					</div>
				</div>
			</div>
	</section>
</template>

<script>
	import SlipCard from '@/components/slip/SlipCard.vue'

	export default {
  	components: {
   
   // SlidePage,
   SlipCard

    
  }
}
</script>

<style>
	.border-table{
		border: 1px solid #ffffff;
		border-radius: 30px !important;
	}
</style>