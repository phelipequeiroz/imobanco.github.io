<template>
	<section class="topoindex">
		<div class="slide">
			<div class="container">
			<div class="row">
				<div class="col-lg-2 pt-3">
					<div>
					  <b-card>

					    <b-card-text>
					      Testando os paranauê<em>Título de Cartão</em>Conteúdo da carta
					    </b-card-text>

					    <b-card-text>A second paragraph of text in the card.</b-card-text>

					    <a href="#" class="card-link">Card link</a>
					    <b-link href="#" class="card-link">Another link</b-link>
					  </b-card>
					</div>
				</div>
				<!-- <div class="col-lg-10 pt-3">
					<div>
  <b-navbar toggleable="lg" type="dark" variant="info" class="bg-nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      Right aligned nav items
      <b-navbar-nav class="ml-auto pt-2">
      	<router-link to="/"><span class="imo-text-06 pl-2 pr-2">HOME</span></router-link>
        <router-link to="/contato"><span class="imo-text-06 pl-2 pr-2">CONTATO</span></router-link>
         <router-link to="/cobrancas"><span class="imo-text-06 pl-2 pr-2">COBRANÇAS</span></router-link>
         <router-link to="/contato"><span class="imo-text-06 pl-2 pr-2">E-COMMERCE</span></router-link>
         <router-link to="/contato"><span class="imo-text-06 pl-2 pr-2">BLOG</span></router-link>
         <router-link to="/contato"><span class="imo-text-06 pl-2 pr-2">CONTATO</span></router-link>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
				</div> --> 
			</div>
			</div>
		</div>
		
	</section>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
// import Slide from '~/components/Slide.vue'


export default {

  components: {
   Navbar,
   // Slide
  }
}

</script>
<style>
.slide{
	height: 500px;
	background-color: #212121;
}

	
</style>