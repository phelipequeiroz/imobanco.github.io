<template>

    <div>
                
        <h4 class=" imo-text-06 text-titulo">{{ title }}</h4>
        <p class="imo-text-06 text-content">{{ content }}</p>
    </div>
			

</template>

<script>
export default{
    name: 'ContentServicos',
    props: ['title','content','icone'],
}
</script>


<style>

.size{
    text-align: center;
    font-size: 40px;
    
}


</style>
