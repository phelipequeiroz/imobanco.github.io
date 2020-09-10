<template>
    <section class="">
        <div class="container servicoestiloright">
            <div class="row">
                 <div class="col-lg-6">
                <video loop="" autoplay="" muted="" class="juno-video img-fluid"> 
					<source src="https://juno.com.br/assets/videos/juno_website-homepage-video-original.mp4" type="video/mp4">
					<source src="assets/videos/juno_website-homepage-video.ogv" type="video/ogv">
					<source src="assets/videos/juno_website-homepage-video.webm" type="video/webm"> 
				</video>
                 </div>
                <div class="col-lg-6 col-md-6 col-sm-10 pt-5 pb-5">
                    
                    <titulo-conta
                    class="text-white" 
                    titulo="Conta Digital"
                    resumo="Chamada de vídeo online"/>

                    <div class="row">
                        <div class="col-lg-6">
                            <p class="text-white"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-white"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-white"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-white"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
</template>

<script>
   import TituloServicos from '~/components/index/servicos/TituloServicos.vue'
   import TituloConta from '~/components/index/servicos/TituloConta.vue'
    export default {
        components: {
        TituloServicos,
        TituloConta
        },
        // head () {
        //     return {
        //     script: [
        //         { src: 'https://embed.clickmeeting.com/widgets_embed.html?r=vNwtfe&param_project=account_panel&template=standard' }
        //     ],
        //     link: [
        //         { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
        //     ]
        //     }
        // }
    }
</script>

<style lang="scss" scoped>

.servicoestiloright{
    // border-right: 7px #21e6c1 solid;
    // border-radius: 30px 0px 30px 0px;
    // border-bottom: 7px #21e6c1 solid;
    
}

</style>