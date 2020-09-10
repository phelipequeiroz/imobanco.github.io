<template>
  <div class="container-fluid">
    <navbar-secondary />
    <pagador-slide />
    <pagador-bar />
    <pagador-boleto />
    <pagador-content />
  </div>
</template>

<script>
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import PagadorBar from "@/components/pagador/PagadorBar.vue";
import PagadorBoleto from "@/components/pagador/PagadorBoleto.vue";
import PagadorContent from "@/components/pagador/PagadorContent.vue";
import PagadorSlide from "@/components/pagador/PagadorSlide.vue";

export default {
  components: {
    NavbarSecondary,
    PagadorBar,
    PagadorBoleto,
    PagadorContent,
    PagadorSlide,
  },
};
</script>

<style></style>
