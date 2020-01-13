<template>

<section class="services imobanco-color-05">
		<div class="container">
			<div class="row pt-4 pb-4">
			<div class="col-lg-12 text-center mb-4">
				<h2 class="mt-5 imo-text-01 text-titulo">SERVIÇOS</h2>
				<p class="imo-text-01 text-content">Oferecemos uma gama completa de serviços para
gestão financeira do seu negócio</p>
			</div>
            
            <div class="col-lg-4 text-center">
                <content-servicos
                    icone="fas fa-dollar-sign"
                    title="BOLETO"
                    content="Emita, registre e gerencie seus boletos. Tudo de forma simplificada e sem burocracia. Com o imobanco você tem tudo isso ao seu alcance na palma da sua mão" />
			</div>
            
            <div class="col-lg-4 text-center">
                <content-servicos
                    icone="fas fa-user-alt" 
                    title="COBRANÇAS"
                    content="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores. Isso significa assertividade e otimização nos esforços de cobrança " />
			</div>

            <div class="col-lg-4 text-center">
                <content-servicos
                    icone="fas fa-shopping-cart" 
                    title="E-COMMERCE" 
                    content="Sua loja 100% integrada a gestão inteligente de recebbimentos e cobranças imobanco. Sem tarifasdemanutenção e com você no controle de tudo." />
			</div>

			<div class="col-lg-12 text-center">
				<h5 class="mt-5 imo-text-07 text-subtitulo text-center font-italic">"Mais importante que te dar tecnologia é promover a solução de teus problemas!"</h5>
				<p class="imo-text-07 font-italic">Fernando Colares - CEO Imobanco</p>
			</div>


			</div>
		</div>
	</section>

</template>
<script>

import ContentServicos from '~/components/ContentServicos.vue'

export default {
  components: {
    ContentServicos
  }
}
</script>

<style>

</style>
