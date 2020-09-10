<template>
    <section class="">
        <div class="container servicoestiloleft">
            <div class="row">
                 
                <div class="col-lg-6 col-md-6 col-sm-10 pt-5 pb-5">
                    
                    <titulo-servicos
                    class="text-primary"
                    icon="shopping_cart" 
                    titulo="E-commerce"
                    resumo="Economize tempo e dinheiro com a plataforma projetada para se adaptar ao seu
negócio."/>

                    <div class="row">
                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-primary"
                        icon="lens"
                        texto="Cadastre-se, crie sua loja virtual e comece a vender pela internet." />
                        </div>

                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-primary"
                        icon="lens"
                        texto="Adptada para o seu negócio" />
                        </div>
                        
                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-primary"
                        icon="lens"
                        texto="Fácil de usar" />
                        </div>

                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-primary"
                        icon="lens"
                        texto="Suporte 24x7" />
                        </div>
                        
                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-primary"
                        icon="lens"
                        texto="Centralize no Imobanco todas as necessidades para extrair mais resultados do seu negócio." />
                        </div>

                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-primary"
                        icon="lens"
                        texto="Responsivo e adequada para mecanismos de busca" />
                        </div>
                        <div class="col-lg-6">
                            <a href="https://blog.imobanco.com.br/" target="_blank" class="mt-2 btn btn-outline-light btn-radius" role="button">Acesse <i class="fas fa-angle-right"></i></a>
                        </div>
                        

                    </div>
                </div>
               <div class="col-lg-6">
                    <img src="~/assets/image/lojas.png" alt="" class="img-fluid">
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

.servicoestiloleft{
    background-image: url("~assets/image/arrowright-blue.png");
    background-repeat: no-repeat;
    background-position: top right;
    // border-left: 7px #21e6c1 solid;
    // border-radius: 0px 0px 0px 30px;
    // border-bottom: 7px #21e6c1 solid;
    
}

</style>