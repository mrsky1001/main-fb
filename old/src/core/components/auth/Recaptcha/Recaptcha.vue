<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <VueRecaptcha
    ref="recaptcha"
    class="g-recaptcha"
    :sitekey="key"
    :load-recaptcha-script="true"
    @verify="authST.onVerify"
    @expired="authST.onExpired"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import VueRecaptcha from 'vue-recaptcha'
import {vxc} from '@/core/store/store.vuex'

@Component({
  components: {
    VueRecaptcha,
  },
})
export default class Recaptcha extends Vue {
  key = '6LfM5vscAAAAABiWY0hQLyg4KLvvcf-1EAZRWdY2'

  authST = vxc.auth

  mounted() {
    // @ts-ignore
    this.authST.setRefRecaptcha(this.$refs.recaptcha)
  }
}
</script>

<style lang="scss" scoped>
.g-recaptcha {
  margin: -10px -24rem 20px 0px;
  transform: scale(0.88);
  transform-origin: 0;
}

@media screen and (max-width: 280px) {
  .g-recaptcha {
    transform: scale(0.72);
    transform-origin: 0;
  }
}
</style>
