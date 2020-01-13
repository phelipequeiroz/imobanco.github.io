<template>
	
	<div>
		<h1 class="text-center  imo-text-02 mt-4">
                <i v-bind:class="icone"></i>
        </h1>
        <p class="imo-text-06 text-center text-subtitulo mb-0">{{ contentnews }}</p>
        <h4 class="imo-text-02 text-center text-titulo mt-0 mb-0">{{ title }}</h4>
        <p class="imo-text-06 text-center text-subtitulo mt-0">{{ content }}</p>
	</div>

</template>

<script>
	export default{
    name: 'Newsinfo',
    props: ['title','content','icone','contentnews'],    
}

</script>

<style>
	
</style>