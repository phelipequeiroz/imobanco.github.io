<template>
  <div>
    <nuxt />
    <footer-index />
  </div>
</template>
 
<script>
import FooterIndex from "@/components/main/FooterIndex.vue";

export default {
  components: {
    FooterIndex,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.slideecommerce {
  height: 500px;
  /* background-image: url("~assets/image/bgecommerce.jpg"); */
  background: rgb(4, 95, 170);
  background-size: 100% auto cover;
  background-position: center top;
  background-repeat: no-repeat;
}
.mostrar {
  opacity: 0;
}
</style>
