<template>
  <div class="container-fluid">
    <div>
      <barralogin />
      <logo />
      <h1 class="title">
        Cobrança
      </h1>
      <router-link to="/contato">Contato</router-link>
      <router-link to="/">Home</router-link>
      <h2 class="subtitle">
        My best Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Barralogin from '@/components/Barralogin.vue'

export default {
  components: {
    Logo,
    Barralogin
  }
}
</script>

<style>

</style>
