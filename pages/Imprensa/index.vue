<template>
  <div class="container-fluid">
    <navbar-secondary />
    <imprensa-slide />
    <post-item />
    <footer-imprensa />
  </div>
</template>

<script>
import PostItem from "@/components/imprensa/PostItem.vue";
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";

export default {
  components: {
    PostItem,
    NavbarSecondary,
    ImprensaSlide,
    FooterImprensa,
  },
};
</script>

<style></style>
