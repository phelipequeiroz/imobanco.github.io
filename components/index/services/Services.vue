<template>

<section class="imobanco-color-05 pt-3 pb-3">
		<div class="container">
			<div class="row justify-content-center pt-2 pb-2 mt-2 mb-2">
			<div class="col-lg-12 text-center mb-2">
         
				<h2 class="mt-5 imo-text-08 text-titulo">SERVIÇOS</h2>
				<p class="imo-text-07 text-subtitulo">Oferecemos uma gama completa de serviços para
gestão financeira do seu negócio</p>
			</div>
      </div>
            <div class="row justify-content-center imobanco-color-06 row-radius">
          
                <div class="col-xs-12 col-sm-6 col-lg-4 p-0">
                 
                    <b-card style="border: none !important;" class="m-0 p-0">
                       
                          <content-servicos
                                          image="~assets/image/cobrancasicon.png"
                                          title="BOLETOS"
                                          content="Emita, Registre e gerencie seus boletos. Tudo de forma simplificada e sem burocracia. Com o Imobanco você tem tudo isso ao seu alcance na palma da sua mão." />
                   </b-card>
                 
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 p-0">
                   
                   <b-card style="border: none !important;" class="m-0 p-0">
                        <content-servicos
                                          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSBrIP1NqAASraNWDnIg8rqy1Rm4aO86Q8kW8ex6m3JovbTbIC"
                                          title="COBRANÇAS"
                                          content="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores. Isso significa assertividade e otimização nos esforços de cobrança." />
                   </b-card>
                 
                  </div>

                  <div class="col-xs-12 col-sm-6 col-lg-4 p-0">
                   
                   <b-card style="border: none !important;" class="m-0 p-0">
                      
                          <content-servicos
                                          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSBrIP1NqAASraNWDnIg8rqy1Rm4aO86Q8kW8ex6m3JovbTbIC"
                                          title="E-COMMERCE"
                                          content="Sua loja 100% integrada a gestão inteligente de recebimentos e cobrança Imobanco. Sem tarifas de manutenção e com você no controle de tudo." />
                   </b-card>
                 
                  </div>
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
.row-radius{
  border-radius: 30px 2px 30px 2px;
}    
    
   
</style>
