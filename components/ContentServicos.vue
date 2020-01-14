<template>

    <div>
            <div>
                <h1 class="size text-center">
                    <i v-bind:class="icone" class="box-color imo-text-05"></i>
                </h1>
            </div>
        
        <h4 class=" imo-text-02 text-titulo">{{ title }}</h4>
        <p class="imo-text-01 text-content">{{ content }}</p>
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
.box{
    width: 100px;
    height: 100px;
    padding-top: 15px;
    border: 1px solid #212121;
    border-radius: 50%;
}
.box-color{
    background-color: #304ffe;
    width: 80px;
    height: 80px;
    padding-top: 20px;
    border-radius: 50%;
}

</style>
