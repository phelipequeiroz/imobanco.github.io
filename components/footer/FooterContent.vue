<template>
  <section class="bg-bluedark pt-3">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="3" class="text-left">
          <router-link to="/" class="navbar-brand">
            <img src="~assets/image/logoimobanco.png" alt />
          </router-link>
          <h5 class="text-white">Conta com a gente</h5>
          <p class="text-white text-content mt-2">
            Quaisquer esclarecimentos e dúvidas, entre em contato conosco e
            <span class="text-success">#vemvocêtambém</span> ser Imobanco.
          </p>
        </b-col>

        <!-- Tópicos IMOBANCO -->
        <b-col cols="6" md="4" lg="3" class="text-left mt-3">
          <h5 class="text-white">Utilidade</h5>
          <p
            v-for="(topic, index) in topics_utilidade"
            key="index"
            class="mt-0 mb-0"
          >
            <a :href="topic.link" class="text-white">{{ topic.title }}</a>
          </p>
        </b-col>

        <!-- Tópico SOLUÇÕES -->
        <b-col cols="6" md="4" lg="3" class="text-left mt-3">
          <h5 class="text-white">Soluções</h5>
          <p v-for="(topic, index) in topics_solution" class="mt-0 mb-0">
            <router-link
              :to="topic.link"
              class="text-white text-decoration-none"
              >{{ topic.title }}</router-link
            >
          </p>
        </b-col>

        <!-- Lista de REDES SOCIAIS -->
        <b-col cols="12" md="4" lg="3" class="text-left mt-3">
          <h5 class="text-white">Ajuda</h5>
          <p v-for="(topic, index) in topics_ajuda" class="mt-0 mb-0">
            <router-link
              :to="topic.link"
              class="text-white text-decoration-none"
              >{{ topic.title }}</router-link
            >
          </p>
        </b-col>
        <b-col cols="12" md="12" lg="12" class="text-center">
          <hr />
          <p class="text-white text-content mt-3">
            Imobanco 2020 © - Todos os direitos reservados.
          </p>
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
    FooterSocial,
  },
  data() {
    return {
      topics_utilidade: [
        // { title: "Blog", link: "#" },
        { title: "Contato", link: "/contato" },
        { title: "Imprensa", link: "/imprensa" },
        // { title: "Ouvidoria", link: "#" },
        { title: "Desenvolvedores", link: "https://imopay.com.br/" },
      ],
      topics_solution: [
        { title: "Boleto", link: "/boleto" },
        { title: "Cobrança", link: "/charges" },
        { title: "E-Commerce", link: "/ecommerce" },
      ],
      topics_ajuda: [
        { title: "Manual", link: "#" },
        { title: "Política E-Commerce", link: "#" },
        // { title: "Política de Privacidade", link: "#" },
        // { title: "Trabalhe Conosco", link: "#" },
      ],
    };
  },
};
</script>

<style></style>
