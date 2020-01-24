<template>

<section class="imobanco-color-06 pt-3 pb-3">
		<div class="container">
			<div class="row justify-content-center pt-2 pb-2 mt-2 mb-2">
			<div class="col-lg-12 text-center mb-2">
				<h2 class="mt-5 imo-text-08 text-titulo">SERVIÇOS</h2>
				<p class="imo-text-07 text-subtitulo">Oferecemos uma gama completa de serviços para
gestão financeira do seu negócio</p>
			</div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-lg-4">
                    <div class="services-single">
                        <div class="content-area">
                           <div class="side-one">
                               <div class="card card-services">
                                   <div class="card-body text-center">
                                       <div class="img-area">
                                           <img src="~assets/image/boletoicon.png" class="iconservicos">
                                       </div>
                                       <content-servicos
                                        title="BOLETO"
                                        content="Emita, registre e gerencie seus boletos. Tudo de forma simplificada e sem burocracia. Com o imobanco você tem tudo isso ao seu alcance na palma da sua mão" />
                                   </div>
                               </div>
                           </div>

                           <div class="side-tow">
                               <div class="card card-services">
                                   <div class="card-body text-center">
                                       <content-servicos
                                        content="Com o imobanco você tem tudo isso ao seu alcance na palma da sua mão" />
                                   </div>
                               </div>
                           </div>

  
                        </div>
                    </div>
                </div>

                <!-- Colun Cobrança -->

                <div class="col-xs-12 col-sm-6 col-lg-4">
                    <div class="services-single">
                        <div class="content-area">
                           <div class="side-one">
                               <div class="card card-services">
                                   <div class="card-body text-center">
                                       <div class="img-area">
                                           <img src="~assets/image/cobrancasicon.png" class="iconservicos">
                                       </div>
                                        <content-servicos
                                          title="COBRANÇAS"
                                          content="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores. Isso significa assertividade e otimização nos esforços de cobrança" />
                                   </div>
                               </div>
                           </div>

                           <div class="side-tow">
                               <div class="card card-services">
                                   <div class="card-body text-center">
                                       <content-servicos
                                        content="Isso significa assertividade e otimização nos esforços de cobrança" />
                                   </div>
                               </div>
                           </div>
                           
  
                        </div>
                    </div>
                </div>

                <!-- Colun 3 E-commerce -->

                <div class="col-xs-12 col-sm-6 col-lg-4">
                    <div class="services-single">
                        <div class="content-area">
                           <div class="side-one">
                               <div class="card card-services">
                                   <div class="card-body text-center">
                                       <div class="img-area">
                                           <img src="~assets/image/cobrancasicon.png" class="iconservicos">
                                       </div>
                                       <content-servicos
                                        title="E-COMMERCE"
                                        content="Sua loja 100% integrada a gestão inteligente de recebbimentos e cobranças imobanco. Sem tarifas de manutenção e com você no controle de tudo." />
                                   </div>
                               </div>
                           </div>

                           <div class="side-tow">
                               <div class="card card-services">
                                   <div class="card-body text-center">
                                       <content-servicos
                                        content="Sem tarifas de manutenção e com você no controle de tudo." />
                                   </div>
                               </div>
                           </div>
                           
  
                        </div>
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

    .services-single{
        padding: 60px 0;
    }
    .card-services{
        border: none;
        background: rgb(2,190,240);
    background: -webkit-linear-gradient(rgba(2,190,240,1) 0%, rgba(0,76,167,1) 100%);
    background: -o-linear-gradient(rgba(2,190,240,1) 0%, rgba(0,76,167,1) 100%);
    background: linear-gradient(rgba(2,190,240,1) 0%, rgba(0,76,167,1) 100%);
    }
    .img-area{
        width: 80px;
        height: 80px;
        display: inline-block;
        overflow: hidden;
    }
    .iconservicos{
        width: 80px;
        height: 80px;
    }
    .services-single:hover .side-tow{
        transform: rotateY(0deg);
        border-radius: 5px;
    }
     .services-single:hover .side-one{
        transform: rotateY(180deg);
        border-radius: 5px;
    }
    .content-area{
        transform: perspective(1000px);
        transition: 1s;
        transform-style: preserve-3d;
        position: relative;
    }
    .side-one{
        position: relative;     
        transform: rotateY(0deg);
        z-index: 2;
        margin-bottom: 30px;
    }
    .side-tow{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #212121;     
        transform: rotateY(-180deg);
    }
    .side-one, .side-tow{
        backface-visibility: hidden;
        transition: 1s;
        transform-style: preserve-3d;
    }

    .side-one .card,
    .side-two .card{
        min-height: 220px;
    }

    /*.flipcard{
        background: rgb(2,190,240);
    background: -webkit-linear-gradient(rgba(2,190,240,1) 0%, rgba(0,76,167,1) 100%);
    background: -o-linear-gradient(rgba(2,190,240,1) 0%, rgba(0,76,167,1) 100%);
    background: linear-gradient(rgba(2,190,240,1) 0%, rgba(0,76,167,1) 100%);
    }
    .flipboletoback{
        background-image: url("~assets/image/boletoback.jpg");
        background-repeat: no-repeat;
    }
    .flipcobrancasback{
        background-image: url("~assets/image/cobrancas-back.jpg");
        background-size: 100% auto cover;
        background-repeat: no-repeat;
    }
    .flipecommerceback{
        background-image: url("~assets/image/ecommerce-back.jpg");
        background-repeat: no-repeat;
    }*/
    
   
</style>
