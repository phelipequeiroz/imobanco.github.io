<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h2>
          <img
            src="~assets/image/ecommerceimage-loja.jpg"
            alt=""
            class="img-fluid"
          />
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.animationline {
  background-image: url("~assets/image/circle-blue.png");
  background-size: 100% auto cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 500px;
  height: 500px;
  -webkit-animation: spin 20s linear infinite;
  -moz-animation: spin 20s linear infinite;
  animation: spin 20s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
