<template>
  <div>
    <b-button
      v-b-toggle
      href="#boletos"
      @click.prevent
      block
      class="card-transparent text-title mt-2"
    >Boletos</b-button>
    <b-sidebar id="boletos" class="pt-2 border-nav-left" shadow>
      <div class="px-3 py-2">
        <h3 class="text-title text-imobanco">Boletos</h3>
        <h5
          class="text-content"
        >A melhor solução do mercado brasileiro. Somos o seu novo MODAL FINANCEIRO.</h5>
        <p
          class="card-text text-justify"
        >* Emita boletos recorrentes e envie por e-mail gratuitamente.</p>
        <p
          class="card-text text-justify"
        >* Nosso sistema enviará os lembretes de vencimento para seus clientes.</p>
        <p
          class="card-text text-justify"
        >* Acompanhe seu cliente – Visualize quando os e-mails são abertos.</p>
        <p class="card-text text-justify">* Pague somente os títulos recuperados.</p>
        <router-link
          to="/boletos"
          class="text-white text-content btn bg-imobanco form-radius-total text-decoration-none effect"
        >Mais informações</router-link>
      </div>
    </b-sidebar>

    <b-button
      v-b-toggle
      href="#assinaturas"
      @click.prevent
      block
      class="card-transparent text-title mt-2"
    >Assinaturas</b-button>
    <b-sidebar id="assinaturas" class="pt-2 border-nav-left" shadow>
      <div class="px-3 py-2">
        <h3 class="text-title text-imobanco">Assinaturas</h3>
        <p
          class="card-text text-justify"
        >Tenha a comodidade de utilizar os cartões de débito e crédito para promover a arrecadação de suas parcelas mensais, pagando taxas extremamente competitivas para isso e contando com um dos meios mais assertivos e práticos para seu recebimento. Utilizando-se do método de assinaturas Imobanco, você estará utilizando meio moderno e ágil para receber, mas contará também com nossa estrutura de cobrança para aqueles casos que o pagador não consiga ter a transação aprovada no cartão. Quer entender mais de nossa cobrança inadimplente?</p>
      </div>
    </b-sidebar>

    <b-button
      v-b-toggle
      href="#ecommerce"
      @click.prevent
      block
      class="card-transparent text-title mt-2"
    >E-commerce</b-button>
    <b-sidebar id="ecommerce" class="pt-2 border-nav-left" shadow>
      <div class="px-3 py-2">
        <h3 class="text-title text-imobanco">E-commerce</h3>
        <h5
          class="text-content"
        >Economize tempo e dinheiro com a plataforma projetada para se adaptar ao seu negócio.</h5>
        <p
          class="card-text text-justify"
        >* Cadastre-se, crie sua loja virtual e comece a vender pela internet.</p>
        <p class="card-text text-justify">* Adptada para o seu negócio</p>
        <p class="card-text text-justify">* Fácil de usar.</p>
        <p class="card-text text-justify">* Suporte 24×7</p>
        <p
          class="card-text text-justify"
        >* Centralize no Imobanco todas as necessidades para extrair mais resultados do seu negócio.</p>
        <p class="card-text text-justify">* Responsivo e adequada para mecanismos de busca</p>
        <router-link
          to="/ecommerce"
          class="text-white text-content btn bg-imobanco form-radius-total text-decoration-none effect"
        >Mais informações</router-link>
      </div>
    </b-sidebar>

    <b-button
      v-b-toggle
      href="#cobranca"
      @click.prevent
      block
      class="card-transparent text-title mt-2"
    >Cobrança e Recuperação de Créditos</b-button>
    <b-sidebar id="cobranca" class="pt-2 border-nav-left" shadow>
      <div class="px-3 py-2">
        <h3 class="text-title text-imobanco">Cobrança e Recuperação de Créditos</h3>
        <h5 class="text-content">Recuperar seu dinheiro é nosso maior objetivo</h5>
        <p
          class="card-text text-justify"
        >Seja seu negócio usuário de boletos ou de assinaturas com cartões de crédito, precisará de uma estrutura para cobrar os pagamentos que não foram liquidados por seus clientes.</p>
        <router-link
          to="/charges"
          class="text-white text-content btn bg-imobanco form-radius-total text-decoration-none effect"
        >Mais informações</router-link>
      </div>
    </b-sidebar>

    <b-button
      v-b-toggle
      href="#custodia"
      @click.prevent
      block
      class="card-transparent text-title mt-2"
    >Custódia</b-button>
    <b-sidebar id="custodia" class="pt-2 border-nav-left" shadow>
      <div class="px-3 py-2">
        <h3 class="text-title text-imobanco">Custódia</h3>
        <h5
          class="text-content"
        >Esta opção é direcionada a pessoas que tem uma estrutura e deseja diminuir o peso do custo fixo que esta estrutura financeira trás.</h5>
        <p
          class="card-text text-justify"
        >Para que gastar fixo se pode pagar tarifas acomodadas a seu movimento, de forma totalmente variável e econômica? O empreendedor que utiliza a custódia Imobanco, poderá receber seus valores através de nossos meios de recebimento (boletos, assinaturas, e-commerce e cobrança), cadastrando suas contas a pagar e permitindo que possamos gerenciar seu financeiro e tesouraria. Essa solução é prática e muito simples: recebemos seus valores e gerenciamos seus pagamentos de acordo com seus saldos, avaliamos possibilidades e auxiliamos seu dia-a-dia financeiro com nossa aplicação e nossos gerentes de contas dedicados a seu negócio.</p>
      </div>
    </b-sidebar>

    <b-button
      v-b-toggle
      href="#antecipacao"
      @click.prevent
      block
      class="card-transparent text-title mt-2"
    >Antecipação de recebíveis</b-button>
    <b-sidebar id="antecipacao" class="pt-2 border-nav-left" shadow>
      <div class="px-3 py-2">
        <h3 class="text-title text-imobanco">Antecipação de recebíveis</h3>
        <h5
          class="text-content"
        >Todos os dias, muitos empreendedores são chamados, quando enfrentam apertos no seu caixa, a optar por qual conta pagar, refletir sobre qual pagamento a fazer, é mais importante.</h5>
        <p
          class="card-text text-justify"
        >Sendo optante por este serviço Imobanco, podemos promover a antecipação de seus recebíveis e ajudar seu negócio a ter os pagamentos em dia. Para que utilizar créditos bancários de cheque especial, com juros caros se podemos trabalhar com antecipação de recebimento a taxas de juros ajustadas e que caberão no seu bolso? Venha para o Imobanco e usufrua desse serviço, podendo assim, administrar seu caixa de forma mais eficiente e moderna. Conte com a assessoria de seu gerente de contas e passe a ter uma administração financeira mais moderna.</p>
      </div>
    </b-sidebar>

    <b-button
      v-b-toggle
      href="#pagamentos"
      @click.prevent
      block
      class="card-transparent text-title mt-2"
    >Pagamento de contas</b-button>
    <b-sidebar id="pagamentos" class="pt-2 border-nav-left" shadow>
      <div class="px-3 py-2">
        <h3 class="text-title text-imobanco">Pagamento de contas</h3>
        <h5
          class="text-content"
        >Sendo optante do serviço de custódia Imobanco, você poderá manter seus valores em nossas contas digitais e ordenar o pagamento de suas contas, estabelecendo ordem de prioridade entre elas, ou seja, na medida que os valores forem chegando na sua conta, iremos realizando os pagamentos na ordem de prioridade escolhida por você.</h5>
        <p
          class="card-text text-justify"
        >Essa função não é obrigatória e pode ser ativada ou alterada de acordo com seu momento. Tenha um financeiro descomplicado e ágil, utilizando as ferramentas de pagamento Imobanco e o apoio de seu gerente de contas.</p>
      </div>
    </b-sidebar>
    <b-button
      v-b-toggle
      href="#repasses"
      @click.prevent
      block
      class="card-transparent text-title mt-2"
    >Repasses a parceiros (split de pagamentos)</b-button>
    <b-sidebar id="repasses" class="pt-2 border-nav-left" shadow>
      <div class="px-3 py-2">
        <h5 class="text-title text-imobanco">Repasses a parceiros (split de pagamentos)</h5>
        <p
          class="card-text text-justify"
        >Quem empreende no mercado atual, sabe que por muitas vezes não se pode fazer 100% do serviço sozinho. Nessas horas, precisamos pensar na possiblidade de diminuir o custo tributário evitando emitir 100% do faturamento e receber nota de seu parceiro da parte que cabe a ele. Percebeu que agindo assim terá emitido mais de 100% de notas fiscais e assim, oferecido a tributação valor superior ao serviço de fato contratado? Com a solução de split de pagamentos automática Imobanco, você já emite seus títulos com uma “ordem de pagamento” automática, ou seja, quando o título for recebido ele automaticamente gerará um repasse automático, seguindo suas regras. Não importa o valor ou percentual, quando recebido dividiremos o valor para cada um dos parceiros, que fizeram parte do negócio com você. Essa opção é perfeita para corretores de imóveis, profissionais autônomos, empresas que atendem um único cliente de forma conjunta, entre outras tantas situações.</p>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "ServicesItem",
};
</script>

<style></style>
