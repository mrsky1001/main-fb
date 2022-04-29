<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div class="text-center">
    <v-snackbar
      top
      class="app-snackbar"
      :value="snackST.isShowSnackbar"
      :color="snackST.snackBarClasses"
      @change="snackST.setShowSnackbar"
    >
      <strong>
        {{ snackST.snackBarMsg }}
        {{ snackST.snackBarParams }}
      </strong>
      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackST.setShowSnackbar(false)"> Закрыть</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {vxc} from '@/core/store/store.vuex'

@Component
export default class SnackBar extends Vue {
  snackST = vxc.snackbar
}
</script>

<style lang="scss" scoped>
.app-snackbar {
  margin-top: 70px;
  font-weight: bold !important;

  .v-snack__content {
    font-weight: bold !important;
  }
}
</style>
