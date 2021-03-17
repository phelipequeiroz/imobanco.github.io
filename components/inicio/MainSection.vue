<template>
    <section>
        <b-container>
            <b-row class="container">
                <b-col class="col-md-4 col-sm-12 pt-5">
                    <h2>Conta Digital</h2>
                    <h3>Feita para o <mark>sucesso</mark> do seu negócio.</h3>
                    <v-btn class="btn btn-primary btn-sm">Cadastre-se</v-btn>
                </b-col>
                <b-col class="col-md-2"></b-col>
                <img class="col-md-6" src="../../static/image/cartoes.png" alt="" srcset="">
            </b-row>
            <div class="row container" style="padding-top:100px">
                <div class="col-md-6 col-sm-12 mt-5">
                    <h2>Foque no que importa;</h2>
                    <p>Fechar novos e bons <br> negócios</p>
                </div>
                <div class="col-md-6 col-sm-12">
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/mRdpOnCGR7E?start=3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
               
            </div>
        </b-container>
    </section>
</template>
<style lang="scss" scoped>
    section{
        padding: 100px 0px;

        mark{
            background-color: #38b4ca;
            border-radius: 8px;
            color:white;
        }

        h2,h3{
            color:#003F69;
            font-weight: bolder;
        }
        p{
            color:#38b4ca;
            font-size: 20px;
        }

        .btn-primary{
            background-color: #003F69;
        }

        iframe{
            border-radius:10px;
        }
    }
</style>