<template>
	<section class="slideecommerce " >
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-4 pt-5 pb-5 mt-5 mb-5 text-center">
					
				</div>
			</div>
		</div>
	</section>
</template>


<script>
  export default {
  components: {

  },
  data() {
      return {
        cssMedia: {
          // backgroundImage: `url(${require('@/assets/image/connected.png')})`
        backgroundImage: `url(${require('@/assets/image/bgecommerce.jpg')})`
        }
      }
    }
  }
	
</script>


<style>
/*.chargesagreement{
		padding-top: 20px;
		padding-bottom: 20px;
		background: rgb(4,95,170);
	    background: -webkit-linear-gradient(left, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: -o-linear-gradient(left,  rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: linear-gradient(to right, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	}
	*/
	.slideecommerce{
		height: 500px;
		background-image: url("~assets/image/bannerindex-ecommerce.jpg") !important;
		background: #212121;
		background-size: 100% auto cover;
        background-position: center top;
       	background-repeat: no-repeat;
	}
</style>