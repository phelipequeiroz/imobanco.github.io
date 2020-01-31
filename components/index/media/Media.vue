<template>
	<section class="imobanco-color-09 midia pb-4">
		<div class="container">
			<div class="row justify-content-first pt-3 pb-3">
        <div class="col-lg-6">
				<videomidia />
				<webinar />
        </div>
			</div>
		</div>
	</section>
</template>

<script>
import Videomidia from '@/components/index/media/Videomidia.vue'
import Webinar from '@/components/index/media/Webinar.vue'


export default {
  components: {
    Videomidia,
    Webinar

  },
  // data() {
  //     return {
  //       cssProps: {
  //         backgroundImage: `url(${require('@/assets/image/bgmidia.jpg')})`
  //       }
  //     }
  //   }
  }

	
</script>

<style>
	.midia{
        background-image: url("~assets/image/bgmidia.jpg") !important;
        background-size: 100% auto cover;
        background-position: center top;
        background-repeat: no-repeat;
    }
</style>