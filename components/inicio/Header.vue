<template>
      <header>
          <nav class="container navbar navbar-expand-lg  ">
            <div class="container row pt-3">
              <div class="col-md-9">
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button> 
                      <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto text-right">
                            <li class="nav-item active">
                            <a class="navbar-brand" href="#">
                              <img src="../../static/image/imobanco-azul.png" alt="" class="img-fluid">
                            </a>
                            </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#noticias">Início</a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link " href="#eventos">Boleto
                              <span class="sr-only">(current)</span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#sobre">E-commerce</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#certificados">Planos</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#parceiros">Imprensa</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#contato">Contato</a>
                          </li>       
                        </ul> 
                      </div>
              </div>
              <div class="col-md-3 col-sm-12 text-center">
                    <span class="navbar-text">
                      <button type="button" class="btn btn-primary ">Cadastre-se</button>
                      </span>
                      <span class="navbar-text">
                            <button type="button" class="btn btn-info ">Login</button>
                    </span> 
              </div>
            </div>    
         </nav> 
  </header> 
</template>

<style lang="scss" scoped>
    .nav-link{
        text-align: right;
        color:gray;
    }
    .btn-primary{
            background-color: #003F69;
    }
</style>