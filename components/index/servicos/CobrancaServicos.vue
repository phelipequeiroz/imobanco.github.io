<template>
    <section class="servicoesbg">
        <div class="container servicoestiloright pb-5">
            <div class="row">
                 <div class="col-lg-6">
                      <!-- <img src="~/assets/image/muckup-01.png" alt="" class="img-fluid"> -->
                 </div>
                <div class="col-lg-6 col-md-6 col-sm-10 pt-5 pb-5">
                    
                    <titulo-servicos
                    class="text-white"
                    icon="record_voice_over"
                    titulo="Cobrança"
                    resumo="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores."/>

                    <div class="row">
                        <div class="col-lg-12">
                            <h5 class="text-titulo text-white p-0 m-0">Administrativa</h5>
                        </div>
                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-white"
                        icon="lens"
                        exclusivo="Recurso exclusivo Imobanco"
                        texto="Equipe de mediação administrativa, focada em acordos." />
                        </div>

                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-white"
                        icon="lens"
                        exclusivo=""
                        texto="Cobranças e notificações via e-mail, WhatsApp e SMS" />
                        </div>

                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-white"
                        icon="lens"
                        exclusivo="Recurso exclusivo Imobanco"
                        texto="Prazo automático pós vencimento para uso de mesmo boleto." />
                        </div>

                        <div class="col-lg-6">
                        <texto-detalhe
                        class="text-white"
                        icon="lens"
                        exclusivo="Recurso exclusivo Imobanco"
                        texto="No Imobanco todos os pagadores são avaliados com pontuação de 0 a 100 pela Pontualidade (pagamentos em dia) e Efetividade (pagamentos feitos)." />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                                                
                        <div class="col-lg-4">
                            <h5 class="text-titulo text-white p-0 m-0">Extrajudicial
                                <hr>
                            </h5>
                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo=""
                            texto="Fazemos a recuperação de suas cobranças vencidas a mais de 30 dias." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Operadores de cobrança preparados e treinados para chegar ao acordo que você necessita." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Emissão de notificação extrajudicial de débito, em data configurada no sistema, por e-mail, whatsapp, Telegram, SMS e correios." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Controlamos o acordo e transformamos a dívida velha numa nova operação de crédito cobrável." />

                        </div>

                         <div class="col-lg-4">
                            <h5 class="text-titulo text-white p-0 m-0">Judicial
                                <hr>
                            </h5>
                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Não perca um centavo de seus créditos! Conte com nossa rede de advogados integrados." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Acione uma tomada de serviço entre os advogados que dispomos e contrate-os para recuperar seus valores judicialmente." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Administração dos valores ajustados judicialmente, transformando o acordo judicial em um novo “contrato” gerador de fluxo de caixa." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Split automático de pagamentos entre você e o advogado contratado, permitindo que cada um receba automaticamente o valor justo, quando da parcela quitada." />
                        </div>

                        <div class="col-lg-4">
                            <h5 class="text-titulo text-white p-0 m-0">Pague suas Contas
                                <hr>
                            </h5>
                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo=""
                            texto="Use seu saldo para pagamento de qualquer cobrança ou conta de consumo." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo=""
                            texto="Transfira o saldo da sua conta online para seu banco." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Receba na sua conta Imobanco os créditos de boletos, e-commerce, cobranças administrativas, extrajudiciais e judiciais." />

                            <texto-detalhe
                            class="text-white"
                            icon="lens"
                            exclusivo="Recurso exclusivo Imobanco"
                            texto="Pague fornecedores através do Imobanco, transferindo seu recurso para outros usuários cadastrados." />

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
    background-image: url("~assets/image/arrowright-cinza.png");
    background-repeat: no-repeat;
    background-position: top right;
    // border-right: 7px #21e6c1 solid;
    // border-radius: 30px 0px 0px 0px;
    
}

.servicoesbg{
    background-image: url("~assets/image/bgsolucoes.jpg");
    background-color: #005ebe;
    background-size: 100% auto cover;
    background-position: center center;
    // border-right: 7px #21e6c1 solid;
    // border-radius: 30px 0px 0px 0px;
    
}

</style>