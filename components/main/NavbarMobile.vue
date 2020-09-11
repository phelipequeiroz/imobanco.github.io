<template>
  <section class="bg-imobanco">
    <b-container class>
      <b-row>
        <b-col cols="12" md="12" lg="12" class="d-lg-none d-xl-none">
          <b-navbar
            toggleable="lg"
            type="light"
            class="container-fluid text-center"
            id="nav"
          >
            <div class="container">
              <router-link to="/" class="navbar-brand">
                <img
                  src="~assets/image/logoimobanco.png"
                  alt
                  class="text-left"
                />
              </router-link>
              <b-navbar-toggle
                target="nav-collapse"
                class="bg-white form-radius-total p-1"
              ></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <div class="row justify-content-center">
                  <b-col cols="12" md="6">
                    <b-navbar-nav class="ml-auto pb-4">
                      <router-link
                        to="/"
                        class="text-white text-decoration-none p-2"
                        >Home</router-link
                      >

                      <router-link
                        to="/boletos"
                        id="boleto"
                        class="text-white text-decoration-none p-2"
                        >Boleto</router-link
                      >

                      <router-link
                        to="/ecommerce"
                        class="text-white text-decoration-none p-2"
                        >E-Commerce</router-link
                      >

                      <router-link
                        to="/cobrancas"
                        class="text-white text-decoration-none p-2"
                        >Cobranças</router-link
                      >

                      <router-link
                        to="/imprensa"
                        class="text-white text-decoration-none p-2"
                        >Imprensa</router-link
                      >
                      <router-link
                        to="/pagador"
                        class="text-white text-decoration-none p-2"
                        >Pagador</router-link
                      >
                      <router-link
                        to="/contato"
                        class="text-white text-decoration-none p-2"
                        >Contato</router-link
                      >

                      <a
                        href="http://app.imobanco.com.br"
                        class="btn bg-bluepink text-white form-radius-total p-2"
                        >Seja Imobanco</a
                      >
                    </b-navbar-nav>
                  </b-col>
                </div>
              </b-collapse>
            </div>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "NavbarMobile",
};
</script>
