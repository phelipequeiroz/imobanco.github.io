<template>
	<section class="slipstrategy imobanco-color-09" :style="cssMedia" >
		<div class="container">
			<div class="row pt-5 pb-5">
				<div class="col-lg-12 mt-5 mb-5 text-center">
					<h3 class="mt-2 imo-text-06 text-subtitulo">Reduza a complexidade da sua <span class="font-weight-bold">gestão de recebimentos.</span></h3>
					<h5 class="imo-text-06 text-content">Emita e organize seus boletos de forma estratégica através de dados e gráficos em tempo real.</h5>
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
           backgroundImage: `url(${require('@/assets/image/bgstrategy.jpg')})`
        }
      }
    }
  }
</script>

<style>
.slipstrategy{
		background-image: url("~assets/image/bgstrategy.jpg");
        background-size: 100% auto cover;
        background-position: center top;
        background-repeat: no-repeat;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
</style>