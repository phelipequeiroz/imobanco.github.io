<template>
  <b-container>
    <b-row class="justify-content-center pt-5 pb-5">
      <b-col cols="12" md="12" lg="12" class="text-center">
        <h1 class="text-imobanco text-title mt-3 title-font">
          RELEASE IMPRENSA
        </h1>
        <hr />
      </b-col>
      <post-card />
    </b-row>
  </b-container>
</template>

<script>
import PostCard from "@/components/imprensa/PostCard.vue";
export default {
  name: "PostItem",
  components: {
    PostCard,
  },
};
</script>

<style lang="scss" scoped></style>
