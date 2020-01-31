<template>
	<section class="chargesimobanco imobanco-color-05" :style="cssMedia"  >
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<h3 class="mt-5 imo-text-07 text-subtitulo text-center">COMO SE DÁ A RECUPERAÇÃO DE CRÉDITO <span class="font-weight-bold">(ACORDOS) NO IMOBANCO?</span></h3>
					<p class="text-content imo-text-07 text-center">Durante as etapas do processo de cobrança, seus créditos estarão sendo monitorados e tratados por nossos gerentes de contas e operadores, sendo realizada diversas interações com seus clientes, como:</p>	
				</div>
				<div class="col-lg-3">
					<img src="~assets/image/charges-contact.jpg" alt="" class="img-fluid border-acordos rounded">
					<p class="text-content imo-text-09">Contatos telefônicos e digitais para informações, instruções e negociações</p>

					
<!-- 					
					<p class="text-content imo-text-09"><span class="icon-text mr-5"><i class="fas fa-sms"></i></span>SMS</p>
					
					
					
					<p class="text-content imo-text-09"><span class="icon-text mr-5"><i class="fas fa-envelope"></i></span>Email</p>

					
					
					<p class="text-content imo-text-09"><span class="icon-text mr-5"><i class="fas fa-file-audio"></i></span>Mensagens gravadas de áudio</p>

					<p class="text-content imo-text-09"><span class="icon-text mr-5"><i class="fas fa-exclamation-circle"></i></span>Notificação de cobrança</p>

										
					<p class="text-content imo-text-09"><span class="icon-text mr-5"><i class="fas fa-file-upload"></i></span>Reemissão de títulos</p>

										
					<p class="text-content imo-text-09"><span class="icon-text mr-5"><i class="fas fa-file-alt"></i></span>Confecção de confissões de dívidas</p> -->

				</div>

				<div class="col-lg-3">
					<img src="~assets/image/charges-contact.jpg" alt="" class="img-fluid border-acordos rounded">
					<p class="text-content imo-text-09">Contatos telefônicos e digitais para informações, instruções e negociações</p>
				</div>

				<div class="col-lg-3">
					<img src="~assets/image/charges-contact.jpg" alt="" class="img-fluid border-acordos rounded">
					<p class="text-content imo-text-09">Contatos telefônicos e digitais para informações, instruções e negociações</p>
				</div>

				<div class="col-lg-3">
					<img src="~assets/image/charges-contact.jpg" alt="" class="img-fluid border-acordos rounded">
					<p class="text-content imo-text-09">Contatos telefônicos e digitais para informações, instruções e negociações</p>
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
           // backgroundImage: `url(${require('@/assets/image/asfalt-light.png')})`
        }
      }
    }
  }
  
</script>


<style>
	.border-acordos{
		border: 4px solid #ffffff;
	}
	.chargesimobanco{
		padding-top: 20px;
		padding-bottom: 20px;
		/*background: rgb(4,95,170);
	    background: -webkit-linear-gradient(left, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: -o-linear-gradient(left,  rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: linear-gradient(to right, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);*/
	}
</style>