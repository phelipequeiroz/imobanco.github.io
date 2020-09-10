<template>
  <b-col cols="12" md="12" lg="12" class=" form-radius-total  mt-2 mb-2">
    <b-row class="p-2">
      <b-col cols="12" lg="2" md="2" class="bg-primary text-center">
        <h1 class="text-white mt-2 mb-0 title-font">11</h1>
        <p class="text-content text-info">AGOSTO 2020</p>
      </b-col>
      <b-col cols="12" lg="10" md="8" class="">
        <router-link
          to="/imprensa/realease"
          class="text-primary text-content p-3 btn text-decoration-none effect text-left"
          ><h3>
            Imobanco oferece lojas virtuais sem custos para empreendedores
            potiguares
          </h3></router-link
        >
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "PostCard",
};
</script>

<style lang="scss" scoped>
.data {
  font-size: 40px;
  padding: 10px;
  border: solid 2px #212121;
  border-radius: 50px;
}
</style>
