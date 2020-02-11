<template>
	<section class="imobanco-color-05">
    <div class="container">
		<div class="row pt-4 pb-4">
            
            <div class="col-lg-12 text-center mb-4">
                <h2 class="mt-5 imo-text-01 text-titulo">BLOG</h2>
                <!-- <p class="imo-text-01 text-content">Oferecemos uma gama completa de serviços para
gestão financeira do seu negócio</p> -->
            </div>

			<div class="col-lg-4 col-md-6 text-center">
                <img src="~/assets/image/blogimobanco1.jpg" alt="" class="img-fluid">
                <a href="http://blog.imobanco.com.br/2020/02/11/tendencias-para-o-mercado-imobiliario-em-2020/" target="_blank"><h4 class="imo-text-08 text-subtitulo text-left mt-0 mb-0">Tendências para o mercado imobiliário em 2020</h4></a>
                <p class="imo-text-01 text-justify text-content mt-0">Como previsto ainda no segundo semestre de 2019, a economia brasileira timidamente cresceu, diminuindo a especulação e atraindo novos investidores.</p>
                <!-- <blogitem
                title="A voltado crescimento do mercado imobiliário"
                content="A perspectiva para a retornada do crescimento do setor imobiliário no Brasil em 2019 é bastante promissora,..."
                /> -->
			</div>
            <div class="col-lg-4 col-md-6 text-center">
                <img src="~/assets/image/blogimobanco2.jpg" alt="" class="img-fluid">
                <a href="https://blog.imobanco.com.br/2019/08/12/tecnologia-aplicada-ao-universo-imobanco/" target="_blank"><h4 class="imo-text-08 text-subtitulo text-left mt-0 mb-0">Tecnologia aplicada ao Universo Imobanco
</h4></a>
                <p class="imo-text-01 text-justify text-content mt-0">O termo Universo Imobanco surgiu para explicar o conjunto de departamentos que englobam o Imobanco: Recebíveis, Cobrança, Fomento e toda tecnologia aplicada...</p>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
                <img src="~/assets/image/blogimobanco3.jpg" alt="" class="img-fluid">
                <a href="https://blog.imobanco.com.br/2019/03/21/adiantamento-do-seus-recebiveis-entenda-as-vantagens/" target="_blank"><h4 class="imo-text-08 text-subtitulo text-left mt-0 mb-0">Adiantamento do seus recebíveis: Entenda as vantagens</h4></a>
                <p class="imo-text-01 text-justify text-content mt-0">Com a unica opção de ter seus recebíveis apenas no futuro, alguns empreendedores recorrem ao cheque especial...</p>
            </div>
            
        </div>
	</div>
	</section>
</template>

<script>
import Blogitem from '@/components/index/blog/Blogitem.vue'

export default {
  components: {
    Blogitem
  }
}
	
</script>

<style>
	
</style>