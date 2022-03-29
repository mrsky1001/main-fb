<!--
  - Copyright (©) 15.10.2021, 14:44. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <div v-if="authST.checkRole(route.role)">
    <hr v-if="route.hasSubLine" class="spacer-hr"/>
    <v-list-item :to="route.path">
      <v-list-item-icon>
        <v-icon>{{ route.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ route.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import {Prop} from 'vue-property-decorator'
import '../app-nav-bar.scss'
import {vxc} from '@/core/store/store.vuex'
import Vue from 'vue'
import Component from 'vue-class-component'
import {IRoute} from '@/core/models/interfaces/app/IRoute'

@Component
export default class SubRoute extends Vue {
  authST = vxc.auth

  @Prop({required: true})
  route: IRoute
}
</script>

<style lang="scss" scoped></style>
