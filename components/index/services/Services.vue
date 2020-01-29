<template>

<section class="imobanco-color-06 pt-3 pb-3">
		<div class="container">
			<div class="row justify-content-center pt-2 pb-2 mt-2 mb-2">
            <sequential-entrance>
			<div class="col-lg-12 text-center mb-2">
				<h2 class="mt-5 imo-text-08 text-titulo">SERVIÇOS</h2>
				<p class="imo-text-07 text-subtitulo">Oferecemos uma gama completa de serviços para
gestão financeira do seu negócio</p>
			</div>
            </sequential-entrance>
            </div>
            <div class="row justify-content-center">
                
                <div class="col-xs-12 col-sm-6 col-lg-4">
                   <b-card class="p-0">
                        <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img src="~assets/image/cobrancasicon.png" class="rounded-0 img-fluid imobanco-color-08"></b-card-img>
                        </b-col>
                        <b-col md="8">
                            <b-card-body>
                           <content-servicos
                                          title="COBRANÇAS"
                                          content="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores. Isso significa assertividade e otimização nos esforços de cobrança" />
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </div>
            

                <!-- Colun Cobrança -->

               <div class="col-xs-12 col-sm-6 col-lg-4">
                   <b-card class="p-0">
                        <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img src="~assets/image/cobrancasicon.png" class="rounded-0 img-fluid imobanco-color-08"></b-card-img>
                        </b-col>
                        <b-col md="8">
                            <b-card-body>
                           <content-servicos
                                          title="COBRANÇAS"
                                          content="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores. Isso significa assertividade e otimização nos esforços de cobrança" />
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </div>

                <!-- Colun 3 E-commerce -->

               <div class="col-xs-12 col-sm-6 col-lg-4">
                   <b-card class="p-0">
                        <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img src="~assets/image/cobrancasicon.png" class="rounded-0 img-fluid imobanco-color-08"></b-card-img>
                        </b-col>
                        <b-col md="8">
                            <b-card-body>
                           <content-servicos
                                          title="COBRANÇAS"
                                          content="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores. Isso significa assertividade e otimização nos esforços de cobrança" />
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </div>

            </div>
            

            <div class="row justify-content-center mt-5">
                <div class="col-lg-12 text-center">
                <h5 class="mt-2 imo-text-08 text-subtitulo text-center font-italic">"Mais importante que te dar tecnologia é promover a solução de teus problemas!"</h5>
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
.img-area{
    background-color: #304ffe;
}
.card-top{
 border-top: 6px solid #304ffe !important;
 border-radius: 30px 30px 0 0;
}
    
    
   
</style>
