<template>
    <div>
        <div class="row">
            <div class="col-lg-12 pt-4 text-center"><h1 class="text-titulo pt-2 pb-0 mb-0">  {{titulo}}</h1></div>
            <div class="col-lg-12 text-center"><p class="text-content pt-0 mt-0"> {{resumo}} </p></div>
       </div>
        
        
        
    </div>
</template>

<script>
    export default {
        name: 'TituloServicos',
        props: ['titulo','resumo'], 
    }
</script>

<style lang="scss" scoped>
.box-icon{ 
    display: block;
    width: 80px !important;
    height: 80px !important;
    padding-top: 13px;
    border: 2px solid;
    border-radius: 50px;
}
</style>