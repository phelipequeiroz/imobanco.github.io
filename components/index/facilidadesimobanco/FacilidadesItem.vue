<template>
  <section class="bg-blackdark pt-5 pb-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="12" class="text-left pb-3">
          <h2 class="text-success title-font">Conheça outras facilidades Imobanco para você.</h2>
        </b-col>
      </b-row>
      <b-row>
        <!-- Tópicos IMOBANCO -->
        <b-col
          cols="12"
          md="4"
          lg="4"
          class="text-left mt-3"
          v-for="(topic, index) in topics_utilidade"
          key="index"
        >
          <span class="border-icon text-success p-2">
            <i :class="topic.icon"></i>
          </span>
          <h5 class="text-white mt-4">
            <!-- <i :class="topic.icon"></i> -->
            {{ topic.title }}
          </h5>
          <p class="mt-0 mb-0 text-justify text-graylight">{{ topic.content }}</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import FooterSocial from "@/components/footer/FooterSocial.vue";
export default {
  name: "FooterIndex",
  components: {
    FooterSocial
  },
  data() {
    return {
      topics_utilidade: [
        {
          title: "Painel",
          content:
            "Acompanhe suas atividades através do dashbord principal. Verifique números e relatórios em tempo real.",
          icon: "fas fa-tachometer-alt"
        },
        {
          title: "Transferência",
          icon: "fas fa-exchange-alt",
          content:
            "Realize transferências entre contas IMOBANCO ou algum outro banco da sua preferência."
        },
        {
          title: "Depósito",
          icon: "fas fa-download",
          content:
            "Emita boletos com qualquer valor para ser creditado na sua conta Imobanco. "
        },
        {
          title: "Extrato",
          icon: "fas fa-money-check",
          content:
            "(RELATÓRIOS) Acompanhe de forma sistêmica todos os dados em tempo real do seu dinheiro. Tudo em um único lugar."
        },
        {
          title: "Carteira",
          icon: "fas fa-wallet",
          content:
            "Controle os níveis de serviços da cobrança aplicados em seus títulos. Colocamos a sua disposição diversos percentuais de multa e formas de cobrança de juros, atribuindo uma regra para cada carteira."
        },
        {
          title: "Split",
          icon: "fas fa-columns",
          content:
            "Nosso algoritmo inteligente cuidará da divisão e repasse dos valores, possibilitando maior segurança e comodidade para seu negócio e beneficiários."
        }
      ]
    };
  }
};
</script>

<style>
.border-icon {
  width: 50px;
  height: 50px;
  border: 1px solid #00c1de;
  border-radius: 10px;
}
</style>
