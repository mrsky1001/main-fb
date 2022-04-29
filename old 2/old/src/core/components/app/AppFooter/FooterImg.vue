<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div>
    <router-link to="/store">
      <v-img class="footer-img" :src="footerST.footerImg"/>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {vxc} from '@/core/store/store.vuex'
import Component from 'vue-class-component'
import {Watch} from 'vue-property-decorator'

@Component
export default class FooterImg extends Vue {
  footerST = vxc.appFooter

  mounted() {
    this.footerST.resetFooterImg()
  }

  @Watch('$route')
  onChangeRoute(): void {
    this.footerST.resetFooterImg()
  }
}
</script>

<style lang="scss" scoped>
.footer-img {
  max-width: 400px;

  /* height: 300px; */
  margin-left: 10px;
  position: absolute;
  bottom: 7px;
  right: 0;
  float: left;
  padding-right: 119px;
  padding-bottom: 90px;

  .v-image__image {
    background-position: right !important;
  }
}

@media screen and (max-width: 1264px) {
  .footer-img {
    position: relative;
  }
}

@media screen and (max-width: 708px) {
  .footer-img {
    position: relative;
    width: 60%;
  }
}
</style>
