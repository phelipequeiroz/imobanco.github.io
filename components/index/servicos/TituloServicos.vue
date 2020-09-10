<template>
    <div>
        <div class="row">
            <!-- <div class="col-lg-2">
                <span class="box-icon text-center">
                    <h1><i class="material-icons" style="font-size: 50px !important;">{{icon}}</i></h1>
                </span>
            </div> -->
            <div class="col-lg-10 pt-4"><h1 class="text-titulo pt-2">  {{titulo}}</h1></div>
            <div class="col-lg-12"><h3 class="text-content"> {{resumo}} </h3></div>
       </div>
        
        
        
    </div>
</template>

<script>
    export default {
        name: 'TituloServicos',
        props: ['titulo','resumo','icon'], 
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