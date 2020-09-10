<template>
    <section class="">
        <div class="container servicoestiloright">
            <div class="row">
                <div class="col-lg-6 pt-5">
                     <img src="~/assets/image/cartoes.png" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-10 pt-5 pb-5">
                    
                    <titulo-servicos 
                    class="text-primary"
                    icon="edit"
                    titulo="Assinaturas por cartão de crédito e débito"
                    resumo=""/>

                    <div class="row">
                        <div class="col-lg-6">
                           <texto-detalhe
                            class="text-primary"
                            icon="lens"
                            texto="Crie planos de assinatura compatíveis com seu negócio." />
                        </div>
                        <div class="col-lg-6">
                           <texto-detalhe
                            class="text-primary"
                            icon="lens"
                            texto="Cobre de forma recorrente seus clientes através de cartões de crédito e débito." />
                        </div>
                        <div class="col-lg-6">
                           <texto-detalhe
                            class="text-primary"
                            icon="lens"
                            texto="Se o cartão de crédito recusar por qualquer motivo, nossos gerentes vão comunicar o cliente para solucionar o problema." />
                        </div>
                        <div class="col-lg-6">
                           <texto-detalhe
                            class="text-primary"
                            icon="lens"
                            texto="Caso a assinatura de seu cliente ------ ABERTO" />
                        </div>
                         <div class="col-lg-6">
                            <a href="https://blog.imobanco.com.br/" target="_blank" class="mt-2 btn btn-outline-dark btn-radius" role="button">Acesse <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
   import TituloServicos from '~/components/index/servicos/TituloServicos.vue'
   import TextoDetalhe from '~/components/index/servicos/TextoDetalhe.vue'
    export default {
        components: {
        TituloServicos,
        TextoDetalhe
  }
    }
</script>

<style lang="scss" scoped>

.servicoestiloright{
    background-image: url("~assets/image/arrowright-blue.png");
    background-repeat: no-repeat;
    background-position: top right;
    // border-right: 7px #21e6c1 solid;
    // border-radius: 30px 0px 30px 0px;
    // border-bottom: 7px #21e6c1 solid;
}

</style>