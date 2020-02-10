<template>

    <div>
                
        <h4 class=" imo-text-01 text-titulo ">
        {{ title }}</h4>
        <p class="imo-text-07 text-content text-justify">{{ content }}</p>
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
