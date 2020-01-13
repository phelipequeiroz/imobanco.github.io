<template>
	<section class="imobanco-color-01" :style="cssProps">
		<div class="container">
			<div class="row pt-3 pb-3">

				<videomidia />
				<webinar />
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
  data() {
      return {
        cssProps: {
          backgroundImage: `url(${require('@/assets/image/bgmidia.jpg')})`
        }
      }
    }
  }

	
</script>

<style>
	.midia{
        background-size: 100% auto cover;
        background-position: center top;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>