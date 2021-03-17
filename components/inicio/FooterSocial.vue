<template>
    <section>
        <div class="container">
            <div class="row container text-center">
                <div class="col-md-12 col-sm-12">
                    <ul class="redes-sociais">
                        <li class="facebook"><a href=""><i class="fa fa-facebook"></i></a></li>
                        <li class="twitter"><a href=""><i class="fa fa-twitter"></i></a></li>
                        <li class="instagram"><a href=""><i class="fa fa-instagram"></i></a></li>
                        <li class="youtube"><a href=""><i class="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div class="col-md-12 col-sm-12">
                     <p class="text-white">Imobanco 2020 © - Todos os direitos reservados</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    section{
        background-color: black;
        color:white;
        .redes-sociais {
            padding: 0.8em 0 0 0;
            list-style: none;
            li{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 2px solid white;
                margin: 0 0 0 0.8em;
                display: inline-block;
            }
            i{
                font-size: 1em;
                padding: 0.2em;
                color: white;
            }
            li:hover, li:focus, li:active{
                background: white;
                color: black;
            }
            i:hover, i:focus, i:active{
                color: black;
            }
        }
        p{
            font-size: 14px;
        }
    }
</style>