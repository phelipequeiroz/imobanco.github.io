<template>
  <section class="pt-5 pb-2 bg-graylight">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="6">
          <h3 class="text-title text-imobanco title-font">Atendimento</h3>
          <p class="text-justify">
            Converse conosco através do Chat, Whatsapp ou Telegram. Essas são
            formas rápidas e seguras para solucionar suas dúvidas sobre todos os
            departamentos do Imobanco.
            <br />
            <br />Estamos sempre disponíveis de Segunda a Sexta, das 9:00 às 16h.
          </p>

          <a href="https://t.me/imobancobot" class="btn form-radius btn-outline-info">
            <i class="fab fa-telegram-plane"></i> Telegram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511946592701&text=Fale%20conosco%20pelo%20nosso%20canal%20de%20atendimento%20Imobanco"
            class="btn form-radius btn-outline-info"
          >
            <i class="fab fa-whatsapp"></i> Whatsapp
          </a>
        </b-col>
        <b-col cols="12" md="6" lg="6" class="text-center pt-3">
          <img src="~static/image/chatonlinewhats.png" alt class="img-fluid" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "ChatComercial"
};
</script>
