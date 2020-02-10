<template>
	<section class="imobanco-color-05">
    <div class="container">
		<div class="row pt-4 pb-4">
            
            <div class="col-lg-12 text-center mb-4">
                <h2 class="mt-5 imo-text-01 text-titulo">BLOG</h2>
                <p class="imo-text-01 text-content">Oferecemos uma gama completa de serviços para
gestão financeira do seu negócio</p>
            </div>

			<div class="col-lg-4 col-md-6 text-center">
                <img src="~/assets/image/blog-home.jpg" alt="" class="img-fluid">
                <a href="https://blog.imobanco.com.br/2019/08/05/a-volta-do-crescimento-do-mercado-imobiliario/" target="_blank"><h4 class="imo-text-08 text-subtitulo mt-0 mb-0">A voltado crescimento do mercado imobiliário</h4></a>
                <p class="imo-text-01 text-justify text-content mt-0">A perspectiva para a retornada do crescimento do setor imobiliário no Brasil em 2019 é bastante promissora,...</p>
                <!-- <blogitem
                title="A voltado crescimento do mercado imobiliário"
                content="A perspectiva para a retornada do crescimento do setor imobiliário no Brasil em 2019 é bastante promissora,..."
                /> -->
			</div>
            <div class="col-lg-4 col-md-6 text-center">
                <img src="~/assets/image/blog-fortaleza.jpg" alt="" class="img-fluid">
                <a href="https://blog.imobanco.com.br/2019/03/15/imobanco-participara-da-franchise4u-em-fortaleza-ce/" target="_blank"><h4 class="imo-text-08 text-subtitulo mt-0 mb-0">Imobanco participará da franchise4u</h4></a>
                <p class="imo-text-01 text-justify text-content mt-0">No próximo dia 21 de Março, acontecera a feira FRANCHISE4U na cidade de Fortaleza-CE, que reunirá importantes ...</p>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
                <img src="~/assets/image/blog-negocios.jpg" alt="" class="img-fluid">
                <a href="https://blog.imobanco.com.br/2019/08/19/como-escolher-uma-franquia-de-sucesso/" target="_blank"><h4 class="imo-text-08 text-subtitulo mt-0 mb-0">Como escolher uma franquia de sucesso</h4></a>
                <p class="imo-text-01 text-justify text-content mt-0">Nos últimos anos, no Brasil, o setor de Franchising tem crescido exponencial- mente a cada ano. Segundo a ABF...</p>
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