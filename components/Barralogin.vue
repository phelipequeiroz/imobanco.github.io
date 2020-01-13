<template>
		
		<section class="login color-gradient-login">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 p-2 ml-auto">

					<form>
					  <div class="form-group row text-right form-group-m">
					    <label for="exampleInputEmail1"><p class="imo-text-04">LOGIN:</p></label>
					    <div class="col-lg-4 col-md-4">
					    <input type="email" class="form-control control-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
					    </div>

					    <label for="exampleInputEmail1"><p class="imo-text-04">EMAIL:</p></label>
					    <div class="col-lg-3 col-md-4">
					    <input type="email" class="form-control control-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sua senha">
					    </div>
					    <div class="col-lg-1 col-md-1">
					    	 <button type="submit" class="btn btn-primary button-radius">ok</button>
					    </div>
					  </div>

					</form>

				</div>
			</div>
		</div>
		</section>
	</template>

<style>
.form-group-m{
	margin-top: 1px;
	margin-bottom: 0px;
}
.color-gradient-login{
    background: rgb(4,95,170);
    background: linear-gradient(90deg, rgba(4,95,170,1) 0%, rgba(2,45,96,1) 100%);
    }
</style>
