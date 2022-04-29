<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div>
    <p class="font-weight-bold grey--text header-map-text p-size-h2">
      <v-icon class="grey--text"> mdi-information-outline</v-icon>
      Информация:
    </p>
    <div style="margin-left: 20px">
      <v-btn
        x-small
        :to="routesObj.AGREEMENT"
        plain
        class="footer-btn font-weight-black"
        color="white"
        target="_blank"
      >
        {{ routesObj.AGREEMENT.text }}
      </v-btn>
      <v-btn
        x-small
        :to="routesObj.CONDITIONS"
        plain
        class="footer-btn font-weight-black"
        color="white"
        target="_blank"
      >
        {{ routesObj.CONDITIONS.text }}
      </v-btn>
      <v-btn
        x-small
        :to="routesObj.DISCLAIMER"
        plain
        class="footer-btn font-weight-black"
        color="white"
        target="_blank"
      >
        {{ routesObj.DISCLAIMER.text }}
      </v-btn>

      <v-btn
        x-small
        :to="routesObj.COPYRIGHT_HOLDERS"
        plain
        class="footer-btn font-weight-black"
        color="white"
        target="_blank"
      >
        {{ routesObj.COPYRIGHT_HOLDERS.text }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import routesObj from '@/app/routes/routes-obj'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Agreements extends Vue {
  routesObj = routesObj
}
</script>

<style lang="scss" scoped>
.header-map-text {
  width: fit-content;
  //border-bottom: 2px solid;
}

.footer-btn {
  min-width: 0 !important;
  padding: 0 16px 0 0 !important;
}

.p-size-h2 {
  font-size: 0.875rem;
}
</style>
