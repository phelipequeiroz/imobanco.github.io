<template>
  <div class="container-fluid">
    <navbar-secondary />
    <imprensa-slide />
    <post-single />
    <footer-imprensa />
  </div>
</template>

<script>
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import PostSingle from "@/components/imprensa/PostSingle.vue";

import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";

export default {
  components: {
    NavbarSecondary,
    ImprensaSlide,
    PostSingle,
    FooterImprensa,
  },
};
</script>

<style></style>
