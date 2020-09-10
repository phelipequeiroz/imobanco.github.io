<template>
  <div>
    <navbar-secondary />
    <slide-error />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center pt-5 pb-5">
          <img src="~static/image/fig-error.png" alt="error" />
          <h1 v-if="error.statusCode === 404" class="text-imobanco text-title">
            Error 404
          </h1>
          <h1 v-else>Pagina não encontrada.</h1>
          <h3 class="text-titulo imo-text-08">
            Ops! Não conseguimos localizar a página solicitada.
          </h3>
          <nuxt-link to="/" class="btn bg-bluepink text-white form-radius-total"
            >clique aqui e volte para página principal</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideError from "@/components/error/SlideError.vue";
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
// import ErrorContent from'@/components/error/ErrorContent.vue'
export default {
  props: ["error"],
  layout: "blog", // you can set a custom layout for the error page
  components: {
    SlideError,
    NavbarSecondary,
    // ErrorContent
  },
};
</script>
