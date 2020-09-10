<template>
  <div class="container-fluid">
    <navbar-secondary />
    <header-cobrancas />
    <acordo-cobrancas />
    <recuperar-cobrancas />
    <administrativo-cobrancas />
  </div>
</template>

<script>
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import HeaderCobrancas from "@/components/cobrancas/HeaderCobrancas.vue";
import AcordoCobrancas from "@/components/cobrancas/AcordoCobrancas.vue";
import RecuperarCobrancas from "@/components/cobrancas/RecuperarCobrancas.vue";
import AdministrativoCobrancas from "@/components/cobrancas/AdministrativoCobrancas.vue";

export default {
  components: {
    NavbarSecondary,
    HeaderCobrancas,
    AcordoCobrancas,
    RecuperarCobrancas,
    AdministrativoCobrancas,
  },
};
</script>

<style></style>
