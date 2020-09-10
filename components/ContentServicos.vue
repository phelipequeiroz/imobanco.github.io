<template>

    <div>        
        <h5 class="text-secondary text-titulo">
        {{ title }}</h5>
        <p class="text-cinza text-subtitulo text-justify">{{ content }}</p>
    </div>
			

</template>

<script>
export default{
    name: 'ContentServicos',
    props: ['title','content','image'],
}
</script>


<style>

.size{
    text-align: center;
    font-size: 40px;   
}
.service-text{
    font-size: 12px;
}


</style>
