<template>
	<section class="imobanco-color-05">
		<div class="container">
		<div class="row pt-4 pb-4">
            
            <div class="col-lg-12 text-center mb-4">
                <h2 class="mt-5 imo-text-01 text-titulo">BLOG</h2>
                <p class="imo-text-01 text-content">Oferecemos uma gama completa de serviços para
gestão financeira do seu negócio</p>
            </div>

			<div class="col-lg-4">
                <img src="~/assets/image/blog-home.jpg" alt="" class="img-fluid">
                <blogitem
                title="A voltado crescimento do mercado imobiliário"
                content="A perspectiva para a retornada do crescimento do setor imobiliário no Brasil em 2019 é bastante promissora,..."
                />
			</div>
            <div class="col-lg-4">
                <img src="~/assets/image/blog-fortaleza.jpg" alt="" class="img-fluid">
                <blogitem 
                title="Imobanco participará da franchise4u"
                content="No próximo dia 21 de Março,  acontecera a feira FRANCHISE4U na cidade de Fortaleza-CE,  que reunirá importantes ..."
                />
            </div>
            <div class="col-lg-4">
                <img src="~/assets/image/blog-negocios.jpg" alt="" class="img-fluid">
                <blogitem 
                title="Como escolher uma franquia de sucesso"
                content="Nos últimos anos, no Brasil, o setor de Franchising tem crescido exponencial- mente a cada ano. Segundo a ABF..."
                />
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