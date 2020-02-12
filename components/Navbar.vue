<template>
    <section class="login color-gradient-login">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <b-navbar toggleable="lg" class="color-nav" type="dark" variant="info">
    <router-link to="/" class="navbar-brand"><img src="~assets/image/logoimobanco.png" alt=""></router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <ul class="navbar-nav">
                <router-link to="/"><span class="imo-text-06 text-content pl-2 pr-2">Home</span></router-link>
                <router-link to="/charges"><span class="imo-text-06 text-content pl-2 pr-2 ">Cobranças</span></router-link>
                <router-link to="/slip"><span class="imo-text-06 text-content pl-2 pr-2">Boleto</span></router-link>
                <router-link to="/ecommerce"><span class="imo-text-06 text-content pl-2 pr-2">E-Commerce</span></router-link>
                <a href="https://blog.imobanco.com.br/" target="_blank"><span class="imo-text-06 text-content pl-2 pr-2">Blog</span></a>
                <router-link to="/contact"><span class="imo-text-06 text-content pl-2 pr-2">Contato</span></router-link>
                </ul> 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
        <!-- <div class="col-lg-12 p-0">
          <nav class="navbar navbar-expand-lg navbar-dark color-nav">
             <router-link to="/" class="navbar-brand"><img src="~assets/image/logoimobanco.png" alt=""></router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse mr-auto" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <router-link to="/"><span class="imo-text-06 text-content pl-2 pr-2">Home</span></router-link>
                  <router-link to="/charges"><span class="imo-text-06 text-content pl-2 pr-2 ">Cobranças</span></router-link>
                  <router-link to="/slip"><span class="imo-text-06 text-content pl-2 pr-2">Boleto</span></router-link>
                  <router-link to="/ecommerce"><span class="imo-text-06 text-content pl-2 pr-2">E-Commerce</span></router-link>
                 <a href="https://blog.imobanco.com.br/" target="_blank"><span class="imo-text-06 text-content pl-2 pr-2">Blog</span></a>
                  <router-link to="/contact"><span class="imo-text-06 text-content pl-2 pr-2">Contato</span></router-link>
                </ul> 
              </div>
            </nav>
       
  </div> -->
      </div>
      </div>
    </div>
    </section>
  </template>
<style>


.form-group-m{
	margin-top: 1px;
	margin-bottom: 0px;
  background-color: #212121;
}
.color-nav{
   background-color:#212529 !important;
}
.color-gradient-login{
    /* background: rgb(4,95,170); */
    background-color:#212529;
    border-bottom: 2px solid rgb(4,95,170);
    }
</style>
