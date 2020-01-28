<template>
  <div class="container-fluid">
    <div>
		<contact-slide />
		<contact-content />
		<contact-question />
		

    </div>
  </div>
</template>

<script>
import ContactContent from '@/components/contact/ContactContent.vue'
import ContactQuestion from '@/components/contact/ContactQuestion.vue'
import ContactSlide from '@/components/contact/ContactSlide.vue'


export default {
  components: {
   
   ContactContent,
   ContactQuestion,
   ContactSlide
  
    
  }
}
</script>

<style>

</style>
