<template>
  <div>
  <slide-error />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center pt-5 pb-5">
            <h1 v-if="error.statusCode === 404" class="imo-text-07 text-titulo">Error 404</h1>
    <h1 v-else>Pagina não encontrada.</h1>
    <h3 class="text-titulo imo-text-08">Ops! Não conseguimos localizar a página solicitada.</h3>
    <nuxt-link to="/">clique aqui e volte para página principal</nuxt-link>
        </div> 
    </div>
    </div>
  </div>
</template>

<script>
import SlideError from'@/components/error/SlideError.vue' 
// import ErrorContent from'@/components/error/ErrorContent.vue'
export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
  components: {
    SlideError,
    // ErrorContent
  },
 
}
</script>