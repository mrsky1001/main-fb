<!--
  - Copyright (©) 18.10.2021, 12:40. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-snackbar timeout="-1" bottom color="blue" :value="!cookieST.isAgreeCookie" @change="cookieST.setAgreeCookie">
    <strong>
      Мы используем
      <a style="color: white" target="_blank" href="https://policies.google.com/technologies/cookies">Cookie</a>
      <v-icon> mdi-cookie</v-icon>
    </strong>
    <template #action="{ attrs }">
      <v-btn text v-bind="attrs" @click="cookieST.setAgreeCookie"> Согласен</v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {vxc} from '@/core/store/store.vuex'

@Component
export default class SnackBar extends Vue {
  cookieST = vxc.cookie
}
</script>

<style lang="scss" scoped></style>
