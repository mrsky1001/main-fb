<!--
  - Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div>
    <p class="font-weight-bold grey--text header-map-text p-size-h2">
      <v-icon class="grey--text"> mdi-map-outline</v-icon>
      Карта сайта:
    </p>

    <div style="margin-left: 20px">
      <template v-for="route in routerST.routes">
        <v-btn
          v-if="route.onMainBar"
          :key="route.name"
          plain
          color="white"
          class="font-weight-black footer-btn"
          :to="route.path"
        >
          <span> {{ route.text }}</span>
        </v-btn>
        <template v-for="subRoute in routerST.subRoutes(route)">
          <v-btn
            :key="subRoute.name"
            plain
            color="white"
            class="font-weight-black footer-btn"
            :to="subRoute.path"
          >
            <span> {{ subRoute.text }}</span>
          </v-btn>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {vxc} from '@/core/store/store.vuex'

@Component
export default class AppRoutes extends Vue {
  routerST = vxc.router
}
</script>

<style lang="scss" scoped>
.header-map-text {
  width: fit-content;
  //border-bottom: 2px solid;
}

.p-size-h2 {
  font-size: 0.875rem;
}

.footer-btn {
  min-width: 0px !important;
  padding: 0 16px 0 0 !important;
}
</style>
