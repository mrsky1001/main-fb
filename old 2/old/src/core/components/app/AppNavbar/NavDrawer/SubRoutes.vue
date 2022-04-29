<!--
  - Copyright (©) 12.10.2021, 12:39. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-menu v-if="!nav.isShowSearch" offset-y class="sub-notes">
    <template #activator="{ on, attrs }">
      <v-btn
        key="routesObj"
        plain
        color="gray"
        active-class="active-btn"
        v-bind="attrs"
        :class="'font-weight-bold ' + nav.activeClass"
        v-on="on"
      >
        <p class="my-label">
          {{ route.text }}
        </p>
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <template v-for="subRoute in routerST.subRoutes(route)">
        <div :key="subRoute.name">
          <hr v-if="subRoute.hasSubLine" class="spacer-hr"/>

          <v-list-item v-if="authST.checkRole(subRoute.role)" class="sublist-item" :to="subRoute.path">
            <v-list-item-icon>
              <v-icon>{{ subRoute.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ subRoute.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </template>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import '../app-nav-bar.scss'
import {vxc} from '@/core/store/store.vuex'
import Component from 'vue-class-component'
import {IRoute} from '@/core/models/interfaces/app/IRoute'
import {Prop} from 'vue-property-decorator'

@Component
export default class SubRoutes extends Vue {
  nav = vxc.appNavbar
  authST = vxc.auth
  routerST = vxc.router

  @Prop() route: IRoute

  // $watch = {
  //     '$route.fullPath'() {},
  // }
}
</script>

<style lang="scss" scoped>
.my-label {
  margin: 0 !important;
}

.sublist-item:hover {
  color: #00bd007d !important;
}
</style>
