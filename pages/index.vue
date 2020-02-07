<template>
    <div>
    <header-slide />
    <services />
    <solucao />
    <newsletter />
    <blog />
    <gestao-index />
    </div> 
</template>

<script>

import HeaderSlide from '~/components/HeaderSlide.vue';
import Services from '@/components/index/services/Services.vue'
import Solucao from '@/components/index/solucoes/Solucao.vue'
import Newsletter from '@/components/index/newsletter/Newsletter.vue'
import Blog from '@/components/index/blog/Blog.vue'
import GestaoIndex from '@/components/index/gestao/GestaoIndex.vue'


export default {
  components: {
    HeaderSlide,
    Services,
    Solucao,
    Newsletter,
    Blog,
    GestaoIndex
  }
}
</script>

<style>

</style>
