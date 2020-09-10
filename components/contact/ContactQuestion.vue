<template>
  <section class="bg-bluepink">
    <div class="container pt-5 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <h2 class="mt-5 text-white text-title text-center">FAQ IMOBANCO</h2>
        </div>
        <div class="col-lg-9 col-md-8">
          <div role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-1
                  class="contact-collapse bg-bluepink text-white text-left"
                  ><span class="imo-text-08 mr-4"
                    ><i class="fas fa-chevron-circle-down"></i
                  ></span>
                  Como abrir uma conta no Imobanco?</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text1 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-2
                  class="contact-collapse bg-bluepink text-white text-left"
                  ><span class="imo-text-08 mr-4"
                    ><i class="fas fa-chevron-circle-down"></i
                  ></span>
                  É seguro receber pelo Imobanco?</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text2 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-3
                  class="contact-collapse bg-bluepink text-white text-left"
                  ><span class="imo-text-08 mr-4"
                    ><i class="fas fa-chevron-circle-down"></i
                  ></span>
                  Como emitir boletos com o sistema Imobanco?</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text3 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-4
                  class="contact-collapse bg-bluepink text-white text-left"
                  ><span class="imo-text-08 mr-4"
                    ><i class="fas fa-chevron-circle-down"></i
                  ></span>
                  Quais os planos de serviço Imobanco?</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text4 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-5
                  class="contact-collapse bg-bluepink text-white text-left"
                  ><span class="imo-text-08 mr-4"
                    ><i class="fas fa-chevron-circle-down"></i
                  ></span>
                  Como funcionam os planos de serviço Imobanco</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text5 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-6
                  class="contact-collapse bg-bluepink text-white text-left"
                  ><span class="imo-text-08 mr-4"
                    ><i class="fas fa-chevron-circle-down"></i
                  ></span>
                  Não Tenho estrutura de cobrança. Qual plano devo
                  contratar?</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text6 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-7
                  class="contact-collapse bg-bluepink text-white text-left"
                  ><span class="imo-text-08 mr-4"
                    ><i class="fas fa-chevron-circle-down"></i
                  ></span>
                  Sou um empreendedor em início de vida empresarial. Qual plano
                  devo escolher?</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text7 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  href="#"
                  v-b-toggle.accordion-8
                  class="contact-collapse bg-bluepink text-white text-left"
                  ><span class="imo-text-08 mr-4"
                    ><i class="fas fa-chevron-circle-down"></i
                  ></span>
                  Como funciona a cobrança de tarifas no Imobanco?</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>{{ text8 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text1: `
          Abrir conta no Imobanco é simples, você pode preencher cadastro de abertura de conta On-line, recebe um e-mail e passar a  o processo.
        `,
      text2: `
          Os recursos mantidos junto ao Imobanco estão seguros e não podem ser objeto de bloqueios, arresto, sequestro ou busca e apreensão.
        `,
      text3: `
          Inclua o título isolado ou o contrato que gerará um ou mais títulos em sequência, atrele os títulos a uma carteira (Fullwallet, Mercado ou Business), de acordo com o nível do serviço que desejar.
        `,
      text4: `No Imobanco, temos planos distintos de serviço, que são: 
         Business, Plano mais básico que promove a emissão e o registro do boleto, controle de recebimento, liquidação, aplicação de split de pagamentos e crédito(s) na(s) conta(s) bancária(s) cadastrada pelo usuário. O sistema emitirá automaticamente recibos de liquidação (recebimento) dos valores e aviso de inadimplência.
         Mercado, Plano intermediário que promove a emissão e o registro do boleto, controle de recebimento, liquidação, aplicação de split de pagamentos e crédito(s) na(s) conta(s) bancária(s) cadastrada pelo usuário. Caso o título tenha sido inadimplido, será promovido atividades de cobrança administrativa. O sistema emitirá automaticamente recibos de liquidação (recebimento) dos valores e aviso de inadimplência.
FullWallet, Plano mais completo, que promove todas as atividades do plano intermediário e conduz os trabalhos de cobrança extrajudicial e acompanhamento das atividades jurídicas de cobrança, a ser desenvolvida pelo advogado contratado dentro de nossa base de dados. 
        `,

      text5: ` 
         No Imobanco você pode ter níveis distintos de serviços, os quais funcionam de forma conjunta no mesmo contrato. Você pode vincular seus créditos (títulos) a um só plano ou dividir suas carteiras nos planos disponíveis, de acordo com a complexidade do contrato ou do credor.
        `,

      text6: ` 
         Se você tem uma empresa de pequeno ou médio porte e não dispõe de estrutura própria de cobrança, pode utilizar nossas carteiras Mercado e FullWallet. Com seus títulos atrelados a uma dessas carteiras, o Imobanco dá todo o suporte para a recuperação de seu crédito. Com seus títulos atrelados ao plano Mercado sua cobrança terá apoio digital. Caso seu título ou contrato necessite de estrutura que envolva emissão, registro, controle, cobrança eletrônica e humana, basta incluir seu crédito na carteira vinculada ao plano FullWallet.
        `,

      text7: ` 
         Caso esteja iniciando sua carreira empreendedora, necessita do recurso mais precioso: TEMPO. Com o plano Imobanco FullWallet você transfere para nossa equipe a preocupação com as rotinas de emissão, registro, controle e cobrança. Dedique-se a captação de novos negócios e deixe a burocracia e arrecadação de seus créditos com a gente.
        `,

      text8: ` 
         No sistema web Imobanco você pode criar quantas carteiras desejar, sejam elas vinculadas a tipos de serviços contratados (consultoria, contabilidade, treinamento, etc) ou idades (até 30 anos, 31 a 50anos, etc) ou sexo (masculinos, femininos, outros) ou mesmo, atividades (indústria, comércio e serviços) do seu cliente pagador. Contudo, cada carteira criada deverá estar integrada a um plano de serviços Imobanco. Clique aqui se desejar ver os planos que temos disponíveis e suas condições. A tarifa será cobrada de acordo com o plano a qual o título ou contrato a receber esteja vinculado. Caso opte pelo Plano FullWallet, após a validade do boleto, passará a pagar além do valor determinado do plano, uma tarifa de TGC – Tarifa de gestão de cobrança equivalente ao percentual negociado com seu gerente de contas Imobanco. O percentual default da TGC é de 10% (dez por cento), mas pode ser negociado. Nossos gerentes de conta podem ajustar esse custo, dependendo de seus números, volumes e da complexidade envolvida nas cobranças a serem realizadas.
        `,
    };
  },
};
</script>
<style>
.contact-collapse {
  border: none;
}
</style>
