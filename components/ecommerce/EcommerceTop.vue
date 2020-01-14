<template>
	<section class="imobanco-color-08" :style="cssMedia">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h3 class="mt-5 mb-5 imo-text-07 text-content">Com o <span class="text-subtitulo">E-commerce Imobanco</span> você ganha sua loja na internet sem qualquer investimento, pagando uma taxa por transação, que varia de acordo com o volume de faturamento.</h3>
					
				</div>
				<div class="col-lg-6">
					<img src="~/assets/image/ecommercegirl.png" alt="" class="img-fluid">					
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
/*.chargesagreement{
		padding-top: 20px;
		padding-bottom: 20px;
		background: rgb(4,95,170);
	    background: -webkit-linear-gradient(left, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: -o-linear-gradient(left,  rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: linear-gradient(to right, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	}
	*/
</style>