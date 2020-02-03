<template>

    <div>
                
        <h4 class=" imo-text-01 text-titulo">
        <img :src="image" alt="" class="img-fluid" style="width: 50px; height: 50px;">{{ title }}</h4>
        <p class="imo-text-07 text-content">{{ content }}</p>
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
