<template>
    <div>   
            <p>
                <span class="text-success">
                    <i class="material-icons" style="font-size: 13px !important;">{{icon}}</i>
                </span> 
                    <strong>{{exclusivo}}</strong> {{texto}}
            </p>
    </div>
</template>

<script>
    export default {
        name: 'TextoDetalhe',
        props: ['texto', 'icon','titulo','exclusivo'],
    }
</script>

<style lang="scss" scoped>

</style>