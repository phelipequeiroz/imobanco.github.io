<template>
  <div class="container-fluid">
    <navbar-secondary />
    <contact-slide />
    <contact-content />
    <chat-comercial />
    <!-- <contact-question /> -->
  </div>
</template>

<script>
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import ContactSlide from "@/components/contact/ContactSlide.vue";
import ContactContent from "@/components/contact/ContactContent.vue";
import ChatComercial from "@/components/index/chatcomercial/ChatComercial.vue";
// import ContactQuestion from "@/components/contact/ContactQuestion.vue";

export default {
  components: {
    NavbarSecondary,
    ContactSlide,
    ContactContent,
    ChatComercial,
    // ContactQuestion,
  },
};
</script>

<style></style>
