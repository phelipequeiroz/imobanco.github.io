<template>
	<section class="imobanco-color-07">
		<div class="container">
			<div class="row justify-content-center pt-5 pb-5">
				<div class="col-lg-8 text-center">
					<h2>Escolha um dos planos exclusivos adequados ao tamanho e necessidade dos seus negócios.</h2>
				</div>

				<div class="col-lg-12">
					    
					  <slip-table />
								    			  
					</div>
				</div>
			</div>
	</section>
</template>

<script>
	import SlipTable from '@/components/slip/SlipTable.vue'

	export default {
  	components: {
   
   // SlidePage,
   SlipTable

    
  }
}
</script>

<style>
	.border-table{
		border: 1px solid #ffffff;
		border-radius: 30px !important;
	}
</style>