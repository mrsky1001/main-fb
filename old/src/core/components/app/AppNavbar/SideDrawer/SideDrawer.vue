<!--
  - Copyright (©) 15.10.2021, 15:43. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
  <v-list nav dense>
    <v-navigation-drawer :value="nav.isShowDrawer" fixed @transitionend="changeDrawer">
      <v-list dense nav class="my-slider">
        <template v-for="route in routerST.routes">
          <SubRoute
            v-if="route.onMainBar && !route.onCenterSidebar"
            :key="'container ' + route.name"
            :route="route"
          />

          <div v-if="route.isGroup" :key="'group of ' + route.name">
            <div v-for="subRoute in routerST.subRoutes(route)" :key="'sub route ' + subRoute.name">
              <SubRoute :route="subRoute"/>
              <div v-if="subRoute.isCenterSidebar">
                <SubRoute
                  v-for="centerRoute in routerST.centerRoutes"
                  :key="'center route ' + centerRoute.name"
                  :route="centerRoute"
                />
              </div>
            </div>
            <div :key="'subline' + route.name">
              <hr class="spacer-hr"/>
            </div>
          </div>
        </template>
        <SubRoute v-for="route in routerST.avatarRoutes" :key="'avatar ' + route.name" :route="route"/>
      </v-list>
    </v-navigation-drawer>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import '../app-nav-bar.scss'
import {vxc} from '@/core/store/store.vuex'
import SubRoute from '@/core/components/app/AppNavbar/common/SubRoute.vue'

@Component({
  components: {SubRoute},
})
export default class SideDrawer extends Vue {
  drawer = 0
  nav = vxc.appNavbar
  routerST = vxc.router

  changeDrawer() {
    if (this.drawer === 3) {
      this.nav.setIsShowDrawer(false)
      this.drawer = 0
    } else {
      this.drawer++
    }
  }
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  width: calc(100% - 48px);
  height: 100vh;
}
</style>
