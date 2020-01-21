<template>
	<section class="chargesagreement imobanco-color-07" :style="cssMedia"  >
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<h5 class="mt-5 imo-text-06 text-subtitulo text-center">TODOS OS ACORDOS PODEM SER PAGOS EM BOLETOS OU PARCELADOS NO CARTÃO DE CRÉDITO</h5>
					
					
				</div>
				<div class="col-lg-8 mt-3">
					
					<p class="text-content imo-text-06"><span class="icon-text mr-2"><i class="fas fa-clock"></i></span>Economize tempo e dinheiro com o Imobanco</p>

					
					
					<p class="text-content imo-text-06"><span class="icon-text mr-2"><i class="fas fa-sms"></i></span>Cobrança feita por especialistas. </p>
					
					
					
					<p class="text-content imo-text-06"><span class="icon-text mr-2"><i class="fas fa-envelope"></i></span>Entenda as etapas da sua cobrança</p>

					
				</div>

				<div class="col-lg-6">
										
					
				</div>
			</div>
		</div>
	</section>
</template>


<script>
  export default {
  components: {

  },
  data() {
      return {
        cssMedia: {
          // backgroundImage: `url(${require('@/assets/image/connected.png')})`
           backgroundImage: `url(${require('@/assets/image/asfalt-light.png')})`
        }
      }
    }
  }
  
</script>


<style>
	.chargesagreement{
		padding-top: 20px;
		padding-bottom: 20px;
		background: rgb(4,95,170);
	   /* background: -webkit-linear-gradient(left, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: -o-linear-gradient(left,  rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: linear-gradient(to right, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);*/
	}
</style>