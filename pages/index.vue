<template>
    <div>
    
    <headerindex />
    <!-- Component servicos -->
    <services />
    <solucao />
    <newsletter />
    <blog />
   
    </div> 
</template>

<script>
import Logo from '~/components/Logo.vue';
import Headerindex from '~/components/Headerindex.vue';
import Services from '@/components/index/services/Services.vue'
import Solucao from '@/components/index/solucoes/Solucao.vue'
import Newsletter from '@/components/index/newsletter/Newsletter.vue'
import Blog from '@/components/index/blog/Blog.vue'



export default {
  components: {
    Logo,
    Headerindex,
    Services,
    Solucao,
    Newsletter,
    Blog,
    

  }
}
</script>

<style>

</style>
