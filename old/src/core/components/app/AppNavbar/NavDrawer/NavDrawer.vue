<!--
  - Copyright (©) 15.10.2021, 15:56. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-row justify="end" class="d-none d-md-flex my-row-bar">
    <template v-for="route in routes">
      <v-btn
        v-show="!navbar.isShowSearch"
        v-if="route.onMainBar"
        :key="route.name"
        plain
        :to="route.path"
        active-class="active-btn"
      >
        <v-icon v-if="route.hasIcon">
          {{ route.icon }}
        </v-icon>
        <p class="my-label">
          {{ route.text }}
        </p>
      </v-btn>
      <SubRoutes v-if="route.isGroup" :key="route.name" :route="route"/>
    </template>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import SubRoutes from './SubRoutes.vue'
import {vxc} from '@/core/store/store.vuex'
import {routes} from '@/app/routes/routes'

@Component({
  components: {
    SubRoutes,
  },
})
export default class NavDrawer extends Vue {
  navbar = vxc.appNavbar
  routes = routes
}
</script>

<style lang="scss" scoped></style>
