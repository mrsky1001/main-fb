<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div>
    <v-btn plain class="footer-btn font-weight-black" color="white" target="_blank" href="https://vk.com/fomablog">
      <v-icon>mdi-vk</v-icon>
    </v-btn>
    <v-btn
      plain
      class="footer-btn font-weight-black"
      color="white"
      target="_blank"
      href="https://www.instagram.com/n_shurupchic/"
    >
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    <v-btn
      plain
      class="footer-btn font-weight-black"
      color="white"
      target="_blank"
      href="https://twitter.com/BlogFoma"
    >
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      plain
      class="footer-btn font-weight-black"
      color="white"
      target="_blank"
      href="https://www.behance.net/foma_design"
    >
      <v-icon>Be</v-icon>
    </v-btn>
    <v-btn plain class="footer-btn font-weight-black" color="white" target="_blank" href="https://t.me/fomablog">
      <v-icon>mdi-telegram</v-icon>
    </v-btn>
    <v-btn
      plain
      class="footer-btn font-weight-black"
      color="white"
      target="_blank"
      href="https://www.facebook.com/groups/fomablogru"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      plain
      class="footer-btn font-weight-black"
      color="white"
      target="_blank"
      href="https://www.youtube.com/channel/UC_k_rdwbeDwf1KbMQmyK_pw/"
    >
      <v-icon>mdi-youtube</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class SocialNetwork extends Vue {
}
</script>

<style lang="scss" scoped>
.footer-btn {
  min-width: 0 !important;
  padding: 0 26px 0 0 !important;
}
</style>
