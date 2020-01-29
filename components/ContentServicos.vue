<template>

    <div>
                
        <h4 class=" imo-text-08 text-titulo">{{ title }}</h4>
        <p class="imo-text-07 text-content service-text">{{ content }}</p>
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
.service-text{
    font-size: 12px;
}


</style>
