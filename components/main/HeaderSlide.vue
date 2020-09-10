<template>
  <section class="slidemobile mt-0">
    <b-container class="pt-5">
      <b-row class="justify-content-center">
        <!-- <b-col cols="12" md="8" lg="8" class="text-center mg-100">
          <h1 class="text-white text-propaganda">A melhor solução do mercado brasileiro</h1>
        </b-col>-->
      </b-row>
    </b-container>
    <nav-top />
    <b-container class="navzindex">
      <b-row>
        <b-col>
          <template>
            <div class="d-lg-block d-sm-none d-none navbg pt-2 pb-2">
              <ul>
                <router-link to="/" class="navbar-brand text-center pl-3 pt-2 pb-3">
                  <img src="~static/image/imobanco-azul.png" alt class="text-center img-fluid" />
                </router-link>
                <router-link
                  to="/"
                  class="text-primary text-content p-3 text-decoration-none effect"
                >Home</router-link>
                <hr />
                <router-link
                  to="/boletos"
                  class="text-primary text-content p-3 text-decoration-none effect"
                >Boleto</router-link>
                <hr />
                <router-link
                  to="/ecommerce"
                  class="text-primary text-content p-3 text-decoration-none effect"
                >E-Commerce</router-link>
                <hr />
                <router-link
                  to="/cobrancas"
                  class="text-primary text-content p-3 text-decoration-none effect"
                >Cobranças</router-link>
                <!-- <hr  /> -->
                <!-- <router-link
                  to="#"
                  class="text-primary text-content p-3 text-decoration-none effect"
                  >Planos</router-link
                >-->
                <hr />
                <router-link
                  to="/imprensa"
                  class="text-primary text-content p-3 text-decoration-none effect"
                >Imprensa</router-link>

                <hr />
                <router-link
                  to="/contato"
                  class="text-primary text-content p-3 text-decoration-none effect"
                >Contato</router-link>
                <hr />
                <a
                  href="http://app.imobanco.com.br"
                  target="_blank"
                  class="text-primary text-content p-3 text-decoration-none effect"
                >Login</a>
              </ul>
            </div>
          </template>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import NavTop from "@/components/main/NavTop.vue";
export default {
  components: {
    NavTop
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {}
};
</script>

<style>
.carousel-caption {
  font-size: 6vw;
  top: 45%;
}
.carousel-text {
  font-size: 16px;
  display: block;
  /* top: 10%; */
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 767.98px) {
  .slidemobile {
    background-image: url("~static/image/receba-phone.png") !important;
    height: 600px;
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
/* Extra small devices (portrait phones, less than 767px) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .slidemobile {
    background-image: url("~static/image/receba-tablet.png") !important;
    height: 700px;
    background-size: 100% auto center;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
@media (min-width: 992px) {
  .slidemobile {
    background-image: url("~static/image/receba-desk.png") !important;
    height: 800px;
    background-size: 100% auto cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}

.navzindex {
  position: absolute;
  top: 5%;
  left: 10%;
  z-index: 1;
}

.navbg {
  width: 196px;
  background-color: #ffffff;
  /* background-color: rgba(10, 23, 55, 0.5); */
  border-radius: 10px 10px 10px 10px;
  margin-left: 65px;
}
.mg-100 {
  margin-top: 200px;
}
</style>
