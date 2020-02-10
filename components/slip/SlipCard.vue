<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6">
                <div class="card-plans" id="reserva">
                    <h4 class="p-1 m-0 text-center text-subtitle imobanco-color-09 card-title imo-text-06">Reserva</h4>
                    <hr class="m-0 p-0" style=" border-bottom:2px solid #06cece">
                    <h1 class="p-0 m-0 text-center text-titulo"> <small style="font-size: 12px">R$</small>2,99</h1> 
                    <P class="p-0 m-0 text-center imo-text-07">A partir de 500 emissões</P>   
                    <hr class="m-0 p-0" style=" border-bottom:2px solid #06cece">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 button-solucoes" role="tab">
                        <b-button block href="#" v-b-toggle.accordion-0 variant="info" class="imobanco-color-06 border-0 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-06 mr-0"><i class="fas fa-chevron-circle-down"></i></span> 
                            Emissão de Títulos
                            </b-button>
                    </b-card-header>
                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-1 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-2"><i class="fas fa-chevron-circle-down"></i></span> 
                            Registro bancário
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">de título em conta bancária própria</p> </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-2 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-2"><i class="fas fa-chevron-circle-down"></i></span> 
                            Controle dos Títulos
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Emitidos, com acesso fulltime a plataforma web imobanco, sem custo adicional por usuarios. Crédito em conta dos valores recebidos.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                     <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-3 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Emissão de Comunicados
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Emissão</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Vencimento</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Lembrete</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Quitação</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <div class="text-center p-2">
                        <a href="https://t.me/imobancobot" target="_blank" class="btn btn-primary border-0 rounded-pill imobanco-color-07 text-content">assine</a>
                    </div>
                </div>
            </div>
            <!--  Card Business Plans -->
            <div class="col-lg-3 col-md-6">
                <div class="card-plans" id="business">
                    <h4 class="p-1 m-0 text-center text-subtitle imobanco-color-09 card-title imo-text-06">Business</h4>
                    <hr class="m-0 p-0" style=" border-bottom:2px solid #06cece">
                    <h1 class="p-0 m-0 text-center text-titulo"> <small style="font-size: 12px">R$</small>3,99</h1> 
                    <P class="p-0 m-0 text-center imo-text-07">A partir de 1 emissão</P>   
                    <hr class="m-0 p-0" style=" border-bottom:2px solid #06cece">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 button-solucoes" role="tab">
                        <b-button block href="#" v-b-toggle.accordion-0 variant="info" class="imobanco-color-06 border-0 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-06 mr-0"><i class="fas fa-chevron-circle-down"></i></span> 
                            Emissão de Títulos
                            </b-button>
                    </b-card-header>
                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-4 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-2"><i class="fas fa-chevron-circle-down"></i></span> 
                            Registro bancário
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">de título em carteira imobanco</p> </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-5 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-2"><i class="fas fa-chevron-circle-down"></i></span> 
                            Controle dos Títulos
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Emitidos, com acesso fulltime a plataforma web imobanco, sem custo adicional por usuarios. Crédito em conta dos valores recebidos.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>
                    
                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-6 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Split de pagamentos
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Divisão dos valores recebidos entre o credor e beneficiários, sem limite máximo de destinatários do numerário</p>
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-7 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Emissão de Comunicados
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Emissão;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Vencimento;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Lembrete;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Quitação.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-8 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Cobrança de Eletrônica
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Inadimplência;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Validade de boleto;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Aviso de perda de validade do boleto.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <div class="text-center p-2">
                        <a href="https://t.me/imobancobot" target="_blank" class="btn btn-primary border-0 rounded-pill imobanco-color-07 text-content">assine</a>
                    </div>
                </div>
            </div>


            <!--  Card Mercado Plans -->
            <div class="col-lg-3 col-md-6">
                <div class="card-plans" id="mercado">
                    <h4 class="p-1 m-0 text-center text-subtitle imobanco-color-09 card-title imo-text-06">Mercado</h4>
                    <hr class="m-0 p-0" style=" border-bottom:2px solid #06cece">
                    <h1 class="p-0 m-0 text-center text-titulo"> <small style="font-size: 12px">R$</small>12,00</h1> 
                    <P class="p-0 m-0 text-center imo-text-07">A partir de 1 emissão</P>   
                    <hr class="m-0 p-0" style=" border-bottom:2px solid #06cece">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 button-solucoes" role="tab">
                        <b-button block href="#" v-b-toggle.accordion-0 variant="info" class="imobanco-color-06 border-0 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-06 mr-0"><i class="fas fa-chevron-circle-down"></i></span> 
                            Emissão de Títulos
                            </b-button>
                    </b-card-header>
                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-9 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-2"><i class="fas fa-chevron-circle-down"></i></span> 
                            Registro bancário
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">de título em carteira imobanco</p> </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-10 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-2"><i class="fas fa-chevron-circle-down"></i></span> 
                            Controle dos Títulos
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Emitidos, com acesso fulltime a plataforma web imobanco, sem custo adicional por usuarios. Crédito em conta dos valores recebidos.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>
                    
                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-11 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Split de pagamentos
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Divisão dos valores recebidos entre o credor e beneficiários, sem limite máximo de destinatários do numerário</p>
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-12 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Emissão de Comunicados
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Emissão;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Vencimento;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Lembrete;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Quitação.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-13 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Cobrança de Eletrônica
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-13" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0">- Inadimplência;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Validade de boleto;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Aviso de perda de validade do boleto.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-14 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Cobrança Administrativa
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-14" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0">- Aviso de Boleto inválido;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Oferta de novação de dívida;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Aviso de futura noticação.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>
                    
                    <div class="text-center p-2">
                        <a href="https://t.me/imobancobot" target="_blank" class="btn btn-primary border-0 rounded-pill imobanco-color-07 text-content">assine</a>
                    </div>
                </div>
            </div>

              <!--  Card FULLWallet Plans -->
            <div class="col-lg-3 col-md-6">
                <div class="card-plans" id="fullwallet">
                    <h4 class="p-1 m-0 text-center text-subtitle imobanco-color-09 card-title imo-text-06">FULLWallet</h4>
                    <hr class="m-0 p-0" style=" border-bottom:2px solid #06cece">
                    <h1 class="p-0 m-0 text-center text-titulo"> <small style="font-size: 12px">R$</small>35,00</h1> 
                    <P class="p-0 m-0 text-center imo-text-07">A partir de 1 emissão</P>   
                    <hr class="m-0 p-0" style=" border-bottom:2px solid #06cece">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 button-solucoes" role="tab">
                        <b-button block href="#" v-b-toggle.accordion-0 variant="info" class="imobanco-color-06 border-0 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-06 mr-0"><i class="fas fa-chevron-circle-down"></i></span> 
                            Emissão de Títulos
                            </b-button>
                    </b-card-header>
                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-15 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-2"><i class="fas fa-chevron-circle-down"></i></span> 
                            Registro bancário
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-15" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">de título em carteira imobanco</p> </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-16 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-2"><i class="fas fa-chevron-circle-down"></i></span> 
                            Controle dos Títulos
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-16" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Emitidos, com acesso fulltime a plataforma web imobanco, sem custo adicional por usuarios. Crédito em conta dos valores recebidos.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>
                    
                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-17 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Split de pagamentos
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-17" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Divisão dos valores recebidos entre o credor e beneficiários, sem limite máximo de destinatários do numerário</p>
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-18 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Emissão de Comunicados
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-18" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Emissão;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Vencimento;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Lembrete;</p> 
                            <p class="imo-text-07 text-content p-0 m-0 text-justify">Quitação.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-19 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Cobrança de Eletrônica
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-19" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0">- Inadimplência;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Validade de boleto;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Aviso de perda de validade do boleto.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-20 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Cobrança Administrativa
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-20" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0">- Aviso de Boleto inválido;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Oferta de novação de dívida;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Aviso de futura noticação.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>
                    
                    <hr class="m-0 p-0">
                    <b-card-header header-tag="header" class="p-1 imobanco-color-06 " role="tab">
                        <b-button block href="#" v-b-toggle.accordion-21 variant="info" class="imobanco-color-06 border-0 pl-1 contact-collapse imo-text-07 text-left  text-subtitulo">
                            <span class="imo-text-07 mr-1"><i class="fas fa-chevron-circle-down"></i></span> 
                            Cobrança Extra Judicial
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-21" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="card-plans-body imo-text-06">
                        <b-card-text class="pl-3 pr-3"> 
                            <p class="imo-text-07 text-content p-0 m-0">- Notificação extra judicial;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Aviso de ação judicial;</p> 
                            <p class="imo-text-07 text-content p-0 m-0">- Acordo extra judicial.</p> 
                        </b-card-text>
                        </b-card-body>
                    </b-collapse>

                    <div class="text-center p-2">
                        <a href="https://t.me/imobancobot" target="_blank" class="btn btn-primary border-0 rounded-pill imobanco-color-07 text-content">assine</a>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
       
}
</script>

<style lang="scss" scoped>
.card-plans{
    background-color: #ffffff;
    margin: 0px !important;
    padding-left: 2px !important;
    padding-right: 2px !important;
    padding-top: 2px !important;
    padding-bottom: 25px !important;
    border-radius: 30px 30px 30px 0px; 
}
.card-title{
    border-radius: 30px 30px 0px 0px;
}
.card-plans-body{
    padding: 0px !important;
}
</style>