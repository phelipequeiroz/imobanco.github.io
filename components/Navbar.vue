<template>

    
    <section class="login color-gradient-login">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 pt-4">
          <router-link to="/"><img src="~assets/image/logoimobanco.png" alt=""></router-link>
        </div>
        <div class="col-lg-10 pt-3">
          <div>
            <b-navbar toggleable="lg" type="dark" variant="info" class="bg-nav">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                 <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto pt-2">
                  <router-link to="/"><span class="imo-text-06 pl-2 pr-2">HOME</span></router-link>
                  <router-link to="/charges"><span class="imo-text-06 pl-2 pr-2">COBRANÇAS</span></router-link>
                  <router-link to="/slip"><span class="imo-text-06 pl-2 pr-2">BOLETO</span></router-link>
                  <router-link to="/ecommerce"><span class="imo-text-06 pl-2 pr-2">E-COMMERCE</span></router-link>
                  <router-link to="/contact"><span class="imo-text-06 pl-2 pr-2">BLOG</span></router-link>
                  <router-link to="/contact"><span class="imo-text-06 pl-2 pr-2">CONTATO</span></router-link>
                  
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
        <!-- <div class="col-lg-6 p-2 ml-auto">

          <form>
            <div class="form-group row text-right form-group-m">
              <label for="exampleInputEmail1"><p class="imo-text-04">LOGIN:</p></label>
              <div class="col-lg-4 col-md-4">
              <input type="email" class="form-control control-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
              </div>

              <label for="exampleInputEmail1"><p class="imo-text-04">EMAIL:</p></label>
              <div class="col-lg-3 col-md-4">
              <input type="email" class="form-control control-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sua senha">
              </div>
              <div class="col-lg-1 col-md-1">
                 <button type="submit" class="btn btn-primary button-radius">ok</button>
              </div>
            </div>

          </form>

        </div> -->
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
.color-gradient-login{
    background: rgb(4,95,170);
    }
</style>
