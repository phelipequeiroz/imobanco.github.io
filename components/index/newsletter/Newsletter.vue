<template>
		<section class="imobanco-color-04">
		<div class="container">
		<div class="row">
			<div class="col-lg-6 text-center">
                <newsinfo 
                icone="fas fa-envelope"
                contentnews="Assine nossa"
                title="Newsletter"
                content="Receba as novidades do Imobanco" />
			</div>
            
            <div class="col-lg-6 text-center pt-3">
            	<newscadastro />
            </div>
        </div>
	</div>
	</section>
</template>

<script>
import Newsinfo from '@/components/index/newsletter/Newsinfo.vue'
import Newscadastro from '@/components/index/newsletter/Newscadastro.vue'

export default {
  components: {
    Newsinfo,
    Newscadastro
  }
}
	
</script>

<style>
	
</style>