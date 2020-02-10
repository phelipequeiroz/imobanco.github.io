<template>
	<section class="chargesagreement imobanco-color-05" :style="cssMedia"  >
		<div class="container">
			<div class="row pt-5 pb-4">
				<div class="col-lg-6 col-md-12 border border-top-0 border-left-0 border-bottom-0 border-right-2 border-white">
					<h4 class=" imo-text-09 text-subtitulo">TODOS OS ACORDOS PODEM SER PAGOS EM <span class="font-weight-bold"> BOLETOS </span>OU PARCELADOS NO CARTÃO DE CRÉDITO</h4>
				</div>
				<div class="col-lg-2 col-md-4 text-center">
					<span class="icon-text imo-text-09"><i class="fas fa-clock"></i></span>
					<p class="text-content imo-text-09">Economize tempo e dinheiro com o Imobanco</p>
				</div>
				<div class="col-lg-2 col-md-4 text-center">
					<span class="icon-text imo-text-09"><i class="fas fa-sms"></i></span>
					<p class="text-content imo-text-09">Cobrança feita por especialistas. </p>
				</div>	
				<div class="col-lg-2 col-md-4 text-center">
					<span class="icon-text imo-text-09"><i class="fas fa-envelope"></i></span>
					<p class="text-content imo-text-09">Entenda as etapas da sua cobrança</p>
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