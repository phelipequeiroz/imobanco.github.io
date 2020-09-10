<template>
  <section class="bg-blackdark pt-5 pb-5">
    <persona-title />
    <!-- <persona-slide /> -->
    <persona-professional />
  </section>
</template>

<script>
import PersonaTitle from "~/components/index/persona/PersonaTitle.vue";
// import PersonaSlide from "~/components/index/persona/PersonaSlide.vue";
import PersonaProfessional from "~/components/index/persona/PersonaProfessional.vue";
export default {
  name: "PersonasSection",
  components: {
    PersonaTitle,
    // PersonaSlide,
    PersonaProfessional,
  },
};
</script>

<style lang="scss" scoped>

</style>