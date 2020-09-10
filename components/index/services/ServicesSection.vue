<template>
  <section class="bg-primary bg-services pt-5 pb-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="12" class="text-left pb-3">
          <h2 class="text-white pb-2 title-font">Soluções Imobanco</h2>
        </b-col>
        <b-col
          cols="12"
          md="12"
          lg="12"
          class="text-left pb-3 d-none d-sm-none d-md-block"
        >
          <services-item />
        </b-col>
        <b-col
          cols="12"
          md="12"
          lg="12"
          class="text-left pb-3 d-block d-sm-none"
        >
          <services-mobile />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ServicesItem from "@/components/index/services/ServicesItem.vue";
import ServicesMobile from "@/components/index/services/ServicesMobile.vue";
export default {
  name: "ServicesSection",
  components: {
    ServicesItem,
    ServicesMobile,
  },
};
</script>

<style>
.bg-services {
  background-image: url("~static/image/bgplans.jpg") !important;
  background-size: 100% auto cover;
  background-attachment: fixed;
  background-position: center top;
  background-repeat: no-repeat;
}
</style>
