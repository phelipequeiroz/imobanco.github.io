<template>
    <div>
    <barralogin />
    
    <headerindex />
    <!-- Component servicos -->
    <servicos />
    <solucao />
    <newsletter />
    <blog />
    <midia />
  <!--   <depoimento /> -->
    <footer-index />
    </div> 
</template>

<script>
import Logo from '~/components/Logo.vue';
import Headerindex from '~/components/Headerindex.vue';
import Barralogin from '@/components/Barralogin.vue'
import Servicos from '@/components/index/servicos/Servicos.vue'
import Solucao from '@/components/index/solucoes/Solucao.vue'
import Newsletter from '@/components/index/newsletter/Newsletter.vue'
import Blog from '@/components/index/blog/Blog.vue'
import Midia from '@/components/index/midia/Midia.vue'
import Depoimento from '@/components/index/depoimento/Depoimento.vue'
import FooterIndex from '@/components/index/footer/FooterIndex.vue'


export default {
  components: {
    Logo,
    Headerindex,
    Barralogin,
    Servicos,
    Solucao,
    Newsletter,
    Blog,
    Midia,
    Depoimento,
    FooterIndex

  }
}
</script>

<style>

</style>
