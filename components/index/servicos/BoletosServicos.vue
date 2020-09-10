<template>
    <section class="">
        <div class="container servicoestiloleft">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-10 pt-5 pb-5">
                    <titulo-servicos
                    class="text-white"
                     
                    titulo="Boletos"
                    resumo="A melhor solução do mercado brasileiro. Somos o seu novo MODAL FINANCEIRO."/>
                    <!-- icon="description" -->
                    <div class="row">
                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-white"
                        icon="lens"
                        texto="Emita boletos recorrentes e envie por e-mail gratuitamente." />
                        </div>

                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-white"
                        icon="lens"
                        texto="Acompanhe seu cliente - Visualize quando os e-mails são abertos" />
                        </div>

                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-white"
                        icon="lens"
                        texto="Nosso sistema enviará os lembretes de vencimento para seus clientes." />
                        </div>
                        
                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-white"
                        icon="lens"
                        texto="Pague somente os titulos recuperados." />
                        </div>

                        <div class="col-lg-6">
                            <a href="https://blog.imobanco.com.br/" target="_blank" class="mt-2 btn btn-outline-light btn-radius" role="button">Acesse <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-6">
                        <img src="~/assets/image/boletos.png" alt="" class="img-fluid">
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
.icon-index{
    width: 10px;
    height: 10px;
}
.servicoestiloleft{
    // border-left: 7px #21e6c1 solid;
    // border-radius: 0px 0px 0px 30px;
    // border-bottom: 7px #21e6c1 solid;
    
}

</style>