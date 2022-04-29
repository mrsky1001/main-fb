<!--
  - Copyright (©) 12.10.2021, 12:39. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-menu ref="avatarBarRef" offset-y>
    <template #activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" :class="'avatar-bar-btn ' + nav.avatarClass" v-on="on">
        <v-icon v-if="!nav.avatar"> mdi-panda</v-icon>
        <v-avatar v-if="nav.avatar">
          <v-img :src="nav.avatar"/>
        </v-avatar>
      </v-btn>
    </template>

    <v-list>
      <template v-for="route in routerST.avatarRoutes">
        <v-list-item :key="route.name" :to="route.path">
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ route.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {vxc} from '@/core/store/store.vuex'

@Component
export default class AvatarBar extends Vue {
  nav = vxc.appNavbar
  routerST = vxc.router
}
</script>

<style lang="scss" scoped>
.v-avatar {
  min-width: 38px !important;
  width: 38px !important;
  height: auto !important;
}

.avatar-bar-btn {
  margin-right: 5px !important;

  &.active-btn {
    color: #00bd007d !important;
  }
}

@media screen and (min-width: 0px) and (max-width: 959px) {
  .avatar-bar-btn {
    display: none;
  }
}
</style>
